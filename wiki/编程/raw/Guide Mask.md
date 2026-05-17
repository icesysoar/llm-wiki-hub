---
type: concept
title: Guide Mask
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "e90a4ad5df31"
---
为其他修整操作创建遮蔽属性。
### Parameters
This operator creates and manipulates attributes that can be used to drive other grooming operations.
## PARAMETERS
## General
### Group
Group Type
The type of input group.
Group
A group to use for masking. Any operations will only be applied to the primitives or points within this group.
Set Ungrouped to Zero
Sets the mask value of any primitives or points not specified within the **Group** parameter to zero.
### Input Mask
Input Mask
The initial value of the mask. Other masking operations are multiplied with this value.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
### Output
Visualize Mask
Visualize mask values in the viewport.
Output Type
The type of attribute to create.
Primitive
Create a primitive attribute.
Point
Create a point attribute.
Output Attribute
The name of the output mask attribute.
Create Group of Affected Primitives
Create a group of all primitives that have non-zero mask values.
When **Output Type** is **Point**, any primitives that have any point with a non-zero value are added to this group.
Group
The name of the group of affected primitives.
Output Integer Attribute
Create an integer attribute with a specific value for any affected primitives.
Integer Attribute
The name of the integer attribute.
Value
The value to set the integer attribute to.
Mask Threshold
The integer attribute is only set on primitives that have at least this mask value.
## Additional Masks
### Noise Mask
Use Noise Mask
Masks using a noise function. When a 'rest' attribute it exists it is used as the noise space.
Amount
The amount of noise to apply.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Frequency
The frequency of the noise.
Gain
Contrast of the noise function.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Bias
Bias the noise towards low or high values.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Center Noise Around One
Create noise with an average around `1.0`. This is useful for creating attributes that are used as scale factors rather than masks.
With this disabled, noise is in the `0` to `1` range, with it enabled it is `0` to `2`.
Fractal Noise
Apply fractal noise on top of the base noise.
Max Octaves
Maximum number of octaves to generate.
Lacunarity
The frequency increment of each successive fractal noise octave.
Roughness
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
### Length Mask
Use Length Mask
Mask curves based on their length.
Mode
Controls how curve length is compared against the **Length** parameter below.
Longer Than
Select curves that are longer than the length specified by **Length** below.
Same As
Select curves that are about the same length the one specified by **Length** below.
Shorter Than
Select curves that are shorter than the length specified by **Length** below.
Normalized Ramp
Maps the length of each curve to ramp parameter. The ends of the ramp correspond to the shortest and longest curve in the input geometry.
Range Ramp
Maps the length of each curve to ramp parameter. The ends of the ramp correspond to the are explicitly specified by the **Minimum Length** and **Maximum Length** parameters.
Length
The reference length to compare against.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Falloff Range
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Falloff Decay
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Minimum Length
The start of the ramp when **Mode** is set to **Range Ramp**.
Maximum Length
The end of the ramp when **Mode** is set to **Range Ramp**.
Presets
A set of useful presets for the **Length Ramp** parameter.
Selecting an item from the drop-down applies the preset.
Apply
Apply the selected preset again.
Length Ramp
The ramp that curves are mapped to in **Normalized Ramp** mode and **Range Ramp** mode.
### Skin Curvature
Use Skin Curvature Mask
Mask curves based on the skin curvature at their root position.
Concave Maximum
The maximum concave curvature to consider. Any curvature beyond this is mapped to the start of the ramp.
Convex Maximum
The minimum convex curvature to consider. Any curvature beyond this is mapped to the end of the ramp.
Smoothing Strength
Smooth curvature values. This can be useful to smooth out spikes in curvature which can be caused by certain topological features.
Presets
A set of useful presets for the **Curvature Ramp** parameter.
Selecting an item from the drop-down applies the preset.
Apply
Applies the selected preset again.
Curvature Ramp
Curvature is mapped to this ramp. Maximally concave areas are mapped to the start of the ramp, flat areas to the center and maximally convex areas to the end.
Tip
Try out some of the **Presets** above to get a feeling for how this ramp affects the mask.
### Geometry Mask
Use Geometry Mask
Mask curves on the inside or outside of a surface geometry connected to the fourth input.
Voxel Size
The voxel size used to generate a VDB SDF representation of the connected geometry.
Interior Range
Controls how far into the interior of the surface the mask is applied. The band specified by exterior range and interior is mapped to the **Depth Ramp** below.
Exterior Range
Controls how far outside of the surface the mask is applied. The band specified by exterior range and interior is mapped to the **Depth Ramp** below.
Presets
Applies useful presets to the **Depth Ramp**.
Depth Ramp
Blur Voxel Values
Blur the generate mask volume.
Blur Radius
Blur voxel values within this radius.
Blur Iterations
The number of times to blur voxel values.
### Random Mask
Use Random Mask
Mask a percentage of randomly selected primitives.
Previous Masks
Controls how other masks influence are combined with the random values.
Multiply Fraction And Value
The fraction is multiplied with any other masks, meaning fewer primitives will be selected in areas that have low mask values.
The output mask value is also multiplied by the previous mask values.
Multiply Fraction
The fraction is multiplied with any other masks, meaning fewer primitives will be selected in areas that have low mask values.
The output value of selected primitives is not influenced by previous masks. It is purely defined by the **Variation**, and **Gain** parameters of the random mask.
Multiply Value
The defined by the **Fraction** parameter is used as is. Only the output values are multiplied with the previous mask values.
Seed
The seed value to use for the random mask. This is combined with the primitive number or the 'id' attribute of the primitive to generate random values.
Fraction
The fraction of primitives select. `1.0` selects all primitives.
Variation
Creates some variation in the output values of selected primitives. At `0.0`, all primitives are set to a mask value of `1.0`.
Gain
The contrast of output values when **Variation** is set to a value higher than `0.0`.
### Curve Mask
Use Curve Mask
Mask curves along their length using a ramp parameter.
Range In Absolute Length
**Range Min** and **Range Max** are specified in terms of the length of the curve, rather than as normalized value between `0.0` and `1.0` for the start and end of each curve.
Range Min
Specifies the start position of the **Curve Mask Ramp** along the length of the curve.
Range Max
Specifies the end position of the **Curve Mask Ramp** along the length of the curve.
Effect Position
Specifies the position where the highest mask value is applied within the range.
Falloff
Specifies how the ramp drops of from the peak point.
Influence Width
Specifies how wide the area of influence is.
Curve Mask Ramp
Controls how point along the length of the curve is affected. This can be controlled directly or set via the parameters above.
See also
!Guide Process#Guide Process Geometry
!Hair Clump#Hair Clump Geometry
