---
type: concept
title: LayerContactSheet
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "ec0c49137e10"
---


[LayerContactSheet](https://learn.foundry.com/nuke/14.0/content/reference_guide/merge_nodes/layercontactsheet.html?cshid=LayerContactSheet)
# LayerContactSheet
LayerContactSheet是 Nuke 中的通道预览一个节点，以便将多个图层或图像排列在一起，以便演示、记录或管理项目中的操作。以下是简洁的介绍和节点参数解释：

# 功能

- LayerContactSheet节点用于创建一个图像表格，将输入的图层按顺序排列，以便一次性查看它们。这对于快速查看、比较、记录和管理多个图层非常有用。

#  参数解释

#### Resolution 分辨率
通道预览的宽度和高度。
#### Rows/Columns 行数和列数
手动指定通道预览的行数和列数。
#### Gap 间距
设置图层之间的间距。
#### Row Order 垂直居中
控制图层在垂直方向上的居中排列。
#### Column Order 行和列的显示顺序
定义图层排列的方向。
#### Show Layer Names 显示图层名称
选择是否在通道预览上显示图层的名称。

# 如何使用

1. 将要排列在通道预览中的图层连接到LayerContactSheet节点的输入。
2. 在节点属性面板中，您可以调整以下参数：
    - **分辨率**：设置通道预览的大小（宽度和高度）。
    - **行数和列数**：指定行和列的数量，或启用自动计算。
    - **间距**：设置图层之间的间距。
    - **垂直居中**：选择是否让图层在垂直方向上居中排列。
    - **行和列的显示顺序**：定义图层排列的方式。
    - **显示图层名称**：选择是否显示图层的名称。

