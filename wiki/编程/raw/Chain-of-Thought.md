---
type: concept
title: Chain-of-Thought（思维链）
tags: [提示词工程, 推理, LLM]
status: pending
source_type: user_upload
created: 2026-05-04
content_hash: "f8c8873fadfd"
---

# Chain-of-Thought（思维链）

Chain-of-Thought (CoT) 是一种提示词工程技术，通过在提示词中添加"逐步思考"的示例，引导大模型展示推理过程，从而显著提高复杂推理任务的准确率。

## 核心思想

**传统提示词：**
```
问题：Roger 有 5 个网球...
答案：11
```

**Chain-of-Thought 提示词：**
```
问题：Roger 有 5 个网球...
让我们逐步思考：
1. Roger 一开始有 5 个网球。
2. 他买了 2 罐，每罐 3 个...
3. 5 + 6 = 11。
答案：11 个网球。
```

## 关键实验结果

### 算术推理（GSM8K）

- **无 CoT**：17.9% 准确率
- **有 CoT（8-shot）**：58.1% 准确率
- **提升**：+40.2%

### 常识推理

- CSQA、StrategyQA 等数据集均有显著提升

### 符号推理

- Last Letter Concatenation 任务：从 23% 提升到 72%

## 工作原理

1. **分解问题**：将复杂问题分解为多个简单步骤
2. **逐步推理**：每个步骤都明确展示
3. **累积答案**：基于前面的推理得到最终答案

## 实践建议

### 1. 使用少量示例

- **8-shot** 或 **4-shot** 通常足够
- 示例应该展示完整的推理过程

### 2. 展示推理过程

不要只给答案，要展示步骤。让模型"说出"它的思考过程。

### 3. 适配任务类型

- ✅ **有效**：算术推理、常识推理、符号推理
- ⚠️ **有限**：知识型任务、翻译、生成任务

## 与提示词工程的关系

CoT 是提示词工程的核心技术之一。在 提示词工程 中，CoT 属于"高级技巧"。

**组合使用：**
- CoT + Few-shot Learning = 最强推理性能
- CoT + Self-Consistency = 进一步提升准确率

## 相关概念

- 提示词工程
- Few-shot学习
- Self-Consistency

## 参考资料

- Wei et al. (2022) - Chain-of-Thought Prompting Elicits Reasoning in Large Language Models
