---
type: concept
title: Points from Volume
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "bbc5d99eb34f"
---
创建一组填充体积的规则点。
### Parameters
This operator is used to generate a regular set of points that fill a given volume. This can be useful for generating a [field of particles](https://www.sidefx.com/docs/houdini/nodes/pop/location.html), or initializing a [particle fluid](https://www.sidefx.com/docs/houdini/nodes/dop/particlefluidobject.html).

## PARAMETERS

Source Type

The type of incoming geometry. In auto-detect, if the input is a single volume primitive, the Fog or SDF method will be used depending whether the volume primitive has the SDF flag set.

In Geometry mode, the input is treated as a closed manifold surface.

In Fog mode, the first volume of the input is treated as a fog volume. Voxels with a 1 value will have points, those with 0 will not have points.

In SDF mode, the first volume of the input is treated as a signed distance field. Voxels with negative values will have points, those with positive values will not.

Construction Method

The method used for generating points.

Dense Grid

Creates points inside the entire bounding box of the input, then removes those outside the volume. This method is efficient for inputs that are close to axis-aligned boxes, but can be slow and memory inefficient for more sparse configurations. This method also provides backwards compatibility for files created prior to Houdini 14.5.

Sparse Volume

Creates points only in the active voxels of the input volume if they also lie inside the bounding volume. This method can handle very sparse configurations where the input objects are distributed across space and do not fit well into an axis-aligned bounding box. Because a sparse volume is required, this method creates an [OpenVDB volume](https://www.sidefx.com/docs/houdini/model/volumes.html) of the input internally, and the **Convert To Fog** option will always be applied.

Invert Volume

Inverts the sense of which points will be kept. Because the space is seeded with a bounding box of points outside of the object, this often results in a surrounding cube of points unless the border condition of the volume is altered.

Point Configuration

The configuration of the points to be generated, before any jitter is applied.

Grid

A loosely packed configuration that places the points at the vertices of a regular three-dimensional grid.

Tetrahedral

A tightly packed configuration placing points at equal distance from each of the three other closest points.

Point Separation

The smallest distance between any two of the generated points in the initial configuration.

Tip

Increasing this value will generate fewer total points, but will be faster to process.

Isovalue

The SDF value that is considered the outer surface of the volume. This parameter is only enabled for the **Sparse Volume** construction method.

Min Isovalue

If enabled, the SDF value that is considered the inner surface of the volume, allowing point creation within only a slice of the input volume. This parameter is only enabled for the **Sparse Volume** construction method.

Jitter Seed

Random seed for creating jitter.

Jitter Scale

The amount of jitter to apply to the positional values of the points. Jitter causes random changes to the positions of the points.

Tip

Set this value to 0 if no jitter whatsoever is desired.

Convert To Fog

The input geometry will first be converted into a fog volume using the giving point separation. This consumes more memory, but can greatly reduce the total time as the inside test can be performed very quickly on a volume.

If the input is already a volume, and a volume source type is set, this does nothing.

Grid Offset

The points generated will be centered to this offset of the origin. A value of 0,0,0 means that the origin would be included in the generated point set.

Add Scale Attribute

Creates the `pscale` attribute and sets it to 2× the particle separation. This allows the [Particle Fluid Surface SOP](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface.html "Generates a surface around the particles from a particle fluid simulation.") to get the right scale for rebuilding the original surface.

Particle Radius Scale

The scale attribute is this multiple of the particle separation. Having the particles larger than the separation ensures no particles are lost in the gaps between voxels.

Dither Surface

If a uniform lattice of points is being built, then the surface layer will exhibit terracing as points cross the boundary. This dithers the points, comparing the distance to the cut-off threshold with a random number to see if the point should be kept. This causes points to be kept outside of the threshold, as it expands half a grid scale in both directions. Turning this on will result in a more randomized surface layer.

Dither Normal

Often an object has one face that is free, and the other faces are constrained by collisions. If you don’t want to dither the colliding faces (as particles may be generated outside of the collision range, or holes made that will collapse) you can use this normal and the angle to specify which regions of the source are available for dithering. The geometric normal of the SDF built from the surface is used, not any normal attribute on the incoming geometry.

Dither Angle

How many degrees away from the dither normal is eligible for dithering. Setting this value to 180 will cause all faces to be dithered.

Scatter Density

Scatter points on the surface of the geometry if provided, or the zero isosurface of the provided volume. For a value of 1 the scattered points will be approximately separated by **Point Separation**. Increasing this value will oversample the surface.

Relax Iterations

When enabled, scattered points will be relaxed, pushed away from each other, to avoid clumping. This is done gradually, to avoid chaotic behavior and to allow control over how much relaxation takes place. More relaxation iterations results in points that are more separated from each other. A distribution of points in which they are well separated is often called “blue noise”.

Oversampling

The amount to oversample the points within a distance from the zero isosurface, as specified by the **Oversampling Bandwidth**.

Oversampling Bandwidth

The points will be oversampled to this distance from the zero isosurface. This parameter is specified in multiples of the **Point Separation**.

Create Output Group

Create a group containing the generated points.

Output Group

The name of the generated output point group.

## EXAMPLES

Load Launch

[AlphaOmega](https://www.sidefx.com/docs/houdini/examples/nodes/sop/pointsfromvolume/AlphaOmega.html)Example for [Points from Volume](https://www.sidefx.com/docs/houdini/nodes/sop/pointsfromvolume.html) geometry node

This example demonstrates how to use a Points From Volume SOP to create a target goal for a flip simulation and make it fill a given piece of geometry.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/scatter.svg) Scatter](https://www.sidefx.com/docs/houdini/nodes/sop/scatter.html)