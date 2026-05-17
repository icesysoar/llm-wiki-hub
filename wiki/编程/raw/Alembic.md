---
type: concept
title: Alembic
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "f7c7b5284c54"
---




# Geometry node
https://www.sidefx.com/docs/houdini/nodes/sop/alembic.html
### Alembic^Geometry
#### !alembic.svgABC几何节点
将场景导出到Alembic档案中。Alembic是一个常见的交换平台，在不同的3D软件包之间移动几何和动画。
### Parameters
更多信息请见以下链接[Alembic format](http://code.google.com/p/alembic/).
### 提示和说明
如果你给名为`abc_collapse`的对象添加了一个备用参数，并且其值不为零，这个节点将跳过该对象，从存档中省略。也请参见**Collapse**参数。
Alembic库对该节点试图满足的几何属性有一些期望。对于多边形网格，Alembic库对位置（`P`）、法线（`N`）、纹理坐标（`uv`）和速度（`v`）的处理与其他属性不同。这个节点试图以Alembic库所期望的形式来表达几何图形，以便与其他应用程序更好地兼容。
例如，如果你有`v`作为一个顶点属性，这个节点将把它写成一个点属性。
为了避免这种混淆，请使用与 "特殊 "属性之一不同的名称。例如，如果你真的需要输出顶点速度，就给属性起个不同的名字，如`v2`或`vv`。
### PARAMETERS
Render to Disk
Begins the render with the last render control settings.
Controls…
Opens the render control dialog to allow adjustments of the render parameters before rendering.
Valid Frame Range
Controls whether this render node outputs the current frame (**Render any frame**) or the image sequence specified in the **Start/End/Inc** parameters (**Render Frame Range**).
**Render Frame Range (strict)** will render frames START to END when it is rendered, but will not allow frames outside this range to be rendered at all. **Render Frame Range** will allow outside frames to be rendered. This is used in conjunction with render dependencies. It also affects the behavior of the 'Override Frame Range' in the Render Control dialog.
Two possible cases where you'd want the strict behavior:
-   A 60 frame walk cycle written out to a geo, but part of a larger ROP net to render out a larger frame range.
-   A texture loop from 1-20.
Otherwise, you will usually set this to non-strict.
Render Current Frame
Renders a single frame, based on the value in the playbar or the frame that is requested by a connected output render node.
Render Frame Range
Renders a sequence of frames. If an output render node is connected, this range is generally ignored in favor of frames requested by the output render node.
Render Frame Range (Strict)
Renders a sequence of frames. If an output render node is connected, this range restricts its requested frames to this frame range.
Start/End/Inc
Specifies the range of frames to render (start frame, end frame, and increment). All values may be floating point values. The range is inclusive.
These parameters determine the values of the following local variables for the output driver.
`$NRENDER`
The number of frames to be rendered by the output driver.
`$N`
The current frame being rendered (starting at 1 and going to `$NRENDER`).
For example, if the parameters are set to:
Start
10.5
End
12
Inc
0.5
There will be 4 frames rendered (`10.5`, `11`, `11.5`, and `12`), so `$NRENDER` will have a value of `4`. `$N` will have the value:
Frame
$N
10.5
1
11
2
11.5
3
12
4
Render With Take
The output driver will switch to this take before rendering and then restore the current take when rendering is done.
Tip
Use `chs("take")` to use this value in other parameters. See the [chs](https://www.sidefx.com/docs/houdini/expressions/chs.html "Evaluates the string value of a parameter at the current time.") expression function for more information.
Alembic File
The name of the archive to generate.
Format
The file format of the archive to generate.
Default
Use whichever file format is the default for the current version of Houdini.
HDF5
Use the HDF5 file format. HDF5 is a common hierarchical data format, and several tools exist to view and edit HDF5 files.
Ogawa
Use the Ogawa file format. Ogawa is an Alembic-specific file format available for use as of Alembic 1.5. Ogawa files are on average smaller (by 5-15%) and faster (4× for single-threaded reads, 25× for multi-threaded reads on 8 core systems) than HDF5 files.
Create Intermediate Directories
Create the directories in the Alembic archive output path if they do not exist.
Render Full Range (Override Frame-By-Frame)
Normally, it’s best to render all frames into a single Alembic archive. This allows Alembic to optimize storage of data and to be more efficient. This is the default behavior of the output driver, even when frame-by-frame rendering is requested.
In some work-flows, you may want to have the Alembic ROP operate on a frame-by-frame basis (see the `-I` option on the hscript render command). Turning this toggle off will let the ROP evaluate frame-by-frame.
Initialize Simulation OPs
Reset simulations before writing Alembic archive.
### Hierarchy
Use SOP Path
Instead of exporting objects contained under a root object, the Alembic ROP can export a single geometry detail specified by a SOP path. The SOP path export method is enabled by this parameter.
SOP Path
The path to the geometry detail to include in the alembic archive.
Subdivision Group
If a group name is specified here, any polygons in any objects will be saved as subdivision primitives in the Alembic file. Other polygons will be saved as polygon mesh nodes.
The subdivision group can be specified per object with the object level parameters `vm_rendersubd` or `ri_rendersubd`. If present, they will be used to control whether polygons will be saved as subdivision primitives and the `vm_subdgroup` parameter will be used to select which polygons will be rendered as subdivision surfaces.
Build Hierarchy From Attribute
Use a primitive string attribute to directly specify the path of a primitive in the output archive.
Path Attribute
The name of the attribute containing the path.
Root Object
The root object of the scene. All displayed objects contained under this node will be included in the Alembic archive.
Objects
A pattern/bundle of objects to include in the alembic archive.
Collapse Objects
This option can be used to skip writing transform nodes which have no transform (an identity transform) for the entire animation.
When importing an Alembic scene, there are often empty geometry nodes created to contain [Alembic SOPs](https://www.sidefx.com/docs/houdini/nodes/sop/alembic.html "Loads the geometry from an Alembic scene archive (.abc) file into a geometry network."). These objects are simply placeholders to contain the geometry. However, when exporting the scene, they will be added as dummy transform nodes (roughly doubling the size of the Alembic archive node count).
Do Not Collapse Identity Objects
All geometry containers (geometry objects containing SOPs) will be saved as Alembic transform nodes.
Collapse Non-Animating Identity Objects
All geometry containers which are not animated and have an identity transform will be skipped when writing the Alembic file.
Collapse All Geometry Container Objects
All geometry containers will not be written to the Alembic file. In some cases for subnet hierarchies, having a subnet parent animated will propagate the time dependence to the contained nodes. This option allows you to forcibly skip the geometry nodes.
Any transformations on these nodes will be lost during the save.
If you add a spare parameter to an object named `abc_collapse` and its value is not zero, this node will skip that object and omit it from the archive. This allows fine-grained per-object control regardless of the setting of this parameter.
Save All Non-Displayed (Hidden) Objects
If this checkbox is turned on, hidden objects matching the **Objects** pattern/bundle will also written to the Alembic archive.
Use Display SOP
If this checkbox is turned on, the geometry in the Display SOP will be saved instead of the geometry from the Render SOP.
Partition Mode
When saving a complex piece of geometry, it is possible to partition the geometry into multiple shape nodes by splitting up the primitives based on a string attribute. There are several different ways to interpret the string values.
No Geometry Partitioning
The geometry will be output as a single Alembic shape node.
Use Attribute Value
The value of the string attribute is used to name the shape node. This mode is ideal when using the `name` attribute.
Use Shape Node Component Of Path Attribute Value
When loading an Alembic file, you can store the Alembic path in a string attribute. This option will partition the geometry based on the names of the shape nodes stored in the attribute.
Use Transform Node Component Of Path Attribute Value
This option will partition the geometry based on the names of the transform nodes stored in the attribute.
Use Combination Of Transform/Shape Node
Combines both the transform and shape node names to form the name for the new shape node.
Partition Attribute
Specifies a string attribute which is used to partition a single geometry into multiple Alembic shape nodes. For example, you can use the `name` or the `abcPath` attribute to split a single piece of Houdini geometry into different Alembic shape nodes based on the string value.
Full Bounding Box Tree
This will cause all Alembic nodes to have proper bounding boxes written. Computing bounds for only the shape nodes is more efficient.
### Geometry
Packed Transform
When saving a complex piece of geometry, it is possible to partition the geometry into multiple shape nodes using packed primitives. There are several different ways to handle packed primitives.
Deform Geometry
The packed primitive’s transform will be baked in to the resulting shape node’s geometry.
Transform Geometry
A transform node will be created above the packed geometry.
Merge With Parent Transform
The packed primitive’s transform will be baked in to the parent transform node.
Use Instancing Where Possible
This will cause packed objects to be instanced within the Alembic archive during write, reusing geometry and potentially decreasing the size of the file.
Create Shape Nodes
This will cause Alembic shape nodes to be created for geometry.
Save Attributes
If this checkbox is turned on, geometry attributes will be saved to the Alembic file as arbitrary geometry parameters.
Point Attributes
Point attributes whose name matches this pattern will be saved in the Alembic file.
Vertex Attributes
Vertex attributes whose name matches this pattern will be saved in the Alembic file.
Primitive Attributes
Primitive attributes whose name matches this pattern will be saved in the Alembic file.
Detail Attributes
Detail attributes whose name matches this pattern will be saved in the Alembic file.
Primitive To Detail
Promote primitive attributes matching this pattern to detail attributes before exporting to Alembic. Sometimes when importing Alembic, Houdini must convert constant Alembic data to uniform data. This option lets you manually re-adjust certain attributes on export.
Force Conversion of Matching Primitive Attributes to Detail
The normal behavior when promoting primitive attributes to detail attributes is to validate that the values are the same for all primitives. Enabling this option will bypass this check forcing all matching primitive attributes to be converted to detail attributes regardless. The attribute value of the first primitive will be used as the single detail value for the exported primitive.
Detail Array Attributes
Detail attributes whose name matches this pattern will be saved as arrays instead of scalars.
Additional UV Attributes
Additional UV attributes whose name matches this pattern will be saved in the Alembic file.
Face Sets
This parameter controls how Houdini primitive groups will be translated to Alembic face sets. Alembic only supports face sets for polygon and subdivision meshes.
No Face Sets
No face sets will be saved out.
Save Non-Empty Groups As Face Sets
Only groups which contain polygons will generate face sets in the Alembic file.
Save All Groups As Face Sets
Face sets will be created for all groups, regardless of whether the group contains any polygons.
### Layering
Enable Layering
When enabled, the resulting Alembic archive will only export the subset of the scene specified by parameters on the **Layering** tab.
Create Full Ancestors for Output Nodes
When enabled, all data for ancestors to non-pruned nodes specified by the **Nodes** multiparm will be exported.
Nodes
Use this multiparm to specify which nodes the resulting Alembic layer will fully prune, replace, or merge. Click the + button to add a new rule.
Visibilities
Use this multiparm to specify which nodes the resulting Alembic layer will have their visibility changed. Click the + button to add a new rule.
Attributes
Use this multiparm to specify which attributes the resulting Alembic layer will prune or replace. Click the + button to add a new rule.
Face Sets
Use this multiparm to specify which face sets the resulting Alembic layer will prune or replace. Click the + button to add a new rule.
User Properties
Use this multiparm to specify which user properties the resulting Alembic layer will prune or replace. Click the + button to add a new rule.
### Motion Blur
Use Motion Blur
Enabling this will cause sub-frame geometry to be saved to the Alembic file.
Samples
The number of sub-frame motion samples to be saved.
Shutter
The open/close of the shutter for sub-frame motion samples.
### EXAMPLES
Load Launch
[AlembicLayer](https://www.sidefx.com/docs/houdini/examples/nodes/out/alembic/AlembicLayer.html) Example for [Alembic](https://www.sidefx.com/docs/houdini/nodes/out/alembic.html) render node
In this example, we demonstrate how a Alembic ROP node can be used to create Alembic layers.
将场景导出到Alembic存档。Alembic是一种通用的交换格式，用于在不同的三维软件之间移动几何图形和动画。
### Parameters
See the following link for further information about the [Alembic format](http://code.google.com/p/alembic/).
## Tips and notes
-   If you add a spare paramter to an object named `abc_collapse` and its value is not zero, this node will skip that object and omit it from the archive. See also the **Collapse** parameter.
-   The Alembic library has some expectations of geometry attributes that this node attempts to satisfy. For polygon meshes, the Alembic library treats position (`P`), normal (`N`), texture coordinates (`uv`), and velocity (`v`) differently from other attributes. This node tries to express geometry in the form expected by the Alembic library for better compatibility with other applications.
    For example, that if you have `v` as a vertex attributes, this node will write it out as a point attribute.
    To avoid this mangling, use a different name than one of the “special” attributes. For example, if you really need to export vertex velocities, name the attribute something different like `v2` or `vv`.
## PARAMETERS
Render to Disk
Begins the render with the last render control settings.
Controls…
Opens the render control dialog to allow adjustments of the render parameters before rendering.
Valid Frame Range
Controls whether this render node outputs the current frame (**Render any frame**) or the image sequence specified in the **Start/End/Inc** parameters (**Render Frame Range**).
**Render Frame Range (strict)** will render frames START to END when it is rendered, but will not allow frames outside this range to be rendered at all. **Render Frame Range** will allow outside frames to be rendered. This is used in conjunction with render dependencies. It also affects the behavior of the 'Override Frame Range' in the Render Control dialog.
Two possible cases where you'd want the strict behavior:
-   A 60 frame walk cycle written out to a geo, but part of a larger ROP net to render out a larger frame range.
-   A texture loop from 1-20.
Otherwise, you will usually set this to non-strict.
Render Current Frame
Renders a single frame, based on the value in the playbar or the frame that is requested by a connected output render node.
Render Frame Range
Renders a sequence of frames. If an output render node is connected, this range is generally ignored in favor of frames requested by the output render node.
Render Frame Range (Strict)
Renders a sequence of frames. If an output render node is connected, this range restricts its requested frames to this frame range.
Start/End/Inc
Specifies the range of frames to render (start frame, end frame, and increment). All values may be floating point values. The range is inclusive.
These parameters determine the values of the following local variables for the output driver.
`$NRENDER`
The number of frames to be rendered by the output driver.
`$N`
The current frame being rendered (starting at 1 and going to `$NRENDER`).
For example, if the parameters are set to:
Start
10.5
End
12
Inc
0.5
There will be 4 frames rendered (`10.5`, `11`, `11.5`, and `12`), so `$NRENDER` will have a value of `4`. `$N` will have the value:
Frame
$N
10.5
1
11
2
11.5
3
12
4
Render With Take
The output driver will switch to this take before rendering and then restore the current take when rendering is done.
Tip
Use `chs("take")` to use this value in other parameters. See the [chs](https://www.sidefx.com/docs/houdini/expressions/chs.html "Evaluates the string value of a parameter at the current time.") expression function for more information.
Alembic File
The name of the archive to generate.
Format
The file format of the archive to generate.
Default
Use whichever file format is the default for the current version of Houdini.
HDF5
Use the HDF5 file format. HDF5 is a common hierarchical data format, and several tools exist to view and edit HDF5 files.
Ogawa
Use the Ogawa file format. Ogawa is an Alembic-specific file format available for use as of Alembic 1.5. Ogawa files are on average smaller (by 5-15%) and faster (4× for single-threaded reads, 25× for multi-threaded reads on 8 core systems) than HDF5 files.
Create Intermediate Directories
Create the directories in the Alembic archive output path if they do not exist.
Render Full Range (Override Frame-By-Frame)
Normally, it’s best to render all frames into a single Alembic archive. This allows Alembic to optimize storage of data and to be more efficient. This is the default behavior of the output driver, even when frame-by-frame rendering is requested.
In some work-flows, you may want to have the Alembic ROP operate on a frame-by-frame basis (see the `-I` option on the hscript render command). Turning this toggle off will let the ROP evaluate frame-by-frame.
Initialize Simulation OPs
Reset simulations before writing Alembic archive.
## Hierarchy
Use SOP Path
Instead of exporting objects contained under a root object, the Alembic ROP can export a single geometry detail specified by a SOP path. The SOP path export method is enabled by this parameter.
SOP Path
The path to the geometry detail to include in the alembic archive.
Subdivision Group
If a group name is specified here, any polygons in any objects will be saved as subdivision primitives in the Alembic file. Other polygons will be saved as polygon mesh nodes.
The subdivision group can be specified per object with the object level parameters `vm_rendersubd` or `ri_rendersubd`. If present, they will be used to control whether polygons will be saved as subdivision primitives and the `vm_subdgroup` parameter will be used to select which polygons will be rendered as subdivision surfaces.
Build Hierarchy From Attribute
Use a primitive string attribute to directly specify the path of a primitive in the output archive.
Path Attribute
The name of the attribute containing the path.
Root Object
The root object of the scene. All displayed objects contained under this node will be included in the Alembic archive.
Objects
A pattern/bundle of objects to include in the alembic archive.
Collapse Objects
This option can be used to skip writing transform nodes which have no transform (an identity transform) for the entire animation.
When importing an Alembic scene, there are often empty geometry nodes created to contain [Alembic SOPs](https://www.sidefx.com/docs/houdini/nodes/sop/alembic.html "Loads the geometry from an Alembic scene archive (.abc) file into a geometry network."). These objects are simply placeholders to contain the geometry. However, when exporting the scene, they will be added as dummy transform nodes (roughly doubling the size of the Alembic archive node count).
Do Not Collapse Identity Objects
All geometry containers (geometry objects containing SOPs) will be saved as Alembic transform nodes.
Collapse Non-Animating Identity Objects
All geometry containers which are not animated and have an identity transform will be skipped when writing the Alembic file.
Collapse All Geometry Container Objects
All geometry containers will not be written to the Alembic file. In some cases for subnet hierarchies, having a subnet parent animated will propagate the time dependence to the contained nodes. This option allows you to forcibly skip the geometry nodes.
Any transformations on these nodes will be lost during the save.
If you add a spare parameter to an object named `abc_collapse` and its value is not zero, this node will skip that object and omit it from the archive. This allows fine-grained per-object control regardless of the setting of this parameter.
Save All Non-Displayed (Hidden) Objects
If this checkbox is turned on, hidden objects matching the **Objects** pattern/bundle will also written to the Alembic archive.
Use Display SOP
If this checkbox is turned on, the geometry in the Display SOP will be saved instead of the geometry from the Render SOP.
Partition Mode
When saving a complex piece of geometry, it is possible to partition the geometry into multiple shape nodes by splitting up the primitives based on a string attribute. There are several different ways to interpret the string values.
No Geometry Partitioning
The geometry will be output as a single Alembic shape node.
Use Attribute Value
The value of the string attribute is used to name the shape node. This mode is ideal when using the `name` attribute.
Use Shape Node Component Of Path Attribute Value
When loading an Alembic file, you can store the Alembic path in a string attribute. This option will partition the geometry based on the names of the shape nodes stored in the attribute.
Use Transform Node Component Of Path Attribute Value
This option will partition the geometry based on the names of the transform nodes stored in the attribute.
Use Combination Of Transform/Shape Node
Combines both the transform and shape node names to form the name for the new shape node.
Partition Attribute
Specifies a string attribute which is used to partition a single geometry into multiple Alembic shape nodes. For example, you can use the `name` or the `abcPath` attribute to split a single piece of Houdini geometry into different Alembic shape nodes based on the string value.
Full Bounding Box Tree
This will cause all Alembic nodes to have proper bounding boxes written. Computing bounds for only the shape nodes is more efficient.
## Geometry
Packed Transform
When saving a complex piece of geometry, it is possible to partition the geometry into multiple shape nodes using packed primitives. There are several different ways to handle packed primitives.
Deform Geometry
The packed primitive’s transform will be baked in to the resulting shape node’s geometry.
Transform Geometry
A transform node will be created above the packed geometry.
Merge With Parent Transform
The packed primitive’s transform will be baked in to the parent transform node.
Use Instancing Where Possible
This will cause packed objects to be instanced within the Alembic archive during write, reusing geometry and potentially decreasing the size of the file.
Create Shape Nodes
This will cause Alembic shape nodes to be created for geometry.
Save Attributes
If this checkbox is turned on, geometry attributes will be saved to the Alembic file as arbitrary geometry parameters.
Point Attributes
Point attributes whose name matches this pattern will be saved in the Alembic file.
Vertex Attributes
Vertex attributes whose name matches this pattern will be saved in the Alembic file.
Primitive Attributes
Primitive attributes whose name matches this pattern will be saved in the Alembic file.
Detail Attributes
Detail attributes whose name matches this pattern will be saved in the Alembic file.
Primitive To Detail
Promote primitive attributes matching this pattern to detail attributes before exporting to Alembic. Sometimes when importing Alembic, Houdini must convert constant Alembic data to uniform data. This option lets you manually re-adjust certain attributes on export.
Force Conversion of Matching Primitive Attributes to Detail
The normal behavior when promoting primitive attributes to detail attributes is to validate that the values are the same for all primitives. Enabling this option will bypass this check forcing all matching primitive attributes to be converted to detail attributes regardless. The attribute value of the first primitive will be used as the single detail value for the exported primitive.
Detail Array Attributes
Detail attributes whose name matches this pattern will be saved as arrays instead of scalars.
Additional UV Attributes
Additional UV attributes whose name matches this pattern will be saved in the Alembic file.
Face Sets
This parameter controls how Houdini primitive groups will be translated to Alembic face sets. Alembic only supports face sets for polygon and subdivision meshes.
No Face Sets
No face sets will be saved out.
Save Non-Empty Groups As Face Sets
Only groups which contain polygons will generate face sets in the Alembic file.
Save All Groups As Face Sets
Face sets will be created for all groups, regardless of whether the group contains any polygons.
## Layering
Enable Layering
When enabled, the resulting Alembic archive will only export the subset of the scene specified by parameters on the **Layering** tab.
Create Full Ancestors for Output Nodes
When enabled, all data for ancestors to non-pruned nodes specified by the **Nodes** multiparm will be exported.
Nodes
Use this multiparm to specify which nodes the resulting Alembic layer will fully prune, replace, or merge. Click the + button to add a new rule.
Visibilities
Use this multiparm to specify which nodes the resulting Alembic layer will have their visibility changed. Click the + button to add a new rule.
Attributes
Use this multiparm to specify which attributes the resulting Alembic layer will prune or replace. Click the + button to add a new rule.
Face Sets
Use this multiparm to specify which face sets the resulting Alembic layer will prune or replace. Click the + button to add a new rule.
User Properties
Use this multiparm to specify which user properties the resulting Alembic layer will prune or replace. Click the + button to add a new rule.
## Motion Blur
Use Motion Blur
Enabling this will cause sub-frame geometry to be saved to the Alembic file.
Samples
The number of sub-frame motion samples to be saved.
Shutter
The open/close of the shutter for sub-frame motion samples.
## EXAMPLES
Load Launch
[AlembicLayer](https://www.sidefx.com/docs/houdini/examples/nodes/out/alembic/AlembicLayer.html)Example for [Alembic](https://www.sidefx.com/docs/houdini/nodes/out/alembic.html) render node
In this example, we demonstrate how a Alembic ROP node can be used to create Alembic layers.