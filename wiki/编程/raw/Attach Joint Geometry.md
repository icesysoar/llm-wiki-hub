---
type: concept
title: Attach Joint Geometry
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "d6fd80bc8124"
---
为基于SOP的KineFX钻机创建控制几何图形。
### Parameters
此节点以打包_或未打包几何基元_的形式将控件几何体附加到第一个输入上的点（通常是关节），而无需修改其层次结构，并创建 KineFX 中的交互式工具将这些基元识别为它们所附加到的点的选择_器_所需的属性。
如果要提供可供选择的控件形状库，则此节点上的第二个输入（形状库输入）可以采用多个基元。此几何图形可以是打包的或解压缩的基元，但基元必须具有属性才能作为控件附加。`name`
如果要重用已定义的一系列形状分配，可以将现有形状分配另存为_形状模板_。然后，您可以通过将此形状模板连接到任何**连接联合 Geo SOP** 节点的第三个输入来使用此形状模板。
笔记
-   控件_从它们_附加到的点继承转换。因此，如果在视口中看不到控件几何图形，请检查骨架的关节缩放，因为控件可能因此而缩小（甚至达到在默认_缩放_时在视口中不再可见的程度）。
-   有关在 KineFX 中使用控件的详细信息，请参阅[设置控件形状](https://www.sidefx.com/docs/houdini/character/kinefx/controlshapes.html)。
技巧
作为直接在场景中创建控制几何体的替代方法，您可以使用以下内容：
-   一个![|50](https://www.sidefx.com/docs/houdini/icons/COMMON/file.svg) [文件标准操作程序](https://www.sidefx.com/docs/houdini/nodes/sop/file.html "Reads, writes, or caches geometry on disk.")节点，以引用磁盘上的文件，该文件包含要用作控件的所有基元。`.bgeo`
-   一个![|50](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-skeleton.svg) [骨架标准操作程序](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--skeleton.html "Interactively create and edit geometry-based skeletons.")节点以创建可用作控件的 KineFX 点。
## 州
附着关节几何视口状态工具栏
![|50](https://www.sidefx.com/docs/houdini/images/nodes/sop/kinefx_attachjointgeo_toolbar.jpg)
附着关节几何视口状态工具栏，“指定形状”模式
创建新组
-   如果在视口中未选择任何点，则此按钮将创建一个新的空“[指定形状”](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#shapes)多参数。
-   如果在视口中选择了点，则此按钮将创建一个新的[“指定形状](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#shapes)”多参数，并将所选点添加到其[“组](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#group1)”参数字段中。`@names`
模式
指定形状
在此模式下，当您选择一个点或⇧ Shift- 单击视口中的多个点，将自动为这些点创建一个新的“[指定形状](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#shapes)”多参数，并且它们的 s 会自动添加到其[组](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#group1)参数字段中。然后，可以将形状库（在输入 2 上）中的任何控件形状指定为多参数的[形状名称](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#shapename1)`@name`mouse_wheel.
调整形状
在此模式下，当您选择一个点或⇧ Shift-单击视口中的多个点，然后按G，将为点创建一个新的[调整](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#tweak)多参数，并且它们的 s 会自动添加到其[组](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#tweak_group1)参数字段中。`@name`
在世界空间中分配
启用后，允许您在视口中查看和选择未分配的世界空间控件形状。未分配的世界空间控件形状在视口状态下显示为浅蓝色。
偏移模式
确定指定的局部转换偏移量相对于形状模板和/或偏移量属性提供的其他偏移值的行为方式。
预乘法
指定的局部变换偏移量将与现有偏移量预乘，因此将以累加方式应用于现有偏移量。
覆盖
指定的偏移量将覆盖现有偏移量并完全替换它。
附加关节几何控柄视口状态热键
热键
行动
LMB-点击
选择输入语义中的一个点。
G
-   在**“**指定形状”模式下，为所选点或点组创建新的[“指定形状”](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#shapes)多参数。
-   在**“调整形状”**模式下，为所选点或点组创建新的[调整](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#tweak)多参数。
⌃ Ctrl + G
-   在**“**指定形状”模式下，从其当前的[“指定形状”](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#shapes)多参数中删除选定的点或点组。
-   在“调整**形状”**模式下，从其当前的[“调整多](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#tweak)参数”中删除选定的点或点组。
mouse_wheel
在**“**指定形状”模式下，允许您滚动浏览可用库形状的列表，然后选择一个要添加到当前[“指定形状”](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#shapes)多参数中。
附着关节几何控柄视口状态右键单击菜单
![|500](https://www.sidefx.com/docs/houdini/images/nodes/sop/kinefx_attachjointgeo_rightclickmenu.jpg)
附着关节几何视口状态右键单击菜单
创建新组
为所选点或点组创建新的[“指定形状”](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#shapes)多参数。
从组中删除关节
从其当前的[“指定形状”](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#shapes)多参数[组](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#group1)分配中删除选定的一个或多个点。
附着关节几何体手柄视口状态可视化
![|500](https://www.sidefx.com/docs/houdini/images/nodes/sop/kinefx_attachjointgeo_pointassignmenthighlighting.jpg)
处于视口状态的选定未指定点和选定指定点（蓝色环）
![|500](https://www.sidefx.com/docs/houdini/images/char/kinefx_controlshapes_tweakgreenring.jpg)
在视口状态下具有“调整多参数”（绿色环）的选定点
![|500](https://www.sidefx.com/docs/houdini/images/nodes/sop/kinefx_attachjointgeo_worldspaceshapes.jpg)
视口状态下的未分配世界空间形状（在世界空间中分配 = 打开）
## 参数
## 添加形状
角色
在附着几何图形的钻机设置中定义功能。
控制
附加的几何体将用作控制几何体，以简化视口与骨架交互的关节选择。
捕获地理
附加的几何图形将用于操作[联合捕获双谐波](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointcapturebiharmonic.html "Capture skin geometry to a SOP skeleton for use with Joint Deform.")标准作业程序。附加到特定关节的几何体点将增强给定关节在要捕获的几何体区域中的影响。
休息姿势属性
启用后，指定包含骨架的其余姿势的点属性的名称（默认情况下为 ）。禁用时，输入角色的姿势（第一帧）将用作骨架的其余姿势。**默认情况下，“使用静止姿势属性**”处于打开状态。`matrix4``rest_transform`
注意
强烈建议您在将控件形状附加到角色的骨架时使用_休息姿势属性_。
在世界_空间_中分配形状时，将控件附加到动画骨架可能会导致问题（如影响性能），因为分配关系不明确。使用该属性是确保“[指定形状](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#assignshapesmode)”模式下的骨架_不_依赖于时间的好方法。`rest_transform`
高级形状设置
具有输入世界空间形状组
启用后，在“分组参数”字段中指定的几何图形组用于对已在世界空间中建模的控制形状进行**分组**。
群
如果形状库包含在本地空间中建模的控件形状和在世界空间中建模的控件形状的混合，则将在世界空间中构建的基元添加到几何图形组中，并在此组字段中指定该**组**的名称。默认情况下，世界空间形状组的名称为 。`world_shapes`
注意
使用**组**_不是_强制性的。没有它，节点在内部工作完全正常。此参数用于在视口分配模式中分隔局部空间形状和世界空间形状。
通过连通性创建缺少的形状名称
启用后，如果形状库中的所有或仅选定控件形状缺少名称，则会根据形状连接自动为未命名的控件形状分配正确的基元名称。
使用照明
启用后，将使用场景的当前光照设置在视口中渲染控件形状。
输出联合地理组
指定要将控件形状添加到的基元组的名称。如果指定的组已存在，则控件形状将追加到现有组中。默认情况下，基元组为 。`kinefx_controls`
指定形状
创建或删除在控件形状与其目标骨架点之间创建链接的多臂。
群
指定要将控件形状附加到的点的名称。此参数接受使用语法指定的点名称。例如，对于一个点，对于两个点，依此类推。此参数旁边的选择几何图形箭头图标还允许您从视口中选择**组**的骨架点。`@name``@name=head``@name=hand_l @name=hand_r`
形状名称
要用作**组中**列出的点的控制形状的几何基元的名称。连接到此节点的第二个输入（形状库输入）的几何基元的所有名称也会显示在此参数的下拉列表中。
保持形状世界变换
启用后，**由 Shape Name** 指定的控件形状将保留其世界空间位置，并且不继承分配给它的点的局部空间位置。因此，这也意味着您可以更改输入框架的静止位置，而不会影响控件形状的位置。
## 调整
使用关节偏移属性
启用后，每个点的控制形状的局部变换偏移由此节点的第一个输入（骨架输入）上的点矩阵属性提供。
偏移属性
指定此节点的第一个输入（骨架输入）上的点矩阵属性的名称，该属性表示每个点的控制形状的局部变换偏移。
仅当**启用使用关节偏移属性**时，此参数才可用。
使用关节颜色属性
启用后，控件形状的颜色值由此节点的第一个输入（骨架输入）上的矢量点属性提供。
颜色属性
指定此节点的第一个输入骨架输入上的矢量点属性的名称，该属性表示形状的颜色值。
仅当**启用使用联合颜色属性**时，此参数才可用。
乘法形状比例
将所有已分配控件形状的比例均匀地乘以指定的因子。
调整
调整是多个臂，允许您为指定点指定局部变换偏移量，然后为其分配的控件形状继承这些偏移量。
模式
定义指定的局部转换偏移量相对于形状模板和/或偏移属性提供的其他偏移值的行为方式。
预乘法
指定的局部变换偏移量将与现有偏移量预乘，因此将以累加方式应用于现有偏移量。
覆盖
指定的偏移量将覆盖现有偏移量并完全替换它。
群
指定将应用给定局部偏移的点的名称。此参数接受使用语法指定的点名称。例如，对于一个点，对于两个点，依此类推。此参数旁边的选择几何图形箭头图标还允许您从视口中选择**组**的骨架点。`@name``@name=head``@name=hand_l @name=hand_r`
翻译
指定转换偏移量。
旋转
指定旋转偏移。
规模
指定比例偏移。
支点
透视翻译
指定透视的平移偏移量。
枢轴旋转
指定枢轴的旋转偏移。
更改颜色
启用后，使用新指定的颜色覆盖指定点或点的控件形状的当前**颜色**。
颜色
定义指定**组**的控件形状的矢量颜色覆盖。颜色作为基元属性应用于控件形状。
## 形状模板
确定此节点上的第三个输入（形状模板输入）上提供的形状模板文件的设置。形状模板是一个外部文件，其中包含要与输入框架一起使用的控件形状。这些参数仅在检测到第三个输入时可用。
目标关节
指定要将形状模板应用到的目标点。默认值选择输入骨架中的所有点。`*`
模板接头
指定要传递到输入骨架（输入 1）或指定**目标关节**的模板点（以及为其分配的控制形状）。默认值选择提供的形状模板中的所有模板点。`*`
匹配方式
定义形状模板与输入框架的匹配方式。
属性值
基于骨架和形状模板上的点属性值进行匹配。
点数
基于骨架和形状模板中的点数值进行匹配。
映射属性
使用字典属性进行匹配，该属性基于属性的结构`mapping`![|50](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-mappoints.svg) [地图点标准操作程序](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--mappoints.html "Stores a reference on a point to a point in another geometry.")节点和属性来自`mirror`![|50](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-rigmirrorpose.svg) [钻机镜姿势 SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--rigmirrorpose.html "Mirror a SOP skeleton’s pose.")节点。
例如：
{
`reference`: "ptnum" or the name of the attribute to reference (for example, "name"),
`value`: The value of the attribute specified in the `reference` key or the point number of the mirrored point if `reference` is "ptnum",
`flipaxes`:  An integer value that stores how the points were mirrored (__By Scale__ or __By Rotation__)
}
此**匹配方式**模式非常有用，因为您可以使用它将模板映射到不同名称的框架或镜像提供的模板。
要匹配的属性
指定将用于匹配输入框架和模板的点属性的名称。该属性可以是类型或 ，并且还允许多个匹配项。例如，如果多个点具有相同的匹配点值，则可以将模板形状应用于多个输入点。`string``integer``box`
仅当**匹配方式**设置为**属性值**时，此参数才可用
注意
要匹配的默认属性是点 。这非常有用，因为 KineFX 形状模板通常基于具有点名称的骨架。`name`
保持模板关节偏移
启用后，来自提供的形状模板的局部调整偏移将应用于输入骨架。
保持模板世界转换
启用后，将使用模板形状的世界位置。
## 输入
输入 1
目标骨架。要附加形状的 SOP 框架。
输入 2
形状库。打包或解压缩的几何基元，其属性可用作输入骨架的控制形状。基元可以在_局部空间_或_世界空间_中建模。`name`
局部空间意味着基元全部在原点建模，然后形状自动定位在其指定点的局部空间。这是对球体、框等简单控件形状进行建模和管理的一种非常方便的方法。
世界空间意味着基元都是在上下文中在角色上的正确位置建模的。当您具有应与字符模型轮廓匹配的复杂形状时，这非常方便，因为您不需要使用偏移对它们进行建模。
输入 3
形状模板。包含有关可传输到输入骨架的现有形状分配和/或形状偏移的信息。形状模板是一个很好的起点，在为角色设置控件形状时可以节省大量时间。而且，您始终可以在同一**“附加联合地理 SOP**”节点中的模板顶部应用其他形状分配和调整更改。调整数据存储在基元属性中。`jointgeo`
该模板由具有打包基元的点组成，这些基元具有用于匹配的点属性，并且可以选择在基元属性上存储偏移的元数据。非常方便的联合属性中的默认匹配属性（[要匹配的属性](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html#referenceattr)）。`packedgeo``name`
如果已创建一系列形状分配，并且希望将它们重用为其他绑定的起点，则可以将它们另存为形状模板。这意味着您可以将此**附加联合 Geo SOP** 节点的输出中的文件与完整的骨架一起存储，并将其用作模板。`.bgeo`
## 输出
产出 1
目标骨架。附加了控件形状的输入框架（来自输入 1）。
## 例子
负荷 发射
[捕获地理示例](https://www.sidefx.com/docs/houdini/examples/nodes/sop/kinefx--attachjointgeo/capturegeoexample.html)[“连接关节几何图形](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--attachjointgeo.html)”节点的示例
该示例演示了使用附加的接头几何形状来影响双谐波捕获的捕获结果。 与纯基于关节位置的双有害捕获相比，这种方法可能比纯涂装重量更有效，并且可以让您更好地控制每个关节的影响区域。
1.  创建了具有常见 SOP 节点的捕获地理形状，并使用合并打包的 SOP 节点对其进行捆绑和打包
2.  将合并**打包 SOP** 节点的输出连接到**附加联合 Geo** 节点的第二个输入
3.  进入视口状态，单击骨架中要将世界空间形状指定为控件的关节，按住G然后LMB-单击要分配给关节的世界空间形状。
4.  **将连接联合地理 SOP** 节点的输出连接到**联合捕获双谐波**节点的第二个输入
5.  在**参数编辑器**中，将[角色](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointcapturebiharmonics.html#role)设置为**附加捕获地理 SOP** 节点设置的角色。捕获几何将自动用于求解双谐波捕获。您可以通过[使用捕获地理关节](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointcapturebiharmonics.html#usecapturegeo)切换来绕过它
参见
-   [附加控件形状](https://www.sidefx.com/docs/houdini/character/kinefx/controlshapes.html)