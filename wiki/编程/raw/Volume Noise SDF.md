---
type: concept
title: Volume Noise SDF
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:12:00
content_hash: "7e0a5adfa795"
---
添加或生成噪声并取下SDF。
### Parameters
The Volume Noise SDF SOP provides a simple interface for quickly adding coherent noise to SDF voxel values, reducing the need to create VOP networks or write VEX code. All of the models provided by the [Unified Noise VOP](https://www.sidefx.com/docs/houdini/nodes/vop/unifiednoise.html "Presents a unified interface and uniform output range for all the noise types available in VEX.") can be used with this node.

## PARAMETERS

General

Blend

Blends between the incoming volume and the adjusted volume values. A blend of `0` means that no adjustment takes place: the incoming volume values is the output value. Likewise, a value of `1` will output the adjusted value, ignoring the initial value. Blending can be done either by uniform value **Constant** or by value of the **Blend Volume** (when the menu on the right of this parameter is set to **Use Volume**).

Use Volume

Specifies the volume primitive to use as a mask to blend values between the incoming volume and the adjusted value.

SDF Volume Name

The name of the volume primitive to modify with noise.

Displacement

Along Normal

Displacement is applied along the gradient of the SDF.

Closest Point

Displacement is applied at the closest point in space to the SDF.

Using Vector

Displacement along the vector components bounding the SDF. We can apply displacement along all directions or pick and chose along which axis the displacement needs to be applied.

Pre-Process

Band Voxels

None

Will not activate voxels in areas where displacement is applied. Can result in a cut-up SDF.

Automatic

Automatically expands the SDF into areas where displacement is applied.

Manual

User-defined control over where voxel need to be activated.

Use World Space Units

Sets whether the band that has to be activated is specified in Houdini Units(when **on**) or voxel units(when **off**)

Noise Value

Range Values

The adjustment value will be generated in the selected range. This parameter governs how this range is specified.

Positive

From 0 to the **Amplitude** value.

Negative

From negative **Amplitude** to 0 value.

Zero Centered

From negative **Amplitude** to positive **Amplitude**.

Min/Max

The range contains all values between **Min Value** and **Max Value**.

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

The range contains all values between **Middle Value - Range Length / 2** and **Middle Value + Range Length / 2**. For instance, if **Middle Value** is `8` and **Range Length** is `4`, the minimum and maximum limits of the range will be `6` and `10`, respectively.

Middle Value

Range Length

Custom Range

0

1

-0.5 to 0.5

5

10

0 to 10

-5

7

-8.5 to 1.5

Output Raw Value

When this is on, the distribution of values is non-uniform, being more likely to fall near the center of the range than the edges. When this is off, values have a more uniform distribution across the range.

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

Deactivate

Deactivated voxels with a zero value.

Re-Normalize

Re-noramalizes the SDF field. Any values that are not a distance from the zero-crossing is adjusted.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volumeadjustfog.svg) Volume Noise Fog](https://www.sidefx.com/docs/houdini/nodes/sop/volumeadjustfog.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volumenoisefog.svg) Volume Noise SDF](https://www.sidefx.com/docs/houdini/nodes/sop/volumenoisefog.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volumenoisevector.svg) Volume Noise Vector](https://www.sidefx.com/docs/houdini/nodes/sop/volumenoisevector.html)