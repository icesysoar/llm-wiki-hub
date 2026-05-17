---
type: concept
title: Bake ODE
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "5393c19d4f33"
---
为ODE和Bullet求解器转换原语。
### Parameters
Note

This node is now deprecated. For setting up compound shapes, the **Create Convex Hull Per Set Of Connected Primitives** option on the [Bullet Data DOP](https://www.sidefx.com/docs/houdini/nodes/dop/bulletdata.html "Attaches the appropriate data for Bullet Objects to an object.") should be used instead.

Primitives are converted to the format required by the composite mode of the ODE object and compound mode of the Bullet Data DOP. For each primitive or group of primitives that can be converted to an ODE primitive, a point with attributes is created and added to an ODE point group.

This surface operator can give output directly to a [DOP Import SOP](https://www.sidefx.com/docs/houdini/nodes/sop/dopimport.html "Imports and transforms geometry based on information extracted from a
DOP simulation.") and take geometry input.

ODE primitives do not support all available transformations, so primitives may be simplified in shape by this operator. The output geometry shows what the ODE solver assumes for its calculations.

Shape

primType Value

Description

Box

0

Reconstructed from polygon primitives.

Sphere

1

Constructed from sphere primitives.

Cylinder

2

Constructed from tube primitives.

Capsule

3

Constructed from tube primitives (use CaptureRegion).

## PARAMETERS

Group

The group to bake.

Keep Original Geometry

When enabled, keeps a copy of the original geometry.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/bulletdata.svg) Bullet Data](https://www.sidefx.com/docs/houdini/nodes/dop/bulletdata.html)