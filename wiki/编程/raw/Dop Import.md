---
type: concept
title: Dop Import
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "33c4ace791fc"
---
根据从DOP模拟中提取的信息，导入并转换几何图形。
### Parameters
The DOP Import SOP imports geometry from a DOP network, and can also transform the input geometry based on the transforms of the DOP objects. The **Import Style** parameter can be used to select between several modes of operation.
DOP objects have two distinct transforms associated with them. One comes from the Position data attached to the object. The other comes from the Geometry data on the object, which has an inherent transform associated with it. This SOP can apply either, both, or neither of these two transforms. It can also apply the inverse transform to effectively undo the transform operation of another Dop Import SOP.
The Dop Import SOP also allows the transformation of selected vector attributes for points and primitives.
## Point velocities
In addition to transforming the geometry, this SOP can create a velocity point attribute on the geometry.
This velocity is calculated by combining any velocity attribute on the geometry in the DOP simulation (such as those set by the Cloth Solver) and the overall object velocity and angular velocity stored in the object’s Position data. This SOP can calculate an instantaneous velocity for each point by combining the linear and angular velocities of the object, or it can integrate the two velocities over some timestep. The instantaneous velocity approach is a true representation of the velocity of each point, but if the object has a high angular velocity then rendering with these instantaneous velocities may make the object appear to be exploding in the render. In this case, integrated velocities can be used to ensure the extrapolated points stay “inside” the object’s geometry. The Integrate Over Time parameter specifies the integration interval and should be set to match your timestep, or the duration of each geometry segment when using multi-segment motion blur.
If a vectorfield called “vel” is present on the object, it is interpreted as a velocity field and added to the computed velocity.
The velocity attribute of the simulation object’s Geometry is transferred to the input geometry using a technique similar to the Attribute Transfer SOP. It is not necessary to have the input geometry match the simulation object’s Geometry to get good point velocities. This option is useful for rendering simulation objects with motion blur.
When importing DOP Objects as points, this option is disabled. The DOP Object overall velocity is always assigned to the point representing that object.
## PARAMETERS
DOP Network
The DOP Network to extract the transform and velocity information from.
Object Mask
Specifies the objects within the DOP Network to extract the transforms from.
Use Single Object
Turning on this option causes the entire input geometry to be transformed by the first simulation object matched by the **Object Mask** parameter. If this option is off, then for each object in the Object Mask, this SOP looks for a primitive group with the same name as the object. Only that primitive group is affected by the object it matches. This means some geometry may not be transformed at all if it does not belong to a matching primitive group.
Import Style
Controls the mode of operation for this SOP.
Transform Input Geometry
Pulls geometry from the SOP node connected to its input, and transforms that geometry using the objects fetched from the DOP network. The **Object Names** are used to identify primitives belonging to each object.
Fetch Geometry from DOP Network
Pulls geometry from the DOP Network, ignoring any SOP that may be connected to its input. This is similar to the functionality provided by the Object Merge SOP, but geared towards DOP Networks. This node provides better control over how the geometry is transformed, and provides parameters that are easier to use for this purpose.
Fetch Packed Geometry from DOP Network (deprecated)
Creates a packed primitive for each object being fetched from the DOP network. For an [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects."), the object’s packed primitives will be returned and adjusted according to the **Pivot Location** parameter. Otherwise, the object’s geometry will be packed into an embedded packed primitive. For packed objects, this option is deprecated in favor of using the **Fetch Geometry from DOP Network** mode, which does not adjust the packed primitives' positions. For other object types, a [Pack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/pack.html "Packs geometry into an embedded primitive.") with the **Pack by Name** parameter enabled can be used.
Fetch Unpacked Geometry from DOP Network
Pulls geometry from the DOP Network, ignoring any SOP that may be connected to its input. For an [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects."), the unpacked collision geometry will be returned.
Stamp Input Geometry
Creates copies of primitive groups from the SOP connected to its input. This mode is similar to **Transform Input Geometry**, except it can be used when there are several DOP Objects with the same name, all of which want to generate a separate copy of the input primitive group of the same name. This option is also useful if the input SOP contains geometry that is not part of any primitive group, and so does not correspond to any DOP Object.
Create Points to Represent Objects
Creates one point per object, and sets attributes on that point to represent the position, orientation, velocity, and geometry for that object. This allows for very light weight geometry to be generated from a DOP Network, which can then use point instancing at render time.
Pivot Location
Specifies how to initialize the offset for the point referenced by the packed primitive.
Display As
The viewport LOD for the packed primitives when **Import Style** is **Fetch Packed Geometry from DOP Network**.
Import By Name
Use the name attribute instead of primitive groups to identify primitives belonging to each DOP Object.
Object Names
Specifies the format of the name used to identify each DOP object. These names are used by the **Transform Input Geometry** mode and when creating primitive groups or a `name` primitive attribute on the imported geometry.
Use DOP Object Name
The DOP Object name is used to identify the object. For an [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects."), the value of the `name` point attribute is used.
Use DOP Object Id
Generates a name based on the numeric identifier of the source DOP object. You may want to use this setting if there is some chance that multiple DOP Objects with the same name may be imported from the DOP network.
Use Full Path to Object
For an [RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects."), the DOP Object name is combined with the value of the `name` point attribute to produce an identifier such as `object2/piece3`. You may want to use this setting if there is some chance that multiple [RBD Packed Objects](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html " Creates a single DOP object from SOP Geometry that represents a number of RBD Objects.") may contain packed primitives with the same names.
Geometry Data Path
The subdata path for the geometry to import from the DOP Network. The same data path will be used for all source objects. If left blank, the primary geometry data for the object is used.
Transfer Attributes
Specifies a list of attributes to transfer to the generated points when **Import Style** is **Create Points to Represent Objects**.
Transfer Groups
Specifies a list of groups to transfer to the generated points when **Import Style** is **Create Points to Represent Objects**.
Inverse Transform
Applies the inverse of the transform calculated for the simulation object.
Transform Geometry With Position Data
Finds the Data named Position on the simulation object and extracts its translation and rotation information to transform the geometry.
Transform Geometry With Geometry Data
Use the transform embedded in the Geometry data attached to the simulation object. This is a transform is usually set when **Use Object Transform** is set on the Geometry Data.
Preserve World Space Positions
Use the inverse transform of the object containing this SOP. This allows the world space position of the geometry to be independent of the object level transform. This is useful when this SOP is placed inside an object that is used as the source geometry for the simulation object whose transform is being extracted. The object level transform may be used for the initial position of the simulation object, but you may not want it to affect the world space position of the geometry output from this SOP. When the Inverse Operation option is set, this component of the transform is also inverted.
Center at Pivot
When **Import Style** is set to **Create Points to Represent Objects**, use the RBD Object’s pivot as the point center, which will typically place the points at the objects' centers of mass. This will ensure the created points better match the motion of the source simulation.
Add DOP Object Name Attribute
Adds a string primitive attribute `name` which contains the name of the object. The format of the name is specified by the **Object Names** parameter.
Add DOP Object Path Attribute
Adds a string primitive attribute `dopobject` which contains the path of the DOP Network followed by the DOP object id.
Add DOP Object Id Attribute
Adds an integer primitive attribute `dopobjectid` which contains the DOP object id of the sourced object.
Add to Existing Velocity Attributes
Adds velocities computed from the DOP Object to any existing velocity attribute values on the geometry. Turning off this option causes the velocity computed from the DOP Object to simply override any existing velocity attribute value.
Note
When geometry is dynamically fractured, point velocities are added to transfer the velocity to the smaller chunks. If this parameter is turned on, these point velocities will go to your final render. Turn this parameter off to improve motion blur. It is on by default, but is turned off by shelf tools by default.
Delete Abandoned Primitives
When in transform mode, any primitives that do not have a corresponding DOP Object will be deleted instead of being left untransformed. This is useful if your solver deletes objects over time.
Point Velocities
Controls whether point velocities will be calculated for the geometry from this SOP, and the method of calculation. The Instantaneous and Integrated velocity calculations are described in the overview.
Integrate Over Time
The time interval over which velocities are calculated when using the Integrated Point Velocities calculation. This value should be set to a single frame time, or the duration of a single geometry segment when using multi-segment motion blur.
Do Not Trigger Simulation
If the DOP simulation being imported is out of date, the old cached value will be returned rather than trying to simulate. This avoids recursion problems when viewing a SOP chain being used by a [SOP Solver](https://www.sidefx.com/docs/houdini/nodes/dop/sopsolver.html) that would store bad geometry in the simulation cache.
## EXAMPLES
Load Launch
[LowHigh](https://www.sidefx.com/docs/houdini/examples/nodes/sop/dopimport/LowHigh.html)Example for [Dop Import](https://www.sidefx.com/docs/houdini/nodes/sop/dopimport.html) geometry node
This example shows how to create a low res - high res set up to support RBD objects. The two main methods are to reference copy the DOP Import SOP and feed in the high res geometry or to use point instancing with an Instance Object.
Load Launch
[ProxyGeometry](https://www.sidefx.com/docs/houdini/examples/nodes/sop/dopimport/ProxyGeometry.html)Example for [Dop Import](https://www.sidefx.com/docs/houdini/nodes/sop/dopimport.html) geometry node
This example demonstrates a technique of using the DOP Import SOP to allow the use of proxy geometry in a DOP simulation. One set of geometries are used in the simulation, then the transform information for those objects is applied to higher resolution versions of the geometry.