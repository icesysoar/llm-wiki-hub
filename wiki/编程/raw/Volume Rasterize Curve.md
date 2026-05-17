---
type: concept
title: Volume Rasterize Curve
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:12:00
content_hash: "f1aa3ea38f4c"
---
将曲线转换为卷。
### Parameters
The Volume Rasterize operation takes a curve and creates a VDB volume based on it. It has been designed to complement [Draw Curve SOP](https://www.sidefx.com/docs/houdini/nodes/sop/drawcurve.html "Creates a curve based on user input in the viewport.") since it will use point attributes created by the [Stroke SOP](https://www.sidefx.com/docs/houdini/nodes/sop/stroke.html "Low level tool for building interactive assets.") such as `stroke_pressure`, but will work with a standard curve created using a [Draw Curve](https://www.sidefx.com/docs/houdini/nodes/sop/drawcurve.html "Creates a curve based on user input in the viewport."). It will create the needed attributes with default values of 1. The volumes created are based on the **Output** parameters.
The point attributes `pscale` and `density` are used to control the generated volume. They are derived from `width` and `stroke_pressure` that are created by the [Draw Curve](https://www.sidefx.com/docs/houdini/nodes/sop/drawcurve.html "Creates a curve based on user input in the viewport.")/[Stroke](https://www.sidefx.com/docs/houdini/nodes/sop/stroke.html "Low level tool for building interactive assets.") SOPs. If missing, it will create those values at default value of 1.
This asset is used as a building block in [Paint Color Volume](https://www.sidefx.com/docs/houdini/nodes/sop/paintcolorvolume.html "Creates a color volume based on drawn curve"), [Paint Mask Volume](https://www.sidefx.com/docs/houdini/nodes/sop/paintmaskvolume.html), [Paint SDF Volume](https://www.sidefx.com/docs/houdini/nodes/sop/paintsdfvolume.html "Creates an SDF volume based on drawn curve").
Note
If missing stroke point attributes this asset will create default ones set to 1.
## PARAMETERS
Output
Type of volume created. **Color** creates a float density field and a vector 3 `Cd` field. **Mask** creates a float density field. **SDF** creates a float signed surface field.
## Volume
Voxel Size
Size of the voxels of the created volume
## Brush
Fast Composite (Color Output)
Multiple volumes are merged together with their densities unaffected. When off the volumes are combined according to their density which is treated like an alpha channel.
Fast Rasterize (Mask Output)
When on the setup uses [Volume Rasterize Particles](https://www.sidefx.com/docs/houdini/nodes/sop/volumerasterizeparticles.html "Converts a point cloud into a volume.") which has minimal controls but is much faster than [Volume Rasterize Points](https://www.sidefx.com/docs/houdini/nodes/sop/volumerasterizepoints.html "Converts a point cloud into a volume.").
Density Scale
Density field multiplier.
Sample Rate
Distance used to sample the curves.
Fade
Falloff of the density over the length of the stroke curve.
Flow Rate
Strength of the density created over the length of the stroke curve.
Merge Method (Mask Output)
Specifies which operation is used when merging multiple curves densities.
See also
!Volume Rasterize Points#Volume Rasterize Points Geometry