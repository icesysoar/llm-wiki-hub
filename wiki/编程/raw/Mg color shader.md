---
type: concept
title: Mg color shader
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "2d1a1a121091"
---

The Mograph Color Shader node allows you to assign shading attributes to Mograph components. To use this shader, you should have an average knowledge of Cinema 4D's Mograph, Effectors (especially the Shader Effector) and the "Color Shader".

  

![](https://docs.otoy.com/cinema4d//lib/colorshademenu.png)

  

#### HOW TO USE

Using the Color Shader node requires a Mograph setup first. To create a scene as seen in the example below, first make the Cloner and Shader effector setups (see those setups in the second picture below or download the scene file). Then use Octane "Image Texture" to load a grayscale or RGB picture in the shading channel of the shader effector (such as noise or turbulence). Then change the position of the cubes in the cloner by adjusting the position settings of the shader effector. Do not forget to set the falloff or create a falloff field in the shader effector. Define the "Color Shader" in the field that the shader effector is affected by the falloff. The "Mograph Color Shader" is linked to the diffuse channel of the parent material and the parent material is assigned to the cloner object. Download the scene from [here](https://drive.google.com/file/d/1znByGbaizoO7NweO16cmxVfFw0CT2mV7/view?usp=sharing)

  

![](https://docs.otoy.com/cinema4d//lib/shadersetup1.png)

  

![](https://docs.otoy.com/cinema4d//lib/mograph_setup_01-02.png)

  

![](https://docs.otoy.com/cinema4d//lib/mograph_setup_03.png)

  

![](https://docs.otoy.com/cinema4d//lib/mograph_setup_04.png)