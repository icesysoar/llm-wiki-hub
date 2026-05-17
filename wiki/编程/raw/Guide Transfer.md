---
type: concept
title: Guide Transfer
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "e02d9197d796"
---
在两个几何体之间传递毛发引导线
### Parameters
此运算符允许您将一组头发参考线传输到新的皮肤几何图形。使用基于 UV 的传递方法，即使蒙皮几何形状位于不同的位置并且具有不同的拓扑结构，也可以做到这一点。
## 参数
## 转移
匹配方法
直接（匹配拓扑）
假定源外观几何图形和目标外观几何图形之间的拓扑相同。
使用紫外线
根据 UV 坐标传输导轨。这使得在具有不同拓扑结构的蒙皮几何图形之间传输成为可能。
属性类
UV 属性的类（**点**或**顶点**）。
紫外线属性
UV 属性的名称。
## 变形
变形参考线
在两种不同的传输方法之间混合。在参考线处从根部变形，在参考线处使用`0``1`[点变形 SOP](https://www.sidefx.com/docs/houdini/nodes/sop/pointdeform.html "Deforms geometry according to an arbitrary connected point mesh.").
半径
变形方法（在变形**参考线**时使用）使用的半径不是 。`0`