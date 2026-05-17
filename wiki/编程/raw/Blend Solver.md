---
type: concept
title: Blend Solver
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "8171fc2848a8"
---
设置和配置 Bullet Dynamics 解算器。
### Parameters
The Bullet Solver DOP sets objects to use the Bullet Dynamics solver.
This solver can use simplified representation of the objects, such as boxes or spheres, or a composite of these simple shapes to make-up a more complex shape. This solver can use arbitrary convex shapes based on the geometry points of the object, and can also collide objects against affectors that are cloth, solid, or wire objects.
Note
For mutual interaction between wire and bullet objects, the [Wire Solver’s](https://www.sidefx.com/docs/houdini/nodes/dop/wiresolver.html "Sets and configures a Wire solver.") **Collision Handling** parameter should be set to **SDF**.
Note
Collision of concave shapes is known to have some problems, and is not fully supported.
Warning
The Bullet Solver does not support scaling at the object level.

Time Scale
Scales the timestep used by the solver. This parameter can be animated. This can be used to create bullet-time like effects where the physics of the Bullet solver run at a different rate than the Houdini playbar. A value of 2 will cause objects to fall twice as fast, and 0.1 will slow them to a tenth the speed.
Number of Substeps
The number of substeps for each simulation step, used by Bullet internally. Increasing this number will increase the resolution of the simulation.
Increasing the number of substeps is one way to help fix problems of collisions not being detected for quickly moving objects.
Sleeping Time
When an object’s speed has been below its linear and angular speed thresholds for this amount of time, the object is eligible to be deactivated and put to sleep. This can improve performance for simulations where there are some stationary objects.
Note
An object can only be put to sleep once any nearby objects and objects it is constrained to are also eligible to be put to sleep.
Contact Breaking Threshold
Distance threshold used by the Bullet engine when determining whether a cached contact point should be discarded. Adjusting this value according to the scene scale may also improve performance, as it influences the margin added to objects' bounding boxes.
Use Implicit Drag
Applies a more accurate damping for the drag described by the `targetv` and `airresist` [point attributes](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html#forceattributes), instead of applying it as an explicit force. This also affects how the `targetw` and `spinresist` attributes are applied for angular drag.
Enable Aging
For [packed objects](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html "Creates a single DOP object from SOP Geometry that represents a number of RBD Objects."), the `age` point attribute will be updated for each time step and the objects flagged for deletion if they exceed their `life` attribute. For [constraint networks](https://www.sidefx.com/docs/houdini/nodes/dop/constraintnetwork.html "Constrains pairs of RBD objects together according to a polygon network."), the `age` primitive attribute will be updated for each time step.
## Constraint Solver
Constraint Solver
Specifies which constraint solver Bullet will use to resolve collisions and constraints. Both solvers parallelize the workload, but differ in the strategy they use to do so. **Parallel Gauss-Seidel (Islands)** will be faster in cases that involve many small “islands” of interacting objects (for example, a large number of small separate book stacks), whereas **Parallel Gauss-Seidel (Graph Coloring)** should perform better when such “islands” are few and large (such as a huge collapsing building).
Although results obtained with these solvers will generally not be identical, qualitative differences should be minor.
Constraint Iterations
The more iterations you use, the more accurate the constraint and collision handling will be.
Solve Tolerance
Allows the constraint solver to terminate before performing the full number of **Constraint Iterations** if it is close enough to the solution. Larger values can increase performance at the cost of accuracy.
Randomize Constraint Order
Specifies that the constraints should be randomly reordered before each of the **Constraint Iterations**. This may improve stability, but incurs a minor performance hit.
Ensure Islands are Independent
Specifies that the solver should ensure that changes to an island of interacting objects (including adding, removing, or repositioning objects) do not cause other islands to produce different simulation results, unless those changes cause the objects to interact. Otherwise, the solver only guarantees that resimulating with the exact same input to the solver will produce the same results. Enabling this option may incur a minor performance hit, and may change the simulation results slightly.
Contact CFM
Increasing the CFM (constraint force mixing) parameter will make contact constraints softer, and may increase the stability of the simulation. Contact constraints may be violated by an amount proportional to this parameter times the force that is needed to enforce the constraint.
Contact ERP
Specifies what proportion of the constraint error for contact constraints will be fixed during the next simulation step. If ERP (error reduction parameter) is set to 0, constrained objects will drift apart as the simulation proceeds. If ERP is set to 1, the solver will attempt to fix all constraint error during the next simulation step (however, this may result in instability in some situations). A value between 0.1 and 0.8 is recommended for most simulations.
Split Impulse
Tries to make interpenetrating objects split without adding velocity (to keep objects from explosively flying apart).
Errors when solving positional and velocity constraints can introduce some extra energy to the system. Although this option removes most of the extra energy, it degenerates quality a little bit, in particular for stable stacking.
Penetration Threshold
**Split Impulse** only applies when objects interpenetrate by more than this distance. This number should be negative (representing less than 0 distance between the objects).
Split Impulse ERP
Overrides the **Error Reduction Parameter** for contact constraints where the penetration distance is within the **Penetration Threshold** and **Split Impulse** is enabled.
Parameter Operations
Each data option parameter has an associated menu which specifies how that parameter operates.
Use Default
Use the value from the Default Operation menu.
Set Initial
Set the value of this parameter only when this data is created. On all subsequent timesteps, the value of this parameter is not altered. This is useful for setting up initial conditions like position and velocity.
Set Always
Always set the value of this parameter. This is useful when specific keyframed values are required over time. This could be used to keyframe the position of an object over time, or to cause the geometry from a SOP to be refetched at each timestep if the geometry is deforming.
You can also use this setting in conjunction with the local variables for a parameter value to modify a value over time. For example, in the X Position, an expression like `$tx + 0.1` would cause the object to move 0.1 units to the right on each timestep.
Set Never
Do not ever set the value of this parameter. This option is most useful when using this node to modify an existing piece of data connected through the first input.
For example, an [RBD State DOP](https://www.sidefx.com/docs/houdini/nodes/dop/rbdstate.html "Alters the state information for an RBD Object.") may want to animate just the mass of an object, and nothing else. The **Set Never** option could be used on all parameters except for **Mass**, which would use **Set Always**.
Default Operation
For any parameters with their **Operation** menu set to **Use Default**, this parameter controls what operation is used.
This parameter has the same menu options and meanings as the **Parameter Operations** menus, but without the **Use Default** choice.
Make Objects Mutual Affectors
All objects connected to the first input of this node become mutual affectors.
This is equivalent to using an [Affector DOP](https://www.sidefx.com/docs/houdini/nodes/dop/affector.html "Creates affector relationships between groups of objects.") to create an affector relationship between `*` and `*` before connecting it to this node. This option makes it convenient to have all objects feeding into a solver node affect each other.
Group
When an object connector is attached to the first input of this node, this parameter can be used to choose a subset of those objects to be affected by this node.
Data Name
Indicates the name that should be used to attach the data to an object or other piece of data. If the Data Name contains a “/” (or several), that indicates traversing inside subdata.
For example, if the [Fan Force DOP](https://www.sidefx.com/docs/houdini/nodes/dop/fan.html "Applies forces on the objects as if a cone-shaped fan were acting on them.") has the default Data Name “Forces/Fan”. This attaches the data with the name “Fan” to an existing piece of data named “Forces”. If no data named “Forces” exists, a simple piece of container data is created to hold the “Fan” subdata.
Different pieces of data have different requirements on what names should be used for them. Except in very rare situations, the default value should be used. Some exceptions are described with particular pieces of data or with solvers that make use of some particular type of data.
Unique Data Name
Turning on this parameter modifies the **Data Name** parameter value to ensure that the data created by this node is attached with a unique name so it will not overwrite any existing data.
With this parameter turned off, attaching two pieces of data with the same name will cause the second one to replace the first. There are situations where each type of behavior is desirable.
If an object needs to have several [Fan Forces](https://www.sidefx.com/docs/houdini/nodes/dop/fan.html "Applies forces on the objects as if a cone-shaped fan were acting on them.") blowing on it, it is much easier to use the **Unique Data Name** feature to ensure that each fan does not overwrite a previous fan rather than trying to change the **Data Name** of each fan individually to avoid conflicts.
On the other hand, if an object is known to have [RBD State](https://www.sidefx.com/docs/houdini/nodes/dop/rbdstate.html "Alters the state information for an RBD Object.") data already attached to it, leaving this option turned off will allow some new [RBD State](https://www.sidefx.com/docs/houdini/nodes/dop/rbdstate.html "Alters the state information for an RBD Object.") data to overwrite the existing data.
Solver Per Object
The default behavior for solvers is to attach the exact same solver to all of the objects specified in the group. This allows the objects to be processed in a single pass by the solver, since the parameters are identical for each object. However, some objects operate more logically on a single object at a time. In these cases, one may want to use `$OBJID` expressions to vary the solver parameters across the objects. Setting this toggle will create a separate solver per object, allowing `$OBJID` to vary as expected.
## INPUTS
First Input
This optional input can be used to control which simulation objects are modified by this node. Any objects connected through this input and which match the **Group** parameter field will be modified.
If this input is not connected, this node can be used in conjunction with an Apply Data node, or can be used as an input to another data node.
All Other Inputs
If this node has more input connectors, other data nodes can be attached to act as modifiers for the data created by this node.
The specific types of subdata that are meaningful vary from node to node. Click MMB an input connector to see a list of available data nodes that can be meaningfully attached.
## OUTPUTS
First Output
The operation of this output depends on what inputs are connected to this node. If an object stream is input to this node, the output is also an object stream containing the same objects as the input (but with the data from this node attached).
If no object stream is connected to this node, the output is a data output. This data output can be connected to an [Apply Data DOP](https://www.sidefx.com/docs/houdini/nodes/dop/applydata.html "Attaches data to simulation objects or other data."), or connected directly to a data input of another data node, to attach the data from this node to an object or another piece of data.
## LOCALS
channelname
This DOP node defines a local variable for each channel and parameter on the Data Options page, with the same name as the channel. So for example, the node may have channels for Position (positionx, positiony, positionz) and a parameter for an object name (objectname).
Then there will also be local variables with the names positionx, positiony, positionz, and objectname. These variables will evaluate to the previous value for that parameter.
This previous value is always stored as part of the data attached to the object being processed. This is essentially a shortcut for a dopfield expression like:
dopfield($DOPNET, $OBJID, dataName, "Options", 0, channelname)
If the data does not already exist, then a value of zero or an empty string will be returned.
DATACT
This value is the simulation time (see variable ST) at which the current data was created. This value may not be the same as the current simulation time if this node is modifying existing data, rather than creating new data.
DATACF
This value is the simulation frame (see variable SF) at which the current data was created. This value may not be the same as the current simulation frame if this node is modifying existing data, rather than creating new data.
RELNAME
This value will be set only when data is being attached to a relationship (such as when Constraint Anchor DOP is connected to the second, third, of fourth inputs of a Constraint DOP).
In this case, this value is set to the name of the relationship the data to which the data is being attached.
RELOBJIDS
This value will be set only when data is being attached to a relationship (such as when Constraint Anchor DOP is connected to the second, third, of fourth inputs of a Constraint DOP).
In this case, this value is set to a string that is a space separated list of the object identifiers for all the Affected Objects of the relationship to which the data is being attached.
RELOBJNAMES
This value will be set only when data is being attached to a relationship (such as when Constraint Anchor DOP is connected to the second, third, of fourth inputs of a Constraint DOP).
In this case, this value is set to a string that is a space separated list of the names of all the Affected Objects of the relationship to which the data is being attached.
RELAFFOBJIDS
This value will be set only when data is being attached to a relationship (such as when Constraint Anchor DOP is connected to the second, third, of fourth inputs of a Constraint DOP).
In this case, this value is set to a string that is a space separated list of the object identifiers for all the Affector Objects of the relationship to which the data is being attached.
RELAFFOBJNAMES
This value will be set only when data is being attached to a relationship (such as when Constraint Anchor DOP is connected to the second, third, of fourth inputs of a Constraint DOP).
In this case, this value is set to a string that is a space separated list of the names of all the Affector Objects of the relationship to which the data is being attached.
ST
This value is the simulation time for which the node is being evaluated.
This value may not be equal to the current Houdini time represented by the variable T, depending on the settings of the [DOP Network](https://www.sidefx.com/docs/houdini/nodes/obj/dopnet.html "The DOP Network Object contains a dynamic simulation.") **Offset Time** and **Time Scale** parameters.
This value is guaranteed to have a value of zero at the start of a simulation, so when testing for the first timestep of a simulation, it is best to use a test like `$ST == 0` rather than `$T == 0` or `$FF == 1`.
SF
This value is the simulation frame (or more accurately, the simulation time step number) for which the node is being evaluated.
This value may not be equal to the current Houdini frame number represented by the variable F, depending on the settings of the [DOP Network](https://www.sidefx.com/docs/houdini/nodes/obj/dopnet.html "The DOP Network Object contains a dynamic simulation.") parameters. Instead, this value is equal to the simulation time (ST) divided by the simulation timestep size (TIMESTEP).
TIMESTEP
This value is the size of a simulation timestep. This value is useful to scale values that are expressed in units per second, but are applied on each timestep.
SFPS
This value is the inverse of the TIMESTEP value. It is the number of timesteps per second of simulation time.
SNOBJ
This is the number of objects in the simulation. For nodes that create objects such as the [Empty Object](https://www.sidefx.com/docs/houdini/nodes/dop/emptyobject.html "Creates an Empty Object.") node, this value will increase for each object that is evaluated.
A good way to guarantee unique object names is to use an expression like `object_$SNOBJ`.
NOBJ
This value is the number of objects that will be evaluated by the current node during this timestep. This value will often be different from SNOBJ, as many nodes do not process all the objects in a simulation.
This value may return 0 if the node does not process each object sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html "Creates simulation object groups.")).
OBJ
This value is the index of the specific object being processed by the node. This value will always run from zero to NOBJ-1 in a given timestep. This value does not identify the current object within the simulation like OBJID or OBJNAME, just the object’s position in the current order of processing.
This value is useful for generating a random number for each object, or simply splitting the objects into two or more groups to be processed in different ways. This value will be -1 if the node does not process objects sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html "Creates simulation object groups.")).
OBJID
This is the unique object identifier for the object being processed. Every object is assigned an integer value that is unique among all objects in the simulation for all time. Even if an object is deleted, its identifier is never reused.
The object identifier can always be used to uniquely identify a given object. This makes this variable very useful in situations where each object needs to be treated differently. It can be used to produce a unique random number for each object, for example.
This value is also the best way to look up information on an object using the dopfield expression function. This value will be -1 if the node does not process objects sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html "Creates simulation object groups.")).
ALLOBJIDS
This string contains a space separated list of the unique object identifiers for every object being processed by the current node.
ALLOBJNAMES
This string contains a space separated list of the names of every object being processed by the current node.
OBJCT
This value is the simulation time (see variable ST) at which the current object was created.
Therefore, to check if an object was created on the current timestep, the expression `$ST == $OBJCT` should always be used. This value will be zero if the node does not process objects sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html "Creates simulation object groups.")).
OBJCF
This value is the simulation frame (see variable SF) at which the current object was created.
This value is equivalent to using the dopsttoframe expression on the OBJCT variable. This value will be zero if the node does not process objects sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html "Creates simulation object groups.")).
OBJNAME
This is a string value containing the name of the object being processed.
Object names are not guaranteed to be unique within a simulation. However, if you name your objects carefully so that they are unique, the object name can be a much easier way to identify an object than the unique object identifier, OBJID.
The object name can also be used to treat a number of similar objects (with the same name) as a virtual group. If there are 20 objects named “myobject”, specifying `strcmp($OBJNAME, "myobject") == 0` in the activation field of a DOP will cause that DOP to operate only on those 20 objects. This value will be the empty string if the node does not process objects sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html "Creates simulation object groups.")).
DOPNET
This is a string value containing the full path of the current DOP Network. This value is most useful in DOP subnet digital assets where you want to know the path to the DOP Network that contains the node.
Note
Most dynamics nodes have local variables with the same names as the node’s parameters. For example, in a [Position node](https://www.sidefx.com/docs/houdini/nodes/dop/position.html "Associates a position and orientation to an object."), you could write the expression:
$tx + 0.1
…to make the object move 0.1 units along the X axis at each timestep.
