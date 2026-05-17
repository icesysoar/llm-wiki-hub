---
type: concept
title: Circle
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "f8e943aa1caf"
---
创建开放或封闭的弧形、圆形和椭圆形。
### Parameters
This Operation is used to create circles and ellipses. If you click and drag the mouse, it generates a circle whose radii are specified by your drag.
Clicking the mouse button on the Construction Plane without dragging places a circle with radii specified in the Parameters dialog box (default of 1) at the location of the mouse click. The radii of the default circle are aligned with the Construction Plane’s X and Y axis.
Typing Enter places a circle or ellipse whose size and position are specified in the Parameters dialog. The radii of the default circle are aligned with the Construction Plane’s X and Y axis.
If an odd aspect ratio was previously entered in the Parameters dialog, clicking and dragging produces circles which maintain that aspect ratio. This can be reset by clicking on the Reset Radii button.
Note
If two NURBS circles that are non-rational (i.e. their X and Y radii are unequal) are skinned, more isoparms may be generated than expected. This is because non-rational NURBS circles parameterize their knots based on chord length, and the [Skin SOP](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html "Builds a skin surface between any number of shape curves.") must consolidate the total number of knots between the two circles before skinning.
To remedy this, you may want to use a [Refine SOP](https://www.sidefx.com/docs/houdini/nodes/sop/refine.html "Increases the number of points/CVs in a curve or surface
without changing its shape."), and unrefine the resulting skin, or better yet, before unrefining, start with the same circle and use a [Primitive SOP](https://www.sidefx.com/docs/houdini/nodes/sop/primitive.html "Edits primitive, primitive attributes, and profile curves.") or [Transform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/xform.html "The Transform operation transforms the source geometry in object space using a transformation matrix.") to deform the second copy before skinning.
## Placing a Circle in the viewer
To...
Do this
Place the circle anywhere in the scene
1.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/circle.svg) [Circle](https://www.sidefx.com/docs/houdini/nodes/sop/circle.html "Creates open or closed arcs, circles and ellipses.") tool on the **Create** tab.
2.  Move the cursor into the [scene view](https://www.sidefx.com/docs/houdini/ref/views/3dview.html).
    Note
    You can hold Alt to detach the circle from the construction plane.
3.  Click LMB to place the circle anywhere in the scene view.
    If you press Enter without clicking, Houdini places the circle at the origin.
Place the circle at the origin
Press ⌃ Ctrl + LMB on the ![](https://www.sidefx.com/docs/houdini/icons/SOP/circle.svg) [Circle](https://www.sidefx.com/docs/houdini/nodes/sop/circle.html "Creates open or closed arcs, circles and ellipses.") tool on the [shelf](https://www.sidefx.com/docs/houdini/shelf/index.html "How to use and customize the icons on the shelf at the top of the main window.").
Note
The circle can be moved once it is placed by either dragging it in the [scene view](https://www.sidefx.com/docs/houdini/ref/views/3dview.html) or changing the values in the [parameter editor](https://www.sidefx.com/docs/houdini/ref/panes/parms.html).
## Circle Handles
There are special handles available at the geometry level for the circle object that allow you to stretch and squash it.
1.  Move to the geometry level by double clicking LMB the circle node in the [network editor](https://www.sidefx.com/docs/houdini/ref/panes/network.html) or by clicking the **Jump to Operator** button on the operation controls toolbar.
2.  Drag the handles to squash or stretch the circle.
To...
Do this
Stretch or squash the circle along the x-axis
Drag the red handle.
Stretch or squash the circle along the y-axis
Drag the green handle.
![](https://www.sidefx.com/docs/houdini/images/shelf/circle_red.jpg) ![](https://www.sidefx.com/docs/houdini/images/shelf/circle_green.jpg)
## PARAMETERS
Primitive Type
Type of geometry created.
Orientation
Orientation of the circle.
Radius
These are the X and Y radii of the circle. Entering non-equal values in the xy fields results in elliptical shapes.
Center
Location of the center of the circle.
Rotate
Rotation about the center of the circle.
Uniform Scale
Uniform scaling.
Order
Sets the spline order when building a circle with a Bezier or NURBS curve type. The lowest order is 2 (linear); the highest is 11. Cubic curves are built by default.
Divisions
The number of points + 1 used to describe the circle. This option applies to polygons and imperfect NURBS only. The more divisions a circle has, the smoother it looks. Using three divisions makes a triangle, four divisions a diamond, five divisions a pentagon, and so on.
For open arc types, the number of points will equal _Divisions + 1_, and for closed arc types, _Divisions + 2_. The number of points on a Bezier circle will be higher than the number of divisions specified, based on the order of the Bezier curve. The # of Divisions is ignored when building a perfect (rational) NURBS or Bezier circle.
Tip
Set the Divisions to 3 to create Triangles.
Arc Type
This menu provides you with the choices: Closed, Open Arc, Closed Arc, and Sliced Arc. The difference between these is illustrated below:
![](https://www.sidefx.com/docs/houdini/nodes/images/CircleSlicea.jpg)
This option is disabled when building a perfect (rational) NURBS or Bezier circle. To remove a part of the rational curve later, you can use the [Carve SOP](https://www.sidefx.com/docs/houdini/nodes/sop/carve.html "Slices, cuts or extracts points or cross-sections from a
primitive.").
The Closed and Closed Arc options are primarily meant for polygonal circles.
Arc Angles
When making an arc rather than a full circle, these values specify the starting and ending points of the arc in degrees. This option is disabled when building a perfect (rational) NURBS or Bezier circle.
Imperfect
Specifies whether the NURBS / Bezier circle should be built using rational or non-rational splines. A perfect circle has a rational topology: one that associates non-unit weights with certain vertices. Furthermore, a perfect circle has a predefined number and positions of CVs for any given spline order. An imperfect circle is non-rational and its number of CVs isn’t that strictly determined by its order.
Rational circles built this way yield a mathematically perfect shape; however, given their special definition, perfect circles are not always the ideal choice for further modeling of their points. Besides, they represent heavier geometry and may put more pressure both on the cpu and ram. In practice, you will find imperfect circles to be a better modeling choice, so it is advisable to build perfect circles only when perfect shapes are paramount.
## EXAMPLES
Load Launch
[CircleExamples](https://www.sidefx.com/docs/houdini/examples/nodes/sop/circle/CircleExamples.html) Example for [Circle](https://www.sidefx.com/docs/houdini/nodes/sop/circle.html) geometry node
This is an example of the different geometry types and arc types a circle can have.
Geometry types include primitives, polygons, NURBS, and Beziers.
Arc types include closed circle, open arc, closed arc, and sliced arc.
The arc examples are animated, so playback the animation to see the arcs opening.