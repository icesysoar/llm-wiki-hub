---
type: concept
title: SplineCreep
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "a4f7e875091a"
---
对穿过一个曲面的几何体进行变形和动画
### Parameters
This operator changes each of the source input geometry points into a new space. The X and Y components of the source points will become the U and V positions on the surface. The Z component becomes a displacement along the surface’s normal at the (U, V) position.
## Using Creep
1.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/creep.svg)[Creep](https://www.sidefx.com/docs/houdini/nodes/sop/creep.html "Deforms and animates a piece of geometry across a surface.") tool on the **Model** tab.
2.  Select the points to creep and press Enter to confirm your selection.
3.  Select the primitive for the points to creep on and press Enter to confirm your selection.
    You can translate, rotate, and scale the creep in the [parameter editor](https://www.sidefx.com/docs/houdini/ref/panes/parms.html).
![](https://www.sidefx.com/docs/houdini/images/shelf/creep.jpg)
Note
The creep tool changes the size and orientation of your original shape. Scale and rotate it as desired in the [parameter editor](https://www.sidefx.com/docs/houdini/ref/panes/parms.html) after you use the creep.
## Inputs / Geometry Types
The geometry of the Source op is crept along the path of the Path op. The path type can be any primitive, but should define a surface (e.g. NURBS surface, primitive tube, etc.). Curve paths (circles, polygons, etc.) will squash the source geometry’s height. This op will transform all vector attributes, even of particles. The velocities will be altered to reflect the transformation that creep does.
Note
NURBS surfaces might distort the crept geometry due to the non-uniformity of their U and V knot sequence. If the knots are not laid out uniformly (as in the case of a NURBS spline), knots closer together will squash the crept geometry in the corresponding surface region.
The [Grid SOP](https://www.sidefx.com/docs/houdini/nodes/sop/grid.html "Creates planar geometry."), [Skin SOP](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html "Builds a skin surface between any number of shape curves."), [Sweep SOP](https://www.sidefx.com/docs/houdini/nodes/sop/sweep.html "Creates a surface by sweeping a cross section curve along a spine curve."), [Tube SOP](https://www.sidefx.com/docs/houdini/nodes/sop/tube.html "Creates open or closed tubes, cones, or pyramids."), and [Sphere SOP](https://www.sidefx.com/docs/houdini/nodes/sop/sphere.html "Creates a sphere or ovoid surface.") (with **Unique Points at Poles** on for polygons) are some of the ops that produce usable Meshes.
The Source Input op’s geometry is wrapped onto the Path’s, and the position and orientation of the Source on the Path is controlled by the nine fields that appear at the bottom of the op: Translate, Rotate, and Scale xyz.
The Z translate, Z scaling and X/Y rotation of the Source to the Path depends on the surface normals of the Path’s geometry.
## Uses / Works in Relation With
Creeping the starting profile for a filleted tube onto a surface can be accomplished with this op. Use a [Transform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/xform.html "The Transform operation transforms the source geometry in object space using a transformation matrix.") or [Copy SOP](https://www.sidefx.com/docs/houdini/nodes/sop/copy.html "Creates multiple copies of the input geometry, or copies the geometry
onto the points of the second input.") to scale and translate the crept profile generating a series of cross-sections to skin with the [Skin SOP](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html "Builds a skin surface between any number of shape curves.").
## PARAMETERS
Group: Subset of points to creep onto the path. Path Group: Primitive to creep on.
## Creep
Initialize
Fill Path
Values are computed that stretch or shrink the Source geometry to the full dimensions of the Path geometry.
Keep Proportions
Similar to above, but the values are initialized so as to minimize distortion of object geometry.
Translate
Translate source geometry over the creep surface.
Rotate
Rotate source geometry on the creep surface.
Scale
Scale source geometry on the creep surface.
Pivot
Local pivot point for transformations.
## Attribute
The parameters on this tab control how attributes on the creep surface affect the geometry being crept.
Set Creep UV Attribute
Store the parametric coordinates that the source points are crept onto in the specified point attribute.
Set Point Attributes From Path
Copy attributes from the path geometry to the points of the source geometry, according to the values in the attribute fields below.
Attribute fields
(Available when **Set Point Attributes From Path** is on above.)
The _columns_ represent _possible ways of combining the attributes_ from the path geometry with the point attributes from the source geometry.
Set
Copy the path attributes onto the points.
Mult
Multiply the source point attributes by the corresponding path attributes.
Add
Add the path attributes to the corresponding source point attributes.
Sub
Subtract the path attributes from the corresponding source point attributes.
The _rows_ represent _the different entities you can copy attributes from_: points, primitives, and vertices.
At the _intersection_ of each column and row, you can enter a list/pattern of attributes.
For example:
-   To copy all attribute values from the path primitive attributes to the point attributes of the source, set the field at **Set/From Prim** to `*`.
-   To multiply source point colors by the path’s primitive colors, set the field at **Mult/From Prim** to `Cd`.
-   To add the point texture coordinates of the path geometry to the coordinates of the source, set the field at **Add/From Point** to **uv**.
## EXAMPLES
Load Launch
[CreepBlob](https://www.sidefx.com/docs/houdini/examples/nodes/sop/creep/CreepBlob.html)Example for [Spline Creep](https://www.sidefx.com/docs/houdini/nodes/sop/creep.html) geometry node
This example shows how to creep metaballs on a surface. In this case, the surface is a contorted tube and the metaballs look like a “blob” being pushed through the tract.
A tube is created and used as the creep surface. A circle is created by carving a profile out from that same tube. The circle is then animated with a Creep SOP down the length of the tube.
Metaballs are attached to the points on that carved circle to create the “blob”.
Load Launch
[CreepParticleTubeA](https://www.sidefx.com/docs/houdini/examples/nodes/sop/creep/CreepParticleTubeA.html)Example for [Spline Creep](https://www.sidefx.com/docs/houdini/nodes/sop/creep.html) geometry node
This example shows two different ways in which particles can be crept on a surface. In this case, the surface is a contorted tube.
One version shows how particles are crept inside the surface, the other shows how particles are crept outside the surface. This is done by changing the z scale in the Creep SOP, which offsets the particles perpendicular to the surface.
The particles are birthed from a circle that is carved from the tube geometry.
Load Launch
[CreepSpiral](https://www.sidefx.com/docs/houdini/examples/nodes/sop/creep/CreepSpiral.html)Example for [Spline Creep](https://www.sidefx.com/docs/houdini/nodes/sop/creep.html) geometry node
This example shows how to spiral a line geometry over a tube surface using the Creep SOP.
Load Launch
[CreepText](https://www.sidefx.com/docs/houdini/examples/nodes/sop/creep/CreepText.html)Example for [Spline Creep](https://www.sidefx.com/docs/houdini/nodes/sop/creep.html) geometry node
In this example, some text geometry is creeped along an animated surface.
The surface is comprised of two skinned curves that have been animated using a Sequence Blend SOP. The Creep SOP requires that the creep surface be a surface and not a curve.
Load Launch
[CreepWeave](https://www.sidefx.com/docs/houdini/examples/nodes/sop/creep/CreepWeave.html)Example for [Spline Creep](https://www.sidefx.com/docs/houdini/nodes/sop/creep.html) geometry node
This example shows how you can take a geometry and creep it over an animated surface.
A file, fabric.bgeo, which looks like woven fabric, has been brought in using the File SOP. A NURBS grid has been animated to look like a piece of waving fabric using sine and noise functions.
The fabric.bgeo is crept over the animated NURBS grid, using a Creep SOP, and the result is an animated piece of woven fabric.
See also
!Ray#Ray Geometry