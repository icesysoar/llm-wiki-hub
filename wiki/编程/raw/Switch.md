---
type: concept
title: Switch
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "cf14619768b7"
---
渲染几个输入中的一个。
### Parameters
The Switch ROP controls render dependency flow by selecting one input to render. The index may be animated.

Switch is often used to select one of several similar renders such as a fast preview render or a final, detailed render. It can also be used to dynamically lock a branch by selecting the branch, or no input).

Note

Bypassing a switch causes all input dependencies to be passed through to its outputs.

Tip

To render none of the inputs, use a number that doesn’t correspond to any input such as -1 or 10000.

## PARAMETERS

Render

Begins the render with the last render control settings.

Controls…

Opens the render control dialog to allow adjustments of the render parameters before rendering.

Input Index

Specifies the input to select, starting at 0. If this is set to -1, the Switch ROP will not pass through any input.

## LOCALS

N

Frame being rendered.

NRENDER

Total number of frames being rendered.