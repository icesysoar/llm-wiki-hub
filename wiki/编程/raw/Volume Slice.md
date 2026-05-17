---
type: concept
title: Volume Slice
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:12:00
content_hash: "1d18f0a0f540"
---
从容量中提取2D切片。
### Parameters
The Volume Slice operation extracts a 2d slice from the input volumes.

This is often useful for visualizing what is going on inside 3d volumes by pulling out specific planes of interest.

## PARAMETERS

Source Group

The volume primitives to be sliced. Note the `@name=density` style expressions can be used to choose specific volumes from fluid simulations.

Method

What to extract from the volume.

Volume

For each input volume, a new 2d volume will be created and populated with the values of the input volume.

Mesh

A mesh primitive of the same resolution and size of the first volume will be created. The given attribute will be created of the same size as there are volumes and populated with their values.

Points

Free standing points of the same resolution and size of the first volume will be created.

Plane

What axis to extract from the volume. This is local to the volume’s space. Rotated or transformed volumes will have a corresponding rotated or transformed plane.

Offset

Where the plane should be positioned inside the volume. This is a relative coordinate, with -1..1 being the total range, so 0 means the center of the volume.

Attribute

In the mesh method, a point attribute of this name will be created. Its size will be equal to the number of volumes in the source group. If there are three volumes in the source, a size three float attribute will be made. Each component of the attribute is set to the value of the corresponding attribute at that location.

Local Variable

A local variable will be made mapping from this to the attribute. If left blank, the attribute in ALL CAPS will be the local variable.

Visualize

The `Cd` point attribute will be set to color the output points. The mesh primitive will also be given the `gl_lit` primitive attribute to cause it to not be lit.

Visualization Ramp

The color scheme for visualizing the attribute values. This is used if there is only one volume present, otherwise the first three volumes are mapped to red green and blue.

Visualization Range

The volume values that correspond to the beginning and end of the visualization ramp.

Color Mapping

The color lookup for visualizing the attribute values when **Visualization Ramp** is set to **Custom Ramp**.

Keep Original Geometry

The incoming geometry is deleted unless this checkbox is turned on.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volumetrail.svg) Volume Trail](https://www.sidefx.com/docs/houdini/nodes/sop/volumetrail.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribfromvolume.svg) Attribute from Volume](https://www.sidefx.com/docs/houdini/nodes/sop/attribfromvolume.html)