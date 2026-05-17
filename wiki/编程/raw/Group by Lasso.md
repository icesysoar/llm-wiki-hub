---
type: concept
title: Group by Lasso
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "ba29983d0f70"
---
通过套索对点和基元进行分组。
### Parameters
Create groups of points and primitives by lassoing parts of your scene, from different angles. This is useful for quickly visually selecting regions of points or primitives for later steps.

## INPUTS

Points to Select From

The points or primitives from which to create the group.

## PARAMETERS

Group Name

Name of the group to create.

Group Type

The type of the output group.

Points

The output group will be a point group.

Primitives

The output group will be a primitive group.

Only Promote Full Primitives

The output primitive group will only contain primitives whose points are _all_ within the selection. If this is off, the output group will contain primitives for which _any_ point is within the selection.

Combine Operation

How the lasso selection will be combined with **Group Name**.

Replace

The lasso selection will replace **Group Name**. **Group Name** may be left blank here.

Union

The output group contains all points or primitives in _either_ the lasso selection or **Group Name**.

Intersect

The output group contains all points or primitives in _both_ the lasso selection or **Group Name**.

Exclusive Or

The output group contains all points or primitives in _exactly one_ of the lasso selection or **Group Name**.

Subtract

The output group contains all points or primitives in **Group Name**, but not the lasso selection.

Display Projected Regions as Guides

When enabled, display extruded guide geometry.

Select Only Visible

The lasso selection consists only of points or primitives which are visible from the camera at the time of the lasso.

Visibility Bias

The amount the positions of points should be biased towards the camera before sending self-intersection rays to determine visibility. If you find that Select Only Visible is selected, but the selection still contains points which are not visible, you may need to decrease this value.

## LOCALS

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/groupcreate.svg) Group](https://www.sidefx.com/docs/houdini/nodes/sop/groupcreate.html)