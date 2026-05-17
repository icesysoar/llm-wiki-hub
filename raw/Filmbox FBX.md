---
type: concept
title: Filmbox FBX
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "6f5d105a0f5c"
---
将整个场景导出为FBX文件。
### Parameters
FBX (sometimes called “Filmbox”) is an interchange file format used to move 3D animation data between software packages. It can contain entire scenes, including geometry, lights, cameras, NURBS, animation, and skinning.

Note

FBX format specification generally does not support animated objects with a changing number of points or changing connectivity, such as Houdini’s particle systems or fluids. It is only possible to export these types of objects by breaking them up into individual triangles (although still within one FBX object node).

To restore these objects to their original appearance when they are brought into another packages, their vertices have to welded together, and all appropriate mesh edges have to set to “smooth”.

Also note that to import these types of objects properly into Maya™, Maya’s FBX importer “Use FBX Framerate in Maya” option must be checked.

## PARAMETERS

Render

Begins the render with the last render control settings.

Controls…

Opens the render control dialog to allow adjustments of the render parameters before rendering.

Render with Take

Uses the settings in a particular take while rendering. Choose **Current** to use the current take when rendering.

Valid frame range

Limits the rendering of frames, when set to **Render frame range** or **Render frame range only**.

Render any frame

Allow the renderer to render any and all frames.

Render frame range

Only render the frames in the range set below, but allow the renderer to render other frames if they are referenced by in-range frames.

Render frame range only (strict)

Only render the frames in the range set below, and don’t allow the renderer to render other frames, even if they are referenced by in-range frames.

Export

Determines the node to start exporting at. Defaults to `/obj`, meaning all objects and subnetworks under it will be exported. If a node to be exported is a network, only its contents will be written out, not the network itself.

Create Root for Subnet

Create an extra root for the `Export` node when it is a subnetwork. This causes the exporting subnetwork node itself to be represented in the FBX file.

Output File

The file to save the geometry to (should end in `.fbx`).

Build Hierarchy from Path Attribute

Use a primitive string attribute for creating shape nodes in the output file. Each string value is treated like a path to a shape node that the primitive will be created under. Intermediate nodes will be created as needed with identity transforms. If the primitive is a packed primitive, then its parent node will take the primitive transform.

If the path value contains absolute filesystem prefixes (eg. op:, http:, c:, etc), those will first be stripped.

Note

