---
type: concept
title: Pyro Source
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "bdbd66c5d916"
---
为采购烟火和烟雾模拟创造积分。
### Parameters
The Pyro Source SOP converts its input geometry into points suitable for sourcing pyro and smoke simulations. This SOP adds specified attributes to the generated points, which can be rasterized and imported into desired DOP fields by the [Volume Source](https://www.sidefx.com/docs/houdini/nodes/dop/volumesource.html "Imports SOP source geometry into smoke, pyro, and FLIP simulations. ") node. Pyro Source also contains a handful of initialization presets for driving common simulation scenarios.

## INPUTS

Geometry to Source From

Input geometry. When **Mode** is set to **Surface Scatter** or **Volume Scatter**, the geometry must correspond to a surface; in the latter case, the surface must also have a resolvable interior.

Rest Geometry

If provided, this geometry will be used to generate points. These points are then moved to conform with the current configuration of the deforming geometry.

## OUTPUTS

Particles

Generated points, with the assigned attributes.

## PARAMETERS

Group

When specified, only the subset of the input geometry corresponding to this group is used.

Group Type

What the **Group** is made of.

Initialize

Configures the node according to the selected preset. **Source Burn** and **Source Fuel** can be used to drive legacy and sparse pyro simulations, respectively, whereas **Source Smoke** is meant for smoke simulations. **Source Color** creates color (`Cd`) and color density (`Alpha`) attributes that can be imported by the [Volume Source](https://www.sidefx.com/docs/houdini/nodes/dop/volumesource.html "Imports SOP source geometry into smoke, pyro, and FLIP simulations. ") node using the **Blend** operation.

Mode

Controls which points are exported by the node.

Surface Scatter

Points are scattered on the surface of the input geometry.

Keep Input

Points of the incoming geometry are used unchanged.

Volume Scatter

Points are scattered in the interior of the input geometry.

Particle Separation

When **Mode** is set to **Surface Scatter** or **Volume Scatter**, this parameter controls the density of seeded points; in **Keep Input** mode, value of **Particle Separation** is only used to calculate the `pscale` point attribute.

Particle Scale

Controls the scale of exported points. The `pscale` attribute is set to the product of **Particle Separation** and **Particle Scale**.

Note

If the input already contains a `pscale` attribute, the values will not be changed by this node.

Deform Radius

Physical size of the neighborhood used for deforming the scattered points. Only available when a rest geometry is provided and **Mode** is set to `Volume Scatter`.

Minimum Points

If fewer than this number of points are found in the neighborhood for the purpose of deforming points, the search radius is increased. Only available when a rest geometry is provided and **Mode** is set to `Volume Scatter`.

Maximum Points

An upper bound on the neighborhood size used for deforming points. Only available when a rest geometry is provided and **Mode** is set to `Volume Scatter`.

Attributes

Count of numerical attributes to create for the exported points.

Attribute

The attribute to add to source points. The attribute can be selected from the list of commonly-used options or a custom one can be created.

Vector Attribute

This option can be turned on in **Custom** **Attribute** mode to create a vector-valued attribute; if disabled, a scalar attribute is added.

Name

Name of the created attribute.

Default Value

This value is used to initialize newly-created attributes. This parameter is not used for already-present point attributes.

Scale

The final exported value of the attribute is scaled by this value.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/volumesource.svg) Volume Source](https://www.sidefx.com/docs/houdini/nodes/dop/volumesource.html)