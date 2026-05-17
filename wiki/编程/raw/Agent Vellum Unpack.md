---
type: concept
title: Agent Vellum Unpack
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "dd6e8dad6a08"
---
从代理基元中提取几何图形，用于Vellum模拟。
### Parameters
This SOP unpacks [agent primitives](https://www.sidefx.com/docs/houdini/crowds/agents.html "About agents, the moving actors that make up a crowd simulation.") for Vellum simulations and provides several higher-level features on top of the [Agent Unpack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/agentunpack.html "Extracts geometry from agent primitives."), such as separating the simulation geometry from collision geometry and performing a pre-roll.

If the agent shape to be simulated contains a Vellum setup from the [Vellum Pack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/vellumpack.html "Packs Vellum geometry and constraints into a single geometry."), attributes on the simulation and constraint geometry will be updated to ensure correct behavior for agents that have been copied or transformed. This includes scaling the constraints' rest lengths for agents that have been scaled, and adjusting the point numbers for welds and attachment constraints when multiple agents are being unpacked.

## PARAMETERS

## Agents

Select By

Specifies how to select the agents that will be unpacked and simulated.

Group

Point or primitive group specifying the subset of agents to unpack.

Layer Names

Agents will be unpacked if at least one of their [current layers](https://www.sidefx.com/docs/houdini/crowds/agents.html#currentlayers) matches this pattern.

## Geometry

Select By

Specifies how to select the agent shapes that will be simulated. If the simulated shapes contain packed primitives with the `vellum_type` primitive attribute (i.e. from the [Vellum Pack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/vellumpack.html "Packs Vellum geometry and constraints into a single geometry.")), the simulation geometry and constraint geometry will be split into the first and second geometry outputs.

Layers to Simulate

The shapes in any agent layers matching this pattern will be unpacked as simulation and constraint geometry for the first and second outputs. Otherwise, layers will be unpacked as collision geometry for the third output.

The simulation layers will also be removed from the [current layers](https://www.sidefx.com/docs/houdini/crowds/agents.html#currentlayers) of the agents in the fourth output. This leaves the agents with only their non-simulation layers, so they can be merged with the final simulated geometry from the [Vellum Solver](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html "Runs a dynamic Vellum simulation.").

Shapes to Simulate

Any agent shapes matching this pattern will be unpacked as simulation and constraint geometry for the first and second outputs. Otherwise, the shape will be unpacked as collision geometry for the third output.

Delete Attributes

Specifies a list of attributes to delete from the unpacked geometry. This can be useful for removing attributes that are not needed for downstream operations, such as capture attributes.

Transfer Attributes

Specifies a list of attributes to transfer to the unpacked geometry. Computed point velocities will be transferred if both “v” and “w” point attributes exist and are specified.

Transfer Groups

Specifies a list of groups to transfer to the unpacked geometry.

## Pre-Roll

Vellum Start Frame

Specifies the start frame that will be used for the Vellum simulation. If this is earlier than the **Crowd Start Frame**, a pre-roll will occur.

Crowd Start Frame

Specifies the initial frame of the input agents.

Use Rest Clip

If enabled, the pre-roll will blend each agent from the pose specified by the **Rest Clip** and **Clip Time** to the agent’s pose at the **Crowd Start Frame**. Otherwise, the pre-roll will blend from the agent’s undeformed (rest) geometry to the deformed geometry at the **Crowd Start Frame**.

Rest Clip

Specifies the clip to use when **Use Rest Clip** is enabled.

Clip Time

Specifies the clip time to use when **Use Rest Clip** is enabled.

## OUTPUTS

Vellum Geometry

Geometry to be solved by the [Vellum Solver](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html "Runs a dynamic Vellum simulation.").

Constraint Geometry

Constraints to be used with the [Vellum Solver](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html "Runs a dynamic Vellum simulation.").

Collision Geometry

Collision geometry to be used with the [Vellum Solver](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html "Runs a dynamic Vellum simulation.").

Agents

The input agents, with the **Layers to Simulate** removed from their [current layers](https://www.sidefx.com/docs/houdini/crowds/agents.html#currentlayers).

## EXAMPLES

Load Launch

[SimpleCrowdCloth](https://www.sidefx.com/docs/houdini/examples/nodes/sop/agentvellumunpack/SimpleCrowdCloth.html)Example for [Agent Vellum Unpack](https://www.sidefx.com/docs/houdini/nodes/sop/agentvellumunpack.html) geometry node

This example demonstrates a simple workflow for simulating cloth on a crowd of characters using the Vellum solver.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/crowdassignlayers.svg) Crowd Assign Layers](https://www.sidefx.com/docs/houdini/nodes/sop/crowdassignlayers.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/agentlayer.svg) Agent Layer](https://www.sidefx.com/docs/houdini/nodes/sop/agentlayer.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/agentunpack.svg) Agent Unpack](https://www.sidefx.com/docs/houdini/nodes/sop/agentunpack.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/vellumconstraints.svg) Vellum Constraints](https://www.sidefx.com/docs/houdini/nodes/sop/vellumconstraints.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/vellumpack.svg) Vellum Pack](https://www.sidefx.com/docs/houdini/nodes/sop/vellumpack.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/DOP/vellumsolver.svg) Vellum Solver](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)