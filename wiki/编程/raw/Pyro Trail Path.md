---
type: concept
title: Pyro Trail Path
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "323f805f6590"
---
生成曲线，作为Pyro Trail Source节点的trails。
### Parameters
This node is a higher level tool to quickly generate pyro trail paths. It takes the incoming points and generates a cloud of points around them using the [Pyro Scatter From Burst](https://www.sidefx.com/docs/houdini/nodes/sop/pyroscatterfromburst.html "Generates a cloud of points around the input points suitable for pyro trails and particle simulations.") node, followed by a [Ballistic Path](https://www.sidefx.com/docs/houdini/nodes/sop/ballisticpath.html "Generates ballistic projectile paths from the incoming points.") node to generate the paths based on the scattered points, without the need of any particle simulation. If no input is provided, it creates trails shooting out from to the origin.
Tip
If you dive inside this node, some of the attributes can be changed on the generated points before they are used to generate the paths.
## Using the `time` attribute
Each point on the curve stores a `time` attribute, which always starts at `0` on the first point of each curve, and increases with each consecutive point on the curve, indicating the position of the projectile on the path at a given time.
Warning
This attribute is used by the [Pyro Trail Source](https://www.sidefx.com/docs/houdini/nodes/sop/pyrotrailsource.html "Creates points suitable for sourcing into pyro simulations to create trails for explosions.") node, so it must be preserved.
If you need to extract the point where the projectile is at a given time, use the [Extract Point From Curve](https://www.sidefx.com/docs/houdini/nodes/sop/extractpointfromcurve.html "Creates new points where an interpolated attribute has a certain value on a curve.") node with the **Distance Attribute** set to `time` and **Cut At** set to **Current Time**.
Since `time` starts at `0` for each path, you must offset its value if your timeline starts at a frame other than `1`.
For example, if you want to offset `time` manually to extract the projectile from the path starting from frame `1001`, do the following.
1.  Append an [Attribute Adjust Float SOP](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustfloat.html "Modifies floating point attribute values on the incoming geometry.") with the **Attribute Name** set to `time`.
2.  Make sure **Operation** is set to **Add**.
3.  Set the **Constant Value** to `1001`.
4.  Set the **Unit Settings** to **Time**, which will convert the value of `1001` into units of time.
    This will offset `time` attribute values by 41.666 for every point on the trails.
5.  Append an [Extract Point From Curve SOP](https://www.sidefx.com/docs/houdini/nodes/sop/extractpointfromcurve.html "Creates new points where an interpolated attribute has a certain value on a curve.") with the **Distance Attribute** set to **time** and **Cut At** set to **Current Time**. This will ensure to extract a point based on the `time` attribute using the global time.
Tip
You can manipulate the `time` attribute to slow down or speed up the projectile along its trajectory. For example, multiplying `time` values by 2 will uniformly slow down the flight.
## Using the `startframe` attribute
This node also creates a float type primitive attribute called `startframe`, which stores the frame number when the projectile is launched on the path. When `startframe` stores values other than 1, it must be combined with the `time` point attribute. [Pyro Trail Source](https://www.sidefx.com/docs/houdini/nodes/sop/pyrotrailsource.html "Creates points suitable for sourcing into pyro simulations to create trails for explosions.") will automatically do this combination if a primitive `startframe` attribute is found on the curves, making sure the trail source starts at the right time.
To combine the `startframe` attribute with the `time` attribute manually and extract the projectile from the path, do the following.
1.  Append an [Attribute Promote](https://www.sidefx.com/docs/houdini/nodes/sop/attribpromote.html "Promotes or demotes attributes from one geometry level to another.") node.
2.  Set the **Original Name** to `startframe`.
3.  Set the **Original Class** to **Primitive**.
4.  Set the **Promotion Method** to **First Match**.
    This will transfer the `startframe` attribute from curve primitives to their points.
5.  Append an [Attribute Adjust Float](https://www.sidefx.com/docs/houdini/nodes/sop/attribadjustfloat.html "Modifies floating point attribute values on the incoming geometry.") node with the **Attribute Name** set to `time`.
6.  Set **Adjust With** to **Attribute**.
7.  Make sure **Operation** is set to **Add**.
8.  Set the **Adjustment Attribute** to `startframe`.
9.  Set the **Unit Settings** to **Time**.
    For each point, this will convert the value of `startframe` from frames to seconds and add the result to `time`.
10.  Append an [Extract Point From Curve](https://www.sidefx.com/docs/houdini/nodes/sop/extractpointfromcurve.html "Creates new points where an interpolated attribute has a certain value on a curve.") node with its **Distance Attribute** set to **Time** and **Cut At** set to **Current Time**.
    This will ensure the extract a point based on `time` attribute using the global time.
## Customizing Trails
It is possible to generate trails for multiple bursts with one node. By default, all bursts will have the same properties, as set by the node’s parameters (such as **Initial Size**, **Direction**, etc.). To vary these properties for each burst, select the **Set Varying** option on the menu next to the corresponding parameter. This will use a different random value in the provided range for each input point. These generated random numbers are seeded with point numbers by default. To use a custom integer attribute instead, set **Randomization By** to **Seed Attribute**. This will ensure that randomized properties will remain the same for an input point even if points are shuffled or removed from the input, provided value of the **Seed Attribute** stays the same.
You can also manually override parameter values with attributes. For example, if the input geometry has a `pscale` point attribute, its values can be used instead of the global **Initial Size**. This allows you to finely control the size of each burst. To do this, the menu next to the corresponding parameter must also be set to **Use Attribute**.
Parameters that can be controlled by point attributes are listed in the table below.
Parameter Name
Range
Attribute Name
Attribute Type
Initial Size
0 to ∞
`pscale`
float
Direction
(-1,-1,-1) to (1,1,1)
`N`
vector
Number of Trails
0 to ∞
`copynum`
integer
Spread Start Angle
0 to 180
`spread_startangle`
float
Spread Angle
0 to 180
`spread_angle`
float
Azimuth Start Angle
0 to 360
`azimuth_startangle`
float
Azimuth Angle
0 to 360
`azimuth_angle`
float
Line Start
0 to ∞
`line_start`
float
Line Length
0 to ∞
`line_length`
float
Velocity Scale
0 to ∞
`vscale`
float
Drag
0 to ∞
`drag`
float
Mass
0 to ∞
`mass`
float
Start Frame
∞ to ∞
`startframe`
float
Trail Duration
0 to ∞
`life`
float
Speed Scale
0 to ∞
`speed`
float
## Collisions
This node is not able to handle colliders to the same level as a particle simulation. However, a basic clipping and a collision system has been created to handle simple use-cases. If you need more advanced collision handling, you need to run a particle simulation to obtain ballistic paths.
To make a particle simulation with the generated trail paths, do the following.
1.  Create [Pyro Scatter From Burst](https://www.sidefx.com/docs/houdini/nodes/sop/pyroscatterfromburst.html "Generates a cloud of points around the input points suitable for pyro trails and particle simulations.") node and change its parameters to match this node.
2.  Choose the **Simulated Trails** option from the **Quick Setup** dropdown menu on the [Pyro Scatter From Burst](https://www.sidefx.com/docs/houdini/nodes/sop/pyroscatterfromburst.html "Generates a cloud of points around the input points suitable for pyro trails and particle simulations.") node.
    This will generate a particle simulation setup that is converted into pyro trails.
## PARAMETERS
General
Group
The subset of the input geometry points to use for point cloud generation. Leave this blank to use all points.
Guide Display
Set this menu to **Distribution Guide** to visualize where trails can originate. This is determined by **Spread Angle**, **Spread Start Angle**, **Azimuth Angle** and **Azimuth Start Angle**.
Quick Setups
This menu lets you run some simple scripted setups to help with the most common tasks.
Single Input Point
Creates an [Add](https://www.sidefx.com/docs/houdini/nodes/sop/add.html "Creates Points or Polygons, or adds points/polys to an input.") node with a single point that is ready to be positioned where you need the explosion to happen.
Color by Start Frame
Creates an [Attribute Wrangle](https://www.sidefx.com/docs/houdini/nodes/sop/attribwrangle.html "Runs a VEX snippet to modify attribute values.") node upstream that helps you visualize the `startframe` point attribute over time to see when each input point is triggered.
Pyro Trail Source
Creates a [Pyro Trail Source](https://www.sidefx.com/docs/houdini/nodes/sop/pyrotrailsource.html "Creates points suitable for sourcing into pyro simulations to create trails for explosions.") node to generate source points from the trails. These points can be rasterized into volumes that can serve as sources for a pyro simulation.
Initialize
**Force Uniform** will set all parameter override menus to **Set Uniform**. This is useful if you want all scatter properties to be controlled by the parameter interface. **Use Attribute** will look for incoming attributes and corresponding parameters will be set to **Use Attribute**.
Additional Guides
Bursts usually disappear soon after their creation, which can makes it difficult to visualize them together with the trails. Turn this on to see pyro bursts as guides while displaying this node to help synchronize the animation of different elements. It can accept a white-space separated list of [Pyro Burst Source](https://www.sidefx.com/docs/houdini/nodes/sop/pyroburstsource.html "Creates points suitable for sourcing into pyro simulations to create explosions, muzzle flashes, shockwaves, and detonation rings.") nodes.
Fuse Input Points
When multiple input points are used for one explosion by the [Pyro Burst Source SOP](https://www.sidefx.com/docs/houdini/nodes/sop/pyroburstsource.html "Creates points suitable for sourcing into pyro simulations to create explosions, muzzle flashes, shockwaves, and detonation rings."), you usually only need one input point to generate the trails. Enabling this allows you to fuse all incoming points into one or fuse them together by matching attribute values of a custom attribute. When points are fused together, the `startframe` point attribute will be set to the minimum value of all fused point values, while direction (`N`) will be averaged.
None
No points will be fused together, all points will contribute to generate trails.
All Into One
All incoming points will be fused to a single point that will be used for trail generation.
By Attribute
Points that have the same value for **Match Attribute** will be fused into a single source.
Match Attribute
The attribute to control which points will be fused together. To fuse points together, they have to have the same attribute value. This must be an integer attribute.
Randomization By
Controls how the random selection is seeded for parameters that are using **Set Varying**. Topology changes on the input geometry can shift element numbers, causing a different random selection to be used. **Seed Attribute** lets you provide an integer attribute to make sure the random value is not dependent on element order.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Seed Attribute
The integer type attribute to use for random selection for parameters that are using **Set Varying**.
## Source
Shape
Shape
The trails can be launched in a spherical shape around the incoming points or along the burst’s direction (as set by **Direction**) when this is set to **Line**. Use **Sphere** if you want trails launching from the center of the explosion or **Line** when you want trails shooting out from the rising mushroom cloud.
**Sphere**
![](https://www.sidefx.com/docs/houdini/images/sop/pyro_scatter_from_burst_centric.svg)
**Line**
![](https://www.sidefx.com/docs/houdini/images/sop/pyro_scatter_from_burst_line.svg)
Initial Size
The starting size of the burst in which trails will be launched. A value of `1` means the diameter of the burst is roughly 1 unit.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Size Scale
Scales the existing `pscale` attribute by this amount when the menu is set to **Scale Attribute**. This allows you to quickly scale your burst without adjusting the attribute values.
Variation
Sets the maximum allowed variation. Sizes will be between `Initial Size - Variation` and `Initial Size + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Direction
The direction of the burst. You can change the direction to make the trails come out from the side of a building, for example.
When **Shape** is set to **Sphere**, this vector also corresponds to spread angle of `0`. When using **Line** (**Shape**), the **Direction** controls the line that shoots out trails.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation in degrees. The varied direction will spread out in a cone shape from **Direction**.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Shape Offset
Controls the random scattering of starting points for trails. Change this value to obtain different trails for the same set of shape parameters.
Trail Distribution
Number of Trails
The number of trails to generate per input point. Increase this parameter to create more trails.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. Trail counts per input point will be between `Number of Trails - Variation` and `Number of Trails + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Spread Start Angle
When **Shape** is set to **Sphere**, it sets the minimum angle the scattered points can spread out from the burst’s direction vector (as set by **Direction**). Set **Guide Display** to **Distribution Guide** to help visualize the given angle.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation in degrees. Start angles will be between `Spread Start Angle - Variation` and `Spread Start Angle + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Spread Angle
When **Shape** is set to **Sphere**, it sets the angle trails can spread from **Spread Start Angle** towards the opposite of burst direction (as set by **Direction**). Set this to `180` degrees on a node with default settings to make the trails shoot out in all directions. Set **Guide Display** to **Distribution Guide** to help visualize the given angle.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation in degrees. Spread angles will fall between `Spread Angle - Variation` and `Spread Angle + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Line Start
When **Shape** is set to **Line**, the trails are generated around a line representing the burst direction (as set by **Direction**). This parameter sets how far away this line should be created from its input point in world units.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation for **Line Start**. The generated values will be between `Line Start - Variation` to `Line Start + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Line Length
When **Shape** is set to **Line**, the trails are generated around a line representing the burst direction (as set by **Direction**). This parameter sets the length of the line in world units.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation for **Line Length**. The generated values will be between `Line Length - Variation` to `Line Length + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Azimuth Start Angle
Azimuth controls how trails are generated around the burst direction (as set by **Direction**), therefore you can use it to generate trails only on a desired side of the explosion. By default, the value of `0` will create trails on the +X axis and they are rotated around the burst direction vector counter-clockwise as the value increases.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation in degrees. The variation will be from `Value - Variation` to `Value + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Azimuth Angle
Azimuth controls how trails are generated around the burst direction (as set by **Direction**), therefore you can use it to generate trails only on a desired side of the explosion. Increasing this value will spread out the trails from the **Azimuth Start Angle** around the burst direction both clockwise and counter-clockwise. The value of `360` means that trails will be created all around the burst direction.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation in degrees. The generated values will be between `Azimuth Angle - Variation` and `Azimuth Angle + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Prune by Noise
Removes some of the trails based on a noise pattern. Use this to create more interesting trail patterns. When this checkbox is turned on, **Number of Trails** might need to be increased to compensate for the removed trails.
Size
Controls base feature size of the generated noise. The value applies to each axis.
Offset
The offset along the Y-axis. Change this value if the current noise pattern is undesirable.
Roughness
The scale increment between iterations of fractal noise. The higher the value, the larger the “jaggedness” added to the output.
Radius Along Length
When **Shape** is set to **Line**, this controls the radius in which the points can be scattered along the length of the line. When the ramp’s value is `1`, the radius is equal to **Initial Size**.
## Trail Generation
Velocity
Velocity Scale
Sets the length (magnitude) of the launch velocity for the trails. Increase this to make the trails shoot out faster and cover larger distances during their life time.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation for velocity scale. The generated values will fall between `Velocity Scale - Variation` and `Velocity Scale + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Top Spread Angle
Controls “verticality” of the paths for points further away from the center, when **Shape** is set to **Line**. The spread angle refers to the angle between the burst’s direction (as set by **Direction**) and a path’s starting velocity vector. Therefore, a spread angle of `0` will result in a path that’s aimed in the burst’s direction, and a spread angle of `90` will result in a path that starts out perpendicular to the burst’s direction. In the common case of **Direction** pointing away from **Gravity**, values near `90` will produce paths that are shooting out horizontally at the top of the emission line. Use the **+/-** button to quickly randomize the value per trail. The spread angle for the starting point of a path is fully determined by its distance to the burst center along the direction. When this distance is at **Line Start** or its sum with **Line Length**, spread angle will be set to **Bottom Spread Angle** and **Top Spread Angle**, respectively. The spread angle is linearly interpolated for distances between them.
Variation
Sets the maximum allowed variation in degrees. The generated values will be between `Top Spread Angle - Variation` and `Top Spread Angle + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Bottom Spread Angle
Controls “verticality” of the paths for points closer to the center, when **Shape** is set to **Line**. The spread angle refers to the angle between the burst’s direction (as set by **Direction**) and a path’s starting velocity vector. Therefore, a spread angle of `0` will result in a path that’s aimed in the burst’s direction, and a spread angle of `90` will result in a path that starts out perpendicular to the burst’s direction. In the common case of **Direction** pointing away from **Gravity**, values near 90 will produce paths that are shooting out horizontally at the bottom of the emission line. Use the **+/-** button to quickly randomize the value per trail. The spread angle for the starting point of a path is fully determined by its distance to the burst center along the direction. When this distance is at **Line Start** or its sum with **Line Length**, spread angle will be set to **Bottom Spread Angle** and **Top Spread Angle**, respectively. The spread angle is linearly interpolated for distances between them.
Variation
Sets the maximum allowed variation in degrees. The generated values will be between `Bottom Spread Angle - Variation` and `Bottom Spread Angle + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Enable Direction Noise
When this checkbox is turned on, it changes the direction of the trails based on a noise pattern. Use this to randomize and create more variation in the trail directions.
Amplitude
Sets the strength of the noise. Higher values will create more variation between the trails.
Size
Controls base feature size of the generated noise. The value applies to each axis.
Offset
The offset along the Y-axis. Change this value if the current noise pattern is undesirable.
Roughness
The scale increment between iterations of fractal noise. The higher the value, the larger the “jaggedness” added to the output.
Enable Length Noise
When this checkbox is turned on, it changes the length (magnitude) of the launch velocity for the trails based on a noise pattern. Increasing launch velocity makes the trails shoot out faster and cover more distance during their lifetime.
Scale Min
Sets how much of the launch velocity can be scaled down from its original length. The value of `1` means, that no velocities will be shorter than their original length.
Scale Max
Sets how much of the launch velocity can be scaled up from it’s original length. The value of `1` means, that no velocities will be longer than their original length.
Size
Controls base feature size of the generated noise. The value applies to each axis.
Offset
The offset along the Y-axis. Change this value if the current noise pattern is undesirable.
Roughness
The scale increment between iterations of fractal noise. The higher the value, the larger the “jaggedness” added to the output.
Limit Length
Limits the magnitude of the launch velocity. Use it to limit the minimum or the maximum launch speeds.
Limit Min
Limits the minimum launch speed.
Limit Max
Limits the maximum launch speed.
Ballistic Properties
Drag
Sets the air resistance for the projectiles. Higher values will result in faster loss of energy and shorter travel distance. A **Drag** of zero will produce a symmetric arc.
![](https://www.sidefx.com/docs/houdini/images/sop/ballisticpath_drag.jpg)
Pyro Trail Paths with **Drag** values from left to right : 3, 2, 1, 0.5, 0.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. Drag values will fall between `Drag - Variation` and `Drag + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Mass
Sets the mass for the projectile. Higher values will cause the projectile to more strongly resist drag and travel a longer distance.
![](https://www.sidefx.com/docs/houdini/images/sop/ballisticpath_mass.jpg)
Pyro Trail Paths with **Mass** values from left to right : 0, 0.5, 1, 2, 3.
![](https://www.sidefx.com/docs/houdini/images/sop/ballisticpath_dragmass.png)
Combined view of **Drag** (yellow) and **Mass** (green) values.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation. Projectile masses will be between `Mass - Variation` and `Mass + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Gravity
Sets the force that attracts the projectile towards the ground. Set all components to zero if you want straight trails, which are not affected by gravity.
FPS
The number of divisions in the path for every second of time. Usually one wants a division per frame, thus this is often related to your frames per second.
Substeps
Sets how many times to divide the trail into further segments. The larger the number, the more points will be created for each curve to help with post-deformations. You do not need to change this parameter from the default, if you do not intend to apply any post-deformation.
Start Frame
Start Frame
This node sets the `startframe` primitive attribute on the generated curves to indicate when each trail is to start. This parameter can be used to control timing of the projectiles. The `startframe` attribute gets set on the incoming points before the trails are seeded; therefore, all points created from the same input point will have the same start frame. Use **Offset per Point** to vary the start frame per scattered point. Use the button to the right of this parameter to visualize start frames for scattered points; grey points haven’t triggered at the current frame, while red ones have.
Note
As the float type `time` point attribute is used to tell where the projectile is on the path at a given time, the `startframe` attribute is combined with `time` when using [Pyro Trail Source](https://www.sidefx.com/docs/houdini/nodes/sop/pyrotrailsource.html "Creates points suitable for sourcing into pyro simulations to create trails for explosions.") following this node. Therefore you must make sure to preserve this attribute. For more information, see [Using the `time` attribute](https://www.sidefx.com/docs/houdini/nodes/sop/pyrotrailpath.html#timeattrib) and [Using the `startframe` attribute](https://www.sidefx.com/docs/houdini/nodes/sop/pyrotrailpath.html#startframeattrib).
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Start Frame Visualizer
When this is turned on, it colors trails that have not started as grey, and already started trails as red.
Offset
Offsets the existing `startframe` attribute by this amount when the menu is set to **Shift Forward** or **Shift Backward**. This allows you to quickly change the `startframe` attribute without needing to adjust the attribute value. This value sets `startframe` on the incoming points before the trails are generated, so all paths created from the same input point will have the same start frame.
Variation
Sets the maximum allowed variation. The generated values will cover the range from `Start Frame` to `Start Frame + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Offset per Point
Sets the maximum allowed start frame offset for each trail. You need to turn this on to vary the start frames for trails generated from the same input point. This will set the offset value as unit of frames, when you only need couple of frames as offset. However, if you need an offset longer than a few seconds, using **As Time Duration** might be a better alternative. **Random Distribution** will pick `startframe` values between `Start Frame` and `Start Frame + Offset per Point`, which can be useful when **Shape** is set to **Sphere**. Use **Along Direction** when **Shape** is set to **Line** to start the trails gradually along the burst’s direction (as set by **Direction**).
Offset per Point
Sets the maximum allowed start frame offset extension for each trail as unit of time. It might be easier to provide the offset as unit of time when the trails need to live longer than a few seconds.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Start Frame Over Length
When **Shape** is set to **Line**, this ramp allows you to start the trails that are closer to the burst center before ones that are further away. The left side of the ramp applies to trails that are the closest to the burst center, while the right side is for trails that are the furthest. When the ramp’s value is set to `0`, it will set `startframe` to the value given by **Start Frame**. When the ramp’s value is `1`, it will set `startframe` to `Start Frame + Offset per Point`.
Timing
Trail Duration
Sets the length of the trails in frames. Higher values produce longer trails.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Trail Duration
Sets the length of the trails in seconds. Higher values produce longer trails.
Variation
Sets the maximum allowed variation for **Trail Duration**. The generated values will be between `Trail Duration` and `Trail Duration + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Speed Scale
Sets how fast the projectile is moving on the trail path. Lowering this value will make the projectiles move slower, while increasing this value will make them move faster.
Click the ![](https://www.sidefx.com/docs/houdini/icons/BUTTONS/randomize.svg) randomization button on the right side of this parameter to randomize the value per incoming element. This will create/select a corresponding attribute adjust node to give you greater control over the parameter’s value.
Variation
Sets the maximum allowed variation for **Speed Scale**. The generated scales will be between `Speed Scale` and `Speed Scale + Variation`.
Seed
Controls the random selection for variation. Change this value if the current variation is undesirable.
Basic Collision
Clip Below Height
Turning on this checkbox lets you clip projectiles that fall below **Clip Height** on the Y-axis.
Clip Height
The height to use for clipping. Trajectories will terminate once the Y coordinate falls below this value.
Enable Static Collision
Turns on a basic collision detection system for the path to collide with objects.
Collision Geometry Path
The SOP path to the geometry the projectile paths need to collide with. If the geometry contains a `kill` primitive attribute that is set to `1`, trajectories will terminate when they hit that primitive; otherwise, they will bounce and continue.
Number of Bounces
The maximum number of allowed bounces for projectile paths. After this number of bounces, the path will terminate. Set this to `0`, if you want to eliminate all projectiles on the first collision hit.
Bounce
Specifies what fraction of the original speed is maintained on collision in the direction of the collision normal. A value of `1` will simply reverse this normal component of velocity, whereas smaller values will also reduce it. A value of `0` will kill the projectile upon collision.
Bounce Forward
Specifies what fraction of the original speed is maintained in the tangential plane of the collision. A value of `1` will leave the tangential velocity unaffected; a value of `0` will eliminate the tangential component of velocity after the collision.
## Output Attributes
Generic Attributes
Copy Input Attributes
Copies custom created point attributes from the input points to the generated trails. This will ignore copying all internally used attributes.
Attributes
Only copy attributes whose names match this pattern. The default `*` copies all attributes. This will ignore copying all internally used attributes.
Promote Input Attributes
When this checkbox is turned on, attributes will be promoted from input points to curve primitives that they generate.
Trail Id
The primitive attribute storing a unique id attribute for each generated path.
Trail Index
The primitive attribute storing the index number of the generated trails.
Launch Speed
The primitive attribute storing length of the velocity vector at the start of each trail.
End Time
The primitive attribute storing the time when the trail ends.
Randomization Attribute
When this checkbox is turned on, the `trailid` primitive attribute will be created to store the value used by the **Randomization By** parameter.
See also
!Pyro Trail Source#Pyro Trail Source Geometry
!Pyro Burst Source#Pyro Burst Source Geometry
!Pyro Scatter from Burst#Pyro Scatter from Burst Geometry
!Ballistic Path#Ballistic Path Geometry
!Extract Pointfrom Curve#Extract Pointfrom Curve Geometry