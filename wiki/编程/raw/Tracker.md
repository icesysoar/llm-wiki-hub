---
type: concept
title: Tracker
tags: []
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "45a53de071bd"
---


[Tracker](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4)
### Parameters
# 跟踪器

- [跟踪器](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#Tracker)

- [输入和控制](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#InputsandControls)
- [分步指南](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#StepbyStepGuides)
- [视频教程](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#VideoTutorials)

这是一个 2D 跟踪器，允许您从图像的位置、旋转和大小中提取动画数据。使用表达式，可以直接应用数据来转换和匹配移动另一个元素。或者，您可以反转数据的值并将其应用于原始元素 - 再次通过表达式 - 以稳定图像。

以下是跟踪图像的一般过程：

1. 将跟踪器节点连接到要跟踪的图像。
    
2. 对简单轨迹使用自动追踪，或在影像中关键帧处的要素上放置追踪锚点。
    
3. 计算跟踪数据。
    
4. 选择要执行的跟踪操作：**稳定**、**匹配移动**等。
    

有关跟踪方法和故障排除提示的详细信息，请参阅[视频教程](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#Video)部分。

# 输入和控制

|连接类型|连接名称|功能|
|---|---|---|
|输入|无名|要跟踪的序列。|

|控件 （UI）|旋钮（脚本）|默认值|功能|
|---|---|---|---|
|“跟踪器”选项卡|   |   |   |
|轨道|   |   |   |
|e|不适用|启用|启用后，查看器中的关联轨迹锚点将用于追踪输入中的要素。|
|名字|不适用|分会场 1|设置曲目名称。|
|track_x|不适用|取决于源输入|调整关联轨迹锚点中心的 x 坐标。|
|track_y|不适用|取决于源输入|调整关联轨迹锚点中心的 y 坐标。|
|offset_x|不适用|0|设置跟踪锚点与 x 轴和 y 轴上的要素位置之间的偏移量（以像素为单位）。<br><br>当您要追踪的要素被遮挡或不可用时，这尤其有用，使您能够追踪另一种模式以生成所需的追踪数据。|
|offset_y|不适用|0|
|T|不适用|启用|启用后，将在跟踪期间计算翻译。|
|R|不适用|禁用|启用后，将在跟踪期间计算旋转。<br><br>**注意：** 跟踪旋转至少需要两个轨道。|
|S|不适用|禁用|启用后，将在跟踪期间计算比例。<br><br>**注意：** 跟踪比例至少需要两个轨道。|
|错误|不适用|0|显示总体磁道错误评级。|
|添加曲目|add_track|不适用|单击此项可将新轨道和定位点添加到查看器。|
|删除曲目|del_tracks|不适用|单击此项可删除所有选定的曲目。|
|全选|select_all|不适用|单击以选择“曲目”列表中的所有曲目。|
|平均曲目|average_tracks|不适用|单击此项可将所有选定轨迹平均为一个新轨迹。这对于稳定跟踪特别有用。|
|导出角销2D|   |   |   |
|角销选项|角落引脚选项|角钉2D（使用当前帧）|设置单击“**创建**”时要输出的节点。**烘焙**选项不使用跟踪器和导出节点之间的表达式链接：<br><br>• CornerPin2D（使用当前帧） - 创建一个表达式链接的 CornerPin2D 节点，该节点使用当前帧作为参考，根据相对变换扭曲图像。<br><br>• CornerPin2D（使用变换引用帧） - 创建一个表达式链接的 CornerPin2D 节点，该节点使用“变换”选项卡中指定的帧作为参考，根据相对**变换**扭曲图像。<br><br>• 变换**（稳定）** - 创建一个表达式链接的变换节点，其中包含控制预设以稳定剪辑。<br><br>• 变换（匹配-移动） - 创建一个表达式链接的变换节点，其中包含控件预设以**匹配移动**剪辑。|
|创造|创建角钉|不适用|单击此项可创建“**导出**”下拉列表中指定的“角钉2D”或“变换”节点。<br><br>**注意：** 必须在“轨迹”列表中选择 4 个轨道才能创建 CornerPin2D 节点。|
|“设置”选项卡|   |   |   |
|常规|   |   |   |
|跟踪频道|渠道|RGB|跟踪仅在这些渠道中进行。<br><br>如果将其设置为“全部”或“无”以外的其他值，则可以使用右侧的复选框来选择各个频道。|
|预跟踪滤波器|pretrack_filter|中位数|设置在比较映像图块之前应用的过滤器：<br><br>• 无 - 未应用过滤器。<br><br>• 调整对比度 - 默认滤镜会拉伸图像对比度以更好地适应跟踪算法。这是建议的设置，在大多数情况下不需要更改。<br><br>• 中位数 - 尝试消除图像噪点。|
|根据亮度变化进行调整|adjust_for_luminance_changes|禁用|启用后，跟踪器会执行一些额外的预过滤以补偿亮度变化。<br><br>此选项会减慢跟踪过程并降低跟踪的准确性，因此仅当亮度存在已知变化时才启用此控件。<br><br>**注意：** 启用亮度变化调整偶尔可以在亮度没有差异的镜头上产生更好的轨迹，特别是在亚像素精度至关重要的抖动镜头中。|
|最大迭代次数|max_iter|100|设置追踪算法停止搜索要素之前的最大迭代次数。<br><br>**注意：** 此设置通常不需要调整。|
|ε / 分辨率|伊普西隆|0.01|设置假定 Tracker 已找到要素的错误级别 - 不执行进一步搜索以查找更好的匹配项。较高的值可能会导致跟踪速度更快但精度较低。<br><br>**注意：** 此设置通常不需要调整。|
|max_error|max_error|0.2|设置追踪器停止搜索要素的错误级别。|
|钳制超白、零下素材|clamp_footage|启用|启用后，跟踪的修补程序将固定为 0-1 之间的值。<br><br>**注意：** 如果要使用素材中可用的全动态范围进行跟踪，请禁用此控件并相应地调整最大误差值。例如，像素强度为 40 的图像可能需要最大误差值 40。|
|在轨道路径上显示错误|show_error_on_track_links|禁用|启用后，轨道上的关键帧将根据其相对误差进行着色：<br><br>• 绿色 - 与抓取的图案非常匹配。<br><br>• 琥珀色 - 与抓取图案的合理匹配。<br><br>• 红色 - 与抓取模式不匹配。<br><br>高轨道错误值不一定是错误的关键帧。相反，它们表明自上次模式抓取以来，模式已经发生了很大变化。|
|隐藏进度条|hide_progress_bar|禁用|启用后，跟踪期间不会显示跟踪进度对话框。|
|对齐标记|snap_to_markers|禁用|启用后，添加轨迹会在查看器中将参考线放置在合适的标记图案（如点或斑点）上。将跟踪锚点移动到参考线，然后释放鼠标以将定位点捕捉到参考线的位置。|
|显示缩放窗口|zoom_window_behavior|总是|设置缩放窗口在查看器中可见的时间：<br><br>• 始终 - 缩放窗口始终可见。<br><br>• 航迹更改 - 仅在航迹更改时显示缩放窗口。<br><br>• 跟踪时 - 仅在跟踪期间显示缩放窗口。<br><br>• 跟踪或跟踪更改时 - 仅在跟踪期间或跟踪更改时显示缩放窗口。<br><br>• 从不 - 从不显示缩放窗口。|
|缩放窗口大小/放大倍率|zoom_window_size|200像素|设置缩放窗口的大小。|
|zoom_magnification_size|x1|设置缩放窗口中的放大倍率。|
|缩放窗口筛选器|zoom_window_filter_behaviour|播放时|将筛选应用于缩放窗口时的设置：<br><br>• 始终<br><br>• 播放时<br><br>• 从不<br><br>**注意：** 应用的滤镜与在**“变换**”选项卡上选择的滤镜相同，并且可以生成视觉上更稳定的轨道。然而，它会使轨道定位更加困难。|
|自动跟踪|   |   |   |
|预测轨迹|predict_track|禁用|启用后，使用当前跟踪器动画路径确定下一帧的查找位置。<br><br>**注意：** 如果“追踪器”在下一帧中找不到该要素，请在继续之前单击检视器上方的清除fwd 按钮，否则将重复相同的错误。|
|经纱类型|经线|翻译|选择对图案尝试的变换以使其与图像匹配。平移速度最快，但如果图案在轨迹过程中旋转、缩放或剪切，则可能会丢失航迹：<br><br>• 翻译 - 只期望模式**翻译**。<br><br>• **平移/**旋转 - 预期模式平移和旋转。<br><br>• **平移/**缩放 - 期望模式转换和缩放。<br><br>• **平**移/旋转/缩放 - 预期模式平移、旋转和缩放。<br><br>• 仿射 - 期望直线与其上点之间的距离保持相等。<br><br>**注意：** 此控件与如何将图像转换为输出无关，而是与模式匹配算法用于查找最佳模式匹配的转换无关。|
|模式抓取行为|grab_behavior|如果出现上述错误|设置跟踪器尝试抓取新模式的时间：<br><br>• 在第一帧上 - 仅在**第一帧上**抓取图案。<br><br>• 每一帧 - 在**每一帧**上捕捉一个新图案。<br><br>• 每 N 帧 - 使用“每 N 帧”控件指定帧间隔。<br><br>• 如果出现上述错误 - 使用 When Error > 控件指定抓取行为。<br><br>• 如果出现以下错误 - 使用 When Error < 控件指定抓取行为。<br><br>• 自定义 - 使用“每 N 帧”和“错误时”<>控件指定抓取行为。|
|每 n 帧|grab_interval|0|当模式抓取行为设置为每 n 帧或自定义更新一次时，设置 Tracker 自动重新抓取图案的时间间隔。|
|当错误>|grab_error_above|0.05|当模式抓取行为设置为更新（如果高于容差或自定义）时，设置错误级别，高于该级别，跟踪器会自动重新抓取模式。|
|当错误<|grab_error_below|0|当模式抓取行为设置为在低于容差或自定义时更新时，设置错误级别，低于该级别，跟踪器会自动重新抓取模式。|
|当跟踪停止时|auto_regrab_pattern|禁用|启用后，每次停止跟踪时，跟踪器都会在当前位置重新抓取模式。|
|移动智能设备时|regrab_when_offset|启用|启用后，智能追踪器会在手动调整轨道时重新抓取模式。|
|关键帧跟踪|   |   |   |
|移动/创建关键帧时重新追踪|retrack_on_move|启用|启用后，在手动调整轨迹或创建新关键帧时重新追踪图案。|
|移动轨道时创建新密钥|create_key_on_move|启用|启用后，在手动调整轨迹时创建新关键帧。|
|自动跟踪删除关键帧|自动tracks_delete_keyframes|启用|启用后，自动跟踪会删除手动关键帧。<br><br>禁用后，自动追踪会调整手动关键帧的位置。|
|关键帧显示|keyframe_display|滚动，仅单行|设定关键帧快照在查看器中的显示方式：<br><br>• all - 显示可用查看器空间中的所有关键帧快照。<br><br>• 最近，仅单行 - 仅在一行上显示离播放头最近的关键帧快照以及周围的整个快照。<br><br>• 仅滚动，单行 - 仅滚动显示所有关键帧快照。<br><br>• 无 - 不显示任何关键帧快照。|
|关键帧大小|keyframe_size|100像素|在查看器中设置关键帧快照的大小。|
|on_screen键轨限制|max_number_of_keyframe_tracks_to_display|3|设置可在查看器中显示的具有关键帧的轨迹的最大数量。<br><br>将此控件设置为 0 可始终显示带有关键帧的选定轨迹。|
|“转换”选项卡|   |   |   |
|变换|变换|没有|设置要应用的转换类型。<br><br>**注意：** 计算轨迹时，转换控件必须设置为 none。<br><br>• 无 - 不对输入图像应用转换。<br><br>• 稳定 - 转换图像，使跟踪点不会移动。<br><br>• 稳定 1pt - 类似于稳定，但设计用于单轨。<br><br>• 匹配移动 - 转换另一个图像，使其移动以匹配跟踪的点。<br><br>• 匹配移动 1pt - 类似于匹配移动，但设计用于单个轨道。<br><br>• 消除抖动 - 转换图像，使跟踪点平滑移动，并删除高频。<br><br>• 添加抖动 - 通过轨道的高频分量转换输入图像以增加抖动或将其添加到另一个图像中。|
|参考系|reference_frame|1|当变换设置为稳定或匹配移动时，将输入序列中的帧设置为参考或标识帧。|
|设置为当前帧|不适用|不适用|单击此项可将当前帧设置为参照框架或标识帧。|
|抖动周期|jitter_period|10|当变换设置为添加/删除抖动时，将帧数设置为平均在一起以获得稳定的位置。|
|光滑|平滑T|0|通过将这么多帧平均在一起来平滑翻译。|
|平滑R|0|通过将这么多帧平均在一起来平滑旋转。|
|抚平|0|通过将这许多帧平均在一起来平滑比例。|
|实时链接转换|livelink_transform|禁用|启用后，对轨道的更改会立即更新转换。如果轨迹位置由表达式控制，则动态更新可能很有用。|
|翻译 XY|翻译|0, 0|显示应用于当前轨道的“变换”构件的平移。跟踪完成后，您可以拖放转换信息以链接其他节点，例如稳定节点。|
|旋转|旋转|0|显示应用于当前轨道的“变换”构件的旋转。跟踪完成后，您可以拖放旋转信息以链接其他节点，例如稳定节点。|
|规模|规模|1|显示应用于当前轨道的“变换”微件的比例。跟踪完成后，您可以拖放缩放信息以链接其他节点，例如“稳定”节点。|
|歪斜 X|偏斜X|0|在当前轨道的 x 轴上显示应用于“变换”构件的倾斜。跟踪完成后，您可以拖放倾斜信息以链接其他节点，例如稳定节点。|
|偏斜 Y|歪斜|0|显示应用于当前轨迹的 y 轴上的“变换”构件的倾斜。跟踪完成后，您可以拖放倾斜信息以链接其他节点，例如稳定节点。|
|倾斜顺序|skew_order||设置应用倾斜变换的顺序：<br><br>• XY<br><br>• YX|
|中心XY|中心|取决于输入|设置旋转和缩放的中心。您还可以在查看器中cmd +拖动“变换”小部件。|
|滤波器|滤波器|四方|选择将像素从其原始位置重新映射到新位置时要使用的过滤算法。这使您可以避免图像质量问题，尤其是在帧的高对比度区域中（如果未过滤像素并保留其原始值，则可能会出现高度锯齿或锯齿状的边缘）。<br><br>• 脉冲 - 重新映射的像素带有其原始值。<br><br>• 立方体 - 重新映射的像素会得到一些平滑处理。<br><br>• 关键帧 - 重新映射的像素会得到一些平滑处理，以及轻微的锐化（如曲线的负 -y 部分所示）。<br><br>• Simon - 重新映射的像素会得到一些平滑处理，以及中等锐化（如曲线的负 -y 部分所示）。<br><br>• Rifman - 重新映射的像素会得到一些平滑处理，以及显著的锐化（如曲线的负 -y 部分所示）。<br><br>• 米切尔 - 重新映射的像素会得到一些平滑处理，加上模糊以隐藏像素化。<br><br>• Parzen - 重新映射的像素在所有滤镜中得到最大的平滑度。<br><br>• 陷波 - 重新映射的像素接收平坦平滑（这往往会隐藏摩尔纹图案）。<br><br>• Lanczos4、**Lanczos6** 和 **Sinc4** - 重新映射的像素会进行锐化，这对于缩小非常有用。**Lanczos4**提供最少的锐化，**Sinc4**提供最多的锐化。|
|钳|钳|禁用|使用采用锐化的滤镜（如 **Rifman** 和 **Lanczos**）时，您可能会看到晕轮效果。如有必要，请检查夹具以纠正此问题。|
|外面黑|black_outside|启用|这将呈现为图像边界外的黑色像素，从而更容易将元素分层到另一个元素上。如果取消选中此控件，则外部区域将填充图像序列的最外层像素。<br><br>在大多数情况下，您应该检查外面的黑色。但是，您可能希望关闭此功能以进行相机抖动，或者如果要对输出进行纹理映射或与相似形状相交。<br><br>**注意：** 如果不存在 Alpha，则在外部启用黑色还会添加覆盖输入图像区域的实心 Alpha。|
|运动模糊|运动模糊|0|设置运动模糊样本的数量。对于大多数序列，值 1 应该会产生合理的结果。<br><br>增加该值可生成更多样品以获得更高的质量，或减小该值以缩短处理时间。值越高，结果越平滑。|
|快门|快门|0.5|输入运动模糊时快门保持打开状态的帧数。例如，值 0.5 对应于半帧。增加值会产生更多的模糊，而减少值则更少。|
|快门偏移|快门偏移|开始|控制快门相对于当前帧值的行为：<br><br>• 居中 - 使快门围绕当前帧居中。例如，如果将快门值设置为 1，而当前帧为 30，则快门从第 29，5 帧到 30，5 保持打开状态。<br><br>• 开始 - 在当前帧处打开快门。例如，如果将快门值设置为 1，而当前帧为 30，则快门从第 30 帧到 31 帧保持打开状态。<br><br>• 结束 - 在当前帧处关闭快门。例如，如果将快门值设置为 1，而当前帧数为 30，则快门从第 29 帧到 30 帧时将保持打开状态。<br><br>• 自定义 - 在您指定的时间打开快门。在下拉菜单旁边的字段中，输入要添加到当前帧的值（以帧为单位）。要在当前帧之前打开快门，请输入负值。例如，值 - 0.5 将在当前帧之前半帧打开快门。|
|快门自定义偏移|0|如果快门偏移控制设置为自定义，则此字段用于通过将快门添加到当前帧来设置快门打开的时间。值以帧为单位，因此 -0.5 将在当前帧之前半帧打开快门。|

# 分步指南

[跟踪和稳定](https://learn.foundry.com/nuke/14.0/content/comp_environment/tracking_stabilizing/tracking_stabilizing.html)

[教程 2：2D 点跟踪](https://learn.foundry.com/nuke/14.0/content/tutorials/written_tutorials/tutorial2/tracking_stabilizing.html)

# 视频教程

[![闭](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)运动跟踪概述 - 升级到Nuke教程10](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#)

[![闭](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)Nuke 7.0 - 2D追踪器](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#)

[![闭](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)Nuke 7.0 - 2D追踪器：入门](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#)

[![闭](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)Nuke 7.0 - 2D追踪器：修复问题](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#)

[![闭](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)Nuke 7.0 - 2D追踪器：关键帧追踪](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#)

[![闭](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)Nuke 7.0 - 2D跟踪器：遮挡周围的关键帧跟踪](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#)

[![闭](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)Nuke 7.0 - 2D追踪器：组合追踪器](https://learn.foundry.com/nuke/14.0/content/reference_guide/transform_nodes/tracker.html?cshid=Tracker4#)

![“相关主题”链接图标](https://learn.foundry.com/nuke/14.0/Skins/Default/Stylesheets/Images/transparent.gif)相关主题

  

![|50](https://learn.foundry.com/nuke/14.0/content/resources/images/arrow_circle.png)

找不到您要查找的内容？使用右侧的反馈小部件请求更多信息。  
您必须接受来自 **learn.foundry.com** 的 Cookie 并禁用任何广告拦截器才能提供反馈。
