# 核心规范

## 标签白名单
`#concept`, `#entity`, `#comparison`, `#emergence`, `#query`；领域标签如 `#小说`。

## 匹配策略（分拣用）
- 精确匹配 >70%：直接移动
- 接近匹配 30%-70%：询问用户
- 无法匹配 <30%：标记 pending
- 多匹配（≤3个）：询问用户选择；>3个：移至 `_system/_trash/pending_multi/`

## 禁止行为清单（执行 AI）
- ❌ 修改 `rules/`、`.claude.json`、`_system/_templates/`、任何子库的 `.claude.json` 或 `rules/local.md`
- ❌ 修改子库 `raw/` 内容（仅可改 YAML status 字段）
- ❌ 未询问覆盖用户内容、自动合并概念
- ❌ **自行修复 BUG（必须汇报）**

## 双链规则
自动补全相对路径；循环引用健康检查警告；跨库格式 `[[../目标子库/wiki/concepts/概念名]]`。

## 源文件引用
概念页 `source_ref: "../../raw/原文件名.md"`，断裂时 `auto-fix` 可修复。
