---
type: concept
title: Denoise AI
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "18e0a04e766f"
---
使用机器学习算法对图像进行高质量和高速度的去噪。
### Parameters
You can install libraries that use various techniques (such as machine learning and GPU computation) to provide very fast and high-quality denoising. This node is a convenient front-end to use those libraries to denoise the image in a compositing network.
This utility currently supports [Intel Open Image Denoise](https://openimagedenoise.github.io/) and the [NVIDIA OptiX Denoiser](https://developer.nvidia.com/optix-denoiser). You must be on a supported platform and have the chosen denoising library installed for this utility to work.
-   Houdini ships with OIDN so it will be available if you are in a Houdini shell environment.
-   The NVIDIA OptiX Denoiser only works with NVIDIA cards. It is now included with the NVIDIA driver (version 435 or later). If you have an earlier driver version, you can choose **Render ▸ Download NVIDIA OptiX Denoiser** in Houdini to download the library automatically.
You can specify multiple image planes to denoise simultaneously.
Some denoising libraries can use normals and/or albedo to get a better sense of the image, guiding how and where it reduces noise. This node lets you optionally specify the name of a normal plane and the name of an albedo plane to use as input for the denoiser.
## Tips
-   The [idenoise](https://www.sidefx.com/docs/houdini/ref/utils/idenoise.html "Removes noise from an image file.") utility lets you apply the same denoisers as this node uses from the command line.
-   Like most COP nodes, this node lets you vary the effect using a grayscale mask image. This can be especially useful for certain denoising workflows since you can concentrate the effect in areas with high noise, while avoiding applying to much smoothing to other areas.
## INPUTS
Image to Denoise
The node applies the chosen denoiser to the image in the first input.
Mask
If you connect a grayscale image to the second input, the node uses it as a mask to vary the strength of the denoising effect.
## PARAMETERS
## Denoise
Denoiser
The library to use to denoise the image. Currently supports the following options:
Intel Denoiser
Use the Intel Open Image Denoise library. This library ships with Houdini so it should always be available.
NVIDIA Optix
Use the NVIDIA Optix library. This option is only available if you have an NVIDIA graphics card with the appropriate driver (see the Overview above).
Normal Plane
Name of the normal plane in the image file to use as input to the denoiser. If this is blank or the corresponding image plane does not exist, the denoiser will not use a normal plane.
Albedo Plane
Name of the albedo plane in the image file to use as input to the denoiser. If this is blank or the corresponding image plane does not exist, the denoiser will not use an albedo plane.
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
-   [idenoise](https://www.sidefx.com/docs/houdini/ref/utils/idenoise.html)