---
type: concept
title: Agent Configure Joints
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "2453a1cfb49a"
---
创建点属性，指定代理的关节的旋转限制。
### Parameters
The rotation limits are described by a minimum and maximum rotation about each axis, which forms an elliptical cone within which rotation may take place. The point attributes created by this node can be used by the [Agent Constraint Network SOP](https://www.sidefx.com/docs/houdini/nodes/sop/agentconstraintnetwork.html "Builds a constraint network to hold an agent’s limbs together.") to build the [constraint network](https://www.sidefx.com/docs/houdini/nodes/dop/constraintnetwork.html "Constrains pairs of RBD objects together according to a polygon network.") geometry for a crowd of agents.

## PARAMETERS

Group

The agents to configure joint limits for.

## Joints

Create Limits For Collision Layer

Adds a joint limit for each transform that has a shape attached to it in the agent’s collision layer. The rotation limits are initialized based on existing limits from the input agent, as well as the range of motion in the agent’s animation clips.

Animation Clips

A string pattern that specifies which animation clips should be used when computing initial rotation limits.

Reset All Limits

Resets all of the joint limits to their initial values. The joint limits' initial values are determined from any existing limits on the input agent, or from the agent’s animation clips. This is equivalent to using the **Reset Limits** button for all of the multiparm entries.

Joint Limits

The number of joint limits to configure.

Transform Name

Specifies which transform in the agent’s rig to configure the rotation limit for.

Parent Transform Name

Specifies which transform in the agent’s rig the cone should be attached to. Typically this should be the parent of the **Transform Name**, but for some rigs another transform (such as the grandparent) may be a more appropriate choice.

Child Rotation

Specifies the rotation of the twist axis, up axis, and out axis in the space of the child transform. By default, the twist axis is aligned with the bone.

Anchor Position

The position of the cone in the local space of the parent transform.

Cone Rotation

The orientation of the cone in the local space of the parent transform.

Twist Rotation Range

Specifies the minimum and maximum rotation about the twist axis in degrees.

Up Rotation Range

Specifies the minimum and maximum rotation about the up axis in degrees.

Out Rotation Range

Specifies the minimum and maximum rotation about the out axis in degrees.

Reset Limits

Reset the joint limits to their initial values. If limits were already configured for this joint, those values will be extracted to allow editing existing limits. Otherwise, the limits will be computed from the agent’s animation clips.

Initialize from Animation Clips

Computes rotation limits by analyzing the agent’s animation clips. This can provide a useful starting point for the ragdoll’s rotation limits.

## Guides

Scale

Adjusts the size of the guide geometry.

Cone Limit Color

The color of the guide geometry for the **Up Rotation Range** and **Out Rotation Range**.

Twist Limit Color

The color of the guide geometry for the **Twist Rotation Range**.

Twist Axis Color

The color of the guide geometry for the child’s twist axis.

Up Axis Color

The color of the guide geometry for the child’s up axis.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/agent.svg) Agent](https://www.sidefx.com/docs/houdini/nodes/sop/agent.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/agentcollisionlayer.svg) Agent Collision Layer](https://www.sidefx.com/docs/houdini/nodes/sop/agentcollisionlayer.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/agentconstraintnetwork.svg) Agent Constraint Network](https://www.sidefx.com/docs/houdini/nodes/sop/agentconstraintnetwork.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/bulletsolver.svg) Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html)