---
type: concept
title: Shape
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "7d8f91bd2c35"
---
生成简单的形状，如圆形、星形和规则的N边多边形。
### Parameters
This COP generates simple shapes, such as circles, stars and regular N-sided polygons. The shape will automatically expand to the largest size possible in the given resolution. Use the transform handle or the transform parameters in the transform page to move and size the shape as needed.
This COP node is a [generator](https://www.sidefx.com/docs/houdini/nodes/cop2/_generators.html).
## Shape
Shape Type
Selects the shape.
Regular N-sided
Regular polygons, like triangles, pentagons and octagons.
Star
N-pointed stars.
Circle
A perfect circle.
Ring
A circular ring.
Equilateral Triangle
A triangle with all sides equal.
Isosceles Triangle
A triangle with two sides equal.
Rectangle
A rectangle.
Parallelogram
A slanted rectangle.
Number of Sides
The number of sides in a Regular N-sided shape.
Number of Points
The number of points in a star.
Inner Radius
The inner radius of a star and a ring.
Corner Angle
The slant angle of a parallelogram.
Use Sweep Angles
If on, the start and end sweep angles of circles and rings.
Preserve Aspect Ratio
If on, the 1:1 aspect ratio of the shape is kept even if the image resolution is not 1:1.
## Fill
Fill
The render mode, Solid (filled) or Hollow (outlined).
Antialias
The amount of antialiasing to perform on edges. Higher numbers produce more edge levels. The product of the two fields must not exceed 64 (8×8).
Level of Detail
The level of detail used when converting circles and rings to polygons before rendering.
Fill Outside
If on, the 'outside' region is filled instead of the interior (for hollow shapes, the outside region is the region not included by the line thickness).
Thickness
For hollow shapes, the thickness of the lines to use, in UV space.
Color
The color to render the shape.
## Transform
Overview
A 2D animated transform can be applied to the spline. All units are in UV space.
### Mask
The mask parameters control the mask applied when a node is connected to the mask input. The Effect Amount parameter is always available, whether a mask is connected or not.
Effect Amount
If no mask is present, this multiplies the output by a constant amount (0 = black, 1 = all output).
If a mask is present, this amount multiplies the mask.
Mask Plane
A mask can be a component of a plane or an entire plane. If a vector plane is supplied as a mask, its components are multiplied by the images' components.
Scalar Mask ('A', 'C.r')
C.r = I.r * M
C.g = I.g * M
C.b = I.b * M
Vector Mask ('C')
C.r = I.r * M.r
C.g = I.g * M.g
C.b = I.b * M.b
Invert Mask
Inverts the mask so that all fully 'masked' portions become unmasked. This saves you from inserting an Invert COP after the node with the mask.
### Image
Parameters relating to the structure of the image generated, including Resolution, Pixel Aspect Ratio and Raster Depth.
Override Size
If off, the resolution of the image is defined by the resolution in the Composite Project settings. If on, any resolution can be specified.
Pixel Aspect Ratio
If off, the pixel aspect ratio of the image is defined by the pixel aspect ratio in the Composite Project settings. If on, any pixel aspect ratio can be specified.
The pixel aspect ratio determines the shape of the pixel; it represents the width of the pixel compared to the height. A pixel with an aspect ratio of '2' is twice as wide as it is high (2:1). Pixel aspect ratios less than 1 are taller than they are wide.
The image viewer attempts to show the image as it would appear by horizontally scaling the image by the pixel aspect ratio. This can result in slight artifacts for non-integer ratios (ie, 0.9:1, 1.442:1). Turn off 'Fast Pixel Aspect' in the Display Options to suppress these artifacts.
Many effect filters that have parameters that represent width and height will have the width scaled appropriately (such as Blur, Defocus, Expand).
Image Planes
Specifies the plane(s) to generate. Color and Alpha will always be present, but the generator does not always have to write to them.
The list of planes is all the ones Houdini recognizes as special. Other planes can be added with the 'Custom Planes' parameter.
C, A (C:rgb A)
Color and Alpha
C, A (C:rgb A:rgb)
Color and 3-channel Alpha
C (rgb)
Color only
A
Alpha only
A (rgb)
3-channel Alpha only
M
Mask plane
M (rgb)
3-channel Mask plane
Z
Z Depth plane
L
Luminance plane
B (uv)
Bump plane
P (xyz)
Point plane
N (xyz)
Normal plane
V (xyz)
Velocity plane
None
No planes generated.
Add Plane
When a generator is connected to an input, it generates a Mask plane by default. This parameter determines which planes are generated in this case. The list of planes to generate are the same as 'Image Planes'.
In addition, if the plane already exists in the input sequence, one of the following operations will be performed to combine the new plane.
Replace
Input plane replaced by the generated plane. `(G)`
Rename
Generated plane renamed.
Add
Input plane added to the generated plane. `(I+G)`
Screen
Input plane photographically added to the generated plane. `(I+G-I*G)`
Subtract
Generated plane subtracted from the input plane. `(I-G)`.
Multiply
Input plane multiplied by the generated plane. `(IxG)`
Min
Minimum pixel value of input and generated planes. `(min{I,G})`
Max
Maximum pixel value of input and generated planes. `(max{I,G})`
Average
Average pixel value of the input and generated planes. `(I+G)/2`
Custom Planes
This string parameter allows you to create your own plane formats. The syntax is:
planename(arraysize){comp1,comp2,comp3,comp4}:format(black,white)
All parts are optional except for `planename`. `arraysize` must be 1 or greater (default 1). `comp1` to `comp4` are arbitrary strings representing the component names. `format` is either `i8`, `i16`, `i32`, `f16` or `f32`. `black` and `white` are integers representing the black & white points for integer formats.
Raster Depth
The byte format of the image. Higher bit depths provide better color resolution and range at the expense of memory.
8 Bit Integer
Lowest bit depth. Banding can occasionally be seen. Suitable for video.
16 Bit Integer
Intermediate bit depth. No banding can be seen, though clipping can still occur below and above the black and white points.
32 Bit Integer
Generally not used for color, 32bit integer values are used to store object IDs, counts, and other integer values with a large range.
16 Bit Floating Point
High bit depth. No banding can be seen, and no clipping occurs at white and black. Uses less memory than 32 bit float, however processing time for this format is slightly higher as it is not a native CPU data format. This format supports values in the range -65504 to +65504.
32 Bit Floating Point
High bit depth. No banding can be seen, and no clipping occurs at white and black. Uses 4× as much memory as 8bit, which is this format’s main drawback.
Default Depth
Use the raster depth specified in the Composite Project options.
Black/White Points
The integer formats (8, 16 and 32 bit) can specify the raw values that the black and white points occur at. The white point must always be higher than the black point. The minimum and maximum values for the black and white points for each format are:
8 bit
:
0 - 255
16 bit
:
0 - 65535
32 bit
:
0 - 2,147,483,647
Floating point formats always have their black point at 0 and their white point at 1.
Interlacing
Controls the ability to generate images that are compatible with interlaced images.
If you are manipulating the generated output with a filter that uses neighboring pixels (like Blur or Expand), it is recommended that you do not use Black Interlaced, as the filter will use the black scanlines as well.
The second menu determines which scanlines are in which fields (odd,even)
None
No interlacing.
Half Res Interlaced
The image is half the height of a normal frame, with the scanlines on every line.
Black Interlaced
The image is the same height as a normal frame, with the inactive scanlines filled with black.
Line Doubled
The image is the same height as a normal frame, with the inactive scanlines filled with their active neighbor.
Odd Dominant
Odd-numbered scanline fields come before even-numbered scanline fields.
Even Dominant
Even-numbered scanline fields come before odd-numbered scanline fields.
Odd Frames Only
Only odd-numbered scanline fields are produced.
Even Frames Only
Only even-numbered scanline fields are produced.
### Sequence
This tab contains parameters which deal with the timing and frame range of the generated sequence.
Override Global Range
If off, the global animation range is used as the frame range. If on, the frame range of the sequence can be specified in the following parameters.
Still Image
A still image is time-invariant. It exists at every frame. If off, the Start Frame and Length are used to determine the frame range.
Start Frame
The starting frame of the sequence.
Length
The length of the sequence (number of frames in the sequence).
Frame Rate
If on, the frame rate of the sequence can be overridden.
Pre Extend
For sequences with a frame range, this determines how to show frames before the start frame.
Black Frames
Display black.
Cycle
Cycle the sequence, always playing it forward.
Mirror
Cycle the sequence, reversing the direction every cycle.
Hold
Hold the first frame indefinitely.
Hold N Frames
Hold the first frame for a certain number of frames; before that, show black frames.
Pre Hold
The number of frames to hold the first frame for, if 'Hold N Frames' is selected.
Post Extend
For sequences with a frame range, this determines how to show frames after the last frame.
Black Frames
Display black.
Cycle
Cycle the sequence, always playing it forward.
Mirror
Cycle the sequence, reversing the direction every cycle.
Hold
Hold the last frame indefinitely.
Hold N Frames
Hold the last frame for a certain number of frames; after that, show black frames.
Post Hold
The number of frames to hold the last frame for, if 'Hold N Frames' is selected.
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
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/rotoshape.svg) Rotoshape](https://www.sidefx.com/docs/houdini/nodes/cop2/rotoshape.html)This COP generates simple shapes, such as circles, stars and regular N-sided polygons. The shape will automatically expand to the largest size possible in the given resolution. Use the transform handle or the transform parameters in the transform page to move and size the shape as needed.
This COP node is a [generator](https://www.sidefx.com/docs/houdini/nodes/cop2/_generators.html).
## PARAMETERS
## Shape
Shape Type
Selects the shape.
Regular N-sided
Regular polygons, like triangles, pentagons and octagons.
Star
N-pointed stars.
Circle
A perfect circle.
Ring
A circular ring.
Equilateral Triangle
A triangle with all sides equal.
Isosceles Triangle
A triangle with two sides equal.
Rectangle
A rectangle.
Parallelogram
A slanted rectangle.
Number of Sides
The number of sides in a Regular N-sided shape.
Number of Points
The number of points in a star.
Inner Radius
The inner radius of a star and a ring.
Corner Angle
The slant angle of a parallelogram.
Use Sweep Angles
If on, the start and end sweep angles of circles and rings.
Preserve Aspect Ratio
If on, the 1:1 aspect ratio of the shape is kept even if the image resolution is not 1:1.
## Fill
Fill
The render mode, Solid (filled) or Hollow (outlined).
Antialias
The amount of antialiasing to perform on edges. Higher numbers produce more edge levels. The product of the two fields must not exceed 64 (8×8).
Level of Detail
The level of detail used when converting circles and rings to polygons before rendering.
Fill Outside
If on, the 'outside' region is filled instead of the interior (for hollow shapes, the outside region is the region not included by the line thickness).
Thickness
For hollow shapes, the thickness of the lines to use, in UV space.
Color
The color to render the shape.
## Transform
Overview
A 2D animated transform can be applied to the spline. All units are in UV space.
### Mask
The mask parameters control the mask applied when a node is connected to the mask input. The Effect Amount parameter is always available, whether a mask is connected or not.
Effect Amount
If no mask is present, this multiplies the output by a constant amount (0 = black, 1 = all output).
If a mask is present, this amount multiplies the mask.
Mask Plane
A mask can be a component of a plane or an entire plane. If a vector plane is supplied as a mask, its components are multiplied by the images' components.
Scalar Mask ('A', 'C.r')
C.r = I.r * M
C.g = I.g * M
C.b = I.b * M
Vector Mask ('C')
C.r = I.r * M.r
C.g = I.g * M.g
C.b = I.b * M.b
Invert Mask
Inverts the mask so that all fully 'masked' portions become unmasked. This saves you from inserting an Invert COP after the node with the mask.
### Image
Parameters relating to the structure of the image generated, including Resolution, Pixel Aspect Ratio and Raster Depth.
Override Size
If off, the resolution of the image is defined by the resolution in the Composite Project settings. If on, any resolution can be specified.
Pixel Aspect Ratio
If off, the pixel aspect ratio of the image is defined by the pixel aspect ratio in the Composite Project settings. If on, any pixel aspect ratio can be specified.
The pixel aspect ratio determines the shape of the pixel; it represents the width of the pixel compared to the height. A pixel with an aspect ratio of '2' is twice as wide as it is high (2:1). Pixel aspect ratios less than 1 are taller than they are wide.
The image viewer attempts to show the image as it would appear by horizontally scaling the image by the pixel aspect ratio. This can result in slight artifacts for non-integer ratios (ie, 0.9:1, 1.442:1). Turn off 'Fast Pixel Aspect' in the Display Options to suppress these artifacts.
Many effect filters that have parameters that represent width and height will have the width scaled appropriately (such as Blur, Defocus, Expand).
Image Planes
Specifies the plane(s) to generate. Color and Alpha will always be present, but the generator does not always have to write to them.
The list of planes is all the ones Houdini recognizes as special. Other planes can be added with the 'Custom Planes' parameter.
C, A (C:rgb A)
Color and Alpha
C, A (C:rgb A:rgb)
Color and 3-channel Alpha
C (rgb)
Color only
A
Alpha only
A (rgb)
3-channel Alpha only
M
Mask plane
M (rgb)
3-channel Mask plane
Z
Z Depth plane
L
Luminance plane
B (uv)
Bump plane
P (xyz)
Point plane
N (xyz)
Normal plane
V (xyz)
Velocity plane
None
No planes generated.
Add Plane
When a generator is connected to an input, it generates a Mask plane by default. This parameter determines which planes are generated in this case. The list of planes to generate are the same as 'Image Planes'.
In addition, if the plane already exists in the input sequence, one of the following operations will be performed to combine the new plane.
Replace
Input plane replaced by the generated plane. `(G)`
Rename
Generated plane renamed.
Add
Input plane added to the generated plane. `(I+G)`
Screen
Input plane photographically added to the generated plane. `(I+G-I*G)`
Subtract
Generated plane subtracted from the input plane. `(I-G)`.
Multiply
Input plane multiplied by the generated plane. `(IxG)`
Min
Minimum pixel value of input and generated planes. `(min{I,G})`
Max
Maximum pixel value of input and generated planes. `(max{I,G})`
Average
Average pixel value of the input and generated planes. `(I+G)/2`
Custom Planes
This string parameter allows you to create your own plane formats. The syntax is:
planename(arraysize){comp1,comp2,comp3,comp4}:format(black,white)
All parts are optional except for `planename`. `arraysize` must be 1 or greater (default 1). `comp1` to `comp4` are arbitrary strings representing the component names. `format` is either `i8`, `i16`, `i32`, `f16` or `f32`. `black` and `white` are integers representing the black & white points for integer formats.
Raster Depth
The byte format of the image. Higher bit depths provide better color resolution and range at the expense of memory.
8 Bit Integer
Lowest bit depth. Banding can occasionally be seen. Suitable for video.
16 Bit Integer
Intermediate bit depth. No banding can be seen, though clipping can still occur below and above the black and white points.
32 Bit Integer
Generally not used for color, 32bit integer values are used to store object IDs, counts, and other integer values with a large range.
16 Bit Floating Point
High bit depth. No banding can be seen, and no clipping occurs at white and black. Uses less memory than 32 bit float, however processing time for this format is slightly higher as it is not a native CPU data format. This format supports values in the range -65504 to +65504.
32 Bit Floating Point
High bit depth. No banding can be seen, and no clipping occurs at white and black. Uses 4× as much memory as 8bit, which is this format’s main drawback.
Default Depth
Use the raster depth specified in the Composite Project options.
Black/White Points
The integer formats (8, 16 and 32 bit) can specify the raw values that the black and white points occur at. The white point must always be higher than the black point. The minimum and maximum values for the black and white points for each format are:
8 bit
:
0 - 255
16 bit
:
0 - 65535
32 bit
:
0 - 2,147,483,647
Floating point formats always have their black point at 0 and their white point at 1.
Interlacing
Controls the ability to generate images that are compatible with interlaced images.
If you are manipulating the generated output with a filter that uses neighboring pixels (like Blur or Expand), it is recommended that you do not use Black Interlaced, as the filter will use the black scanlines as well.
The second menu determines which scanlines are in which fields (odd,even)
None
No interlacing.
Half Res Interlaced
The image is half the height of a normal frame, with the scanlines on every line.
Black Interlaced
The image is the same height as a normal frame, with the inactive scanlines filled with black.
Line Doubled
The image is the same height as a normal frame, with the inactive scanlines filled with their active neighbor.
Odd Dominant
Odd-numbered scanline fields come before even-numbered scanline fields.
Even Dominant
Even-numbered scanline fields come before odd-numbered scanline fields.
Odd Frames Only
Only odd-numbered scanline fields are produced.
Even Frames Only
Only even-numbered scanline fields are produced.
### Sequence
This tab contains parameters which deal with the timing and frame range of the generated sequence.
Override Global Range
If off, the global animation range is used as the frame range. If on, the frame range of the sequence can be specified in the following parameters.
Still Image
A still image is time-invariant. It exists at every frame. If off, the Start Frame and Length are used to determine the frame range.
Start Frame
The starting frame of the sequence.
Length
The length of the sequence (number of frames in the sequence).
Frame Rate
If on, the frame rate of the sequence can be overridden.
Pre Extend
For sequences with a frame range, this determines how to show frames before the start frame.
Black Frames
Display black.
Cycle
Cycle the sequence, always playing it forward.
Mirror
Cycle the sequence, reversing the direction every cycle.
Hold
Hold the first frame indefinitely.
Hold N Frames
Hold the first frame for a certain number of frames; before that, show black frames.
Pre Hold
The number of frames to hold the first frame for, if 'Hold N Frames' is selected.
Post Extend
For sequences with a frame range, this determines how to show frames after the last frame.
Black Frames
Display black.
Cycle
Cycle the sequence, always playing it forward.
Mirror
Cycle the sequence, reversing the direction every cycle.
Hold
Hold the last frame indefinitely.
Hold N Frames
Hold the last frame for a certain number of frames; after that, show black frames.
Post Hold
The number of frames to hold the last frame for, if 'Hold N Frames' is selected.
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
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/rotoshape.svg) Rotoshape](https://www.sidefx.com/docs/houdini/nodes/cop2/rotoshape.html)