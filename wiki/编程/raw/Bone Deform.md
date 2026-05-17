---
type: concept
title: Bone Deform
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "8e1bdceff18a"
---
使用capture属性根据骨骼的运动创建几何体变形
### Parameters
Tip
This node supports the character muscle/joint/etc. deformation workflow. To do a cage deformation of geometry, use the [Lattice node](https://www.sidefx.com/docs/houdini/nodes/sop/lattice.html "Deforms geometry based on how you reshape control geometry.").
Bone Deform works in conjunction with a Bone Capture nodes ([Bone Capture](https://www.sidefx.com/docs/houdini/nodes/sop/capture.html "Supports Bone Deform by assigning capture weights to bones."), [Bone Capture Proximity](https://www.sidefx.com/docs/houdini/nodes/sop/captureproximity.html "Supports Bone Deform by assigning capture weights to points based on distance to bones."), [Bone Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturebiharmonic.html "Supports Bone Deform by assigning capture weights to points based on biharmonic functions on tetrahedral meshes.")) to deform geometry. As the bones move, this node displaces the points on the geometry according to the point weights.
Typically one or more Capture Regions are placed in an object (usually a bone) and named “capture_region”. The object is then read into a Capture operation through the object’s hierarchy. The object is moved to deform the Capture operation’s geometry with a Deform operation.
Bone Deform can use Linear, Dual Quaternion or mix both solutions linearly to compute the deformation.
Since Houdini 18.0, Bone Deform can also be used with point attributes in its second and third inputs. The capture paths in the boneCapture attribute in its first input are matched with the point `name` attribute in the second and third inputs. Instead of using the rest transform within boneCapture, it is taken from the second input’s `P` and `transform` (matrix3) point attribute values. Instead of using the transforms from bone objects, they are instead taken from the third input’s `P` and `transform` (matrix3) point attribute values.
## ATTRIBUTES
boneCapture
This required attribute defines the rest transforms and skinning weights for the deformation. It can be created by various SOPs such as: [Bone Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturebiharmonic.html "Supports Bone Deform by assigning capture weights to points based on biharmonic functions on tetrahedral meshes."), [Bone Capture Proximity](https://www.sidefx.com/docs/houdini/nodes/sop/captureproximity.html "Supports Bone Deform by assigning capture weights to points based on distance to bones."), or [Bone Capture](https://www.sidefx.com/docs/houdini/nodes/sop/capture.html "Supports Bone Deform by assigning capture weights to bones.").
## PARAMETERS
Group
Optional point and/or primitive groups to limit the points which are deformed.
Skeleton Root Path
Specifies the parent OBJ for the bones attached to the input geometry. The `pCaptSkelRoot` detail attribute is used by default when this parameter is empty. If this parameter is non-empty, it overrides the `pCaptSkelRoot` detail attribute in the input geometry.
Skinning Method
Choose the bone deform method.
Linear Skinning
The standard, fastest method. However, artifacts can occur for twisting geometry between two bones, producing volume loss. To fix these artifacts, introduce additional bones to even out the deformation.
Dual Quaternion Skinning
Dual quaternion skinning is an alternate way of computing the deformation from bones. This method is better for deforming twisting geometry and preventing volume loss than the traditional Linear Skinning method. This is often used for body parts, such as the shoulders of characters.
Blend Dual Quaternion and Linear Skinning
Blends the deformation computed using both methods together based on a point attribute. For this method, a float point attribute must be supplied in the `Blend Attribute` parameter. A blend attribute value of 0.0, will use the Linear Skinning solution. A blend attribute value of 1.0 will use the Dual Quaternion solution. A blend value of 0.5 will mix both solutions together evenly.
From Input Geometry
When selected the `deformSkinMethod` global attribute gives the method where the string value `linear` specifies **Linear Skinning** skinning, `dualquat` specifies **Dual Quaternion Skinning** skinning, and `blenddualquat` specifies **Blend Dual Quaternion and Linear Skinning** skinning. The `deformDualQuaternionBlendAttrib` global attribute also gives the **Blend Attribute** name.
Blend Attribute
The name of the point attribute to use when blending dual quaternion and linear solutions together.
Transforms Path
An optional path to a CHOP node that contains channels for the world bone transforms, overriding the current state of the bones. In CHOPs, the Extract Bone Transforms node can be used to capture the bone transforms.
The `deformTransformsPath` detail attribute is used by default when this parameter is empty. If this parameter is non-empty, it overrides the `deformTransformsPath` detail attribute in the input geometry.
Other Attributes
Name of other attributes (beyond positions and normals) to deform. This is typically a list of attribute names separated by spaces but pattern characters such as '*' can also be used match multiple attributes. The interpretation of the attribute data is taken by their type qualifier such as “Position”, “Vector”, “Normal”. or “Quaternion”. Attributes which don’t have these type qualifiers will be ignored.
Deform Normals
Deforms the normals to match the deformation of the points.
Delete Capture Attributes
Delete capture attributes lighten the geometry data such as `boneCapture`, `pCaptAlpha`, `pCaptSkelRoot`, `pCaptFrame`.
Delete Point Colors
Delete point color attribute to lighten the geometry data.
## INPUTS
Geometry to Deform
The skin geometry to deform. It’s required to have a `boneCapture` attribute (eg. created by [Bone Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturebiharmonic.html "Supports Bone Deform by assigning capture weights to points based on biharmonic functions on tetrahedral meshes.")).
Rest Point Transforms
The capture paths from the first input’s `boneCapture` attribute are matched with the `name` point attribute in this input to provide rest transforms that override the values found in `boneCapture`. These transforms are provided from the input’s `P` and `transform` (matrix3) point attribute values.
Deform Point Transforms
The capture paths from the first input’s `boneCapture` attribute are matched with the `name` point attribute in this input to provide deformation transforms instead of obtaining them from [Bone](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html "The Bone Object is used to create hierarchies of limb-like objects
that form part of a hierarchy …") nodes in the scene. These transforms are provided from the input’s `P` and `transform` (matrix3) point attribute values.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/bonecapturebiharmonic.svg) Bone Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturebiharmonic.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/cregion.svg) Capture Region](https://www.sidefx.com/docs/houdini/nodes/sop/cregion.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/capture.svg) Bone Capture](https://www.sidefx.com/docs/houdini/nodes/sop/capture.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/captureproximity.svg) Bone Capture Proximity](https://www.sidefx.com/docs/houdini/nodes/sop/captureproximity.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/shapediff.svg) Shape Diff](https://www.sidefx.com/docs/houdini/nodes/sop/shapediff.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-jointdeform.svg) Joint Deform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html)