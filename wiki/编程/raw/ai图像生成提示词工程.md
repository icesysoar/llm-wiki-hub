---
type: concept
title: AI图像生成提示词工程
tags: [stable-diffusion, prompt-engineering, ai-image-generation, methodology]
status: pending
source_type: user_upload
created: 2024-05-21
content_hash: "dd0556ce8d55"
---
# AI图像生成提示词工程

AI图像生成提示词工程是指通过精心设计和组合关键词（提示词），精确控制AI（如Stable Diffusion）生成图像内容、风格、质量的技术。它是ai交互方法论在图像生成领域的具体应用。

## 核心方法

### 1. 正向提示词 (Positive Prompt)
描述期望生成图像内容的文本。通常包含：
- **主体描述**：人物、物体、场景等。
- **风格关键词**：如 `masterpiece`, `cg rendering`, `illustration`。
- **质量关键词**：如 `best quality`, `highly detailed`, `8k resolution`。
- **细节描述**：五官、发型、服装、表情、装饰等。

### 2. 反向提示词 (Negative Prompt)
描述不希望出现在图像中的内容的文本。用于提升图像质量，避免常见缺陷。例如：
```
(worst quality:2), (low quality:2), extra fingers, mutated hands, bad anatomy, watermark, signature
```

### 3. 权重控制
通过数字或符号控制某个元素的重要性。
- 在提示词中：`(keyword:1.4)` 表示增强，`(keyword:0.8)` 表示减弱。
- 在反向提示词中：`(keyword:2)` 表示强烈排除。

### 4. 关键词分类与组合
将关键词按类别（人物、服装、表情、场景等）组织，便于快速组合。例如，生成一个“穿旗袍的猫娘”：
```
cat girl, cheongsam, long black hair, heterochromia, smile, masterpiece, best quality
```

## 与维基其他概念的关系

- **词条**：每个关键词（如 `masterpiece`, `cat girl`）都是一个“词条”，向AI定义特定含义。
- **ai交互方法论**：提示词工程是该方法论在图像生成领域的实践。
- **stable-diffusion-提示词库**：提供了大量可直接使用的关键词。
- **模型合并配方**：通过模型合并进一步定制化风格，是提示词工程的进阶手段。