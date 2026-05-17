---
type: concept
title: Copy to Points
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "5bf62c01a767"
---
将第一个输入的几何图形复制到第二个输入的点上。
### Parameters
#### Overview
This is very useful for populating scenes with repeated elements such as trees, buildings, or snowflakes with full control over the placement of the copies.
Tip
To simply create multiple copies of geometry without needing target points, use [Duplicate](https://www.sidefx.com/docs/houdini/nodes/sop/duplicate.html).
For example, you can arrange copies in a spherical shape by copying them onto the points of polygonal sphere. Or you could [scatter](https://www.sidefx.com/docs/houdini/nodes/sop/scatter.html "Scatters new points randomly across a surface or through a volume.") points across a terrain geometry and copy trees onto the points.
Note that this node creates additional geometry in the scene for each copy. If you have very large numbers of copies, you may want to investigate [render-time instancing](https://www.sidefx.com/docs/houdini/copy/instancing.html) or [Alembic, packed primitives, or polysoups](https://www.sidefx.com/docs/houdini/copy/packed_and_soups.html) to reduce memory usage.
For more information, see [copying to points](https://www.sidefx.com/docs/houdini/copy/copytopoints.html) in the [copying and instancing](https://www.sidefx.com/docs/houdini/copy/index.html "How to use copies (real geometry) and instances (loaded or created at render time).") chapter.
#### Varying the copies
-   When you copy or instance geometry onto points, Houdini looks for specific attributes on the destination points to customize each copy/instance. For example, you can change the scale of each copy by creating a `pscale` attribute on the points you copy onto. See [instancing point attributes](https://www.sidefx.com/docs/houdini/copy/instanceattrs.html).
-   If you need to copy different source geometry to different points, the **Piece Attribute** option gives that ability if all geometry to be copied is in the source geometry input, (the first input).
-   If you need more control over the copies, you can [use a For-Each loop](https://www.sidefx.com/docs/houdini/copy/copytopoints.html#foreach) to process each copy individually.
#### How to
1.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/copytopoints.svg) Copy to Points tool on the **Modify** tab.
2.  Select the source geometry you want to copy and press Enter.
3.  Select the target geometry on whose points to instantiate the source and press Enter.
![](https://www.sidefx.com/docs/houdini/images/shelf/copy.jpg)
Source Group
A subset of the source (first input) primitives or points to copy from. You can create groups with the [Group SOP](https://www.sidefx.com/docs/houdini/nodes/sop/group.html).
Source Group Type
The type of group that **Source Group** specifies.
If **Guess from Group** is specified and the group type is ambiguous, the guess is made that **Group** specifies a primitive group.
Target Points
A subset of the target (second input) points to copy onto.
Piece Attribute
The name of an integer or string target point attribute, and corresponding source point or primitive attribute, indicating what parts of the source should be copied to each target point. All source points or primitives with a value matching a target point’s value will be copied to that target point. If the target point attribute is an integer attribute and no source attribute exists, the integer will specify which single primitive to copy from the source to each target point.
Pack and Instance
Pack the input source geometry into an Packed Geometry primitive before copying. This results in the input geometry being shared (instanced) by each copy rather than being duplicated for each copy.
If a **Source Group** or **Piece Attribute** are specified, subsets of the source geometry will be packed into Packed Geometry primitives.
Pivot Location
Specifies how to initialize the offset for the point referenced by the packed primitive.
Display As
The viewport LOD for the specified packed primitives.
Transform Using Point Orientations
Rotates copies to face the target point normals. Also applies translations, rotations and scales according to the trans, rot, and scale point attributes on the template points (if these attributes exist).
Reset Attributes from Target
Sets the **Attributes from Target** parameters to the default behavior.
Attributes from Target
Copy attributes from the template points onto the copies, according to the values in the attribute fields below.
Apply to
Indicates whether to apply this row’s target point attributes to the output point, vertices, or primitives. A single target point attribute can only be applied to one type of output element.
by
Method by which to apply this row’s target point attributes. Values can be applied by copying, multiplying, adding, or subtracting the source attributes. The “Nothing” option can be selected to override an earlier row. If no matching source attribute exists, the multiplying and adding options will copy, and the subtracting option will copy the negated value, (as if subtracting from zero). Multiplying, adding, and subtracting only apply to numeric and group attributes; other attributes will be copied. For groups, the operations correspond with intersection, union, and subtraction, respectively.
Attributes
Pattern of target point attribute names to match for this row.
#### INPUTS
Geometry to Copy
The geometry to copy.
Target Points to Copy to
Copy the source geometry onto the points of this geometry.
See also
!Copy and Transform#Copy and Transform Geometry
!Copy with Stamp#Copy with Stamp Geometry
