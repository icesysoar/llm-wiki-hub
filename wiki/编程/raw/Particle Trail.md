---
type: concept
title: Particle Trail
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "aea13a919f93"
---
从传入的粒子中生成轨迹，可用于渲染火花、焰火和雨。
### Parameters
## Overview
The [Particle Trail SOP](https://www.sidefx.com/docs/houdini/nodes/sop/particletrail.html "Generates trails from the incoming particles that can be used to render sparks, fireworks, and rain.") takes an animated particle system and generates motion trails from its particles. These trails can be used for various effects such as sparks, fireworks, and rain. This node also allows you to control the look of the trails. This enables you to fine-tune their look in the SOP context, without the need to render the points with large amount of motion blur.
Particles from simulation and the generated particle trails.
![](https://www.sidefx.com/docs/houdini/images/sop/particletrail.png)![](https://www.sidefx.com/docs/houdini/images/sop/particles.png)
In addition, the Particle Trail node can generate split trails to mimic the look of bursting sparks or splashing rain. The generated splits are only approximations of the real physical behavior you could achieve with a particle simulation. Using this node has the benefit of providing faster iteration times without the need of complex particle simulation setups, while giving you more directable controls over the splits.
Particle trails with and without splitting enabled.
![](https://www.sidefx.com/docs/houdini/images/sop/particletrail_split.png)![](https://www.sidefx.com/docs/houdini/images/sop/particletrail_nosplit.png)
Note
This node uses in-between frames to sample the motion trails, but does not perform any interpolation between integer frames. Therefore, you have to make sure its inputs can evaluate on fractional frames. DOP networks do not use the `id` attribute to match particles from different frames, so it will produce incorrect interpolation when particles die out.
You can use the **Quick Setups** menu to append a [Time Blend SOP](https://www.sidefx.com/docs/houdini/nodes/sop/retime.html "Retimes the time-dependent input geometry.") before the Particle Trail SOP to properly interpolate based on the `id` attribute. This will wire in a Time Blend node before the Particle Trail node with all the required settings. Alternatively, both nodes are created for you automatically in the network editor if you press ⇥ Tab and type **Sparks**.
Tip
As the generated trails are built from the motion of the particles, you must disable motion blur in your render. To capture camera motion blur, enable **Bake Camera Motion** on the **Motion** tab of this node.
When the input comes from a particle simulation, it must contain the following attributes:
-   `life` point attribute, storing the prescribed lifetime of the particle.
-   `age` point attribute, storing the current age of the particle.
-   The integer **Seed Attribute** (`id` by default), storing the unique identifier for each particle.
When the input to this node comes from the [Ballistic Path SOP](https://www.sidefx.com/docs/houdini/nodes/sop/ballisticpath.html "Generates ballistic projectile paths from the incoming points."), it must contain the following attributes:
-   `time` point attribute, storing the time when the particle is at a given position on the ballistic path.
-   The integer **Seed Attribute** (`id` by default) on the primitives, storing the unique identifier for each ballistic path.
For more information on [changing the look of sparks](https://www.sidefx.com/docs/houdini/pyro/sparks.html#look), see the Sparks page in the Pyro chapter.
## Customizing trails
By default, all trails will have the same properties, as set by the node’s parameters (such as **Color**, **Alpha**, etc.). To vary these properties for each trail, select the **Set Varying** option on the menu next to the corresponding parameter. This will use a different random value in the provided range for each input point. These generated random numbers are seeded with a custom integer attribute set by **Seed Attribute** (`id` by default). This will ensure that randomized properties will remain the same for an input point even if points are shuffled or removed from the input, provided the value of the **Seed Attribute** stays the same.
You can also manually override parameter values with attributes. For example, if the input geometry has a `Cd` point attribute, its values can be used instead of the global **Color**. This allows you to finely control the color of each spark. To this end, the menu next to the corresponding parameter must also be set to **Use Attribute**.
Parameters that can be controlled by point attributes are listed in the table below.
Parameter Name
Range
Attribute Name
Attribute Type
Intensity
0 to ∞
`value`
float
Color
(0,0,0) to (∞,∞,∞)
`Cd`
vector
Alpha
0 to 1
`Alpha`
float
Length Start
0 to 1
`lenstart`
float
Length End
0 to 1
`lenend`
float
Tail Width
0 to ∞
`tailwidth`
float
Head Width
0 to ∞
`headwidth`
float
Split
0 to 1
`split`
integer
Splits per Point
0 to ∞
`splitnum`
integer
Split Start Angle
0 to 180
`split_startangle`
float
Split End Angle
0 to 180
`split_endangle`
float
Split Velocity Scale
0 to ∞
`split_vscale`
float
Split Duration
0 to ∞
`splitdur`
float
## PARAMETERS
General
Quick Setups
This menu lets you run some simple scripted setups to help with the most common tasks.
Time Blend Input
Creates a [Time Blend](https://www.sidefx.com/docs/houdini/nodes/sop/retime.html "Retimes the time-dependent input geometry.") node to interpolate in-between frame position.
Create Material
Creates and assigns a [Principled Shader](https://www.sidefx.com/docs/houdini/nodes/vop/principledshader.html "An artist-friendly shader that can model a large number of materials realistically.") material to the generated trails.
Vary Split Color
Creates an [Attribute Adjust Color](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustcolor.html "Modifies values for a vector-type color attribute on the incoming geometry.") node downstream that modifies the color attribute for the split particles.
Group
The subset of the input geometry that will be used to generate trails. Leave this blank to affect all elements.
Substeps
The number of samples to take between **Shutter Open** and **Shutter Close**. This will increase the number of points in each trail and allows you to create curved trails.
Seed Attribute
Topology changes on the input geometry can shift element numbers, causing a different random selection to be used. **Seed Attribute** lets you provide an integer attribute to make sure the random value is not dependent on element order.
## Look
Alpha
Alpha
Controls the overall opacity of the trail. Lower this value to make the trails more transparent.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. Opacity will be between `Alpha - Variation` and `Alpha + Variation`.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Scale Along Length
Provides a ramp to control the opacity values over the length of the trails.
Alpha Along Length Ramp
Controls how the opacity values change across the length of the trail. The left side is the tail of the trail, while the right side of the ramp represents the head of the trail.
Scale Over Normalized Age
Provides a ramp to control the opacity values over the lifetime of the trails.
Alpha Over Normalized Age Ramp
Controls how the opacity values change over the lifetime of the trail. The left side is the birth of the particle, while the right side represents its end.
Intensity
Scale
Sets the emission intensity for the trail. Increase this value to make the trails brighter. This value acts as a multiplier on the color of the trail.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. Intensity will be between `Scale - Variation` and `Scale + Variation`.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Scale Along Length
Provides a ramp to control the intensity values over the length of the trails.
Intensity Along Length Ramp
Controls how the intensity values change across the length of the trail. The left side is the tail of the trail, while the right side of the ramp represents the head of the trail.
Scale Over Normalized Age
Provides a ramp to control the intensity values over the lifetime of the trails.
Intensity Over Normalized Age Ramp
Controls how the intensity values change over the lifetime of the trail. The left side is the birth of the particle, while the right side of the ramp represents its end.
Color
Color
Controls the overall color of the trail. To get more natural looking trails/sparks change the menu on the right side of this parameter from **Constant** to **Use Ramp** or **Specific Values**. When the menu is set to **Sample Ramp** or **Specific Values**, the value will act as a multiplier on the color values.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Hue Shift Variation
This value is the angle along the color wheel to shift the input color. The starting color is given by the **Color** parameter.
Saturation Variation
This value acts as a multiplier on the saturation of the input color. The starting color is given by the **Color** parameter.
Value Variation
This value acts as a multiplier on the brightness of the input color. The starting color is given by the **Color** parameter.
Color Ramp
Controls how the color is mapped to the trails. Every trail samples a random position on this ramp.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Color Palette
This menu contains a set of pre-defined color palettes. Selecting one of these options will populate the list of specific values with four preset colors.
Number of Colors
Controls the number of sets of possible colors. Each set can be a single color or consist of multiple related colors (when the menu to the right of the parameter is not set to **Constant** or **Complementary**).
Color Along Length
Provides a ramp to control the color values over the length of the trails.
Color Along Length Ramp
Controls how the color values change across the length of the trail. The left side is the tail of the trail, while the right side of the ramp represents the head of the trail.
Color Over Normalized Age
Provides a ramp to control the color values over the lifetime of the trails.
Color Over Normalized Age Ramp
Controls how the particle trail colors change over their lifetime. The left side is the birth of the particle, while the right side represents its end.
## Split
Split
Enable Split
Enables the splitting of the trails to mimic the look of bursting sparks or splashing rain. The generated splits are only approximations of the real physical behavior you could achieve with a particle simulation. However, using the Particle Trail node has the benefit of providing faster iteration times without the need for complex particle simulation setups. It also gives you more directable controls over the splits, which happen near the end of the particle’s lifetime. **Split Duration** is the number of frames between the split and the particle’s death.
Percent to Split
Controls the number of input particles to use for splitting. The value of `100` means all particles will split, while the value of `0` means no splitting.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Seed
When **Percent to Split** is less than `100`, controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Delete Source Trails after Splitting
Keeps the trails from the splits, but removes the trail for the input particles after the split.
Shape
Splits per Point
The number of splits to generate per input point. Increase this parameter to generate more splits. Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. The number of copied points will be between `Splits per Point - Variation` and `Splits per Point + Variation`.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Split Start Angle
Sets the minimum angle the generated splits can spread out from the velocity direction of the particle.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. The angle will be between `Split Start Angle - Variation` and `Split Start Angle + Variation`.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Split End Angle
Sets the maximum angle the generated splits can spread out from the velocity direction of the particle.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. The angle will be between `Split End Angle - Variation` and `Split End Angle + Variation`.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Split Velocity Scale
Controls the velocity of the split trails relative to the source particle’s velocity. Increase this value to make the split trails move further.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. The angle will be between `Split Velocity Scale - Variation` and `Split Velocity Scale + Variation`.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Offset per Split
Controls the range of speeds inherited by split particles. Larger values result in greater variation among speeds of trails split from the same source particle. You need to turn on this checkbox to vary velocity scale for the split trails generated from the same input particle.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Split Path
Straight
The split trail moves in a straight line in the direction of its split angle.
Ballistic
Split trails will move along a generated ballistic path to approximate real physical behavior. This is a slower since the ballistic paths are generated on every frame, but the split trajectories will be affected by gravity.
Gravity
Sets the force that attracts the projectile towards the ground. Set all components to zero if you want straight trails, which are not affected by gravity.
Drag
Sets the air resistance for the projectile. Higher values will result in faster loss of energy and shorter travel distance. **Drag** of zero will produce a symmetric arc. If the incoming geometry has a `drag` point attribute, its value will be used instead of this parameter.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
![](https://www.sidefx.com/docs/houdini/images/sop/ballisticpath_drag.jpg)
Ballistic paths with **Drag** values from left to right : 3, 2, 1, 0.5, 0.
Mass
Sets the mass for the projectile. Higher values will cause the projectile to more strongly resist drag and travel a longer distance. If the incoming geometry has a `mass` point attribute, its value will be used instead of this parameter.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
![](https://www.sidefx.com/docs/houdini/images/sop/ballisticpath_mass.jpg)
Ballistic paths with **Mass** values from left to right : 0, 0.5, 1, 2, 3.
![](https://www.sidefx.com/docs/houdini/images/sop/ballisticpath_dragmass.png)
Combined view of **Drag** (yellow) and **Mass** (green) values.
Clip Height
The height to use for clipping. Trajectories will terminate once the Y-value falls below this value. If particles start below this height, they will be clipped when they fall below their initial height instead.
Enable Speed Ramp
When enabled, controls the speed of split trails over their lifetime.
Speed Ramp
Controls how the speed values change over the lifetime of the split trail. The left side is the birth of the particle, while the right side of the ramp represents its end.
Duration
Split Frame Duration
Sets the life of the split trails in frames. Increase this value to make the split trails visible for longer.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. The angle will be between `Split Velocity Scale - Variation` and `Split Velocity Scale + Variation`.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Offset per Split
Sets the maximum allowed life extension for each split trail. You need to turn on this checkbox to vary the life for the split trails generated from the same input particle.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
## Shape
Length
Trail Method
Controls how the length of the trail is generated.
Frame
Sets the length of the trails by given the number of past frames.
Shutter
Sets the length of the trails according to the camera’s shutter open and shutter close either using past or future frames.
Frame Duration
Sets the number of past frames to use to trail the particles.
Shutter Open
Shutter-open time, relative to the current time. This is used to calculate motion blur, and affects trial lengths. You can use a negative value to indicate that the shutter opens _before_ the current time.
Shutter Close
Shutter-close time, relative to the current time. This is used to calculate motion blur. Larger difference between **Shutter Close** and **Shutter Open** will result in longer trails. If this is not greater than **Shutter Open**, then the trails will have no length.
Length Start
Controls the relative length of the trail. Increase this value to make the trails shorter starting from the tail.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. Tail width will be between `Tail Width - Variation` and `Tail Width + Variation`.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Length End
Controls the relative length of the trail. Increase this value to make the trails shorter starting from the tail.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. Tail width will be between `Tail Width - Variation` and `Tail Width + Variation`.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Bake Camera Motion
When **Trail Method** is set to **Shutter** and this checkbox is on, the trails are generated considering the motion of the camera (specified by **Camera**). When you render with a moving camera, it is necessary to compensate for the camera’s motion as the trails needs to be rendered without any motion blur enabled. You must view the trails from the viewpoint of the camera for the results to look correct.
Add Positional Noise
Varies the point position of the trails using a noise pattern to add a bit of a wobble to the sparks, which results in more interesting/fuzzy looking sparks. This can be useful if you're trying to create a magical effect, or simulate ribbons shooting out of a cannon.
Amplitude
Sets the strength of the noise.
Element Size
Controls the base feature size of the generated noise.
Offset
Offsets the features of the noise pattern. Change the value of the **Offset** if the current pattern is undesirable.
Width
Width
Controls the overall thickness of the trail. Increase this value to make the trails thicker. To vary the thickness across the length of the trail, use the **Tail Width** and **Head Width** parameters.
Tail Width
Controls the thickness at the tail of the trail. Increase this value to make the trails thicker at the tail. Thickness along the trail is linearly interpolated between **Head Width** and **Tail Width**.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. Tail width will be between `Tail Width - Variation` and `Tail Width + Variation`.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Head Width
Controls the thickness at the head of the trail. Increase this value to make the trails thicker at the head. Thickness along the trail is linearly interpolated between **Head Width** and **Tail Width**.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. Head width will be between `Head Width - Variation` and `Head Width + Variation`.
Seed
Controls random selection for variation. Change the value of the **Seed** if the current variation is undesirable.
Scale Along Length
Provides a ramp to control the width values over the length of the trails. The evaluated ramp value is multiplied by the interpolated value from **Head Width** and **Tail Width** to obtain the actual width.
Width Along Length Ramp
Controls how the width values change across the length of the trail. The left side is the tail of the trail, while the right side of the ramp represents the head of the trail.
Scale Over Normalized Age
Provides a ramp to control the width values over the lifetime of the trails.
Width Over Normalized Age Ramp
Controls how the width values change over the lifetime of the trail. The left side is the birth of the particle, while the right side of the ramp represents its end.
Scale by Noise
Varies the width values across the length of the trail using noise pattern. The value of the noise pattern will be used as a multiplier on the width. Use this to create more interesting-looking trails.
Amplitude
Sets the strength of the noise.
Element Size
Controls the base feature size of the generated noise.
Offset
Offsets the features of the noise pattern. Change the value of the **Offset** if the current pattern is undesirable.
Minimum Width
When the checkbox is on, widths are clamped against the provided minimum, after the noise is applied.
## Output
Trails
Output Particle Trails
Particle trails will be generated when this parameter is on. Disable this (and make sure **Output Split Trails** is enabled) if you only want to generate split trails without input particle trails.
Output Split Trails
Split trails will be generated when this parameter is on.
Particle Trail Group
When enabled, a primitive group of this name will be created to contain particle trails.
Split Trail Group
When enabled, a primitive group of this name will be created to contain split trails.0
Attributes
Split Index
The point attribute storing the index number of the generated split trails.
Split Hash
The point attribute storing a unique hash number of the generated split trails. This number is generated from the combination of the seed attribute (as set by **Seed**) and the split index.
Normalized Split Age
The point attribute storing a zero to one value, which start to increase from 0 when the split trail is created until 1 when the split trail is killed.
Relative Position
The point attribute storing the relative position of each point along the trail.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribadjustinteger.svg) Attribute Adjust Integer](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustinteger.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribadjustvector.svg) Attribute Adjust Vector](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustvector.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribadjustcolor.svg) Attribute Adjust Color](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustcolor.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribnoise.svg) Attribute Noise](https://www.sidefx.com/docs/houdini/nodes/sop/attribnoise.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/ballisticpath.svg) Ballistic Path](https://www.sidefx.com/docs/houdini/nodes/sop/ballisticpath.html)