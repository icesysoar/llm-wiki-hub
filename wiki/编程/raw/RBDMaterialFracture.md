---
type: concept
title: RBDMaterialFracture
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "3223e4d85ffd"
---
根据材料类型对输入的几何体进行断裂。
### Parameters
这个节点允许你根据特定类型的材料来精确地断裂几何体。目前支持混凝土、玻璃板和木材。
它接受四个输入：几何体、约束几何体、代理几何体，以及一个用于控制断裂过程的额外点的可选输入。它将根据**材料类型**参数中指定的材料，使用不同的压裂方法对输入的几何体进行压裂。如果指定了一个输入的约束几何体，它将为断裂件更新约束。
-   [Concrete](https://www.sidefx.com/docs/houdini/nodes/sop/rbdmaterialfracture.html#concrete)
-   [Glass](https://www.sidefx.com/docs/houdini/nodes/sop/rbdmaterialfracture.html#glass)
-   [Wood](https://www.sidefx.com/docs/houdini/nodes/sop/rbdmaterialfracture.html#wood)
-   [Custom](https://www.sidefx.com/docs/houdini/nodes/sop/rbdmaterialfracture.html#custom)
See [fracturing objects for simulation](https://www.sidefx.com/docs/houdini/destruction/overview.html) for a guide to fracturing workflows and tools in Houdini.
#### Using different displays
The **Guide Geometry** parameter on the [RBD Material Fracture](https://www.sidefx.com/docs/houdini/nodes/sop/rbdmaterialfracture.html "Fractures the input geometry based on a material type.") node will allow you to switch between different displays. All materials have **Fractured Geometry**, which will display the group being fractured.
![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_concrete1.jpg) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_glass_none.jpg) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_wood_none.jpg) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_custom.png)
They also all have **Constraint Network**, which will display the internal constraint network of all fractured pieces.
![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_concrete_constraintnetwork.jpg) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_glass_constraintnetwork.jpg) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_wood_constraintnetwork.jpg) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_custom_constraintnetwork.png)
There are two concrete-specific displays: **Primary Volume** and **Edge Detail**. These views allow you to display the volume distribution for each primary fracture level used for scattering and display the boolean cutting planes used to generate the edge detail.
![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_concrete_primaryvolume.jpg) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_concrete_edgedetail.jpg)
There are also two glass-specific displays: **Concentric Noise** and **Edge Detail**. These views allow you to display the noise used for determining the discontinuity for concentric cracks and display the magnitude distribution of the edge noise.
![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_glass_CN.jpg) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_glass_EN.jpg)
The three wood-specific displays allow you to display the cutting planes for grains, cuts, and splinters.
![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_wood_grains.jpg) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_wood_cuts.jpg) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_wood_splinters.jpg)
There are three custom-specific displays: **Primary Volume**, **Cutter Geometry** and **Boolean Guide**. These views allow you to display the volume distribution for the built-in scattered cutter geometry, display the cutter geometry, and the cutter geometry with the edge detail noise.
![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_custom_volume.png) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_custom_cuttergeo.png) ![](https://www.sidefx.com/docs/houdini/images/dynamics/rbdmaterialfracture_custom_edgedetail.png)
#### PARAMETERS
Group
The geometry to be fractured. If no group is specified, the full input geometry will be fractured.
Material Type
The type of material of the incoming geometry.
Concrete
Concrete material type.
Glass
Glass material type. Only flat glass panel is currently supported.
Wood
Wood material type.
Custom
Custom cutters.
Fracture Namespace
Adds a namespace prefix to the name of each piece. This is useful for avoiding duplicated piece names or isolating a group of constraints.
Fracture per Piece
Loops through each piece in the input geometry and fractures them individually. If the **Piece Attribute** is not found, it will fracture based on connectivity.
Piece Attribute
The primitive attribute that defines each piece for partitioning.
Single Pass
Fractures a specific piece at the given index. This can be useful for debugging and testing using a single piece.
Random Seed
The seed used when adding random variation of the parameters for each piece.
Piece Prefix
The prefix applied to the name of each piece created by the fracture.
- will create pieces such as `piece0-0-0`, `piece0-0-1`, etc
_ will result in `piece0_0_0`, `piece0_0_1` etc
Reset Cached Pass
Resets the currently cached display in the for loop. Use this to update the guide geometry if it is not displaying the current geometry.
#### Concrete
Guide Geometry
None
No guide geometry.
Fractured Geometry
The group that is currently being fractured will be highlighted.
Primary Volume
Displays the volume distribution for each primary fracture level used for scattering.
Edge Detail
Displays the cutting planes used to generate the edge detail.
Constraint Network
Displays the constraint network of all pieces.
##### Primary Fracture
Enable Fracture
Turning off this checkbox will bypass this fracture level.
Fracture Level
The number of levels of recursive fracturing to perform.
Fracture ID
The fracture ID for this fracture level. The output attributes and groups associated with this fracture level will have this tag.
Fracture Ratio
The ratio of all the pieces from the previous level to fracture at this level.
Fracture Seed
The random seed to determine which pieces will or won’t be fractured when fracture ratio is lower than 1.
Connectivity Partition
None
Do not further partition pieces into groups by connectivity.
Overwrite Piece Numbering
Turning on this option will further divide the pieces into separate, connected groups of geometry. Normally each input cell point will create one output piece. However, with concave objects this can mean that disconnected pieces of geometry are placed in the same piece. This option allows the piece numbers to be overwritten by this operation, which is fast and acceptable if you don’t need the piece numbers to match the input point numbers.
Cell Points
Scatter From
Volume
Scatters points based on the fog volume generated.
Attribute
Scatters points based on the specified point attribute in the incoming geometry. For example, the [RBD Paint SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdpaint.html "Paints values onto geometry or constraints using strokes.") can be used to paint a `density` attribute on the geometry.
Attribute Name
The name of the point attribute to use as a density attribute when scattering points.
Scatter Points
The number of points to scatter.
Scatter Points Scaling
None
Do not affect the number of scattered points.
Scale by Piece Volume
Multiplies the number of scattered points by the piece’s volume.
Note
This is only available with the **Concrete** material.
Large pieces can generate a lot more points. Use the **Remap Range** option for better control over the total number of points being generated.
Scale by Max Axis Length
Multiplies the number of scattered points by the piece’s bounding box’s maximum axis length.
Note
This is only available with the **Concrete** material.
Large pieces can generate a lot more points. Use the **Remap Range** option for better control over the total number of points being generated.
Scale by Attribute
Multiplies the number of scattered points by the average value across the piece of the given attribute.
Remap Range
Enables fitting the range of the piece’s volume or max axis length value to a min and max range.
Values outside the input range will be clamped to the input range.
Input Min/Max
Specifies the input’s minimum and maximum values.
Output Min/Max
Specifies the output’s minimum and maximum values.
Scatter Points Attribute
The name of the primitive or point float attribute to use as multiplier. The average value across the piece being fractured will be used.
Scatter Seed
The random seed for scattering points.
Use Input Points
Use points from the fourth input.
Note
If a name attribute exists on the points, only points with a matching name will be used for the piece being fractured.
Wildcards are supported.
Input Points
The group of points from the fourth input to use.
Fog Volume
Noise Type
The type of noise. Select from **None**, **Perlin Noise**, **Original Perlin Noise**, **Sparse Convolution Noise**, **Alligator Noise**, **Simplex Noise** and **Zero Centered Perlin**.
Volume Resolution
The resolution of the fog volume. The higher the resolution, the slower the fracturing time will be. Smaller geometry will require higher volume resolution.
Noise Frequency
The frequency of the noise. Higher values give smaller scaled details in the noise.
Noise Offset
The offset of the input into the noise function. If you visualize the noise as a 2D graph or 3D height field, this has the effect of “panning” across the space of possible noise outputs. If you have the general noise effect you want but just want to get a different set of values for a different look, try changing the offset.
Cutoff Density
The low density level to cutoff at. Density below this value will be discarded.
##### Chipping
Enable Chipping
Break off corners of pieces to create chips.
Chipping Ratio
The overall ratio out of all the pieces to perform chipping on.
Seed
The overall seed for the ratio of chipping.
Randomness
Randomizes the chipping ratio for each piece by this amount, when fracturing per piece.
Corner Ratio
The ratio of corner points to use to generate chipping cutting planes.
Corner Depth
A normalized distance from corner to the center of the piece where the chipping plane will be instantiated.
Directional Noise
Amount of noise to add to the corner normal to align the cutting plane to.
Detriangulate
Converts geometry back to the original N-gons after applying a [boolean](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html "Combines two polygonal objects with boolean operators, or finds the intersection lines between two polygonal objects.") operation (which internally converts the geometry to triangles). Disabling this may be necessary to avoid producing self-intersections when multiple levels of fracturing are performed. See the [Boolean SOP tips](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html#tips) for more information.
##### Detail
Detail Size
The size of the polygons added for the edge and interior detail.
Edge Detail
Use Boolean to obtain edge detail.
Noise Height
Scales the amount of displacement.
Noise Element Size
The size of the noise pattern. Higher values give larger scaled details in the noise.
Lacunarity
An increment for the noise element size between fracture iterations.
Note
This parameter has no effect on the first fracture iteration.
Level Multiplier
An increment for the noise height between fracture iterations.
Note
This parameter has no effect on the first fracture iteration.
Detriangulate
Converts geometry back to the original N-gons after applying a [boolean](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html "Combines two polygonal objects with boolean operators, or finds the intersection lines between two polygonal objects.") operation (which internally converts the geometry to triangles). Disabling this may be necessary to avoid producing self-intersections when multiple levels of fracturing are performed. See the [Boolean SOP tips](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html#tips) for more information.
Interior Detail
Adds noise to the interior points, scaled based on their distance to the surface.
Noise Amplitude
Scales the amount of displacement.
Noise Type
The type of noise added to the interior points.
Frequency
The frequency of the noise. Higher values give smaller scaled details in the noise.
Offset
The offset of the input into the noise function. If you visualize the noise as a 2D graph or 3D height field, this has the effect of “panning” across the space of possible noise outputs. If you have the general noise effect you want but just want to get a different set of values for a different look, try changing the offset.
Crease Weights
Creases control the strength of pull of the polygon faces on the subdivision surfaces, much like a magnet drawing the surface towards the reference polygon. When this is turned on, a `creaseweights` attribute will be created and the specified value will be applied to the vertices at the interface between the outside and inside faces. See the [Subdivide SOP](https://www.sidefx.com/docs/houdini/nodes/sop/subdivide.html "Subdivides polygons into smoother, higher-resolution polygons.") for more details.
Weight
Specify the `creaseweights` value.
Proxy Geometry
Default
Uses the default voronoi fractured geometry.
Convex Decomposition
Performs a convex decomposition from the fractured input geometry.
Packed Spheres
Uses packed sphere primitives from the fractured input geometry.
Max Concavity
The maximum distance from a point on the geometry to it’s closest convex hull edge. Reducing this value will produce convex hulls that are a closer fit to the input geometry, but the geometry may be split into more segments.
Voxel Size
The size of voxels in the output VDB volume. Surface features smaller than this will not be in the output VDB.
Min Radius in Voxels
Determines the smallest sphere size in voxel units.
Max Radius in Voxels
Determines the largest sphere size in voxel units.
Max Spheres
No more than this number of spheres are generated per VDB primitive.
##### Constraints
Search Radius
When re-wiring incoming constraints, specify the search radius within which to look for matching connections.
Use Tags
Creates a `constraint_tag` string attribute on the constraint primitives instead of using groups. This allows for more flexibility and matches the Vellum constraints.
Apply Constraint Properties
Applies constraint properties to the output constraint geometry. The [RBD Constraint Properties SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintproperties.html "Creates attributes describing rigid body constraints.") can be used for advanced constraint setups.
Glue Constraint Name
Enable Color
Adds a color to the various constraints being created for quick identification.
Primary Strength
The starting strength of the glue bonds of primary fracture.
Level Multiplier
The number to multiply the primary strength with for each increment of fracture level.
Chipping Strength
The strength of glue bonds for corner chips.
Strength Variance
Randomly varies the strength of each glue bond.
Switch to Soft Constraint when Broken
Specifies a different constraint type to switch to if the glue constraint is broken by the [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ").
Note
This parameter does not set attributes directly but determines which parameters are relevant to streamline the UI.
Soft Constraint Name
Degrees of Freedom
Specifies whether the constraint affects position, orientation, or both. This does not apply to glue constraints, which work by simulating glued chunks together as a single object with a compound collision shape.
Stiffness
Specifies the strength of the force that attempts to match the transforms of the two anchors.
This value is equivalent to the frequency of a spring.
Damping Ratio
Specifies how much damping is applied to the motion. A value of 0 specifies no damping, and a value of 1 provides just enough damping to prevent oscillation. Values between 0 and 1 allow oscillation (with some damping), and values greater than 1 provide increasingly damped motion that has no oscillation.
This value is equivalent to the damping ratio of a spring.
#### Glass
Guide Geometry
None
No guide geometry.
Fractured Geometry
The group that is currently being fractured will be highlighted.
Concentric Noise
Displays the noise used for determining the discontinuity for concentric cracks.
Edge Noise
Displays the magnitude distribution of the edge noise.
Constraint Network
Displays the constraint network.
##### Impact Points
Use Scatter
Uses randomly scattered points on the surface as impact points.
Scatter Points
The number of points to scatter.
Scatter Points Scaling
None
Do not affect the number of scattered points.
Scale by Piece Volume
Multiplies the number of scattered points by the piece’s volume.
Note
This is only available with the **Concrete** material.
Large pieces can generate a lot more points. Use the **Remap Range** option for better control over the total number of points being generated.
Scale by Max Axis Length
Multiplies the number of scattered points by the piece’s bounding box’s maximum axis length.
Note
This is only available with the **Concrete** material.
Large pieces can generate a lot more points. Use the **Remap Range** option for better control over the total number of points being generated.
Scale by Attribute
Multiplies the number of scattered points by the average value across the piece of the given attribute.
Scatter Points Attribute
The name of the primitive or point float attribute to use as multiplier. The average value across the piece being fractured will be used.
Scatter Seed
The random seed for scattering points.
Use Input Points
Use points from the fourth input.
Note
If a name attribute exists on the points, only points with a matching name will be used for the piece being fractured.
Wildcards are supported.
Input Points
The group of points from the fourth input to use.
#### Cracks
Radial Crack
Radial Crack Number
The number of radial cracks to generate for each impact point.
Radial Crack Scaling
None
Do not affect the number of radial cracks.
Scale by Attribute
Multiplies the number of radial cracks by the average value across the piece of the given attribute.
Radial Crack Attribute
The name of the primitive or point float attribute to use as multiplier. The average value across the piece being fractured will be used.
Number Variance
The variance in the number of radial cracks for each piece.
Number Seed
The seed for the variance of the number of radial cracks.
Radial Fracture ID
The fracture ID for this fracture. The output attributes and groups associated with this fracture will have this tag.
Concentric Crack
Minimum Width
The minimum width between each concentric crack going outward radially.
Minimum Width Scaling
None
Do not affect the minimum width.
Scale by Attribute
Multiplies the minimum with by the average value across the piece of the given attribute.
Minimum Width Attribute
The name of the primitive or point float attribute to use as multiplier. The average value across the piece being fractured will be used.
Impact Spread
How far from the origin(s) the concentric cracks spread.
Discontinuity Freq
The frequency of the discontinuity noise for concentric cracks.
Discontinuity Size
The amplitude of the discontinuity noise for concentric cracks.
Concentric Fracture ID
The fracture ID for this fracture. The output attributes and groups associated with this fracture will have this tag.
##### Chipping
Enable Chipping
Break off corners of pieces to create chips.
Chipping Ratio
The overall ratio out of all the pieces to perform chipping on.
Seed
The overall seed for the ratio of chipping.
Randomness
Randomizes the chipping ratio for each piece by this amount, when fracturing per piece.
Corner Ratio
The ratio of corner points to use to generate chipping cutting planes.
Corner Depth
A normalized distance from corner to the center of the piece where the chipping plane will be instantiated.
Directional Noise
Amount of noise to add to the corner normal to align the cutting plane to.
Detriangulate
Converts geometry back to the original N-gons after applying a [boolean](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html "Combines two polygonal objects with boolean operators, or finds the intersection lines between two polygonal objects.") operation (which internally converts the geometry to triangles). Disabling this may be necessary to avoid producing self-intersections when multiple levels of fracturing are performed. See the [Boolean SOP tips](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html#tips) for more information.
##### Detail
Detail Size
The size of the polygons to add for the edge noise.
Edge Noise
Enable Edge Noise
Adds noise to the cracks.
Fade From Origin
How far to fade off the edge noising from the fracture origins.
Fade From Border
How far to fade off the edge noising from the borders of the glass.
Proxy Geometry
Noise Amplitude
Scales the amount of displacement.
Noise Frequency
The frequency of the noise. Higher values give smaller scaled details in the noise.
Note
**Noise Amplitude** and **Noise Frequency** can be driven via attributes on the mesh: `amp` (float) and `freq` (vector or float3) respectively.
Use Convex Decomposition
Creates proxy geometry from the high-resolution pieces using a [convex decomposition](https://www.sidefx.com/docs/houdini/nodes/sop/convexdecomposition.html "Decomposes the input geometry into approximate convex segments.").
Max Concavity
The maximum distance from a point on the geometry to it’s closest convex hull edge. Reducing this value will produce convex hulls that are a closer fit to the input geometry, but the geometry may be split into more segments.
Crease Weights
Creases control the strength of pull of the polygon faces on the subdivision surfaces, much like a magnet drawing the surface towards the reference polygon. When this is turned on, a `creaseweights` attribute will be created and the specified value will be applied to the vertices at the interface between the outside and inside faces. See the [Subdivide SOP](https://www.sidefx.com/docs/houdini/nodes/sop/subdivide.html "Subdivides polygons into smoother, higher-resolution polygons.") for more details.
Weight
Specify the `creaseweights` value.
##### Constraints
Search Radius
When re-wiring incoming constraints, specify the search radius within which to look for matching connections.
Use Tags
Creates a `constraint_tag` string attribute on the constraint primitives instead of using groups. This allows for more flexibility and matches the Vellum constraints.
Apply Constraint Properties
Applies constraint properties to the output constraint geometry. The [RBD Constraint Properties SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintproperties.html "Creates attributes describing rigid body constraints.") can be used for advanced constraint setups.
Glue Constraint Name
Enable Color
Adds a color to the various constraints being created for quick identification.
Radial Color
Specifies the color for the radial constraints.
Concentric Color
Specifies the color for the concentric constraints.
Radial Strength
The strength of the glue bonds between radial cracks.
Concentric Strength
The strength of the glue bonds between concentric cracks.
Chipping Strength
The strength of glue bonds for corner chips.
Strength Variance
Randomly varies the strength of each glue bond.
Switch to Soft Constraint when Broken
Specifies a different constraint type to switch to if the glue constraint is broken by the [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ").
Note
This parameter does not set attributes directly but determines which parameters are relevant to streamline the UI.
Soft Constraint Name
Degrees of Freedom
Specifies whether the constraint affects position, orientation, or both. This does not apply to glue constraints, which work by simulating glued chunks together as a single object with a compound collision shape.
Stiffness
Specifies the strength of the force that attempts to match the transforms of the two anchors.
This value is equivalent to the frequency of a spring.
Damping Ratio
Specifies how much damping is applied to the motion. A value of 0 specifies no damping, and a value of 1 provides just enough damping to prevent oscillation. Values between 0 and 1 allow oscillation (with some damping), and values greater than 1 provide increasingly damped motion that has no oscillation.
This value is equivalent to the damping ratio of a spring.
#### Wood
Guide Geometry
None
No guide geometry.
Fractured Geometry
The group that is currently being fractured will be highlighted.
Grains
Displays the cutting planes for the grains.
Cuts
Displays the cutting planes for the cuts.
Splinters
Displays the cutting planes for the splinters.
Constraint Network
Displays the constraint network.
##### Grain
Enable Grain
Creates grain lines along the **Fracture Direction**, which typically is the geometry’s longest axis.
Fracture Direction
Auto (Bounding Box)
Determines the direction automatically based on the oriented bounding box.
Vector
Uses the vector specified as the direction of fracturing.
Grain Spacing
The spacing between grain lines.
Grain Spacing Scaling
None
Do not affect the spacing.
Scale by Attribute
Divides the spacing by the average value across the piece of the given attribute. A smaller value will result in larger spacing.
Grain Spacing Attribute
The name of the primitive or point float attribute to use as multiplier. The average value across the piece being fractured will be used.
Grain Offset
The size of offset randomly applied to each grain line.
Grain Offset Seed
The seed of the random offset.
Grain Noise
Height
Displacement amount of the height.
Element Size
Distance between peaks of lowest frequency noise.
Grain Detail Size
The size of polygons used to cut the grain lines.
Grain Fracture ID
The fracture ID for this fracture. The output attributes and groups associated with this fracture will have this tag.
##### Cut
Enable Cut
Creates cuts in the opposite direction of the grain lines.
Fracture Direction
Auto (Bounding Box)
Determines the direction automatically based on the oriented bounding box.
Vector
Uses the vector specified as the direction of fracturing.
Skew Angle
Rotates the cutting plane along the axis perpendicular to the grain cut direction, when **Fracture Direction** is set to **Auto**.
Cut Spacing
The spacing between cuts.
Cut Spacing Scaling
None
Do not affect the spacing.
Scale by Attribute
Divides the spacing by the average value across the piece of the given attribute. A smaller value will result in larger spacing.
Cut Spacing Attribute
The name of the primitive or point float attribute to use as multiplier. The average value across the piece being fractured will be used.
Cut Offset
The size of offset randomly applied to each cut.
Cut Offset Seed
The seed of the random offset.
Curve Noise
Height
Displacement amount of the height.
Element Size
Distance between peaks of lowest frequency noise.
Splinters
Splinter Density
The amount of splinters for each cut.
Splinter Length
The length of the splinters.
Cut Fracture ID
The fracture ID for this fracture. The output attributes and groups associated with this fracture will have this tag.
##### Detail
Detriangulate
Converts geometry back to the original N-gons after applying a [boolean](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html "Combines two polygonal objects with boolean operators, or finds the intersection lines between two polygonal objects.") operation (which internally converts the geometry to triangles). Disabling this may be necessary to avoid producing self-intersections when multiple levels of fracturing are performed. See the [Boolean SOP tips](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html#tips) for more information.
Proxy Geometry
Use Convex Decomposition
Creates proxy geometry from the high-resolution pieces using a [convex decomposition](https://www.sidefx.com/docs/houdini/nodes/sop/convexdecomposition.html "Decomposes the input geometry into approximate convex segments.").
Max Concavity
The maximum distance from a point on the geometry to it’s closest convex hull edge. Reducing this value will produce convex hulls that are a closer fit to the input geometry, but the geometry may be split into more segments.
Crease Weights
Creases control the strength of pull of the polygon faces on the subdivision surfaces, much like a magnet drawing the surface towards the reference polygon. When this is turned on, a `creaseweights` attribute will be created and the specified value will be applied to the vertices at the interface between the outside and inside faces. See the [Subdivide SOP](https://www.sidefx.com/docs/houdini/nodes/sop/subdivide.html "Subdivides polygons into smoother, higher-resolution polygons.") for more details.
Weight
Specify the `creaseweights` value.
##### Cluster
Enable Cluster
Clusters fractured pieces together into larger chunks. This can produce more realistic pieces of broken wood.
Cluster Type
Specifies how to apply the clustering to the input geometry.
Combine Pieces
Adjusts the `name` primitive attribute to combine pieces into clusters. This will result in fewer objects in the simulation. The constraint geometry is also updated to reflect the new pieces.
Group Constraints
The input geometry is not modified, but primitive groups are added to the constraint geometry to identify constraints between clusters, internal constraints in a cluster, etc. This can be used with the [RBD Constraint Properties SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintproperties.html "Creates attributes describing rigid body constraints.") to, for example, create stronger constraints between pieces in the same cluster. With this approach, the clustered chunks may be broken apart during the simulation by breaking the constraints within a cluster.
Offset
The offset of the cellular noise added to the input points.
Jitter
The jitter of the cellular noise added to the input points.
Size
The size of the cells for the noise added to the input points. This roughly corresponds to the size of the clusters.
Random Detachment
Randomly detach pieces from clusters.
Detach Ratio
The probability that a particular piece will be detached.
Detach Seed
The random seed used for detachment.
##### Constraints
Search Radius
When re-wiring incoming constraints, specify the search radius within which to look for matching connections.
Use Tags
Creates a `constraint_tag` string attribute on the constraint primitives instead of using groups. This allows for more flexibility and matches the Vellum constraints.
Apply Constraint Properties
Applies constraint properties to the output constraint geometry. The [RBD Constraint Properties SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintproperties.html "Creates attributes describing rigid body constraints.") can be used for advanced constraint setups.
Glue Constraint Name
Enable Color
Adds a color to the various constraints being created for quick identification.
Grain Color
Specifies the color for the grain constraints.
Cut Color
Specifies the color for the cut constraints.
Grain Strength
The strength of glue bonds between grains.
Cut Strength
The strength of glue bonds between cuts and splinters.
Strength Variance
Randomly varies the strength of each glue bond.
Switch to Soft Constraint when Broken
Specifies a different constraint type to switch to if the glue constraint is broken by the [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ").
Note
This parameter does not set attributes directly but determines which parameters are relevant to streamline the UI.
Soft Constraint Name
Degrees of Freedom
Specifies whether the constraint affects position, orientation, or both. This does not apply to glue constraints, which work by simulating glued chunks together as a single object with a compound collision shape.
Stiffness
Specifies the strength of the force that attempts to match the transforms of the two anchors.
This value is equivalent to the frequency of a spring.
Damping Ratio
Specifies how much damping is applied to the motion. A value of 0 specifies no damping, and a value of 1 provides just enough damping to prevent oscillation. Values between 0 and 1 allow oscillation (with some damping), and values greater than 1 provide increasingly damped motion that has no oscillation.
This value is equivalent to the damping ratio of a spring.
#### Custom
Guide Geometry
None
No guide geometry.
Fractured Geometry
The group that is currently being fractured will be highlighted.
Volume
Displays the volume distribution used for scattering.
Cutter Geometry
Displays the cutting geometry.
Edge Detail
Displays the cutting geometry used to generate the edge detail.
Constraint Network
Displays the constraint network.
##### Primary Fracture
Treat As
Whether to treat this geometry like the boundary of a solid object, or as a flat surface with no interior or exterior.
Detriangulate
Converts geometry back to the original N-gons after applying a [boolean](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html "Combines two polygonal objects with boolean operators, or finds the intersection lines between two polygonal objects.") operation (which internally converts the geometry to triangles). Disabling this may be necessary to avoid producing self-intersections when multiple levels of fracturing are performed. See the [Boolean SOP tips](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html#tips) for more information.
Cutting Geometry
Scatter Cutting Geo
Use scattered cutting geometry for fracturing.
Scatter From
Volume
Scatters points based on the fog volume generated.
Attribute
Scatters points based on the specified point attribute in the incoming geometry. For example, the [RBD Paint SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdpaint.html "Paints values onto geometry or constraints using strokes.") can be used to paint a `density` attribute on the geometry.
Cutter Geo
Select the type of scattered cutting geometry.
Grid
Uses a grid to perform cuts.
Sphere
Uses a polygon sphere to perform cuts.
Input Geo
Uses cutter geometry from the fourth input.
Note
If a name prim attribute exists on the geometry, only prims with a matching name will be used for the piece being fractured. Wildcards are supported.
Attribute Name
The name of the point attribute to use as a density attribute when scattering points.
Scatter Points
The number of points to scatter.
Scatter Points Scaling
None
Do not affect the number of scattered points.
Scale by Piece Volume
Multiplies the number of scattered points by the piece’s volume.
Note
This is only available with the **Concrete** material.
Large pieces can generate a lot more points. Use the **Remap Range** option for better control over the total number of points being generated.
Scale by Max Axis Length
Multiplies the number of scattered points by the piece’s bounding box’s maximum axis length.
Note
This is only available with the **Concrete** material.
Large pieces can generate a lot more points. Use the **Remap Range** option for better control over the total number of points being generated.
Scale by Attribute
Multiplies the number of scattered points by the average value across the piece of the given attribute.
Scatter Points Attribute
The name of the primitive or point float attribute to use as multiplier. The average value across the piece being fractured will be used.
Scatter Seed
The random seed for scattering points.
Scatter Normal
The normal for the volume scattered points to orient the cutting geo.
Randomize Normal
Randomizes the normal used to orient the cutting geo.
Use Input Geo
Use additional cutter geometry from the fourth input.
Note
If a name prim attribute exists on the geometry, only prims with a matching name will be used for the piece being fractured. Wildcards are supported.
Input Cutting Geo
Specifies a group from the fourth input geometry to use for fracturing.
Trim Cutting Geometry
Trims the cutting geometry for better performance.
Detriangulate Cutting Geometry
Converts geometry back to the original N-gons after applying a [boolean](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html "Combines two polygonal objects with boolean operators, or finds the intersection lines between two polygonal objects.") operation (which internally converts the geometry to triangles). Disabling this may be necessary to avoid producing self-intersections when multiple levels of fracturing are performed. See the [Boolean SOP tips](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html#tips) for more information.
Fog Volume
Noise Type
The type of noise. Select from **None**, **Perlin Noise**, **Original Perlin Noise**, **Sparse Convolution Noise**, **Alligator Noise**, **Simplex Noise** and **Zero Centered Perlin**
Volume Resolution
The resolution of the fog volume. The higher the resolution, the slower the fracturing time will be. Smaller geometry will require higher volume resolution.
Noise Frequency
The frequency of the noise. Higher values give smaller scaled details in the noise.
Noise Offset
The offset of the input into the noise function. If you visualize the noise as a 2D graph or 3D height field, this has the effect of “panning” across the space of possible noise outputs. If you have the general noise effect you want but just want to get a different set of values for a different look, try changing the offset.
Cutoff Density
The low density level to cutoff at. Density below this value will be discarded.
Fracture ID
The fracture ID for this fracture. The output attributes and groups associated with this fracture will have this tag.
##### Chipping
Enable Chipping
Break off corners of pieces to create chips.
Chipping Ratio
The overall ratio out of all the pieces to perform chipping on.
Seed
The overall seed for the ratio of chipping.
Randomness
Randomizes the chipping ratio for each piece by this amount, when fracturing per piece.
Corner Ratio
The ratio of corner points to use to generate chipping cutting planes.
Corner Depth
A normalized distance from corner to the center of the piece where the chipping plane will be instantiated.
Directional Noise
Amount of noise to add to the corner normal to align the cutting plane to.
Detriangulate
Converts geometry back to the original N-gons after applying a [boolean](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html "Combines two polygonal objects with boolean operators, or finds the intersection lines between two polygonal objects.") operation (which internally converts the geometry to triangles). Disabling this may be necessary to avoid producing self-intersections when multiple levels of fracturing are performed. See the [Boolean SOP tips](https://www.sidefx.com/docs/houdini/nodes/sop/boolean.html#tips) for more information.
##### Detail
Detail Size
The size of the polygons added for the edge and interior detail.
Edge Detail
Use Boolean to obtain edge detail.
Noise Height
Scales the amount of displacement.
Noise Element Size
The size of the noise pattern. Higher values give larger scaled details in the noise.
Interior Detail
Adds noise to the interior points, scaled based on their distance to the surface.
Noise Amplitude
Scales the amount of displacement.
Noise Type
The type of noise added to the interior points.
Frequency
The frequency of the noise. Higher values give smaller scaled details in the noise.
Offset
The offset of the input into the noise function. If you visualize the noise as a 2D graph or 3D height field, this has the effect of “panning” across the space of possible noise outputs. If you have the general noise effect you want but just want to get a different set of values for a different look, try changing the offset.
Crease Weights
Creases control the strength of pull of the polygon faces on the subdivision surfaces, much like a magnet drawing the surface towards the reference polygon. When this is turned on, a `creaseweights` attribute will be created and the specified value will be applied to the vertices at the interface between the outside and inside faces. See the [Subdivide SOP](https://www.sidefx.com/docs/houdini/nodes/sop/subdivide.html "Subdivides polygons into smoother, higher-resolution polygons.") for more details.
Weight
Specify the `creaseweights` value.
Proxy Geometry
Default
Uses the default voronoi fractured geometry.
Convex Decomposition
Performs a convex decomposition from the fractured input geometry.
Packed Spheres
Uses packed sphere primitives from the fractured input geometry.
Max Concavity
The maximum distance from a point on the geometry to it’s closest convex hull edge. Reducing this value will produce convex hulls that are a closer fit to the input geometry, but the geometry may be split into more segments.
Voxel Size
The size of voxels in the output VDB volume. Surface features smaller than this will not be in the output VDB.
Min Radius in Voxels
Determines the smallest sphere size in voxel units.
Max Radius in Voxels
Determines the largest sphere size in voxel units.
Max Spheres
No more than this number of spheres are generated per VDB primitive.
##### Constraints
Search Radius
When re-wiring incoming constraints, specify the search radius within which to look for matching connections.
Use Tags
Creates a `constraint_tag` string attribute on the constraint primitives instead of using groups. This allows for more flexibility and matches the Vellum constraints.
Apply Constraint Properties
Applies constraint properties to the output constraint geometry. The [RBD Constraint Properties SOP](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintproperties.html "Creates attributes describing rigid body constraints.") can be used for advanced constraint setups.
Glue Constraint Name
Enable Color
Adds a color to the various constraints being created for quick identification.
Primary Strength
The strength of the glue bonds of primary fracture.
Chipping Strength
The strength of glue bonds for corner chips.
Strength Variance
Randomly varies the strength of each glue bond.
Switch to Soft Constraint when Broken
Specifies a different constraint type to switch to if the glue constraint is broken by the [Bullet Solver](https://www.sidefx.com/docs/houdini/nodes/dop/bulletrbdsolver.html " Sets and configures an Bullet Dynamics solver. ").
Note
This parameter does not set attributes directly but determines which parameters are relevant to streamline the UI.
Soft Constraint Name
Degrees of Freedom
Specifies whether the constraint affects position, orientation, or both. This does not apply to glue constraints, which work by simulating glued chunks together as a single object with a compound collision shape.
Stiffness
Specifies the strength of the force that attempts to match the transforms of the two anchors.
This value is equivalent to the frequency of a spring.
Damping Ratio
Specifies how much damping is applied to the motion. A value of 0 specifies no damping, and a value of 1 provides just enough damping to prevent oscillation. Values between 0 and 1 allow oscillation (with some damping), and values greater than 1 provide increasingly damped motion that has no oscillation.
This value is equivalent to the damping ratio of a spring.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/booleanfracture.svg) Boolean Fracture](https://www.sidefx.com/docs/houdini/nodes/sop/booleanfracture.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdinteriordetail.svg) RBD Interior Detail](https://www.sidefx.com/docs/houdini/nodes/sop/rbdinteriordetail.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/voronoifracture.svg) Voronoi Fracture](https://www.sidefx.com/docs/houdini/nodes/sop/voronoifracture.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdconstraintsfromlines.svg) RBD Constraints From Lines](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintsfromlines.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdconstraintsfromcurves.svg) RBD Constraints From Curves](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintsfromcurves.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdconstraintsfromrules.svg) RBD Constraints From Rules](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintsfromrules.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/rbdconstraintproperties.svg) RBD Constraint Properties](https://www.sidefx.com/docs/houdini/nodes/sop/rbdconstraintproperties.html)