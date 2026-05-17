---
type: concept
title: FK Transfer
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "adb8abe2760e"
---
将前向运动学运动转移到基于SOP的骨架上
### Parameters
Transfer the local space animation from the source skeleton on the second input to the target skeleton. Unlike the [Full Body IK](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--fullbodyik.html "Transfer a motion to a SOP-based skeleton using full-body inverse kinematics algorithm."), this SOP also uses the rest pose of the source skeleton to compute what animation should be transferred (i.e. the local space delta that should be transferred) as well as being used for computing the offsets between mapped joint-pairs.
As this operation performs a simple transfer of FK animation, the offsets computed by this node are only required to compensate for differences in how the two skeletons may be configured in terms of their primary and secondary axes and as such are limited to orientation only. Any differences in translations or scales between the rest poses are ignored.

Group
The group of points on the first input geometry to transfer the animation onto.
Root Constrain
When enabled, the point with the given name will be parent constrained to the point on the Source skeleton that it has been mapped to. If the point has not been mapped then this parameter will have no effect.
Map Using
This parameter allows you to choose whether to use a dictionary attribute on the first input to look up the drivers on the second input or simply to match by an attribute present on both inputs. For example, the second option is useful when the second input contains a subset of the first input’s points.
Mapping Attribute
Use a dictionary point attribute present on the first input to look up the drivers on the second input. This attribute is created for you by the [Map Points SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--mappoints.html "Stores a reference on a point to a point in another geometry."), but any dictionary attribute matching the following format can be used:
Dictionary attribute VEX format
Match By Attribute
Match points on the first input to corresponding points on the second input using a given point attribute. For example, if **Attribute To Match** is set to 'name' then the points on the first input will be driven by points on the second input that share the same name.
Mapping Attribute
The name of the dictionary point attribute on the first input to use for mapping.
Attribute To Match
The name of the point attribute present on both inputs to be used to map points.
Components
A mask to set which parts of the source animation should be transferred to the target.
## Offsets
Source Rest Transforms
Rest pose on source skeleton to compute local space delta from.
Rest Attribute
Use the pose stored in the specified **Rest Pose Attribute** to compute the offsets. This is useful if either of the inputs have already been animated.
Rest Frame
Use the pose at the given **Rest Frame** to compute the offsets.
SOP Node
Use the pose on the given **Source Rest SOP** to compute the offsets. This setting assumes that the first input is in its rest position. If the first input is animated then **Rest Attribute** should be used.
Rest Pose Attribute
The matrix point attribute to use for computing the offsets between mapped points.
Rest Frame
The frame at which to compute the offsets.
Source Rest SOP
The path to the SOP node containing the rest pose for the Source skeleton.
Snap Orientation To Nearest Axes
This option aligns the axes of the source animation to the target joints, preserving clean rotation values in the output. This is useful when performing a transfer of animation to hands and fingers, where performing an initial alignment of all the joint pairs would be tedious, if not impossible.
Note
This option aligns to the nearest axes from each pair of mapped joints, the rest poses of the Target and Source skeletons should still be aligned in roughly the same orientation to ensure the correct result.
## INPUTS
Target Skeleton
The skeleton which we wish to transfer the animation solve onto. Typically this would be the skeleton of the character we wish to transfer animation onto having first mapped the two skeletons to each other use the [Map Points SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--mappoints.html "Stores a reference on a point to a point in another geometry.").
Note
This input does not necessarily have to be static, an animated input can also be modified based upon the driver transforms on the third input.
Source Skeleton
The animated skeleton whose motion we wish to transfer.
## OUTPUTS
First Output
The skeleton on the first input with the animation transferred.
Second Output
The unmodified **Source Skeleton**.
See also
!Full Body IK#Full Body IK Geometry
!Rig Pose#Rig Pose Geometry
!Rig  Match Pose#Rig Match Pose Geometry
!Map Points#Map Points Geometry