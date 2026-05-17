---
type: concept
title: Agent Terrain Adaptation
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "9a9166381548"
---




# Geometry node
https://www.sidefx.com/docs/houdini/nodes/sop/agentterrainadaptation.html
### Agent Terrain Adaptation^Geometry
#### ![|50](https://www.sidefx.com/docs/houdini/icons/CROWDS/agentterrainadaptation.svg)代理人地形的适应性
适应代理人的腿部，使其符合地形，防止脚部滑动。
### Parameters
This node is used as part of a crowd simulation to modify the transforms of agent leg bones to avoid intersection with terrain and prevent the feet from sliding.
Activation
Whether or not to activate this node.
Group
Specifies a group of agents that this node should affect.
Source
Specifies the source geometry for the terrain object.
Terrain Group
Specifies which primitives in the terrain geometry should be used for ray intersections.
Enable Foot Locking
Prevents the ankle and toe from sliding when the foot should be planted. The channels specified on the [Agent Prep SOP](https://www.sidefx.com/docs/houdini/nodes/sop/agentprep.html "Adds various common point attributes to agents for use by other crowd nodes.") are used to determine when the foot should planted during the animation clip, as well as how to blend out of the locked position. This option also improves terrain adaptation for situations where the unadjusted foot position is above the terrain, since the solver can distinguish between when the foot should be planted and when the foot is actually supposed to be above the ground. This option may still be used if no terrain object is specified.
The optional `agentterrainadaptation_footdown` float array point attribute can be used to override the foot down values computed from the agent’s animation clips. The attribute is expected to contain a replacement foot down value for each entry in the `agentrig_footchannels` point attribute. This may be useful when applying terrain adaptation to cached agents.
Adjust Hips
Adjusts the position of the hips to ensure that legs are not over-stretched when planting feet on uneven terrain.
Hip Offset
Specifies an additional offset to shift the hips up or down.
Hip Shift Per Frame
Specifies how much the hips can be shifted by in a single frame. This can reduce sudden motion of the hips on uneven terrain.
Knee Damping Threshold (%)
When the distance from the upper leg to the target ankle position is greater than this percentage of the maximum leg length, the knee angle will be damped so that it smoothly approaches a 180 degree angle as the target ankle position is extended. This can prevent the knee from popping when the leg is almost fully extended.
Note
This can allow the leg to stretch slightly, as keeping the foot planted on the terrain is a higher priority.
Enable Terrain Adaptation
Adjusts the agents' legs to conform to the terrain.
Enable Leaning
Specifies whether the agent’s back should be adjusted.
Lean Angle Per Frame
When navigating uneven terrain, the agent can lean forwards or backwards. This parameter specifies the maximum angle (in degrees) that the agent can tilt by in a single frame.
Backward Lean
Specifies how far (in degrees) the agent can lean backward.
Forward Lean
Specifies how far (in degrees) the agent can lean forward.
Show Guide Geometry
Displays guide geometry indicating the positions of the lower limb joints and whether the feet are locked.
Scale
Adjusts the size of the guide geometry.
Locked Scale
Adjusts the **Scale** to indicate when the foot is locked.
Color
Specifies the color of the guide geometry. When foot locking is enabled, the ramp is used to indicate when the ankle and toe joints are locked or blending out of the locked position.
## INPUTS
Agent
The packed primitive agent to modify.
## OUTPUTS
Agent
The modified packed primitive agent with terrain adaptation applied.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/agent.svg) Agent Prep](https://www.sidefx.com/docs/houdini/nodes/sop/agentprep.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/agentterrainprojection.svg) Agent Terrain Projection](https://www.sidefx.com/docs/houdini/nodes/dop/agentterrainprojection.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/crowdsolver.svg) Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html)