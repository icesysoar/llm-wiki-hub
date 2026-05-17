---
type: concept
title: FEM Validate
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "8c6fc49dc07e"
---
显示四面体网格的质量
### Parameters
To achieve the best results and the best performance with FEM, it is important that your input mesh is _good quality_. A mesh is good quality when its tetrahedrons resemble regular tetrahedrons and its triangles resemble equilateral triangles. A good quality mesh should also have no inverted tetrahedrons.

The **FEM Validate SOP** allows you to check your initial geometry before you send it to an FEM simulation. This node lets you:

-   Visualize the qualities of the primitives in your simulation mesh using color gradations between red (poor quality) and green (good quality).
    
-   Inspect the simulation mesh and identify any bad tetrahedrons, bad triangles, or inverted (according to the winding order used by Houdini) tetrahedrons on the outside _or_ inside of your simulation mesh.
    

With this quality feedback, you can eliminate or improve poor quality tets by adjusting the settings of upstream nodes like the [Remesh SOP](https://www.sidefx.com/docs/houdini/nodes/sop/remesh.html "Recreates the shape of the input surface using high-quality (nearly equilateral) triangles."), [Tet Conform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/tetconform.html "Creates a tetrahedral mesh that conforms to a connected mesh as much as possible."), and the [Tet Embed SOP](https://www.sidefx.com/docs/houdini/nodes/sop/tetembed.html "Creates a simple tetrahedral mesh that covers a connected mesh.").

When importing a tetrahedral mesh from another package, its winding order may be the opposite to the one used by Houdini. If you encounter this, then you can use a [Reverse SOP](https://www.sidefx.com/docs/houdini/nodes/sop/reverse.html "Reverses or cycles the vertex order of faces.") to correct the mesh’s winding order.

Example: Quality visualization of a tetrahedral mesh

## PARAMETERS

Group

Limit the geometry that is to be validated to this group.

Type

Allow choice between visualization of mesh quality and tet inversions.

View Slice

Look at a slice of the tet mesh to see the tets on the interior.

## Quality

Quality Threshold

A quality threshold value between 0 and 1; All tets and polygons below this value will be colored red, all above are colored green.

Isolate Primitives Below Threshold

Show only the primitives below the specified quality threshold.

## Inversion

Position Type

The position attribute used to determine whether a tet is inverted: Material means that the `materialP` attribute is used. Current means that the current position attribute `P` is used.

Isolate Inverted

Show only the primitives that are inverted.

## Slice Settings

Origin

The origin of the clipping plane.

Distance

The distance of the clipping plane from the origin in the direction of the normal.

Direction

The normal direction of the clipping plane.