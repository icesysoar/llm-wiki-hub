---
type: concept
title: Guide Initialize
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "6c184c54459a"
---
迅速给导发员一些初步指导。
### Parameters
This node is useful to get started with a groom quickly. It provides multiple methods of directing the entire groom.
## PARAMETERS
Wind Amount
Amount of wind to simulate. Higher values point hair more in the **Wind Direction** below.
Wind Direction
Point guide curves in this direction when using wind.
Tangential to Skin
Wrap wind around the skin, causing guide curves to stick more to the skin in areas where the wind direction would otherwise point it away from the skin.
UV Blend
Point guide curves in the direction of increasing UV values.
UV Rotation
Rotate the used UV direction. This can be used to correct a difference between UV layout and the desired guide direction.
Lift
Lift hairs off the skin by this minimum amount.
## LOCALS
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/FUR/shears.svg) Guide Groom](https://www.sidefx.com/docs/houdini/nodes/sop/guidegroom.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/FUR/paint_clumping.svg) Hair Clump](https://www.sidefx.com/docs/houdini/nodes/sop/hairclump.html)
-   [/nodes/sop/guidecollidewithvdb](https://www.sidefx.com/docs/houdini/nodes/sop/guidecollidewithvdb.html)