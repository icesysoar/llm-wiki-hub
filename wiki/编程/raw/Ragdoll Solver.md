---
type: concept
title: Ragdoll Solver
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "ee81206f0e06"
---
在目标骨架上运行一个布娃娃RBD模拟。
### Parameters
This node runs a ragdoll RBD simulation on the target skeleton. This node is also a wrapper around a DOP network to simplify the running of ragdoll solves.
The first input is the KineFX skeleton to solve.
The second input represents the constraint geometry as set up by the ![|50](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-ragdollconstraints.svg) [Ragdoll Constraints SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--ragdollconstraints.html "Builds a constraint network to hold a KineFX skeleton together during a ragdoll RBD simulation.").
The third input provides the collision shapes as set up by the ![|50](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-ragdollcollisionshapes.svg) [Ragdoll Collisions Shapes SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--ragdollcollisionshapes.html "Creates collision shapes for a KineFX skeleton to be used in a ragdoll RBD simulation.").
The fourth input is an optional geometry to act as a collider. This input must be in form of a valid packed geometry or RBD packed geometry as set up by a ![|50](https://www.sidefx.com/docs/houdini/icons/SOP/rbdpack.svg) [RBD Pack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdpack.html "Packs RBD geometry, constraints, and proxy geometry into a single geometry.") node, if the geometry has its own set of constraints.
You can dive into this node to add DOP nodes and apply custom forces.
Reset Simulation
Clears the entire simulation cache.
See [Dop Network](https://www.sidefx.com/docs/houdini/nodes/obj/dopnet.html " The DOP Network Object contains a dynamic simulation. ").
Start Frame
Specifies the frame at which the simulation will start cooking.
See [Dop Network](https://www.sidefx.com/docs/houdini/nodes/obj/dopnet.html " The DOP Network Object contains a dynamic simulation. ").
## Solver
Time Scale
Specifies the scale value (multiplier) for the time step used by the solver. This can create bullet-time like effects where the physics of the Bullet solver run at a different rate than the Houdini playbar. A value of 2 will cause objects to fall twice as fast, and a value of 0.1 will slow them to a tenth of the speed. This parameter can be animated.
Number of Substeps
Specifies the number of substeps for each simulation step. This is used by Bullet internally. Increasing this number increases the resolution of the simulation.
Tip
Increasing the number of substeps is one way to fix the problem of collisions not being detected for quickly moving objects.
Constraint Iterations
Specifies the number of constraint iterations used by the solver. The more iterations you use, the more accurate the constraint and collision handling is.
Enable Gravity
When on, gravity is applied to the skeleton.
Gravity
Specifies the amount of gravity force to apply to the skeleton along a given axis.
This parameter is only available when **Enable Gravity** is _on_.
Enable Bullet World Scale
When on, the constraint rest lengths are scaled.
Bullet World Scale
Specifies the scale value (multiplier).
### Ground Plane
Add Ground Plane
None
The ground plane is disabled.
Ground Plane
Adds a ground plane to the simulation.
Position
Specifies the location of the center of the ground plane.
Rotation
Specifies the rotation of the ground plane.
Height Field
Adds a height field static object to the simulation.
Height Field
Specified the SOP path to the height field geometry.
Use Deforming Geometry
When on, the geometry for the object is pulled from the chosen SOP at each timestep.
Bounce
Specifies the elasticity of the object. If two objects of bounce 1.0 collide, they will rebound without losing energy. If two objects of bounce 0.0 collide, they will come to a standstill.
Friction
Specifies the coefficient of friction for the object. A value of 0 means the object is frictionless.
This governs how much tangential velocity is affected by collisions and resting contacts.
### Collision Geometry
Initial Object Type
Specifies the initial state of the objects.
See [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects.").
Overwrite Constraints from SOP
When on, the constraints from the **Collision Geometry** input are imported on every time step.
Overwrite Attributes from SOP
When on, specifies a list of point attributes that are updated on each frame from the simulation geometry.
Overwrite Attributes from SOP
Specifies the names of the point attributes to update on each frame.
This parameter is only available when the **Overwrite Attributes from SOP** checkbox is _on_.
Density
Specifies the mass of an object as its volume times its density.
See [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects.").
Rotational Stiffness
When an object receives a glancing blow, it will often acquire a spin. The amount of spin acquired depends on the shape and mass distribution of the object, known as the inertial tensor. The **Rotational Stiffness** is a scale factor applied to this. A higher stiffness will make the object less liable to spinning, and a lower value will make it more ready to spin.
See [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects.").
Bounce
Specifies the elasticity of the object.
See [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects.").
Friction
Specifies the coefficient of friction of the object.
See [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects.").
Transfer Attributes
Specifies the listed attributes to be transferred to the output collision geometry.
## Ragdoll
Rest Pose Attribute
Specifies the name of the rest transform point attribute.
Note
In order for the solve to behave as expected, the **Rest Pose Attribute** has to be the same as the rest pose attribute used to configure the collision shapes, in the ![|50](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-ragdollcollisionshapes.svg) [Ragdoll Collision Shapes SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--ragdollcollisionshapes.html "Creates collision shapes for a KineFX skeleton to be used in a ragdoll RBD simulation.") node.
Clip Range
Read the frame range from the clipinfo detail attribute on the input geometry or set a custom range.
Frame Range
The custom frame range of the animation. When **Clip Range** is set to **Use clipinfo Detail Attribute**, this parameter is disabled. Use the action button on this parameter to populate it with values from the clipinfo detail attribute, from the scene frame range or from the playback frame range.
Allow Initial Violation of Limits
When on, if the rotation limits are initially violated, then the limits will not be enforced but further rotation will be prevented. This allows the objects to naturally move back within the rotation limits, instead of introducing sudden motion at the beginning of the simulation.
Overwrite Internal Constraints from SOP
When on, the ragdoll internal constraints are imported on every time step.
Overwrite External Constraints from SOP
When on, the ragdoll external constraints are imported on every time step.
Partial Ragdoll
Some points in the skeleton will be simulated, while others will follow the animation clip. For example, you can have the lower body animated by a walking clip, but the upper body can be ragdolled and react to hits from simulated objects.
Joints With Collision Shapes
All the points in the skeleton that have a collision shape will be simulated.
Custom Joint Group
Partial Ragdoll Group
Specifies which points to simulate.
Pin Root Collision Shapes
When on, pin constraints are created for the collision shapes that are at a beginning of a chain (and have no parent shape) in order to keep them attached to the skeleton.
### Stiffness
Enable Stiffness
When on, stiffness adds a certain resistance to the solver’s attempts to move points from their current orientation to their _target_ (animated or simulated) orientation.
Group
Specifies which points you want to become stiff.
Stiffness Value
Constant
The stiffness is the same for the duration of the simulation.
Ramp
Changes the stiffness value according to a ramp based on how long the skeleton has been affected by the simulation.
Stiffness
Specifies how much to resist changes to the current point rotations. A value between 0.2 (the default) and 0.5 appear as _stiff but not too stiff_. Values of 1 or more appear very stiff.
This parameter is only available when **Stiffness Value** is set to **Constant**.
Time Range
Sets the start and end times (in seconds) corresponding to the start and end of the ramp. For example, if you set **Time Range** to 0.0 and 5.0, the ramp will let you control the stiffness over the first 5 seconds of the simulation. Outside this range, the ramp will extend the first and last values.
This parameter is only available when **Stiffness Value** is set to **Ramp**.
Stiffness Scale
A scale (multiplier) on the value of the **Stiffness Ramp**.
This parameter is only available when **Stiffness Value** is set to **Ramp**.
Enable Stiffness Scale Attribute
Scale the **Stiffness** value by the specified point attribute.
Note
The point attribute must be a float between 0 and 1.
Stiffness Scale Attribute
Name of the point attribute to use for scaling the **Stiffness** value.
Stiffness Ramp
Sets the stiffness at each point during the simulation. You have to set up a **Time Range** and define the stiffness in just that range. Outside this range, the ramp extends the first and last values.
This parameter is only available when **Stiffness Value** is set to **Ramp**.
### Motors
Enable Motor
When on, a certain amount of effort is spent to make points follow the animation clip, however the points are still simulated and simulated forces can modify or overcome the motor effect.
Group
Specifies which points should be (partially) animated by the clip.
Strength Value
Constant
The motor strength is the same for the duration of the simulation.
Ramp
Changes the motor strength value according to a ramp and how long the skeleton has been affected by the simulation.
Motor Strength
Sets how much effort to spend making the points follow the clip. The default value of 10 is enough to overcome gravity but still allows collisions to overcome the motor. You can play with increasing or decreasing this value to get the effect you want.
This parameter is only available when **Strength Value** is set to **Constant**.
Correction Time
Sets how quickly or slowly (in seconds) it takes the solver to correct deviations from the target point rotations (such as after a collision). Lower values make the character _recover_ from impacts quickly, and higher values make impacts affect the character for longer.
Constraint Force Mixing
Increasing this value makes the motor component of the constraint softer. A small positive value can increase the stability of the simulation.
Time Range
The start and end times (in seconds) correspond to the start and end of the ramp. For example, if you set this to 0.0 and 5.0, the ramp lets you control the motor strength over the first 5 seconds of the simulation. Outside this range, the ramp extends the first and last values.
This parameter is only available when **Strength Value** is set to **Ramp**.
Strength Scale
Specifies a scale (multiplier) for the value of the Strength Ramp.
This parameter is only available when **Strength Value** is set to **Ramp**.
Enable Motor Strength Scale Attribute
Scale the **Motor Strength** value by the specified point attribute.
Note
The point attribute must be a float between 0 and 1.
Motor Strength Scale Attribute
Name of the point attribute to use for scaling the **Motor Strength** value.
Strength Ramp
Sets the motor strength at each point during the simulation. You have to set up a **Time Range** and define the strength in just that range. Outside this range, the ramp extends the first and last values.
This parameter is only available when **Strength Value** is set to **Ramp**.
### Transitions
Enable Transitions
When on, the current animation clip will transition to the ragdoll simulation based on specific criteria.
Type
Specifies what the criteria is for the transition. For example, object attribute, particle speed, time, and so on.
Object Bounds
Checks if the skeleton is bounded by an object.
Object SOP Path
Path to the bounding SOP object.
Check
Incoming
Transition when the skeleton goes inside the bounding shape.
Outgoing
Transition when the skeleton goes outside the bounding shape.
Continuous
Run the simulation as long as the skeleton is inside the bounding shape.
Object Attribute
Reads an attribute from the specified SOP object and performs a comparison.
Object SOP Path
Specifies the path to the object SOP to read the attribute from.
Attribute Name
Specifies the name of the attribute to read.
Search Radius
Sets the distance to search to find the closest point from the skeleton to the object.
Comparison
Specifies what type of comparison will be made: Less Than, Equal, or Greater Than.
Comparison Value
Specifies the value to compare the attribute against.
Object Distance
Checks the distance between the skeleton and the specified SOP object.
Object SOP Path
Specifies the path to the SOP object to calculate the distance to.
Distance To
Specifies how the distance is measured: measures the distance to the object’s centroid or finds the closest point.
Comparison
Specifies the type of comparison to be made: Less Than, Equal, or Greater Than.
Comparison Distance
Specifies the distance to compare against.
Object Distance (pointcloud)
Checks the distance between the skeleton and a point cloud.
Object SOP Path
Specifies the path to the SOP point cloud object to calculate the distance to.
Search Radius
Sets the distance to search to find the closest point from the skeleton to the object.
Comparison
Specifies the type of comparison to be made: Less Than, Equal, or Greater Than.
Comparison Distance
Sets the distance to compare against.
Object Raycast
Sends a ray along the **Reference Direction** from the root point of the skeleton and checks if it hits the object.
Object SOP Path
Specifies the path to the SOP object to intersect with.
Ray Direction
Orientation
Casts a ray in the direction the skeleton is currently facing.
Velocity
Casts a ray in the direction of the computed skeleton’s velocity
Reference Direction
Specifies the original direction of the skeleton. This will be transformed by the skeleton’s current orientation to determine the ray direction when **Ray Direction** is set to **Orientation**.
Raycast Length
Sets the maximum distance to look for a hit.
Raycast
Hit
Transition activates when the object is hit.
No Hit
Transition activate when the object is _not_ hit.
Speed
Compares skeleton locomotion speed against given value.
Angular Speed
When on, use angular speed in degrees per second.
Comparison
Sets which type of comparison should be made: Less Than, Equal, or Greater Than.
Speed
Sets the value to compare against.
Time
Compares the current scene time against a given value.
Units
Sets whether the **Playback Time** and **Random Offset** are specified in frames or seconds.
Comparison
Sets which type of comparison should be made: Less Than, Equal, or Greater Than.
Playback Time
Sets the value to compare against.
Random Offset
Sets the random amount that is added to the compared value.
Animated Parameter
Animates a parameter to create the transition.
Value
Specifies the value to be animated (int).
Custom VEXpression
Parameters
Specifies custom wrangle code to manipulate when the transition should start.
Inputs
The SOP geometry is cooked prior to running the VEX and the result will be wired to this input.
RBD Impact Data
RBD impact data greater than the threshold will activate the trigger.
DOP Impact Objects
Specifies which DOP objects should be considered for impacts.
Impact Threshold
Sets the magnitude of the impact that is required to activate the trigger.
Joint Group
Specifies which points to detect the impact for.
Locomotion
The locomotion data is used when **Transitions** is on and set to a **Type** that is meant to trigger when the skeleton is moving/rotating through the world. For example, **Transition Type** set to **Object Bounds** requires the skeleton’s locomotion in order to accurately calculate when the skeleton meets the bounds conditions.
Locomotion
Specifies the method that is used to determine the locomotion of the skeleton.
Existing Locomotion
The locomotion is obtained from the `__locomotion__` point of the skeleton. This point can be created by the ![|50](https://www.sidefx.com/docs/houdini/icons/CHOP/extractlocomotion.svg) [Extract Locomotion SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--extractlocomotion.html "Extracts translation and orientation from a character using a given input joint.") node.
Compute Locomotion
The locomotion of the skeleton is computed by this node.
Locomotion Source
Specifies the source of the locomotion of the skeleton.
Joint
A joint in the skeleton is used as a reference for extracting the locomotion.
Center of Mass
The joint at the center of mass of the skeleton is used as a reference for extracting the locomotion. This joint can be created by the ![|50](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-configurejoints.svg) [Configure Joints SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--configurejoints.html "Configures joint properties like local center of mass and transformation limits and creates a center of mass joint.") node.
This parameter is only available when **Locomotion** is set to **Compute Locomotion**.
Locomotion Joint
Specifies the joint in the input skeleton to use as reference for extracting the translation and orientation.
This parameter is only available when **Locomotion Source** is set to **Joint**.
COM Joint
Specifies the center of mass (COM) joint in the input skeleton to use as reference for extracting the translation and orientation.
This parameter is only available when **Locomotion Source** is set to **Center of Mass**.
Configuration Attribute
Specifies the name of the configuration point attribute from which to read the `mass` and `local_com` attributes from. See the ![|50](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-configurejoints.svg) [Configure Joints SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--configurejoints.html "Configures joint properties like local center of mass and transformation limits and creates a center of mass joint.") node.
This parameter is only available when **Locomotion Source** is set to **Center of Mass**.
Translation
Ground Plane
Specifies which plane acts as the ground plane.
Convert to In-Place
Sets from which axis to extract the translation from the character animation. Selecting an axis will remove the translation on that axis from the character animation and add it to the `__locomotion__` joint.
These parameter is only available when **Locomotion** is set to **Compute Locomotion**.
Orientation
Extract Orientation Around Up Axis
When on, extracts the rotational velocity around the Up axis of the character. The Up axis is deduced from the viewport orientation option.
Up Axis
Specifies which method to use when extracting the orientation around the Up axis.
Use Joint Orientation
Extracts the orientation by pulling out the Euler angles from the locomotion joint and using those to extract the orientation data around the chosen axis.
Direction Between Joints
Extracts the orientation by specifying an extra joint and drawing a direction vector between the locomotion joint and the joint specified in **Look At Joint**. This direction vector is then projected on the relevant plane and used to determine the orientation around the chosen axis.
Look At Joint
Specifies an extra joint that will act as the tip of the direction vector.
## Guide Geometry
Display Collision Shapes
When on, the guide geometry for the collision shapes appears in the viewport.
Display Constraint Geometry
When on, the guide geometry for the constraints appears in the viewport.
Guide Size
Controls the size of the Bullet constraint DOP’s guide geometry.
This parameter is only available when **Display Constraint Geometry** is _on_.
Display Ground Plane Geometry
When on, the guide geometry for the ground plane appears in the viewport.
Display Collision Geometry
When on, the guide geometry for the external collisions appears in the viewport.
## INPUTS
Input 1
Target Skeleton. The skeleton to run through the ragdoll simulation.
Input 2
Constraint Geometry. The constraint geometry belonging to the **Target Skeleton**.
Input 3
Collision Shapes. The collision shapes belonging to the **Target Skeleton**.
Input 4
Collision Geometry. Geometry to use as a collider in the simulation. This input must be in the form of packed geometry or RBD packed geometry like that which is set up by a ![|50](https://www.sidefx.com/docs/houdini/icons/SOP/rbdpack.svg) [RBD Pack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdpack.html "Packs RBD geometry, constraints, and proxy geometry into a single geometry.") node.
## OUTPUTS
Output 1
Target Skeleton. The input skeleton after the simulation.
Output 2
Collision Geometry. The collision geometry after the simulation.
See also
[Setting up ragdoll simulations for characters](https://www.sidefx.com/docs/houdini/character/kinefx/ragdoll.html)
 !Ragdoll Collision Shapes#Ragdoll Collision Shapes Geometry
 !Ragdoll Constraints#Ragdoll Constraints Geometry
 !Configure Joints#Configure Joints Geometry