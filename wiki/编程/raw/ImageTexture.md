---
type: concept
title: ImageTexture
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "08b6efbe7ffa"
---
ImageTexture 位图贴图是OC贴图最常用的节点之一，链接各种类型的贴图都是使用这个。

图像纹理节点用于向材料添加位图图像，并用于定义任何纹理通道上的外部图像。这些图像可以是 RGB、Alpha或Float，假设在 32 位 SRGB 格式的颜色空间 （RGBA） 中，伽马值为 2.2。如果图像实际上是在线性彩色空间中，例如典型的 EXR 文件，伽马值将需要设置为 1.0。在信息数据格式（如普通地图）的情况下，伽马值也应设置为 1.0。
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNICtCMgdVO9Z92y8iao0SyrDEiaibiaEPHnSr5nXFwibctmzUAO1NwU5ZQSibzCEOQDrkBXqltJh8NWQwdBg/640?wx_fmt=png)
#### 如何使用  
打开节点编辑器并准备下图中显示的设置。在此设置中，同时使用灰度图像和 RGB 图像。这是一个标准设置，所有你需要做的是创建图片和"图像纹理"节点，并连接到相关的渠道。在此示例中，"真实位移纹理"提供了图像纹理，提供了岩石沙景。这些商业上可用的纹理是非常高质量的，在示例设置中，单个"转换"节点连接到所有图像纹理节点以实现一致性。这种方法不适合不同分辨率的图像组合。
#### File 文件
这是加载图像纹理的地方。单击椭圆形进行文件对话，并选择纹理，然后将图像加载到辛烷值图像纹理节点中。
#### Power 强度
控制图像的亮度。
#### Color space 颜色空间  
根据你用什么的色彩空间调整你的色彩空间。  
Non-color data 
sRGB
Liner sRGE，legeay gamma
ACES2065-1
ACEScg
OCIO:<>
#### IES scaling IES比例
Normalize peak to 1.0 峰值正常化 1.0
Normalize using lamp luminance 使用灯的亮度进行归一化  
Absolute photometric 绝对光度测量
GAMMA 伽马
控制输入图像的亮度。
INVERT 转化  
倒置图像的颜色值
#### Linear space inversion 线性空间反转
让我们交换伽玛校正和图像颜色反转的顺序。
#### Border mode 边框模式
如果图像不覆盖整个几何形状，则设置图像周围空间的行为。您可以在下图中查看所有边框模式选项。
#### Type 类型
从这里您可以确定图像的类型。通常，无论您上传的图像类型如何，整个图像都会转换为 RGB 值。例如，如果您上传灰度图像并将选项保留为"正常"，则它仍将转换为 RGB 值。要高效使用 GPU VRAM，请选择与图像匹配的类型，如下所述。
#### Automatic 自动
自动按钮菜单允许您从各种选项中进行选择，以告诉 Octane 如何处理您的图像纹理。自动
此选项将尝试根据图像纹理文件中包含的图像解决最佳设置。
16 位浮动
使用此选项进行 16 bpc 文件。请注意，这些文件的大小更大，将消耗更多的 VRAM。
32 位浮动
使用此选项进行 32 bpc 文件。此设置的图像纹理将甚至大于 16 bpc 文件。
RGB 浮动点 -> 8 位 （BC6）
此选项将将 RGB 浮动文件转换为 8 bpc 文件。如果您希望保存 VRAM，并且该过程的结果足以满足您的需求，这是一个很好的选择。
RGB -> 4 位（BC1）（无阿尔法）
此选项将显著压缩图像，并导致质量损失。它不支持阿尔法通道，如果存在，该通道将被丢弃。
RGBA -> 8 位 （BC3） （更快）
作为质量合理的压缩机，它支持阿尔法通道。
RGBA -> 8 位（BC7）（高品质）
更高质量的压缩机，也支持阿尔法通道。