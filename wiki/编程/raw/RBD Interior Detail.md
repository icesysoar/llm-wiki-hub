---
type: concept
title: RBD Interior Detail
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "37dad0fa1ea7"
---
在断裂的几何体的内表面创建额外的细节。
Since 17.0
### Parameters
This SOP creates additional detail on the interior surfaces of fractured geometry, which can be used to produce more interesting high resolution geometry. The amount of noise added to the points can be scaled based on their distance from the original surface.
Tip
The [Transform Pieces SOP](https://www.sidefx.com/docs/houdini/nodes/sop/xformpieces.html "Transforms input geometry according to transformation attributes on template geometry.") can be used to transform high resolution pieces according to the motion of simulated low resolution pieces.
Geometry
The geometry to add interior detail to.
Constraint Geometry
Optional input to pass through constraint geometry (for example, from the [Voronoi Fracture SOP](https://www.sidefx.com/docs/houdini/nodes/sop/voronoifracture.html "Fractures the input geometry by performing a Voronoi decomposition of space around the input cell points")).
Proxy Geometry
Optional input to pass through proxy geometry.
Optional SDF for Depth Sampling
An optional SDF Volume, usually created by [IsoOffset](https://www.sidefx.com/docs/houdini/nodes/sop/isooffset.html "Builds an offset surface from geometry."), to use for depth sampling when scaling the amount of noise added to the geometry. If not connected, this node will generate a default one.
## OUTPUTS
Geometry
The high-resolution geometry.
Constraint Geometry
The constraint geometry from the **Constraint Network** input.
Proxy Geometry
The geometry from the **Proxy Geometry** input, or the original **Geometry** input if no proxy geometry already exists.
## PARAMETERS
Interior Group
Specifies the primitives to add detail to. Typically, this group should contain only the interior polygons created by the fracturing process so that the original surface is not affected.
## Geometry
Add Detail
Specifies whether the interior surface should be divided according to the **Detail Size**. Disabling this allows noise to be applied to interior surfaces that do not need any further subdivision.
Detail Size
The size of the polygons added to the interior surfaces.
Compute Interior Normals
Computes vertex normals on the edges of the interior geometry, so that they will have a cusped appearance.
Interior Cusp Angle
Computes vertex normals on the edges of the interior geometry with angles greater than this angle, so that they will have a cusped appearance.
Triangulate Non-Planar Detail
Triangulates any non-planar polygons produced while adding detail.
## Noise Settings
Noise Amplitude
Scales the amount of displacement.
Noise Type
The type of noise added to the interior points.
Frequency
The frequency of the noise. Higher values give smaller scaled details in the noise.
Offset
The offset of the input into the noise function. If you visualize the noise as a 2D graph or 3D height field, this has the effect of “panning” across the space of possible noise outputs. If you have the general noise effect you want but just want to get a different set of values for a different look, try changing the offset.
Fractal Type
None
Does not add any additional noise on top of the basic noise.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_fractal_none.jpg)
Standard
Adds pseudo-random noise on top of the basic output.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_fractal_standard.jpg)
Terrain
Adds noise like “Standard” but dampens the noise in the valleys, which can be useful for generating mountainous terrain.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_fractal_terrain.jpg)
Hybrid
Like terrain, but with more sharpness in the valleys.
Max octaves
The number of iterations of distortion to add to the output of the basic noise. The more iterations you add, the more “detailed” the output. Note that the output may have fewer octaves than this parameter (that is, increasing the parameter will eventually stop adding detail), because the node eventually stops when there’s no more room to add more detail in the output.
Lacunarity
The frequency increment between iterations of fractal noise added to the basic output. Note that you can use a negative value.
Roughness
The scale increment between iterations of fractal noise added to the basic output. The higher the value the larger the “jaggies” added to the output. You can use a negative value for roughness.
Enable Lattice Warp
Adds “stringiness” or “wiriness” to standard noise.
Accumulate Lattice Warp
When **Lattice Warp** is on, this accumulates the warp for each iteration (octave) of added fractal noise. When used in images, this can add interesting smudgy effects, and interesting landmarks when used for terrain.
Enable Gradient Warp
Enables a slider to widen the peaks or valleys of the noise output.
Accumulate Gradient Warp
When **Enable Gradient Warp** is on, this accumulates the warp for each iteration (octave) of added fractal noise.
## Displacement Scaling
Visualize Noise Scale
Adds color to the geometry to indicate the amount of noise applied at each point.
Depth Method
Specifies how to compute the distance of each interior point from the surface.
Minimum Distance to Exterior
Computes the minimum distance from each interior point to the exterior primitives, similar to the [Ray SOP’s](https://www.sidefx.com/docs/houdini/nodes/sop/ray.html "Projects one surface onto another.") **Minimum Distance** method. Compared to the **SDF Volume** method, this approach does not require selecting a suitable volume resolution and can be faster than building a high resolution volume.
Note
This method does not produce accurate distances if the points in the **Interior Group** are not actually inside the surface of the original geometry, or if the original geometry is self-intersecting.
SDF Volume
Computes the depth by sampling an SDF volume. The volume is built from the input geometry using the **Depth Volume Resolution**, unless a volume is provided via the optional fourth input.
Depth Volume Resolution
Resolution of the default depth sampling SDF. The amplitude of the noise added to the interior points is scaled by the depth of the point within the surface of the original geometry, calculated by sampling an SDF of the geometry. If an SDF is not connected to the fourth input of the SOP, a default one will be created at this resolution.
Clamp Displacement Amount to Depth
Limit the amount of displacement done at a point by its depth within the surface.
When adding high amplitude noise to the interior points, it’s possible that the interior surface could interpenetrate the exterior. This option will clamp the amount of displacement at a particular point by the depth within the surface.
Clamp Depth Percentage
The percentage of the depth within the surface to which the displacement should be clamped.
Because an SDF is not a perfect representation of depth, this option allows you to clamp to a percentage of the depth. Lowering this can guarantee no interpenetration, at the expense of more clamping of the interior noise.
Use Depth/Noise Ramp
Use a ramp control for more precise control of the depth/noise mapping.
Depth/Noise Bias
The value for the bias curve that maps depth within the surface to the amplitude of the noise applied.
Depth/Noise Ramp
The ramp that maps from depth within the surface to the amplitude of the noise applied.
## Output Attributes
Point Depth
Creates an attribute containing the depth of each point within the surface of the object.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/booleanfracture.svg) Boolean Fracture](https://www.sidefx.com/docs/houdini/nodes/sop/booleanfracture.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdcluster.svg) RBD Cluster](https://www.sidefx.com/docs/houdini/nodes/sop/rbdcluster.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/voronoifracture.svg) Voronoi Fracture](https://www.sidefx.com/docs/houdini/nodes/sop/voronoifracture.html)