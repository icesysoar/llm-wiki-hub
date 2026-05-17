---
type: concept
title: RBD Bullet Solver
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "8dfdf5da77db"
---
运行一个动态的Bullet模拟。
### Parameters
The RBD Bullet Solver is a wrapper around a DOP network to simplify the running of Bullet simulations. Like most RBD SOPs, it is based on a three input SOP, with 2 additional inputs.

The first input is the render geometry. It will be used as simulation geometry if none is provided in the third input.

The second input is the constraint geometry, used to instantiate dynamic constraint relationships between simulated pieces. These can be created when fracturing the geometry using an [RBD Material Fracture SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdmaterialfracture.html "Fractures the input geometry based on a material type.") or created explicitly using the [RBD Constraints From Lines](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintsfromlines.html "Creates rigid body constraint geometry from interactively drawn lines in the viewport."), [RBD Constraints From Curves](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintsfromcurves.html "Creates rigid body constraint geometry from curves drawn in the viewport."), or [RBD Constraints From Rules](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintsfromrules.html "Creates rigid body constraint geometry from a set of rules and conditions.") among other methods. They need a `name` point attribute connecting them to their respective pieces and a `constraint_name` primitive attribute matching the constraint relationship DOP’s data name, and can have primitive attributes to define their behavior during the course of the simulation. You can also use the [RBD Constraint Properties SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintproperties.html "Creates attributes describing rigid body constraints.") to set these up.

The third input is the proxy geometry, a simplified representation of the render geometry, better suited for fast simulations. It will be used as the simulation geometry when provided.

The fourth input provides the collision geometry. Packed geometry is recognized and can be configured with the [RBD Configure SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconfigure.html "Packs and creates attributes describing rigid body objects.") to drive their behavior individually. Some pieces could be animated, some pieces set to deform, while others may be set to use spheres as geometry representation.

