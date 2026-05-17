---
type: concept
title: Microphone
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "d6c41f8a3188"
---
麦克风对象为SpatialAudio CHOP指定一个聆听点。
## Parameters
麦克风对象指定空间音频 CHOP 的侦听点。一个 SpatialAudio CHOP 可以使用多个麦克风来创建立体声或环绕声，并具有多普勒效应、远距离音量损失、障碍物干扰、大气过滤和位置音频等特殊效果。
要设置空间音频场景，应使用一个或多个 Sound 对象来发出声音。至少需要一个麦克风来捕获声音。需要 SpatialAudio CHOP 来渲染声音。如果使用任何障碍物或滤波器，则至少需要一个声学CHOP来设计频谱滤波器。
四处移动声音和麦克风对象会产生音高和音量的变化，尤其是当任一对象都是定向的时。设置定向麦克风或声音对象与设置定向灯非常相似。
### 参数
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
在对象上启用**约束网络**。
约束
通往 CHOP **约束网络的**路径。另请参阅[创建约束](https://www.sidefx.com/docs/houdini/character/constraints.html)。
提示
您可以使用约束下拉按钮激活约束功能区工具之一。如果这样做，则第一个选取会话将由参数面板中选定的节点自动填充。
注意
对象节点上的 Lookat 和 Follow Path 参数已弃用，取而代之的是[看](https://www.sidefx.com/docs/houdini/shelf/constraintlookat.html "Makes an object point at another object.")和[跟踪路径](https://www.sidefx.com/docs/houdini/shelf/constraintpath.html "Animates an object along a curve.")约束。这些参数目前仅处于隐藏状态，如果您确实编辑了节点的参数界面，则可以设置其可见性。
### 麦克风
麦克风处于活动状态
打开或关闭麦克风（如果大于零）。
敏感性
麦克风的音量增益。
定向
如果关闭，则麦克风是非定向的，并且平等地接受来自所有方向的声音。否则，麦克风是定向的，并指向负 Z 轴。记录锥体和外锥体参数决定了记录的场。录音锥内的任何声音都有一个由灵敏度定义的增益（上图）。外锥体外的任何声音都有一个由外灵敏度参数定义的增益（见下文）。录音锥体和外锥体之间的任何声音都有一个增益，该增益在两个灵敏度之间插值。
记录锥体
定义记录圆锥的角度，从 Z 轴到圆锥边缘测量。将此设置为 180 度将生成非定向麦克风。
外锥体
定义从记录圆锥到外圆锥的下降区域。如果录制锥体设置为 60 度，而外锥体设置为 20 度，则来自 Z 轴外 80 度以上的任何声音都将落在外锥体之外。
下车
设置从记录锥体灵敏度到外部灵敏度的下降的插值类型。
掉落率
增加或减少下降率。
外部灵敏度
应用于来自外锥体外部的任何声音的增益。
过滤器切碎
指定定义话筒频率响应的可选 CHOP。滤波器应是一个名为“吸收”的通道，由声学CHOP设计。
### 杂项
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
有关如何控制对象转换缓存的大小的信息，请参阅[“Houdini 首选项”](https://www.sidefx.com/docs/houdini/ref/windows/mainprefs.html#objcache)窗口的 **OBJ 缓存**部分。