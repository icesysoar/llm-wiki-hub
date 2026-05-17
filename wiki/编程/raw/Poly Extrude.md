---
type: concept
title: Poly Extrude
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "98ec65bf9800"
---
挤出多边形的面和边。
### Parameters
![](https://www.sidefx.com/docs/houdini/images/model/extrude_simple.jpg)
Poly Extrude lets you “pull” faces and edges out to create new columns/sheets of polygons.
You can make the extrusion bigger or smaller (inset/outset), and twist it.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_edges_interior.png)
If you extrude interior edges, the node will use the surface normals.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_edges_boundary.jpg)
If you extrude boundary edges, the node will use the surface direction.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_curve.jpg)
You can set the number of divisions in the extrusion and have the extrusion curve from the source to the destination.
You can draw a curve and have the extrusion follow the shape of the curve.
The node creates a copy of the selected components and transforms them according the parameters, then builds a polygonal bridge between them. The original components are called the _back_ of the extrusion (drawn in red), and the copied/transformed components are called the _front_ (drawn in green).
## How to
To...
Do this
Extrude edges/faces
1.  Select the edges or faces you want to extrude.
2.  On the **Model** shelf, click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/polyextrude.svg) Poly Extrude tool.
3.  Use the line handle to pull or push the extrusion front. Use the controls in the operation toolbar across the top of the viewport to set the inset and number of divisions.
## Follow a curve
To...
Do this
Make the extrusion follow an external curve
1.  Draw the curve you want the extrusion to follow.
2.  Extrude the edges/faces (see above).
3.  Connect the curve to the Poly Extrude node’s second input.
4.  In the Poly Extrude parameters, set **Spine shape** to “Curve from second input”.
## Distance/twist vs. transform
![](https://www.sidefx.com/docs/houdini/images/model/extrude_simple.jpg)
By default, the tool only extrudes along the normals, with controls for distance, inset, and twist.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_transformed.jpg)
You can optionally turn on the **Transform extruded front** to also apply a full move/rotate/scale transform to the extrusion front.
This transform is applied _in addition to_ the **Distance** and **Twist** controls, so you probably want to set them to `0` if you want to use the transform.
## Multiple extrusions
![](https://www.sidefx.com/docs/houdini/images/model/extrude_multi.jpg)
The node automatically treats adjacent edges/faces as groups.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_individual.jpg)
You can extrude individual edges/faces instead of treating them as a group.
The node transforms each element in its own space (unless you set **Extrusion mode** to “Translate Global”).
### Splitting groups
![](https://www.sidefx.com/docs/houdini/images/model/bridge_split_group.jpg)
If you want to define multiple source loops with edges/faces that happen to be adjacent, they will just look like one thing to the node. You can choose a point/edge **Split group** that divides adjacent faces/edges into separate groups.
In this image, the yellow line is an edge group splitting the selected faces into two sources.
(If you are extruding edges, you split with a point group. If you are extruding faces, you split with an edge group.)
## Notes
-   Unlike previous versions of PolyExtrude, this node **does not support local variables or per-primitive/edge expressions**, for performance reasons.
    If you want to vary some parameter per-primitive/edge, store the value in an attribute and use the controls on the **Local Control** tab.
## PARAMETERS
Group
Faces or edges to extrude. This can be the name of a primitive or edge group.
Divide Into
Whether to treat adjacent edges/faces as a group, or as individuals.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_individual.jpg)
Split Group
When **Divide into** is “Connected components”, any adjacent elements are treated as a single group. If there are edges/faces that are adjacent but you want to be separate groups, you can split them using this group. See [splitting](https://www.sidefx.com/docs/houdini/nodes/sop/polyextrude.html#splitting) above.
![](https://www.sidefx.com/docs/houdini/images/model/bridge_split_group.jpg)
Extrusion Mode
Which normals to use to extrude faces/edges.
Primitive/Edge Normal
Extrude faces along their normals, extrude edges intelligently depending on whether they are interior or boundary edges.
Point Normal
Extrude along point normals.
Distance
How far (in Houdini units) to “pull out” the extrusion. You can use a negative number to “push” the extrusion in the opposite direction of the normals.
Inset
Expands or dilates the extrusion front. This has no effect when extruding edges.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_inset.jpg)
Twist
Twists the extrusion front around the extrusion spine.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_twist.jpg)
Divisions
The number of rows of polygons in the extrusion.
Spine shape
The path the extrusion takes between the back and front.
Straight
Straight from the back to the front.
Curved
Curve between the back and front orientations.
Curve From Second Input
Take the shape of a curve connected to this node’s second input.
## Extrusion
### Front transform
Transform Extruded Front
Turn this on to show full transformation (move, rotate, scale) controls for the extrusion front. This transform is applied _in addition to_ the **Distance** and **Twist** controls, so you probably want to set them to `0` if you want to use the transform.
Transformation Order
Order in which to apply local transformation (when **Transform Extruded Front** is on).
Rotation Order
Order in which to apply local rotations (when **Transform Extruded Front** is on).
Translate
Moves the extrusion front (when **Transform Extruded Front** is on). The Z component controls the extrusion amount. The X and Y are applied to the front after extrusion.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_move.jpg)
Rotate
Rotates the extrusion front (when **Transform Extruded Front** is on). You can use this to twist the extrusion, but see also **Twist** parameter for more information.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_rotate.jpg)
Scale
Scales the extrusion front (when **Transform Extruded Front** is on).
![](https://www.sidefx.com/docs/houdini/images/model/extrude_scale.jpg)
Shear
Shears the extrusion front (when **Transform Extruded Front** is on). The numbers represent X shear in XY plane, X shear in the XZ plane, and Y shear in the YZ plane.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_shear.jpg)
Pivot
Local pivot point for moving, rotating, and scaling the extrusion front (when **Transform Extruded Front** is on). This is local to each front, unless **Extrusion mode** is “Global translate”.
### Output Geometry and Groups
Output Front
Generate polygons for the extrusion front. Turn this off if you only want the sides. This has no effect when extruding edges.
Front Group
Enter the name to put the polygons of the extrusion front in this group. You can use this group name in later nodes to easily target just the front polygons.
Output Back
Turn this off to delete the original extruded polygons. This has no effect when extruding edges.
Back Group
Enter the name to put the polygons at the start of the extrusion in this group. You can use this group name in later nodes to easily target just the back polygons.
Output Side
Generate polygons for the sides of the extrusion. If you turn this off, the node essentially is just a copy and translate of the selected edges/faces.
Side Group
Enter the name to put the polygons in the extrusion sides in this group. You can use this group name in later nodes to easily target just the side polygons.
Front Boundary Group
Enter the name to put the edges bordering the front and side of the extrusion in this group. This group is equal to the front group when extruding edges. This group is empty when both **Output Front** and **Output Side** are off. This group is highlighted green in the polyextrude state in the viewport.
Back Boundary Group
Enter the name to put the edges bordering the back and side of the extrusion in this group. This group is equal to the back group when extruding edges. This group is highlighted red in the polyextrude state in the viewport.
Preserve Groups
If the original edges/faces were in any groups, add the corresponding edges/faces in the extrusion front to the same groups.
### Insetting
Limit insetting
When this is on, the extrusion front cannot be inset beyond a point where the node determines it would create a degenerate, pinched, zero-size, or otherwise undesirable front. If you turn this off, insetting can continue to shrink the front through pinching and then invert so that further insetting actually grows the front. You should generally just leave this on all the time.
Use common limit
If you are extruding multiple fronts, as you increase **Inset**, once one front has a zero-size edge, all fronts stop shrinking. Turn this off to allow each front to shrink to zero individually as you increase **Inset**. If **Limit insetting to zero size** is off, this option is ignored.
### Normals
By default, if the input geometry has normal attributes, the node adds those attributes to the extruded geometry.
Add Vertex Normals
Add vertex normals. If vertex normals existed on the original selected edges/faces, the node overwrites them.
Cusp Angle
Vertices across a shared edge will have different normals if the face normals differ by more than this angle.
Cusp All Front Boundary Edges
Always cusp boundary edges of the extrusion front, ignoring the **Cusp angle**.
Cusp All Back Boundary Edges
Always cusp boundary edges of the extrusion back, ignoring the **Cusp angle**.
## Spine Control
Bridging tab controls several details of how the bridge connecting the back and front behaves.
### Shape Adjustment
Front Magnitude
How much the orientation of the front affects the direction of the extrusion at that end. Only available when **Spine shape** is not “Straight”.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_magnitude1.jpg) ![](https://www.sidefx.com/docs/houdini/images/model/extrude_magnitude2.jpg)
Back Magnitude
How much the orientation of the original edges/faces affects the direction of the extrusion at that end. Only available when **Spine shape** is not “Straight”.
Front Stiffness
How far the extrusion path follows the orientation of the extrusion front. Only available when **Spine shape** is not “Straight”.
![](https://www.sidefx.com/docs/houdini/images/model/extrude_stiffness1.jpg) ![](https://www.sidefx.com/docs/houdini/images/model/extrude_stiffness2.jpg)
Back Stiffness
How far the path of the extrusion follows the orientation of the original edges/faces. Only available when **Spine shape** is not “Straight”.
Interpolation
A technical parameter of the node’s internal algorithm. “Rotating frame” tends to be better for twisting bridges, but in practice there’s no good basis for choosing one or the other. You can try both and see if they make a difference for your bridge.
Spacing
Controls the spacing of the divisions along the bridge.
Uniform
Spaced equally.
Curvature Sensitive
Uses more polygons in high curvature areas and fewer polygons in straight areas.
### External Spine
Available when **Spine shape** is “Curve from second input” and the node’s second input is connected.
Reverse Direction
Reverse the direction of the spine curve.
Axial Rotation
Rotate the spine curve around the line through its end points.
Front Blend
How much to blend the direction at the end of the curve with the orientation of the extrusion front.
Back Blend
How much to blend the direction at the start of the curve with the orientation of the original edges/faces.
### Thickness
These parameters let you scale the width of the bridge along its length, creating pinches and/bulges in the bridge.
-   :include polybridge#thicknessscale:
-   :include polybridge#thicknessattrib:
-   :include polybridge#thicknessramp:
### Twist
-   :include polybridge#twistscale:
-   :include polybridge#twistattrib:
-   :include polybridge#twistramp:
## Local Control
### Local Attributes
Distance scale
Multiply the extrusion distance by the value of this attribute (primitive attribute for face extrusion or point attribute for edge extrusion).
Inset scale
Multiply the inset amount by the value of this attribute (primitive attribute for face extrusion or point attribute for edge extrusion).
Twist scale
Multiply the twist amount by the value of this attribute (primitive attribute for face extrusion or point attribute for edge extrusion).
Divisions scale
Multiply the number of divisions by the value of this attribute (primitive attribute for face extrusion or point attribute for edge extrusion).
### Local Frames
You can use these attributes to control the local transform space and extrusion amount of each individual component.
If you're extruding faces, these should be primitive attributes, and the values are averaged from all faces in an extrusion front. If you're extruding edges, they should be point attributes, and the value of each edge is the average of the values on its two endpoints.
X Direction
Use this vector attribute (primitive attribute for face extrusion or point attribute for edge extrusion) as an edge/face’s local X axis. The node makes this orthogonal to the local Z axis if it’s not already. If the vector is `0,0,0` the node ignores it. The node automatically normalizes the vector.
Z Direction
Use this vector attribute (primitive attribute for face extrusion or point attribute for edge extrusion) as an edge/face’s local Z axis. This overrides the computed normal. If the vector is `0,0,0` the node ignores it. The node automatically normalizes the vector.
Center
Use this vector attribute (primitive attribute for face extrusion or point attribute for edge extrusion) as the edge/face’s center. This overrides the computed centroid.
Z Scale
Scale the extrusion amount by the value of this attribute.
## EXAMPLES
Load Launch
[PolyextrudeTube](https://www.sidefx.com/docs/houdini/examples/nodes/sop/polyextrude/PolyextrudeTube.html)Example for [Poly Extrude](https://www.sidefx.com/docs/houdini/nodes/sop/polyextrude.html) geometry node
This example demonstrates how to extrude geometry using the Poly Extrude SOP, as well as demonstrating the different extrude controls, Global and Local.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/polybridge.svg) Poly Bridge](https://www.sidefx.com/docs/houdini/nodes/sop/polybridge.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/polybevel.svg) PolyBevel](https://www.sidefx.com/docs/houdini/nodes/sop/polybevel.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/extrude.svg) Extrude](https://www.sidefx.com/docs/houdini/nodes/sop/extrude.html)