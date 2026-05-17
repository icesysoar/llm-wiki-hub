---
type: concept
title: Collision Source
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "f5bac21ef7b1"
---
创建用于DOPs碰撞的几何体和VDB卷。
### Parameters
This node can be used to interpolate deforming geometry, calculate point velocities, and create VDB Signed Distance volumes for fast and accurate DOPs collisions, in particular with solvers such as [FLIP](https://www.sidefx.com/docs/houdini/nodes/dop/flipsolver.html "Evolves an object as a FLIP fluid object.") that require substepping and properly interpolated sub-frame geometry. It is usually used in conjunction with a [Static Object](https://www.sidefx.com/docs/houdini/nodes/dop/staticobject.html "Creates a Static Object from SOP Geometry.") DOP as set up by the [Deforming Object](https://www.sidefx.com/docs/houdini/shelf/deformingobject.html "Creates a DOPs collision object from deforming SOP Geometry.") shelf tool.
If the input geometry is deforming, it must have a consistent number and ordering of points for proper interpolation to sub-frames. The output of this node is a combination of named geometry and VDB volumes.
Note
This SOP does not support calculating point velocities for [packed primitives](https://www.sidefx.com/docs/houdini/model/packed.html) such as [Alembic](https://www.sidefx.com/docs/houdini/io/alembic.html "Houdini supports reading and writing Alembic interchange files, with on-demand loading.") files or [crowd agents](https://www.sidefx.com/docs/houdini/crowds/agents.html "About agents, the moving actors that make up a crowd simulation."). Use an [Unpack](https://www.sidefx.com/docs/houdini/nodes/sop/unpack.html "Unpacks packed primitives.") SOP to unpack the geometry before sending into this node. The [Deforming Object](https://www.sidefx.com/docs/houdini/shelf/deformingobject.html "Creates a DOPs collision object from deforming SOP Geometry.") shelf tool tries to detect packed geometry and automatically inserts an Unpack SOP.
Tip
If a collision object has both deforming SOP-level geometry _and_ transformations at the Object-level, it can be helpful to create a separate non-transformed [Geometry](https://www.sidefx.com/docs/houdini/nodes/obj/geo.html "Container for the geometry operators (SOPs) that define a modeled
object.") object and [Object Merge](https://www.sidefx.com/docs/houdini/nodes/sop/object_merge.html "Merges geometry from multiple sources and allows you to define the manner in which they are grouped together and transformed.") the collision object into it, with the **Transform** parameter on the Object Merge set to **Into This Object**. By baking the Object-level transformations into the geometry this way, it is easier to visualize the point velocities and ensure they are correct before use in simulations.
## PARAMETERS
Group
Specifies the primitives for which to generate collision geometry and collisions.
## Geometry
Output Geometry
Include the geometry in the output of this node.
Display Geometry
Display the output geometry in the viewport. Turning this option off can make it easier to visualize just the output volumes.
Geometry Name
The primitives in the output geometry will have a `name` attribute set to this value.
### Interpolation
Blend Between Frames
Cooks the input geometry at the start and end of the nearest integer frames, then blends between the two geometries according to the fractional position within the frame. This option can be used to interpolate geometry that is defined only at whole frames, to be used with solvers that require sub-frame geometry. See the [TimeBlend](https://www.sidefx.com/docs/houdini/nodes/sop/timeblend.html) SOP for more information.
Hold First Frame
Determines if the first frame should be clamped. If so, any evaluations before this frame value will instead evaluate at this frame value.
Hold Last Frame
Determines if the last frame should be clamped. If so, any evaluations after this frame value will instead evaluate at this frame value.
Cache Geometry in Memory
Geometry interpolation and point velocity calculation require cooking of the input geometry at several different points in time. When this option is enabled, a few frames of the input geometry surrounding the current frame are cached, accelerating these computations at the cost of extra memory.
### Velocity
Approximation
The method used to compute point velocity values.
None
No point velocities are calculated.
Backward Difference
Calculate velocities using the difference between the previous frame and the current frame.
Central Difference
Calculate velocities using the difference between the previous frame and the next frame. This method is generally the most accurate.
Forward Difference
Calculate velocities using the difference between the current frame and the next frame.
Velocity Scale
When computing velocity the resulting velocity will be scaled by this constant. Note there is an internal scale of `$FPS` to convert the measured change over a frame into a change over a second.
Compute Angular Velocity
The difference in orientation of successive frames will be used to compute an angular velocity, `w`, for the points.
### Points
Scatter Points
For deforming collisions, DOPs reads velocities from the nearest points to any collision event. If the input geometry consists of large primitives with few points (e.g. a large box), the nearest input point might not be a good sample of the object’s velocity. Enabling this option will scatter points on the input geometry to better represent the point velocities, to the accuracy controlled by **Density Scale**.
Display Points
Show the scattered points.
Density Scale
Measure the current point density then scale the scattering density so there are approximately this many points per volume voxel as specified by the **Voxel Size** parameter.
## Volume
Output Volume
Create a VDB Signed Distance volume from the input geometry primitives and include it in the output of this node.
Display Volume
Show the volume in the viewport. Turning this option off can make it easier to visualize just the output geometry.
Volume Name
The VDB volume will have a `name` attribute set to this value.
### Creation
Voxel Size
The size in world space of the voxels in the output VDB volume.
Bandwidth
How many voxels outside the surface to fill in the generated VDB.
Fill Interior
Fill all voxels inside the surface with `1`, not just the voxels near the surface. This requires an airtight surface and takes considerably more memory and time.
## INPUTS
Input Geometry
The geometry from which to interpolate and create VDB volumes.
See also
Static Object(https://www.sidefx.com/docs/houdini/nodes/dop/staticobject.html)
[timeblend]
!Trail#Trail Geometry
!VDB from Polygons#VDB from Polygons Geometry