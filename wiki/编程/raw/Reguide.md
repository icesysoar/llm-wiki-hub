---
type: concept
title: Reguide
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "95d0580762b9"
---
散布新的导引，插值现有导引的属性。
### Parameters
## Using Reguide with Plant Guides

1.  Click the ![](https://www.sidefx.com/docs/houdini/icons/FUR/guidegroom.svg)[Groom](https://www.sidefx.com/docs/houdini/nodes/sop/guidegroom.html "Interactively creates and modifies guide curves.") tool on the **Guide Process** tab.
    
2.  Press C in the viewport, and choose **Create & Move** > **Plant** from the radial menu.
    
3.  Place the guides by clicking LMB on the skin of the character.
    
4.  Groom the guides to the rough shape you want the fur using the styling tools.
    
    ![](https://www.sidefx.com/docs/houdini/images/fur/reguide1.jpg)
    
5.  Click the ![](https://www.sidefx.com/docs/houdini/icons/FUR/reguide.svg)[Reguide](https://www.sidefx.com/docs/houdini/nodes/sop/reguide.html "Scatters new guides, interpolating the properties of existing guides.") tool on the **Grooming** tab to fill in the rest of the guides with the same length and shape of the existing guides.
    
    ![](https://www.sidefx.com/docs/houdini/images/fur/reguide2.jpg)
    

Tip

Scrolling the mouse wheel or holding ⇧ Shift while dragging LMB will let you resize your brush.

For specific parameter information, see the [Reguide SOP](https://www.sidefx.com/docs/houdini/nodes/sop/reguide.html "Scatters new guides, interpolating the properties of existing guides.") help.

## PARAMETERS

Group

The group of primitives to scatter guides on.

Density Scale

Multiplier against the points per area to generate.

Density Attribute

Attribute controlling the density of scattered points.

Relax Iterations

Number of iterations to use when relaxing point spacing. Higher Values result in more even spacing of guides.

Only Display Roots

Don’t generate and interpolate guides, just scatter roots. Since the guide generation can be quite slow, this can be used to quickly visualize and dial in density.

Max Source Guides

The maximum number of source guides to interpolate for each created guide.

Distance Bias

Control over the weighting of source guides based on distance. The higher the value, the faster the influence of source guides is weakened with distance. A value of 0 results in guides being averaged, disregarding distance completely.

See also

-   [/nodes/sop/curvegroom](https://www.sidefx.com/docs/houdini/nodes/sop/curvegroom.html)