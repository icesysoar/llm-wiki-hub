---
type: concept
title: Edge Cusp
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "e59f9e2880c3"
---
通过唯一化它们的点和重新计算点法线来锐化边缘。
### Parameters
This operator does not unique the two end points of the path to cusp. Therefore, this operator requires at least two connected edges to have any effect on the geometry. If you only select two edges, the node uniques the point that is shared between them, and the cusp fades into the other two points. This provides for the ability to tailor the cusp by choosing the edges along which the cusp will fade.
## Using EdgeCusp
1.  Select the edges you want to sharpen.
2.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/edgecusp.svg)[EdgeCusp](https://www.sidefx.com/docs/houdini/nodes/sop/edgecusp.html "Sharpens edges by uniquing their points and recomputing point
    normals.") tool on the **Polygon** tab.
![](https://www.sidefx.com/docs/houdini/images/shelf/edge_cusp_before.jpg) ![](https://www.sidefx.com/docs/houdini/images/shelf/edge_cusp_after.png)
## PARAMETERS
Group
The edges with which to create a cusp.
Normally you will use this operator in the viewer and simply select the edges you want, however if you need to you can also use a space-separated list of the following codes in this field to specify edges:
Code
Meaning
`n`
All edges in primitive number n.
`pn`
Point number n / edges with point number n.
`nem`
Edge number m of primitive n.
`pa-b`
Edges between point number a and point number b.
Update Point Normals
Recomputes the point normals (if they exist).
## EXAMPLES
Load Launch
[EdgeCuspStairs](https://www.sidefx.com/docs/houdini/examples/nodes/sop/edgecusp/EdgeCuspStairs.html)Example for [Edge Cusp](https://www.sidefx.com/docs/houdini/nodes/sop/edgecusp.html) geometry node
The Edge Cusp SOP is a quick way to create distinct edges on a model during render time. Edge Cusp creates the edges by uniquing shared edge points and recomputing point normals.
See also
!Facet#Facet Geometry