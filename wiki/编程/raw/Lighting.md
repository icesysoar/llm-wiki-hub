---
type: concept
title: Lighting
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "496472e286eb"
---
在图像上添加一盏灯。
### Parameters
This operator adds a light to the image. The light can be directional or non, and have ambient, specular and diffuse components. The image can be a flat image, an image with a bump map, or a deep raster image containing point and/or normal planes.
## Flat Lighting
Flat lighting requires no extra information. It assumes the image is a flat plane, and applies the lighting equation to the pixels. The image occupies the area (0,0,0) to (1,1,0).
The light position should have a positive Z value. The center of the image is (0.5, 0.5, 0). The distance the light is from Z=0 determines the brightness and the light’s shape (if a cone line is used).
## Bump Map Lighting
Bump Map lighting requires a bump map, which can be produced with the Bump COP. This type of lighting is similar to Flat lighting, except that the surface normals are perturbed based on the bump map.
To adjust the height of the bumps, you will need to brighten or dim the bump map with a Bright COP. Or, if the bump map was created with the Bump COP, adjust the Bump Height parameter there.
## Deep Raster (3D) Lighting
3D lighting can be done with the help of Point and Normal maps, which can be generated from the Deep Raster tab of the Mantra ROP. If only a Point map is present, the Lighting COP will attempt to build normals from the point positions. If only a Normal map is present, the process is similar to that of Bump Map lighting, and the points are assumed to be in the range (0,0,0) to (1,1,0).
The light can be placed anywhere relative to the 3D points. It is useful to use the viewport inspect function (i) to determine the 3D point values so the light can be positioned more accurately.
## Volumetric Lighting
Volumetric lighting can be used with any of the above lighting techniques, though it is most effective when used with 3D lighting. Volumetric lighting adds an atmospheric light-scattering effect so that the cone of light can be seen.
Since volumetric lighting is quite time consuming to compute, it is a good idea to get all your other lighting parameters setup first, and then enable this option.
If the alpha plane is scoped, the amount of light at each point is placed in it.
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
## Lighting
Surface Type
Specifies the type of surface lighting to use:
Flat
Image has uniform normals and uniform depth.
Bump Map
Image has bumped normals and uniform depth.
Point & Normal
Image has normal & point maps for 3D lighting.
Point Only
Image has a point map for pseudo-3D lighting.
Normal Map
Image has uniform depth and varying normals.
Eye Distance
The distance from the eye to the image (at Z=0).
Ambient
The ambient component of the light.
Diffuse
The diffuse component of the light.
Specular
The specular component of the light.
Correct for Aspect Ratio
If the image is not square, this adjusts the coordinates so that spotlights are still circular.
Color Operation
How to apply the light to the existing image:
Light Existing Color
The image color is used as the color of the surface, and the lighting calculation replaces it.
Add to Existing Color
The image color is used as the color of the surface,
and the lighting calculation is added to it.
New Lighting Only
The image color is ignored, and replaced by the new lighting. This will show only the ambient, diffuse and specular colors.
## Material
This tab allows you to change the diffuse and specular models.
Diffuse Model
The type of diffuse model to use:
Simple
Simple dot product model.
Oren-Nayar
Rougher material model, like clay.
Diffuse Roughness
The roughness for the Oren-Nayar model.
Specular Model
The specular model to use, Phong or Blinn.
Exponent
The Phong specular exponent.
Roughness
The Blinn roughness parameter.
## Light
Light position and orientation.
Position
The position of the light. In Flat, Bump Map and Normal Map modes, the image coordinates are {0,0,0} (bottom left) to {1,1,0} (top right).
Attenuation
The distance at which the light is at 50% intensity.
Directional Light
If on, the light is directional.
Direction
The direction vector of the light.
Cone
The cone size of the light, in degrees.
Cone Falloff
The falloff cone size of the light, in degrees.
Falloff
The falloff function for the light.
## Volumetric
Adds volumetric light effects. Takes quite a bit longer to compute.
Atmosphere Scatter
The amount of light scatter the atmosphere causes. Higher numbers produce foggier lights.
Light Falloff
The distance that the volumetric fog extends away from the light.
Falloff Function
The volumetric fog falloff function.
Light Core Size
Increases or decreases the light hotspot size.
Ray March Step
The step size when marching through the light volume. Smaller values produce finer results at the expense of computation time.
## Planes
Bump, Point Normal Planes in 2nd input
If on, all the specified planes are in input 2, otherwise they are in input 1.
Bump, Point, Normal Name
The name of the corresponding input planes.
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
[Lighting3d](https://www.sidefx.com/docs/houdini/examples/nodes/cop2/light/Lighting3d.html)Example for [Lighting](https://www.sidefx.com/docs/houdini/nodes/cop2/light.html) compositing node
This example demonstrates three different ways that the [Lighting COP](https://www.sidefx.com/docs/houdini/nodes/cop2/light.html) can simulate 3D lighting, using images with Point and Normal deep raster information. Point lighting, directional atmospheric lighting, and lighting without Normals are explored.
Load Launch
[LightingFlatBump](https://www.sidefx.com/docs/houdini/examples/nodes/cop2/light/LightingFlatBump.html)Example for [Lighting](https://www.sidefx.com/docs/houdini/nodes/cop2/light.html) compositing node
This example demonstrates the effects of the Lighting COP on a 2D image. Flat lighting and lighting with the use of a bump map are explored.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/bump.svg) Bump](https://www.sidefx.com/docs/houdini/nodes/cop2/bump.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/dof.svg) Depth of Field](https://www.sidefx.com/docs/houdini/nodes/cop2/dof.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/emboss.svg) Emboss](https://www.sidefx.com/docs/houdini/nodes/cop2/emboss.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/fog.svg) Fog](https://www.sidefx.com/docs/houdini/nodes/cop2/fog.html)