---
type: concept
title: Cache If
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "0029c82bf36f"
---
根据可配置的条件，选择是烹调输入还是重新使用缓存的输出。
### Parameters
The [Cache](https://www.sidefx.com/docs/houdini/nodes/sop/cache.html "Records and caches its input geometry for faster playback.") node can cache an input that’s slow to compute to memory, and from then on, output from the memory cache instead of re-cooking. However, that node requires you to manually decide when to recache the input because the cache is invalid.

The Cache If node is very useful when it’s possible to _automatically_ tell when the cache is invalid and should be regenerated, based on testing one or more conditions. For example, if the value of an upstream parameter that contains a file path changes, the cache should be regenerated.

This node lets you test different [types of conditions](https://www.sidefx.com/docs/houdini/nodes/sop/cacheif.html#conditions), for example:

-   If nodes are added, removed, or edited in the upstream network.
    
-   If the geometry from a node elsewhere in the network has changed.
    
-   If a parameter, or any parameters, on an upstream node have changed.
    
-   If an arbitrary expression returns True, or if the result of an expression changes. This can be a simple HScript expression or a Python expression with full scripting power. For example, you could write a Python expression that queries the Web API of your asset management system to check if an asset’s version number has changed.
    

Tip

This node is a _memory (RAM) cache_. To cache to disk, use a [File Cache node](https://www.sidefx.com/docs/houdini/nodes/sop/filecache.html "Caches (writes out once and then reads from) geometry (possibly animated) to disk.").

Unlike the File Cache node, where you can switch between cooking the input and reading the cached files, once this node cooks its input once, it _always_ outputs its memory cache. It is then up to the conditions you set up (or you manually clicking the **Recache** button) to cause the node to regenerate the cache when necessary.

## How to

1.  After a part of the geometry network that is slow to compute, add/insert a Cache If node.
    
2.  Click **Recache** to cook and cache the node’s input.
    
3.  Set the parameters to [test the conditions](https://www.sidefx.com/docs/houdini/nodes/sop/cacheif.html#conditions) for whether the cache needs to be regenerated.
    

## Conditions

For more information about the parameters mentioned here, see the full parameter help below.

Note

The first input is for the incoming geometry to cache. The multi-input lets you wire in nodes, so that if the output of any of those nodes changes, this node will re-cook and re-cache the first input.

### Nodes added, removed, or edited in the upstream network

-   Turn on **Check for upstream network changes**.
    

### The output of another node in the network changes

This node can check whether the output of another node has changed without doing a full cook of that node’s output geometry. It uses the same “data ID” metadata that Houdini uses to efficiently decide whether a node should recook its inputs. (For example, when any part of Houdini adds, deletes, or changes an attribute value, it changes the attribute’s “data ID”, so other parts of the code can tell that the attribute has changed.)

1.  Wire the node you want to check into this node’s multi-input.
    
2.  In this node’s parameters, click the **Test Inputs** tab.
    
3.  Create an instance of the multiparm corresponding to the input you wired in.
    
    For example, if you have connected one wire into the multi-input, you should create one instance of the Test Inputs multi-parm (“Test Input 1”) to control how to test the input. If you connect two wires into the multi-input, you should create two instances of the multiparm, with “Test Input 1” controlling the first wire, and “Test Input 2” controlling the second wire (counting from left to right).
    
4.  Use the checkboxes to tell the node what to look for in the other node’s output.
    
    Each instance can only check a single node, but you can check multiple parameters on the node.
    

You can check any combination of the following:

-   Whether the content/size/existence of a certain point, vertex, primitive, or detail attribute has changed.
    
    Open the **Attribute Data IDs** sub-section. Turn on the checkbox next to the level of attribute you want to check (point, vertex, primitive, or detail). Enter a space-separated list of attribute names to check.
    
-   Whether the content/size/existence of a certain point, vertex, primitive or edge group has changed.
    
    Open the **Group Data IDs** sub-section. Turn on the checkbox next to the level of group you want to check (point, vertex, primitive, or detail). Enter a space-separated list of group names to check.
    
-   Whether the prim count or topology of the geometry has changed.
    
    Open the **Geometry metadata** sub-section. Turn on the checkbox next to one or more of the test methods. **Check primitives ID** and **Check topology** are the most reliable methods. See the parameter documentation for the [geometry metadata](https://www.sidefx.com/docs/houdini/nodes/sop/cacheif.html#input_folder_metadata) below for more information.
    

You can use the drop-down menu button to the right of attribute/group text fields to choose from a list of known attribute/group names.

Tip

You can use the **Check test input** checkbox at the top of each instance to enable or disable that check temporarily.

### A parameter on an upstream parameter changes

1.  In this node’s parameters, click the **Parameters** tab.
    
2.  Create a new instance of the multiparm for each node you you want to check. Set the **Number of Patterns** or use the plus and minus buttons to set the number of instances of the multiparm.
    
3.  Edit the instance options to tell this node which parameters it should check.
    
    -   Set **Node Path** to the path of an upstream node. The Cache If will check for parameter changes on this node. You can click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/chooser_node.svg) chooser button to the right of the text field to choose the node interactive from a tree.
        
    -   Set **Parameter names** to a space-separated list of parameter internal names or patterns. The default is `*`, meaning check if the value of _any_ parameter on the node has changed. Adding/removing spare parameters does not usually trigger a re-cache (unless the user removes a spare parameter this node is watching).
        

Tip

You can use the checkbox next to each instance to enable or disable that check temporarily.

### The components matched by a “Group” parameter change

**Group** fields are common in SOPs, usually named `group`. They let the user specify named groups or individual components the node should apply to.

As a special kind of [parameter check](https://www.sidefx.com/docs/houdini/nodes/sop/cacheif.html#parameter_change), you can check group fields to see if the group membership changed, even if the actual contents of the parameter didn’t change.

Note

You can only check for group match changes in nodes connected into this node’s multi-input.

1.  On the **Parameters** tab, set up a node/parameter check using the instructions under [checking if a parameter changes](https://www.sidefx.com/docs/houdini/nodes/sop/cacheif.html#parameter_change) above.
    
2.  Set **Group Names** to a space-separated list of the internal parameter names of the group fields you want to check. Any parameter names you list here must be included in the parameters named/matched in the **Parameter Names** field above.
    
3.  Set **Group Type** to the The level (vertex, points, primitives, edges) at which to look for the groups specified in **Group Names**.
    
4.  Set **On Test Input** to the number of the wire connected to this node’s multi-input (counting from left to right) that comes from the node you want to check.
    
5.  If group membership may change over time without user interverntion (for example, a computed group of all points within a bounding box, where the membership changes as points animate), set **Check groups** to **On Every Cook**.
    

### The result of an expression

1.  In this node’s parameters, click the **Expressions** tab.
    
2.  Create a new instance of the multiparm for each check you want to do. Set the **Number of Expressions** or use the plus and minus buttons to set the number of instances of the multiparm.
    
3.  Edit the instance parameters to set up each test expression.
    
    -   If the node should regenerate the cache when the expression returns a **non-zero value**, set **Cache When** to **Expression is True**. If the node should regenerate the cache when the value the expression returns **changes**, set **Cache When** to **Expression Changes**.
        
    -   If you set **Cache When** to **Expression Changes**, set **Expression Type** to the type of value returned by the expression (**Number** or **String**).
        
    -   Enter an expression in the **Expression** field.
        
        To edit the expression in a multi-line editor, right-click the parameter and choose **Expression ▸ Edit Expression**.
        
        To set the expression language in this parameter to Python, right-click the parameter and choose **Expression ▸ Change Language to Python**.
        

### An upstream Cache If node has regenerated

-   See the docs for the [cache count](https://www.sidefx.com/docs/houdini/nodes/sop/cacheif.html#ccount) section below.
    

## Tips and notes

-   This node ignores whether the first input is time-dependent. You can use this to remove time dependency from a section of a network by placing this node at the top and turning on the **Check for Upstream Network Changes** checkbox.
    
-   Re-caching on parameter change is very useful inside a digital asset, where you can cache the internal network and re-cache when the user changes a significant parameter on the parent asset.
    

## INPUTS

Geometry to Cache

Connect the part of the network you want to cache into this input.

Test Inputs

The multi-input can accept inputs from upstream nodes, or elsewhere in the network, and cause the node to regenerate the cache when the output of any of those nodes changes. See [conditions](https://www.sidefx.com/docs/houdini/nodes/sop/cacheif.html#conditions) above.

## PARAMETERS

Check for Upstream Network Changes

Re-cache any time a node is added, removed, or edited in the upstream network.

Re-Cache

Click to force this node to recook and re-cache the input geometry.

## Cache Count

These parameters let you use a detail (global) attribute which records the number of times this node has re-cached. These options let you wire up a series of Cache If nodes through the Test multi-input so that, if one Cache If re-caches (changing the detail attribute value), the downstream Cache If nodes will also re-cache (when they see the detail attribute value has changed).

Output Attribute

When this node re-caches, incremement the value of the detail attribute in **Attribute name** below. (If you specify a name below but turn this off, the attribute will not be in the output, even if it existed in the input.)

Check Attribute

This node should re-cache if the detail attribute in **Attribute name** exists in the input and its value changes.

Attribute Name

Set/get the re-cache count in a detail attribute by this name. (If this string is not empty, but **Output attribute** is off, the detail attribute will be _deleted_ from the input if it exists. Set this to empty string to avoid this.)

## Test Inputs

These parameters manage what metadata is checked on each of this SOP’s test inputs. If any of the metadata which you specify changes, the node will re-cache.

The metadata which can be checked on a test input includes the data IDs of any attribute or group on the geometry, the detail and topology IDs of the geometry, and the change count of the input geometry.

Check Test Input

Enable or disable this multi-parm instance.

### Attribute Data IDs

Point Attributes

Re-cache if the any of the named point attributes in the input change.

Vertex Attributes

Re-cache if the any of the named vertex attributes in the input change.

Primitive Attributes

Re-cache if the any of the named primitive attributes in the input change.

Detail Attributes

Re-cache if the any of the named detail attributes in the input change.

### Group Data IDs

These parameter can be used to specify groups on the test geometry. A re-cache will be triggered whenever the data IDs of these attributes change.

Point Groups

Re-cache if the content of any of the named point groups in the input change.

Vertex Groups

Re-cache if the content of any of the named vertex groups in the input change.

Primitive Groups

Re-cache if the content of any of the named primitive groups in the input change.

Edge Groups

Re-cache if the content of any of the named edge groups in the input change.

### Geometry Metadata

Check Detail ID

Re-cache if the incoming geometry’s “Detail ID” changes. This means the “origin” of the geometry (the creating node in the network that started that geometry stream) changed, for example when a Switch node switches between two different branches. You can use this with **Check change count** (below), if you want to catch _any_ change to the input.

Check Primitives ID

Re-cache if metadata changes on any primitives (this includes metaball weights, tube tapers, volume and packed primitive transforms, volume voxel data changes, packed primitive data changes, and NURBS basis changes).

Check Topology

Re-cache if the topology (number, point count, and/or connectivity of primitives) of the input geometry changes.

Check Change Count

Re-cache if the incoming geometry’s “change count” metadata changes (Houdini generally updates the change count anytime the geometry is modified). Some nodes tend to create new geometry objects instead of “changing” the existing one, so it’s useful to turn both this and **Check detail ID** on if you want to catch _any_ change to the input.

## Parameters

Number of Patterns

A multiparm for each check you want to do (each instance can check multiple nodes at once using a pattern). Set this number or use the plus and minus buttons to set the number of instances of the multiparm.

Node Path

Space-separated list of node paths or patterns. The Cache If will check for parameter changes on these nodes. You can click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/chooser_node.svg) chooser button to the right of the text field to choose the nodes interactive from a tree.

Parameter Names

Space-separated list of parameter internal names or patterns. The default is `*`, meaning check if the value of _any_ parameter on the node(s) has changed. Adding/removing spare parameters does _not_ trigger a re-cache. (To match parameters in multiparm instances, specify both the multiparm folder name and the contained parameter name).

Expand Multiparms

When a name in the **Parameter filter** matches a multiparm folder, automatically check all the multiparm instance parameters inside.

Group Names

A space-separated list of “group” parameters to check for group membership changes. (These types of parameters are common in SOPs, usually named `group`. The let the user specify named groups or individual components the node should apply to.) If the content of the group changes, this node will re-cache the geometry.

Check Groups

When to check if group membership has changed. When this is **On upstream change** (the default), the node only checks for group changes when the upstream geometry is manually edited. When this is **On every cook**, the node checks for group changes every time it cooks (that is, every time the geometry needs to be displayed or rendered). Set this to **On every cook** if group membership may change over time without user interverntion (for example, a computed group of all points within a bounding box, where the membership changes as points animate).

Group Type

The level (vertex, points, primitives, edges) at which to look for the groups specified in **Group Names**.

On Test Input

The number of the wire connected to this node’s multi-input (counting from left to right) in which to look for the groups specified in **Group Names**.

## Expressions

Number of Expressions

Set this number or use the plus or minus buttons to set the number of expression checks.

Cache When

If the node should regenerate the cache when the expression returns a **non-zero value**, set this to **Expression is True**. If the node should regenerate the cache when the value the expression returns **changes**, set this to **Expression Changes**.

Expression Type

When **Cache When** is **Expression Changes**, set this to the type of value returned by the expression (**Number** or **String**).

Expression

The expression to test. To edit the expression in a multi-line editor, right-click the parameter and choose **Expression ▸ Edit Expression**. To set the expression language in this parameter to Python, right-click the parameter and choose **Expression ▸ Change Language to Python**.

See also

-   [sop/cache](https://www.sidefx.com/docs/houdini/nodes/sop/sop/cache.html)
-   [sop/filecache](https://www.sidefx.com/docs/houdini/nodes/sop/sop/filecache.html)