---
type: concept
title: Vellum IO
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "528bea92718f"
---
包装vellum仿真，将它们保存到磁盘，然后再次加载它们。
### Parameters
The Vellum I/O SOP is designed to streamline the common operation of packing a Vellum stream, saving it to disk, and giving an option to use the saved sequence rather than the live sequence.
The third input wires directly to the third output and is not cached to disk.
## PARAMETERS
Storage Type
Vellum simulations consist of both the geometry being simulated, but also the set of constraints applied to the geometry. In order to restart a simulation the constraints are required, but it is a lot less storage to only store the raw geometry.
Geometry Only
Store an unpacked sequence of geometry which is just the Vellum geometry. In this mode, the second output will always be empty.
Packed Geometry and Constraints
Pack the incoming geometry and constraints wires into two packed primitives. This pair of packed primitives is then saved as a single sequence of geometry, providing access to the potentially animated constraints. The constraints allow the simulation to be restarted and allow the visualization of the state of the constraints when loading a cached simulation.
In this mode, the first output and second output will be the unpacked geometry and constraints respectively.
Load from Disk
Switches between importing fields from DOPs and loading the fields from the geometry file.
Note
If you start a render, it will always use the Import option, ignoring this parameter.
File Mode
How this node reads/writes the geometry to/from the disk file.
This parameter is only enabled when **Load From Disk** is disabled.
Automatic
Writes the file if it doesn’t exist, reads it if it does exist.
This is useful for caching, where the node will write the cache to disk the first time it cooks, and use the cache file from then on.
To force a refresh of the cache, manually delete the file on disk.
Read Files
Reads the geometry from the file. If the node’s input is connected, it’s ignored.
Write Files
Writes the input geometry to disk.
No Operation
No file access will occur. Pass through the input geometry to the output, like a [Null surface node](https://www.sidefx.com/docs/houdini/nodes/sop/null.html "Does nothing.").
Geometry File
Where to load the fields from when in Load from Disk mode. This also controls where the [Geometry ROP](https://www.sidefx.com/docs/houdini/nodes/out/geometry.html "Generates geometry files from a SOP or DOP network.") will save the fields.
Save to File
See the [File Cache SOP](https://www.sidefx.com/docs/houdini/nodes/sop/filecache.html "Caches (writes out once and then reads from) geometry (possibly animated) to disk.") help for these parameters.
Save Filter
See the [File Cache SOP](https://www.sidefx.com/docs/houdini/nodes/sop/filecache.html "Caches (writes out once and then reads from) geometry (possibly animated) to disk.") help for these parameters.
Load From File
See the [File Cache SOP](https://www.sidefx.com/docs/houdini/nodes/sop/filecache.html "Caches (writes out once and then reads from) geometry (possibly animated) to disk.") help for these parameters.
## LOCALS
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/COMMON/file.svg) File](https://www.sidefx.com/docs/houdini/nodes/sop/file.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/file.svg) File Cache](https://www.sidefx.com/docs/houdini/nodes/sop/filecache.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/filemerge.svg) File Merge](https://www.sidefx.com/docs/houdini/nodes/sop/filemerge.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/dopimport.svg) DOP I/O](https://www.sidefx.com/docs/houdini/nodes/sop/dopio.html)