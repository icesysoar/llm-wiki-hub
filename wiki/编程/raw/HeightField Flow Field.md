---
type: concept
title: HeightField Flow Field
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "2d3824b256fb"
---
根据输入的高度层，生成流量和流向层。
### Parameters
## Flow

Slump Mode

The method that the bound material layer will be slumped.

Smooth spreads the water in all possible downhill directions, causing it to fan out very quickly. Granular keeps the water as more intact packets so it tends to form sharper paths.

Rain Amount

The intensity of rainfall. Higher values correspond to more rainfall.

Rain Density

The fraction of voxels that will receive rainfall.

Spread Iterations

The number of iterations of water spreading simulation to do. More iterations result in longer and less dense flow lines.

Smoothing Iterations

A blur operation is applied this number of times to the final flow field, removing sharp jaggies and feathering the boundaries.

Copy to Mask

The flow field is copied into the mask field, making it easier to use it for later operations. The mask field is clamped to the 0..1 range. The provided scale factor is applied prior to clamping.

Adjust Height

The height field is adjusted by the flow amount. This will carve out channels where the flow occurs, useful for quick topographically driven valley construction.

## Layer Bindings

Input Layers

Rain water is added to the water layer and then slumped on the height layer to calculate the flow layers.

Height Layer

A layer whose values represent height of the height field. This layer is only modified if the adjust height is enabled.

Water Layer

A layer whose values represent initial water depth. This layer is modified to include any changes as a result of precipitation and flow.

Output Layers

Flow

A layer representing the _cumulative_ material flow. This layer has two signed components (x and y) representing the flow direction in voxel space. Because this is cumulative, if material flows left, then flows right, those two motions will cancel and the x component would be 0.

Flow Dir Layer

A layer containing vectors showing the average direction of flow at each voxel. This is converted from voxel-space into geometry space. Note it does not include any change in height.

Random Seed

Random seed to make flow field vary for the same set of variables on the same input.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/heightfield_erode.svg) Heightfield Erode](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_erode.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/heightfield_erode_precipitation.svg) Heightfield Erode Flow](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_erode_precipitation.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/heightfield_slump.svg) Heightfield Erode Flow](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_slump.html)