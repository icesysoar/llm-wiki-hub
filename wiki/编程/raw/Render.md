---
type: concept
title: Render
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "6dad9b6d359a"
---
将一个mantra输出驱动器直接渲染成一个复合网络。
### Parameters
此节点激活 [mantra render driver node](https://www.sidefx.com/docs/houdini/nodes/out/ifd.html "Renders the scene using Houdini’s standard mantra renderer and generates IFD files.")并使用渲染作为节点的输出图像/序列，允许您直接渲染到合成网络中以操作渲染的图像。
此节点当前仅适用于生成格式化文件的输出驱动程序。它不支持不生成映像的 OpenGL 输出驱动程序和输出驱动程序。它不支持复合输出驱动程序。使用`.pic` [Fetch node](https://www.sidefx.com/docs/houdini/nodes/cop2/fetch.html "Fetches a sequence of images from another COP, even in another network.") 以从其他复合网络获取图像。
注意
渲染 COP 只能按顺序处理。一次只能有一个人主动烹饪。
- 驱动程序
选择要渲染的输出驱动。
- 必要时自动渲染
当任何场景参数改变时，重新渲染图像。如果关闭，则保留最后一次渲染。
- 重做渲染
强制进行渲染更新。
- 从驱动程序中确定分辨率
使用输出驱动中的分辨率和像素长宽比。
- 从驱动中确定平面
使用输出驱动所指定的平面和数据格式。例如，如果输出的是jpg，就会使用8bit的颜色平面。如果输出的是tif16，则使用带有阿尔法的16位色彩平面。Mantra的Deep Raster页面上的所有变量也会被渲染。
参见
-    [![](https://www.sidefx.com/docs/houdini/icons/ROP/mantra.svg) Mantra](https://www.sidefx.com/docs/houdini/nodes/out/ifd.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/fetch.svg) Fetch](https://www.sidefx.com/docs/houdini/nodes/cop2/fetch.html)