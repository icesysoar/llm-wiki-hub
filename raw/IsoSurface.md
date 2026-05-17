---
type: concept
title: IsoSurface
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "5e0ab16323e5"
---
从一个隐函数生成iso曲面
### Parameters
The IsoSurface operation uses implicit functions to generate isometric surfaces. It can be used to visualize grade 12 math homework in 3D. Alternatively, this operation can be used to visualize a 3D texture image.
The input to this node defines the bounding box within which the iso surface or volume primitive is created. Once the bounding box of the input is taken, the iso surface is clipped to its dimensions.
## PARAMETERS
## Function
Implicit Function
Function for implicit surface building.
Minimum Bound
The minimum clipping plane boundary for display.
Maximum Bound
The maximum clipping plane boundary for display.
## 3D Texture
3D Texture File
The path to a 3D texture file
Reload 3D Texture
Reloads the texture file from disk
Use Texture Resolution for Divisions
A 3D texture file has an x, y and z resolution. Rather than manually specifying the sampling resolution for the iso surface, this uses the voxel boundaries in the .i3d file, which ensures that each voxel will be sampled one time.
Texture Channel
The channel of the 3D texture file which specifies the density field.
Density Threshold
Generate the surface where the texture file has this value.
Filter
The filter type to use when evaluating the 3d texture.
Filter Width
The filter width to use when evaluating the 3d texture, in voxels. The filter width is specified in units of the original texture file voxels, not output divisions.
Divisions
The density of polygons along the xyz axes.
Build Volume
Instead of creating a polygonal isosurface, will create a volume primitive according to the expression.
Build Polygon Soup
Instead of creating separate polygon primitives, will create a polygon soup primitive.
## LOCALS
X, Y, Z
Variables in the implicit function equation.
V
If the input geometry contains volume primitives, this is the total value of those volume primitives at the current point.
The value of each volume primitive is added to a running total to get the final $V value.
See also
!IsoOffset#IsoOffset Geometry