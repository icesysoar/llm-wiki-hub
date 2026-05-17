---
type: entity
title: Adobe After Effects
tags:
  - 视频合成
  - AE
  - Adobe
  - 后期制作
  - 动效
  - 动态设计
  - 特效合成
  - software
  - after-effects
  - compositing
  - motion-design
  - 合成
  - 动画
  - 特效
  - motion-graphics
  - vfx
status: pending
source_type: user_upload
created: 2023-09-01
content_hash: "f26b6012ec46"
---

# Adobe After Effects

Adobe After Effects 是业界领先的专业动态图形和视觉特效合成软件，行业标准，广泛应用于动态设计、影视后期、广告制作、UI动效与 motion graphics 领域，以及电影、电视、网络视频制作。常与 C4D（通过 Cineware）或 Nuke 配合使用，是动态设计和视觉特效工作流中的核心合成工具。其核心工作流基于层堆叠与效果控件，与 node-based-workflow（Houdini 的节点系统）属于不同的模拟范式，但在实践层面共同服务于 动态设计拉片方法论 的落地。本 Wiki 将其作为一个综合实体节点，汇总来自多个源文档的操作知识。

## 核心应用场景

- **动态图形（Motion Graphics）**：标题动画、UI 动效、品牌设计
- **视觉特效合成**：绿幕抠像、跟踪、稳定、颜色校正
- **与 C4D 联动**：Cineware 直接在 AE 内渲染 Redshift 等渲染器输出

## 快捷键

本维基收录的 AE快捷键 文档提供了最基础的操作速查表，是将拉片分析中的理论转化为实际操作的重要工具。常用快捷键一览：
- 新建合成：Ctrl+N
- 预合成：Ctrl+Shift+C
- 添加关键帧：Alt+Shift+属性快捷键
- 渲染队列：Ctrl+M

## ACES 色彩管理

在 After Effects 2023 中，可以启用 ACES 色彩管理，以实现与 Cinema 4D、Redshift 等软件的色彩一致性。配置要点如下（详细步骤参见 AE2023 ACES最新设置流程 C4D 2023 RS）：

- **配置要点**：需在项目设置中开启 ACES，并设置正确的输入色彩空间（如 sRGB、Rec.709）和输出色彩空间。
- **配合 C4D & Redshift**：当使用 C4D 2023 配合 Redshift 渲染时，渲染输出需采用 ACEScg 色彩空间，然后在 AE 中通过 OCIO 或内置 ACES 配置进行转换。
- **简要步骤**：
  1. 项目设置中选择 ACES 色彩空间。
  2. 使用 OCIO 或内置 ACES 转换效果。
  3. 确认视图变换为 sRGB 或 Rec.709。
- **参考视频**：[After Effects 2023 ACES最新设置流程](https://www.bilibili.com/video/BV1nM41177dZ/)

## 核心合成技巧

After Effects 的合成能力可通过以下四个核心技巧显著提升，这些技巧可组合使用，形成从空间定位到视觉融合的完整合成工作流。

### 1. 颜色匹配（Color Matcher）
使用 Color Matcher 效果将前景元素的输出颜色融合到背景中，快速统一色调。参见 颜色匹配-ae。

### 2. 径向模糊模拟运动模糊
在需要运动模糊的位置添加径向模糊效果，调整中心点控制模糊方向，可作为原生运动模糊的轻量替代，增强动态真实感。参见 径向模糊-ae。

### 3. 3D 摄像机跟踪
对素材右键 → 跟踪和稳定 → 跟踪摄像机，解算摄像机运动，之后可添加 3D 图层实现无痕合成，实现2D/3D融合。参见 摄像机跟踪-ae。

### 4. 模型贴图标（Corner Pin / CC Power Pin 对位）
在三维模型渲染输出中，使用 Corner Pin 或 CC Power Pin 效果将图标贴在模型表面，图标会跟随模型移动。需在三维输出时保留足够贴图空间。参见 模型贴图标-ae。

## 个人使用记录

### 工作流
- AE用简单阻塞后还是有白边，有什么办法完美解决？
- AE如何运动跟踪
- MAYA动画数据导入AE

### 工具与技巧
- AE常用插件和脚本Piugins&Script
- AE快捷键
- Ae如何导入AI矢量图形

### 教程
- AE2023 ACES最新设置流程 C4D 2023 RS
- AE后期电影质感套路
- C4D罡渡晨星AE基础必修课
- C4D+RS 科幻赛博风格-IHDT罐头

## 质疑与边界

- **与 Nuke 的边界**：AE 适合动态图形和快速合成；Nuke 适合影视级合成、节点式工作流和 EXR 分层合成
- **三维联动**：AE + Cineware + C4D 适合快速动态图形；复杂特效通常在 Nuke 中完成合成
- **前提假设**：Adobe After Effects 的前提假设是什么？是否总是成立？
- **边界条件**：在 adobe 领域，Adobe After Effects 的边界条件是什么？有没有反例？
- **有效性验证**：如何验证 Adobe After Effects 的有效性？数据/结论的来源是什么？

## 相关概念

- node-based-workflow
- 动态设计拉片方法论
- dynamic-design-filmmaking-methodology
- seedance-2-0
- 构图底层构成
- karma
- octane-render