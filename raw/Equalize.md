---
type: concept
title: Equalize
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "472bcdcb457c"
---
通过拉伸或移动图像直方图来均衡颜色。
### Parameters
This operation equalizes colors by stretching the image histogram. Several modes are available, selectable via the Operation menu.
The color transform is either a shift or a scale, depending on the fit method.
-   **Stretch Range to Black/White** - The minimum and maximum values found in the image are mapped to black and white, which may result in a contrast adjustment and a luminance shift.
-   **Move Minimum Value to Black** - The values are transformed so that the minimum value maps to black.
-   **Move Maximum Value to White** - The values are transformed so that the maximum value maps to white.
-   **Move Average Luminance** - The global luminance is computed and all values are transformed so that the global luminance matches the specified value.
-   **Equalize Luminance Across Frames** - The global luminance is computed for several frames around the current frame. The current frame’s global luminance is transformed to match the average global luminance, effectively removing frame flicker.
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
## Equalize
Operation
The equalization operation to perform:
Stretch Range to Black/White
The minimum and maximum values found in the image are mapped to black and white, which may result in a contrast adjustment and a luminance shift.
Move Minimum Value to Black
The values are transformed so that the minimum value maps to black.
Move Maximum Value to White
The values are transformed so that the maximum value maps to white.
Shift Average Luminance
The global luminance is computed and all values are transformed so that the global luminance matches the specified value.
Equalize Luminance Across Frames
The global luminance is computed for several frames around the current frame. The current frame’s global luminance is transformed to match the average global luminance, effectively removing frame flicker.
Fit Method
The transformation, either a bright scale or shift.
Luminance
The method for computing luminance.
Black
What value 'black' is defined to be, normally zero. (black & white are independent of black/white points)
White
What value 'white' is defined to be, normally one.
Average Luminance
The luminance to move the average luminance to.
Frames Before
Number of frames before the current frame to analyze (for Equalize Luminance only).
Frames After
Number of frames after the current frame to analyze.
Effect
The amount of effect equalize has on the image (0 is none, 1 is full effect).
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
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/hsv.svg) HSV](https://www.sidefx.com/docs/houdini/nodes/cop2/hsv.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/limit.svg) Limit](https://www.sidefx.com/docs/houdini/nodes/cop2/limit.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/quantize.svg) Quantize](https://www.sidefx.com/docs/houdini/nodes/cop2/quantize.html)