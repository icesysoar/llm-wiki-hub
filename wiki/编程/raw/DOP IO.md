---
type: concept
title: DOP IO
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "fe0fe89b05a5"
---
从DOP模拟中导入字段，将它们保存到磁盘上，然后再加载回来。
### Parameters
The DOP I/O SOP is designed to streamline the common operation of importing many fields from fluid simulations into SOPs. It also includes a [Geometry ROP](https://www.sidefx.com/docs/houdini/nodes/out/geometry.html "Generates geometry files from a SOP or DOP network.") to save these fields to disk and the option to load from disk rather than use the live simulation.

## PARAMETERS

Load from Disk

Switches between importing fields from DOPs and loading the fields from the geometry file.

Note

If you start a render, it will always use the Import option, ignoring this parameter.

Geometry File

Where to load the fields from when in Load from Disk mode. This also controls where the [Geometry ROP](https://www.sidefx.com/docs/houdini/nodes/out/geometry.html "Generates geometry files from a SOP or DOP network.") will save the fields.

Import from DOPs

See the [Dop Import Fields SOP](https://www.sidefx.com/docs/houdini/nodes/sop/dopimportfield.html "Imports scalar and vector fields from a DOP simulation.") help for these parameters.

Save to File

See the [Geometry ROP](https://www.sidefx.com/docs/houdini/nodes/out/geometry.html "Generates geometry files from a SOP or DOP network.") help for these parameters.

Load From File

See the [File SOP](https://www.sidefx.com/docs/houdini/nodes/sop/file.html "Reads, writes, or caches geometry on disk.") help for these parameters.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/COMMON/file.svg) File](https://www.sidefx.com/docs/houdini/nodes/sop/file.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/file.svg) File Cache](https://www.sidefx.com/docs/houdini/nodes/sop/filecache.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/filemerge.svg) File Merge](https://www.sidefx.com/docs/houdini/nodes/sop/filemerge.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/vellumio.svg) Vellum I/O](https://www.sidefx.com/docs/houdini/nodes/sop/vellumio.html)