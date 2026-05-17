---
type: concept
title: Ragdoll Collision Shapes
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "d560454044f7"
---
为KineFX骨架创建碰撞形状，用于布娃娃的RBD模拟。
### Parameters
This node provides an interactive way of creating and modifying collision shapes for a KineFX skeleton for the purpose of running it through an ragdoll RBD simulation.
## PARAMETERS
Group
Specifies the joints to build collision shapes for.
Targets Group
A collision shape’s transform is initialized based on a joint and its child. Adding an entry in this group field allows you to pick which child joint to use for the initialization.
Note
This parameter setting is only used when a joint has more than one child.
Output Group
When on, output the joints listed in **Group** as a point group on the geometry.
Group Name
Specifies the name of the point group to output.
This parameters is only available when **Output Group** is turned _on_.
Use Rest Pose Attribute
When on, use a point rest transform attribute to set the skeleton to its rest state before creating the collision shapes.
Rest Pose Attribute
Specifies the name of the rest transform point attribute.
This parameter is only available when **Use Rest Pose Attribute** is _on_.
Use Mirror Attribute
When on, use a point dictionary mirror attribute, as created by the ![|50](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-rigmirrorpose.svg) [Rig Mirror Pose SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--rigmirrorpose.html) node, to turn on mirroring in this node’s python state.
Note
In order to function properly, the mirroring operation expects half the skeleton to have mirrored transforms.
Mirror Attribute
The name of the mirror point attribute.
This parameter is only available when **Mirror Attribute** is _on_.
Configure RBD Properties Per Shape
When on, creates point attributes that provide the Bullet solver with per-shape values for physical properties such as friction and bounce. When off, the same default values are applied to all the shapes.
## Guide Geometry
Density Guide Color
Color ramp that visualizes the `density` attribute of each collision shape.
This parameter is only available when **Configure RBD Properties Per Shape** is _on_.
Display Collision Geometry
When on, the guide geometry for the collision shapes appear in the viewport.
## Collision Shapes
Creates and removes **Collision Shape** multiparms. Each multiparm is a definition for a specific collision shape on your skeleton.
Enable
Turns a **Collision Shape** multiparm entry on or off.
Group
Specifies the joint or joints the collision shape belongs to.
Shape
Specifies the shape of the collision shape: Box, Capsule, or Sphere.
Translate
Sets the local translation of the collision shape.
Rotate
Sets the local rotation of the collision shape.
Scale
Sets the local scale of the collision shape.
### RBD Properties
These parameters are only available when **Configure RBD Properties Per Shape** is _on_.
Density
Sets the shape’s density.
Rotational Stiffness
Sets how liable the shape is to spin.
Bounce
Sets the shape’s elasticity.
Friction
Sets the shape’s coefficient of friction.
## INPUTS
Input 1
Target Skeleton. The input skeleton to be processed.
## OUTPUTS
Output 1
Target Skeleton. The input skeleton with the effect applied.
Output 2
Collision Shapes. The collision shape geometry.
See also
[Setting up ragdoll simulations for characters](https://www.sidefx.com/docs/houdini/character/kinefx/ragdoll.html)
!Ragdoll Constraints#Ragdoll Constraints Geometry
!Ragdoll Solver#Ragdoll Solver Geometry
!Configure Joints#Configure Joints Geometry