// NovelCraft 工作室 - 重构 AI 写作面板（完整版）
const {
    Plugin, PluginSettingTab, Setting, ItemView, TFile, MarkdownView, Notice, requestUrl, Modal, Menu
} = require('obsidian');
const moment = window.moment;

// 默认设置
const DEFAULT_SETTINGS = {
    apiKey: '',
    apiEndpoint: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-3.5-turbo',
    systemPrompt: '你是一位专业的小说作家，擅长根据上下文和人物设定续写故事。',
    styleTemperature: 0.8,
    narrativeDistance: 0.5,
    sensoryLevel: 0.6,
    styleNotes: '',
    bannedWords: [],
    sessions: [],
    activeSessionId: null,
    advancedMode: false,
    aiModelVariant: 'balanced',
};

const VIEW_TYPE_HUB = 'novelcraft-hub';

// 弹窗
class BranchSelectModal extends Modal {
    constructor(app, branches, onSelect) { super(app); this.branches = branches; this.onSelect = onSelect; }
    onOpen() {
        const { contentEl } = this;
        contentEl.createEl('h3', { text: '请选择一个版本' });
        this.branches.forEach((b, i) => {
            const d = contentEl.createDiv({ cls: 'branch-item' });
            d.createEl('strong', { text: `选项 ${i + 1}` });
            d.createEl('p', { text: b, cls: 'branch-text' });
            d.addEventListener('click', () => { this.onSelect(b); this.close(); });
        });
    }
    onClose() { this.contentEl.empty(); }
}

class NewEntityModal extends Modal {
    constructor(app, onSubmit) { super(app); this.onSubmit = onSubmit; }
    onOpen() {
        const { contentEl } = this;
        contentEl.createEl('h3', { text: '新建圣经实体' });
        const inp = contentEl.createEl('input', { placeholder: '实体名称' });
        const sel = contentEl.createEl('select');
        sel.createEl('option', { text: '角色', value: 'character' });
        sel.createEl('option', { text: '道具', value: 'item' });
        sel.createEl('option', { text: '地点', value: 'location' });
        const btn = contentEl.createEl('button', { text: '创建' });
        btn.addEventListener('click', () => {
            const name = inp.value.trim();
            if (name) { this.onSubmit(name, sel.value); this.close(); }
        });
    }
    onClose() { this.contentEl.empty(); }
}

class FolderSelectModal extends Modal {
    constructor(app, folders, onSelect) { super(app); this.folders = folders; this.onSelect = onSelect; }
    onOpen() {
        const { contentEl } = this;
        contentEl.createEl('h3', { text: '选择文件夹' });
        this.folders.forEach(f => {
            const d = contentEl.createDiv({ cls: 'branch-item' });
            d.setText(f);
            d.addEventListener('click', () => { this.onSelect(f); this.close(); });
        });
    }
    onClose() { this.contentEl.empty(); }
}

// 会话管理器
class ChatSessionManager {
    constructor(plugin) { this.plugin = plugin; }
    getSessions() { return this.plugin.settings.sessions || []; }
    async saveSessions(sessions) { this.plugin.settings.sessions = sessions; await this.plugin.saveSettings(); }
    async createSession(name) {
        const sessions = this.getSessions();
        const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
        const s = { id, name, messages: [], lastActive: Date.now() };
        sessions.push(s);
        await this.saveSessions(sessions);
        return s;
    }
    getSession(id) { return this.getSessions().find(s => s.id === id) || null; }
    async deleteSession(id) {
        let sessions = this.getSessions().filter(s => s.id !== id);
        await this.saveSessions(sessions);
    }
    async addMessage(sessionId, msg) {
        const sessions = this.getSessions();
        const s = sessions.find(x => x.id === sessionId);
        if (!s) return;
        s.messages.push(msg);
        s.lastActive = Date.now();
        await this.saveSessions(sessions);
    }
}

// 预设
const STYLE_PRESETS = [
    { label: '祛 AI 味，番茄剧情，减少描述', prompt: '写作风格：去AI味，强调剧情推进，减少不必要的环境描写，语言口语化。' },
    { label: '细腻文笔，侧重心理', prompt: '写作风格：细腻文笔，注重心理描写和环境氛围渲染。' },
    { label: '快节奏，对话为主', prompt: '写作风格：快节奏，减少描写，突出对话和冲突。' },
    { label: '古典武侠', prompt: '写作风格：古典武侠风，多使用成语和传统句式。' },
    { label: '现代都市冷峻', prompt: '写作风格：冷峻、简洁，多用短句，克制情感。' },
];
const REQUIREMENT_PRESETS = [
    { label: '一键成文，情节连贯', prompt: '写作要求：一键成文，情节连贯，避免突兀转折。' },
    { label: '详细描写，视觉冲击', prompt: '写作要求：加强感官描写，使画面感强烈。' },
    { label: '严格控制字数（500-800字）', prompt: '写作要求：字数控制在500-800字之间。' },
    { label: '留悬念结尾', prompt: '写作要求：在段落结尾处制造悬念，为下一章埋下伏笔。' },
    { label: '对话推动剧情', prompt: '写作要求：以角色对话为主要手段推动剧情发展。' },
];

