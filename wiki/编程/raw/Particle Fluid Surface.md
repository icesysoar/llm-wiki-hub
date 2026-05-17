---
type: concept
title: Particle Fluid Surface
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "61d4332aaa05"
---
在粒子流体模拟的粒子周围生成曲面
### Parameters
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\7f5120cf09ad4c608eb588795c78ccf0\fluidsurface.png)

Particle Fluid Surface 2.0 geometry node

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\2cbff20bd81c43faa9aae5b65d0548e2\9436a89d7fa5474f85028cb9831cc745.jpg)

  

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\c68a26c57cea4e41a5cda616219cb907\d9d0e7bc7bcd4b6cbb8b16f396a94007.jpg)

  

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\7c6f50f67e204ab8bd622a685882dce4\28700b8ef15e4b5589436efb45f2c020.jpg)

  

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\44052e3be9bc4727b223189db0cc6c00\9ffe1147085047f898ee0bc3d951dc98.jpg)

  

Node Name:---------particlefluidsurface1---------

Node Type:---------Particle Fluid Surface Sop (particlefluidsurface::2.0)

*****Count:---455

*****Type:---61

Add------4

Attribute Create------4

Attribute Delete------1

Attribute Rename------1

Attribute Transfer------1

Attribute VOP------16

Attribute Wrangle------10

Attribute from Volume------1

Bind------7

Blast------7

Bound------6

Box------4

Color------1

Compare------4

Constant------1

Convert------1

Convert VDB------8

Delete------7

Fit Range------4

Geometry VOP Global Parameters------5

Geometry VOP Output------3

Group Combine------3

Group Create------7

Group Delete------2

Group Promote------4

Length------1

Merge------6

Min Vector Component------4

Null------28

Or------2

Output------3

Parameter------141

PolyExtrude------3

PolySoup------1

Primitive------2

Ramp Parameter------2

Snippet------11

Subnet Inputs------8

Subnet Outputs------8

Subnetwork------3

Subtract------2

Switch------55

Unpack Points------1

VDB------4

VDB Activate------1

VDB Analysis------6

VDB Combine------17

VDB Renormalize SDF------1

VDB Resample------1

VDB Reshape SDF------11

VDB Smooth------1

VDB Smooth SDF------2

VDB from Particle Fluid------1

VDB from Particles------3

VDB from Polygons------5

Volume------1

Volume Pos to Index------2

Volume Resolution------2

Volume Sample------1

Volume VOP------2

Voronoi Split------1

Generates a surface around the particles from a particle fluid simulation.

在粒子流体模拟的粒子周围生成曲面

On this page

