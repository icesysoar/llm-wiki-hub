---
type: concept
title: Absorption medium
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "6c955a8393e2"
---

When light hits a translucent object or a medium, energy from that light is transferred to that medium, and can also be transformed into some other forms of energy (such as heat); this process is called absorption, and its wavelength dependent. All surfaces absorb certain wavelengths of the light. This is due to energy exchanges of electron configurations depending on the surface. The absorption phenomenon is tightly bound to the light, wavelength, surface characteristics and surface thickness. 

![](https://docs.otoy.com/cinema4d//lib/absorption.png)

As the medium absorbs certain wavelengths of the white light, we see the remaining wavelengths as color. When a medium absorbs light of a particular color, we perceive the object as the complementary color, i.e., the color opposite the absorbed color. You can see the main and complementary colors from the color wheel below. For example, when the medium absorbs red, the resulting color we see is green.

![](https://docs.otoy.com/cinema4d//lib/absorptionRED.png)

In OctaneRender®, some material types contain a Medium channel. The medium channel is where the process of absorption is accounted for in a rendering. To add a medium into an Octane material, enable the Medium toggle, as illustrated below. When you select the Medium tab of the material, you will see three buttons, each with the name of a Medium. Click on the Absorption button to follow along.

![](https://docs.otoy.com/cinema4d//lib/Medium_Start_Absorption_UI.png)

The options of the absorption medium will appear after you click on the button, as shown.

![](https://docs.otoy.com/cinema4d//lib/absorpM.png)

#### DENSITY

This parameter increases the absorption (and scatter) texture density by multiplying it. You can change this value depending on the material type you'll create. For example, if you are going to make a candle, you may increase this value. This parameter works in cooperation with other options — you can use it alone, but when you start to create complex materials, you will see that all the options are tightly bound together. The default value is 100, but this value should not be taken as a reference. The following picture shows various density settings. You can think of Density as the number of particles in a medium. If there is no particle, there is no absorption and most importantly no scattering. 

![](https://docs.otoy.com/cinema4d//lib/density.png)

#### VOLUME STEP LENGTH

This setting may need to be adjusted depending on the surface. The default value for the step length is 4. Should the volume be smaller than this, you will likely need to decrease the step length. Please note that decreasing this will reduce the render speed. Increasing this value will cause the ray marching algorithm to take longer steps. Should the step length far exceed the volume’s dimensions, then the ray marching algorithm will take a single step through the whole volume. Most accurate results are obtained when the step length is as small as possible.

#### ABSORPTION

This parameter determines the absorption value of the material by assigning one of two texture types:

##### GRAY SCALE TEXTURE

A value of 0 (black) indicates no absorption. Values greater than 0 represent how quickly the medium absorbs white light. In the image below, absorption results from different float values are presented. Remember, the density value is also taken into consideration. The use of FloatTexture value in this illustration is between 0 and 1, but this value can be increased to whatever is needed by directly entering the desired value into the slider edit box.

![](https://docs.otoy.com/cinema4d//lib/absorptionFLOAT.png)

##### RGB TEXTURE 

The absorption color can be specified using RGB values. By default, the color in the Absorption slot will be the same as the color that you see. However, this result is not physically correct and was implemented for simplicity. The illustration below uses an RGB spectrum node in the texture slot and the Invert Absorption value disabled, which is physically correct — the color that is absorbed and the color that is observed will be different — the observed color is the complementary color (opposite color) of the color value in the texture slot. In the examples below you can see the result of various colors after "absorbed color". The density value is 20 for all samples, the roughness value is 0.02 and the Index value is 1.3. Specular was used as material. 

![](https://docs.otoy.com/cinema4d//lib/absorptionRGB.png)

#### INVERT ABSORPTION

Inverts the absorption value. In this case you will see the absorbed color instead of the physically correct complementary color.