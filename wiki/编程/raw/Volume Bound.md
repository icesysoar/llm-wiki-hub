---
type: concept
title: Volume Bound
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "93fb20dbd0b7"
---
界限体素数据。
### Parameters
This node computes the bounds of voxels that meet a certain requirement.

A volume-aligned bounding box is made. All the voxels that match the desired region settings will be inside of this bounding box. For example, setting **Region to Find** to **Strictly Greater** and **Bounding Value** 0.1 will create a bounding box that contains all the voxels whose value is greater than 0.1.

Tip

The bounding box is conservative, so it includes voxels that don’t meet the condition.

Voxel values are stored at the center of the voxels, but by default are bound at the edges. Whether a voxel is included in the region is based on the value at the center.

This grid represents voxels. The voxel values are stored in the centre of the voxels and are represented by points. The three boxes represent the bound created based on different values in the **Voxel Padding** parameter.

![](https://www.sidefx.com/docs/houdini/images/volumebound.png)

-   A value of 0, 0, 0 will give you the default red region bounding box.
    
-   A value of -0.5, -0.5, -0.5 will create a bound on the center of the voxels, represented by the inner grey region.
    
-   A value of 0.5, 0.5, 0.5 will create a bound represented by the outer grey region. This type of bound ensures that all evaluated values meet the condition inside the box when trilinearly sampled.
    

Incoming geometry isn’t copied, and if no voxels match the condition, no bounding box is built.

Note

This node currently only works with standard Houdini volumes. It does not work with [VDBs](https://www.sidefx.com/docs/houdini/model/volumes.html).

## PARAMETERS

Group

Subset of primitives to bound.

Region to Find

The region of voxels to look for. For instance, if this parameter is set to **Greater or Equal**, box is built around voxels whose value is greater than or equal to **Bounding Value**.

Bounding Value

The value to compare voxel values against to see if they are valid to include in the bounding region.

Voxel Padding

The region will be expanded by this number of voxels. To bound on the center of voxels rather than the edges, use -0.5, -0.5, -0.5.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/bound.svg) Bound](https://www.sidefx.com/docs/houdini/nodes/sop/bound.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/convertvolume.svg) Convert Volume](https://www.sidefx.com/docs/houdini/nodes/sop/convertvolume.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volumesurface.svg) Volume Surface](https://www.sidefx.com/docs/houdini/nodes/sop/volumesurface.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/iso.svg) IsoSurface](https://www.sidefx.com/docs/houdini/nodes/sop/iso.html)