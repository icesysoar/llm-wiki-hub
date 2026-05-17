---
type: concept
title: FBX Skin Import
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "aed9ebd782f4"
---
从FBX文件中导入皮肤几何图形。
### Parameters
This is a low-level node that imports skin geometry from an FBX file which can then be deformed along with an animated skeleton (eg. imported using an [FBX Animation Import](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--fbxanimimport.html "Import animation from an FBX file as a geometry-based skeleton.") SOP). Typically, [FBX Character Import](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--fbxcharacterimport.html "Import a skinned character from an FBX file with animation.") is used instead.
## PARAMETERS
FBX File
Path to FBX file to import.
Skin Geometry
By default, all geometry nodes are imported. A pattern can be specified here to filter which geometry nodes should be imported.
Shape Name Attribute
Specifies the name of the primitive attribute to create for holding the name of the FBX geometry node from where it was imported from. No attribute is created when this is blank.
When there are duplicate node names FBX file, the names put here will be uniqued, with the original path stored in the attribute named `path`.
Note
This attribute must be called `name` for the exporter.
Material
Specifies the node path value for the `shop_materialpath` primitive attribute. When blank, the `shop_materialpath` attribute will not be created.
Convert Units
When enabled, the imported scene is scaled to convert from the FBX file’s measurement unit (default centimeters) to Houdini scene’s measurement unit as specified in Main Preferences > Hip File Options (default meters).
Import Invisible Shapes
Specifies whether to import geometry from nodes that are not visible. If enabled, the invisible shapes will belong to the `_3d_hidden_primitives` primitive group (similar to using the [Visibility SOP](https://www.sidefx.com/docs/houdini/nodes/sop/visibility.html "Shows/hides primitives in the 3D viewer and UV editor.")).
Reload
Reload from the FBX file.
## ATTRIBUTES
boneCapture
This point attribute defines the rest transforms and skinning weights for the deformation. It is typically used by the [Joint Deform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html "Perform skin deformation from KineFX skeleton animation.")'s first input to do this.
fbx_material_name
This primitive attribute holds the name of the material as specified in the FBX file.
material_override
This primitive attribute holds the imported material property values suitable for use with Houdini’s viewport and the ![](https://www.sidefx.com/docs/houdini/icons/VOP/principled.svg) [Principled Shader](https://www.sidefx.com/docs/houdini/nodes/shop/principledshader.html) shader.
shop_materialpath
This primitive attribute is used to specify the path to a shader node used for rendering. When no shader node is available a value of `.` is used to indicate to the viewport to use the default shader with the values in the `material_override` attribute.
The following three attributes are provided for efficient creation of a Capture Pose input for the [Joint Deform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html "Perform skin deformation from KineFX skeleton animation.") SOP.
capt_names
This detail attribute holds a copy of the skin geometry’s bind pose influences from `boneCapture`.
capt_parents
This detail attribute provides parent indices for every entry in `capt_names`. An index of -1 means no parent, otherwise the index is into the list of names specified in `capt_names`.
capt_xforms
This detail attributes holds a copy of the bind pose transforms corresponding toe `capt_names`. The 4×4 matrix values here are inverted from the ones found in `boneCapture`.
See also
!FBXCharacterImport#FBX Character Import Geometry
!FBXAnimationImport#FBX Animation Import Geometry
!USDSkinImport#USD Skin Import Geometry
!ROPFBXCharacterOutput#ROP FBX Character Output Geometry
