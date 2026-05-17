---
type: concept
title: Difference
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "706ce3a38468"
---


[Difference](https://learn.foundry.com/nuke/14.0/content/reference_guide/keyer_nodes/difference.html?cshid=Difference)
### Parameters

# 差异

此节点以遮罩形式生成两个图像之间的差异。它需要两个输入：

• 输入 B 包含带有背景的主题，并且

• 输入 A 包含没有主体的背景（干净的板）。

例如，您可以使用此节点为在静态背景前拍摄的移动主体生成粗糙的遮罩。但是，由于照明差异、颗粒以及相机或背景的微小移动，您可能需要使用其他节点来优化结果。

# 输入和控制

|连接类型|连接名称|功能|
|---|---|---|
|输入|一个|没有主体的背景（干净的板）。|
|B|有背景的主题。|

|控件 （UI）|旋钮（脚本）|默认值|功能|
|---|---|---|---|
|“差异”选项卡|   |   |   |
|抵消|抵消|0|从输出的每个像素中减去此值。|
|获得|获得|1|任何白色像素都设置为此颜色。|
|输出|输出|启用|启用右侧的关联输出通道。禁用此复选框与将通道设置为无相同。|
|RGBA.alpha|将生成的图像渲染到此输出通道中。|



找不到您要查找的内容？使用右侧的反馈小部件请求更多信息。  
您必须接受来自 **learn.foundry.com** 的 Cookie 并禁用任何广告拦截器才能提供反馈。