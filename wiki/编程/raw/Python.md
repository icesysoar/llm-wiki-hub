---
type: concept
title: Python
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "a1652225930e"
---
运行一个Python片段来修改传入的几何图形。
### Parameters
This node is designed to modify the input geometry. If you just want to run a script whenever the network cooks, see the [Script SOP](https://www.sidefx.com/docs/houdini/nodes/sop/script.html "Runs scripts when cooked.").

This node lets you modify geometry in a network using a quick ad-hoc script. To create a new, reusable geometry node type using python, see [creating a geometry SOP with Python](https://www.sidefx.com/docs/houdini/hom/pythonsop.html#node_type).

See [editing geometry using python](https://www.sidefx.com/docs/houdini/hom/pythonsop.html) for information on how to write the script.

## PARAMETERS

Python Code

Python code should modify the incoming geometry.

See also

-   [Define a geometry node (SOP) using Python](https://www.sidefx.com/docs/houdini/hom/pythonsop.html)
-   [/nodes/sop/pointwrangle](https://www.sidefx.com/docs/houdini/nodes/sop/pointwrangle.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/unix.svg) Unix](https://www.sidefx.com/docs/houdini/nodes/sop/unix.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/script.svg) Script](https://www.sidefx.com/docs/houdini/nodes/sop/script.html)