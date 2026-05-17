---
type: concept
title: Depth Darken
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "478f52967932"
---
使图像中的深度边界变暗。
### Parameters
Depth Darken creates dark halos on the deep side of depth discontinuities.
The input should be a deep raster with the Pz channel present and containing the depth information of the image.
Because the depth darkening is done on a per pixel basis, the cleanest results can be gained by rendering a higher resolution image with no sub-sampling and scaling the image after applying the depth darkening. This ensures there is only one z-value per pixel which avoids artifacts caused by antialiasing of edges.

Depth Scale
Differences in depth have to be converted into differences in intensity. As the size of scenes can vary, the correct ratio will vary depending on the size of the scene. The Depth Scale allows one to compensate for the ratio of the scene.
Radius
The diameter of the depth darkening effect. Pixels up to this radius from the depth boundary can be affected.
Maximum Darken
The final darkening effect is clamped against the maximum darken value. A solid black halo can be too aggressive, so smaller values are useful to modulate the extent of the effect.
Use Logarithmic
Unlike traditional color values which have a fixed range, z-depth values can vary considerably over the image. Working with linear z-values may cause far away depth discontinuities to be exaggerated because their absolute difference is large, despite their relative difference being the same. By working in logarithmic space, a depth boundary that doubles the distance to the camera will have a fixed level of effect.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/zcomp.svg) Z Comp](https://www.sidefx.com/docs/houdini/nodes/cop2/zcomp.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/edgeblur.svg) Edge Blur](https://www.sidefx.com/docs/houdini/nodes/cop2/edgeblur.html)