---
type: concept
title: Guide Skin Attribute Lookup
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "55f0d9f4286d"
---
在引导曲线的根点下查找皮肤几何属性。
### Parameters
Uses existing primitive index and primitive UV attributes on curves to look up attribute values on the skin at the location closest to the curve’s root.

If the primitive index or primitive UV attribute doesn’t exist, they are computed based on the current curve and skin positions.

## PARAMETERS

Prim Num Attribute

Look up attributes for the primitive specified by this attribute.

Prim UVW Attribute

Look up attribute values at the UVW location within the primitive specified by this attribute.

Point Attributes

Point attribute to interpolate.

Vertex Attributes

Vertex attributes to interpolate.

Primitive Attributes

Primitive attributes to interpolate.

Detail Attributes

Detail attributes to interpolate.