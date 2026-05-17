---
type: concept
title: Cross Section Surface
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "c87cbebe8691"
---
在横断面周围创建一个表面。
### Parameters
This node creates a surface with grid, tube, or torus topology around cross sections. This is equivalent to using just the second input of the [Sweep node](https://www.sidefx.com/docs/houdini/nodes/sop/sweep.html "Creates a surface by sweeping a cross section curve along a spine curve."), so the parameters provide similar controls.
## PARAMETERS
Cross Section Group
Group of primitives from the input to use as cross sections.
Reverse Cross Sections
Toggle this on to reverse normals. When enabled, cross section primitives will be treated as if they were reversed, which has the effect of reversing normals on the surface.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/sweep2/reverse_cross_sections.jpg)
End Cap Type
The type of end cap topology when **Close Implicit Backbone Curve** is disabled. See the descriptions and images below.
None
No end caps.
Single Polygon
If the cross section primitives are all closed, this option will create single closed polygons for end caps.
Grid
This option will add **Cap Divisions** additional rows to each end of the output grid, scaling the end cross sections toward the center of the cross section’s bounding circle, and translating them in the cross section normal direction by an amount proportional to **End Cap Scale**, to form end caps.
Side Single Polygon
If **Close Implicit Backbone Curve** is enabled and the cross sections are open, this option will create single closed polygons for side caps, instead of end caps.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/sweep2/end_caps.jpg)
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/sweep2/end_caps_cross.jpg)
Cap Divisions
When **End Cap Type** is **Grid**, this is the number of rows to add on each end to form any end caps.
Triangular Poles
When this is enabled and **End Cap Type** is **Grid**, the poles of end caps will be triangles, instead of quads with duplicate vertices.
End Cap Scale
When **End Cap Type** is **Grid**, the pole of the end cap will be translated out by the radius of the end cross section bounding circle times this scale. This scale can be negative for concave end caps. See the image above.
End Cap Roundness
When **End Cap Type** is **Grid**, the end cap will be deformed toward being rounder for values closer to 1 (with 1 being circular), and toward being more pointed for values closer to 0, (with 0 being straight). This scale can be negative, so for example, -1 will be inverted circular. See the image above.
End Caps Group
When enabled, a primitive group with this name will be created, containing any primitives created by the **End Cap Type** options.
## Surface
Surface Type
The surface topology to create for the output grid. See the descriptions and image below.
Points
Don’t create any primitives, only points.
Rows
Create a curve for each cross section in the grid.
Columns
Create a curve for each vertex around the grid, spanning between all cross sections.
Rows and Columns
Create curves corresponding with both the **Rows** option and the **Columns** option.
Triangles
Create triangles splitting the grid quads in a single direction.
Quadrilaterals
Create the grid quads as is.
Alternating Triangles
Create triangles splitting the grid quads in alternating directions.
Reverse Triangles
Create triangles splitting the grid quads in a single direction opposite that of the **Triangles** option.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/sweep2/surface_type.jpg)
Primitive Type
The type of primitive to output if **Surface Type** is not **Points**. When this is **Automatic**, polygons, NURBS surfaces, or Bezier surfaces are output, depending on whether the cross sections are polygons, NURBS curves, or Bezier curves.
Ensure Unique Seam Vertices
If **Surface Type** is **Rows**, **Columns**, or **Rows and Columns**, and **Close Implicit Backbone Curve** is enabled or cross sections are all closed, this option will add an extra vertex as needed to each curve to ensure that there are separate vertices for parametric curve u or v coordinate values 0 and 1. If any output primitives are polygon soups, NURBS surfaces, Bezier surfaces, or bilinear mesh primitives, this option similarly also adds any extra vertices that would be needed to ensure that all uv seams can be generated correctly. See the image below.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/sweep2/unique_seam_vertices.jpg)
Swap Rows and Columns
When enabled, the order of the points and primitives in the grids will be adjusted to be column-major, having all points/primitives of one column before those of the next column, instead of the default row-major, having all point/primitives of one row before those of the next row. Toggling this also reverses normals, so **Reverse Cross Sections** may be useful to separately reverse normals.
Close Implicit Backbone Curve
When this toggle is enabled, the implicit curve between the cross sections is considered to be closed, treating the cross sections as forming a loop, instead of a line. See the image below for an example.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/sweep2/close_implicit_curve.jpg)
## UV Coordinates
Compute UVs
When enabled, a vertex `uv` attribute will be generated for the output surface, based on the parameters below. U corresponds with the cross section parametric coordinate, and V corresponds with the parametric coordinate between the cross sections. When **Surface Type** is **Points**, this will be a point `uv` attribute.
Override Any Existing UVs
When enabled, a vertex `uv` attribute will be generated from scratch for the output surface, based on the parameters below, even if one is already on the input, instead of copying U from the input.
Length-Weighted UVs
When enabled, the individual U and V coordinate distances will be scaled, relative to other edges, by the corresponding edge lengths. When **Normalize Computed Us** and **Normalize Computed Vs** are on, U and V coordinates will still be scaled to be within the 0 to 1 range, but the relative lengths in UV space will be proportional to their lengths in physical space. See the image below.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/sweep2/length_weighted_uvs.jpg)
Normalize Computed Us
When enabled, the U coordinate will be scaled to go from 0 to 1, (before **UV Scale** is applied). Otherwise, U will correspond with the average distance around the cross sections on the mesh, ignoring any stretch applied by **Stretch Around Turns**. Either way, U can be scaled by the first component of **UV Scale**. When this is enabled and **Normalize Computed Vs** is disabled, V will be scaled such that U and V appear scaled similarly in space, though depending on the **Use Max Cross Section Length for Proportional Scale** option. This is especially useful for things like applying repeating rope textures, where the texture should be applied isotropically. See the image below.
Normalize Computed Vs
When enabled, the V coordinate will be scaled to go from 0 to 1, (before **UV Scale** is applied). Otherwise, V will correspond with the average distance along the mesh in the V direction. When this is enabled and **Normalize Computed Us** is disabled, U will be scaled such that U and V appear scaled similarly in space. See the image below.
Make Computed Us Wrap Seamlessly
When **Normalize Computed Us** is disabled and this is enabled, the range of U is rounded to the nearest positive integer, in order for textures to wrap correctly in the U direction. This rounding is applied after the corresponding component of **UV Scale** is applied, so that **UV Scale** can still be approximately a scale per length unit for small geometry when both **Normalize Computed Us** and **Normalize Computed Vs** are both disabled. See the image below.
Make Computed Vs Wrap Seamlessly
When **Normalize Computed Vs** is disabled and this is enabled, the range of V is rounded to the nearest positive integer, in order for textures to wrap correctly in the V direction. This rounding is applied after the corresponding component of **UV Scale** is applied, so that **UV Scale** can still be approximately a scale per length unit for small geometry when both **Normalize Computed Us** and **Normalize Computed Vs** are both disabled. See the image below.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/sweep2/uv_normalization.jpg)
Use Max Cross Section Length for Proportional Scale
When **Normalize Computed Us** is enabled and **Normalize Computed Vs** is disabled, this controls whether the maximum cross section length will be used for computing the V scale, instead of the average of the previous and next cross section lengths for each V edge. If the cross section length varies significantly, this can result in the texture appearing stretched in some places, but can also avoid instability and inconsistency in the V scale. See the image below.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/sweep2/max_cross_section_uvs.jpg)
Flip Computed Us
When this is enabled, any computed U values will be replaced with `maxu-u`, (e.g. `1-u` if **Normalize U** is enabled and **UV Scale** has 1 for the first component), to avoid textures appearing backward. This should be on for textures to appear correct on surfaces viewed from the front, (i.e. normals pointing toward the camera), and should be off for textures to appear correct on surfaces viewed from the back, (i.e. normals pointing away from the camera). See the image below.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/sweep2/flip_u.jpg)
UV Scale
An additional scale on the generated UV coordinates. When **Normalize U** or **Normalize V** is on, the corresponding scale is applied after normalization. Otherwise, this scale is a scale per length unit, e.g. 0.5 would correspond with a period of 2 length units. If **Make Computed Us Wrap Seamlessly** or **Make Computed Vs Wrap Seamlessly** is enabled, the corresponding scale is applied before rounding to a positive integer number of repetitions of the U or V space, so that textures will still wrap correctly.
## Attributes
From Cross Sections
Attributes to copy from cross sections to the output grids. Any attributes that have an applicable transform type, (position, vector, normal, quaternion, or transform matrix), will be transformed appropriately by the transform of each vertex.
Point Row Attribute
When enabled, an integer point attribute with the specified name will be added to the output, containing the number of the point row within each grid.
Point Col Attribute
When enabled, an integer point attribute with the specified name will be added to the output, containing the number of the point column within each grid.
Prim Row Attribute
When enabled, an integer primitive attribute with the specified name will be added to the output, containing the number of the quad row within each grid.
Prim Col Attribute
When enabled, an integer primitive attribute with the specified name will be added to the output, containing the number of the quad column within each grid.
![](https://www.sidefx.com/docs/houdini/images/nodes/sop/sweep2/metadata.jpg)
Cross Section Num Attribute
When enabled, an integer point attribute with the specified name will be added to the output, containing the primitive number of the input cross section corresponding with each point.
See also
!Curvs Sweep#Sweep Geometry
!Skin#Skin Geometry
