---
type: concept
title: Attribute From Pieces
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "70ebc3911503"
---
为点分配一个属性，指定一组模型中的哪一个应该被复制/加强到该点，随机地或基于各种规则。
### Parameters
Houdini’s workflow for automatically creating large numbers of objects in a scene (such as trees in a forest, rocks and pebbles in a desert, or buildings in a city) is as follows:

1.  Build the surface you want to scatter the objects across.
    
2.  Use the [Scatter and Align node](https://www.sidefx.com/docs/houdini/nodes/sop/scatteralign.html "Scatters points across a surface with randomized scale and orientation attributes for use with Copy to Points.") to scatter points across the surface.
    
    Scatter and Align has many high-level controls for how to distribute the points, avoid certain areas, add variety in size and orientation, and so on.
    
3.  Build the set of models you want to copy onto the points. For example, a set of different types and shapes of trees to make a forest.
    
4.  Use the [Copy to Points node](https://www.sidefx.com/docs/houdini/nodes/sop/copytopoints.html "Copies geometry in the first input onto the points of the second input.") to copy the objects onto the points.
    
    Copy to Points has a **Piece Attribute** parameter that chooses which of the set of models to copy onto each point based on the value of an attribute on the point.
    

This node is a powerful and flexible way to create the “piece” attribute used by Copy to Points to decide which model to copy onto each point. It lets you assign the pieces randomly, or according to various rules. For example, you could make deciduous trees more likely at lower elevations and conifer trees more likely at higher elevations on a mountain.

## Visualizing the results

The best way to use this node is to set up the network to create the pieces, scatter the points, this node to assign a attribute specifying which piece to copy onto each point, and a [Copy to Points node](https://www.sidefx.com/docs/houdini/nodes/sop/copytopoints.html "Copies geometry in the first input onto the points of the second input.") to copy the pieces onto the points (make sure you set the piece attribute on the Copy to Points node). Then you can select this node and tweak the parameters based on how they affect the copies/instances.

Even if you don’t have the finished models for the pieces, it’s helpful to create simple proxies (for example, different simple shapes or shapes with different colors) for the pieces so you can visualize how the distribution changes as you edit the parameters.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/attrib_from_pieces_network.jpg)

## Understanding pieces

Houdini SOP geometry is conceptually just a bunch of unstructured primitives (polygon faces), it does not have an inherent concept of separate “objects” or hierarchy of primitives. Instead, the way nodes can tell that a set of faces are part of the same thing is that they all have the same value in a certain attribute. For example, assuming the node is using a piece attribute named `piece`, all polygons where the point attribute `piece` equals `2` are part of the same conceptual object.

The piece attribute may be an integer or string attribute. This attribute is often called `piece`, `class`, `name`, or `path`.

You can create a piece attribute on geometry using the [Connectivity node](https://www.sidefx.com/docs/houdini/nodes/sop/connectivity.html "Creates an attribute with a unique value for each set of connected primitives or points.") to automatically create a piece attribute). This is usually all you need. If you need more fine-grained control (if individual objects have disconnected parts), you can use a series of upstream [Attribute Create nodes](https://www.sidefx.com/docs/houdini/nodes/sop/attribcreate.html "Adds or edits user defined attributes.") to “manually” assign value to the piece attribute for each separate set of faces.

This node works by creating an attribute on the _points_ that the pieces will be copied onto in the scattering workflow. For each point, the value of this attribute specifies that the [Copy to Points node](https://www.sidefx.com/docs/houdini/nodes/sop/copytopoints.html "Copies geometry in the first input onto the points of the second input.") should copy the piece with the same attribute value from the source geometry on this point.

This node doesn’t copy the pieces onto the points (it just creates the attribute that Copy to Points uses to do that), but you do need to connect the geometry containing the pieces to this node’s second input (and specify the name of the piece attribute) so it can see what pieces are available. This means you must have geometry with a piece attribute set up before using this node.

## Modeling the pieces

Houdini’s copying/instancing workflows are based on using the `pscale` (point scale) attribute to control the size of each instance. Since this is a scale, it works best if you **model the objects to copy/instance at 1 unit scale**, at least along the axis you don’t want to overlap when scattering.

For example, if you are scattering trees, it is best to model each tree so the “radius” of the tree (the maximum distance from the center of the truck to the end of the longest branch) is one world unit. Then the copy node can scale the tree smaller or larger using `pscale`.

If you have a model created at a different scale, you can make it 1 unit scale with the [Match Size node](https://www.sidefx.com/docs/houdini/nodes/sop/matchsize.html "Resizes and recenters the geometry according to reference.").

## Tips and notes

-   The “Pieces” parameters (shuffle and offset) are not available when **Mode** is **VEXpression**.
    

## INPUTS

Points

The points to create the name attribute on.

Geometry Library

The different pieces that can be assigned to the points.

## PARAMETERS

Piece Attribute

The name of the point attribute the specifies which primitives in the second input are parts of the same thing.

Piece Filter

If you only want the node to use a few of the available pieces from the second input, type a space separated list of the attribute values here. If this is blank, the node uses all available pieces in the second input.

Mode

The method this node uses to assign pieces to points.

Cycle

Go through the points in order, cycling through the available pieces (essentially, assign the piece using “point number modulo number of pieces”).

Note that if the points were created by [Scatter](https://www.sidefx.com/docs/houdini/nodes/sop/scatter.html "Scatters new points randomly across a surface or through a volume.") or [Scatter and Align](https://www.sidefx.com/docs/houdini/nodes/sop/scatteralign.html "Scatters points across a surface with randomized scale and orientation attributes for use with Copy to Points."), the point numbers have no relationship to their position, so the distribution of pieces will look random.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/attrib_from_pieces_mode_cycle.jpg)

Patches

Assigns the pieces in random “splotches” (using Worley noise). That is, instead of randomizing each individual point, it randomizes irregularly shaped groups of points.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/attrib_from_pieces_mode_patches.jpg)

Noise

Assigns the pieces using noise. This is not the same as randomizing each piece. Instead it assigns a piece based on the quantization of the output of a chosen noise function. This lets you create organic-looking patterns and other effects.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/attrib_from_pieces_mode_noise.jpg)

Random

Assigns pieces to points randomly. You can assign weights to each piece to make some pieces more likely than others.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/attrib_from_pieces_mode_random.jpg)

Map Attribute

Assigns pieces to points based on the value of an attribute on the points.

This is very powerful since you can use the wide variety of SOP nodes that create attributes to set up the point attribute. For example, you can paint on values using [Attribute Paint](https://www.sidefx.com/docs/houdini/nodes/sop/attribpaint.html "Interactively paint point attributes, such as color or deformation mask values, directly on geometry."), or set the attribute based on distance from another object with [Distance From Geometry](https://www.sidefx.com/docs/houdini/nodes/sop/distancefromgeometry.html "Measures distance between each point and a reference geometry."), or from a certain coordinate with [Distance From Target](https://www.sidefx.com/docs/houdini/nodes/sop/distancefromtarget.html "Measures distance of each point from a target.").

Tip

If multiple mappings apply to a point, the node picks one randomly.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/attrib_from_pieces_mode_mapattr.jpg)

VEXpression

Evaluates a series of VEX expressions, and assigns the piece based on which VEX expression returns true.

If you can write [VEX](https://www.sidefx.com/docs/houdini/vex/snippets.html), this allows full control over how to select a piece based on an attribute value or a logical combination of values.

Tip

If multiple expressions return true for a point, the node picks one randomly.

Pieces

Shuffle

Turn this on to randomly scramble the order of the pieces.

Seed

The seed for the random number generator used to scrable the piece order. The same seed will always produce the same ordering. For example, if you want different orderings in each frame, set the seed to `$F` (the current frame number).

Offset

Shifts the order of pieces forward a certain number of places, with pieces at the end moving to the front of the order.

Source Points

Override Ptnum

Turn on the checkbox next to **ID Attribute** to use the value of a custom attribute on each point to cycle through the pieces instead of the inherent point number.

ID Attribute

Turn the checkbox on and specify the name of an integer attribute on the points to use the attribute’s value to cycle through the pieces instead of the inherent point number.

Location Attribute

When **Mode** is **Patches** or **Noise**, the attribute to use as the point’s position in the noise field. The default is the point position `P`. However, you might want to use a different attribute, for example you could use `rest` if the point positions are animated but you want the noise to follow the points.

Patches

These parameters are visible when **Mode** is **Patches**.

Patch Size

Controls the average size of the patches.

Scale

Allows you to control the average height, width, and depth of the patches separately.

Patch Offset

Moves the noise field relative to the points.

Distortion

These parameters can optionally add distortion on top of the base noise pattern.

Strength

The strength of distortion to add.

Size

The size of the distortion.

Roughness

The roughness of the distortion.

Offset

An offset added to the center of the distortion map.

Noise

These parameters are visible when **Mode** is **Noise**.

Noise Type

The function to use to generate the noise field. The node uses the point positions as the seed for the random number generator.

Element Size

Controls the size of the noise features.

Element Scale

Allows you to control the height, width, and depth of the noise features separately.

Offset

Moves the noise field relative to the points.

Max Octaves

The number of combined noise layers.

Roughness

The influence falloff for each successive noise layer.

Distortion

These parameters can optionally add distortion on top of the base noise pattern.

Lattice Warp

Adds “stringiness” or “wiriness” to standard noise.

Freq

The frequency of the **Lattice Warp**.

Gradient Warp

Widens the peaks or valleys of the noise output.

Remap Noise

A ramp used to remap noise values.

Random

These parameters are visible when **Mode** is **Random**.

Weight Method

The way of specifying the weight that each piece is given.

Uniform Distribution

Each piece is equally likely.

Piece Weights

Give each piece a weighting using a multiparm, allowing you to make some pieces more likely than others.

If you choose this option, click the **Autofill Pieces** button to automatically set up the multiparm based on the pieces in the second input.

Weight Attribute

Use a primitive float attribute on the piece geometry that sets the piece’s random weighting. The weighting for a piece is the _average_ of this attribute’s values across the primitives of the piece.

Seed

When **Weight Method** is not **Uniform**, this is the seed value for the random number generator that chooses between weighted alternatives.

Autofill Pieces

When **Weight Method** is **Piece Weights**, click this button to automatically set up the multiparm based on the pieces in the second input.

A button that will automatically fill out the **Number of Assets** and **Piece** parameters such that each unique piece in the geometry is included in the list.

Number of Pieces

The number of pieces to specify weights for in the multiparm.

Piece

The attribute value for this piece.

Weight

A value representing how likely this piece is to appear in the chain, relative to other pieces. The weights of all pieces are normalized to add up to `1.0` and then used as probabilities. For example, if three pieces have weights of `1`, `1`, and `2`, the last piece is likely to appear 50% of the time, while the other two are each likely to appear 25% of the time.

Weight Attribute

When **Mode** is **Weight Attribute**, the name of a primitive float attribute on the piece geometry that sets the piece’s random weighting. The weighting for a piece is the _average_ of this attribute’s values across the primitives of the piece.

Map Attribute

These parameters are visible when **Mode** is **Map Attribute**.

Tip

If multiple mappings apply to a point, the node picks one randomly.

Attribute

The name of an attribute on the points to use to choose the piece for each point.

Attribute Type

The type of attribute.

Numeric

The attribute is either a float or an integer. This lets you matching pieces to ranges of numbers.

String

The attribute is a string. This lets you match against exact values or string patterns.

Map Pieces From

When **Attribute Type** is **Numeric**, choose whether to map values to pieces automatically or manually.

Automatic Ranges

Automatically creates a mapping between equal-sized ranges of values in the attribute and the available pieces in the second input.

Explicit Ranges

Lets you manually map between ranges and pieces using a multiparm.

Autofill Pieces

When **Attribute Type** is **String** or **Map Pieces From** is **Explicit Ranges**, click this button to automatically set up the multiparm with an initial set of mappings based on the pieces in the second input.

Number of Maps/ranges

When **Attribute Type** is **String** or **Map Pieces From** is **Explicit Ranges**, this is the number of mappings in the multiparm.

Enable Piece

Use the checkbox next to each range to control whether it is used or not.

Piece

The name of the piece to assign to points where the value matches this pattern. If you enter a space-separated list of piece names, the node will choose one randomly.

Map From

The string value or pattern to match against.

Min

The minimum value for this range.

Max

The maximum value for this range.

VEXpression

These parameters are visible when **Mode** is **VEXpression**.

Tip

If multiple expressions return true for a point, the node picks one randomly.

Autofill Pieces

Click this button to set up the multiparm with expressions for each piece in the second input.

Number of VEXpressions

The number of VEX expressions to test.

Enable piece

Use the checkbox next to each expression to control whether it is used or not.

Piece

The name of the piece to assign to points where the expression returns true. If you enter a space-separated list of piece names, the node will choose one randomly.

VEXpression

The VEX expression to run for each point. If the expression evaluates to a non-zero value, it “matches” the point and the corresponding piece will be assigned to the point.

Unmatched Piece

When none of the rules in the multiparm match, use this piece. If you enter a space-separated list of piece names, the node will choose one randomly.

Use Unmatched Group

Turn on the checkbox next to **Unmatched group** to create a group in the output containing any unmatched points.

Unmatched Group

Turn on the checkbox and enter a group name to create a group in the output containing any unmatched points.

Seed

The seed value for the random number generator for when the node chooses between alternatives.

## EXAMPLES

Load Launch

[AttributeFromPiecesForest](https://www.sidefx.com/docs/houdini/examples/nodes/sop/attribfrompieces/AttributeFromPiecesForest.html)Example for [Attribute From Pieces](https://www.sidefx.com/docs/houdini/nodes/sop/attribfrompieces.html) geometry node

This example shows how to use the Attribute from Pieces SOP to assign pieces with an attribute indicating size.

Load Launch

[AttributeFromPiecesModes](https://www.sidefx.com/docs/houdini/examples/nodes/sop/attribfrompieces/AttributeFromPiecesModes.html)Example for [Attribute From Pieces](https://www.sidefx.com/docs/houdini/nodes/sop/attribfrompieces.html) geometry node

This example demonstrates the behaviour of the different Mode options in the Attribute from Pieces SOP.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/scatter.svg) Scatter](https://www.sidefx.com/docs/houdini/nodes/sop/scatter.html)
-   [/nodes/sop/instancepoints](https://www.sidefx.com/docs/houdini/nodes/sop/instancepoints.html)