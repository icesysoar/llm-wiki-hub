---
type: concept
title: Remesh
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "488f687fbb4e"
---
使用 "高质量"（近乎等边）的三角形重新创建输入表面的形状。
### Parameters
This node tries to maximize the smallest angle in each triangle. (A “high quality” triangle mesh is one where all angles are as close as possible to 60 degrees.)
This node does two types of remeshing:
Uniform
The node tries to equalize all edge lengths, giving triangles of equal size.
Adaptive
The node uses bigger triangles in broad areas and smaller triangles in detailed areas. This uses allows you to represent the original surface with fewer triangles. However, since edge lengths vary, this mode will have fewer equilateral triangles than Uniform.
Before remeshing
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/remesh_squid_before.jpg)
Uniform
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/remesh_squid_fixed.jpg)
Adaptive
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/remesh_squid_adaptive.jpg)
You can “harden” certain edges to make the remesher preserve them. This is useful for keeping sharp corners and preserving seams.
## Attributes
You can add [point attributes](https://www.sidefx.com/docs/houdini/model/attributes.html "Describes how Houdini represents geometry using details, primitives, points, vertices, and attributes.") to the input surface to give “hints” to the remesher.
Name
Datatype
Description
`targetmeshsize`
Float
An initial target edge length for the edges incident to each point. If the value is ≤ 0, the attribute is ignored. The remesher adjusts this value to prevent violation of your selected gradation.
`minmeshsize`
Float
A minimum target edge length. If `targetmeshsize` is less than this value, the remesher uses this value.
`maxmeshsize`
Float
A maximum target edge length. If `targetmeshsize` is greater than this value, the remesher uses this value.
## PARAMETERS
Hard Edges Group
An [edge group](https://www.sidefx.com/docs/houdini/model/groups.html) containing the “hard” edges. The remesher may subdivide hard edges, but will preserve them in the output. The remesher always preserves boundary (unshared) edges and non-manifold edges (edges shared by three or more polygons). Use the [Group Geometry SOP](https://www.sidefx.com/docs/houdini/nodes/sop/group.html) to create edge groups.
For example, the remesher changes the shape of a cube by trying to create good triangles. Adding the corner edges to a “hard edges” group preserves the shape of the cube.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/remesh1.jpg) ![](https://www.sidefx.com/docs/houdini/images/nodes/sop/remesh3.jpg) ![](https://www.sidefx.com/docs/houdini/images/nodes/sop/remesh2.jpg)
Iterations
Increasing this increases the quality of the generated mesh but takes more time. The first few iterations take longer to perform than later iterations, but later iterations have decreasing benefit. Typically the maximum useful number of iterations is 3 to 4.
If you set the iterations to `0`, the node will generate the `targetmeshsize` attribute when **Export size function** is on, and may subdivide edges and polygons, but will not generate new high-quality triangles.
Recompute Normals
Compute new normals for the generated mesh.
Smoothing
The amount of additional smoothing to apply after remeshing.
## Uniform
Target Edge Length
How long (in Houdini units) you want the triangle edges to be.
Use Input Points Only
Restricts the remesher to only use the points from the input geometry. This can severely limit the remesher’s ability to generate good triangles.
## Adaptive
Gradation
The rate at which edge lengths are allowed to change from one triangle to the next. Higher values generate fewer triangles but overall quality is lower.
Density
Higher values give more, smaller triangles. If **Gradation** is high, this parameter will have less effect.
Values less than `1` can coarsen/decimate the mesh, however the [PolyReduce node](https://www.sidefx.com/docs/houdini/nodes/sop/polyreduce.html "Reduces the number of polygons in a model while retaining its shape. This node preserves features, attributes, textures, and quads during reduction.") is better for that.
Min Edge Length
A global minimum edge length. Increasing this can substantially improve performance with affecting the output.
If you want to set a minimum size only in certain areas, use the `minmeshsize` point attribute to set a minimum length for edges that include the point.
Max Edge Length
A global maximum edge length.
If you want to set a maximum size only in certain areas, use the `maxmeshsize` point attribute to set a maximum length for edges that include the point.
Export Size Function
Create the `targetmeshsize` point attribute on the generated mesh. The attribute contains the “best” edge size the remesher calculated at each point.
Visualize Size Function
Sets the point color attribute (`Cd`) to visualize the “best” edge size the remesher calculated at each point. This can give you a sense of where the remesher is generating small and large triangles in case where the edges are hard to distinguish in the viewer.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/remesh_squid_visualize.jpg)
## EXAMPLES
Load Launch
[Squidremesh](https://www.sidefx.com/docs/houdini/examples/nodes/sop/remesh/Squidremesh.html)Example for [Remesh](https://www.sidefx.com/docs/houdini/nodes/sop/remesh.html) geometry node
This example demonstrates how to use the Remesh SOP to remesh a model of a giant squid crab while preserving the hard edges of the model.
See also
!Divide#Divide Geometry
!Triangulate 2D#Triangulate 2D Geometry
!Tri Divide#Tri Divide Geometry
!PolyReduce#PolyReduce Geometry
!PolySplit#PolySplit Geometry
