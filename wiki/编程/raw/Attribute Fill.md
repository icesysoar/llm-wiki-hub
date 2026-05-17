---
type: concept
title: Attribute Fill
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "1266ddf1d9ba"
---
一个低级节点，可以解决边缘连接的点云上的一些偏微分方程的组合版本。
### Parameters
The Attribute Fill SOP can solve one of several partial differential equations on point attributes of the input geometry. Edge connections between points facilitate direct data exchange, and length of the edge determines strength of this connection. That is, this node actually solves combinatorial analogues of the respective equations, using the graph structure of the input mesh to discretize the differential operators. The supported equations are listed below.

Eikonal_ mode computes how long it takes to get to every point in the mesh. **Boundary Group** should contain the seed points: arrival at these points is fixed to time 0. **Speed Attribute** specifies how fast travel can take place across each point, larger values allowing for quicker travel.
    
Note
This mode is essentially running Dijkstra’s algorithm to find shortest paths. The weight of each edge is the distance between its points divided by speed at the originating vertex.
    
Poisson_ mode is useful for smoothly filling in an attribute, given its known values at points of the **Boundary Group**. You can optionally provide an **Attribute to Match**, and the node will attempt to make the output **Attribute** have similar rates of change across edges. When given an **Attribute to Match**, you can further specify the **Weight Attribute**. Where this attribute has larger values (close to 1), the **Attribute to Match** will act as a stricter guide, while smaller values (close to 0) indicate to the solver to be as smooth as possible.
    
_Diffusion_ mode is useful for capturing the spreading from higher values towards lower ones (similar to how heat diffuses). **Speed Attribute** in this mode should store the diffusion rate. If you provide a valid **Boundary Group**, its points will have their **Attribute** values fixed (this can make them act like, for example, a constant heat source). The diffusion mode solves a time-varying system, so a **Diffusion Time** must be given, with values spreading further when this **Diffusion Time** is larger.
    

## INPUTS

Input

A point cloud with edge connectivity to run the solve on.

## OUTPUTS

Output

Input geometry with updated **Attribute** values.

## PARAMETERS

Mode

This menu selects which equation is solved. **Eikonal** computes how long it takes to reach every point in the mesh from source points. **Poisson** is useful for smoothly filling in an attribute, given its known value at some points. **Diffusion** models the spreading of attribute values from higher to lower ones.

Attribute

Name of the point attribute to modify. Written values depend on the selected **Mode**. In **Eikonal** mode, the incoming attribute values are ignored. In **Poisson** mode, incoming values are only used for points in the **Boundary Group**. In **Diffusion** mode, incoming values of all points are used.

Speed Attribute

Name of the attribute holding “speed” at each point. In **Eikonal** mode, these values control travel speed when leaving the respective point. In **Diffusion** mode, this attribute determines diffusion rates. In both cases, larger values allow for more rapid exchange of data.

Attribute to Match

Name of the attribute for the **Poisson** solve to try and match. Values in the result will follow the rates of change of the **Attribute to Match** (that is, difference between two adjacent points in the results will be close to the difference in the values of their **Attribute to Match**)–as far as the incoming **Attribute** values in the **Boundary Group** permit this.

If this attribute is not provided, the node will attempt to find the least varying values that satisfy the prescribed values in the **Boundary Group**. That is, if the **Attribute to Match** has the same constant value for all points, the result will be identical to not providing this at all (assuming there is no **Weight Attribute**).

Weight Attribute

Name of the attribute storing the relative importance of following the **Attribute to Match** at each point. The solver will try harder to enforce the prescribed rates of change at points with larger values for the **Weight Attribute**.

Valid weight values are between `0` and `1`. The node will internally clamp the weight values to this range. If the effective weight values are all `1`, results will be identical to not supplying a **Weight Attribute**.

Boundary Group

A point group identifying the special source points. In **Eikonal** mode, points in this group are considered “seeds”: arrival time at these points is set to 0. In **Poisson** mode, **Boundary Group** contains points that have fixed, known incoming **Attribute** values. Finally, points in this group act like fixed sources in **Diffusion** mode. That is, the **Attribute** value is not allowed to change at these points, but these values will still affect the solve.

Note

Points that are disconnected from the **Boundary Group** by edges get the default value of **Attribute** in **Poisson** mode. In **Eikonal** mode, the value of **Unreachable Time** is written for such points.

Diffusion Time

The interval of time to simulate in **Diffusion** mode. A larger **Diffusion Time** will allow the **Attribute** values to spread further.

Note

The node will take a single implicit step of the requested size. You can “substep” the solve by taking several smaller steps by putting this node in a loop.

Unreachable Time

Points of the geometry that are not reachable by following edges from the **Boundary Group** get this value written for their **Attribute**. This parameter applies when **Mode** is set to **Eikonal**.