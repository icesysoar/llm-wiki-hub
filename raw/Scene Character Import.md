---
type: concept
title: Scene Character Import
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "b93dcb59b746"
---
从场景（OBJ）上下文中创建一个带有动画的基于几何图形的角色。
### Parameters
This node imports a character from the Scene (OBJ-based) level to provide a full geometry-based character that can be then be directly deformed by a [Joint Deform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html "Perform skin deformation from KineFX skeleton animation.") SOP. The primary purpose of this node is provide a bridge from traditional OBJ-based characters for processing by the KineFX motion retargeting toolset which manipulates animated geometry-based skeletons.
This node will bake the animation internally and so after the first import, its animation will not change until the **Reload** button is pressed.
## PARAMETERS
## Import
Subnet Path
Path to the object subnetwork containing the character rig.
Traverse Outputs
When enabled, the **Character Rig** path is used to specify which nodes to import by traversing its outputs instead of its children.
Pattern
Pattern used to limit which nodes should be imported. Patterns using usual [opglob](https://www.sidefx.com/docs/houdini/commands/opglob.html "Expands a pattern into a list of operator names.") syntax along with [`@bundle` references](https://www.sidefx.com/docs/houdini/ref/panes/bundles.html) are accepted.
Note
Relative paths specified here are relative to this node, not to the **Character Rig**.
Type
Optional mask to further restrict which [object node types](https://www.sidefx.com/docs/houdini/nodes/obj/index.html "Object nodes represent objects in the scene, such as character parts, geometry objects, lights, cameras, and so on.") will be imported. Disable the toggles to prevent baking particular types.
Minimal Nodes
Only import objects whose display flags are on. If you turn this off, _all_ nodes in the character rig are imported into the animation clip.
Clip Name
Specifies a name for the animation clip. This is saved to the `clipinfo` detail attribute.
Rig Color
Point color to use for the skeleton joints.
Reload
Reloads the agent definition.
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
## ATTRIBUTES
clipinfo
This detail attribute records the current animation range and sample rate as well as the original animation range and sample rate of the imported animation.
## OUTPUTS
Rest Geometry
The character’s rest geometry.
Typically, this will contain polygons with the `boneCapture` point capture attribute, which can be deformed using the [Joint Deform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html "Perform skin deformation from KineFX skeleton animation.").
Capture Pose
The character’s capture pose.
Each joint in the skeleton is represented by a point, where the `P` and `transform` (`matrix3`) attributes contain the joint’s transform. The point’s `name` attribute contains the joint’s name, and is matched up with the capture paths in the rest geometry’s `boneCapture` attribute when deforming the skin. The skeleton’s hierarchy is represented by two-point polygons between the points for each child joint and its parent.
Animated Pose
The character’s animated pose, which is represented in the same manner as the **Capture Pose**.
See also
!FBXCharacterImport#FBX Character Import Geometry
!USD Character Import#USD Character Import Geometry