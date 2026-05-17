---
type: concept
title: Round edges
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "54f6fbf7d3fc"
---

Whether you're looking to highlight bevels for better depth and dimension with lighting, or just to add an extra level of realism without the expense of adding more polygons, rounded edges can be an extremely useful tool for a multitude of applications. The OctaneRender® rounded edge shader gives you even more power allowing you to bevel only the outer convex edges, the inner concave edges, or even at the intersection of two completely different meshes (e.g., perpendicular pipes converging). Below is an example of a CAD imported model, with no bevels, rendered with Rounded Edges set to Accurate mode:

  

![](https://docs.otoy.com/cinema4d//lib/Round_Edges_CAD_Import.jpg)

  

You'll first need to check the Rounded Edges checkbox in your material window, then click the Create Rounded Edges button. Here's is a quick look at the Rounded Edges settings and as well:

  

![](https://docs.otoy.com/cinema4d//lib/Round_Edges_Material_UI.jpg)

  

After creating the Rounded Edge shader node, start increasing the Radius to the see the effects of the shader with the material applied to an object to be rendered. As this effect is a cheat of sorts, high values will yield undesirable results. Below is an explanation and example of each setting:

  

![](https://docs.otoy.com/cinema4d//lib/Round_Edges_Modes.jpg)

  

The Roundness option allows for control of the sharpness of the edges. If this setting is set to zero, you'll see a flat bevel on the edges, as opposed to a setting of 1, which will give you complete roundness on the edges.

  

![](https://docs.otoy.com/cinema4d//lib/Round_Edges_Roundness_Comparison.jpg)