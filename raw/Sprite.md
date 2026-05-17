---
type: concept
title: Sprite
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "0ff605744e91"
---
一个SOP节点，为点设置精灵显示。
### Parameters
The Sprite node adds attributes to specify the sprite display of points.

This operator modifies the `spritepath`, `spriteuv`, `spriterot`, and `spritescale` attributes.

Note

For the sprites to show up in Mantra you should set your object’s material to the contained Sprite SHOP.

Note

If no `pscale` attribute is present, the viewport defaults to 1.0 while Mantra default to 0.1. Add a `pscale` attribute to make these systems equivalent.


Group

A subset of points in the input geometry to add sprite attributes to. Leave this blank to affect all points in the input.

Sprite Material

Controls how the sprites are displayed. This can be done by assigning a SHOP, or by directly specifying a sprite texture (avoiding the requirement of creating a material node).

Sprite SHOP

The sprite SHOP to display the sprites with. This needs to have the proper procedural shader attached. For convenience, this POP contains a SHOP that can be used.

Sprite Map

The texture map to use. If **Sprite Material** is **Texture File**, this is recorded using the `gl_spritetex` point attribute. If **Sprite Material** is **SHOP** this is linked to the internal SHOP, so it only has effect when the internal SHOP is used. It also cannot be animated per particle. To do so you must either assign a separate Sprite SHOP per particle or use the texture crop on a sprite sheet.

Draw Sprites for

By default sprites are only drawn on unconnected points. This allows them to be mixed with traditional geometry and get the expected behavior. However, you can override this to display sprites on all points, even if they are connected to a primitive.

Note

This is global to the geometry and does not just affect the points in the group!

Sprite Blending

Controls whether blending is performed when drawing sprites, using the `gl_spriteblend` detail attribute. When disabled, no depth sorting or blending occurs, greatly increasing draw performance of sprites. Disabling blending is good for opaque sprites, like vellum grains.

Note

This is global to the geometry and does not just affect the points in the group!

Sprite Cutoff

Controls the alpha cutoff when **Sprite Blending** is disabled, using the `gl_spritecutoff` detail attribute. Pixels with an alpha value less than this cutoff value are discarded. 0 discards no pixels, while 1 only keeps fully opaque pixels. Values between 0.5-0.75 are generally good for opaque sprites with antialiased edges.

Note

This is global to the geometry and does not just affect the points in the group!

Texture Crop

Controls if the `spriteuv` attribute will be edited. This attribute handles the cropping of the displayed sprite, allowing you to select different sprites on a sheet.

Mode

You can specify the crop region by an offset/size in 0..1 UV space, or by treating it as a tiled array, which you can create using the [Mosaic COP](https://www.sidefx.com/docs/houdini/nodes/cop2/mosaic.html "Takes a sequence of images and combines them into 1 image by tiling them.").

Texture Offset

Where, in 0..1 coordinates, to start the sprite.

Texture Size

How big, in 0..1 coordinates, that the sprite should take up in the texture file.

Sprite Index

Which sprite in the sprite sheet to use. This is a linear index that goes over all the sprites in row/column order.

Rows and Columns

How many sprites are in the sheet.

Rotate

Rotates the displayed sprite around the view axis. Measured in degrees.

Sprite Scale

Scales the sprite. Note `pscale` is also used, this is multiplied by the `pscale` and allows anisotropic shapes.

## INPUTS

Points to Add Sprites to

The geometry to add sprite display attributes to.