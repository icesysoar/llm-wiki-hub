---
type: concept
title: HeightField Cutoutby Object
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "6e7ea3f5d534"
---
根据几何图形在地形上创建一个切口。
### Parameters
The `Alpha` layer of a terrain can be used to cutout a non-rectangular shape for display. The cutout occurs at a `0.5`, but some care should be taken to ensure the value varies smoothly to avoid a wavy cutout.
This node converts the geometry into a matching resolution VDB, if it is not already a VDB, and then sets the `Alpha` layer to be displayed if it is inside the object.
![](https://www.sidefx.com/docs/houdini/images/sop/terrain_cutout.jpg)
## Cutting Options
Invert
Set `Alpha` to one outside of the object rather than inside.
Combine
How to merge with any existing `Alpha`. If no layer exists, a layer of value `1` will be created.
Replace
Ignore previous values.
Intersect
Minimum of the two values, so only present where both are present.
Union
Maximum of the two values, so present where either are present.
Subtract
Minimum of the old value an complement of the new value - this will bite out the new object from the previous cutout.
Crop to Bounds
Adjusting the `Alpha` layer is purely a visual effect - the terrain will continue to exist over all the clipped values. When cropping is enabled, the terrain will be shrunk to the smallest rectangular region that is active.
## Layer Bindings
Alpha Layer
Which layer to apply the cut out changes. The standard visualizers will use `Alpha` for clipping.
Height Layer
Which layer to use for height computation. To find if a voxel is inside the object, it has be lifted from the ground plane by the height value.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/heightfield_project.svg) HeightField Project](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_project.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/heightfield_maskbyobject.svg) HeightField Mask by Object](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_maskbyobject.html)