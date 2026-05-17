---
type: concept
title: Bone Link
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "c0bdc4d8c431"
---
为Bone对象创建默认的几何图形。
### Parameters
This SOP is automatically created along with [Bone Objects](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html "The Bone Object is used to create hierarchies of limb-like objects
that form part of a hierarchy …")to create the bone geometry that appears in the viewer.
Show Link Geometry
If set to 1, link geometry is generated using the Link Geometry input. Default geometry is created if the input is not supplied.
Show Link as IK
When using default link geometry (ie. the Link Geometry input is not connected), then the this parameter dictates the style of the generated link geometry. If set as 1, then the IK style is created.
Link Scale
This parameter uniformly scales the link geometry.
Use Link Color
If set to 1, then the **Link Color** parameter is used to color the link geometry. Otherwise, the Cd primitive attribute in the Capture Regions input geometry is used when shown.
Link Color
The color to use if the **Use Link Color** parameter is used.
Pack Bone
Use a packed disk primitive for the bone link. This enables instanced drawing of bones which can greatly improve animation performance.
Name
When the **custom link geometry** input is connected, and **Pack Bone** is enabled, this gives the geometry a unique name so it can be globally instanced. Different link geometry should have different names, and link geometry that is the same should share names (like `customspinegeo1` or `cheekbone`).
Show Link Fin
If set to 1, then fin geometry is generated as a hint to determine orientation of the link geometry.
Link Fin Size
This determines the size of the fin geometry when shown.
Show Proxy Geometry
If set to 1, proxy geometry is created using the Proxy Geometry input.
Proxy Scale
This scales the proxy geometry when shown.
Show Capture Region
If set to 1, capture region geometry is created using the **Capture Regions** input.
Extra Snap Points
Allows extra points to be added for snapping, which is especially useful when the bone is packed (see **Pack Bone**, above). A packed bone will already have a point at its root, but the points in the packed geometry itself cannot be used as snap targets.
## INPUTS
Custom Link Geometry
If supplied, this input’s geometry will be used instead of the default generated geometry when the **Show Link Geometry** parameter is set to 1. In that case, the **Show Link as IK** parameter will not be used.
Proxy Geometry
This input’s geometry will be used if the **Show Proxy Geometry** parameter is set to 1.
Capture Regions
This input’s geometry will be used if the **Show Capture Region** parameter is set to 1. This input is typically connected by a [Capture Region SOP](https://www.sidefx.com/docs/houdini/nodes/sop/cregion.html "Supports Capture and Deform operation by creating a volume within which
points are captured to a bone.").
See also
!Capture Region#Capture Region Geometry
 [![](https://www.sidefx.com/docs/houdini/icons/OBJ/bone.svg) Bone](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html)