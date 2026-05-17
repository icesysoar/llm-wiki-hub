---
type: concept
title: Comb
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "d65938392d0d"
---
通过绘画调整表面点法线。
### Parameters
The Comb brush is designed to allow you to intuitively adjust surface point normals in the viewer. The brush pushes point normals over as it moves across the surface.
## Comb
1.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/comb.svg)[Comb](https://www.sidefx.com/docs/houdini/nodes/sop/comb.html "Adjust surface point normals by painting.") tool on the **Characters** tab.
2.  Set the **Comb Lift**, **Radius**, **UV Radius**, and **Opacity** on the operation controls toolbar.
3.  Hold and drag your cursor over the vector attributes you want to comb.
![](https://www.sidefx.com/docs/houdini/images/shelf/comb.jpg)
Note
You can comb other vector attributes by turning off the **Override Normal** checkbox and typing the name of the attribute you want to comb.
## PARAMETERS
## Operation
Comb Lift
This controls how far the normals will be lifted off the surface. A value of 1 will cause the normals to move towards an upright position, a value of 0 will cause them to move towards lying flat in the dragged direction, and a value of -1 will cause them to move towards a downright position.
Keep Normal Length
If not set, the normals will be normalized when they are combed. If it is set, the length of the normals will be left unchanged by the comb operation.
Override Normal
This allows you to specify an attribute other than N to comb. The attribute must be 3 floats in length.
Reset All Changes
This button will restore the geometry to its original state.
Operation for All
Comb Normals
Updates a vector attribute by blending it with a target direction. The target direction is computed by adding the brushed direction (tangent to the surface) and a “lift” amount in the normal direction. The amount of blending is controlled by the **Opacity**.
Smooth Normals
Uses the average of the nearby vector attributes as the target direction.
Erase Change
Uses the original attribute value as the target direction.
Lift Normals
Allows the lift to change, but prevents any rotation about the surface normal.
Rotate Normals
Allows the direction of the vector attribute to change (ie. it can rotate about the surface normal), but prevents the lift from changing.
### Brush
Shape
The basic shape of the brush: circle, square, or bitmap.
Bitmap
What bitmap to use. The alpha channel becomes the brush.
Radius
The radius of the brush when painting in the 3d viewport.
UV Radius
The radius of the brush when painting in the 2d viewport.
Radius Pressure
This controls how much effect the pressure of a stylus will have on the radius. A value of 1 means the radius will go from 0 to the amount in Radius. A value of 0 will mean the radius will always be constant, regardless of pressure. A value of 0.5 will mean the radius will be scaled between one half of Radius and Radius.
Depth
If set, this limits how far the brush will paint along its axis. This can be used if connectivity is disabled to limit the effect of the brush. The first parameter is how deep below the surface the brush should penetrate. The second is how high above the surface it should stop. These values can be negative.
Brush Angle
How far to rotate the brush.
Brush Squash
Amount to squash the brush in the y direction before rotation.
Opacity
The amount to affect the stencil mask.
Opacity Pressure
This controls the how much effect the pressure of a stylus will have on the opacity. It obeys the same scaling as the Radius Pressure.
Brush Splatter
A random noise in the brush’s opacity based upon the position on the brush.
Paper Grain
A random noise on the object’s stencil mask based on the object position.
Soft Edge
Percentage of the brush to be rolled off.
Kernel Function
Which metaball kernel to use for the roll off.
Up Vector Type
How the brush should be oriented on the surface:
Stroke Direction
Oriented in the direction in which the brush moves.
Fixed
Oriented as specified in the Up Vector field.
Up Vector
The fixed up vector to orient brush to.
### Symmetry
Reflective
If set, the brush will perform reflective symmetry. Any strokes will be mirrored along the plane of symmetry.
Rotational
If set, the brush will perform rotational symmetry. Any strokes will be rotated around the axis of symmetry.
Axis
This defines the normal of the plane of symmetry for reflection and the axis of symmetry for rotation.
Origin
This defines the origin of the plane of symmetry for reflection and the origin of the axis of symmetry for rotation.
Number of Rotate
This defines the degree of rotational symmetry. A degree of 3 means the stroke will be applied 3 times at 120 degree separation. A value of 5 will perform the stroke 5 times with 72 degrees of separation.
Reflection Dist
This is the distance of the plane of symmetry from the origin of symmetry.
UV Reflective
If set, the brush will reflect when brushing is done in the UV viewport.
UV Origin
The origin of the line of reflection in the UV viewport.
UV Angle
The angle of the line of reflection in the UV viewport. 0 will mirror about the U axis, 90 will mirror about the V axis.
### Stroke
Orient Brush To Surface
Switches between the brush being perpendicular to the surface or always oriented along the view direction. If you are having trouble with a shaky brush, try turning this off. Turn this off in order to brush on disconnected points, (point clouds).
Use Connectivity
If set, the tool will only affect points connected to the closest point to the intersection. This is usually a good thing, as it avoids accidentally painting through the geometry (but see the depth parameter), but can prevent smoothly painting across seams. This should usually be turned off in order to brush on disconnected points, (point clouds), since they are not connected to each other.
Use Normals
If set, the tool will only affect points facing in the same direction as the closet point to the intersection. This is usually good to avoid accidentally painting the backfacing parts of geometry, but if you want a pure depth brush can be turned off.
Realtime Mode
Set this to paint geometry as it’s deforming.
Direction
The current direction of the brush. If orient to surface is on, this is the normal direction of the surface hit by the brush. Otherwise, it is the direction from the eye to the surface.
Hit Location
The current location of the brush. This tracks the surface as the brush moves along it.
Hit Primitive
The primitive number of the primitive the current brush is centered at.
Hit UV
The location the current brush is on the current primitive. Note this is a parametric UV location, not the texture UV location.
Hit Pressure
The amount of force the brush is currently applying. This is only meaningful when a tablet interface that supports pressure is used.
Hit Point
The point closest to the current brush’s center.
Event
Controls the current state of the brush. When it is on No-op, the values of the stroke tab are ignored and no updating of the geometry is done. Other values are set automatically as you brush the surface, allowing the SOP to update in response to your actions.
## EXAMPLES
Load Launch
[CombGrass](https://www.sidefx.com/docs/houdini/examples/nodes/sop/comb/CombGrass.html)Example for [Comb](https://www.sidefx.com/docs/houdini/nodes/sop/comb.html) geometry node
This example shows how to use the Comb SOP to control the direction of point normals by interactively “painting” over the normals.
Two Comb SOPs are used to comb the normals on a grid in different directions. A Sequence Blend SOP blends between the two so that the normals look like they are swaying.
A simple line geometry is attached to those points.
The Comb SOP is a great way to animate things like hair and grass.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/OBJ_STATE/paintcapturelayer.svg) Capture Layer Paint](https://www.sidefx.com/docs/houdini/nodes/sop/capturelayerpaint.html)
-   [/nodes/sop/paint](https://www.sidefx.com/docs/houdini/nodes/sop/paint.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/sculpt.svg) Sculpt](https://www.sidefx.com/docs/houdini/nodes/sop/sculpt.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvbrush.svg) UV Brush](https://www.sidefx.com/docs/houdini/nodes/sop/uvbrush.html)