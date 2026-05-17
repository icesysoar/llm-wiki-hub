---
type: concept
title: Poly Bridge
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "6639f29a71e4"
---
源与目标循环边之间创建平面或管状多边形表面，并可控制桥接面的形状.
### Parameters
This node builds a polygonal surface between edges loops in one edge selection or boundary loops of a primitive selection and another. The “bridge” can automatically blend between the source and destination, or you can the bridge follow a curve.

![](https://www.sidefx.com/docs/houdini/images/model/bridge_single.jpg)

![](https://www.sidefx.com/docs/houdini/images/model/bridge_edges.jpg)

You can create open bridges between edges. The node will automatically use the component type you select.

![](https://www.sidefx.com/docs/houdini/images/model/bridge_tunnel.jpg)

You can create “tunnels” between surfaces.

![](https://www.sidefx.com/docs/houdini/images/model/bridge_different_counts.jpg)

The source and destination can have different number of components. The node will automatically compensate by adding triangles.

![](https://www.sidefx.com/docs/houdini/images/model/bridge_curve.jpg)

You can specify the shape of the bridge by attaching a curve to the second input and setting **Spine shape** to “Curve from second input”.

![](https://www.sidefx.com/docs/houdini/images/model/bridge_width.jpg)

You can control the width and twist along the bridge using ramps

![](https://www.sidefx.com/docs/houdini/images/model/bridge_individual.jpg)

You can treat adjacent edges/faces as individuals rather than as groups.

## How to

1.  Select the edges or faces on one side of the gap you want to bridge.
    
2.  In the **Polygon** tab, click ![](https://www.sidefx.com/docs/houdini/icons/SOP/polybridge.svg) Poly Bridge.
    
3.  Select the edges or faces on the other side of the gap.
    
4.  The node will often start with the wrong direction at one or both ends.
    
    ![](https://www.sidefx.com/docs/houdini/images/model/bridge_wrong_dir1.jpg)
    
    Turn **Reverse** on/off, and/or change the **Depart** to “Along” or “Opposite” at one or both ends to correct this.
    
    ![](https://www.sidefx.com/docs/houdini/images/model/bridge_wrong_dir2.jpg)
    

## Multiple bridges

This node can build multiple bridges at once if you select multiple sources and destinations.

![](https://www.sidefx.com/docs/houdini/images/model/bridge_double.jpg)

**However it is usually easier** to just use multiple PolyBridge nodes instead of trying to create multiple bridges at once. Consider using multiple nodes instead of creating multiple bridges in a single node.

### Splitting groups

If you want to define multiple source loops with edges/faces that happen to be adjacent, they will just look like one thing to the node. You choose a point/edge **Split group** that divides adjacent faces/edges into separate groups.

(If you are bridging edges, you split with a point group. If you are bridging faces, you split with an edge group.)

In the image below, the yellow line is an edge group splitting the selected faces into two sources.

![](https://www.sidefx.com/docs/houdini/images/model/bridge_split_group.jpg)

## Fixing mis-pairings

![](https://www.sidefx.com/docs/houdini/images/model/bridge_mispair.jpg)

The node will sometimes guess wrong which points in the origin should match up with which points in the destination. In these cases you can shift the pairings, or specify one or more _explicit pairings_ between points.

### Pairing shift

If the pairing looks mostly right except it’s “twisted” because the pairings picked by the node are “rotated” (off by a certain number of places), you can use the **Default pairing shift** parameter on the **Pairing** tab to correct it.

This won’t work if you're making multiple bridges and only one has the wrong pairings, because this parameter will shift them all. In that case you should use explicit pairings, or use multiple Poly Bridge nodes.

### Explicit pairings

Explicit pairings give the node hints toward the proper bridge shape.

You must specify the pairings using point numbers from the _input geometry_, not this node’s output. Unless you turn off **Delete source primitives** and **Delete destination primitives**, the point numbers will be different in the input and output. You can see the point numbers from the input using a display flag trick:

1.  Turn on ![](https://www.sidefx.com/docs/houdini/icons/VIEW/display_point_numbers.svg) Display point numbers in the view toolbar to the right of the viewer.
    
2.  In the network editor, select the Poly Bridge node, but put the display flag on the node connected to this node’s first input (that is, show the geometry prior to this node).
    
    This lets you edit the parameters of the Poly Bridge in the parameter editor and see the bridge output in wireframe, while displaying the point numbers as they were in the input.
    
3.  Pick a source and destination point that should be connected but aren’t, and note their point numbers.
    
4.  In the Poly Bridge parameters, click the **Pairing** tab.
    
    Under “Explicit pairs”, click ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/add.svg) Add and enter the source and destination point numbers.
    

Note

Do not use a point that is shared between multiple bridges as part of an explicit pair.

Explicit pairings appear in the bridge geometry highlighted in blue.

![](https://www.sidefx.com/docs/houdini/images/model/bridge_explicit_pair.jpg)

## Highlight colors

When the node is selected, it color codes certain parts of the bridge in the viewport.

 Green

Source edges

 Red

Destination edges

 Light green

Bridge spine

 Blue

Between explicitly paired points

 Magenta

Boundary (unshared) edges on open bridges

## PARAMETERS

## Footings

### Source

Group

The edges/faces at this end of the bridge. This can be the name of an edge/face [group](https://www.sidefx.com/docs/houdini/model/groups.html).

Divide Into

Whether to treat adjacent edges/faces as a group, or as individuals.

Split Group

When **Divide into** is “Connected components”, all adjacent elements are treated as a single group. If you are doing [multiple bridges](https://www.sidefx.com/docs/houdini/nodes/sop/polybridge.html#multi) and there edges/faces that are adjacent but you want to be separate groups, you can split them using this group. See [splitting](https://www.sidefx.com/docs/houdini/nodes/sop/polybridge.html#splitting) above.

![](https://www.sidefx.com/docs/houdini/images/model/bridge_split_group.jpg)

Reverse

Pair the edges on this side in reverse order. Turn this on/off if this end of the bridge starts in the wrong direction or is twisted. The pair order affects direction, so if you change this, you might also need to change **Depart**.

Depart

Controls the initial direction of the bridge at this end. You can choose to go along or opposite the “loop normal” (which is not necessarily the surface normal), or set the direction manually (choose “Along” or “Opposite” and then “Explicit direction” and use the handle in the viewport to set the direction).

If you use an explicit direction, make sure to set this to “Along” or “Opposite”. If it is set to “Auto using”, the direction will flip unexpectedly as you manipulate the handle.

Loop normal/Explicit direction

Whether to use the default direction (the “loop normal”) or manually set the direction using a handle in the viewport.

Direction

When the menu above is set to “Explicit direction”, this is the initial direction of this end of the bridge. You can set this interactively using a handle in the viewport.

Magnitude

Scales the first row of polygons at this end of the bridge.

Source Stiffness

How much the bridge will follow the initial direction at this end before heading toward the other end.

### Destination

Group

The edges/faces at this end of the bridge. This can be the name of an edge/face [group](https://www.sidefx.com/docs/houdini/model/groups.html).

Divide Into

Whether to treat adjacent edges/faces as a group, or as individuals.

Split Group

When **Divide into** is “Connected components”, all adjacent elements are treated as a single group. If you are doing [multiple bridges](https://www.sidefx.com/docs/houdini/nodes/sop/polybridge.html#multi) and there edges/faces that are adjacent but you want to be separate groups, you can split them using this group. See [splitting](https://www.sidefx.com/docs/houdini/nodes/sop/polybridge.html#splitting) above.

![](https://www.sidefx.com/docs/houdini/images/model/bridge_split_group.jpg)

Reverse

Pair the edges on this side in reverse order. Turn this on/off if this end of the bridge starts in the wrong direction or is twisted. The pair order affects direction, so if you change this, you might also need to change **Depart**.

Arrive

Controls the initial direction of the bridge at this end. You can choose to go along or opposite the “loop normal” (which is not necessarily the surface normal), or set the direction manually (choose “Along” or “Opposite” and then “Explicit direction” and use the handle in the viewport to set the direction).

If you use an explicit direction, make sure to set this to “Along” or “Opposite”. If it is set to “Auto using”, the direction will flip unexpectedly as you manipulate the handle.

Loop normal/Explicit direction

Whether to use the default direction (the “loop normal”) or manually set the direction using a handle in the viewport.

Direction

When the menu above is set to “Explicit direction”, this is the initial direction of this end of the bridge. You can set this interactively using a handle in the viewport.

Magnitude

Scales the first row of polygons at this end of the bridge.

Source Stiffness

How much the bridge will follow the initial direction at this end before heading toward the other end.

## Spine

Spine shape

The path the bridge takes between the source and destination.

Straight

Straight from the source to the destination.

Curved

Curve between the initial and final directions.

Curve From Second Input

Take the shape of a curve connected to this node’s second input.

### Divisions

Divisions

The number of rows of polygons in the bridge, not including **Source divisions** and **Destination divisions** below.

Source Divisions

Adds extra rows to the start of the bridge with the exact same topology as the source edges. This may be useful if the bridge has triangles and you don’t want them to touch the source edges.

Source Divisions

Adds extra rows to the end of the bridge with the exact same topology as the destination edges. This may be useful if the bridge has triangles and you don’t want them to touch the destination edges.

Spacing

Controls the spacing of the divisions along the bridge.

Uniform

Spaced equally.

Curvature Sensitive

Uses more polygons in high curvature areas and fewer polygons in straight areas.

### External spine

Available when **Spine Shape** (at the top of the tab) is “Curve From Second Input”.

U Range

Lets you use a subset of the full curve, where `0` is the start of the curve and `1` is the end.

Positioning

How to relate the position of the external curve in world space to the bridge. The best option is to use “Start at source, end at destination” (the default) and adjust the curve shape to get the bridge you want.

As is

Use the exact world space position of the curve. This may be useful if you've drawn the curve “in place” exactly where you want the bridge. If you've drawn the curve “off to the side”, do not use this option.

Start at Source, End at Destination

Acts like the external curve was snapped between the start and end of the bridge. Uses the start and end directions of the curve, ignoring the directions set on the **Footings** tab.

The rest of the options are not as useful. It’s usually easier to just adjust the curve shape.

Start at Source, End Along Source Direction

Translates the start point of the curve to the source and rotates it minimally to ensure the end point of the curve lies along the source departing direction. Then scales the spine by the Source Magnitude amount.

End at Destination, Start Along Destination Direction

Translates the end point of the curve to the destination and rotates it minimally to ensure the start point of the curve lies along the destination arriving direction. Then scales the spine by the Destination Magnitude amount.

Start at Source, Tangent to Source Direction

Translates the start point of the curve to the source and rotates it minimally to make it tangent at the start point to the source departure direction. Then scales the spine by the Source Magnitude amount.

End at Destination, Tangent to Destination Direction

Translates the end point of the curve to the destination and rotates it minimally to make it tangent at end point to the destination arrival direction. Then scales the spine by the Destination Magnitude amount.

Translate Start to Source

Translates the start point of the curve to the source. Then scales the spine by the Source Magnitude amount.

Translate End to Destination

Translates the end point of the curve to the destination. Then scales the spine by the Destination Magnitude amount.

Reverse Direction

Reverses the direction of the spine curve.

Axial Rotation

Rotates the spine curve around the line through its end points.

Source blending

How much to blend the start of the external curve with the source departure direction from the **Footings** tab.

Destination blending

How much to blend the end of the external curve with the destination arrival direction from the **Footings** tab.

### Sample points

Generate Spine Sample Points

Create points along the spine of the bridge, where the points correspond to divisions of the bridge. To get just these points, turn off **Generate bridge mesh** on the **Bridge** tab. This may be useful for highly technical solutions where you want to get the bridge path but generate the geometry yourself separately.

Group

Enter a name to put the sample points in a group. You can use this group name in later nodes to easily target just the sample points.

Tangent Attribute

Enter a name to create a vector attribute on the points containing the bridge tangent at each point.

Normal Attribute

Enter a name to create a vector attribute on the points containing the bridge normal at each point.

Binormal Attribute

Enter a name to create a vector attribute on the points containing the third axis direction (the cross-product of the tangent and normal) at each point.

## Bridge

### Bridge mesh

Generate Bridge Mesh

Turn this off to not generate the bridge. This might be useful if you just want the points from **Generate spine sample points** on the **Spine** tab.

Mesh Primitive Group

Enter a name to put the bridge polygons in this group. You can use this group name in later nodes to easily target just the bridge polygons.

Attach to Input Geometry at Source

Fuse (share points between) the source loop and the first row of the bridge. This is ignored if **Clip start** is greater than `0`.

Attach to Input Geometry at Destination

Fuse (share points between) the source loop and the first row of the bridge. This is ignored if **Clip end** is greater than `0`.

Clip Range

Clips the bridge at the start and end, where `0` is the start of the bridge and `1` is the end.

![](https://www.sidefx.com/docs/houdini/images/model/bridge_clip.jpg)

(If the start clip is greater than the end clip, you will get a reversed bridge rather than no bridge.)

Miter Joints

When selected, the divisions are scaled along the spine bend directions to achieve better (mitered) joints around sharper turns.

### Input geometry

Keep Input Geometry

Pass the geometry in the input through along with the new bridge polygons. Turn this off to output only the bridge polygons.

Delete Source Primitives

If the source group is polygonal faces, remove them from the output. This is useful for automatically opening the ends of a “tunnel”.

Delete Destination Primitives

If the destination group is polygonal faces, remove them from the output. This is useful for automatically opening the ends of a “tunnel”.

### Local thickness

These parameters let you scale the width of the bridge along its length, creating pinches and/or bulges in the bridge.

Thickness Scale

Scales the values of the **Thickness ramp** and/or **Thickness attribute**.

Thickness Attribute

If **Spine Shape** is “Curve From Second Input” (on the **Spine** tab), use this attribute on the external curve to control the thickness of the bridge. This is multiplied by the **Thickness scale** and _added to_ the thickness ramp.

Thickness Ramp

Controls the thickness of the bridge along its length. The horizontal axis represents the length of the bridge. Values of `0.5` do no scaling. Values less than `0.5` narrow the bridge. Values greater than `0.5` widen the bridge.

### Twist

![](https://www.sidefx.com/docs/houdini/images/model/bridge_width_twist.jpg)

Full-Turn Twists

The number of full twists to add to the bridge along its length.

Twist Scale

Scales the values of the **Twist ramp** and/or **Twist attribute**.

Twist Attribute

If **Spine Shape** is “External” (on the **Spine** tab), use this attribute on the external curve to control the twist of the bridge. This is multiplied by the **Twist scale** and _added to_ the twist ramp.

Local Twist Ramp

Controls the twist of the bridge along its length. The horizontal axis represents the length of the bridge. Values of `0.5` represent no twist. Values less than `0.5` twist in one direction, values greater than `0.5` twist in the other direction.

## Pairing

Provides explicit controls over which points on the source edges connect to which points on the destination edges.

Interpolation

A technical parameter of the node’s internal algorithm. “Rotating frame” tends to be better for twisting bridges, but in practice there’s no good basis for choosing one or the other. You can try both and see if they make a difference for your bridge.

Implicit Pairing

A technical parameter of the node’s internal algorithm. Controls how the node pairs up points other than the initial pair and any explicit pairs. Changing this will often have no effect on the bridge.

Use Relative Edge Lengths

Pairings are done by matching each point to the opposite sides closest point in terms of proportional distances along the boundary loop from the explicit or default pairs.

Use Edge Counts

Pairings are done by matching the points based on the number of edges between them and the explicit or default pairs on the two loops.

Default Pairing Shift

Shifts the pairings between points. This can fix cases where the bridge is “twisted” because the pairings are off by one or more. See [how to fix mispairing](https://www.sidefx.com/docs/houdini/nodes/sop/polybridge.html#pairing).

![](https://www.sidefx.com/docs/houdini/images/model/bridge_mispair.jpg)

Explicit Pairs

Lets you manually specify that certain points in the source geometry should connect along the bridge to certain points in the destination geometry. Note that these are point numbers on the input geometry. See [how to fix mispairing](https://www.sidefx.com/docs/houdini/nodes/sop/polybridge.html#pairing).

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/polyextrude.svg) Poly Extrude](https://www.sidefx.com/docs/houdini/nodes/sop/polyextrude.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/polybevel.svg) PolyBevel](https://www.sidefx.com/docs/houdini/nodes/sop/polybevel.html)