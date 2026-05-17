---
type: concept
title: Subnetwork
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "700d92c18266"
---
子网络输出运算器为管理大量的输出运算器提供了一个简单的方法。
### Parameters
The SubNetwork output operator provides an easy way to manage large number of output operators. It can also be used to render the output operators inside it.

A subnet ROP renders any final ROPs inside it (ROPs that do not have outputs). If more than one final ROP exists, they will be rendered in arbitrary order. To enforce an order, add a [Merge ROP](https://www.sidefx.com/docs/houdini/nodes/out/merge.html "Merges several render dependencies into one.") and wire the ROPs into it in the desired order.

Bypassing a subnet will also bypass the rendering of all its contained ROPs.

Note

Any input dependencies to the subnet are applied to any contained ROPs that do not have inputs.

## PARAMETERS

Render

Begins the render with the last render control settings.

Controls…

Opens the render control dialog to allow adjustments of the render parameters before rendering.

## LOCALS

N

Frame being rendered.

NRENDER

Total number of frames being rendered.