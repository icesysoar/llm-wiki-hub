---
type: concept
title: Pixel
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "9874ef069b29"
---
使用表达式修改图像的像素。
### Parameters
This operation allows you to specify an expression to modify the pixels of image. The expression is applied to each pixel in turn, and can be specified separately for each color component (R, G, B, and Alpha).
There are a second set of expression parameters, which refer to the first to fourth component of any plane, even if it is not Color or Alpha.
This node is the 2D equivalent of the Point SOP. VEX scripts are much faster than using this operator.

Use Color & Alpha Expressions, Then Generic
If on, the color and alpha expressions are used for Color (C.r, C.g, C.b) and Alpha. Any other plane types use the generic expressions. If off,the Generic expressions are used for all planes.
Red, Green, Blue, Alpha
Expressions used exclusively by Color (C.r, C.g, C.b) and Alpha. All other planes use the generic expressions.
Component 1-4
The generic expressions for all planes.
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
R, G, B, A
The values of C.r, C.g, C.b (Color) and A (Alpha) of the first input.
C1, C2, C3, C4
The values of components 1-4 of any of the scoped plane in the first input (which correspond to the output plane cooking). For example, if the currently cooking output plane is a Point plane, C1 will be P.x, C2 will be P.y, and C3 will be P.z of the first input’s Point plane. C4 will be black.
RS, GS, RS, RS
The values of color and alpha in the second input.
CS1, CS2, CS3, CS4
The values of components 1-4 of the any of the scoped planes in the second input (which correspond to the output plane cooking).
RT, GT, BT, AT
The values of color and alpha in the third input.
CT1, CT2, CT3, CT4
The values of of components 1-4 of the scoped plane in the third input (which correspond to the output plane cooking).
U, V
The UV coordinates of the current pixel (0 to 1).
X, Y
The pixel location of the current pixel (0 to res-1)
CH
The component (channel) of the current expression (0 to 3)
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
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/function.svg) Function](https://www.sidefx.com/docs/houdini/nodes/cop2/function.html)