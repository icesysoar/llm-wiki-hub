---
type: concept
title: Frame Depedency
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "e6d6ac63164d"
---
允许一个输出帧依赖于一个或多个输入帧。
### Parameters
Certain rendering operations require more than one input frame to produce an output frame, like motion blur. This ROP allows you to specify any number of input frames for any output frame.

Input frame dependencies that are relative to the output frame can be represented by offsets from `$F`. ie, the next `($F+1)` and previous `($F-1)` frame.

## PARAMETERS

Render

Begins the render with the last render control settings.

Controls…

Opens the render control dialog to allow adjustments of the render parameters before rendering.

## Frame Dependency

Frame Depends On

The frame dependency can either be specified as a list of frames, or a frame range.

Frame Range

The output frame depends on a small range of frames in the input.

Current Frame and Previous

The output frame depends on the same input frame and the previous integer frame.

Current Frame and Next

The output frame depends on the same input frame and the next integer frame.

List of Frames

The output frames depends on a series of frames that cannot be represented by a range.

Frame Range

The frame range of the input that an output frame depends on.

Frames

The number of dependencies in the list of frame dependencies.

Frame Dependency 1,2,..

Each frame dependency has a separate field.

## LOCALS

N

Frame being rendered.

NRENDER

Total number of frames being rendered.