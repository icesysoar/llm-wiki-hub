---
type: concept
title: Volume Surface
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:12:00
content_hash: "0a5a6a9d24fd"
---



自适应地曲面具有常规三角形网格的卷层次结构。
### Parameters
The Volume Surface operation surfaces a volume hierarchy with a regular triangle mesh.

The volumes in the first input are grouped together into a hierarchy. There should be a root volume that contains all of the other volumes. Each point is then evaluated by taking the value of the innermost volume, possibly blending to the exterior values if overlap is specified.

If there is no second input, the curvature of the mesh is used to control the edge length of the surfacing. If there is a second input, it is treated as a volume hierarchy whose scalar values are the desired edge lengths.

Note

The [Volume Feather SOP](https://www.sidefx.com/docs/houdini/nodes/sop/volumefeather.html "Feathers the edges of volumes.") is useful to ensure there are no sharp changes in edge lengths that can confuse the surfacer.

Surfacing is done by growing from a seed point. As a result, only one connected component of the volume will be surfaced. Further, if there are topological handles (such as a mug or torus) these will not be fused together.

Ideally a signed distance field is used for the surfacing. In any case, a valid gradient should be present for a sufficient distance around the desired surface to allow the point-settling to succeed.

This SOP is similar to [Particle Fluid Surface](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface.html "Generates a surface around the particles from a particle fluid simulation.") since both create a surface over either a volume or particles; however, they are used for different purposes. The Volume Surface SOP is intended for static objects and create one surface over all volumes, whereas Particle Fluid Surface is intended for objects that have motion and create separate surfaces over individual clusters. For example, the Volume Surface SOP can be used to simulate a ski trail on a mountain, and the Particle Fluid Surface could be used to simulate a river.

Note

This node currently only works with standard Houdini volumes. It does not work with [VDBs](https://www.sidefx.com/docs/houdini/model/volumes.html).

## PARAMETERS

Source Group

The volume primitives in the first input to be the hierarchy.

Seed Position

The start of the surfacing operation. This does not have to be on the surface, but it has to be a point that can be settled onto the surface. Specifically, the gradient at this point should point in a direction that hits the surface. If you have a banded SDF, this should be within the band.

Iso Offset

The volume value to surface.

Invert

Reverses the sense of the iso-offset, effectively inverting the normal of all the polygons generated.

Use Finest Resolution

Instead of blending different volumes of the hierarchy, only the volume with the finest resolution of detail will be used. This is best when all the levels represent the same underlying function but they don’t form a proper inclusive hierarchy.

Overlap

The relative size of the region to blend the interior volumes. This allows for a smooth transition from the lower resolution to higher resolution areas.

Strict Volume Bounds

Because the voxels of a volume are center-sampled, when evaluating near the boundary of the volume the border conditions of the volumes must be taken into account. This can result in inacurracies, however, especially if another volume could have provided better results. Strict volume bounds shrinks the valid range for volumes to be only those points which do not require any boundary conditions in their computation.

Tolerance

How accurately to settle points to the surface.

Curvature Test Dist

When computing the curvature for adaptive step sizing, several gradient operations are performed at nearby points. This controls how nearby the points are. This should be small to avoid skipping features and introducing artificial noise. However, if your scene scale is large and it is too small, numerical error will make everything look artificially flat.

Edge Scale

After computing the curvature dependent length, or sampling the edge length from the second input, the desired edge length is then scaled by this number. This provides an overall level of detail to the tesselation.

Minimum Edge

The edge length will never go below this level. This is very useful when you know what your smallest detail level is.

Maximum Edge

The edge length will never be longer than this. A maximum edge length is necessary as perfectly flat areas will return infinite edges.

Max Edge Reduction

When growing a new triangle, the new triangle will not be shorter than this ratio of the previous edge length, or longer than the reciprocal ratio. For example, with a **Max Edge Reduction** of 0.5, new triangles will be between 50% and 200% of the previous triangle. This constraint keeps the mesh more uniform and avoids failures in the growing algorithm when lengths change too quickly.

Close Gaps

The surfacing operation proceeds by first growing a mesh of triangles and then closing all the resulting gaps. Toggling this disables the second phase, allowing one to inspect the unmodified results of the growing operation. This should always be on.

Flip Edges

After the final mesh is completed, an additional pass flips the edges of triangles to try and further improve their regularity.

Compute Normals

The point normals are set according to the normalized gradient of the volume hierarchy at each point.

Stop At Volume

When the surfacing algorithm hits the edges of the largest volume it can either stop there, creating an unclosed surface, or try to continue surfacing. If it is not set to stop, one should ensure the boundary conditions are Constant with a positive value, or are SDF, to avoid the surface from growing forever.

## EXAMPLES

Load Launch

[volumesurface_explicitgrade](https://www.sidefx.com/docs/houdini/examples/nodes/sop/volumesurface/volumesurface_explicitgrade.html)Example for [Volume Surface](https://www.sidefx.com/docs/houdini/nodes/sop/volumesurface.html) geometry node

This example shows how to use the Volume Surface SOP to surface an SDF using another volume to specify the triangle sizes.

Load Launch

[volumesurface_hierarchy](https://www.sidefx.com/docs/houdini/examples/nodes/sop/volumesurface/volumesurface_hierarchy.html)Example for [Volume Surface](https://www.sidefx.com/docs/houdini/nodes/sop/volumesurface.html) geometry node

This example shows how to use the Volume Surface SOP to surface a hierarchy of SDFs using explicit grading.

Load Launch

[volumesurface_simple](https://www.sidefx.com/docs/houdini/examples/nodes/sop/volumesurface/volumesurface_simple.html)Example for [Volume Surface](https://www.sidefx.com/docs/houdini/nodes/sop/volumesurface.html) geometry node

This example shows how to use the Volume Surface SOP to surface an SDF using adaptive triangle sizes.

See also

-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/convertvolume.svg) Convert Volume](https://www.sidefx.com/docs/houdini/nodes/sop/convertvolume.html)
-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/convert.svg) Convert](https://www.sidefx.com/docs/houdini/nodes/sop/convert.html)
-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/isooffset.svg) IsoOffset](https://www.sidefx.com/docs/houdini/nodes/sop/isooffset.html)
-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/iso.svg) IsoSurface](https://www.sidefx.com/docs/houdini/nodes/sop/iso.html)