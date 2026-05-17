---
type: concept
title: Randomwalk medi
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "a2f33a945e71"
---

The Random Walk medium node is a variant of subsurface scattering that utilizes a stochastic or random process for the scattering of light through an object. This provides the most realistic result when rendering scatter volumes. Random walk takes in an albedo texture for specifying the expected SSS color, as opposed to the traditional absorption/scattering color spectrum in other medium nodes. You can also specify a color radius texture, which represents how far the light scatters into the medium. The random walk parameters are similar to the Scattering node's parameters, with a few exceptions, as discussed here.

  

![](https://docs.otoy.com/cinema4d//lib/Random_Walk_Dragons.png)

  

In addition to random walk, the absorption and scattering media have been modified so that any texture can be provided as input to scattering/absorption textures, and that includes using them for volumes.

  

#### RANDOM WALK CHARACTERISTICS

Controls for the Random Walk Medium are available in the Attribute Manager when the Medium toggle is enabled in the Basic tab of the material.

  

![](https://docs.otoy.com/cinema4d//lib/Random_Walk_Medium_UI.png)

  

The illustration above shows the random walk medium user interface, as explained below:

  

Density:

Multiplies against the scattering value.

  

Volume Step Length:

The default value is 4, but, depending on the surface, you may need to adjust this value. Decreasing this value decreases render speed, and increasing the value causes the ray marching algorithm to take longer steps. If Volume step length exceeds the volume's dimensions, then the ray marching algorithm takes a single step through the whole volume. To get the most accurate results, keep Volume Step Length as small as possible.

  

Volume Ray Step Length:

The step length that is used by the shadow ray for marching through volumes (hidden if Lock step length pins is enabled). 

  

Lock step length pins:

If enabled, uses the Volume Step Length as the Volume Shadow Ray Step. If you disable this option, the Vol. shadow ray step length slider control will appear, allowing for direct control of this parameter.

  

Sample position displacement:

Allows a texture to control a volume's sample position displacement.

  

Albedo:

Specifies the expected SSS color; use any color, procedural or image texture node.

  

Radius:

Specifies a color radius texture, which represents how far the light scatters into the medium.

  

Bias:

The bias slider interpolates between the unbiased vs biased scattering in the medium. The biased scattering method (when bias is 1.0) enables faster convergence, but also allowing you to mix the two methods for meshes with high curvature.

  

#### RANDOM WALK IN ACTION

Below is an illustration of random walk SSS in action. Here we compare diffuse material with albedo texture in the diffuse slot (left), vs diffuse material with 0.0 diffuse reflection and 1.0 diffuse transmission with the random walk medium node, using the albedo texture as the medium scattering albedo with 0.0 bias (center), vs diffuse material with the random walk medium node, using the albedo texture as the medium scattering albedo with 1.0 bias (right). As we can see in the image, when the original scattering method is used (0.0 bias), the subsurface scattering is much darker due to rays being lost inside the medium, but when the random walk SSS is used (1.0 bias), the subsurface scattering effect does not lose as much energy inside the medium.

  

![](https://docs.otoy.com/cinema4d//lib/randomwalk_diffuse_bias0_bias1.png)

  

#### RANDOM WALK SKIN EXAMPLE

Below is an example of using random walk SSS for skin material. Random walk SSS with diffuse material/specular material can be used together with existing material layers. In addition, multiple specular layers can be used on top of the bottom medium layer for simulating multi-layer oily skin:

  

![](https://docs.otoy.com/cinema4d//lib/randomwalk_layered.png)

  

#### RANDOM WALK RADIUS EXAMPLE

The image below illustrates how the radius value works in random walk SSS, the higher the radius, the waxier the subsurface scattering effect would look on the model, whereas the lower the radius, the more diffuse surface like it would look:

  

![](https://docs.otoy.com/cinema4d//lib/randomwalk_sss_radius.png)

  

Important Note

When using Random Walk with specular materials, the Fake Shadows option needs to be enabled. This will allow Random Walk to perform direct light sampling, otherwise, that step will be skipped, and indirect sampling will only occur. This has the potential to increase noise, especially if your scene is illuminated with an Octane Sun (Octane Sky Object), as the indirect rays have a very low probability of reaching the sun, most noticeable around the highlight.