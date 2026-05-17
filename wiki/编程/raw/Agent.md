---
type: concept
title: Agent
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "ef7edbbcdb42"
---
该输出运算符用于编写代理定义文件。
### Parameters
This output operator is used to write files that define an agent. The created files can then be loaded in by the [Agent](https://www.sidefx.com/docs/houdini/nodes/sop/agent.html "Creates agent primitives.") geometry node to create agent primitives for crowds.
Note
Agent primitives currently only support deforming point normals and not vertex normals. When the deforming geometry is written out, vertex normals will be automatically promoted to point normals as a result.

Render
Begins the render with the last render control settings.
Controls…
Opens the render control dialog to allow adjustments of the render parameters before rendering.
Valid Frame Range
What frames to render.
Render Current Frame
Allow the baking any and all frames.
Render Frame Range
Only bake the frames in the range set below, but allow the baking other frames if they are referenced by in-range frames.
Render Frame Range Only (Strict)
Only bake the frames in the range set below, and don’t allow baking of other frames, even if they are referenced by in-range frames.
Start/End/Inc
The range of frames for the clip (start frame, end frame, and increment), inclusive.
All values may be decimal (for example, start on frame 1.5)..
Render with Take
Uses the settings in a particular take while rendering. Choose **Current** to use the current take when rendering.
Source
Specifies the source of the agent definition that will be written to disk.
Character Rig
Generate an agent definition from a character rig in the scene.
Agent Primitive
Use the agent definition from an existing agent primitive.
FBX
Generate an agent definition from an FBX file containing a character.
Character Rig
Path to the object subnetwork containing the character rig.
Traverse Outputs
When enabled, the **Character Rig** path is used to specify which nodes to import by traversing its outputs instead of its children.
Pattern
Pattern used to limit which nodes should be imported. Patterns using usual [opglob](https://www.sidefx.com/docs/houdini/commands/opglob.html "Expands a pattern into a list of operator names.") syntax along with [`@bundle` references](https://www.sidefx.com/docs/houdini/ref/panes/bundles.html) are accepted.
Note
Relative paths specified here are relative to this node, not to the **Character Rig**.
Type
Optional mask to further restrict which [object node types](https://www.sidefx.com/docs/houdini/nodes/obj/index.html "Object nodes represent objects in the scene, such as character parts, geometry objects, lights, cameras, and so on.") will be imported. Disable the toggles to prevent baking particular types.
SOP Path
Specifies a SOP network that contains an agent primitive.
FBX File
Filename of the FBX file to generate agents from.
Import Principled Shader Values
When enabled, create `material_override` attribute inside the shape geometry which imports the material values from the FBX that are suitable for use with Houdini’s [Principled Shader](https://www.sidefx.com/docs/houdini/nodes/vop/principledshader.html "An artist-friendly shader that can model a large number of materials realistically.") material.
Note
In order to get accurate texture paths, this causes the FBX file to be imported with “Extract Embedded Data” enabled, which will cause `.fbm` directories on disk to be created with the textures extracted within them.
Convert Units
Specifies whether to convert to Houdini units when importing the FBX file.
Minimal Nodes
Only import objects whose display flags are on. If you turn this off, _all_ nodes in the character rig are imported into the animation clip.
Keep Transforms for Deforming Shapes
When **Minimal Nodes** is enabled, specifies whether nodes containing deforming geometry are included in the agent’s rig and clips.
Convert to Polygon Soups
Combine polygon primitives into [polygon soup primitives](https://www.sidefx.com/docs/houdini/nodes/sop/polysoup.html "Combines polygons into a single primitive that can be more efficient for many polygons") when creating the shape library. This can reduce memory usage, particularly when rendering with Mantra.
Load as Polygon Soups
Create [polygon soup primitives](https://www.sidefx.com/docs/houdini/nodes/sop/polysoup.html "Combines polygons into a single primitive that can be more efficient for many polygons") instead of polygon primitives when loading geometry from the FBX file. This can reduce memory usage, particularly when rendering with Mantra.
Include Unused Capture Regions
When importing a skinned mesh, additional capture regions with identity transforms are added to the `boneCapture` attribute for the ancestor joints of any captured joints. It is recommended to only enable this option for compatibility with older scene files, as it can introduce issues with unpacking or merging the rest geometry of multiple skinned shapes.
Layer Name
The default layer for the agent, created using the display flags of the objects. Every agent must have at least one layer.
Bounds Scale
Specifies a scale for the bounding box of each shape in the default layer. See the [Agent Primitive help page](https://www.sidefx.com/docs/houdini/crowds/agents.html#boundingbox) for more information on how an agent’s bounding box is computed.
Generate Collision Layer
Generate a collision layer from geometry containing capture/deform weights. This generates capture region primitives and assigns them to the corresponding bones in the rig.
Collision Layer Name
When **Generate Collision Layer** is on, the name of the collision layer.
Clip Name
Name of the baked out clip (agent animation). The animation is taken from the current scene.
Clip Name
Specifies the names of the animation clip(s). A clip is created for each take in the FBX file. The `${FBX_TAKE_NAME}` and `${FBX_TAKE_INDEX}` local variables can be used to generate clip names based on the take name and index from the FBX file.
Override Sample Rate
Specifies whether to use the value of the **Sample Rate** parameter instead of the sample rate stored in the FBX file. This is useful if the application that exported the original FBX file did not set the sample rate correctly.
Sample Rate
Sample rate to use for the clip when **Override Sample Rate** is enabled.
Additional Channels
Adds channels from the specified CHOP node to the agent’s clip.
Shift Clip to Frame 1
Shift output clips from the specified frame range to start at frame 1.
Create Locomotion Joint
When enabled, this will create an extra joint named `__locomotion__` which serves as a placeholder for factored out locomotion animation when **Convert to In-Place Animation** is enabled.
Convert to In-Place Animation
Convert a moving character animation to an in-place clip, by subtracting the positions of the **Locomotion Node** (relative to the origin or where it was on the first frame depending on **Use Pivot from First Frame** parameter).
Locomotion Node
The object inside the **Character Rig** that controls the locomotion of the character (the node in the character rig that has translation channels that move it forward in space). When **Convert to In-Place Animation**, Houdini uses this to remove the translation from the character animation to keep the character in place. (The [crowd solver node](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html "Updates agents according to their steer forces and animation clips.") assumes that the agent animation is in-place since it will be attached to a moving particle.)
The locomotion animation is placed in a separate transform in the rig named `__locomotion__`. If this parameter is empty, then `__locomotion__` will use the **Character Rig**.
Locomotion Orient
If this parameter and **Locomotion Node** are specified, the generated `__locomotion__` transform will also contain rotational information using the vector from the **Locomotion Node** to the **Locomotion Orient** node. If this transform is the same as the **Locomotion Node**, its orientation will be directly extracted. This parameter has no effect if **Locomotion Node** is empty.
Project Positions on Dominant Axis
When creating the animation of the **Locomotion Node**, project the positions along the dominant axis of motion in the XZ plane. If the clip will be used as an in-place clip with the [crowd solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html "Updates agents according to their steer forces and animation clips."), enabling this option can help to maintain hip swaying in the motion.
Use Pivot from First Frame
When creating the animation of the **Locomotion Node**, calculate the positions to be relative to the origin. If this option is disabled (the default), then the positions will be relative to where it was on the first frame.
Agent Name
Name of the agent. The parameter is provided for convenience so that it can be referenced via the `$AGENT` local variable in other parameter values.
Cache Directory
Parent directory of agent definition files. This parameter is provided for convenience so that its value can be referenced via the `$CACHEDIR` local variable in the other filename parameters.
Rig
Filename for the agent rig. The [rig file](https://www.sidefx.com/docs/houdini/crowds/agents.html#rig) is a JSON file describing the transform hierarchy of the agent.
Agent Layers
Filename pattern for [agent layer files](https://www.sidefx.com/docs/houdini/crowds/agents.html#layer). The `${LAYER}` local variable can be used to the include the name of the layer in the filename.
Shape Library
Filename for the [agent shape library](https://www.sidefx.com/docs/houdini/crowds/agents.html#shapelib).
Clips
Filename pattern for [agent clip files](https://www.sidefx.com/docs/houdini/crowds/agents.html#clip). The `${CLIP}` local variable can be used to the include the name of the clip in the filename.
Transform Groups
Filename pattern for [agent transform group files](https://www.sidefx.com/docs/houdini/crowds/agents.html#xformgroups). The `${TRANSFORM_GROUP}` local variable can be used to include the name of the transform group in the filename.
Metadata
Filename pattern for the agent definition’s [metadata](https://www.sidefx.com/docs/houdini/crowds/agents.html#metadata), which is a JSON file containing additional custom data.
Create Intermediate Directories
Create intermediate parent directories for output files as needed. This currently only applies to generated scripts, images, and shadow maps.
Pre-Render Script
Execute this script before any baking.
Post-Render Script
Execute this script after all baking
## LOCALS
AGENT
The name of agent. The value either comes from the `agentname` string attribute on the input points when **Allow Attributes to Override** is enabled, or from the value of the **Agent Name** parameter.
CACHEDIR
A local variable provided for convenience so that the value of the **Cache Directory** parameter can be easily referenced.
LAYER
Contains the name of the current layer when evaluating the **Agent Layers** parameter.
CLIP
Contains the name of the current clip when evaluating the **Clips** parameter.
TRANSFORM_GROUP
Contains the name of the current transform group when evaluating the **Transform Groups** filename parameter.
FBX_TAKE_NAME
Contains the name of the current take in the FBX file when evaluating the **Clip Name** parameter and **Source** is **FBX**.
FBX_TAKE_INDEX
Contains the index of the current take in the FBX file when evaluating the **Clip Name** parameter and **Source** is **FBX**.
See also
!Agent#Agent Render
