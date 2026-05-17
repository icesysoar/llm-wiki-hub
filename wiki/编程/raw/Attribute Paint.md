---
type: concept
title: Attribute Paint
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "a114e12455ff"
---
交互式地在几何体上直接绘制点属性，如颜色或变形遮罩值。
### Parameters 
To...
Do this
Resize the brush
Hold ⌃ Ctrl + ⇧ Shift and drag with LMB or ⌃ Ctrl + ⇧ Shift and use the scroll wheel on the mouse.
Undo a brush stroke
Press ⌃ Ctrl + Z.
#### Tips
-   This node can only create/edit point attributes.
-   This node replaces the old Paint SOP. It is much faster and has more features.
-   The painted attributes are stored along with a mask of where they were painted, allowing the attributes to be re-applied to deforming geometry. (This requires point numbers remain consistent.)
-   The paint operations can be played back using the **Recache Strokes** option.
#### PARAMETERS
Group
A space-separated list of points and/or point group names (see [group syntax](https://www.sidefx.com/docs/houdini/model/groups.html)). Interactive paint strokes will only affect these points. If this is blank, the node affects _all_ points.
You can change the group between strokes to vary what is masked. Changing this group does not affect previous strokes.
When playing back strokes, the node re-uses the stored groups will be re-used. If you want playback to be geometry-independent, do not select individual points by number here.
Display Group
Visualize the unpaintable regions of the geometry red in the viewport.
Paint on Displayed Node
Controls what geometry is used for painting on. This geometry is what is used for brush intersection. Normally, it is the input to the Attribute Paint SOP. But if one is painting on the input to a deformer, one may want to view the result of the deformation and paint on the result rather than the original un-deformed geometry. To do this, turn on this option and ensure the point numbers match between the Attribute Paint SOP and the displayed SOP.
Attribute
The attribute to paint with the next stroke. The menu of choices is taken from the attributes you set up on the **Attributes** tab.
Reset All Changes
Delete any changes made by this node so far.
#### Brush
LMB Operation
Sets what to do when you drag LMB on the surface. You can choose different actions for LMB, ⇧ Shift + LMB, and ⌃ Ctrl + LMB.
Paint FG
Sets/adds to the attribute value in the painted points with the foreground paint value. See **Paint mode** for how a stroke affects the attribute values.
Smooth
Blurs together attribute values in the painted points.
This may bake the current background value of the geometry into the saved stencil, so may not have the expected behavior if the underlying attribute is animated.
Erase
Erases changes made in this node, restoring the original attribute values.
Sample FG
Copies the raw attribute value at the clicked location into the foreground paint value.
Paint BG
Sets/adds to the attribute value in the painted points with the background paint value. See **Paint mode** for how a stroke affects the attribute values.
Sample BG
Copies the raw attribute value at the clicked location into the background paint value.
MMB Operation
Sets what to do when you drag MMB on the surface. You can choose different actions for MMB, ⇧ Shift + MMB, and ⌃ Ctrl + MMB.
Paint FG
Sets/adds to the attribute value in the painted points with the foreground paint value. See **Paint mode** for how a stroke affects the attribute values.
Smooth
Blurs together attribute values in the painted points.
This may bake the current background value of the geometry into the saved stencil, so may not have the expected behavior if the underlying attribute is animated.
Erase
Erases changes made in this node, restoring the original attribute values.
Sample FG
Copies the raw attribute value at the clicked location into the foreground paint value.
Paint BG
Sets/adds to the attribute value in the painted points with the background paint value. See **Paint mode** for how a stroke affects the attribute values.
Sample BG
Copies the raw attribute value at the clicked location into the background paint value.
Paint Mode
How the new value you paint interacts with any existing value. This acts component-wise for colors.
Over
Replace the old value with the new value.
Add
Add the new value to the old value.
Maximum
Use whichever is higher.
Minimum
Use whichever is lower.
Multiply
Multiply the paint color with the old value.
Shape
The shape and behavior of the brush.
Volume
Affects all points in a sphere. This will affect points whether or not they are connected topologically, so often will be paired with the visible, connected, or front facing restrictions.
Surface
Affects all points in a circle along the surface of the geometry. The points must be connected to the main intersection point.
Screen
Affects all points in a circle in _screen space_. All points that would draw in that part of the screen will be affected, whether or not they are connected.
Fill
Affects all points in the geometry. The connectivity options can be used to apply this to only connected components.
Nearest Point
Affects only the nearest point to the targeted location. This is useful for making changes to low resolution geometry where it can be hard to capture a point precisely.
FG Color
For color attributes, the color to be applied on LMB strokes.
BG Color
For color attributes, the color to be applied on MMB strokes.
FG Float
For float attributes, the floating point value to be applied on LMB strokes.
BG Float
For float attributes, the floating point value to be applied on MMB strokes.
FG Integer
For integer attributes, the integer value to be applied on LMB strokes.
BG Integer
For integer attributes, the integer value to be applied on MMB strokes.
Radius
When **Shape** is “Volume” or “Surface”, the radius of the brush.
Spray Size
The size in pixels used by the Screen Brush.
Opacity
The opacity of the paint applied on the next stroke. An opacity value of 1 will apply the full effect of the stroke, while an opacity of 0 will have no effect.
Soft Edge
The brush is drawn with a solid core that drops off to zero. The soft edge controls what percentage of the brush is in the drop off. Soft Edge of 0 will thus make a hard edge, and a soft edge of 1 will have a smooth fall off from the core.
Connected Only
Only affect points which are within the same connected component as the primary hit point.
Front Face Only
Only affect points whose normals are facing the viewer in same way as the primary hit point.
This provides a faster way to avoid having brushes wrap to the hidden part of the geometry. This does not work with the Surface shape.
Visible Only
Only affect points which are visible from the viewer.
This requires sending rays to validate the points so can be expensive.
Visibility Bias
The amount the positions of points should be biased towards the camera before sending self-intersection rays to determine visibility.
If you find that Visible Only is selected, but the paint still affects points which are not visible, you may need to decrease this value to avoid skipping over collisions. If you find some points are being marked invisible despite being visible, they may be self-shadowed and this number may need to be increased.
Opacity Pressure
How much the stroke pressure affects the opacity. If this is 0, the opacity will be independent of how hard you press. If this is 1, the opacity will scale to zero as the stylus pressure scales to zero.
Radius Pressure
How much the stroke pressure affects the brush radius. If this is 0, the radius will be independent of how hard you press on a tablet. If this is 1, the radius will scale to zero as the stylus pressure scales to zero.
Show Brush Path
Displays the current stroke’s path as guide geometry.
#### Attributes
The set of attributes to paint on. If these do not exist, they will be created. As you paint on a attribute, the effect of your painting will be cached so it can be re-applied.
Changing these attributes after creating them will leave the old effect cached internally, so may lead to unexpected results. For example, renaming mask to fuel after painting will not cause the painted mask to be come fuel, for it stored the fact you painted on mask. The Attribute Swap SOP is a useful tool to rename attributes afterward.
Attribute Name
The name of the attribute. If no attribute exists it is created. Colors are created with a default (1, 1, 1), float attributes with 0, and integer attributes with 0.
Attribute Type
The type of the attribute.
Float attribute are simple scalar attributes like mask or fuel. They are displayed with a 0-1 visualization when the painting is active.
Color attributes are three-float attributes. They will be displayed as RGB colors when the painting is active.
Integer attributes are a distinct integer value for each point. They are displayed as random colors for each integer value when painting is active. Note that integer attributes are not blended, it is assumed they refer to named regions so mixing does not make sense.
#### Symmetry
Enable Mirror Symmetry
Every brush stroke is reflected around the provided mirror and applied a second time. This allows a preservation of mirror symmetry. Note that changing this setting only affects new brush strokes.
Note
Each mouse operation is mirrored in the plane and applied, so cumulative operations like **Add** and **Multiply** may be double applied when the brush overlaps. This is especially apparent with fill modes.
Origin
The center of the mirror plane.
Direction
The normal of the mirroring plane.
#### Recache
Recache Method
When playing back the paint strokes when recaching or bypassing the point cache, there are several choices to how to apply the stored strokes to the current geometry.
Original Values
The hit locations recorded when initially drawing the strokes will be used for playing back the strokes. This works well for volume brushes if re-applying to a point cloud that might not be collideable.
Re-Send Rays
Rays will be re-sent from the original screen locations and intersect the current geometry. This works well if the geometry has been retopologized but is roughly the same shape.
Primitive UV
The hit primitive and barycentric locations on that primitive will be used to update the stroke position. If the topology is unchanging, this will stick the strokes to animated geometry.
Texture UV
The `uv` attribute value of the original hit will be used to locate. This is useful if the model has been re-topologized and moved, but has a `uv` layout that has been preserved.
Recache Strokes
Reapply the strokes. This replays all the strokes on the new input geometry so may take a long time. But it allows the transfer to new geometry with mismatched point values.
Note that if groups depended on point numbers, the resulting re-application may not work.
Save Point Cache to Hip File
Controls if the cached paint is saved to the hip file. Saving may bloat the hip file, but not saving will slow loading as the entire cache process has to be played back, and risks that behavior will not be the same.
Changes to this option will only take effect with the next recache or stroke drawn.
Bypass Point Cache
This toggle will bypass the cache of point attributes and instead reapply all the strokes from scratch. This can be useful to procedurally apply to changing point counts.
Update Point Cache on Stroke
Re-applying the strokes every time you paint will get increasingly slow and be untenable for large geometry. Thus the changed point values are cached and used so only the latest stroke needs to be applied.
This toggle enables the caching of the point values. If off, Live Application should be turned on, and Live Application will not reset when new strokes are painted.
Clear Stroke History
Erases the stored cache of all the strokes drawn. After doing this, the Live Application and **Recache Strokes** options will not work as they will no longer have a record of the earlier strokes.
In cases where procedural application is not desired, this can avoid the cost of saving a long paint session.
Stroke Geometry
Hidden attribute: The complete set of strokes drawn so far.
Intersect Geometry
Hidden attribute: The geometry on which intersections are calculated. This is used to allow the painting of displayed geometry other than the output of this node. The displayed geometry should match point counts with this node’s input, however.
Active Stroke Stencil
Hidden attribute: While painting a stroke only the most recent mouse motions are recomputed. This stores the stencil mask of the previous mouse motions to allow this optimization.
Baked Geometry
Hidden attribute: The cache of attribute value changes for each point.
#### EXAMPLES
Load Launch
[PaintingAttributes](https://www.sidefx.com/docs/houdini/examples/nodes/sop/attribpaint/PaintingAttributes.html)Example for [Attribute Paint](https://www.sidefx.com/docs/houdini/nodes/sop/attribpaint.html) geometry node
This Attribute Paint examples demonstrates mirror painting, painting on a low-res surface and transferring it to a hi-res surface, and performance adjustments you can make while painting on a hi-res surface.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/heightfield_paint.svg) HeightField Paint](https://www.sidefx.com/docs/houdini/nodes/sop/heightfield_paint.html)