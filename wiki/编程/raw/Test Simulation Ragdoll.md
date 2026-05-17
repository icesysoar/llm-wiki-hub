---
type: concept
title: Test Simulation Ragdoll
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "ecfd8974a1db"
---
提供一个简单的Bullet模拟，用于测试布娃娃的行为。
### Parameters
This asset contains a simple Bullet simulation for use while setting up the [collision geometry](https://www.sidefx.com/docs/houdini/nodes/sop/agentcollisionlayer.html "Creates a new agent layer that is suitable for collision detection.") and [joint limits](https://www.sidefx.com/docs/houdini/nodes/sop/agentconfigurejoints.html "Creates point attributes that specify the rotation limits of an agent’s joints.") of a ragdoll. This can be used to quickly observe how the ragdoll behaves under different settings.

## PARAMETERS

## Ragdoll

Display Collision Layer

Sets the agent’s current layer to be the same as its collision layer. This can be used to visualize the collision geometry used by the solver.

Number of Substeps

Specifies the number of substeps to be used by the [Bullet solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ").

Constraint Iterations

Specifies the number of constraint solver iterations to be used by the [Bullet solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ").

Initial Velocity

The initial velocity of the ragdoll.

Initial Angular Velocity

The initial angular velocity of the ragdoll.

Enable Gravity

Controls whether gravity is enabled. Disabling gravity can be useful when debugging situations where agents are initially violating their rotation limits.

Gravity

Specifies the acceleration due to gravity.

Ground Plane Position

The translation of the ground plane.

Ground Plane Rotation

The rotation of the ground plane.

## Constraints

Pin Root Collision Shapes

If there are multiple root collision shapes, pin constraints will be created to hold those objects together.

Pin Shapes With No Rotation Limits

If there is a shape whose joint did not have a rotation limit set, a pin constraint will be created to attach it to its parent.

Allow Initial Violation of Limits

If the rotation limits are initially violated, the limits will not be enforced but further rotation will be prevented. This allows the objects to naturally move back within the rotation limits, instead of introducing sudden motion at the beginning of the simulation.

Softness

Once an angle is greater than softness times the maximum angle, the constraint begins to take effect. Lowering the value of softness softens the constraint boundaries. However, values that are too small can cause a “popping” effect at the start of the simulation for joints that are near their rotation limits and are past the softness threshold.

Constraint Force Mixing

Increase this to make the constraint spongier, and potentially increase the stability of the simulation. The constraint may be violated by an amount proportional to the force required to re-establish the constraint, times this parameter.

Bias Factor

The rate at which the constraint corrects errors in position or orientation. A value of 1 will ensure that the constraint is always obeyed. It is recommended to keep bias between 0.2 and 0.5.

Relaxation Factor

The rate at which the angular velocity is changed by the constraint. A low value means the constraint will modify the velocities slowly, leaving the boundaries appearing softer.

Position CFM

Increase this to make the constraint spongier, and potentially increase the stability of the simulation. The position component of the constraint may be violated by an amount proportional to the force required to re-establish the constraint, times this parameter.

Position ERP

Specifies what proportion of the position error will be fixed during the next simulation step. A value between 0.1 and 0.8 is recommended for most simulation.

### Stiffness

Enable Stiffness

Stiffness adds a certain resistance to the solver’s attempts to move joints from their current orientation to the “target” (animated or simulated) orientation.

Group

A [named transform group](https://www.sidefx.com/docs/houdini/crowds/ragdoll.html#joint_groups) specifying which joints should become stiff. You can create joint groups in the agent setup network with the [Agent Transform Group SOP](https://www.sidefx.com/docs/houdini/nodes/sop/agenttransformgroup.html "Adds new transform groups to agent primitives.").

Stiffness Value

If this is “Constant”, the stiffness is the same for the duration of the state. You can choose “Ramp” to change the value according to a ramp based on how long the agent has been in the state.

Stiffness

When **Stiffness value** is “Constant”, how much to resist changes to the current joint rotations. A value between `0.2` (the default) and `0.5` read as “stiff but not too stiff”. Values of `1` or more will be very stiff.

Time Range

When **Stiffness value** is “Ramp”, the start and end times (in seconds) corresponding to the start and end of the ramp. For example, if you set this to `0.0` and `5.0`, the ramp lets you control the stiffness over the first 5 seconds the agent is in this state. Outside this range, the ramp extends the first and last values.

Stiffness Scale

When **Stiffness value** is “Ramp”, a scale on the value of the **Stiffness Ramp**.

Stiffness Ramp

Sets the stiffness at each point during the time the agent is in this state. Houdini can’t know how long the agent might be in this state, so you have to set up a **Time Range** and define the stiffness in just that range. Outside this range, the ramp extends the first and last values.

Constraint Force Mixing

Increasing this value makes the motor component of the constraint softer. A small positive value can increase the stability of the simulation.

## Simulation

Reset Simulation

Clears the entire simulation cache.

Sub Steps

Specifies how many substeps the DOP simulation should perform each frame.

Start Frame

Specifies the frame at which the simulation will start cooking.

Scale Time

Specifies a scale factor that relates global time to the simulation time for the DOP Network.

### Bullet Solver

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

Solve Tolerance

Allows the constraint solver to terminate before performing the full number of **Constraint Iterations** if it is close enough to the solution. Larger values can increase performance at the cost of accuracy.

Randomize Constraint Order

Specifies that the constraints should be randomly reordered before each of the **Constraint Iterations**. This may improve stability, but incurs a minor performance hit.

Ensure Islands are Independent

Specifies that the solver should ensure that changes to an island of interacting objects (including adding, removing, or repositioning objects) do not cause other islands to produce different simulation results, unless those changes cause the objects to interact. Otherwise, the solver only guarantees that resimulating with the exact same input to the solver will produce the same results. Enabling this option may incur a minor performance hit, and may change the simulation results slightly.

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

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/agentcollisionlayer.svg) Agent Collision Layer](https://www.sidefx.com/docs/houdini/nodes/sop/agentcollisionlayer.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/agentconfigurejoints.svg) Agent Configure Joints](https://www.sidefx.com/docs/houdini/nodes/sop/agentconfigurejoints.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/bulletsolver.svg) Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html)
### Parameters
