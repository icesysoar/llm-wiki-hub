---
type: concept
title: Spline Clay
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "30fc94974565"
---
让你通过拉动直接位于NURBS面上的点来实现NURBS面和NURBS曲面的变形。
### Parameters
As opposed to the Point op or other ops that manipulate control points (CVs), the Clay op operates on the primitive contours themselves, providing a direct, intuitive, and unconstrained way of reshaping geometry. Thus, rather than translating CVs to change the aspect of the primitive, the Clay op takes the inverse approach of repositioning the CVs to reflect the tug on the primitive’s skin.
The point that defines the area to be modified is called a “target point” or “target” for short. It is expressed as a (u,v) pair in the parametric space of the primitive and ranges between 0 and 1 in both U and V. The image of the target point on the primitive is a 3D point which Clay can displace in several ways. Furthermore, if the primitive is a surface, there is are options to pull only the point or a whole isoparametric curve in either U or V.
Clay does not refine the faces and surfaces unless asked to, so the complexity of the geometry does not increase. The area affected by the change varies with each primitive type and topology. In all cases it is possible to reduce the amount of change by inserting a Refine op before the Clay op and inserting detail around the target point. For other ways to increase the locality of the deformation as well as its sharpness, see U and V Sharpness below.
If a second input is present, it is possible to snap the target (u,v) point to an (s,t) point on the first primitive of the second input. Without a second input, the primitives can be made to snap to themselves. Moreover, the Clay op is able to snap the target to arbitrary points in space.
Both this op and the [Align SOP](https://www.sidefx.com/docs/houdini/nodes/sop/align.html "Aligns a group of primitives to each other or to an auxiliary input.") can be used effectively as snapping tools and building blocks for curve networks. The main difference between the two ops is that Clay deforms the inputs partially, while Align translates and/or rotates the whole primitive.
The Clay op accepts a mix of any combination of face and surface types.
## PARAMETERS
Group
Subset of faces or hulls to deform.
U/V toggles
Parametric direction(s) to deform along.
## U tab
U
Parametric location where the deformations occurs.
U Bias
Amount of pull on either side of the U value.
U Sharpness
Primitive sharpness in the displaced area.
## V tab
V
Parametric location where the deformations occurs.
V Bias
Amount of pull on either side of the V value.
V Sharpness
Primitive sharpness in the displaced area.
## Matrix
Overview
Point transformation is given by a matrix.
Transform Order
Order transformations are applied.
Rotate Order
Order rotations are applied.
Translate
Amount of translation along xyz axes.
Rotate
Amount of rotation about xyz axes.
Scale
Non-uniform scaling along xyz axes.
Pivot
Local pivot point for transformations.
## Vector
Overview
Point is translated along a vector.
Distance
Translation distance.
Normal
Translate along primitive normal at (u,v).
Direction
Translation vector if Normal is off.
## Point
Overview
Point is moved to an absolute xyz position in object space.
Coordinates
Location the point must snap to.
## Primitive
Overview
Point snaps to the (u,v) of the primitive in the 2nd input or to a (u,v) on itself if no 2nd input is present.
U and V
Parametric coordinates on the target primitive.
## EXAMPLES
Load Launch
[ClayBasic](https://www.sidefx.com/docs/houdini/examples/nodes/sop/clay/ClayBasic.html)Example for [Spline Clay](https://www.sidefx.com/docs/houdini/nodes/sop/clay.html) geometry node
This demonstration contains four examples of how a Clay SOP is used. The points have been animated to better visualize this.
Matrix - Point transformation is given by a matrix.
Vector - Point is translated along a vector.
Point - Point is moved to an absolute XYZ position in object space.
Primitive - Point snaps to the (U,V) of the primitive in the 2nd input of to a (U,V) on itself if no 2nd input is present.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/curveclay.svg) Spline Curve Clay](https://www.sidefx.com/docs/houdini/nodes/sop/curveclay.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/xform.svg) Transform](https://www.sidefx.com/docs/houdini/nodes/sop/xform.html)
-   [/nodes/sop/point](https://www.sidefx.com/docs/houdini/nodes/sop/point.html)