---
type: concept
title: RBD Deform Pieces
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "5104e1414f90"
---
用模拟的代理几何体对几何体进行变形。
### Parameters
This SOP deforms the geometry according to the point cloud from the animated proxy geometry, using an attribute or constraints to limit their influence.

## PARAMETERS

Group

The primitives in the geometry to deform.

Match Proxy by Attribute

Use a custom string attribute to match geometry pieces to their proxy geometry counterparts. By default the “name” attribute is used, but in some cases, using a different attribute may be required - for example, when the proxy geometry is fractured further into more pieces than the render geometry and their names no longer match.

Name Attribute

The string attribute name to match geometry pieces to their proxy geometry counterparts.

Boundary Connection

Cluster Attribute

Uses an attribute to determine clusters of proxy geometry points to be used to deform the geometry. Geometry pieces will only be deformed by proxy geometry points with a matching attribute value.

Constraints

Clusters of proxy geometry points will be built between pieces that are connected via their constraints. Geometry pieces will only be deformed by proxy geometry points with a matching name attribute and proxy pieces' points within the same cluster.

## Capture

Rest Frame

The reference frame to use for capturing capture points and weights.

Radius

The maximum distance (in Houdini units) away from each point to look for points in the deforming point cloud. A simple Elendt metaball weighting is then applied based on the relative distance.

Minimum Points

If fewer points than this are found, the search radius is increased to find at least this number of points. This will cause discontinuities in final mesh, but is often preferable to having points being orphaned.

Maximum Points

Provides an upper bound to the number of points that any particular point can be weighted by. Speeds up application and reduces memory use, but will create discontinuities if hit.

## Deform

Attributes to Transform

Point and Vertex attributes that match this pattern will be transformed. Their Type Info will be used to determine how they should transform, as points, vectors, and normals all need different operations.

If `P` matches this string, then primitive transforms will also be rotated.

Note

`P` is always deformed, regardless of this setting.

## EXAMPLES

Load Launch

[RBDDeformPieces](https://www.sidefx.com/docs/houdini/examples/nodes/sop/rbddeformpieces/RBDDeformPieces.html)Example for [RBD Deform Pieces](https://www.sidefx.com/docs/houdini/nodes/sop/rbddeformpieces.html) geometry node

This example demonstrates the use of the RBD Deform Pieces SOP.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/xformpieces.svg) Transform Pieces](https://www.sidefx.com/docs/houdini/nodes/sop/xformpieces.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/bulletsolver.svg) RBD Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html)