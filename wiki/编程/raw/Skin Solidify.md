---
type: concept
title: Skin Solidify
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "a158946ebc66"
---
将表面几何图形转换为实体（四面体）。输出的几何体准备用组织求解器来求解。
### Parameters
![](https://www.sidefx.com/docs/houdini/images/beta.svg)

This feature is still under development. The current functionality is unfinished and subject to change, and may have thin or no documentation. Please bear this in mind when using it.

Use this node to construct the skin geometry from an input skin surface.

Applying a Skin Layer to your character is optional. You can achieve many muscle & tissue simulation looks with **only** the Tissue Layer. Adding a Skin Layer to your character lets you to create finer wrinkling and folding skin effects.

The first input on this node provides the outer skin surface polygons from which to build the skin solid’s tetrahedrons. The skin surface must be triangulated before tetrahedralization. We have provided Remesh SOP parameters on this node just in case your surface isn’t already made of triangles. For more control over how the skin surface polygons are triangulated, you can use an external Remesh SOP node instead.

Tip

You can use an Attrib Paint SOP node here to paint the attribute to vary the skin thickness and then the Attrib Remap SOP to map the painted values to the desired minimum and maximum Skin Thickness values.

In most cases, the **Skin Thickness** value should match the value of the **Surface Inset** parameter located on the **Tissue Solidify SOP** node upstream. However this is not a requirement. The innermost boundary of the Skin Solid Layer is constrained to the Tissue Surface Layer. You can modify the Attach parameters on the Skin Properties SOP node to affect how strong and how tight to make that constraint.

## PARAMETERS

Skin Thickness

The Skin Thickness parameter specifies how deep the skin solid (tetrahedral mesh) should be.

Thickness Multiplier Attribute

Regular Layers

Determines how many layers of tetrahedrons are packed into the overall skin thickness.

Remesh Surfaces

See the [Remesh SOP](https://www.sidefx.com/docs/houdini/nodes/sop/remesh.html) node’s documentation.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/skinproperties.svg) Skin Properties](https://www.sidefx.com/docs/houdini/nodes/sop/skinproperties.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/tissuesolidify.svg) Tissue Solidify](https://www.sidefx.com/docs/houdini/nodes/sop/tissuesolidify.html)