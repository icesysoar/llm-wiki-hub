---
type: concept
title: Light & Shadow Linking
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "8e3c9bd308bd"
---


[Light & Shadow Linking](https://help.maxon.net/r3d/cinema/en-us/index.html#html/Light+And+Shadow+Linking.html?TocPath=Lights%257C_____3)
光影链接
### Parameters
#### 介绍
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Linking_Default.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Linking_Default.jpg)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Linking_Inner_Outter.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Linking_Inner_Outter.jpg)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_Shadow.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_Shadow.jpg)
_所有灯光影响所有对象的场景_
_演示光链接的同一场景_
_演示阴影链接的同一场景_
默认情况下，场景中的每束灯光都会照亮并投射场景中每个对象的阴影。但是，有时您希望特定灯光仅影响某些对象。甚至更进一步，您可能希望某种光线照亮物体而不会投射阴影。
通过灯光链接，您可以基于每个对象控制灯光对场景对象的影响。
阴影链接允许您基于每个对象从灯光中中断阴影的投射。
下面详细介绍了这些方法中的每一种。
#### 光链接
下面的示例场景具有一个简单的照明设置，只有 3 个光源：可见的红色、绿色和蓝色光源，它们当前正在影响场景中的所有对象。
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Linking_Default.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Linking_Default.jpg)
_所有灯光影响所有对象的示例场景_
当我们开始在场景中引入一些光链接时，这个全白场景有助于解释未来发生的事情。正如您在上图中所看到的，由于红光、绿光和蓝光混合在一起，每个物体都是白色的。这里和那里的轻微颜色变化仅仅是由于光线位置略有不同。重要的是要记住，在下面的所有示例中，所有 3 个灯_始终_链接到地面对象。
在Cinema 4D中，您可以使用Redshift灯光的“项目”部分轻松地将灯光链接到对象，如下图所示：
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Shadow_Linking.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Shadow_Linking.jpg)
_C4D "Project" section for light linking_
You can set the _Mode_ to either "Exclude" or "Include" in which case the light will either ignore or illuminate the objects that are selected and present in the "Objects" portion of the _Project_ panel. Both "Include" and "Exclude" modes can achieve the same results.
To add objects for light linking you can either click and drag objects into the "Objects" area or use the object picker [![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_Object_Picker.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_Object_Picker.png) and then select your objects directly in the viewport or in the _Object Manager_.  
Once objects are added to the Project panel light linking can be further customized on a per-object basis by using the light linking button [![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Illum.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Illum.png) to control direct illumination, shadow linking button [![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Shadow.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Shadow.png) to control the casting of shadows, and apply to children button [![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Affect_Parent.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Affect_Parent.png) which controls whether or not these light linking options are also applied to any children for the selected object. For more information on shadow linking please refer to [this section](https://help.maxon.net/r3d/cinema/en-us/Content/html/Light+And+Shadow+Linking.html?tocpath=Lights%7C_____3#Light&ShadowLinking-shadow_linking).
下面是两个示例图像，说明了将光源成功链接到场景中的对象。这些示例还演示了如何使用“包含”或“排除”获得相同的结果，因为下面的光链接设置会产生相同的渲染。
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_Example_Scene.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_Example_Scene.png)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Exclude.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Exclude.png)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Red_Light.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Red_Light.png)
_C4D 示例场景_
_**项目模式：**排除_
_包括_
使用“包含”项目模式，示例场景中的立岩现在已链接到 3 种不同的光源，如下图所示：
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Red_Light.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Red_Light.png)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Green_Light.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Green_Light.png)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Blue_Light.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Blue_Light.png)
_红灯链接设置_
_绿灯链接设置_
_蓝光链接设置_
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Linking_Tri_Color.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Linking_Tri_Color.jpg)
_具有上述光源链接设置的示例场景_
正如你在上面看到的，岩石被分成了三分之一，每个三部分都有自己的光线，只影响每个三分之一。地面物体仍然受到所有 3 个光源的影响，这就是为什么每个岩石部分的阴影颜色是剩余光源仍在该区域投射的累加结果。例如，图像顶部的红色岩石仅从红光接收光线并投射阴影，但是，蓝色和绿色灯光仍然在这个阴影区域中投射光线，导致青色阴影。
再举一个例子，岩石的内圈和岩石的外圈将链接到完全独立的光，以展示光链接的另一个潜在副作用。岩石的内圈与红光相连，外圈与绿光相连，而蓝光排除所有岩石，如下图所示：
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LLTri_Red.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LLTri_Red.png)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LLTri_Green.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LLTri_Green.png)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LLTri_Blue.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LLTri_Blue.png)
_红灯链接设置_
_绿灯链接设置_
_蓝光链接设置_
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Linking_Inner_Outter.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Light_Linking_Inner_Outter.jpg)
_Example scene with the light linking setup above_
Now with this light linking setup you can see we are getting double shadows and surreal lighting with these rocks. This is due to the fact that the green light is completely ignoring the inner circle of rocks and only illuminating and casting shadows of the outer circle of rocks. You can see that the green light hitting the outer rocks is even bouncing onto the backside of the inner rocks due to [global illumination](https://help.maxon.net/r3d/cinema/en-us/Content/html/Global+Illumination.html). The double shadows occur when the shadows from the inner red rocks and the shadows cast by the green light coincide with one another, resulting in the darker blue shadow seen in the picture above.
#### Shadow Linking
Shadow linking takes light linking a step further by being able to decouple light links from shadow links, allowing for even more custom control over your scenes.
To compare the different Shadow Linking results we are going to start off with a baseline example to compare each result to. In the examples below, the _only_ thing that will change is the status of the "Shadow" options in the _Project_ tab, the light linking will remain the same.
The baseline scene makes use of light linking to split the rocks into thirds, each third is linked to one light exactly like the example used in the Light Linking section above.
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_Light.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_Light.jpg)
Baseline example scene just asigning different objects to be included with the lights.
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Red_base.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Red_base.png)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Green_base.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Green_base.png)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Blue_base.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Blue_base.png)
_Red light "Project" settings_
_Green light "Project" settings_
_Blue light "Project" settings_
In the next example we will start breaking some shadow links.
To do so in C4D all you have to do is click the shadow linking button [![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Shadow.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_LL_Shadow.png) in your Redshift light's "Project" panel. When the shadow linking button gets is clicked it gets colored red meaning the shadow link with that object has been broken and that light will not cast a shadow for that object.
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_grey.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_grey.png)
_Example showing shadow links being broken with 4 objects_
In the example scene below the shadow links have been broken for only the light that provides illumination for that group of rocks. Therefore the light and shadow linking for each group of rocks is as follows:
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Red.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Red.png)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Green.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Green.png)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Blue.png)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/C4D_SL_Blue.png)
_Red light "Project" settings_
_Green light "Project" settings_
_Blue light "Project" settings_
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_Shadow.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_Shadow.jpg)
_Example scene using shadow linking_
Since the primary light source for these rocks has had its shadow link broken the shadow color result for these objects is the same color as its diffuse lighting.
For example, the top group of rocks is being lit just by the red light. The red light has had its shadow link broken with the red light, but both the green and blue lights are _still_ casting shadows for these rocks even though they are not illuminating them. Since the shadow color of a green light is magenta and the shadow color of a blue light is yellow (as scene in the baseline example) they are added together, resulting in the red shadow above.
Now in the final example we will activate all shadow options again for the three lights. This results in the example image below:
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_None.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_None.jpg)
_Leaving all shadow options active for the three lights results in black shadows again._
As you can see, light and shadow linking allows for complete artistic control when setting up scene lighting allowing you to achieve all sorts of specific and sometimes surreal looks. Below you can see the same 3 examples pictured side by side and just how different the results are when only the shadow options are changed even though the linked objects in the lights _Project_ tab are identical in all examples.
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_Light.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_Light.jpg)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_Shadow.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_Shadow.jpg)
[![](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_None.jpg)](https://help.maxon.net/r3d/cinema/en-us/Content/Resources/Images/Shadow_Linking_None.jpg)