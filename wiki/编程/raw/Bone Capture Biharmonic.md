---
type: concept
title: Bone Capture Biharmonic
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "c6332354612c"
---
通过在四面体网络上基于双谐波函数赋予捕捉权重来支持变形
### Parameters
This node creates captures weights on geometry that is to be deformed by the [Bone Deform](https://www.sidefx.com/docs/houdini/nodes/sop/bonedeform.html "Uses capture attributes created from bones to deform geometry according to their movement.") SOP. They are computed using biharmonic functions on the tetrahedral mesh specified from the second input.

The weights are solved using constraints specified on the tetrahedral mesh points by way of the `boneCapture` attribute. Points which have no assigned weights are treated as values to be solved. The suggested setup for generating such a tetrahedral mesh from the skin geometry is to use a [Tet Conform](https://www.sidefx.com/docs/houdini/nodes/sop/tetconform.html "Creates a tetrahedral mesh that conforms to a connected mesh as much as possible.") SOP with the skin geometry in its first input and a [Bone Capture Lines](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturelines.html "Utility node that supports Bone Capture Biharmonic by creating lines from bones with suitable attributes.") SOP as its second input. For high resolution skin meshes, it’s suggested to use [Tet Embed](https://www.sidefx.com/docs/houdini/nodes/sop/tetembed.html "Creates a simple tetrahedral mesh that covers a connected mesh.") instead of [Tet Conform](https://www.sidefx.com/docs/houdini/nodes/sop/tetconform.html "Creates a tetrahedral mesh that conforms to a connected mesh as much as possible.") with **Enlarge to Cover Input Mesh** turned off.

After the weights are computed on the tetrahedral mesh, they are then transferred to the points specified from the first input (which typically contains polygonal geometry).

Note

This node uses Intel’s Math Kernel Library. You can [use an environment variable](https://www.sidefx.com/docs/houdini/model/mkl.html "Some nodes use a library that gives a speed boost for floating-point operations but can make the output vary between different computers. You can control how much the library tries to guarantee reproducible results.") to tune the library for speed or for producing identical results from run to run.

## PARAMETERS

Group

Optional point group from the first input to capture. Default behavior is to capture all points when this value is empty.

Max Iterations

The maximum number of iterations when solving for the weights. Using a large number of max iterations will allow the solver to converge to a higher quality solution at the expense of speed. Since biharmonic functions for capture weights do not usually need to be very precise, a low number of max iterations often produces suitable results.

Destroy Existing Weights

Destroy any existing capture weights.

Blend Factor

If destroy existing weights is off, then this parameter determines the blend factor of the created capture weights with the existing ones.

Point Coloring

Adds point color attributes to show the weighting of the points. The color of each point will be a blend of the colors of its captured regions.

Zero Weight Point Color

Color used for points with zero weight.

## Diagnostics

Output Capture Tets

If on, it outputs the tet mesh from the second input (instead of the first input) with the solved weights for debugging purposes.

Verify

If on, it verifies internal matrices and prints solver specific information to the standard output for debugging purposes. An error will be added if bad tets are found.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/bonecapturebiharmonic.svg) Bone Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturebiharmonic.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/bonecapturelines.svg) Bone Capture Lines](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturelines.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/tetconform.svg) Tet Conform](https://www.sidefx.com/docs/houdini/nodes/sop/tetconform.html)