---
type: concept
title: HeightField Project
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "2169597fe5c2"
---
将三维几何图形投射到一个高度区域。
### Parameters
The first input is the height field to project into, the second input is the geometry to project.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/heightfield_project.jpg)

The node sends rays from the height field to the surface and (if it hits) uses the distance between the points to modify the height field value.

Usually you will use this to import 3D geometry such as buildings or pre-made polygonal mountains into the height field, using the defaults (**Hit farthest** on, **Combine method** set to “Maximum”). You can reverse those settings (**Hit farthest** off, **Combine method** set to “Minimum”) to lower the geometry shape instead of raising it. (It might also be possible to create weird or interesting effects using other settings.)

Tip

This node projects geometry into a height field as 3D height. To project the outline of geometry into a mask field as 2D, use [Height Field Mask by Object](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_maskbyobject.html "Creates a mask based some other geometry.").

## PARAMETERS

Layer

The name of the layer to project the 3D geometry into, usually `height`.

Mask Mode

If the ray hits the geometry, the layer value is set to the **Density** value. This can be optionally inverted so that only the points for which the ray does _not_ hit the geometry are set.

Masking by Geometry

Controls the direction that the geometry is projected onto the terrain in mask mode.

Either Side

The heightfield will be masked if the geometry is either above or below the heightfield.

Above Heightfield

The heightfield will be masked if the geometry is above it, ie, the geometry will project down onto the terrain.

Below Heightfield

The heightfield will be masked if the geometry is below it, ie, the geometry will project up onto the terrain.

Height Layer

The layer to use to determine the height of the terrain for the masking operations.

Density

The value to set the mask to, if the ray hits the geometry.

Invert

Invert the changes to the mask, so the mask value is set to **Density** if the ray _misses_ the geometry, and is left unchanged otherwise.

Hit Farthest

When projecting, record the ray hit farthest collision surface instead of the closest. This defaults to on. To create valleys instead of mountains, turn this off and set **Combine Method** to “Minimum”.

Combine with Existing

How to combine this mask with any existing mask in the input.

Replace

Clear the existing mask and replace it with the new mask.

Add

Add the values in this mask to any existing mask.

Multiply

Multiply the values of the old mask by the values in this mask. This might be useful to “scale” existing values while leaving empty areas alone.

Maximum

Set the mask values to the maximum of the old mask and this mask.

Minimum

Set the mask values to the minimum of the old mask and this mask.

Max Ray Dist

The maximum distance from the original position of the point the rays will look at. The node will not detect intersections outside this range. If the geometry is far from the height field in 3D space, you may need to increase this. If **Combine method** is “Minimum”, any points farther from the surface than this will not be moved.

Supersampling

When projecting, send extra rays which are randomly perturbed (“jittered”), and whose results are combined using the specified **Ray Combiner**. This is useful when your models have small gaps or holes which the ray could otherwise miss.

Samples

The number of sample rays to send. If set to more than 1, a ray is sent from the center of the current voxel, and the starting points of the extra rays are scattered around the center. The distances returned from these collisions are combined as specified by the Ray Combiner. This effect is only visible if the **Jitter** value is not 0.

Jitter

Controls how much the extra rays can vary, specified in voxels. A jitter value of 1 means the extra rays can be up to 1 voxel away from the center of the current voxel, while a jitter value of 0.5 specifies that rays differ by only up to half a voxel away from the center. A jitter value of 0 has no effect.

Ray Combiner

Controls how the distances to the collisions of each ray are combined into a single distance.

Average

Averages the distances to create the final distance.

Median

The final distance is the median distance. This often does a good job of smoothing away spikes which occur as a result of gaps in a model.

Shortest

The shortest ray determines the final distance.

Longest

The longest ray determines the final distance.

Seed

Seeds the random number generator. Different seeds will give different sets of rays, so this can be tuned to minimize spikes caused by gaps and holes.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/heightfield_maskbyobject.svg) HeightField Mask by Object](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_maskbyobject.html)