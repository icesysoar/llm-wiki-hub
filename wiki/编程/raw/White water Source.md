---
type: concept
title: White water Source
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:12:00
content_hash: "681d7ce33266"
---
在白水仿真中生成批量作为源。
### Parameters
The Whitewater Source SOP generates an emission field that is used by the [Whitewater Solver](https://www.sidefx.com/docs/houdini/nodes/dop/whitewatersolver.html " Sets and configures a Whitewater Solver. ") for birthing particles. Values in the emission field correspond to probabilities that whitewater will appear at that point. One can approximate the amount and location of newly-created whitewater in a frame by visualizing the generated `emit` VDB: density of the fog is directly related to the birth rate. This node is also able to source whitewater particles using the same method as the [Whitewater Solver](https://www.sidefx.com/docs/houdini/nodes/dop/whitewatersolver.html " Sets and configures a Whitewater Solver. "); these particles are colored based on their emission criteria, enabling assessment of particle counts, as well as tuning of emission controls with concrete visual feedback.
In contrast to the previous particle-based sourcing, the new system is scale-independent with respect to the underlying liquid simulation. Consequently, it is much easier to control the physical amount of whitewater, without having to consider particle counts. Additionally, the new system is designed to facilitate full-pipeline prototyping for fluid simulations. That is, the artist is free to work with low resolution settings to find a satisfactory overall look for both the liquid and whitewater simulations; the particle count can then be increased for the higher-fidelity final pass on both solvers, without needing to worry about significant changes in the amount of whitewater.
Note
This operator expects `surface` and `vel` volumes in its input.
## INPUTS
Liquid Simulation
Surface and velocity volumes or VDBs from a liquid simulation.
Extra Source Points
Extra points to splat into the emission volume. The emission amount for each extra source point (indicated by the value of its **Emission Attribute**) is distributed trilinearly to its nearest voxels.
Emission Mask
Mask to limit the emission regions.
## OUTPUTS
Volumes
Geometry containing the emission volume (`emit`). If **Output Volumes** is enabled, the geometry also contains liquid’s `surface` and `vel` fields. If **Source Particles** is enabled, the birthed whitewater particles are also included.
## PARAMETERS
## Emission
Limit by Depth
When enabled, whitewater will only be emitted within the specified range of depths.
Maximum Half-Width
An attempt will be made to activate the signed distance VDB to ensure that accurate depth readings to the specified limiting values can be made. The **Maximum Half-Width** parameter can be used to limit the number of voxels that get activated, preventing exhaustion of computing resources.
Note
This should be turned on when using Narrow Band, and off for dense SDFs such as oceans.
Speed Range
All regions of the liquid that have a speed greater than the minimum are eligible to emit whitewater. Regions moving at or above the maximum speed are considered fully emitting.
Remap Speed
By default, the speed is mapped linearly to the (0, 1) range. This behavior can be changed by specifying a custom mapping.
Remap Emission
The final emission probability can be optionally remapped with the **Emission Ramp**.
## Curvature
Emit from Curvature
Augment emission rates with the curvature of the surface SDF, which can be an effective criterion for detecting the leading edges of breaking waves.
Note
High resolution fluid simulations tend to contain fine details that may result in spurious curvature-based sourcing. To eliminate this, consider smoothing out surface field using controls under **Surface Filtering**.
Max Velocity Angle
The angle between the velocity of the particle and the surface normal must be lower than this value for whitewater emission. This limit helps ensure that whitewater is only created on the leading edges of waves.
Curvature Range
Range of curvatures that gets mapped to the (0, 1) emission range.
Remap Curvature
By default, the curvature is mapped linearly to the (0, 1) range. This behaviour can be changed by specifying a custom mapping.
## Acceleration
Emit from Acceleration
Augment emission rates with the magnitude of acceleration. Acceleration is effective at detecting areas where particles are rejoining existing parts of the fluid, resulting in trapped air that causes whitewater. Note that this uses Eulerian acceleration, which is the time-rate of change of fluid velocity at fixed locations in space.
Acceleration Range
Range of accelerations that gets mapped to the (0, 1) emission range.
Remap Acceleration
By default, the acceleration is mapped linearly to the (0, 1) range. This behavior can be changed by specifying a custom mapping.
## Vorticity
Emit from Vorticity
Augment emission rates based on the vorticity (or magnitude of rotation) within the velocity volume. This criterion can be effective in identifying churning areas of the fluid, which generally occur deeper below the surface.
Vorticity Range
Range of vorticities that gets mapped to the (0, 1) emission range.
Remap Vorticity
By default, the vorticity is mapped linearly to the (0, 1) range. This behavior can be changed by specifying a custom mapping.
## Extra Sources
Add Extra Sources
Use points of the second input as additional sources.
Group
Only points of the second input that are part of this group will be used for extra emission.
Emission Attribute
Name of the attribute that stores emission amount for each source point. If the specified attribute does not exist, no extra emission will be added.
Particle Scale
The `pscale` attribute will be scaled by this value. Increase this value to give a larger footprint to the extra emission points.
Merge Method
This parameter controls how extra sourcing is combined with the emission volume.
`Add`
Extra emission is added to the original volume.
`Maximum`
Final emission is the maximum of the original volume and extra emission.
`Override`
Emission in the areas influenced by extra sources is replaced by their value.
## Volumes
Output Volumes
When this option is enabled, the node also outputs the liquid’s signed distance (`surface`) and velocity (`vel`) fields.
Voxel Size
Voxel size for the emission volume.
Emission Size
Physical size of the emission region; this option can be used to restrict emission to a certain subregion of the fluid simulation.
Emission Center
Center of the restricted emission region.
Mask Name
Name (or name pattern) of primitive to use as an emission mask.
### Surface Filtering
The filtering operations in this section can be used to smooth out the surface field before it’s used for generating the emission field. This can be helpful for eliminating noise from curvature-based emission.
Note
Dilation is performed first, followed by smoothing and, finally, erosion.
Note
If **Output Volumes** is enabled, the filtered surface will be exported by this node. Be wary of letting the [Whitewater Solver](https://www.sidefx.com/docs/houdini/nodes/dop/whitewatersolver.html " Sets and configures a Whitewater Solver. ") use it, however, as aggressive smoothing may give rise to liquid regions that suddenly disappear.
Dilate
The number of voxels to expand the surface by.
Smooth
Smooth the surface using the specified filter for the given number of iterations.
Erode
The number of voxels to shrink the surface by.
## Visualization
Visualize Emission Volume
When this parameter is turned off, the generated `emit` volume will be marked invisible and will not be rendered in the viewport.
Source Particles
When this option is enabled, whitewater particles will be created using the Whitewater Solver’s method. This can be used to get a concrete idea of emission amount for the generated `emit` volume.
Note
The actual number of particles birthed by the solver may actually be substantially fewer than this approximation if **Limit Emission** is turned on.
Whitewater Scale
Whitewater scale controls the number of particles that are created to fill a given volume; value of this parameter should match **Whitewater Scale** of the solver.
Emission Amount
A modifier on the emission amount; value of this parameter should match **Emission Amount** of the solver.
Curvature Color
Color of particles that are birthed as a result of curvature emission.
Acceleration Color
Color of particles that are birthed as a result of acceleration emission.
Vorticity Color
Color of particles that are birthed as a result of vorticity emission.
Extra Color
Color of particles that are birthed as a result of extra sourcing.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SHELF/whitewater.svg) Whitewater Solver](https://www.sidefx.com/docs/houdini/nodes/dop/whitewatersolver.html)