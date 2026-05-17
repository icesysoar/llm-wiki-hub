---
type: concept
title: Agent Look At Apply
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "9178fcc66230"
---
移动特工的头部，看向一个目标。
### Parameters
This node is used in conjunction with [Agent Look At](https://www.sidefx.com/docs/houdini/nodes/dop/agentlookat.html "Defines a target that an agent can turn its head to look at.") to modify the transform of the head bone of an agent to orient it towards an object or position.
Activation
Specifies whether this node is activated.
Group
The group of agents to modify.
Guide
Specifies whether to display guide geometry indicating each agent’s current target.
Eye Offset
The offset (in agent world space) to use from the head bone position.
Limit Head Turn Per Frame
If enabled, limits how far the agent’s head can rotate in a single frame. This causes the agent’s head to gradually turn towards the target. If disabled, the agent’s head will always look directly at the target position.
Adjust Immediately on Initial Frame
Specifies that the head should be adjusted immediately on the initial frame (if necessary), instead of being limited by the maximum turn rate.
Head Turn Angle
The maximum angle (in degrees) that the agent’s head can rotate by in a single frame if **Limit Head Turn Per Frame** is enabled.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/agent.svg) Agent Prep](https://www.sidefx.com/docs/houdini/nodes/sop/agentprep.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/crowdsolver.svg) Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/agentlookat.svg) Agent Look At](https://www.sidefx.com/docs/houdini/nodes/dop/agentlookat.html)