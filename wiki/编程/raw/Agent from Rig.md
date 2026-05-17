---
type: concept
title: Agent from Rig
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "f0c1327908b3"
---
从一个几何体骨架创建一个代理基元。
### Parameters
This SOP creates a new [agent primitive](https://www.sidefx.com/docs/houdini/crowds/agents.html "About agents, the moving actors that make up a crowd simulation.") from the input geometry skeleton. The agent’s [rig](https://www.sidefx.com/docs/houdini/crowds/agents.html#rig) is built from the skeleton’s hierarchy, and [transform groups](https://www.sidefx.com/docs/houdini/nodes/sop/agenttransformgroup.html "Adds new transform groups to agent primitives.") can optionally be created from point groups or attributes on the skeleton geometry.
To add geometry or animation clips to the agent, [Agent Layer](https://www.sidefx.com/docs/houdini/nodes/sop/agentlayer.html "Adds new shapes and layers to an agent primitive.") and [Agent Clip](https://www.sidefx.com/docs/houdini/nodes/sop/agentclip.html "Adds new clips to agent primitives.") can be used. To transfer animated poses from a skeleton to the agent, use [Agent Pose from Rig](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--agentposefromrig.html "Updates an agent primitive’s pose from a geometry skeleton.").
Create Agent Name
If enabled, creates an `agentname` point attribute containing the **Agent Name**.
Agent Name
Specifies a name for the agent definition (e.g. `male_soldier`), which is recorded in the `agentname` point attribute. This name is typically used by other crowds tools to identify different agent types.
Use Rest Frame
If enabled, builds the agent primitive at the specified **Rest Frame**.
Rest Frame
Specifies the frame at which to build the agent primitive from the input skeleton (the output of this node will not be time-dependent). When the input skeleton is time-dependent, rebuilding the agent primitive’s rig on each frame can cause performance issues downstream.
Use Rest Pose Attribute
When enabled, uses a point rest transform attribute to set the [agent rig’s rest pose](https://www.sidefx.com/docs/houdini/crowds/agents.html#rig).
Rest Pose Attribute
Specifies the name of the rest transform point attribute, when **Use Rest Pose Attribute**.
Create Locomotion Joint
Adds a joint named `__locomotion__` to the agent’s rig if the input skeleton does not already have a joint with that name. The locomotion joint is required for using [locomotive clips](https://www.sidefx.com/docs/houdini/nodes/sop/agentclip.html "Adds new clips to agent primitives.") with the agent.
Import Transform Groups
Point Groups
For each of the specified point groups on the input skeleton, a [transform group](https://www.sidefx.com/docs/houdini/nodes/sop/agenttransformgroup.html "Adds new transform groups to agent primitives.") is added to the agent definition. The transform group is populated based on the joints contained in the point group.
Point Attributes
For each of the specified point attributes on the input skeleton, a [transform group](https://www.sidefx.com/docs/houdini/nodes/sop/agenttransformgroup.html "Adds new transform groups to agent primitives.") is added to the agent definition. The point attributes are required to be `float` attributes with a tuple size of 1. The transform group is populated based on the joints that have a non-zero attribute value, and the attribute value is also interpreted as the `weight` of the transform group member.
## INPUTS
Skeleton
The skeleton geometry to import the hierarchy from.
## OUTPUTS
Agent
The new agent primitive.
## EXAMPLES
Load Launch
[AgentFromSOPs](https://www.sidefx.com/docs/houdini/examples/nodes/sop/kinefx--agentfromrig/AgentFromSOPs.html)Example for [Agent from Rig](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--agentfromrig.html) geometry node
This example demonstrates how to build an agent from a SOP rig, including importing geometry and setting up animation clips.
See also
!Agent Character Unpack#Agent Character Unpack Geometry
!Agent Pose from Rig#Agent Pose from Rig Geometry
!Agent#Agent Geometry