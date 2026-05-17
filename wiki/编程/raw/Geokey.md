---
type: concept
title: Geokey
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "df55670cdacc"
---
根据像素位置或法线方向键出图像的部分。
### Parameters
This operation keys out parts of the image based on point position, normal direction or both. A point plane and/or a normal plane are needed to perform this operation.
Geokey can simulate lighting from point lights and infinite sources by generating masks that can be used by color correction COPs, like the Bright COP. It can also cut out foreground or background objects, if point or depth information is present.

This operator is implemented in VEX, which supports parameter overloading. If the first input has a plane which matches an operation parameter’s channel name, the input plane will be used as the parameter’s value, effectively overriding it. The overloaded parameter is then evaluated from the plane on a per-pixel basis.
_eg._ If the input COP has the following planes:
C{r,g,b}
A
fogdens
and it is fed into a VEX Fog COP, the fog density will be determined at each pixel by the fogdens plane, since the Fog Density parameter’s channel name matches the 'fogdens' channel name.

## Geokey
Key Operation
Distance from Point
All pixels within a certain distance of a specified point are keyed (Point plane required).
Normal Direction
All pixels with normals pointing in the same direction as the specified normal are keyed (Normal plane required).
Angle from Point
All pixels with normals pointing at the specified point are keyed (Point and normal planes required).
Distance & Angle
All pixels with normals pointing at the From Point specified point, within a certain distance are keyed (Point and Normal planes required).
Clip Plane
All pixels on one side of the clip plane are keyed (Point plane required).
Point Origin
A 3D point to key from, for 'Distance from Point', 'Angle From Point', and 'Distance & Angle'.
Point Distance
The distance from the point at which to stop keying.
Distance Dropoff
The size of the dropoff region after the distance radius.
Normal Direction
The normal direction to key from.
Normal Deviation
The amount of degrees that a normal can deviate from the specified normal before being rejected.
Normal Dropoff
The amount of degrees of dropoff after the normal deviation.
Rolloff
The dropoff shape for the Normal Dropoff area.
Clipping Plane
The orientation of the clip plane.
Clip Plane Normal
The normal of the user-defined clip plane.
Clip Plane Origin
Translates the clip plane so that it passes through this point.
Supersample
The number of subpixels sampled per pixel in one direction (2 samples 4 pixels, 3 samples 9). More subsamples produce finer edges, at the cost of performance.
Discard Keyed Region
If on, the keyed region is discarded; otherwise only the keyed region is kept.
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
[GeokeyBasics](https://www.sidefx.com/docs/houdini/examples/nodes/cop2/geokey/GeokeyBasics.html)Example for [Geokey](https://www.sidefx.com/docs/houdini/nodes/cop2/geokey.html) compositing node
How to use 3D information to extract portions of an image for mattes or local modification. This examples uses the Geokey COP.