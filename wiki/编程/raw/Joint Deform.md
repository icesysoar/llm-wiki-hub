---
type: concept
title: Joint Deform
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "57056224868e"
---
从KineFX的骨架动画中进行皮肤变形。
### Parameters
Tip
This node supports the character joint deformation workflow. To do a cage deformation of geometry, use the [Lattice node](https://www.sidefx.com/docs/houdini/nodes/sop/lattice.html "Deforms geometry based on how you reshape control geometry.").
Joint Deform works in conjunction with Joint Capture nodes ([Joint Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointcapturebiharmonic.html "Capture skin geometry to a SOP skeleton for use with Joint Deform."), [Joint Capture Proximity](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointcaptureproximity.html "Supports Joint Deform by assigning capture weights to points based on distance to joints.")) to deform geometry. As the joints move (eg. created by [Skeleton](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--skeleton.html "Interactively create and edit geometry-based skeletons.") and animated with [Rig Pose](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--rigpose.html "Pose and animate a SOP rig or skeleton.")), this node displaces the points on the geometry according to the point capture weights.
This node requires three inputs: the skin geometry with capture weights as the `boneCapture` point attribute, the capture pose skeleton in its second input, and the animated skeleton in its third input. The capture paths in the `boneCapture` attribute in its first input are matched with the point `name` attribute in the second and third inputs. The “pose” of the skeletons are defined by their point `P` (vector3) and `transform` (matrix3) point attribute values.
## ATTRIBUTES
boneCapture
This required attribute defines the rest transforms and skinning weights for the deformation. It can be created by various SOPs such as [Joint Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointcapturebiharmonic.html "Capture skin geometry to a SOP skeleton for use with Joint Deform.") or [Joint Capture Proximity](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointcaptureproximity.html "Supports Joint Deform by assigning capture weights to points based on distance to joints.").
## PARAMETERS
Group
Optional point and/or primitive groups to limit the points which are deformed.
Skinning Method
Choose deformation method
Linear Skinning
The standard, fastest method. However, artifacts can occur for twisting geometry between two bones, producing volume loss. To fix these artifacts, introduce additional bones to even out the deformation.
Dual Quaternion Skinning
Dual quaternion skinning is an alternate way of computing the deformation from bones. This method is better for deforming twisting geometry and preventing volume loss than the traditional Linear Skinning method. This is often used for body parts, such as the shoulders of characters.
Blend Dual Quaternion and Linear Skinning
Blends the deformation computed using both methods together based on a point attribute. For this method, a float point attribute must be supplied in the `Blend Attribute` parameter. A blend attribute value of 0.0, will use the Linear Skinning solution. A blend attribute value of 1.0 will use the Dual Quaternion solution. A blend value of 0.5 will mix both solutions together evenly.
From Input Geometry
When selected, the `deformSkinMethod` global attribute gives the method where the string value `linear` specifies **Linear Skinning** skinning, `dualquat` specifies **Dual Quaternion Skinning** skinning, and `blenddualquat` specifies **Blend Dual Quaternion and Linear Skinning** skinning. The `deformDualQuaternionBlendAttrib` global attribute also gives the **Blend Attribute** name.
Blend Attribute
The name of the point attribute to use when blending dual quaternion and linear solutions together.
Other Attributes
Name of other attributes (beyond positions and normals) to deform. This is typically a list of attribute names separated by spaces but pattern characters such as '*' can also be used match multiple attributes. The interpretation of the attribute data is taken by their type qualifier such as “Position”, “Vector”, “Normal”. or “Quaternion”. Attributes which don’t have these type qualifiers will be ignored.
Deform Normals
Deforms the normals to match the deformation of the points.
Delete Capture Attributes
Delete capture attributes lighten the geometry data such as `boneCapture`, `pCaptAlpha`, `pCaptSkelRoot`, `pCaptFrame`.
Delete Point Colors
Delete point color attribute to lighten the geometry data.
## INPUTS
Rest Geometry
The skin geometry to deform. It’s required to have a `boneCapture` attribute (eg. created by [Joint Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointcapturebiharmonic.html "Capture skin geometry to a SOP skeleton for use with Joint Deform.")).
Capture Pose
The capture paths from the first input’s `boneCapture` attribute are matched with the `name` point attribute in this input to provide rest transforms that override the values found in `boneCapture`. These transforms are provided from the input’s `P` and `transform` (matrix3) point attribute values.
Animated Pose
The capture paths from the first input’s `boneCapture` attribute are matched with the `name` point attribute in this input to provide deformation transforms, provided as `P` and `transform` (matrix3) point attribute values.
See also
!Joint Capture Biharmonic#Joint Capture Biharmonic Geometry
!Joint Capture Proximity#Joint Capture Proximity Geometry
!Skeleton#Skeleton Geometry
