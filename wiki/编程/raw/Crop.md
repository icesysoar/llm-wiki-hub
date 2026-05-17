---
type: concept
title: Crop
tags: []
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "b64f2d275fb8"
---


[Crop](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/crop.html?cshid=Crop)
### Parameters
# 作物

- [作物](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/crop.html?cshid=Crop#Crop)

- [输入和控制](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/crop.html?cshid=Crop#InputsandControls)
- [分步指南](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/crop.html?cshid=Crop#StepbyStepGuides)

“裁剪”节点允许您剪切图像区域中不需要的部分。您可以用黑色填充裁剪的部分或调整图像输出格式以匹配裁剪后的图像。

# 输入和控制

|连接类型|连接名称|功能|
|---|---|---|
|输入|无名|要裁剪的图像序列。|

|控件 （UI）|旋钮（脚本）|默认值|功能|
|---|---|---|---|
|“裁剪”选项卡|   |   |   |
|框 x， y， r， t<br><br>（或 x、y、w、h）|箱|不适用|要保留的输入图像区域。此框之外的任何内容都会被裁剪。<br><br>您可以调整以下内容：<br><br>• x - 原始图像左边缘与裁剪框左侧之间的距离（以像素为单位）。<br><br>• y - 原始图像的下边缘与裁剪框的下边缘之间的距离（以像素为单位）。<br><br>• r - 原始图像左边缘与裁剪框右侧之间的距离（以像素为单位）。<br><br>• t - 原始图像的下边缘与裁剪框的上边缘之间的距离（以像素为单位）。<br><br>• w - 裁剪框的宽度。这仅在您单击 wh 按钮时才可用。<br><br>• h - 裁剪框的高度。这仅在您单击 wh 按钮时才可用。<br><br>您还可以通过拖动裁剪框的边缘来调整裁剪框。|
|柔软|柔软|0|允许您对裁剪部分的边缘进行晕影。值越大，边缘周围的区域就越多，淡化为黑色。<br><br>值为 0 时不会产生渐晕。|
|格式 化|格式 化|禁用|启用后，图像输出格式将更改以匹配裁剪后的图像。<br><br>禁用时，将使用原始图像输出格式。|
|相交|相交|禁用|启用后，输出边界框是裁剪边界框和传入边界框的交集。<br><br>禁用后，输出边界框与裁剪边界框匹配，并且可以扩展到传入边界框之外。|
|外面黑|作物|启用|这将呈现为图像边界外的黑色像素，从而更容易将元素分层到另一个元素上。如果取消选中此控件，则外部区域将填充图像序列的最外层像素。<br><br>在大多数情况下，您应该检查外面的黑色。但是，您可能希望关闭此功能以进行相机抖动，或者如果要对输出进行纹理映射或与相似形状相交。<br><br>**注意：** 如果不存在 Alpha，则在外部启用黑色还会添加覆盖输入图像区域的实心 Alpha。|

# 分步指南

[裁剪元素](https://learn.foundry.com/nuke/14.0/content/comp_environment/reformatting_elements/cropping_elements.html)


找不到您要查找的内容？使用右侧的反馈小部件请求更多信息。  
您必须接受来自 **learn.foundry.com** 的 Cookie 并禁用任何广告拦截器才能提供反馈。