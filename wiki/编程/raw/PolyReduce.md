---
type: concept
title: PolyReduce
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "67a33e9f9053"
---
减少模型中的多边形数量，同时保留其形状。这个节点在减少过程中保留了特征、属性、纹理和四边形。
### Parameters
100%
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/polyreduce_tommy_100.jpg)
50%
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/polyreduce_tommy_50.jpg)
10%
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/polyreduce_tommy_10.jpg)
This version of PolyReduce gives very fast, highly accurate reduction while preserving the shape, textures, attributes, and quad topology of the input as much as possible.
This node has multiple features to let you guide where the node reduces and reshapes:
You can prevent the node from moving unshared edges in [3D](https://www.sidefx.com/docs/houdini/nodes/sop/polyreduce.html#boundaryweight) and [UV](https://www.sidefx.com/docs/houdini/nodes/sop/polyreduce.html#vattribseamweight) space.
You can specify [points and/or edges to preserve.
You can paint an attribute in areas where you want to retain more density.
You can retain polygons based on visibility from certain view points.