The fifth input provides the guiding geometry. This can either be packed geometry or a mesh that can be split into various parts by connectivity which will can be packed into discreet pieces. If the simulation geometry isn’t packed, it will be converted to packed fragments internally for simulation. The [RBD Configure SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconfigure.html "Packs and creates attributes describing rigid body objects.") can be used to pack and set attributes on the simulation geometry and collision geometry to drive the various [bullet objects](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects.")' behavior. For more information, see the [Guided simulations](https://www.sidefx.com/docs/houdini/destruction/guidedsims.html) help page.

Note

The guide geometry will use transformation matrices from its various pieces to drive the guided pieces. For packed objects, their intrinsic transforms are used. Unpacked geometry will be packed per `name` attribute (if available else per connectivity) on the capture start frame and transformed onward. A single deforming mesh as guide geometry will therefore need to first be broken up into various clusters in order to satisfy the requirements for guiding to work as expected.

You can dive into the solver to add DOP nodes to apply special forces and other SOP Solvers. This feeds into the rigid body solver DOP’s pre-solve input and can be used to customize the behavior of the simulation and extend the node’s default capabilities.

If using `collisionignore`, the simulation geometry object can be referred to as `rbd_object`, the fourth input’s object can be referred to as `collision_object`, and the generated ground plane or heightfield as `groundplane`.

When adding impacts, the impact points are available via a named null `OUT_IMPACT_POINTS` that can be retrieved with an object merge.

Many visualizer options are available to get instant feedback on the simulation and the constraints to help tune constraint breaking thresholds. Additionally, a viewport inspector, accessible via a right-click context menu option in the viewport when the node state is active, allows you to inspect any particular primitive’s attributes by simply hovering over it. In order to get constraint information from the viewport inspector, set the **RBD Bullet Solver** SOP’s output for view flag to `Constraint Geometry`.

## Name attribute types

It’s very important that the RBD Bullet Solver SOP receives consistent `name` attribute types. If you mix point and primitive `name` attributes, the solver is unlikely to be able to reconcile this mismatch and will either fail completely or give you erroneous results.

Always check the incoming geometry (by middle-clicking on the node) for a primitive `name` attribute. The only time you should see point `name` attributes is if you are dealing with Packed Fragments, in which case point `name` attributes are expected.

Be careful about having both point and primitive `name` attributes or any case where some geometry has `name` attributes and some do not. Unpacking with the [Unpack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/unpack.html "Unpacks packed primitives.") or the [RBD Unpack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdunpack.html "Unpacks an RBD setup into three outputs."), will prefer point attribute names over prim attribute names. If you mix and match these attribute types, have inconsistencies in the `name` attributes for points and prims, or have some geo with no `name` attributes at all, you could lose all your prim names and end up with empty strings instead, or end up with an obscure dataset.

The RBD Bullet Solver SOP attempts to find empty names on either points or prims and will assume the name from their counterpart. However, it’s best to avoid this case.

## Visualizers and viewport tools

The RBD Bullet Solver provides a number of visualizers to help tune and debug the RBD simulation. When the node state is active, various guide geometries can be displayed (bullet geometry representation, guide preview, etc), constraint information can be displayed as a histogram with information about the min and max values and a viewport inspector can be activated to help with reading attribute values for the primitive under the mouse pointer.

### Viewport Inspector

The viewport inspector displays attribute values about the output primitive under the mouse pointer. To view information about the various outputs, switch the Bullet Solver node’s output for view flag to the desired output. For example, to view information about constraints, switch the Bullet Solver node’s output for view flag to “Constraint Geometry”. You can use the `1`, `2` or `3` hotkeys in the viewport to switch between “Geometry”, “Constraint Geometry” or “Proxy Geometry” respectively, or press `4` to toggle between them.

To view attributes that are generated by the DOP network, you will need to first transfer those attributes to the geometry. In the **Advanced** tab’s **Output** section, select the attributes to transfer and enable them on either the Geometry or Proxy Geometry. You can specify which attributes to display information about on the Inspector’s **Attributes** parameter.

## PARAMETERS

Reset Simulation

Clears the entire simulation caches.

Start Frame

The frame on the Houdini playbar that the simulation should begin.

## Solver

Time Scale

Scales the effective time of the Bullet solve. This can be used to create bullet-time like effects where the physics of the Bullet solver runs at a different rate than the Houdini playbar. A value of 2 will cause objects to fall twice as fast, and 0.1 will slow it to a tenth the speed.

Substeps

The number of substeps for each simulation step, used by Bullet internally. Increasing this number will increase the resolution of the simulation.

Increasing the number of substeps is one way to help fix problems of collisions not being detected for quickly moving objects.

Constraint Iterations

The more iterations you use, the more accurate the constraint and collision handling will be.

### Bullet Object

Emit RBDs

When this checkbox is turned on, input simulation geometry and constraint geometry available at the current frame will be added to the simulation. A suffix `"_" + int(frame * 100)` will be appended to their names. For example, `piece0-1` at frame `1` will be renamed `piece0-1_100`, while `piece0-1` at frame `2.5` will be renamed `piece0-1_250`.

Age RBDs

Adds an `age` point attribute to the objects, which tracks the time since the object was added to the simulation. An `age` attribute is also added to the constraint primitives. This attribute can be useful for driving custom forces, deleting objects after some time, etc.

Add Active Age Attribute

Adds an `active_age` point attribute to the objects, which tracks the time since the object was activated (i.e. when the `active` attribute value switched from 0 to 1).

Just Activated Group

Creates a point group containing only the objects that became active on the current frame. This can be useful for applying an initial force to objects after they are activated.

Overwrite Attributes from SOP

When this checkbox is turned on, it specifies a list of point attributes that will be updated on each frame from the simulation geometry. The `name` point attribute is used to find the matching point from the SOP geometry. When emitting RBDs, this will only work with RBDs with an `rbdbullet_emit` point attribute set to 0, added to the simulation on the first frame of simulation.

Bullet Data

Collision Padding

A padding distance between shapes, which is used by the Bullet engine to improve the reliability and performance of the collision detection. You may need to scale this value depending on the scale of your scene. This padding increases the size of the collision shape, so it is recommended to enable **Shrink Collision Geometry** to prevent the collision shape from growing.

This option is not available for **Plane** geometry representations.

Linear Threshold

The sleeping threshold for the object’s linear velocity. If the object’s linear speed is below this threshold for a period of time, the object may be treated as non-moving.

Angular Threshold

The sleeping threshold for the object’s angular velocity. If the object’s angular speed is below this threshold for a period of time, the object may be treated as non-moving.

Physical

Density

The mass of an object is its volume times its density.

Rotational Stiffness

An object will often acquire a spin when it receives a glancing blow. The amount of spin acquired depends on the shape and mass distribution of the object, known as the _inertial tensor_.

The **Rotational Stiffness** is a scale factor applied to this. A higher stiffness will make the object less liable to spinning, a lower value will make it more ready to spin.

Bounce

The elasticity of the object. If two objects of bounce 1.0 collide, they will rebound without losing energy. If two objects of bounce 0.0 collide, they will come to a standstill.

Friction

The coefficient of friction of the object. A value of 0 means the object is frictionless.

This governs how much the tangential velocity is affected by collisions and resting contacts.

### Collisions

Use Collisions

Enables the collision object.

Solve on Creation Frame

Solve on simulation start frame.

Overwrite Attributes from SOP

When this checkbox is turned on, it specifies a list of point attributes that will be updated on each frame from the simulation geometry. The `name` point attribute is used to find the matching point from the SOP geometry.

Bullet Data

Geometry Representation

The shape used by the Bullet engine to represent the object.

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

Collision Padding

A padding distance between shapes, which is used by the Bullet engine to improve the reliability and performance of the collision detection. You may need to scale this value depending on the scale of your scene. This padding increases the size of the collision shape, so it is recommended to enable **Shrink Collision Geometry** to prevent the collision shape from growing.

This option is not available for **Plane** geometry representations.

Physical

Bounce

The elasticity of the object. If two objects of bounce 1.0 collide, they will rebound without losing energy. If two objects of bounce 0.0 collide, they will come to a standstill.

Friction

The coefficient of friction of the object. A value of 0 means the object is frictionless.

This governs how much the tangential velocity is affected by collisions and resting contacts.

### Ground

Add Ground Plane

None

No ground plane will be added.

Ground Plane

Adds a ground plane to the simulation.

Height Field

Adds a heightfield static object to the simulation.

Height Field

SOP path to the height field geometry.

Use Deforming Geometry

Enable deforming heightfield geometry.

Initial State

Ground Position

The location of the center of the ground plane.

Rotation

The rotation of the ground plane.

Physical

Bounce

The elasticity of the object. If two objects of bounce 1.0 collide, they will rebound without losing energy. If two objects of bounce 0.0 collide, they will come to a standstill.

Friction

The coefficient of friction of the object. A value of 0 means the object is frictionless.

This governs how much the tangential velocity is affected by collisions and resting contacts.

Dynamic Friction Scale

An object sliding may have a lower friction coefficient than an object at rest. This is the scale factor that relates the two. It is not a friction coefficient, but a scale between zero and one.

A value of one means that dynamic friction is equal to static friction. A scale of zero means that as soon as static friction is overcome the object acts without friction.

### Forces

Gravity

The amount of force to apply to a unit-massed object. Because the force is scaled by the mass, objects will undergo this acceleration.

If your units are meters, seconds, and kilograms, `-9.81` is a good value for Earth’s gravity.

If your units are feet, seconds, and pounds, `-32` is a good value for Earth’s gravity.

Add Drag

Enable the [POP Drag DOP](https://www.sidefx.com/docs/houdini/nodes/dop/popdrag.html "A POP node that applies drag to particles.").

Drag

Wind Velocity

The speed which the particles will be dragged to.

If it is zero, they are dragged to a stop.

Otherwise, it defines a wind speed which the particles will accelerate to.

Air Resistance

How strong of an influence to have on the particle. Higher values will cause it to match the wind velocity faster. This is also used to do a weighted average when competing winds are applied to the same particle.

Ignore Mass

Ignores any `mass` on the input particles.

Since forces are stored as `force` rather than `accel` (acceleration), this is done by multiplying the `force` by the `mass` attribute. This will then be canceled out by the solver.

`airresist` will also be similarly multiplied.

Ignoring mass ensures that small pieces of an RBD object move at the same speed as big pieces. This makes for a more controllable simulation.

Use VEXpressions

Use VEX expressions to modify the drag parameters.

Add Drag Spin

Enable the [POP Drag Spin DOP](https://www.sidefx.com/docs/houdini/nodes/dop/popdragspin.html "A POP node that applies drag to the spin of particles.").

Drag Spin

Axis Relative to Particle’s Orientation

The provided goal axis will be rotated into the particle’s own reference frame. Thus a value of (0, 1, 0) will be up in the space of the particle rather than in world space.

Goal Axis

The desired axis for the particle to spin around in its rest state.

Goal Spin Speed

How fast (degrees per second) the particle should spin around the given axis when it has reached its rest state. If this is zero, it will drag the spin to a stop.

If it is positive, it will spin-up or down until it matches this.

Spin Resistance

How quickly the particle should match the goal spin speed.

Use VEXpressions

Use VEX expressions to modify the drag spin parameters.

## Constraints

### Constraints

Glue

See the [Glue Constraint Relationship DOP](https://www.sidefx.com/docs/houdini/nodes/dop/glueconrel.html).

Soft

See the [Bullet Soft Constraint Relationship DOP](https://www.sidefx.com/docs/houdini/nodes/dop/bulletsoftconrel.html).

Hard

See the [Hard Constraint Relationship DOP](https://www.sidefx.com/docs/houdini/nodes/dop/hardconrel.html " Defines a constraint relationship that must always be satisfied.").

ConeTwist

See the [Cone Twist Constraint Relationship DOP](https://www.sidefx.com/docs/houdini/nodes/dop/conetwistconrel.html).

Slider

See the [Slider Constraint Relationship DOP](https://www.sidefx.com/docs/houdini/nodes/dop/sliderconrel.html).

### Breaking Thresholds

Overwrite with SOP

This flag will re-import the network whenever it is set, allowing a completely animated constraint behavior.

Breaking

This controls the number of breaking conditions which can be run on various constraint groups.

Breaking

Constraint Names

Constraint names for which constraint breaking will be computed.

Note

Glue constraints are the only constraints that have implicit breaking so have not been added to the default constraint names.

Group

Constraint primitives to be evaluated for breaking.

Mode

Delete Constraints

Constraint geometry with attribute values above the specified threshold will be deleted.

Switch to Next Constraint

Constraint geometry with attribute values above the specified threshold will switch to their `next_constraint_name` if available or deleted.

At Frame

Break constraints at the specified frame.

From Frame

Breaking will only be evaluated from the specified frame onward.

Angle Threshold

The angle (in radians) beyond which a constraint will break.

Var

A percentage increase/decrease from the user base input.

For example, a threshold value with a value of `1000` and a variance set to `0.1` will result in values between `900` and `1100`, while a variance of `1` will result in values ranging from `0` to `2000`.

Scaling

Scales the threshold value by given attribute value.

Angle Attribute

The name of the attribute used to multiply the angle threshold with.

Update from Input

Updates the attribute value from the input constraint geometry. This allows for animating thresholds through geometry attributes for fine control.

Distance Threshold

The distance between anchor points beyond which a constraint will break.

Note

The `restlength` is subtracted from the constraint distance to avoid automatically breaking long constraints. In order to have a distance threshold relative to `restlength`, set the **Distance Threshold** to 1 + <factor>, enable scale by attribute, and set the **Distance Attribute** to `restlength`. For example, to automatically break constraints that stretch 10% of their length, set the distance threshold to `1.1`.

Force Threshold

The force beyond which a constraint will break.

Note

As of Houdini 18.0, glue constraints update the force attribute on the constraint geometry such as it represents the length of the delta between the 2 constrained pieces' forces, multiplied by their average mass. To break glue constraints based on force relative to their strength, set the force threshold to 1, enable scale by attribute, set Force Attribute to `strength`.

Impact Threshold

The impact beyond which a constraint will break.

Torque Threshold

The torque beyond which a constraint will break.

Plastic Flow Threshold

The linear plastic flow beyond which a constraint will break.

Note

Only available on soft constraints with linear plasticity enabled.

Angular Plastic Flow Threshold

The angular plastic flow beyond which a constraint will break.

Note

Only available on soft constraints with angular plasticity enabled.

Use VEXpression

Input VEX code to update or modify constraints. For example, to weaken a glue constraint’s strength based on applied force, `@strength = max(0, @strength - f@force);`

The bullet packed primitives are connected to the second input and the specified SOP geometry is connected to the third input.

VEXpression SOP Path

The path to the SOP geometry for use in the VEXpression snippet via its third input.

Evaluation Node Path

VEX functions like `ch()` usually evaluate with respect to this node. Enter a node path here to override where the path search starts from. This is useful for embedding in a digital asset, where you want searches to start from the asset root.

## Impacts

Add Impact Data

Enables the [Impact Analysis DOP](https://www.sidefx.com/docs/houdini/nodes/dop/impactanalysis.html "Stores filtered information about impacts on an RBD object. The shelf tool has no effect in the viewport, it just sets up nodes in the network to record the impact data.").

Add Impact Analysis

Enables the Impact Analysis DOP. Impact Data is available in the solver’s post-solve, whereas data from the [Impact Analysis DOP](https://www.sidefx.com/docs/houdini/nodes/dop/impactanalysis.html "Stores filtered information about impacts on an RBD object. The shelf tool has no effect in the viewport, it just sets up nodes in the network to record the impact data.") can be accessed in the pre-solve. This data does not get cleared and can lead to large increases in memory usage.

Time Threshold

The minimum amount of time (in seconds) between recorded impact points. Higher values give fewer impact points and bigger gaps in time.

Impact Threshold

The minimum amount of impact force for recorded impact points. Higher values only create points for stronger impacts and ignore weaker impacts.

Distance Threshold

The minimum distance between recorded impact points. Higher values give fewer impact points and bigger gaps in space.

Force Impact Object

Only create impact points for collisions with this DOP object.

Fetch Impacts

Create an object merge SOP to import the impact points.

## Guided Simulation

Use Guides

Enables simulation guiding.

Use Guided Neighbors

Enables using a minimum number of connected neighbors per guide cluster as a condition to break guiding. This helps prevent isolated pieces from remaining guided when all their direct neighbors within that guide cluster have broken free.

### Setup

Use Pre-Configured Setup

The guiding can be setup outside the RBD Bullet Solver using the [RBD Guide Setup SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdguidesetup.html "Sets attributes on packed fragments for the RBD Guide DOP.").

Group

The simulation geometry packed primitives to be guided.

Start Frame

The reference start frame where guiding attributes will be captured to the simulation geometry.

End Frame

End frame of the guide animation.

Release on End Frame

When the **End Frame** is reached, all pieces will be released from their guides.

Mode

Near Point

Guide names are based on proximity to guide pieces center of mass.

Near Surface

Guide names are based on nearest guide surface position.

Max Distance

Distance beyond which simulation geometry will not acquire a guide. When this value is `-1` no maximum is used.

Strength

Guide strength.

Distance to Strength

Multiply the strength based on distance to guide geometry.

Distance

Specify the minimum and maximum distance for the **Strength Multiplier**.

Strength Multiplier

The strength multiplier to use when the distance to the guide piece falls between the **Distance** min and max.

Blend

Add a blend attribute to the simulation pieces which will be multiplied by the global blend value.

Guided Neighbors

Ensure Neighbor

When a guided piece has no neighbors within its guide cluster, it will inherit the nearest piece’s guide target.

Points per Area

When finding pieces' neighbors, points are first seeded on the surface of all the objects. There must be enough points for close points to occur to detect close surfaces. This should be scaled down by the square of the geometry size. For example, if your geometry is 10× bigger, you should have 1/100 the points per area.

Search Radius

Specifies the maximum allowed distance when searching for nearby points.

Max Search Points

Specifies an upper limit on the number of nearby points that can be inspected. Lower numbers will improve performance, but run the risk that only points from the same piece will be detected rather than points on nearby pieces, causing neighbors to be missed.

Max Connections

Specifies an upper limit on the number of pieces that each seed point can be connected to. This may improve the detection of Adjacent Pieces from Surface Points. However, increasing this value will reduce performance.

Transfer Attributes

Attributes to transfer from the guide piece to the RBD pieces.

Use VEXpressions

Use VEX expressions to modify guiding strength and blend attributes.

### Constraints

Remove Intra-Guide Constraints

Deletes constraints between pieces belonging to different guide clusters.

Note

constraints between guided and unguided pieces are unaffected.

Group

Constraint geometry primitives to consider when removing intra-guide constraints.

### Simulation Settings

Method

Choose between a direct velocity (`v`) and angular velocity (`w`) update or a target velocity (`targetv`) and target angular velocity (`targetw`) update method to use when guiding.

Velocity

Updates `v` and `w` directly. This is the most precise way of guiding, however it can lead to jittering when collisions get in the way.

Target Velocity

Updates `targetv` and `targetw` attributes, used in combination with the **Air Resistance** and **Drag** parameters, to compute a force that will move the object towards the desired velocity and a torque that will move the object towards the desired angular velocity. This is more forgiving that the direct v and w updates and helps eliminate jittering as pieces are allowed to deviate further from their guided positions and orientations. The solver’s implicit drag option needs to be on for this to work properly.

Air Resistance

Specifies how important it is to match the target velocity (`targetv`) and target angular velocity (`targetw`).

Drag

This attribute is used to further scale the drag amount, when an object is dragged by the `targetv` and `airresist` attributes.

Blend

Blend amount to lerp guided velocity and angular velocity with natural velocity and angular velocity. Lowering this value results in a soft dampened spring-like constraint and can help reduce some jittering that may occur when guided velocities and angular velocities struggle with collisions.

Guide Release Thresholds

Instantaneous

Linear Threshold

When the distance between the computed guided position and the resulting post-solve position is greater than the linear threshold multiplied by guide strength, the piece will become unguided.

Angular Threshold

When the angle (in degrees) between the computed guided orientation and the resulting post-solve orientation is greater than the angular threshold multiplied by guide strength, the piece will become unguided.

Distance Threshold

When the difference between the distance of the guide piece to the bullet primitive and their distance at rest increases beyond the distance threshold multiplied by guide strength, the piece will become unguided.

Accumulated

Linear Threshold

When the accumulated distance between the computed guide position and the resulting post-solve position is greater than the distance threshold multiplied by guide strength, the piece will become unguided.

Angular Threshold

When the accumulated angle (in degrees) between the computed guide orientation and the resulting post-solve orientation is greater than the angular threshold multiplied by guide strength, the piece will become unguided.

Distance Threshold

When the accumulated difference between the distance of the guide piece to the bullet primitive and their distance at rest increases beyond the distance threshold multiplied by guide strength, the piece will become unguided.

Guided Neighbors

Minimum Neighbors

When the number of connected neighbors within the same guide cluster drops below this number, the piece will become unguided. Pieces with no guided neighbors at rest will be ignored.

Post-Guide VEXpression

Runs a VEX snippet after the guiding computation has occurred. This enables you to modify the computed velocity or target velocity for better control over the resulting guided behavior.

Use VEXpression

Enable the post-guide wrangle.

VEXpression Group

Only affect a group of bullet packed primitives. By default, the “__guided” group is selected to only affect primitives currently being guided.

VEXpression

Input VEX code to update or modify guided bullet packed primitives.

The guide geometry is connected to the second input and the input simulation geometry is connected to the third input.

Evaluation Node Path

VEX functions like `ch()` usually evaluate with respect to this node. Enter a node path here to override where the path search starts from. This is useful for embedding in a digital asset, where you want searches to start from the asset root.

## Advanced

Bullet World Scale

Scales the bullet world by this number and scales output geometry by the inverse of this number. This helps with issues that can arise with tiny pieces.

Simulation geometry attributes that are scale dependent are scaled accordingly (`density`, `velocity`, `accelmax`, `speedmin`, `speedmax`, `bullet_collision_margin`, `bullet_shrink_amount`).

Constraint geometry attributes that are scale dependent are scaled accordingly (`restlength`, `strength`, `plasticthreshold`). Forces and thresholds are scaled accordingly where applicable.

Warning

When scaling the bullet world, constraint VEXpressions are run in the scaled world, so geometry lookups will need to take that into consideration. Similarly, custom forces applied in the editable forces subnet will need to be aware of the scale.

DOP Network

Cache Memory (MB)

Specifies how much memory in megabytes can be consumed by the cache for this simulation. Once this limit is exceeded, old cache entries are deleted.

Substeps

The default timestep expression will use this parameter to control how many substeps the DOP simulation should perform every frame.

Bullet Solver

Sleeping Time

When an object’s speed has been below its linear and angular speed thresholds for this amount of time, the object is eligible to be deactivated and put to sleep. This can improve performance for simulations where there are some stationary objects.

Note

An object can only be put to sleep once any nearby objects and objects it is constrained to are also eligible to be put to sleep.

Contact Breaking Threshold

Distance threshold used by the Bullet engine when determining whether a cached contact point should be discarded. Adjusting this value according to the scene scale may also improve performance, as it influences the margin added to objects' bounding boxes.

Use Implicit Drag

Applies a more accurate damping for the drag described by the `targetv` and `airresist` [point attributes](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html#forceattributes), instead of applying it as an explicit force. This also affects how the `targetw` and `spinresist` attributes are applied for angular drag.

Constraint Solver

Constraint Solver

Specifies which constraint solver Bullet will use to resolve collisions and constraints. Both solvers parallelize the workload, but differ in the strategy they use to do so. **Parallel Gauss-Seidel (Islands)** will be faster in cases that involve many small “islands” of interacting objects (for example, a large number of small separate book stacks), whereas **Parallel Gauss-Seidel (Graph Coloring)** should perform better when such “islands” are few and large (such as a huge collapsing building).

Although results obtained with these solvers will generally not be identical, qualitative differences should be minor.

Randomize Constraint Order

Specifies that the constraints should be randomly reordered before each of the **Constraint Iterations**. This may improve stability, but incurs a minor performance hit.

Ensure Islands are Independent

Specifies that the solver should ensure that changes to an island of interacting objects (including adding, removing, or repositioning objects) do not cause other islands to produce different simulation results, unless those changes cause the objects to interact. Otherwise, the solver only guarantees that resimulating with the exact same input to the solver will produce the same results. Enabling this option may incur a minor performance hit, and may change the simulation results slightly.

Solve Tolerance

Allows the constraint solver to terminate before performing the full number of **Constraint Iterations** if it is close enough to the solution. Larger values can increase performance at the cost of accuracy.

Contact CFM

Increasing the CFM (constraint force mixing) parameter will make contact constraints softer, and may increase the stability of the simulation. Contact constraints may be violated by an amount proportional to this parameter times the force that is needed to enforce the constraint.

Contact ERP

Specifies what proportion of the constraint error for contact constraints will be fixed during the next simulation step. If ERP (error reduction parameter) is set to 0, constrained objects will drift apart as the simulation proceeds. If ERP is set to 1, the solver will attempt to fix all constraint error during the next simulation step (however, this may result in instability in some situations). A value between 0.1 and 0.8 is recommended for most simulations.

Split Impulse

Tries to make interpenetrating objects split without adding velocity (to keep objects from explosively flying apart).

Errors when solving positional and velocity constraints can introduce some extra energy to the system. Although this option removes most of the extra energy, it degenerates quality a little bit, in particular for stable stacking.

Penetration Threshold

**Split Impulse** only applies when objects interpenetrate by more than this distance. This number should be negative (representing less than 0 distance between the objects).

Split Impulse ERP

Overrides the **Error Reduction Parameter** for contact constraints where the penetration distance is within the **Penetration Threshold** and **Split Impulse** is enabled.

Output

Transfer Attributes

Transfer attributes to output simulation points.

Transfer to Geometry

Transfers the attributes listed above to the output geometry.

Transfer to Proxy Geometry

Transfers the attributes listed above to the output proxy geometry.

## Visualize

Display Visualization Geometry

Enables the display of the guide and visualization geometry.

Simulation Geometry

Show Geometry Representation

Displays the bullet geometry representation used by the solver.

Note

This can impact the performance of the simulation quite dramatically so is recommended to only use for debugging purposes at the start of the simulation.

Show Active (Green)

Displays active pieces as a green wireframe overlay.

Show Sleeping (Red)

Displays sleeping pieces as a red wireframe overlay.

Show Guided (Blue)

Displays guided pieces as a blue wireframe overlay.

Show Guide Capture

Displays the guided geometry transformed by the guide (no simulation). The hue represents the guide clusters, the value represents the strength attribute value. In this mode, the viewport inspector will display information about the guide.

Guide Capture Frame

Applies a timeshift to the guided capture geometry to visualize the guide influence at the given frame.

Guide Capture Blend

Displays the guided geometry transformed by the guide (no simulation). The hue represents the guide clusters, the value represents the blend attribute value.

Show Guide Neighbor Count

Displays the guide neighbor count as a ramp of colors from red to blue. Black represents no guide neighbors, white are pieces for which use guide neighbor count is disabled.

Constraints

Show Constraints

Enables the display of the constraint geometry.

Show Bullet Constraint Guides

Enables the display of the various Bullet constraints DOPs guide geometry.

Guide Radius

Controls the size of the Bullet constraints DOPs guide geometry.

Show Object Links

Enables the display of guide geometry connecting the constraint to the constrained objects.

False Color Mode

None

No color is applied to the constraint geometry.

Angle

A histogram is displayed in the upper left corner showing the range of angle values across the constraint geometry, with information about the minimum and maximum values. Constraint geometry is colored accordingly.

Angular Plastic Flow

A histogram is displayed in the upper left corner showing the range of angular plastic flow values across the constraint geometry, with information about the minimum and maximum values. Constraint geometry is colored accordingly.

Distance

A histogram is displayed in the upper left corner showing the range of distance values across the constraint geometry, with information about the minimum and maximum values. Constraint geometry is colored accordingly.

Force

A histogram is displayed in the upper left corner showing the range of force values across the constraint geometry, with information about the minimum and maximum values. Constraint geometry is colored accordingly.

Impact

A histogram is displayed in the upper left corner showing the range of impact values across the constraint geometry, with information about the minimum and maximum values. Constraint geometry is colored accordingly.

Plastic Flow

A histogram is displayed in the upper left corner showing the range of plastic flow values across the constraint geometry, with information about the minimum and maximum values. Constraint geometry is colored accordingly.

Torque

A histogram is displayed in the upper left corner showing the range of torque values across the constraint geometry, with information about the minimum and maximum values. Constraint geometry is colored accordingly.

Constraint Name

Information about the constraint names is displayed in the upper left corner showing the color assigned to each primitive with a given `constraint_name` attribute. Constraint geometry is colored accordingly.

Custom

A histogram is displayed in the upper left corner showing the range of user defined attribute values across the constraint geometry, with information about the minimum and maximum values. Constraint geometry is colored accordingly.

Attribute

Specify the float attribute name to display a histogram for and color the constraint geometry accordingly.

Additional Guides

Show Impacts

When impacts are enabled, displays the impact points as red spheres.

Show Ground

Display the ground geometry.

Show Collision

Display the collision geometry.

Show Collision Geometry Representation

Displays the collision geometry representation used by the solver.

Note

This can impact the performance of the simulation quite dramatically so is recommended to only use for debugging purposes at the start of the simulation.

Inspector

Attributes

Specify the list of attributes to display in the viewport through the inspector.

Font Size

Specify the font size for the inspector text.

Float Precision

Specify the float precision used to display attribute values.

## EXAMPLES

Load Launch

[GuidedRBDBulletSolver](https://www.sidefx.com/docs/houdini/examples/nodes/sop/rbdbulletsolver/GuidedRBDBulletSolver.html)Example for [RBD Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html) geometry node

This example demonstrates the use of the RBD Bullet Solver SOP guiding feature.

Load Launch

[KatamariDamacy](https://www.sidefx.com/docs/houdini/examples/nodes/sop/rbdbulletsolver/KatamariDamacy.html)Example for [RBD Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html) geometry node

This example demonstrates the use of the RBD Bullet Solver SOP with custom forces and dynamic constraint generation.

Load Launch

[MaterialFractureTutorial](https://www.sidefx.com/docs/houdini/examples/nodes/sop/rbdbulletsolver/MaterialFractureTutorial.html)Example for [RBD Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html) geometry node

This example contains a setup that is used in the tutorial seen here: destruction/tutorials/intro_to_mbd_1

Load Launch

[RBDAgeExample](https://www.sidefx.com/docs/houdini/examples/nodes/sop/rbdbulletsolver/RBDAgeExample.html)Example for [RBD Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html) geometry node

This example contains a setup that uses the age parameters(and Age-ing RBD feature)

Load Launch

[RBDBulletSolver](https://www.sidefx.com/docs/houdini/examples/nodes/sop/rbdbulletsolver/RBDBulletSolver.html)Example for [RBD Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html) geometry node

This example contains a number of various uses for the RBD Buller Solver SOP.

Load Launch

[RBDBulletSolverEmission](https://www.sidefx.com/docs/houdini/examples/nodes/sop/rbdbulletsolver/RBDBulletSolverEmission.html)Example for [RBD Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html) geometry node

This example demonstrates the use of the RBD Bullet Solver SOP emissions feature.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdcluster.svg) RBD Cluster](https://www.sidefx.com/docs/houdini/nodes/sop/rbdcluster.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdconfigure.svg) RBD Configure](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconfigure.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdconnectedfaces.svg) RBD Connected Faces](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconnectedfaces.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdconstraintproperties.svg) RBD Constraint Properties](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintproperties.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdconstraintsfromcurves.svg) RBD Constraints From Curves](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintsfromcurves.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdconstraintsfromlines.svg) RBD Constraints From Lines](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintsfromlines.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdconstraintsfromrules.svg) RBD Constraints From Rules](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintsfromrules.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdconvertconstraints.svg) RBD Convert Constraints](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconvertconstraints.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbddeformpieces.svg) RBD Deform Pieces](https://www.sidefx.com/docs/houdini/nodes/sop/rbddeformpieces.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbddisconnectedfaces.svg) RBD Disconnected Faces](https://www.sidefx.com/docs/houdini/nodes/sop/rbddisconnectedfaces.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdexplodedview.svg) RBD Exploded View](https://www.sidefx.com/docs/houdini/nodes/sop/rbdexplodedview.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdio.svg) RBD I/O](https://www.sidefx.com/docs/houdini/nodes/sop/rbdio.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdmaterialfracture.svg) RBD Material Fracture](https://www.sidefx.com/docs/houdini/nodes/sop/rbdmaterialfracture.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdpack.svg) RBD Pack](https://www.sidefx.com/docs/houdini/nodes/sop/rbdpack.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdpaint.svg) RBD Paint](https://www.sidefx.com/docs/houdini/nodes/sop/rbdpaint.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdunpack.svg) RBD Unpack](https://www.sidefx.com/docs/houdini/nodes/sop/rbdunpack.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/xformpieces.svg) Transform Pieces](https://www.sidefx.com/docs/houdini/nodes/sop/xformpieces.html)