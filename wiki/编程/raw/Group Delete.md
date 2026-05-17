---
type: concept
title: Group Delete
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "0c4b9ea1a40b"
---
根据列出来的列表来删除点组、面组或边组
### Parameters
This operator removes groups of points, primitives, edges, or vertices. It removes only the group, not the points or primitives themselves, however.

Patterns like `*` can be used to quickly clean up extra groups from geometry.

## INPUTS

Source geometry

The geometry from which to remove the groups.

## PARAMETERS

Number of Deletions

The number of deletion rules to apply.

Group Type

If set to any, all group types whose name match the pattern will be removed. Otherwise, it only removes those groups of the same type as this field.

Group Names

A space separated list of groups to remove. `*` can be used as a wild card to match many groups at once.

Delete Unused Groups

Remove any groups that are empty.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/groupcreate.svg) Group](https://www.sidefx.com/docs/houdini/nodes/sop/groupcreate.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/groupcombine.svg) Group Combine](https://www.sidefx.com/docs/houdini/nodes/sop/groupcombine.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/groupexpression.svg) Group Expression](https://www.sidefx.com/docs/houdini/nodes/sop/groupexpression.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/grouppromote.svg) Group Promote](https://www.sidefx.com/docs/houdini/nodes/sop/grouppromote.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/grouprename.svg) Group Rename](https://www.sidefx.com/docs/houdini/nodes/sop/grouprename.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/grouptransfer.svg) Group Transfer](https://www.sidefx.com/docs/houdini/nodes/sop/grouptransfer.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/groupcopy.svg) Group Copy](https://www.sidefx.com/docs/houdini/nodes/sop/groupcopy.html)