This parameter is only available when used from the Geometry context or when the Export parameter is set to a [Geometry](https://www.sidefx.com/docs/houdini/nodes/obj/geo.html "Container for the geometry operators (SOPs) that define a modeled
object.") object.

Note

Support for animation export using this is currently limited to only exporting primitive transforms and each primitive must have a unique path attribute value. There is no support for exporting to vertex caches nor changing geometry topology.

Path Attribute

The name of the attribute containing the path used for `Build Hierarchy from Path Attribute`.

## FBX

Export in ASCII

If checked, the exported FBX file will be in human-readable ASCII format. Otherwise, it will be exported as a binary FBX file.

FBX SDK Version

Allows the user to chose which version of the SDK to use to export the FBX file.

Vertex Cache Format

Determines which format vertex cache files will be exported in.

Maya Compatible (MC)

Maya’s native vertex cache format.

3DS MAX Compatible (PC2)

Vertex cache format compatible with 3DS MAX.

Export Invisible Objects

Determines how invisible objects are to be exported. This is convenient if a scene contains hidden objects that are highly complex but do not need to exported.

As Hidden Null Nodes

Each hidden objects will be represented as a hidden Null node in FBX. No time will be spent exporting its geometry.

As Hidden Full Nodes

Each hidden object will be represented as an appropriate type in FBX. Processing time will be the same as if the object were not hidden.

As Visible Full Nodes

Each hidden object will be represented as an appropriate type in FBX, and made visible. Processing time will be the same as if the object were not hidden.

Axis System

Determines the axis system convention.

Y Up (Right-handed)

Right-handed Y Up convention (default): Up = +Y, Front = +Z, Cross = +X. Use this for Houdini, Maya Y-Up, MotionBuilder, and OpenGL.

Y Up (Left-handed)

Left-handed Y Up convention: Up = +Y, Front = +Z, Cross = -X. Use this for LightWave and DirectX.

Z Up (Right-handed)

Right-handed Z Up convention: Up = +Z, Front = -Y, Cross = +X. Use this for Maya Z-Up, and 3ds Max.

Current (Y-Up or Z-Up Right-handed)

Export using the current scene orientation preference.

Convert to Specified Axis System

When enabled, the FBX scene will be converted from the current Houdini scene orientation to one given in the `Axis System` parameter.

Convert Units

When enabled, the FBX scene will be converted from the current Houdini system units to the native FBX unit of centimeters.

Conversion Level of Detail

This option determines the level of detail to use when converting non-polygonal objects to polygons. Higher values increase polygon subdivision level, lower values decrease it.

Detect Constant Point Count Dynamic Objects

If checked, the exporter will try to detect animated objects that do not change point count or point connectivity, and export them without breaking them up into individual triangles, as is done with particle systems and fluids. This allows for RBD or cloth objects to be exported as a single, smooth object, while still allowing topology-changing objects to be exported.

This may fail if a object with changing point connectivity happens to have exactly the same point count over all frames of exported animation. In these case, this option should be disabled.

Convert NURBS and Bezier Surfaces to Polygons

If checked, the exporter will convert all NURBS and Bezier surfaces to polygonal meshes using the level of detail below to determine mesh density. Otherwise, NURBS and Bezier surfaces will be exported as NURBS.

Conserve Memory at the Expense of Export Time

Affects only objects exported with vertex caches. If checked, internal vertex positions computed during export will be discarded, not cached, resulting in reduced overall memory use. However, this will increase the export time. If left unchecked, the exporter will run faster but use more memory.

Export Deforms as Vertex Caches

If checked, any geometry objects that contain Deform SOPs will be exported as vertex caches with no weight information. If unchecked, these nodes will be exported as objects with skinning and corresponding weights.

Force Blend Shapes Export

If checked, [Blend Shapes SOPs](https://www.sidefx.com/docs/houdini/nodes/sop/blendshapes.html "Computes a 3D metamorphosis between shapes with the same topology.") found in geometry nodes will always be exported, potentially loosing information doing so, as any node modifying the geometry after the blend shapes will be ignored. If unchecked, blend shapes SOPs will only be exported if no modification is done to the geometry after them.

Force Skin Deform Export

If checked, [Deform SOPs](https://www.sidefx.com/docs/houdini/nodes/sop/deform.html) found in geometry nodes will always be exported, potentially losing information doing so, as any nodes modifying the geometry after the Deform will be ignored. Only [Bone Deform](https://www.sidefx.com/docs/houdini/nodes/sop/deform.html), [Bone Capture](https://www.sidefx.com/docs/houdini/nodes/sop/capture.html "Supports Bone Deform by assigning capture weights to bones.") and [Capture Override](https://www.sidefx.com/docs/houdini/nodes/sop/captureoverride.html "Overrides the capture weights on individual points.") nodes are currently supported. If unchecked, these nodes will only be exported if no modification is done to the geometry after them.

Export End Effectors

If unchecked, additional end effectors null nodes at the end of each branch of a skeleton will not be exported. This will help in reducing the number of joints exported to a FBX file. However, the exported FBX file will not reimport properly in Houdini afterwards, effectively missing one joint/bone for each branch of the skeleton. If checked, additional end effectors null nodes will be exported, allowing the FBX file to be reimported correctly.

### Scripts

A script command can be specified for execution at the various execution points. The expression language selected for the parameter determines whether this command are hscript or python statements.

Prior to execution, this node is automatically set as the global current node.

To run statements from a file instead, specify the path to the file with either a `.cmd` extension (when the language is set to Hscript), or `.py` extension (when the language is set to Python). Additional arguments to the script can also be supplied, they will be parsed in a shell-like manner.

Pre-Render Script

Run this script before any rendering.

Pre-Frame Script

Run this script before each frame.

Post-Frame Script

Run this script after each frame.

Post-Render Script

Run this script after all rendering.