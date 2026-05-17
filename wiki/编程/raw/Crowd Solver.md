---
type: concept
title: Crowd Solver
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "a5190c560abe"
---
根据代理人的转向力和动画片断更新代理人。
### Parameters
Controls how the agent’s velocity may be manipulated by the solver.
Max Force
Specifies the maximum force that may be applied to the agent. This parameter can be overridden by a `maxforce` point attribute.
Drag
Specifies the strength of a [drag](https://www.sidefx.com/docs/houdini/nodes/dop/popdrag.html "A POP node that applies drag to particles.") that is applied to the agent’s velocity.
Constrain by Max Turn Rate
If enabled, the **Max Turn Rate** and **Min Speed** parameters will be used to limit how quickly the agent’s velocity may change direction. This can prevent agents from sliding sideways or backwards when a strong force is applied.
Project Forces
If enabled, forces will be projected into the plane defined by the agent’s `up` vector. This can be used to prevent 3D forces from causing agents to move vertically.
### Orientation Update
Controls how the agent’s orientation is updated based on its `v` and `up` vectors.
Min Speed
Specifies the agent’s minimum speed before its orientation may change. This can prevent agents from spinning around while at a low speed.
Max Turn Rate
Specifies how quickly the agent may change its orientation (in degrees per second) by rotating about its up axis. This parameter can be overridden by a `maxturnrate` point attribute.
Constrain Turn Acceleration
When enabled, the agent’s turning will follow a damped angular spring where its acceleration varies based on the angle from the target direction and the current turn rate. This prevents sharp changes to the agent’s orientation or turn rate, while still allowing the agent to adjust quickly to large changes in its target direction. The **Max Turn Rate** and **Max Acceleration** parameters provide upper limits for the angular velocity and acceleration, respectively.
Turn Stiffness
Controls how quickly the agent accelerates based on the angle from its target direction.
Turn Damping
Specifies the damping for the angular spring. Larger values will avoid oscillation.
Max Acceleration
Specifies the maximum angular acceleration of the agent when turning.
Max Tilt Rate
Specifies how quickly the agent’s up vector can rotate (in degrees per second). This parameter can be overridden by a `maxtiltrate` point attribute.
Constrain Tilt Acceleration
When enabled, the agent’s tilting will follow a damped angular spring where its acceleration varies based on the angle from the target up vector and the current tilt rate. This can produce significantly smoother motion when, for example, adjusting the agent’s up vector to follow the terrain normal.
Tilt Stiffness
Controls how quickly the agent accelerates based on the angle from its target up vector.
Tilt Damping
Specifies the damping for the angular spring. Larger values will avoid oscillation.
Max Acceleration
Specifies the maximum angular acceleration of the agent when tilting.
Adjust Up Vector
Specifies how the solver should adjust the agent’s up vector during the simulation.
Unchanged
The solver will not modify the agent’s `up` point attribute.
Set Perpendicular to Velocity
Updates the up vector to remain perpendicular to the velocity vector. This may be useful for situations such as birds flying around in space.
Set to Terrain Normal
Updates the up vector to match the terrain normal. This requires that **Enable Terrain Projection** is enabled. This may be useful for situations such as insects crawling on walls.
Reference Direction
The agent’s axis which will be aligned to follow the velocity vector. For example, setting this to 1,0,0 will align the agent’s X-axis with its velocity.
Reference Up
The original up vector of the agent. This parameter is used along with the **Reference Direction** when updating the agent’s orientation.
### Locomotion Constraint
Provides advanced controls for how agents with a locomotive animation clip follow the motion specified by the clip’s locomotion channel.
Strength
Specifies how strong of an influence the locomotion channel’s target velocity has on the particle’s velocity (equivalent to the **Air Resistance** of a [drag force](https://www.sidefx.com/docs/houdini/nodes/dop/popdrag.html "A POP node that applies drag to particles.")).
Sim Influence
Reduces the effect of other forces in the crowd simulation on locomotive agents.
### Particle Update
Update Particles
Specifies whether the embedded POP solver is enabled. This should be disabled when using this solver as a microsolver.
Age Particles
The `age` attribute will be updated for each time step and the particles flagged for deletion if they exceed their `life` attribute.
Reap Particles
All particles with the `dead` attribute set to 1 will be deleted.
## Avoidance
Enable Avoidance Force
Enables a force that causes the agents to avoid each other based on their anticipated time to collision.
Guide
Controls if the guide geometry for this node should be shown.
Note
Even if it is enabled here, it can also be disabled by using the **Hidden** flag on the DOP Node.
Agent Group
Specifies a subgroup of agents that are affected by the avoidance force.
Weight
Specifies the [weight](https://www.sidefx.com/docs/houdini/crowds/weights.html "How the Houdini crowd solver decides which behaviors to apply to an agent at each time step.") of the avoidance force. Higher values will cause the avoidance force to take precedence over other forces.
Particle Scale Multiplier
The node uses `pscale` as the size of each agent/particle when calculating potential collisions. You can use this parameter to scale the value of `pscale` in the calculation, letting you allow agents/particles to be more or less tightly packed. This parameter can be overridden by a `pscalemultiplier` point attribute.
Force Scale
Scaling factor for the strength of the avoidance force.
Anticipation Time
How far into the future an agent will look for possible collisions (this uses current velocity to project the possible distance). The maximum distance for which an agent considers another agent as a neighbor is the minimum of the agent’s current speed multiplied by the Anticipation Time, and the Neighbor Distance.
Neighbor Distance
Maximum distance an agent searches for other nearby agents.
Max Neighbors
Maximum number of nearest neighbors to an agent to consider when computing the agent avoidance force.
## Look At
Controls how agents' heads are adjusted to look at targets created by [Agent Look At](https://www.sidefx.com/docs/houdini/nodes/dop/agentlookat.html "Defines a target that an agent can turn its head to look at.") nodes.
Enable Look At
Enables the head adjustment.
Agent Group
Specifies a subgroup of agents that are affected.
Eye Offset
An offset (in agent space) from the head bone position to the agent’s eyes.
Limit Head Turn Per Frame
If enabled, limits how far the agent’s head can rotate in a single frame. This causes the agent’s head to gradually turn towards the target. If disabled, the agent’s head will always look directly at the target position.
Adjust Immediately on Initial Frame
Specifies that the head should be adjusted immediately on the initial frame (if necessary), instead of being limited by the maximum turn rate.
Head Turn Angle
The maximum angle (in degrees) that the agent’s head can rotate by in a single frame if **Limit Head Turn Per Frame** is enabled.
## Terrain
Show Guide Geometry
Displays guide geometry indicating the positions of the lower limb joints and whether the feet are locked.
Scale
Adjusts the size of the guide geometry.
Locked Scale
Adjusts the **Scale** to indicate when the foot is locked.
Color
Specifies the color of the guide geometry. When foot locking is enabled, the ramp is used to indicate when the ankle and toe joints are locked or blending out of the locked position.
Enable Foot Locking
Prevents the ankle and toe from sliding when the foot should be planted. The channels specified on the [Agent Prep SOP](https://www.sidefx.com/docs/houdini/nodes/sop/agentprep.html "Adds various common point attributes to agents for use by other crowd nodes.") are used to determine when the foot should planted during the animation clip, as well as how to blend out of the locked position. This option also improves terrain adaptation for situations where the unadjusted foot position is above the terrain, since the solver can distinguish between when the foot should be planted and when the foot is actually supposed to be above the ground. This option may still be used if no terrain object is specified.
The optional `agentterrainadaptation_footdown` float array point attribute can be used to override the foot down values computed from the agent’s animation clips. The attribute is expected to contain a replacement foot down value for each entry in the `agentrig_footchannels` point attribute. This may be useful when applying terrain adaptation to cached agents.
Adjust Hips
Adjusts the position of the hips to ensure that legs are not over-stretched when planting feet on uneven terrain.
Hip Offset
Specifies an additional offset to shift the hips up or down.
Hip Shift Per Frame
Specifies how much the hips can be shifted by in a single frame. This can reduce sudden motion of the hips on uneven terrain.
Knee Damping Threshold (%)
When the distance from the upper leg to the target ankle position is greater than this percentage of the maximum leg length, the knee angle will be damped so that it smoothly approaches a 180 degree angle as the target ankle position is extended. This can prevent the knee from popping when the leg is almost fully extended.
Note
This can allow the leg to stretch slightly, as keeping the foot planted on the terrain is a higher priority.
Enable Terrain Projection
Projects the agent particles on the given terrain.
Agent Group
Specifies a subgroup of agents to apply terrain projection to.
Source
Specifies the source geometry for the terrain object (SOP path or DOP object).
Terrain Group
Specifies which primitives in the terrain geometry should be used for ray intersections.
Mode
Controls the direction of the agent projection.
Direction Vector
Use the vector specified by the **Direction** parameter.
Up Attribute
Use the agent’s `up` attribute.
Sampling Method
Specifies whether to cast a single ray from the agent’s point, or to cast a ray from each of the agent’s legs.
Sample From Agent’s Plane
When **Sampling Method** is **Foot**, projects the foot positions into the plane defined by the agent’s position and the **Direction Vector** before casting rays. This produces results that are consistent with the **Particle** sampling method if the agent is on flat terrain. If this option is disabled, the agent will be lowered by the average distance of each foot from the terrain.
Offset
Additional offset that will shift all agents up or down.
Stick to Deforming Geometry
Enabling this option will record the primitive number and UVW coordinates where the agent was projected onto the terrain. If the terrain geometry is deforming, this allows the solver to move the agent to the corresponding position on the deformed geometry at the start of the next frame.
Enable Terrain Adaptation
Adjusts the agents' legs to conform to the terrain.
Agent Group
Specifies a subgroup of agents to apply terrain adaptation to.
Enable Leaning
Specifies whether the agent’s back should be adjusted.
Lean Angle Per Frame
When navigating uneven terrain, the agent can lean forwards or backwards. This parameter specifies the maximum angle (in degrees) that the agent can tilt by in a single frame.
Backward Lean
Specifies how far (in degrees) the agent can lean backward.
Forward Lean
Specifies how far (in degrees) the agent can lean forward.
## Attributes
Provides options for creating attributes that may be useful when debugging a simulation.
Agent Speed
Creates an `agentspeed` point attribute that contains the agent’s current speed.
Agent Angular Speed
Creates an `agentangularspeed` point attribute that contains the agent’s current angular speed.
## Substeps
Time Scale
An overall scale applied to the actual timestep. This parameter can be animated.
Min Substeps
The POP solver will always enforce this minimum number of substeps.
This should only rarely need to be changed.
Max Substeps
The POP solver will not break the simulation down in to more substeps than this value.
CFL Condition
The CFL condition is a factor used to automatically determine what size substep the scene requires. The idea is to control the distance that a particle can travel in a given substep.
For example, when this parameter is set to 0.5, the solver will set the length of each substep such that no particle travels more than 50% of the size of the smallest particle in a substep.
Quantize to Max Substeps
Always use substeps that divide up the frame by **Max Substeps**. For example, if **Max Substeps** is set to 4, but the **CFL Condition** only requires 3 substeps, the solver will take frame steps of 0.25, 0.5, and 0.25. This option can be useful for re-using input geometry that has been cached to file at increments of 1/**Max Substeps**.
Frames Before Solve
Delays the actual simulation for a specified number of frames after the object creation. Steps such as terrain adaptation will still occur during these frames.
## EXAMPLES
Load Launch
[AnimatedStaticAgents](https://www.sidefx.com/docs/houdini/examples/nodes/dop/crowdsolver/AnimatedStaticAgents.html)Example for [Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html) dynamics node
This example file demonstrates how to set up “animated static” agents for the crowd solver. These agents follow SOP-level animation and can be used for avoidance or turned into ragdolls.
Load Launch
[CrowdHeightField](https://www.sidefx.com/docs/houdini/examples/nodes/dop/crowdsolver/CrowdHeightField.html)Example for [Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html) dynamics node
This example demonstrates using heightfields for terrain adaptation in the crowd solver, and for collisions against ragdolls in the Bullet solver.
Load Launch
[FollowTerrain](https://www.sidefx.com/docs/houdini/examples/nodes/dop/crowdsolver/FollowTerrain.html)Example for [Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html) dynamics node
This example demonstrates how to set up a crowd simulation where agents are oriented to follow the terrain normal.
Load Launch
[FootLocking](https://www.sidefx.com/docs/houdini/examples/nodes/dop/crowdsolver/FootLocking.html)Example for [Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html) dynamics node
This example demonstrates how to set up foot locking for an agent.
Load Launch
[PartialRagdolls](https://www.sidefx.com/docs/houdini/examples/nodes/dop/crowdsolver/PartialRagdolls.html)Example for [Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html) dynamics node
This example demonstrates how to set up a partial ragdoll, where a subset of the agent’s joints are simulated as active objects by the Bullet solver and the remaining joints are animated.
Load Launch
[PinnedRagdolls](https://www.sidefx.com/docs/houdini/examples/nodes/dop/crowdsolver/PinnedRagdolls.html)Example for [Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html) dynamics node
This example demonstrates how to set up constraints to attach a ragdoll to an external object, and how to use motors to drive an active ragdoll with an animation clip.
Load Launch
[Formation Crowd Example](https://www.sidefx.com/docs/houdini/examples/nodes/dop/crowdsolver/formationcrowd.html)Example for [Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html) dynamics node
Crowd example showing a changing formation setup
The setup creates an army of agents. There are two paths created. Middle part of the army starts moving and then splits into two formations. One goes to the left, the other groups keeps marching forward and slowly changes formation to a wedge shape.
To keep the agents in formation a custom geo shape is used. It’s points are used as goals for indiviudal agents. Using blendshapes the shape can change allowing for different formation changes. Dive inside the crowdsource object to see the construction.
Note
The animation clips need to be baked out before playing the scene. This should happen automatically if example is created from Crowds shelf. Otherwise save scene file to a location of your choice and click Render on '/obj/bake_cycles' ropnet to write out the files. The default path for the files is ${HIP}/agents.
Load Launch
[Stadium Crowd Example](https://www.sidefx.com/docs/houdini/examples/nodes/dop/crowdsolver/stadiumcrowd.html)Example for [Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html) dynamics node
Crowd example showing a stadium setup
The setup creates a stadium crowd. The rotating cheer_bbox object is used as a bounding box for the agents. When they are inside it it will trigger a transition from a sitting to a cheering state. After a few seconds the cheering crowd sits back down by transitioning into a sitting state.
Note
The animation clips need to be baked out before playing the scene. This should happen automatically if example is created from Crowds shelf. Otherwise save scene file to a location of your choice and click Render on '/obj/bake_cycles' ropnet to write out the files. The default path for the files is ${HIP}/agents.
Tip
To only see a section of the crowd for quicker preview there’s a switch node in /obj/crowdsource/switch_all_subsection. When 0 it will show all agents, when set to 1 will only show a small section.
Load Launch
[Street Crowd Example](https://www.sidefx.com/docs/houdini/examples/nodes/dop/crowdsolver/streetcrowd.html)Example for [Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html) dynamics node
Crowd example showing a street setup with two agent groups
The setup creates two groups of agents. The yellow agents are zombies which follow a path of the street. The blue agents are living pedestrians that wander around until they come into proximity of the zombies and then they swtich into a running state.
Triggers to change agent states are setup in the crowd_sim dopnet. The zombies group uses proximity to the stoplights and the color of the light to transition into a standing state when lights are red. The living group transition into a running state when they get close to the zombie agents.
Note
The animation clips need to be baked out before playing the scene. This should happen automatically if example is created from Crowds shelf. Otherwise save scene file to a location of your choice and click Render on '/obj/bake_cycles' ropnet to write out the files. The default path for the files is ${HIP}/agents.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/agent.svg) Agent Prep](https://www.sidefx.com/docs/houdini/nodes/sop/agentprep.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/state.svg) Crowd State](https://www.sidefx.com/docs/houdini/nodes/dop/crowdstate.html)