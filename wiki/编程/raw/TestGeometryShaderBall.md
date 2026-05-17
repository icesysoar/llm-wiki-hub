---
type: concept
title: TestGeometryShaderBall
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "4685cf75a4c0"
---
创建一个着色器球，可用于测试着色器。
### Parameters
Test geometry provides some built in geometry to prototype and experiment with.

The shader ball provides a standardized method to test shaders.

## PARAMETERS

Split by Seam

Splits the shader ball into two separate pieces with a seam running between them. This is useful if you have edge-aware shaders and want to ensure they handle boundaries properly.

Add Screws

Add screws to the shader ball; allowing testing of how your shader interacts with reflective surfaces.

Note

The screws are purely ornamental and are not required for the structural integrity of the shader ball.

Shell Material

The material to apply to the shell of the shader ball. If not set, the material assigned to the object as a whole is used.

Use Material On Pedestal

The base of the shader ball can use a different material than the shell. This is useful for investigating the interaction of two shaders.

Pedestal Material

The specific material to use for the pedestal. By default this uses an internal brushed metal material.

Translate

Position of the center.

Rotate

Rotation of the geometry about its center.

Uniform Scale

Uniform scaling.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/testgeometry_crag.svg) Test Geometry: Crag](https://www.sidefx.com/docs/houdini/nodes/sop/testgeometry_crag.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/testgeometry_pighead.svg) Test Geometry: Pig Head](https://www.sidefx.com/docs/houdini/nodes/sop/testgeometry_pighead.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/testgeometry_rubbertoy.svg) Test Geometry: Rubber Toy](https://www.sidefx.com/docs/houdini/nodes/sop/testgeometry_rubbertoy.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/testgeometry_squab.svg) Test Geometry: Squab](https://www.sidefx.com/docs/houdini/nodes/sop/testgeometry_squab.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/testgeometry_tommy.svg) Test Geometry: Tommy](https://www.sidefx.com/docs/houdini/nodes/sop/testgeometry_tommy.html)