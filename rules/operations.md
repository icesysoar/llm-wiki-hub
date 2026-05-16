# 操作规则

## 预处理
- HTML 转 Markdown
- 提取 title、source_type、source_url
- 计算 MD5 存入 `content_hash`
- 大文件按 `large_file_action` 处理（extract_text/summarize/reject）

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
