---
type: concept
title: Add
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "8b7e35a56f65"
---




# Geometry node
https://www.sidefx.com/docs/houdini/nodes/sop/add.html
### Add^Geometry
#### ![](https://www.sidefx.com/docs/houdini/icons/SOP/add.svg)点/点连线 
## 点
概述
最左边的三个输入字段表示 X、Y 和 Z 点的坐标。最后一个输入字段表示 点的样条权重。如果稍后使用该点 要创建样条曲线（NURBS 或贝塞尔）基元，权重 会影响基元的形状，并可能导致 原始成为理性。多边形和元球不是 受此重量的影响。
X、Y、Z 和 W 可以是常量（数字）或变量。
删除几何图形，但保留点
这将破坏所有多边形、NURB 和其他 基元，只保留点不变。
## 多边形：按模式
概述
通过指定点创建固定数量的多边形 每个多边形的图案 在此处输入连接列表以 创建面。
```
{from}-{to}[:{every}][,{of}]
eg1: 1 2 3 4
eg2: 1 3-15 16 8
eg3: 1-234 820-410 235-409
eg4: 0-15:2
eg5: 0-15:2,3
```
## 多边形：按组
概述
创建由组字段确定的任意数量的面，并且 通过分组/跳过规则。
群
要连接的点的子集。
加
（可选）连接点的子组。
N
用于子组连接的增量。
属性
如果指定了分组依据属性，则此属性将为 用于确定如何连接 群。具有相同属性值的点将是 连接在一起。连接顺序将遵循 组的点顺序。
删除未使用的点
仅保留连接的点。
## 粒子
概述
允许您从集合中创建粒子系统 的点数。请注意，这不会创建所有 您可能希望在粒子系统上使用的属性。是的 当您有希望收集的积分时很有用 标记为其他操作的粒子系统，例如 初始状态，或作为 DOP 中的源。
要将所有几何体转换为粒子，请打开**保留 点但删除基元**复选框在**点**选项卡上，然后 使用空白组字段启用此功能。
添加粒子系统
控制是否创建粒子系统基元。
粒子组
要添加到粒子系统的点。这些是添加的 按指定的顺序。如果此字段留空，则所有点均为 添加到粒子系统。
将未使用的点添加到粒子系统
如果不存在粒子基元，则将创建一个。
不属于任何基元的所有点都将附加到 第一个粒子基元。
## 当地人
N
几何图形中最后一个点的索引。
CEX， CEY， CEZ
输入的质心。
XMIN， XMAX
输入边界框的 X 范围。
YMIN， YMAX
输入边界框的 Y 范围。
ZMIN， ZMAX
输入边界框的 Z 范围。
SIZEX， SIZEY， SIZEZ
输入的边界框的大小。
## 例子
负荷 发射
[添加](https://www.sidefx.com/docs/houdini/examples/nodes/sop/add/AddItUp.html)[添加](https://www.sidefx.com/docs/houdini/nodes/sop/add.html)几何节点的示例
此网络演示了添加 SOP 在构建和操作几何图形方面的多种用途：
它用于在空间中创建点，然后可用于使用指定模式创建多边形。这些面可以是开放的，也可以是封闭的。此外，每个点都可以通过表达式或关键帧进行动画处理。
它用于创建点和从其他基元中获取点。这些点可用于面创建。
添加 SOP 可用于使用从另一个多边形对象中提取的点来创建面。组 SOP 允许创建将由添加 SOP 引用的点组。
添加 SOP 用于从一组动画 Null 对象创建多边形。对象合并 SOP 引用 SOP 中的零点，然后将其馈送到添加 SOP 中以生成多边形。反过来，拟合 SOP 用于从引用的零点创建插值样条。结果是一个动画样条曲线。
添加 SOP 用于在不创建任何基元的情况下生成点。此外，还可以通过添加 SOP 从其他对象中提取点。
最后，添加 SOP 还可用于按程序创建行和列。

输出其输入之和。
### Parameters
这个运算符输出它的输入之和。
第一个输入可以是一个整数、浮点数、向量、向量4、矩阵3或矩阵。后续输入的允许数据类型取决于第一个输入的数据类型。例如，如果第一个输入是一个浮点数，后续的输入可以是浮点数或整数。输出的数据类型总是与第一个输入的数据类型相同
#### INPUTS
输入数1...N
要加在一起的输入值。
下一个输入
下一个输入值应该连接在哪里。最多可以指定64个输入。
#### OUTPUTS
Combined Value
The sum of all the input values.
See also
 [![](https://www.sidefx.com/docs/houdini/icons/VOP/addconst.svg) Add Constant](https://www.sidefx.com/docs/houdini/nodes/vop/addconst.html)
 [![](https://www.sidefx.com/docs/houdini/icons/VOP/complement.svg) Complement](https://www.sidefx.com/docs/houdini/nodes/vop/complement.html)
 [![](https://www.sidefx.com/docs/houdini/icons/VOP/divide.svg) Divide](https://www.sidefx.com/docs/houdini/nodes/vop/divide.html)
 [![](https://www.sidefx.com/docs/houdini/icons/VOP/multiply.svg) Multiply](https://www.sidefx.com/docs/houdini/nodes/vop/multiply.html)
 [![](https://www.sidefx.com/docs/houdini/icons/VOP/subtract.svg) Subtract](https://www.sidefx.com/docs/houdini/nodes/vop/subtract.html)

将两张图片加在一起。
### Parameters
将两个图像加在一起。添加操作被定义为:
`C = C1 + C2`
Screen有时会被用来代替Add来添加颜色，因为它在白色处会饱和，而Add会产生高于白色的数值。
提示
图层操作允许多个输入被合成，而不是只有两个，每个都有自己的合成操作。复合COP是这个COP的更通用的版本，允许你选择任何合成操作，以及一个可选的不同的alpha操作。
#### Masking
这种操作可以被屏蔽，它将操作限制在图像的一个区域。遮罩可以被倒置、变亮或变暗。
遮罩输入在节点的一侧。连接器上的标签表示被用作遮罩的平面。
遮罩输入也可以被缩放以适应输出图像的分辨率，如果它们不同的话。如果这个节点在不断变化，而遮罩没有变化，那么把[Scale COP](https://www.sidefx.com/docs/houdini/nodes/cop2/scale.html "Changes the resolution of the image.")放下来为遮罩图像做大小调整会快一些。否则，每次这个节点做完都会发生缩放。
#### Composite
图像单位
为变换选择像素或UV单位。
平移、旋转、缩放、透视
对前景进行X,Y相对于背景的转换。
图像过滤器
指定变换时要使用的过滤器。
图像包覆
指定前景图像的包覆样式。
运动模糊
切换到运动模糊上，并指定当前帧周围的时间范围来模糊。
运动帧偏置
转移模糊的时间范围。
运动模糊片段
在指定的时间范围内一起模糊的样本数量。
运动模糊方法
速度
只使用当前帧和变换来计算过去和未来的位置。
变形
在所有的时间样本上对图像进行处理。
#### Merge
概述
这些参数指定了当输入序列之间存在差异时如何建立输出序列。
平面合并
如果输入的平面不一样，这指定了输出的平面应该是什么。
栅格深度
如果一个给定平面的光栅深度在输入之间不同，这指定了该平面的输出光栅深度。
帧范围
如果输入的帧范围不同，这决定了输出的范围应该是什么。
帧速率
如果输入的帧速率不同，这决定了输出的帧速率应该是什么。
帧匹配
如果输入的帧率不同，这决定了当烹饪时间不在一个帧的边界上时，应该选择哪个输入帧。
#### Mask
可以选择一个掩码，将操作者的效果限制在掩码所定义的区域。遮罩可以取自遮罩输入（侧面输入）或第一输入本身。
- 效果量
如果没有遮罩，这将使输出与输入以一个恒定的量混合（0=全部输入，1=全部输出）。
如果有掩码存在，这个量是掩码的倍数。
- 操作掩码
选择掩码平面，作为掩码输入的掩码。掩码可以从以下方面选择。
掩码可以是一个平面的分量或整个平面。如果提供一个矢量平面作为遮罩，它的分量会乘以图像的分量。
Scalar Mask ('A', 'C.r')
```
C.r = I.r * M
C.g = I.g * M
C.b = I.b * M
```
Vector Mask ('C')
```
C.r = I.r * M.r
C.g = I.g * M.g
C.b = I.b * M.b
```
第一次输入
用于对图像本身的alpha平面进行遮蔽操作。
遮罩输入
从侧面遮罩输入中选择遮罩。
关闭
关闭遮罩，不需要断开遮罩输入（对暂时禁用遮罩有用）。
- 调整蒙版大小以适应图像
如果遮罩图像与输出图像的分辨率不同，打开这个参数将把遮罩缩放到输出图像的分辨率。
如果这个节点在不断变化，而蒙版没有变化，那么把Scale COP放下来为蒙版图像做大小调整会快一些。否则，每次这个节点做饭时都会发生缩放。
- 反转蒙版
反转蒙版，使所有完全 "蒙版 "的部分变成非蒙版。这使你不必在有遮罩的节点之后插入一个反转COP。
#### LOCALS
L
序列长度
S
序列的开始
E
序列的结束
IL
输入序列长度
SR
序列帧率
NP
序列中的平面数
W,H
图像的宽度和高度
I
图像索引（起始帧为0）
IT
图像时间（开始帧时为0）
AI
当前平面阵列索引
PI
当前平面的索引
PC
当前平面内的通道数
CXRES
复合项目的X分辨率
CYRES
复合项目的Y分辨率
CPIXA
复合项目的像素长宽比
CDEPTH
综合项目的光栅深度
CBP
综合项目黑点
CWP
复合项目白点
- 另请参见:
Notes/Houdini/Subtract
Notes/Houdini/Multiply
Screen
Composite
Layer
