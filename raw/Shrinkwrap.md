---
type: concept
title: Shrinkwrap
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "f4f9412a59db"
---
计算输入几何体的凸壳，并沿其法线向内移动其多边形。
### Parameters
The Shrinkwrap SOP computes the convex hull of the input points, and shifts the resulting polygons along their normals to shrink or grow the shape. This algorithm is also used by the [Bullet solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ") to build convex hull collision shapes.
Group
The points to use when computing the convex hull.
Shrink Amount
After computing the convex hull, each polygon will be shifted inward by this amount. A negative value will expand the convex hull outward.
Preserve Attributes and Groups
Transfers attributes and groups from the input geometry to the convex hull’s points.
Remove Inline Points
Remove points from polygons if they lie on the line connecting the previous and next point. Shrinking by a positive amount may introduce inline points.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/bulletsolver.svg) Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html)