---
type: concept
title: RBD Object
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "53c21cb40013"
---
从SOP几何图形中创建一个RBD对象。
### Parameters
The RBD Object DOP creates an RBD Object inside the DOP simulation. It creates a new object and attaches the subdata required for it to be a properly conforming RBD Object.
This tool creates an rigid body dynamic object for simulation. It creates a new dynamic object and attaches the subdata required for it to be a properly conforming RBD Object.
Unlike the [RBD Objects](https://www.sidefx.com/docs/houdini/shelf/rbdobjects.html "Creates one or more rigid bodies from SOP geometry.") tool, this tool does not use packed primitives and works with the [RBD solver](https://www.sidefx.com/docs/houdini/nodes/dop/rbdsolver.html " Sets and configures a Rigid Body Dynamics solver. ") as well as the [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. "). It also has controls over its SDF representation for interaction with fluids. You would typically want to use this for interaction with fluid, cloth, having particles stick to it, etc.
Note
[RBD Objects](https://www.sidefx.com/docs/houdini/shelf/rbdobjects.html "Creates one or more rigid bodies from SOP geometry.") is the default you should use if you just want to create a bunch of RBD objects from geometry, which could be prefractured or groups of connected primitives. It will put down an [RBD Packed Object DOP](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects."), which will be significantly faster and use less memory for large simulations.
1.  Select the geometry to convert to an RBD Object.
2.  Click the ![](https://www.sidefx.com/docs/houdini/icons/DOP/rbdobject.svg)[RBD Hero Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdobject.html "Creates an RBD Object from SOP Geometry.") tool on the **Rigid Bodies** tab.
![](https://www.sidefx.com/docs/houdini/images/shelf/rbd_object1.jpg) ![](https://www.sidefx.com/docs/houdini/images/shelf/rbd_object2.jpg) ![](https://www.sidefx.com/docs/houdini/images/shelf/rbd_object3.jpg)
Note
Once you convert geometry to an RBD Hero Object you can only [transform, rotate, and scale](https://www.sidefx.com/docs/houdini/basics/handles.html) it when it is on the first frame.
# Attributes
You can [create attributes](https://www.sidefx.com/docs/houdini/model/attributes.html "Describes how Houdini represents geometry using details, primitives, points, vertices, and attributes.") on the RBD object’s geometry to influence its behavior. Most of these attributes allow fine-tuning of the RBD by overriding default values set in this node.
Name
Class
Type
Description
friction
Point
Float
Defines a per-point friction. This will override the friction set in the physical parms page.
dynamicfriction
Point
Float
Defines a per-point dynamic friction. This will override the dynamic friction set in the physical parms page.
bounce
Point
Float
Defines a per-point bounce value. This will override the bounce value set in the physical parms page.
nopointvolume
Point
Integer
Points with this attribute set to true will not be included in the collision information when point sampling is chosen.
noedgevolume
Vertex
Integer
Edges with this attribute set to true will not be included in the collision information when edge sampling is chosen.
# PARAMETERS
Creation Frame Specifies Simulation Frame
Determines if the creation frame refers to global Houdini frames (`$F`) or to simulation specific frames (`$SF`). The latter is affected by the offset time and scale time at the DOP network level.
Creation Frame
The frame number on which the object will be created. The object is created only when the current frame number is equal to this parameter value. This means the DOP Network must evaluate a timestep at the specified frame, or the object will not be created.
For example, if this value is set to 3.5, the **Timestep** parameter of the DOP Network must be changed to `1/(2*$FPS)` to ensure the DOP Network has a timestep at frame 3.5.
Number of Objects
Instead of making a single object, you can create a number of identical objects. You can set each object’s parameters individually by using the `$OBJID` expression.
Object Name
The name for the created object. This is the name that shows up in the details view and is used to reference this particular object externally.
Note
While it is possible to have many objects with the same name, this complicates writing references, so it is recommended to use something like `$OBJID` in the name.
Solve On Creation Frame
For the newly created objects, this parameter controls whether or not the solver for that object should solve for the object on the timestep in which it was created.
Usually this parameter will be turned on if this node is creating objects in the middle of a simulation rather than creating objects for the initial state of the simulation.
Allow Caching
By preventing a large object from being cached, you can ensure there is enough room in the cache for the previous frames of its collision geometry.
This option should only be set when you are working with a very large sim. It is much better just to use a larger memory cache if possible.
SOP Path
The path to a SOP (or an Object, in which case the display SOP is used) which will be the geometry for this object. This parameter can also be a list of Object or SOP paths, and can include wild card specifications or operator groups or bundles.
If multiple Objects or SOPs match this string, a separate simulation object will be created for each matching SOP.
Use Deforming Geometry
Causes the geometry for the object to be pulled from the chosen SOP at each timestep. If the SOP contains animated geometry, the RBD object’s geometry will also animate.
If this option is used, the Use Point Velocity parameter of the RBD Solver should also be turned on to take into account the deformations when calculating collision responses.
Use Object Transform
The transform of the object containing the chosen SOP is applied to the geometry. This is useful if the initial location of the geometry is defined by an object transform.
If you want to transfer an object whose movement is defined at the object level, you should use the Object Position DOP instead.
Create Active Object
Sets the initial active state of the object. An inactive object does not react to other objects in the simulation.
Display Geometry
Controls if the geometry is displayed in the viewport. Does not reset the simulation when it is changed.
# Initial State
Position
Initial position in world space of the object.
Rotation
Initial orientation of the object. This is in RX/RY/RZ format.
Velocity
Initial velocity of the object.
Angular Velocity
Initial angular velocity of the object. This is the axis of rotation times the rate of rotation.
Speed of rotation is measured in degrees per second, so a multiplier of 360 will cause the object to rotate once per second.
Inherit Velocity from Point Velocity
When one brings in a moving piece of geometry from an external source one does not always know the precise velocity and angular velocity.
If this toggle is set, the point velocity attribute of the geometry will be used to calculate the estimated velocity and angular velocity of the object. This allows one to effect a smooth hand off even if the source geometry came from a sequence of geometries rather than a simulation.
# Glue
Glue to Object
The name of an object to glue to. If this is blank, the object is glued to no other object and acts normally. If it is the name of another RBD Object which it mutually affects, this object becomes glued to the other object. Its relative position to the other object is maintained by the solver.
Glue Strength
The amount of accumulated force required to break a glue bond. A value of -1 will prevent the bond from ever breaking. A value of 0 will cause the bond to break with the first external force.
Glue Impulse HalfLife
The number of seconds for the glue impulse to decay by one half. Whenever a glued object gets hit, it accumulates a glue impulse force. This controls how fast that force decays.
# Collisions
### Volume
Use Volume Based Collision Detection
Turning on this option causes the [RBD solver](https://www.sidefx.com/docs/houdini/nodes/dop/rbdsolver.html " Sets and configures a Rigid Body Dynamics solver. ") to use a volume representation of this object for collision detection.
The volume representation results in very fast collision detection and very robust results that are tolerant of temporary interpenetrations. The disadvantage is that a volume representation cannot be used to represent a flat object such as a grid, or a hollow sphere.
When this toggle is turned off, the collision detection is geometry-based rather than volume-based. In this case, the collision code will track the trajectories of moving objects over time to find out whether collisions occurred. This allows more accurate results than volume-based collision detection. For this to work, **Cache Simulation** must be enabled on the DOP network.
Collision Guide
The internal representation used for collision detection is converted to visible geometry. This is useful for debugging problems with collision detection.
This parameter controls the color of the guide geometry.
Mode
Ray Intersect
Use ray intersection with the geometry to create an accurate volumetric representation of the geometry.
Meta Balls
Instead of using rays to determine if points are inside or outside, evaluate the metaball field.
This should be used with **Laser Scanning** turned off on geometry that consists solely of metaballs.
Implicit Box
Calculate the bounding box for the geometry, and create a volumetric representation that precisely fills that bounding box. This box is always axis aligned in the DOP object’s local space, which is set by the position data.
Note
**Use Object Transform** bakes the object transform into the geometry’s transform, leaving the **Position Data** in world space. Turning this off causes the object transform to be send to the **Position Data**, which causes the object’s local space to be reoriented.
Implicit Sphere
Calculate the bounding sphere for the geometry, and create a volumetric representation that precisely fills that bounding sphere.
Implicit Plane
Calculate the bounding box for the geometry, and create a volumetric representation that divides that box along its smallest axis. Everything below that plane is considered inside, and everything above is outside.
This mode is primarily useful for creating ground planes or immovable walls.
Minimum
Use the distance to the surface or curve. If the Offset Surface is 0, no volume will be made. A positive offset surface will create just that - an offset volume around the object’s surface. This is useful for turning thin objects or wires into actual solids.
Volume Sample
The divisions are ignored in this mode, instead they are computed from the first volume or VDB primitive in the geometry. The computed divisions are chosen to match the voxel size of the source volume. The volume primitive is sampled raw and treated as a signed distance field. The assumption is that the source is the output of an [Iso Offset](https://www.sidefx.com/docs/houdini/nodes/sop/isooffset.html "Builds an offset surface from geometry.") or [VDB From Polygons](https://www.sidefx.com/docs/houdini/nodes/sop/vdbfrompolygons.html "Converts polygonal surfaces and/or surface attributes into VDB volume primitives.") SOP. If it isn’t a true signed distance fields, unusual things may happen with RBD collisions.
Division Method
If **Non Square** is chosen, the specified size is divided into the given number of divisions of voxels. However, the sides of these voxels may not be equal, possibly leading to distorted simulations.
When an axis is specified, that axis is considered authoritative for determining the number of divisions. The chosen axis' size will be divided by the uniform divisions to yield the voxel size. The divisions for the other axes will then be adjusted to the closest integer multiple that fits in the required size.
Finally, the size along non-chosen axes will be changed to represent uniform voxel sizes. If the **Max Axis** option is chosen, the maximum sized axis is used.
When **By Size** is chosen, the **Division Size** will be used to compute the number of voxels that fit in the given sized box.
Divisions
Controls the creation of the volumetric representation of this object. This should be set fine enough to capture the desired features of the geometry.
Uniform Divisions
The resolution of the key axis on the voxel grid. This allows you to control the overall resolution with one parameter and still preserve uniform voxels. The **Uniform Voxels** option specifies which axis should be used as the reference. It is usually safest to use the maximum axis.
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
The **Fix Signs** method alone will smooth out, and usually eliminate, sign inversions. However, it is possible for regions of wrong-sign to become stabilized at the boundary of the volumetric representation. This option will force all voxels on the boundary to be marked as exterior. The **Fix Signs** method will be much less likely to stabilize incorrectly then.
Invert Sign
If you want a hollow box, one method is to build one box inside the other and not use **Laser Scanning**. A more robust method is to just specify the inner box and use sign inversion. This treats everything outside of the box as inside, allowing the more robust **Laser Scanning** method to be used.
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
The name of the file to access according to the choice of File Modes above. This is always .simdata file format. Saving to a .bgeo extension will **not** save a .bgeo file.
### Surface
Surface Representation
Chooses between colliding points against volume or colliding edges against volume.
Optionally, the point attributes `nopointvolume` and `noedgevolume` may be added to the geometry to disable individual points/edges from participating in collision detection against a volume object. An edge is disabled if either of its endpoints is disabled.
Convert To Poly
This enables conversion of primitives (such as spheres) in the geometry into polygons. Only polygons are used for collision detection.
Triangulate
When this flag is turned on, polygons in the geometry are triangulated.
LOD
This controls the Level Of Detail of the triangulation. It is used to specify the point density in the U and V directions.
Add Barycenters
The barycenters of each polygon can be included in the collision detection as points or edges (connected to the vertices of the primitive).
## Bullet Data
Show Guide Geometry
Displays a visualization of the object’s collision shape, including the **Collision Padding**. This is useful for debugging problems with collision detection, but is typically slower than just displaying the object’s geometry.
Color
Specifies the color of the guide geometry.
Deactivated Color
Specifies the color of the guide geometry if the object is not moving and has been deactivated by the [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ").
Geometry Representation
The shape used by the Bullet engine to represent the object. The **Show Guide Geometry** option can be used to visualize this collision shape.
Convex Hull
Default shape for the object. The [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ") will create a collision shape from the convex hull of the geometry points.
Concave
The [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ") will convert the geometry to polygons and create a concave collision shape from the resulting triangles. This shape is useful when simulating concave objects such as a torus or a hollow tube. However, it is recommended to only use the concave representation when necessary, since the convex hull representation will typically provide better performance.
Box
Bounding box of the object.
Capsule
Bounding capsule of the object.
Cylinder
Bounding cylinder of the object.
Compound
Creates a complex shape consisting of Bullet primitives (including boxes, spheres, and cylinders). You will need to use the [Bake ODE SOP](https://www.sidefx.com/docs/houdini/nodes/sop/bakeode.html "Converts primitives for ODE and Bullet solvers.").
Sphere
Bounding sphere of the object.
Plane
A static ground plane.
Create Convex Hull Per Set Of Connected Primitives
When **Geometry Representation** is **Convex Hull**, the [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ") will create a compound shape that contains a separate convex hull collision shape for each set of connected primitives in the geometry.
AutoFit Primitive Boxes, Capsules, Cylinders, Spheres, or Planes to Geometry
When enabled, the object’s Geometry subdata will be analyzed instead of using the Position, Rotation, Box Size, Radius, and Length values.
When **Geometry Representation** is **Box**, **Capsule**, **Cylinder**, **Sphere**, or **Plane**, use the geometry bounds to create the shape.
Position
Position of the object shape in the Bullet world. Available when **Geometry Representation** is **Box**, **Sphere**, **Capsule**, **Cylinder**, or **Plane**.
Rotation
Orientation of the object shape in the Bullet world. Available when **Geometry Representation** is **Box**, **Capsule**, **Cylinder**, or **Plane**.
Box Size
The half extents of the box shape. Available when **Geometry Representation** is **Box**.
Radius
The radius of the sphere shape. Available when **Geometry Representation** is **Sphere**, **Capsule**, or **Cylinder**.
Length
The length of the capsule or cylinder in the Y direction. Available when **Geometry Representation** is **Capsule** or **Cylinder**.
Collision Padding
A padding distance between shapes, which is used by the Bullet engine to improve the reliability and performance of the collision detection. You may need to scale this value depending on the scale of your scene. This padding increases the size of the collision shape, so it is recommended to enable **Shrink Collision Geometry** to prevent the collision shape from growing.
This option is not available **Plane** geometry representations.
Shrink Collision Geometry
Shrinks the collision geometry to prevent the **Collision Padding** from increasing the effective size of the object.
This can improve the simulation’s performance by preventing initially closely-packed collision shapes from interpenetrating, and also removes the gap between objects caused by the **Collision Padding**.
When **Geometry Representation** is **Box**, **Capsule**, **Cylinder**, **Compound**, or **Sphere**, the radius and/or length of each primitive will be reduced by **Shrink Amount**.
When **Geometry Representation** is **Convex Hull**, each polygon in the representation geometry will be shifted inward by **Shrink Amount**.
This option is not available for the **Concave** or **Plane** geometry representations.
Shrink Amount
Specifies the amount of resizing done by **Shrink Collision Geometry**. By default, this value is equal to the **Collision Padding** so that the resulting size of the collision shape (including the **Collision Padding**) is the same size as the object’s geometry.
This option is not available for the **Concave** or **Plane** geometry representations.
Add Impact Data
When enabled, any impacts that occur during the simulation will be recorded in the **Impacts** or **Feedback** data. Enabling this option may cause the simulation time and memory usage to increase.
Enable Sleeping
Disables simulation of a non-moving object until the object moves again. The linear and angular speed thresholds are used to determine whether the object is non-moving. If the **Display Geometry** checkbox is turned off, you will see the color of the Guide Geometry change from the **Color** to the **Deactivated Color**.
Linear Threshold
The sleeping threshold for the object’s linear velocity. If the object’s linear speed is below this threshold for a period of time, the object may be treated as non-moving.
Angular Threshold
The sleeping threshold for the object’s angular velocity. If the object’s angular speed is below this threshold for a period of time, the object may be treated as non-moving.
# Physical
Compute Center of Mass
Determines if the center of the object should be found automatically from the object’s volumetric representation and glued sub-objects.
Center of Mass
If the center of mass is not computed automatically, this value becomes the center of the mass. The center of mass can be thought of as the pivot point about which the object will rotate. This is useful to set yourself if you want an object to tip in a certain direction without having to animate it manually.
Compute Mass
Determines if the mass will be calculated automatically from the object’s volumetric representation and glued sub-objects.
Density
The mass of an object is its volume times its density.
Mass
The absolute mass of the object.
Rotational Stiffness
When an object receives a glancing blow, it will often acquire a spin. The amount of spin acquired depends on the shape and mass distribution of the object, known as the _inertial tensor_.
The Rotational Stiffness is a scale factor applied to this. A higher stiffness will make the object less liable to spinning, a lower value will make it more ready to spin.
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
# OUTPUTS
First
The RBD object created by this node is sent through the single output.
# LOCALS
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
# EXAMPLES
Load Launch
[DeformingRBD](https://www.sidefx.com/docs/houdini/examples/nodes/dop/rbdobject/DeformingRBD.html)Example for [RBD Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdobject.html) dynamics node
This example demonstrates a rigid body dynamics simulation involving deforming geometry. A wobbling torus is dropped onto a ground plane.
Load Launch
[FrictionBalls](https://www.sidefx.com/docs/houdini/examples/nodes/dop/rbdobject/FrictionBalls.html)Example for [RBD Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdobject.html) dynamics node
This example demonstrates the friction parameter on an RBD Object.
Load Launch
[RBDInitialState](https://www.sidefx.com/docs/houdini/examples/nodes/dop/rbdobject/RBDInitialState.html)Example for [RBD Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdobject.html) dynamics node
This example demonstrates the use of the Initial State parameter of an RBD object.
Load Launch
[SimpleRBD](https://www.sidefx.com/docs/houdini/examples/nodes/dop/rbdobject/SimpleRBD.html)Example for [RBD Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdobject.html) dynamics node
This example demonstrates a simple rigid body dynamics simulation using the RBD Object DOP. A single sphere is dropped onto a ground plane.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/rbdfracturedobject.svg) RBD Fractured Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdfracturedobject.html)
-   [/nodes/dop/rbdglueobject](https://www.sidefx.com/docs/houdini/nodes/dop/rbdglueobject.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/rbdkeyactive.svg) RBD Keyframe Active](https://www.sidefx.com/docs/houdini/nodes/dop/rbdkeyactive.html)