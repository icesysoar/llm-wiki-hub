---
type: concept
title: Group Copy
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "0e15dfca597d"
---
基于点/原数，在两块几何体之间复制组。
### Parameters
Group Copy copies primitive, point, and edge groups between two pieces of geometry based on their primitive, point, and edge indices.

New destination groups are created with the same names as their source group counterparts. The names can have an optional prefix. If a group in the destination selection shares the same name as the proposed name then a number of methods are available to resolve the conflict. The transfer process can be skipped for that particular group in conflict, the existing group can be overwritten, or a numerical suffix can be appended to the name of the new destination group. The suffix starts at 2 and increments by 1 until a unique name is found.

## PARAMETERS

Primitive Groups

Source primitive groups to copy. Leaving this empty is equivalent to `*`.

Primitive Group Prefix

Destination primitive group name prefix.

Point Groups

Source point groups to copy. Leaving this empty is equivalent to `*`.

Point Group Prefix

Destination point group name prefix.

Edge Groups

Source edge groups to copy. Leaving this empty is equivalent to `*`.

Edge Group Prefix

Destination edge group name prefix.

Group Name Conflict

Methods to resolve destination group name conflicts.

Skip Group

Conflicted source group not transferred.

Overwrite

Already existing group overwritten.

Add Suffix

Unique numerical suffix added.

Copy Empty Groups

Determines if empty groups should be created. If a group has no corresponding primitives, points, or edges, it will be empty. If this is not chosen, the group will be suppressed. This can be useful to limit the number of active groups when extracting a piece of an object. However, if one has a dynamic group one is using later in the network, and that dynamic group may occasionally be empty, it is important to have Copy Empty Groups turned on or the later SOPs will be broken.

## EXAMPLES

Load Launch

[GroupCopyBox](https://www.sidefx.com/docs/houdini/examples/nodes/sop/groupcopy/GroupCopyBox.html)Example for [Group Copy](https://www.sidefx.com/docs/houdini/nodes/sop/groupcopy.html) geometry node

This example demonstrates how to group geometry based on a group from another network.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/grouptransfer.svg) Group Transfer](https://www.sidefx.com/docs/houdini/nodes/sop/grouptransfer.html)
-   [/nodes/sop/group](https://www.sidefx.com/docs/houdini/nodes/sop/group.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribcopy.svg) Attribute Copy](https://www.sidefx.com/docs/houdini/nodes/sop/attribcopy.html)