---
type: concept
title: Environment Light
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "e2becbeae35b"
---
环境光源提供来自场景外部的背景照明。
### Parameters
环境光源从虚拟半球（或球体）照亮场景，该半球（或球体）超出了场景中最远的几何对象的范围。环境光源可以旋转以定向照明，但无法平移。
环境光源可以使用纹理贴图从环境贴图提供 HDRI 照明。在不旋转的情况下，环境贴图的方向是定向的，以便顶部面与正 Y 轴对齐。
了解如何[创建环境/反射贴图](https://www.sidefx.com/docs/houdini/render/envmaps.html)。
## 天空之光搁板工具
添加具有自动天空反射贴图的环境光源。
此工具创建一个[环境灯](https://www.sidefx.com/docs/houdini/nodes/obj/envlight.html "Environment Lights provide background illumination from outside the scene.")启用了天空环境映射的节点。
若要更改环境光源参数中的天空参数，请单击光源选项卡，然后单击天空环境映射子选项卡。
## 门户轻型货架工具
添加仅通过所选几何图形照射的环境光。这对于封闭环境更有效，因为环境光只能通过几个门户（窗户，门）进入。
此工具创建一个[环境灯](https://www.sidefx.com/docs/houdini/nodes/obj/envlight.html "Environment Lights provide background illumination from outside the scene.")并将“传送门”几何参数设置为所选的几何对象。
常规环境光源从各个方向投射到场景中。对于封闭的场景，例如房间，其中“环境”光在外面并且仅通过少数门窗进入，大部分光线将简单地照射到墙壁上。Portal 几何图形参数指定光线可通过这些几何图形（例如门窗）进入。环境光只会计算通过传送门的光，大大提高了效率。
-   选择要充当环境光源传送门的对象，然后单击搁板上的![](https://www.sidefx.com/docs/houdini/icons/OBJ/light_portal.svg)“光栅传送门”工具。
    或
-   如果未选择任何内容，请单击搁板上的![](https://www.sidefx.com/docs/houdini/icons/OBJ/light_portal.svg)“门户光源”工具，然后选择要充当环境光源传送门的对象，然后按 Enter 键。
## 参数
## 变换
转换顺序
左侧菜单选择应用转换的顺序（例如，缩放、旋转、平移）。这可以改变物体的位置和方向，就像走一个方块并转向东方会把你带到一个不同的地方，而不是向东转，然后去一个方块。
右侧菜单选择围绕 X、Y 和 Z 轴旋转的顺序。某些顺序可以使字符联合转换更易于使用，具体取决于字符。
旋转
绕 XYZ 轴旋转的程度。
### 查看选项
显示
此对象是否显示在视口中并呈现。打开复选框让 Houdini 使用此参数，然后将值设置为 0 以隐藏视口中的对象而不渲染它，或将值设置为 1 以显示和渲染对象。如果该复选框处于关闭状态，则 Houdini 将忽略该值。
图标缩放
胡迪尼渲染属性
图标缩放
缩放视口几何图形。此参数仅用于显示目的。
缓存对象转换
缓存对象转换一旦 Houdini 计算出来。这对于计算世界空间位置昂贵的对象（例如[粘性对象](https://www.sidefx.com/docs/houdini/nodes/obj/sticky.html "Creates a sticky object based on the UV’s of a surface, usually for parenting.")）和长父级链末端的对象（例如[骨骼](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html "The Bone Object is used to create hierarchies of limb-like objects
that form part of a hierarchy …")).默认情况下，对于粘滞和骨骼对象，此选项处于打开状态。
有关如何控制对象转换缓存的大小的信息，请参阅[“Houdini 首选项”](https://www.sidefx.com/docs/houdini/ref/windows/mainprefs.html#objcache)窗口的 OBJ 缓存部分。
视口选择已启用
对象能够在视口中被选取。
选择脚本
在视口中选取对象时要运行的脚本。请参 阅[选择脚本](https://www.sidefx.com/docs/houdini/commands/_guide.html) 。
### 查找选项
## 光
浅色
环境颜色或环境映射色调（如果使用映射）。
光强度
颜色上的刻度。如果强度为 0，则禁用灯光。仅当对象包含在输出驱动程序的“强制灯光”参数中时，才会将灯光发送到渲染器。
环境地图
环境图，用于控制来自不同方向的光的颜色和强度。环境地图中的颜色将按浅色着色。
如果启用天空环境地图（在天空环境地图选项卡上）处于打开状态，则此参数将被禁用。
启用灯光
关闭此开关相当于将光照强度设置为 0。
在视口中启用灯光
关闭此选项会使视口中的灯光脱离考虑范围。这对于仅在渲染时才有意义的灯光很有用。
扩散贡献
在照亮表面时，光将有助于漫射照明。
镜面贡献
照亮表面时，光源将在表面上提供镜面高光。
轻度贡献
提供对光线影响哪些阴影组件的更详细控制。要禁用对命名组件的贡献，请指定组件名称并禁用切换。
渲染光源几何图形
在渲染中将光源显示为几何对象。启用此切换开关后，环境光源将在渲染中显示为背景图像。
夹至正 Y 半球
强制环境照明仅从 +Y 半球发光。当照亮遮挡 -Y 半球中大多数照明的场景（例如，具有较大地平面的场景）时，打开此切换可以提高渲染质量。
类别
胡迪尼渲染属性
类别
IFD属性
对象：类别
此对象所属的类别的空格或逗号分隔列表。
当前不支持每个基元材质分配 （材质 SOP）。
### 渲染选项
影响环境光产生方式的选项。
渲染模式
环境照明的采样样式。环境照明是通过光线追踪计算的，方法是将光线发送到阴影表面上方的半球，以分析从不同方向到达表面的光量。
选择使用的渲染模式取决于环境照明的类型以及场景中的几何图形。
直接照明
环境将被视为包围场景的大面积光。如果使用环境图，口头禅会将更多的样本发送到环境的明亮部分。如果希望环境影响镜面或反射表面，则应使用此选项。
直接光照支持在使用 PBR 渲染或使用 [/nodes/vop/surfacemodel](https://www.sidefx.com/docs/houdini/nodes/vop/surfacemodel.html) VOP 进行渲染时使用方差抗锯齿。方差抗锯齿利用最小/最大光线样本自动检测并减少照明中的噪点。
提示
通常，在以下情况下，“直接照明”应该是首选：
-   当环境图包含定向照明时（例如，地图的某些部分比其他部分亮得多）
-   当您需要来自环境的镜面反射贡献时
-   当您需要按光导出时
环境光遮蔽
环境将使用环境光遮蔽进行计算。环境光遮蔽是使用[VEX 全局照明](https://www.sidefx.com/docs/houdini/nodes/shop/v_gilight.html "This light source can be used to add some global illumination
effects.")着色器，并将在半球中发送均匀分布的光线以检查是否有遮挡表面。在没有环境贴图或使用在半球上颜色变化不大的贴图计算照明时，环境光遮蔽效果最佳。遮挡只会对漫射照明产生影响。
提示
在以下情况下使用环境光遮蔽：
-   在没有环境贴图的情况下进行渲染时，或者当环境光照均匀且不是很强烈时。
-   使用辐照度缓存时。
光线追踪背景
环境将间接影响场景，以便着色器跟踪离开场景的光线。此模式通过 [resolvemissedray](https://www.sidefx.com/docs/houdini/vex/functions/resolvemissedray.html "Returns the background color for rays that exit the scene.") VEX 函数受支持，该函数可在着色器中用于查询给定光线的背景照明。以下方案支持光线追踪背景模式：
-   PBR 渲染（微多边形或光线追踪）
-   使用 [/nodes/vop/surfacemodel VOP](https://www.sidefx.com/docs/houdini/nodes/vop/surfacemodel.html) 时的非 PBR 渲染
在此模式下，来自环境光的深层光栅将显示在“indirect_emission”导出平面中，而不是出现在每光漫射/反射/折射平面中。发生这种情况是因为光线被视为发光背景对象，而不是真正的光源。
提示
通常，在以下情况下，“光线追踪背景”应该是首选：
-   在没有环境贴图的情况下进行渲染时，或者当环境光照均匀且不是很强烈时
-   当您使用 PBR 或执行光线追踪以计算大多数间接照明的着色器时
-   使用时[间接光](https://www.sidefx.com/docs/houdini/nodes/obj/indirectlight.html "Indirect lights produce illumination that has reflected from other objects in the scene.")计算辐照度，加快次级光线的照明速度
采样质量
灯光的采样质量乘数。值 1 将直接使用输出驱动程序中的光线采样参数（最小光线样本）。其他值将按比例提高或降低采样质量。
光泽过滤器量
当设置为非零值时，此参数启用渲染器控制的环境贴图过滤，以过滤掉环境光光光的光泽反射中的高频噪声。过滤量由表面bsdf决定 - 光泽表面接受更多的过滤。对于漫反射表面和镜像反射，将自动禁用过滤，以保持这些组件的渲染精度。对此设置使用非零值可能会更改光面高光的平均亮度，从而在渲染中引入一些偏差。
门户几何
指定可用于优化封闭场景中环境光源采样的几何对象。门户几何向渲染器描述光线可以进入封闭场景的位置，以便采样算法可以专注于环境中实际为像素提供照明的部分。通常，门户几何体应是未渲染的几何对象，因此它不会在场景中投射阴影，并且仅具有从场景中任何点可见的单个表面层 - 因此照明不会成倍计数。
正确配置的门户应生成与禁用门户时相同的呈现结果，但噪音要小得多。在环境图完全可见的户外场景中，或者当环境图包含强度的急剧变化时，通常不应使用传送门 - 因为在这些情况下，标准的直接照明算法可能会产生更好的结果。
将环境光源与门户一起使用等效于创建标准[几何光源](https://www.sidefx.com/docs/houdini/nodes/obj/hlight.html "Light Objects cast light on other objects in a scene.")具有物理上正确的衰减，没有强度归一化，并变换成这个对象启用。
射线距离
与采样点的最大距离，以考虑辐照度/遮挡的几何形状。
采样角度
发送光线以进行辐照度/遮挡的半角度。90度是一个完整的半球。
自适应采样
启用自动优化，当采样点上方的遮挡变化很小时，该优化将减少样本数。这可以提高性能，但代价是一些可能的闪烁或额外的噪音。自适应采样只会对超过 64 个样本生效。
### 天空环境地图
用于自动为灯光创建“天空和地面”环境地图的选项。
启用天空环境地图
自动创建“天空和地面”环境地图。启用此参数后，将禁用环境映射参数（在“环境”选项卡上）。
分辨率
环境映射的分辨率（以每立方体边的像素为单位）。
此选项卡上的其他参数与[天空环境地图合成节点](https://www.sidefx.com/docs/houdini/nodes/cop2/skyenvmap.html "Creates sky and ground images for use as environment maps.").
方向
要计算的方向类型。要么远离太阳，要么朝向太阳。
计算向量
太阳的方向矢量。
计算的旋转
欧拉旋转角度，用于将 -Z 轴与计算向量对齐。
## 影子
阴影类型
没有
这束光不会投射任何阴影。
光线追踪阴影
光线追踪将用于计算来自该光源的阴影。
阴影面具
将被视为光源遮挡物的对象蒙版。使用光线追踪阴影时，只有这些对象会与阴影光线相交。使用深度图阴影时，深度图中仅显示这些对象。
注意
可以通过添加阴影类别呈现参数来使用类别。
阴影强度
关于被遮挡物阻挡多少光线的尺度。通过降低阴影强度，遮挡器不会阻挡所有光线，从而允许一些照明通过。
透明阴影
打开此选项后，将评估遮挡器的表面着色器以确定不透明度。打开此选项将导致在使用深度图阴影进行阴影时使用深阴影贴图。
## 例子
负荷 发射
[门户盒](https://www.sidefx.com/docs/houdini/examples/nodes/obj/envlight/PortalBox.html)[环境光源](https://www.sidefx.com/docs/houdini/nodes/obj/envlight.html)对象节点的示例
此示例演示如何使用窗口几何图形创建门户光源。对一个盒子进行建模，然后拆分为2个SOP - 一个代表窗户，另一个代表墙壁。将渲染墙壁，而窗口用于指定环境光源的传送门。打开和关闭门户以查看在“渲染视图”中渲染时的渲染质量差异。