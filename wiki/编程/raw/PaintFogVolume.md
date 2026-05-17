---
type: concept
title: PaintFogVolume
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "6bde4e6c189a"
---
在绘制的曲线基础上创建一个雾化体积
### Parameters
Paint Fog Volume allows freehand drawing of volumes in the viewport. Different projection options allow the drawn volume to be snapped to either an orthographic plane or a collision geometry.

This is a [digital asset](https://www.sidefx.com/docs/houdini/assets/index.html "Digital assets let you create reusable nodes and tools from existing networks.") build from the [Draw Curve node](https://www.sidefx.com/docs/houdini/nodes/sop/drawcurve.html "Creates a curve based on user input in the viewport.") and the [Volume Rasterize Curve node](https://www.sidefx.com/docs/houdini/nodes/sop/volumerasterizecurve.html "Converts a curve into a volume.").

## PARAMETERS

## Volume

Voxel Size

Size of the voxels of the created volume.

## Brush

Sample Rate

Distance used to sample the curves.

Radius

Radius multiplier of the brush.

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

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/paintcolorvolume.svg) Paint Color Volume](https://www.sidefx.com/docs/houdini/nodes/sop/paintcolorvolume.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/paintsdfvolume.svg) Paint SDF Volume](https://www.sidefx.com/docs/houdini/nodes/sop/paintsdfvolume.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/drawcurve.svg) Draw Curve](https://www.sidefx.com/docs/houdini/nodes/sop/drawcurve.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volumerasterizecurve.svg) Volume Rasterize Curve](https://www.sidefx.com/docs/houdini/nodes/sop/volumerasterizecurve.html)