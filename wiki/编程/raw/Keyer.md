---
type: concept
title: Keyer
tags: []
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "b4b47ea3639e"
---


[Keyer](https://learn.foundry.com/nuke/14.0/content/reference_guide/merge_nodes/layercontactsheet.html?cshid=LayerContactSheet)

# 键控器

- [键控器](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/keyer.html?cshid=Keyer#Keyer)

- [输入和控制](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/keyer.html?cshid=Keyer#InputsandControls)
- [视频教程](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/keyer.html?cshid=Keyer#VideoTutorials)

此节点允许您访问几个简单的键控器。您可以使用它根据输入图像的键拉取：

• 红色、绿色或蓝色通道，

•红屏、绿屏或蓝屏，

• 亮度（默认值），

• 饱和度，或

• 最大值和最小值。

要使用此节点，请在查看器中查看 Alpha 通道。然后，使用范围图调整遮罩的低像素值和高像素值。A 手柄确定键的低值或透明值：低于此值的任何像素都将剪裁为黑色。B 控点确定高值或不透明值：高于此设置的像素值将裁剪为白色。

默认位置允许您控制低值和高值，假设您的图像具有不同的明暗区域。但是，有时遮罩的主题会落入“中间灰色”区域;C 和 D 控点允许您移动键的高值的中心。

# 输入和控制

|连接类型|连接名称|功能|
|---|---|---|
|输入|无名|要键的图像序列。|

|控件 （UI）|旋钮（脚本）|默认值|功能|
|---|---|---|---|
|键控器选项卡|   |   |   |
|输入|输入|RGB|选择要用于键控的图层。|
|输出|不适用|启用|启用右侧的关联输出通道。禁用此复选框与将通道设置为无相同。|
|输出|RGBA.alpha|将生成的图像渲染到此输出通道中。|
|取代|合|取代|选择将遮罩与现有输出通道组合的方式。<br><br>• 替换 - 用遮罩**替换**现有输出通道<br><br>• **相交** - 创建遮罩和现有通道的相交。<br><br>• **联合** - 创建遮罩和现有通道的组合。|
|转化|转化|禁用|反转 Alpha 通道的使用，使结果为非白色遮罩。|
|操作|操作|亮度键|选择要用于对序列进行键控的键控工具：<br><br>• 红色键**控器** - 使用红色通道拉动键。<br><br>• 绿色键**控器** - 使用绿色通道拉动键。<br><br>• 蓝色键**控器** - 使用蓝色通道拉动键。<br><br>• **红屏** - 从其他频道中减去红色通道。<br><br>• **绿屏** - 从其他频道中减去绿色频道。<br><br>• **蓝屏** - 从其他频道中减去蓝色频道。<br><br>• 亮度键 - 使用亮度值拉动**键**。<br><br>• 饱和键 - 使用**饱和**值拉动键。<br><br>• **最大键控器** - 使用红色、绿色和蓝色通道的最大值来拉键。<br><br>• 最小键**控器** - 使用红色、绿色和蓝色通道的最小值拉动键。|
|范围|范围|不适用|拖动图形中的 **A**、**B**、**C** 和 **D** 分隔符控点以调整键控结果。**A** 分隔符标记您希望键控开始的值，**B** 和 **C** 之间的距离标记完整效果的长度，分隔符 **D** 指示效果停止的位置。|
|一个|范围|1|在范围图中输入分隔符 **A** 的值。您也可以拖动图形中的控点。|
|B|范围|1|在范围图中输入分隔符 **B** 的值。您也可以拖动图形中的控点。|
|C|范围|1|在范围图中输入分隔符 **C** 的值。您也可以拖动图形中的控点。|
|D|范围|1|在范围图中输入分隔符 **D** 的值。您也可以拖动图形中的控点。|

# 视频教程

[![闭](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)键控 - 升级到Nuke教程8](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/keyer.html?cshid=Keyer#)

  

![](https://learn.foundry.com/nuke/14.0/content/resources/images/arrow_circle.png)

找不到您要查找的内容？使用右侧的反馈小部件请求更多信息。  
您必须接受来自 **learn.foundry.com** 的 Cookie 并禁用任何广告拦截器才能提供反馈。
