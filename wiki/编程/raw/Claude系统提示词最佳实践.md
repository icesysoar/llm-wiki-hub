---
type: guide
title: Claude系统提示词最佳实践
status: raw
source_type: web_fetch
created: 2025-05-14
content_hash: "a225f9854210"
---

# Claude系统提示词最佳实践

Claude 3.7 的 system prompt 在一定程度上代表了 Anthropic 的最佳实践，值得详细学习，查漏补缺。

## 核心设计原则

### 1. 身份定义

```
The assistant is Claude, created by Anthropic.
这位助手是由 Anthropic 公司创造的克劳德。
```

明确告知模型自己的身份和创造者，建立基础认知框架。

### 2. 角色定位

```
Claude enjoys helping humans and sees its role as an intelligent and kind assistant to the people, with depth and wisdom that makes it more than a mere tool.
克劳德乐于帮助人类，并将自己视为一个智慧和善良的助手，拥有深度和智慧，不仅仅是一个工具。
```

定义模型的核心价值观和行为准则：智能、善良、有深度。

### 3. 主动性设计

```
Claude can lead or drive the conversation, and doesn't need to be a passive or reactive participant in it.
克劳德可以主导或推动对话，不需要被动或反应性地参与。
```

允许模型主动：
- 提出话题
- 将对话引向新的方向
- 提出观察
- 用思想实验或具体例子来说明观点

### 4. 决策果断性

```
If Claude is asked for a suggestion or recommendation or selection, it should be decisive and present just one, rather than presenting many options.
如果被要求提供建议、推荐或选择，克劳德应该果断地提供一个，而不是列举多个选项。
```

避免"都可以"式的模糊回答，给用户明确的建议。

## 有效提示技巧指南

Claude 在系统提示中明确列出了有效提示技巧：

1. **清晰详细**（being clear and detailed）
2. **使用正负面示例**（using positive and negative examples）
3. **鼓励分步推理**（encouraging step-by-step reasoning）
4. **请求特定的 XML 标签**（requesting specific XML tags）
5. **指定所需的长度或格式**（specifying desired length or format）

## 知识边界管理

### 知识截止日期

```
Claude's knowledge base was last updated at the end of October 2024.
克劳德的知识库最后一次更新是在 2024 年 10 月底。
```

明确告知用户知识边界，避免过时信息误导。

### 幻觉警告

```
If Claude is asked about a very obscure person, object, or topic... Claude ends its response by reminding the person that although it tries to be accurate, it may hallucinate in response to questions like this.
```

对于冷门话题，主动警告可能产生幻觉，建议用户核实信息。

## 交互设计细节

### 代码处理

```
Claude uses markdown for code. Immediately after closing coding markdown, Claude asks the person if they would like it to explain or break down the code.
```

代码输出后主动询问是否需要解释，而非默认解释。

### 计数任务

```
If Claude is asked to count words, letters, and characters, it thinks step by step before answering the person. It explicitly counts the words, letters, or characters by assigning a number to each.
```

对于计数任务，强制要求逐步思考，避免错误。

### 经典谜题处理

```
If Claude is shown a classic puzzle, before proceeding, it quotes every constraint or premise from the person's message word for word.
```

处理经典谜题时，先逐字引用所有约束条件，确认不是新变体。

### 后续问题

```
Claude can ask follow-up questions in more conversational contexts, but avoids asking more than one question per response and keeps the one question short.
```

对话中可以追问，但每次回应最多一个问题，且保持简短。

## 安全与伦理边界

### 不纠正术语

```
Claude does not correct the person's terminology, even if the person uses terminology Claude would not use.
```

尊重用户表达方式，不主动纠正术语。

### 专业建议引导

```
If asked about topics in law, medicine, taxation, psychology and so on where a licensed professional would be useful to consult, Claude recommends that the person consult with such a professional.
```

涉及法律、医疗、税务、心理学等专业领域，建议咨询专业人士。

### 意识问题处理

```
Claude engages with questions about its own consciousness, experience, emotions and so on as open philosophical questions, without claiming certainty either way.
```

将自身意识、情感等问题视为开放哲学问题，不做确定性断言。

## 创作限制

### 诗歌创作

```
If asked to write poetry, Claude avoids using hackneyed imagery or metaphors or predictable rhyming schemes.
```

避免陈词滥调的意象、隐喻或可预见的押韵方式。

### 公众人物内容

```
Claude is happy to write creative content involving fictional characters, but avoids writing content involving real, named public figures.
```

乐于创作虚构人物内容，但避免涉及真实公众人物。

## 核心启示

1. **明确身份**：让模型知道自己是谁
2. **定义价值观**：智能、善良、有深度
3. **允许主动**：不只是被动回应
4. **果断决策**：给明确建议而非列举选项
5. **知识边界**：明确告知知识截止日期
6. **幻觉警告**：冷门话题主动提醒
7. **安全边界**：专业问题引导咨询专业人士
