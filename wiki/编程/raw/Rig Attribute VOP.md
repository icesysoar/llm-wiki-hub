---
type: concept
title: Rig Attribute VOP
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "c14617478956"
---
围绕中心轴旋转一条曲线，扫出一个表面。
### Parameters
This node behaves in the same way as the ![](https://www.sidefx.com/docs/houdini/icons/SOP/attribvop.svg) [Attribute VOP](https://www.sidefx.com/docs/houdini/nodes/sop/attribvop.html "Runs a VOP network to modify geometry attributes."), except it has a **Rig** tab in its parameters. The **Rig** tab exposes a custom viewport state and parameters to automatically recompute the point transforms for the node’s inputs and output.
You can use this node to build a VOP network for your KineFX rig. To access the KineFX VOP nodes, double LMB-click this node and build your VOP network inside. Alternatively, you can specify a SHOP node containing the VOP network or specify a `.vfl` file containing the CVEX program.
Note
KineFX VOP networks run in the CVEX context, _not_ the SOP context. This means that SOP-specific VOPs and VEX operations are not available inside this node. Please use the From File variants and the provided operator input strings instead.
This node also modifies geometry attributes. To specify inputs, create ![](https://www.sidefx.com/docs/houdini/icons/VOP/parameter.svg) [Parameter VOPs](https://www.sidefx.com/docs/houdini/nodes/vop/parameter.html "Represents a user-controllable parameter.") with the names of attributes and then in those nodes' parameters turn on _exporting_ (**Export** parameter set to **Always** or **When Input is Connected**) to allow the writing to or creation of the corresponding attributes.
## PARAMETERS
Group
Only run the VOP network on this group in the input geometry. Leave this parameter field blank to modify all the input geometry.
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
## Vex Setup
VEX Source
Determines where to get the program to modify the attributes from.
Myself
Use a VOP network from inside this node.
SHOP
Use a SHOP node containing a CVEX VOP network. You can specify the node in the **SHOP Path** parameter field.
This can also point to any node that contains a CVEX VOP Network.
Note
Referenced nodes' parameters can be used.
Script
Use a file containing a CVEX program. You can specify the file path in the **Script** parameter field.
SHOP Path
Specifies the SHOP node that contains a CVEX VOP network.
This parameter is only available when **VEX Source** is set to **SHOP**.
Script
Specifies a path to a file containing a CVEX script.
This parameter is only available when **VEX Source** is set to **Script**.
Re-load VEX Functions
Reloads any `.vex` files to account for changes made outside of Houdini.
This parameter is only available when **VEX Source** is set to **Script**.
Compiler
Specifies the command line Houdini uses to compile the VOP network inside this node.
This parameter is only available when **VEX Source** is set to **Myself**.
Force Compile
Recompiles the VOP network inside this node.
This parameter is only available when **VEX Source** is set to **Myself**.
Evaluation Node Path
VEX functions like `ch()` usually evaluate with respect to this node. This parameter lets you specify a node path to override where the path search starts from. This is useful for embedding in a digital asset, where you want searches to start from the asset root.
Export Parameters
When a VEX parameter is exported, the bound attribute will be created if one doesn’t exist. This parameter lets you specify a pattern that can be used to override the export option on the VEX shader to avoid writing to or creating certain attributes. When the pattern matches the VEX parameter, _not_ the bound attribute, the attribute will still be bound for reading.
Enable Multithreading
When on, in the unlikely event that there is a threading issues with VEX, this parameter will allow you to determine which node is guilty and work around it without having to turn off threading on a global scale.
## Attribute Bindings
VEX Precision
Evaluates VEX at 32-bit or 64-bit precision. 64-bit provides higher accuracy, especially for transforms.
Use the ![](https://www.sidefx.com/docs/houdini/icons/SOP/attribcast.svg) [Attribute Cast SOP](https://www.sidefx.com/docs/houdini/nodes/sop/attribcast.html "Changes the size/precision Houdini uses to store an attribute.") to change the preferred precision.
Note
Incoming attributes will preserve their original precision, so using 64-bit VEX on 32-bit positions will convert them to 64-bit, apply the operation, then convert back to 32-bit when writing out.
Auto
Switches between 32-bit and 64-bit depending on the preferred precision of the incoming geometry.
32 Bit
Any created attributes will be 32-bit.
64 Bit (Experimental)
Any created attributes will be 64-bit.
Autobind by Name
When on, automatically binds attributes to parameters by name. If for some reason you need CVEX parameters to have different names than their corresponding attributes, turn off this parameter and use the **Number of Bindings** multiparm instead.
Number of Bindings
Multiparm that lets you set up mappings between **Attribute Name** and **VEX Parameter**. Integer attributes will bind to integer parameters. Float attributes will bind to float, vector, point, matrix, or matrix4 parameters depending on their tuple size. String attributes will bind to string parameters.
Attribute Name
Name of the attribute to bind to the specified **VEX Parameter**.
VEX Parameter
Name of the parameter to bind to the specified **Attribute Name**.
Autobind Groups by Name
When on, automatically binds any groups to the integer parameter prefixed with `group_`.
Group Bindings
Multiparm that lets you manually specify the bindings of each group by setting up the mappings between groups and parameters.
Group Name
Name of the group to bind to the specified **VEX Parameter**.
VEX Parameter
Name of the parameter to bind to the specified **Group Name**.
Update Normals If Displaced
If points are being run over and the `P` attribute is written to, but the `N` attribute is not written to, then any incoming normals will become out-of-date. When this parameter is on, vertex and point normals will be updated when this occurs.
Attribute to Match
The `@opinputinputnum_name` syntax lets you get the value of an attribute from the corresponding element on another input. If this parameter field is empty, then the corresponding element is the element with the same index (for example, point number) as the element the node is currently processing. If you specify the name of an attribute in this parameter field, then the corresponding element is the element that has the same value in the named attribute as the current element.
For example, if you use `id` as the **Attribute to Match**, and you process a point with attribute `id` set to `12`, then `@opinput1_P` would give you the `P` attribute on the point in the second input that also has `id` set to `12`.
See [accessing attributes from other inputs](https://www.sidefx.com/docs/houdini/vex/snippets.html#other_inputs) on the VEX snippets page for more information.
Compute Results In Place
When on, the Rig Attribute VOP node is able to work on the incoming geometry in place without making a copy of it. This can speed up processing as one less copy is made, but requires that the VEX code doesn’t bind for writing any attributes that are read from the first input.
Output Selection Group
Specifies the name of a group to use as the output selection. When the highlight flag is enabled for the Rig Attribute VOP node, this group will be the output selection used by downstream modeling tools (if they exists).
## Rig
Viewport State
Specifies a string pointing to a valid viewport state name.
Compute Transforms for Output
When on, computes the transforms for the output. Gives you the same behavior as adding a [Compute Transform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--computetransform.html "Recomputes world space or local space transforms for points in a hierarchy.") after the output.
Compute Transforms for Input 1
When on, computes the transforms for Input 1. Gives you the same behavior as adding a [Compute Transform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--computetransform.html "Recomputes world space or local space transforms for points in a hierarchy.") before the input.
Compute Transforms for Input 2
When on, computes the transforms for Input 2. Gives you the same behavior as adding a [Compute Transform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--computetransform.html "Recomputes world space or local space transforms for points in a hierarchy.") before the input.
Compute Transforms for Input 3
When on, computes the transforms for Input 3. Gives you the same behavior as adding a [Compute Transform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--computetransform.html "Recomputes world space or local space transforms for points in a hierarchy.") before the input.
Compute Transforms for Input 4
When on, computes the transforms for Input 4. Gives you the same behavior as adding a [Compute Transform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--computetransform.html "Recomputes world space or local space transforms for points in a hierarchy.") before the input.
## EXAMPLES
Load Launch
[CameraOnPath](https://www.sidefx.com/docs/houdini/examples/nodes/sop/kinefx--rigattribvop/CameraOnPath.html)Example for [Rig Attribute VOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--rigattribvop.html) geometry node
This example demonstrates how to use the KineFX Transform from Path, Blend Transforms, and Offset Transform VOPs in SOP to constrain a camera on a path.
Load Launch
[CurveSolverVop](https://www.sidefx.com/docs/houdini/examples/nodes/sop/kinefx--rigattribvop/CurveSolverVop.html)Example for [Rig Attribute VOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--rigattribvop.html) geometry node
This example demonstrates how to use the KineFX CurveSolver VOP in SOP. It does the same as the Follow Curve mode on the InverseKIN CHOP.
Load Launch
[IkSolverVop](https://www.sidefx.com/docs/houdini/examples/nodes/sop/kinefx--rigattribvop/IkSolverVop.html)Example for [Rig Attribute VOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--rigattribvop.html) geometry node
This example demonstrates how to use the KineFX IkSolver VOP in SOP. It does the same as the Inverse Kinematics with Twist Affector mode on the InverseKIN CHOP.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribvop.svg) Attribute VOP](https://www.sidefx.com/docs/houdini/nodes/sop/attribvop.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/attribwrangle.svg) Attribute Wrangle](https://www.sidefx.com/docs/houdini/nodes/sop/attribwrangle.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-computetransform.svg) Compute Transform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--computetransform.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-rigattribwrangle.svg) Rig Attribute Wrangle](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--rigattribwrangle.html)