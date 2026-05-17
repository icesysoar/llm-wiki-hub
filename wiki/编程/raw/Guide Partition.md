---
type: concept
title: Guide Partition
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "7a2ac4a0d0e1"
---
创建和准备分界线，以便与头发生成使用。
### Parameters
提供用于创建分型线并将其添加到修饰线的界面。此节点创建头发插值使用分型线所需的曲线属性。
绘制分型线
创建一个[绘制曲线 SOP](https://www.sidefx.com/docs/houdini/nodes/sop/drawcurve.html "Creates a curve based on user input in the viewport.")并开始绘制。
#### 分型属性
半径
曲线可以影响头发插值的半径。
强度
曲线影响强度。的值 表示分型线一侧的参考线可能根本不会影响另一侧的头发。`1.0`
#### 重新采样
重新采样
对分型线重新取样。这通常是绘制曲线所必需的，因为它们的线段远远多于所需的线段，这可能会降低性能。
段长度
重新采样的段长度。