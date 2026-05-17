---
type: concept
title: BooleanFracture
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "63343db9ac8e"
---
使用切割面对输入的几何体进行断裂。
### Parameters

This SOP fractures the input mesh using one or more cutting surfaces. Similar to [Voronoi Fracture](https://www.sidefx.com/docs/houdini/nodes/sop/voronoifracture.html "Fractures the input geometry by performing a Voronoi decomposition of space around the input cell points"), this is a higher-level node (based on the [Boolean SOP](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html "Combines two polygonal objects with boolean operators, or finds the intersection lines between two polygonal objects.")) that handles common fracturing-related tasks such as naming pieces, recomputing normals, and building constraints between adjacent pieces.
Geometry to Fracture
The polygonal geometry that will be fractured.
Cutting Surface
The polygonal cutting surfaces to fracture the geometry with.
### OUTPUTS
Fractured Geometry
The fractured polygonal geometry.
Constraint Geometry
Geometry containing a point for each piece, and polygon lines connecting pieces that are adjacent. This is useful for creating a [constraint network](https://www.sidefx.com/docs/houdini/nodes/dop/constraintnetwork.html "Constrains pairs of RBD objects together according to a polygon network.").
### PARAMETERS
Group
The geometry to be fractured. If no group is specified, the full input geometry will be fractured.
### Pieces
Name Attribute
Specifies how the `name` primitive attribute (which identifies the primitives belonging to each piece) is created.
Overwrite
Constructs the name by combining the **Piece Prefix** with the piece number.
Append
If the original geometry already has a `name` primitive attribute, it is prefixed with the **Fracture Namespace** and then the **Piece Prefix** and piece number are appended to it. This is useful when performing multiple levels of fracturing.
Fracture Namespace
Adds a prefix to the name of each input piece when **Name Attribute** is set to **Append**. This can be useful for avoiding duplicate piece names or grouping the new pieces that are created.
Piece Prefix
The prefix applied to the name of each piece created by the fracture.
Compute Interior Normals
Computes vertex normals on the edges of the interior geometry, so that they will have a cusped appearance.
Interior Cusp Angle
Computes vertex normals on the edges of the interior geometry with angles greater than this angle, so that they will have a cusped appearance.
Exterior Normals
Specifies how to compute or update vertex normals for the input geometry.
Preserve Existing Normals
Only compute vertex normals if the input geometry does not already have normals and **Compute Interior Normals** is enabled.
Recompute Normals
Always compute vertex normals for the input geometry.
Do Not Compute Normals
Do not compute normals for the input geometry. If **Compute Interior Normals** is still enabled, though, smooth normals will be computed.
Exterior Cusp Angle
Computes vertex normals on the edges of the input geometry with angles greater than this angle, so that they will have a cusped appearance.
### Output Attributes
Attribute Name Prefix
Specifies a prefix for the attribute or group names specified by the **Primitive Piece**, **Interior Group**, and **Exterior Group** parameters. This can make it easier to create unique attribute names when performing multiple levels of fracturing.
Primitive Piece
The name of the attribute containing the piece number with which each primitive is associated.
Interior Group
The group containing any primitives in the interior surfaces created during fracturing.
Exterior Group
The group containing the primitives in the original input geometry.
Merge with Existing Groups
If the interior and exterior groups already exist on the geometry from a previous fracture, the new interior primitives will be added to the interior group and the original exterior group will be preserved. This behavior results in an interior group that contains all of the interior primitives created by multiple fracture operations (which can be useful for the [RBD Interior Detail SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdinteriordetail.html "Creates additional detail on the interior surfaces of fractured geometry.")). Otherwise, the interior group will be overwritten to only contain the interior primitives added by this node, and the exterior group will contain all of the input primitives.
Copy Cutting Surface Attributes
Copy attributes from the input cutting surface to the output piece’s interior geometry.
Point Attributes
The point attributes to copy from the cutting surface to the points of the output piece’s interior geometry.
Vertex Attributes
The vertex attributes to copy from the cutting surface to the vertices of the output piece’s interior geometry.
Primitive Attributes
The primitive attributes to copy from the cutting surface to the primitives of the output piece’s interior geometry.
### Boolean Settings
Treat As
Whether to treat this geometry like the boundary of a solid object, or as a flat surface with no interior or exterior.
Detriangulate
Internally, this node converts the input geometry to triangles. This controls whether to convert the triangulated geometry back to N-gons matching the originals for output.
All Polygons
Merge neighboring triangles originating from the same input polygon back together.
Only Unchanged Polygons
If an input polygon is cut as part of the operation, keep it as triangles. Otherwise put triangulated polygons back together.
No polygons
Output the triangulated geometry.
Assume seam polygons are flat
Most “flat” polygons are not technically flat because of floating-point precision issues. This ignores those kinds of differences when de-triangulating the output. The default (on) is fine in almost all cases, but you may want to turn this off if you are doing procedural booleans on geometry with extremely fine detail/separation between surfaces. Turning this off will result in more triangles in the output.
See the [tips and notes](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html#tips) above for more information.
Collapse tiny seam-adjacent edges
Even if you try very hard to align edges on the two models you are combining, tiny numeric precision errors can (and usually will) cause the edges to be microscopically mis-aligned, creating extra edges in the output. When this option is on, the node intelligently fuses these tiny edges away. You should not turn this off unless you really know that you want microscopically thin polygons for some reason.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/boolean_tinyedges.svg)
Edge length threshold
When **Collapse tiny seam-adjacent edges** is on, edges this length or smaller are automatically fused in the output.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/boolean.svg) Boolean](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdinteriordetail.svg) RBD Interior Detail](https://www.sidefx.com/docs/houdini/nodes/sop/rbdinteriordetail.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/voronoifracture.svg) Voronoi Fracture](https://www.sidefx.com/docs/houdini/nodes/sop/voronoifracture.html)