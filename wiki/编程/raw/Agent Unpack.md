---
type: concept
title: Agent Unpack
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "c9bc3456e1d3"
---
从代理基元中提取几何图形。
### Parameters
This SOP converts [agent primitives](https://www.sidefx.com/docs/houdini/crowds/agents.html "About agents, the moving actors that make up a crowd simulation.") into geometry, with several possible formats. Using the [Unpack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/unpack.html "Unpacks packed primitives.") to unpack an agent is equivalent to setting the **Output** parameter to **Deforming Geometry**.
## PARAMETERS
Group
Subset of input geometry to unpack.
Output
Specifies how to generate the output geometry.
Deforming Geometry
Generates geometry from the shapes in the agent’s [current layer](https://www.sidefx.com/docs/houdini/crowds/agents.html#currentlayers). For a deforming shape binding, the shape’s geometry is deformed using the agent’s current pose. For a static shape binding, the shape is transformed by the referenced joint’s transform. This is equivalent to unpacking the agent with the [Unpack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/unpack.html "Unpacks packed primitives.").
Rest Geometry
Outputs the shapes from the agent’s [current layer](https://www.sidefx.com/docs/houdini/crowds/agents.html#currentlayers). No deformation is performed for deforming shape bindings.
Joints
Creates a point for each of the agent’s joints, with point attributes containing the joint’s name and transform. **Filters** can be used to only create points for specific joints.
Skeleton
Creates a point for each of the agent’s joints, and a two-point polygon between each child joint and its parent.
MotionClips
For each of the specified agent clips, creates a packed geometry primitive containing a [MotionClip](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--motionclip.html "Converts a skeleton animation to a MotionClip").
Apply Agent Transform
Specifies whether the agent’s overall transform is applied to the unpacked geometry.
Apply Joint Transforms
Specifies whether the agent’s joint transforms are applied when unpacking. Disabling this along with **Apply Agent Transform** will produce an output that is not time-dependent. If this is disabled and **Output** is **Joints** or **Skeleton**, the agent’s rest pose will be used instead of the agent’s current pose.
Layers
Specifies a list or pattern of layer names to include when unpacking the agent. The default behavior is to output the geometry from all of the agent’s current layers.
Shapes
Specifies a list or pattern of shape names to include when unpacking the agent. The default behavior is to output all of the shapes from the agent’s current layers (filtered by the **Layers** pattern).
Limit Iterations
A packed primitive may unpack to further packed primitives. This parameter enables a maximum number of iterations for unpacking.
Iterations
The number of iterations specifies how many levels of packed primitives you want to unpack.
Transform Name Attribute
Outputs an attribute containing the name of the agent’s transform that the shape geometry was attached to.
Shape Deformer Attribute
Outputs an attribute containing the name of the shape binding’s deformer (or the empty string for a static shape binding).
Layer Name Attribute
Outputs an attribute containing the name of the layer that the shape binding belonged to. This can be useful to identify the source layer of a shape when an agent has multiple layers assigned to it.
Clip Names
When **Output** is **MotionClips**, specifies a list or pattern of clip names to convert to [MotionClips](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--motionclip.html "Converts a skeleton animation to a MotionClip"). If a pattern is not specified, the agent’s current clip(s) will be used.
Transfer Attributes
Specifies a list of attributes to transfer to the unpacked geometry. Computed point velocities will be transferred if both “v” and “w” point attributes exist and are specified.
Transfer Groups
Specifies a list of groups to transfer to the unpacked geometry.
Filters
Specifies the joints for which points are created. If there aren’t any filters, a point will be created for each joint.
Joints
A list or pattern of joint names to create points for.
Percent of Agents
Only outputs points for a percentage of agents in the crowd. This can be useful for controlling the placement of props.
Seed
Random seed used when pruning agents for the **Percent to Keep** parameter.
Skeleton Color
Point color to use for the skeleton joints.
See also
!Agent#Agent Geometry
!Agent Animation Unpack#Agent Animation Unpack Geometry
!Agent Character Unpack#Agent Character Unpack Geometry
!Unpack#Unpack Geometry