---
type: concept
title: Rotoshape
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "6d917580177e"
---
绘制一条或多条曲线或图形。
### Parameters
Rotoshape lets you draw and animate multiple curves and shapes. You can draw shapes freehand, select from a list of presets, or copy an existing shape. Each shape has its own color, feathering, closure (open, closed, hollow) and transform.

A rotoshape node can draw an unlimited number of shapes. By default, the node composites the shapes using Over, but you can choose a different operation. For example, you can use Subtract or XOR to cut holes in other shapes. The node composites shapes on black starting with shape 1.

This COP node is a [generator](https://www.sidefx.com/docs/houdini/nodes/cop2/_generators.html).

The RotoShape state has two modes - Create mode and Edit mode. Initially RotoShape is in Create mode.

## Create Mode

Create mode is where new shapes are added - either freehand drawn curves or preset shapes. Once the shape is created, press 'Done' in the toolbox or RMB Click in the viewport to finish the shape. To quit this state without creating a curve or shape, hit ⎋ Esc or press 'Cancel' in the toolbox.

![](https://www.sidefx.com/docs/houdini/nodes/images/RotoShapeCreationMode.jpg)

_From left to right, the UI controls for Create mode are:_

-   **Curve Type** - Polygon or Bezier
    
-   **Shape Type** - Curve, Regular Polygon, Star or Circle
    
-   Parameters specific to the shape type:
    
-   **Closure Type** - Open, Closed or Hollow
    
-   **Copy** - Copies an existing shape.
    
-   **Cancel** - Exit create mode without creating the shape. ⎋ Esc
    
-   **Done** - Complete create mode and create the shape. N
    

To...

Do this

Create a freehand curve

1.  Enter Create mode if you are not already in it.
    
2.  Set the shape type to 'Curve'.
    
3.  Select either Polygon or Bezier for the curve type. This can be changed in Edit mode as well.
    
4.  Create a freehand curve by clicking to plot a single point, or dragging to create a curve stroke. ⌦ Del will delete the last stroke (or plotted point), while ⇧ Shift + ⌦ Del will delete only the last point.
    
5.  You can specify if the curve is closed (solid shape), open (open curve) or hollow (closed curve) by using the menu in the toolbar. This can also be changed in Edit mode.
    
6.  When you are ready to complete the curve, RMB click in the viewport or press 'Done' in the toolbox.
    

Create a preset shape

1.  Enter Create mode if you are not already in it.
    
2.  Set the shape type to one of the following:
    
3.  Use the transform handle to position the shape. The transform does not carry over into the Edit mode’s transform for the shape, so it is useful for setting the initial orientation without having a dirty transform in Edit mode.
    
4.  When you are finished, RMB click in the viewport or press 'Done' in the toolbox to create the shape and return to edit mode.
    

Copy an existing shape

1.  Enter Create Mode if you are not already in it.
    
2.  Press the 'Copy' button and select one of the existing shapes. The shape is copied and you are returned to Edit mode.
    

## Edit Mode

Edit mode allows you to edit the shapes by using handles. In this mode, you can animate the shape. The parameters for the current shape are found in the toolbox. To add another shape, press 'New' in the toolbox or RMB Click in the viewport.

![](https://www.sidefx.com/docs/houdini/nodes/images/RotoShapeEditMode.jpg)

_From left to right, the UI controls for Edit mode are:_

-   **New** - Create a new curve or shape. N
    
-   **Show Current/All Curves** - Show the handles for only the current shape, or all the shapes.
    
-   **Current Shape** - Selects the current shape, if there is more than one. Only the current shape’s parameters are shown in the toolbox. If Show Current Shape is on, this also changes the handles visible in the viewport. B
    
-   **Curve Type** - Polygon or Bezier
    
-   **Composite Operation** - Selects the compositing operation used to draw the shape into the image. Normally only needed for the second and subsequent shapes.
    
-   **Closure Type** - Open, Closed or Hollow.
    
-   **Thickness** - Determines the global thickness of open and hollow shapes. Each point on the shape can thickened individually by using the MMB slider on the point.
    
-   **Feather** - Turns on feathering for the shape, and sets the minimum feather amount. Each point can be feathered individually by enabling the feather handle (W while over the point, or use the RMB menu on the Point and select 'Display Feather Handle').
    
-   **Color** - Pops up a color editor for the color and alpha of the shape.
    
-   **Fill Inside/Outside** - Inverts the filling of the shape.
    
-   **Delete Current Curve** - Deletes the current curve.
    

Edit Mode allows you to modify the shape of the curve as well as its parameters. To show the parameters of a given shape, change the 'Current Shape' menu to the shape of interest. If 'Show Current Shape' is enabled, this will also change which shape’s handles are displayed in the viewport.

To...

Do this

Select a different shape to edit

You can show the handles of another shape two ways:

1.  Using the 'Current Shape' menu in the toolbox, select another shape.
    
2.  Turn on all the shapes' handles using the 'Show All Handles' button in the toolbox.
    

Use polygon handles

1.  LMB drag the point to change its location.
    
2.  If the curve closure is Open or Hollow, using MMB slider on the point will change that point’s thickness.
    
3.  If feathering is on, press W while over the point to display the feather handle (or use the 'Show Feather Handle' menu item in the point’s RMB menu)
    

Use Bezier handles

1.  LMB drag the center point to change its location.
    
2.  If the curve closure is Open or Hollow, use the MMB slider on the point to change that point’s thickness.
    
3.  If feathering is on, press W while over the point to display the feather handle (or use the 'Show Feather Handle' menu item in the point’s RMB menu)
    
4.  LMB click the bezier point to tie or untie the slopes.
    
5.  Grabbing the slope line will only change the direction, without changing the length.
    
6.  Grabbing the ball at the end of the slope allows you to change both the length and the direction.
    
7.  To change the slope length only, hold down ⌃ Ctrl while moving the slope ball. Alternatively, use the MMB slider on the slope to increase or decrease its length.
    
8.  For tied slopes, changing the slope length with automatically scale the other slope. To only affect the one slope, hold down ⇧ Shift while scaling the slope.
    
9.  For untied slopes, one slope is completely independent of the other. To change both at the same time, hold down ⇧ Shift.
    

Select shape points

1.  To box select, LMB drag the selection box around the points to select. You can also use a Alt + LMB drag to avoid accidentally moving points or slopes.
    
2.  To pick a specific point, Alt + LMB click the point.
    
3.  Points are always added to the selection. To clear the selection, box pick or Alt + LMB pick empty space.
    

Insert a point

⌃ Ctrl-click near the segment you want to insert the point on (it doesn’t have to be on the curve).

If you have more than shape, and have displayed all the shapes' handles, the shape with the curve edge closest to the point clicked will be the one to receive the new point. To ensure the point gets added to the correct shape, display only the current shape’s handles, and make the current shape the one you want to insert a point on.

Delete a point

-   Using the RMB handle menu, select 'Remove Point'.
    
    _or_
    
-   Move the mouse over the point and press ⌦ Del.
    

Animate a shape’s points

Pressing K in the viewport to set a keyframe, just like animating other handles. However, the scope of the keyframe varies depending on the handles visible and selection:

Mouse pointer located over a handle

Only the handle under the point is keyframed.

All Shapes' Handles shown, no selection

Every shapes' points and transforms will be keyframed.

Current Shape’s Handles shown, no selection

The current shape will be keyframed, but none of the other shapes will be.

Selected Handles

Only the selected handles will be keyframed. This includes transform handles, if they are selected.

To avoid keyframing the transform, temporarily turn the transform handle off by using the transform’s RMB menu turn off 'Display Handle'. To get the handle back, you’ll need to open the bar to the left of the viewport and toggle the transform icon for the shape.

_Or_

Keyframe the transform anyway and use the RMB menu on the transform to 'Remove Keyframe' (make sure the handle isn’t selected).

Feather the edges of a shape

1.  Turn on feathering toggle in the toolbox.
    
2.  Adjust the global feather to the amount of feather that you want on the curve using the toolbox feather amount.
    
3.  To adjust individual points, turn on the feather handle by pressing W while the mouse is over the point, or, using the point’s RMB menu, select 'Show Feather Handle'.
    
4.  Pull the feather handle outwards from the point to increase the feather.
    
5.  The feather falloff can also be adjusted in the parameter dialog, to change it to Linear, Ease In, Ease Out, Ease In Ease Out or Gaussian. The default is Gaussian.
    

## Hotkeys

Create mode

⌦ Del - Delete the last curve stroke.

⇧ Shift + ⌦ Del - Delete the last curve point.

N - Complete the curve or shape.

⎋ Esc - Cancel Create mode

Edit mode

N - Create a new curve or shape.

B - Toggle between display of the current shape’s handles and all shapes' handles.

⌦ Del - If over a point, delete that point.

W - If over a point, show the feather handle.

K - Set a keyframe for selected or visible handles.

⇧ Shift + K - Remove a keyframe for selected or visible handles.

## PARAMETERS

## RotoShape

Level of Detail

The level of detail when rendering smooth curve shapes. Higher values create smoother shapes. A LOD of 2 is normally adequate. Lower this value will speed up rendering slightly.

Antialias

The level of antialiasing, both horizontally and vertically. This can vary from 1 to 8. Higher levels of antialiasing will produce more levels of gray on edges, but increase rendering time. The product of the horizontal and vertical antialias setting cannot exceed 64 (8×8).

Number of shapes

Use this to add or remove controls for additional shapes.

## Shape controls

### Curve

Spline Type

The primitive type of the created curve.

Shape Composite

The composite operation used to add the shape to the image. The shapes are composited starting with shape #1, up to the last shape.

Fill

The closure type of the shape.

Open

Useful for curves, this creates an open shape with a given thickness.

Closed

Creates a solidly filled, closed shape.

Hollow

Creates a hollow shape with a closed curve of a given thickness.

Thickness

For open and hollow shapes, this determines the global thickness of the curve. Each point can also further modify the thickness.

Feather

If on, feathering is enabled, providing a very soft edge for the shape.

Feather Dropoff

How the feathering is interpolate across the edge of the shape.

Feather Ramp

Defines the dropoff when `Feather Dropoff` is set to `Ramp`.

Feather Width

The global feathering width. The shape will always have at least this much feathering.

Color

The color and alpha of the shape. The shape is not pre-multiplied.

Fill Outside

If on, the filling of the shape is inverted. For example, closed shapes will leave their interior unfilled and fill everywhere else.

Translate

The translate component of the shape’s transform, which is applied first. It is expressed in UV units `(1 = X/Y res pixels)`.

Scale

The scale component of the shape’s transform, applied second.

Rotation

The rotation of the shape.

Pivot

The pivot of the shape’s transform, about which the scale and rotation occur. It is an offset from the translated position expressed in UV units.

### Points

This tab contains all the points in the current shape. Usually you will edit the points interactively rather than using these controls.

Number of points

You can use this to add or remove additional points.

Point n

The UV position of the point.

Tie Slopes

The slope position of the point, for bezier shapes. If the toggle is on, the slopes are tied.

Thickness

The point thickness, which is multiplied by the global thickness. Only applicable for open or hollow shapes.

Feather

The point feather, which is added to the global feather. Only applicable when feathering a curve.

#### Mask

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

#### Image

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

#### Sequence

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

## INPUTS

Image to Add To

Merges the generated plane with the planes from this input.

Mask Input

Masks the operation, which restricts the generated output to the masked area (or to outside the masked area).

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

[BasicMatting](https://www.sidefx.com/docs/houdini/examples/nodes/cop2/rotoshape/BasicMatting.html)Example for [Rotoshape](https://www.sidefx.com/docs/houdini/nodes/cop2/rotoshape.html) compositing node

Using the Rotoshape COP interactively to create mattes.

Load Launch

[RotoshapeMasking](https://www.sidefx.com/docs/houdini/examples/nodes/cop2/rotoshape/RotoshapeMasking.html)Example for [Rotoshape](https://www.sidefx.com/docs/houdini/nodes/cop2/rotoshape.html) compositing node

How to create a matte with the Rotoshape COP to restrict the area of effect of another COP.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/shape.svg) Shape](https://www.sidefx.com/docs/houdini/nodes/cop2/shape.html)