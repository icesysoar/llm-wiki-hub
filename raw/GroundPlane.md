---
type: concept
title: GroundPlane
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "1e75c27ed14c"
---
一个POP节点，对粒子施加力。
### Parameters
The Ground Plane DOP creates a ground plane inside the DOP simulation. It creates a new object that has a simple grid geometry attached to it. The grid has a Volumetric Representation attached which simulates an infinitely large plane. This can be used as a collision surface for RBD or Cloth simulations.
Because the ground plane can be moved and reoriented, several ground planes can be used to box in an object.
## Using Ground Planes
1.  Click the ![](https://www.sidefx.com/docs/houdini/icons/DOP/groundplane.svg)[Ground Plane](https://www.sidefx.com/docs/houdini/nodes/dop/groundplane.html "Creates a ground plane suitable for RBD or cloth simulations. ") tool on the **Rigid Bodies** tab.
![](https://www.sidefx.com/docs/houdini/images/shelf/ground_plane.jpg)
Note
You can [transform](https://www.sidefx.com/docs/houdini/basics/handles.html), [rotate](https://www.sidefx.com/docs/houdini/basics/handles.html), [scale](https://www.sidefx.com/docs/houdini/basics/handles.html), and [keyframe](https://www.sidefx.com/docs/houdini/anim/basics.html) the ground plane at various frames.
## PARAMETERS
Object Name
The name for the created object.
Display Proxy Geometry
The display of the proxy geometry can be turned off.
For more complicated adjustments of the display status, including enabling the rendering of the proxy geometry, use the [Rendering Parameters DOP](https://www.sidefx.com/docs/houdini/nodes/dop/renderparms.html).
Color
The primitive color for the guide grid to be drawn in.
Grid Size
The scale factor for the guide grid. Note that the underlying volumetric representation will continue to infinity, unaffected by this scale factor.
Some culling methods, such as used by the [RBD Solver](https://www.sidefx.com/docs/houdini/nodes/dop/rbdsolver.html " Sets and configures a Rigid Body Dynamics solver. "), look at the geometry to determine a bounding volume. These may require a larger grid to ensure the collision with the ground plane is tested.
## Initial State
OBJ Path
Allows you to specify the position and rotation of the ground plane based on the position and rotation of an object at the scene level.
Position
The center of the ground plane.
Rotation
The orientation of the ground plane. This is in RX/RY/RZ format.
## Physical
Bounce
The elasticity of the object. If two objects of bounce 1.0 collide, they will rebound without losing energy. If two objects of bounce 0.0 collide, they will come to a standstill.
Bounce Forward
The tangential elasticity of the object. If two objects of bounce forward 1.0 collide, their tangential motion will be affected only by friction. If two objects of bounce forward 0.0 collide, their tangential motion will be matched.
Friction
The coefficient of friction of the object. A value of 0 means the object is frictionless.
This governs how much the tangential velocity is affected by collisions and resting contacts.
Dynamic Friction Scale
An object sliding may have a lower friction coefficient than an object at rest. This is the scale factor that relates the two. It is not a friction coefficient, but a scale between zero and one.
A value of one means that dynamic friction is equal to static friction. A scale of zero means that as soon as static friction is overcome the object acts without friction.
Temperature
Temperature marks how warm or cool an object is. This is used in gas simulations for ignition points of fuel or for buoyancy computations.
Since this does not relate directly to any real world temperature scale, ambient temperature is usually considered 0.
## OUTPUTS
First
The ground plane object created by this node is sent through the single output.
## LOCALS
ST
This value is the simulation time for which the node is being evaluated.
This value may not be equal to the current Houdini time represented by the variable T, depending on the settings of the [DOP Network](https://www.sidefx.com/docs/houdini/nodes/obj/dopnet.html " The DOP Network Object contains a dynamic simulation. ") **Offset Time** and **Time Scale** parameters.
This value is guaranteed to have a value of zero at the start of a simulation, so when testing for the first timestep of a simulation, it is best to use a test like `$ST == 0` rather than `$T == 0` or `$FF == 1`.
SF
This value is the simulation frame (or more accurately, the simulation time step number) for which the node is being evaluated.
This value may not be equal to the current Houdini frame number represented by the variable F, depending on the settings of the [DOP Network](https://www.sidefx.com/docs/houdini/nodes/obj/dopnet.html " The DOP Network Object contains a dynamic simulation. ") parameters. Instead, this value is equal to the simulation time (ST) divided by the simulation timestep size (TIMESTEP).
TIMESTEP
This value is the size of a simulation timestep. This value is useful to scale values that are expressed in units per second, but are applied on each timestep.
SFPS
This value is the inverse of the TIMESTEP value. It is the number of timesteps per second of simulation time.
SNOBJ
This is the number of objects in the simulation. For nodes that create objects such as the [Empty Object](https://www.sidefx.com/docs/houdini/nodes/dop/emptyobject.html " Creates an Empty Object. ") node, this value will increase for each object that is evaluated.
A good way to guarantee unique object names is to use an expression like `object_$SNOBJ`.
NOBJ
This value is the number of objects that will be evaluated by the current node during this timestep. This value will often be different from SNOBJ, as many nodes do not process all the objects in a simulation.
This value may return 0 if the node does not process each object sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html " Creates simulation object groups. ")).
OBJ
This value is the index of the specific object being processed by the node. This value will always run from zero to NOBJ-1 in a given timestep. This value does not identify the current object within the simulation like OBJID or OBJNAME, just the object’s position in the current order of processing.
This value is useful for generating a random number for each object, or simply splitting the objects into two or more groups to be processed in different ways. This value will be -1 if the node does not process objects sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html " Creates simulation object groups. ")).
OBJID
This is the unique object identifier for the object being processed. Every object is assigned an integer value that is unique among all objects in the simulation for all time. Even if an object is deleted, its identifier is never reused.
The object identifier can always be used to uniquely identify a given object. This makes this variable very useful in situations where each object needs to be treated differently. It can be used to produce a unique random number for each object, for example.
This value is also the best way to look up information on an object using the dopfield expression function. This value will be -1 if the node does not process objects sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html " Creates simulation object groups. ")).
ALLOBJIDS
This string contains a space separated list of the unique object identifiers for every object being processed by the current node.
ALLOBJNAMES
This string contains a space separated list of the names of every object being processed by the current node.
OBJCT
This value is the simulation time (see variable ST) at which the current object was created.
Therefore, to check if an object was created on the current timestep, the expression `$ST == $OBJCT` should always be used. This value will be zero if the node does not process objects sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html " Creates simulation object groups. ")).
OBJCF
This value is the simulation frame (see variable SF) at which the current object was created.
This value is equivalent to using the dopsttoframe expression on the OBJCT variable. This value will be zero if the node does not process objects sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html " Creates simulation object groups. ")).
OBJNAME
This is a string value containing the name of the object being processed.
Object names are not guaranteed to be unique within a simulation. However, if you name your objects carefully so that they are unique, the object name can be a much easier way to identify an object than the unique object identifier, OBJID.
The object name can also be used to treat a number of similar objects (with the same name) as a virtual group. If there are 20 objects named “myobject”, specifying `strcmp($OBJNAME, "myobject") == 0` in the activation field of a DOP will cause that DOP to operate only on those 20 objects. This value will be the empty string if the node does not process objects sequentially (such as the [Group DOP](https://www.sidefx.com/docs/houdini/nodes/dop/group.html " Creates simulation object groups. ")).
DOPNET
This is a string value containing the full path of the current DOP Network. This value is most useful in DOP subnet digital assets where you want to know the path to the DOP Network that contains the node.
Note
Most dynamics nodes have local variables with the same names as the node’s parameters. For example, in a [Position node](https://www.sidefx.com/docs/houdini/nodes/dop/position.html " Associates a position and orientation to an object. "), you could write the expression:
$tx + 0.1
…to make the object move 0.1 units along the X axis at each timestep.