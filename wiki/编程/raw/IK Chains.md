---
type: concept
title: IK Chains
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "b71150585807"
---
在SOP骨架上创建并评估双骨IK求解器。
### Parameters
This SOP allows you to quickly setup two-bone IK chains on the first input skeleton using goal, and optionally twist drivers found on the second input.

## PARAMETERS

Enable Multithreading

IK Chains

Root Name

The first joint in the chain. For example, the shoulder of an arm.

Mid Name

The second joint in the chain. For example, the elbow of an arm.

Tip Name

The third joint in the chain. For example, the wrist of an arm.

Match By Name

When enabled the joints specified above will be driver by points with the matching name in the second input. This is useful when you wish to simply isolate points from the input and use them as the IK controls on the second input.

Goal Name

The name of the point on the second input to use as the IK goal.

Twist Name

The name of the point on the second input to use as the IK twist control.

Note

Leaving this blank will cause the solver to simply use the position of the joint specified in **Mid Name** as the pole vector.

Blend

Blend between in the input pose and the result of the IK solve.

Orient Tip

Orient the joint specified in **Tip Name** to the goal.

Stretch

Allow the chain to stretch to reach the goal.

## INPUTS

Skeleton

The SOP skeleton to drive.

IK Drivers

The SOP skeleton containing the points to use as IK drivers.

## OUTPUTS

Skeleton

The first input skeleton with the result of the IK solutions applied.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/VOP/kinefx-twoboneik.svg) Two Bone IK](https://www.sidefx.com/docs/houdini/nodes/vop/kinefx--twoboneik.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-rigpose.svg) Rig Pose](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--rigpose.html)