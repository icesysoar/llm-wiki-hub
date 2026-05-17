---
type: concept
title: LoRA模型
tags: [stable-diffusion, 模型微调, ai图像生成]
status: pending
source_type: web_fetch
created: 2023-09-01
content_hash: "335678ad7095"
---
# LoRA模型

LoRA（Low-Rank Adaptation）是一种轻量级的模型微调技术，广泛应用于Stable Diffusion生态中。通过加载小权重文件，LoRA可以改变生成图像的特定风格或特征，如特定角色、服装、身体部位或艺术风格。

## 工作原理

LoRA通过在原始模型权重上添加低秩矩阵来实现微调，而无需修改原始模型参数。这使得LoRA权重文件非常小（通常几MB到几十MB），便于分享和组合使用。

## 在提示词中的使用

在Stable Diffusion的提示词中，LoRA通过 `<lora:模型名称:权重>` 的格式调用。例如，暂时保存描述 文档中使用了 `<lora:breastinclassBetter:0.3>` 来增强生成图像的特定身体特征，权重0.3表示该LoRA的影响程度。

## 与模型合并配方的区别

维基中已有 模型合并配方 页面，记录的是将多个模型合并为一个新模型的方法。而LoRA是一种更轻量、更灵活的微调方式，可以在不改变基础模型的情况下，临时加载特定风格或特征。两者是互补的技术。