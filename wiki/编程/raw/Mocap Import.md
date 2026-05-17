---
type: concept
title: Mocap Import
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "8300c1859999"
---
解析并导入运动捕捉数据作为几何图形。
### Parameters
The Mocap Import SOP node parses and imports motion capture data as geometry. It can parse Biovision (`.bvh`), Acclaim (`.asf`, `.amc`), and Motion Analysis (`.trc`) data. This node creates an animated wireframe SOP skeleton using the position data and world transformation matrices from the motion capture joints.

## PARAMETERS

## Import

File Type

Determines which motion capture format the node uses to parse the motion capture data.

Acclaim (.amc; .asf)

Parses the motion capture data using the Acclaim format.

BioVision (.bvh)

Parses the motion capture data using the BioVision format.

Motion Analysis (.trc)

Parses the motion capture data using the Motion Analysis format.

Acclaim (.amc; .asf)

These parameters are only available when **File Type** is set to **Acclaim (.amc; .asf)**.

Acclaim Skeleton File

Specifies the Acclaim skeleton description file to import.

Acclaim Motion Capture File

Specifies the Acclaim motion data file to import.

Align Nodes with Axes

If this is enabled, each node will be rotated so that its initial orientation is equal to the node’s 'axis' which is defined within the **Acclaim Skeleton File**.

Add Leaf Nodes

If this is enabled, additional nodes will be added after the leaves of the skeleton defined within the **Acclaim Skeleton File**.

These new leaf nodes represent the bones which are defined by the 'offset' value of the leaves within the **Acclaim Skeleton File**.

BioVision (.bvh)

These parameters are only available when **File Type** is set to **BioVision (.bvh)**.

BioVision Motion Capture File

Specifies the BioVision skeleton description and motion data file to import.

Motion Analysis (.trc)

These parameters are only available when **File Type** is set to **Motion Analysis (.trc)**.

Motion Analysis TRC File

Specifies the Motion Analysis motion data file to import.

Motion Analysis Parent File

Specifies the Motion Analysis skeleton description file to import.

Import All Nodes

When on, the Mocap Import node imports all the nodes defined in the **Motion Analysis TRC File**, even if they are _not_ defined in the **Motion Analysis Parent File**. You can also designate one of the imported nodes as the root node using the **Root Node** parameter.

Clip Name

Specifies a name for the animation clip. This is saved to the `clipinfo` detail attribute.

Root Node

Specifies the node that is treated as the root node when creating the SOP skeleton.

Compute Rotations using Forward Kinematics

When on, the node recomputes the rotations of the SOP skeleton’s nodes using forward kinematics.

Configuration Attribute

If this is enabled, a dictionary point attribute with this name will be created on the skeleton. For all file types, the rotation order which was used to compute the 'transform' attribute of the node will be in this dictionary. When **File Type** is set to **Acclaim (.asf; .amc)**, rotation and translation limits are also included in this dictionary based upon the 'limits' defined within the **Acclaim Skeleton File**.

Color

Sets the color of the wireframe skeleton.

Scale

Sets the universal scale for the motion capture data.

Frame Rate

When on, specifies the frame rate of the motion capture data. When off, the node uses the frame rate specified in the motion capture data file.

Reload

Forces a full reload of the motion capture data.

## Timing

Method

The time units for specifying animation parameters.

By Time

The timing parameters below will be specified in seconds.

By Frame

The timing parameters below will be specified in frames.

Time

The time (in seconds) to import the animated pose from.

Animation Start

The time at which the _source_ animation starts, earlier poses will be clamped to this value. When disabled, this value is taken from the source animation where available. If it has no range information, Houdini’s scene start (`$TSTART`) value will be used.

Note that no clamping is done when this is disabled.

Animation End

The time at which the _source_ animation ends, later poses will be clamped to this value. When disabled, this value is taken from the source animation where available. If it has no range information, Houdini’s scene end (`$TEND`) value will be used.

Note that no clamping is done when this is disabled.

Playback Start

The destination time at which the specified animation will begin to playback. When disabled, Houdini’s scene start (`$TSTART`) value is used.

Frame

The number to import the animated pose from.

Animation Start

The frame at which the _source_ animation starts, earlier poses will be clamped to this value. When disabled, this value is taken from the source animation where available. If it has no range information, Houdini’s scene start (`$FSTART`) value will be used.

Note that no clamping is done when this is disabled.

Animation End

The frame at which the _source_ animation ends, later poses will be clamped to this value. When disabled, this value is taken from the source animation where available. If it has no range information, Houdini’s scene end (`$FEND`) value will be used.

Note that no clamping is done when this is disabled.

Playback Start

The destination frame at which the specified animation will begin to playback. When disabled, Houdini’s scene start (`$FSTART`) value is used.

Speed

Sets the speed factor for the playback of the animation. This is applied after any clamping is performed from the Animation Start/End parameters.

## OUTPUT

An animated skeleton with data parsed from the motion capture files.

## ATTRIBUTES

clipinfo

This detail attribute records the current animation range and sample rate as well as the original animation range and sample rate of the imported animation.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-usdanimimport.svg) USD Animation Import](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--usdanimimport.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-fbxanimimport.svg) FBX Animation Import](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--fbxanimimport.html)