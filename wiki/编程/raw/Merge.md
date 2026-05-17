---
type: concept
title: Merge
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "dbd221966afc"
---
将多个渲染依赖项合并到一个呈现依赖项。
### Parameters
The Merge ROP takes several dependencies and merges them into one dependency. It has no other effect; it is mostly a wiring convenience.

Note

As Merge has no effect, bypassing a merge also has no effect. Locking a merge will still stop upstream renders, however.

Note

Set the incoming [Mantra ROPs](https://www.sidefx.com/docs/houdini/nodes/out/ifd.html "Renders the scene using Houdini’s standard mantra renderer and generates IFD files.") to Render Frame Range Only (strict), in order to render the correct frame range.

## PARAMETERS

Render

Begins the render with the last render control settings.

Controls…

Opens the render control dialog to allow adjustments of the render parameters before rendering.

## LOCALS

N

Frame being rendered.

NRENDER

Total number of frames being rendered.