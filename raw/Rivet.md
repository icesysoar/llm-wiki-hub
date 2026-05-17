---
type: concept
title: Rivet
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "302f8a7bdf26"
---
在对象表面上创建铆钉，通常用于父项。
### Parameters
The Rivet Object gets its world transform from the surface of another object. This tool is useful for attaching objects to deforming surfaces in animation. For example, you can use this tool to attach a saddle to a running horse by creating the rivet on the horse’s back and parenting it to the saddle.

When calculating the transform, points defined in the Point Group parameter are obtained from the Rivet Geometry.

The centroid of these points is designated as the origin of the rivet coordinate frame. The x-axis of that frame is defined by the first two points and the xy-plane of the frame is defined by the first three points.

Alternatively, the rivet can build its coordinate frame based on point attributes of the base surface.

## PARAMETERS

### Rivet

Rivet Geometry

The SOP to attach the geometry to.

Point Group

The point group (or point numbers) based on which the local surface frame is built. Group centroid is set as the frame origin. The x-axis of the frame is defined by first two points.

The z-axis is perpendicular to the plane defined by first three points. If the point group contains only one or two points, the frame axes are world aligned.

Point Weights

The weights assigned to the first three points in the group. This parameter allows to fine tune the exact position of the rivet origin on the plane constructed from the first three points. For example, the weights (0.5, 0.5, 0) will place the origin half way between the first and the second point. Note that the weights should not sum up to 0. The points beyond the third one, if any, are assigned the weight values of 1.

Use Point Vector Attributes For Rivet Frame

With this option turned on, the rivet coordinate frame is calculated based on the point attributes specified in the parameters **X-Axis Attribute** and **Z-Axis Attribute**. For all points determined by the **Point Group** parameter, the attributes are evaluated for the base geometry and averaged out to yield two vectors X and Z that will determine the final x-axis and z-axis of the rivet coordinate frame. If the two average vectors X and Z are not orthogonal, before calculating the x-axis, the X vector is replaced with a vector that lies in the X-Z plane and that is perpendicular to the Z vector.

If this option is turned off then the rivet uses the method for frame calculation described in **Point Group** parameter help above.

X-Axis Attribute

The name of an attribute used for the calculation of the x-axis in the rivet coordinate frame. This has to be a point attribute of a vector type.

Z-Axis Attribute

The name of an attribute used for the calculation of the z-axis in the rivet coordinate frame. This has to be a point attribute of a vector type.

### Misc

Set Wireframe Color

Use the specified wireframe color

Wireframe Color

The display color of the object

Viewport Selecting Enabled

Object is capable of being picked in the viewport.

Select Script

Script to run when the object is picked in the viewport. See [select scripts](https://www.sidefx.com/docs/houdini/commands/_guide.html) .

Cache Object Transform

Caches object transforms once Houdini calculates them. This is especially useful for objects whose world space position is expensive to calculate (such as [Sticky objects](https://www.sidefx.com/docs/houdini/nodes/obj/sticky.html "Creates a sticky object based on the UV’s of a surface, usually for parenting.")), and objects at the end of long parenting chains (such as [Bones](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html "The Bone Object is used to create hierarchies of limb-like objects
that form part of a hierarchy …")). This option is turned on by default for Sticky and Bone objects.

See the **OBJ Caching** section of the [Houdini Preferences](https://www.sidefx.com/docs/houdini/ref/windows/mainprefs.html#objcache) window for how to control the size of the object transform cache.

Geometry Scale

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

### EXAMPLES

Load Launch

[RivetWaveform](https://www.sidefx.com/docs/houdini/examples/nodes/obj/rivet/RivetWaveform.html)Example for [Rivet](https://www.sidefx.com/docs/houdini/nodes/obj/rivet.html) object node

In this example, a Waveform deformer is applied to a grid. A Rivet is then attached to the surface of the grid, and then parented to a sphere.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/OBJ/fetch.svg) Fetch](https://www.sidefx.com/docs/houdini/nodes/obj/fetch.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/OBJ/sticky.svg) Sticky](https://www.sidefx.com/docs/houdini/nodes/obj/sticky.html)