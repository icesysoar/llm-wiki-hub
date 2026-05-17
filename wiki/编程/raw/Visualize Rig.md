---
type: concept
title: Visualize Rig
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "cc00fed64361"
---
可视化SOP骨架的转换和育儿
### Parameters
This node provides a simple geometry representation of the inputs point transformations and hierarchy. The visualization is provided on the second output for flipbooks or rendering is required, whilst the first output is the same geometry found on the first input.

Display
Rig Visualization
Show the visualisation in the viewport.
Output
Show the first output geometry (the input skeleton) in the viewport.
Joint Axis Style
Set the style of the axis display. Gnomon
A simple gnomon guide.
Hats
A flattened cone per-axis that may be more visible in many situations.
Show Parent to Child
Display a guide for each edge in the input geometry pointing from parent to child.
Override Joint Color
Set the color of the joints in the visualization.
Override Link Color
Set the color of the primitives in the visualization.
Use Lighting
Set the visualisation to ignore the scene lighting.
Joint Scale
Set the scale of the guides.
Initialize Scale From Root
Run a heuristic to determine and set the **Joint Scale** parameter based upon the root joints scale and the size of the skeleton’s bounding box. This can be useful when working with imported skeletons that may have had their units converted.
## INPUTS
The SOP hierarchy that you wish to visualize.
## OUTPUTS
Skeleton
The first input geometry.
Visualization
The created visualisation as its own geometry.