---
type: concept
title: Agent Collision Layer
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "39234972247a"
---
创建一个适合碰撞检测的新代理层。
### Parameters
This node creates an agent layer that consists of simple static shapes such as capsules and boxes. The resulting layer is suitable for use as an agent’s collision layer.
## PARAMETERS
Group
The agents to add the new layer to.
Layer Name
The name of the new layer.
Copy Source Layer
Specifies whether to use an existing layer as the starting point for the new layer. All of the shape bindings from the **Source Layer** will be copied.
Source Layer
If **Copy Source Layer** is enabled, specifies the name of an existing layer to copy shape bindings from.
Keep External References
When new shapes are being added to the shape library, a copy will first be made so that the modifications do not affect other agents that reference the original shape library (such as those in the input SOP’s geometry). If this option is enabled and the original shape library referenced a file on disk, the new shape library will be marked as _including_ the original shape library. In this situation, when the agent is saved to a geometry file, the path to the original shape library is saved out along with any new shapes that were not included from the original library. Otherwise, the entire shape library will be saved to the geometry file and the original shape library file is not referenced.
Set as Current Layer
Sets the current layer of each agent to the new layer.
Set as Collision Layer
Sets the collision layer of each agent to the new layer.
Configure RBD Properties Per Shape
Creates [array point attributes](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html#agentattributes) that provide the Bullet solver with per-shape values for physical properties such as friction and bounce. If this option is disabled, the parameters on the [Crowd Object DOP](https://www.sidefx.com/docs/houdini/nodes/dop/crowdobject.html "Creates a crowd object with required agent attributes to be used in the crowd simulation.") or [RBD Packed Object DOP](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects.") will apply to all of the agent’s RBD objects.
Collision Shapes
The number of collision shapes that should be added.
Transform Name
Specifies which transform in the rig the shape should be attached to.
Translate
Specifies the translation of the shape in local space.
Rotate
Specifies the rotation of the shape about the xyz axes in local space.
Scale
Specifies the size of the shape in local space.
Pivot
Specifies the local pivot point for rotations.
Shape
Specifies the type of primitive shape to create.
SOP Path
Specifies the SOP geometry to use for the shape if the shape type is **Custom**.
Keep Position When Attaching
When **Shape** is **Custom**, specifies that the new shape should be transformed before being added to the shape library so that its current world position will be maintained after being attached to the **Transform Name**.
Density
Specifies the shape’s density when **Configure RBD Properties Per Shape** is enabled. The mass of an object is its volume times its density.
Rotational Stiffness
Specifies how liable the shape is to spin when **Configure RBD Properties Per Shape** is enabled.
Bounce
Specifies the object’s elasticity when **Configure RBD Properties Per Shape** is enabled.
Friction
Specifies the object’s coefficient of friction when **Configure RBD Properties Per Shape** is enabled.
## INPUTS
Agents
Agent primitives.
## OUTPUTS
Agents
Agent primitives with additional layer and shapes.
See also
!Agent#Agent Geometry
!Agent Layer#Agent Layer Geometry
!Bullet Solver#Bullet Solver