---
type: concept
title: Remeshto Grid
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "7942ecd7f25d"
---
重建多边形拓扑结构，以拉直边缘，关闭小孔，并删除内部几何图形。
### Parameters
This node converts polygonal geometry into a volume (VDB), then back into polygons, as a way to recompute the polygon layout. This can make the polygonal structure more regular, as well as more or less dense. It also eliminates any interior polygons, and can close small holes.

This is often useful to clean up irregular polgyons created by photogrammetry.

This node functions like wiring polygons into a [VDB From Polygons node](https://www.sidefx.com/docs/houdini/nodes/sop/vdbfrompolygons.html "Converts polygonal surfaces and/or surface attributes into VDB volume primitives."), followed by a [Convert VDB](https://www.sidefx.com/docs/houdini/nodes/sop/convertvdb.html "Converts sparse volumes.").

Tip

This process destroys UVs on the input geometry. If you would like to transfer UVs from the original mesh down to the reconstructed surface, turn on **Transfer Surface Attributes**, or use an [Attribute Transfer node](https://www.sidefx.com/docs/houdini/nodes/sop/attribtransfer.html "Transfers vertex, point, primitive, and/or
detail attributes between two models.") for more control.

## PARAMETERS

Group

Specifies which faces in the input to convert. Leave this blank to convert all input geometry. This can be the name of a group and/or a space-separated list of [group syntax](https://www.sidefx.com/docs/houdini/model/groups.html#manual). Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/reselect.svg) Re-select icon to the right of the field to select geometry interactively in the viewer.

Source

Surface Type

**Closed volume** assumes the existing polygons create a closed surface, and converts it to a filled volume. **Thin Plate** treats the existing surface as a flat sheet, and builds a new, closed surface by offsetting a configurable distance around the sheet. Use **Thin Plate** to deal with input geometry with unshared edges, or to “puff out” an open surface into a 3D shape.

Offset

When **Surface type** is **Thin plate**, this is the offset distance (in Houdini units) of the new surface from the existing surface.

Meshing

Division Size

The size of the voxels in the intermediate volume. Lower values output higher polygon density. Turn on the “XYZ” button to the right to show individual scaling controls for each axis.

Scale

When the “XYZ” button next to **Division Size** is on, you can scale the divisions of the intermediate volume by different scales in each axis. This might be useful if a model has more detail along one axis.

Offset

Moves the voxel grid relative to the model. This has the effect of moving the polygon divisions across the model. This might be useful to make sure the output grid captures some fine detail.

Adaptivity

How much difference in polygon size is allowed. Low values give a dense mesh of more equal-sized polygons. High values give large flat polygons in flat areas, and small detailed polygons in curvy areas.

![](https://www.sidefx.com/docs/houdini/images/sop/remeshgrid_adaptivity.png)

Transfer Surface Attributes

Attempts to transfer any attributes found on the input geometry onto the equivalent remeshed geometry.

Sharpen Features

Converting geometry to a volume tends to soften sharp edges. Turn this on to try to preserve sharp edges in the output.

![](https://www.sidefx.com/docs/houdini/images/sop/remeshgrid_sharpenfeatures.png)

Edge Tolerance

When **Shapren Features** is on, the tolerance level for softened edges. Low values give softer output, high values preserve more sharpness. You can visually tweak this until you get the level of edge preservation you want.

Project to Original

When this is on, the node moves the points of the generated mesh along their normals so they lie on the original surface.

Post Smooth Iterations

When **Project to original** is on, it can generate overlapping polygons. Turn this up to try to relax overlapping polygons.

VDB Smoothing

Dilate/Erode

Expands or contracts the intermediate volume before converting it to polygons. Negative values contract and positive values expand.

Smoothing Iterations

Applies a number of smoothing steps to the intermediate volume before converting it to polygons. You can use this to remove fine detail/noise from the model.

## EXAMPLES

Load Launch

[AdaptiveRemeshToGrid](https://www.sidefx.com/docs/houdini/examples/nodes/sop/remeshgrid/AdaptiveRemeshToGrid.html)Example for [Remesh to Grid](https://www.sidefx.com/docs/houdini/nodes/sop/remeshgrid.html) geometry node

This example demonstrates how to adaptively remesh geometry using the Remesh to Grid node.