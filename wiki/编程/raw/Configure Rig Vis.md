---
type: concept
title: Configure Rig Vis
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "f81421e94ab7"
---
确定KineFX角色的哪些输入骨架组件是可见的。
### Parameters
This node creates visualization configurations for the input skeleton. You can create multiple configurations and each configuration can apply to a single joint or a group of joints. As part of a configuration, you can hide the visibility of joints (and their links), poly lines, and control objects in the viewport. You also have the option to modify how your joint links will appear in the viewport.
All visualization configuration settings will automatically bubble up to the input skeleton’s HDA character.
## PARAMETERS
Configurations
This multiparm allows you to create and manage multiple visualization set-ups for the same input skeleton.
Group
Specifies the joint or list of space-separated joints that will use the visualization settings from a given **Configurations** multiparm.
This field accepts the `@name` joint name syntax. For example, a single joint like `@name=rFoot` or a list of joints like `@name=rFoot` `@name=lFoot` `@name=rKnee` `@name=lKnee`.
If you leave this field empty, all the joints and control objects on the input skeleton will use this multiparm’s visualization settings.
Joint Display
Determines which input skeleton components are visible in the viewport.
Show Joint
When on, the joints and their links for the specified **Group** joints are visible in the viewport.
Show Polygon Lines
When on, the poly lines for the specified **Group** joints are visible in the viewport.
Show Packed Geometry
When on, the control objects linked to the specified **Group** joints are visible in the viewport.
Link Scaling
Determines the _width_ of the input skeleton’s joint links in the viewport based upon their _length_.
This is a mapping of the link length (distance from parent to child) onto the range given in the **Width Low** and **Width High** parameters.
For any link whose length falls in between the **Length Low** and **Length High** values, its width will be _scaled_ by the corresponding value in between the **Width Low** and **Width High** values. Any link with their length outside this range will have their width clamped to the values given in the **Width Low** or **Width High** parameters.
These parameters are only available when **Show Joint** is turned _on_.
Example: Adjusting link scaling width
Length Low
The lower bound for the link length used for width scaling. Any links whose length is equal to or less than this value will have their width clamped to the **Width Low** parameter’s value.
Length High
The upper bound for the link length used for width scaling. Any links whose length is equal to or greater than this value will have their width clamped to the **Width High** parameter’s value.
Width Low
Sets the width of any links whose length is equal to or less than the **Length Low** parameter’s value.
Width High
Sets the width of any links whose length is equal to or greater than the **Length High** parameter’s value.
## INPUTS
The input SOP skeleton to configure the joint (and their links), poly line, and control object visualization behaviors for.
## OUTPUTS
The input SOP skeleton with defined visibility and visualization behaviors.
Note
These defined visualization behaviors are inherited by any parent HDA.
See also
!Rig Pose#Rig Pose Geometry
