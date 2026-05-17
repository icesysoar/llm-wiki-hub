---
type: concept
title: VellumConfigureGrain
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "edc6c90215fd"
---
为vellum谷物约束配置几何体。
### Parameters
The Vellum Configure Grain SOP configures the incoming geometry to be solved as grains or fluid in the Vellum Solver system. The two main options are either to convert the incoming geometry into points by treating it as a volume and filling it with grains or fluid particles; or tag existing points on the input to have grain-like behavior.
Note
Grains and fluid often require more substeps than other Vellum constraint types. It is recommended any attached Vellum solver be raised to at least 5 substeps for stability.
Note
For more control over filling a volume with grains, look at the [Grain Source](https://www.sidefx.com/docs/houdini/nodes/sop/grainsource.html "Generates particles to be used as sources in a particle-based grain simulation.") node.
## PARAMETERS
Create Points from Volume
Treat the incoming geometry as a closed volume and fill it with points. These points are then configured as grains or fluid, according to the **Type** parameter.
Group
The subset of incoming points to configure for grain-like interaction.
Group Type
In case the group is named or numeric, this can disambiguate what type of group it is.
Type
The type of particle to create: **Grain** or **Fluid**.
Particle Size
Diameter of the particles. The `pscale` attribute will be set to one half this.
Packing Density
Allows for over packing of the input geometry. Increasing this value helps fill the volume completely with **Fluid** particles. However, **Grain** particles might be packed too close together for values over 1, causing an initial expansion during the simulation.
Jitter Scale
Controls jittering of point positions.
Because relaxation can never accurately separate all particles, note that the final `pscale` will be reduced to minimize overlap.
Dither Surface
If a uniform lattice of points is being built, then the surface layer will exhibit terracing as points cross the boundary. This dithers the points, comparing the distance to the cut-off threshold with a random number to see if the point should be kept. This causes points to be kept outside of the threshold, as it expands half a grid scale in both directions. Turning this on will result in a more randomized surface layer.
Dither Normal
Often an object has one face that is free, and the other faces are constrained by collisions. If you don’t want to dither the colliding faces (as particles may be generated outside of the collision range, or holes made that will collapse) you can use this normal and the angle to specify which regions of the source are available for dithering. The geometric normal of the SDF built from the surface is used, not any normal attribute on the incoming geometry.
Dither Angle
How many degrees away from the dither normal is eligible for dithering. Setting this value to 180 will cause all faces to be dithered.
## Physical Attributes
Mass
The method used for computing particle mass. **Set Uniform** will set all particles to the specified mass. **Calculate Uniform** will compute the particle mass based on the **Density** parameter.
Density
The density of the material used for computing particle mass when **Mass** is set to **Calculate Uniform**.
Phase
When **Type** is set to **Fluid**, identifies the phase of the fluid. Fluids set to different phases will solve for viscosity and surface tension separately, giving the appearance of separate fluids.
Viscosity
Sets the `viscosity` point attribute, which acts as a multiplier on the **Viscosity** parameter on the Vellum Solver.
Surface Tension
Sets the `surfacetension` point attribute, which acts as a multiplier on the **Surface Tension** parameter on the Vellum Solver.
Friction
Sets the `friction` point attribute, which acts as a multiplier on the **Friction** parameter on the Vellum Solver.
DynamicFriction
Sets the `dynamicfriction` point attribute, which acts as a multiplier on the **Dynamic Friction** parameter on the Vellum Solver.
Attraction Weight
Sets the `attractionweight` point attribute, which acts as a multiplier on the **Attraction Weight** parameter on the Vellum Solver.
Replusion Weight
Sets the `replusionweight` point attribute, which acts as a multiplier on the **Replusion Weight** parameter on the Vellum Solver.
Display as Spheres
Adds a detail attribute so the grains will display as lit spheres in the viewport.
Add Sprite Material
Adds a sprite material so the grains will display as spheres in the viewport.
Show All Points
Points that are attached to primitives do not draw their sprites by default. This will cause them to still draw the sprite, useful if combining two constraint types within the same point.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SHELF/convert_to_particlegrain.svg) Grain Source](https://www.sidefx.com/docs/houdini/nodes/sop/grainsource.html)
!Vellum Drape#Vellum Drape Geometry
!Vellum Constraints#Vellum Constraints Geometry
!Vellum Solver#Vellum Solver Geometry
!Vellum IO#Vellum IO Geometry