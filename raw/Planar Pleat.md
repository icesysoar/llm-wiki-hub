---
type: concept
title: Planar Pleat
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "116614370355"
---
将平面几何图形变形为褶皱。
### Parameters
Planar Pleat takes a flat geometry and applies a deformation to add a pleat. It preserves distance along the original plane, so avoids stretching or distorting the geometry.

Note

Additional seams are not generated, so the geometry should already have edges along the fold lines to avoid rumpling the boundary of the pleat.

## PARAMETERS

Group

Points to deform with the pleating operation.

Build Plane

The plane used for deformation. The pleating will be done in the direction orthogonal to this plane.

Center

The center of the first pleat fold.

Pleat Direction

The direction of the pleat’s fold line. Measured in degrees off the principle axis of the build plane.

Pleat Type

What style of pleat to create.

Accordion

An accordion pleat is V shaped ridge.

Knife

A knife pleat is an accordion pleat, but is folded asymmetrically so the top can fold back along the plane.

Box

A box pleat is a pair of opposite facing knife pleats that cancel each other out.

Fold Angle

The angle of the first fold. 180 will fold fully back on the original plane.

Pleat Scale

The combination of inside fold, outside fold, and spacing often are specific to the designed pleat. This provides a universal scale to apply on top of that to generate the same shaped pleat but at larger or smaller sizes.

Inside Fold

The distance from the first fold to the second. For accordion pleats, symmetry is enforced so this also controls the second distance. Note this is distance along the original plane, the resulting geometry will be shifted as the inside fold is raised above the plane by the fold angle.

Outside Fold

Distance from the second fold the third fold. The third fold undoes whatever lift was induced by the fold angle, returning the geometry back to the plane and a flat direction.

Spacing

Distance between successive pleats. For box pleats, this must be large enough for the top of the box pleat to have sufficient space to avoid self-intersection.

Pleats After

Number of times to repeat the pleating operation after the center location.

Pleats Before

Number of times to repeat the pleating operation before the center location.

Using before, as opposed to after, can be helpful depending on which direction you want the unpleated geometry to be dragged to make room for the pleat.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/planarpatch.svg) Planar Patch](https://www.sidefx.com/docs/houdini/nodes/sop/planarpatch.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/planarpatchfromcurves.svg) Planar Patch from Curves](https://www.sidefx.com/docs/houdini/nodes/sop/planarpatchfromcurves.html)