// 主视图
class NovelCraftHubView extends ItemView {
    constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
        this.currentTab = 'ai';
        this.chapters = [];
        this.ignoredConstraints = new Set();
        this.sessionManager = new ChatSessionManager(plugin);
    }

    getViewType() { return VIEW_TYPE_HUB; }
    getDisplayText() { return 'NovelCraft 工作室'; }
    getIcon() { return 'feather'; }

    async onOpen() {
        const c = this.containerEl.children[1];
        c.empty();
        c.addClass('novelcraft-hub');

        const tabBar = c.createDiv({ cls: 'novelcraft-tab-bar' });
        const tabs = [
            { id: 'ai', text: '💬 AI 对话' },
            { id: 'constraint', text: '🛡️ 关联约束' },
            { id: 'outline', text: '🗂️ 大纲生成' },
            { id: 'bible', text: '📖 故事圣经' },
            { id: 'style', text: '🎚️ 风格控制' },
            { id: 'dashboard', text: '📊 仪表盘' },
            { id: 'banned', text: '🚫 禁词管理' },
        ];
        this.tabBtns = {};
        tabs.forEach(tab => {
            const btn = tabBar.createEl('button', { text: tab.text, cls: 'novelcraft-tab-btn' });
            btn.addEventListener('click', () => this.switchTab(tab.id));
            this.tabBtns[tab.id] = btn;
        });
        this.contentArea = c.createDiv({ cls: 'novelcraft-content' });
        this.switchTab('ai');

        this.registerEvent(this.app.workspace.on('editor-change', () => {
            if (this.currentTab === 'constraint') this.renderConstraintTab();
            if (this.currentTab === 'dashboard') this.renderDashboardTab();
        }));
        this.registerEvent(this.app.workspace.on('active-leaf-change', () => {
            if (this.currentTab === 'constraint') this.renderConstraintTab();
            if (this.currentTab === 'bible') this.renderBibleTab();
            if (this.currentTab === 'dashboard') this.renderDashboardTab();
        }));
    }

    switchTab(id) {
        this.currentTab = id;
        Object.values(this.tabBtns).forEach(b => b.removeClass('active'));
        if (this.tabBtns[id]) this.tabBtns[id].addClass('active');
        this.contentArea.empty();
        switch (id) {
            case 'ai': this.renderAiTab(); break;
            case 'constraint': this.renderConstraintTab(); break;
            case 'outline': this.renderOutlineTab(); break;
            case 'bible': this.renderBibleTab(); break;
            case 'style': this.renderStyleTab(); break;
            case 'dashboard': this.renderDashboardTab(); break;
            case 'banned': this.renderBannedTab(); break;
        }
    }

    // ═══════════ 重构 AI 写作面板 ═══════════
    renderAiTab() {
        const p = this.contentArea;
        p.empty();
        p.addClass('ai-writer-panel');

        // 标题
        const header = p.createDiv({ cls: 'ai-writer-header' });
        header.createEl('h4', { text: 'AI 写作 (一般用于章节正文写作)' });
        const tutorialBtn = header.createEl('button', { text: '📘 新手教程', cls: 'novelcraft-btn ai-tutorial-btn' });
        tutorialBtn.addEventListener('click', () => new Notice('新手教程：在此输入本章剧情细纲，选择写作风格和要求后点击“生成正文”。'));

        // 高级功能
        const advancedRow = p.createDiv({ cls: 'ai-setting-row' });
        new Setting(advancedRow)
            .setName('⚙️ 高级功能')
            .setDesc('开启后可自动注入 Bible 角色、道具、关联关系，提升内容贴合度')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.advancedMode)
                .onChange(async (val) => {
                    this.plugin.settings.advancedMode = val;
                    await this.plugin.saveSettings();
                }));

        // 模型选择
        const modelRow = p.createDiv({ cls: 'ai-setting-row' });
        new Setting(modelRow)
            .setName('🤖 AI 模型')
            .setDesc('选择生成风格侧重')
            .addDropdown(dropdown => dropdown
                .addOption('balanced', '标准版')
                .addOption('delicate', '细腻版')
                .addOption('fast', '快节奏版')
                .setValue(this.plugin.settings.aiModelVariant)
                .onChange(async (val) => {
                    this.plugin.settings.aiModelVariant = val;
                    await this.plugin.saveSettings();
                }));

        // 剧情输入
        const plotSection = p.createDiv({ cls: 'ai-plot-section' });
        plotSection.createEl('label', { text: '📝 本章剧情（必填）' });
        this.plotInput = plotSection.createEl('textarea', {
            placeholder: '在此输入本章细纲、关键情节或待续写的原文…（上限3000字）',
            cls: 'ai-plot-textarea'
        });
        this.plotInput.setAttribute('maxlength', '3000');
        plotSection.createEl('div', { text: '快捷键 Alt+K / Cmd+K 聚焦输入框', cls: 'ai-shortcut-hint' });

        // 写作风格
        const styleSection = p.createDiv({ cls: 'ai-style-section' });
        styleSection.createEl('label', { text: '🎨 写作风格' });
        const styleQuick = styleSection.createDiv({ cls: 'ai-quick-tags' });
        STYLE_PRESETS.forEach(preset => {
            const tag = styleQuick.createEl('button', { text: preset.label, cls: 'ai-quick-btn' });
            tag.addEventListener('click', () => { this.styleCustomInput.value = preset.prompt; });
        });
        this.styleCustomInput = styleSection.createEl('input', { placeholder: '或自定义风格描述…', cls: 'ai-custom-input' });
        const styleMoreRow = styleSection.createDiv({ cls: 'ai-more-row' });
        styleMoreRow.createEl('span', { text: '推荐：细腻版模型 + 温度 0.8', cls: 'ai-hint' });
        const styleMoreBtn = styleMoreRow.createEl('button', { text: '更多预设 ▲', cls: 'ai-more-btn' });
        const styleMoreList = styleSection.createDiv({ cls: 'ai-more-list', style: 'display:none;' });
        STYLE_PRESETS.forEach(p => {
            const item = styleMoreList.createEl('button', { text: p.label, cls: 'ai-more-item' });
            item.addEventListener('click', () => {
                this.styleCustomInput.value = p.prompt;
                styleMoreList.style.display = 'none';
            });
        });
        styleMoreBtn.addEventListener('click', () => {
            styleMoreList.style.display = styleMoreList.style.display === 'none' ? 'block' : 'none';
        });

        // 写作要求
        const reqSection = p.createDiv({ cls: 'ai-requirement-section' });
        reqSection.createEl('label', { text: '📋 写作要求' });
        const reqQuick = reqSection.createDiv({ cls: 'ai-quick-tags' });
        REQUIREMENT_PRESETS.forEach(preset => {
            const tag = reqQuick.createEl('button', { text: preset.label, cls: 'ai-quick-btn' });
            tag.addEventListener('click', () => { this.reqCustomInput.value = preset.prompt; });
        });
        this.reqCustomInput = reqSection.createEl('input', { placeholder: '或自定义要求（如字数、节奏）…', cls: 'ai-custom-input' });
        const reqMoreRow = reqSection.createDiv({ cls: 'ai-more-row' });
        reqMoreRow.createEl('span', { text: '搭配写作风格使用，构成完整提示词', cls: 'ai-hint' });
        const reqMoreBtn = reqMoreRow.createEl('button', { text: '更多预设 ▲', cls: 'ai-more-btn' });
        const reqMoreList = reqSection.createDiv({ cls: 'ai-more-list', style: 'display:none;' });
        REQUIREMENT_PRESETS.forEach(p => {
            const item = reqMoreList.createEl('button', { text: p.label, cls: 'ai-more-item' });
            item.addEventListener('click', () => {
                this.reqCustomInput.value = p.prompt;
                reqMoreList.style.display = 'none';
            });
        });
        reqMoreBtn.addEventListener('click', () => {
            reqMoreList.style.display = reqMoreList.style.display === 'none' ? 'block' : 'none';
        });

        // 生成按钮
        const actionRow = p.createDiv({ cls: 'ai-action-row' });
        const generateBtn = actionRow.createEl('button', { text: '✨ 生成正文', cls: 'novelcraft-btn ai-generate-btn' });
        generateBtn.addEventListener('click', () => this.generateContent());
    }

    async generateContent() {
        const plot = this.plotInput?.value.trim();
        if (!plot) {
            new Notice('请输入本章剧情');
            return;
        }
        if (!this.plugin.settings.apiKey) {
            new Notice('请先配置 API Key');
            return;
        }

        let systemMsg = this.plugin.settings.systemPrompt;
        if (this.plugin.settings.advancedMode) {
            const bibleCtx = this.buildBibleContext();
            if (bibleCtx) systemMsg += '\n\n【世界观与人物设定参考】\n' + bibleCtx;
        }
        const styleText = this.styleCustomInput?.value.trim() || '';
        const reqText = this.reqCustomInput?.value.trim() || '';
        if (styleText) systemMsg += '\n' + styleText;
        if (reqText) systemMsg += '\n' + reqText;

        let temperature = this.plugin.settings.styleTemperature;
        switch (this.plugin.settings.aiModelVariant) {
            case 'delicate': temperature = Math.min(temperature, 0.9); break;
            case 'fast': temperature = Math.max(temperature, 0.7); break;
        }

        const messages = [{ role: 'system', content: systemMsg }, { role: 'user', content: plot }];
        try {
            new Notice('正在生成...');
            const resp = await requestUrl({
                url: this.plugin.settings.apiEndpoint,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.plugin.settings.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ model: this.plugin.settings.model, messages, temperature })
            });
            const aiText = resp.json.choices[0].message.content.trim();
            const av = this.app.workspace.getActiveViewOfType(MarkdownView);
            if (av) {
                av.editor.replaceSelection(aiText);
                new Notice('正文已插入文档');
            } else {
                navigator.clipboard.writeText(aiText);
                new Notice('生成成功，内容已复制到剪贴板');
            }
        } catch (e) {
            new Notice('生成失败: ' + e);
        }
    }

    buildBibleContext() {
        const files = this.app.vault.getMarkdownFiles().filter(f => f.path.startsWith('Bible/'));
        if (files.length === 0) return null;
        let ctx = '';
        files.forEach(f => {
            const fm = this.app.metadataCache.getFileCache(f)?.frontmatter;
            const ent = this.parseEntityFromFrontmatter(fm);
            if (ent) {
                ctx += `- ${ent.type === 'character' ? '角色' : (ent.type === 'item' ? '道具' : '地点')}：${f.basename}`;
                if (ent.relations && ent.relations.length) ctx += ' 关联：' + ent.relations.map(r => `${r.target}(${r.type})`).join(', ');
                ctx += '\n';
            }
        });
        return ctx || null;
    }

    // ═══════════ 关联约束 ═══════════
    renderConstraintTab() {
        this.contentArea.createEl('h4', { text: '🔒 关联约束检查' });
        this.constraintStatusEl = this.contentArea.createDiv({ cls: 'constraint-status' });
        this.updateConstraintDisplay();
    }

    parseEntityFromFrontmatter(fm) {
        if (!fm) return null;
        let type = null, relations = [];
        if (fm.type) {
            type = fm.type;
            if (type === '角色') type = 'character';
            else if (type === '道具') type = 'item';
            else if (type === '地点') type = 'location';
        }
        if (fm.relations && Array.isArray(fm.relations)) relations = fm.relations;
        if ((!type || relations.length === 0) && fm.tags && Array.isArray(fm.tags)) {
            const tags = fm.tags;
            const typeTag = tags[0];
            if (['角色', '道具', '地点', 'character', 'item', 'location'].includes(typeTag)) {
                type = typeTag === '角色' ? 'character' : typeTag === '道具' ? 'item' : typeTag === '地点' ? 'location' : typeTag;
            }
            const rest = type ? tags.slice(1) : tags;
            for (let i = 0; i < rest.length; i += 2) {
                if (i + 1 < rest.length) relations.push({ target: rest[i], type: rest[i + 1] });
            }
        }
        return type ? { type, relations } : null;
    }

    updateConstraintDisplay() {
        if (!this.constraintStatusEl) return;
        const av = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!av) { this.constraintStatusEl.innerHTML = '<div class="constraint-alert">未打开笔记</div>'; return; }
        const text = av.editor.getValue();
        const files = this.app.vault.getMarkdownFiles().filter(f => f.path.startsWith('Bible/'));
        const entMap = new Map();
        for (const f of files) {
            const fm = this.app.metadataCache.getFileCache(f)?.frontmatter;
            const e = this.parseEntityFromFrontmatter(fm);
            if (e) entMap.set(f.basename, { type: e.type, relations: e.relations });
        }
        const mentioned = [];
        for (const [name, data] of entMap) {
            if (text.includes(name)) mentioned.push({ name, ...data });
        }
        if (!mentioned.length) { this.constraintStatusEl.innerHTML = '<div class="constraint-alert">📭 正文未提及任何圣经实体</div>'; return; }
        let ok = [], warn = [];
        for (const ent of mentioned) {
            for (const rel of ent.relations) {
                if (!rel.target) continue;
                const id = `${ent.name}->${rel.target}`;
                if (this.ignoredConstraints.has(id)) continue;
                if (text.includes(rel.target)) ok.push({ source: ent.name, target: rel.target, relation: rel.type, id });
                else warn.push({ source: ent.name, target: rel.target, relation: rel.type, id });
            }
        }
        let html = '';
        if (ok.length) {
            html += '<div class="constraint-section"><span class="constraint-ok">✅ 已满足</span>';
            ok.forEach(i => html += `<div class="constraint-item ok">${i.source} ↔ ${i.target} (${i.relation})</div>`);
            html += '</div>';
        }
        if (warn.length) {
            html += '<div class="constraint-section"><span class="constraint-warning">⚠️ 缺失</span>';
            warn.forEach(i => html += `<div class="constraint-item warning">${i.source} 需 ${i.target} (${i.relation}) <button class="ignore-btn" data-id="${i.id}">忽略</button></div>`);
            html += '</div>';
        }
        if (!ok.length && !warn.length) html = '<div class="constraint-alert">✅ 所有关联已满足（或已忽略）</div>';
        this.constraintStatusEl.innerHTML = html;

        this.constraintStatusEl.querySelectorAll('.ignore-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                this.ignoredConstraints.add(id);
                this.updateConstraintDisplay();
            });
        });
    }

    // ═══════════ 大纲生成 ═══════════
    renderOutlineTab() {
        this.contentArea.createEl('h4', { text: '🗂️ 大纲生成器' });
        const topic = this.contentArea.createEl('textarea', { placeholder: '故事主题或一句话梗概…', rows: 2, cls: 'outline-topic-input' });
        const row = this.contentArea.createDiv({ cls: 'novelcraft-input-row' });
        const genBtn = row.createEl('button', { text: '生成大纲', cls: 'novelcraft-btn' });
        const loadBtn = row.createEl('button', { text: '📂 载入章节', cls: 'novelcraft-btn' });
        const saveBtn = row.createEl('button', { text: '💾 保存笔记', cls: 'novelcraft-btn' });
        const sceneBtn = row.createEl('button', { text: '📄 创建章节', cls: 'novelcraft-btn' });
        const status = this.contentArea.createDiv({ cls: 'outline-status' });
        const outlineContainer = this.contentArea.createDiv({ cls: 'outline-list' });
        saveBtn.disabled = sceneBtn.disabled = true;

        genBtn.addEventListener('click', async () => {
            const t = topic.value.trim();
            if (!t) { new Notice('输入主题'); return; }
            if (!this.plugin.settings.apiKey) { new Notice('配置 API Key'); return; }
            status.setText('生成中…'); genBtn.disabled = true;
            const style = this.plugin.getStylePrompt();
            const sys = `你是专业大纲策划师。${style} 返回 JSON：{"chapters":[{"title":"标题","description":"摘要"}]}`;
            try {
                const resp = await requestUrl({
                    url: this.plugin.settings.apiEndpoint, method: 'POST',
                    headers: { 'Authorization': `Bearer ${this.plugin.settings.apiKey}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify({ model: this.plugin.settings.model, messages: [{ role: 'system', content: sys }, { role: 'user', content: t }], temperature: this.plugin.settings.styleTemperature })
                });
                let reply = resp.json.choices[0].message.content.trim();
                let chs = [];
                try {
                    const j = JSON.parse(reply);
                    if (j.chapters) chs = j.chapters; else if (Array.isArray(j)) chs = j;
                } catch {
                    reply.split('\n').filter(l => l.match(/^\d+[\.\、]/)).forEach(l => {
                        const p = l.replace(/^\d+[\.\、]\s*/, '').split(/[：:]/);
                        chs.push({ title: p[0]?.trim() || '未命名', description: p[1]?.trim() || '' });
                    });
                }
                this.chapters = chs;
                this.renderChapters(outlineContainer);
                status.setText('完成');
                saveBtn.disabled = sceneBtn.disabled = chs.length === 0;
            } catch (e) { status.setText('失败: ' + e); new Notice('大纲生成失败'); }
            finally { genBtn.disabled = false; }
        });

        loadBtn.addEventListener('click', async () => {
            const folders = this.app.vault.getAllFolders ? this.app.vault.getAllFolders() : [];
            const folderPaths = folders.map(f => f.path).filter(p => p !== '/');
            if (folderPaths.length === 0) { new Notice('暂无文件夹'); return; }
            new FolderSelectModal(this.app, folderPaths, async (folderPath) => {
                const files = this.app.vault.getMarkdownFiles().filter(f => f.path.startsWith(folderPath + '/'));
                if (files.length === 0) { new Notice('该文件夹无md文件'); return; }
                this.chapters = files.map(f => ({ title: f.basename, description: '' }));
                this.renderChapters(outlineContainer);
                status.setText(`已载入 ${files.length} 章`);
                saveBtn.disabled = sceneBtn.disabled = files.length === 0;
            }).open();
        });

        saveBtn.addEventListener('click', async () => {
            if (!this.chapters.length) return;
            let md = `# 大纲\n\n${moment().format('YYYY-MM-DD HH:mm')}\n\n`;
            this.chapters.forEach((c, i) => md += `## 第${i + 1}章 ${c.title}\n\n${c.description}\n\n`);
            const fn = `大纲-${moment().format('YYYYMMDD-HHmmss')}.md`;
            await this.app.vault.create(fn, md);
            new Notice('已保存 ' + fn);
        });

        sceneBtn.addEventListener('click', async () => {
            for (let i = 0; i < this.chapters.length; i++) {
                const c = this.chapters[i];
                const safe = c.title.replace(/[\\\/\:\*\?\"\<\>\|]/g, '');
                await this.app.vault.create(`第${i + 1}章 ${safe}.md`, `# 第${i + 1}章 ${c.title}\n\n${c.description}\n\n## 场景\n\n`);
            }
            new Notice('章节笔记已创建');
        });
    }

    moveChapter(i, d) {
        const n = i + d;
        if (n < 0 || n >= this.chapters.length) return;
        [this.chapters[i], this.chapters[n]] = [this.chapters[n], this.chapters[i]];
    }

    renderChapters(cnt) {
        cnt.empty();
        if (!this.chapters.length) { cnt.createDiv({ text: '未生成章节', cls: 'outline-empty' }); return; }
        this.chapters.forEach((c, i) => {
            const card = cnt.createDiv({ cls: 'outline-card' });
            card.createEl('div', { text: `第${i + 1}章`, cls: 'outline-card-index' });
            const ti = card.createEl('input', { type: 'text', value: c.title, cls: 'outline-card-title' });
            ti.addEventListener('change', () => { this.chapters[i].title = ti.value; });
            const di = card.createEl('textarea', { text: c.description, cls: 'outline-card-desc' });
            di.addEventListener('change', () => { this.chapters[i].description = di.value; });
            const up = card.createEl('button', { text: '▲', cls: 'outline-move-btn' });
            const dn = card.createEl('button', { text: '▼', cls: 'outline-move-btn' });
            up.addEventListener('click', () => { this.moveChapter(i, -1); this.renderChapters(cnt); });
            dn.addEventListener('click', () => { this.moveChapter(i, 1); this.renderChapters(cnt); });
        });
    }

    // ═══════════ 故事圣经 ═══════════
    renderBibleTab() {
        this.contentArea.createEl('h4', { text: '📖 故事圣经' });
        const row = this.contentArea.createDiv({ style: 'display:flex;gap:8px;margin-bottom:12px;' });
        const newB = row.createEl('button', { text: '➕ 新建实体', cls: 'novelcraft-btn' });
        const refB = row.createEl('button', { text: '🔄 刷新', cls: 'novelcraft-btn' });
        const exportB = row.createEl('button', { text: '📤 导出', cls: 'novelcraft-btn' });
        this.bibleListContainer = this.contentArea.createDiv({ cls: 'bible-list' });

        const load = () => {
            this.bibleListContainer.empty();
            const files = this.app.vault.getMarkdownFiles().filter(f => f.path.startsWith('Bible/'));
            if (!files.length) { this.bibleListContainer.createDiv({ text: '尚无圣经实体', cls: 'bible-empty' }); return; }
            files.forEach(f => {
                const fm = this.app.metadataCache.getFileCache(f)?.frontmatter;
                const ent = this.parseEntityFromFrontmatter(fm);
                const name = f.basename;
                const type = ent ? ent.type : '?';
                const rels = ent ? ent.relations : [];
                const card = this.bibleListContainer.createDiv({ cls: 'bible-card' });
                const hd = card.createDiv({ cls: 'bible-card-header' });
                const icon = type === 'character' ? '👤' : (type === 'item' ? '⚔️' : '🏞️');
                hd.createSpan({ text: icon + ' ' + name, cls: 'bible-card-title' });
                hd.createSpan({ text: type, cls: 'bible-card-type' });
                if (rels.length) {
                    const rd = card.createDiv({ cls: 'bible-card-relations' });
                    rd.createEl('small', { text: '关联：' });
                    rels.forEach(r => rd.createEl('span', { text: `${r.target}(${r.type})`, cls: 'bible-relation-tag' }));
                }
                card.addEventListener('dblclick', () => {
                    const tf = this.app.vault.getAbstractFileByPath(f.path);
                    if (tf instanceof TFile) this.app.workspace.getLeaf().openFile(tf);
                });
            });
        };
        load();
        refB.addEventListener('click', load);
        newB.addEventListener('click', () => {
            new NewEntityModal(this.app, async (name, type) => {
                const safe = name.replace(/[\\\/\:\*\?\"\<\>\|]/g, '');
                await this.app.vault.create(`Bible/${safe}.md`, `---\ntype: ${type}\nrelations:\n---\n\n# ${name}\n`);
                new Notice(`已创建 ${name}`);
                load();
            }).open();
        });
        exportB.addEventListener('click', async () => {
            const files = this.app.vault.getMarkdownFiles().filter(f => f.path.startsWith('Bible/'));
            let content = '';
            for (const f of files) content += await this.app.vault.read(f) + '\n---\n';
            const ef = `Bible备份-${moment().format('YYYYMMDD-HHmmss')}.md`;
            await this.app.vault.create(ef, content);
            new Notice('已导出为 ' + ef);
        });
    }

    // ═══════════ 风格控制 ═══════════
    renderStyleTab() {
        const s = this.plugin.settings;
        this.contentArea.createEl('h4', { text: '🎚️ 风格控制' });
        this.contentArea.createDiv({ text: '调整参数影响 AI 输出。修改自动保存。', cls: 'setting-item-description' });
        new Setting(this.contentArea).setName('创意严谨度').setDesc('低=严谨，高=奔放')
            .addSlider(sl => sl.setLimits(0, 2, 0.1).setValue(s.styleTemperature).onChange(async v => { s.styleTemperature = v; await this.plugin.saveSettings(); }));
        new Setting(this.contentArea).setName('叙事距离').setDesc('0=远距视角，1=内心独白')
            .addSlider(sl => sl.setLimits(0, 1, 0.1).setValue(s.narrativeDistance).onChange(async v => { s.narrativeDistance = v; await this.plugin.saveSettings(); }));
        new Setting(this.contentArea).setName('感官描写强度').setDesc('增加或减少感官细节')
            .addSlider(sl => sl.setLimits(0, 1, 0.1).setValue(s.sensoryLevel).onChange(async v => { s.sensoryLevel = v; await this.plugin.saveSettings(); }));
        new Setting(this.contentArea).setName('风格备注').setDesc('自由描述，如"冷峻、简洁"')
            .addTextArea(tx => tx.setPlaceholder('多用短句，避免副词...').setValue(s.styleNotes).onChange(async v => { s.styleNotes = v; await this.plugin.saveSettings(); }));
        const randBtn = this.contentArea.createEl('button', { text: '🎲 随机灵感', cls: 'novelcraft-btn' });
        randBtn.addEventListener('click', async () => {
            s.styleTemperature = Math.round((Math.random() * 2) * 10) / 10;
            s.narrativeDistance = Math.round(Math.random() * 10) / 10;
            s.sensoryLevel = Math.round(Math.random() * 10) / 10;
            await this.plugin.saveSettings();
            this.renderStyleTab();
            new Notice('风格参数已随机化');
        });
    }

    // ═══════════ 仪表盘 ═══════════
    renderDashboardTab() {
        this.contentArea.createEl('h4', { text: '📊 项目仪表盘' });
        const stats = this.getProjectStats();
        const grid = this.contentArea.createDiv({ cls: 'dashboard-grid' });
        const addCard = (label, value) => {
            const c = grid.createDiv({ cls: 'dashboard-card' });
            c.createEl('div', { text: label, cls: 'dashboard-label' });
            c.createEl('div', { text: value, cls: 'dashboard-value' });
        };
        addCard('📝 总字数', stats.totalWords.toLocaleString());
        addCard('📑 章节数', stats.chapterCount.toString());
        addCard('🧩 圣经实体', stats.entityCount.toString());
        addCard('🔮 未回收伏笔', stats.unresolvedForeshadowing.toString());
        if (stats.currentFileWords !== null) addCard('📄 当前章节字数', stats.currentFileWords.toLocaleString());
    }

    getProjectStats() {
        const files = this.app.vault.getMarkdownFiles();
        const chapterFiles = files.filter(f => !f.path.startsWith('Bible/') && !f.path.includes('大纲'));
        const totalWords = chapterFiles.reduce((s, f) => s + (this.app.metadataCache.getFileCache(f)?.sections?.reduce((a, sec) => a + (sec.end - sec.start), 0) || 0), 0);
        const chapterCount = chapterFiles.length;
        const entityCount = files.filter(f => f.path.startsWith('Bible/')).length;
        let unresolved = 0;
        files.forEach(f => {
            const c = this.app.metadataCache.getFileCache(f);
            if (c?.tags) unresolved += c.tags.filter(t => t.tag === '#伏笔/未回收' || t.tag === '#伏笔').length;
            if (c?.frontmatter?.foreshadowing) unresolved += c.frontmatter.foreshadowing.filter(v => !v.resolved).length;
        });
        let current = null;
        const av = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (av) current = av.editor.getValue().length;
        return { totalWords, chapterCount, entityCount, unresolvedForeshadowing: unresolved, currentFileWords: current };
    }

    // ═══════════ 禁词管理 ═══════════
    renderBannedTab() {
        const s = this.plugin.settings;
        this.contentArea.createEl('h4', { text: '🚫 禁词管理' });
        this.contentArea.createDiv({ text: '添加不想出现的词语，右键可检查禁用词。', cls: 'setting-item-description' });
        const addRow = this.contentArea.createDiv({ cls: 'novelcraft-input-row' });
        const inp = addRow.createEl('input', { placeholder: '输入禁词' });
        const addBtn = addRow.createEl('button', { text: '添加', cls: 'novelcraft-btn' });
        const list = this.contentArea.createDiv({ cls: 'banned-list' });
        const renderWords = () => {
            list.empty();
            if (!s.bannedWords.length) list.createDiv({ text: '暂无禁词', cls: 'bible-empty' });
            s.bannedWords.forEach((w, i) => {
                const item = list.createDiv({ cls: 'banned-item' });
                item.createSpan({ text: w, cls: 'banned-word' });
                const del = item.createEl('button', { text: '✕', cls: 'banned-delete-btn' });
                del.addEventListener('click', async () => {
                    s.bannedWords.splice(i, 1);
                    await this.plugin.saveSettings();
                    renderWords();
                });
            });
        };
        renderWords();
        addBtn.addEventListener('click', async () => {
            const w = inp.value.trim();
            if (!w) return;
            if (s.bannedWords.includes(w)) { new Notice('已存在'); return; }
            s.bannedWords.push(w);
            await this.plugin.saveSettings();
            inp.value = '';
            renderWords();
        });
    }
}

// 设置面板
class NovelCraftSettingTab extends PluginSettingTab {
    constructor(app, plugin) { super(app, plugin); this.plugin = plugin; }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        new Setting(containerEl).setName('API Key').addText(t => t.setPlaceholder('sk-...').setValue(this.plugin.settings.apiKey).onChange(async v => { this.plugin.settings.apiKey = v; await this.plugin.saveSettings(); }));
        new Setting(containerEl).setName('API 端点').addText(t => t.setPlaceholder(DEFAULT_SETTINGS.apiEndpoint).setValue(this.plugin.settings.apiEndpoint).onChange(async v => { this.plugin.settings.apiEndpoint = v; await this.plugin.saveSettings(); }));
        new Setting(containerEl).setName('模型').addText(t => t.setValue(this.plugin.settings.model).onChange(async v => { this.plugin.settings.model = v; await this.plugin.saveSettings(); }));
        new Setting(containerEl).setName('系统提示词').addTextArea(t => t.setValue(this.plugin.settings.systemPrompt).onChange(async v => { this.plugin.settings.systemPrompt = v; await this.plugin.saveSettings(); }));
    }
}

// 主插件
class NovelCraftPlugin extends Plugin {
    async onload() {
        await this.loadSettings();
        this.registerView(VIEW_TYPE_HUB, (leaf) => new NovelCraftHubView(leaf, this));
        this.addCommand({ id: 'open-hub', name: '打开 NovelCraft 工作室', callback: () => this.activateHub() });
        this.addCommand({ id: 'generate-canvas', name: '生成人物关系画布', callback: () => this.generateCanvas() });
        this.addCommand({ id: 'check-banned', name: '检查当前笔记禁用词', callback: () => this.checkBannedWords() });

        this.registerEvent(this.app.workspace.on('editor-menu', (menu, editor, view) => {
            const sel = editor.getSelection();
            if (!sel || sel.trim().length === 0) return;
            menu.addItem(item => item.setTitle('🤖 AI 续写（三选一）').setIcon('pencil').onClick(async () => { await this.aiBranchAction(editor, sel, '续写'); }));
            menu.addItem(item => item.setTitle('✂️ AI 改写这段').setIcon('scissors').onClick(async () => { await this.aiBranchAction(editor, sel, '改写'); }));
            menu.addItem(item => item.setTitle('🧩 AI 生成伏笔').setIcon('lightbulb').onClick(async () => { await this.generateForeshadowing(editor, sel); }));
        }));

        this.addSettingTab(new NovelCraftSettingTab(this.app, this));
        this.activateHub();
    }

    async aiBranchAction(editor, ctx, type) {
        if (!this.settings.apiKey) { new Notice('请配置 API Key'); return; }
        const style = this.getStylePrompt();
        const act = type === '续写' ? '续写，给三个走向（---分隔）' : '改写为三个版本（---分隔）';
        const msgs = [{ role: 'system', content: `${this.settings.systemPrompt} ${style} ${act}` }, { role: 'user', content: ctx }];
        try {
            const resp = await requestUrl({
                url: this.settings.apiEndpoint, method: 'POST',
                headers: { 'Authorization': `Bearer ${this.settings.apiKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ model: this.settings.model, messages: msgs, temperature: this.settings.styleTemperature })
            });
            let reply = resp.json.choices[0].message.content.trim();
            let branches = reply.split(/---|\n\n## /).filter(s => s.trim().length > 10);
            if (branches.length < 2) branches = [reply];
            new BranchSelectModal(this.app, branches.slice(0, 3), sel => editor.replaceSelection(sel)).open();
        } catch (e) { new Notice('AI 请求失败: ' + e); }
    }

    async generateForeshadowing(editor, ctx) {
        if (!this.settings.apiKey) { new Notice('请配置 API Key'); return; }
        const style = this.getStylePrompt();
        const sys = `${this.settings.systemPrompt} ${style} 请根据上下文生成一个可埋设的伏笔，直接返回内容，不要说明。`;
        try {
            const resp = await requestUrl({
                url: this.settings.apiEndpoint, method: 'POST',
                headers: { 'Authorization': `Bearer ${this.settings.apiKey}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ model: this.settings.model, messages: [{ role: 'system', content: sys }, { role: 'user', content: ctx }], temperature: 0.7 })
            });
            const v = resp.json.choices[0].message.content.trim();
            editor.replaceSelection(ctx + '\n\n<!-- 伏笔：' + v + ' -->');
            new Notice('伏笔已插入');
        } catch (e) { new Notice('生成失败: ' + e); }
    }

    checkBannedWords() {
        const words = this.settings.bannedWords;
        if (!words || words.length === 0) { new Notice('没有设定任何禁词'); return; }
        const av = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!av) { new Notice('没有打开的笔记'); return; }
        const text = av.editor.getValue();
        const found = {};
        words.forEach(w => { const c = (text.match(new RegExp(w, 'g')) || []).length; if (c) found[w] = c; });
        if (Object.keys(found).length === 0) { new Notice('✅ 未发现禁用词'); return; }
        let msg = '发现禁用词：\n';
        for (const [w, c] of Object.entries(found)) msg += `• ${w} (${c}次)\n`;
        new Notice(msg, 8000);
    }

    getStylePrompt() {
        const s = this.settings;
        let st = s.styleNotes ? `风格要求：${s.styleNotes}。` : '';
        st += s.styleTemperature < 0.5 ? '严谨、逻辑紧密' : s.styleTemperature > 1.2 ? '大胆、比喻新颖' : '创意适度';
        st += '。';
        if (s.narrativeDistance < 0.3) st += '远距客观视角。';
        else if (s.narrativeDistance > 0.7) st += '深入角色内心。';
        if (s.sensoryLevel > 0.7) st += '丰富感官描写。';
        else if (s.sensoryLevel < 0.3) st += '减少感官描写。';
        return st;
    }

    activateHub() {
        const { workspace } = this.app;
        let leaf = workspace.getLeavesOfType(VIEW_TYPE_HUB)[0];
        if (!leaf) { leaf = workspace.getRightLeaf(false); leaf.setViewState({ type: VIEW_TYPE_HUB, active: true }); }
        workspace.revealLeaf(leaf);
    }

    async generateCanvas() {
        const files = this.app.vault.getMarkdownFiles().filter(f => f.path.startsWith('Bible/'));
        if (!files.length) { new Notice('未找到 Bible 文件夹'); return; }
        const hub = this.app.workspace.getLeavesOfType(VIEW_TYPE_HUB)[0]?.view;
        const parser = hub instanceof NovelCraftHubView ? hub.parseEntityFromFrontmatter.bind(hub) : (fm => fm?.type ? { type: fm.type, relations: fm.relations || [] } : null);
        const nodes = [], edges = [], nMap = new Map();
        for (const f of files) {
            const fm = this.app.metadataCache.getFileCache(f)?.frontmatter;
            const e = parser(fm); const type = e?.type || 'character';
            nMap.set(f.basename, f.path);
            let col = '1'; if (type === 'character') col = '5'; else if (type === 'item') col = '4'; else if (type === 'location') col = '2';
            nodes.push({ id: f.path, type: 'text', text: f.basename, x: Math.random() * 800, y: Math.random() * 600, width: 150, height: 60, color: col });
        }
        for (const f of files) {
            const fm = this.app.metadataCache.getFileCache(f)?.frontmatter;
            const e = parser(fm); if (!e) continue;
            for (const r of e.relations) {
                const to = nMap.get(r.target); if (!to) continue;
                edges.push({ id: `${f.path}-${to}-${Date.now()}`, fromNode: f.path, toNode: to, label: r.type, fromSide: 'right', toSide: 'left' });
            }
        }
        const cf = `关系图-${moment().format('YYYYMMDD-HHmmss')}.canvas`;
        await this.app.vault.create(cf, JSON.stringify({ nodes, edges }, null, 2));
        const tf = this.app.vault.getAbstractFileByPath(cf);
        if (tf instanceof TFile) await this.app.workspace.getLeaf(true).openFile(tf);
        new Notice('✅ 人物关系画布已生成');
    }

    async loadSettings() { this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData()); }
    async saveSettings() { await this.saveData(this.settings); }
}

module.exports = NovelCraftPlugin;