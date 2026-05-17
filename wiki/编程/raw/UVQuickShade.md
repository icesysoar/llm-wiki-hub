---
type: concept
title: UVQuickShade
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "268acdb72edc"
---
将一个图像文件作为纹理着色器应用于表面。
### Parameters
UV Quick Shade is a convenience operator that lets you very quickly put an image file on a surface without worrying about creating a shader or adding UVs. If the input surface(s) do not have UVs, this node adds them using an orthographic projection.

You can append other nodes that replace or modify the UVs created by this node.

## Using UV Quick Shade

1.  Select the primitives to apply [material](https://www.sidefx.com/docs/houdini/shade/index.html "How to assign materials and create custom materials for shading.") to.
    
2.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/uvquickshade.svg)[UV Quick Shade](https://www.sidefx.com/docs/houdini/nodes/sop/uvquickshade.html "Applies an image file as a textured shader to a surface.") tool on the **Texture** tab.
    

## PARAMETERS

Group

Which primitives in the input geometry to apply the texture map to.

Texture Map

The image file to use as a texture map.

Projection Axis

The axis to project UV coordinates along. The node uses this axis to do an orthographic projection if the input surfaces do not already have UVs.

Texture Scale

The scale to apply to the texture coordinates. This is not used if the surfaces already have UV coordinates.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvproject.svg) UV Project](https://www.sidefx.com/docs/houdini/nodes/sop/uvproject.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvunwrap.svg) UV Unwrap](https://www.sidefx.com/docs/houdini/nodes/sop/uvunwrap.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/texture.svg) UV Texture](https://www.sidefx.com/docs/houdini/nodes/sop/texture.html)