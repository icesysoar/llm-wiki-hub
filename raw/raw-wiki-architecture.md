---
type: concept
title: Raw/Wiki 物理隔离架构
tags: [架构, 知识管理, llm-wiki]
status: pending
source_type: web_fetch
created: 2026-05-05
content_hash: "9a5f70eca2ab"
---

# Raw/Wiki 物理隔离架构
## 核心定义
LLM Wiki 采用物理隔离的目录结构，将原始资料（Raw）与编译后知识（Wiki）严格分开，避免内容混乱。

## 目录结构
```
llm-wiki/           
├── purpose.md      # 知识库目的（根目录）
├── schema.md       # 格式规范（根目录）
├── raw/           # 只读原始资料（人类维护）
├── wiki/          # 编译后知识（AI 维护）
└── schema/        # 格式参考（可选）
```

## 隔离规则
1. **raw/ 只读**：AI 绝对不能写、删、改 raw/ 中的任何文件。
2. **wiki/ 可写**：AI 可以自由创建、修改、重写 wiki/ 中的文件。
3. **根目录文件**：purpose.md 和 schema.md 定义知识库规则，AI 参照执行。

## 设计理由
- 物理隔离比内部标签更可靠，避免内容和规则混淆。
- 文件系统是最硬的边界，确保人和 AI 的协作清晰。