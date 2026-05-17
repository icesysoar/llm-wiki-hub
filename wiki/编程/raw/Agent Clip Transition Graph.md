---
type: concept
title: Agent Clip Transition Graph
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "0fc948d10180"
---
创建描述动画片断之间可能过渡的几何图形。
### Parameters
A [crowd object’s](https://www.sidefx.com/docs/houdini/nodes/dop/crowdobject.html "Creates a crowd object with required agent attributes to be used in the crowd simulation.") clip transition graph may optionally be used to control transitions between states and animation clips. It provides information about which clips are allowed to transition to each other, and where in the clips those transitions should occur. This can be used by the [Crowd Transition DOP](https://www.sidefx.com/docs/houdini/nodes/dop/crowdtransition.html "Defines a transition between crowd states.") to delay state transitions until an appropriate point in the current animation clip, and to smoothly blend into the next clip. Additionally, the clip transition graph allows per-clip control over this behavior (which is useful if the transition’s **Input State** parameter specifies multiple states, or if **Randomize Clips** is enabled for any of the input states).
The [Test Simulation: Crowd Transition SOP](https://www.sidefx.com/docs/houdini/nodes/sop/testsim_crowdtransition.html "Provides a simple crowd simulation for testing transitions between animation clips.") can be used to quickly preview transitions between particular clips before setting up a crowd simulation.
Each point in the clip transition graph geometry represents an animation clip, and each two-point polygon represents a (one-way) transition between the clips. During a state transition, if the points corresponding to the input and output states' animation clips are not directly connected, the [Crowd Transition DOP](https://www.sidefx.com/docs/houdini/nodes/dop/crowdtransition.html "Defines a transition between crowd states.") will use the shortest path between the two clips.
## Attributes
Name
Class
Type
Description
`clipname`
Point
String
Specifies the name of an animation clip.
`agentname`
Point
String
This string is matched with the agent’s `agentname` point attribute to avoid potential name conflicts if a crowd contains multiple agent definitions. For example, two different types of agents may both have a clip named 'walk'.
`blend_durations`
Primitive
Float Array
For each transition region, specifies the duration (in seconds) of any transitions which start in that region.
`sync_points`
Primitive
Vector2 Array
For each transition region, specifies a pair of clip times (in seconds) where the two animation clips have a similar pose.
`transition_regions`
Primitive
Vector2 Array
Specifies ranges of clip times (in seconds) for the first animation clip where a transition is allowed to occur.
## PARAMETERS
Units
The units for which time parameters are specified. This can be frames (at the Houdini FPS) or samples (in the clip’s sample rate).
Compute Transition Graph
Automatically build a transition graph for the agent’s animation clips. For each pair of clips, this searches for groups of consecutive frames where the agent’s poses are similar.
Tolerance
Specifies the tolerance used when comparing poses to find suitable transition points between clips. A tolerance of 0 requires the poses to be identical, and larger tolerances allow the poses to be less similar.
Blend Frames
Specifies the length of the transitions between animation clips.
Transform Group
When comparing pairs of poses, the comparison can be limited to a particular [group](https://www.sidefx.com/docs/houdini/nodes/sop/agenttransformgroup.html "Adds new transform groups to agent primitives.") of transforms from the agent’s rig (such as the lower body).
Filters
Restricts the pairs of clips to search for transition points between. The standard pattern matching syntax (such as that used by the [match](https://www.sidefx.com/docs/houdini/vex/functions/match.html "This function returns 1 if the subject matches the pattern specified,
or 0 if the subject doesn’t match.") VEX function) can be used to specify multiple source and destination clips.
For example, to exclude transitions from a `sit_to_stand` clip to the `sit` clip, and only search for transitions to the `stand_1` and `stand_2` clips, **Clip A** could be set to `sit_to_stand` and **Clip B** could be set to `stand_*`.
If a clip does not match at least one of the **Clip A** patterns, all other clips will be considered as potential destination clips (matching the behavior when no filters are specified). Including a filter where **Clip A** is set to `*` and **Clip B** is empty will exclude all transitions except for the ones specified by the other filters.
Extra Transitions
The number of additional transitions to set up between pairs of animation clips.
Clip A
The name of the animation clip to transition from.
Clip B
The name of the animation clip to transition to.
Initialize from Computed Transition Regions
Sets the transition region parameters to the computed values if **Compute Transition Graph** is enabled. This can be used to perform manual edits to the computed transition regions.
Transition Regions
The number of regions in the clip where a transition may occur.
Sync Frame A
Specifies a frame in **Clip A** where the pose is similar to **Sync Frame B** in **Clip B**.
Transition Region
Specifies the range of frames where a transition may begin. This should typically include **Sync Frame A**.
Sync Frame B
Specifies a frame in **Clip B** where the pose is similar to **Sync Frame A** in **Clip A**.
Blend Frames
Specifies the length of the transition between the clips.
See also
!未整理/Houdini/Houdini/Test Simulation Crowd Transition#Test Simulation Crowd Transition Geometry
!Crowd Object#Crowd Object Dynamics
!Crowd Transition#Crowd Transition Dynamics