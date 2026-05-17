---
type: concept
title: Cryptomatte
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "c1f7355a3747"
---

# Cryptomatte

Cryptomatte 是由 Foundry 创建的插件，基于 Jonah Friedman 和 Andy Jones 在 Psyop 创建的 Cryptomatte 小玩意（gizmo）。Cryptomatte 的本机版本向后兼容 gizmo 的 1.2.8 版。

您可以从键控器节点下的节点工具栏访问 Cryptomatte 插件，也可以通过在节点图中按 Tab 键并键入 "Cryptomatte"。

Cryptomatte 使用来自许多渲染器（包括 V-Ray 和 RenderMan）的组织信息，在 Maya 等应用程序中创建 ID 遮罩。然后，Nuke 可以使用 Cryptomatte 插件来隔离序列中的单个遮罩，并仅将效果应用于图像的那些区域。

| 原始图像 | 选定的遮罩以黄色显示 | 选定的遮罩用作调色蒙版 |
|---|---|---|
| ![](https://learn.foundry.com/nuke/14.0/content/resources/images/ug_images/cryptomatte/cryptomatte_original.png) | ![](https://learn.foundry.com/nuke/14.0/content/resources/images/ug_images/cryptomatte/cryptomatte_selected.png) | ![](https://learn.foundry.com/nuke/14.0/content/resources/images/ug_images/cryptomatte/cryptomatte_result.png) |

![](https://learn.foundry.com/nuke/14.0/content/resources/images/ug_images/cryptomatte/cryptomatte_node_graph.png)

示例节点图

**注意：** Nuke 的原生 Cryptomatte 插件是原始工具的新版本，具有重新排序的属性面板和垂直遮罩列表，使选择易于阅读。有三个控件（遮罩、预览模式和单选）存在于 gizmo 中，但在使用插件时不可用。有关 gizmo 属性的完整列表，请参阅 [Psyop 文档](https://github.com/Psyop/Cryptomatte/blob/master/docs/nuke.md)。

## 输入和控制

| 连接类型 | 连接名称 | 功能 |
|---|---|---|
| 输入 | 无名 | 包含对象或材质的图像序列通过。 |

| 控件 (UI) | 旋钮 (脚本) | 默认值 | 功能 |
|---|---|---|---|
| **隐光标签** | | | |
| 图层选择 | 加密层选择 | 取决于文件 | 确定要使用的隐罩层。如果输入仅包含一个隐罩层，则默认选择该层，且下拉列表中没有其他选项。如果输入包含多个 Cryptomatte 图层，则默认选择一个，但可使用此下拉列表更改图层选择。 |
| 清单源 | 清单来源 | 元数据 | 确定如何访问清单。<br>- **元数据**：如果清单嵌入在输入图像文件的元数据中，请选择此选项。<br>- **挎斗 (sidecar)**：如果清单是单独的 JSON 文件，请选择此选项。选择后，使用 sidecar 字段定义文件位置。<br>此控件可用于重写清单源。<br>**注意：** 有关清单的详细信息，请参阅[加密遮罩元数据和清单](https://learn.foundry.com/nuke/14.0/content/comp_environment/cryptomatte/keying_with_cryptomatte.html#metadata)。 |
| 边车 | 边车文件路径 | 不适用 | 键入或使用浏览按钮导航到清单 JSON 文件。 |
| 预览 | 预览已启用 | 启用 | 控制是否在查看器中绘制遮罩边界。启用时，遮罩边界可见，可看到每个单独的遮罩。禁用时，显示原始输入。启用预览时仍可选择遮罩。<br>| 启用 | 禁用 |
|---|---|---|
| ![](https://learn.foundry.com/nuke/14.0/content/resources/images/ug_images/cryptomatte/cryptomatte_preview_enabled.png) | ![](https://learn.foundry.com/nuke/14.0/content/resources/images/ug_images/cryptomatte/cryptomatte_preview_disabled.png) |
| 这允许在可用遮罩和输入图像之间快速切换，以帮助确保做出正确选择。 |
| 选取器添加 | 选取器添加 | 不适用 | 将遮罩从 Cryptomatte 输入添加到遮罩选择中。使用 Nuke 的吸管颜色选择器。单击色板 ![](https://learn.foundry.com/nuke/14.0/content/resources/images/ug_images/cryptomatte/picker_add_remove.png)，然后按 Ctrl/Cmd + 单击遮罩将其添加到选区。所选遮罩在查看器中以黄色显示。可添加多个选择。添加后，遮罩名称将添加到遮罩列表中。 |
| 选取器删除 | 选取器删除 | 不适用 | 从遮罩选择中删除遮罩。使用 Nuke 的吸管颜色选择器。单击色板 ![](https://learn.foundry.com/nuke/14.0/content/resources/images/ug_images/cryptomatte/picker_add_remove.png)，然后按 Ctrl + 单击遮罩将其从选择中删除。删除后，遮罩名称也会从遮罩列表中删除。 |
| 遮罩列表 | 遮罩列表 | 不适用 | 当前选定的遮罩名称的列表。可以文本形式或使用“选取器添加”和“选取器删除”控件修改此列表。遮罩列表支持基本的通配符功能，星号 (*) 可用于在一行中选择多个遮罩。星号 (*) 可以附加到单词以表示任何数字或字符。<br>**注意：** 有关详细信息，请参阅[使用遮罩列表](https://learn.foundry.com/nuke/14.0/content/comp_environment/cryptomatte/keying_with_cryptomatte.html#mattelist)。 |
| 清除 | 清除遮罩列表 | 不适用 | 清除遮罩列表，取消选择所有遮罩。 |
| 遮罩输出 | 遮罩输出 | 已启用，rgba.alpha | 确定是否将提取的遮罩写出到通道，以及写入到哪个通道。启用后，遮罩写入从下拉列表中选择的通道。禁用时，遮罩不会写入通道，其结果与将通道设置为“无”相同。 |
| 无预乘 | 不预乘 | 禁用 | 启用后，遮罩输出未预乘输入 alpha。 |
| 删除频道 | 删除频道 | 禁用 | 启用后，除 rgba 和遮罩输出通道外的所有通道都将被删除。 |

## 分步指南

[使用隐遮罩进行抠像](https://learn.foundry.com/nuke/14.0/content/comp_environment/cryptomatte/keying_with_cryptomatte.html)