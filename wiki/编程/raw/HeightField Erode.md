---
type: concept
title: HeightField Erode
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "42de9801aabc"
---
计算热侵蚀和水力侵蚀的时间（框架），以创造更真实的地形。
### Parameters
This node uses rainfall, the erodibility of the soil, and entrainment rates as variables to simulate erosion and deposit buildup.

This node works iteratively during playback. It will appear to have no effect on the first frame. You need to play the animation to see the effects of the node. Once the simulation converges to something that looks good, you can export the volumes from that frame to a file (using [Height Field Output](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_output.html "Exports height and/or mask layers to disk as an image.")).

For an example of erosion, create the Mountain preset from the **Terrain FX** shelf tab and press Play.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/heightfield_erode.jpg)

## Controlling the look

Channel shape

-   Turn **Main ▸ Hydro ▸ Bank angle** down to get wide, shallow channels. Turn it up to get narrow, deep channels.
    
-   Turn **Advanced ▸ Precipitation ▸ Density** down to get narrow channels, turn it up to get wide channels.
    
-   Turn **Advanced ▸ Raindrop settings ▸ Expand radius** down to get more winding, narrow channels, turn it up to get straighter, wider channels.
    
-   Turn **Advanced ▸ Raindrop settings ▸ Blur radius** down to get deeper channels, turn it up to get softer channels.
    

Ridge shape

-   Turn **Main ▸ Thermal ▸ Cut angle** down to get sharp ridges, turn it up to get rounded ridges.
    
-   This is also affected by the **Removal rate**.
    

Lakes

-   Turn **Advanced ▸ Precipitation ▸ Evaporation rate** down to get big lakes, turn it up to get smaller or no lakes.
    
-   Turn **Advanced ▸ Raindrop settings ▸ Blur radius** down to get harsher lake edges, turn it up to get smoother lake edges.
    

Debris

-   Turn **Advanced ▸ Debris flow ▸ Quantization** down to get smoother debris flow, turn it up to get grainy debris flow.
    
-   Turn **Advanced ▸ Debris flow ▸ Max height** down to get less/no debris along ridge lines, turn it up to get more debris along ridge lines.
    
-   Turn **Advanced ▸ Debris flow ▸ Repose angle** down to get less pile-up (like sand), turn it up to get more pile-up (like rocks).
    

## Tips and notes

-   For a first pass erosion, on the **Advanced** tab:
    
    -   Under **Hydro ▸ Erodability Adjustments**:
        
        -   Set **Ramp up iterations** to `0`.
            
        -   Set **Initial factor** to `1`.
            
        -   Set **Slope factor** to `0`.
            
        
    -   Under **Hydro ▸ Riverbed**:
        
        -   Set **Sediment capacity** to `20`.
            
        
    -   Under **Debris flow**:
        
        -   Turn **Debris post smooth** on.
            
        
    
-   Removal rates can be negative to build up soil.
    
-   You can fix pitting/holes by reducing **Max debris depth**.
    
-   A masked **Grid bias** can add uneven erosion. Remap the mask to a range of `-1` to `1`.
    

## PARAMETERS

Reset Simulation

Click to clear the simulation cache. Be careful clicking this if you are not viewing the first frame. Houdini will have to re-simulate every frame up to the one you are viewing, which can be slow if you are on a high frame number.

Freeze

Freeze the output at the specified frame. This can be used to fix the output once the number of desired frames is determined.

Freeze at Frame

The number of frames to freeze the output at.

## Main

Global Erosion Rate

Controls how many meters of bedrock or debris (here entrained material) is eroded every iteration.

These options control erosion from rainfall, where the flow of water downhill weathers the terrain. You can control the amount of rainfall using the controls on the **Precipitation** tab and the water flow using the controls on the **Flow** tab.

Hydro

Erodability

Controls the softness of bedrock or debris (here entrained material). Higher values would make the terrain easier to erode, causing deeper incisions, more sediment, and more debris being deposited as a result.

erodabilitymaskmode

Controls whether to use a mask for erodability or not.

Erodability Mask

The name of the erodability mask.

Erosion Rate

Controls the rate at which erosion happens. This is a multiplier on `Erodability`.

Bank Angle

Sets the angle at which the riverbank rests relative to the riverbed. Lowre values would make wider and flatter river channels.

bankanglemaskmode

Controls whether to use a mask for bank angle or not.

Bank Angle Mask

The name of the bank angle mask.

Spread Iterations

The number of iterations of water spreading simulation to do. More iterations result in longer and less dense incisions.

Thermal

Thermal weathering is caused by frozen rocks thawing and breaking, causing features to wear down and smooth out, and material to pile up on the bottom of inclines.

Erodability

Controls the softness of the eroding layer or material layer. Higher values would make the terrain easier to erode, causing deeper incisions, more sediment, and more debris being deposited as a result.

erodabilitymaskmode

Controls whether to use a mask for erodability or not.

Erodability Mask

