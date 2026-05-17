---
type: concept
title: Skin
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "0a5202ce76e1"
---
在任何数量的形状曲线之间建立一个皮肤表面。
### Parameters
Normally you use Skin by drawing curves the define the shape of the surface, then skinning between them. However, you can also skin between two surfaces: Skin will skin four surfaces between the edges of the two surfaces.
All face and surface types are valid as long as the input(s) contain only faces or only surfaces. Different face types can be skinned together into one surface. For example, it is possible to skin a cubic open NURBS curve with a polygon and a quintic closed Bezier curve even if the three faces have a different number of control vertices. Similarly, this op can skin the boundary curves of surfaces of different types, number of rows, columns, etc.
When face types are input, the number of input ops and the number of faces in each input establish the skinning method. If only one input exists, a “linear-skinning” operation is performed by running a skin across the cross-sections. The result is the classic ruled or skinned surface. If a second input exists, a “bi-linear skinning” is performed which computes a cross-skin between the faces in the first input (U cross-sections) and the faces in the second input (V cross-sections). The result is a surface whose name derives from the number of cross-sections in each direction: triangular, square, or multiple boundary surface, as well as a special case of swept surfaces and N-rails. When possible, cross-sections are interpolated as isoparms.
If you need more control over tangency in the skin, try using the [Bridge node](https://www.sidefx.com/docs/houdini/nodes/sop/bridge.html) instead.
Tip
You can skin between cross-section curves of any geometry type.
Tip
In the parameter editor, you can turn on **Preserve shape** to make the skinned surface match the cross-section curves more closely, at the possible expense of surface smoothness.
Tip
If you have problems with the results being skinned in the wrong order, try inserting a [Sort SOP](https://www.sidefx.com/docs/houdini/nodes/sop/sort.html "Reorders points and primitives in different ways, including randomly.") ahead of the Skin op, and Sort by Normals.
## Skin shelf tool
1.  Make sure the cross-section curves you want to use are all visible.
2.  In the viewer, use the [tab menu](https://www.sidefx.com/docs/houdini/basics/tabmenu.html) or the shelf to choose the [Skin operator](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html "Builds a skin surface between any number of shape curves.").
3.  Select the cross-section curves for the U direction, then click RMB to finish the selection.
    You can select curve objects at the Object level, or multiple curve primitives at the geometry level.
4.  Select the cross-section curves for the V direction (if any), then click RMB.
Note
If you do not select any v curves the tool will act like the ![](https://www.sidefx.com/docs/houdini/icons/SOP/loft.svg) Loft tool and predict where the skin should end.
For this tool to work optimally, both u and v curves should be used.
![](https://www.sidefx.com/docs/houdini/images/shelf/skin.jpg)
## Loft shelf tool
Builds a skin surface between any number of shape curves in one direction.
The loft tool is a type of ![](https://www.sidefx.com/docs/houdini/icons/SOP/skin.svg)[skin](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html "Builds a skin surface between any number of shape curves.") that calculates where the skin should end so that you do not need to use v curves. This tool is useful for quickly skinning ![](https://www.sidefx.com/docs/houdini/icons/SOP/curve.svg)[curves](https://www.sidefx.com/docs/houdini/nodes/sop/curve.html "Lets you interactively draw Beziér curves using tools similar to 2D illustration programs, as well as polylines and NURBS.") in one direction.
1.  Select the curves you want to loft.
    You can select curve objects at the Object level, or multiple curve primitives at the geometry level.
2.  In the viewer, click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/loft.svg) Loft tool on the **Model** tab.
    If you are at the object level, the last curve that is selected will become the host, and all other curves will be combined into that object.
![](https://www.sidefx.com/docs/houdini/images/shelf/loft.jpg)
## Types of Surfaces
### Single Boundary Surface
![](https://www.sidefx.com/docs/houdini/nodes/images/Houdini-03-1-071.jpg)
One face, open or closed, is converted into a surface whose boundaries match the shape of the face exactly. Basically, this operation builds an interior area for the face. The surface type will be similar to the type of the face. For example, a NURBS curve yields a NURBS surface. If the curve is highly concave, the result may look less satisfactory than expected.
### Patch
![](https://www.sidefx.com/docs/houdini/nodes/images/Houdini-03-1-072.jpg)
Two boundary faces define a ruled surface. The arrows on the two faces indicate the required parametric direction, which must be the same for both faces to avoid a bad twist in the surface. Use the [Primitive SOP](https://www.sidefx.com/docs/houdini/nodes/sop/primitive.html "Edits primitive, primitive attributes, and profile curves.") or the [Reverse SOP](https://www.sidefx.com/docs/houdini/nodes/sop/reverse.html "Reverses or cycles the vertex order of faces.") to correct the problem. The surface type will be similar to the most complex type between the two cross-sections. For example, if a polygon and a NURBS curve are skinned together, the surface type will be NURBS. The surface always contains the two faces as two of its boundaries.
### Linear Ruled/Skinned Surface
![](https://www.sidefx.com/docs/houdini/nodes/images/Houdini-03-1-073.jpg)
Two or more faces are skinned linearly into a single surface. The arrows on the faces indicate the required parametric direction of each face, which must be the same for all faces to avoid bad twists or flips in the surface. Use the [Primitive SOP](https://www.sidefx.com/docs/houdini/nodes/sop/primitive.html "Edits primitive, primitive attributes, and profile curves.") or the [Reverse SOP](https://www.sidefx.com/docs/houdini/nodes/sop/reverse.html "Reverses or cycles the vertex order of faces.") to correct the problem. The surface type will be similar to the most complex type among all cross-sections. For example, if a polygon, a Bezier and a NURBS curve are skinned together, the surface type will be NURBS. The surface goes through each cross-section unless “Preserve Shape” if OFF (see parameters below). If the cross-sections have repeated points, or share points between them, the result might not look good when shape preservation is enabled.
### A Special Swept Surface
![](https://www.sidefx.com/docs/houdini/nodes/images/Houdini-03-1-074.jpg)
This case does a bilinear skin and requires two inputs. The U face (1st input) is swept along the V face (second input). The two faces do not need to touch at their endpoints. If their endpoints coincide, though, the two of the surface’s boundaries will match the two faces exactly. The surface type will be similar to the most complex type of the two faces. For example, if a polygon and a Bezier curve are skinned together, the surface type will be Bezier.
### Triangular surface
![](https://www.sidefx.com/docs/houdini/nodes/images/Houdini-03-1-075.jpg)
This case requires two inputs for the bilinear skin. One input has two faces; the other input, just one. The endpoints of the faces need not coincide, but if they do, the surface boundaries will match the face shapes exactly. Basically, the three faces define an interior area to be filled by a surface. The surface type will be similar to the most complex type among the three boundary faces. For example, if the faces are Bezier and NURBS curves, the surface will be a NURBS primitive.
### Square Surface
![](https://www.sidefx.com/docs/houdini/nodes/images/Houdini-03-1-076.jpg)
Four faces define the outer boundaries of a surface. This case requires two inputs for the bilinear skin: the two U boundaries (1st input) are cross-skinned with the V boundaries (the 2nd input). The endpoints of the faces need not coincide, but if they do, the surface boundaries will match the face shapes exactly. Basically, the four faces define an interior area to be filled by a surface. The surface type will be similar to the most complex type among the four boundary faces. For example, if the faces are polygons and NURBS curves, the surface will be a NURBS primitive.
### A Special Case of M-rails
![](https://www.sidefx.com/docs/houdini/nodes/images/Houdini-03-1-077.jpg)
One input contains the rails, and the other input the cross-section. The cross-section is swept along the rails to form a surface. The arrows on the faces indicate the required parametric direction of each face, which must be the same for all faces to avoid bad twists or flips in the surface. Use the [Primitive SOP](https://www.sidefx.com/docs/houdini/nodes/sop/primitive.html "Edits primitive, primitive attributes, and profile curves.") or the [Reverse SOP](https://www.sidefx.com/docs/houdini/nodes/sop/reverse.html "Reverses or cycles the vertex order of faces.") to correct the problem. The surface type will be similar to the most complex type among both rails and cross-section. For example, if the faces are polygons and NURBS curves, the surface will be a NURBS primitive.
### Multiple-Boundary Surface
![](https://www.sidefx.com/docs/houdini/nodes/images/Houdini-03-1-078.jpg)
Not to be confused with N-ary patches. This case generalizes the square surface concept by allowing more interior cross-sections both in U and V. If no interior cross-sections exist, this case reduces to a square surface. The surface interpolates all the boundaries and the interior cross-sections. The result improves when the faces intersect. The arrows on the faces indicate the required parametric direction of each face, which must be the same for all faces to avoid bad twists or flips in the surface. Use the [Primitive SOP](https://www.sidefx.com/docs/houdini/nodes/sop/primitive.html "Edits primitive, primitive attributes, and profile curves.") or the [Reverse SOP](https://www.sidefx.com/docs/houdini/nodes/sop/reverse.html "Reverses or cycles the vertex order of faces.") to correct the problem. The surface type will be similar to the most complex type among all faces. For example, if the faces are polygons and NURBS curves, the surface will be a NURBS primitive.
## PARAMETERS
U Cross-sections
Selects a group to use for U cross-sections.
V Cross-sections
Selects a group to use for V cross-sections.
Connectivity
How the skinned surface should be constructed.
Preserve Shape
Attempts to preserve the shape of the boundary curves.
V Wrap
Wraps the surface in the v direction.
Use V Order
Specifies order of splines along the v direction.
V Order
order of splines along v direction.
Skin
How boundary curves are ignored.
N
Specifies which boundary curves are ignored.
Keep Primitives
Retains the input geometry.
Output Polygons
When input curves are polygons, the output is a mesh primitive. Setting Output Polygons will convert the mesh to a set of polygons. Note this does not affect NURBS or Bezier surface outputs.
## EXAMPLES
Load Launch
[SkinBasic](https://www.sidefx.com/docs/houdini/examples/nodes/sop/skin/SkinBasic.html)Example for [Skin](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html) geometry node
This is a demonstration of using the Skin SOP to create complex forms by creating surfaces between one or two input geometries.
It also demonstrates how the Skin SOP can interpret between different geometry types and varying point numbers.
Load Launch
[SkinCurves](https://www.sidefx.com/docs/houdini/examples/nodes/sop/skin/SkinCurves.html)Example for [Skin](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html) geometry node
This demonstration contains example networks showing 3 different methods by which the Skin SOP can assemble input curves to produce a variety of forms.
The methods covered in this demonstration are how the Skin SOP can make a form from a single asymmetrical curve, based on grouping primitives, or from multiple curves.
Load Launch
[SkinGroup](https://www.sidefx.com/docs/houdini/examples/nodes/sop/skin/SkinGroup.html)Example for [Skin](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html) geometry node
This example demonstrates how you can use the Skin SOP to skin geometry in two different ways: By groups of primitives and by skipping every nth primitive.
Load Launch
[SkinShip](https://www.sidefx.com/docs/houdini/examples/nodes/sop/skin/SkinShip.html)Example for [Skin](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html) geometry node
This example displays a creative use for the Skin SOP involving the creation of an alien ship.
Curves are first created with the Curve SOP. Then, with the Skin SOP individual curves can be selected to be used as reference for a generated surface.
Load Launch
[SkinSurfaceCopies](https://www.sidefx.com/docs/houdini/examples/nodes/sop/skin/SkinSurfaceCopies.html)Example for [Skin](https://www.sidefx.com/docs/houdini/nodes/sop/skin.html) geometry node
This is an example of how to create a new surface using the Skin SOP.
Here a surface is extracted from a torus, copied and used to create a skin that shoots up from the torus.
See also
-   [/nodes/sop/bridge](https://www.sidefx.com/docs/houdini/nodes/sop/bridge.html)