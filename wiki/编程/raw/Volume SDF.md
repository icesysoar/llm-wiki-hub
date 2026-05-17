---
type: concept
title: Volume SDF
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:12:00
content_hash: "cf8a8a3f935c"
---
从卷的ISoContour构建符号距离字段。
### Parameters
The Volume SDF operation rebuilds a signed distance field from a given isocontour in a volume. The new SDF is the same resolution as the original volume.

This can be used to turn a fog volume into an SDF to get fast distance computations. It can also be used to renormalize a signed distance field that has been stretched away from its ideal shape.

The boundary condition of the volume will be changed to SDF by this SOP. To change it to constant or streak, use the Primitive SOP.

Note

This node currently only works with standard Houdini volumes. It does not work with [VDBs](https://www.sidefx.com/docs/houdini/model/volumes.html).

## PARAMETERS

Source Group

The volume primitives to be used.

Iso Surface

The iso contour to rebuild on. This will become the 0 contour of the new SDF. For fog volumes 0.5 is good. For SDF sources, 0 is usually good.

Invert

Invert the sense of the generated SDF. By default the sign of the SDF will match the original, so higher values in the original are higher values in the result. However, with fog volumes, you likely want the opposite so the white areas of fog become negative, hence inside.

Use Maximum Distance

Stops the conversion when a certain distance from the isocontour is reached. This is very useful if you only care about a certain band around the surface as it can avoid computing the value for the rest of the voxels.

Maximum Distance

Distance in object space to compute. Voxels farther than this distance will be clamped to +/- this distance.

Rebuild With Fast Iterative Method

Rebuilds the volume using the approximate Fast Iterative Method that is generally faster than the default, Fast Marching Method. However, it not as accurate. This should be used when performance is prioritized over the accuracy of the SDF.

FIM Tolerance (Fraction of Voxel Size)

The signed distance at a voxel will be recomputed at each rebuilding iteration until it converges to the specified tolerance. This value is based on the fraction of the smallest current voxel size. For example, if the smallest voxel size of the volume is 0.05 and the user-specified FIM tolerance is 0.001, then the signed-distance value at a voxel will be recomputed until the new value changes by less than 0.05 * 0.001.

Max FIM Iterations

The Fast Iterative Method will continually recompute signed distance value of a voxel until it converges to the above tolerance. This repeats until all the voxels in the bandwidth (or entire field if bandwidth is turned off) have converged. In the unlikely event that the voxels do not converge, the maximum iteration parameter will allow the rebuilder to exit at this specified limit. This value should be several times larger than the bandwidth size to ensure that all the voxels in the band can be rebuilt.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volumevop.svg) Volume VOP](https://www.sidefx.com/docs/houdini/nodes/sop/volumevop.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volumemix.svg) Volume Mix](https://www.sidefx.com/docs/houdini/nodes/sop/volumemix.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volume.svg) Volume](https://www.sidefx.com/docs/houdini/nodes/sop/volume.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/isooffset.svg) IsoOffset](https://www.sidefx.com/docs/houdini/nodes/sop/isooffset.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/iso.svg) IsoSurface](https://www.sidefx.com/docs/houdini/nodes/sop/iso.html)