---
type: concept
title: Planar Patch from Curves
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "135728f9271d"
---
用三角形填充一个二维曲线网络。
### Parameters
Planar Patch from Curves takes a network of 2d curves and fills it with a uniform tesselation of triangles.

The curves should provide a closed outline, but internal curves can be provided to ensure triangles edges follow interior seams.

## PARAMETERS

Build Plane

The curves are projected onto this plane for computing the inside/outside and crossing decisions.

Reverse Curves

Reverse the sense of the incoming curves. This affects the point order in the generated seam groups.

Resample Curves

Enable the resampling of the curves. They will be resampled so they have an edge spacing matching the interior edge length.

Smoothing

Controls how the curves are resampled.

Straight Edges

New points are placed along the incoming edges, keeping the edges straight. Note that since the original vertices may not be used, corners may not be interpolated.

Subdivision Curves

Treat the curves as the hull of a subdivision curve network. The start and end will interpolate, but the interior will smoothly follow the curve defined by the convex hull.

Interpolating Curves

Like subdivision curves, but using the incoming curves as interpolating points rather than a hull.

Interior Edge Length

The approximate size of the triangles to generate internally.

## Groups

Patch Name

Output a `patch` attribute on the primitives with this value. Useful for when merging multiple patches together.

Seam Groups

Prefix for generated seam groups. Each curve’s generated points will be added to an ordered group of this name followed by the curve number.

Interior Points

Create a point group to contain all the generated interior points.

Remove Interior Points from Groups

Ensure the interior points do not inherit any of the incoming point group memberships.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/planarpatch.svg) Planar Patch](https://www.sidefx.com/docs/houdini/nodes/sop/planarpatch.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/planarpleat.svg) Planar Pleat](https://www.sidefx.com/docs/houdini/nodes/sop/planarpleat.html)