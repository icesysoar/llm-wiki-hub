---
type: concept
title: SimpleMale
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "bf689efe1bbe"
---
一个简单高效的男性角色动画装备，具有完全的控制。
## Parameters
The Simple Male is an efficient animation rig with full controls. It has been optimized for quick playback performance in the scene.

### PARAMETERS

Master Controls

Modifies transformation, rotation, and scale for the characters.

Custom Space

Object field that can be used as a custom parent for the character.

Custom Space Blend

Controls influence of the custom space object.

Enable Squash and Stretch

Turning this on will allow you to squash and stretch the limbs of the character.

### Spine

The controls on this tab are for animation of the spine.

Head World Space Blend

Controls whether the head will be following spine rotations or maintain rotations in world space.

Eyes Lookat Translate

Controls for animating the direction where the eyes are looking at.

Eyelid Rotate

Rotates the eyelid geometry.

Eyes Lookat Custom

Object field that will act as a target for the eyes to look at. For example, if the character is in a car chase, he could always be looking at the car in front of him.

Custom Space Blend

Controls the influence of the custom eye look at object.

### Left/Right Arm

The controls on these tabs are for animating the arms of the character.

FKIK Blend

Controls if the arms are animated with the IK controls or FK ones.

Local-World Blend

Controls if the wrists follow the spine rotations or are stay in place in world space.

Custom Space

Object field for a parent object for the wrists. For example, a steering wheel if the character is driving.

Custom Space Blend

Controls the influence of the custom parent object.

### Left/Right Leg

The controls on these tabs are for animating the legs of the character.

FKIK Blend

Controls if the legs are animated with the IK controls or FK ones.

IK Twist Hip Foot Blend

Controls the IK twist target to be following foot controls or stay in world space

Custom Space

Object field for a parent object for the foot. For example, a gas pedal if the character is driving.

Custom Space Blend

Controls the influence of the custom parent object for the foot.

### Display

Playback

Choose to display the deforming geometry straight from the [Bone Deform SOP](https://www.sidefx.com/docs/houdini/nodes/sop/deform.html) or using the [Cache SOP](https://www.sidefx.com/docs/houdini/nodes/sop/cache.html "Records and caches its input geometry for faster playback."). Choosing **Cached Deform** can speed up the playback after the initial time through.

Show Bones

Display or hide the bones of the rig.

Show Controls

Display or hide the controls of the rig.

Show Detail Controls

Display or hide extra controls for hips and shoulders.

Show Geometry

Display or hide the entire rig.

Top

Choose the type of top the for the male character to wear.

Bottom

Choose the type of pants for the male character to wear.

Use Delta Mush

Enables the use of the [Delta Mush SOP](https://www.sidefx.com/docs/houdini/nodes/sop/deltamush.html "Smooths out (or relaxes) point deformations.") to help smooth out irregularities in some deformations.

Geometry Type

Use PolySoup or Polygon geometry. For more information see [Polygon soup](https://www.sidefx.com/docs/houdini/model/primitives.html#polysoup).

Onion Skinning

Draw this geometry with multiple skins, at different frames in the future and/or past. The number of skins before and after the current frame, the frame increment between them, their opacity and color tinting can be configured in the [3D Display Options](https://www.sidefx.com/docs/houdini/ref/windows/displayopts_3d.html#onionskinning).

![](https://www.sidefx.com/docs/houdini/images/char/onionskinning2.jpg)

Off

Turn off onion skinning.

Transform only

Only show the effects of the object transform. This will not recook the actual geometry if it is changing over time, making it faster than Deformation.

Deformation

Show the skins with both object transforms and geometry deformation. This will cause cooking of geometry at the SOP level, if animated.

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