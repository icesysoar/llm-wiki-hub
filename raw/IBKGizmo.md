---
type: concept
title: IBKGizmo
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "ba212520bc80"
---


[IBKGizmo](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkgizmo.html?cshid=IBKGizmoV3)
### Parameters

# IBKGizmo

- [IBKGizmo](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkgizmo.html?cshid=IBKGizmoV3#IBKGizmo)

- [输入和控制](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkgizmo.html?cshid=IBKGizmoV3#InputsandControls)
- [分步指南](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkgizmo.html?cshid=IBKGizmoV3#StepbyStepGuides)
- [视频教程](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkgizmo.html?cshid=IBKGizmoV3#VideoTutorials)

IBK键控器与许多其他键控器的不同之处在于，它不是使用单一的颜色选择器，而是使用输入图像（仅具有背景颜色变化的干净板）来驱动键。这通常会在处理不均匀的蓝屏或绿屏时为您提供良好的效果。

IBK键控器由两个节点组成：[IBKColor](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkcolor.html)和IBKGizmo。IBKColor 从蓝屏或绿屏图像创建干净的板，IBKGizmo 拉动钥匙。

**注意：** IBKGizmo 的输出是带有 alpha 通道的预乘图像 - 它不会在背景上合成前景。要执行合成，请将 IBKGizmo 连接到合成节点，例如合并。

**注意：** 当图像用作IBKGizmo的输入时，从IBKColor到某些格式的预渲染输出可能会导致颜色信息丢失和不正确的结果。我们建议将 **.exr** 格式用于预渲染的图像，因为它支持完整的浮点数据，从而减少信息丢失。

# 输入和控制

| 连接类型 | 连接名称                                                                                                                                             | 功能                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| 输入   | BG                                                                                                                                               | 背景图像。这用于计算精细的边缘细节。 |
| c    | 也：<br><br>• 一个 IBKColor 节点。这将创建干净的板（即，采用抠出的颜色并创建更平滑的表示）。<br><br>• 在外景地拍摄的干净板。这比使用 IBKColor 节点更准确，但在大多数情况下，干净的板不可用。<br><br>如果已将屏幕类型设置为选取，则不需要此输入。 |                    |
| 盖瑞   | 蓝屏或绿屏图像。                                                                                                                                         |                    |

| 控件 （UI）   | 旋钮（脚本）            | 默认值     | 功能                                                                                                                                                                                                                                                                                                           |
| --------- | ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| IBK 选项卡   |                   |         |                                                                                                                                                                                                                                                                                                              |
| 屏幕类型      | 圣                 | C-蓝色    | 根据前景图像中的屏幕类型进行设置：<br><br>• C-blue - 如果您的前景图像是蓝屏图像，并且您希望使用 C 输入（干净的板）来驱动按键，请选择此选项。<br><br>• C 绿色 - 如果您的前景图像是绿屏图像，并且您希望使用 C 输入（干净的板）来驱动按键，请选择此选项。<br><br>• 拾取 - 使用下面的颜色选取器将 C 输入替换为单一颜色。这样，IBK的行为更像传统的键控器，例如[Primatte](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/primatte.html)。 |
| 颜色        | 颜色                | 0, 0, 1 | 如果已将屏幕类型设置为选取，请使用此控件选取最能代表尝试使用键控区域的颜色。                                                                                                                                                                                                                                                                       |
| 红色重量      | red_weight        | 0.5     | 设置红色通道在键控计算中的权重方式。这主要影响红色区域的哑光硬度。<br><br>如果您检查屏幕减法并查看输出，您经常会看到变色的边缘，因为背景尚未从原始板上完全去除。这不是溢出，而是哑光太强的结果。降低其中一个权重将校正前景对象的边缘，使其颜色正确。例如，如果红色前景对象存在 edge 问题，则应降低红色权重。这可能会影响其他边，因此使用多个具有不同权重的 IBKGizmos 通常是一个好主意，这些 IBKGizmos 与 Keymix 节点（合并> Keymix）。                                                                |
| 蓝色/绿色重量   | blue_green_weight | 0.5     | 设置蓝色或绿色通道在键控计算中的权重方式。这主要影响蓝色或绿色区域的哑光硬度。<br><br>如果您使用的是蓝屏，这将控制绿色权重。<br><br>如果您使用的是绿屏，这将控制蓝色权重。<br><br>如果你的前景和背景的颜色相反（例如，饱和蓝色上的黄色），你需要把重量一直拉低，使一切都透明。                                                                                                                                                          |
| 亮度匹配      | lm_enable         | 禁用      | 向键控添加亮度因子，并帮助捕获比背景更亮的透明前景区域。<br><br>如果降低屏幕范围，您还可以使用亮度匹配来减少一些屏幕区域噪点。但是，将此控件推得太远会侵蚀前景中的黑色。<br><br>您可以使用它来巩固较亮区域中的 alpha 通道。                                                                                                                                                                                    |
| 屏幕范围      | 水平                | 1       | 降低此值，直到它停止更改背景。如果后备区域留下太多噪音，您可能需要在拔键之前对素材进行颗粒处理。<br><br>这可能会清除背衬区域的噪音，但最终也可能使哑光边缘变硬。                                                                                                                                                                                                                         |
| 亮度级别      | 卢玛                | 0       | 允许您控制整体效果的强度。<br><br>这通常仅在少数情况下有效，通常您不必调整。                                                                                                                                                                                                                                                                   |
| 使         | ll_enable         | 禁用      | 选中此选项以激活亮度级别控件。                                                                                                                                                                                                                                                                                              |
| 自动水平      | 自动水平              | 禁用      | 可用于减少具有饱和颜色的前景对象的任何硬边。使用权重也可以实现相同的效果，但自动色阶控件仅影响饱和的颜色，而权重会影响整个图像。<br><br>使用此控件时，最好将其作为单独的节点，然后可以与其他 IBKGizmos 拆分，因为权重控件将不再按预期工作。<br><br>如果您确实有要保留的前景色，则可以选中等效的颜色框以保留它们。例如，蓝屏上可能有一个饱和的红色主体，这会导致洋红色过渡区域。自动分级消除了这种情况。但是，如果您有洋红色前景对象，自动色阶会使洋红色更红。要保留洋红色，您需要选中洋红色框。<br><br>当图像中具有过饱和的颜色时，此控件特别有用。                  |
| 黄色        | 黄色                | 禁用      | 选中此选项可防止自动色阶更改前景元素中的饱和黄色。                                                                                                                                                                                                                                                                                    |
| 青色        | 青色                | 禁用      | 选中此选项可防止自动色阶更改前景元素中的饱和青色。                                                                                                                                                                                                                                                                                    |
| 品红        | 品红                | 禁用      | 选中此选项可防止自动色阶更改前景元素中的饱和洋红色。                                                                                                                                                                                                                                                                                   |
| 屏幕减法      | 党卫军               | 启用      | 若要让键控器从 RGB 中减去前景，请检查此控件。<br><br>要将原始前景与生成的遮罩预乘，请取消选中此控件。                                                                                                                                                                                                                                                    |
| 使用 BKG 亮度 | 乌布鲁               | 禁用      | 要使 bg 输入影响边缘的亮度，请选中使用 bkg 亮度。<br><br>这些控件最好与亮度匹配启用滑块一起使用。它们还可以帮助显示某种形式的边纹伪影的屏幕 - 通常是屏幕上某个颜色通道上的边缘变暗或变亮。要抵消效果，请在输入之前使用“等级”节点（“颜色>等级”）对 bg 输入进行调色。如果只是一个需要帮助的区域，请在该区域周围绘制贝塞尔形状（> RotoPaint 绘制），并在本地对 bg 输入进行分级以删除伪影。                                                                                           |
| 使用BKG色度   | 优步银行              | 禁用      | 要使 bg 输入影响边缘的颜色，请选中使用 bkg 色度。<br><br>这些控件最好与亮度匹配启用滑块一起使用。它们还可以帮助显示某种形式的边纹伪影的屏幕 - 通常是屏幕上某个颜色通道上的边缘变暗或变亮。要抵消效果，请使用“分级”节点 （颜色 > 等级）就在输入之前。如果只是一个需要帮助的区域，请在该区域周围绘制贝塞尔形状（> RotoPaint 绘制），并在本地对 bg 输入进行分级以删除伪影。                                                                                                    |

# 分步指南

[基于图像的键控](https://learn.foundry.com/nuke/14.0/content/tutorials/written_tutorials/tutorial3/image_based_keying.html)

# 视频教程

[![Closed](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)键控 - 升级到Nuke教程8](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/ibkgizmo.html?cshid=IBKGizmoV3#)

![Related Topics Link Icon](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)相关主题


找不到您要查找的内容？使用右侧的反馈小部件请求更多信息。  
您必须接受来自 **learn.foundry.com** 的 Cookie 并禁用任何广告拦截器才能提供反馈。