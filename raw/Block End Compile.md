---
type: concept
title: Block End Compile
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "e0df2ae34bd0"
---
一个编译块的结束/输出。
### Parameters
The Block End Compile works in concert with the [Block Begin Compile](https://www.sidefx.com/docs/houdini/nodes/sop/compile_begin.html "The start of a compile block.") to separate part of a node network from the rest of the graph.

When this node cooks, rather than cooking its inputs traditionally,it only cooks the inputs of its corresponding Block End Begin nodes. After acquiring that data, the rest of the nodes are executed as a single operation. Certain optimizations are possible since this execution of the compiled block is done outside of normal node cooking. Most notable is that any gather-based for loop can be run in parallel.

The nodes do not gain any cached data so the intermediate results are not available (and may not exist in some cases) because the nodes in the block are not individually cooked,

Displaying the intermediate nodes will use the normal cook approach, allowing their equivalent content to be viewed. This also means all errors and warnings are reported on the final node.

Note

This node will rarely be explicitly placed. Instead, the **Compile Block** tab menu entry will generate a pair of block nodes in a single operation.

## PARAMETERS

Enable Compiling

Controls if the input nodes will be executed as a compiled block. Disabling through this toggle is a quick way to compare compiled and non-compiled behavior.

Unload Behavior

This node, as part of its own cache, may store the cached states of the nodes in the block. After execution this intermediate data may be unloaded, requiring additional re-cooking if results need to be re-used. Since compiled blocks are usually built for non-cached sections of the node graph, this defaults to always.

By unloading the inputs, it also increases the chance that successive nodes in a chain can re-use the same geometry, avoiding potentially expensive copy operations.

Primary Path

Compiled blocks may have multiple end nodes. This can make it unclear where to draw the convex hull or synchronize colors. The Primary Path points to the “main” end block, allowing for better visualization of the network.

Note

The actual used outputs depends on the invoker.

Force Compile

The topology of the subgraph connected to the node is cached. Dependencies are created to ensure this is rebuilt whenever the input nodes change, but if necessary this button will clear the cached network and force a recompile. This can also be useful for re-generating compile errors when this node is not displayed.

Delay Incompatible Node Errors Until Cooked

Normally it is a compile error if any potentially executed node can’t be compiled. This makes it fast to make sure networks will always work without surprises. However, sometimes you have an HDA where you know a certain path will never be taken, so you can use this option to make illegal nodes a runtime error rather than a compile error.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/compile_begin.svg) Block Begin Compile](https://www.sidefx.com/docs/houdini/nodes/sop/compile_begin.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/invoke.svg) Invoke Compiled Block](https://www.sidefx.com/docs/houdini/nodes/sop/invoke.html)
-   [Compiled blocks](https://www.sidefx.com/docs/houdini/model/compile.html)