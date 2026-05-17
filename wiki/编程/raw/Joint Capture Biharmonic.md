---
type: concept
title: Joint Capture Biharmonic
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "766b9ced7463"
---
捕捉皮肤几何形状到SOP骨架，以便与关节变形一起使用。
### Parameters
This node creates capture weights on geometry that is to be deformed by the [Joint Deform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html "Perform skin deformation from KineFX skeleton animation.") SOP. It provides a high-level setup for using [Bone Capture Biharmonic](https://www.sidefx.com/docs/houdini/nodes/sop/bonecapturebiharmonic.html "Supports Bone Deform by assigning capture weights to points based on biharmonic functions on tetrahedral meshes.") by internally building the required tetrahedral mesh.
Note
This node uses Intel’s Math Kernel Library. You can [use an environment variable](https://www.sidefx.com/docs/houdini/model/mkl.html "Some nodes use a library that gives a speed boost for floating-point operations but can make the output vary between different computers. You can control how much the library tries to guarantee reproducible results.") to tune the library for speed or for producing identical results from run to run.
## PARAMETERS
Skin Group
Optional point group from the first input for computing capture weights. By default, all points are used.
Skeleton Group
Optional point group from the second input used to compute capture weights. By default, all points are used.
Max Iterations
The maximum number of iterations when solving for the weights. Using a large number of max iterations will allow the solver to converge to a higher quality solution at the expense of speed. Since biharmonic functions for capture weights do not usually need to be very precise, a low number of max iterations often produces suitable results.
Tet Method
Tetrahedralization method. The choices here trade quality and speed depending on the skin geometry.
Adaptive
Creates a tetrahedral mesh from an adaptively remeshed version of the skin geometry. This method offers a good trade off between performance and accuracy. It will almost always produce a tetrahedralization that faithfully matches the surface of the input, but can give unnecessary detail to certain areas.
Uniform
Creates a tetrahedral mesh from a uniformly remeshed version of the skin geometry. This method can be faster than **Adaptive** at the loss of accuracy. More useful when the amount of detail in the skin geometry that you want to capture is fairly even.
Exact
Creates a tetrahedral mesh whose surface polygons matches the skin geometry exactly. This is the most precise method but is usually the slowest. This method is best for avoiding accidental weight leakage in tight areas like in between fingers.
Embed
Creates a tetrahedral mesh whose surface polygons only approximately matches the skin geometry while giving an even distribution of tet sizes. This uses [Tet Embed](https://www.sidefx.com/docs/houdini/nodes/sop/tetembed.html "Creates a simple tetrahedral mesh that covers a connected mesh.") which was the default method used in the Objects-level [Capture Geometry](https://www.sidefx.com/docs/houdini/shelf/capturegeometry.html "Uses one or more geometry objects as the skin for a hierarchy of bones or a set of metaball objects.") shelf tool. While this method is slower than **Uniform**, it can guarantee that the resulting tetrahedral mesh fully encloses the skin geometry when **Enlarge Offset** is set to 1 or more. Therefore it can provide higher quality surface capture weights while being slower at generating the tetrahedral mesh. It can also be useful for capturing certain 2D surfaces, like a flat grid, by giving it a thickness.
Scale Attribute
When enabled, use the specified float point attribute to control the size of tets at particular areas on the skin geometry. This can be created from [Attribute Paint](https://www.sidefx.com/docs/houdini/nodes/sop/attribpaint.html "Interactively paint point attributes, such as color or deformation mask values, directly on geometry.") for fine control over where capture weights should be computed more precisely.
This is only available when **Tet Method** is set to **Adaptive**.
Uniform Scale
Controls the size of the triangles when remeshing the skin geometry. This is only available when **Tet Method** is set to **Uniform**.
Enlarge Offset
When enabled, this enlarges the tethedral mesh by the given the number of tet layers.
This is only available when **Tet Method** is set to **Embed**.
Max Tet Scale
Controls the maximum size of individual generated tets. The higher the value, the larger the tetrahedra in the interior of the tetrahedral mesh are allowed to be (less interior detail).
Max Triangle Scale
Controls the maximum size of the triangles on the surface of the tetrahedral mesh. The higher the value, the larger the triangles on the tet mesh boundary will be (less surface detail).
This is only available when **Tet Method** is set to **Adaptive**.
Min Triangle Scale
Controls the minimum size of the triangles on the surface of the tetrahedral mesh. The higher the value, the larger the triangles on the tet mesh boundary will be (less surface detail).
This is not available when **Tet Method** is set to **Exact**.
Do Blend
Enable blending of the result with the existing capture weights from the skin geometry input.
Blend Factor
When enabled, the blend factor used to blend the result with the input capture weights.
## Skeleton Resample Options
Resample Segments
Specifies how the lines should be resampled.
Off
No resampling.
By Max Axis Fraction
Resample using a maximum segment length derived from **Max Axis Fraction** multiplied by the largest axis of the lines' bounding box.
By Max Segment Length
Resample using the **Max Segment Length** value.
Max Axis Fraction
The fraction of the largest axis of the lines' bounding box side to use for resampling. This is only used when **Resample Segments** is set to **Max Axis Fraction**.
Max Segment Length
When when **Resample Segments** is set to **Max Segment Length**, this specifies the maximum line segment length to resample with.
Exclude Short Bones
When enabled, bones whose lengths are equal or less than **Exclude Threshold** will be ignored.
Exclude Threshold
When **Exclude Short Bones** is enabled, bones whose lengths are equal or less than this value are ignored.
Fuse Threshold
The threshold at which points will be fused in the output. A tolerance is computed from this value by multiplying it with the maximum bounding box axis size. Points whose positions are equal or less than the tolerance will be fused into a single point.
## INPUTS
Rest Geometry
The geometry to capture. It must be closed.
Capture Pose
The SOP skeleton to capture the **Skin Geometry** to.
Animated Pose
The SOP skeleton intended for deforming the skin geometry. It is provided for wiring convenience since this input merely passed through to the corresponding output.
## OUTPUTS
Rest Geometry
The skin geometry with capture attributes created as the `boneCapture` point attribute.
Capture Pose
Provided for wiring convenience, it is identical to the second input.
Animated Pose
Provided for wiring convenience, it is identical to the third input.
## ATTRIBUTES
boneCapture
Attribute added in the **Skin Geometry** output that defines the skinning weights for the deformation ready for use with [Joint Deform](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html "Perform skin deformation from KineFX skeleton animation.").
See also
!Skeleton#Skeleton Geometry
!CapturePackedGeometry#Capture Packed Geometry Geometry
!Joint Deform 1#Joint Deform Geometry
!Joint Capture Proximity#Joint Capture Proximity Geometry
