---
type: concept
title: Full Body IK
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "3cf87b84927b"
---
使用全身逆运动学算法将一个运动转移到基于SOP的骨架上。
### Parameters
## ATTRIBUTES
[Full Body IK Configure Targets](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--fbikconfiguretargets.html "Configures joint properties used by full-body inverse kinematics solvers.") and [Configure Joints](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--configurejoints.html "Configures joint properties like local center of mass and transformation limits and creates a center of mass joint.") can be used to set up per-joint properties for the IK solver.
`fbik_targetconfig`
This dictionary point attribute configures how the joint’s goal transform behaves in a full-body inverse kinematics solver. This is only used when the joint has a goal transform (for example, if the joint is mapped to a joint on the source skeleton). For more details on the valid keys, see the `targetoptions` parameter for [solvephysfbik](https://www.sidefx.com/docs/houdini/vex/functions/solvephysfbik.html "Applies a full-body inverse kinematics algorithm to a skeleton, with optional control over the center of mass.") and [solvefbik](https://www.sidefx.com/docs/houdini/vex/functions/solvefbik.html "Applies a full-body inverse kinematics algorithm to a skeleton.").
This **Configuration Attribute** dictionary point attribute stores the configurations. For more details on the valid keys, see the `jointoptions` parameter for [solvephysfbik](https://www.sidefx.com/docs/houdini/vex/functions/solvephysfbik.html "Applies a full-body inverse kinematics algorithm to a skeleton, with optional control over the center of mass.") and [solvefbik](https://www.sidefx.com/docs/houdini/vex/functions/solvefbik.html "Applies a full-body inverse kinematics algorithm to a skeleton.").
## PARAMETERS
Root Constrain
When on, specifies the joint on the _target skeleton_ that will be constrained to its driver prior to the full-body IK solve. This can be useful when retargeting to an animation in which the character turns around more that 180 degrees from the rest pose.
Note
The joint you specify needs to be mapped to a joint on the _source skeleton_ for the retarget.
Solver
FABRIK (Forward and Backward Reaching Inverse Kinematics)
A very fast, simple Full Body IK solver. This solver prefers to be very densely mapped with a high number of iterations to converge nicely and can behave less stably than the Physical Full Body IK solve. This solver is widely used across many different platforms so can be suitable for applications where compatibility is important or where the more physically based solve might be unsuitable.
Physical Full Body IK (Default)
A sophisticated and robust algorithm for solving the Full Body problem on a skeleton, this solver supports Center of Mass calculations and can provide an intuitive solve from very few target transforms. This solver prefers to be sparsely mapped with far fewer iterations that the FABRIK solve.
Note
Increasing the iterations often requires a higher value to be set on the 'Damping' parameter.
Iterations
The number of iterations of the solve to perform.
Damping
Damping factor for the solver. Larger values will produce more stable results when, for example, a target is unreachable. A value that is too large, however, will require more iterations to converge. Around 0.5 is typically a suitable initial value.
Tolerance
The margin of error that we allow the solver to work within. Once achieved, the solver can exit early from its iterations (setting this to 0 will force the solver to always perform the full number of iterations).
Pin Root
Pin the translation of any points without a parent.
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
Delete Mapping Attributes
Clean up the attributes used to configure the solver.
Compute Local Transform
Recompute the local transforms after the solve.
Configuration Attribute
The name of the dictionary point attribute that stores the configurations. See the [Configure Joints SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--configurejoints.html "Configures joint properties like local center of mass and transformation limits and creates a center of mass joint.") .
Configure
See the [Full Body IK Configure Targets SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--fbikconfiguretargets.html "Configures joint properties used by full-body inverse kinematics solvers.") .
## INPUTS
Target Skeleton
The skeleton which we wish to run the Full Body IK solve onto. Typically this would be the skeleton of the character we wish to transfer animation onto having first mapped the two skeletons to each other use the [Map Points SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--mappoints.html "Stores a reference on a point to a point in another geometry.").
Note
This input does not necessarily have to be static, an animated input can also be modified based upon the driver transforms on the third input.
Source Skeleton
The driver transforms for the Full Body IK solve.
## OUTPUTS
First Output
The skeleton on the first input with the result of the Full Body IK applied.
Second Output
The unmodified **Source Skeleton**.
See also
!Configure Joints#Configure Joints Geometry
!Full Body IK Configure Targets#Full Body IK Configure Targets Geometry
!FK Transfer#FK Transfer Geometry
!Rig Pose#Rig Pose Geometry
!Rig  Match Pose#Rig Match Pose Geometry
!Map Points#Map Points Geometry