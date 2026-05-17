---
type: concept
title: Premult
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "80f4824d2118"
---


[Premult](https://learn.foundry.com/nuke/14.0/content/reference_guide/merge_nodes/premult.html?cshid=Premult)
### Parameters
# 前言

默认情况下，Premult 将输入的 rgb 通道乘以其 alpha（换句话说，预乘输入图像）。在以下情况下，您可能需要此节点：

• 合并未预增的图像。由于Nuke中的合并节点需要预乘图像，因此如果您的输入图像未预乘，则应在任何合并操作之前使用此节点。这样可以避免不必要的伪影，例如蒙版对象周围的边纹。

• 色彩校正预倍增图像。对预乘图像进行颜色校正时，应首先将 Unpremult 节点连接到图像，以将图像转换为未预乘图像。然后，执行颜色校正。最后，添加一个 Premult 节点，以将图像返回到其原始预乘状态以进行合并操作。

通常，大多数 3D 渲染图像都是预乘的。根据经验，如果背景是黑色的，甚至只是非常暗，图像可能会被预倍增。

另请参阅[Unpremult](https://learn.foundry.com/nuke/14.0/content/reference_guide/merge_nodes/unpremult.html)。

# 输入和控制

|连接类型|连接名称|功能|
|---|---|---|
|输入|无名|要预乘的未预乘图像序列。|

|控件 （UI）|旋钮（脚本）|默认值|功能|
|---|---|---|---|
|“预告”选项卡|   |   |   |
|乘|渠道|RGB|要乘法的通道（通常为 rgb）。<br><br>您可以使用右侧的复选框来选择各个频道。|
|由|不适用|启用|启用右侧的关联通道。禁用此复选框与将通道设置为无相同。|
|阿尔法|RGBA.alpha|将上述通道乘以此通道（通常为 alpha）。|
|转化|转化|禁用|反转 alpha 通道的使用。|


找不到您要查找的内容？使用右侧的反馈小部件请求更多信息。  
您必须接受来自 **learn.foundry.com** 的 Cookie 并禁用任何广告拦截器才能提供反馈。
