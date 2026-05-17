---
type: concept
title: GraphColor
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "e646f3e99411"
---
为没有接触的组件赋予唯一的整数，相互接触的组件都是不同的整数
## Parameters
The Graph Color SOP assigns an integer value to each point or primitive. The coloring is built so that points or primitives that are directly connected will not have the same color.
Note
Graph coloring is a hard problem, so this does not attempt an exact solution.
Graph colorings can be very useful for OpenCL algorithms as they can split the polygons and points into non-overlapping groups that can be operated on in parallel.
### PARAMETERS
Color Attribute
The integer attribute to create, if missing, and initialize to the color value.
Connectivity
How to determine if two points or two primitives are connected. This also implicitly determines if the attribute is a point or primitive attribute.
Primitive
Two primitives are connected if they have any point in common. A primitive attribute is created.
Point
Two points are connected if they both belong to the same primitive. A point attribute is created.
Polygon Edge
Two primitives are connected if they have a shared edge. This applies only for closed polygons. A primitive attribute is created.
Note that the “map coloring” problem corresponds to this mode.
Sort Output by Color
Sort the geometry so contiguous blocks have the same graph color.
Create Workset Attributes
Create a pair of detail attributes suitable for the OpenCL SOP to run over the groups in multiple passes using the workset mode.
Worksets Begin Attr.
This array attribute stores the index of the start of each unique color in the graph.
Worksets Length Attr.
This array attribute stores the number of each unique color in the graph.
Max Iterations
The greedy graph coloring algorithm usually terminates will before this number of iterations, so this acts mostly as an upper bound in case something goes wrong.
Max Valence
Highly connected meshes, such as long hairs or tetrahedral meshes, may result in a very large number of adjacent elements. Building the internal `__neighbor` list may then overflow available RAM even if the number of elements is small.
The default value of 20 ensures long hairs will switch to a slower sequential algorithm. However, dense tetrahedral meshes will have a low valence but still a very high interconnectivity, so may require setting this to 0 to force a sequential approach on all elements.
### EXAMPLES
Load Launch
[FindNonInteractingAgents](https://www.sidefx.com/docs/houdini/examples/nodes/sop/graphcolor/FindNonInteractingAgents.html)Example for [Graph Color](https://www.sidefx.com/docs/houdini/nodes/sop/graphcolor.html) geometry node
This example demonstrates how the Graph Color SOP can be used to partition a crowd into groups of agents that did not interact with each other (based on a collision radius) during the simulation. When adding secondary cloth simulations to a crowd, this can be useful for avoiding unwanted collisions from nearby agents.