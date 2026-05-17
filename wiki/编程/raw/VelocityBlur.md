---
type: concept
title: VelocityBlur
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "2f69eb7f2450"
---
通过使用像素速度来模糊图像，产生运动模糊效果。
### Parameters
This operation blurs an image by using pixel velocity to produce a motion blur effect. The velocity is read from the velocity plane. Velocity planes can be output by surface shaders which export the geometry’s velocity attribute.
Note
Velocity Blur can’t quite do true motion blur.
## Overloading VEX 
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
## Velocity Blur
Quality
Affects the smoothness of the blur. Higher qualities take more samples per pixel to blur (which is also slower to compute).
Velocity Scale
Uniformly scales velocity to change the amount of blur.
Per Pixel Velocity
If on, the velocity plane is used to determine the blur on a per-pixel basis. If off, a global velocity vector is used.
Velocity Plane
The name of the velocity plane.
Accurate Velocity Lookups
If on, the velocity is “followed” by sampling the velocity at each point, resulting potentially curved blur streaks. If off, only the initial velocity is used and the blur streaks are straight.
Velocity Vector
If Per Pixel Velocity if off, this is the global velocity vector that is used to produce a streaking blur.
Start Blur Scale
The start blur factor. The first blurred pixel is multiplied by this value.
End Blur Scale
The end blur factor. The last blurred pixel is multiplied by this value.
Blur Dropoff
The interpolation function for pixel samples in between the start and end pixels.
Filtering
The pixel sampling filter.
None
Quick, low quality filter.
Bilinear
Medium quality filter.
Full Filtered
Slow, high quality filter.
Correct for Image Aspect
If on, the blur is adjusted so it appears circular if the image aspect ratio isn’t square.
Outside Bounds
Specifies the sampling method for pixels outside the image.
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
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/blur.svg) Blur](https://www.sidefx.com/docs/houdini/nodes/cop2/blur.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/radialblur.svg) Radial Blur](https://www.sidefx.com/docs/houdini/nodes/cop2/radialblur.html)