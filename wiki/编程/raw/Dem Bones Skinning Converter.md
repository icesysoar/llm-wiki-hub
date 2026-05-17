---
type: concept
title: Dem Bones Skinning Converter
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "a47d7eb96bb7"
---
将任何不变的拓扑变形网格序列转换为基于骨骼的动画。
### Parameters
在此页面上
[参数](https://www.sidefx.com/docs/houdini/nodes/sop/dembones_skinningconverter#parameters)
[输入](https://www.sidefx.com/docs/houdini/nodes/sop/dembones_skinningconverter#inputs)
[输出](https://www.sidefx.com/docs/houdini/nodes/sop/dembones_skinningconverter#outputs)
因为
19.5
Dem Bones - © Electronic Arts 2019
此节点是_使用刚性骨骼进行平滑_蒙皮分解的实现，这是一种自动算法，可从一组示例网格中提取具有骨骼变换的线性混合蒙皮 （LBS）。
蒙皮分解可用于各种任务：
转换任何动画网格序列。例如，几何缓存到 LBS，然后可以在流行的游戏引擎中播放。
从形状和骨骼姿势求解皮肤重量。例如，将混合形状转换为 LBS。
通过提供蒙皮权重来解决网格动画的骨骼变换。
注意
此节点只能处理干净的输入数据。例如，只有一块连接的几何图形。如果此节点需要很长时间来处理，那么它可能在尝试寻找解决方案时卡住了。要解决此问题，请将[最小非零权重](https://www.sidefx.com/docs/houdini/nodes/sop/dembones_skinningconverter.html#nnz)参数设置为 1。
## 参数
保存到磁盘
启动外观分解并将结果导出到磁盘。
输出文件
要将 FBX 输出保存到的路径。
创建中间目录
在 FBX 输出路径中创建目录（如果它们不存在）。
转换设置
帧范围
定义用于外观分解的帧范围。
绑定姿势帧
指定要用作输出绑定的绑定姿势（静止姿势）的帧。
骨骼
最大骨骼数量
指定可以生成的最大骨骼数。
注意
由于在转换过程中可能会找到更有效的解决方案，因此实际输出可能低于此参数指定的数字。
求解器迭代
全局迭代
指定转换期间要处理的全局迭代次数。用作必须计算的优化数的标量。对于更复杂的场景，请增加**全局迭代**。
容错
该算法在迭代期间跟踪递减的误差，如果减少小于此参数指定的阈值，则递增计数器。这允许算法在 **Patience** 参数指定的迭代次数后未发现改进时提前停止优化。
耐心
指定在未发现增量优于容**错**参数指定的阈值的改进之前提前停止之前要等待的迭代次数。
拆分迭代
指定在初始化时应用的聚类分析更新迭代数。
转换迭代
指定每个全局迭代的骨骼转换更新迭代次数。DemBones 在每次权重更新后执行多次骨转换更新。
软约束
翻译亲和力
激活软约束，强制骨骼平移遵循该骨骼支撑的补丁质心。大于 0 的值将打开软约束，而小于 0 的值将禁用软约束。
对于许多用例，可能需要值 0（无约束）。是否使用更高的值应该取决于数值稳定性以及优化是否可以收敛。
P-范数
指定用于计算修补程序质心的功率。较高的值将使骨骼的质心更接近具有最大权重 （soft-max） 的顶点。
权重
砝码
指定每次骨骼更新后要执行的权重更新次数。1-5 次迭代通常会产生良好的结果。这些迭代非常昂贵。因此，最好增加[全局迭代](https://www.sidefx.com/docs/houdini/nodes/sop/dembones_skinningconverter.html#nlters)，而不是增加**权重交互**的数量。
平滑
控制生成的软约束的权重平滑度。
步长
指定软约束权重上的隐式拉普拉斯平滑的步长。
最小非零权重
指定转换成功所需的每个顶点的非零权重数。
高深
创建根
启用后，更新绑定姿势以将关节重新组合到一个根下。
动画缓存
指定包含输入几何图形的动画网格序列的 Alembic 几何缓存的路径。
绑定 FBX
指定包含输入几何图形的静止姿势的 FBX 文件的路径。
## 输入
动画几何体。这应该是要使用蒙皮分解进行转换的几何图形。
## 输出
导出为 FBX 文件的基于骨骼的动画数据。
参见
[![](https://www.sidefx.com/docs/houdini/icons/SOP/kinefx-jointdeform.svg)关节变形](https://www.sidefx.com/docs/houdini/nodes/sop/kinefx--jointdeform.html)
 [![|50](https://www.sidefx.com/docs/houdini/icons/CROWDS/agent.svg) 代理](https://www.sidefx.com/docs/houdini/nodes/sop/agent.html)
[代理原语](https://www.sidefx.com/docs/houdini/crowds/agents.html)
[将动画和角色数据引入 KineFX](https://www.sidefx.com/docs/houdini/character/kinefx/importcharacters.html)
[从 KineFX 获取动画和角色数据](https://www.sidefx.com/docs/houdini/character/kinefx/exportcharacters.html)