---
type: concept
title: Volume Deform
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "b645f792db61"
---
使用格点变形卷。
### Parameters
This node works with the Lattice From Volume node and deformation nodes.

-   The [Lattice From Volume node](https://www.sidefx.com/docs/houdini/nodes/sop/latticefromvolume.html "Create a point cloud, connected polyline mesh, or tet mesh around the active region of volumes. This node creates a deformation lattice for use with the Volume Deform node.") creates a lattice geometry from a volume or set of volumes.
    
-   You deform the lattice using defomration nodes such as [Soft Transform](https://www.sidefx.com/docs/houdini/nodes/sop/softtransform.html) and [Bend](https://www.sidefx.com/docs/houdini/nodes/sop/bend.html "Applies deformations to captured geometry such as bend, twist, taper, and squash/stretch.").
    
-   This node automatically applies the equivalent deformations to the volume(s).
    

The Lattice From Volume marks the points of the lattice geometry with the source voxel they come from (the `ix`, `iy`, and `iz` integer point attributes, which together specify the 3D location of the original sample on the voxel grid), and a `rest` attribute which records the point’s original position in space. This node compares the deformed lattice point positions to their “rest” positions and uses those transformations to deform the input volumes.

This node always outputs VDB volumes.

## How to

1.  In a SOP network, generate or import the volumes you want to deform.
    
2.  Press ⇥ Tab, type `volume deform` and press Enter. Click to place the nodes.
    
    The Volume Deform tool creates both a [Lattice From Volume](https://www.sidefx.com/docs/houdini/nodes/sop/latticefromvolume.html "Create a point cloud, connected polyline mesh, or tet mesh around the active region of volumes. This node creates a deformation lattice for use with the Volume Deform node.") and Volume Deform node at the same time, with the Lattice From Volume node already wired into the Volume Deform node’s second input.
    
3.  Wire the source volumes into the Lattice From Volume node’s first input. Connect another wire from the source volumes into the Volume Deform node’s first input.
    
4.  Between the Lattice From Volume’s output and the Volume Deform node’s second input, insert SOPs to deform the lattice geometry (for example, [Soft Transform](https://www.sidefx.com/docs/houdini/nodes/sop/softtransform.html) or [Bend SOP](https://www.sidefx.com/docs/houdini/nodes/sop/bend.html "Applies deformations to captured geometry such as bend, twist, taper, and squash/stretch.")).
    
    The default **Output type** on the Lattice From Volume node is **Points**, which is fastest. However, some deformer nodes cannot deal with unconnected points, and expect connected/polygonal geometry (for example, the [Soft Transform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/softtransform.html)). To be able to use those types of nodes, set **Output type** on Lattice From Volume to **Polyline**.
    
    This node will apply the same deformations to the volumes in the first input.
    

## Tips and notes

-   You can downsample the lattice for faster but lower-quality deformation:
    
    Connect a [VDB node](https://www.sidefx.com/docs/houdini/nodes/sop/vdb.html "Creates one or more empty/uniform VDB volume primitives.") to the Lattice From Volume node’s _second_ input. In the VDB node’s parameters, set the **Voxel size** to a value larger than the actual volume’s voxel size.
    
    (When its second input is connected, the Lattice From Volume node will use the voxel size of the volume in that input to control the lattice resolution, rather than matching the resolution of the input volume(s).)
    

## INPUTS

Source Volumes

The first input should contain the volumes you want to deform. You should wire the same volumes into the Lattice From Volume node’s first input.

Lattice Points

Deformation cage point geometry. This geometry should come from the output of a Lattice From Volume node, before being deformed by other SOPs (for example, the [Bend SOP](https://www.sidefx.com/docs/houdini/nodes/sop/bend.html "Applies deformations to captured geometry such as bend, twist, taper, and squash/stretch.")), then wired into this input. This node will apply the same deformations to the volumes in the first input.

## PARAMETERS

Group

Which volumes are going to be deformed by the lattice. This should match the equivalent parameter on the Lattice From Volume node.

Smooth Deformation

When this is on (the default), the node uses cubic interpolation to give smooth, high-quality deformation, especially for low-res volumes. If you turn this off, the node uses linear interpolation. You might want to turn this off because linear is much faster, and the quality difference may not be noticeable if you have a high-resolution volume/lattice.

Perform Partial Update

When this is off, the node replaces the incoming volumes with the deformed result. Areas of the original volumes that are not captured by the lattice will be lost. If you turn this on, the node merges parts of the incoming volumes that are not captured by the lattice with the deformed output. You can use this capture and deform only part of the volumes.

Scale Density Where Compressed

If the deformed volume is a fog volume, realistically make it less dense where deformation stretches it out, and more dense where deformation compresses it. If you turn this off, the deformation does not affect the fog density.

Max Density Scale

When **Scale Density Where Compressed** is on, you can turn this on and set a limit of how much the density can change.

Prune Tolerance

When this is on, collapse constant tiles in the VDB output, and look for areas within this amount of difference from the background value and deactivate them.

## EXAMPLES

Load Launch

[SquabTwist](https://www.sidefx.com/docs/houdini/examples/nodes/sop/volumedeform/SquabTwist.html)Example for [Volume Deform](https://www.sidefx.com/docs/houdini/nodes/sop/volumedeform.html) geometry node

This example demonstrates how to deform volumetric data.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/latticefromvolume.svg) Lattice from Volume](https://www.sidefx.com/docs/houdini/nodes/sop/latticefromvolume.html)