---
type: concept
title: Attribute From Map
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "91d372a1443c"
---
将纹理贴图信息采样到一个点属性。
### Parameters
The Attrib From Map operator creates a point attribute from the color information found in an image (sequence) or previously applied texture. This image can be loaded from disk or already be present as `Cd`.

You can use this node to create density, fuel, and temperature data to drive a fluid simulation. Using the [Fluid Source](https://www.sidefx.com/docs/houdini/nodes/sop/fluidsource.html) operator, this data can become a set of volumes to be used as a source for a fluid simulation.

Note

This operator uses point UV’s. If no UV’s are found (on either vertices or points), a default **Orthographic** mapping operation is applied.

## PARAMETERS

Point Group

Group of points to sample.

Texture Map

When enabled, specifies the image or image sequence to sample the color information from. If disabled, the default `Cd` (point color value) is used.

UDIM Filename Expansion

Expand UDIM texture names when evaluating.

Texture Channel

Which channel of deep images to read.

UV Attribute

The name of the texture coordinate attribute to use for looking up into the map, defaulting to `uv`.

Export Attribute

Name of attribute to create and store information on. A float attribute samples the image’s greyscale or specific color band (RGB). A vector attribute samples the full color representation (RGB).

## Color Settings

Color Channel

When sampling to a float, **Color Channel** selects what color (or combination of colors) to sample. Greyscale is the default and creates a grey scale representation of the image to store as an attribute.

Color Influence

Only available when **Color Channel** is set to **Greyscale**. This controls how much influence every band of color has on the greyscale representation of the image. It is based on Photoshop greyscale defaults.

Values run from 0 to 1.

Visualize

Overrides `Cd` with the sampled color information to visualize the output.

Do Remap

Controls if scaling, contrast, and remapping is done.

Note

If remapping is done, the input values may be clamped.

Scale

Scales the final outcome.

Contrast

Sharpens the image.

Contrast Rolloff

Specifies where **Contrast** is allowed to effect the image. A value of 1 is everywhere. The lower the value, the less influence **Contrast** has.

Remap Influence

This is only available when sampling to a float. Remaps the sampled range.

## Filter Settings

Type

Type of filter to use.

Filter Width

Filter amount in UV space.

Wrap

Sets the behavior of the filter when attempting to sample pixels outside of the image’s region.

Repeat

The image is sampled as if it were infinitely tiled.

Streak

The image is sampled as if the border extended to infinity.

Decal

The image is surrounded by a solid color. Use the **Border Color** parameter to set this color.

Border Color

The color to use if sampling outside the image in Decal mode.

Vertex UV Promotion

If the incoming uv attribute is a vertex attribute, each point must determine what its uv will be in case multiple vertices are shared and have different uvs. For a clean cut on seams it is usually best to use First Match.

## Image Settings

Set of basic UV operators. For more control, use the [UV Edit](https://www.sidefx.com/docs/houdini/nodes/sop/uvedit.html "Lets you interactively move UVs in the texture view.") operator.

Invert U

Inverts U texture coordinates.

Invert V

Inverts V texture coordinates.

Scale

Scales the UVs and the image.

Rotate

Rotates the UVs in degrees.

Translate

Translates UVs in UV space.

## INPUTS

Points or Primitives

Geometry to sample. If no UVs are found (on either vertices or points), a default **Orthographic** mapping operation is applied.