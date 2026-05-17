---
type: concept
title: Bone
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "fa74aacda06d"
---
骨对象用于创建构成层次结构一部分的肢体状对象的层次结构...
### Parameters
骨对象用于创建肢体状对象的层次结构，这些对象构成彼此父级的骨骼对象的层次结构或链的一部分。Bone 物体链的运动是根据包括逆运动学在内的几种方法“求解”或计算的。骨骼的父级属性是唯一的，因为每个骨骼都附着在父骨骼的末端，而不是原点。
建议您使用通过视口上方的图标访问的 Bones 操作来构建这样的链，因为放置单个骨骼对象并在操作员之间建立其父级关系非常耗时，而且根本不直观。此外，使用骨骼操作创建的链将产生行为更好的骨链。
默认情况下，骨骼不呈现。它们包含两种类型的显示几何图形：“链接几何图形”和“捕获区域几何图形”。前者由一个狭窄的菱形组成，该形状已拉伸到“骨骼长度”中指定的长度，并沿骨对象的负 Z 轴放置。后者由两个或多个用户可控制的药丸形状区域组成，用于定义骨架sop中使用的捕获区域。您可以指定是否显示两种类型的几何图形中的任何一种。
Bone 对象的实际移动通过 IK CHOP 进行控制（使用标准“捕获/变形”模型时）。IK CHOP 将覆盖骨骼旋转参数。如果要覆盖此行为，则需要删除骨骼的通道，以便它们不再被斩波控制覆盖。
当骨骼作为骨对象的子级进行父级时，它们会自动定位在其父骨对象的尖端。如果骨骼对象的父级为非骨骼对象的子对象，则该对象将附着到父对象的原点。
## 使用骨骼
1.  单击![](https://www.sidefx.com/docs/houdini/icons/OBJ_STATE/bones.svg)[骨骼](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html "The Bone Object is used to create hierarchies of limb-like objects
    that form part of a hierarchy …")工具。。
2.  单击 LMB 将骨骼链放置在[场景视图中](https://www.sidefx.com/docs/houdini/ref/views/3dview.html)的任意位置，然后继续单击以将骨骼添加到链中。
    -   您可以使用操作工具栏中的“**放置**”菜单控制内部捕捉。这对于将骨骼捕捉到角色皮肤几何体的中线非常有用。
        默认情况下，如果骨骼与几何节点相交，则该骨骼将基于视图放置在几何图形中（“基于视图”）。否则，骨头将接地在建筑平面上。
        “基于法线”的“基于几何图形”在几何图形中基于几何法线而不是视图捕捉。
        “手绘”不做内部捕捉。
    -   您可以在操作工具栏的下拉菜单中添加、移除和更改运动学，或单击[场景视图中](https://www.sidefx.com/docs/houdini/ref/views/3dview.html)的“元骨”。
        如果创建具有反向运动学的骨骼链 a![](https://www.sidefx.com/docs/houdini/icons/OBJ/null.svg)[空对象](https://www.sidefx.com/docs/houdini/shelf/null.html "Creates a null object which can be used to hold a place in a scene, and never renders.")将出现在链条的末端，这使您可以在链根接地时轻松移动骨骼。
3.  按 Enter 完成链。
4.  在操作工具栏上的**“链名称”字段中命名**骨骼链。
![](https://www.sidefx.com/docs/houdini/images/shelf/bones.jpg)
## 使用骨骼
1.  在视口中，按 ⇥ Tab 并键入[路径](https://www.sidefx.com/docs/houdini/nodes/obj/path.html "The Path object creates an oriented curve (path)").
2.  在视口中绘制曲线。
3.  确保已选择曲线，然后单击“**字符**”选项卡上的![](https://www.sidefx.com/docs/houdini/icons/OBJ_STATE/bonesfromcurve.svg)“曲线中的骨骼”工具。
    如果要**将骨**骼绑定到[曲线](https://www.sidefx.com/docs/houdini/nodes/sop/curve.html "Lets you interactively draw Bézier curves using tools similar to 2D illustration programs, as well as polylines and NURBS.").这允许您修改曲线并自动调整骨链。
4.  在操作工具栏上的**“链名称”字段中命名**骨骼链。
    您还可以通过更改操作工具栏中值中的值来增加或减少链中的**骨骼数**。
![](https://www.sidefx.com/docs/houdini/images/shelf/bones_from_curve.jpg)
## 参数
## 变换
翻译
沿 XYZ 轴平移。
旋转
绕 XYZ 轴旋转的程度。
统一比例
沿所有三个轴均匀缩放对象。
修改转换前
此菜单包含用于操作[转换前](https://www.sidefx.com/docs/houdini/basics/objects.html#pretransform)值的选项。预转换是在常规转换参数之前应用的内部转换。这允许您更改以下平移、旋转和缩放参数值的参考系，而无需更改整体变换。
清理转换
这会将平移、旋转、缩放参数还原为其默认值，同时保持相同的总体变换。
干净的翻译
这会将 translate 参数设置为 （0， 0， 0），同时保持相同的总体转换。
清洁旋转
这会将旋转参数设置为 （0， 0， 0），同时保持相同的总体变换。
清洁鳞片
这会将 scale 参数设置为 （1， 1， 1），同时保持相同的总体变换。
提取预转换
这将通过设置平移、旋转和缩放参数来删除预转换，以保持相同的整体变换。请注意，如果预变换中存在剪切力，则无法完全移除。
重置转换前
这将完全删除预转换，而无需更改任何参数。如果平移、旋转和缩放参数中存在任何非默认值，这将更改对象的整体变换。
育儿时保持姿势
重新设定对象父级时，通过更改对象的变换参数来保持其当前世界位置。
儿童赔偿
当对象正在转换时，通过更改其转换参数来维护其子对象的当前世界转换。
启用约束
在对象上启用**约束网络**。
约束
通往 CHOP **约束网络的**路径。另请参阅[创建约束](https://www.sidefx.com/docs/houdini/character/constraints.html)。
提示
您可以使用约束下拉按钮激活约束功能区工具之一。如果这样做，则第一个选取会话将由参数面板中选定的节点自动填充。
注意
对象节点上的 Lookat 和 Follow Path 参数已弃用，取而代之的是[看](https://www.sidefx.com/docs/houdini/shelf/constraintlookat.html "Makes an object point at another object.")和[跟踪路径](https://www.sidefx.com/docs/houdini/shelf/constraintpath.html "Animates an object along a curve.")约束。这些参数目前仅处于隐藏状态，如果您确实编辑了节点的参数界面，则可以设置其可见性。
## 骨
显示链接
切换链接几何图形的显示
休息角度
定义反运动学求解器围绕骨骼的 x，y，z 轴旋转的相对加权。这些值是相对于骨骼的预转换而言的。默认情况下，从对象查看器的 Bones 工具创建时，这些值为零，其中预变换旋转值定义了静止角度。
骨长度
更改骨骼的长度
运动学求解器
指定此骨骼应从中获取其烹饪旋转的 CHOP 节点。这要求指定的 CHOP 具有 3 个命名为：path：rx、path：ry 和 path：rz 的轨道，其中 path 是此骨骼的完整路径，不带 /obj 前缀。可以使用 opsubpath（） 表达式函数获取此路径。
如果此参数在没有自定义几何图形的骨骼上不为空，则骨骼的显示几何形状将不同以指示这一点。
此页面上的其余参数仅影响 InverseKin CHOP 使用具有约束的求解器之一生成的解。
抑制
影响此骨骼角度的更改速度。
角度范围
指定此骨骼在每个轴中可以具有的最小和最大旋转角度。（仅由带约束求解器的 IK 使用）
阻尼角
当每个轴的旋转落在其最小值或最大值的指定角度内时，对骨骼的旋转应用阻尼。当求解角度在角度范围的此角度值内时，会发生阻尼。（仅由带约束求解器的 IK 使用）
阻尼滚降
指定当旋转在最小或最大角度的阻尼角度内变化时，阻尼增加的速率。这也可以被认为是阻尼角区域的线性斜率值。（仅由带约束求解器的 IK 使用）
## 捕获
显示捕获区域
切换 /display 捕获捕获区域的显示。
### 捕获区域
捕获区域中心
骨骼捕获区域中心的位置。请注意，这在对象空间中是协调的。此外，z 分量使用骨骼长度作为乘数，因此 0.5 等于骨骼的一半。`/ccrcenter[xyz]`
捕获区域轮换
捕获区域的旋转 。`/ccrrotate[xyz]`
捕获区域缩放
比例因子。在局部参考系轴的方向上对骨骼局部原点进行缩放。.`/ccrscale[xyz]`
捕获顶部高度
捕获区域从中心到顶盖的高度。`/crtopheight`
捕获顶盖
上半球的X，Y，Z半径。`/ccrtopcap[xyz]`
捕获机器人高度
从中心到底盖的区域高度。`/ccrbotheight`
捕获机器人上限
X，Y，Z下半球的半径。`/ccrbotcap[xyz]`
### 变形区域
此选项卡包含与捕获区域类似的参数，但它们用于捕获几何的动画和变形。值得注意的是，缩放因子可用于在动画期间挤压和拉伸捕获区域。
捕获骨长度
捕获模式下骨骼的长度。这是使用骨骼捕获几何图形时的骨骼长度。请注意，可以通过从主菜单中选择**编辑 ▸ 对象 ▸ 骨骼运动覆盖：捕获姿势**来打开捕获模式。
捕获骨骼翻译
捕获模式下骨骼的平移。
捕获骨骼旋转
捕获模式下骨骼的旋转角度。请注意，骨骼旋转轴顺序为 ZYX。旋转与平移和缩放参数一起形成变换
将骨骼定位在相对于世界空间的捕获位置和方向中。此转换的转换顺序为“缩放”、“旋转”、“平移”。
捕获骨鳞
捕获模式下骨骼的缩放。
## 呈现
显示
此对象是否显示在视口中并呈现。打开复选框让 Houdini 使用此参数，然后将值设置为 0 以隐藏视口中的对象而不渲染它，或将值设置为 1 以显示和渲染对象。如果该复选框处于关闭状态，则 Houdini 将忽略该值。
## 杂项
设置线框颜色
使用指定的线框颜色
线框颜色
对象的显示颜色
视口选择已启用
对象能够在视口中被选取。
选择脚本
在视口中选取对象时要运行的脚本。请参 阅[选择脚本](https://www.sidefx.com/docs/houdini/commands/_guide.html) 。
缓存对象转换
缓存对象转换一旦 Houdini 计算出来。这对于计算世界空间位置昂贵的对象（例如[粘性对象](https://www.sidefx.com/docs/houdini/nodes/obj/sticky.html "Creates a sticky object based on the UV’s of a surface, usually for parenting.")）和长父级链末端的对象 例如[骨骼](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html ).默认情况下，对于粘滞和骨骼对象，此选项处于打开状态。
有关如何控制对象转换缓存的大小的信息，请参阅[“Houdini 首选项”](https://www.sidefx.com/docs/houdini/ref/windows/mainprefs.html#objcache)窗口的 **OBJ 缓存**部分。
另请参见
!InverseKin#InverseKin Channel
