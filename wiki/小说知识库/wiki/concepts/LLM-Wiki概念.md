---
title: LLM-Wiki概念
aliases:
  - LLM Wiki
  - 大模型知识库
tags:
  - AI
  - 知识管理
  - LLM
category: concepts
area: AI
topic: 知识库架构
related:
  - [[小说三要素]]
  - [[人物塑造]]
created: 2025-05-13
updated: 2025-05-13
type: concept
source_ref: "../../raw/LLM-Wiki概念.md"
source_hash: "137dda9946a6"
---

# LLM-Wiki概念

> 基于大语言模型的智能知识库架构

---

## 核心理念

LLM-Wiki 是一种**人机协作的知识管理方式**，利用大语言模型的能力：
- 自动摄入和整理信息
- 智能关联和推理
- 项目化输出

---

## 三层架构

```
📥 raw/ - 输入层
   └── 自动摄入素材，智能管理

🔄 wiki/ - 整理层
   └── AI编译知识，建立关联

📤 output/ - 输出层
   └── 基于知识库的项目执行
```

---

## 关键特性

### 1. 自动摄入
AI搜索/WebFetch获取资料 → 自动存入raw/ → 触发编译流程

### 2. 增强编译
- 提炼核心结论
- 质疑边界条件
- AI推理标注
- 建立双向链接
- 检测观点矛盾

### 3. 智能清理
raw/基于使用频率、质量评分、重要程度自动清理

### 4. 项目化输出
output/ = 调用wiki/知识 + 项目具体情境

---

## 应用在本知识库

本小说写作知识库采用LLM-Wiki架构：
- **raw/** - 写作技巧素材
- **wiki/** - 整理后的小说写作方法论
- **output/** - 实际小说创作项目

---

## 关联

- 本知识库的所有概念都基于LLM-Wiki架构管理
