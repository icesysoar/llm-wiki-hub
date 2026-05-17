---
type: concept
title: Spline Fillet
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "d8fa9a889048"
---
在两条曲线或曲面之间创建平滑的桥接几何。
### Parameters
Filleting creates a new primitive between each input pair and never affects the original shapes. This is in contrast to [Join](https://www.sidefx.com/docs/houdini/nodes/sop/join.html "The Join op connects a sequence of faces or surfaces into a single
primitive that inherits their attributes.") and [Stitch](https://www.sidefx.com/docs/houdini/nodes/sop/stitch.html "Stretches two curves or surfaces to cover a smooth area."). The [Join SOP](https://www.sidefx.com/docs/houdini/nodes/sop/join.html "The Join op connects a sequence of faces or surfaces into a single
primitive that inherits their attributes.") converts and possibly changes the connected ends of primitives, and stitching changes the original shapes but does not change the number of resulting primitives.

Please refer to the [Align SOP](https://www.sidefx.com/docs/houdini/nodes/sop/align.html "Aligns a group of primitives to each other or to an auxiliary input.") for a discussion of “left” and “right” primitives as well as the option of an auxiliary input.

Note

Trim curves are not taken into account by a fillet. To do this, use the [Join SOP](https://www.sidefx.com/docs/houdini/nodes/sop/join.html "The Join op connects a sequence of faces or surfaces into a single
primitive that inherits their attributes.").

## PARAMETERS

Group

Subset of geometry to fillet.

Fillet

Allows filleting of subgroups of N primitives or patterns of primitives.

N

Pattern to fillet.

Direction

Allows filleting in either U or V.

Fillet Type

Type of fillet to create.

Freeform

User controlled.

Convex

Flips the spans to keep the fillet convex.

Circular

Adjust tangent lengths to keep the fillet circular.

Primitive Type

Type of geometry to create fillet from.

Order

Order of splines.

Left UV

Point on each left primitive at which to begin the fillet.

Right UV

Point on each right primitive at which to end the fillet.

LR Width

Proportion of the left end of the fillet spanned. - Proportion of the right end of the fillet spanned./lrwidth2

LR Scale

Controls the direction and position of the fillet.

LR Offset

First and last edges of the fillet.

Match input to fillets

Inputs are modified so that isoparms appear continuous from one primitive to the other. All primitives become the same type and order.

Cut Primitives

Primitives are trimmed at the edge of the fillet.

## EXAMPLES

Load Launch

[GridFillet](https://www.sidefx.com/docs/houdini/examples/nodes/sop/fillet/GridFillet.html)Example for [Spline Fillet](https://www.sidefx.com/docs/houdini/nodes/sop/fillet.html) geometry node

The Fillet SOP is used to create a bridge between two NURBS surfaces with control over its parameterization. The fillet uses the original surface uv information for bridging.

Fillet types may include Freeform, Convex or Circular. The Freeform fillet usually provides a smooth natural form. Such parameters as the left and right UV, Width, Scale, and Offset may be used to control the fillet location between the surfaces.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/join.svg) Join](https://www.sidefx.com/docs/houdini/nodes/sop/join.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/stitch.svg) Stitch](https://www.sidefx.com/docs/houdini/nodes/sop/stitch.html)
-   [/nodes/sop/bridge](https://www.sidefx.com/docs/houdini/nodes/sop/bridge.html)