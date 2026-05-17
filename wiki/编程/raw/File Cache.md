---
type: concept
title: File Cache
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "bb76cbeb87a1"
---
将几何图形（可能是动画的）缓存（写出一次，然后再读出）到磁盘。
### Parameters
![](https://www.sidefx.com/docs/houdini/icons/SOP/file.svg)
This node combines the functionality of the [Geometry render node](https://www.sidefx.com/docs/houdini/nodes/out/geo.html) and the [File node](https://www.sidefx.com/docs/houdini/nodes/sop/file.html "Reads, writes, or caches geometry on disk.") to let you write out cache files and then read those files on disk instead of cooking its input.
For example, you might have a slow section of your geometry network that spends a lot of time breaking simulating the shattering of a model, looping over the pieces, replacing proxy pieces with hi-res geometry, and so on. After that section, you can add a File Cache node to render out the geometry at that point in the network to disk. Then you can switch the Cache File node to “Load from Disk” mode, and from then on the File Cache node will read the geometry from the cached files (as needed) instead of cooking the slow part of the network.
This node has advanced controls for how the files are saved, and what is loaded back from the cache. It also has rudimentary support for [caching multiple variations](https://www.sidefx.com/docs/houdini/nodes/sop/filecache.html#versioning)
## How to
1.  After a part of the geometry network that is slow to compute, add/insert a File Cache node.
2.  The default saves the cache files as `Base Name/vVersion/Base Name_vVersion.$F4.bgeo.sc` in a `geo` folder in the same diretory as the scene file. You can optionally change how the node builds the filenames and where it saves the files.
3.  If _all_ the primitives in the input are _always_ VDB volumes, switch the file type from `.bgeo.sc` to save the files directly as `.vdb` using the popup menu to the right of **Base Name**.
    (If the input might have other types of geometry, or you're not sure, leaving it as `.bgeo.sc` is safest, since it can save volumes and all other types of Houdini geometry.)
    See the **File type** parameter (below) for more information.
4.  If the input geometry is animated, turn on **Time Dependent Cache**. If the input geometry is static, turn off **Time Dependent Cache** so the node only saves one file, instead of separate (identical) files for each frame.
5.  Click the **Caching** tab.
6.  If the input geometry is animated, and the frames must be cooked in sequence (because there is a simulation), turn on **Simulation** (under **Sequence**). If the frames are independent (later frames don’t require earlier frames to already be cooked), turn off **Simulation**.
    When **Simulation** is off, saving out the cache is much faster, because Houdini can cook and save frames in parallel threads.
7.  To write out the cache files, click either **Save to Disk** or **Save to Disk in Background**.
    If you choose background cooking, the node uses an internal TOP network to cook and save the frames in a separate background process. If you need to stop the background rendering for some reason, you can click **Cancel Cook**.
8.  Once all the cache files are written out, turn on **Load from disk** at the top of the parameter interface (when you click the **Save to disk** or **Save to disk in background** buttons, the node automatically turns on the checkbox for you). This sets the node to read its output from the cached files instead of cooking its input.
    If the cache files are ever updated by a separate node/process, you can force this node to reload them by clicking **Reload geometry**.
9.  If you change the input by editing the nodes/parameters above this node, and you want to see the results, turn off **Load from disk**. If you then want to cache the new output, click **Save to Disk** or **Save to Disk in Background** again.
## Trying variations
It can be painful to try variations of the cached input, if it means you have to invalidate the cache, and then recreate it later if you decide to go back to what you had before. This node has rudimentary support for caching variations through _cache versions_.
For example, say you have cached a building destruction sequence. You want to go back and try changing some parameters in the destruction, and you’ll want to cache the edited output, but you don’t want to throw away the current cache in case you want to come back to it later.
In this case you can do the following:
1.  Increase the **Version** paraemter.
2.  Turn off **Load from disk**.
3.  Edit the network above the File Cache.
4.  Cache the results if necessary (using **Save to Disk** and then **Load from disk**).
5.  If you want to view/play the previous cached result, turn on **Load from disk** and set the **Version** back to the old number.
    Note that this does **not** reset the nodes and parameters above this node. It simply goes back to reading from the previous cached files.
    Using this feature increases the danger that what’s cached is totally different than what the natural output of the input network would be, which can be confusing.
Versioning is only available when **File Path** is **Constructed**.
## Tips and notes
-   By default, when you click **Save to disk** or **Save to disk in background**, the node automatically converts the expression in **Base name** to a literal string. This prevents the cache from breaking if you duplicate or rename the scene file or node. To turn this behavior off, turn off **Advanced ▸ Save ▸ Harden base name on save**.
    You can recreate the expression in the **Base name** parameter by choosing it from the drop-down menu to the right of the parameter’s text field.
-   This node never deletes unused files. It’s up to you whether/when to clean up cache files that are no longer used/needed.
-   You may be able to use the parameters on the **Save Filters** tab to make cache files smaller and load faster.
-   If you have existing geometry caches written out by a previous version of Houdini, set **File Path** to **Explicit**, and set the **Geometry File** to a [filename expression](https://www.sidefx.com/docs/houdini/render/expressions.html "How to use variables and expressions in file path fields to generate numbered and unique filenames.") that matches the existing cache files, with the correct file extension for their format.
-   If you turn off the checkbox next to **Version**, the [version](https://www.sidefx.com/docs/houdini/nodes/sop/filecache.html#versioning) will not be included in the cache file path(s). This simplifies the directory structure and filenames of the cached files. However, since you don’t usually need to work directly with the cache files anyway, it may be worthwhile to leave **Version** on just in case you want to use it someday.
-   The **Output File** parameter under **Advanced ▸ Path Construction** has an expression that computes the cache file path for the current frame. The result may be useful to copy and paste if you need to do something with the file in a shell. **Do not edit the parameter’s expression**.
-   When you set the **File type** to `.vdb`, the node converts Houdini’s primitive attributes to VDB grid metadata, and detail attributes to file metadata.
-   The expressions in the parameters under **Advanced ▸ Path Construction** will allow an expert user to customize exactly how the node generates a cache file path. However, editing the expressions requires extensive knowledge of expressions, and can easily break the operation of the node. The basic parameters include a lot of room for customization, so we recommend that you **do not try to customize the path building expressions**. However, they are available if, for example, they are necessary to conform with studio-wide conventions.
## PARAMETERS
Load from Disk
When this is on, the node reads its output from the cached disk files, rather than cooking its input. When you click **Save to Disk** or **Save to Disk in Background** (on the **Caching** tab) to write out the cache files, the node automatically turns this checkbox on.
Reload Geometry
Force a reload of the file. This will also clear any cached data for packed disk primitives (see also the [geocache](https://www.sidefx.com/docs/houdini/commands/geocache.html "Manipulates the internal geometry cache.") command).
File Path
When this is **Constructed** (the default), the node builds up the cache file path(s) from the values of various parameters, allowing features such as versioning and animation options. If you set this to **Explicit**, you need to [manually write a single expression](https://www.sidefx.com/docs/houdini/render/expressions.html "How to use variables and expressions in file path fields to generate numbered and unique filenames.") in the **Geometry File** parameter with all the variables you want in the path (including the frame number when **Time dependent cache** is on).
Time Dependent Cache
When this is on (the default), the node writes out a separate cache file for every frame (using the global frame start/end/increment from the timeline). If the input geometry is static (doesn’t change based on the frame number), turn this off to avoid writing out multiple identical files.
Base Name
When **File Path** is **Constructed**, this is the first part of the cache file name. The default is `$HIPNAME.$OS` (the name of the current scene file without the `.hip` extension, then a dot, then the name of this node). This is usually sufficient to prevent filename collisions between files/nodes if you give this node an meaningful, unique name (if you have two networks containing nodes both named `filecache1`, you will get a collision). The drop down menu to the right of the text field has some more possible expressions.
File Type
The default is `.bgeo.sc`, which can handle any type of Houdini geometry and uses compression, so it’s always safe to use. If _all_ the primitives in the input are _always_ VDB volumes, you can switch the file type to save the files directly as `.vdb`. When you set the **File type** to `.vdb`, the node converts Houdini’s primitive attributes to VDB grid metadata, and detail attributes to file metadata.
Base Folder
When **File Path** is **Constructed**, this is the folder to save the cache files into. The default is `$HIP/geo` (a folder named `geo` in the same directory as the current scene file). (When **Version** is on it adds another directory level inside the base folder.)
Open Directory
Click to show the contents of the **Base Folder** in the file manager. This can be useful when you want to clean up old cache files.
Version
When **File Path** is **Constructed** and the checkbox to the left is on, the node adds a directory level (and filename part) to the cache file path(s) indicating the version. This lets you [cache multiple variations](https://www.sidefx.com/docs/houdini/nodes/sop/filecache.html#versioning) of the input network.
Geometry File
When **File Path** is **Explicit**, the node uses this file path expression to generate the cache file path(s). This expression should [include all the variables](https://www.sidefx.com/docs/houdini/render/expressions.html "How to use variables and expressions in file path fields to generate numbered and unique filenames.") you want in the path (including the frame number when **Time dependent cache** is on)
## Caching
Cache
Save to Disk
Saves the geometry to disk with the last control settings.
Save to Disk in Background
Use a TOP network to cook and save the cache files to disk in a separate background process. This allows you to keep working on other parts of Houdini. The cached frames will show up as they are completed by the other process.
Cancel Cook
Stops all background caching processes, if any exist.
Tip
You can collapse the box around these buttons as a “safety latch”, to prevent yourself from clicking them and rebuilding the cache accidentally.
Sequence
Evaluate As
When this is **Frame Range** the node writes a cache file for every frame (see Start/End/Inc below). If you don’t want pre-generate all frames at once, or if you know you only need to regenerate a single changed frame, you can set this to **Single Frame**. This makes the node write out a cache file only for the current frame (or the frame you set in **Override frame**).
Simulation
Use this when you are caching a sequence that is generated using a simulation, that makes each frame dependent on it’s previous frame.
Override Frame
When **Evaluate as** is **Single Frame** and the checkbox to the left is on, cache this explicit frame number instead of the current frame from the timeline.
When **Evaluate as** is **Frame range**, this is the number of fractional sub-frames to divide each frame into. Caching sub-frames increases the quality of motion blur rendering for cached animated geometry. If you set **Substeps** greater than `1` and you've set **File Path** to **Explicit**, make sure your explicit path expression can handle fractional frames, by using `$T` (floating point time in seconds) or `$FF` (fractional frame number) instead of `$F` (whole frame number).
Load
Clamp First Frame
???
Clamp Last Frame
???
Load
Some file formats, in particular `.bgeo`, `.bgeo.sc`, and `.geo`, contain meta-data in the header than can be loaded without loading the entire file. This is useful for dealing with large data sets.
All Geometry
Loads the whole file. Potentially with some parts delayed (see below)
Info
Creates one point if the file loads successfully and attach attributes for each named component of the meta-data.
Metadata is created by whatever writes the file, so may vary. Common metadata are:
artist
The username that generated the file. You can override this with the `HOUDINI_AUTHOR` environment variable.
hostname
The name of the machine that generated the file. This is very useful when tracking strange behavior on a farm. It can also be overridden with the `HOUDINI_AUTHOR` environment variable.
date
The time the file was created, which may not match the date stamp of the file.
software
The version of Houdini used to create the file.
time
The time, in seconds, on the playbar when the file was saved.
timetocook
How long it took to compute the file. Created by ROP Geometry, this is the wall-clock time in seconds to generate the file. If multiple output drivers are present, caching may cause undercounting of what it would take to cook the file on its own.
Info Bounding Box
Tries to build a bounding box using the information stored in the header of the file.
Point Cloud
Tries to load just the points from a disk file. This will be faster and use less memory than loading primitives.
Packed Disk Primitive
Instead of loading the geometry into memory, create a packed disk primitive. Copies of the delayed load primitive will share geometry meaning that multiple copies will use less memory.
Packed Disk Sequence
Instead of loading the geometry into memory, this will create a packed disk sequence primitive. Unlike a packed disk primitive, the packed disk sequence stores a list of filenames along with an index of which file to unpack during rendering. Since the packed disk sequence primitive is aware of all the files in the disk sequence, it is able to compute blended sub-frame geometry at render time (provided topology matches between frames). This means that motion blur can be computed correctly. When creating the packed disk sequence primitive, the **Geometry File** parameter is evaluated for each frame in the frame range. The index of the packed disk sequence primitive is set to the value of the **Sequence Index** parameter.
Packed Geometry
This will load the geometry into memory, and create a standalone packed geometry primitive containing it.
Display As
When loading the geometry as **Packed Disk Primitive** or when delayed loading, you can set the viewport display to a lighter representation of the packed geometry. This setting only applies to rendering in the viewport, at render time, the full geometry will be rendered.
Use File Setting
Packed primitives have viewport display settings that are saved to file. This option reads these and uses them. All others override the saved setting.
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
Pack Using Expanded/Absolute File Path
When loading the geometry as **Packed Disk Primitive**, this toggle controls whether the file name stored with the primitive will have variables expanded. By default, variables will be preserved. For example, a file such as `$HIP/geo/tree.bgeo` will be portable if the value of the `$HIP` variable changes. This is only important if you are saving the packed primitive to disk and may move the geometry file.
When storing variables in the packed primitive (i.e. the toggle is turned off), the primitive itself performs variable expansion. Since the primitive can be accessed in applications other than Houdini (`mantra`, `gplay`, `gconvert`, etc.), the expansion of variables is limited in function. For example, using variables local to the .hip file or using expressions which reference other nodes may not work as expected.
Delay Load Geometry
If this parameter is set, packed primitives and other shared data will not be loaded immediately but will be loaded only as needed. This can be useful when opening a large scene to reduce load times.
Sequence Index
When creating **Packed Disk Sequence** primitives, this parameter specifies which geometry from the sequence will be used at render time. The index is linear, with values between 0 and the number of geometry files in the disk sequence (not based on the frame number). Index values out of range will automatically wrap to generate animation cycles.
The index values can have non-integer values. If the topology matches between disk files, the geometry will be blended at render time. See also the `vm_pack_sequencesubsteps` rendering property.
Tip
To offset a sequence of images or geo files when you have padding in your frames, you should enter something like this:
<path_to_image>/frame`padzero(3, $F+1)`.tga
Where 3 is the number of digits in your sequence, for example 001 is pad 3, 0002 pad 4, etc. The back ticks are necessary so the expression gets evaluated inside the string parameter.
Wrap Mode
When creating **Packed Disk Sequence** primitives, this parameter specifies behavior when **Sequence Index** is outside of the frame range.
Cycle
File sequence repeats.
Clamp
First file is used used when **Sequence Index** is before the range. Last file is used when **Sequence Index** is after the range.
Strict
No geometry outside of the range.
Mirror
File sequence repeats with each repetition reversing order.
## Scheduling
TOP Scheduler Override
This parameter overrides the TOP scheduler for this node.
## Save Filters
Delete Attributes
A space separated list of attributes to delete from the geometry before saving it. If you know there are attributes on the input geometry you don’t need in the rest of the network, you can decrease the cache file size and make cache loading faster by preventing the attributes from being included in the cache. The names will match at any level (vertex, point, primitive, or detail). The node will never delete the `P` (position) point attribute. You can use patterns, for example `* ^v` to delete all attributes except `P` and `v`.
Delete Groups
A space separated list of groups to delete from the geometry before saving it. This can be useful with simulation data, where there can be groups in the output you will never use. You can decrease the cache file size and make cache loading faster by preventing these groups from being included in the cache.
Number of Casts
If you know you don’t need full precision for certain attributes in the input, this multi-parm lets you convert the attributes to lower-precision types before saving the geometry. This can make the cache files smaller and faster to load (depending on how many uses of the attribute there are). Set the number or click the plus or minus buttons to set the number of conversions to do.
See the [Attribute Cast SOP](https://www.sidefx.com/docs/houdini/nodes/sop/attribcast.html "Changes the size/precision Houdini uses to store an attribute.") help for more information.
Class
In a “cast” multiparm instance, the level (vertex, point, primitive, or detail) of the attribute(s) you want to convert to lower precision to save space.
Attributes
In a “cast” multiparm instance, a space-separated list of attributes at the given level (set by the **Class** parameter above) you want to convert to lower precision to save space.
Precision
In a “cast” multiparm instance, the precision to convert the matching attributes down to, to save space.
## Advanced
Save
Enable Load from Disk on Save
Whether the node will automatically turn on **Load from disk** when you click **Save to disk** or **Save to disk in background**.
Harden Base Name on Save
When **File Path** is **Constructed** and this is on, when you click **Save to disk** or **Save to disk in background** the node automatically converts the expression in **Base name** to a literal string. This prevents the cache from breaking if you duplicate or rename the scene file or node.
Create Intermediate Directories
When writing out cache files, automatically create any intermediate directories in the file path that don’t exist.
Initialize Simulation OPs
Forces all simulation OPs to be reset. This includes DOP Networks, POP SOPs, and other OPs that cache their results.
This is the safest way to render out a simulation, because it starts the simulation from scratch and discards any partial simulations you might have done with different parameters.
Alfred Style Progress
A percentage complete value is printed out as files are written. This is in the style expected by Pixar’s Alfred render queue.
Save in Background
When saving more than one frame, save in a background thread. This can make saving faster for large file sizes, but may use more memory since it will retain the output geometry until the save completes.
Save Retries
If saving the geometry to disk fails due to a disk writing error, Houdini will usually error the output node immediately. This is desirable for most cases where a failure to save means an illegal path, which is not recoverable. However, sometimes files fail to save due to network issues. If the number of save retries is non-zero, Houdini will re-attempt to save this number of times. Each time will be accompanied with an output to the console of the failure to save and a five second wait in the hopes that the network will clear up.
Render with Take
Uses the settings in a particular take while rendering. Choose **Current** to use the current take when rendering.
Load
Missing Frame
This is what the node should do (in **Load from disk** mode) when the node can’t find (or cleanly load) a cache file. **Report error** sets an error on the node, preventing the rest of the network from cooking. This makes it obvious when a problem happens. **No geometry** (the default) sets a warning on the node rather than an error, and outputs empty geometry. This can be useful if your network has a way of dealing with missing cache frames, or if they're not important.
Cache Frames
The total number of frames to cache in memory. These sorted by filename, not by time, so if multiple frames evaluate to the same file name they will share the same cached geometry.
Note
A value of 1 is almost the same as the default behavior of the File SOP. However, the new geometry will be loaded before the old geometry is freed. When loading agent primitives, this avoids possible flushing shared agent shape caches.
Pre-fetch Geometry
Attempt to predict the next frame that will be needed and load it in the background. This lets computation be overlapped with file IO.
If you are blending multiple frames, the Cache Frames needs to be large enough for only the net-new frame to be loaded each cook. Otherwise the simple predictive model of the prefetcher will be confused and stop working.
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
Post-Write Script
Run this HScript after each frame’s data has finished writing to disk. This is always after the corresponding Post-Frame Script and always before the Post-Render script, but the order otherwise is undefined. When Save in Background is enabled this allows delaying script actions until the file has finished saving.
Scripts
This section duplicates the pre/post scripts available on the [Geometry render node](https://www.sidefx.com/docs/houdini/nodes/out/geometry.html "Generates geometry files from a SOP or DOP network.").
Path Construction
The expressions in these parameters allow an expert user to customize exactly how the node generates a cache file path. However, editing the expressions can easily break the operation of the node. The basic parameters include a lot of room for customization, so we recommend that you **do not try to customize these expressions**. However, they are available if, for example, they are necessary to conform with studio-wide conventions.
Frame
Contains the expression that computes the current frame number to cache. **Do not edit this expression**.
Frame String
Contains the expression that generates the frame number as a padded string, including a dot prefix. **Do not edit this expression**.
Version String
Contains an expression that generates the “version” part of the path, including a `v` prefix. **Do not edit this expression**.
Cache Folder
Contains an expression that generates the parent directory path for cache files. **Do not edit this expression**.
Cache Name
Contains an expression that generates the filename for cache files. **Do not edit this expression**.
Descriptive Label
Contains an expression that generates the _descriptive text_ displayed next to this node (below the name and badges) in the network editor. This is set to output the cache filename pattern. **Do not edit this expression**.
Output File
Contains an expression that generates the resolved, full path of the cache file for the current frame. **Do not edit this expression**.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/COMMON/file.svg) File](https://www.sidefx.com/docs/houdini/nodes/sop/file.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/filemerge.svg) File Merge](https://www.sidefx.com/docs/houdini/nodes/sop/filemerge.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/dopimport.svg) DOP I/O](https://www.sidefx.com/docs/houdini/nodes/sop/dopio.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/vellumio.svg) Vellum I/O](https://www.sidefx.com/docs/houdini/nodes/sop/vellumio.html)  
![](https://www.sidefx.com/docs/houdini/icons/SOP/file.svg)
