---
type: concept
title: Paint SDF Volume
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "5b60f68864f0"
---
根据绘制的曲线创建一个SDF体积
### Parameters
Paint SDF Volume allows freehand drawing of SDF volumes in the viewport. Different projection options allow the drawn volume to be snapped to either an orthographic plane or a collision geometry.
This is a [digital asset](https://www.sidefx.com/docs/houdini/assets/index.html "Digital assets let you create reusable nodes and tools from existing networks.") build from the [Draw Curve node](https://www.sidefx.com/docs/houdini/nodes/sop/drawcurve.html "Creates a curve based on user input in the viewport.") and the [Volume Rasterize Curve node](https://www.sidefx.com/docs/houdini/nodes/sop/volumerasterizecurve.html "Converts a curve into a volume.").
## PARAMETERS
## Volume
Voxel Size
Size of the voxels of the created volume.
## Brush
Fast Rasterize
When on the setup uses [Volume Rasterize Particles](https://www.sidefx.com/docs/houdini/nodes/sop/volumerasterizeparticles.html "Converts a point cloud into a volume.") which has minimal controls but is much faster than [Volume Rasterize Points](https://www.sidefx.com/docs/houdini/nodes/sop/volumerasterizepoints.html "Converts a point cloud into a volume.").
Density Scale
Density field multiplier.
Sample Rate
Distance used to sample the curves.
Fade
Falloff of the density over the length of the stroke curve.
Flow Rate
Strength of the density created over the length of the stroke curve.
Merge Method
Specifies which operation is used when merging multiple curves densities.
## Projection
Live Reprojection
None
Projection is only done at drawing stage.
Send Rays
Reproject by resending rays on underlying changing collision geometry.
Use UVs
Use the uv coordinates from the initial projection on changing collision geometry.
Trim Curves
Delete parts of drawn curves that don’t hit any collision geometry.
Projection
XY/YZ/ZX/Screen Plane
Projection of the curve is done on specified orthographic plane.
Geometry
Projection is done on the collision geometry that is plugged into first input.
Projection Center
Center of the orthographic projection plane.
## Stroke
Individual stroke information is kept as dynamic multiparms.
See also
!Paint Color Volume#Paint Color Volume Geometry
!Draw Curve#Draw Curve Geometry
!Volume Rasterize Curve#Volume Rasterize Curve Geometry