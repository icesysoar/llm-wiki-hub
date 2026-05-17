---
type: concept
title: Filament Advect
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "e104d7ed5e72"
---
将多边形曲线演化为涡流丝。
### Parameters
The Filament Advect SOP evolves vortex filaments by advecting each filament’s points by a velocity field.

Vortex filaments express a fluid’s velocity by specifying the centers of smoke rings (represented as closed polygonal curves) instead of an explicit grid. As a result, the fluid is unbounded and an arbitrarily detailed velocity field can be reconstructed from only a few curves. Since the fluid motion is entirely described by the vortex filaments, the number of particles used for rendering can be adjusted without affecting the fluid’s behavior.

## PARAMETERS

Timestep

Specifies the length of time over which to advect the filaments.

Scale Strength

Adjusts the strength of each filament. The `strength` primitive attribute will be multiplied by this value.

Scale Thickness

Adjusts the thickness of each filament. The `thickness` primitive attribute will be multiplied by this value.

Reconnect Distance

The simulator will attempt to reconnect filaments with approximately anti-parallel edges, as the effects of such edges approximately cancel out. This can prevent the number of polygon edges from increasing exponentially over time. Increasing this value will cause filaments to be reconnected more aggressively.

Min Edge Length

Edges shorter than this length will be removed by collapsing those edges to their center point.

Max Edge Length

Edges that are longer than this length will be subdivided.

Cap Speed

Limits the speed of the filament vertices.

Speed Cap

Specifies the maximum speed of a filament vertex when **Cap Speed** is enabled.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/filamentsolver.svg) Filament Solver](https://www.sidefx.com/docs/houdini/nodes/dop/filamentsolver.html)