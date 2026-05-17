---
type: concept
title: Attribute Wrangle
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "78d53cbb60ef"
---

运行一个VEX片段来修改属性值。
### Parameters
This is a very powerful, low-level node that lets experts who are familiar with VEX tweak attributes using code.
This node corresponds to the [Attribute VOP SOP](https://www.sidefx.com/docs/houdini/nodes/sop/attribvop.html "Runs a VOP network to modify geometry attributes."), but uses a textual VEX snippet instead of a VOP network.
Warning
This node requires that you understand the [vex language](https://www.sidefx.com/docs/houdini/vex/index.html "VEX is a high-performance expression language used in many places in Houdini, such as writing shaders."). It is very easy to write incorrect code using this node.
This node _runs the snippet on the detail or every point/primitive/vertex_ (depending on the **Class** parameter) in the input geometry. The snippet can edit the input geometry by changing attributes. It can access information from other geometry using attributes and VEX functions.
-   Press MMB on the node to see any error output from the snippet.
-   You can use the VEX function `ch` to evaluate parameters. The path is relative to this node (`ch("parm")` will evaluate the parameter `parm` on this node). This evaluation will be done at the current time.
-   Unlike the [Attrib Create SOP](https://www.sidefx.com/docs/houdini/nodes/sop/attribcreate.html "Adds or edits user defined attributes."), this does not use local variables. Further, all backtick expressions and `$F` variables will be evaluated at frame 1, not the current time. Use `@Frame`, `@Time`, or `@TimeInc` instead.
#### Syntax
The **VEX snippet** parameter lets you enter a snippet of [VEX code](https://www.sidefx.com/docs/houdini/vex/index.html "VEX is a high-performance expression language used in many places in Houdini, such as writing shaders.") to run on the input geometry. See [VEX snippets](https://www.sidefx.com/docs/houdini/vex/snippets.html) for basic information on the syntax available in the snippet parameter. See [the VEX chapter](https://www.sidefx.com/docs/houdini/vex/index.html "VEX is a high-performance expression language used in many places in Houdini, such as writing shaders.") for general information on the VEX language.
#### Code
Group
A subset of points in the input geometry to run the program on. Leave this blank to affect all points in the input.
Group Type
What the group is made of.
Run Over
Apply the VEX code to each component of this type (points, primitives/faces, or vertices. Or choose **Detail** to run the code only once. For each component, the code runs with attributes bound to variables starting with `@` (for example `@Cd`) for reading and writing.
If you choose `Numbers`, Houdini runs the code for certain number of iterations instead of over components. In this mode the code only has read-only detail-level attributes bound to `@` variables.
Number Count
When **Run Over** is **Numbers**, the number of iterations to run the code. In each iteration, `@numelem` is bound to this total count, and `@elemnum` is bound to the iteration number, from `0` to `@numelem - 1`.
In this mode the code only has read-only detail-level attributes bound to `@` variables.
Thread Job Size
When **Run Over** is **Numbers**, this is the number of iterations to run per separate thread. If this number is greater than or equal the **Number count**, all iterations will run serially in a single thread. If this is `1`, each iteration will run in a separate thread. In between, the node will group the iterations into batches of this size, and run each batch in parallel on separate threads.
VEXpression
A snippet of VEX code that will manipulate the point attributes. You can use `@variable_name` syntax to access geometry attributes.
Attributes to Create
Only create attributes if their names match this pattern. The default pattern allows any attribute to be created.
You can restrict the created attributes by replacing the `*` with a list of allowed names.
Bound attributes, such as `vtxnum`, cannot be created and will be ignored.
Enforce Prototypes
Requires that you declare `@` bindings in snippets as prototypes before using them. This applies to both attributes (for example `@Cd`) and “convenience” bindings such as `@ptnum` and `@Frame`. For example:
// Declare bindings int @ptnum; float @Frame; vector @Cd;  // Use bindings after declaration int pointnum = @ptnum; float red = @Cd[0] / @Frame; 
Automatic binding with the `@` syntax can be convenient, but as your scene becomes more complex there is the risk that a typo in an `@` binding will silently just bind a non-existent attribute.
#### Bindings
Autobind by Name
Automatically bind attributes to parameters by name. If for some reason you need CVEX parameters to have different names than the corresponding attributes, turn this off and use the **Number of bindings** parameter to set up mappings between **Attribute name** and **VEX parameter**.
Integer attributes will bind to integer parameters. Float attributes will bind to float, vector, point, matrix, or matrix4 depending on their tuple size. String attributes will bind to strings.
Autobind Groups by Name
Automatically bind any groups to the integer parameter prefixed with `group_`. If for some reason you need CVEX parameters to have different names than the corresponding groups, turn this off and use the **Group Bindings** parameter to set up mappings between **Group Name** and **VEX Parameter**.
Group Bindings
Manually specifies the bindings of each group.
Evaluation Node Path
VEX functions like `ch()` usually evaluate with respect to this node. Enter a node path here to override where the path search starts from. This is useful for embedding in a digital asset, where you want searches to start from the asset root.
Export Parameters
When a VEX parameter is exported, the bound attribute will be created if it doesn’t exist. This pattern can be used to override the export option on the VEX shader to avoid writing to or creating certain attributes. The pattern matches the VEX parameter, not the bound attribute. The attribute will still be bound for reading.
Update Normals If Displaced
If points are being run over, and the `P` attribute is written to, but the `N` attribute is not written to, any incoming normals will become out of date. When this option is set, vertex and point normals will be updated when this occurs.
Attribute To Match
Which attribute to use for matching. This attribute must be present on both inputs for matching to be done. Otherwise matching is done by element number (ie, point number when running over points). The attribute should either be an integer or string attribute. This controls how the `opinput#_` virtual bindings connect. You can use `v@opinput1_Cd`, for example, to read the second input’s `v@Cd` attribute.
Compute Results In Place
When compiled the Attribute VOP is able to work on the incoming geometry in place without making a copy of it. This can speed up processing as one less copy is made, but requires that the VEX code doesn’t bind for writing any attributes that are read from the first input.
Output Selection Group
The name of a group to use as the output selection. When the highlight flag is enabled for this node, this group will be the output selection used by later modeling tools (if it exists).
VEX Precision
VEX can evaluate at 32-bit or 64-bit precision. 64-bit provides higher accuracy, especially for transforms.
Note
Incoming attributes will preserve their original precision, so using 64-bit VEX on 32-bit positions will convert them to 64-bit, apply the operation, then convert back to 32-bit when writing out.
The auto mode will switch between 32-bit and 64-bit depending on the preferred precision of the incoming geometry. When run in 64-bit precision, any created attributes will be 64-bit. When run in 32-bit any created attributes will be 32-bit. Use [Attribute Cast](https://www.sidefx.com/docs/houdini/nodes/sop/attribcast.html "Changes the size/precision Houdini uses to store an attribute.") to change the preferred precision.
#### EXAMPLES
Load Launch
[AddPoint](https://www.sidefx.com/docs/houdini/examples/nodes/sop/attribwrangle/AddPoint.html) Example for [Attribute Wrangle](https://www.sidefx.com/docs/houdini/nodes/sop/attribwrangle.html) geometry node
This example shows you how to add a single new point using the Attribute Wrangle SOP and the addpoint() vex expression.
Load Launch
[CentroidPoints](https://www.sidefx.com/docs/houdini/examples/nodes/sop/attribwrangle/CentroidPoints.html) Example for [Attribute Wrangle](https://www.sidefx.com/docs/houdini/nodes/sop/attribwrangle.html) geometry node
This example shows you how the primintrinsic method can be used to obtain the number of vertices for a primitive. The point corresponding to a vertex can be obtained by first translating a primitive-vertex offset pair to a linear vertex value then looking up the point referenced by the linear vertex value.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribexpression.svg) Attribute Expression](https://www.sidefx.com/docs/houdini/nodes/sop/attribexpression.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribvop.svg) Attribute VOP](https://www.sidefx.com/docs/houdini/nodes/sop/attribvop.html)
-   [/nodes/sop/vexdeform](https://www.sidefx.com/docs/houdini/nodes/sop/vexdeform.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/volumewrangle.svg) Volume Wrangle](https://www.sidefx.com/docs/houdini/nodes/sop/volumewrangle.html)