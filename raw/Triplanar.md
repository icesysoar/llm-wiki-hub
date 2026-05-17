---
type: concept
title: Triplanar
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "be5382029877"
---

The Triplanar Projection node gives a quick way to map a texture on any object without UVs and presents the possibility for texture transforms local to each projection axis. The Triplanar Map node has six inputs representing the positive and negative X, Y, and Z planes. The same or different texture nodes can be mapped to each of these inputs.



![](https://docs.otoy.com/cinema4d//lib/trimenu.png)

This texture is used for mapping the samples of multiple textures along three planes - X, Y, and Z - in world space or object space coordinates and blending them to create one seamless texture. In most cases, it allows you to map textures without having a UV-mapped mesh. 

![](https://docs.otoy.com/cinema4d//lib/triplanaraxes.png)

  

The Triplanar Map Node divides a material map into six areas corresponding to the X, -X, Y, -Y, Z, and -Z axes. Initially, a texture would cover the entire surface of the object but the triplanar mapping confines visibility of the texture map onto the corresponding axis that are active for that texture. 

  

This node may further depend on a Triplanar Projection node which localizes the projection of the texture to a corresponding plane and allows texture UV transforms relative to that projection axis. For example, you can assign "Projection" node to one of your textures and select "Triplanar" from the options.

  

![](https://docs.otoy.com/cinema4d//lib/triplanarR.png)

  

#### HOW TO USE

Open the Node Editor and prepare the setup as you see in the image below. Here, five different image textures used for the "Triplanar" node according to the object space coordinates. You can easily place any image or procedural textures on these axes. 

  

![](https://docs.otoy.com/cinema4d//lib/tripsetup.png)

  

#### TRIPLANAR SETTINGS

##### BLEND ANGLE

This option controls the softness of the seams between each projection axis. 

  

##### SINGLE TEXTURE

A single texture which is "positive X" axis, can be used. The result is the same with the default mapping. 

  

##### POSITIVE AND NEGATIVE AXES

You can define any procedural or image texture to these axes for Triplanar mapping. 

  

##### TRANSFORM

Control the position and orientation of the Triplanar node by connecting the transform node to this input.

  
![](https://docs.arnoldrenderer.com/download/thumbnails/37357393/image2017-11-16%2014%3A7%3A37.png?version=1&modificationDate=1510841279000&api=v2)

  

它允许您通过从所有六个侧面投影纹理来快速映射纹理，而无需使用UV贴图。

![](https://docs.arnoldrenderer.com/download/attachments/41320670/image2020-9-3%208%3A28%3A26.png?version=1&modificationDate=1599121667000&api=v2)

#### [输入](https://docs.arnoldrenderer.com/display/A5AFCUG/Triplanar#Triplanar-Input)
这是连接图像或其他纹理节点的位置。
#### [规模](https://docs.arnoldrenderer.com/display/A5AFCUG/Triplanar#Triplanar-Scale)
缩放图像。
#### [旋转](https://docs.arnoldrenderer.com/display/A5AFCUG/Triplanar#Triplanar-Rotate)
控制纹理在纹理框架内的旋转程度。
#### [抵消](https://docs.arnoldrenderer.com/display/A5AFCUG/Triplanar#Triplanar-Offset)
在 UVW 方向上偏移图像。
#### [坐标空间](https://docs.arnoldrenderer.com/display/A5AFCUG/Triplanar#Triplanar-CoordSpace)
指定要使用的坐标空间。这些坐标包括_世界、对象_和_Pref_坐标。_Pref_是"参考姿势中的顶点"的缩写。该插件可以将这些顶点传递给 Arnold（除了常规的变形顶点之外），而 Arnold 又可以由噪声着色器查询，以便噪声"粘附"到参考姿势，并且不会随着网格变形而游动。
-   **对象空间**：相对于对象的局部原点（中心）表示点。
-   **世界空间：**点相对于场景的全球原点的位置。
-   **Pref**：它不是真正的空格，而是对绑定姿势的引用（注意Pref不适用于NURBS表面）。

#### [Pref Name](https://docs.arnoldrenderer.com/display/A5AFCUG/Triplanar#Triplanar-PrefName)
指定引用位置用户数据数组的名称。以前，该名称被硬编码为"Pref"，这仍然是默认值。
#### [混合](https://docs.arnoldrenderer.com/display/A5AFCUG/Triplanar#Triplanar-Blend)
将每侧的投影纹理平滑地混合在一起。

![](https://docs.arnoldrenderer.com/download/thumbnails/37357393/cube-blend-0.jpeg?version=1&modificationDate=1527155157000&api=v2)

![](https://docs.arnoldrenderer.com/download/thumbnails/37357393/cube-blend-0.5.jpeg?version=1&modificationDate=1508499687000&api=v2)

![](https://docs.arnoldrenderer.com/download/thumbnails/37357393/cube-blend-1.jpeg?version=1&modificationDate=1508499682000&api=v2)

0（默认值）
0.5
1
## 细胞

#### 单元格旋转
控制随机化的旋转。

![](https://docs.arnoldrenderer.com/download/thumbnails/37357393/cell-rotate-0.jpeg?version=2&modificationDate=1527155197000&api=v2)
![](https://docs.arnoldrenderer.com/download/thumbnails/37357393/cell_rotate-90.jpeg?version=2&modificationDate=1509973535000&api=v2)
![](https://docs.arnoldrenderer.com/download/thumbnails/37357393/cell_rotate-180.jpeg?version=2&modificationDate=1509973539000&api=v2)

0（默认值）
90
180

#### 细胞混合
控制混合宽度。

![](https://docs.arnoldrenderer.com/download/thumbnails/37357393/cell_blend-0.jpeg?version=2&modificationDate=1509973541000&api=v2)
![](https://docs.arnoldrenderer.com/download/thumbnails/37357393/cell_blend-0.5.jpeg?version=3&modificationDate=1509973519000&api=v2)
![](https://docs.arnoldrenderer.com/download/thumbnails/37357393/cell_blend-1.jpeg?version=2&modificationDate=1509973545000&api=v2)
