---
type: concept
title: Volume VOP
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:12:00
content_hash: "5a1615f977a8"
---
在一组卷原语上运行CVEX。
### Parameters
The Volume VOP operation runs CVEX over a set of volume primitives. The CVEX shader can be defined as a .vfl file, a Shop, or by building a CVEX VOP network inside this node. The last is the most straightforward approach.

Binding to the CVEX script controls what values are passed to which parameters of the script. The default AutoBind will look at the name attribute of the volumes to determine which parameter they should override. If that parameter is marked as exported in the CVEX script, the volume will be written to. Otherwise, the volume is just read to get the parameter’s values. If a name attribute is not present, the first volume is bound to the “density” parameter which is provided in the default output and global parameters.

The CVEX script is applied once for each exported volume primitive. Locally defined `ix`, `iy`, `iz`, `resx`, `resy`, `resz`, `orig`, and `P` bindings are created that refer to the index, resolution, center, and current voxel position of the currently exported primitive.

The parameters list starts with parameters created by the CVEX script’s parameters. If the parameter is meant only to be bound to a volume, it can be hidden by setting the invisible flag on the VOP parameter.

## Adding user-defined colors to volumes

You can only have one volume per attribute, which means you need three volumes to represent r, g, and b in the render. Then you can process each volume individually, all together as a single Volume VOP network, or use the [Volume Mix SOP](https://www.sidefx.com/docs/houdini/nodes/sop/volumemix.html "Combines the scalar fields of volume primitives.") in user mode and modify `$V` which is the voxel value at the current sample voxel point.

Pay close attention to what is happening in the Volume VOP. You index in to the various volumes via a [Bind VOP](https://www.sidefx.com/docs/houdini/nodes/vop/bind.html "Represents an attribute bound to VEX.") set up to the exact same name as the name attribute present with the associated volume primitive. To export it back out, you need the same named parameter in a Bind Export VOP.

## PARAMETERS

## Vex Setup

Vex Source

Where to get the CVEX script from. Myself will refer to the VOP network built inside this node. SHOP will use the **Shop Path** and **Script** will load the .vex file specified in the script.

Shop Path

The CVEX Shop to apply.

This can also point to any node that contains a CVEX VOP Network.

Note

Referenced nodes parameters will be used.

Script

The CVEX script to apply.

Re-load VEX Functions

When in script mode, this reloads any .vex files to account for updates made outside of Houdini.

Compiler

The command line used by VOPs to compile the inside of this node.

Force Compile

Trigger a recompile of the VOP network.

Evaluation Node Path

VEX functions like `ch()` usually evaluate with respect to this node. Providing a path here can override where the path search starts from. This is useful for embedding in a digital asset where you would like the top level digital asset to be the search root.

Export Parameters

This pattern can be used to override the export option on the VEX shader to avoid writing to certain volumes. The pattern matches the VEX parameter, not the bound volume. The volume will still be bound for reading.

Enable Multithreading

There should be no threading issues with VEX. In the unlikely event that there are, this will allow you to determine which node is guilty, and work around it without turning off threading on a global scale.

Prune VDB Blocks

Reduce the memory footprint of output VDBs that have sufficiently large regions of voxels with the same value.

In general, you should leave this option on. Expert users may want to turn this off based on very specific situations. For example, if you know that pruning empty voxels is a waste of time since a later operation will reactivate many of them.

Note

Pruning affects only the memory usage of a grid. It does not remove voxels, apart from inactive voxels whose value is equal to the background.

## Volume Bindings

Only Output Created Geometry

Don’t output any of the incoming volumes. Instead, the output will consist of only geometry created by the VOPs. This is useful if generating points from volumes. Note you will still have to do a dummy write to any volume you wish to iterate over.

Signed-Flood Fill Output SDF VDBs

When narrow-band SDFs are processed the sense of the interior cells can be lost. This results in the interior being falsely output with the default background value. This option will do the sweep to reset these tiles to the correct sense. It only affects VDBs which are of grid class SDF.

Autobind by Name

Will use the name primitive attribute to determine which volume binds with which parameter. If the name attribute isn’t present, the first volume is bound to density.

A name like “foo” will be bound to the float parameter “foo”. A name of “foo.x” will be bound to the x component of the vector (three float) parameter “foo”. A name like “foo.zx” will be bound to the x,z component of the matrix (three by three) parameter “foo”.

Bind Each to Density

The VOP network will be applied to each volume in turn, with the volume bound to density.

Primitive, Primitive Name, VEX Parameter

Manually specifies the bindings of each primitive. This is equivalent to those primitives having a name attribute with the given name. If Primitive Name is not empty, the primitive with the matching name will be bound to the given vex parameter.

VEX Precision

VEX can evaluate at 32-bit or 64-bit precision. 64-bit provides higher accuracy, especially for transforms.

Note

Incoming attributes will preserve their original precision, so using 64-bit VEX on 32-bit positions will convert them to 64-bit, apply the operation, then convert back to 32-bit when writing out.

The auto mode will switch between 32-bit and 64-bit depending on the preferred precision of the incoming geometry. When run in 64-bit precision, any created attributes will be 64-bit. When run in 32-bit any created attributes will be 32-bit. Use [Attribute Cast](https://www.sidefx.com/docs/houdini/nodes/sop/attribcast.html "Changes the size/precision Houdini uses to store an attribute.") to change the preferred precision.

## EXAMPLES

Load Launch

[ImportVolumes](https://www.sidefx.com/docs/houdini/examples/nodes/sop/volumevop/ImportVolumes.html)Example for [Volume VOP](https://www.sidefx.com/docs/houdini/nodes/sop/volumevop.html) geometry node

This example shows how to import multiple volumes into a Volume VOP SOP.

See also

-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/volumemix.svg) Volume Mix](https://www.sidefx.com/docs/houdini/nodes/sop/volumemix.html)
-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/isooffset.svg) IsoOffset](https://www.sidefx.com/docs/houdini/nodes/sop/isooffset.html)
-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/iso.svg) IsoSurface](https://www.sidefx.com/docs/houdini/nodes/sop/iso.html)