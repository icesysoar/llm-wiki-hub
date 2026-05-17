---
type: concept
title: Guide Process
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "51ab9bca722f"
---
使用一个或多个操作来修改指南或头发。
### Parameters
这个节点使用以下一个或多个操作来修改导引曲线。
- 旋转导引器使其指向某个方向
- 改变导引器从皮肤上抬起的程度
- 加长或缩短导引线
- 平滑导板
- 弯曲导光板
所有的操作都可以用可画的皮肤属性和纹理来掩盖。操作也可以以不同的强度影响导引曲线的一部分。

## General 常规
Group Type
The type of input group.
Group
A group to use for masking. Any operations will only be applied to the primitives or points within this group.
Curve Per Skin Point
Assume that there’s a curve primitive for every point on the skin geometry, with the primitive number of each curve corresponding to the number of the skin point at its root.
This allows the operator to get skin attribute values directly from those points, rather than interpolating values using `skinprim` and `skinprimuv`.
When the `id` attribute is present on the curves, the skin point number corresponding to the `id` of each primitive is used, and the curve and skin point counts don’t have to match.
Random Seed
Use this seed for all random operations. This causes random operations like **Set Length** (with **Randomize** enabled) to have a different effect on each curve.
Visualize Masks
Visualize the effect of **Skin Mask**, **Curve Mask**, and **Noise Mask** by coloring curves in the viewport.
## Input Mask 输入遮罩
Blend
Blends the overall effect of the operation.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
### Curve Mask 曲线遮罩
Use Curve Mask
Controls the effect of operations along the length of each curve.
Enables the curve mask. All other parameters are hidden when this is disabled.
Range In Absolute Length
When enabled the range parameters below operate in world units.
Range Min
The position along the curve where the effect of the ramp starts. Curve points before this position use the first value of the ramp.
Range Max
The position along the curve where the effect of the ramp ends. Curve points after this position use the last value of the ramp.
Note
The parameters below quickly change the overall shape of the curve to achieve often needed effects, like affecting only roots or tips. Changing any of them modifies the ramp and replaces any manual edits on it.
Effect Position
Sets the position where the curve is affected most. The root is at `0` and the tip at `1`.
Falloff
High values result in wide, bell-shaped ramp. Low values in a pointy shape.
Influence Width
Scales the falloff handles around the effect position for additional control.
Curve Mask Ramp
Controls the curve mask directly.
Source Mode
Groom Object
Load the groom from a groom object.
Groom File
Load the groom from a file.
Groom Object
Load the groom data from this source object.
Groom File
Load the groom data from this file.
## Noise Mask 噪波遮罩
Use Noise Mask
When enabled masks the effect of any operation using a noise function.
Amount
Blends the effect of the noise mask.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Noise Mask Frequency
The frequency of the noise.
Gain
High values result in more contrasted noise and fewer areas with medium values.
Bias
Biases the noise towards low or high values.
## Operations
您可以使用此节点的单个实例应用多个操作。
### Common Parameters
以下参数适用于所有操作。
Active
Controls whether this operation is applied.
Solo
If any operations have the 'Solo' enabled only those operations are applied.
Operation
The operation to apply.
Set Direction
Rotate curves towards a direction.
Set Lift
Lift curves off the skin or flatten curves against the skin.
Set Length
Lengthen or shorten curves.
Displace
Push curve points along the skin normal.
Wave
Displaces using a wave pattern.
Smooth
Average neighboring curves.
Frizz
Offset curve points using noise.
Bend
Bend curves.
Set Simulation Attributes
Sets attributes that are used by hair simulation.
Note
The following parameters are specific to each operation. They are only displayed when the corresponding operation is chosen from the **Operation** dropdown menu.
### Set Direction
Blend
Blends the overall effect of the operation.
Uniform Direction
A uniform direction to rotate towards.
Direction Attribute
A direction to rotate towards.
Direction Amount
Amount to rotate towards a direction around the skin normal. This only changes direction in the skin plane without changing how far the curve lifts off the skin.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Lift Amount
Lift curves off the skin or flatten curves against the skin to match the given direction. This only rotates away from or towards the skin but doesn’t change the orientation around the skin normal.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Mode
Rigidly Rotate
Rotates the entire curve around it’s root.
Rotate Each Segment
Rotates each segment, allowing individual segments to rotate by different amounts when using a **Curve Mask**.
### Lift
Blend
Blends the overall effect of the operation.
Randomize
Randomizes the effect per curve.
Lift
The global lift value to blend towards.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Min Lift
When **Randomize** is enabled, this is the lowest lift value used.
Max Lift
When **Randomize** is enabled, this is the highest lift value used.
Follow Skin Contour
Causes flattened curves to follow the contour of the skin, rather than just pointing straight in the direction of the skin tangent.
Results in a more natural effect but is a bit slower to compute.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
### Set Length
Mode
Set
Set curve length to an absolute value.
Add
Lengthen curves by the specified amount.
Subtract
Shorten curves by the specified amount.
Multiply
Scale curves by the specified amount.
Method
Scale
Uniformly scale curves around the root point.
Cut Or Extend
Cut or extend curves at the tip.
Blend
Blends the overall effect of the operation.
Randomize
Randomizes the operation’s effect.
Length
The length to change curves to. In **Add** or **Subtract** mode, this is the amount to change length by.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Note
This doesn’t apply to **Multiply** mode.
Min Length
The smallest length to use when **Randomize** is enabled.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Note
This doesn’t apply to **Multiply** mode.
Max Length
The greatest length to use when **Randomize** is enabled.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Note
This doesn’t apply to **Multiply** mode.
Scale Factor
Scale curve length by this factor.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Note
This only applies to **Multiply** mode.
Min Scale Factor
The lowest scale factor used when **Randomize** is enabled.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Note
This only applies to **Multiply** mode.
Max Scale Factor
The highest scale factor used when **Randomize** is enabled.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Note
Only applies to **Multiply** mode.
Cull Threshold
After changing curve lengths, cull any curves that are shorter than this value.
### Displace
Amount
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
### Make Wavy
Frequency X
The frequency of waves tangential to the skin.
Amplitude X
The amplitude of waves tangential to the skin.
Frequency Y
The frequency of waves in the normal direction of the skin.
Amplitude Y
The amplitude of waves in the normal direction of the skin.
### Straighten
Tangent Straightness
Straightens curves in the skin plane.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Normal Straightness
Straightens curves in the skin normal’s direction.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
### Smooth
Blend
Blends the overall effect of the operation.
Smoothing Mode
Object Space
Average the shape and orientation of neighboring curves.
Skin Space
Average the shape of neighboring curves while preserving their orientation relative to the underlying skin.
Search Radius
Search for neighbors within this radius. The search is performed on curve roots, so this specifies distance between roots.
Num Neighbors
The maximum number of neighbors to take into account. The actual number may may be lower when fewer neighbors are found within the **Search Radius**.
### Frizz
Frequency
The frequency of the noise function.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Random Frequency
Add a random value to **Frequency**. The random value is generated between the negated and positive value of this parameter.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Limit Frequency To Representable Values
Clip the frequency to a range that can be represented using the number of points per unit length found on each curve. Without this, high values can result in random values instead of predictable noise.
Amplitude
The maximum distance to offset curve points.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Random Amplitude
Add a random value to **Amplitude**. The random value is generated between the negated and positive value of this parameter.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
### Bend
Blend
Blends the overall effect of the operation.
Bend Axis Mode
Bend in Root Direction
Bend in the direction the root points in, relative to the skin.
Uniform Axis
Specify a uniform, global axis around which to rotate all guides.
Curve Attribute
Use an attribute on each curve as its bend axis.
Skin Attribute
Use a skin attribute as the bend axis.
Bend Axis
The bend axis to use when **Bend Axis Mode** is set to **Uniform Axis**.
Axis Curve Attribute
A vector attribute on the curves to use as the bend axis.
Axis Skin Attribute
A vector attribute on the skin geometry to use as the bend axis.
Angle
Bend curves by this angle. This is the angle across the entire length of the curve.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Random Angle
Add a random value to **Angle**. The random value is generated between the negated and positive value of this parameter.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
Randomness Bias
Biases the **Random Angle** towards the bottom or top end of the range.
This parameter can be overridden using an attribute or texture. To do this, select an option from the drop-down menu next to the parameter.
### Set Simulation Attributes
Simulation Attributes
The list of attributes to set or modify.
Active
Enable this attribute.
Attribute
The attribute to set. The dropdown provides a list of all attributes used by the [Wire Solver](https://www.sidefx.com/docs/houdini/nodes/dop/wiresolver.html).
See the [Wire Object](https://www.sidefx.com/docs/houdini/nodes/dop/wireobject.html#attributes) help for details on how these attributes influence wire behavior.
Class
This attribute class to create.
This parameter is disabled for some attributes, since they must be of a specific class.
Please see the [Wire Object](https://www.sidefx.com/docs/houdini/nodes/dop/wireobject.html#attributes) help for details.
#### Scalar Attribute Parameters
Mode
Controls how scalar values are combined with any existing attribute values.
Set
Set the attribute, disregarding existing attribute values.
Add
Set the attribute to the sum of the parameter value and the existing attribute value.
Minimum
Set the attribute to the minimum of the parameter value and the existing attribute’s value.
Maximum
Set the attribute to the maximum of the parameter value and the existing attribute’s value.
Multiply
Set the attribute to the product of the parameter value and the existing attribute’s value.
Value
The value to use for scalar attributes. Note that this may be modified by the **VEXpression** below and combined with existing attributes, as specified by the **Mode** parameter.
VEXpression
The output of this VEX expression is evaluated and combined with existing attribute values as specified by the **Mode** parameter.
The variable `value` represents the **Value** parameter.
See [VEX snippets](https://www.sidefx.com/docs/houdini/vex/snippets.html) for information on special syntax in the snippet parameter. See [the VEX chapter](https://www.sidefx.com/docs/houdini/vex/index.html "VEX is a high-performance expression language used in many places in Houdini, such as writing shaders.") for information on the VEX language.
#### Toggle Attribute Parameters
Mode
Controls how toggle values are combined with existing attribute values.
Set
Sets the attribute to the parameter value, disregarding any existing attribute values.
Minimum
Set the attribute to the minimum of the parameter value and the existing attribute’s value.
Maximum
Set the attribute to the maximum of the parameter value and the existing attribute’s value.
Toggle
Toggles the existing attribute value.
Value
The value to use for toggle attributes. Note that this may be modified by the **VEXpression** below and combined with existing attributes, as specified by the **Mode** parameter.
VEXpression
The output of this VEX expression is evaluated and combined with existing attribute values as specified by the **Mode** parameter.
The variable `value` represents the **Value** parameter.
See [VEX snippets](https://www.sidefx.com/docs/houdini/vex/snippets.html) for information on special syntax in the snippet parameter. See [the VEX chapter](https://www.sidefx.com/docs/houdini/vex/index.html "VEX is a high-performance expression language used in many places in Houdini, such as writing shaders.") for information on the VEX language.
See also
!Notes/Houdini/Houdini帮助/Guide Groom#Guide Groom Geometry
!Hair Clump#Hair Clump Geometry
!Guide Collide With VDB#Guide Collide With VDB Geometry