---
type: concept
title: Divide
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "50a768af65dc"
---
对多边形进行分割、平滑和三角化。
### Parameters
This operator performs two specific tasks:

-   **Smooth** by subdividing.
    
-   **Cleanup** polygons: fix concave polygons, divide N-side polygons into triangles or quads with optional brickered layout, triangulate non-planar polygons.
    

## Notes

-   The [Clean surface node](https://www.sidefx.com/docs/houdini/nodes/sop/clean.html "Helps clean up dirty models.") also cleans up polygonal geometry, and is more suitable for conditioning geometry to work as a cloth object.
    
-   Divide has an optional second input for rest geometry. This input applies only to the convexing functionality. When the second input is connected, the Divide node will use the points from the rest geometry to perform convexing. In order for this to work appropriately, the point indices in the main input geometry must match those in the rest geometry.
    
-   If you want to determine whether pieces in a fractured object are manifold, turn on the [Remove Shared Edges](https://www.sidefx.com/docs/houdini/nodes/sop/divide.html#removesh) checkbox. If you have closed manifold geometry, you should end up with no geometry.
    

## PARAMETERS

Convex Polygons

Split all concave polygons to make them convex.

Maximum Edges

Restrict the number of edges in each polygon to be equal to or less than this number. If a polygon has more edges, it is divided into smaller polygons.

Triangulate Non-Planar

Triangulates non-planar primitives when turned on. A non-planar primitive is a primitive whose vertices do not all lie on the same plane.

The slider represents the tolerance at which to determine whether or not a primitive is non-planar. A planar primitive that is transformed or altered in some other way, could become non-planar due to numerical computation error. A value can be computed to measure how non-planar it is. If this measurement falls below the tolerance level, the primitive is deemed planar and does not get divided. Conversely, if the measurement is above the tolerance level, it is deemed non-planar and is divided.

Don’t Generate Slivers

If **Convex Polygons** is enabled and a triangle with two or more coincident vertices would have been output, this indicates to not output the triangle. Other degenerate polygons may also be omitted in this manner. Note that this may make the resulting mesh non-watertight, or even disconnected, so use with caution.

Avoid Small Angles

If **Maximum Edges** is 3 or **Triangulate Non-Planar** is selected, this improves the triangles in the triangulation by avoiding small angles, where possible.

Smooth Polygons

Subdivide adjacent non-flat polygons. Smoothed polygons must have shared points.

Weight

Localizes the effect of polygon smoothing.

Divisions

Number of levels of subdivision. Each level doubles the number of polygons.

Bricker Polygons

Divide the polygon into a mesh-like series of polygons. This aids in surface deformation operations.

Size, Offset, Angle

Control the layout of brickered polygons.

Bricker Shared Edges

Controls if brickering will also divide the edges of polygons outside of the specified group, provided those edges were brickered inside the group. This prevents the brickering from creating gaps by inserting T-junctions in the topology.

Remove Shared Edges

Remove common edges.

Compute Dual

Convert the polyhedron into its point/face dual.

Attributes to Swap

When the **Compute Dual** option is enabled, these attributes and groups will be transferred from input points to corresponding output primitives and from input primitives to output points. Any vertex attributes and groups matching this pattern will be transferred from input vertices to output vertices.

## EXAMPLES

Load Launch

[RemoveSharedEdges](https://www.sidefx.com/docs/houdini/examples/nodes/sop/divide/RemoveSharedEdges.html)Example for [Divide](https://www.sidefx.com/docs/houdini/nodes/sop/divide.html) geometry node

The Divide SOP is capable of removing edges from geometry. In this example a Divide SOP removes all the internal edges from a simple grid.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/clean.svg) Clean](https://www.sidefx.com/docs/houdini/nodes/sop/clean.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/clip.svg) Clip](https://www.sidefx.com/docs/houdini/nodes/sop/clip.html)
-   [/nodes/sop/cookie](https://www.sidefx.com/docs/houdini/nodes/sop/cookie.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/edgedivide.svg) Edge Divide](https://www.sidefx.com/docs/houdini/nodes/sop/edgedivide.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/polysplit.svg) PolySplit](https://www.sidefx.com/docs/houdini/nodes/sop/polysplit.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/tridivide.svg) TriDivide](https://www.sidefx.com/docs/houdini/nodes/sop/tridivide.html)