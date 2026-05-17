---
type: concept
title: Cookie
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "fb50a7d54233"
---
用布尔运算符组合两个多边形对象，或计算两个多边形对象之间的交叉点的轮廓线。
### Parameters
This node type is **deprecated**. It is scheduled to be deleted in an upcoming revision of Houdini.
boolean
This operator has two main functions:
-   **Boolean**: add, subtract, intersect, etc. the volumes of two polygonal objects.
    ![](https://www.sidefx.com/docs/houdini/nodes/images/cookie_boolean_bminusa.png)
-   **Crease**: extract a polyline contour of the intersection between two polygonal objects.
    For example, you can compute the intersection contour of a boat hull with a polygonal lake surface, and emit foam and spray particles from the intersection.
    ![](https://www.sidefx.com/docs/houdini/nodes/images/cookie_boat1.png) ![](https://www.sidefx.com/docs/houdini/nodes/images/cookie_boat2.png)
    You can also connect this output to the second input of the [Subdivide SOP](https://www.sidefx.com/docs/houdini/nodes/sop/subdivide.html "Subdivides polygons into smoother, higher-resolution polygons.") to define crease lines for a [subdivision surface](https://www.sidefx.com/docs/houdini/model/geo_types.html) .
Both objects can be open or closed. The node determines “inside” and “outside” by the polygon normals: it considers the normals to point out. Change the **Check for full enclosure** setting (under **Boolean**) based on whether you are using open or closed surfaces.
You can connect the two polygonal objects to the node’s two inputs, or use two groups from within the first input using the **Group A** and **Group B** parameters.
Note
This operator requires planar convex polygons for accurate results. The **Pre-Convex Geometry** option does this for you, and is on by default.
Note
This operator interpolates point or vertex attributes for tris and quads.
Tip
This tool works best with average sized geometry. If you are getting artifacts, try scaling your geometry up (if it is very small), or down (if it is very large).

Group A
Use a subset of the first input as the “A” object.
Group B
Use a subset of the first input as the “B” object. Alternatively, you can hook up the geometry you want to use as “B” to the node’s second input.
3D Tolerance
Sometimes when you generate polylines (with the **Crease** option), the polylines will have zero-length segments, or small gaps between segments, or twig-like lines branching off the main line.
This node deletes segments smaller than this 3D tolerance (degenerate segments) and joins segment ends within this tolerance, and uses it to suppress twigs.
The default value is ideal for unit-sized geometry. You may need to adjust this value for very large or very small models.
You can also play with this value for odd cases that don’t generate correct polylines. So, if your polylines have twigs and gaps, try increasing this value. Or, if the polylines are connected where there should be gaps or has segments missing, try decreasing this value.
Pre-Convex Geometry
When enabled, all non-planar polygons are converted into triangles. For planar polygons, they are converted into quads if point or vertex attributes exist.
### Type
Operation
The type of boolean operation to use to combine the volumes of the A and B objects.
![](https://www.sidefx.com/docs/houdini/nodes/images/cookie_boolean_pre.png)
Union
Adds the volumes of the two objects together, removing any interior geometry.
![](https://www.sidefx.com/docs/houdini/nodes/images/cookie_boolean_union.png)
Intersect
Keeps the intersecting volume of the two objects, removing geometry outside the shared volume.
![](https://www.sidefx.com/docs/houdini/nodes/images/cookie_boolean_intersect.png)
A minus B
Removes the volume of the B object from the A object.
![](https://www.sidefx.com/docs/houdini/nodes/images/cookie_boolean_aminusb.png)
B minus A
Removes the volume of the A object from the B object.
![](https://www.sidefx.com/docs/houdini/nodes/images/cookie_boolean_bminusa.png)
User Defined
Keeps the geometry specified by the checkboxes below.
Keep Inside A
Keep the parts of A that are inside B’s volume. This option is only available when **Operation** is **User Defined**.
Keep Inside B
Keep the parts of B that are inside A’s volume. This option is only available when **Operation** is **User Defined**.
Keep Outside A
Keep the parts of A that are outside B’s volume. This option is only available when **Operation** is **User Defined**.
Keep Outside B
Keep the parts of B that are outside A’s volume. This option is only available when **Operation** is **User Defined**.
Keep Overlap A
Keep parts of A that overlap B’s surface. This option is only available when **Operation** is **User Defined**.
Keep Overlap B
Keep parts of B that overlap A’s surface. This option is only available when **Operation** is **User Defined**.
Check for Full Enclosure
This option enables a specific test for the case of disconnected polygons, which uses a ray cast to determine whether the polygon is inside or outside.
Turn this option _off_ when using open surfaces, and _on_ when using closed surfaces.
Assume Input A is Closed
This option causes the full enclosure test to also test along the inside/outside boundaries in order to verify their accuracy.
Turn this option _on_ if A is composed of closed surfaces, and if there are some polygons from B which are being grouped incorrectly in the output.
This option is only available when **Check for Full Enclosure** is on.
Assume Input B is Closed
This option causes the full enclosure test to also test along the inside/outside boundaries in order to verify their accuracy.
Turn this option _on_ if B is composed of closed surfaces, and if there are some polygons from A which are being grouped incorrectly in the output.
This option is only available when **Check for Full Enclosure** is on.
### Groups
Contains controls for creating primitive groups for the output geometry.
Create Groups
Create new groups to contain the output geometry.
Inside/Outside/Overlap A/B
(When **Create groups** is on) Create a group with this name to contain the geometry inside/outside/overlap A or B.
Leave a field blank to avoid creating a group.
If multiple fields have the same name, the group contains the union of the fields.
If a named group already exists, the output geometry is appended to it.
Consolidate Edges
Consolidate redundant points along boundary edges created between the two volumes.
Consolidate Tol
Points within this distance will be consolidated.
## Crease
Keep Source
Includes the input geometry in the output.
Autojoin Creases
Connect the crease segments into long continuous polygons.
Do jitter
Move the second input by a small, random distance before intersection, and move it back afterward. Turn this on if you have coincident faces which prevent the node from cutting properly.
Jitter seed
Random number seed for the jitter distance.
Amount of jitter
Scale of the jitter movement.
## INPUTS
Geometry A
The first polygonal object, referred to as “A” in the parameter editor.
Geometry B
The second polygonal object, referred to as “B” in the parameter editor.
## EXAMPLES
Load Launch
[CookieBasic](https://www.sidefx.com/docs/houdini/examples/nodes/sop/cookie/CookieBasic.html)
This example displays the various ways in which a Cookie SOP operates.
Load Launch
[CookieGear](https://www.sidefx.com/docs/houdini/examples/nodes/sop/cookie/CookieGear.html)
This example demonstrates how to perform boolean operations using the Cookie SOP.
In this instance, the points are consolidated using a Facet SOP and a Divide SOP is used to create a smooth surface for the Cookie SOP to operate on.
Load Launch
[CookieStar](https://www.sidefx.com/docs/houdini/examples/nodes/sop/cookie/CookieStar.html)
This example creates a boolean operation using the Cookie SOP.
A star geometry is created and used to subtract the shape from the sphere geometry.
See also
!Clip#Clip Geometry
!Spline Surfsect#Spline Surfsect Geometry
!break#break Geometry