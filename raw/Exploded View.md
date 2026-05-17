---
type: concept
title: Exploded View
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "82f43b44ebff"
---
将几何图形从中心推开，以创建一个爆炸的视图
### Parameters
这个操作将选定的几何体从中心推开。它是逐件进行的，以创建一个几何体的爆炸视图。这对于直观地了解断裂的几何体是如何被分解的非常有用。
![](https://www.sidefx.com/docs/houdini/images/sop/explodedview.jpg)

Group
The geometry to push outwards.
Piece Attribute
The name of a string or integer attribute. Elements with the same value of this attribute are treated as a piece. If the attribute does not exist, it will be computed based on connectivity.
Piece Elements
Specifies whether the pieces consist of primitives or points.
Uniform Scale
The amount to expand the pieces. Each piece is moved proportionally to its distance to the center. A value of 1 will approximately double the size of the object. To undo an outwards scale of 1, an inwards scale of -0.5 can be used.
Scale
Non-uniform scaling along the XYZ axes. This is multiplied with the **Uniform Scale** to determine the direction and distance the pieces are moved by.
Override Center
The center to push pieces out from is normally computed as the center of the bounding box of the input. This parameter lets you override that choice.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/assemble.svg) Assemble](https://www.sidefx.com/docs/houdini/nodes/sop/assemble.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/extractcentroid.svg) Extract Centroid](https://www.sidefx.com/docs/houdini/nodes/sop/extractcentroid.html)