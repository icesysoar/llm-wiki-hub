---
type: concept
title: LatticefromVolume
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "ad8b248bb20b"
---
在体积的活动区域周围创建一个点云、连接的多线网或tet网。这个节点创建一个变形网格，与体块变形节点一起使用。
### Parameters
This node works with the Volume Deform node and deformation nodes.

-   This node creates a lattice geometry from a volume or set of volumes.
    
-   You deform the lattice using deformation nodes such as [Soft Transform](https://www.sidefx.com/docs/houdini/nodes/sop/softtransform.html) and [Bend](https://www.sidefx.com/docs/houdini/nodes/sop/bend.html "Applies deformations to captured geometry such as bend, twist, taper, and squash/stretch.").
    
-   The [Volume Deform node](https://www.sidefx.com/docs/houdini/nodes/sop/volumedeform.html "Deform a volume using lattice points.") automatically applies the equivalent deformations to the volume(s).
    

See the help for [Volume Deform](https://www.sidefx.com/docs/houdini/nodes/sop/volumedeform.html "Deform a volume using lattice points.") for more information.

## Tips and notes

-   The [Volume Deform](https://www.sidefx.com/docs/houdini/nodes/sop/volumedeform.html "Deform a volume using lattice points.") tool puts down both a Volume Deform node and a Lattice From Volume node, already wired together. You should use it when building a volume deform network.
    
-   Setting **Output type** to **Points** (the default) is fastest. Some deformer nodes cannot deal with unconnected points, and expect connected/polygonal geometry (for example, the [Soft Transform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/softtransform.html)). To be able to use those types of nodes, set **Output type** to **Polyline**.
    
-   The tetrahedron output can be useful to build a tet mesh in the shape of a volume.
    

## INPUTS

Volumes to Convert

The volumes you want to deform. This should come from the same output as the wire you connect to the Volume Deforrm node’s first input.

Optional Reference VDB

If you wire a VDB node into the second input, this node resamples the input volumes to the VDB’s voxel size before converting to a lattice.

## PARAMETERS

Group

Which volumes to convert into a point cloud. If this is blank it means all volumes in the first input.

Sampling

Whether to sample the volume at the corners (where voxel borders intersect), or in the center of each voxel.

Expand Active Region

Expand the active area by at least this number of voxels in each direction.

Output Type

What kind of lattice to create. **Points** is fastest. However, some deformer nodes cannot deal with unconnected points, and expect connected/polygonal geometry (for example, the [Soft Transform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/softtransform.html)). To be able to use those types of nodes, set this to **Polyline**.

Output Attributes from Volumes

Create attributes on the lattice points sampled from the voxel values of the input volumes.

## EXAMPLES

Load Launch

[PigLattice](https://www.sidefx.com/docs/houdini/examples/nodes/sop/latticefromvolume/PigLattice.html)Example for [Lattice from Volume](https://www.sidefx.com/docs/houdini/nodes/sop/latticefromvolume.html) geometry node

This example demonstrates how to create a lattice around volumetric data.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volumedeform.svg) Volume Deform](https://www.sidefx.com/docs/houdini/nodes/sop/volumedeform.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volumerasterizelattice.svg) Volume Rasterize Lattice](https://www.sidefx.com/docs/houdini/nodes/sop/volumerasterizelattice.html)