---
type: concept
title: Motion Blur
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "9732a399ebf2"
---
OctaneRender中的运动模糊既快速又逼真，因为Octane正确地模仿了通过镜头和快门系统捕获光线的方式。要获得准确的模糊，请调整相对于场景每秒帧数值的快门值。也可以通过使用更长的快门持续时间来扰乱现实并获得“狭缝扫描”效果，例如“2001：太空漫游”。
Octane 有两种不同的运动模糊选项：相机和对象运动模糊。当相机移动时，您将看到相机运动模糊。对象运动模糊在对象动画化时使用。您可以从 Octane 相机标签控制相机运动模糊，从辛烷值对象标签控制对象运动模糊。本节将找到两者的详细说明。
```
重要提示
运动模糊需要对层级结构中的所有对象或对象父级使用Octane对象标签。禁用Octane对象标签中的运动模糊选项或从层级结构中省略Octane对象标签可能很方便。如果启用了运动模糊，则需要标签。省略标签或禁用的运动模糊可能会导致奇怪的模糊伪影;在某些情况下，原本没有模糊的对象将被错误地进行运动模糊处理。
```
这方面的一个常见示例是将对象锁定到相机，以便对象相对于相机的运动实际上为零。如果所有适当的对象或对象层级结构上都没有 Octane 对象标签，则打算显示为锁定在相机上的对象将出现奇怪的条纹。这是因为，在禁用运动模糊或未引用 Octane 对象标签的情况下，运动计算中将完全省略此对象，从而导致歧义。这不是错误，而只是系统的工作方式。如有疑问，请应用标签并启用模糊。
#### CAMERA MOTION BLUR 摄像机运动模糊
摄像机运动模糊是场景中的摄像机处于运动状态时记录的运动模糊类型。它与对象运动分开处理，可以在特殊情况下禁用。Octane将产生运动模糊以匹配物理相机和镜头的运动模糊，这是快门速度，快门角度和曝光时间的组合造成的。摄影和高端运动相机上的快门要么是物理机械的，要么是“全局的”，这意味着它们可以在同一瞬间捕捉完整的帧，而许多（通常更便宜的）数码相机使用电子快门（卷帘快门），这可能会使元素倾斜在原本垂直的框架中。快门的一个简单示例是一个圆形圆盘，其中一部分移除了一个插槽。这个开放的部分允许光线照射到胶片或传感器上并曝光图像。此过程可创建图像中记录运动对象方式的可识别效果。
![](https://docs.otoy.com/cinema4d//lib/Camera_Tag-Camera_Imager_Motion-Blur_Tab.png)
##### About Shutter Speeds 关于快门速度
“快门速度”的定义：“[](https://en.wikipedia.org/wiki/Camera)在[摄影](https://en.wikipedia.org/wiki/Photography)中，快门速度或曝光时间是指相机内部的胶片或数字传感器暴露在光线下的时间长度，也是拍照时相机快门打开的时间长度[](https://en.wikipedia.org/wiki/Shutter_(photography))。到达[胶片](https://en.wikipedia.org/wiki/Photographic_film)或[图像](https://en.wikipedia.org/wiki/Image_sensor)[](https://en.wikipedia.org/wiki/Image_sensor)[传感器](https://en.wikipedia.org/wiki/Image_sensor)的光量与曝光时间成正比“（来源：维基百科）。
快门速度决定了快门打开的时间，从而将光线暴露在胶片或传感器上，从而捕获图像。运动图像的质量取决于快门速度。快门速度还可以决定图像的清晰度，这也会影响到达相机传感器的光量。如果快门速度较慢，则会出现图像模糊。
快门速度值以比例表示，例如 16、8、4、1、1/4、1/8、1/16。随着数量的增加，您的暴露量也会增加。随着数字的减少，您的曝光时间会变短（如 1/15 或 1/500 秒）。“1/500”表示快门在一秒钟内打开和关闭500次。
有关快门的良好说明，请观看此![视频](https://www.youtube.com/watch?v=k4TXNZW3JBo&feature=emb_rel_end)
![](https://docs.otoy.com/cinema4d//lib/shutterdiag.png)
#### MOTION BLUR SETTINGS 运动模糊设置
##### Enable 启用开关
用于打开和关闭运动模糊。
##### Shutter (sec.) 快门（秒）
调整渲染帧中的运动模糊量。要输入实际快门值，请通过此计算确定所需的快门速度，如下所示。对于每秒 30 帧，将 1 除以 30;结果是 1/30 = 0.03，这是要输入到快门字段中的值。
![](https://docs.otoy.com/cinema4d//lib/shutter12.png)
##### Time Shift (Sec.) 时移（秒）
用于移动运动模糊的计算帧。
##### M.Blur Caches (Frames) M.模糊缓存（帧）
此功能确定在实时查看器中来回移动时将缓存多少帧。实时查看器只知道现有帧中的数据。您可以通过在此字段中输入要缓存的帧数，将运动数据存储在实时查看器中。
##### Shutter Alignment 快门对齐
快门对齐有三个选项：之前、居中、之后。通常，它指定如何相对于上一帧或下一帧计算运动模糊效果。例如，如果有 10 帧的运动模糊，而您处于第 20 帧;之前：根据 10-20、中心 15-25 和 20-30 之间的帧产生模糊。
##### Disable Camera M.Blur 禁用相机 M.模糊
如果您只想查看对象的运动模糊，而不想查看相机的运动模糊效果，则可以激活此功能。
#### OBJECT MOTION BLUR 对象运动模糊
此选项用于仅将运动模糊应用于启用了“运动模糊”选项的 Octane 对象标签的运动对象。没有启用了运动模糊的 Octane 对象标签的对象将无法正确进行运动模糊处理，并且可能显示不正确。
![](https://docs.otoy.com/cinema4d//lib/objectmblur.png)
##### Object Motion Blur 对象运动模糊
有四个选项：禁用、变换、变换/顶点和顶点速度：
###### Disabled 禁用
禁用对象的运动模糊。
###### Transform 变换
启用对象的位置、缩放和旋转转换的运动模糊。
![](https://docs.otoy.com/cinema4d//lib/shutter1.png)
###### Transform/vertex 变换/顶点
运动模糊是针对对象的变换和顶点移动（例如角色装备变形、头发等）计算的。
###### Vertex speed 顶点速度
此选项可计算体积和流体流动模拟的正确运动模糊。需要三个单独的顶点贴图（每个 X、Y 和 Z 轴一个）。
##### Use Guides on Motion Blur 在运动模糊上使用参考线
对于粒子运动模糊，此选项使用粒子 ID 来帮助正确呈现粒子运动模糊。默认为禁用。
#### MOTION BLUR WITH RENDER INSTANCES 使用渲染实例进行运动模糊
使用渲染实例时，最好从原始实例创建实例，并仅对实例进行动画处理;将原始对象（无动画）放在空对象中，并在拍摄期间移动到屏幕外的某个位置。要正确渲染，必须启用对象和父 null，否则渲染实例在渲染时将不可见。
在克隆器中使用渲染实例时，请遵循相同的过程，但向克隆器提供渲染实例而不是原始几何体。克隆器需要设置为实例而不是渲染实例，因为提供的渲染实例已经是一个实例。
#### REALFLOW EXAMPLE 实际流示例
在教程中，我们将为倒在巧克力棒上的液体（例如牛奶）添加运动模糊。我们将保持模拟相当简单，因为输入无穷无尽的模拟细节超出了本教程的范围。对于流体模拟，我们将使用Next Limit的Real Flow for Cinema 4D V2.5插件。在这种情况下，请确保在打开场景之前已安装 Realflow 插件。您可以从这里购买插件[。](https://realflow.com/realflow-cinema4d/)从[这里](https://drive.google.com/file/d/1Z_rW9aCBPtnGORefiTWdFTVUgdStHo9f/view?usp=sharing)下载场景
1-打开场景。相机角度和其他所有内容都已经设置好了。从Cinema 4D菜单中转到Reaflow，然后选择“场景”。选择后，Realflow系统将出现在对象管理器中。
![](https://docs.otoy.com/cinema4d//lib/sp_01.png)
2-现在创建一个“发射器”和一个“流体”对象。对于发射器，请转到RealFlow菜单，然后从“发射器”中选择“圆圈”。对于流体对象，从菜单中选择“流体”。将发射器和流体对象拖放到 RealFlow 系统的相关部分中，并对这两个对象进行设置，如下图所示。
![](https://docs.otoy.com/cinema4d//lib/sp_02.png)
3-转到坐标。发射器位置的选项卡。输入以下值：“P.X： 0 / P.Y： 308.896 / P.Z： 0” 和 “RB： -51.288”。输入值后，发射器位置应如下图所示。如果没有，您可以手动将其直接放在巧克力棒上方。我们将使用这个角度来发射粒子。
![](https://docs.otoy.com/cinema4d//lib/sp_05.png)
4-巧克力棒需要设置。在对象管理器中选择对象时单击鼠标右键，然后从菜单中选择 Realflow 标签/碰撞体。有了这个标签，落在巧克力上的颗粒将与物体相互作用。
![](https://docs.otoy.com/cinema4d//lib/sp_09.png)
5-为液体溢出操作添加两个守护程序对象。转到菜单，然后从守护程序部分选择“重力”和“噪声场”。将设置保留为默认值。如果这两个对象未自动链接，请将相关对象拖放到下图中看到的字段中。
![](https://docs.otoy.com/cinema4d//lib/sp_11.png)
6-按播放按钮以测试模拟。从顶部溢出的颗粒迅速扩散并与巧克力棒相互作用。这些粒子用于生成渲染网格。返回RealFlow菜单，这次选择“Mesher”。如下图所示进行设置。
![](https://docs.otoy.com/cinema4d//lib/sp_14.png)
7-设置运动模糊的时间。为此，请右键单击“Mesher”对象，然后从弹出菜单中选择“C4Doctane Tags / Octane Object Tag”。从标签选项中，转到运动模糊选项卡并选择顶点速度。顶点速度需要三个单独的标签。这些标签是在Realflow中创建Mesher对象期间自动创建的。将这些标签拖放到运动模糊部分中的顶点速度槽中。
![](https://docs.otoy.com/cinema4d//lib/sp_15.png)
8-您应该得到类似于下图的结果。对于任何带有运动导出集的导入模拟，此过程都是相同的，包括Embergen，Houdini或X粒子。
![](https://docs.otoy.com/cinema4d//lib/speedfin.png)