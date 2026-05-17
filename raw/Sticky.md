---
type: concept
title: Sticky
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "fb9c947aefa8"
---
根据表面的 UV 创建粘性对象，通常用于父级。
## Parameters
此工具创建一个对象，该对象从面面上 UV 点的世界空间位置进行变换。然后，可以将另一个对象置于 Sticky 对象的父级，以使该对象跟随曲面。
这类似于![](https://www.sidefx.com/docs/houdini/icons/OBJ/rivet.svg) [铆钉](https://www.sidefx.com/docs/houdini/nodes/obj/rivet.html "Creates a rivet on an objects surface, usually for parenting.")工具;但是，此工具更精确，因为您可以将粘性附加到表面上的任何位置，并且可以对位置和对象[进行动画处理](https://www.sidefx.com/docs/houdini/anim/index.html "How to create and keyframe animation in Houdini.")。例如，您可以制作一只骑在大象背上的猴子的动画，同时在表面上滑动试图平衡。
粘滞对象从多边形网格的表面获取其变换。网格还必须具有用于确定多边形参数化的纹理坐标。
粘性对象可能受其他粘性对象的父级。在这种情况下，它们将为其 2d UV 变换（UV 偏移和旋转）提供父级。如果父母一方具有粘性对象，则应打开“获取世界变换”。
“粘滞几何图形”路径确定要粘附到的对象。要将对象粘附到粘滞几何图形，必须将要粘贴到粘附节点的几何图形作为父级。
例如，要将球体粘贴到网格上，请确保网格具有 uv 纹理属性，创建粘滞对象，将粘滞几何图形设置为网格，并将球体父级设置为粘滞对象。
### 参数
### 粘
粘性几何图形
要将几何图形粘贴到的 SOP。
属性
用于多边形参数化的纹理的属性名称。
紫外线
用于评估网格处的 UV 坐标。
旋转
围绕曲面法线旋转局部坐标系的角度。它只有在“定向到表面”处于打开状态时才会生效。但是，此对象的父级的任何其他粘滞对象都将继承此旋转。
面向曲面
是否应使用点的局部方向。曲面法线用作 Z 轴，纹理的 U 轴用作 Y 轴。
获取世界变换
如果设置了此设置，则将使用粘滞几何图形的变换。如果未设置，则将使用此节点的父转换。
在 U/V 中包装
如果未设置，则将忽略范围之外的 u 和 v 值。设置后，它们将被包装，直到它们位于范围内。
U/V 范围
这是要在其中工作的纹理空间的范围。纹理坐标超出此范围的几何图形将被忽略。
假设 UV 坐标不变
粘滞对象构建目标表面纹理坐标的缓存。设置此设置后，即使目标的几何图形发生更改，也会保留缓存。
清除 UV 缓存
粘滞对象在重建 UV 信息时是保守的。这将强制它更新 UV 纹理查找。
### 呈现
显示
此对象是否显示在视口中并呈现。打开复选框让 Houdini 使用此参数，然后将值设置为 0 以隐藏视口中的对象而不渲染它，或将值设置为 1 以显示和渲染对象。如果该复选框处于关闭状态，则 Houdini 将忽略该值。
设置线框颜色
使用指定的线框颜色
线框颜色
对象的显示颜色
视口选择已启用
对象能够在视口中被选取。
选择脚本
在视口中选取对象时要运行的脚本。请参 阅[选择脚本](https://www.sidefx.com/docs/houdini/commands/_guide.html) 。
缓存对象转换
缓存对象转换一旦 Houdini 计算出来。这对于计算世界空间位置昂贵的对象（例如[粘性对象](https://www.sidefx.com/docs/houdini/nodes/obj/sticky.html "Creates a sticky object based on the UV’s of a surface, usually for parenting.")）和长父级链末端的对象（例如[骨骼](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html "The Bone Object is used to create hierarchies of limb-like objects
that form part of a hierarchy …")).默认情况下，对于粘滞和骨骼对象，此选项处于打开状态。
有关如何控制对象转换缓存的大小的信息，请参阅[“Houdini 首选项”](https://www.sidefx.com/docs/houdini/ref/windows/mainprefs.html#objcache)窗口的 OBJ 缓存部分。
几何比例
围绕 xyz 轴的均匀缩放。
显示
是仅显示图标、仅显示轴还是同时显示两者。
图标
仅显示图标几何图形。
轴
仅显示轴。
图标和轴
同时显示图标和轴。
控件类型
在要显示的几何类型之间切换。
零
显示空几何图形（即十字）。
圈
显示圆形基元。
箱
显示框基元。
飞机
显示平面基元。
空和圆
显示空基元和圆形基元。
空和框
显示空基元和框基元。
空和平面
显示空基元和平面基元。
习惯
如果指定了输入源，则此选项将显示输入的几何图形。
取向
与圆或平面基元结合使用。确定要显示的圆或平面。
所有飞机
显示 YZ、ZX 和 XY 平面上的圆或平面基元。
YZ 飞机
在 YZ 平面上显示圆或平面基元。
ZX飞机
在 ZX 平面上显示圆或平面基元。
XY 平面
在 XY 平面上显示圆或平面基元。
YZ，ZX飞机
显示 YZ 和 ZX 平面上的圆或平面基元。
YZ，XY 平面
显示 YZ 和 XY 平面上的圆或平面基元。
ZX、XY 平面
显示 ZX 和 XY 平面上的圆或平面基元。
着色模式
确定基元是显示为着色对象还是显示为线框对象。
熄灭
以线框模式显示基元。
上
以着色模式显示基元。
### 例子
负荷 发射
[粘性甜甜圈](https://www.sidefx.com/docs/houdini/examples/nodes/obj/sticky/StickyDonut.html)[粘滞](https://www.sidefx.com/docs/houdini/nodes/obj/sticky.html)对象节点的示例
在此示例中，圆环被粘在网格表面上的动画粘性对象上。
另请参见
!Fetch#Fetch Object
