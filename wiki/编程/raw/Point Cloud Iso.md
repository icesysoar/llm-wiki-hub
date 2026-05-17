---
type: concept
title: Point Cloud Iso
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "789b749a05a3"
---
从输入的点构建一个ISO曲面
### Parameters
You can use this node to “surface” a point cloud, such as you would obtain from a laser scanner.

## PARAMETERS

Step Size

The step size to use when polygonizing the Iso Surface.

Radius Scale

Controls the range of influence that each input point has on the constructed Iso Surface. Increasing or decreasing this parameter may eliminate unwanted cracks or bulges in the final surface.

Build Polygon Soup

When this option is enabled, a polygon soup primitive will be created instead of separate polygon primitives.

## INPUTS

Point Source

The set of points to interpolate. The points must have point normals defined, which are assumed to be pointing outwards.

## EXAMPLES

Load Launch

[TwistyCube](https://www.sidefx.com/docs/houdini/examples/nodes/sop/pointcloudiso/TwistyCube.html)Example for [Point Cloud Iso](https://www.sidefx.com/docs/houdini/nodes/sop/pointcloudiso.html) geometry node

This example demonstrates how to construct a polygonal surface from a point cloud using the Point Cloud Iso Surface SOP.

See also

-   [/nodes/sop/tetrahedralize](https://www.sidefx.com/docs/houdini/nodes/sop/tetrahedralize.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/triangulate2d.svg) Triangulate 2D](https://www.sidefx.com/docs/houdini/nodes/sop/triangulate2d.html)