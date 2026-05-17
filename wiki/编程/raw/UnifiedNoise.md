---
type: concept
title: UnifiedNoise
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "4c82ac6fe9f5"
---
介绍vex中可用的所有噪声类型的统一接口和均匀输出范围。
## Parameters
Houdini ships with the [Unified Noise VOP](https://www.sidefx.com/docs/houdini/nodes/vop/unifiednoise.html "Presents a unified interface and uniform output range for all the noise types available in VEX.") and the [Unified Noise - Static VOP](https://www.sidefx.com/docs/houdini/nodes/vop/unifiednoise_static.html "Presents a unified interface and uniform output range for all the noise types available in VEX."). The “static” variant is pre-compiled so it is faster inside a VOP network. The only difference with the static node is that you must set the noise type and fractal type in the parameters (you cannot vary them using VOP inputs).
If you are working interactively in a VOP network and don’t need to dynamically change the noise type, you probably want to use the “static” version for better speed.
(If you promote parameters from a regular Unified Noise up to a subnetwork or material, it will also be compiled and will become as fast as the static version.)
This node lets you play with parameters on the **Construction** tab to design an interesting noise with `0-1` output, and then use the parameters on the **Output** tab to condition the output to the range you need.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unifiednoise_types.jpg)
This node is designed to have most of its interface promoted up to the parent material. to promote the UI for this node, you must choose **Promote Interface ▸ UI + Links + Inputs** to trigger scripts on the node to promote and create parameters up on the parent node.
```
Tip
The noise functions sometimes give artifacts or an area of static results around offset `0`, so you want want to always begin designing your noise with non-zero values in the offset.
```
### INPUTS
The data type of the position (`pos`) input is controlled by the **Signature** parameter.
The VOP has inputs for dual positions (`pos` and `pos2`) and weights (`kpos` and `kpos2`). These fields are output by [Pyro simulations](https://www.sidefx.com/docs/houdini/pyro/pyro.html) when using dual rest fields. The weights allow you to indicate the current importance of each rest field. For example, if the first rest field is the most important, you would set `kpos` high and `kpos2` low, and then as you gradually switch to the second rest field, lower `kpos` and raise `kpos2`. These values are output by DOPs.
### OUTPUTS
`noise`
The output of the noise function. The data type of this output is controlled by the **Signature** parameter.
`x_avg`
The calculated average of the noise.
`x_oct`
The actual number of octaves in the output. This may differ from the number of octaves requested in the parameters. For example, if you request 2000 octaves but the filtering of the output means that number of octaves can’t be used.
`x_off`
The offset of warping in the noise space.
### PARAMETERS
Signature
Sets the data types this node expects for the inputs, and the data type of the output. This allows you to integrate the noise with various other VOPs. If you choose a **Noise type** that doesn’t need this many components, the node will simply not use/set every component of the input/output.
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
Frequency
The frequency of the noise. Higher values give smaller scaled details in the noise.
Offset
The offset of the input into the noise function. If you visualize the noise as a 2D graph or 3D height field, this has the effect of “panning” across the space of possible noise outputs. If you have the general noise effect you want but just want to get a different set of values for a different look, try changing the offset.
Periodic
Turn this on to use a variant of the chosen **Noise type** that repeats. This can be useful for making tiled patterns.
Period
When **Periodic** is on, the multiple of the input range before the noise pattern repeats.
Note
If Lacunarity is not 2, successive octaves will not have matching periods so a periodic noise won’t be built.
Fractal
The fractal controls let you add additional fractal noise _on top of_ the output of the basic noise type.
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
The following parameters are available when **Fractal type** is not “None”.
Max octaves
The number of iterations of distortion to add to the output of the basic noise. The more iterations you add, the more “detailed” the output. Note that the output may have fewer octaves than this parameter (that is, increasing the parameter will eventually stop adding detail), because the node eventually stops when there’s no more room to add more detail in the output.
Lacunarity
The frequency increment between iterations of fractal noise added to the basic output. Note that you can use a negative value.
Roughness
The scale increment between iterations of fractal noise added to the basic output. The higher the value the larger the “jaggies” added to the output. You can use a negative value for roughness.
Warping
Lattice warp and gradient warp are two methods for adding “fractal-ness” to the basic noises by warping the noise space.
Enable Lattice Warp
Adds “stringiness” or “wiriness” to standard noise.
Accumulate Lattice Warp
When **Lattice Warp** is on, this accumulates the warp for each iteration (octave) of added fractal noise. When used in images, this can add interesting smudgy effects, and interesting landmarks when used for terrain.
Enable Gradient Warp
Enables a slider to widen the peaks or valleys of the noise output.
Accumulate Gradient Warp
When **Enable Gradient Warp** is on, this accumulates the warp for each iteration (octave) of added fractal noise.
Gradient Warp
Widens the peaks or valleys of the noise output.
Flow Rotation
When **Noise type** is “Flow”, this controls the rotation of the “swirl”, from `0` to `1`. Because this parameter is fractional, you can’t just use `$F` to animate it, since all integral values will look the same, representing a complete revolution. Instead, try something like `$FF / 100`.
Output correction
The output is guaranteed to be in the range `0-1`. If you need different output, you can use the parameters on this tab to conveniently condition the output without messing with your noise parameters.
Fold
“Flips” values below the median to be above the median, so all valleys become peaks. (Note it flips across the _median_, not `0`.) If the median is `0`, this is like taking the absolute value.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_fold1.jpg) ![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_fold2.jpg)
Bias (checkbox)
Enables the bias controls to nudge values up or down.
Bias
Moves the output down or up toward `0` or `1`.
Gain
Enables the gain controls to increase or decrease the contrast.
Gain
Increases or decreases the contrast from 0.5 in the output.
Complement
Outputs the numerical complement (`1 - x`) of the computed noise. Basically turns the output upside-down.
![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_sine.jpg) ![](https://www.sidefx.com/docs/houdini/images/nodes/vop/unoise_complement.jpg)
Output range (clamped)
Enables the **New minimum** and **New maximum** parameters to allow you to map the noise, which is normally in the `[0,1]` range, to a different range of values.
New minimum
When **Output range** is on, remaps the output so `0` values become this value.
New maximum
When **Output range** is on, remaps the output so `1` values become this value.
Final amplitude
Scales the final conditioned output up or down.
Filter Scale
A scale on the filter width to use in shading a shading context.