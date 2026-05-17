---
type: concept
title: Spline Align
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "7dfaf9ee7007"
---
将一个组的Primitive对象相互对齐，或对齐到一个辅助的输入对象上
### Parameters
The notions of “left” and “right” which follow depend on context. If an auxiliary input is used, it is always the right primitive and the primary input geometry are all left primitives. If only one input is used, then for each pair being aligned, there is a left and a right primitive. This means that relative to neighboring primitives, one primitive can be both left and right.
![](https://www.sidefx.com/docs/houdini/images/nodes/Houdini-03-1-034.jpg)
## INPUTS
Align Source
Any geometry type. Treated as left/right primitive pairs or left primitives if an auxiliary source is used.
Auxiliary Source
Any geometry type consisting of a single primitive treated as the “right” primitive.
## PARAMETERS
Group
Which primitives to align. If blank aligns entire input.
Align To
Which primitive to align to. If blank aligns to first primitive in the auxiliary input.
Align
Can optionally align subgroups of N primitives or patterns of primitives.
N
Determines the pattern of primitives aligned.
## Align
Overview
This tab describes the main parameters for alignment.
Bias
Determines which primitive remains unaffected. 0 : first 1 : last.
Left UV
Pivot location on the “left” primitive.
Right UV
Pivot location on the “right” primitive.
Right UV End
If an auxiliary input is used, this location specifies an endpoint for the alignment. Primitives are distributed uniformly between the Right UV and the Right UV End.
Individual Alignment
Causes each primitive in the group to be aligned. If off, only the first primitive is aligned and all others are placed relative to it.
Translate
Translates primitives during alignment.
Rotate
Rotates primitives during alignment.
## Transform
Overview
This tab describes the post-alignment transformation in the local alignment space.
Transform Order
Order in which transformations occur.
Rotate Order
Order in which rotations occur.
Translate
Amount of translation along local xyz axes.
Rotate
Amount of rotation about local xyz axes.
Scale
Non-uniform scaling along local xyz axes.
Pivot
Local pivot point for transformations.
## EXAMPLES
Load Launch
[AlignTube](https://www.sidefx.com/docs/houdini/examples/nodes/sop/align/AlignTube.html)Example for [Spline Align](https://www.sidefx.com/docs/houdini/nodes/sop/align.html) geometry node
This example demonstrates how the UV information on surfaces, NURBS in this example, are used by the Align SOP to orient one object to another’s surface.
UV reference parameters in the Align SOP can be animated as shown in the align_tube example.
Animating UV parameters leads to the translation and rotation of the aligned geometries along one another’s surface in various ways.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/copy.svg) Copy with Stamp](https://www.sidefx.com/docs/houdini/nodes/sop/copy.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/xform.svg) Transform](https://www.sidefx.com/docs/houdini/nodes/sop/xform.html)