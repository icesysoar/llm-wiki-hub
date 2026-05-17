---
type: concept
title: Vortex Force  Attributes
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:12:00
content_hash: "2b325edb6bfe"
---
创建创建Vortex Force DOP所需的点属性。
### Parameters
Vortex Force Attributes creates point attributes on a curve that are required by the Vortex Force DOP. These attributes are used by the Vortex Force DOP to define the precise behavior of the force. This SOP should be appended to a SOP that generates a single open curve. For each point in the input geometry, the various vortex attributes are calculated based on the value of this node’s parameters as they vary over time. Using keyframes, it is possible to draw contours that vary the vortex attributes along the length of the curve.

## PARAMETERS

Radius

The radius at which objects should be made to orbit around the vortex curve.

Velocity

The velocity at which objects should be made to orbit around the vortex curve. This value specifies the tangential velocity, rather than an angular velocity. To achieve a particular angular velocity, scale this value by the two time Pi times the radius value.

Direction

The normal to the plane across which objects should orbit the vortex curve. If this parameter is toggled off, the tangent of the curve is used as the normal for the plane of revolution.

Maximum Distance

The maximum radius of influence for the vortex force. Any object further than this distance from the curve will not be affected by the force.

Lift

The amount of lift exerted by the vortex force. The lift force is in the direction specified by the Direction parameter.

Countour Range

The end of the frame range across which the above parameters are evaluated. The points on the curve are sampled evenly along this frame range, and get their attribute values by evaluating the above parameters at those different times. Thus all of these parameters can be animated in time to generate a contour in space for the vortex force.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/vortexforce.svg) Vortex Force](https://www.sidefx.com/docs/houdini/nodes/dop/vortexforce.html)