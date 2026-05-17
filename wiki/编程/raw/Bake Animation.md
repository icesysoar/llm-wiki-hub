---
type: concept
title: Bake Animation
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "ac53e423fa09"
---
生成基于磁盘的档案，可由mantra或RIB渲染器使用。
### Parameters
This node bakes animation from a list of objects onto another list of objects.

It can be used to transfer local parameter animation in the same way you would copy channels using Copy/Paste Expressions/Channels in the Parameter Editor.

It also supports baking object transforms in world space, and baking the results of object constraints to keyframes. When baking, new keyframes is added based on the `Sample Rate`. At a rate of 24, 24 keys will be added per second. Try keeping it to the same value as your scene `$FPS`.

The `Source Objects` node list defines which object nodes to read the animation from. The `Target Objects` node list defines which object nodes to write the animation to. The order of `Source Objects` and `Target Objects` is important, since it defines the relationship between each source and target objects pairs. You can also use patterns to build your lists.

For example, you can get all the rig controls out of the [Simple Female](https://www.sidefx.com/docs/houdini/nodes/obj/simplefemale.html "A simple and efficient female character animation rig with full controls.") rig by using: `/obj/simplefemale1/ctrl_%`.

The `Parameters` filter string defines which parameters will be copied and which parameters the transform baking will write to. It matches the source parameter names. It supports pattern matching strings such as `t[xyz] r[xyz] s[xyz]`, which expands to `tx ty tz rx ry rz sx sy sz`.

## PARAMETERS

Frame Range

Allows specification of a range of frames to render.

Start/End/Inc

Specifies the first and last frames and the increment. Note that when rendering a sequence of images with a fraction Inc, `$N` is the number of the frame rendered, $F is the nearest integer frame number, `$FF` is the floating point frame number.

Sample Rate

The sample rate used when baking keyframes.

Source Objects

The list of object nodes to read the animation from. When baking a rig, you need to select the controllers inside of the HDA.

Target Objects

The list of object nodes to write the animation to. This can be the same as the `Source Objects` if you want to bake the animation from constraints or CHOP overrides.

Parameters

Defines which parameters will be copied and which parameters the transform baking will write to. It matches the source parameter names.It supports pattern matching strings such as `t[xyz] r[xyz] s[xyz]`, which expands to `tx ty tz rx ry rz sx sy sz`. You could want to also list the `scale` `p[xyz]` and `pr[xyz]` if you want to transfer the uniform scale, pivot and pivot rotate parameters.

Copy Animation from Parameters

Copy the all the animation and parameter values from the source parameters to the target parameters. This runs first before the baking process takes place. It is important to note that the copy operation follows channels references and will bake the result on the top level HDA.

Copy World Transforms

Copy the World Transforms from the source objects to the target objects. It ignores objects that have constraints applied.

Copy Constraints Transforms

Copy the World Transforms from the source objects to the target objects if objects have constraints applied.

Hierarchical Copy Order

When baking transforms onto a different hierarchy it is important to bake the parent objects first and to follow the hierarchy. This sorts the list of source and targets based on the target hierarchy.

Log

A multi-line string that is filled with all the log messages during the baking. This can be useful for debugging the baking process.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/CHANNELS/bake_keys.svg) Bake Constraints](https://www.sidefx.com/docs/houdini/shelf/bakeconstraints.html)