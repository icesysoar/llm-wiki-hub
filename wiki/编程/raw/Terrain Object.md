---
type: concept
title: Terrain Object
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "b708656cc135"
---
从SOP几何图形创建一个地形对象。
### Parameters
The Terrain Object DOP creates a static object inside the DOP simulation. This node is just like the [Static Object DOP](https://www.sidefx.com/docs/houdini/nodes/dop/staticobject.html "Creates a Static Object from SOP Geometry.") except that it manipulates the source geometry to generate a useful volume representation from thin geometry (such as a grid, or a grid modified with a [VEX Mountain SOP](https://www.sidefx.com/docs/houdini/nodes/sop/mountain.html)) which would not otherwise be able to generate a useful volume representation.
Volume representation provides better interactions with other solvers in the simulation. To see the volume representation created by this DOP (and ensure it provides a good match to the source geometry), it is a good idea to turn on the **Show Collision Guide Geometry** parameter. A bad volume may be corrected by modifying the **Base Normal** parameter.
The position and velocity of this object is extracted from the animated transformation parameters of the source object. Thus a terrain object is not necessarily stationary. It can move through the simulation, and even deform, but is not affected by other objects in the simulation.
## Using Terrain Objects
1.  Select the object to convert to a terrain object.
2.  Click the ![](https://www.sidefx.com/docs/houdini/icons/DOP/terrainobject.svg)[Terrain Object](https://www.sidefx.com/docs/houdini/nodes/dop/terrainobject.html "Creates a Terrain Object from SOP Geometry.") tool on the **Rigid Bodies** tab.
![](https://www.sidefx.com/docs/houdini/images/shelf/terrain_object.jpg)
Note
You can [transform, rotate, scale](https://www.sidefx.com/docs/houdini/basics/handles.html), and [keyframe](https://www.sidefx.com/docs/houdini/anim/basics.html) the terrain object at various frames.
## PARAMETERS
Creation Frame Specifies Simulation Frame
Determines if the creation frame refers to global Houdini frames (`$F`) or to simulation specific frames (`$SF`).
The latter is affected by the offset time and scale time at the DOP network level.
Creation Frame
The frame number on which the object will be created. The object is created only when the current frame number is equal to this parameter value. This means the DOP Network must evaluate a timestep at the specified frame, or the object will not be created.
For example, if this value is set to 3.5, the **Timestep** parameter of the DOP Network must be changed to `1/(2*$FPS)` to ensure the DOP Network has a timestep at frame 3.5.
Object Name
The name for the created object. This is the name that shows up in the details view and is used to reference this particular object externally.
Note
While it is possible to have many objects with the same name, this complicates writing references, so it is recommended to use something like `$OBJID` in the name.
SOP Path
The path to a SOP (or an Object, in which case the display SOP is used) which will be the geometry for this object.
This parameter can also be a list of Object or SOP paths, and can include wild card specifications or operator groups or bundles. If multiple Objects or SOPs match this string, a separate simulation object will be created for each matching SOP.
OBJ Path
The path to the object that is used to control the motion of the terrain object. The animated world space transformation of this object is used to position this object, and calculate its velocity.
Base Normal
Defines the normal to the plane onto which the source surface is projected to generate the volume. This parameter is useful if the primary orientation of the source geometry is not along the Y axis.
When manipulating this parameter, you should turn on the **Show Collision Guide Geometry** parameter to see the volume representation that is being created.
Use Deforming Geometry
Causes the geometry for the object to be pulled from the chosen SOP at each timestep. If the SOP contains animated geometry, the terrain object’s geometry will also animate.
Create Active Object
Sets the initial active state of the object. An inactive object does not react to other objects in the simulation. If a terrain object is made active, it should be connected to a [Static Solver](https://www.sidefx.com/docs/houdini/nodes/dop/staticsolver.html). This solver causes the terrain object to behave as if it were inactive.
Display Geometry
Controls if the geometry is displayed in the viewport. Does not reset the simulation when it is changed.
Display Extrusion
The terrain geometry is extruded along the base normal to create the final closed volume. Displaying this extruded surface can help identify what the correct base normal is.
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
## Collisions
### Volume
Use Volume Based Collision Detection
Turning on this option causes the [RBD solver](https://www.sidefx.com/docs/houdini/nodes/dop/rbdsolver.html "Sets and configures a Rigid Body Dynamics solver.") to use a volume representation of this object for collision detection.
The volume representation results in very fast collision detection and very robust results that are tolerant of temporary interpenetrations. The disadvantage is that a volume representation cannot be used to represent a flat object such as a grid, or a hollow sphere.
When this toggle is turned off, the collision detection is geometry-based rather than volume-based. In this case, the collision code will track the trajectories of moving objects over time to find out whether collisions occurred. This allows more accurate results than volume-based collision detection. For this to work, **Cache Simulation** must be enabled on the DOP network.
Collision Guide
The internal representation used for collision detection is converted to visible geometry. This is useful for debugging problems with collision detection.
This parameter controls the color of the guide geometry.
Mode
Ray Intersect
Use ray intersection with the geometry to create an accurate volumetric representation of the geometry.
Meta Balls
Instead of using rays to determine if points are inside or outside, evaluate the metaball field.
This should be used with **Laser Scanning** turned off on geometry that consists solely of metaballs.
Implicit Box
Calculate the bounding box for the geometry, and create a volumetric representation that precisely fills that bounding box. This box is always axis aligned in the DOP object’s local space, which is set by the position data.
Note
**Use Object Transform** bakes the object transform into the geometry’s transform, leaving the **Position Data** in world space. Turning this off causes the object transform to be send to the **Position Data**, which causes the object’s local space to be reoriented.
Implicit Sphere
Calculate the bounding sphere for the geometry, and create a volumetric representation that precisely fills that bounding sphere.
Implicit Plane
Calculate the bounding box for the geometry, and create a volumetric representation that divides that box along its smallest axis. Everything below that plane is considered inside, and everything above is outside.
This mode is primarily useful for creating ground planes or immovable walls.
Minimum
Use the distance to the surface or curve. If the Offset Surface is 0, no volume will be made. A positive offset surface will create just that - an offset volume around the object’s surface. This is useful for turning thin objects or wires into actual solids.
Volume Sample
The divisions are ignored in this mode, instead they are computed from the first volume or VDB primitive in the geometry. The computed divisions are chosen to match the voxel size of the source volume. The volume primitive is sampled raw and treated as a signed distance field. The assumption is that the source is the output of an [Iso Offset](https://www.sidefx.com/docs/houdini/nodes/sop/isooffset.html "Builds an offset surface from geometry.") or [VDB From Polygons](https://www.sidefx.com/docs/houdini/nodes/sop/vdbfrompolygons.html "Converts polygonal surfaces and/or surface attributes into VDB volume primitives.") SOP. If it isn’t a true signed distance fields, unusual things may happen with RBD collisions.
Division Method
If **Non Square** is chosen, the specified size is divided into the given number of divisions of voxels. However, the sides of these voxels may not be equal, possibly leading to distorted simulations.
When an axis is specified, that axis is considered authoritative for determining the number of divisions. The chosen axis' size will be divided by the uniform divisions to yield the voxel size. The divisions for the other axes will then be adjusted to the closest integer multiple that fits in the required size.
Finally, the size along non-chosen axes will be changed to represent uniform voxel sizes. If the **Max Axis** option is chosen, the maximum sized axis is used.
When **By Size** is chosen, the **Division Size** will be used to compute the number of voxels that fit in the given sized box.
Divisions
Controls the creation of the volumetric representation of this object. This should be set fine enough to capture the desired features of the geometry.
Uniform Divisions
The resolution of the key axis on the voxel grid. This allows you to control the overall resolution with one parameter and still preserve uniform voxels. The **Uniform Voxels** option specifies which axis should be used as the reference. It is usually safest to use the maximum axis.
Division Size
The explicit size of the voxels. The number of voxels will be computed by fitting an integer number of voxels of this size into the given bounds.
Laser Scan
In laser scan mode the volumetric representation is built by sending rays along the primary axes. Only the closest and farthest intersections are used. The space between these two points is classified as inside, and the rest outside.
The laser scan mode will work even with geometry which has poorly defined normals, self intersects, or is not fully watertight. The disadvantage is that interior features can’t be represented as they are not detected.
When laser scanning is turned off, the volumetric representation is still built by sending rays along the primary axes. All intersections are found, however. Each pair of intersections is tested to see if the segment is inside or outside. This relies on the normal of the geometry being well defined (i.e., manifold, no self intersections), and the geometry being watertight. Complicated shapes with holes can be accurately represented, however.
Fix Signs
Even with the best made geometry, numerical imprecision can result in incorrect sign choices. This option will cause the volumetric representation to be post-processed to look for inconsistent signs. These are then made consistent, usually plugging leaks and filling holes.
This takes time, and can be turned off in cases where the volumetric representation is known to generate without problems.
Force Bounds
The **Fix Signs** method alone will smooth out, and usually eliminate, sign inversions. However, it is possible for regions of wrong-sign to become stabilized at the boundary of the volumetric representation. This option will force all voxels on the boundary to be marked as exterior. The **Fix Signs** method will be much less likely to stabilize incorrectly then.
Invert Sign
If you want a hollow box, one method is to build one box inside the other and not use **Laser Scanning**. A more robust method is to just specify the inner box and use sign inversion. This treats everything outside of the box as inside, allowing the more robust **Laser Scanning** method to be used.
Sign Sweep Threshold
After the fix signs process is complete there can still be inconsistent areas in the SDF. Large blocks can become stabilized and stick out of the SDF. A second sign sweep pass can be performed to try to eliminate these blocks.
The sign sweep threshold governs how big of a jump has to occur for a sign transition to be considered inconsistent. If the values of the sdf change by more than this threshold times the width of the cell, it is considered an invalid sign transition. The original geometry is then ray intersected to determine inside/outside and the result used to determine which sign is correct. The correct sign is then propagated forward through the model.
Max Sign Sweep Count
The sign sweeps are repeated until no signs are flipped (ie, all transitions are within the threshold) or this maximum is reached. Too low of a sign sweep threshold may prevent the process from converging. Otherwise, it tends to converge very quickly.
Offset Surface
A constant amount to offset the signed distance field by. This can be used grow the object slightly or shrink it. Note that it can’t be grown much beyond its original size or it will hit the bounding box of the signed distance field.
Tolerance
This specifies the tolerance used for ray intersections when computing the SDF. This value is multiplied by the size of the geometry and is scale invariant.
Proxy Volume
The geometry which will be used rather than the base geometry for computing the SDF. This can be a volume or VDB in the case of Volume Sample mode to allow one better control over the cached data.
File Mode
Controls the operation for this object’s volume data.
Automatic
If a file with the specified name exists already, it is read from disk. Otherwise the volume is created based on the other parameters on this page, and the specified file is created on disk. This file will never be deleted automatically, even when exiting the application.
Read Files
The specified file is read from disk.
Write Files
The volume is created using the other parameters on this page, and is then written to the specified file on disk.
No Operation
The file is never read or written. The parameters on this page are used to create the volume.
File
The name of the file to access according to the choice of File Modes above. This is always .simdata file format. Saving to a .bgeo extension will **not** save a .bgeo file.
### Surface
Surface Representation
Chooses between colliding points against volume or colliding edges against volume.
Optionally, the point attributes `nopointvolume` and `noedgevolume` may be added to the geometry to disable individual points/edges from participating in collision detection against a volume object. An edge is disabled if either of its endpoints is disabled.
Convert To Poly
This enables conversion of primitives (such as spheres) in the geometry into polygons. Only polygons are used for collision detection.
Triangulate
When this flag is turned on, polygons in the geometry are triangulated.
LOD
This controls the Level Of Detail of the triangulation. It is used to specify the point density in the U and V directions.
Add Barycenters
The barycenters of each polygon can be included in the collision detection as points or edges (connected to the vertices of the primitive).
## OUTPUTS
First
The terrain object created by this node is sent through the single output.
## LOCALS
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
See also
!Ground Plane#Ground Plane Dynamics
!Static Solver#Static Solver Dynamics
!Static Object#Static Object Dynamics
