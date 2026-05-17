---
type: concept
title: Volume Compress
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "fbb63f56a9e2"
---
重新压缩体积原语。
### Parameters
Volumes can be very big. The Volume Compress SOP makes it easy to make a size/quality trade off for volumetric data.

It is also able to do simple masking to quickly set uninteresting parts of the volume to zero according to mask volumes. For example, velocity vectors are not needed by mantra more than a few voxels away from the non-zero density field. So, you can use a **Volume Blur** set to **Maximum** with **Use Voxel Res** set to first expand the density field by the desired safe zone. Then use the **Mask Minimum** of 0 to set to zero any voxels whose expanded density is 0 or less.

Note

This node currently only works with standard Houdini volumes. It does not work with [VDBs](https://www.sidefx.com/docs/houdini/model/volumes.html).

## PARAMETERS

Source Group

The volume primitives to be compressed and masked.

Compression

No Recompress

Even if the compression settings are changed, the tiles will not be recompressed. NOTE

They may be recompressed with the new settings if future operations write to them.

Recompress

After possibly setting the new compression settings, each tile of the volume will be tested to see if it can be further compressed. If it can, it will be compressed.

Uncompress

All tiles are fully expanded into raw float data. This takes a lot of memory but ensures there are no special case constant tiles.

Uncompress Non-Constant

All tiles that are not constant tiles are fully expanded into raw float data. This is much more useful than the **Uncompress** option since constant tiles tend to be easier to support. This is mostly only useful if one needs the .bgeo to be read by another program/version of Houdini that lacks some of the compression options.

Update Compression Settings

The volumes compression options are updated to these values.

Constant Tolerance

When tiles in the volume are compressed to constant tiles this will be the tolerance used to determine if the tile is constant. Zero will only allow lossless compression.

Quantization Tolerance

When compressing tiles by quantizing their values this is the tolerance to use. This can often be larger than the constant tile as some of the quality can be recovered by the dithering. Zero disables quantization.

Dithering

When voxels are quantized to a lower bit depth some of the lost information can be recovered by adding noise to the pre-quantized voxels. This can be thought of as trading bit depth in the voxel with spatial resolution.

Dithering avoids banding in the resulting volume and, as volumes are often integrated for display, can keep the original weight of the volume.

Setting dithering to none will just do a pure thresholding operation. Dithering of ordered will use a constant dither matrix over each tile.

Use 16bit Float

While 32 bit floats are still used for computation, whenever they are stored in the volume they are reduced to 16 bit floats. This cuts memory consumption in half at the cost of slightly higher computation costs and reduced precision of the floats.

Mask Group

These volumes from the second input will be treated as masks. Any voxel which isn’t inside one of the masks will be set to zero prior to compression. Since all zero tiles compress very well, this can greatly reduce memory usage if the mask is sparse.

The **Volume Blur** set to **Maximum** mode can be used to expand the safe area to ensure the new zeros don’t bleed into the render. At least one voxel of padding should be used.

If both Mask Minimum and Maximum are set, voxels are masked if both are true.

Mask Minimum

Any voxel whose value in the mask primitive is strictly greater than the minimum will be masked, and thus not set to zero.

Mask Maximum

Any voxel whose value in the mask primitive is strictly less than the maximum will be masked, and hence not zeroed.

Invert Mask

The sense of the mask is inverted - voxels inside the mask will be zeroed, rather than outside.

## EXAMPLES

Load Launch

[volumecompress](https://www.sidefx.com/docs/houdini/examples/nodes/sop/volumecompress/volumecompress.html)Example for [Volume Compress](https://www.sidefx.com/docs/houdini/nodes/sop/volumecompress.html) geometry node

This example shows how to use the Volume Compress SOP to reduce the memory requirements of volumes without too adversely affecting their appearance.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volume.svg) Volume](https://www.sidefx.com/docs/houdini/nodes/sop/volume.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/isooffset.svg) IsoOffset](https://www.sidefx.com/docs/houdini/nodes/sop/isooffset.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/iso.svg) IsoSurface](https://www.sidefx.com/docs/houdini/nodes/sop/iso.html)