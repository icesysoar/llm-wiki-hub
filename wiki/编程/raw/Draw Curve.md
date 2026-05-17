---
type: concept
title: Draw Curve
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "928619972991"
---
基于视口中的用户输入创建曲线。
### Parameters
The Draw Curve allows freehand drawing of curves in the viewport. Different projection options allow the curve to be snapped to either a construction plane or a collision geometry.
Note
Drawing with a stylus input device will account for pressure and tilt.
This tool uses the [Stroke SOP](https://www.sidefx.com/docs/houdini/nodes/sop/stroke.html "Low level tool for building interactive assets.") internally.
#### Using Draw Curve
To...
Do this
Draw a curve anywhere in the scene
1.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/drawcurve.svg) [Draw Curve](https://www.sidefx.com/docs/houdini/nodes/sop/drawcurve.html "Creates a curve based on user input in the viewport.") tool on the **Create** tab.
2.  Hold LMB and drag to draw a curve freehand on the construction plane.
![](https://www.sidefx.com/docs/houdini/images/shelf/drawcurve1.jpg)
Draw a curve on an object
1.  Select an object in the viewport and click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/drawcurve.svg) [Draw Curve](https://www.sidefx.com/docs/houdini/nodes/sop/drawcurve.html "Creates a curve based on user input in the viewport.") tool on the **Create** tab..
2.  Hold LMB and drag to draw a curve freehand on the object.
![](https://www.sidefx.com/docs/houdini/images/shelf/drawcurve2.jpg)
#### Curve
Create Width Attribute
Creates an attribute named `width` containing the curve’s radius.
When this is disabled, the **Radius** parameter is used only as the display size of the viewport brush.
Radius
Radius of the curve.
Tool
When **Create Stroke Attributes** is enabled, this is stored as integer primitive attribute `stroke_tool` on each curve. It can be used by tools based on this node to take different actions for each curve.
Create Color Attribute
Create a primitive color attribute.
Color
Color of the curve.
Create Stroke Attributes
Creates attributes containing detailed information about the recorded strokes.
See the [Stroke SOP](https://www.sidefx.com/docs/houdini/nodes/sop/stroke.html "Low level tool for building interactive assets.") for more information.
Opacity
Opacity of the curve.
#### Projection
Live Reprojection
None
Projection is only done at drawing stage.
Send Rays
Reproject by resending rays on underlying changing collision geometry.
Use UVs
Use the uv coordinates from the initial projection on changing collision geometry.
Trim Curves
Delete parts of drawn curves that don’t hit any collision geometry.
Projection
XY/YZ/ZX/Screen Plane
Projection of the curve is done on specified orthographic plane.
Geometry
Projection is done on the collision geometry that is plugged into first input.
Projection Center
Center of the orthographic projection plane.
See also
!Paint Color Volume#Paint Color Volume Geometry
!Paint SDF Volume#Paint SDF Volume Geometry
!Volume Rasterize Curve#Volume Rasterize Curve Geometry