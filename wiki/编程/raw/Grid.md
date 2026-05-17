---
type: concept
title: Grid
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "2c9895998727"
---
创建平面几何图形。
## Parameters
![image.png](https://i0.hdslb.com/bfs/album/3baaf8a4028f6128810cf8b17e088f876d6f36b9.png)
### Primitive Type 类型
要创建的几何类型。 在点的情况下，没有创建几何形状。 相反，自由浮点在与表面相同的位置时产生。  
- Polygon 多边形
- Mesh 网格
- NURBS
- Bezier 
- Points 点
- Polygon Soup多边形汤
### Conectivity 连接线
仅适用于多边形和网格。
- Rows 行
创建水平线，可打开多边形。
- Columns 列
创建垂直线路，是开放的多边形。
- Rows and Columns 行列
两行和列。 所有多边形都是开放的。
- Triangles 三角形
用三角形构建网格。
- Quadrilaterals 四边形 
网格方向平面。
- Alternating Triangles 交替三角形
用交替的三角形构建网格。 每四个四边形四边形都分成两半，使两个回到背部三角形，分割线在方向上交替。
- Reverse Triangles 反向三角形
用反向三角形构建网格。 每四个四边形四边形分为两半，使两个背靠背三角形，分隔线都面向相同的方向。
### Orientation 定向
XY Plane
YZ Plane
ZX Plane
### Size 尺寸
网格宽度和高度。
### Center 偏移
网格中心的位置。
### Rotate 旋转
网格中心的旋转
### Rows 行
创建水平线，可打开多边形
### Columns  列
创建垂直线路，是开放的多边形。
### U Order
NURBS或Bezier表面的顺序在U方向上。
### V Order
NURBS或Bezier表面的顺序在V方向上。
### End-point interpolate in U
延伸表面以触摸U方向上的终点。
### End-point interpolate in V
延伸表面以触摸V方向上的端点


平面可以是网格、贝塞尔和NURBS曲面，也可以是使用开放式多边形的多条线。

### 在观察器中放置一个网格
| 到...                 | 这样做                                                                                                                                                              |
| --------------------- | --------------------------------------- |
|                       | 1. 点击 ![](https://www.sidefx.com/docs/houdini/icons/SOP/grid.svg) [Grid](https://www.sidefx.com/docs/houdini/nodes/sop/grid.html "Creates planar geometry.") 在“创建”选项卡上的工具。|
|                       | 2. 将光标移动到[scene view](https://www.sidefx.com/docs/houdini/ref/views/3dview.html).|
| 将网格放在场景中的任何地方| 笔记|
|                       | 您可以握住Alt以从施工平面上拆下网格。|
|                       | 3. 单击LMB以将网格放在任何地方 [scene view](https://www.sidefx.com/docs/houdini/ref/views/3dview.html).|
|                       | 如果在不单击的情况下按Enter键，Houdini将在原点处置于网格。|
| 将网格放在原点          | 按下 Ctrl + LMB|
|                       | 货架上的网格工具。|
![](https://www.sidefx.com/docs/houdini/images/shelf/grid.png)
笔记
一旦拖动它，就可以移动网格 [scene view](https://www.sidefx.com/docs/houdini/ref/views/3dview.html) 或更改值 [parameter editor](https://www.sidefx.com/docs/houdini/ref/panes/parms.html).
### Grid Handles  网格柄
网格对象的几何级别有特殊的手柄，允许您缩放它。
1.  通过双击 [network editor](https://www.sidefx.com/docs/houdini/ref/panes/network.html)中的LMB网格节点或通过单击“操作控件”工具栏上的**跳转到操作员**按钮，移动到几何级别。
2.拖动手柄以放大或缩小网格。
 ![](https://www.sidefx.com/docs/houdini/images/shelf/grid_handles.jpg)
### EXAMPLES 例子
加载发射
[GridBasic](https://www.sidefx.com/docs/houdini/examples/nodes/sop/grid/GridBasic.html) 示例 [Grid](https://www.sidefx.com/docs/houdini/nodes/sop/grid.html) 几何节点
Grid SOP 是一种非常常用的原始，特别是作为粒子源。 它非常多功能，并且具有许多表面参数化选项。
在此示例中，存在一系列具有替代原始类型和连接的网格。