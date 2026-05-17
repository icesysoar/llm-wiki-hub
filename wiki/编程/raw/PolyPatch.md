---
type: concept
title: PolyPatch
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "e0a6c1539faa"
---
使用多个基本体生成平滑的多边形面片
### Parameters
The Polypatch op creates a smooth polygonal patch from a mesh primitive or a set of faces (polygons, NURBS or Bezier curves).

Note

The mesh is built using the point number ordering of the input, not the point ordering within the polygons as may be expected. The Sort SOP can be used in By Vertex to get the point numbers to match the incoming topology.

## PARAMETERS

Group

Subset of input to use

Spline Type

Cardinal or B-Spline

Connectivity

How to connect the patch together:

Rows

Creates horizontal lines, which are open polygons

Columns

Creates vertical lines, which are open polygons

Rows & Cols

Both rows and columns, all open polygons

Triangles

Build the grid with triangles

Alternating Triangles

Build the grid with alternating triangles

Quadrilaterals

Four-sided quadrilaterals (default)

Inherit from Source

Same connectivity as the mesh source

U Wrap

The wrapping of the built patch.

Off

Do not wrap in U/V

On

Wrap in U/V

If prim. does

Wrap in U/V if the input primitive does

U Clamp (First)

The clamping of the built patch.

Off

Do not clamp the first/last end in the U/V direction

On

Clamp the first/last end in the U/V direction

If prim. does

Clamp the first/last end in the U/V direction if the input primitive does

Output Divisions

The number of divisions in the output surface. Use more divisions for a smoother surface.

Output Polygons

Force polygonal rather than mesh output

## EXAMPLES

Load Launch

[PolyPatchDNA](https://www.sidefx.com/docs/houdini/examples/nodes/sop/polypatch/PolyPatchDNA.html)Example for [PolyPatch](https://www.sidefx.com/docs/houdini/nodes/sop/polypatch.html) geometry node

This example demonstrates the use of the PolyPatch SOP to procedurally model complex forms.

Here, a DNA model is created.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/fit.svg) Spline Fit](https://www.sidefx.com/docs/houdini/nodes/sop/fit.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/resample.svg) Resample](https://www.sidefx.com/docs/houdini/nodes/sop/resample.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/polyspline.svg) PolySpline](https://www.sidefx.com/docs/houdini/nodes/sop/polyspline.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/polyloft.svg) PolyLoft](https://www.sidefx.com/docs/houdini/nodes/sop/polyloft.html)