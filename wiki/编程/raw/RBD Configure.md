---
type: concept
title: RBD Configure
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "fe950ad5b3e8"
---
### Parameters
This SOP packs the input geometry and proxy geometry if unpacked, and creates attributes on the simulation geometry (the geometry if no proxy geometry available) to drive the [Bullet Packed objects](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects.") that they represent.
## RBD Configure SOP
The RBD Configure SOP lets you set up properties individually for different sets of RBD objects. The **Group** parameter allows you to select a group of pieces (such as wood pieces) and set up whether they're **Active**, **Animated**, **Deforming**, or **Sleeping**. It also lets you set up what type of collision shape they should use, how much collision padding there should be, any speed limitations etc.
The **Physical Attributes** controls are very useful, as there are many predefined density, friction, and bounce settings for different material types. For example, if your material **Type** is **Wood** , you can choose between: **Balsa Wood**, **Beech**, **Birch**, **Cedar**, **Mahogany**, **Maple**, **Oak**, **Pine**, or **Plywood**. This will automatically fill in the appropriate **Density**, **Friction**, and **Bounce** coefficients that you would get from engineering textbooks, which will give you a head start on getting results that are physically realistic to go along with the fracturing methods.
There are also many **Visualization** options for the properties you're setting up. For example, if you're setting up which pieces are active, you can choose to visualize the **Active** pieces. You can also change the **Bounding Type** to **Bounding Box** and enable the **Use Bounds** option to manually control which piece are active or not using a bounding box in the viewport.
![](https://www.sidefx.com/docs/houdini/images/destruction/active1.jpg)
There’s also a built in **Exploded Scale** parameter at the top of the viewport for exploding outwards for a more detailed visualization.
![](https://www.sidefx.com/docs/houdini/images/destruction/active2.jpg)
Note
You could alternatively use your own bounding geometry by connecting it to the 4th input of this node.
## PARAMETERS
## Visualization
Visualize
None
No visualization.
Active
If the active attribute is set, packed fragments with the active attribute set to `1` are displayed in green, `0` in black.
Animated
If the animated attribute is set, packed fragments with the animated attribute set to `1` are displayed in red, `0` in blue.
Deforming
If the deforming attribute is set, packed fragments with the deforming attribute set to `1` are displayed in red, `0` in blue.
Sleeping
If the `bullet_sleeping` attribute is set, packed fragments with the `bullet_sleeping` attribute set to `1` are displayed in red, `0` in blue.
Bounce
A histogram is displayed showing the range of bounce values and the corresponding colors on the geometry.
Density
A histogram is displayed showing the range of density values and the corresponding colors on the geometry.
Friction
A histogram is displayed showing the range of friction values and the corresponding colors on the geometry.
Rotational Stiffness
A histogram is displayed showing the range of `inertialtensorstiffness` values and the corresponding colors on the geometry.
Pinned
If the `__pin` attribute is set, packed fragments with the `__pin` attribute set to `1` are displayed in red, `0` in blue.
Exploded Scale
The amount to expand the visualized pieces. Each piece is moved proportionally to its distance to the center. A value of `1` will approximately double the size of the object.
## Units
Unit Mass (kg)
The intended mass scale for applying density.
Unit Length (m)
The intended length scale for applying density.
## Bounds
Bounding Type
Shape of bounding volume.
Size
Size of bounding volume.
Center
Center of bounding volume.
Rotation
Rotation of bounding volume.
## Attributes
Transfer Attributes
Specifies a list of attributes to transfer to the packed geometry.
Attributes
Attributes can be set on a subset of the incoming geometry using the **Group** parameter. This allows to set various attribute values to different subsets of the geometry with a single node.
Create Path Attribute
Assign “op:” followed by the full path to the RBD Configure SOP as the path attribute value to the newly created packed primitives.
Create Packed Fragments
When disabled, creates packed geometry instead of packed fragments. When emitting RBDs, packed geometry will perform better than packed fragments.
Group
The primitives in the simulation geometry to edit attributes for.
### Bullet Data
Add Active
Creates and sets the `active` attribute.
Active
Sets the `active` attribute to the specified value. Default is 1.
Use Bounds
Set the attribute value to the specified value to primitives within the specified bounds. Primitives outside the bounds will be set to the inverse value.
Add Animated
Creates and sets the `animated` attribute.
Animated
Sets the `animated` attribute to the specified value.
Add Deforming
Creates and sets the `deforming` attribute.
Deforming
Sets the `deforming` attribute to the specified value.
Add Sleeping
Creates and sets the `bullet_sleeping` attribute.
Sleeping
Sets the `bullet_sleeping` attribute to the specified value.
Add Enable Sleeping
Creates and sets the `bullet_want_deactivate` attribute.
Enable Sleeping
Sets the `bullet_want_deactivate` attribute to the specified value.
Add Sleep Linear Threshold
Creates and sets the `bullet_linear_sleep_threshold` attribute.
Sleep Linear Threshold
Sets the `bullet_linear_sleep_threshold` attribute to the specified value.
Add Sleep Angular Threshold
Creates and sets the `bullet_angular_sleep_threshold` attribute.
Sleep Angular Threshold
Sets the `bullet_angular_sleep_threshold` attribute to the specified value.
Add Geometry Representation
Creates and sets the `bullet_georep` attribute. Default is `convex hull`.
Geometry Representation
Sets the `bullet_georep` attribute to the specified value.
Note
When configuring collision geometry, use this to differentiate between various geometry representations that best fit each collider.
Add Collision Padding
Creates and sets the `bullet_collision_margin` attribute.
Collision Padding
Sets the `bullet_collision_margin` attribute to the specified value.
Add Shrink Amount
Creates and sets the `bullet_adjust_geometry` attribute to 1 and creates the `bullet_shrink_amount` attribute.
Shrink Amount
Sets the `bullet_shrink_amount` attribute to the specified value.
Add Collision Group
Creates and sets the `collisiongroup` attribute.
Collision Group
Sets the `collisiongroup` attribute to the specified value.
Add Collision Ignore
Creates and sets the `collisionignore` attribute.
Collision Ignore
Sets the `collisionignore` attribute to the specified value.
Add Min Activation Impulse
Creates and sets the `min_activation_impulse`.
Min Activation Impulse
Sets the `min_activation_impulse` to the specified value.
Add Speed Min
Creates and sets the `speedmin` attribute. Default is `-1` (no effect).
Speed Min
Sets the `speedmin` attribute to the specified value.
Add Speed Max
Creates and sets the `speedmax` attribute. Default is `-1` (no effect).
Speed Max
Sets the `speedmax` attribute to the specified value.
Add Spin Min
Creates and sets the `spinmin` attribute. Default is `-1` (no effect).
Spin Min
Sets the `spinmin` attribute to the specified value.
Add Spin Max
Creates and sets the `spinmax` attribute. Default is `-1` (no effect).
Spin Max
Sets the `spinmax` attribute to the specified value.
Add Acceleration Max
Creates and sets the `accelmax` attribute. Default is `-1` (no effect).
Acceleration Max
Sets the `accelmax` attribute to the specified value.
Add Angular Acceleration Max
Creates and sets the `angaccelmax` attribute. Default is `-1` (no effect).
Angular Acceleration Max
Sets the `angaccelmax` attribute to the specified value.
### Physical Attributes
Type
Select a predefined material type for material based density, bounce and friction presets.
Add Density
Creates and sets the `density` attribute.
Density (kg/m3)
The preset-based density displayed in kg/m3 unit.
User Density
Override the preset-based density, specified in kg/m3 unit.
Var
Denotes a percentage increase/decrease from the user base input. For example, a threshold value with a value of `1000` and a variance set to `0.1` will result in values between `900` and `1100`, while a variance of `1` will result in values ranging from `0` to `2000`.
Add Bounce
Creates and sets the `bounce` attribute.
Bounce
The preset-based bounce.
Note
The preset value is approximated and not physically accurate.
User Bounce
Override the preset-based bounce.
Add Friction
Creates and sets the `friction` attribute.
Friction
The preset-based friction.
Note
The preset value is generalized as friction is specified as a friction coefficient between 2 materials.
User Friction
Override the preset-based friction.
Add Rotational Stiffness
Creates and sets the `inertialtensorstiffness` attribute.
Rotational Stiffness
Sets the `inertialtensorstiffness` to the specified value.
### Constraints
Add Pin
Creates constraint geometry of length `0` configured to use a constraint of type set by **Type**. Creates and sets the `__pin` attribute to the specified value to drive a sop solver and force the pieces to stay in place.
Pin
When set to `0`, the objects will not be pinned and constraints will not be created. When set to `1`, the objects will be pinned in place and `Pin` constraints created.
Type
Hard (Deprecated)
Creates [Hard Constraints](https://www.sidefx.com/docs/houdini/nodes/dop/hardconrel.html " Defines a constraint relationship that must always be satisfied."). The constraint name is set to `Pin`.
Glue
Creates [Glue Constraints](https://www.sidefx.com/docs/houdini/nodes/dop/glueconrel.html). The target objects for the glue constraints are named `__gluepin/` followed by the name of the pinned pieces. These target pieces will be generated dynamically in the [RBD Bullet Solver SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html "Runs a dynamic Bullet simulation.") with no geometry representation.
Soft
Creates [Bullet Soft Constraints](https://www.sidefx.com/docs/houdini/nodes/dop/bulletsoftconrel.html).
### Emission
Add RBD Bullet Emit
Creates a `rbdbullet_emit` point attribute to control which pieces will be emitted and which pieces will be treated as regular RBDs with the [RBD Bullet Solver SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html "Runs a dynamic Bullet simulation.") when the **Emit** option is enabled. This allows you to mix regular RBDs, which can be animated/deforming with emitted RBDs.
RBD Bullet Emit
When set to `0`, the objects will be treated as regular, non emitted RBDs. When set to `1`, the objects will be treated as emitting RBDs and will emit on every frame they are connected to the [RBD Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html "Runs a dynamic Bullet simulation.").
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdmaterialfracture.svg) RBD Material Fracture](https://www.sidefx.com/docs/houdini/nodes/sop/rbdmaterialfracture.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/bulletsolver.svg) RBD Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/sop/rbdbulletsolver.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/assemble.svg) Assemble](https://www.sidefx.com/docs/houdini/nodes/sop/assemble.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/rbdpackedobject.svg) RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html)