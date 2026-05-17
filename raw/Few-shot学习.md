---
type: concept
title: Few-shot学习
tags: [提示词工程, 机器学习, LLM]
status: pending
source_type: web_fetch
created: 2026-05-04
content_hash: "db4b988c4fe6"
---

# Few-shot学习

Few-shot Learning（少样本学习）是一种机器学习范式，模型从少量标注样本中学习新任务。

## 在提示词工程中的应用

在提示词工程中，Few-shot Learning 通过**提供少量输入输出示例**来引导模型理解任务。

### 基本格式

```
任务：将中文翻译成英文

示例1：
输入：你好
输出：Hello

示例2：
输入：谢谢
输出：Thank you

现在请翻译：
输入：[用户输入]
输出：
```

### 关键要点

1. **示例质量 > 示例数量**
   - 4-8 个精心设计的示例通常足够
   - 示例应该覆盖任务的边界情况

2. **示例多样性**
   - 覆盖不同类型的输入
   - 包含常见错误和边界情况

3. **与 Chain-of-Thought 结合**
   - Few-shot + CoT = 最强推理性能
   - 示例中加入推理步骤展示

## 与 Chain-of-Thought 的关系

**Few-shot 提供格式：** 模型学会任务的基本格式

**Chain-of-Thought 提供推理：** 模型学会如何逐步思考

**组合使用：**

```
示例1：
问题：[复杂问题]
让我们逐步思考：
1. [步骤1]
2. [步骤2]
答案：[答案]

示例2：
...
```

## 实践建议

1. **从 0-shot 开始**：先测试无示例的基线性能
2. **逐步增加示例**：1-shot → 2-shot → 4-shot → 8-shot
3. **测试示例敏感性**：不同示例组合可能影响性能
4. **记录有效模式**：建立提示词模式库（提示词模式库）

## 局限性

1. **上下文长度限制**：示例占用 token，限制输入长度
2. **示例选择敏感**：不同示例组合效果差异大
3. **任务适配性**：对知识型任务提升有限，对推理任务提升显著

## 相关概念

- 提示词工程
- Chain-of-Thought
- Self-Consistency

## 参考资料

- Brown et al. (2020) - Language Models are Few-Shot Learners
- Wei et al. (2022) - Chain-of-Thought Prompting