[Deleting surface area from inside other volumes/objects](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface#subtract)

[Masking filters](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface#mask)

[Previewing part of the input](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface#previewing-part-of-the-input)

[Tips](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface#tips)

 [Parameters](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface#parameters)

[Inputs](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface#inputs)

Connect point geometry from a [particle fluid simulation](https://www.sidefx.com/docs/houdini/fluid/index.html) to this node’s first input. The node will generate a surface from the outermost points.

(You can surface any points, not just points from a particle fluid sim, as long as the points have a pscale attribute. This attribute specifies the virtual radius of each particle in Houdini units.)

Deleting surface area from inside other volumes/objects

You can optionally subtract geometry from the generated surface before it is converted to polygons. For example, you can prevent the node from generating polygons outside the fluid’s container object, or within objects the fluid is colliding with.

4.  Connect the volumes/geometry you want to subtract from the surface to this node’s second input ("Collision objects and volumes").
5.  In the parameter editor, click the Regions tab and turn on Subtract collision volumes.

Masking filters

You can apply filters such as smoothing to the surface using the controls on the [Filtering tab](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface.html#filtering).

To mask the effect of a filter with a fog volume:

6.  Connect the mask volume to this node’s third input ("Mask volumes").
7.  On the Filtering tab, turn on the filter using the checkbox to the left.
8.  Turn on the Mask checkbox to the right of the filter.
9.  In the mask controls below the filters, turn on Mask input.

The field next to Mask input lets you specify a group within the input. If you leave it blank, this node will use all geometry in the input. Or you can specify a specific volume by name using group syntax, for example @name=mask.

Previewing part of the input

The Use bounding box parameter on the Regions tab lets you limit the surfacing to a subset of the input geometry. You can use this to get faster feedback by only surfacing a small "preview" area while you're tweaking parameters, and then

7.  Before you set up the bounding box, click the Surfacing tab and set Convert to to "Particles and Compressed Fluid Surface". This displays an approximation of the fluid, so moving the bounding box will be fast (the node won’t try to resurface every time you move the bounding box).
8.  Click the Regions tab, turn on Use bounding box.
9.  With the node still selected, press Enter in the viewer to show the node’s handles.

Note

The default values for the bounding box are very large (50×50×50). You might need to zoom out a long way in the viewer, or set the Size parameter under Use bounding box smaller, to see the handles.

13.  Use the bounding box handles to position and size the bounding box, or use the Size and Center parameters under Use bounding box, to frame a small subset of the total fluid.
14.  Click the Surfacing tab and set Convert to back to one of the surface-generating options ("Surface VDB", "Surface polygons", or "Surface polygon soup") to preview the generated surface within the bounding box.

When you want to see the effect of the current parameters on the entire input geometry, just turn off Use bounding box on the Regions tab.

Tips

-   If viewing the Compressed Fluid Surface you’ll see the fastest playback with Transfer Attributes, Subtract Collision Volumes, and Closed Boundaries turned off.
-   If the particle geometry coming into this node has been packed using the [Fluid Compress](https://www.sidefx.com/docs/houdini/nodes/sop/fluidcompress.html) or [Pack Points](https://www.sidefx.com/docs/houdini/nodes/sop/packpoints.html) nodes (as in a fluid simulation created from the shelf), the network will include a node reading the packed particles back from disk.

In this case, make sure the [File](https://www.sidefx.com/docs/houdini/nodes/sop/file.html) or [File Cache](https://www.sidefx.com/docs/houdini/nodes/sop/file.html) reading the particles has Delay Load Geometry on. With this option, the node won’t actually read particles from disk until they're needed for surfacing. This can save load time if when you're clipping to a bounding box or only previewing the Compressed Fluid Surface points with Transfer Attributes disabled.

-   For very slow moving viscous fluids, the default surfacing settings can lead to some "flickering" in the resulting mesh. To minimize any flickering, try any of the following:

-   Turn off Reseed Particles on the FLIP Solver to avoid introducing new particles during the simulation.
-   If using the Average Position surfacing method, turn on Limit Refinement and leave the iterations at 0 or switch to the Spherical method. In either case you will probably need additional smoothing on the Filtering tab, using the Dilate, Smooth, and Erode parameters.
-   Disable adaptive polygon meshing by setting Adaptivity to 0. This setting will create a heavier mesh, but the mesh will be more consistent over time and avoid variations in the normals from changing polygonization.

-   If the source points are from a [Fluid Compress node](https://www.sidefx.com/docs/houdini/nodes/sop/fluidcompress.html), this node will use the surface and vel VDBs to fill in missing depth and velocity data in deeper parts of the fluid.

PARAMETERS

Surfacing

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\f5b22298da1b4f298f313f13efd22904\f92b51e5f37844ae9756ea7294ed1656.jpg)

  

Method

The surfacing method used to create the initial VDB signed-distance field from the particles.

Average Position

Uses the [VDB From Particle Fluid](https://www.sidefx.com/docs/houdini/nodes/sop/vdbfromparticlefluid.html) node to create a surface from the average position of the particles. This option creates a smoother initial surface and has options to create a smoother surface between nearby particles. It can be more expensive than the Spherical method however.

Spherical

Uses the [VDB From Particles](https://www.sidefx.com/docs/houdini/nodes/sop/vdbfromparticles.html) SOP to simply create sphere volumes around each particle and merge them to create the surface. This creates a very lumpy surface that will usually require smoothing, however it is faster than the "Average position". This may also be useful just to create an interesting-looking surface for non-realistic applications.

Particle Separation

The distance between two particles in the fluid simulation. This parameter should generally reference the same parameter on the [FLIP Object](https://www.sidefx.com/docs/houdini/nodes/dop/flipobject.html) of the fluid simulation that created the particles.

Voxel Scale体素缩放

The voxel side length to use for the generated VDB volume. 

体素边的长度，用于控制生成的VDB体积

This is a scale on the Particle separation length. 

该值是Particle separation粒子间距离长度的比例值

For example, if Particle separation is 0.1 and Voxel size is 0.5, the side length of the voxels of the output field will be 0.05.

比如，如果Particle separation粒子间距是0.1，体积缩放是0.5，那么最终输出体积中的体素边的长度是0.05

Influence Scale

The maximum distance at which particles interact. Small increases can give smoother results but increase the cooking time and memory usage greatly. This is a scale on the Particle separation length. For example, if Particle separation is 0.1 and Influence radius is 3, particles will interact if they are within 0.6 units of each other.

Droplet Scale

The approximate desired distance between the particles and the generated surface. This is a scale on the Particle separation length, and must be smaller than the Influence scale. It becomes a scale on the pscale attribute value (instead of Particle separationlength) if pscale is present.

Note

This accurately determines the radius of a droplet formed by an isolated particle since in absence of interactions from other particles, the desired distance between a particle and the generated surface is realized exactly in the form of a sphere (droplet) centered at the particle.

You can use the pscale attribute to locally manipulate the distance of the surface to particles (pulling it closer or pushing it away). The pscale value replaces Particle Separation as the scale by which this parameter is multiplied to calculate the indented distance of each particle from the surface of the fluid.

You must ensure the Droplet Scale times pscale value of all particles is smaller thanInfluence Radius times Particle Separation.

Limit Refinement Iterations

When the checkbox is on, the node will only refine the geometry the specified number of times. When off, the node uses as many iterations as it needs to achieve a certain quality. Set this parameter from 1 to 4 to trade speed for quality.

The number of iterations chosen by the node is always finite, and the time taken by each iteration drops quickly as the number increases. So, there is little benefit to setting an explicit limit beyond 3 or 4.

Preserve Bubbles

Bubbles that are entirely submerged in the fluid could be lost while resampling the surface SDF. This option preserves bubbles in the generated surface by using a different sampling method. This option adds additional computation time and should only be activated when it is necessary to preserve internal geometry.

Union Compressed Fluid Surface

If the input fluid was compressed with the [Fluid Compress](https://www.sidefx.com/docs/houdini/nodes/sop/fluidcompress.html) SOP, use the compressed surface fluid VDB to fill in the deeper parts of the fluid below the particle detail.

Erosion Scale

When Union compressed fluid surface is on, this erodes the surface field to the compressed fluid’s particle bandwidth. If seams between the field and the particles are visible, you can decrease this value to remove them.

Output

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\40b369dde0f447cfbd480add9fab12cb\dd138d9cc94c45e7a3f97763ac4db978.jpg)

Convert To

Specifies the output of the surfacing operation. The first three options are intended mostly for previews.

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\70cf63e59fea4f2894ef0ac66a01fac9\377af925a2f0494fb5373faef3b50478.jpg)

Particles

Outputs the input particles, unpacked and with any [region filters](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface.html#regions) applied. You can use this to get a sense of the extent of (uncompressed) particle fluids.

Particles and Compressed Fluid Surface

If the input fluid was compressed with the [Fluid Compress](https://www.sidefx.com/docs/houdini/nodes/sop/fluidcompress.html) SOP, this outputs the input particles (in in "Particles" above) and the eroded compressed fluid surface. You can use this to preview FLIP simulations, since you can get a sense of the particle surface detail and the compressed surface underneath.

Compressed Fluid Surface

If the input fluid was compressed with the [Fluid Compress](https://www.sidefx.com/docs/houdini/nodes/sop/fluidcompress.html) SOP, this outputs only the compressed surface. This field is the representation of the liquid within the [FLIP Solver](https://www.sidefx.com/docs/houdini/nodes/dop/flipsolver.html) along with point velocities taken from the simulation. You can use this as a preview of the final surface.

If Transfer Attributes is disabled and the input to this node is a file with Delay Load Geometry enabled, then packed particles will never be loaded from disk with this option, making it useful as a quick preview.

Surface VDB

Outputs a raw VDB after surfacing and filtering, but without conversion to polygons. This can be useful if you need a fog volume for another operation.

Surface Polygons

Outputs the final surface as polygons.

Surface Polygon Soup

Outputs the final surface as a [polygon soup](https://www.sidefx.com/docs/houdini/model/primitives.html#polysoup).

Isovalue

Create the surface where the computed surface volume equals this value. The default (0) creates the surface at the boundary between "any volume" and "no volume". You can increase this value to expand the surface.

Adaptivity

How much tolerance to allow when generating the surface. Higher values given fewer, larger polygons with a less precise match. Lower values give a denser mesh with a more precise match.

Transfer Attributes

Copies the attributes in this list from the input points onto the generated surface.

Attribute Radius

For the attributes listed in Transfer attributes, this is the radius used for smoothing the sampled attribute values, as a multiplier on Particle Separation. Higher values will smooth out the attribute values more.

Attribute Samples

For the attributes listed in Transfer attributes, this is the number of points to sample when transferring particle attributes to the mesh. More samples give smoother attribute values, especially for velocities and motion blur if rendering with [Geometry Velocity Blur](https://www.sidefx.com/docs/houdini/nodes/obj/geo.html#geometry_velocity_blur).

Visualize

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\915b6bbbb286475c805cad0d9a968bbb\4179e8c3f14d4151b1021e4e63c83fea.jpg)

Choose "Velocity" or "Vorticity" to visualize the values as surface colors in the viewer.

Filtering

You will often need filtering to smooth the raw surface generated from particles, especially when the Method is "Spherical".

Filtering is often required to further smooth the raw surface generated from the particles, particularly when the surfacing Method is set to Spherical. Enabling the Dilate and Erode filters will blend together nearby particles, closing gaps in the surface, which can be further smoothed with the various Smooth operations. Setting Final Smooth to Gaussian will yield very smooth flat surfaces, for example in a tank before a splash. However, it may also blur out any fine detail in the splash area. To correct this problem enable the Mask parameter on Final Smoothing and create a smoothing mask in areas of low velocity and / or viscosity, so only the slow-moving, less turbulent parts of the liquid will be smoothed.

Dilate

Expand the surface outward by the specified number of voxels. This filter will apply only to masked areas if its Mask parameter is enabled.

Smooth

Smooth the surface using the specified filter for the number of iterations. This filter is applied after any dilation and will apply only to masked areas if its Mask parameter is enabled.

Erode

Reduce the surface inward by the specified number of voxels. This filter is applied after any smoothing and will apply only to masked areas if its Mask parameter is enabled.

Final Smooth

Smooth the surface again using the specified filter for the number of iterations. This filter is applied after any erosion and will apply only to masked areas if its Mask parameter is enabled.

Mask

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\e3686eb124614c6295283a6cdbef4985\65b2419e8ab44c0db283de7fb951c300.jpg)

See [how to mask filters](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface.html#mask) above.

Velocity Range

Generate a filter mask from the fluid velocity, where surface areas with velocity below the minimum speed get full filtering, while areas above the maximum speed get none.

Vorticity Range

Generate a filter mask from the fluid vorticity, where surface areas with vorticity below the minimum speed get full filtering, while areas above the maximum vorticity get none.

Collision Offset

Generate a filter mask within the specified world-space offset of any collision objects or volumes connected to the second input.

Mask Input

Use volumes in the geometry connected to this node’s third input ("Mask volumes") to mask the filters.

The field next to Mask input lets you specify a group within the input. If you leave it blank, this node will use all geometry in the input. Or you can specify a specific volume by name using group syntax, for example @name=mask.

Combine Operation

If you specify multiple mask fields (for example, turning on Velocity range and Vorticity range, or specifying multiple mask volumes in the Mask input field), the node uses this operation to combine them.

Mask Smooth

Smooth the combined filter mask before using it to mask any surface filtering. Note this parameter is for smoothing the mask volume. It is not about masking the smooth filter.

Limit Bandwidth

Restrict the mask to allow filtering only within the specified voxel bandwidth from the original raw surface generated from the particles.

Visualize Mask

Visualize the amount of masking as surface colors in the viewer.

The parameters above will be enabled if Visualize Mask is on, so it can be quicker to modify the masking parameters while visualized, but before being applied to any of the above filters with their Mask parameter.

Regions

The controls on this tab let you limit the surfacing to a bounding box, exclude surfacing inside geometry, and/or only surface the area visible to the camera.

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\f810cf410dec41c99646561563d92cfe\5e8ad1389e7d45ada0fa57230001f52e.jpg)

  

Region Voxel Scale

This node represents the regions internally as VDB volumes, with a base resolution of Particle Separation multiplied by Voxel Scale. This is a multiplier on the scale of the voxels in the region volumes. Increasing the scale makes the regions faster to compute but makes clipping less precise. Lowering the scale is slower but more precise. Do not decrease this value below 1.

Collisions

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\2ea4cc40a9a84a469f682901a65f3caa\d65a0ef7d11445e18f5e9398227276ff.jpg)

Subtract Collision Volumes

When this option is enabled, the node does not generate surface inside geometry or volumes from this node’s second input ("Collision objects and volumes").

Collision Offset

Expand the subtracted area beyond the input geometry by this many Houdini units.

Bounding Box

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\8dff89b233bb4bfc976bc4d0d6e528a9\931d99bf587b412eb6e721f5178ca545.jpg)

Use Bounding Box

Only generate the surface inside a bounding box.

When this parameter is on, you can use the 

![](https://www.sidefx.com/docs/houdini/icons/TOOLS/handles.svg)

 Handles tool in the viewer to size and position the bounding box.

Size

The size of the bounding box.

Center

The center of the bounding box.

Close Boundaries

Create walls at the boundaries of the box to enclose the surface. When this is off, the node simply clips the surface at the boundaries and leaves the surface open.

Flattening

These parameters are available when Use bounding box is on. They are useful for flattening the edges of a simulated fluid surface box, to make it easy to match the edges of the simulated fluid with a surrounding ocean surface. The flattening is smoothly tapered from full flattening at the edges inward to the Flatten distance from the edges.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/fluid_surface_flatten.svg)

  

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\6fd33340c72144a1b3e0d6a346b7790e\365b73c9c0094a9b98afba25d73406fc.jpg)

Flatten Geometry

Flatten the edges of the surface to make it easy to match the edges of the simulated fluid with a surrounding ocean surface. This operation works best with a mesh that is already fairly close to flat. It can generate overlapping polygons if the fluid has splashes and waves at the boundaries. Turn on Rebuild SDF to help ensure smooth surfaces around the edges.

Rebuild SDF

Rebuild the VDB signed-distance field after flattening, which can remove artifacts from flattening splashes around the boundary and provide a smoother final mesh.

None

Do not rebuild the SDF.

Full Resolution

Use full resolution when converting back and forth between polygons and VDBs during flattening. This setting gives the most accurate results but can be very expensive with very high-resolution meshes.

Adaptive

Use the top-level Adaptivity parameter when converting back and forth between polygons and VDBs during flattening. This setting is less accurate than Full Resolution, but can be significantly less expensive in time and memory.

Output Flattened Attribute

Output a flattened point attribute on the polygonal geometry that indicates how far the point lies within the Flatten Distance to the boundary, normalized from zero to one. This attribute can be used to scale procedural displacement shading to apply only on the flattened part of the fluid.

Suppress Near Collisions

Do not flatten the fluid near any collision geometry or volumes (see [Subtract collision volumes](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface.html#docollisions) above). This option helps avoid flattening the bottom of a fluid when there is a collision object representing the bottom of the fluid domain, such as a riverbed.

Collision Bandwidth

The distance from any collision input at which to suppress flattening if Suppress Near Collisions is enabled, specified as multiples of the Particle Separation.

Plane

The plane across which to flatten.

Shape

The shape of the tapering from the edges. "Rectangle" gives you a dilating rectangle with corners, "Circle" gives you a dilating circle.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/flatten_rectangle_circle.svg)

Water Level

The "resting" ocean level to flatten to at the edges.

Max Height

The surface is smoothly scaled down from this maximum height at Flatten distance from the edges, to the Water level at the edges.

Flatten Distance

The fluid will be flattened to this distance within the flattening region with a smooth falloff.

Pad Bounds

Extend the flattening plane this far outside the bounding box. This padding will affect both polygonal and volume outputs. For large scale extension of the mesh, use the Extrude Polygons option.

Extrude Polygons

Extrude the polygons at the edge of the mesh outwards to create a large plane with the liquid surface in the middle. This can be useful to generate a large, flat ocean surface with the simulated surface in the middle, and then apply ocean displacements to the entire thing. This is only available when Closed boundaries is off and Pad bounds is on.

Tip

If the resulting extruded geometry is not completely flat, increase the Pad Bounds.

None

Do not extrude.

Planar

Do a single extrusion along the plane. This method is faster but results in triangles along the diagonal directions.

Along Each Axis

Perform separate extrusions along each axis, which is more expensive but results in quads along the diagonal directions.

Extrude Distance

The distance to extrude the mesh boundary polygons in all horizontal directions.

Extrude Division

The number of polygonal divisions in the extruded geometry.

Camera

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\f5ab836fa5d04ddda10cab775d5e4efb\8878a861c3d0426da9f8fe4934c337cf.jpg)

Camera

Clip the fluid surface to the specified camera’s frustum.

If the points are from a packed geometry and the node loading the points has Delay load geometry turned on, only the visible particles will be loaded from disk.

Z Near

The distance from the camera to start the clip region.

Z Far

The distance from the camera to stop the clip region.

Use Camera’s Window

If set, use the camera’s window scale, offset, and crop parameters in addition to the following Window X/Y settings.

Window X/Y

The min/max portions of the camera’s view to fill with the clip region. This allows you to add padding to ensure good boundary conditions or focus into a key area of the scene.

Close Boundaries

Create closed walls at the boundaries of the frustum. Otherwise the surface will be clipped at the boundaries.

INPUTS

Particles and Volumes

Particle geometry for surface generation and optional volumes.

Collision Objects and Volumes

Geometry and SDF volumes to subtract from the fluid surface.

Mask Volumes

Fog volumes to be used as a mask to surface filtering.

See also

 [FLIP fluid object](https://www.sidefx.com/docs/houdini/nodes/dop/flipobject.html)

 [FLIP Solver](https://www.sidefx.com/docs/houdini/nodes/dop/flipsolver.html)

 [VDB from Particle Fluid](https://www.sidefx.com/docs/houdini/nodes/sop/vdbfromparticlefluid.html)

 [VDB from Particles](https://www.sidefx.com/docs/houdini/nodes/sop/vdbfromparticles.html)

 [Fluid Compress](https://www.sidefx.com/docs/houdini/nodes/sop/fluidcompress.html)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\9394d92db7fd4d87afede6b98490e414\flipobject.png)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\745c9e40829e4489a43148f542ab64cc\flipsolver.png)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\bf5fdbfbfd5a472592a6d74a3f5bd773\suvork5cyii=.png)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\5d72db0e79b640169c5b20bc685d230c\romparticles.png)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\bf5fdbfbfd5a472592a6d74a3f5bd773\suvork5cyii=.png)

  

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\aa0d72e8b517403da484655ac49ecc95\ccdd.gif)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\50750e82fa6c451e971bf28982081d71\ec5b2e38f7b348d4b73a473cba4b70dc.jpg)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\c906e4be173545cc8ee3ef301d120003\25fcaeacbdd44c2689c3ae3b82ed604a.jpg)

![POP_Curve_Force.hip](C:/Users/icesy/AppData/Local/YNote/data/qq91E84D8FFDDA23C192C8BDC51BF7FB03/ad043d48c4614a2bbd2b863350094da4/attachment.png "POP_Curve_Force.hip")