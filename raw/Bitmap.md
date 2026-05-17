---
type: concept
title: Bitmap
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "6ebf62456147"
---
“烘焙纹理”节点使用您指定的设置将任何程序纹理转换为图像纹理，从而允许在通常无法选择的程序纹理时使用程序纹理。
![](https://docs.otoy.com/cinema4d//lib/bitmap.png)
#### 使用方法：位移的程序纹理
首先进入节点编辑器并准备设置，如下图所示。首先将程序纹理（杂色）连接到烘焙纹理节点，然后将烘焙纹理连接到置换节点。完成此连接后，可以将位移连接到主材质的位移端口。若要入门，请参阅包含的示例场景，该场景用于创建图中所示的图像。从这里下载场景[](https://drive.google.com/open?id=106cNzG1c4mKa-V3Nb334EGR1BJcASUkJ)
![](https://docs.otoy.com/cinema4d//lib/bitmapsetup.png)
#### 烘焙纹理设置
##### 质地
此插槽可以包含任何纹理。Octane 的程序纹理比 Cinema 4D 的纹理更高效，应尽可能使用。
##### 启用烘焙
您可以选择使用此开关禁用烘焙。
##### 分辨率
此选项确定烘焙纹理的分辨率。更高的分辨率需要更多的VRAM和GPU功率。
##### 每像素样本数
此选项确定将使用多少个样本来烘焙纹理。默认值为默认值：每像素 32 个样本。
##### 类型
LDR 或“低动态范围”图像为每通道 8 位 （bpc），通常采用 sRGB 色彩空间，在某些情况下可能会出现色彩空间伪影（条带）。HDR（高动态范围）在线性空间中每通道 32 位，没有色彩伪影，但会消耗更多资源。使用位移时，建议使用 16 或 32 bpc 线性图像以获得最干净的置换结果。
##### RGB 烘焙
如果程序纹理使用 RGB 值，请启用此选项，否则将此选项关闭。
##### 权力
调整烘焙纹理的强度值。
##### 伽马
调整烘焙纹理的灰度系数值。
##### 转化
反转烘焙纹理。
##### UVW 变换
在[“变换/投影”](https://docs.otoy.com/cinema4d/Transform.html)[部分中](https://docs.otoy.com/cinema4d/TransformProjection.html)进行了说明。
##### 投影
在[“变换/投影”](https://docs.otoy.com/cinema4d/Projection.html)[部分中](https://docs.otoy.com/cinema4d/TransformProjection.html)进行了说明。
##### 边框模式
在[“图像纹理”](https://docs.otoy.com/cinema4d/ImageTexture.html#border_mode)部分中进行了详细解释。