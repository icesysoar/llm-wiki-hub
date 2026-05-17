---
type: concept
title: LOP Import
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "1f39f5754615"
---
LOP进口
### Parameters
This node will import the USD primitives specified by the **LOP Path** and **Primitives** parameters. The imported primitives are represented as [USD packed primitives](https://www.sidefx.com/docs/houdini/model/primitives.html#usd).
The primitives to be imported are specified by selecting the paths of one or more USD primitives, using a [primitive pattern](https://www.sidefx.com/docs/houdini/solaris/pattern.html "How to use the USD primitive matching syntax."). Optionally, the USD hierarchy can be further traversed to import the descendants of these primitives that match a specific criteria.
## PARAMETERS
LOP Path
LOP node to import from.
Primitives
The USD primitives to import. This parameter accepts any USD [primitive pattern](https://www.sidefx.com/docs/houdini/solaris/pattern.html "How to use the USD primitive matching syntax.").
Traversal
Optionally, the USD hierarchy can be further traversed to import descendants of the selected **Primitives** that match a criteria.
Note
Equivalent behavior could also be achieved through a [primitive pattern](https://www.sidefx.com/docs/houdini/solaris/pattern.html "How to use the USD primitive matching syntax.") (for example, using the `descendants` auto collection).
No Traversal
Creates a USD packed primitive for each USD prim matched by the **Primitives** pattern.
Components
Creates a USD packed primitive for each prim with kind `component`.
Gprims
Creates a USD packed primitive for each `gprim`.
Groups
Creates a USD packed primitive for each prim of type `group`.
Strip Layers Above Layer Breaks
Enable this option to remove all layers created above Layer Break nodes on every input to the source LOP node. This will restrict the imported primitives to those created after any Layer Breaks.
Import Frame
The frame to cook the LOP node. When importing animated geometry, this could be set to $FF. For static geometry, it is much more efficient to set this to a constant value such as $RFSTART.
Path Attribute
If enabled, creates a SOP primitive attribute containing the scene graph path of the original USD primitive.
Name Attribute
If enabled, creates a SOP primitive attribute containing the name of the original USD primitive.
Display As
How to display the USD packed primitives in the viewport.
Full Geometry
The full geometry will be displayed in the viewport.
Point Cloud
Only the points of the geometry will be displayed. This will take less memory and be faster to render.
Bounding Box
Only display the bounding box of the geometry in the viewport.
Centroid
Display a single point at the center of the bounding box.
Hidden
Don’t display the geometry in the viewport.
Pivot Location
Specifies the packed primitive’s point position.
Centroid
Use the center of the world position of the USD prim’s bounding box.
Origin
Use the world position of the origin of the USD prim.
Purpose
Sections of a USD hierarchy can be marked to be used for a specific purpose. Only sections marked as the default purpose or one of the specified purposes will be traversed when unpacking the USD packed primitives.
See also
!Unpack USD#Unpack USD Geometry
!USD Import#USD Import Geometry