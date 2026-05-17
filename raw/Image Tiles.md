---
type: concept
title: Image Tiles
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "165367fa503a"
---
mage Tiles (UDIMs) 多项限贴图 UDIM 代表 U-Dimensions，是 UV 工具集的扩展。它允许在同一个 UV 贴图中使用多个图像。这些图像可以具有不同的分辨率，以便我们可以为网格的某些部分提供更高的分辨率，同时节省其他部分的资源。

Image Tiles (UDIMs) 多项限贴图节点允许您定义辛烷值中的 UDIM 类偏移。也称为 U-Dimension，UDIM 的主要原因是图像纹理分辨率，您可以在其中具有特定网格，并特写对象的特定部分，如眼睛或发动机，在相同的整体紫外线和纹理设置。通过在网格中创建多个 UDIM 磁贴，您可以根据需要的用途专门定制图像地图。图像磁贴节点将 UDIM 作为顺序编号的图像序列，使在 Nuke 或后效果等应用程序中处理上述地图的过程非常简单，因为这些地图在这些应用程序中被视为典型的渲染帧。  
#### 基本图像磁贴示例
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNID3KRhEv74CeVKDQxkoHSjoH4ficMyCMibmqGVWz0N3bXeXKgymhlEYMCia9GnMtNdSEjfNBWBmyzib3g/640?wx_fmt=png)
网格布局中的实际 UV 可以以几种不同的方式放置，只要它们按顺序引用即可。在下面的示例中，上矩形 UV 被安排为 6x1 网格。下方矩形无人机被安排为 3x2 网格。最终结果是相同的。在每个矩形中，彩色部分表示缺少的 UDIM 图像。只提供了五张图像，使第六张图片空无一人。颜色由空瓷砖颜色决定。
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIDymOIoxzTpthClxbFe9QwNia2IeZicf6fm7tMQUX0NNTEdZPbOic5lQVp5HGloskiaGc2Dyd71j8EmUg/640?wx_fmt=png)
 