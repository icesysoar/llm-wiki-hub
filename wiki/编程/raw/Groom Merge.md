---
type: concept
title: Groom Merge
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "fb0617cca478"
---
将来自多个对象的数据合并为一个对象。
### Parameters
此节点允许您使用多个单独的引导毛发设置毛发，然后将其合并到单个流中以进行变形、模拟和渲染。

修饰对象
要合并的修饰对象的列表。
整理文件
从此文件加载整理数据。
隔离修饰对象
当此处列出任何对象时，将仅合并这些对象。
这可以用来在毛发的一小部分上工作。
提示
隔离毛发部分的快速方法是[隔离毛发部件](https://www.sidefx.com/docs/houdini/shelf/groom_isolateparts.html "Hide and disable unselected parts of a groom for faster feedback.")搁板工具。它使用此参数，但除此之外，它还在后续的头发生成对象上设置显示标志。
其他皮肤标准操作程序
除了合并的修饰对象之外，还要合并这些外观几何图形中的属性。

创建组
为每个合并的 groom 对象的参考线创建一个组。groom 对象的名称用作组名称。
创建名称属性
创建基元名称属性，并将其设置为每个指南的源修饰对象。
名称属性
name 属性的名称。
创建路径属性
创建基元属性并将其设置为每个参考线的源修饰对象路径。
路径属性
路径属性的名称。
重置基元 ID
将基元属性设置为每个基元的新编号。`id`
这修复了合并多个修饰符时重叠的 ID，这些修饰符的 ID 都以 开头。`0`
点属性
要保留的参考点属性列表。
顶点属性
要保留的参考线顶点属性列表。
基元属性
要保留的参考线基元属性的列表。
详细信息属性

点属性
要保留的皮肤属性列表。
存在于多个外观几何图形上的属性将使用 max 属性进行组合。这（仅）适用于掩码属性。
另请参见
!Guide Deform#Guide Deform Object
!Notes/Houdini/Houdini帮助/Guide Groom#Guide Groom Object
!Guide Simulate#Guide Simulate Object
!Hair Generate#Hair Generate Object