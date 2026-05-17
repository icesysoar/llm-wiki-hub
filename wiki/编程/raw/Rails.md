---
type: concept
title: Rails
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "1508163dc48f"
---
通过在两根导轨之间拉伸横截面生成表面。
### Parameters
The Rails op generates surfaces by stretching cross-sections between two rails. This is similar to the [Sweep SOP](https://www.sidefx.com/docs/houdini/nodes/sop/sweep.html "Creates a surface by sweeping a cross section curve along a spine curve."), but it gives more control over the orientation and scaling of the cross-sections. The first op input is the cross-section which will be replicated, and is typically placed in the XY plane. The second input op source is the rails along which the cross-section is replicated.

Note

Each rail should be a single, [open curve (NURBS, polygon, or bezier)](https://www.sidefx.com/docs/houdini/nodes/sop/curve.html "Lets you interactively draw Bézier curves using tools similar to 2D illustration programs, as well as polylines and NURBS."), and the cross-section is a cross-section of the object resulting if a [Skin SOP](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html "Builds a skin surface between any number of shape curves.") is applied to the output.

## Using Rails

1.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/rails.svg)[Rails](https://www.sidefx.com/docs/houdini/nodes/sop/rails.html "Generates surfaces by stretching cross-sections between
    two guide rails.") tool on the **Model** tab.
    
2.  Select the cross-section and press Enter to confirm your selection.
    
    You can attach multiple cross-sections to rails by selecting more than one.
    
3.  Select the rails and press Enter to confirm your selection.
    
    You can scale the cross-sections in the [parameter editor](https://www.sidefx.com/docs/houdini/ref/panes/parms.html) or the operation controls toolbar.
    

You can skin the finished product using the ![](https://www.sidefx.com/docs/houdini/icons/SOP/skin.svg)[Skin](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html "Builds a skin surface between any number of shape curves.") tool on the **Model** tab as long as the cross-section is a ![](https://www.sidefx.com/docs/houdini/icons/SOP/curve.svg)[polygon, NURBS, or bezier curve](https://www.sidefx.com/docs/houdini/shelf/curve.html).

![](https://www.sidefx.com/docs/houdini/images/shelf/rails.jpg)

## INPUTS

Input 1

The Cross-section geometry.

Input 2

The Rails geometry.

## PARAMETERS

X-Section Groups

Subset of cross section geometry to use.

Rail Groups

Subset of rails geometry to use.

Cycle Type

How the cross-section should be applied to the rails.

Sweep Along Pairs of Rails

Sweeps along rail 1 & 2, 3 & 4, 5 & 6 etc. instead of 1 & 2, 2 & 3, 3 & 4 etc.

Sweep Along First and Last Rail

Sweeps along the first and last rail.

Stretch to Rails

Stretches cross-section geometry to rails geometry.

Use Vertex

Specifies two cross section vertices to be placed on rail1 and rail2 respectively.

Connection Vertices

The vertices used by Use Vertex.

Scale

Scales the cross section in x & y.

Roll

Rolls the cross section in z.

Fix Flipping

Tries to correct flipped normals.

Use Direction

Uses specified direction vector.

Direction

Direction to point cross sections.

Create Output Groups

Places created rails in a new primitive group.

Group Name

Name of group to create.

## EXAMPLES

Load Launch

[BasicRail](https://www.sidefx.com/docs/houdini/examples/nodes/sop/rails/BasicRail.html)Example for [Rails](https://www.sidefx.com/docs/houdini/nodes/sop/rails.html) geometry node

In this example simple curves are taken by the Rail SOP to create a surface based upon the path they describe.

With only simple changes to the SOP’s parameters different surfaces can be created. In the end the curves are gone, but their surface remains.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/sweep.svg) Sweep](https://www.sidefx.com/docs/houdini/nodes/sop/sweep.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/skin.svg) Skin](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html)