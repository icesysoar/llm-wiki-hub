# 📖 NovelCraft AI 工作室

> 专为小说创作者打造的 Obsidian AI 辅助插件 —— 集 AI 续写、大纲生成、故事圣经、关联约束、风格控制、仪表盘与禁词管理于一体，完美融入 Obsidian 主题。

!\[Obsidian](https://img.shields.io/badge/Obsidian-%23483699.svg?style=for-the-badge\&logo=obsidian\&logoColor=white)
!\[License](https://img.shields.io/badge/license-MIT-blue.svg)
!\[Version](https://img.shields.io/badge/version-0.7.0-blue)

\---

## ✨ 功能一览

|模块|核心能力|
|-|-|
|💬 **AI 对话**|选中正文续写 / 改写，风格受滑块实时控制，上下文感知|
|🛡️ **关联约束**|实时扫描正文提及的圣经实体，检测关联是否合规（绿色✅/黄色⚠️），支持忽略|
|🗂️ **大纲生成**|输入主题 → AI 生成章节大纲，拖拽排序，一键保存笔记或批量创建章节文件，支持从文件夹载入已有章节|
|📖 **故事圣经**|浏览、双击编辑 Bible 实体（角色/道具/地点），新建实体，导出备份|
|🎚️ **风格控制**|滑块调节创意严谨度、叙事距离、感官描写强度，自由备注，随机灵感按钮|
|📊 **仪表盘**|实时统计总字数、章节数、圣经实体数、未回收伏笔数、当前章节字数|
|🚫 **禁词管理**|添加禁用词汇，右键或命令检查当前笔记中出现次数，防止俗套|
|🖱️ **右键菜单**|AI 续写（三选一弹窗）+ AI 改写 + AI 生成伏笔，无需离开编辑区|
|🔗 **人物关系画布**|一键生成 Obsidian Canvas 文件，所有 Bible 实体及其关系图形化展示|

### 🎨 视觉设计

* **macOS 风格**，毛玻璃标签栏，胶囊式激活按钮，柔和阴影与大圆角
* **深度适配 Obsidian 所有主题**（浅色 / 深色 / 第三方），全面使用原生 CSS 变量

\---

## 📦 安装

### 手动安装

1. 下载本仓库最新版本的 `main.js`、`manifest.json` 和 `styles.css`
2. 将它们放入 Obsidian 库的插件目录：  
`\\\[你的vault]/.obsidian/plugins/novelcraft/`
3. 重启 Obsidian，在 `设置 → 第三方插件` 中启用 **NovelCraft AI**

### 使用 BRAT 安装（测试版）

1. 安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件
2. 添加本仓库的 URL：`https://github.com/你的用户名/novelcraft-obsidian`
3. 启用后自动更新

> 注意：目前尚未发布到社区插件市场，请使用手动安装。

\---

## ⚙️ 配置

1. 在 Obsidian 设置 → **NovelCraft AI** 中填入你的 **API Key**（OpenAI / 兼容接口）
2. 可选修改 API 端点、模型名称和系统提示词
3. 其他所有设置（风格、禁词等）均可在工作室面板内直接操作

\---

## 🚀 使用指南

### 启动工作室

插件加载后，**右侧边栏**会自动打开 **NovelCraft 工作室** 面板。  
也可通过命令面板 (`Ctrl+P`) 搜索 `打开 NovelCraft 工作室`。

### 七个标签页切换

点击顶部的胶囊按钮即可在以下功能间切换：

* `AI 对话`
* `关联约束`
* `大纲生成`
* `故事圣经`
* `风格控制`
* `仪表盘`
* `禁词管理`

### 编辑器集成

选中任意文本后右键，你将看到：

* 🤖 **AI 续写（三选一）**
* ✂️ **AI 改写这段**
* 🧩 **AI 生成伏笔**

选择后，AI 会生成三个版本以弹窗让您选择；按 `1` / `2` / `3` 或点击卡片即可替换原文。

### 准备工作：Bible 文件夹

为了使用 **关联约束**、**故事圣经** 和 **人物关系画布**，请先在库根目录创建 `Bible` 文件夹，并添加实体笔记。

**实体笔记示例（沈夜.md）**：

```yaml
---
type: character
relations:
  - target: "脉冲刃"
    type: "持有"
  - target: "黎星"
    type: "搭档"
---
# 沈夜
主角，神经接口修理师。


