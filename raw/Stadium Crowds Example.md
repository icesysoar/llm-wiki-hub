---
type: concept
title: Stadium Crowds Example
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "c5d10212d1f6"
---
显示体育场设置的人群示例
## Parameters
The setup creates a stadium crowd. The rotating cheer_bbox object is used as a bounding box for the agents. When they are inside the bounding box it will trigger a transition from a sitting to a cheering state. After a few seconds the cheering crowd sits back down by transitioning into a sitting state.

Tip

To only see a section of the crowd for quicker preview there is a switch node in `/obj/crowd/switch_isolate`. When 0 it will show all agents, and when set to 1 it will only show a small section.