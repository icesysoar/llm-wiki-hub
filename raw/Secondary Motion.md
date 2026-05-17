---
type: concept
title: Secondary Motion
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "0549ab6aa6f4"
---
为静态或动画输入的KineFX关节、骨架或角色添加二次运动效果。
### Parameters
This node applies various motion [effects](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--secondarymotion.html#effects) like Overshoot, Lag, Jiggle, and Spring to a series of point attributes by computing their change over time.
Active Points
Displays the currently selected joints. This parameter is disabled and does _not_ modify the scene geometry in any way and is solely used by the viewer state.
Joint Group
Specifies the group of joints to apply the effect to.
Use Driver Joint
Specifies whether to use a custom joint to drive the effect applied to the **Joint Group**.
Driver Joint
When **Use Driver Joint** is enabled, specifies the joint to read the animated data (`localtransform` or other attributes) from, apply the effect on top of, and then drive the **Joint Group**.
Notes
-   The driver joint itself will _not_ be modified.
-   You can only select a single driver joint.
Clip Range
Read the frame range from the clipinfo detail attribute on the input geometry or set a custom range.
Frame Range
The custom frame range of the animation. When **Clip Range** is set to **Use clipinfo Detail Attribute**, this parameter is disabled. Use the action button on this parameter to populate it with values from the clipinfo detail attribute, from the scene frame range or from the playback frame range.
Tip
The _MotionClip_ inside this node will also be computed at this frame range, so if you want to only affect a portion of the full animation, set this frame range to the full clip range and use the [Blend](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--secondarymotion.html#blend) parameters to apply the effect to only a specific portion of the clip.
Mode
Determines which **Joint Group** point attributes to affect with the secondary motion.
Local Transform
The secondary motion affects the `localtransform` on the specified **Joint Group** joints.
Other Attribute
The secondary motion affects the custom attribute specified in the **Attributes** field.
Attributes
Specifies the point attributes on the **Joint Group** for the secondary motion to affect.
You can specify your own custom attribute or select from the following list: **Color (Cd)**, **Position (P)**, **rest_transform**, or **transform**. **Attributes** is **P** by default.
This parameter is only available when **Mode** is set to **Other Attribute**.
Note
The following attribute types are supported: `float`, `vector2`, `vector`, `3x3 matrix`, `4x4 matrix`.
Tip
If the specified attribute is a vector describing an Euler rotation (for example, the result of running a `cracktransform` on a transformation matrix), for better results try to run it through an Euler filter first (for example, try cracking it using [Attribute Transform Extract](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attribtransformextract.html "Decomposes transform point attributes into their component pieces and applies an Euler filter to the rotation component")). Alternatively, you can supply the transformation matrix to the node directly and it will take care of the filtering for you.
Modify in Place
When on, the node modifies the input animation directly or outputs the resulting MotionClip only. The MotionClip output will always have the secondary motion effect applied.
Use Configuration Attribute
When on, applies transformation limits (as defined by a [Configure Joints SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--configurejoints.html)) to the **Joint Group**.
Note
Setting the `rotation_weights` or `translation_weights` to **0** will zero out
Tip
This is useful for preventing intersections caused by the motion effect.
Configuration Attribute
Specifies the name of the configuration point attribute that is used by **Use Configuration Attribute**.
Use Rest Pose Attribute
When on, use a point rest transform attribute to properly apply the `localtransform` from the **Driver Joint** to the **Joint Group** when their orientations are different.
Tip
If the joints in the **Joint Group** have the same orientation as the driver joint, using a rest transform is _not_ required.
Rest Pose Attribute
Specifies the name of the rest transform point attribute that is used by **Use Rest Pose Attribute**.
Use Rest Pose Attribute to Apply Limits
When on, applies the transformation limits (defined by the [Configuration Attribute](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--secondarymotion.html#configurationattribute)) from the rest pose specified by [Rest Pose Attribute](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--secondarymotion.html#restposeattribute) instead of from the rest pose that the limits were defined in.
When defining transformation limits (with the [Configure Joints SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--configurejoints.html) node for example), a `rest_xform` key is added to the dictionary attribute that specifies the rest pose in which the limits were configured. This parameter allows you to overwrite that rest pose with the one specified by [Rest Pose Attribute](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--secondarymotion.html#restposeattribute).
Extract Transform
Selects which components of the matrix you want to affect for matrix attributes.
Transform Order
Sets the order of transformations that is used when cracking and rebuilding transformation matrices.
Rotation Order
Sets the order of rotations that is used when cracking and rebuilding transformation matrices.
Effect Multiplier
Scales or multiplies the strength of the secondary motion effect.
## Effects
Effect
Determines which effect to apply.
Lag/Overshoot
Amplifies the changes in the input data.
Lag
Lags the changes in the input data.
Lag
Sets the amount of lag. The first value controls the overshoot effect when the velocity is rising, and the second value controls when the velocity is decreasing.
Choose whether to drive the effect using parameter values or by reading in a point attribute.
Default
Use the **Lag** parameter to drive effect.
Overwrite with Attribute
Use the specified point attribute to drive effect.
Scale by Attribute
Scale the **Lag** parameter by the point attribute and use it to drive the effect.
Lag Attribute
Specifies the name of the point attribute to drive the secondary motion effect with.
Overshoot
Sets the amount of overshoot. The first value controls the overshoot effect when the velocity is rising, and the second value controls when the velocity is decreasing.
Choose whether to drive the effect using parameter values or by reading in a point attribute.
Overshoot Attribute
Specifies the name of the point attribute to drive the secondary motion effect with.
Jiggle
Creates a jiggling effect in the input data.
Stiffness
Sets how tight the jiggle is. Values closer to zero cause more deviation from the original data. Values closer to one result in very close solutions.
Default
Use the **Stiffness** parameter to drive effect.
Overwrite with Attribute
Use the specified point attribute to drive effect.
Scale by Attribute
Scale the **Stiffness** parameter by the point attribute and use it to drive the effect.
Jiggle Stiffness Attribute
Specifies the name of the point attribute to drive the secondary motion effect with.
Damping
Sets the amount of damping on the jiggle oscillations. More damping reduces the oscillation generated by abrupt changes in direction.
Default
Use the **Damping** parameter to drive effect.
Overwrite with Attribute
Use the specified point attribute to drive effect.
Scale by Attribute
Scale the **Damping** parameter by the point attribute and use it to drive the effect.
Jiggle Damping Attribute
Specifies the name of the point attribute to drive the secondary motion effect with.
Limit
Sets the limit for how far away the point is allowed to stray from the original data before it starts to be pulled towards it.
Default
Use the **Limit** parameter to drive effect.
Overwrite with Attribute
Use the specified point attribute to drive effect.
Scale by Attribute
Scale the **Limit** parameter by the point attribute and use it to drive the effect.
Jiggle Limit Attribute
Specifies the name of the point attribute to drive the secondary motion effect with.
Flex
Sets the strength of the spring. Larger values cause more stray from the original data.
Default
Use the **Flex** parameter to drive effect.
Overwrite with Attribute
Use the specified point attribute to drive effect.
Scale by Attribute
Scale the **Flex** parameter by the point attribute and use it to drive the effect.
Jiggle Flex Attribute
Specifies the name of the point attribute to drive the secondary motion effect with.
Multiplier
Controls the post-scaling effect on the result.
Default
Use the **Multiplier** parameter to drive effect.
Overwrite with Attribute
Use the specified point attribute to drive effect.
Scale by Attribute
Scale the **Multiplier** parameter by the point attribute and use it to drive the effect.
Jiggle Multiplier Attribute
Specifies the name of the point attribute to drive the secondary motion effect with.
Warning
Only **Attributes** of type `vector` or `matrix` (because internally they are cracked to vectors) are supported by the jiggle effect.
Spring
Applies a vibration effect moving with the velocity computed from the input data, creating an effect like a mass attached to a spring.
Spring Constant
A number describing how strong the spring is. Larger spring constants produce higher frequency oscillations.
Default
Use the **Spring Constant** parameter to drive effect.
Overwrite with Attribute
Use the specified point attribute to drive effect.
Scale by Attribute
Scale the **Spring Constant** parameter by the point attribute and use it to drive the effect.
Spring Constant Attribute
Specifies the name of the point attribute to drive the secondary motion effect with.
Mass
The mass of the object on the end of the spring. Higher masses will produce lower frequency oscillations, have higher amplitudes, and be more resistant to damping.
Default
Use the **Mass** parameter to drive effect.
Overwrite with Attribute
Use the specified point attribute to drive effect.
Scale by Attribute
Scale the **Mass** parameter by the point attribute and use it to drive the effect.
Spring Mass Attribute
Specifies the name of the point attribute to drive the secondary motion effect with.
Damping
The amount of damping (resistance) applied to the spring action. Higher damping causes oscillations to die off more quickly.
Default
Use the **Damping** parameter to drive effect.
Overwrite with Attribute
Use the specified point attribute to drive effect.
Scale by Attribute
Scale the **Damping** parameter by the point attribute and use it to drive the effect.
Spring Damping Attribute
Specifies the name of the point attribute to drive the secondary motion effect with.
## Gravity
When on, a gravitational-like effect is applied to the **Gravity Joint Group**.
Use Gravity
Perform a `lookat` operation for the **Gravity Joint Group** and have the joints point towards the **Gravity Force Direction**. This is similar to a Look At constraint.
Gravity Joint Group
Specifies the group of joints that the `lookat` affects.
Note
Only joints that are also listed in the [Joint Group](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--secondarymotion.html#jointgroup) can be selected.
Gravity Force Direction
Specifies the direction in which to orient the joints towards.
Blend
Sets how strongly the `lookat` should affect the joints.
Lookat
Specifies where to get the lookat vector from.
From Axis
Read the lookat vector from the **Lookat Axis** parameter.
From Point Attribute
Read the lookat vector from the **Lookat Attribute** point attribute.
Lookat Axis
Sets the axis of the joint that should point towards the **Gravity Force Direction**.
Lookat Attribute
Specifies the name of the lookat axis point attribute.
Note
The point attribute must be an integer that corresponds to the **Lookat Axis** parameter:
-   0: -X
-   1: -Y
-   2: -Z
-   3: X
-   4: Y
-   5: Z
Lookup Vector
Specifies where to get the lookup vector from.
From Axis
Read the lookup vector from the **Lookup Axis** parameter.
From Point Attribute
Read the lookup vector from the **Lookup Attribute** point attribute.
Lookup Axis
Sets the twist axis of the joint when performing the `lookat`.
Lookup Attribute
Specifies the name of the lookup axis point attribute.
Note
The point attribute must be an integer that corresponds to the **Lookup Axis** parameter.
-   0: -X
-   1: -Y
-   2: -Z
-   3: X
-   4: Y
-   5: Z
## Blend
Blends the selected **Frame Range** after the effect has been applied back to the original MotionClip using a [Motion Clip Blend SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--motionclipblend.html) node.
Blend Type
Sets which type of blending function that is use.
Linear
Linear shape.
Ease in
Smooth on entry.
Ease out
Smooth on exit.
Ease in Ease out
Smooth on entry and exit.
Bias
Specifies the bias of the blend. **0** biases toward the base, and **1** biases towards the applied effect.
Blend In
Enable Blend
When off, the applied effect will be immediately applied.
Start Frame
The frame at which to begin easing into the applied effect.
End Frame
The frame at which to finish easing into the applied effect.
Blend Out
Enable Blend
When off, the applied effect will not fade out.
Start Frame
The frame at which to begin easing out of the applied effect.
End Frame
The frame at which to finish easing out of the applied effect.
## INPUTS
Target Skeleton
The input skeleton to be processed.
MotionClip
The animated input skeleton in the form of a [MotionClip](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--motionclip.html). This input is useful when you want to chain multiple secondary motion nodes together and you want to avoid computing a new MotionClip for each node.
Tip
Turn off [Modify in Place](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--secondarymotion.html#modifyinplace) when you want to chain multiple nodes together and only turn it on it on the last node in the chain. This way you can save some computation time by passing the modifications through the MotionClip stream.
## OUTPUTS
Target Skeleton
The input skeleton with the effect applied.
MotionClip
The animated input skeleton after the effect has been applied, in the form of a [MotionClip](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--motionclip.html).
See also
-   [Adding secondary motion effects to characters](https://www.sidefx.com/docs/houdini/character/kinefx/secondarymotion.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-configurejoints.svg) Configure Joints](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--configurejoints.html)