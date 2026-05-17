---
type: concept
title: Agent Character Unpack
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "8d367b758f55"
---
从代理基元中提取其余的几何体、骨架和动画。
## Parameters
此 SOP 将[代理基元](https://www.sidefx.com/docs/houdini/crowds/agents.html "About agents, the moving actors that make up a crowd simulation.")解压缩到 SOP 装备中，并且是基于更通用的更高级别包装器[代理解压缩操作程序](https://www.sidefx.com/docs/houdini/nodes/sop/agentunpack.html "Extracts geometry from agent primitives.").
第一个输出包含角色的静止几何图形，该几何体使用代理的[当前图层](https://www.sidefx.com/docs/houdini/crowds/agents.html#currentlayers)进行解包。对于图层中的任何变形形状绑定，将解压缩形状的静止几何图形。对于图层中的任何静态形状绑定，该形状将作为压缩基元输出，并且基元点的属性将为形状附加到的关节分配权重 1。这将僵硬地变形形状，当`boneCapture`[接头变形SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html "Perform skin deformation from KineFX skeleton animation.")将应用。
第二个输出提供代理的捕获姿势。骨架由每个关节的一个点和每个子关节与其父关节之间的两点多边形表示。
第三个输出以与捕获姿势相同的几何表示形式提供代理的当前姿势，并且与时间相关。此输出等效于生成的几何图形[代理动画解压缩](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--agentanimationunpack.html "Extracts animation or MotionClips from an agent primitive.").
### 参数
### 解压
群
指定要解压缩的输入代理。
组类型
**组**指定的组的类型。
从组猜
根据组的内容推断指定的**组**类型。
点
从指定的点组中解压缩代理。
原
从指定的基元组中解压缩代理。
几何学
形状过滤器
指定在解压缩代理时要包括的形状名称的列表或模式。默认行为是从代理的当前图层（按**图层**模式过滤）输出所有形状。
形状名称属性
创建记录源代理形状名称的基元字符串属性。
传输属性
指定要从代理基元传输到解压缩外观几何图形的属性列表或模式。
传输组
指定要从代理基元传输到解包外观几何图形的组的列表或阵列。
骨架
传输属性
指定要从代理基元传输到骨架几何图形的属性列表或模式。
传输组
指定要从代理基元传输到骨架几何图形的组的列表或阵列。
剪辑名称
指定动画剪辑的名称。这将保存到详细信息属性中。`clipinfo`
钻机颜色
用于骨架接头的点颜色。
### 定时
方法
用于指定动画参数的时间单位。
按时间
以下计时参数将以秒为单位指定。
按帧
下面的计时参数将在帧中指定。
时间
从中导入动画姿势的时间（以秒为单位）。
动画开始
_源_动画开始的时间，较早的姿势将被夹紧到此值。禁用后，此值将从源动画（如果可用）中获取。如果没有范围信息，则将使用 Houdini 的场景开始 （） 值。`$TSTART`
请注意，禁用此功能时不会执行钳位操作。
动画结束
_源_动画结束的时间，以后的姿势将被夹紧到此值。禁用后，此值将从源动画（如果可用）中获取。如果没有范围信息，则将使用 Houdini 的场景结束 （） 值。`$TEND`
请注意，禁用此功能时不会执行钳位操作。
播放开始
指定动画开始播放的目标时间。禁用时，将使用 Houdini 的场景开始 （） 值。`$TSTART`
框架
要从中导入动画姿势的编号。
动画开始
_源_动画开始的帧，较早的姿势将被夹紧到此值。禁用后，此值将从源动画（如果可用）中获取。如果没有范围信息，则将使用 Houdini 的场景开始 （） 值。`$FSTART`
请注意，禁用此功能时不会执行钳位操作。
动画结束
_源_动画结束的帧，以后的姿势将被夹紧到此值。禁用后，此值将从源动画（如果可用）中获取。如果没有范围信息，则将使用 Houdini 的场景结束 （） 值。`$FEND`
请注意，禁用此功能时不会执行钳位操作。
播放开始
指定动画将开始播放的目标帧。禁用时，将使用 Houdini 的场景开始 （） 值。`$FSTART`
速度
设置动画播放的速度因子。这将在从动画开始/结束参数执行任何钳位后应用。
### 属性
剪辑信息
此详细信息属性记录当前动画范围和采样率，以及导入动画的原始动画范围和采样率。
### 输入
代理
要解压缩的代理原语。
### 输出
静止几何形状
角色的静止几何图形。
通常，这将包含具有点捕获属性的面，可以使用`boneCapture`[接头变形SOP](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html "Perform skin deformation from KineFX skeleton animation.").
捕捉姿势
角色的捕获姿势。
骨架中的每个关节都由一个点表示，其中 and （） 属性包含关节的变换。点的属性包含关节的名称，并且在使蒙皮变形时与其余几何属性中的捕获路径匹配。骨架的层次结构由每个子关节的点与其父关节之间的两点多边形表示。`P``transform``matrix3``name``boneCapture
动画姿势
角色的动画姿势，其表示方式与**捕获姿势**相同。
See also
Agent Animation Unpack
USD Character Import
FBXCharacterImport
Agent Unpack