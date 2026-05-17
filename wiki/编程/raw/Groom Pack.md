---
type: concept
title: Groom Pack
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "4b5ef4032240"
---
为了将其写入磁盘的目的，将一个新郎的组件打包成一组命名的打包基元。
### Parameters
The package can contain both the static and animated guide curves and skin.

Use the [Groom Unpack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/unpackgroom.html "Unpacks the components of a groom from a packed groom.") to unpack the components from the package.

Groom objects like a [Guide Deform](https://www.sidefx.com/docs/houdini/nodes/obj/guidedeform.html "Moves the curves of a groom with animated skin."), [Guide Sim](https://www.sidefx.com/docs/houdini/nodes/obj/guidesim.html "Runs a physics simulation on the input guides."), and [Guide Sim](https://www.sidefx.com/docs/houdini/nodes/obj/hairgen.html "Generates hair from a skin geometry and guide curves.") can read a groom package from file and unpack it for further processing or hair generation and rendering.

See also
!Groom Unpack#Groom Unpack Geometry
