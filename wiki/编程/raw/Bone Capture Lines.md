---
type: concept
title: Bone Capture Lines
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "cd3cd6d60b5e"
---
通过创建具有适当属性的骨骼线条来辅助Bone Capture Biharmonic工作
### Parameters
This node is used to create line geometry with suitable capture attributes that are used for setups when using the [Bone Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturebiharmonic.html "Supports Bone Deform by assigning capture weights to points based on biharmonic functions on tetrahedral meshes.") SOP. It generates the lines by looking at [Capture Region](https://www.sidefx.com/docs/houdini/nodes/sop/cregion.html "Supports Capture and Deform operation by creating a volume within which
points are captured to a bone.") primitives that can be specified from either the geometry of the (optional) first input and/or from parameter values.

This node merges overlapping line segments into polygonal curves, and creates attributes understood by the [/nodes/sop/deform](https://www.sidefx.com/docs/houdini/nodes/sop/deform.html) and [Bone Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturebiharmonic.html "Supports Bone Deform by assigning capture weights to points based on biharmonic functions on tetrahedral meshes.") SOPs: `pCaptFrame`, `pCaptSkelRoot`, and `boneCapture`.

This node is typically the second input of the [Tet Conform](https://www.sidefx.com/docs/houdini/nodes/sop/tetconform.html "Creates a tetrahedral mesh that conforms to a connected mesh as much as possible.") SOP to create a tetrahedral mesh that can be used with [Bone Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturebiharmonic.html "Supports Bone Deform by assigning capture weights to points based on biharmonic functions on tetrahedral meshes.").

For its input, it can either be an a set of [Capture Region](https://www.sidefx.com/docs/houdini/nodes/sop/cregion.html "Supports Capture and Deform operation by creating a volume within which
points are captured to a bone.") primitives or alternatively, a set of polygonal lines to be treated as a skeleton. If given a set of polygonal lines, then the input also requires a `name` string attribute as well as a matrix3 `transform` attribute to specify the capture pose. In the latter case, the Capture parameter options will be ignored.

-   The points of the lines do not include the end caps of the capture region
    
    primitives.
    
-   Clicking **Force cook** has no effect if the targeted objects are [Bones](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html "The Bone Object is used to create hierarchies of limb-like objects
    that form part of a hierarchy …").
    
-   The capture pose data is stored in parameters on the [Bone object](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html "The Bone Object is used to create hierarchies of limb-like objects
    that form part of a hierarchy …") on the **Capture >Capture Region** sub-tab under **Bone Capture Pose**.
    

## PARAMETERS

Group

When an input is given, this specifies a point group to use from it. All points from the input is used when blank (default).

Hierarchy

Top of the object hierarchy traversed for the Capture Region operations.

Extra Regions

The list of paths to extra bone objects or capture regions to be used separated by spaces. This list is appended to what the Hierarchy parameter specifies.

Resample Segments

Specifies how the lines should be resampled.

Off

No resampling.

By Max Axis Fraction

Resample using a maximum segment length derived from **Max Axis Fraction** multiplied by the largest axis of the lines' bounding box.

By Max Segment Length

Resample using the **Max Segment Length** value.

Max Axis Fraction

The fraction of the largest axis of the lines' bounding box side to use for resampling. This is only used when **Resample Segments** is set to **Max Axis Fraction**.

Max Segment Length

When when **Resample Segments** is set to **Max Segment Length**, this specifies the maximum line segment length to resample with.

Exclude Short Bones

When enabled, bones whose lengths are equal or less than **Exclude Threshold** will be ignored.

Exclude Threshold

When **Exclude Short Bones** is enabled, bones whose lengths are equal or less than this value are ignored.

Fuse Threshold

The threshold at which points will be fused in the output. A tolerance is computed from this value by multiplying it with the maximum bounding box axis size. Points whose positions are equal or less than the tolerance will be fused into a single point.

Use Bone Link

Generate segments using the center line of the bone link instead of its capture region.

## Capture Options

Use Capture Pose

If turned on, the capture parameters of bones and capture regions are used. This means that the output will be capture frame independent. The capture pose can be viewed by choosing **Edit ▸ Objects ▸ Bone Kinematic Override: Capture Pose** from the main menu.

Cook at

Specify when this node is allowed to cook.

Capture Frame

Frame number at which to get evaluate the capture parameters.

Force Cook

Forces the operation to recook immediately.

## Hierarchy Options

Region SOP

Specifies the geometry in which to find the Capture Regions.

Traverse into subnets

If turned on, when traversing the hierarchy for capture regions, also traverse inside object subnets.

Create Relative Skeleton Root Path

If on, the internal cregion paths are generated with a skeleton path prefix (`pCaptSkelRoot` attribute value) that is relative to this SOP. If off, the prefix is determined by the longest common object path prefix out of all the capture region paths.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/bonecapturebiharmonic.svg) Bone Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturebiharmonic.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/captureattribpack.svg) Capture Attribute Pack](https://www.sidefx.com/docs/houdini/nodes/sop/captureattribpack.html)