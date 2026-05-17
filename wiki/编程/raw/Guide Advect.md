---
type: concept
title: Guide Advect
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "dd8ddc8e1082"
---
通过一个速度体积对导向点进行移动。
### Parameters
## General
Group Type
The type of input group.
Group
A group to use for masking. Any operations will only be applied to the primitives or points within this group.
Blend
Blends the overall effect of the operation.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Operation
Constrained Advection
Advect input curves through the velocity field, keeping the points and length of the original curve.
Fill Collision Field
Regrow guide from their roots, constraining motion to collision field. Guides with roots outside of the collision volume are not affected. Advection is stopped when the magnitude of the velocity field is zero.
Fill Velocity Field
Advect guides through the velocity field. Advection is stopped when the magnitude of the velocity field is zero.
Output Group of Affected Primitives
Create a group of guides affects by advection. This includes guides within the input group with blend values above zero and non-zero velocity at the root point.
Output Group
The name of the group of affected guides.
Follow Skin
Makes the velocity field values tangential to the skin VDB in the 3rd input.
Sampling Quality
Controls the advection step size. At `1` the step size equals the voxel diameter of the velocity field.
Segment Mode
Keep Input Segment Count
Output curves with the same point count as the input curves.
Adaptive
Resample curves to a given segment length.
Segment Length
The segment length to use when **Segment Mode** is set to **Adaptive**.
## Collisions
Stop on Collision
Stop advection when the collision field’s isosurface is hit.
## Length
Limit Length
Stop advection when a certain curve length is reached.
Length
The length to stop at.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
See also
!Volume Velocity from Curves#Volume Velocity from Curves Geometry
!Volume Velocity from Surface#Volume Velocity from Surface Geometry
!Guide Collide With VDB#Guide Collide With VDB Geometry
