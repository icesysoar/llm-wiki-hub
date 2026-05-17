---
type: concept
title: Control
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "47243a3f4e4b"
---
创建简单的几何图形，作为控制图形使用。
### Parameters
The Control SOP generates simple primitives as selected by the user. It is primarily used by the [Null OBJ](https://www.sidefx.com/docs/houdini/nodes/obj/null.html "Serves as a place-holder in the scene, usually for parenting. this object
does not render.") to create control shapes.
The [Control SOP](https://www.sidefx.com/docs/houdini/nodes/sop/control.html "Creates simple geometry for use as control shapes.") can take in a single input as its source geometry. It will display the source geometry if the “Custom” control type is selected.
## INPUTS
Geometry Source
If an input is used, then the source geometry will be displayed as long as the “Custom” control type is selected.
## PARAMETERS
Color
Display color.
Size
Size of the control along xyz axes.
Center
Center position of the control.
Rotate
Rotation about the center of the control.
Uniform Scale
Uniform scaling about the xyz axes.
Display
Whether to display only the icon, only the axis, or both.
Icon
Displays only the icon geometry.
Axis
Displays only the axis.
Icon and Axis
Displays both the icon and axis.
Control Type
Switches between the type of geometry to display.
Null
Displays null geometry (i.e. cross).
Circles
Displays circle primitives.
Box
Displays box primitive.
Planes
Displays plane primitives.
Null and Circles
Displays null and circle primitives.
Null and Box
Displays null and box primitives.
Null and Planes
Displays null and plane primitives.
Custom
If an input source is specified, this option will display the geometry of the input.
Orientation
Used in conjunction with circle or plane primitives. Determines which circles or planes to display.
All planes
Displays circle or plane primitives on the YZ, ZX and XY planes.
YZ plane
Displays a circle or plane primitive on the YZ plane.
ZX plane
Displays a circle or plane primitive on the ZX plane.
XY plane
Displays a circle or plane primitive on the XY plane.
YZ, ZX planes
Displays circle or plane primitives on the YZ and ZX planes.
YZ, XY planes
Displays circle or plane primitives on the YZ and XY planes.
ZX, XY planes
Displays circle or plane primitives on the ZX and XY planes.
Shaded Mode
Determines whether to display the primitives as shaded objects or as wireframe objects.
off
Displays primitives in wireframe mode.
on
Displays primitives in shaded mode.
Pack Control Geometry
Use a packed disk primitive for the control geometry. This enables instanced drawing of the control which can greatly improve animation performance.
Extra Snap Points
Allows extra points to be added for snapping, which is especially useful when the control geometry is packed (see **Pack Control Geometry**, above). Packed geometry will already have a point at its origin, but the points in the packed geometry itself cannot be used as snap targets.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/OBJ/null.svg) Null](https://www.sidefx.com/docs/houdini/nodes/obj/null.html)  
![](https://www.sidefx.com/docs/houdini/icons/MISC/generic.svg)
