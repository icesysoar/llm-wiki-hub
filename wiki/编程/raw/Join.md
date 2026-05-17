---
type: concept
title: Join
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "64934f7a0f35"
---
联合操作将一连串的面或曲面连接成一个单一的基元，继承它们的属性。
### Parameters
Tip

You can use Join on open polylines.

The Join op connects a sequence of faces or surfaces into a single primitive that inherits their attributes. Faces of different types can be joined together, and so can surfaces. Mixed face-surface types are not allowed. The surfaces do not have to have the same number of rows or columns in the side being joined. Spline types of different orders and parameterization are all valid inputs. The Join op converts simpler primitives such as polygons into Beziers and NURBS if necessary.

Joining is different from filleting (see [Fillet SOP](https://www.sidefx.com/docs/houdini/nodes/sop/fillet.html "Creates smooth bridging geometry between two curves or surfaces.")) or stitching (see [Stitch SOP](https://www.sidefx.com/docs/houdini/nodes/sop/stitch.html "Stretches two curves or surfaces to cover a smooth area.")) because it takes _n_ primitives and converts them into one after possibly changing the connected ends of the primitives. Filleting creates a new primitive between each input pair and never affects the original shapes. Stitching changes the original shapes but does not change the number of resulting primitives.

This Operation allows you to select a sequence of faces or surfaces and connect them, forming a single primitive that inherits their attributes. When you select a primitive click on it close to the end that you want connected. A small white ring is displayed at that end. You can change your mind any time by clicking on another end of that primitive. After you have selected two primitives in this way (both must be faces or surfaces) they will be blended into one according to the parameters currently set. If only one primitive is selected, clicking on either end will cause the primitive to join to itself. This is one way to wrap a primitive in the modeler using all the flexibility of a join operation. The join is not finalized until you type Enter or click on the right mouse button. Until then you can change both the connection ends as already explained, and the blending parameters.

Once you commit the join, it is automatically selected and a new ring is placed at one end. This allows joining several curves or surfaces in sequence by simply selecting the 'next' curve or surface end to join, completing it (right mouse) and continuing. You can also click on the next pair of faces or curves if you have entered the Join Operation in a “sticky” way ( ⇧ Shift click on its icon); otherwise it returns to the Select Operation.

The pairs joined together in the operation need not be of the same type or degree, nor do they need to have the same number of CVs. For example, it is possible to join a polygon with a quadratic Bezier curve and with a cubic NURBS curve. The Model Editor converts the simpler types to the more complex - polygon or mesh to Bezier and Bezier and NURBS. In the above example, the new curve will be a cubic NURBS because cubic is the highest of the three degrees and NURBS is the more complex type.

The number of CVs and the type of connection are determined by the “Blend” option, by the tolerance and multiplicity parameters. A blended curve or surface will alter its ends by converting them into a single, common point, row or column respectively. The amount of change can be reduced by lowering the tolerance. When the tolerance is zero the inputs do not change at all: the faces are connected by a straight line and the surfaces by a flattish, linear patch. When not blended, the original shapes are not affected at all, regardless of the tolerance. Instead, the ends are connected by an arc-like fillet. Nonetheless, the result is a single primitive. The multiplicity affects the number of knots inserted at the blend point and thus allows for smooth or pointed connections. When “blend” is not _on_, multiplicity influences the shape and the tightness of the fillet.

## PARAMETERS

Group

Subset of geometry to join.

Blend

How primitives are joined.

Tolerance

If “blend” is _on_, the tolerance indicates how much blending can affect the shapes near the ends being connected. The smaller the tolerance, the closer will a point or knot be inserted to the end-points. When the tolerance is zero the inputs do not change at all: the faces are connected by a straight line and the surfaces by a flattish, linear patch.

If “blend” is _off_, the tolerance acts as a scaling factor to the two ends of the fillet connecting the end-points.

Bias

Determines which side is affected more when using the blended method.

Multiplicity

Affects the number of knots inserted at the blend point and thus allows for smooth or pointed connections. The connection will be pointed when the multiplicity is _on_. When “blend” is not _on_, an active multiplicity influences the shape and the tightness of the fillet by forcing a multiple knot insertion _on_.

The fillet tends to be better behaved when multiplicity in _on_. However, this means that the resulting curve or surface is built with a discontinuity at the connection points and might not lend itself to point modeling in that area too well.

Multiplicity has no effect on polygons and meshes.

Connect Closest Ends

Connects primitives based on their ends' proximity rather than their order in the group or in the geometry detail.

Direction

Parametric direction of the joining operation.

Join

Optionally join subgroups of primitives.

N

Increment to use for subgroup joining.

Wrap Last to First

Closes the connection of the primitive.

Keep Primitives

Retains original geometry.

Only Connected

Primitives in the sub group will be joined only if they share incoming and outgoing points. This only applies to curve and polygon primitives.

## EXAMPLES

Load Launch

[BasicJoin](https://www.sidefx.com/docs/houdini/examples/nodes/sop/join/BasicJoin.html)Example for [Join](https://www.sidefx.com/docs/houdini/nodes/sop/join.html) geometry node

This example demonstrates how the Join SOP can connect multiple pieces of geometry by faces and surfaces.

The Join SOP will combine the individual pieces of geometry into a single primitive that will inherit attributes.

Nurbs, Bezier, or Mesh surfaces should be used with the Join SOP.

Do not use Polygons as it will not work with the Join SOP.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/fillet.svg) Spline Fillet](https://www.sidefx.com/docs/houdini/nodes/sop/fillet.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/stitch.svg) Stitch](https://www.sidefx.com/docs/houdini/nodes/sop/stitch.html)
-   [/nodes/sop/bridge](https://www.sidefx.com/docs/houdini/nodes/sop/bridge.html)