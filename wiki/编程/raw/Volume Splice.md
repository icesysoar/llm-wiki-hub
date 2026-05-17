---
type: concept
title: Volume Splice
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:12:00
content_hash: "bd639a95b075"
---
接头重叠卷原语一起。
### Parameters
The Volume Splice operation splices overlapping volumes together. The volumes have to be axis-aligned with matching voxel sizes. This sort of output is common from distributed fluid sims.

The input primitives are grouped together by their name attribute. A new volume is created for each group large enough to contain all the source volumes. Each voxel of the new volume is copied from at most one of the source volumes. If more than one overlaps, the voxel closest to the center point of the primitive is used.

Note

This node currently only works with standard Houdini volumes. It does not work with [VDBs](https://www.sidefx.com/docs/houdini/model/volumes.html).

## PARAMETERS

Source Group

The volume primitives to be used.

Delete Original Volumes

Delete any processed volumes, leaving only the spliced total.

See also

-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/volumevop.svg) Volume VOP](https://www.sidefx.com/docs/houdini/nodes/sop/volumevop.html)
-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/volumemix.svg) Volume Mix](https://www.sidefx.com/docs/houdini/nodes/sop/volumemix.html)
-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/volume.svg) Volume](https://www.sidefx.com/docs/houdini/nodes/sop/volume.html)
-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/isooffset.svg) IsoOffset](https://www.sidefx.com/docs/houdini/nodes/sop/isooffset.html)
-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/iso.svg) IsoSurface](https://www.sidefx.com/docs/houdini/nodes/sop/iso.html)