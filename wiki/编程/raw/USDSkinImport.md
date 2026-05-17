---
type: concept
title: USDSkinImport
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "e0c9714483fa"
---
从USD Skin角色导入皮肤几何。
### Parameters
This SOP imports geometry from any [skinned primitives](https://graphics.pixar.com/usd/docs/api/_usd_skel__schemas.html#UsdSkel_BindingAPI) under a USD `SkelRoot` primitive. No deformation is performed, so the output contains rest geometry that is suitable as an input for the [Joint Deform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html "Perform skin deformation from KineFX skeleton animation.") or an [agent primitive](https://www.sidefx.com/docs/houdini/nodes/sop/agentlayer.html "Adds new shapes and layers to an agent primitive.").

The `boneCapture` capture attribute is constructed from the `primvars:skel:jointIndices` and `primvars:skel:jointWeights` primvars on the USD primitive, along with attributes from the USD `Skeleton` primitive that the skinned primitive is bound to.

The `usdprimpath` primitive attribute contains the path of the source USD primitive.

The skeleton’s bind pose and animation can be imported using [USD Animation Import](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--usdanimimport.html "Imports a skeleton and animation from a UsdSkel character.") or the higher-level [USD Character Import](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--usdcharacterimport.html "Imports the rest geometry, skeleton, and animation from a UsdSkel character.").

## PARAMETERS

Source

Specifies whether the source USD stage is from a LOP node or USD file on disk.

LOP Path

Specifies the path to a LOP node. The geometry will be imported from the USD stage output by this node.

USD File

The path to a USD file on disk.

SkelRoot Primitive Path

The path of a `SkelRoot` primitive in the USD stage. If the path is empty, the first `SkelRoot` prim in the stage will be used.

Shape Name Attribute

Creates a primitive string attribute that partitions the primitives into different named shapes. The names are generated using the relative path from the **SkelRoot Primitive Path** to the source skinned USD primitive.

## OUTPUTS

Rest Mesh

The character’s rest geometry.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-usdcharacterimport.svg) USD Character Import](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--usdcharacterimport.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-usdanimimport.svg) USD Animation Import](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--usdanimimport.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-fbxcharacterimport.svg) FBX Character Import](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--fbxcharacterimport.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-jointdeform.svg) Joint Deform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html)