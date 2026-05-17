---
type: concept
title: Attribute From Group
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "1491d6a13e50"
---
将一个体的信息复制到另一个几何体的点属性上，并可选择重新映射。
### Parameters
在不同类型的组之间进行转换。转换时 组，可以使用通配符转换多个 与指定模式匹配的组。欲了解更多信息 有关模式替换规则的信息，请参阅[属性字符串编辑](https://www.sidefx.com/docs/houdini/nodes/sop/attribstringedit.html "Edits string attribute values.").
## 输入
源几何图形
要在其上创建组的几何图形。
## 参数
促销次数
要应用的团体促销规则的数量。促销已应用。 按顺序排列，因此，如果组由较早的规则升级并匹配 后来的规则，它可能会被重新推广。
转换自
源组类型。
自
新创建的组类型。
组名称
要转换的组。
新名称
转换组的新名称。将此保留为空以保留原始组的名称。
保留原始组
不要删除原始组类型。
仅包括边界上的元素
此选项将从输出组中删除不在边界上的元素。 组首先转换为输出类型，然后仅转换为这些组边界上的元素 包括转换后的组。
包括未共享的边缘
选中后，仅由单个面参照的几何边将包含在 边界组。
包括共享属性边界点的所有基元
选中后，将包括属性边界上至少有一个点的所有基元 在结果中。否则，基元将需要与属性边界共享边 要包括在内。
连通性属性
此选项允许将所提供属性的边界视为 组边界。如果选定，则任何连接的区域边界都将重叠 输出组也将包含在生成的边界中。
默认情况下，连接属性设置为 UV，但是，可以使用任何 属性以指定连接性。 如果属性位于顶点或基元上，它将包括以下边： 具有不同边缘的属性。 如果属性位于点上，则将包括分隔点连接区域的边。
当指定多个属性时，每个属性将用于单独指定连通性， 边界将作为所有连接区域边界的并集。
仅包含完全包含在原始组中的元素
此选项仅允许具有所有点或边的基元 在要包含在 从点编组或边编组转换为基元组时生成的基元组。
从点编组或基元组转换为边时，同样的情况也适用 群。只有原始点编组中具有两个点的边才会添加到新组中。
从边组转换为顶点组时，这只会导致 包括每个边的开头。换句话说，每个顶点仅与 启用此选项时的传出边。
移除退化的桥梁
此选项将移除退化的桥单元。
输出为整数属性
启用且 **To** 类型为点、基元或顶点时，这将转换输出组 到值为 0（不在组中）和 1（在组中）的整数属性，然后删除该组。
参见
[![](https://www.sidefx.com/docs/houdini/icons/SOP/groupcombine.svg)集团联合收割机](https://www.sidefx.com/docs/houdini/nodes/sop/groupcombine.html)
[![](https://www.sidefx.com/docs/houdini/icons/SOP/groupdelete.svg)组删除](https://www.sidefx.com/docs/houdini/nodes/sop/groupdelete.html)
[![](https://www.sidefx.com/docs/houdini/icons/SOP/groupexpression.svg)组表达式](https://www.sidefx.com/docs/houdini/nodes/sop/groupexpression.html)
[![](https://www.sidefx.com/docs/houdini/icons/SOP/grouprename.svg)组重命名](https://www.sidefx.com/docs/houdini/nodes/sop/grouprename.html)
[![](https://www.sidefx.com/docs/houdini/icons/SOP/grouptransfer.svg)团体接送](https://www.sidefx.com/docs/houdini/nodes/sop/grouptransfer.html)
[![](https://www.sidefx.com/docs/houdini/icons/SOP/groupcopy.svg)组复制](https://www.sidefx.com/docs/houdini/nodes/sop/groupcopy.html)
 [![](https://www.sidefx.com/docs/houdini/icons/SOP/groupcreate.svg) 群](https://www.sidefx.com/docs/houdini/nodes/sop/groupcreate.html)