---
type: concept
title: Python Script
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "84de1350bbef"
---
Python脚本对象是定义一个建模对象的几何运算符（SOP）的容器。
### Parameters
The Python Script object allows contained geometries to be altered via python script.
## Transform
Translate
To translate 1, 2, and 3 in the x, y, and z directions respectively:
n = hou.pwd()
t = hou.hmath.buildTranslate((1, 2, 3))
n.setCookTransform(t)
Rotate
To rotate 30, 60, and 90 degrees about the x, y, and z axes respectively:
n = hou.pwd()
r = hou.hmath.buildTranslate((30, 60, 90))
n.setCookTransform®
Scale
To scale 2, 3, and 4 along the x, y, and z axes respectively:
n = hou.pwd()
s = hou.hmath.buildScale(2, 3, 4)
n.setCookTransform(s)
Transform
To apply scaling, rotation, and translation in that order:
n.setCookTransform(s*r*t)
Note: n, t, r, s defined as above.
Examples
See drop-down menu to the right of the coding terminal.
## Render
Material
Path to the Material node.
Display
Whether or not this object is displayed in the viewport and rendered. Turn on the checkbox to have Houdini use this parameter, then set the value to 0 to hide the object in the viewport and not render it, or 1 to show and render the object. If the checkbox is off, Houdini ignores the value.
Phantom
Houdini render property
vm_phantom
IFD property
object:phantom
When `true`, the object will not be rendered by primary rays. Only secondary rays will hit the object.
(See the [Render Visibility](https://www.sidefx.com/docs/houdini/props/mantra.html#vm_rendervisibility "Controls the visibility of an object to different types of rays using a category expression. This parameter generalizes the Phantom and Renderable toggles and allows more specific control over the visibility of an object to the different ray types supported by mantra and VEX. (object:rendervisibility)") property).
Renderable
Houdini render property
vm_renderable
IFD property
object:renderable
If this option is turned off, then the instance will not be rendered. The object’s properties can still be queried from within VEX, but no geometry will be rendered. This is roughly equivalent to turning the object into a transform space object.
See **Render Visibility** (`vm_rendervisibility` property).
Display As
How to display your geometry in the viewport.
Polygons as subdivision (Mantra)
Houdini render property
vm_rendersubd
IFD property
object:rendersubd
Render polygons as a subdivision surface. The `creaseweight` attribute is used to perform linear creasing. This attribute may appear on points, vertices or primitives.
When rendering using OpenSubdiv, in addition to the `creaseweight`, `cornerwieght` attributes and the `subdivision_hole` group, additional attributes are scanned to control the behaviour of refinement. These override any other settings:
-   `int osd_scheme`, `string osd_scheme`: Specifies the scheme for OSD subdivision (0 or “catmull-clark”; 1 or “loop”; 2 or “bilinear”). Note that for Loop subdivision, the geometry can only contain triangles.
-   `int osd_vtxboundaryinterpolation`: The Vertex Boundary Interpolation method (see `vm_osd_vtxinterp` for further details)
-   `int osd_fvarlinearinterpolation`: The Face-Varying Linear Interpolation method (see `vm_osd_fvarinterp` for further details)
-   `int osd_creasingmethod`: Specify the creasing method, 0 for Catmull-Clark, 1 for Chaikin
-   `int osd_trianglesubdiv`: Specifies the triangle weighting algorithm, 0 for Catmull-Clark weights, 1 for “smooth triangle” weights.
### Shading
Categories
Houdini render property
categories
IFD property
object:categories
The space or comma separated list of categories to which this object belongs.
Currently not supported for per-primitive material assignment (material SOP).
Reflection mask
Houdini render property
reflectmask
IFD property
object:reflectmask
A list of patterns. Objects matching these patterns will reflect in this object. You can use wildcards (for example, `key_*`) and [bundle references](https://www.sidefx.com/docs/houdini/basics/bundles.html) to specify objects.
You can also use the [link editor pane](https://www.sidefx.com/docs/houdini/ref/panes/linker.html) to edit the relationships between lights and objects using a graphical interface.
The `object:reflectmask` property in Mantra is a computed property containing the results of combining reflection categories and reflection masks.
Refraction mask
Houdini render property
refractmask
IFD property
object:refractmask
A list of patterns. Objects matching these patterns will be visible in refraction rays. You can use wildcards (for example, `key_*`) and [bundle references](https://www.sidefx.com/docs/houdini/basics/bundles.html) to specify objects.
You can also use the [link editor pane](https://www.sidefx.com/docs/houdini/ref/panes/linker.html) to edit the relationships between lights and objects using a graphical interface.
The `object:refractmask` property in Mantra is a computed property containing the results of combining reflection categories and reflection masks.
Light mask
Houdini render property
lightmask
IFD property
object:lightmask
A list of patterns. Lights matching these patterns will illuminate this object. You can use wildcards (for example, `key_*`) and [bundle references](https://www.sidefx.com/docs/houdini/basics/bundles.html) to specify lights.
You can also use the [link editor pane](https://www.sidefx.com/docs/houdini/ref/panes/linker.html) to edit the relationships between lights and objects using a graphical interface.
The `object:lightmask` property in Mantra is a computed property containing the results of combining light categories and light masks.
Volume filter
Houdini render property
vm_volumefilter
IFD property
object:filter
Some volume primitives (Geometry Volumes, Image3D) can use a filter during evaluation of volume channels. This specifies the filter. The default box filter is fast to evaluate and produces sharp renders for most smooth fluid simulations. If your voxel data contains aliasing (stairstepping along edges), you may need to use a larger filter width or smoother filter to produce acceptable results. For aliased volume data, `gauss` is a good filter with a filter width of 1.5.
-   `point`
-   `box`
-   `gauss`
-   `bartlett`
-   `blackman`
-   `catrom`
-   `hanning`
-   `mitchell`
Volume filter width
Houdini render property
vm_volumefilterwidth
IFD property
object:filterwidth
This specifies the filter width for the object:filter property. The filter width is specified in number of voxels. Larger filter widths take longer to render and produce blurrier renders, but may be necessary to combat aliasing in some kinds of voxel data.
Matte shading
Houdini render property
vm_matte
IFD property
object:matte
When enabled, the object’s surface shader will be replaced with a matte shader for primary rays. The default matte shader causes the object to render as fully opaque but with an alpha of 0 - effectively cutting a hole in the image where the object would have appeared. This setting is useful when manually splitting an image into passes, so that the background elements can be rendered separately from a foreground object. The default matte shader is the “Matte” VEX shader, though it is possible to set a different matte shader by adding the `vm_matteshader` render property and assigning another shader. Secondary rays will still use the object’s assigned surface shader, allowing it to appear in reflections and indirect lighting even though it will not render directly.
For correct matte shading of volumes:
1.  Add the `vm_matteshader` property to the object.
2.  Create a **Volume Matte** shader.
3.  Set the density on this shader to match the density on the geometry shader.
4.  Assign this shader to `vm_matteshader`.
Then when the **Matte Shading** toggle is enabled, it will use your custom volume matte shader rather than the default (which just sets the density to 1). If you want fully opaque matte, you can use the matte shader rather than volume matte.
Raytrace shading
Houdini render property
vm_rayshade
IFD property
object:rayshade
Shade every sample rather than shading micropolygon vertices. This setting enables the raytrace rendering on a per-object basis.
When micro-polygon rendering, shading normally occurs at micro-polygon vertices at the beginning of the frame. To determine the color of a sample, the corner vertices are interpolated. Turning on `object:rayshade` will cause the ray-tracing shading algorithm to be invoked. This will cause each sample to be shaded independently. This means that the shading cost may be significantly increased. However, each sample will be shaded at the correct time, and location.
Currently not supported for per-primitive material assignment (material SOP).
### Sampling
Geometry velocity blur
Houdini render property
geo_velocityblur
IFD property
object:velocityblur
This menu lets you choose what type of _geometry velocity blur_ to do on an object, if any. Separate from _transform blur_ and _deformation blur_, you can render motion blur based on point movement, using attributes stored on the points that record change over time. You should use this type of blur if the number points in the geometry changes over time (for example, a particle simulation where points are born and die).
If your geometry changes topology frame-to-frame, Mantra will not be able to interpolate the geometry to correctly calculate Motion Blur. In these cases, motion blur can use a `v` and/or `accel` attribute which is consistent even while the underlying geometry is changing. The surface of a fluid simulation is a good example of this. In this case, and other types of simulation data, the solvers will automatically create the velocity attribute.
No Velocity Blur
Do not render motion blur on this object, even if the renderer is set to allow motion blur.
Velocity Blur
To use velocity blur, you must compute and store point velocities in a point attribute `v`. The renderer uses this attribute, if it exists, to render velocity motion blur (assuming the renderer is set to allow motion blur). The `v` attribute may be created automatically by simulation nodes (such as particle DOPs), or you can compute and add it using the [Point velocity SOP](https://www.sidefx.com/docs/houdini/nodes/sop/pointvelocity.html " Computes and manipulates velocities for points of a geometry. ").
The `v` attribute value is measured in Houdini units per second.
Acceleration Blur
To use acceleration blur, you must compute and store point acceleration in a point attribute `accel` (you can change the acceleration attribute name using the [Acceleration attribute](https://www.sidefx.com/docs/houdini/props/mantra.html#geo_accelattribute "This property is valid only when Geometry motion blur is set to Acceleration Blur. Enter the name of a point attribute to use as the acceleration value when rendering multi-segment acceleration blur. The default is accel, which may be added to geometry automatically by various simulation solvers.") property). The renderer uses this attribute, if it exists, to render multi-segment acceleration motion blur (assuming the renderer is set to allow motion blur). The `accel` attribute may be created automatically by simulation nodes, or you can compute and add it using the [Point velocity SOP](https://www.sidefx.com/docs/houdini/nodes/sop/pointvelocity.html " Computes and manipulates velocities for points of a geometry. ").
When Acceleration Blur is on, if the geometry has a _angular velocity_ attribute (`w`), rapid rotation will also be blurred. This should be a vector attribute, where the components represent rotation speeds in radians per second around X, Y, and Z.
When this is set to “Velocity Blur” or “Acceleration Blur”, deformation blur is not applied to the object. When this is set to “Acceleration Blur”, you can use the [Geo time samples](https://www.sidefx.com/docs/houdini/props/mantra.html#geo_motionsamples "The number of sub-frame samples to compute when rendering deformation motion blur over the shutter open time. The default is 1 (sample only at the start of the shutter time), giving no deformation blur by default. If you want rapidly deforming geometry to blur properly, you must increase this value to 2 or more. Increasing the number of geometry time samples is relatively expensive because Houdini must cook the sub-frame geometry and send it to Mantra. (object:geosamples)") property to set the number of acceleration samples.
![](https://www.sidefx.com/docs/houdini/images/render/motionblur_velocity.jpg)
Velocity motion blur used the velocity attribute (`v`) to do linear motion blur.
![](https://www.sidefx.com/docs/houdini/images/render/motionblur_acceleration.jpg)
Acceleration motion blur uses the change in velocity to more accurately blue objects turning at high speed.
![](https://www.sidefx.com/docs/houdini/images/render/motionblur_angular_acceleration.jpg)
Angular acceleration blur works with object spin, such as these fast-spinning cubes.
### Dicing
Shading quality
Houdini render property
vm_shadingquality
IFD property
object:shadingquality
This parameter controls the geometric subdivision resolution for all rendering engines and additionally controls the shading resolution for micropolygon rendering. With all other parameters at their defaults, a value of 1 means that approximately 1 micropolygon will be created per pixel. A higher value will generate smaller micropolygons meaning that more shading will occur - but the quality will be higher.
In ray tracing engines, shading quality only affects the geometric subdivision quality for smooth surfaces (NURBS, render as subdivision) and for displacements - without changing the amount of surface shading. When using ray tracing, pixel samples and ray sampling parameters must be used to improve surface shading quality.
The effect of changing the shading quality is to increase or decrease the amount of shading by a factor of `vm_shadingquality` **squared** - so a shading quality of 2 will perform 4 times as much shading and a shading quality of 0.5 will perform 1/4 times as much shading.
Dicing flatness
Houdini render property
vm_flatness
IFD property
object:flatness
This property controls the tesselation levels for nearly flat primitives. By increasing the value, more primitives will be considered flat and will be sub-divided less. Turn this option _down_ for more accurate (less optimized) nearly-flat surfaces.
Ray predicing
Houdini render property
vm_raypredice
IFD property
object:raypredice
This property will cause this object to generate all displaced and subdivided geometry before the render begins. Ray tracing can be significantly faster when this setting is enabled at the cost of potentially huge memory requirements.
Disable Predicing
Geometry is diced when it is hit by a ray.
Full Predicing
Generate and store all diced geometry at once.
Precompute Bounds
Generate all diced geometry just to compute accurate bounding boxes. This setting will discard the diced geometry as soon as the box has been computed, so it is very memory efficient. This can be useful to improve efficiency when using displacements with a large displacement bound without incurring the memory cost of full predicing.
When ray-tracing, if all polygons on the model are visible (either to primary or secondary rays) it can be more efficient to pre-dice all the geometry in that model rather than caching portions of the geometry and re-generating the geometry on the fly. This is especially true when global illumination is being computed (since there is less coherency among rays).
Currently not supported for per-primitive material assignment (material SOP).
Shade curves as surfaces
Houdini render property
vm_curvesurface
IFD property
object:curvesurface
When rendering a curve, turns the curve into a surface and dices the surface, running the surface shader on multiple points across the surface. This may be useful when the curves become curved surfaces, but is less efficient. The default is to simply run the shader on the points of the curve and duplicate those shaded points across the created surface.
### Geometry
Backface removal (Mantra)
Houdini render property
vm_rmbackface
IFD property
object:rmbackface
If enabled, geometry that are facing away from the camera are not rendered.
Procedural shader
Houdini render property
shop_geometrypath
Geometry SHOP used by the renderer to generate render geometry for this object.
Force procedural geometry output
Houdini render property
vm_forcegeometry
Enables output of geometry when a procedural shader is assigned. If you know that the procedural you have assigned does not rely on geometry being present for the procedural to operate correctly, you can disable this toggle.
Polygons as subdivision (Mantra)
Houdini render property
vm_rendersubd
IFD property
object:rendersubd
Render polygons as a subdivision surface. The `creaseweight` attribute is used to perform linear creasing. This attribute may appear on points, vertices or primitives.
When rendering using OpenSubdiv, in addition to the `creaseweight`, `cornerwieght` attributes and the `subdivision_hole` group, additional attributes are scanned to control the behaviour of refinement. These override any other settings:
-   `int osd_scheme`, `string osd_scheme`: Specifies the scheme for OSD subdivision (0 or “catmull-clark”; 1 or “loop”; 2 or “bilinear”). Note that for Loop subdivision, the geometry can only contain triangles.
-   `int osd_vtxboundaryinterpolation`: The Vertex Boundary Interpolation method (see `vm_osd_vtxinterp` for further details)
-   `int osd_fvarlinearinterpolation`: The Face-Varying Linear Interpolation method (see `vm_osd_fvarinterp` for further details)
-   `int osd_creasingmethod`: Specify the creasing method, 0 for Catmull-Clark, 1 for Chaikin
-   `int osd_trianglesubdiv`: Specifies the triangle weighting algorithm, 0 for Catmull-Clark weights, 1 for “smooth triangle” weights.
Render as points (Mantra)
Houdini render property
vm_renderpoints
IFD property
object:renderpoints
Controls how points from geometry are rendered. At the default settings, **No Point Rendering**, only points from particle systems are rendered. Setting this value to **Render Only Points**, will render the geometry using only the point attributes, ignoring all vertex and primitive information. **Render Unconnected Points** works in a similar way, but only for points not used by any of the geometry’s primitives.
Two attributes control the point primitives if they exist.
`orient`
A vector which determines the normal of the point geometry. If the attribute doesn’t exist, points are oriented to face the incoming ray (the VEX `I` variable).
`width`
Determines the 3D size of the points (defaults to 0.05).
Use N for point rendering
Houdini render property
vm_usenforpoints
IFD property
object:usenforpoints
Mantra will initialize the `N` global from the `N` attribute when rendering point primitives. When disabled (the default), point normals will be initialized to face the camera.
Metaballs as volume
Houdini render property
vm_metavolume
IFD property
object:metavolume
Render metaballs as volumes as opposed to surfaces. The volume quality for metaballs will be set based on the average size of all metaballs in the geometry, so increasing or decreasing the metaball size will automatically adjust the render quality to match.
Coving
Houdini render property
vm_coving
IFD property
object:coving
Whether Mantra will try to prevent cracks.
Coving is the process of filling cracks in diced geometry at render time, where different levels of dicing side-by-side create gaps at T-junctions.
The default setting, **Coving for displacement/sub-d**, only does coving for surfaces with a displacement shader and subdivision surfaces, where the displacement of points can potentially create large cracks. This is sufficient for more rendering, however you may want to use **Coving for all primitives** if you are using a very low shading rate or see cracks in the alpha of the rendered image.
Do not use **Disable coving**. It has no performance benefit, and may actually harm performance since Houdini has to render any geometry visible through the crack.
`0`
No coving.
`1`
Only displaced surfaces and sub-division surfaces will be coved.
`2`
All primitives will be coved.
Material Override
Houdini render property
vm_materialoverride
IFD property
geometry:materialoverride
Controls how material overrides are evaluated and output to the IFD.
When set to **Evaluate Once**, any parameter on the material, that uses channels or expressions, will be evaluated only once for the entire detail. This results in significantly faster IFD generation, due to the material parameter assignment being handled entirely by Mantra, rather than Houdini. Setting the parameter value to **Evaluate for Each Primitive/Point** will evaluate those parameters for each primitive and/or point. It’s also possible to skip material overrides entirely by setting the parameter value to **Disabled**.
Automatically Compute Normals (Old)
Houdini render property
vm_computeN
IFD property
geometry:computeN
Whether mantra should compute the N attribute automatically. If the N attribute exists, the value will remain unchanged. However, if no N attribute exists, it will be created. This allows polygon geometry which doesn’t have the N attribute already computed to be smooth shaded.
Not supported for per-primitive material assignment (material SOP).
Ignore geometry attribute shaders
Houdini render property
vm_overridedetail
IFD property
object:overridedetail
When geometry has shaders defined on a per-primitive basis, this parameter will override these shaders and use only the object’s shader. This is useful when performing matte shading on objects.
Not supported for per-primitive material assignment (material SOP).
## Misc
Set Wireframe Color
Use the specified wireframe color
Wireframe Color
The display color of the object
Viewport Selecting Enabled
Object is capable of being picked in the viewport.
Select Script
Script to run when the object is picked in the viewport. See [select scripts](https://www.sidefx.com/docs/houdini/commands/_guide.html) .
Cache Object Transform
Caches object transforms once Houdini calculates them. This is especially useful for objects whose world space position is expensive to calculate (such as [Sticky objects](https://www.sidefx.com/docs/houdini/nodes/obj/sticky.html "Creates a sticky object based on the UV’s of a surface, usually for parenting.")), and objects at the end of long parenting chains (such as [Bones](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html "The Bone Object is used to create hierarchies of limb-like objects
that form part of a hierarchy …")). This option is turned on by default for Sticky and Bone objects.
See the **OBJ Caching** section of the [Houdini Preferences](https://www.sidefx.com/docs/houdini/ref/windows/mainprefs.html#objcache) window for how to control the size of the object transform cache.
Shade Open Curves In Viewport
Any open curves contained in this object will be lit when the viewport is set to do so.
Turning this on will also use a GLSL shader better suited to hair if the `whitehair` or `guardhair` attributes are found in the geometry.
Curves with the `width` attribute will also be rendered as thick ribbons with varying width in shaded modes.
## LOCALS
IPT
This is typically -1. However, if the object is performing point instancing, then this variable will be set to the point number of the template geometry. For the IPT variable to be active, the Point Instancing parameter must be turned on in this object.
Note
This variable is deprecated. Use the [instancepoint](https://www.sidefx.com/docs/houdini/expressions/instancepoint.html "Returns the point number currently being instanced onto.") expression function instead.