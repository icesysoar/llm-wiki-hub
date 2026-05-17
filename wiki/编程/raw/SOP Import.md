---
type: concept
title: SOP Import
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "9eae5f00afdb"
---
将SOP中的2D卷作为平面导入复合网络中。
### Parameters
This node cooks a SOP network. Any volumes present will be copied into corresponding named image planes. Image planes with no corresponding volumes will grab the first source volume.
The source volume will be scaled into the destination resolution. A direct one-to-one copy is only performed if resolutions are equal. No filtering is done on downsampling, and only linear on upsampling, so for best results a one-to-one transfer should be done followed by a [Scale COP](https://www.sidefx.com/docs/houdini/nodes/cop2/scale.html "Changes the resolution of the image.").
Note
Composite networks cannot be re-entrant, the SOP pointed to cannot depend itself upon the output of COPs. Use a [Stash SOP](https://www.sidefx.com/docs/houdini/nodes/sop/stash.html "Caches the input geometry in the node on command, and then uses it as the node’s output.") where necessary to break dependencies.
## PARAMETERS
SOP Path
The SOP Node to cook. It should consist of a number of named, two-dimensional, volumes.
Import
Volume names to import. Wildcards are accepted, as well as a whitespace separated list of names. Only volumes whose names match the list will be imported. Volumes without names will only be imported if the mask is '*' or empty.
Set Resolution from SOPs
Turns on the **Override Resolution** and sets it to the current resolution of the first volume in the pointed to network. If no SOP or no volume is found, this does nothing.
Set Planes from SOPs
Turns off the built-in list of plane generations and builds a custom plane list to import each named primitive in the source SOP. If no SOP is found, does nothing.
Remap Range
When on, the layers imported will be scaled and shifted to fit inside this range.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/NETWORKS/cop2.svg) COP2 Network](https://www.sidefx.com/docs/houdini/nodes/sop/cop2net.html)