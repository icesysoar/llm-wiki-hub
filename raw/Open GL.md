---
type: concept
title: Open GL
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "c5ac7cc0f163"
---
使用硬件加速的3D视口渲染器渲染图像。
### Parameters
The OpenGL output operator renders the scene using the graphics hardware present on the system. It uses the 3D viewport renderer, but without rendering any handles, guides or other decorations. A limited set of display options is provided as parameters. This operator can be used in non-graphical applications, such as hbatch or hython.

A scene from either Objects or LOPs can be rendered.

Note

A GL3.3-capable graphics device must be present on the system in order to render from this output driver.

## PARAMETERS

Render

Begins the render with the last render control settings.

Render Control

Opens the render control dialog to allow adjustments of the render parameters before rendering.

Valid Frame Range

Controls whether this render node outputs the current frame (**Render any frame**) or the image sequence specified in the **Start/End/Inc** parameters (**Render Frame Range**).

**Render Frame Range (strict)** will render frames start to end when it is rendered, but will not allow frames outside this range to be rendered at all. **Render Frame Range** will allow outside frames to be rendered. This is used in conjunction with render dependencies. It also affects the behavior of the Output Override for Frame Range in the [Render Control](https://www.sidefx.com/docs/houdini/ref/windows/rendercontrol.html) dialog.

Two possible cases where you would want strict behavior:

-   A 60 frame walk cycle written out to a geo, but part of a larger ROP net to render out a larger frame range.
    
-   A texture loop from 1-20.
    

Otherwise, you will usually set this to non-strict.

Render Current Frame

Renders a single frame, based on the value in the playbar or the frame that is requested by a connected output render node.

Render Frame Range

Renders a sequence of frames. If an output render node is connected, this range is generally ignored in favor of frames requested by the output render node.

Render Frame Range (Strict)

Renders a sequence of frames. If an output render node is connected, this range restricts its requested frames to this frame range.

Start/End/Inc

Specifies the range of frames to render (start frame, end frame, and increment). All values may be floating point values. The range is inclusive.

These parameters determine the values of the local variables for the output driver.

Render With Take

The output driver will switch to this take before rendering and then restore the current take when rendering is done. Choose **Current** to use the current take when rendering.

Tip

Use `chs("take")` to use this value in other parameters. See the [chs](https://www.sidefx.com/docs/houdini/expressions/chs.html "Evaluates the string value of a parameter at the current time.") expression function for more information.

## Scene

Source

The scene can be fetched from **Objects** or **LOPs**.

Camera

The camera which defines the scene. In Objects, this is a Camera Object. In LOPs, this is a camera primitive.

Scene Path

The root path for the Object scene. All objects and lights in this object network will be rendered. This only applies to a Object **Source**.

SOP Source

Which geometry to render in the object, either the SOP with the display or the render flag set. This only applies to an Object **Source**.

Candidate Objects

Specifies which objects will be rendered in the scene, if their display flags are also set. The paths can be absolute (`\/obj\/geo1`) or relative to the scene path (geo1, with a scene path of `\/obj`). Wildcards can be used (`\*`, `?`), as can the exclusion operator (`^`). `\* \^geo?` would render all objects except for those like `geo1`, `geo2`, `geoN`. This only applies to an Object **Source**.

Force Objects

Specifies that the objects that match the names or patterns of this parameter should always appear in the scene, even if their display flag is off. This only applies to an Object **Source**.

Note

This overrides the **Candidate Objects** and **Exclude Objects** parameters.

Exclude Objects

Do not include objects in the scene if they match the names or patterns given by this parameter. This overrides both **Candidate** and **Force Objects**. This only applies to an Object **Source**.

Candidate Lights

Specifies which lights will be used to light the scene, if they are enabled. The same rules apply to the light mask as

Force Lights

The lights matching the names or patterns of this parameter will always be included, even if they are disabled. This only applies to an Object **Source**.

Exclude Lights

Do not include lights in the scene if they match the names or patterns given by this parameter. This overrides both **Candidate** and **Force Lights**. This only applies to an Object **Source**.

LOP Network

The LOP Network or LOP Node that generates the scene from when the **Source** is LOPs.

Render Purpose

Include primitives whose purpose is `Render`. This only applies to an LOPs **Source**.

Proxy Purpose

Include primitives whose purpose is `Proxy`. This only applies to an LOPs **Source**.

Guide Purpose

Include primitives whose purpose is `Guide`. This only applies to an LOPs **Source**.

Initialize Simulation OPs

Forces all simulation OPs to be reset. This includes DOP Networks, POP SOPs, and other OPs that cache their results.

Show in Viewport Menu

When enabled, this ROP will appear in the viewport’s render menu.

Override Camera Resolution

Normally, the resolution channels on the camera determine the output resolution. Enabling this parameter allows an alternate resolution to be used.

Resolution

Allows you to override the camera resolution.

Pixel Aspect Ratio

The pixel aspect ratio represents the width of a pixel divided by the height of a pixel. It is not the aspect ratio of the image (which is determined by the resolution of the image). This parameter does not affect rendering, it is only used to change how images are displayed, by stretching the pixels by this factor.

Sheet Size

Individual frames will be collected into composite sheets when this is enabled. This parameter controls the arrangement of frames in a single sheet. The first value specifies the number of rows, while the second one controls the columns.

Background Image

Specifies a background image to use, either a file or a COP node reference with op:. The background image is fit to the viewport area if the aspect ratios or size don’t match.

Viewport Comment

Places a comment in the upper left corner of the image, in addition to any viewport comment on the camera.

## Output

Output Image

The image or device where the resulting image will be rendered. You can set this value to `ip` which renders the image in MPlay, or you can save it to an image. The following image types are supported: `.pic`, `.tif`, `.sgi`, `.pic.gz`, `.rat`, `.jpg`, `.cin`, `.rta`, `.bmp`, `.tga`, `.rad`, `.exr`, and `.png`.

Include `$F` in the file name to insert the frame number. This is necessary when rendering animation. See [expressions in file names](https://www.sidefx.com/docs/houdini/render/expressions.html "How to use variables and expressions in file path fields to generate numbered and unique filenames.") for more information.

Image Format

The image format or device for the output image. If you leave this at the default value of **Infer from filename**, the image format will be selected based on the file extension (eg. `.pic` will automatically generate a Houdini format image).

The options inside the box that follows are image format-specific.

Create Intermediate Directories

Create intermediate parent directories for output files as needed. This currently only applies to generated scripts, images, and shadow maps.

Save Retries

The number of times the image save will be attempted again before it reports that the save failed.

Image Type

The type of image to render:

Color Image

Regular 2D RGBA image of the color beauty pass (RGBA).

Depth Image

2D depth image, with depth in camera space (fp32 single channel).

360' Cube map

360 degree render of the beauty pass to a cube map (RGBA).

Color Correction

Style of color correction to apply to the output image.

None

No color correction, leave in linear colorspace.

LUT and Gamma

Apply a LUT (lookup table) file and a gamma correction.

OpenColorIO

Optionally apply OpenColorIO looks and convert to the specified colorspace from linear colorspace.

Gamma

Applies gamma correction to output image. This should usually be left at 1.0.

Display LUT

Applies a LookUp Table (LUT) to the output image, after gamma is applied.

OCIO Colorspace

The OpenColorIO colorspace to transform the linear colors produced by the OpenGL render. If empty, leave as linear.

OCIO Looks

A optional whitespace-separated list of OpenColorIO looks to apply to the color data before converting to the specified colorspace.

## Display Options

Note

The capabilities of the graphics hardware and driver may cause some of these options to be disabled.

Antialias

Enables high-quality rendering by smoothing jagged edges of lines and polygons. Increasing this setting will proportionately increase the amount of framebuffer memory used. 4× and 8× modes should only be used if the graphics memory installed on the graphics card is 1GiB or higher.

High Dynamic Range

Enables High Dynamic Range (HDR) rendering which produces higher quality results for volumes and transparency. It can also be used in conjunction with a LUT to view superwhite values. If enabled, 16b or 32b floating point HDR images are rendered. Enabling this option doubles or quadruples the framebuffer size.

Off

Render using normal dynamic range, black to white, to a 8b framebuffer.

HDR (16b FP)

Full HDR (32b FP)

Stereo Mode

When the **Camera** is a stereo camera, this determines the type of output image(s).

Anaglyph

A red/cyan anaglyph image is produced, for use with red/cyan glasses.

Separate Left/Right Images

Two images are produced for each frame, one for the left eye and the other for the right.

Left/Right

The images for the left and right eyes are placed side by side in the same image, left eye on the left.

Right/Left

The images for the left and right eyes are placed side by side in the same image, left eye on the right.

Over (L)/Under (R)

The images for the left and right eyes are placed one above the other in the same image, left eye on the top.

Over (R)/Under (L)

The images for the left and right eyes are placed one above the other in the same image, left eye on the bottom.

Shading Mode

Select a [shading mode](https://www.sidefx.com/docs/houdini/basics/view.html) for all geometry in the scene.

Display Textures

Materials will include textures if enabled.

High Quality Light Shading

Area and environment lights are rendered with more accurate representations. Spotlight falloff and ramp-based attenuation are also incorporated into the shading. This mode attempts to closely match the results seen in mantra at the expense of performance.

Note

This may disable Antialiasing if the graphics hardware does not support certain OpenGL features.

This shading does not apply to transparent objects if **Transparency** is enabled. Normal shading is used instead. Additionally, this feature requires **Material Shaders**.

Light Sampling

The number of samples to use when rendering area and environment lights in **High Quality Light Shading** mode. It is ignored when this mode is not active. Higher numbers produce more accurate results, at a slight performance hit.

Shadows

Enables light shadowing from those lights which have their **Shadow Type** parameter set to a shadowing method. This option decreases performance and increases graphics memory use but greatly improves the quality of the viewport display.

Tip

The light’s shadow map(s) are re-calculated when its position, orientation or projection changes. You may want to disable shadows while editing a light to improve interactivity.

Increasing the shadow quality will improve the shadow’s visualization, especially for area and environment lights, with a corresponding performance decrease.

Point

All lights are shadowed as if they were point lights, producing hard shadow edges. This is the lowest quality setting.

Antialiased Point

Improve the shadow edges by softening jagged edges caused by light map aliasing.

Area

Area lights use many shadow maps to produce a soft shadow effect. Environment lights perform more sampling. This has no effect on other light types (point will be used in these cases). Moving an area light with this option on will result in slower interactivity.

Antialiased Area

Soften the jagged edges of shadows, which improves the soft shadow look.

Shadow Map Size

Controls the resolution of the shadow maps. Increasing the shadow map size will reduce the jaggedness of shadow edges and improve fine shadow detail. Larger maps may affect performance and will use more graphics memory.

Ambient Occlusion

Enable screen-space ambient occlusion, which shadows objects based on the amount of ambient light that could reach a surface. Areas in corners and sunken areas will receive shadowing. The numeric value increases the quality and range of effect of the occlusion. Enabling this option will slow performance somewhat. **High Quality Light Shading** and **Material Shaders** are required for occlusion to work.

Note

The HIP file’s [Unit Length parameter](https://www.sidefx.com/docs/houdini/ref/windows/mainprefs.html#hipfile) affects how far away the shadowing effect extended.

Transparency

Draw objects with per-pixel alpha, texture maps with alpha or material transparency using alpha blending (via an over operation). When off, pixels with non-zero alpha are drawn and zero alpha pixels are discarded. The quality of the transparency can also be selected, with the higher quality options impacting performance.

Cutout only

Samples are discarded if Alpha is zero, otherwise they are drawn as fully opaque.

Low

Transparent objects are only sorted by object order. Overlapping surfaces within an object may be rendered incorrectly, unless objects are sorted manually in the scene hierarchy list or a [Sort SOP](https://www.sidefx.com/docs/houdini/nodes/sop/sort.html "Reorders points and primitives in different ways, including randomly.") is used at the end of the object’s geometry chain.

Medium

Transparent objects are sorted per-pixel, producing a more realistic display of complex transparent objects.

High

Transparent objects are sorted per-pixel and are shadowed, if shadows are enabled. More render passes are used to resolve transparent layering issues, if they are needed.

Motion Blur

Enable a motion blur effect, based on the camera’s shutter. The scene is rendered at multiple subframes around the current frame and blended. When enabled, the parameter specifies the number of subframes to render. Increasing the number of subframes improves the image quality, at the expense of a longer render time.

Displacement

Enable displacement mapping for those materials with a GL Displacement Map parameter. The slider field can be used to increase or decrease the tessellation factor of the displaced surface. OpenGL 4.0 is required for this feature.

Reflections

Enable reflections using reflection cubemaps. This simulates reflections by rendering the scene to a cubemap with the reflection object removed, at the reflective object’s centroid. Reflective objects are those with a material with a `GL Reflect` parameter that is greater than zero.

Min Reflection

Require that a material have a `GL Reflect` parameter set to at least this value, otherwise do not consider the material reflective. No reflection cubemaps are generated for objects with non-reflective materials. This can reduce the number of reflection maps generated for very dull materials.

HDR Reflections

Use a FP16 cubemap to store high-dynamic range reflections. When disabled, an 8b cubemap is used (standard 0-1 color range). HDR reflections look brighter, but use twice the texture memory.

Reflection Map Size

Resolution of the cubemap’s square images, in pixels. Larger maps produce sharper reflections at the expense of increased reflection map generation time and texture memory use.

Backface Culling

When enabled, remove all polygons facing away from the camera (as defined by their vertex winding order).

## Effects

Fog Object

Specify a node path which contains the fog and bloom parameters below. Any parameter that is found will override its parameter on this node. See [Fog Properties](https://www.sidefx.com/docs/houdini/props/viewport.html#fog).

Uniform Fog

Draw an uniform fog effect in the viewport. Traditional fog applied to geometry based on its distance from the camera. The fog color is blended with the geometry’s color. There is no lighting of the fog, except by the _Sun_ parameter.

Fog Density

Factor that controls how dense the fog is. Small values are generally required to avoid turning the entire scene into a constant fog color. If the scene is in different units than meters (eg centimeters), this will need to be adjusted to keep the same look.

Fog Opacity

Multiplier on the fog once it has been computed to quickly increase or decrease the fog effect.

Fog Color

Tint the fog with this color. Darker colors will cause the fog to look more like smoke.

Fog Depth Range

For `Uniform` fog, this is the depths where the fog begins and ends, in unit distance from the camera. All depths beyond the end are clamped to the end depth. Any depth before the fog start do not have fog applied.

For `Volumetric` fog, this is the portion of the view frustum that will have lit fog, in world units (depth). The depth range should be as tightly bound as possible around the lights which use fog scattering to avoid artifacts.

Fog Clip Distance

Maximum distance which uniform is applied. Objects beyond this distance are not affected by fog.

Fog Height Mode

Fog can be limited to areas above or below an elevation in the scene. Fog will begin at the height value, and slowly increase to its density at height plus falloff (or height minus falloff in the `Below` case). The falloff gives a softer transition from areas with no fog to areas with fog.

Fog Height

Where the fog begins, in world units vertically (Y for Y-up, Z for Z-up).

Fog Height Falloff

Gradual transition period starting at the fog height, in world units.

Fog Sun Bloom

Use a directional light in the scene to do simple lighting when in **Uniform** mode. The direction and color of the light is used to blend between the fog and light colors. The **Light Intensity** adjusts the intensity of sun effect. Increasing the bloom increases the amount of fog lit by the sun.

Fog Sun Intensity

Multiply the distant light intensity by this value if **Fog Sun Bloom** is enabled.

Volumetric Fog

Draw lit fog using a frustum-aligned volume, lit by the lights in the scene. Many of the parameters are the same as their uniform fog counterparts.

Volume Fog Quality

The quality determines the resolution of the lit volume. Low quality is fast but coarse, while High quality is more accurate but much slower. Medium provides a balance between quality and performance.

Fog Light Intensity

The default light intensity for all lights that do not have the `gl_fogintensity` property on them. By default this is 1 (all lights contribute to the lit fog). This can be set to zero so that only lights with `gl_fogintensity` contribute to the lighting. This setting only affects _Volumetric Fog_.

Fog Light Scattering

The first value controls the intensity of the lit fog when the light ray is parallel to the viewing direction. The second controls the intensity when the light ray is perpendicular to the viewing direction. Bright light blooms can be reduced by reducing the first value while still keeping god rays visible. This setting only affects _Volumetric Fog_, and can be overridden per-light with `gl_fogscattering` property on the light node.

Bloom

Bloom is a simple effect that mimics subtle atmospheric or lens effects around bright spots in the scene.

Bloom Scale

Modifies the radius of the bloom, which is initially based on the brightness of the pixel being bloomed. This will also affect the intensity of the bloom (larger blooms reduce the overall intensity of the bloom).

Bloom Intensity

Brighten or darken the blooms.

Bloom Threshold

Any pixel brigher than this threshold will begin to bloom. Increasing this value will produce less blooming in the scene.

Depth of Field

Enable depth of field effect, based on the camera’s f-stop, aperture, and focus distance.

Bokeh Effect

Simulate [Bokeh](http://en.wikipedia.org/wiki/Bokeh) flares for bright points in out-of-focus areas. This is only available if the GPU and operating system supports OpenGL 4.4 (which excludes MacOS).

None

Do not simulate bokeh.

Circular

Circular or oval bokeh effect (use the **Bokeh Aspect** below to create ovals).

From File

Use an image file to define the bokeh shape. Bright and opaque pixels define the shape, dark or transparent pixels define the background. If the image is not monochrome, the view uses the image colors to tint the bokeh flare.

From COP

This is the same as **From File** above, but gets the image from the output of a [compositing node](https://www.sidefx.com/docs/houdini/nodes/cop2/index.html "Composite nodes create, filter, and manipulate image data.") instead of a file. The bokeh image must be in the color plane (C).

Bokeh Image File

Image file to use when **Bokeh Effect** is **From File**.

Bokeh COP

COP path to use when **Bokeh Effect** is **From COP**.

Bokeh Aspect

Optionally stretches the bokeh shape vertically or horizontally. The default value `1` does not stretch the shape (so if **Bokeh** is “Circular”, the shape will be a circle). Values greater than `1` stretch the shape horizontally. Values less than `1` stretch the shape vertically.

Bokeh Boost

Artificially increases the brightness of bokeh hot spots. This can also produce more overall bokeh in the scene.

## Geometry

Volume Quality

Very Low

An axis-aligned volume is drawn, with volume slices parallel to one of the volume box’s faces. This is the fastest option but produces a visual pop as the volume is rotated in the view. Overlapping volumes will produce visual artifacts.

Low

A view-aligned volume is drawn, with volume slices drawn parallel to the viewport. This produces a higher quality visualization of the volume. Overlapping volumes will render correctly. The slices are widely spaced apart. This is the fastest of the view-aligned options, and is useful for working interactively with dozens of volumes.

Normal

A view-aligned volume is drawn, with volume slices packed more densely together. More slices are drawn so the overall render is slower than 'Low'. This option strikes a good balance between quality and performance.

High

A view-aligned volume is drawn with slices drawn very densely. This is the slowest but best quality rendering of volumes.

Tip

Enabling **HDR Rendering** will remove any banding artifacts from volumes.

Geometry LOD (Level of Detail)

Increases or decreases the display resolution of [Metaballs](https://www.sidefx.com/docs/houdini/nodes/sop/metaball.html "Creates metaballs and meta-superquadric surfaces."), NURBS, and Bezier surfaces.

Wire Width

The width, in pixels, of wireframe and wire-over-shaded lines.

Wire Blend

The amount that wire-over-shaded lines are blended with the underlying shaded surface. Values near zero make these lines very faint, while a value of one draws the line without any blending (opaque). This does not affect pure wireframe, hidden line, or invisible line modes.

Particle

The particle representation to use:

Point

Draw particles as points, affected by the **Point Size**, in screen pixels. They are not affected by perspective.

Pixel

Each particle is a single pixel. This is useful for visualizing dense flip simulations.

Lines

Particles are drawn as streaks so it is possible to see their direction.

Discs

Draw particles as discs, affected by the **Disc Size**, in world units. They are affected by perspective.

Orient Discs to N

In particle disc mode, discs can be oriented to the direction of the normal (`N`) attribute on the particle. They will face the direction of the normal. Otherwise the discs are drawn screen-aligned so that they face the camera.

Use Sprites

Display sprites instead of the current **Particle** representation if a sprite attribute is found, such as `spriteshop`, `spritescale` or `spriterot`. If disabled, these attributes are ignored and the **Particle** representation is always used.

Use Geometry Color

When enabled, a `Cd` attribute on the geometry will be respected. It is ignored otherwise.

## Limits

Warning

Greatly exceeding these limits can cause instability based on your graphics driver and OS platform. Windows in particular can reset the graphics driver if a single draw takes longer than 2 seconds.

Limit 2D Textures

Limit 2D Textures (images) to a maximum resolution in one of three ways. Textures are still subject to the `Tex Mem Limit` memory limitation for a single texture. If a texture exceeds this limit it will be uniformly downscaled to the limit.

OpenGL Limit

Textures are only limited by the maximum 2D texture resolution reported by OpenGL (usually 8192 or 16384).

Auto-Detected Limit

Texture size recommended by Houdini based on the amount of VRAM installed on the graphics hardware.

Specify Limit

Manually specify the limit using the `Max 2D Resolution` parameter.

Max 2D Resolution

Maximum allowable 2D texture width or height.

2D Texture Format

The maximum allowable bit depth for 2D textures. If a texture’s bit depth exceeds this limit, it will be downcast to the limiting bit depth. If a textures bit depth is less than the limit, it will remain unchanged (ie, not up-converted to the limit bit depth).

8b Fixed

Standard dynamic range (0..255) bit depth. Uses the least amount of memory but super-white values are clamped at white.

16b FP

High dynamic range bit depth with reasonable color resolution. A good memory vs. quality setting.

32b FP

Ultra high dynamic range bit depth. Uses twice as much memory as 16b FP and has an impact on texture filtering speed. Use with caution.

Limit 3D Textures

Limit 3D Textures (volumes) to a maximum resolution in one of three ways. Textures are still subject to the `Tex Mem Limit` memory limitation for a single texture. If a texture exceeds this limit it will be uniformly downscaled to meet the limit.

OpenGL Limit

Textures are only limited by the maximum 3D texture resolution reported by OpenGL (usually 2048 or 8192).

Auto-Detected Limit

Texture size recommended by Houdini based on the amount of VRAM installed on the graphics hardware.

Specify Limit

Manually specify the limit using the `Max 3D Resolution` parameter.

Max 3D Resolution

Maximum allowable 3D texture width or height.

3D Texture Format

The maximum allowable bit depth for 3D textures. If a texture’s bit depth exceeds this limit, it will be downcast to the limiting bit depth. If a textures bit depth is less than the limit, it will remain unchanged (ie, not up-converted to the limit bit depth).

8b Fixed

Standard dynamic range (0..255) bit depth. Uses the least amount of memory but super-white values are clamped at white. Not recommended for volume display.

16b FP

High dynamic range bit depth with reasonable color resolution. A good memory vs. quality setting.

32b FP

Ultra high dynamic range bit depth. Uses twice as much memory as 16b FP and has an impact on texture filtering speed. Use with caution.

Tex Mem Limit (MB)

The maximum allowable texture size for a single texture. If the computed texture size exceeds this limit it will be uniformly downscaled to meet this limit. This applies to both 2D and 3D textures, though it more frequently affects tiled textures (UVTile, UDIM). The total memory size of all textures can exceed this size - it only applies to large textures.

Max Sprite Resolution

The maximum allowable resolution for sprite textures. Sprites larger than this resolution will be downscaled to fit.

Instancing Percent

The percentage of instances shown when **Point Instancing** is enabled. Instances not shown will be replaced by the `Instancing Standin` geometry.

Instancing Limit (M)

The maximum number of polygons that can be generated when instancing, in millions of polygons. If a single **Point Instancing** operation exceeds this amount, some of the instances will be replaced by the `Instancing Standin` geometry.

Instancing Stand-in

Geometry to substitute for instances that are culled by either the `Instancing Percent` or `Instancing Limit` parameters.

None

Don’t show anything for culled instances.

Location Marker

Show a small marker for culled instances at their object position.

Bounding Box

Show a wireframe bounding box for culled instances.

## Scripts

A script command can be specified for execution at the various execution points. The expression language selected for the parameter determines whether this command are hscript or python statements.

Prior to execution, this node is automatically set as the global current node.

To run statements from a file instead, specify the path to the file with either a `.cmd` extension (when the language is set to Hscript), or `.py` extension (when the language is set to Python). Additional arguments to the script can also be supplied, they will be parsed in a shell-like manner.

Pre-Render Script

Run this script before any rendering.

Pre-Frame Script

Run this script before each frame.

Post-Frame Script

Run this script after each frame.

Post-Render Script

Run this script after all rendering.

See also

-   [Elements of the scene](https://www.sidefx.com/docs/houdini/basics/intro.html)
-   [Advanced viewport shading](https://www.sidefx.com/docs/houdini/basics/viewporteffects.html)