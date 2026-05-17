---
type: concept
title: Attribute Noise
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "dc4dc7995588"
---
在几何属性中添加或生成噪声。
### Parameters
The Attribute Noise SOP provides a simple interface for quickly adding coherent noise to `float` and `vector` attributes, without needing to create VOP networks or write VEX code. All of the models provided by the [Unified Noise VOP](https://www.sidefx.com/docs/houdini/nodes/vop/unifiednoise.html "Presents a unified interface and uniform output range for all the noise types available in VEX.") can be used with this node.
Tip
While this node has a simple and straightforward interface, the following nodes might allow for a finer control over modifying common attributes such as: `pscale`, `life`, `variant`, `v`, and `N`.
-   [Attribute Adjust Float](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustfloat.html "Modifies floating point attribute values on the incoming geometry.")
-   [Attribute Adjust Integer](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustinteger.html "Modifies integer attribute values on the incoming geometry.")
-   [Attribute Adjust Vector](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustvector.html "Modifies values for a vector-type attribute on the incoming geometry.")
#### Tips and notes
-   If an attribute exists, you can overwrite or combine the noise with the current values according to the **Operation** parameter. If an attribute doesn’t exist, this node will create it.

General
Group
The subset of the input geometry to apply the modifications to. Leave this blank to affect all elements. The type of the group is controlled by the **Attribute Class** parameter.
Blend
Blends between the incoming attribute and the output attribute value. A blend of `0` means that no adjustment takes place: the incoming attribute value is the output value. Likewise, a value of `1` will output the adjusted value, ignoring the initial value. Blending can be done either by uniform value (**Constant**) or by value of the **Blend Attribute** (when the menu on the right of this parameter is set to **Use Attribute**).
Blend Attribute
A float attribute between the range `0` to `1` to use as blend value. This attribute must be present on the appropriate elements (as set by **Attribute Class**). A blend value of `0` means that no adjustment takes place: the incoming attribute value is the output value. Likewise, a value of `1` will output the adjusted value, ignoring the initial value.
Attribute Type
Choose whether the attributes are float attributes or vector attributes. The node will switch to generate 1D or 3D noise according to this choice.
Attribute Names
The name of the attribute to generate noise into. The class of attribute (such as point, face, or vertex) is controlled by the **Attribute Class** parameter. If the attribute does not exist, this node will create it. You can specify a space-separated list of names to add noise to multiple attributes at once.
Component Scope
When the attributes are vector attributes, specifies which vector components will be changed by this node. This filter applies as the last step on the adjustment value generation and it is useful to limit the dimension of the noise.
Attribute Class
The level at which to look for/create the listed attributes: detail (whole geometry), primitives (faces), points, or vertices.
Noise Along Vector
When the attributes are vector attributes, and the checkbox is on, the direction of the noise will be controlled by the **Vector Attribute** parameter and the noise will change the length of this vector. This is useful when you need to displace geometry along it’s normal direction.
Vector Attribute
The attribute to use to specify the direction of the generated noise when **Noise Along Vector** is enabled. By default it will displace the geometry along it’s normal vector.
Noise Range
Range Values
How to compute the minimum and maximum noise values. This menu lets you quickly set up common ranges (from zero to N, or from -N to N).
Positive
From 0 to the **Amplitude** value.
Zero Centered
From negative **Amplitude** to positive **Amplitude**.
Min/Max
Explicitly set **Min Value** and **Max Value**.
Min Value
Max Value
Custom Range
0
1
0 to 1
5
10
5 to 10
-5
7
-5 to 7
Negative
From negative **Amplitude** to 0 value.
Min + Range Length
The range contains all values between **Min Value** and **Min Value + Range Length**. For instance, if **Min Value** is `2` and **Range Length** is `5`, the minimum and maximum limits of the range will be `2` and `7`, respectively.
Min Value
Range Length
Custom Range
0
1
0 to 1
5
10
5 to 15
-5
7
-5 to 2
Middle ± Range Length
The range contains all values between **Middle Value - Range Length** and **Middle Value + Range Length**. For instance, if **Middle Value** is `8` and **Range Length** is `4`, the minimum and maximum limits of the range will be `4` and `12`, respectively.
Middle Value
Range Length
Custom Range
0
1
-1 to 1
5
5
0 to 10
-5
7
-12 to 2
Note
Behavior in this mode is different from **Middle ± Range Length** on the attribute adjust nodes, where the resultant interval spans from **Middle Value - Range Length / 2** to **Middle Value + Range Length / 2**.
Operation
How to combine the generated noise with an existing attribute value. If the target attribute does not exist on the input geometry, this menu is ignored.
Set Initial
If the attribute doesn’t exist, set its value. If the attribute does already exist, don’t modify it.
Set Always
Overwrite any existing value.
Add
Add the generated noise value to the existing value.
Subtract
Subtract the generated noise value from the existing value.
Multiply
Multiply the generated noise value by the existing value.
Minimum
Use the lower of the generated noise value and the existing value.
Maximum
Use the higher of the generated noise value and the existing value.
Amplitude
When **Range Values** is **Positive Values**, the generated noise is from 0 to this value. When **Range Values** is **Negative Values**, the generated noise is from the negative of this value to 0 value. When **Range** is **Zero Centered Values**, the generated noise is from negative this value to positive this value.
When **Attribute Type** is **Vector**, click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button for separate amplitudes along each axis.
Amplitude Scale
When **Attribute Type** is **Vector** and you turn on the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button, this lets you scale the **Amplitude** separately across each axis.
Min Value
When **Range Values** is **Min/Max**, the lower limit of the range.
When **Attribute Type** is **Vector**, click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button for separate minimums along each axis.
Min Value Scale
When **Attribute Type** is **Vector**, **Range Values** is **Min/Max**, and you turn on the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button, this lets you scale the **Min Value** separately across each axis.
Max Value
When **Range Values** is **Min/Max**, the higher limit of the range.
When **Attribute Type** is **Vector**, click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button for separate minimums along each axis.
Max Value Scale
When **Attribute Type** is **Vector**, **Range Values** is **Min/Max**, and you turn on the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button, this lets you scale the **Max Value** separately across each axis.
Middle Value
When **Range Values** is **Middle ± Range Length**, this value lies in the center of the custom range.
When **Attribute Type** is **Vector**, click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button for separate middle values along each axis.
Middle Value Scale
When **Attribute Type** is **Vector**, **Range Values** is **Middle ± Range Length**, and you turn on the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button, this lets you scale the **Middle Value** separately across each axis.
Range Length
When **Range Values** is **Min + Range Length** or **Middle ± Range Length**, sets the length of the custom range.
When **Attribute Type** is **Vector**, click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button for separate the range along each axis.
Range Length Scale
When **Attribute Type** is **Vector**, **Range Values** is **Min + Range Length** or **Middle ± Range Length**, and you turn on the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button, this lets you scale the **Range Length** separately across each axis.
Output Raw Value
When this is on, the distribution of values is non-uniform, being more likely to fall near the center of the range than the edges. When this is off, values have a more uniform distribution across the range.
This example shows noise where the **Element Size** is animated. The left side has this parameter on, the right side has this parameter off.
Enable Remap Ramp
Turn this on to shape the output of the noise with a ramp.
Remap Ramp
When **Enable Remap Ramp** is on, this ramp lets you control the output of the noise function. The horizontal axis represents the range (minimum on the left, maximum on the right). The vertical axis represents the number to output when the noise function generates that point within the range.
The default ramp (diagonal from bottom-left to top-right) outputs each number “as itself”.
Noise Pattern
Noise type
The type of noise to generate. Different algorithms give noise with different characteristics.
Fast
The default. A faster and more interesting variant of Perlin noise.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_simplex.jpg)
Sparse Convolution
Sparse Convolution noise is similar to Worley noise. Does not have artifacts at grid points.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_sparse.jpg)
Alligator
Produces a bumpy output. Named for its alleged resemblance to alligator skin.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_alligator.jpg)
Perlin
A noise where the visual details are the same size. [Wikipedia article](http://en.wikipedia.org/wiki/Perlin_noise)
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_perlin.jpg) ![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_periodic_perlin.jpg)
Perlin Flow
A noise that’s stable over time, like a rotated Perlin noise, useful to create noise that seems to swirl and flow smoothly across time. Use the **Flow rotation** parameter below to control the rotation.
Simplex
A noise similar to Perlin but the noise lattice is on a tetrahedral mesh rather than a grid. This can avoid the grid patterns often visible in Perlin noise.
Worley Cellular F1
Produces cellular features similar to plant cells, ocean waves, honeycombs, cratered landscapes, and so on. [Wikipedia article](http://en.wikipedia.org/wiki/Worley_noise)
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_worley_f1.jpg)
Worley Cellular F2-F1
A variant of Worley noise that produces blunted and cornered features.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_worley_f2.jpg)
Manhattan Cellular F1
A variant of Worley F1 noise that uses Manhattan distance calculation. Useful when you want unusual-looking noise.
Manhattan Cellular F2-F1
A variant of Worley F2-F1 noise that uses Manhattan distance calculation. Useful when you want unusual-looking noise.
Chebyshev Cellular F1
A variant of Worley F1 noise that uses Chebyshev distance calculation. Useful when you want unusual-looking noise.
Chebyshev Cellular F2-F1
A variant of Worley F2-F1 noise that uses Chebyshev distance calculation. Useful when you want unusual-looking noise.
Location Attribute
The node generates values for each element by sampling a noise field at the location specified by this vector attribute on the incoming geometry. If this is `P` (point position, the default), the points of the geometry will appear to swim through the noise. If you want the noise to “stick” to the points, you can copy the initial point positions into a `rest` attribute and use that attribute here instead.
Element Size
Uniform scale of elements in the noise.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button for separate scales along each axis.
Element Scale
When you turn on the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button, this lets you scale the **Element Size** separately across each axis.
Offset
Offset within the evaluated noise field (added to each axis). If you have the general noise effect you want, but want to get a different set of values for a different look, try changing the offset.
You can animate the noise using an expression such as `$T * 0.25` here. This is faster to compute than **Animate Noise**, but gives the visual effect of “panning” across the noise field, which may or may not be acceptable.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button for separate additional offsets along each axis.
Offset
When you turn on the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/decompose_transforms.svg) Per Component button, this lets you add the a separate offset along each axis.
Use VEXpression
Turn this checkbox on to use a VEXpression to override parameters based on arbitrary attribute values.
VEX Expression
A VEX expression that can [override noise parameters](https://www.sidefx.com/docs/houdini/vex/snippets.html#parameters) based on arbitrary attributes on the geometry. The comments in the default snippet (and the “Pass Through” preset in the menu to the right of the editor) show which parameters you can override, currently `pos`, `elementsize`, and `offset`.
For instance, you can use `pos += v@noise_offset;` to offset the sampling location by the value of each element’s `noise_offset` vector attribute. As another example, using `pos = v@noise_offset;` will overwrite the incoming value with the `noise_offset` attribute: this is effectively the same as using `noise_offset` as the **Location Attribute**.
Animation
Animate Noise
Vary the generated noise with time. Some noise types do not support this feature.
Applying animation this way on geometries with millions of element count is slower to compute than using expressions such as `$T * 0.25` in the **Offset** parameter to “pan” across the noise field.
Pulse Duration
When **Animated Noise** is on, this controls the rate of change of the noise pattern.
Fractal
The fractal controls let you add additional fractal noise on top of the output of the basic noise type.
Fractal Type
None
Does not add any additional noise on top of the basic noise.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_fractal_none.jpg)
Standard
Adds pseudo-random noise on top of the basic output.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_fractal_standard.jpg)
Terrain
Adds noise like “Standard” but dampens the noise in the valleys, which can be useful for generating mountainous terrain.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_fractal_terrain.jpg)
Hybrid
Like terrain, but with more sharpness in the valleys.
The following parameters are available when Fractal type is anything except **None**.
Max octaves
The number of iterations of distortion to add to the output of the basic noise. The more iterations you add, the more “detailed” the output. Note that the output may have fewer octaves than this parameter (that is, increasing the parameter will eventually stop adding detail), because the node eventually stops when there’s no more room to add more detail in the output.
Lacunarity
The frequency increment between iterations of fractal noise added to the basic output. Note that you can use a negative value.
Roughness
The scale increment between iterations of fractal noise added to the basic output. The higher the value the larger the “jaggies” added to the output. You can use a negative value for roughness.
Warping
**Lattice Warp** and **Gradient Warp** are two methods for adding “fractal-ness” to the basic noises by warping the noise space.
Lattice Warp
Adds “stringiness” or “wiriness” to standard noise.
Lattice Warp Size
Controls base feature size of the generated noise. The value applies to each axis.
Gradient Warp
Widens the peaks or valleys of the noise output.
Accumulate Lattice Warp
Accumulates the warp for each iteration (octave) of added fractal noise. This can add interesting smudgy effects when used in images, and interesting landmarks when used for terrain.
Accumulate Gradient Warp
Accumulates the warp for each iteration (octave) of added fractal noise.
Flow Rotation
When **Noise type** is “Flow”, this controls the rotation of the “swirl”, from `0` to `1`. Because this parameter is fractional, you can’t just use `$F` to animate it, since all integral values will look the same, representing a complete revolution. Instead, try something like `$FF / 100`.
Post-Process
Enable Minimum
Clamp the lower end of the generated noise values.
Minimum
When the checkbox is on, clamp values so they are never less than this value, after noise is applied. For vector attributes, the node applies this minimum to all components.
Enable Maximum
Clamp the higher end of the generated noise values.
Maximum
When the checkbox is on, clamp values so they are never greater than this value, after noise is applied. For vector attributes, the node applies this maximum to all components.
Make Vectors Unit Length
When the **Attribute Type** is **Vector**, turn this on to normalize the output values so they all have the same length (`1`).
Recompute Normals
Recomputes normals, if they exist.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribadjustfloat.svg) Attribute Adjust Float](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustfloat.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribadjustinteger.svg) Attribute Adjust Integer](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustinteger.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribadjustvector.svg) Attribute Adjust Vector](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustvector.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribrandomize.svg) Attribute Randomize](https://www.sidefx.com/docs/houdini/nodes/sop/attribrandomize.html)