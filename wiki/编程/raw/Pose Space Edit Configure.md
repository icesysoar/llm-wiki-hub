---
type: concept
title: Pose Space Edit Configure
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "f439b25c2fcc"
---
创建姿势-空间编辑SOP所使用的共同属性。
### Parameters
This SOP adds the required attributes to the Rest Geometry input for the [Pose-Space Edit SOP](https://www.sidefx.com/docs/houdini/nodes/sop/posespaceedit.html "Packs geometry edits for pose-space deformation."). It should only be done once.

## PARAMETERS

Shape Diff Method

Pre-Deform

Transforms the example geometry into the rest-pose by applying inverse skinning method to the example geometry before computing the difference.

Post-Deform

Computes the difference of specified attribute on the two geometries.

Post-Deform Orient

Produces a similar result as the **Pre-Deform** method however instead of transforming the example geometry with inverse skinning this method transforms each point by the inverse of the orientation indicated by a quaternion point attribute.

Orient Attribute

The name of the quaternion point attribute to use with the **Post-Deform Orient** difference method.

Use Bone Deform

This is implied when the `Shape Diff Method` is set to `Pre-Deform`. Otherwise, it specifies whether the [Pose-Space Edit](https://www.sidefx.com/docs/houdini/nodes/sop/posespaceedit.html "Packs geometry edits for pose-space deformation.") should use [Bone Deform](https://www.sidefx.com/docs/houdini/nodes/sop/bonedeform.html "Uses capture attributes created from bones to deform geometry according to their movement.") when computing the shape diff.

Skeleton Root Path

Specifies the parent OBJ for the bones attached to the input geometry. The `pCaptSkelRoot` detail attribute is used by default when this parameter is empty. If this parameter is non-empty, it overrides the `pCaptSkelRoot` detail attribute in the input geometry. Relative path values here will be with respect to this node.

Bone Deform Method

The skinning method used to inverse transform the deformed geometry when using **Pre-Deform** differencing or **Use_Bone_Deform** is enabled. The skinning method should match that used by the upstream [Bone Deform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/bonedeform.html "Uses capture attributes created from bones to deform geometry according to their movement.") that deforms the geometry.

Blend Attribute

The name of the point attribute to use with the **Blend Dual Quaternion and Linear** skinning method.

See also

-   [Pose-Space Edit](https://www.sidefx.com/docs/houdini/nodes/sop/posespaceedit.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/shapediff.svg) Shape Diff](https://www.sidefx.com/docs/houdini/nodes/sop/shapediff.html)