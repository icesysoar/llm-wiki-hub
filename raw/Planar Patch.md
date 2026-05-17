---
type: concept
title: Planar Patch
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "ad73c0c2e6e4"
---
创建一个平的多边形面片
### Parameters
Creates a uniformly subdivided patch of triangles. The patch types allow exact specification of boundary point counts to make procedural stitching possible.

## PARAMETERS

Build Plane

Which of the major axes to align the generated patch to.

This plane position will be baked into the `materialuv` attribute.

Edge Length

The internal points will attempt to maintain this spacing. Likewise, the boundary points will be refined to this spacing if the point count is not overridden.

Output Curves

Output only the boundary curves, not the internal detail. The result can be sent to a **Planar Patch from Curves** to generate the internal detail.

## Dimensions

Shape

Rectangle

Right angle patch of fixed width and height.

Trapezoid

A tapered rectangle. Skewing is also supported.

Circle

A solid circular patch. The boundary is broken into four arcs, corresponding to a distorted square.

Ring

An annulus, or circle-with-hole patch. The outside and inside circles form the top and bottom sides of the patch. If an open arc is generated, the left and right are the seam sides.

Size

Size of the patch along the build plane.

Center

Center of the patch. For open arcs, this is the center of the circle rather than the barycenter of the generated patch.

Inner Size

Absolute size of the internal circle of the patch.

Uniform Scale

Overall uniform scaling of the patch. While this scales the size and inner size, it does not scale the edge length. To scale the edge length as well, append a **Transform SOP**.

Open Arc

Segment of open arc to use for the patch.

Seam Offset

When splitting a circular patch into four arcs, or marking the internal seam of a complete ring, this controls the location of the first cut.

Side

In Trapezoid mode, controls which side is scaled and skewed.

Taper

Amount to scale the tapered side of a trapezoid. 0 will contract to a point, and 2 will double the size.

Skew

Amount to shift the tapered side away from the center, scaled by the size. 0.5 will shift the center to match the corresponding end point on the opposing edge. 1.0 will shift a unit-taper so its bottom point matches the top of the opposing edge.

## Seams

Patch Name

Generates a `patch` primitive attribute with this name on the output, useful for tracking the origin of multiple patches when merged.

Left Seam

An ordered point group of this name will be made of all the left points.

Reverse

Reverse the sense of the left point group.

Left Points

Override the number of points to sample the left edge into, rather than based on edge length, this exact count will be used.

Right Seam

An ordered point group of this name will be made of all the right points.

Reverse

Reverse the sense of the right point group.

Right Points

Override the number of points to sample the right edge into, rather than based on edge length, this exact count will be used.

Top Seam

An ordered point group of this name will be made of all the top points.

Reverse

Reverse the sense of the top point group.

Top Points

Override the number of points to sample the top edge into, rather than based on edge length, this exact count will be used.

Bottom Seam

An ordered point group of this name will be made of all the bottom points.

Reverse

Reverse the sense of the bottom point group.

Bottom Points

Override the number of points to sample the bottom edge into, rather than based on edge length, this exact count will be used.

Interior Points

Creates a point group of all the interior points generated.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/planarpatchfromcurves.svg) Planar Patch from Curves](https://www.sidefx.com/docs/houdini/nodes/sop/planarpatchfromcurves.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/planarpleat.svg) Planar Pleat](https://www.sidefx.com/docs/houdini/nodes/sop/planarpleat.html)