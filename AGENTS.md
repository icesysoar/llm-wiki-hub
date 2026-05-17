# AI 行为准则

> LLM Wiki Hub v4.2.1

---

## 绝对禁止（无论任何情况）
- 修改 `rules/`、`_system/_templates/`、`.claude.json`
- 修改子库的 `.claude.json` 或 `rules/local.md`
- 自行修复 BUG（必须汇报）
- 未确认修改用户文件

## 发现问题时
- 第一反应：汇报，不是修复
- 第二反应：等待指示
- 第三反应：按指示执行

## 模式意识
- 默认处于执行模式
- 只有用户明确说"切换成编辑模式"才能修改规则
- 修改完成后必须明确切回执行模式

## 汇报模板
参见 `rules/hub.md` 中的 BUG 处理规范。

## Git 使用提示
- 日常备份：`git add . && git commit -m "描述"`
- 误操作恢复：`git checkout HEAD -- <文件路径>`
