---
type: concept
title: Connect Adjacent Pieces
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "6b6eb6d4dfb7"
---
在附近的棋子之间创造线条。
### Parameters
This node creates a set of polygons that connect points together from nearby pieces. This is useful for creating a [Constraint Network](https://www.sidefx.com/docs/houdini/nodes/dop/constraintnetwork.html "Constrains pairs of RBD objects together according to a polygon network.") that constrains or glues together adjacent objects in a simulation.
The `name` primitive attribute is used to determine which primitives in the input geometry belong to each piece. The output geometry contains a `name` point attribute to identify the piece that each point belongs to.
## PARAMETERS
Connection Type
Specifies how connections between nearby pieces will be created.
Adjacent Pieces from Points
Each point will be connected to the closest point from another piece. The **Max Connections** parameter can be used to allow connections to multiple nearby pieces.
Adjacent Pieces from Surface Points
The centroids of nearby pieces will be connected together. Before searching for adjacent pieces, points will be scattered across the surface to aid the detection of close surfaces.
Adjacent Points
Connections will be made between raw points, ignoring any name attribute. This is useful if the geometry is already packed, or constraints are being built for the sand solver.
Assume Uniform Radius
When connection **Adjacent Points**, any `pscale` attibute found will be assumed to be the same for all points. This allows a much faster query to be performed.
Piece Attribute
Specifies the string primitive attribute used to determine which primitives in the input geometry belong to each piece. This attribute will be transferred to the points of the output geometry. The default value is `name`, which is the standard attribute used for rigid bodies.
Find Boundary Connections
Only create connections between adjacent pieces that have different values of the **Cluster Attribute**. This can be useful for creating constraints between pieces at the boundary between different material types.
Cluster Attribute
Specifies the primitive attribute used to determine which pieces belong to each cluster when **Find Boundary Connections** is enabled. This attribute can be either an integer or a string.
Points per Area
When connecting **Adjacent Pieces from Surfaces**, points are first seeded on the surface of all the objects. There must be enough points for close points to occur to detect close surfaces. This should be scaled down by the square of the geometry size. For example, if your geometry is 10× bigger, you should have 1/100 the points per area.
Relax Iterations
When connecting **Adjacent Pieces from Surfaces**, the scattered points will be pushed away from each other to avoid clumping. This is done gradually, to avoid chaotic behavior and to allow control over how much relaxation takes place. More relaxation iterations will result in points that are more separated from each other.
Search Radius
Specifies the maximum allowed distance when searching for nearby points.
If in **Adjacent Points** mode, this will be multiplied by any `pscale` attribute. If `pscale` isn’t present, it is treated as 1 so this refers to an absolute distance.
Max Search Points
Specifies an upper limit on the number of nearby points that can be inspected. Lower numbers will improve performance, but run the risk that only points from the same piece will be detected rather than points on nearby pieces, causing connections to be missed.
Cone Angle
Restricts the search for nearby points to only consider points within the cone defined by this angle from the query point’s normal. This can be used to avoid creating connections to points that are “behind” the query point.
Note
You can optionally turn this parameter off to search in all directions around the point.
Max Connections
Specifies an upper limit on the number of pieces that each seed point can be connected to. This is primarily useful when connecting **Adjacent Pieces from Points**, but may also improve the detection of **Adjacent Pieces from Surface Points**. However, increasing this value will reduce performance.
Centroid Method
Specifies how the centroid is computed.
Center of Mass
Computes the center of mass of the geometry in the same manner as the [Bullet solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ").
Bounding Box Center
Computes the center of the geometry’s bounding box.
Offset From Centroid
When connecting **Adjacent Pieces from Surface Points**, each point is moved away from the centroid in the direction of the other point that it is connected to. A value of 0 will leave the point at the centroid, and a value of 1 will move the point to the surface of its piece.
Create Length Attribute
Create a primitive attribute that contains the length of each connection.
Length Attribute
Specifies the name of the primitive attribute used to record the length of each connection.
## INPUTS
Pieces
The geometry to find adjacent pieces in.
See also
!Constraint Network#Constraint Network Dynamics
!Assemble#Assemble Geometry
!Voronoi Fracture#Voronoi Fracture Geometry