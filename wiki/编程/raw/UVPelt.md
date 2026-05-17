---
type: concept
title: UVPelt
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "7b9cc696b59e"
---
通过将UV拉向纹理区域的边缘来放松它们。
## Parameters
UV Pelt operates very similar to how a tanner creates a pelt. Cuts are made to the geometry to produce a surface topologically equivalent to a disc. The boundaries of this surface are connected to a frame and stretched out.
Any closed face can be used as a frame for the pelt. A circle is used if no frame is specified. A hint polygon is used to specify which section of the geometry to pelt after performing the cuts. The longest boundary of the section containing the hint polygon is the one connected to the frame. The frame is parameterized to the range `[0, 1)`. The boundary points are spaced around the frame at distances in the frame’s parameterization that are proportional to the edge length with the neighboring boundary point.
The best way to visualize the effects on UVs is in the UV view. To change a viewport to show UVs, click the View menu in the top right corner of a viewport and choose **Set View ▸ UV viewport**, or move the mouse over the view and press Space + 5.
You can also visualize UV attribute values in the 3D view using an [attribute visualizer](https://www.sidefx.com/docs/houdini/basics/visualizers.html "Visualizers create visual representations of otherwise hard-to-see information in the 3D view, such as attribute values and volume interiors.").
UV Pelt creates the UV vertex texture attribute if it does not already exist.
Note
UV Pelt only operates on polygons. Other geometry type such as Bezier and NURBS surfaces can be converted to polygons using a Convert operation prior to applying UV Pelt.
### Using UV Pelt
1.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/uvpelt.svg)[UV Pelt](https://www.sidefx.com/docs/houdini/nodes/sop/uvpelt.html "Relaxes UVs by pulling them out toward the edges of the texture area.") tool on the **Texture** tab.
2.  Select the edges that will form the boundary of the pelt.
    Tip
    You can easily select loops of edges using the [Edge Loop](https://www.sidefx.com/docs/houdini/shelf/edgeloop.html "Creates a loop of cuts using polysplit.") tool.
    ![](https://www.sidefx.com/docs/houdini/images/shelf/uv_pelt_select.jpg)
3.  Press Enter to unwrap your selection.
    ![](https://www.sidefx.com/docs/houdini/images/shelf/uv_pelt_after.jpg)
You can scale the pelt by increasing the **Boundary Springs** in the [parameter editor](https://www.sidefx.com/docs/houdini/ref/panes/parms.html). You can also use [UV Edit](https://www.sidefx.com/docs/houdini/shelf/uvedit.html "UV Edit allows interactive editing of the UVs on the source geometry.") to move the UVs.
### PARAMETERS
UV Attribute
The name of the texture coordinate attribute to pelt, defaulting to `uv`.
Edge Cut Group
Edges to cut.
Pelting Method
Every edge is modeled as a spring. The points are placed to the position that minimizes the spring energy. The choice of Pelting Method affects the strength of individual springs.
Spring Relaxation
Uses spring weights based on length of the edges and the areas of a the faces incident to the edge.
![](https://www.sidefx.com/docs/houdini/images/uv/uvpelt1.jpg)
Tutte Barycentric
Uses unit weights except at boundary points. This means that every point is placed at the mass center of its neighbors. The mass of the boundary points is given by the spring parameter. The main advantage of this method is that it always guarantees a one-to-one parametrization (with no inverted triangles) for convex boundaries.
![](https://www.sidefx.com/docs/houdini/images/uv/uvpelt2.jpg)
Discrete Harmonic
Uses a weight assignment scheme known as discrete harmonic method which minimizes angular distortion.
![](https://www.sidefx.com/docs/houdini/images/uv/uvpelt3.jpg)
Create Output Group
Indicates a primitive group should be created for the polygons making up the pelt.
Output Group
Name of the primitive group to create.
### Pelt
Iterations
Specifies the number of iterations of the algorithm for solving the UV positions.
Boundary Springs
The strength of the springs connecting the pelt boundary to the frame.
Stiffness Attribute
Specifies an attribute of the input geometry’s points that will be used to scale the strength of the springs connected to the point.
Hint Primitive
The primitive specifying which section of the geometry forms the pelt.
### Frame
Frame
The primitive to use for the frame.
U From
The attribute of the frame used for the U coordinate.
V From
The attribute of the frame used for the V coordinate.
Use Range
Indicates the UV coordinates should be moved to the ranges specified with U Range and V Range.
U Range
The location of the left and right edges, respectively, of the texture
V Range
The location of the bottom and top edges, respectively, of the texture
Orientation
Specifies where on the frame to position the first boundary point (the boundary point closest to the hint polygon).
Weight Attribute
Specifies an attribute of the frame’s points that will guide the process of connecting boundary points to the frame.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvproject.svg) UV Project](https://www.sidefx.com/docs/houdini/nodes/sop/uvproject.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvquickshade.svg) UV Quick Shade](https://www.sidefx.com/docs/houdini/nodes/sop/uvquickshade.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/texture.svg) UV Texture](https://www.sidefx.com/docs/houdini/nodes/sop/texture.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvunwrap.svg) UV Unwrap](https://www.sidefx.com/docs/houdini/nodes/sop/uvunwrap.html)UV Pelt operates very similar to how a tanner creates a pelt. Cuts are made to the geometry to produce a surface topologically equivalent to a disc. The boundaries of this surface are connected to a frame and stretched out.
Any closed face can be used as a frame for the pelt. A circle is used if no frame is specified. A hint polygon is used to specify which section of the geometry to pelt after performing the cuts. The longest boundary of the section containing the hint polygon is the one connected to the frame. The frame is parameterized to the range `[0, 1)`. The boundary points are spaced around the frame at distances in the frame’s parameterization that are proportional to the edge length with the neighboring boundary point.
The best way to visualize the effects on UVs is in the UV view. To change a viewport to show UVs, click the View menu in the top right corner of a viewport and choose **Set View ▸ UV viewport**, or move the mouse over the view and press Space + 5.
You can also visualize UV attribute values in the 3D view using an [attribute visualizer](https://www.sidefx.com/docs/houdini/basics/visualizers.html "Visualizers create visual representations of otherwise hard-to-see information in the 3D view, such as attribute values and volume interiors.").
UV Pelt creates the UV vertex texture attribute if it does not already exist.
Note
UV Pelt only operates on polygons. Other geometry type such as Bezier and NURBS surfaces can be converted to polygons using a Convert operation prior to applying UV Pelt.
### Using UV Pelt
1.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/uvpelt.svg)[UV Pelt](https://www.sidefx.com/docs/houdini/nodes/sop/uvpelt.html "Relaxes UVs by pulling them out toward the edges of the texture area.") tool on the **Texture** tab.
2.  Select the edges that will form the boundary of the pelt.
    Tip
    You can easily select loops of edges using the [Edge Loop](https://www.sidefx.com/docs/houdini/shelf/edgeloop.html "Creates a loop of cuts using polysplit.") tool.
    ![](https://www.sidefx.com/docs/houdini/images/shelf/uv_pelt_select.jpg)
3.  Press Enter to unwrap your selection.
    ![](https://www.sidefx.com/docs/houdini/images/shelf/uv_pelt_after.jpg)
You can scale the pelt by increasing the **Boundary Springs** in the [parameter editor](https://www.sidefx.com/docs/houdini/ref/panes/parms.html). You can also use [UV Edit](https://www.sidefx.com/docs/houdini/shelf/uvedit.html "UV Edit allows interactive editing of the UVs on the source geometry.") to move the UVs.
### PARAMETERS
UV Attribute
The name of the texture coordinate attribute to pelt, defaulting to `uv`.
Edge Cut Group
Edges to cut.
Pelting Method
Every edge is modeled as a spring. The points are placed to the position that minimizes the spring energy. The choice of Pelting Method affects the strength of individual springs.
Spring Relaxation
Uses spring weights based on length of the edges and the areas of a the faces incident to the edge.
![](https://www.sidefx.com/docs/houdini/images/uv/uvpelt1.jpg)
Tutte Barycentric
Uses unit weights except at boundary points. This means that every point is placed at the mass center of its neighbors. The mass of the boundary points is given by the spring parameter. The main advantage of this method is that it always guarantees a one-to-one parametrization (with no inverted triangles) for convex boundaries.
![](https://www.sidefx.com/docs/houdini/images/uv/uvpelt2.jpg)
Discrete Harmonic
Uses a weight assignment scheme known as discrete harmonic method which minimizes angular distortion.
![](https://www.sidefx.com/docs/houdini/images/uv/uvpelt3.jpg)
Create Output Group
Indicates a primitive group should be created for the polygons making up the pelt.
Output Group
Name of the primitive group to create.
### Pelt
Iterations
Specifies the number of iterations of the algorithm for solving the UV positions.
Boundary Springs
The strength of the springs connecting the pelt boundary to the frame.
Stiffness Attribute
Specifies an attribute of the input geometry’s points that will be used to scale the strength of the springs connected to the point.
Hint Primitive
The primitive specifying which section of the geometry forms the pelt.
### Frame
Frame
The primitive to use for the frame.
U From
The attribute of the frame used for the U coordinate.
V From
The attribute of the frame used for the V coordinate.
Use Range
Indicates the UV coordinates should be moved to the ranges specified with U Range and V Range.
U Range
The location of the left and right edges, respectively, of the texture
V Range
The location of the bottom and top edges, respectively, of the texture
Orientation
Specifies where on the frame to position the first boundary point (the boundary point closest to the hint polygon).
Weight Attribute
Specifies an attribute of the frame’s points that will guide the process of connecting boundary points to the frame.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvproject.svg) UV Project](https://www.sidefx.com/docs/houdini/nodes/sop/uvproject.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvquickshade.svg) UV Quick Shade](https://www.sidefx.com/docs/houdini/nodes/sop/uvquickshade.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/texture.svg) UV Texture](https://www.sidefx.com/docs/houdini/nodes/sop/texture.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvunwrap.svg) UV Unwrap](https://www.sidefx.com/docs/houdini/nodes/sop/uvunwrap.html)