---
type: concept
title: Groom Blend
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "94081674a89c"
---
混合了两个毛发的引导组。
### Parameters
## General
Group Type
The type of input group.
Group
A group to use for masking. Any operations will only be applied to the primitives or points within this group.
Blend
Blends the overall effect of the operation.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
## Guides
Match Primitives by Attribute
Blends A’s guides with guides in B that have the same id, rather than simply using the guide with the same primitive number. This only has an effect when the **Match Attribute** specified below is found on both guide geometries.
With this enabled, guide blending works even when the two guide inputs don’t have matching primitive order.
This also works when guides are missing from either input. If guide are missing in B, the corresponding guides in A remain unchanged. Guides that don’t exist in A are ignored and don’t appear in the output.
Match Attribute
The primitive attribute to match guides with. Defaults to the standard `id` attribute, which grooming tools create for both guides and generated hair.
Interpolate Point Values (Differing Segment Counts)
Interpolates point attributes by looking up the value at parametric curve locations. This makes the blending independent of segment count.
Points
The guide point attributes to blend.
Primitives
The guide primitive attributes to blend.
## Skin
Points
The skin point attributes to blend.
See also
!Guide Mask#Guide Mask Geometry
!GroomSwitch#GroomSwitch Geometry
