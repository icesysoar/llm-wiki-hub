---
type: concept
title: Extract Transform
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "c2f6a0fa4e29"
---




# Object nodes
https://www.sidefx.com/docs/houdini/nodes/obj/extractgeo.html
### Extract Transform^Object
#### ![](https://www.sidefx.com/docs/houdini/icons/OBJ/extractgeo.svg)提取转换
计算两个几何体之间的最佳拟合变换。
### Parameters
此 SOP 计算最能使参考几何的点与目标几何图形对齐的变换（平移、旋转和可选缩放）。如果启用了**“使用段属性”**，则将为几何中的每个段（而不是整个几何图形）计算转换。此外，如果某个片段包含单个打包的基元，则 SOP 将比较输入之间的基元转换，以允许从动画打包的基元中提取转换，而无需解压缩。
此 SOP 的输出几何图形为参考几何中的每个部分包含一个点，其[点属性](https://www.sidefx.com/docs/houdini/copy/instanceattrs.html)用于描述变换。这些点可以与[变换件 SOP](https://www.sidefx.com/docs/houdini/nodes/sop/xformpieces.html "Transforms input geometry according to transformation attributes on template geometry.")以将变换应用于几何图形。
此提取可用于从表示刚性运动的烘焙几何文件中设置刚体碰撞体（动画刚性变换是理想的）。
## 参数
使用片段属性
计算与 **Piece 属性**的每个唯一值关联的点的转换。
件属性
字符串或整数属性的名称。
属性类
指定**片属性**是基元属性还是点属性。
提取方法
指定如何计算参照几何和目标几何之间的最佳拟合变换。
平移和旋转
查找最能使点与目标几何图形对齐的刚性变换。
平移、旋转和统一比例
除了平移和旋转之外，还允许对点进行统一缩放。
平移、旋转和非均匀刻度
除了平移和旋转之外，还允许对点进行非均匀缩放。
输出属性
指定用于记录变换的点属性。
标准实例属性
将转换分解为[标准实例属性](https://www.sidefx.com/docs/houdini/copy/instanceattrs.html) 、 和 。如果**提取方法**允许缩放，并且分别用于记录均匀和非均匀缩放。这些属性可以与许多其他节点一起使用，例如`P``pivot``orient``pscale``scale`[变换件](https://www.sidefx.com/docs/houdini/nodes/sop/xformpieces.html "Transforms input geometry according to transformation attributes on template geometry.").
转换矩阵 （3×3） 和翻译
将转换拆分为 3×3 矩阵（存储在 point 属性中）和转换（存储在 中）。`transform``P`
变换矩阵 （4×4）
将完整的 4×4 矩阵输出到 point 属性。`transform`
计算失真
对于每个片段，记录一个属性，其中包含参考几何中变换点与目标几何点之间差值的度量。值为 0 表示提取的转换是完全拟合的。
失真属性
指定启用**计算失真**时创建的点属性的名称。
## 输入
参考几何图形
要变换的其余几何图形。
目标几何图形
要从参照几何计算变换的几何图形。
## 例子
负荷 发射
[ExtractAnimatedTransform](https://www.sidefx.com/docs/houdini/examples/nodes/sop/extracttransform/ExtractAnimatedTransform.html)[“提取变换”](https://www.sidefx.com/docs/houdini/nodes/sop/extracttransform.html)几何节点的示例
此示例演示如何使用表示刚性运动的变形几何图形的动画变换创建压缩基元。结果是刚体仿真中对撞机的理想选择。
另请参见
[![](https://www.sidefx.com/docs/houdini/icons/SOP/xformpieces.svg) Transform Pieces](https://www.sidefx.com/docs/houdini/nodes/sop/xformpieces.html)
[![](https://www.sidefx.com/docs/houdini/icons/OBJ/extractgeo.svg) Extract Transform](https://www.sidefx.com/docs/houdini/nodes/obj/extractgeo.html)
[![](https://www.sidefx.com/docs/houdini/icons/DOP/rbdpackedobject.svg) RBD Packed Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdpackedobject.html)
