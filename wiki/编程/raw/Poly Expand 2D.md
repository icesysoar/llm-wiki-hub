---
type: concept
title: Poly Expand 2D
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "53789700f154"
---
为平面的多边形创建偏移的多边形
### Parameters
This node builds offset geometry at a specified distance from a planar graph of connected polylines. It can generate polyline outlines, or polygonal surfaces.

![](https://www.sidefx.com/docs/houdini/images/model/polyexpand2d.jpg)

This is useful for generating road geometry from connected polylines.

Currently the node does not handle polylines that simply overlap in space — the polylines must be connected with fused points. You will need to use tools such as [Curvesect](https://www.sidefx.com/docs/houdini/nodes/sop/curvesect.html "Finds the intersections (or points of minimum distance) between two
or more curves or faces.") and [Fuse](https://www.sidefx.com/docs/houdini/nodes/sop/fuse.html "Merges or snaps points.") to set up the input geometry.

The node sets point attributes on the generated geometry when outputting **Offset Curves** and **Offset Surfaces**, and also sets primitive attributes when outputting **Offset Surfaces**.

The node computes the straight skeleton of the input, and to do so tries to build a triangulation of the input and its convex hull. It will error with **Failed to process triangulation** if there is a problem with this step. The common causes of this failure are overlapping curves, duplicate points, or a graph with a degenerate convex hull.

The node may warn about other problems encountered during the skeleton computation, reporting a **Bad partition of collapsed polygon**, or **X flip event(s) ignored because of infinite loop detection**, with the second warning often a consequence of the first. These warnings are typically an indication of numeric problems cropping up during the execution of the algorithm and may often be alleviated by either decreasing or increasing the **Coincidence Tolerance** or changing the scale of the input.

## TIPS

-   The computation of the skeleton is sensitive to size. If you are getting artifacts, try changing the **Coincidence Tolerance** or scaling your geometry. As a rough guide, you might need to increase the **Coincidence Tolerance** if the problem appears to be missed intersections, and decrease it if the problem appears to be missing primitives.
    
-   The computation of the skeleton is more sensitive to parallel edges when a non-uniform **Inside Scale** or **Outside Scale** is used. If you are getting artifacts, try increasing the **Parallelism Tolerance**.
    
-   The optional **Edge Distance Attribute** created while generating **Offset Surfaces** can be used to “raise the roof”. Translating the output by this amount in the direction of the plane’s normal will result in roof-like geometry. For non-uniform offsets, i.e., when local scale attributes are used, you’ll first need to divide the value by the optional **Edge Speed Attribute**.
    

## PARAMETERS

Group

The primitives whose edges form the input planar graph. Leave this empty to use all input geometry.

2D Positions

How the node converts the 3D point positions in the geometry to 2D.

Fit Plane

Project the points onto an imaginary plane that best fits their 3D positions.

Select Projection Plane

Manually specify the plane to project onto.

Plane Origin

When **2D Positions** is **Select Projection Plane**, the origin of the plane to project the points onto.

Plane Distance

When **2D Positions** is **Select Projection Plane**, the distance along the **Plane Normal** direction between the projection plane and the **Plane Origin**.

Plane Normal

When **2D Positions** is **Select Projection Plane**, a vector controlling the orientation of the projection plane.

Output

The type of offset geometry to generate.

Offset curves

Generate polygonal curve outlines.

Offset surfaces

Generate polygonal surfaces.

Offset

How far to offset the edges of the new geometry from the original curves.

Divisions

Number of offsets to perform. Numbers greater than `1` divide the offset distance into multiple evenly spaced outlines.

![](https://www.sidefx.com/docs/houdini/images/model/polyexpand2d_divisions.jpg)

Side Determination

How to determine which sides of edges represent the inside and the outside of the input graph.

Vertex Order:

The vertex order of any primitives referencing an edge determines which side of the edge is considered the inside or the outside.

Simple Reachability:

A simple separation of the plane into an outside and possibly multiple insides, with the outermost closed edge loops, if any, separating the outside from the inside(s).

Alternating Reachability:

A nested separation of the plane into outsides and insides. The outermost closed edge loops, if any, separate the outside from the inside(s). The next outermost closed edge loops, if any, separate those insides from embedded outsides. The next outermost closed edge loops, if any, separate those embedded outsides from even more embedded insides, and so on.

Alternating Reachability With Permeable Shared Edges:

A nested separation of the plane into outsides and insides similar to Alternating Reachability, with the additional constraint that a closed edge loop creates a nested outside region only when it consists entirely of unshared edges. In this context, an edge is considered shared when its reverse is also an edge. This approach is useful for inside regions containing polygonal meshes.

Output Inside

Generate the inner offset geometry (on the inside of closed loops).

Output Outside

Generate the outer offset geometry.

Keep Input Geometry

Include the original curves in the output. The default is off.

Split Offset Curves To Omit End Caps

By default, the generated offset curves wrap around dangling edges. Turning this option on will split such offset curves into multiple primitives to remove these end caps.

## Local Attributes

Local attributes can be used to generate non-uniform offset geometry, by scaling the offset for each edge.

It is possible to get overlapping offset curves across different division levels when generating levels of non-uniform offset curves.

Inside Scale

Scale the inside offset for each edge by the value of this attribute. A vertex, point, or primitive attribute can be used. Non-positive values are ignored and treated as having a value of 1. If no **Outside Scale** is specified, then this attribute is also used for the outside offset. The value will be averaged across any adjacent collinear edges.

Outside Scale

Scale the outside offset for each edge by the value of this attribute. A vertex, point, or primitive attribute can be used. Non-positive values are ignored and treated as having a value of 1. If no **Inside Scale** is specified, then this attribute is also used for the inside offset. The value will be averaged across any adjacent collinear edges.

Create Output Groups

Create groups for inside and outside geometry.

Inside Group

Put the generated inner geometry (on the inside of closed loops) in this group.

Outside Group

Put the generated outer geometry in this group.

Edge Distance Attribute

When **Output** is **Offset Surfaces**, create this vertex attribute with the distance of each vertex from the original polyline that generated it.

Edge Speed Attribute

When **Output** is **Offset Surfaces**, create this primitive attribute with the propagation speed of the original polyline that generated it. This will be 1 when no local **Inside Scale** or **Outside Scale** attributes are used.

Coincidence Tolerance

Treat points within this distance in the 2D projection as coincident.

Parallelism Tolerance

Treat lines within this angle of each other (in radians) as parallel.

Skeleton Failure

This control provides workflow options, by changing how this node behaves when the computation of the straight skeleton fails.

Fail with Error

Report the failure as an error. This is the least forgiving option.

Warn and Output Empty Geometry

Report the failure as a warning and output empty geometry.

Cache Straight Skeleton

Cache the computed 2D graph to improve performance.

Recompute Point Normals

Recompute point normals (if they exist).

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/polyextrude.svg) Poly Extrude](https://www.sidefx.com/docs/houdini/nodes/sop/polyextrude.html)