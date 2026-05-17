---
type: concept
title: Mocap Acclaim
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "5bf3173710fd"
---
导入Acclaim动作捕捉。
## Parameters
此资源导入多个动作捕捉文件，并使用反向或正向运动学生成由 CHOP 驱动的动画装备。
它在自己的子网内生成远程测试机组 。
您可以从以下位置获取 Acclaim 运动文件：[CMU 图形实验室动作捕捉数据库](http://mocap.cs.cmu.edu/)
### 参数
### 控制
骨架文件.asf
要加载的 Acclaim 骨架文件。
帧速率
运动文件的帧速率通常高于渲染帧速率。设置速率以匹配运动数据。
动作捕捉夹
一个动态菜单，列出嵌套的 mocap CHOPnet 内的所有 CHOP 节点。选择一个条目将切换关联 CHOP 节点上的“导出”标志，并修改全局动画范围以适合动画。您可以通过选择无来禁用 CHOP 导出。
重新加载
清除子网的内容，并从文件中重新加载动作捕捉装备和动画。
清楚
清除子网的内容。
加载场景时重新加载
在打开场景时强制重新加载动作捕捉装备和动画。
从骨架文件夹自动加载运动文件
重新加载时，自动在.asf文件的文件夹中搜索 .amc 文件。它还将查找一个文件，以根据amc文件名重命名剪辑。如果具有 和，则文件应具有以下格式：`index.txt``126_01.amc``126_02.amc`
126_01<tab>This is the description for Animation 01
126_02<tab>This is the description for Animation 02
FK/IK 模式
可以使用 FK 或 IK 生成钻机。
具有扭曲影响器的双骨链
具有 2 个骨骼的 IK 骨链可以通过扭曲效应器生成。
定义 IK 链（超过 2 个骨骼）
启用具有 2 个以上骨骼的 IK 骨链的手动定义。这减少了具有 2 个以上骨骼的链条上的 IK 影响因素的数量。
IK 链列表
多行字符串，其中每行表示一个 IK 骨链。使用链根名称和链端影响符名称，用空格分隔。
<IK Chain Root Joint> <IK Chain End Affector>
骨长度
如果动作捕捉包含平移数据，则可以使用 CHOP 驱动钻机的骨骼长度。
不要覆盖通道
不要对骨骼长度进行动画处理/覆盖。
始终覆盖通道
始终对骨骼长度进行动画处理/覆盖，即使骨骼长度没有变化也是如此。
自动覆盖通道
检测骨骼长度是否经过动画处理并覆盖骨骼长度。
输出文件夹
指定在其中生成动画和临时文件的可写文件夹。
保留临时文件（.cmd、.txt）
保留由 mcacclaim 实用程序和此脚本生成的临时文件。
从骨架文件夹加载运动文件
从框架文件夹中手动重新加载 .amc 文件。它填充运动文件条目。
运动文件数量
要创建的运动文件路径和运动名称对的列表。您可以在单次导入期间生成多个运动。
运动1
amc 运动文件的路径。
名称1
用于相应 CHOP 文件节点的节点名称。
转换日志
mcacclaim 实用程序的命令行输出。它可以输出错误或警告。
## 变换
### 变换
注意
对象的转换也由是否存在任何添加的[节点属性](https://www.sidefx.com/docs/houdini/props/obj.html)来确定。
转换顺序
左侧菜单选择应用转换的顺序（例如，缩放、旋转、平移）。这可以改变物体的位置和方向，就像走一个方块并转向东方会把你带到一个不同的地方，而不是向东转，然后去一个方块。
右侧菜单选择围绕 X、Y 和 Z 轴旋转的顺序。某些顺序可以使字符联合转换更易于使用，具体取决于字符。
翻译
沿 XYZ 轴平移。
旋转
绕 XYZ 轴旋转的程度。
规模
关于 XYZ 轴的非均匀缩放。
支点
对象的本地原点。另请参阅[设置枢轴点](https://www.sidefx.com/docs/houdini/basics/objects.html) 。
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
在对象上启用约束网络。
约束
通往 CHOP 约束网络的路径。另请参阅[创建约束](https://www.sidefx.com/docs/houdini/character/constraints.html)。
提示
您可以使用约束下拉按钮激活约束功能区工具之一。如果这样做，则第一个选取会话将由参数面板中选定的节点自动填充。
注意
对象节点上的 Lookat 和 Follow Path 参数已弃用，取而代之的是[看](https://www.sidefx.com/docs/houdini/shelf/constraintlookat.html "Makes an object point at another object.")和[跟踪路径](https://www.sidefx.com/docs/houdini/shelf/constraintpath.html "Animates an object along a curve.")约束。这些参数目前仅处于隐藏状态，如果您确实编辑了节点的参数界面，则可以设置其可见性。
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
缓存对象转换一旦 Houdini 计算出来。这对于计算世界空间位置昂贵的对象（例如[粘性对象](https://www.sidefx.com/docs/houdini/nodes/obj/sticky.html）和长父级链末端的对象（例如[骨骼](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html "The Bone Object is used to create hierarchies of limb-like objects
tha).默认情况下，对于粘滞和骨骼对象，此选项处于打开状态。
有关如何控制对象转换缓存的大小的信息，请参阅[“Houdini 首选项”](https://www.sidefx.com/docs/houdini/ref/windows/mainprefs.html#objcache)窗口的 OBJ 缓存部分。
另请参见
[mcacclaim Utility](https://www.sidefx.com/docs/houdini/ref/utils/mcacclaim.html)