The name of the erodability mask.

Erosion Rate

Controls the rate at which erosion happens. This is a multiplier on `Erodability`.

Cut Angle

Set the angle at which the thermal erosion would stop cutting beyond. A lower angle would make the cuts flatter and allow for more erosion to take place.

cutanglemaskmode

Controls whether to use a mask for cut angle or not.

Cut Angle Mask

The name of the cut angle mask.

Global Seed

Random seed to make erosion vary for the same set of variables on the same input.

## Advanced

Hydro Erosion

Removal Rate

Proportion of debris from hydro erosion that is deleted. This simulates water carrying away a certain amount of debris rather than it all accumulating. A value of `0` representes no deletion. Negative values correspond to the debris being less dense than the rock, so one unit of eroded rock produces more than one unit of debris.

Max Debris Depth

Stop erosion when the debris layer reaches this depth.

Grid Bias

Controls how biased the movement of material is. Setting it to positive values would bias the movement in the direction of the principal axes, and when set to negative values, it would bias the movement at angles of 45 degree relative to the principal axes. The default value of zero would mean no bias in any direction.

gridbiasmaskmode

Controls whether to use a mask for grid bias or not.

Grid Bias Mask

The name of the grid bias mask.

Erodability

Ramp-up Iterations

The iteration where erodability would get to its maximum value.

Initial Factor

Controls how much of the set erodability would the material have on its initial movement. It would increase over the set spread iterations until the max iteration, where it would stay at maximum set value.

Slope Factor

Control how much the slope of the terrain would affect the erosion amount. Higher values would increase the slope effecting the erosion, and lower values would decrease it. Lowing this value would increase erodability as a result.

Riverbed

Erosion Rate Factor

A multiplier on `Erosion Rate` that would cause a change on the riverbed only. Increasing this value would cause a more aggressive erosion on the bed, and as a result, it would increase the depth of the incisions.

Deposition Rate

Controls the rate at which the excess sediment turns into debris. A value of zero means no sediment is turned into debris, while a value of one will convert all created sediment into debris, and the bedrock would in turn be protected more by the created debris.

depositionratemaskmode

Controls whether to use a mask for deposition rate or not.

Deposition Rate Mask

The name of the deposition rate mask.

Sediment Capacity

The amount of sediment that can be carried per unit of moving water. The higher the capacity, the longer the material can erode before it starts depositing its excess sediment.

Riverbank ~~~~

Erosion Rate Factor

A multiplier on `Erosion Rate` that would cause a change on the riverbank only. Increasing this value would cause a more aggressive erosion on the bank, and as a result, it would increase the width of the incisions.

Max Bed to Bank Water Ratio

The maximum of bank to bed water column height ratio that will be considered as river bank bank. Ratios higher than this number will not be considered as bank during erosion.

Thermal Erosion

Removal Rate

Proportion of debris from thermal erosion that is deleted. This simulates wind carrying away a certain amount of debris rather than it all accumulating. The default is `0` (no deletion). Negative values correspond to the debris being less dense than the rock, so one unit of eroded rock produces more than one unit of debris.

Max Debris Depth

Stop erosion when the debris layer reaches this depth.

Grid Bias

Controls how biased the movement of material is. Setting it to positive values would bias the movement in the direction of the principal axes, and when set to negative values, it would bias the movement at angles of 45 degree relative to the principal axes. The default value of zero would mean no bias in any direction.

gridbiasmaskmode

Controls whether to use a mask for grid bias or not.

Grid Bias Mask

The name of the grid bias mask.

Precipitation

Mask

The name of a mask layer controlling rainfall. The values in the layer are a scale on the **Amount** parameter. This is read from the second input.

Amount

The amount of rainfall simulated in each frame. If you use very large amounts you will not see much erosion since essentially the entire terrain would be under water.

Density

How closely packed rain drops are. Smaller densities give more erosion lines. Larger densities create erosion cracks that are father apart and wider.

Evaporation Rate

The rate of evaporation. A higher rate will leave less pooled water in each frame. If you want more water to pool you can increase **Amount** and/or decrease the evaporation rate.

Raindrop Settings

These settings can be used to control the size of raindrops. As you expand the radius of each raindrop you will have fewer drops to ensure the density of precipitation will stay constant.

Expand Radius

This parameter can be used to expand the radius of each raindrop to cover more cells. This produces larger drops, which could make the incisions on the terrain more sparse and increase their width.

Blur Radius

Water Flow

Quantization

Post Smooth

Smooth the water on the terrain as a post processing step.

Debris Flow

Spread Iterations

How many iterations of the spread algorithm to run for each frame.

Quantization

Controls the chunkiness of the debris flow. A lower value would make the flow more continuous and a higher value would make the flow more chunky.

Post Smooth

Smooth the debris on the terrain as a post processing step.

Water Absorption

Controls the movement of the debris based on last frame’s flow field. Higher values would stop the debris from moving near the flow channels, and lower values would cause the debris to ignore the flow channels, making it move independently.

