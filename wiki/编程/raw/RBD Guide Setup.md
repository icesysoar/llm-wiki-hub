---
type: concept
title: RBD Guide Setup
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "bc9ceab3b029"
---
为RBD指南DOP设置打包片段的属性。
### Parameters
This SOP node is used in conjunction with the RBD Guide DOP node. It sets attributes on packed geometry for Bullet RBD simulations which will drive the guiding via the RBD Guide DOP.
## Setup
This section is where the guide relationship is created. Based on proximity, the RBD pieces will be assigned a guide piece and a strength, which will determine when the pieces will break free from the guide influence (become unguided).
Scale
The bullet world scale. Only use this if the bullet world scale you are working with and the input geometry have been scaled. This will scale the guide geometry and search parameter values accordingly.
Group
The simulation geometry packed primitives to be guided.
Start Frame
The reference start frame where guiding attributes will be captured to the simulation geometry.
End Frame
End frame of the guide animation.
Mode
Near Point
Guide names are based on proximity to guide pieces center of mass.
Near Surface
Guide names are based on nearest guide surface position.
Max Distance
Distance beyond which simulation geometry will not acquire a guide. When this value is set to `-1`, no maximum is used.
Strength
Guide strength.
Distance to Strength
Multiply the strength based on the distance to guide geometry.
Distance
The start and end distance between which the **Strength Multiplier** will be linearly interpolated.
Strength Multiplier
The strength multiplier for pieces at a distance less than or equal to that specified as the start distance, and the strength multiplier for pieces at a distance equal or greater to that specified as the end distance.
Blend
Add a blend attribute to the simulation pieces, which will be multiplied by the global blend value.
Use VEXpressions
Use VEX to modify the `strength`, `blend` and `useneighbours` attributes.
## Neighbors
Use Neighbors
Lets you use a minimum number of connected neighbors per guide cluster as a condition to break guiding. This helps to prevent isolated pieces from remaining guided when all of their direct neighbors within that guide cluster have broken free. This stores the required information about each piece’s neighbors.
Points Per Area
Points are first seeded on the surface of all the objects. There must be enough points for close points to occur to detect close surfaces. This should be scaled down by the square of the geometry size. For example, if your geometry is 10× bigger, you should have 1/100 the points per area.
Search Radius
Specifies the maximum allowed distance when searching for nearby points.
Max Search Points
Specifies an upper limit on the number of nearby points that can be inspected. Lower numbers will improve performance, but run the risk that only points from the same piece will be detected rather than points on nearby pieces, causing connections to be missed.
Max Connections
Specifies an upper limit on the number of pieces that each seed point can be connected to. However, increasing this value will reduce performance.
Ensure Neighbor
When a guided piece has no neighbors within its guide cluster, it will inherit the nearest piece’s guide target.
Minimum Neighbors
When a piece has less than this number of neighbors, it will bind to the next nearest guide cluster and be guided by their guide piece.
## Constraints
Remove Intra-Guide Constraints
Deletes constraints between pieces belonging to different guide clusters.
Note
Constraints between guided and unguided pieces are unaffected.
Group
Constraint geometry primitives to consider when removing intra-guide constraints.
## INPUTS
Geometry
The packed render geometry. If no proxy geometry is supplied, the attributes will be created on this geometry.
Constraint Geometry
The constraint geometry.
Note
Constraints are not always necessary when guiding. You may still need constraints when all your geometry isn’t being guided, and you need the guided and non-guided geometry to be constrained.
Proxy Geometry
The packed proxy simulation geometry. If no proxy geometry is supplied, the attributes will be created on the **Geometry** instead.
Guide Geometry
The geometry which will drive the guided simulation.
Note
The guide geometry will use transformation matrices from its various pieces to drive the guided pieces. For packed objects, their intrinsic transforms are used. Unpacked geometry will be packed per `name` attribute (if available, otherwise per connectivity) on the capture start frame and transformed onward. A single deforming mesh as guide geometry will therefore need to first be broken up into various clusters in order to satisfy the requirements for guiding to work as expected.
## EXAMPLES
Load Launch
[RBDGuideSetup](https://www.sidefx.com/docs/houdini/examples/nodes/sop/rbdguidesetup/RBDGuideSetup.html)Example for [RBD Guide Setup](https://www.sidefx.com/docs/houdini/nodes/sop/rbdguidesetup.html) geometry node
This example demonstrates the use of the RBD Guide Setup SOP in conjunction with the RBD Guide DOP.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/rbdguide.svg) RBD Guide](https://www.sidefx.com/docs/houdini/nodes/dop/rbdguide.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/bulletsolver.svg) RBD Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html)