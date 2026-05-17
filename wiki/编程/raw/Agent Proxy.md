---
type: concept
title: Agent Proxy
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "77773722c9f6"
---
为一个代理提供简单的代理几何学。
### Parameters
This node generates simple geometry that is suitable for use when creating and testing a crowd simulation. This node is used internally by the [Crowd Source SOP](https://www.sidefx.com/docs/houdini/nodes/sop/crowdsource.html "Populates a crowd of agent primitives.") as a fallback when there are no input agents.

Display As
Specifies how the packed primitives should be displayed in the viewport.
Show ID
Adds a unique ID to each packed primitive’s geometry.
Custom Color
Overrides the color of the proxy geometry.
Color
Specifies the color to use when **Custom Color** is enabled.
Randomize Color
Selects a random color for each packed primitive.
Random Seed
Specifies the random seed to use when **Randomize Color** is enabled.
See also
-    [![|50](https://www.sidefx.com/docs/houdini/icons/CROWDS/crowdsource.svg) Crowd Source](https://www.sidefx.com/docs/houdini/nodes/sop/crowdsource.html)