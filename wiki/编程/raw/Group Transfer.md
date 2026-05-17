---
type: concept
title: Group Transfer
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "aaa1c41fd97a"
---
基于位置在两个几何体之间传递组
### Parameters
GroupTransfer is used to transfer primitive, point, and edge groups between two selections. Closest proximity is used to map primitives/points/edges in the destination to primitives/points/edges in the source. Those that map to primitives/points/edges in the selected source groups are included in their respective destination group. If the source group is ordered then the destination group will also be ordered. The order is determined by the order of the mapped primitive/point/edge. Those that map to the same primitive/point/edge are further ordered by their proximity.
New destination groups are created with the same names as their source group counterparts. The names can have an optional prefix. If a group in the destination selection shares the same name as the proposed name then a number of methods are available to resolve the conflict. The transfer process can be skipped for that particular group in conflict, the existing group can be overwritten, or a numerical suffix can be appended to the name of the new destination group. The suffix starts at 2 and increments by 1 until a unique name is found.
## PARAMETERS
Primitive Groups
Source primitive groups to transfer. Leaving this empty is equivalent to `*`.
Primitive Group Prefix
Destination primitive group name prefix.
Point Groups
Source point groups to transfer. Leaving this empty is equivalent to `*`.
Point Group Prefix
Destination point group name prefix.
Edge Groups
Source edge groups to transfer. Leaving this empty is equivalent to `*`.
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
Distance Threshold
Minimum distance requirement for destination point/primitive/edge to source.
Create Groups Even If Empty
When enabled, groups that will be empty will still be created. When disabled, these groups will not be created.
## EXAMPLES
Load Launch
[TransferProximity](https://www.sidefx.com/docs/houdini/examples/nodes/sop/grouptransfer/TransferProximity.html)Example for [Group Transfer](https://www.sidefx.com/docs/houdini/nodes/sop/grouptransfer.html) geometry node
This example demonstrates how to use the proximity of a group’s primitives to transfer the group to a new set of geometry using the Group Transfer SOP.
See also
!Group Copy#Group Copy Geometry
!Group#Group
!Attribute Transfer#Attribute Transfer Geometry