---
type: concept
title: Lattice
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "e1623e898a46"
---
根据你重塑控制几何体的方式来变形几何体。
### Parameters
Lattice deformation takes the edits you apply to simple geometry and applies the equivalent deformations to source geometry, such as the arm of a character. For example, you can create a bulge in the lattice to create a bulge in the geometry.

The Lattice operator has two methods for specifying the control geometry: _lattice_, which requires a control geometry with a specific ordering of points, as created by a [Bound SOP](https://www.sidefx.com/docs/houdini/nodes/sop/bound.html "Creates a bounding box, sphere, or rectangle for the input geometry.") or [Box SOP](https://www.sidefx.com/docs/houdini/nodes/sop/box.html "Creates a cube or six-sided rectangular box."); and _points_, which allows _any_ shape to be control geometry.

Note

The value of `Pw` affects the outcome of Lattice SOP when doing point based deformations.

## Using Lattice

1.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/lattice.svg)[Lattice](https://www.sidefx.com/docs/houdini/nodes/sop/lattice.html "Deforms geometry based on how you reshape control geometry.") tool on the **Deform** tab.
    
2.  Select the points to deform and press Enter to confirm your selection.
    
3.  Press Enter again to create a cage from the object’s bounding box or hold Alt to select a deforming point cloud from another object and press Enter to confirm your selection.
    
4.  Click the transform node in the [network editor](https://www.sidefx.com/docs/houdini/ref/panes/network.html).
    
5.  Move the points of the cage in the [scene view](https://www.sidefx.com/docs/houdini/ref/views/3dview.html) to deform the shape underneath.
    

![](https://www.sidefx.com/docs/houdini/images/shelf/lattice.jpg)

## Lattice deformer

To create a simple lattice from the bounding box of the source geometry, append a [Bound SOP](https://www.sidefx.com/docs/houdini/nodes/sop/bound.html "Creates a bounding box, sphere, or rectangle for the input geometry.") to the source geometry. Turn on **Divisions** and set the values to set the number of control points available. Create a Lattice node and connect the network as shown above. In the Lattice node, turn on **Lattice** and set the **Divisions** to the same values.

Tip

The Bound SOP recomputes the bounding box for the shape of the source geometry at each frame. If you use a Bound SOP to create the lattice and the source geometry is animated, you may want to [lock the Bound node](https://www.sidefx.com/docs/houdini/nodes/sop/index.html "Geometry nodes live inside Geo objects and generate geometry.") if you don’t want the lattice to animate along with it.

Note

The “division” values on the node generating the lattice and on the Lattice node must be identical, or the Lattice node will show an error.

Houdini **only supports divisions up to 30 when the interpolation type is set to Bezier**.

Alternatively, use the [Box SOP](https://www.sidefx.com/docs/houdini/nodes/sop/box.html "Creates a cube or six-sided rectangular box.") to create an arbitrary lattice shape not linked to the bounding box of the source geometry. Set the **Primitive type** to Polygon, turn on **Divisions** and set the values to set the number of control points available.

You can also use a lattice shape with the Points method shown below under “arbitrary control geometry”, which will give different results and allow you to control the radius of influence of the points in the lattice.

## Points deformer (arbitrary control geometry)

The points method lets you use arbitrary control geometry. It also lets you control the radius of influence of each point in the rest control geometry, letting the control shape “capture” geometry similarly to how bones capture skin surfaces in character modeling. You can use this method to deform a character or prop by manipulating a simplified, low-poly version of the character or prop.

The points method works by creating a metaball at each point on the rest control geometry and assigning influence to each point on the source geometry based on the density of the “control” metaballs it intersects.

To visualize the capture regions, set the display flag on the Lattice node and turn on **Visualize point-specific radii** in the Lattice node’s parameters. The 3D view shows the radius of influence of each point.

Use the **Radius** parameter to control the distance of influence of each point in the rest control geometry.

![](https://www.sidefx.com/docs/houdini/images/nodes/lattice_pointradius_1.png) ![](https://www.sidefx.com/docs/houdini/images/nodes/lattice_pointradius_2.png) ![](https://www.sidefx.com/docs/houdini/images/nodes/lattice_pointradius_3.png) ![](https://www.sidefx.com/docs/houdini/images/nodes/lattice_pointradius_4.png)

Larger radius values lead to smoother deformations because the influence of each control point is averaged over more points in the source geometry. Small radius values lead to very sharp deformations, because each control point will only influence a few points on the source geometry.

Lattice computes the influence falloff from the [metaball kernel](https://www.sidefx.com/docs/houdini/nodes/sop/metaball.html#kernels) you choose in the **Kernel function** parameter. Lattice’s behavior is similar to applying a magnet metaball to every point in the source geometry.

Tip

The control geometry should enclose the geometry being deformed.

Warning

The “rest” and “deformed” versions of the control geometry must have the same number of points, and in the case of lattices they must be in certain order (the order automatically created by Box and Bound). Usually this is automatic using the network layout shown above, because the deformed control shape comes from the same node as the rest control shape, but with edits applied. Just make sure any nodes you use to edit the control shape do not change the control shape’s topology.

## PARAMETERS

Group

Points in the first input to be deformed.

## Lattice

Overview

Deform with a regularly space lattice

Divisions

Must match the number of divisions in the lattice grid.

Interpolation

Points in the deformed geometry are interpolated using this method.

## Points

Overview

Deform using arbitrary point clouds

Rest Group

Points in the rest geometry which are used. The corresponding points in the deformed geometry are used as the implicit deform group.

Kernel

Which meta kernel to use to determine the influence of a point.

Radius

The size of the points capture regions.

Normalize Threshold

Defines the transition sharpness of the deformed surface geometry across the capture region boundary. If the threshold is zero, the transition is steep. If the threshold is large, the deformed data source geometry is smooth. Technically, the threshold defines the value after which the weights are normalized. If a total weight of all capture regions for a given point is greater than the threshold, then the weights for this point are normalized; otherwise they are not.

Visualize Point-Specific Radii

Turns on the display of guide spheres that represent the radii of each point in the rest geometry.

Note

To override the radius in point mode on a point by point basis you need to use a point expression. For example, `point("../attribcreate1",$PT,"rad",0)`.

## INPUTS

Data Source

The geometry you wish to deform. Accepts all input types.

Initial Source

The “rest” version of the control shape.

Deformed Source

The deformed version of the control shape. Lattice uses the difference between this and the “Initial” input to calculate the deformation to apply to the data source input.

## LOCALS

Note

Variable names ending with `2` refer to the geometry from the second input, if applicable. For example, `PT2` is the current point number from the second input.

AGE

The seconds a particle in the template has been alive.

ARC

Arc length distance from root in the [L-systems](https://www.sidefx.com/docs/houdini/nodes/sop/lsystem.html "Creates fractal geometry from the recursive application of simple rules.").

AREA

The surface area of the primitive (created by the [Measure SOP](https://www.sidefx.com/docs/houdini/nodes/sop/measure.html "Measures area, volume, or curvature of individual elements or larger pieces of a geometry and puts the results in attributes.")).

BBX, BBY, BBZ

The point’s relative position in the bounding box.

CA

Point or vertex alpha value.

CEX, CEY, CEZ

The centroid of the geometry.

COMX, COMY, COMZ

Center of mass.

CR, CG, CB

Diffuse point or vertex color.

CREASE

Point or vertex crease weight value.

DIST

Distance from particle to last collision.

DIV

Number of divisions to build the circle swept with Polywire (created by [L-systems](https://www.sidefx.com/docs/houdini/nodes/sop/lsystem.html "Creates fractal geometry from the recursive application of simple rules.")).

DRAG

Point drag.

GEN

Generation in the [L-systems](https://www.sidefx.com/docs/houdini/nodes/sop/lsystem.html "Creates fractal geometry from the recursive application of simple rules.").

ID

The ID of the particle in the input.

LAGE

The age of the point in the [L-system](https://www.sidefx.com/docs/houdini/nodes/sop/lsystem.html "Creates fractal geometry from the recursive application of simple rules.") computation.

LIFE

Percent of total life used (from 0 to 1).

LOD

Level of detail.

MAPU, MAPV, MAPW

Point or vertex texture coordinates.

MASS

Point mass.

MAT

The string name of the current material (the value of the `shop_material` attribute).

MAXLAYER

The number of layers that are considered active for display.

NPT

The total number of points in the template geometry.

NX, NY, NZ

Normal vector.

PERIMETER

The perimeter of the primitive (created by the [Measure SOP](https://www.sidefx.com/docs/houdini/nodes/sop/measure.html "Measures area, volume, or curvature of individual elements or larger pieces of a geometry and puts the results in attributes.")).

PR, NPR

Primitive number & total number of primitives.

PSCALE

Particle Scale.

PT

The point number of the currently processed point.

RESTX, RESTY, RESTZ

The rest position.

SEGS

Number of segments to divide a curve up into in Polywire (created by [L-systems](https://www.sidefx.com/docs/houdini/nodes/sop/lsystem.html "Creates fractal geometry from the recursive application of simple rules.")).

SIZEX, SIZEY, SIZEZ

The size of the bounding box.

SPRINGK

Elasticity of a point.

TENSION

Spring tension of an edge.

TX, TY, TZ

Point position.

TW

See WEIGHT.

UPX, UPY, UPZ

The vector pointed in the up direction.

VTX, NVTX

Vertex number & total number of vertices.

VX, VY, VZ

Velocity direction.

WEIGHT

Point spline weight.

WIDTH

The width of the curve. Used by [mantra](https://www.sidefx.com/docs/houdini/nodes/out/ifd.html "Renders the scene using Houdini’s standard mantra renderer and generates IFD files.") for rendering curves & polywire for generating trees.

XMIN, XMAX

The X extents of the bounding box of the geometry.

YMIN, YMAX

The Y extents of the bounding box of the geometry.

ZMIN, ZMAX

The Z extents of the bounding box of the geometry.

## EXAMPLES

Load Launch

[BallBounce](https://www.sidefx.com/docs/houdini/examples/nodes/sop/lattice/BallBounce.html)Example for [Lattice](https://www.sidefx.com/docs/houdini/nodes/sop/lattice.html) geometry node

This is an example of how a Lattice SOP is used to create a bouncing ball.

Load Launch

[DeformLattice](https://www.sidefx.com/docs/houdini/examples/nodes/sop/lattice/DeformLattice.html)Example for [Lattice](https://www.sidefx.com/docs/houdini/nodes/sop/lattice.html) geometry node

The Lattice SOP creates animated deformations by manipulating simpler geometry that encloses the source geometry.

This example shows how the Lattice SOP can use an animated Box SOP to deform the source geometry. In this case, the source geometry is a sphere.

Load Launch

[LatticePerChunk](https://www.sidefx.com/docs/houdini/examples/nodes/sop/lattice/LatticePerChunk.html)Example for [Lattice](https://www.sidefx.com/docs/houdini/nodes/sop/lattice.html) geometry node

This example shows how you can use the foreach sop to apply a lattice to each fragment of a sphere.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/bound.svg) Bound](https://www.sidefx.com/docs/houdini/nodes/sop/bound.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/box.svg) Box](https://www.sidefx.com/docs/houdini/nodes/sop/box.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/bulge.svg) Bulge](https://www.sidefx.com/docs/houdini/nodes/sop/bulge.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/magnet.svg) Magnet](https://www.sidefx.com/docs/houdini/nodes/sop/magnet.html)