---
type: concept
title: Pose Space Edit
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "69bdd9cfc1eb"
---
为姿势空间变形的几何编辑打包。
### Parameters
## Overview

This SOP is used to edit geometry to create a pose-shape. A pose-shape is the combination of a geometry, a set of driver values given by the [Extract Pose Drivers SOP](https://www.sidefx.com/docs/houdini/nodes/chop/extractposedrivers.html "Creates channels from the specified derived transforms, node parameters and CHOP channels for pose-space deformation.") that are unique to the pose-shape, a set of transforms given by the [Extract Bone Transforms SOP](https://www.sidefx.com/docs/houdini/nodes/chop/extractbonetransforms.html "Extracts the current world or local space bone transforms from a geometry object."), and a pose stored in a [Channel CHOP](https://www.sidefx.com/docs/houdini/nodes/chop/channel.html "Creates channels from the value of its parameters."). Chaining together Pose-Space Edit SOPs (first input to first output) produces a packed set of pose-shapes for the [Pose-Space Deform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/posespacedeform.html "Interpolates between a set of pose-shapes based on the value of a set of drivers."). The driver values associated with each pose-shape determine how the [Pose-Space Deform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/posespacedeform.html "Interpolates between a set of pose-shapes based on the value of a set of drivers.") interpolates between their geometries.

The Pose-Specific Edit SOP requires a path to a [Stash Pose CHOP](https://www.sidefx.com/docs/houdini/nodes/chop/stashpose.html "Stashes the bone transforms and pose-drivers for use by the Pose-Space Deform SOP and Pose-Space Edit SOP nodes.") that holds the drivers and transforms of the desired pose stashed. Enter the Pose-Space Edit SOP subnet to edit or replace the geometry. The geometry can be masked by specifying a **mask** point attribute to remove unwanted modifications. The effect of the mask can be controlled with the **Mask Scale** parameter.

The first output gives a pack of the geometry differences between the plain geometry and that provided within the SOP merged with the first input. The second output is the combination of the plain geometry and the geometry differences for viewing and debugging purposes.

## PARAMETERS

Stash Pose Path

Path to a [Stash Pose SOP](https://www.sidefx.com/docs/houdini/nodes/chop/stashpose.html "Stashes the bone transforms and pose-drivers for use by the Pose-Space Deform SOP and Pose-Space Edit SOP nodes.") holding the drivers and transforms of the given pose.

Mask Scale

Scales the effect of the mask, bypassed by default. When the value is less than 1 the effect of the mask is reduced making the edited geometry behind the mask more prominent.

Display Guide Geometry

Cooking the guide geometry increases the time required to move between Pose-Space Edit SOPs in the node network. Toggle on to cook the guide geometry for this node.

See also

-   [Stash Pose](https://www.sidefx.com/docs/houdini/nodes/chop/stashpose.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/posespacedeform.svg) Pose-Space Deform](https://www.sidefx.com/docs/houdini/nodes/sop/posespacedeform.html)