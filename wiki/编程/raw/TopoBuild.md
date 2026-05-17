---
type: concept
title: TopoBuild
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "29cdf2181449"
---
Creates a triangular Bezier surface.
### Parameters
Creates a triangular Bezier surface using a user specified group of points as the control points of the Bezier. The order of the points is important for creating the surface. The number of points should be (order+1)*order/2. Order 4 requires 10 points, order 3 6 points, and order 2 (a triangle) 3 points. Extra points are ignored.

The order of the points should be as follows for an order 4 patch:

0
|\
1-2
|\|\
3-4-5
|\|\|\
6-7-8-9

## PARAMETERS

Group

This is the points, in order, to be used.

Order

This is the order of the resulting patch.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/convert.svg) Convert](https://www.sidefx.com/docs/houdini/nodes/sop/convert.html)