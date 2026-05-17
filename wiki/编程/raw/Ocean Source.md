---
type: concept
title: Ocean Source
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "4df8e09e462b"
---
从海洋 "光谱 "体积中生成颗粒和体积，用于模拟。
### Parameters
This node uses an [Ocean Spectrum](https://www.sidefx.com/docs/houdini/nodes/sop/oceanspectrum.html "Generates volumes containing information for simulating ocean waves.") connected to the first input to generate particles and volumes that can be used to drive [FLIP](https://www.sidefx.com/docs/houdini/nodes/dop/flipsolver.html "Evolves an object as a FLIP fluid object.") simulations of ocean splashes, layers, and tanks.

This node can create thin layers of particles to allow simulation of only a small part of an ocean surface. It can also generate _boundary layers_ that surround the simulated liquid tank and help suppress wave reflections and preserve water volume and velocity over the duration of the simulation. These boundary layers also enable animation of the **Center** parameter to track a moving object.

This node will usually be created via shelf tools that apply one of the following presets:

**Guided Ocean Layer**

Generates a thin layer of particles on top of a guiding ocean surface. The particles are initialized with ocean velocities. The guiding ocean surface and velocity volumes are used both as a boundary layer and as a guiding surface to drive the thin layer of particles. This preset is most useful for simulating the ocean surface where closely matching the underlying ocean spectrum surface is necessary.

**Wave Tank**

Generates a full tank of particles initialized with ocean velocities as well as boundary layer surface and velocity volumes that can be used to update the simulation velocity in the boundary layer. This preset is most useful for simulations that require a full liquid simulation including interaction with deeper parts of an ocean.

**Flat Tank**

Similar to the output from the [Particle Fluid Tank](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidtank.html "Creates a set of regular points filling a tank.") with the addition of a boundary layer, allowing particles to exit the simulation and the tank to track a moving object by animating the Center parameter.

## PARAMETERS

Initialize

Initialize the parameters to the specified preset.

Particle Separation

The smallest distance between any two generated particles in the initial configuration.

Oversampling

The amount to oversample the particles. For example, a value of 2 will create twice as many particles.

Grid Scale

The voxel size of any volumes created will be the product of this parameter and the **Particle Separation**.

Size

The size of the set of particles or volumes created by this node.

Center

The center of the set of particles or volumes created by this node.

## Particles

Create Particles

Generate particles with ocean velocities within the ocean surface and the specified box.

Water Level

The top level of the particles _before_ being deformed by the ocean surface. A value of zero represents the surface of the ocean.

Fill Volume

Fill the bottom of the tank with particles, starting at the **Water Level** value.

Layer Size

Specifies the size of the layer of particles to create.

Guiding Surface Thickness

Specifies the size of the guiding surface applied to the _FLIP_ simulation.

Jitter Seed

Random seed for creating jitter.

Jitter Scale

The amount of jitter to apply to the positional values of the particles.

Kill Inside Collision

Delete any particles inside any collision objects plugged into the second input.

## Surface

Depth

The **Surface SDF** will represent the ocean at the specified depth. This differs from simply offsetting the output surface SDF as it takes into account the **Depth Falloff** setting.

Smoothing

Controls the radius of the points used to generate volumes. Higher values are more expensive but give smoother volumes.

## Velocity

Velocity Field

Output a field containing the ocean velocity values.

Max Extrap Cells

When generating velocity volumes, how many voxels from the ocean surface to extrapolate velocity values.

## Boundary Layer

Create Boundary Layer

Create a small layer around the perimeter of the simulation to maintain surface and velocity. Enabling this layer will decrease the size of the active simulation by the amount specific in the **Padding** parameters.

Lower Padding

The size of the layer extruded into the simulation from the lower simulation boundaries. Set this parameter to zero to disable the layer on any given axis.

Upper Padding

The size of the layer extruded into the simulation from the upper simulation boundaries. Set this parameter to zero to disable the layer on any given axis.

## Surface Evaluation

Type

The type of surface to evaluate, **Ocean** or **Flat**. The parameters for the **Ocean** type are from an embedded [Ocean Evaluate](https://www.sidefx.com/docs/houdini/nodes/sop/oceanevaluate.html "Deforms input geometry based on ocean spectrum volumes.") SOP. The parameters for the **Flat** type are from an embedded [Particle Fluid Tank](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidtank.html "Creates a set of regular points filling a tank.") SOP.

Time

The time at which to evaluate the ocean surface.

Downsample

Downsample the incoming ocean spectrum before evaluating any ocean values. This parameter specifies the number of powers of two to remove from the resolution of the incoming ocean spectrum. For example, if the spectrum was originally specified at resolution 10 to generate a 1024 x 1024 volume, downsampling by 2 will evaluate ocean volumes at resolution 8, a 256 x 256 volume.

Tip

The same high resolution spectrum can be processed by separate [Ocean Evaluate](https://www.sidefx.com/docs/houdini/nodes/sop/oceanevaluate.html "Deforms input geometry based on ocean spectrum volumes.") and **Ocean Source** nodes, for example the former with no downsampling to deform surface geometry, and the latter at a downsampled resolution to generate the more expensive volume or point output.

Max Resolution

Downsample the incoming ocean spectra to the specified maximum resolution before evaluating any ocean values. This parameter is useful to avoid evaluation of very high-resolution spectra when only requiring simulation data, for example. It can also be more convenient than the **Downsample** parameter when there are multiple incoming spectra of different resolutions.

Depth Falloff

Specifies how deformation and velocity values falloff as the input points lie below the ocean surface.

None

Values do not falloff below the surface.

Exponential

All values have the same exponential falloff below the surface.

Exponential by Frequency

Values have an exponential falloff that is scaled per wave frequency. With this setting the contribution from small, high frequency waves falls off very quickly. It is the most accurate setting and most expensive to compute.

Falloff Scale

An additional scale applied to the exponential falloff modes in **Depth Falloff**. For the most physically accurate values this should be set to 1 in conjunction with the **Exponential by Frequency** mode.

Depth Divisions

The number of divisions along the depth axis if the computed ocean are 3D, as specified by the **Depth Falloff** parameter. Higher values are more accurate but more expensive to calculate.

Max Displacement Frame

When generating volumes and points, this node needs to calculate the maximum horizontal and vertical displacement in the input ocean waves. If this parameter is enabled, the displacement will be estimated only once at the specified frame, which is fast, gives a stable point output, and it typically accurate enough for good results. However, in the case of animated wave amplitudes or quickly varying instacing geometry, it may be necessary to continuously re-calculate the displacement by disabling this parameter.

Scatter Density

Scatter points on the surface of the tank, which can help create flat surface for a FLIP simulation. For a value of 1 the scattered points will be approximately separated by **Particle Separation**. Increasing this value will oversample the surface.

Oversampling Bandwidth

The points will be oversampled to this distance from the surface of the tank if **Oversampling** is enabled. This parameter is specified in multiples of the **Particle Separation**.

## INPUTS

Ocean Spectrum

The Ocean Spectrum volume to evaluate when the **Surface Evaluation** type is **Ocean**.

Collision Geometry

Geometry used to cull particles and volumes from within collisions.

## OUTPUTS

Initial

The Initial output returns geometry consisting of particles used to initialize a [FLIP Object](https://www.sidefx.com/docs/houdini/nodes/dop/flipobject.html).

Maintain

The Maintain output returns a volume for the ocean surface and velocity fields when the **Surface Evaluation** type is **Ocean**. These volumes are used in the boundary layer to maintain the ocean dynamics throughout the simulation.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SHELF/wave.svg) Ocean Spectrum](https://www.sidefx.com/docs/houdini/nodes/sop/oceanspectrum.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SHELF/wave.svg) Ocean Evaluate](https://www.sidefx.com/docs/houdini/nodes/sop/oceanevaluate.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/particlefluidtank.svg) Particle Fluid Tank](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidtank.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volume.svg) Volume](https://www.sidefx.com/docs/houdini/nodes/sop/volume.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/pointsfromvolume.svg) Points from Volume](https://www.sidefx.com/docs/houdini/nodes/sop/pointsfromvolume.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/flipobject.svg) FLIP Object](https://www.sidefx.com/docs/houdini/nodes/dop/flipobject.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/flipsolver.svg) FLIP Solver](https://www.sidefx.com/docs/houdini/nodes/dop/flipsolver.html)