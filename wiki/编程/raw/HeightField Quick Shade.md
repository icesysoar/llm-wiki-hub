---
type: concept
title: HeightField Quick Shade
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "b8a4e2f9ef9b"
---
应用一个材料，让你为不同层插入纹理。
### Parameters
This node applies a pre-made material to the input height field. The material lets you set base colors, and then associate textures with different layers. For example, with mountainous terrain you could use height field nodes to generate “snow”, “treeline”, and “valley” layers, and assign them different texture maps in the material.

This node has the material’s controls in its parameter interface, so you can edit the material in SOPs.

The material has the basic controls usually found in terrain shaders for game engines.

## Tips

-   The **Ambient**, **Diffuse**, and **Specular** colors at the top of the interface are _tints_ multiplied by _all_ textures. You will usually want to leave them as white or grey. To control the base color of the height field, specify a texture on the **Base texture** tab.
    
-   The textures will tile if they don’t fully cover the surface area.
    
-   Instead of applying textures to different layers, you can leave the **Terrain mask** field blank and simply layer the texture over the base texture everywhere.
    

## PARAMETERS

Ambient

Ambient response color.

Diffuse

Diffuse tint color.

Specular

Specular reflection tint color. You can specify a specular map on the **Light textures** tab.

Specular Model

Specular model used for specular reflections, Phong, Blinn, or GGX.

Roughness

Global specular roughness, used to adjust the roughness of all layers. This is multiplied by the roughness found in each layer. Higher roughness diffuses highlights, lower roughness sharpens highlights. Terrain usually has a very high roughness (close to 1). Low roughness will tend to look like plastic. You can specify a roughness map on the **Light textures** tab.

Visualization tinting

Performs different tinting operations depending on the menu choice.

Unchanged

Do not add or remove any tinting.

Mask

Tint the areas covered by the mask layer red.

Color

Look for three layers named `C.r`, `C.g`, and `C.b` and use them to tint the output.

None

Removing any existing tints.

## Base

Map Name

Turn on the checkbox to use this texture image file.

Projection

How to project the texture onto the height field geometry.

Terrain UV Coords

Use the terrain grid is implicit UVs (the default). You can use the texture translation controls below to position, scale, and rotate the texture onto the terrain.

Triplanar

Use the surface geometry and normals to generate texture coordinates. This is good for steep terrain. You should use square textures with this option.

Ortho X

Project the texture along the X axis.

Ortho Y

Project the texture along the Y axis.

Ortho Z

Project the texture along the Z axis.

UV Scale

Scales the implicit UVs to make the texture bigger or smaller.

UV Translate

Offsets the implicit UVs to make the texture move across the surface.

UV Rotate

Rotates the implicit UVs to make the texture rotate across the surface.

Triplanar Texture Size

When **Projection** is “triplanar”, the size of the texture in world space (in meters).

Triplanar Sharpness

Controls how textures blend at the corners of the projected cube. Higher values give a smaller blending region, lower values produce a more gradual blend.

Triplanar Offset

Offsets the projected cube to move the texture across the surface.

Triplanar Axis Blend

Scaling factors for each axis. Setting them all to 1 does a true triplanar projection. Setting an axis to 0 will result in no texture projection in that direction.

Clamp Texture UVs

When enabled, clamp the UV values for this texture layer to the 0-1 range, holding the edge valus of the texture. When disabled, the UV values are unclamped and cause the texture to repeat.

Use Tint

Enables color tinting of this the layer.

Tint

Tints the layer, by multiplying this color by the **Diffuse** color and the **Base Texture** (if used).

Roughness

Scales the global **Roughness** only for this layer. This can be used to reduce the roughness for shinier terrain surfaces, like ice and water.

## 1-9

Terrain Mask

The name of the layer to fill with this texture. If you leave this field blank, the texture will layer over the base texture across the entire surface. The material multiplies the layer values by the texture, so layer opacity controls texture opacity.

Texture 1-9

Turn on the checkbox to use this texture image file.

Use Triplanar Projection

How to project the texture onto the height field geometry.

Terrain UV Coords

Use the terrain grid is implicit UVs (the default). You can use the texture translation controls below to position, scale, and rotate the texture onto the terrain.

Triplanar

Use the surface geometry and normals to generate texture coordinates. This is good for steep terrain. You should use square textures with this option.

Ortho X

Project the texture along the X axis.

Ortho Y

Project the texture along the Y axis.

Ortho Z

Project the texture along the Z axis.

UV Scale

Scales the implicit UVs to make the texture bigger or smaller.

UV Translate

Offsets the implicit UVs to make the texture move across the surface.

UV Rotate

Rotates the implicit UVs to make the texture rotate across the surface.

Triplanar Texture Size

When **Projection** is “triplanar”, the size of the texture in world space (in meters).

Triplanar Sharpness

Controls how textures blend at the corners of the projected cube. Higher values give a smaller blending region, lower values produce a more gradual blend.

Triplanar Offset

Offsets the projected cube to move the texture across the surface.

Triplanar Axis Blend

Scaling factors for each axis. Setting them all to 1 does a true triplanar projection. Setting an axis to 0 will result in no texture projection in that direction.

Clamp Texture UVs

Use Tint

Enables color tinting of this the layer.

Tint

Tints the layer, by multiplying this color by the **Diffuse** color and the **Base Texture** (if used).

## Light Textures

Roughness Map

Turn on the checkbox to use this texture image to control roughness.

Invert Roughness Map (Glossiness)

By default the material interprets roughness maps as 1 is rough, 0 is glossy. This inverts that so 1 is glossy and 0 is rough.

Roughness Channel

Which channel in the image to use as the roughness: Luminance, Red, Green, Blue or Alpha.

Specular Map

Turn on the checkbox to use this texture image to control specular.

Use Emission Map

Enable the emission map. When off, it has no effect.

Emission Map

Turn on the checkbox to use this texture image to control emission. This should be an RGB texture map. The material adds the texture to all diffuse and specular reflections after it computes lighting. It is not affected by lights. You can use this to add “glow”.