---
type: concept
title: Copy and Transform
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "d003adbc9503"
---
复制几何图形，并将变换应用到副本中。
### Parameters
![](https://www.sidefx.com/docs/houdini/icons/SOP/copyxform.svg)
Creates copies of geometry and applies successive transformations to them. The transformations are cumulative and the original selection isn’t transformed.
The original copy is included in the copy number. This makes it easier when making more than one copy as you can specify the final number of objects rather than the number of copies.
The original geometry isn’t deleted even if a source group is selected. Use a blast sop to extract a subset if the rest of the geometry isn’t desired.

Source Group
A subset of input primitives to copy from.
Total Number
The total number of objects to end up with. This includes the original geometry.
Pack and Instance
Pack the input geometry into an Embedded Packed primitive before copying. This results in the input geometry being shared (instanced) by each copy rather than being duplicated for each copy.
This only works if no source group is specified.
Transform Order
Order transformations occur.
Rotate Order
Order rotations occur.
Translate
Translation along xyz axes.
Rotate
Rotation about xyz axes.
Scale
Non-uniform scaling along xyz axes.
Shear
Amount of shearing. The three values represent X on XY plane, X on XZ plane, and Y on YZ plane respectively.
Pivot
The local pivot point of the copy.
Uniform Scale
Uniform scaling.
Output Group Prefix
The prefix of the group to create for each copy. This will be suffixed by the copy number, starting with copy 0.
Copy Number Attribute
The primitive attribute to put the copy number into, starting with copy 0. Uncopied primitives will get a copy number of -1.
See also
!Copy with Stamp#Copy with Stamp Geometry
!Copy to Points#Copy to Points Geometry
