---
type: concept
title: ScatteringMedium
tags: []
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "e5a8403a5b67"
---

When light is absorbed into a translucent surface, it is scattered in different directions through the particles in the surface and the surface treatment (smooth to rough) and then comes out again from different regions of the surface. This process is part of sub-surface scattering, and depends on the characteristics of the surface, medium thickness, IOR factor, density, and phase function of the particles in the surface. All of this is a simplified version of the bi-directional scatter-surface reflectance distribution function we have mentioned earlier in the BRDF topic. Surfaces such as wax, skin, milk, and leaves can be represented by this method.

![](https://docs.otoy.com/cinema4d//lib/scatterN.png)

If you want to make the most realistic subsurface effect in OctaneRender®, you should use a scattering medium or a random walk medium, discussed [here](https://docs.otoy.com/cinema4d//RandomWalkMedium.html). When you use a scattering medium, you also have the absorption channel as in the absorption medium, which we explained in the previous section. The use of scatter and absorption work together in the semi-translucent surfaces of the real world.

![](https://docs.otoy.com/cinema4d//lib/SCATTERMEDIUM.png)

#### SCATTERING

This parameter is used to control how quickly the scattering will take place inside the surface. At high values, light begins to scatter immediately as it enters the surface. At lower values, the light begins to scatter after it penetrates deeper into the surface. A good real-world example is a candle. As light begins to scatter from the moment it enters the surface of the candle. 

![](https://docs.otoy.com/cinema4d//lib/Candle.png)

To make a surface like a candle, you can decrease the float value of the absorption (it is also important to use it with density and other options) and adjust the density. To control the scatter speed, add a Float or RGB spectrum to the texture slot of the medium:

##### FLOAT TEXTURE

With the Float node, a value of 0 indicates no scattering. Values greater than zero determine how quickly the scattering occurs. For example, assign a Float texture to the texture slot. The image below illustrates that the scattering rate increases as the values get higher.

![](https://docs.otoy.com/cinema4d//lib/scatterfloat.png)

##### RGB SPECTRUM

The scatter phenomenon is wavelength-dependent, as it is in the real world. Assigning an RGB spectrum to the texture slot and entering any RGB value will result in that value being the dominant color and scatters less than the other wavelengths/colors. For example, entering the RGB value 23/200/244 as in the image below, the mixture of green and blue will be heavily scattered, while red will be scattered minimally (remember that IOR and fresnel are also important). When combined with absorption, a wide range of color effects are present, as indicated in the image below, which shows the RGB scatter values without and with absorption.

![](https://docs.otoy.com/cinema4d//lib/scatterRGB.png)

#### PHASE

Phase describes the amount of light from the incident light direction that is scattered into the viewing direction (towards the eye). In theory, the scattering direction is Isotropic, or evenly scattered, in every direction. However, as the particle density increases, this scattering is not equal, and part of the light is scattered in a certain direction. This is called Forward or Backward Scattering. The Phase parameter determines the direction of scattering — a zero value means that the scattering will be equal in all directions, whereas a value of -1 will back-scatter and a value of 1 will forward-scatter, as shown below.

![](https://docs.otoy.com/cinema4d//lib/scatterpahse.png)

#### EMISSION

Emission is explained in detail in the [Understanding Emission](https://docs.otoy.com/cinema4d//WhatisEmission.html) section.

![](https://docs.otoy.com/cinema4d//lib/Emission_Scattering.png)