---
type: concept
title: Extrude Volume
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "e2f6ba3c96e7"
---
将曲面的几何形状挤压到一个体积中。
### Parameters
This operation is used to create a volume out of surface geometry. This can be useful for creating physical objects such as terrain features.
The second output provides the base of the extrusion. This can be feathered and lifted to form a collision object when this is used to be build a sand or liquid volume.
## PARAMETERS
Depth
The amount by which the geometry is extruded.
Positive values indicate an extrusion above the given surface, negative values an extrusion below it.
Base Normal
The direction in which the extrusion takes place.
Flatten Base
Whether or not the surface resulting from the extrusion is made into a flat plane.
Base Padding
Amount to grow the final ring of the base. Expressed as a fraction, so 0.1 means 10% bigger.
Base Lift
Amount in distance to lift up the final ring of the base.
Top Group
Primitive group for the polygons forming the top, original surface, of the extrusion.
Base Group
Primitive group for the polygons forming the base of the extrusion.
Side Group
Primitive group for the polygons forming the sides of the extrusion.
Top Boundary Group
Edge group for the edges bordering the top and side of the extrusion.
Base Boundary Group
Edge group for the edges bordering the base and side of the extrusion.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/extrude.svg) Extrude](https://www.sidefx.com/docs/houdini/nodes/sop/extrude.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/polyextrude.svg) Poly Extrude](https://www.sidefx.com/docs/houdini/nodes/sop/polyextrude.html)