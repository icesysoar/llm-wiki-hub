---
type: concept
title: UV Texture
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "5e4194fb0093"
---
将纹理UV坐标分配给几何体，用于纹理和凹凸贴图。
### Parameters
UVTexture 操作将纹理 UV 坐标分配给源几何图形，以便在纹理和凹凸贴图中使用。
注意
当投影类型为圆柱形或极性时，闭合网格、贝塞尔曲面和 NURBS 曲面将被打开。将至少添加一行/一列顶点（对于 NURBS，可能更多）。这是为了防止在连接接缝处对纹理坐标进行不良插值。
提示
在应用基于样条的纹理投影之前，请重新映射分割曲面的 U 和/或 V 基（使用[基础标准操作规程](https://www.sidefx.com/docs/houdini/nodes/sop/basis.html "Provides operations for moving knots within the parametric spaceof a NURBS curve or surface.")） 介于 0 和 1 之间，以确保纹理的完整映射。如果单个纹理贴图必须由多个曲面共享，则在重新映射之前应连接曲面基础。
可视化对UV的影响的最佳方法是在UV视图中。要更改视口以显示 UV，请单击视口右上角的“视图”菜单，然后选择**“设置视图”▸ UV 视口**，或者将鼠标移到视图上并按空格键 + 5。
您还可以使用属性[可视化工具](https://www.sidefx.com/docs/houdini/basics/visualizers.html "Visualizers create visual representations of otherwise hard-to-see information in the 3D view, such as attribute values and volume interiors.")在 3D 视图中可视化 UV 属性值。
## 使用 UV 纹理
1.  选择要为其计算纹理 UV 的基元。
2.  单击![](https://www.sidefx.com/docs/houdini/icons/SOP/texture.svg)[紫外线纹理](https://www.sidefx.com/docs/houdini/nodes/sop/texture.html "Assigns texture UV coordinates to geometry for use in texture and bump mapping.")工具上的**纹理**选项卡。
UV纹理工具允许您从[参数编辑器](https://www.sidefx.com/docs/houdini/ref/panes/parms.html)的下拉菜单中选择**纹理类型**，包括“行和列”以及“相机的透视”。
## 参数
紫外线属性
要创建的纹理坐标属性的名称，默认为 。`uv`
群
要应用纹理的几何图形子集。
纹理类型
要使用的投影类型。
正交
从轴直接投影
极
沿轴方向球形包裹
圆柱
沿轴方向圆柱形包裹
行和列
对于构造为网格的几何图形。U 坐标沿行放置，V 坐标沿列放置。
脸
将纹理的副本沿其法线映射到每张脸上，从而正确定位纹理。但是，地图不会缩放以适合每个多边形，也不会因每个多边形的形状而扭曲。
修改源
如果源已具有纹理 UV 坐标，则会保留这些坐标，但可以缩放和偏移这些坐标。另请参见[紫外线编辑](https://www.sidefx.com/docs/houdini/nodes/sop/uvedit.html "Lets you interactively move UVs in the texture view.")和[紫外线变换](https://www.sidefx.com/docs/houdini/nodes/sop/uvtransform.html "Transforms UV texture coordinates on the source geometry.").
均匀样条曲线
仅多边形曲线和 NURBS/贝塞尔曲线/曲面。在 U 和 V 中均匀地对每条曲线或曲面的基数进行采样，并将这些值作为纹理坐标分配给曲面点或顶点。
平均样条曲线
仅多边形曲线和 NURBS/贝塞尔曲线/曲面。每个控制顶点的 Greville 点的坐标用作纹理 UV。
弧长样条
仅多边形曲线和 NURBS/贝塞尔曲线/曲面。根据弧长对每条曲线或曲面的基础进行采样，并将这些值指定为点或顶点的纹理坐标。
从相机透视
分配纹理坐标，以便可以对对象的世界空间进行纹理处理，以精确地适合相机的投影。
投影轴
轴沿样条投影，或投影方法。
照相机
摄像机或光源投影透视坐标
属性类
纹理是否应用于点或顶点。
自动选择
让操作确定创建的 uv 属性的类型。
点
创建点 uv 属性。
顶点
创建顶点 uv 属性。
规模
缩放纹理坐标。
抵消
偏移纹理坐标。
角度
围绕投影轴旋转纹理坐标。
固定边界接缝
确保纹理正确环绕。
另请参见
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvpelt.svg) UV Pelt](https://www.sidefx.com/docs/houdini/nodes/sop/uvpelt.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvproject.svg) UV Project](https://www.sidefx.com/docs/houdini/nodes/sop/uvproject.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvquickshade.svg) UV Quick Shade](https://www.sidefx.com/docs/houdini/nodes/sop/uvquickshade.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/uvunwrap.svg) UV Unwrap](https://www.sidefx.com/docs/houdini/nodes/sop/uvunwrap.html)