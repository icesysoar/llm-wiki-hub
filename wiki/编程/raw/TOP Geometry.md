---
type: concept
title: TOP Geometry
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "9c7f8fed5ce4"
---
将输入的几何图形发送到一个TOP子网，并检索输出的几何图形。
### Parameters
This network processes input geometry using TOP nodes and passes any output geometry on the next SOP node. If the TOP network produces multiple output work items, the geometry is merged into a single detail with groups named after the original work items.

Output geometry can be loaded either from files or from a geometry attribute on the work items in the network’s output node. Geometry attributes are created either by the [Invoke](https://www.sidefx.com/docs/houdini/nodes/top/invoke.html "Invokes a compiled block on input geometry") or the [Geometry Import](https://www.sidefx.com/docs/houdini/nodes/top/geometryimport.html) TOP node.

Unlike a regular TOP network, this node will block the UI when cooking as part of a chain of SOP nodes.

## PARAMETERS

## Cook Controls

Attributes

Point attribute names that will be loaded into work item attributes.

Dirty on Cook

When this toggle is enabled, the TOP network always be dirtied before it gets evaluated.

## Output

Output Type

The type of output to extract from work items in the TOP network’s output node. Output geometry can be loaded either from files on the work item or from a geometry attribute.

File

Outputs are loaded from the output geometry files on work items in the output node of the TOP network. The files are filtered using the **Output File Tag** parameter.

Geometry

Output geometry is loaded from a geometry attribute on the work items in the TOP Network output node. The name of the attribute is configured using the **Output Attribute** parameter.

None

This TOP Network will produce empty geometry. This is mostly useful when the TOP network occurs at the end of a SOP chain and geometry is loaded elsewhere (for example, in a File SOP or another TOP network).

Merge All Files

When this option is enabled, if an output work item has multiple files the geometry from all files is merged. Otherwise, when the option is disabled, only the first output file is used.

Output File Tag

The tag used to filter output files on work items.

Output Attribute

The name of the attribute that contains output geometry, if **Output Type** is set to **Geometry**.

Group Work Items Using

Determines what type of groups to create when geometry from work items in the TOP network is merged.

Piece Attribute Name

When **Group Work Item Using** is set to **Point Attribute** or **Primitive Attribute**, this parameter determines the name of the piece attribute created on the output geometry.

## Caching

Task Graph File

The path to the task graph checkpoint file.

Load From Disk

When this toggle is enabled, the task graph checkpoint file will be loaded from disk instead of recooking the TOP network. If there is no task graph file for the current frame, then the network will be recooked and a checkpoint file will be written to disk.

Force Recook

Forces a recook of the TOP network.

## Scheduler

Default TOP Scheduler

The default scheduler used by all nodes that don’t have a per-node override.This network processes input geometry using TOP nodes and passes any output geometry on the next SOP node. If the TOP network produces multiple output work items, the geometry is merged into a single detail with groups named after the original work items.

Output geometry can be loaded either from files or from a geometry attribute on the work items in the network’s output node. Geometry attributes are created either by the [Invoke](https://www.sidefx.com/docs/houdini/nodes/top/invoke.html "Invokes a compiled block on input geometry") or the [Geometry Import](https://www.sidefx.com/docs/houdini/nodes/top/geometryimport.html) TOP node.

Unlike a regular TOP network, this node will block the UI when cooking as part of a chain of SOP nodes.

## PARAMETERS

## Cook Controls

Attributes

Point attribute names that will be loaded into work item attributes.

Dirty on Cook

When this toggle is enabled, the TOP network always be dirtied before it gets evaluated.

## Output

Output Type

The type of output to extract from work items in the TOP network’s output node. Output geometry can be loaded either from files on the work item or from a geometry attribute.

File

Outputs are loaded from the output geometry files on work items in the output node of the TOP network. The files are filtered using the **Output File Tag** parameter.

Geometry

Output geometry is loaded from a geometry attribute on the work items in the TOP Network output node. The name of the attribute is configured using the **Output Attribute** parameter.

None

This TOP Network will produce empty geometry. This is mostly useful when the TOP network occurs at the end of a SOP chain and geometry is loaded elsewhere (for example, in a File SOP or another TOP network).

Merge All Files

When this option is enabled, if an output work item has multiple files the geometry from all files is merged. Otherwise, when the option is disabled, only the first output file is used.

Output File Tag

The tag used to filter output files on work items.

Output Attribute

The name of the attribute that contains output geometry, if **Output Type** is set to **Geometry**.

Group Work Items Using

Determines what type of groups to create when geometry from work items in the TOP network is merged.

Piece Attribute Name

When **Group Work Item Using** is set to **Point Attribute** or **Primitive Attribute**, this parameter determines the name of the piece attribute created on the output geometry.

## Caching

Task Graph File

The path to the task graph checkpoint file.

Load From Disk

When this toggle is enabled, the task graph checkpoint file will be loaded from disk instead of recooking the TOP network. If there is no task graph file for the current frame, then the network will be recooked and a checkpoint file will be written to disk.

Force Recook

Forces a recook of the TOP network.

## Scheduler

Default TOP Scheduler

The default scheduler used by all nodes that don’t have a per-node override.This network processes input geometry using TOP nodes and passes any output geometry on the next SOP node. If the TOP network produces multiple output work items, the geometry is merged into a single detail with groups named after the original work items.

Output geometry can be loaded either from files or from a geometry attribute on the work items in the network’s output node. Geometry attributes are created either by the [Invoke](https://www.sidefx.com/docs/houdini/nodes/top/invoke.html "Invokes a compiled block on input geometry") or the [Geometry Import](https://www.sidefx.com/docs/houdini/nodes/top/geometryimport.html) TOP node.

Unlike a regular TOP network, this node will block the UI when cooking as part of a chain of SOP nodes.

## PARAMETERS

## Cook Controls

Attributes

Point attribute names that will be loaded into work item attributes.

Dirty on Cook

When this toggle is enabled, the TOP network always be dirtied before it gets evaluated.

## Output

Output Type

The type of output to extract from work items in the TOP network’s output node. Output geometry can be loaded either from files on the work item or from a geometry attribute.

File

Outputs are loaded from the output geometry files on work items in the output node of the TOP network. The files are filtered using the **Output File Tag** parameter.

Geometry

Output geometry is loaded from a geometry attribute on the work items in the TOP Network output node. The name of the attribute is configured using the **Output Attribute** parameter.

None

This TOP Network will produce empty geometry. This is mostly useful when the TOP network occurs at the end of a SOP chain and geometry is loaded elsewhere (for example, in a File SOP or another TOP network).

Merge All Files

When this option is enabled, if an output work item has multiple files the geometry from all files is merged. Otherwise, when the option is disabled, only the first output file is used.

Output File Tag

The tag used to filter output files on work items.

Output Attribute

The name of the attribute that contains output geometry, if **Output Type** is set to **Geometry**.

Group Work Items Using

Determines what type of groups to create when geometry from work items in the TOP network is merged.

Piece Attribute Name

When **Group Work Item Using** is set to **Point Attribute** or **Primitive Attribute**, this parameter determines the name of the piece attribute created on the output geometry.

## Caching

Task Graph File

The path to the task graph checkpoint file.

Load From Disk

When this toggle is enabled, the task graph checkpoint file will be loaded from disk instead of recooking the TOP network. If there is no task graph file for the current frame, then the network will be recooked and a checkpoint file will be written to disk.

Force Recook

Forces a recook of the TOP network.

## Scheduler

Default TOP Scheduler

The default scheduler used by all nodes that don’t have a per-node override.This network processes input geometry using TOP nodes and passes any output geometry on the next SOP node. If the TOP network produces multiple output work items, the geometry is merged into a single detail with groups named after the original work items.

Output geometry can be loaded either from files or from a geometry attribute on the work items in the network’s output node. Geometry attributes are created either by the [Invoke](https://www.sidefx.com/docs/houdini/nodes/top/invoke.html "Invokes a compiled block on input geometry") or the [Geometry Import](https://www.sidefx.com/docs/houdini/nodes/top/geometryimport.html) TOP node.

Unlike a regular TOP network, this node will block the UI when cooking as part of a chain of SOP nodes.

## PARAMETERS

## Cook Controls

Attributes

Point attribute names that will be loaded into work item attributes.

Dirty on Cook

When this toggle is enabled, the TOP network always be dirtied before it gets evaluated.

## Output

Output Type

The type of output to extract from work items in the TOP network’s output node. Output geometry can be loaded either from files on the work item or from a geometry attribute.

File

Outputs are loaded from the output geometry files on work items in the output node of the TOP network. The files are filtered using the **Output File Tag** parameter.

Geometry

Output geometry is loaded from a geometry attribute on the work items in the TOP Network output node. The name of the attribute is configured using the **Output Attribute** parameter.

None

This TOP Network will produce empty geometry. This is mostly useful when the TOP network occurs at the end of a SOP chain and geometry is loaded elsewhere (for example, in a File SOP or another TOP network).

Merge All Files

When this option is enabled, if an output work item has multiple files the geometry from all files is merged. Otherwise, when the option is disabled, only the first output file is used.

Output File Tag

The tag used to filter output files on work items.

Output Attribute

The name of the attribute that contains output geometry, if **Output Type** is set to **Geometry**.

Group Work Items Using

Determines what type of groups to create when geometry from work items in the TOP network is merged.

Piece Attribute Name

When **Group Work Item Using** is set to **Point Attribute** or **Primitive Attribute**, this parameter determines the name of the piece attribute created on the output geometry.

## Caching

Task Graph File

The path to the task graph checkpoint file.

Load From Disk

When this toggle is enabled, the task graph checkpoint file will be loaded from disk instead of recooking the TOP network. If there is no task graph file for the current frame, then the network will be recooked and a checkpoint file will be written to disk.

Force Recook

Forces a recook of the TOP network.

## Scheduler

Default TOP Scheduler

The default scheduler used by all nodes that don’t have a per-node override.