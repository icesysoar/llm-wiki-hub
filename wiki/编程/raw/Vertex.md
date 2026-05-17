---
type: concept
title: Vertex
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "df91da4c1240"
---
手动在顶点上添加或编辑属性（而不是在点上）。
### Parameters
This node is similar to the [Point SOP](https://www.sidefx.com/docs/houdini/nodes/sop/point.html). It supports two inputs, and will inherit the first input source by default.
There are currently four vertex attributes supported: Diffuse Color, Alpha, Texture Coordinates, and Normal.
When the attribute is defined, it can only occur on either points or vertices, but not both. Thus, if the input geometry has a point attribute for diffuse color, the attribute will automatically be “elevated” to be a vertex attribute (if diffuse colors are added in the Vertex op).
The op processes every vertex of every primitive. For each vertex processed, there are variables which allow you to know the:
a) Vertex number of the primitive being processed b) The number of vertices in the primitive being processed c) The point which is referenced by the vertex d) The primitive which contains the vertex e) The total number of points f) The total number of primitives
Set the “Cusp Normal” parameter in order for a cusp operation similar to that of the [Facet SOP](https://www.sidefx.com/docs/houdini/nodes/sop/facet.html "Controls the smoothness of faceting of a surface."), without uniquing shared points, to be applied based on the Angle parameter as threshold. This can also be done with the [Normal node](https://www.sidefx.com/docs/houdini/nodes/sop/normal.html "Computes surface normal attribute.").
There are also local variables to find out the value of the point attribute position. See Locals section below.
## Example
Example of manipulation:
vertex/cr = $BBX
vertex/cg = $CG2
vertex/cb = $CB - $CB2
## PARAMETERS
Group
Subset of primitives whose vertices are to be affected.
Color
Diffuse color (RGB)
Alpha
Transparency value
Texture
Texture coordinates
Crease
Crease weight for polygonal subdivision Use the Primitive operation to create a crease of constant weight for the entire primitive.
Normal
Normal directions
Angle
The threshold angle to cusp at.
## LOCALS
PT, NPT
Point number and total number of points.
PR, NPR
Primitive number & total number of primitives.
VTX, NVTX
Vertex number & total number of vertices.
CEX, CEY, CEZ
Centroid of the geometry.
BBX, BBY, BBZ
Relative position of point within bounding box. Values are mapped between 0 and 1.
TX, TY, TZ
Point position.
NX, NY, NZ
Point or vertex normal directions.
MAPU, MAPV, MAPW
Point or vertex texture coordinates.
CR, CG, CB
Diffuse point or vertex color.
CA
Point or vertex alpha value.
CREASE
Point or vertex crease weight value.
PT2, NPT2, etc
Append 2 for the second source.
See also
!Normal#Normal Geometry
!Point#Point Geometry
!Primitive#Primitive Geometry