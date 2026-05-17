---
type: concept
title: Ballistic Path
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "3aaa049ff47d"
---
从入射点生成弹道弹丸路径。
### Parameters
This operator generates paths for ballistic projectiles. You can direct the path of a free-falling object using the velocity attribute on each incoming point in conjunction with the `life` point attribute. Alternatively, you can specify a target position in space to hit with certain criteria.
This is a low-level operator used by higher-level nodes, such as [Pyro Trail Path](https://www.sidefx.com/docs/houdini/nodes/sop/pyrotrailpath.html "Generates curves to use as trails for the Pyro Trail Source node.") , to provide more artist-friendly controls.
The generated paths are only approximations of the real physical behavior you could achieve with a particle simulation. Using this node has the benefit of providing faster iteration times as the path generation is time-independent, while giving you more directable controls over the projectiles.
Tip
Use [Pyro Scatter From Burst](https://www.sidefx.com/docs/houdini/nodes/sop/pyroscatterfromburst.html "Generates a cloud of points around the input points suitable for pyro trails and particle simulations.") to quickly generate source point for this node already containing velocity and `life` point attributes.
Note
If no incoming `v` attribute is present for velocity, a random upwards initial velocity will be generated. For more control over the initial velocity, use a [Point Velocity SOP](https://www.sidefx.com/docs/houdini/nodes/sop/pointvelocity.html " Computes and manipulates velocities for points of a geometry. ").
Likewise, if in targeted mode, the `targetP` attribute will be created with random positions.
There are two types of trails that come from explosions.
1.  _Ballistic Trails_ are long lived trails that are pulled down by gravity, creating arced paths.
    ![](https://www.sidefx.com/docs/houdini/images/sop/ballistic_trails.svg)
2.  _Straight Trails_ are short-lived trails that shoot out from the core of the explosion. These projectiles are ejected out of the blast with a force that dominates gravity; therefore, they have no arc. Usually they are thin trails, with hundreds of particles shooting out at once.
    ![](https://www.sidefx.com/docs/houdini/images/sop/straight_trails.svg)
## Output
This node outputs curve primitives. Each curve corresponds to an incoming point (where the curve starts), and each point of a curve represents a location in space where the ballistic projectile will be positioned at a certain time. This time value is stored in a point attribute called `time`. The [Extract Point from Curve SOP](https://www.sidefx.com/docs/houdini/nodes/sop/extractpointfromcurve.html "Creates new points where an interpolated attribute has a certain value on a curve.") can use this attribute to extract the position of the projectile as it moves along the path.
Every curve’s first point sets `time` to 0. You need to offset the `time` point attribute for every point on the curve to start the projectile at a later time.
To...
Do this
Start the projectile at a certain frame (for example, at frame 15)
1.  Create an [Attribute Adjust Float](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustfloat.html "Modifies floating point attribute values on the incoming geometry.") node, and attach your ballistic paths to it.
2.  Set **Attribute Name** to `time`.
3.  Set **Constant Value** to 15.
4.  Set **Unit Settings** to **Time**.
    This will convert the adjustment value of 15 from units of _frames_ to _seconds_ before offsetting the `time` value for every point on the curve curve.
5.  Append an [Extract Point From Curve](https://www.sidefx.com/docs/houdini/nodes/sop/extractpointfromcurve.html "Creates new points where an interpolated attribute has a certain value on a curve.") node.
6.  Set **Cut Attribute** to `time`.
7.  Change **Cut Value** from **Constant Value** to **Current Time**.
    This will extract points from the curve where the `time` attribute value is equal to the global time.
### Tips
-   You can deform the ballistic paths to give the projectiles more interesting trajectories. For instance, projectiles could spiral around the base path. You might need to increase the value of the **Substeps** parameter to create more points on the curve if you want to deform the path.
    ![](https://www.sidefx.com/docs/houdini/images/sop/curved_trails.svg)
-   You can manipulate the `time` attribute to slow down or speed up the projectile along its trajectory. For example, multiplying `time` values by 2 will uniformly slow down the flight.
## Collisions
This node is not able to handle colliders to the same level as a particle simulation. However, a basic clipping and a collision system has been created to handle simple use-cases. If you need more advanced collision handling, you need to run a particle simulation to obtain ballistic paths.
To...
Do this
Make a matching particle simulation with the generated ballistic paths.
1.  Create a POP Network.
2.  Insert an [Attribute Adjust Float](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustfloat.html "Modifies floating point attribute values on the incoming geometry.") before the popnet.
3.  Set **Attribute Name** to `mass`.
4.  Switch **Operation** to **Set Always**, and set **Constant Value** to be the same as **Mass** on this node.
5.  Insert another [Attribute Adjust Float](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustfloat.html "Modifies floating point attribute values on the incoming geometry.") before the popnet, and repeat steps 3 and 4 for drag.
6.  Append [POP Force](https://www.sidefx.com/docs/houdini/nodes/dop/popforce.html "A POP node that applies forces to particles.") and [POP Drag](https://www.sidefx.com/docs/houdini/nodes/dop/popdrag.html "A POP node that applies drag to particles.") nodes inside the POP network, and turn off **Ignore Mass** on the nodes.
7.  On the [POP Solver](https://www.sidefx.com/docs/houdini/nodes/dop/popsolver.html "A POP solver updates particles according to their velocities and forces."), set the **Update/Drag Exponent** to 1.
## PARAMETERS
General
Group
The subset of the input geometry points to use for path generation. Leave this blank to use all points.
Launch Method
Controls the nature of the generated trajectories.
Free
This will generate the path using only the incoming velocity and `life` point attributes. Velocity controls the direction and the initial launch speed/force, while `life` controls how long the ballistic path will exists.
Targeted
The ballistic path will try to hit the target position based on the selected criteria (set by **Targeting Method**).
Note
There is no valid ballistic path for some combinations of starting position, target location, and targeting parameters. In this case, a path is not generated.
Life
Sets how long the ballistic projectile will exist in seconds. Increase this value to make the projectile last longer. If the incoming geometry has a `life` point attribute, its value will be used instead of this parameter.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Target Position
The vector point attribute that is used for target position. If no attribute is given, a random target position will be generated.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Targeting Method
Specifies the targeting mode when **Launch Method** is set to **Targeted**. In all cases, the path will start at the value of `P` point attribute and end at the value of the attribute specified by **Target Position**.
Life
It will take **Life** amount of time to hit the target.
Height
Y-coordinate of the trajectory peaks at **Height**.
Height Plane
The trajectory will be tangent to the plane specified by **Plane Position** and **Plane Normal**.
Initial Angle
The trajectory will start by making the desired **Initial Angle** with the horizontal plane.
Target Angle
The trajectory will end by making the **Target Angle** with the horizontal plane.
Minimal Energy
The trajectory will hit the target with the shortest distance possible.
Life
Amount of time (in seconds) the projectile needs to reach its target (specified by the **Target Position** parameter). Increase this value to make the projectile reach its target later. If the incoming geometry has a `life` point attribute, its value will be used instead of this parameter.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Height
Highest point on the Y-axis that the projectile will reach. If the incoming geometry has a `height` point attribute, its value will be used instead of this parameter.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Plane Position
The position of the plane the projectile will touch. If the incoming geometry has a `hplaneP` point attribute, its value will be used instead of this parameter.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Plane Normal
The normal vector of the plane the projectile will touch. If the incoming geometry has a `hplaneN` point attribute, its value will be used instead of this parameter.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Initial Angle
The angle from the horizontal plane the projectile will make at the start position. If the incoming geometry has a `angle` point attribute, its value will be used instead of this parameter.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Target Angle
The angle from the horizontal plane the projectile will make at the target position. If the incoming geometry has a `angle` point attribute, its value will be used instead of this parameter.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Projectile Properties
These parameters influence how the projectile’s arc is generated. The generated paths are only approximations of physical behavior, therefore these parameters should be considered artistic controls.
Drag
Sets the air resistance for the projectile. Higher values will result in faster loss of energy and shorter travel distance. **Drag** of zero will produce a symmetric arc. If the incoming geometry has a `drag` point attribute, its value will be used instead of this parameter.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
![](https://www.sidefx.com/docs/houdini/images/sop/ballisticpath_drag.jpg)
Ballistic paths with **Drag** values from left to right : 3, 2, 1, 0.5, 0.
Mass
Sets the mass for the projectile. Higher values will cause the projectile to more strongly resist drag and travel a longer distance. If the incoming geometry has a `mass` point attribute, its value will be used instead of this parameter.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
![](https://www.sidefx.com/docs/houdini/images/sop/ballisticpath_mass.jpg)
Ballistic paths with **Mass** values from left to right : 0, 0.5, 1, 2, 3.
![](https://www.sidefx.com/docs/houdini/images/sop/ballisticpath_dragmass.png)
Combined view of **Drag** (yellow) and **Mass** (green) values.
Gravity
Sets the force that attracts the projectile towards the ground. Set all components to zero if you want straight trails, which are not affected by gravity.
FPS
The number of divisions in the path for every second of time. Usually you want a division per frame, so this is often related to your frames per second.
Substeps
Sets how many times to divide the ballistic path into further segments. Higher values will generate more points along the curve. A value of 1 should be sufficient to resolve the curve. If you want to apply post-deformation, increase the **Divisions** to ensure there are enough points to properly capture the deformation.
Basic Collision
Clip Below Height
Turning on this checkbox lets you clip projectiles that fall below **Clip Height** on the Y-axis.
Clip Height
The height to use for clipping. Trajectories will terminate once the Y-value falls below this value. If particles start below this height, they will be clipped when they fall below their initial height instead.
Enable Static Collision
Turns on a basic collision detection for the path to collide with objects.
Collision Geometry Path
The SOP path to the geometry the projectile paths need to collide with. If the geometry contains a `kill` primitive attribute that is set to 1, trajectories will terminate when they hit that primitive; otherwise, they will bounce and continue.
Number of Bounces
The maximum number of allowed bounces for projectile paths. After this number of bounces, the path will terminate. Set this to 0, if you want to eliminate all projectiles on the first collision hit.
Bounce
Specifies what fraction of the original speed is maintained on collision in the direction of the collision normal. A value of 1 will simply reverse this normal component of velocity, whereas smaller values will also reduce it. A value of 0 will kill the projectile upon collision.
Bounce Forward
Specifies what fraction of the original speed is maintained in the tangential plane of the collision. A value of 1 will leave the tangential velocity unaffected; a value of 0 will eliminate the tangential component of velocity after the collision.
Output
Copy Source Attributes
Copies incoming point attributes onto the generated projectiles.
Attributes
The list of incoming point attributes to copy onto the projectiles.
Promote Attributes
Sets if the incoming point attributes (determined by **Attribute**) should be promoted to primitive attributes. These attributes are copied to the output points, when this is checkbox is turned off.
Velocity
Multiplier applied to the exported velocity point attribute (`v`).
Path Number
Creates a primitive attribute storing the primitive number of each projectile, starting at 0. This can serve as an ID attribute in case primitives are subsequently shuffled or removed.
Number of Points per Path
Creates a primitive attribute storing the number of points for each curve.
Path Point Index
Creates a point attribute storing the point number index with respect to its path. The first point on each path will have a value of 0.
Launch Speed
Creates a primitive attribute storing the speed at the start of the trajectory.
End Time
Creates a primitive attribute storing the `time` attribute value of the last point of the curve.
Relative Position
Creates a point attribute storing the relative point number for each point along the curve. The first and last point of each path will have relative positions of 0 and 1, respectively.
## INPUTS
Points for Ballistic Paths
Points with velocity (`v`) and life (`life`) attributes (for use in **Free** launch mode), or a target position (`targetP` by default) attribute.
See also
!Pyro Scatter from Burst#Pyro Scatter from Burst Geometry
!Pyro Trail Path#Pyro Trail Path Geometry
!Pyro Trail Source#Pyro Trail Source Geometry