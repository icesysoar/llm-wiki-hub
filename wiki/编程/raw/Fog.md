---
type: concept
title: Fog
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "70d47e8daeba"
---
为图像添加各种大气效果，包括雾、霾和热浪。
### Parameters
This operator adds a variety of atmospheric effects to an image, including fog, haze and heat waves. A plane containing the depth of the fog is required, normally depth (Pz) or a point plane (P).
The different fog effects are:
-   **Normal Fog** - As distance increases, the pixel color changes to the fog color.
-   **Additive Fog** - The fog color is added to the pixel color. Looks more “cloudy”.
-   **Haze** - As distance increases, the pixel’s saturation decreases, so distant pixels appear more gray.
-   **Heat Waves** - Adds a shimmering heat wave effect to distant pixels.
## Overloading VEX Parameters
This operator is implemented in VEX, which supports parameter overloading. If the first input has a plane which matches an operation parameter’s channel name, the input plane will be used as the parameter’s value, effectively overriding it. The overloaded parameter is then evaluated from the plane on a per-pixel basis.
_eg._ If the input COP has the following planes:
C{r,g,b}
A
fogdens
and it is fed into a VEX Fog COP, the fog density will be determined at each pixel by the fogdens plane, since the Fog Density parameter’s channel name matches the 'fogdens' channel name.
## Scoping
This operation may be restricted to certain planes, or components of planes. In addition, the operation may be applied to a subset of frames within the sequence. An image must have both its frame and plane scoped to be modified.
Images that are not modified are passed through, which does not take any memory or processing time.
## Masking
This operation may be masked, which restricts the operation to an area of the image. The mask may be inverted, brightened or dimmed.
The mask input is on the side of the node. The label on the connector indicates the plane being used as a mask.
The mask input can also be scaled to fit the output image’s resolution, if they differ. If this node is changing constantly, and the mask is not, it is somewhat faster to put a [Scale COP](https://www.sidefx.com/docs/houdini/nodes/cop2/scale.html "Changes the resolution of the image.") down to do the resize for the mask image. Otherwise, the scale will occur every time this node cooks.
## PARAMETERS
## Fog
Fog Type
The atmospheric effect to be applied.
Normal Fog
As distance increases, the pixel color changes to the fog color.
Additive Fog
The fog color is added to the pixel color. Looks more “cloudy”.
Haze
As distance increases, the pixel’s saturation decreases, so distant pixels appear more gray.
Heat Waves
Adds a shimmering heat wave effect to distant pixels.
Fog Density
The density of the atmospheric effect. For each depth unit, this amount is applied.
Fog Color
The color of the fog for fog effects (Normal and Additive fog only).
Distance Offset
A constant value added to the per-pixel distance.
Fog Direction
The direction the distance is computed in, either X,Y,Z or camera depth.
Smooth Edges
Enabling this option attempts to blend the fog on edges with sharp changes in depth. Because only 1 depth value is stored per-pixel, and they aren’t normally blended, some edges can have sections look fogged and some that aren’t at all, depending on the sampling. This option detects edges and corrects these artifacts.
Smooth Edge Threshold
Edges are blended if the edge transition is greater than this threshold, from the current edge pixel to a neighboring pixel. If all the neighboring pixels are within this distance of the current pixel, it is not considered an edge and smoothing is not applied.
## Heat (only applicable for Heat Waves):
Smoothness
The number of samples taken from the image. '1' produces a grainy effect, while higher values produce a blurry effect.
Horizontal Scale
How much horizontal deviation the heat waves cause.
Vertical Scale
How much vertical deviation the heat waves cause.
Time Scale
How quickly the heat waves change.
Noise Offset
The 3D noise offset for the heat waves. Animate the 'Y' parameter with $F to see rising heat waves.
## Layer
Layered fog restricts the fog to one side of a clipping plane, either in X,Y or Z. A falloff region can be applied to make the transistion less abrupt.
Layered
Turns layered fog on, with the fog appearing in the specified area. The most common type of layered fog is 'Y Layered Below' (for ground hugging fog) and 'Y Layered Above' (for clouds).
Layer Edge
Where the fog begins to falloff to zero. If Layered is set to 'Y Layered Below', all values with a Y value lower than the layer edge value will be fogged.
Layer Falloff
The size of the falloff region, which produces a gradual decrease in the fog once the Layer Edge has been reached.
Falloff Function
The shape of the falloff region.
## Noise
Fog noise increases the believability of the fog, as it appears somewhat uneven and patchy. It takes quite a bit longer to compute.
Use Fog Noise
If on, the fog is not uniform and has 3D noise variations in it.
Noise Amplitude
The amount of noise variation to add to the constant fog.
Noise Frequency
How quickly the noise changes in each of the 3 axis. Lower values produce very smooth, gradually changing noise, while high values produce very static noise.
Noise Offset
By changing the noise offset, you can animate the fog noise itself, which makes it flow as if wind were blowing it.
Turbulence
Adds more harmonics to the noise, given it more 'depth'. It will have more high frequency components in it.
Roughness
For each level of turbulence, this multiplies the noise harmonics. It controls the amount of high frequency noise present in the generated noise. So, for a turbulence of 3 a roughness of 0.5, the low frequency noise will be multiplied by 1, then next higher frequency by 0.5, and the highest frequency (level 2) by 0.25.
Noise Step
How often the noise is sampled along the way to the final point. If you have points that are extremely distant (>100), consider increasing this parameter, otherwise a tremendous amount of noise sampling will be done and the operation will slow down.
## Mask
A mask can be chosen to limit the effect of the operator to areas defined by the mask. The mask can be taken from the mask input (side input) or from the first input itself.
Effect Amount
If no mask is present, this blends the output with the input by a constant amount (0 = all input, 1 = all output).
If a mask is present, this amount multiplies the mask.
Operation Mask
Selects the mask plane to use as a mask from the mask input. The mask can be selected from:
A mask can be a component of a plane or an entire plane. If a vector plane is supplied as a mask, its components are multiplied by the images' components.
**Scalar Mask ('A', 'C.r')**
C.r = I.r * M
C.g = I.g * M
C.b = I.b * M
**Vector Mask ('C')**
C.r = I.r * M.r
C.g = I.g * M.g
C.b = I.b * M.b
First Input
Useful for masking the operation to the image’s own alpha plane.
Mask Input
Selects the mask from the side mask input.
Off
Turns off masking, without requiring disconnection of the mask input (useful for temporarily disabling the mask).
Resize Mask to Fit Image
If the mask image is a different resolution than the output image, turning on this parameter will scale the mask to the output image’s resolution.
If this node is changing constantly, and the mask is not, it is somewhat faster to put a Scale COP down to do the resize for the mask image. Otherwise, the scale will occur every time this node cooks.
Invert Mask
Inverts the mask so that all fully 'masked' portions become unmasked. This saves you from inserting an Invert COP after the node with the mask.
## Scope
Plane Scope
Specifies the scope for both the RGB components of Color, Alpha, and other planes. The (C)RGBA mask only affects Color components and Alpha. 'C' will toggle all the RGB components.
For planes other than Color and Alpha, the plane name (plus component, if applicable) should be specified in the string field. The pulldown menu can be used to select planes or components present in this node.
A plane is specified by its name. A component is specified by both its plane and component name. The '*' wildcard may be used to scope all extra planes. Any number of planes or components can be specified, separated by spaces.
Examples:
P
N.x N.y
P N Pz
## Frame Scope
Frame Scope
Allows scoping of specific frames in the frame range. This is in addition to the plane scope (so a plane at a certain frame must be both plane scoped and frame scoped to be modified).
All Frames
All frames are scoped.
Inside Range
All frames inside a subrange are scoped.
Outside Range
All frames outside a subrange are scoped.
Even Frames
Even numbered frames are scoped.
Odd Frames
Odd numbered frames are scoped.
Specific Frames
A user-defined list of frames are scoped.
Frame Range
For Inside/Outside range, this parameter specifies the subrange of the sequence to scope (or unscope). This can be edited in Timeline viewer mode (⌃ Ctrl + 2 in viewer).
Frame Dropoff
For Inside/Outside Range, this parameter specifies certain number of frames before and after to slowly ramp up to scoped. The operation will be blended with its input to 'ease in' or 'ease out' the scoping effect over a number of frames. This can be edited in Timeline viewer mode (⌃ Ctrl + 2 in viewer).
Non-scoped Effect
For unscoped frames, this sets the blend factor between the input and modified images. Normally this is zero (use the input image). By setting this to a non-zero value, you can make unscoped frames be 'slightly' unscoped. The value can vary between 0 (unscoped) and 1 (scoped).
Frame List
The frame list for 'Specific Frames'. Frame numbers should be separated by spaces.
Automatically Adjust for Length Changes
If the sequence range changes, enabling this parameter will adjust the subrange and frame dropoff lengths to fit the new range.
## LOCALS
L
Sequence length
S
Start of sequence
E
End of sequence
IL
Input sequence length
SR
Sequence frame rate
NP
Number of planes in sequence
W,H
Width and height of image
I
Image index (0 at start frame)
IT
Image time (0 at start frame)
AI
Current plane array index
PI
Current plane index
PC
Num of channels in current plane
CXRES
Composite Project X resolution
CYRES
Composite Project Y resolution
CPIXA
Composite Project pixel aspect ratio
CDEPTH
Composite Project raster depth
CBP
Composite Project black point
CWP
Composite Project white point
## EXAMPLES
Load Launch
[Foggy](https://www.sidefx.com/docs/houdini/examples/nodes/cop2/fog/Foggy.html)Example for [Fog](https://www.sidefx.com/docs/houdini/nodes/cop2/fog.html) compositing node
This example demonstrates how the Fog COP can simulate a foggy, misty, hazy, or smokey atmosphere. The point and normal data contained in an images deep raster are used to calculate the fog.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/dof.svg) Depth of Field](https://www.sidefx.com/docs/houdini/nodes/cop2/dof.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/light.svg) Lighting](https://www.sidefx.com/docs/houdini/nodes/cop2/light.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/xform.svg) Transform](https://www.sidefx.com/docs/houdini/nodes/cop2/xform.html)