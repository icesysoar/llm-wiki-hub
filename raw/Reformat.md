---
type: concept
title: Reformat
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "7b7abead3d40"
---


[Reformat](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/reformat.html?cshid=Reformat)
### Parameters
# 格式化

- [格式 化](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/reformat.html?cshid=Reformat#Reformat)

- [输入和控制](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/reformat.html?cshid=Reformat#InputsandControls)
- [分步指南](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/reformat.html?cshid=Reformat#StepbyStepGuides)
- [视频教程](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/reformat.html?cshid=Reformat#VideoTutorials)

重新格式化允许您调整图像序列的大小并将其重新定位为不同的格式（宽度和高度）。这也允许您在单个脚本上使用不同图像分辨率的板，而不会在组合它们时遇到问题。所有脚本都应在每个读取节点后包含“重新格式化”节点，以至少指定脚本中图像的输出分辨率。

# 输入和控制

|连接类型|连接名称|功能|
|---|---|---|
|输入|无名|要调整大小的图像。|

|控件 （UI）|旋钮（脚本）|默认值|功能|
|---|---|---|---|
|“重新格式化”选项卡|   |   |   |
|类型|类型|要格式化|选择如何调整图像大小：<br><br>• **到** 格式 - 将输出宽度和高度设置为所选格式。在输出格式下拉菜单中选择**格式**。如果格式尚不存在，则可以选择**“新建**”从头开始创建新格式。默认设置 **root.format** 将图像大小调整为“**项目设置**”对话框中指示的格式。<br><br>• **to box** - 将输出宽度和高度设置为您定义的尺寸（以像素为单位）。在**宽度/高度**和**像素宽高比**字段中输入值以指定尺寸。此选项可用于创建输入图像的缩略图。<br><br>• **scale** - 将输出宽度和高度设置为输入大小的倍数。使用**比例**滑块定义因子。比例因子略微舍入，因此输出图像是调整**大小类型**下所选方向上的整数像素数。|
|输出格式|格式|根格式|要将图像序列输出到的格式。如果格式尚不存在，则可以选择**“新建**”从头开始创建新格式。默认设置 **root.format** 会将图像大小调整为**“项目设置**”中指示的格式。<br><br>仅当将 **type** 设置为 **format** 时，此控件才可用。|
|宽度/高度|box_width|200|图像的输出宽度。单位以像素为单位。<br><br>仅当将 **type** 设置为 **box** 时，此控件才可用。|
|box_height|200|图像的输出高度。单位以像素为单位。<br><br>仅当将 **type** 设置为 **box** 时，此控件才可用。|
|强制此形状|box_fixed|禁用|启用后，输出图像与**宽度**/**高度**字段完全匹配，即使原始图像是不同的形状也是如此。为此，一个方向被剪裁或填充。<br><br>禁用后，输出图像的形状与原始图像大致相同，四舍五入到最接近的整数像素数。<br><br>仅当将 **type** 设置为 **box** 时，此控件才可用。|
|像素宽高比|box_pixel_aspect|1|设置输出图像的像素长宽比。<br><br>仅当将 **type** 设置为 **box** 时，此控件才可用。|
|规模|规模|1|宽度和高度的比例因子。要使用不同的比例因子分别缩放每个方向，请单击 **2** 按钮。<br><br>仅当将**类型**设置为**缩放**时，此控件才可用。|
|调整大小类型|调整|宽度|选择保留或覆盖原始像素长宽比的方法。选择：<br><br>• **无** - 不调整原始大小。<br><br>• 宽度 - 缩放原始文件，直到其宽度与输出**宽度**匹配。然后以保留原始纵横比的方式缩放高度。<br><br>• 高度 - 缩放原始文件，使其填充输出**高度**。然后以保留原始纵横比的方式缩放宽度。<br><br>• **适合** - 缩放原始内容，使其最小的一侧填充输出宽度或高度。然后以保留原始纵横比的方式缩放最长边。<br><br>• 填充 - 缩放原始文件，使其最长边**填充**输出宽度或高度。然后以保留原始纵横比的方式缩放最小的一侧。<br><br>• **扭曲** - 缩放原件，使两侧填充输出尺寸。此选项不会保留原始纵横比，因此可能会出现失真。|
|中心|中心|启用|启用后，“重新格式化”会将图像转换为在输出中居中。<br><br>禁用后，“重新格式化”将转换图像，使左下角对齐。|
|空翻|空翻|禁用|启用后，“重新格式化”会将图像颠倒过来。|
|失败|失败|禁用|启用后，“重新格式化”会左右翻牌图像。|
|转|转|禁用|启用后，“重新格式化”会将图像逆时针旋转 90 度。|
|滤波器|滤波器|四方|选择将像素从其原始位置重新映射到新位置时要使用的过滤算法。这使您可以避免图像质量问题，尤其是在帧的高对比度区域中（如果未过滤像素并保留其原始值，则可能会出现高度锯齿或锯齿状的边缘）。<br><br>• 脉冲 - 重新映射的像素带有其原始值。<br><br>• 立方体 - 重新映射的像素会得到一些平滑处理。<br><br>• 关键帧 - 重新映射的像素会得到一些平滑处理，以及轻微的锐化（如曲线的负 -y 部分所示）。<br><br>• Simon - 重新映射的像素会得到一些平滑处理，以及中等锐化（如曲线的负 -y 部分所示）。<br><br>• Rifman - 重新映射的像素会得到一些平滑处理，以及显著的锐化（如曲线的负 -y 部分所示）。<br><br>• 米切尔 - 重新映射的像素会得到一些平滑处理，加上模糊以隐藏像素化。<br><br>• Parzen - 重新映射的像素在所有滤镜中得到最大的平滑度。<br><br>• 陷波 - 重新映射的像素接收平坦平滑（这往往会隐藏摩尔纹图案）。<br><br>• Lanczos4、**Lanczos6** 和 **Sinc4** - 重新映射的像素会进行锐化，这对于缩小非常有用。**Lanczos4**提供最少的锐化，**Sinc4**提供最多的锐化。|
|钳|钳|禁用|使用采用锐化的滤镜（如 **Rifman** 和 **Lanczos**）时，您可能会看到晕轮效果。如有必要，请检查夹具以纠正此问题。|
|外面黑|black_outside|启用|这将呈现为图像边界外的黑色像素，从而更容易将元素分层到另一个元素上。如果取消选中此控件，则外部区域将填充图像序列的最外层像素。<br><br>在大多数情况下，您应该检查**外面的黑色**。但是，您可能希望关闭此功能以进行相机抖动，或者如果要对输出进行纹理映射或与相似形状相交。<br><br>**注意：** 如果不存在 Alpha，则在**外部启用黑色**还会添加覆盖输入图像区域的实心 Alpha。|
|保留边界框|多溴联苯|禁用|启用后，将保留输出格式之外的像素。<br><br>禁用时，输出格式之外的像素将被剪掉。|

# 分步指南

[使用“重新格式化”节点](https://learn.foundry.com/nuke/14.0/content/comp_environment/reformatting_elements/using_reformat.html)

# 视频教程

[![闭](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)使用变换 - 升级到Nuke教程4](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/reformat.html?cshid=Reformat#)

  

![](https://learn.foundry.com/nuke/14.0/content/resources/images/arrow_circle.png)

找不到您要查找的内容？使用右侧的反馈小部件请求更多信息。  
您必须接受来自 **learn.foundry.com** 的 Cookie 并禁用任何广告拦截器才能提供反馈。