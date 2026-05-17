# LLM Wiki Hub 执行文档（v4.2.1 完整版）

> **铁律**：执行 AI 只读规则，规则修改由用户显式触发的编辑 AI 完成  
> **设计原则**：极简根目录、系统辅助文件集中管理、涌现作为顶级知识产出、完全依赖 Git 做版本控制

---

## 目录

1. [核心原则](#零核心原则)
2. [目录结构（最终极简版）](#一目录结构最终极简版)
3. [核心流程](#二核心流程)
4. [命令列表](#三命令列表)
5. [YAML 规范](#四yaml-规范)
6. [健康度指标](#五健康度指标)
7. [边界情况处理](#六边界情况处理)
8. [配置参数](#七配置参数claudejson)
9. [初始化检查清单](#八初始化检查清单)
10. [规则文件完整内容](#九规则文件完整内容)
11. [备份与恢复（Git 方式）](#十备份与恢复git-方式)
12. [版本升级](#十一版本升级)

---

## 零、核心原则

### 0.1 规则不可变性原则（铁律）

| 角色 | 允许操作 | 禁止操作 |
|------|----------|----------|
| **执行 AI**（日常对话） | 读取 `rules/`、`.claude.json`、执行命令（compile/emerge/query 等）、修改 `wiki/` 下的编译产物（概念页/实体页/对比页/索引/日志）、修改 `emergence/` 下的涌现笔记 | 修改任何规则/配置文件；修改 `_system/_templates/` 及子库配置；修改 `raw/` 内容（仅可改 status 字段）；修改 `hub-log.md` 或子库 `log.md` 的历史记录（仅可追加）；自行修复 BUG（必须汇报） |
| **规则编辑 AI**（用户显式召唤） | 修改规则/配置，修改前展示 diff 并获确认 | 执行分拣、编译等日常命令；修改 `wiki/`、`emergence/`、`output/` 下的业务文件；修改铁律部分 |

### 0.2 AI 模式切换与操作范围

**执行模式**（默认）：
- ✅ 可以：执行 compile、emerge、query 等命令
- ✅ 可以：生成/修改 `wiki/` 下的编译产物（概念页、实体页、对比页、索引、日志）
- ✅ 可以：生成/修改 `emergence/` 下的涌现笔记
- ✅ 可以：修改 `output/` 下的项目文件（用户授权后）
- ❌ 不可以：修改 `rules/`、`.claude.json`、`_system/_templates/`
- ❌ 不可以：修改任何子库的 `.claude.json` 或 `rules/local.md`
- ❌ 不可以：修改 `raw/` 内容（仅可改 YAML status 字段）
- ❌ 不可以：修改 `hub-log.md` 或子库 `log.md` 的**历史记录**（仅可追加新日志）
- ❌ 不可以：自行修复 BUG（必须汇报，等待用户指示）

**编辑模式**：
- 触发：用户说"进入编辑模式"或"切换成编辑模式"
- ✅ 可以：修改 `rules/` 下的规则文件
- ✅ 可以：修改 `.claude.json` 配置
- ✅ 可以：修改子库的 `.claude.json` 或 `rules/local.md`
- ❌ 不可以：执行 compile、emerge、query 等日常命令
- ❌ 不可以：修改 `wiki/`、`emergence/`、`output/` 下的业务文件
- ❌ 不可以：修改铁律部分（0.1 规则不可变性原则）
- 流程：展示 diff → 用户确认"是" → 执行修改 → 自动切回执行模式

### 0.3 BUG 处理（执行 AI）
发现 BUG → 立即停止 → 汇报（问题/位置/影响/建议）→ 提供选项（忽略/编辑模式修复/记录）→ 等待指示 → **不得自行修复**

---

## 一、目录结构（最终极简版）

根目录 **8 个顶层项**（5 个业务目录 + 1 个系统目录 + 3 个文件）：

```
我的知识库/
│
├── CLAUDE.md                       ← 大库速查（手动）
├── AGENTS.md                       ← AI 行为准则（手动）
├── .claude.json                    ← 配置（AI 只读）
├── _hub-log.md                     ← 操作日志（自动）
│
├── raw/                            ← 📥 收集箱（手动）
├── rules/                          ← 📋 规则目录（手动，AI 只读）
├── wiki/                           ← 📚 子库容器（自动）
├── output/                         ← 📤 项目空间（手动）
├── emergence/                      ← 💡 涌现笔记（自动，顶级知识产出）
│
└── _system/                        ← 🛠️ 系统辅助目录（自动，集中存放）
    ├── _trash/                     ← 回收站（30天清理）
    ├── _backups/                   ← 备份存档（Git 自动生成，无需手动）
    ├── _temp/                      ← 临时文件（事务写入，自动清理）
    ├── _hub-health/                ← 大库健康报告存档
    └── _templates/                 ← 子库模板（create-sub 时复制）
```

**各目录职责**：

| 目录 | 用途 | 创建方式 | AI 写权限 |
|------|------|----------|-----------|
| `raw/` | 收集箱，用户投入待分拣文件 | 手动 | 移动文件（写） |
| `rules/` | 规则文件（4个） | 手动 | 只读（执行 AI） |
| `wiki/` | 子库及编译产物 | 自动 | 读写 |
| `output/` | 用户项目空间 | 手动 | 只读 |
| `emergence/` | 涌现笔记 | 自动 | 读写（写入新笔记） |
| `_system/` | 系统辅助 | 自动 | 读写（自动管理内部） |

**说明**：
- 分拣后文件从 `raw/` **移动**到 `wiki/子库/raw/`，`raw/` 不保留。
- 涌现笔记独立于子库，作为跨库创造性产出的顶级目录。
- 所有系统辅助文件（回收站、备份、临时、报告、模板）统一在 `_system/` 下，根目录保持清爽。
- 模板目录 `_system/_templates/` 受保护，执行 AI 不得修改。

---

## 二、核心流程

### 2.1 自动分拣
扫描 `raw/` → **分拣预处理**（清理旧YAML字段、清除正文双链、标准化YAML为v4.2规范）→ 匹配子库（精确>70%直接移；接近30-70%询问；无法匹配标记 pending；多匹配≤3询问，>3移入 `_system/_trash/pending_multi/`）→ 移动文件到 `wiki/子库/raw/` → 添加 YAML 标记 `status, content_hash` → 记录日志。

### 2.2 子库编译
扫描子库 `raw/` → 基于 `content_hash` 增量编译 → 五步分析（提炼/质疑/推理/关联/矛盾）→ 生成概念页（必须包含核心定义、关键特性、参考文献）→ 拆分阈值触发自动拆分并建立父子关联 → 事务性写入（先写入 `_system/_temp/` 再原子重命名到 `wiki/子库/wiki/concepts/`）。

### 2.3 涌现分析
`emerge --pairs` / `--all` / `--auto` → AI 语义判断关联 → 类比/矛盾/创新/假设 → 写入 `emergence/YYYY-MM-DD_标题摘要.md`。

### 2.4 输出事务性保证
所有写入操作（概念页、涌现笔记、健康报告等）先写入 `_system/_temp/` 下的临时文件 → 校验 YAML 完整性、强制章节 → 原子重命名到正式位置 → 失败则删除临时文件并回滚。

---

## 三、命令列表

> 英文为主，同时识别中文别名（见 `.claude.json` 的 `aliases`）

### 3.1 大库命令

| 英文命令 | 中文别名 | 用途 |
|----------|----------|------|
| `create-sub <name> [--area]` | `创建子库` | 创建子库 |
| `list-subs` | `子库列表` | 列出子库 |
| `sub-status <name>` | `子库状态` | 子库详情 |
| `rename-sub <old> <new>` | `重命名子库` | 重命名 |
| `delete-sub <name>` | `删除子库` | 删除 |
| `sort-raw [--dry-run] [--force --target <sub>]` | `分拣raw` | 手动分拣，可强制指定目标 |
| `trash list` | `回收站列表` | 列出回收站内容 |
| `trash restore <id>` | `恢复` | 按编号恢复文件 |
| `trash clean [--days N]` | `清理回收站` | 清理 N 天前的回收站文件 |
| `hub-health [--clean-raw] [--auto-fix]` | `大库健康` | 大库健康报告，可选自动修复 |
| `edit-rule <rule>` | `编辑规则` | 进入规则编辑模式（受保护文件除外） |
| `exit-edit-mode` | `退出编辑` | 退出规则编辑模式 |
| `show-rules-diff` | `显示差异` | 展示待修改的差异 |
| `undo [--steps N]` | `撤销` | 撤销最近 N 次写入操作（通过 Git） |
| `refresh-index` | `刷新索引` | 刷新全局索引 |
| `auto-fix [--dry-run]` | `自动修复` | 自动修复常见一致性问题 |
| `help [command]` | `帮助` | 显示命令帮助 |

### 3.2 子库命令

| 英文命令 | 中文别名 | 用途 |
|----------|----------|------|
| `compile <sub> [--force] [--incremental]` | `编译` | 编译子库，可选强制或增量 |
| `compile-all [--force] [--incremental]` | `全部编译` | 编译所有变动子库 |
| `lint <sub> [--auto-fix]` | `检查` | 检查子库，可选自动修复 |
| `lint-all [--auto-fix]` | `全部检查` | 检查所有子库 |
| `health <sub> [--auto-fix]` | `健康` | 子库健康报告 |
| `move-concept <concept> <from> <to>` | `移动概念` | 跨库移动概念 |
| `compare <conceptA> <conceptB> [--sub]` | `对比` | 生成对比页 |
| `import-remote <git-url> --as <name> [--safe]` | `导入仓库` | 导入外部库，可选安全扫描 |
| `export-sub <name> --output <path>` | `导出子库` | 导出为独立仓库 |

### 3.3 涌现命令

| 英文命令 | 中文别名 | 用途 |
|----------|----------|------|
| `emerge --pairs <sub1>,<sub2>` | `涌现 --对` | 分析两个子库 |
| `emerge --concepts <c1>,<c2>` | `涌现 --概念` | 分析两个概念 |
| `emerge --all [--max-pairs]` | `涌现 --全库` | 全库扫描（最多分析20对） |
| `emerge --auto` | `涌现 --增量` | 增量涌现（基于新增概念） |
| `list-emergence [--confirmed]` | `涌现列表` | 列出涌现笔记 |
| `promote-emergence <file> --to <sub>` | `提升涌现` | 提升为指定子库的正式概念页 |

### 3.4 通用命令

| 英文命令 | 中文别名 | 用途 |
|----------|----------|------|
| `ingest <file> [--sub <name>]` | `摄取` | 预处理并存入指定子库 raw |
| `query <question> [--sub] [--save]` | `查询` | 查询（关键词匹配） |
| `create-proj <name>` | `创建项目` | 创建项目骨架 |
| `refresh-source-refs` | `刷新源引用` | 修复所有概念页的源文件引用 |

---

## 四、YAML 规范

### 4.1 概念页 YAML
```yaml
---
title: 概念名
aliases: [别名]
tags: [领域,类型]
category: concepts
area: 子库领域
source_ref: "../../raw/原文件名.md"
source_hash: "md5"
parent_page: "[[父页]]"      # 子页用
child_pages: ["子页1"]       # Hub页用
related: ["[[概念]]"]
created: YYYY-MM-DD
updated: YYYY-MM-DD
last_modified_by: 用户名
---
```

### 4.2 实体页 YAML
```yaml
---
title: 实体名
type: entity
category: person | location | organization | product | event | other
related_concepts: ["[[../concepts/概念]]"]
created: YYYY-MM-DD
updated: YYYY-MM-DD
last_modified_by: 用户名
---
```

### 4.3 对比页 YAML
```yaml
---
title: 概念A vs 概念B
type: comparison
concepts: ["[[../concepts/概念A]]", "[[../concepts/概念B]]"]
similarity_score: 0.0-1.0
status: draft | confirmed
created: YYYY-MM-DD
updated: YYYY-MM-DD
last_modified_by: 用户名
---
```

### 4.4 涌现笔记 YAML
```yaml
---
title: 涌现标题
type: emergence
trigger: manual | auto
related_subs: [子库1, 子库2]
related_concepts: ["[[wiki/子库1/concepts/概念A]]", "[[wiki/子库2/concepts/概念B]]"]
emergence_confidence: 0.0-1.0
testable_hypothesis: "可验证的假设"
confirmed: pending | confirmed | rejected
created: YYYY-MM-DD
updated: YYYY-MM-DD
last_modified_by: 用户名
---
```

### 4.5 源文件 YAML（位于子库 `raw/`）
```yaml
---
title: 文件标题
type: raw
tags: [标签]
source_type: user_upload | web_fetch
status: pending | sorted | compiled
created: YYYY-MM-DD
content_hash: "md5"
---
```

---

## 五、健康度指标

### 大库级
- 子库数量 (1-20)
- `raw/` 积压（大库 `raw/` 中未分拣文件数）(<10)
- 回收站大小 (<100)
- 涌现采纳率 (>30%)
- 索引完整性（全局索引是否存在）(100%)

### 子库级
- 概念密度 (0.5-2.0)
- 双链密度 (3-8)
- 矛盾解决率 (>50%)
- raw 编译率 (>80%)
- 实体覆盖率 (0.2-0.5)
- 源文件引用断裂数 (0)
- 父子页关联完整性 (所有 `child_pages` 存在且 `parent_page` 正确)

---

## 六、边界情况处理

| 场景 | 处理 |
|------|------|
| 分拣时文件被占用 | 重试 3 次（间隔 2 秒），仍失败则标记 `locked` |
| 编译时 raw/ 有新文件 | 当前编译只处理快照列表，新文件下次处理 |
| 跨子库循环依赖 | 允许，健康检查时警告并提供依赖图 |
| 子库命名冲突 | 询问：覆盖/合并/换名 |
| 文件过大(>10MB) | 根据 `large_file_action` 配置处理：`extract_text`（提取前100KB）/ `summarize`（生成摘要）/ `reject`（移入回收站） |
| Obsidian 同步冲突 | 不处理，建议使用 Git |
| 分拣无法匹配 | 标记 pending，提示用户 |
| 文件名冲突（子库内） | 自动加后缀 `_2`，YAML 中记录 `original_name` |
| 规则文件损坏或语法错误 | 停止相关操作，报告错误类型、位置和修复建议 |
| 规则之间存在矛盾 | 按优先级（子库 local.md > 大库 rules/ > 默认）自动选择，健康报告警告 |
| AI 认为规则可优化 | 在健康报告“建议”中记录，不得自动修改 |
| 涌现分析时概念页不存在 | 跳过该对，记录警告 |
| 涌现笔记与已有概念重复 | 在涌现笔记中标记 `conflict_with` |
| 输出文件写入冲突（用户手动编辑） | 检测文件修改时间晚于 AI 读取时间 → 询问：覆盖/合并/保留两者 |
| 撤销操作超过最近一次 | 从 Git 日志中找回最近操作，用户可选择回滚 |
| 源文件引用断裂 | 健康报告列出断裂，`auto-fix` 自动修复可识别的断裂 |
| 多子库匹配 | 询问用户选择目标子库，或移至 `_system/_trash/pending_multi/` |

---

## 七、配置参数（.claude.json）

```json
{
  "project": {
    "name": "我的知识库",
    "version": "4.2.1",
    "mode": "hub"
  },
  "current_user": "default",
  "settings": {
    "inbox": {
      "auto_sort": true,
      "max_files_warning": 50,
      "max_file_size_mb": 10,
      "large_file_action": "extract_text"
    },
    "trash": {
      "auto_cleanup_days": 30
    },
    "index": {
      "sort_by": "priority",
      "priorities": {}
    },
    "rule_editing": {
      "require_user_confirmation": true,
      "auto_backup": true,
      "protected_rules": ["hub.md"]
    }
  },
  "split_thresholds": {
    "max_lines": 300,
    "max_links": 8,
    "max_conclusions": 6,
    "auto_split": true,
    "hub_page_keep_ratio": 0.2,
    "auto_sync_child_pages": false
  },
  "knowledge_artifacts": {
    "extract_entities": true,
    "min_entity_frequency": 3,
    "auto_comparison_threshold": 0.7,
    "save_queries_to_disk": true
  },
  "emergence": {
    "enabled": true
  },
  "security": {
    "protected_paths": [
      "rules/",
      ".claude.json",
      "_system/_templates/",
      "**/.claude.json",
      "**/rules/local.md"
    ],
    "require_confirmation_for": [
      "file_delete",
      "file_overwrite",
      "bulk_move"
    ],
    "audit_log": true
  },
  "aliases": {
    "create-sub": ["创建子库", "新建子库"],
    "compile": ["编译"],
    "emerge": ["涌现"],
    "query": ["查询"],
    "list-subs": ["子库列表"],
    "sort-raw": ["分拣raw"],
    "hub-health": ["大库健康"],
    "help": ["帮助"],
    "auto-fix": ["自动修复"]
  }
}
```

---

## 八、初始化检查清单

1. [ ] 创建根目录，放入 `CLAUDE.md` 和 `AGENTS.md`（内容见附录）
2. [ ] 创建目录：`raw/`, `rules/`, `wiki/`, `output/`, `emergence/`, `_system/`
3. [ ] 在 `_system/` 下创建子目录：`_trash/`, `_backups/`, `_temp/`, `_hub-health/`, `_templates/`
4. [ ] 将第九节的 4 个规则文件复制到 `rules/`
5. [ ] 配置 `.claude.json`（修改项目名称、优先级等）
6. [ ] 初始化 Git：`git init`（在知识库根目录）
7. [ ] 创建第一个子库：`create-sub 小说 --area 小说`
8. [ ] 测试：`edit-rule hub.md` → 确认无法修改铁律
9. [ ] 测试分拣：`sort-raw --dry-run`
10. [ ] 测试编译：`compile 小说 --incremental`
11. [ ] 测试涌现：`emerge --auto`
12. [ ] 测试帮助：`help compile`

---

## 九、规则文件完整内容（4个文件）

### 9.1 `rules/hub.md`

```markdown
# 大库规范

## 铁律
- 执行 AI 只读本文件及所有 rules/ 文件，不得修改。
- 规则编辑 AI 不得修改本文件中的铁律部分，不得修改 `.claude.json` 中的 `rule_editing.require_user_confirmation`。

## 目录说明
- `raw/`：收集箱
- `wiki/`：子库及编译产物
- `emergence/`：涌现笔记（顶级知识产出）
- `_system/`：系统辅助（回收站、备份、临时、报告、模板）
- `output/`：用户项目空间

## 日志
`_hub-log.md` 必须包含时间戳和操作用户。

## AI 模式切换
执行模式（默认）：只读，执行命令。
编辑模式：用户说“切换成编辑模式” → 展示 diff → 用户确认 → 修改 → 切回。

## BUG 处理（执行 AI）
发现 BUG → 立即停止 → 汇报（问题/位置/影响/建议）→ 提供选项（忽略/编辑模式修复/记录）→ 等待指示 → 不得自行修复。
```

### 9.2 `rules/core.md`

```markdown
# 核心规范

## 标签白名单
`#concept`, `#entity`, `#comparison`, `#emergence`, `#query`；领域标签如 `#小说`。

## 匹配策略（分拣用）
- 精确匹配 >70%：直接移动
- 接近匹配 30%-70%：询问用户
- 无法匹配 <30%：标记 pending
- 多匹配（≤3个）：询问用户选择；>3个：移至 `_system/_trash/pending_multi/`

## 分拣流程（sort-raw 完整步骤）
1. 扫描大库 `raw/` 目录
2. 对每个文件执行**分拣预处理**（见 operations.md）
3. 分析文件内容（标题、标签、正文关键词），匹配子库
4. 按匹配策略处理（直接移动/询问用户/标记 pending）
5. 移动文件到 `wiki/[子库]/raw/`
6. 更新全局索引和子库索引

## 禁止行为清单（执行 AI）
❌ 修改 `rules/`、`.claude.json`、`_system/_templates/`、任何子库的 `.claude.json` 或 `rules/local.md`
❌ 修改子库 `raw/` 内容（仅可改 YAML status 字段）
❌ 未询问覆盖用户内容、自动合并概念
❌ **自行修复 BUG（必须汇报）**

## 双链规则
自动补全相对路径；循环引用健康检查警告；跨库格式 `[[../目标子库/wiki/concepts/概念名]]`。

## 源文件引用
概念页 `source_ref: "../../raw/原文件名.md"`，断裂时 `auto-fix` 可修复。
```

### 9.3 `rules/operations.md`

```markdown
# 操作规则

## 预处理
- HTML 转 Markdown
- 提取 title、source_type、source_url
- 计算 MD5 存入 `content_hash`
- 大文件按 `large_file_action` 处理（extract_text/summarize/reject）

## 分拣预处理（sort-raw 前置）
分拣前对每个文件执行以下预处理：
1. **清理旧 YAML 字段**：移除 area、topic、related、sources、updated、aliases、cover 等非规范字段
2. **清除正文双链**：将 `[[xxx]]` 替换为 `xxx`，`[[xxx|yyy]]` 替换为 `yyy`
3. **标准化 YAML**：确保只保留 v4.2 规范字段（type、title、tags、status、source_type、created、content_hash）
4. **补充缺失字段**：status（默认 pending）、source_type（默认 user_upload）、content_hash（正文 MD5）
5. **标准化 type**：source/resource → raw

## 编译
**五步分析（必须执行）**：提炼、质疑、推理、关联、矛盾检测
**拆分阈值**：行数>300 或 链接>8 或 结论>6 → 自动拆分，建立父子页
**增量编译**：基于 `content_hash` 跳过未修改文件
**输出位置**：`wiki/{子库}/wiki/concepts/`、`entities/`、`comparisons/`

## 涌现
候选概念：最近20个概念，AI语义判断
步骤：类比 → 矛盾/空白 → 创新组合 → 可验证假设
输出：`emergence/YYYY-MM-DD_标题摘要.md`
提升：`promote-emergence --to <子库>`

## 迁移
移动概念时更新所有双链；同名冲突询问用户；导入外部库支持 `--safe` 扫描

## 项目空间
`output/{项目名}/`，AI 只读

## 安全
导入扫描可执行文件/恶意链接；禁止执行知识库代码

## 边界情况（18项）
包括：文件占用、过大文件、同步冲突、规则损坏、引用断裂、多匹配等
```

### 9.4 `rules/output.md`

```markdown
# 输出规范

## 概念页模板
必须包含：`# 概念名`、`## 核心定义`、`## 关键特性`、`## 参考文献`
可选：详细阐述、五步分析章节

## 实体页模板
```yaml
---
title: 实体名
type: entity
category: person/location/organization/product/event/other
related_concepts: ["[[../concepts/概念]]"]
---
# 实体名
## 简介
## 出现位置
```

## 对比页模板
```yaml
---
title: A vs B
type: comparison
concepts: ["[[A]]","[[B]]"]
similarity_score: 0.0-1.0
status: draft/confirmed
---
# 对比
## 相同点
## 不同点（表格）
## 结论
```

## 涌现笔记模板
```yaml
---
title: 标题
type: emergence
trigger: manual/auto
related_subs: [子库]
related_concepts: ["[[wiki/子库/concepts/概念]]"]
emergence_confidence: 0-1
testable_hypothesis: "..."
confirmed: pending/confirmed/rejected
---
# 标题
## 触发背景
## 类比/连接发现
## 创新组合
## 待验证假设
## 影响评估
```

## 源文件 YAML（子库 raw/）
```yaml
---
title: 文件标题
type: raw
tags: [标签]
source_type: user_upload/web_fetch
status: pending/sorted/compiled
created: YYYY-MM-DD
content_hash: "md5"
---
```

## 日志格式
`### [YYYY-MM-DD HH:MM:SS] {操作类型} - {用户名}`

## 健康指标
（见第五节）
```

---

## 十、备份与恢复（Git 方式）

- 用户需在知识库根目录初始化 Git：`git init`
- 日常备份：`git add . && git commit -m "描述"`
- 恢复文件：`git checkout <commit-hash> -- <file>`
- `undo` 命令实现：`git checkout HEAD -- <file>`（回退到最近一次提交）
- 重大操作前建议手动 `git commit -m "backup before operation"`
- 定期推送至远程仓库（GitHub、GitLab 等）实现异地备份

---

## 十一、版本升级

1. **手动更新**：
   - 修改 `.claude.json` 中的 `version` 字段及新增配置项
   - 覆盖 `rules/` 下的 4 个文件（若有变化）
2. **运行自动升级**：
   ```text
   auto-upgrade
   ```
   AI 将自动执行：
   - 为所有 raw 文件补充缺失的 `content_hash`
   - 为所有概念页补充缺失的 `source_hash`、`parent_page`、`child_pages`
   - 创建缺失的目录（如 `_system/_backups/` 等）
   - 更新子库的 `.claude.json` 版本号
3. **验证**：
   ```text
   auto-fix
   hub-health
   ```

---

## 附录：根目录 `AGENTS.md` 内容

```markdown
# AI 行为准则

## 绝对禁止
- 修改 rules/、_system/_templates/、.claude.json
- 修改子库的 .claude.json 或 rules/local.md
- 自行修复 BUG（必须汇报）
- 未确认修改用户文件

## 发现问题时
汇报 → 等待指示 → 按指示执行

## 模式意识
默认执行模式；用户说“切换成编辑模式”才能改规则；改完必须切回

## Git 使用提示
- 日常备份：`git add . && git commit -m "描述"`
- 误操作恢复：`git checkout HEAD -- <文件路径>`
```

---

**文档结束** | 版本 v4.2.1 | 生效日期：2025-05-16