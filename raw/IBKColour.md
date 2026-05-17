---
type: concept
title: IBKColour
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "df2bec60c786"
---


[IBKColour](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkcolor.html?cshid=IBKColourV3)
### Parameters

# IBKColor

- [IBKColor](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkcolor.html?cshid=IBKColourV3#IBKColor)

- [输入和控制](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkcolor.html?cshid=IBKColourV3#InputsandControls)
- [分步指南](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkcolor.html?cshid=IBKColourV3#StepbyStepGuides)
- [视频教程](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkcolor.html?cshid=IBKColourV3#VideoTutorials)

IBK键控器与许多其他键控器的不同之处在于，它不是使用单一的颜色选择器，而是使用输入图像（仅具有背景颜色变化的干净板）来驱动键。这通常会在处理不均匀的蓝屏或绿屏时为您提供良好的效果。

IBK键控器由两个节点组成：IBKColor和[IBKGizmo](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkgizmo.html)。IBKColor 从蓝屏或绿屏图像创建干净的板，IBKGizmo 拉动钥匙。

**注意：** 当图像用作IBKGizmo的输入时，从IBKColor到某些格式的预渲染输出可能会导致颜色信息丢失和不正确的结果。我们建议将 **.exr** 格式用于预渲染的图像，因为它支持完整的浮点数据，从而减少信息丢失。

作为一般工作流程指南：

|   |   |   |
|---|---|---|
||1.|将 IBKColor 的输出连接到 IBKGizmo 的 c 输入。|

|   |   |   |
|---|---|---|
||2.|将 IBKColor 的输入以及 IBKGizmo 的 fg 输入附加到原始蓝屏或绿屏图像。|

|   |   |   |
|---|---|---|
||3.|将IBKGizmo的bg输入附加到您的背景图像上。|

|   |   |   |
|---|---|---|
||4.|创建两个查看器并并排查看两个节点的输出。|

|   |   |   |
|---|---|---|
||5.|调整IBKColor的控件，直到你得到一个干净的板，只有背景颜色。|

|   |   |   |
|---|---|---|
||6.|调整IBKGizmo的控制，直到您对按键满意为止。|

|   |   |   |
|---|---|---|
||7.|将 IBKGizmo 的输出连接到合成节点（如合并），以在背景上合成前景。|

# 输入和控制

|连接类型|连接名称|功能|
|---|---|---|
|输入|1|蓝屏或绿屏图像。|
|输出|无名|将其连接到 IBKGizmo 节点的 c 输入。|

|控件 （UI）|旋钮（脚本）|默认值|功能|
|---|---|---|---|
|“参数”选项卡|   |   |   |
|屏幕类型|screen_type|蓝|选择绿色或蓝色，具体取决于前景图像中的哪一个。|
|大小|大小|10|调整颜色扩展量。|
|暗黑|关闭|0, 0, 0|调整颜色值以获得黑色和屏幕类型颜色之间的最佳分离。您希望只留下屏幕颜色和黑色的阴影。首先，如果您使用的是蓝屏，则降低蓝色的值，如果图像中有绿屏，则降低绿色的值。调整这些值时，“侵蚀”和“色片黑色”滑块应设置为 0。<br><br>根据经验，如果您有深绿色变色区域，请增加深色 g。同样，如果有一个浅红色变色区域，请增加灯光 r 值。|
|灯|穆尔特|1, 1, 1|调整颜色值以获得黑色和屏幕类型颜色之间的最佳分离。您希望只留下屏幕颜色和黑色的阴影。首先，如果您使用的是蓝屏，则降低蓝色的值，如果图像中有绿屏，则降低绿色的值。调整这些值时，“侵蚀”和“色片黑色”滑块应设置为 0。<br><br>根据经验，如果您有深绿色变色区域，请增加深色 g。同样，如果有一个浅红色变色区域，请增加灯光 r 值。|
|侵蚀|侵蚀|0|如果在输出中仍看到前景色颜色的痕迹，请增大此值。如果在调整浅色和暗值后，您仍然留下变色区域，这可能特别有用。如果您的屏幕没有非常饱和的色调，则可能会发生这种情况。|
|补丁黑色|多|0|调整暗度和灯光后，如果需要，可以增加此值以从输出图像中删除所有黑色。这可能很有用，例如，如果您在合成中出现蓝/绿伪影。|

# 分步指南

[基于图像的键控](https://learn.foundry.com/nuke/14.0/content/tutorials/written_tutorials/tutorial3/image_based_keying.html)

# 视频教程

[![闭](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)键控 - 升级到Nuke教程8](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkcolor.html?cshid=IBKColourV3#)

![“相关主题”链接图标](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)相关主题

  

![](https://learn.foundry.com/nuke/14.0/content/resources/images/arrow_circle.png)

找不到您要查找的内容？使用右侧的反馈小部件请求更多信息。  
您必须接受来自 **learn.foundry.com** 的 Cookie 并禁用任何广告拦截器才能提供反馈。
