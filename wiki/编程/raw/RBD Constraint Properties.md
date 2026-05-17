---
type: concept
title: RBD Constraint Properties
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "30ae9beb1351"
---
创建描述刚体约束的属性。
### Parameters
This SOP creates attributes on the input constraint geometry to describe the Bullet constraint types that they [represent](https://www.sidefx.com/docs/houdini/nodes/dop/constraintnetwork.html "Constrains pairs of RBD objects together according to a polygon network.").

## PARAMETERS

Constraint Group

The primitives in the constraint geometry to edit constraint attributes for.

Color

Indicates the radius of the sphere that appears at the constraint anchor positions in the viewport as guide geometry. Whether or not to display the anchor point depends on the constraint type.

Guide Scale

Guide geometry’s anchor widget scale for hard and soft constraints.

Action

Edit

Allows you to modify a subset of the constraints' attributes, when editing existing constraint primitives.

Set

Ensures the relevant attributes are authored for any of the supported constraint types, when creating constraint properties for the first time.

Constraint Properties

Constraint Type

Specifies the type of constraint (such as glue or soft) to use for the primitives in the **Constraint Group**.

Note

This parameter does not set attributes directly, but determines which parameters are relevant to streamline the UI.

Constraint Name

Specifies the **Data Name** of the constraint data (for example, the [Glue Constraint Relationship](https://www.sidefx.com/docs/houdini/nodes/dop/glueconrel.html)) to use in the DOP network.

Degrees of Freedom

Specifies whether the constraint affects position, orientation, or both. This does not apply to glue constraints, which work by simulating glued chunks together as a single object with a compound collision shape.

Switch Constraint Type When Broken

Specifies a different constraint type to switch to if the glue constraint is broken by the [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ").

Note

This parameter does not set attributes directly but determines which parameters are relevant to streamline the UI.

Next Constraint Type

Specifies the next type of constraint (such as glue or soft) to use for the primitives in the **Constraint Group** once the initial constraints are broken.

Note

This parameter does not set attributes directly but determines which parameters are relevant to streamline the UI.

Next Constraint Name

Specifies the **Data Name** of the constraint data (for example, the [Bullet Soft Constraint Relationship](https://www.sidefx.com/docs/houdini/nodes/dop/bulletsoftconrel.html)) to use in the DOP network once the initial constraints are broken.

Next Degrees of Freedom

Specifies whether the next constraint affects position, orientation, or both. This does not apply to glue constraints, which work by simulating glued chunks together as a single object with a compound collision shape.

Constraint Iterations

If greater than zero, overrides the number of iterations performed by the constraint solver for this constraint. If some groups of constraints require more iterations than others, this parameter can be used instead of globally increasing the number of iterations on the [solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ").

Disable Collisions

Disables collision detection between the constrained objects.

Glue

Strength

Specifies the strength of the glue bond. If the value is -1, the connection will never break.

Strength Variance

Randomly varies the strength of each glue bond.

Half-Life

The number of seconds for the glue impulse to decay by one half. Whenever a glued object gets hit, it accumulates a glue impulse force. This controls how fast that force decays.

Propagation Rate

Specifies how impulses from collisions spread across the [Constraint Network](https://www.sidefx.com/docs/houdini/nodes/dop/constraintnetwork.html "Constrains pairs of RBD objects together according to a polygon network."). The solver records impacts on the objects (basically the points of the constraint network). It then propagates those impulses around to the neighboring objects based on the constraint network, and then finally transfers the impulse onto the constraint (adding it to the impact attribute).

The propagation rate is clamped between `0` and `1`, and the propagation works like a weighted average where the object also propagates to itself with a rate of `1`. So if the constraint to a neighboring object also has a rate of `1`, then the impulse is evenly split with the neighboring object after 1 iteration.

For example, let’s say object A has two neighboring pieces (`B` and `C`), which have constraints with a propagation rate of `1.0` for `A-B` and `0.5` for `A-C`. If object `A` gets an initial impulse of `1000`, with one iteration the impulse on each object (the solver just accumulates this internally) should be A: 400, B: 400, C: 200. This is because the impulse is spread with a weighted average and weights 1 (`A` back to itself) 1 (`A-B`) and 0.5 (`A-C`). If you stop at that point and accumulate the object impulses onto the constraint’s impact attribute, you get `800` for `A-B` and `600` for `A-C`.

![](https://www.sidefx.com/docs/houdini/images/sop/glueconrel.jpg)

Propagation Iterations

Specifies the number of impact propagation iterations for the glue bond. If this value is less than zero, the global number of iterations will be used (which is specified by the `propagate_iteration` detail attribute on the [constraint network](https://www.sidefx.com/docs/houdini/nodes/dop/constraintnetwork.html#attributes)).

When a glued object is hit, its impact value is spread along the constraint network to other glue bonds. This allows distant glue bonds that are weak to be broken prior to nearer, strong bonds. The impact propagations is the number of rounds of propagation to do. Impulses will not travel more than this number of bonds each solve step.

Use VEXpressions

Use VEX expressions to modify constraint attributes.

Hard

Constraint Force Mixing

Increasing this value will make the constraint spongier, and may increase the stability of the simulation. The constraint may be violated by an amount proportional to this parameter times the force that is needed to enforce the constraint.

Error Reduction Parameter

Specifies what proportion of the constraint error will be fixed during the next simulation step. If ERP is set to 0, constrained objects will drift apart as the simulation proceeds. If ERP is set to 1, the solver will attempt to fix all constraint error during the next simulation step (however, this may result in instability in some situations). A value between 0.1 and 0.8 is recommended for most simulations.

## Angular Motor

Number of Motors

Specifies the number of axes that the angular motor is enabled for.

Axis 1

The direction of the first axis of rotation in the local space of the objects.

Axis 2

The direction of the second axis of rotation. This should be perpendicular to **Axis 1**. The third axis is calculated as the cross product of **Axis 1** and **Axis 2**.

Relative Angular Velocity

The target relative angular velocity around each of the enabled rotation axes.

Max Impulse

The maximum impulse that the solver is allowed to apply to enforce the target angular velocity. This controls the strength of the motor.

Use VEXpressions

Use VEX expressions to modify constraint attributes.

Soft

Stiffness

Specifies the strength of the force that attempts to match the transforms of the two anchors.

This value is equivalent to the frequency of a spring.

Damping Ratio

Specifies how much damping is applied to the motion. A value of 0 specifies no damping, and a value of 1 provides just enough damping to prevent oscillation. Values between 0 and 1 allow oscillation (with some damping), and values greater than 1 provide increasingly damped motion that has no oscillation.

This value is equivalent to the damping ratio of a spring.

Override Angular Stiffness and Damping Ratio

Specifies whether the linear and angular components of the constraint use the same **Stiffness** and **Damping Ratio**. This option should be enabled when using angular plasticity, since the rest position and orientation can change separately and produce corresponding changes to the linear or angular stiffness, respectively.

Angular Stiffness

A separate **Stiffness** value for the angular component of the constraint.

Angular Damping Ratio

A separate **Damping Ratio** value for the angular component of the constraint.

Enable Plasticity

Specifies whether linear plasticity is enabled for the constraint.

Rate

The rate at which the constraint’s rest length is adjusted to match its current state. A value of zero will disable plasticity for the constraint.

Threshold

The distance threshold at which plasticity will be applied to the constraint.

Ratio of Current Rest Length

Specifies whether the threshold should be a percentage of the constraint’s rest length, or an absolute distance.

Hardening

Controls how the **Stiffness** is modified as the rest length is adjusted based on the **Rate**. A value greater than 1 will increase the stiffness, and a value less than 1 will decrease the stiffness.

Enable Angular Plasticity

Specifies whether angular plasticity is enabled for the constraint.

Angular Rate

A separate **Rate** control for angular plasticity.

Angular Threshold

The angle threshold (in degrees) at which angular plasticity will be applied to the constraint.

Angular Hardening

A separate **Hardening** control for angular plasticity.

Use VEXpressions

Use VEX expressions to modify constraint attributes.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/booleanfracture.svg) Boolean Fracture](https://www.sidefx.com/docs/houdini/nodes/sop/booleanfracture.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdcluster.svg) RBD Cluster](https://www.sidefx.com/docs/houdini/nodes/sop/rbdcluster.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdinteriordetail.svg) RBD Interior Detail](https://www.sidefx.com/docs/houdini/nodes/sop/rbdinteriordetail.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/voronoifracture.svg) Voronoi Fracture](https://www.sidefx.com/docs/houdini/nodes/sop/voronoifracture.html)