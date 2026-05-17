---
type: concept
title: HeightField Mask by Object
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "e45bc3934cc4"
---
在其他几何图形的基础上创建一个掩码。
### Parameters
You can create the mask by projecting surface geometry onto the height field, or by intersecting the height field with a fog or SDF volume.

Connect a height field to the first input, and the geometry to the second input.

Tip

This node projects the outline of geometry into a mask field as 2D. To project the geometry into a height field mask field as 3D height, use [Height Field Project](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_project.html "Projects 3D geometry into a height field.").

## PARAMETERS

## Masking

Combine with Existing

How to combine this mask with any existing mask in the input.

Replace

Clear the existing mask and replace it with the new mask.

Add

Add the values in this mask to any existing mask.

Subtract

Subtract the values in this mask from any existing mask.

Difference

Set the mask values to the difference between the old mask and this mask.

Multiply

Multiply the values of the old mask by the values in this mask. This might be useful to “scale” existing values while leaving empty areas alone.

Maximum

Set the mask values to the maximum of the old mask and this mask.

Minimum

Set the mask values to the minimum of the old mask and this mask.

Blend

Blend the old mask and this mask by a certain amount.

Blend

The amount to blend the old mask with what you draw, when **Combine with existing** is “blend”. A value of `0` leaves the existing mask, a value of `1` replaces with the new mask, a value of `0.5` blends equally between the old and new mask.

Method

Project

Assume the second input is surface geometry, project it “down” onto the terrain to create the mask.

Fog Volume

Assume the second input is a fog volume, create the mask where it intersects the terrain.

SDF Volume

Assume the second input is an SDF volume, create the mask where it intersects the terrain.

Masking by Geometry

Controls the direction that the geometry is projected onto the terrain in the Project mode.

Either Side

The heightfield will be masked if the geometry is either above or below the heightfield.

Above Heightfield

The heightfield will be masked if the geometry is above it, ie, the geometry will project down onto the terrain.

Below Heightfield

The heightfield will be masked if the geometry is below it, ie, the geometry will project up onto the terrain.

Invert Mask: Invert Mask.

Maximum Distance

The maximum distance to project before deciding the projection has missed the height field, when **Method** is “project”.

Density

The value to set the mask layer to where the geometry projects/intersects.

Blur Method

How to blur the edges of the mask. The effect is only visible when **Blur radius** is greater than 0.

Blur

Gaussian blur.

Box Blur

Faster blur.

Expand

Instead of blurring, expand the drawn shapes.

Shrink

Instead of blurring, shrink the drawn shapes.

Blur Radius

How much to blur/expand/shrink the edges of the filled shapes (depending on the **Blur method**). A value of 0 has no effect.

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

## Layer Bindings

Mask Layer

If a mask volume is wired into this node’s second input, this specifies which volume in the second input to use to mask this node’s effect, usually `mask`. Click the “Add mask paint” button to paint the mask directly in the viewport (this automatically adds a paint node to the second input).

Height Layer

The name of the height volume to operate on, usually `height`.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/heightfield_project.svg) HeightField Project](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_project.html)