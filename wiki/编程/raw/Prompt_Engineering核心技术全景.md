---
type: guide
title: Prompt Engineering核心技术全景
status: raw
source_type: web_fetch
created: 2026-05-14
content_hash: "46010248f93e"
---

# Prompt Engineering核心技术全景

## 技术地图

```
Prompt Engineering
├── 基础技法: Zero-shot / Few-shot / Role Prompting
├── 推理增强: CoT / ToT / Self-Consistency
├── 结构控制: 格式约束 / Schema / Prompt Chaining
├── 高级技法: HyDE / DSPy / Meta Prompting
└── 工程化管理: 版本管理 / A/B测试 / 自动优化
```

## 一、基础技法

### Zero-shot (零样本)
- 不给任何例子，直接描述任务
- 四要素: 角色设定 → 任务描述 → 约束条件 → 输出示意

### Few-shot (少样本)
- 给2-5个输入输出示例
- 四原则: 数量2-5、顺序相关放后、多样性、质量优先

### Role Prompting (角色设定)
- 赋予模型特定身份，激活领域知识与表达风格
- 示例: "你是一位有10年经验的Python高级工程师..."

### 负向提示
- 明确告诉模型"不要做什么"
- 示例: "不要使用数学公式，不要引用专业术语..."

## 二、推理增强

### CoT (思维链)
- 让模型显式推理再给答案
- Zero-shot CoT: "请一步步分析"
- 适用: 数学推理、逻辑判断、多步骤规划

### Self-Consistency (自我一致性)
- 同一问题多次采样，投票取最优
- 效果: CoT基础上再提升5-15%准确率
- 代价: API调用成本×5

### ToT (思维树)
- 生成多条推理路径，评估择优
- 适用: 创意写作、复杂规划、多种方案决策

### ReAct
- 思考与工具调用交替进行

## 三、结构控制

### 输出格式约束
- JSON: 明确Schema结构
- Markdown: 标题层级、列表格式

### Prompt Chaining (链式Prompt)
- 复杂任务拆成多个Prompt串联
- 每步可单独测试、单独优化

## 四、高级技法

### HyDE (假设文档嵌入)
- 先让模型生成假设答案，再用假设答案检索
- 提升RAG召回质量

### DSPy (自动化Prompt优化)
- 编程方式定义任务，框架自动优化Prompt
- 不再手写反复修改

### Meta Prompting (元提示)
- 让模型自己生成或优化Prompt

## 五、工程化管理

### Prompt版本管理
- Git管理Prompt文件
- 记录: 改了什么、为什么改、效果如何

### A/B测试框架
- 统计显著性检验
- 核心指标: 任务完成率、输出质量评分、用户接受率

### 质量自查清单
- [ ] 任务描述是否清晰无歧义?
- [ ] 输出格式是否明确约束?
- [ ] 是否经过不少于10个用例测试?
- [ ] Token数量是否合理?

## 技法适用场景速查

| 技法 | 适用场景 | 不适用场景 |
|------|----------|------------|
| Zero-shot | 通用任务、快速验证 | 格式要求严格 |
| Few-shot | 格式固定、风格一致 | 示例难构造 |
| CoT | 数学、逻辑、多步推理 | 简单问答 |
| Self-Consistency | 高精度要求 | 成本敏感 |
| ToT | 创意、规划、探索性任务 | 有标准答案 |
| Prompt Chaining | 复杂多步骤任务 | 简单单步任务 |

## 与现有概念关联

- **零样本提示**: Zero-shot是核心基础技法
- **少样本提示**: Few-shot设计原则详述
- **思维链提示**: CoT原理与变体
- **结构化提示词设计**: Prompt Chaining与格式约束
- **量化评分提示词**: 可用于A/B测试质量评估