Max Height

The maximum height of wet debris that would not move due to water absorption. Beyond this limit the debris start to move again.

Repose Angle

The maximum slope (measured in degrees from the horizontal) at which loose solid material will remain in place without sliding.

reposeanglemaskmode

Controls whether to use a mask for repose angle or not.

Repose Angle Mask

The name of the repose angle mask.

## Bedrock

Bedrock Override

Each frame of simulation the bedrock layer will be replaced with this layer in the second input. If not present, no replacement is done.

Adjust Height by Bedrock Change

When the bedrock is changed, also adjust the terrain height. This allows for mountain building where the second input has an animated mountain growing, the net new height is added each frame while erosion occurs.

Strata

Adjust Erodability by Strata

Adjusts how erodable rock is by how far it is away from the reference bedrock layer.

Strata Depth

The depth for the strata. The Strata Erodability ramp uses this depth to control how deep it represents. A positive values means the strata represents hardness below the bedrock layer. Negative values mean the strata represents hardness above the bedrock layer.

Clamp at Strata Bounds

Depths outside of the strata range will be clamped to the ends of the ramp. If clamping is off, they will repeat forming a periodic pattern.

Strata Erodability

How erodable rocks are at different strata depths. The left most is at the bedrock reference layer, the right most at the extreme strata depth. Values of 1 are fully erodable, such as loose dirt, and values of 0 prevent erosion, like granite.

## Layers

The options on this tab control what the node does if the input contains layers this node normally generates from scratch.

Remove Debris Layer from Input Height Layer

If the input already has a debris layer (for example from a previous erode node, or painted manually), keep it as debris but ignore it in this node’s erosion calculations.

Remove Water Layer from Input Height Layer

If the input already has a water layer (for example from a previous erode node, or painted manually), keep it as water but ignore it in this node’s erosion calculations.

Reset Water Layer

If the input already has a water layer, delete it.

Reset Debris Layer

If the input already has a debris layer, delete it.

Reset Sediment Layer

If the input already has a sediment layer, delete it.

Add Debris Layer to Final Height Layer

Use the values in the debris layer to add to the height layer. You might turn this off, for example, if you plan to represent the debris layer some other way, such as a separately shaded volume, or instanced rock geometry.

Add Water Layer to Final Height Layer

Use the values in the water elevation layer to add to the height layer. The default is off. This will “bake” the water level into the height values, so for example pooled water will become flat terrain. This might be useful if you just want a very simple output where you will just color the “water” areas with a flat color.

## Layer Bindings

The controls on this tab let you change the default names of the layers the node looks for/creates.

Height Layer

The name of the height volume to operate on, usually `height`.

Water Layer

The name of the layer containing the water elevation (default `water`).

Material Layer

The name of the layer containing the debris elevation (default `debris`).

Sediment Layer

The name of the layer containing the sediment elevation (default `sediment`).

Bedrock Layer

The reference layer for determining how far the current height has eroded. If not present on the input, is set to the original height of the terrain.

Flow Layer

The node outputs a `flow` layer representing the _cumulative_ water flow. This layer has two signed components (x and y) representing the flow direction in voxel space. Because this is cumulative, if water flows left, then flows right, those two motions will cancel and the x component would be 0.

Flow Dir Layer

The node outputs a `flowdir` layer containing vectors showing the average direction of flow at each voxel.

## Simulation

Start Frame

The node does not start simulation erosion until this frame. The default is `1` (the first frame).

Cache Simulation

Caches completed simulation frames in memory, for interactive scrubbing. For very large erosions, turning this option off is the best way to save memory.

Allow Caching To Disk

When **Cache simulation** is on and this option is on, the simulation will start caching frames to disk when it reaches the **Cache memory** limit. Frames on disk will be slower to load than frames in memory, but still faster than re-simulating. When this option is off and the simulation reaches the limit, it simply starts deleting the oldest frames from the cache.

Cache Memory (MB)

The maximum amount of memory (in megabytes) to use to cache simulated frames.

## Visualization

This tab contains options for visualizing the height and other layers. These are the same options as on the [Height Field Visualize](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_visualize.html "Visualizes elevations using a custom ramp material, and mask layers using tint colors.") node.

Visualize

Applies a visualization material so you can see an elevation color ramp on the height field and see the water and debris layers as different colors.

Compute Range

Fill in the **Min Elevation** and **Max elevation** parameters using the current min and max values from the height field.

Min Elevation

The minimum height value to map into the color ramp.

Max Elevation

The maximum height value to map into the color ramp.

Height Ramp

Maps height values in the height field (from **Min elevation** to **Max elevation**) into a color ramp to control coloring of the 3D height surface.

Layer 9/8/7/6/5/4/3/2/1

Enter the name of a mask layer and a color to visualize the layer as color on top of the elevation color ramp. Layer 9 appears over layer 8, which appears over layer 7, and so on.