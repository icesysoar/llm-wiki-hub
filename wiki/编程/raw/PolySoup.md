---
type: concept
title: PolySoup
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "1210cfb0d9f9"
---
为了提高效率而将多个多边形合并成一个Primitive原始物体，只是对面处理，点不变
### Parameters
This node combines polygons into a single, polygon soup primitive to save memory and time for large geometry. It also supports combining multiple polygon soups into one.

Vertices with identical attribute values will become a single vertex. Polygons with different primitive attribute values or different groups will be put into different polygon soups to ensure that primitive attributes and groups are preserved.

Large polygon soups require less memory than the equivalent polygons, or less disk space when stored in a file. Saving and loading large polygon soups from files is also faster than saving and loading the equivalent polygons. The larger the polygon soup, the greater the savings in storage and computation.

Unlike a large set of polygon primitives, much of the memory used by a large polygon soup can be shared among different nodes, so long as the topology of the soup does not change. For example, if a particular polygon soup uses 200MB of memory, and is input into an [AttribCreate SOP](https://www.sidefx.com/docs/houdini/nodes/sop/attribcreate.html "Adds or edits user defined attributes."), the same 200MB is used for the polygon soup instead of using an additional 200MB, since it has not been modified.

You can convert polygon soups back to polygons with the [Convert SOP](https://www.sidefx.com/docs/houdini/nodes/sop/convert.html "Converts geometry from one geometry type to another."). The polygons output from the [Convert node](https://www.sidefx.com/docs/houdini/nodes/sop/convert.html "Converts geometry from one geometry type to another.") may be in a different order than the polygons put into the polygon soup, but should remain topologically equivalent if the **Convex Polygons** option is not selected.

The polysoup geometry type is an optimized form for polygons that uses less space and is faster for certain operations. Currently it is useful in lighting and rendering workflows to output smaller geometry files, where you would convert regular polygon geometry to polysoup at the end of the geometry network before exporting.

Not all SOP nodes work with polysoup geometry. The typical nodes needed to ready geometry for export (Convexing with the [Divide node](https://www.sidefx.com/docs/houdini/nodes/sop/divide.html "Divides, smooths, and triangulates polygons."), the [Material node](https://www.sidefx.com/docs/houdini/nodes/sop/material.html "Assigns one or more materials to geometry."), [Point node](https://www.sidefx.com/docs/houdini/nodes/sop/point.html), other attribute modifying nodes) support polysoup. Some nodes are faster with polysoup geometry (such as [Copy](https://www.sidefx.com/docs/houdini/nodes/sop/copy.html "Creates multiple copies of the input geometry, or copies the geometry
onto the points of the second input."), [Transform](https://www.sidefx.com/docs/houdini/nodes/sop/xform.html "The Transform operation transforms the source geometry in object space using a transformation matrix."), [Delete](https://www.sidefx.com/docs/houdini/nodes/sop/delete.html "Deletes input geometry by group, entity number, bounding volume,
primitive/point/edge normals, and/or degeneracy."), [Divide](https://www.sidefx.com/docs/houdini/nodes/sop/divide.html "Divides, smooths, and triangulates polygons.")), but polysoup is not currently meant for general modeling/editing.

## Limitations

-   Most editing functions in Houdini cannot work with polygon soups.
    
-   The advantage of polygon soups is lost when many polygons all have different primitive attribute values, since the polygons will all be in separate polygon soups.
    

## PARAMETERS

Source Group

The group of polygons to combine in a polygon soup. If this is blank, all polygons will be considered for combining in a polygon soup. You can [create a group](https://www.sidefx.com/docs/houdini/model/groups.html) and use this parameter to mask the combining so it only applies to the polygons in the group.

Ignore Primitive Attributes

Ignore the values of primitive attributes when determining which polygons of the source group can be combined into a polygon soup. This may increase performance.

Ignore Primitive Groups

Ignore the membership in primitive groups when determining which polygons of the source group can be combined into a polygon soup. This may increase performance.

Minimum Polygons

If fewer polygons than this number can be combined into a polygon soup, they will be kept as separate polygon primitives. This is useful to avoid producing many polygon soups, each containing very few polygons.

Convex Polygons

Makes the polygons in the polygon soup convex.

Maximum Edges

If the **Convex Polygons** option is selected, this specifies whether polygons above a maximum number of edges should be split into polygons with fewer edges. For example, specifying 3 as the maximum produces polygon soups that are triangulated.

Merge Identical Vertices

Since many polygons can be represented in a single polygon soup primitive, a single vertex can be shared by more than one of these polygons. This option allows a single vertex in the polygon soup to represent what is multiple vertices in the input, saving memory, if those vertices refer to the same point and have identical attribute values. However, adding vertex attributes to the polysoup may require unique vertices for each polygon.

## EXAMPLES

Load Launch

[PolysoupTorus](https://www.sidefx.com/docs/houdini/examples/nodes/sop/polysoup/PolysoupTorus.html)Example for [PolySoup](https://www.sidefx.com/docs/houdini/nodes/sop/polysoup.html) geometry node

This example demonstrates how to use the Polysoup SOP to convert a high-res polygonal object into a single primitive that requires less memory.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/convert.svg) Convert](https://www.sidefx.com/docs/houdini/nodes/sop/convert.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/divide.svg) Divide](https://www.sidefx.com/docs/houdini/nodes/sop/divide.html)