---
type: concept
title: Volume Trail
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:12:00
content_hash: "d0a75c7d3c3e"
---
通过速度量计算点的迹线。
### Parameters
The Volume trail operator creates a polygon streamers from each point in the input. They are dragged along by the specified volume velocity.

This is most useful for visualizing and inspecting volumes. It can be applied after a volume slice to automatically build streamers starting from a certain slice of the volume.

If the `traillen` float attribute is present, it is multiplied with the provided trail length parameter to determine a per-point trail length.

## PARAMETERS

Group

The points in the first input that will be the sources of the streamers.

Volume

The volumes in the second input to use for the velocity field. The volumes will represent the x, y, and z components of the velocity.

For convenience, volumes may be specified directly by “name”, that is, the value of their name attribute. For example velocity from a fluid simulation can often be specified with `vel.*`.

Advection Method

Controls whether trail length specifies the number of seconds or the distance which particles will advect to make trails.

Trail Length

How long the streamers should be.

Will be multiplied by `traillen` attribute if present.

Use CFL

When growing the streamer one can either use a fixed number of points, taking that number of time steps. Or if Use CFL is set, the step size will be adjusted dynamically to better catch any changes in the velocity values.

CFL

The maximum step that will be taking, in distance, will be this fraction of the voxel diameter.

Number of Steps

The total trail length will be divided into this number of equal time steps.

Max Steps

No more than this number of segments will be added to each streamer. This avoids extreme velocity values from triggering hangs.

Keep Original Geometry

The incoming geometry will not be deleted if this is set.

Visualize

Add a Cd attribute to store the magnitude of the velocity at each location.

Detect Range

The speed corresponding to the highest visualization color will be found automatically if this is set, in which case **Maximum** will act as a multiplier.

Maximum

The speed which will correspond to the highest visualization color.

Ramp

The color lookup to use for visualization.

Color Mapping

The custom color lookup to use for visualization, when **Ramp** is set to **Custom Ramp**.

See also

-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/volumeslice.svg) Volume Slice](https://www.sidefx.com/docs/houdini/nodes/sop/volumeslice.html)
-    [![|50](https://www.sidefx.com/docs/houdini/icons/SOP/volumevisualization.svg) Volume Visualization](https://www.sidefx.com/docs/houdini/nodes/sop/volumevisualization.html)