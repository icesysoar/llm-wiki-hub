---
type: concept
title: HSV
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "5d73c821f1e4"
---
在RGB和HSV色彩空间之间进行转换，或应用色调和饱和度的修改。
### Parameters
This operation converts between RGB and HSV color spaces, and also performs a variety of HSV operations (hue shifts, saturation reduction, etc).
Converting to HSV space allows you to use any operator to manipulate HSV, and then convert it back into RGB space.
Using the HSV Adjust feature does simple global hue shifts, saturation and value adjustments.
For more specific HSV changes, use the [Hue Curve COP](https://www.sidefx.com/docs/houdini/nodes/cop2/huecurve.html "Adjusts the saturation or luminance of the image based on hue.").
## Scoping
This operation may be restricted to certain planes, or components of planes. In addition, the operation may be applied to a subset of frames within the sequence. An image must have both its frame and plane scoped to be modified.
Images that are not modified are passed through, which does not take any memory or processing time.
## Masking
This operation may be masked, which restricts the operation to an area of the image. The mask may be inverted, brightened or dimmed.
The mask input is on the side of the node. The label on the connector indicates the plane being used as a mask.
The mask input can also be scaled to fit the output image’s resolution, if they differ. If this node is changing constantly, and the mask is not, it is somewhat faster to put a [Scale COP](https://www.sidefx.com/docs/houdini/nodes/cop2/scale.html "Changes the resolution of the image.") down to do the resize for the mask image. Otherwise, the scale will occur every time this node cooks.
## Collapsible Pixel Operation
This is a collapsible pixel operation. When placed in sequence with other collapsible pixel operations, the operations are combined into one operation at the final node in the pixel operation sequence. This is known as a collapsible pixel operation chain.
Image data flowing through the chain is only quantized at the end of the chain. This allows the intermediate operations to produce and carry values outside the normal range of the pixels' data format, with floating point precision. The net result of this is a reduction in quantization error and black/white clipping (especially useful for integer formats).
Collapsible pixel operations are recognizable by the light blue background color of the node’s icon. If a node of a different color is inserted between two collapsible COPs, the chain will be broken at that point and the operations will not collapse anymore.
Collapsible pixel operations are maskable and scopable. If one operation in the chain is masked, but the others are not (or do not share the same mask), the chain will be 'broken' at that point and quantization will occur at that node. Differences in scoping does not cause a break in the chain.
## PARAMETERS
## HSV
Operation
The operation to perform, either HSV Adjust, Convert RGB to HSV or Convert HSV to RGB.
Hue Shift
Shifts the Hue by degrees around the HSV cone. This will change all of the colors to different hues. Grey pixels are not affected.
Maintain Luminance During Hue Shift
Maintains the perceptual luminance of the pixel when hues shift since some hues appear brighter than others.
Saturation Scale and Shift
Adjusts the color saturation of the pixels. Normal saturation values lie between 0 (grey) and 1 (full color saturation). Shifting is normally used only to reduce the saturation, otherwise greyscale elements will suddently take on a random color. Scaling is the usual way to increase (>1) or decrease (<1) the color saturation of the image.
Value Scale/Shift
Adjusts the value, or brightness, of the pixel. Normal color values lie between 0 (black) and 1 (white). Scaling is equivalent to adjusting the brightness, while shifting adds the same value to all pixels.
## Collapsible Pixel Operation Parameters
Collapsible pixel operations can be combined with other collapsible pixel operations and have the result computed in one pass, rather than at each node. The operations must be in sequence, without other nodes between them.
Do Operation in Unpremultiplied Space
The Color plane will the divided by the input alpha, and multiplied by the output alpha so that the color operation is done in unpremultiplied space. If this operation is in a collapsible chain, all the nodes in the chain must have the same setting of this parameter to avoid breaking the chain and quantizing.
Quantize
If this node is in the middle of a collapsible pixel chain, you can force this node to quantize and store the images at this node.
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
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/colorcurve.svg) Color Curve](https://www.sidefx.com/docs/houdini/nodes/cop2/colorcurve.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/huecurve.svg) Hue Curve](https://www.sidefx.com/docs/houdini/nodes/cop2/huecurve.html)