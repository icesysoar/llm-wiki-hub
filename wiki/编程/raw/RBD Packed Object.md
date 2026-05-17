---
type: concept
title: RBD Packed Object
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "bae6eae386dd"
---
从代表若干RBD对象的SOP几何图形中创建一个单一的DOP对象
### Parameters


Since13.0
# Point Attributes
The RBD Packed Object DOP creates a single DOP Object inside the DOP simulation. It takes the geometry from the given SOP Path and uses each primitive that has a transform and a single point to represent an RBD object. This includes primitives such as [packed primitives](https://www.sidefx.com/docs/houdini/model/packed.html), spheres, and tubes. Each primitive provides the collision geometry for a rigid body, and attributes on the primitive’s point are used to store information such as orientation, mass, and velocity.
The resulting DOP Object represents large numbers of objects in a more efficient manner than the [RBD Fractured Object DOP](https://www.sidefx.com/docs/houdini/nodes/dop/rbdfracturedobject.html "Creates a number of RBD Objects from SOP Geometry. These individual RBD Objects are created from the geometry name attributes. ") or the [RBD Point Object DOP](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpointobject.html "Creates a simulation object at each point of some source geometry, similarly to how the Copy surface node copies geometry onto points."). This object representation is currently only understood by the [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ").
Note
In Houdini 13, RBD Packed Objects can’t interact with other solvers such as cloth and fluids.

The [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ") uses several point attributes to store the properties of each piece of a packed object.
Name
Type
Description
`active`
Integer
Specifies whether the object is able to react to other objects in the simulation. The default active state is set by the **Initial Object Type** parameter.
`age`
Float
The age of the object, in seconds.
`animated`
Integer
Specifies whether the object’s transform should be updated from its SOP geometry at each timestep. This attribute is only used if the `active` attribute is set to 0. The default value is set by the **Initial Object Type** parameter.
`bounce`
Float
The elasticity of the object. If two objects of bounce 1.0 collide, they will rebound without losing energy. If two objects of bounce 0.0 collide, they will come to a standstill. The default value is set by the **Bounce** parameter.
`bullet_add_impact`
Integer
When enabled, any impacts that occur during the simulation will be recorded in the **Impacts** or **Feedback** data. Enabling this option may cause the simulation time and memory usage to increase.
`bullet_angular_sleep_threshold`
Float
The sleeping threshold for the object’s angular velocity. If the object’s angular speed is below this threshold for a period of time, the object may be treated as non-moving.
`bullet_ignore`
Integer
Specifies whether the object should be completely ignored by the Bullet solver. Unlike setting the `active` attribute to zero, other objects in the simulation will not be able to collide against this object.
`bullet_linear_sleep_threshold`
Float
The sleeping threshold for the object’s linear velocity. If the object’s linear speed is below this threshold for a period of time, the object may be treated as non-moving.
`bullet_want_deactivate`
Integer
Disables simulation of a non-moving object until the object moves again. The linear and angular speed thresholds are used to determine whether the object is non-moving. If the **Display Geometry** checkbox is turned off, you will see the color of the Guide Geometry change from the **Color** to the **Deactivated Color**.
`computecom`
Integer
Specifies whether the center of mass of the object should be computed automatically from the object’s collision shape. The default value is set by the **Compute Center of Mass** parameter.
`computemass`
Integer
Specifies whether the mass of the object should be computed automatically from the object’s collision shape and density. The default value is set by the **Compute Mass** parameter.
`creationtime`
Float
Stores the simulation time at which the object was created.
`dead`
Integer
Specifies whether the object should be deleted during the next solve. The [POP Kill](https://www.sidefx.com/docs/houdini/nodes/dop/popkill.html "A POP node that kills particles.") node can be used to generate this attribute.
`deforming`
Integer
Specifies whether the object’s collision shape should be rebuilt from its SOP geometry at each timestep. The default value is set by the **Initial Object Type** parameter.
`density`
Float
The mass of an object is its volume times its density. The default value is set by the **Density** parameter.
`friction`
Float
The coefficient of friction of the object. A value of 0 means the object is frictionless. The default value is set by the **Friction** parameter.
`inertialtensorstiffness`
Float
A scale factor that is applied to the inertial tensor of the object. A higher stiffness will make the object less likely to spin. The default value is set by the **Rotational Stiffness** parameter.
`inheritvelocity`
Integer
If non-zero, the `v` and `w` point attribute values from the source SOP geometry will override the object’s initial velocity.
`life`
Float
The maximum age of the object, in seconds. When the `age` attribute exceeds this value, the object will be marked dead.
`mass`
Float
The mass of the object. If `computemass` is non-zero, this value will be computed automatically by the solver. Otherwise, the default value will be set by the **Mass** parameter.
`name`
String
A unique name for the object. This value is used by [Constraint Networks](https://www.sidefx.com/docs/houdini/nodes/dop/constraintnetwork.html "Constrains pairs of RBD objects together according to a polygon network.") to identify constraints that should be attached to this object.
`orient`
Quaternion
The orientation of the object around the `pivot`. When adjusting this attribute, it is not required to update the packed primitive’s transform as it will be updated by the Bullet solver at the end of the timestep.
`P`
Vector
The current position of the object’s center of mass.
`pscale`
Float
The uniform scale of the object around the `pivot`. This value is multiplied with the `scale` attribute if it exists. See the `scale` attribute’s documentation for more details.
`pivot`
Vector
The pivot point that the orientation is applied to. If `computecom` is non-zero, this will be computed from the object’s collision shape. Otherwise, the value is set from the **Center of Mass** parameter.
`restxform`
Matrix
The initial transform of the packed primitive. The packed primitive’s current transform is the combination of this transform with the _position transform_ (the transform applied by the simulation). The position transform is defined by `P`, `rest`, `pivot`, `orient`, `pscale`, and `scale`. This attribute is automatically initialized by the solver when a new object is identified and its `creationtime` attribute is uninitialized.
`scale`
Vector
The scale of the object around the `pivot`. This value is multiplied with the `pscale` attribute if it exists. When adjusting this attribute, it is not required to update the packed primitive’s transform as it will be updated by the Bullet solver at the end of the timestep.
The solver automatically updates the collision geometry and the object’s inertial tensor to reflect this scale.
Note
To recompute the object’s mass when the scale is changed, set the `computemass` point attribute to 1.
Note
Dynamic scaling is not supported for auto-fitted collision shapes (i.e. when **Geometry Representation** is **Box**, **Capsule**, **Cylinder**, **Sphere**, or **Plane**). In such cases you can set the `bullet_autofit_valid` point attribute to 0 to update the auto-fitted shape, or instead build a suitable bounding proxy in SOPs and use a **Geometry Representation** of **Convex Hull**.
`v`
Vector
The linear velocity of the object. The initial velocity is set by the **Velocity** parameter.
`w`
Vector
The angular velocity of the object, in radians per second. The initial angular velocity is set by the **Angular Velocity** parameter.
### Collision Shape Attributes
The following attributes can be used to customize the collision shape for each object.
Name
Type
Description
`bullet_adjust_geometry`
Integer
Shrinks the collision geometry to prevent the **Collision Padding** from increasing the effective size of the object. This can improve the simulation’s performance by preventing initially closely-packed collision shapes from interpenetrating, and also removes the gap between objects caused by the **Collision Padding**.
`bullet_autofit`
Integer
Specifies whether to use the bounds of the object’s geometry to compute the collision shape when **Geometry Representation** is **Box**, **Capsule**, **Cylinder**, **Sphere**, or **Plane**.
`bullet_collision_margin`
Float
A padding distance between shapes, which is used by the Bullet engine to improve the reliability and performance of the collision detection. You may need to scale this value depending on the scale of your scene. This padding increases the size of the collision shape, so it is recommended to enable **Shrink Collision Geometry** to prevent the collision shape from growing. This option is not supported for the **Concave** or **Plane** geometry representations.
`bullet_color`
Vector
Specifies the color of the shape’s guide geometry.
`bullet_deactivated_color`
Vector
Specifies the color of the shape’s guide geometry if the object is not moving and has been deactivated by the solver.
`bullet_georep`
String
The collision shape used to represent the object. Possible values are `convexhull`, `concave`, `box`, `capsule`, `cylinder`, `compound`, `sphere`, `plane`, and `none`. Setting the collision shape to `none` will produce a static object with collisions disabled, but constraints can still be attached to the object.
`bullet_groupconnected`
Integer
When **Geometry Representation** is **Convex Hull**, specifies whether the solver should create a compound shape that contains a separate convex hull collision shape for each set of connected primitives in the geometry.
`bullet_length`
Float
The length of the **Capsule** or **Cylinder** collision shape in the Y direction. If **AutoFit** is enabled, this value will be computed automatically from the object’s geometry.
`bullet_primR`
Vector
The orientation of the **Box**, **Capsule**, **Cylinder**, or **Plane** collision shape in the Bullet world. If **AutoFit** is enabled, this value will be computed automatically from the object’s geometry.
`bullet_primS`
Vector
The size of the **Box** collision shape. If **AutoFit** is enabled, this value will be computed automatically from the object’s geometry.
`bullet_primT`
Vector
The position of the **Box**, **Sphere**, **Capsule**, **Cylinder**, or **Plane** collision shape in the Bullet world. If **AutoFit** is enabled, this value will be computed automatically from the object’s geometry.
`bullet_radius`
Float
The radius of the **Sphere**, **Capsule**, or **Cylinder** collision shape. If **AutoFit** is enabled, this value will be computed automatically from the object’s geometry.
`bullet_shrink_amount`
Float
Specifies the amount of resizing done by **Shrink Collision Geometry**.
### Collision Attributes
The attributes listed below can be used to ignore collisions against other objects in the simulation.
Name
Type
Description
`activationignore`
String
If the object is inactive and has a positive `min_activation_impulse` value, it will not be activated by collisions with any objects that match this pattern. The pattern uses the same syntax as the `collisionignore` attribute.
`activationxformgroup`
String
For an agent, specifies which of its rigid bodies should be activated when using the `min_activation_impulse` attribute. The default behavior is to activate all of the agent’s rigid bodies. This attribute is expected to contain the name of a [transform group](https://www.sidefx.com/docs/houdini/nodes/sop/agenttransformgroup.html "Adds new transform groups to agent primitives.") that specifies which joints' rigid bodies should be activated.
`collisiongroup`
String
Specifies the name of a collision group that this object belongs to. This can be used by the `collisionignore` attribute to ignore collisions against specific groups of objects.
`collisionignore`
String
The object will not collide against any objects that match this pattern. This pattern can use the name of DOP objects, the ID of DOP objects, DOP groups, or the `collisiongroup` point attribute of a packed primitive in an [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects."). The [POP Collision Ignore](https://www.sidefx.com/docs/houdini/nodes/dop/popcollisionignore.html "A POP node marks particles to ignore implicit collisions.") node can be used to generate this attribute.
`*` will disable all collisions, and an empty string will enable all collisions.
`* ^object1` will cause the object to only collide against the DOP object whose name is `object1`.
`wall*` will disable collisions against packed primitives whose `collisiongroup` attribute begins with `wall` (or DOP objects whose name begins with `wall`).
`object1/wall*` will disable collisions against packed primitives from the DOP object `object1` whose `collisiongroup` attribute begins with `wall`.
`min_activation_impulse`
Float
The minimum impulse from a collision that will cause the object to switch from inactive to active. The activation occurs at the instant that the collision occurs. The `activationignore` attribute can be used to prevent the object from being activated by collisions with particular objects.
### Speed Limit Attributes
The attributes listed below can be used to clamp the linear or angular speed of specific objects. The clamping is performed during each substep after forces and constraints have been applied (but before positions are updated), so this enforces a hard limit on the object’s speed. If the attribute value is negative, no clamping is performed. For animated or deforming static objects, the speed limit affects the velocities used when resolving collisions. The [POP Speed Limit](https://www.sidefx.com/docs/houdini/nodes/dop/popspeedlimit.html "A POP node that sets the speed limits for particles.") node can be used to generate these attributes.
Name
Type
Description
`speedmin`
Float
The slowest speed (in units/second) that an object can move. This does not affect stationary objects.
`speedmax`
Float
The fastest speed (in units/second) that an object can move.
`spinmin`
Float
The slowest speed (in radians/second) that an object can rotate. This does not affect non-spinning objects.
`spinmax`
Float
The fastest speed (in radians/second) that an object can rotate.
The attributes listed below can be used to limit the _change_ in the object’s linear or angular velocity when solving constraints and collisions. This does not affect changes to the object’s velocity due to external forces, and is enforced each frame after constraints have been solved and positions have been updated. This can be useful to tame collisions that produce very high linear or angular velocities. If the value is negative, no clamping is performed.
Note
For best results, it is recommended to clamp both linear and angular acceleration simultaneously.
Setting the max acceleration to a very low value can introduce jitter for situations such as objects resting on the ground plane. With such values, the contact constraints cannot change the object’s velocity by enough to counter the acceleration due to gravity.
Name
Type
Description
`accelmax`
Float
Limits the change in the object’s speed that is caused by enforcing constraints.
`angaccelmax`
Float
Limits the change in the object’s angular speed that is caused by enforcing constraints.
### Force Attributes
The attributes listed below can be used to apply forces to specific objects. Nodes such as [POP Force](https://www.sidefx.com/docs/houdini/nodes/dop/popforce.html "A POP node that applies forces to particles.") and [POP Drag](https://www.sidefx.com/docs/houdini/nodes/dop/popdrag.html "A POP node that applies drag to particles.") can be used to generate these forces.
Name
Type
Description
`airresist`
Float
Specifies how important it is to match the target velocity (`targetv`).
`drag`
Float
When an object is dragged by the `targetv` and `airresist` attributes, this attribute is used to further scale the drag amount.
`dragexp`
Float
Higher drag exponents cause objects that are far from `targetv` or `targetw` to recover faster than those that are already close to the target velocity.
`force`
Vector
Specifies a force that will be applied to the center of mass of the object.
`spinresist`
Float
Specifies how important it is to match the target angular velocity (`targetw`).
`targetv`
Vector
Specifies a target velocity for the object. This is used in combination with the `airresist` attribute to compute a force that will move the object towards the desired velocity.
`targetw`
Vector
Specifies a target angular velocity for the object. This is used in combination with the `spinresist` attribute to compute a torque that will move the object towards the desired angular velocity.
`torque`
Vector
Specifies a torque that will be applied to the object.
### Agent Attributes
For agent primitives, a rigid body is created for each transform in its rig that has at least one shape attached to it in the agent’s collision layer. Array attributes are used for properties that can vary for each of an agent’s rigid bodies, and the attributes are named with the `_agent` suffix. The arrays are indexed using the transform index from the agent’s rig.
The following array attributes are required:
`bullet_autofit_valid_agent`
`bullet_length_agent`
`bullet_primR_agent`
`bullet_primS_agent`
`bullet_primT_agent`
`bullet_radius_agent`
`bullet_sleeping_agent`
`deactivation_time_agent`
`mass_agent`
`orient_agent`
`pivot_agent`
`trans_agent`
`v_agent`
`w_agent`
The following array attributes are optional and can be used instead of the regular point attributes if varying values are needed.
`active_agent`
`activationignore_agent`
`activationxformgroup_agent`
`bounce_agent`
`bullet_color_agent`
`bullet_deactivated_color_agent`
`density_agent`
`force_agent`
`friction_agent`
`inertialtensorstiffness_agent`
`min_activation_impulse_agent`
`torque_agent`
The attributes listed below can also be used for agent primitives.
Name
Type
Description
`bullet_updateagentxform`
Integer
Specifies whether the solver should update the agent’s overall transform (e.g. the `P` and `orient` point attributes) based on the root rigid body’s motion. This option is useful for a full ragdoll so that the agent’s point follows its motion, but may cause issues for a partial ragdoll where the agent’s overall transform is already being updated elsewhere (e.g. by the [crowd solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html "Updates agents according to their steer forces and animation clips.")).
### Reserved Solver Attributes
Below is a list of attributes that are maintained internally by the solver. You should not modify these attributes yourself.
Name
Class
Type
Description
`bullet_autofit_valid`
Point
Integer
When **AutoFit** is enabled, this value stores whether the solver has already computed collision shape attributes such as `bullet_length` and `bullet_primT`.
`bullet_sleeping`
Point
Integer
Tracks whether the object has been put to sleep by the solver. This occurs after the object and any nearby / constrained objects have been below the **Linear Threshold** and **Angular Threshold** for a period of time.
Note
When manually waking an object, the `deactivation_time` attribute should also be set to zero so that the object isn’t immediately put back to sleep.
`deactivation_time`
Point
Float
The amount of time that the object’s speed has been below the **Linear Threshold** or **Angular Threshold**. The solver uses this value to disable simulation of objects that have been inactive for a period of time.
`found_overlap`
Point
Integer
When the solver sees an object for the first time, it checks whether that object is initially overlapping with any other objects in the simulation and prevents any such pairs of objects from being forced apart. This value is used by the solver to determine whether it has performed this process for the object on a previous frame.
`id`
Point
Integer
A unique identifier for the object. This value is used by the solver to identify objects that have been added to or removed from the simulation.
`nextid`
Detail
Integer
Stores the `id` that the solver will assign to the next new object that is added.
## PARAMETERS
Creation Frame Specifies Simulation Frame
Determines if the creation frame refers to global Houdini frames (`$F`) or to simulation specific frames (`$SF`). The latter is affected by the offset time and scale time at the DOP network level.
Creation Frame
The frame number on which the object will be created. The object is created only when the current frame number is equal to this parameter value. This means the DOP Network must evaluate a timestep at the specified frame, or the object will not be created.
For example, if this value is set to 3.5, the **Timestep** parameter of the DOP Network must be changed to `1/(2*$FPS)` to ensure the DOP Network has a timestep at frame `3.5`.
Initial Object Type
Specifies the initial state of the objects. The `active`, `animated`, and `deforming` point attributes can be used to vary these values on a per object basis. For animated and deforming objects, the `name` point attribute is used to find the matching point from the **SOP Path**.
Create Active Objects
The objects will be simulated and react to other objects in the simulation.
Create Static Objects
The objects will not move or react to other objects in the simulation.
Create Animated Static Objects
The objects' transforms will be updated on each timestep from the **SOP Path**, but the objects will not react to other objects in the simulation.
Create Deforming Static Objects
The objects' collision shapes will be rebuilt on each timestep from the **SOP Path**, but the objects will not react to other objects in the simulation.
Create Deforming Active Objects
The objects will be simulated and react to other objects in the simulation, and their collision shapes will also be rebuilt on each timestep from the **SOP Path**.
Geometry Source
Specifies the source of the objects' geometry.
SOP
Use the SOP specified by the **SOP Path** parameter.
First Context Geometry
Use the SOP connected to the DOP network’s first input.
Second Context Geometry
Use the SOP connected to the DOP network’s second input.
Third Context Geometry
Use the SOP connected to the DOP network’s third input.
Fourth Context Geometry
Use the SOP connected to the DOP network’s fourth input.
SOP Path
The path to a SOP (or an Object, in which case the display SOP is used) which will be the geometry for this object.
Overwrite Attributes from SOP
When enabled, specifies a list of point attributes that will be updated on each frame from the **SOP Path**. The `name` point attribute is used to find the matching point from the SOP geometry.
Use Object Transform
The transform of the object containing the chosen SOP is applied to the geometry. This is useful if the initial location of the geometry is defined by an object transform.
Display Geometry
Controls if the geometry is displayed in the viewport. Does not reset the simulation when it is changed.
Simulation Geometry
The objects' geometry is displayed in the viewport.
Render Geometry
The geometry specified by the **Render SOP Path** parameter is transformed to match the simulation geometry and is displayed in the viewport. This is useful for visualizing the results of the simulation when using lower resolution shapes for the simulation geometry.
Render SOP Path
Specifies the SOP geometry to use when **Display Geometry** is set to **Render Geometry**.
## Initial State
Position
Initial position in world space of the object.
Rotation
Initial orientation of the object. This is in RX/RY/RZ format.
Velocity
Initial velocity of the object.
Angular Velocity
Initial angular velocity of the object. This is the axis of rotation times the rate of rotation. Speed of rotation is measured in degrees per second, so a value of 360 will cause the object to rotate once per second.
Inherit Velocity from Point Velocity
If enabled, the `v` and `w` point attributes of the source geometry will override the object’s initial velocity.
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
## Physical
Compute Center of Mass
Specifies that the object’s center of mass should be computed automatically from its collision shape on the next frame it is solved.
Inherit Pivot from Point Position
Sets the center of mass to the primitive’s initial point position.
Pivot
Specifies the object’s center of mass.
Compute Mass
Determines if the mass will be calculated automatically from the object’s volumetric representation and glued sub-objects.
Density
The mass of an object is its volume times its density.
Mass
The absolute mass of the object.
Rotational Stiffness
When an object receives a glancing blow, it will often acquire a spin. The amount of spin acquired depends on the shape and mass distribution of the object, known as the _inertial tensor_.
The **Rotational Stiffness** is a scale factor applied to this. A higher stiffness will make the object less liable to spinning, a lower value will make it more ready to spin.
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
The RBD object created by this node is sent through the single output.
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
## EXAMPLES
Load Launch
[ActivateObjects](https://www.sidefx.com/docs/houdini/examples/nodes/dop/rbdpackedobject/ActivateObjects.html)Example for [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html) dynamics node
This example shows how to modify the “active” point attribute of an RBD Packed Object to change objects from static to active.
Load Launch
[AnimatedObjects](https://www.sidefx.com/docs/houdini/examples/nodes/dop/rbdpackedobject/AnimatedObjects.html)Example for [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html) dynamics node
This example shows how to use animated packed primitives in an RBD Packed Object and set up a transition to active objects later in the simulation.
Load Launch
[DeleteObjects](https://www.sidefx.com/docs/houdini/examples/nodes/dop/rbdpackedobject/DeleteObjects.html)Example for [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html) dynamics node
This example shows how to remove objects from the simulation that are inside a bounding box.
Load Launch
[EmittingObjects](https://www.sidefx.com/docs/houdini/examples/nodes/dop/rbdpackedobject/EmittingObjects.html)Example for [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html) dynamics node
This example shows how to use a SOP Solver to create new RBD objects and add them to an existing RBD Packed Object.
Load Launch
[ScalingRBDs](https://www.sidefx.com/docs/houdini/examples/nodes/dop/rbdpackedobject/ScalingRBDs.html)Example for [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html) dynamics node
This example demonstrates how to modify the scale of RBD objects during a simulation.
Load Launch
[SpeedLimit](https://www.sidefx.com/docs/houdini/examples/nodes/dop/rbdpackedobject/SpeedLimit.html)Example for [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html) dynamics node
This example shows how to limit the speed of specific objects in the simulation.
See also
 [![](https://www.sidefx.com/docs/houdini/icons/DOP/constraintnetwork.svg) Constraint Network](https://www.sidefx.com/docs/houdini/nodes/dop/constraintnetwork.html)
 [![](https://www.sidefx.com/docs/houdini/icons/SOP/assemble.svg) Assemble](https://www.sidefx.com/docs/houdini/nodes/sop/assemble.html)
 [![](https://www.sidefx.com/docs/houdini/icons/SOP/extracttransform.svg) Extract Transform](https://www.sidefx.com/docs/houdini/nodes/sop/extracttransform.html)
 [![](https://www.sidefx.com/docs/houdini/icons/SOP/pack.svg) Pack](https://www.sidefx.com/docs/houdini/nodes/sop/pack.html)