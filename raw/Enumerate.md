---
type: concept
title: Enumerate
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "651ec214d0fa"
---
在指定的一些点或面上生成一个属性，属性值是从0开始的索引号，0，1，2...
### Parameters
![](C:\Users\Administrator\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\9cc8b6e38c364916ad9ed2ec069cc41e\cd340fc53d684d11bdd9152476ed840d.jpg)
Enumerate geometry node
![](C:\Users\Administrator\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\7e6f77dc5037484f99b238bb8f45c8a9\ddf68c67cd094c3892005a1fa86b8e8e.jpg)
![](C:\Users\Administrator\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\0b472e0ac2f64a909e89a56a03215d97\6769dfb581c446d28270466e4d9887f2.jpg)
Sets an attribute on selected points or primitives to sequential numbers.
在指定的一些点或面上生成一个属性，属性值是从0开始的索引号，0，1，2...
This node sets an attribute on each point or primitive in the selected Group sequentially (for example, it would set the attribute on the first point in the group to 0, the second point in the group to 1, and so on). 
该节点在每个点或面设置一个属性，通过Group指定一个点集，组内的点的该属性值从0开始，依此类推
This differs from the built-in point/primitive number because this node only sets the attribute for points/primitives in the selected group.
这一点与点或面编号不同，因为该节点只为选择的组内的点或面进行编索引号，没在组内的点或面该属性值为-1
PARAMETERSr
Group
The group to set the attribute on.
要设置属性的组
Group Type
Whether the group contains primitives or points.
包含组或点的组
Attribute
The name of the attribute in which to store the index.
存储索引编号的属性名字
See also
 [AttribPromote](https://www.sidefx.com/docs/houdini/nodes/sop/attribpromote.html)
 [Measure](https://www.sidefx.com/docs/houdini/nodes/sop/measure.html)
![](C:\Users\Administrator\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\0a692b2b706348729a5c61833bcee4a9\ttribpromote.png)
![](C:\Users\Administrator\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\8750f268a2044984b5cdce0ec35cb4dd\measure.png)
![](C:\Users\Administrator\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\72ce5dbfebe944dc9e8a92cd5e2efa61\d792fe36d9aa446bb42895195fa220a3.jpg)
![](C:\Users\Administrator\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\c096a33c86de4acd82f0abaa6bce2f3d\caa924b3707546f2a62e0150a7824bf8.jpg)
![Enumerate.hip](C:/Users/Administrator/AppData/Local/YNote/data/qq91E84D8FFDDA23C192C8BDC51BF7FB03/a91a298c43504511abf18ff87bc00d2d/attachment.png "Enumerate.hip")