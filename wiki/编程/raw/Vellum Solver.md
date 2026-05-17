---
type: concept
title: Vellum Solver
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "87f377083e02"
---
运行动态布料仿真。
### Parameters
牛皮纸求解器是围绕DOP网络的包装器，可简化牛皮套求解的运行。
与大多数Vellum SOP一样，它是一个三输入SOP。第一个输入是要求解的表面几何图形。第二个输入应具有与第一个输入相同的点数，并且与点号或属性具有点对点对应关系。第二个输入还应具有描述约束关系的特殊基元。约束是定义和控制点之间的连通性的方式，可以使用牛皮纸约束 SOP 创建。请注意，网络选项卡菜单具有多个宏来引用常见设置，例如牛皮纸配置布。第三个输入提供碰撞几何图形。碰撞几何图形应具有帧到帧的匹配拓扑。此外，还可以识别某些类型的填充几何图形。`id`
您可以深入求解器以添加 DOP 节点以应用特种部队。您还可以使用[牛皮套约束属性](https://www.sidefx.com/docs/houdini/nodes/dop/vellumconstraintproperty.html "Modifies common Vellum constraint properties during a Vellum solve.")DOP 用于在使用这些内部节点进行求解期间调整约束属性。
如果使用，则第三个输入的对象可以称为 ，生成的接地层可以称为 。`collisionignore``external``groundplane`
## 参数
复位模拟
清除整个模拟缓存。
起始帧
Houdini播放栏上的哪个帧，模拟应该在哪个帧开始。
## 求解
时间尺度
缩放牛皮纸求解的有效时间。这可以用来创建类似子弹时间的效果，其中Vellum求解器的物理特性以与Houdini游戏栏不同的速率运行。值为 2 将导致布料下落的速度快一倍，而 0.1 将导致布料下落速度减慢到十分之一。
子步骤
每个帧将被分解为此数量的子步骤。快速移动的碰撞或突然的力需要额外的子步骤。
默认子步骤可能非常激进，通常如果Vellum求解器的弹性太大，则将子步骤提高到2或5是一个很好的开始。
约束迭代
在每个子步骤中，约束强制操作将采用此数量的传递。僵硬的约束可能需要更多的迭代才能收敛。一个好的起点是几何图形的直径 - 最远点之间的边数。
平滑迭代
默认约束迭代使用快速收敛的高斯-塞德尔方法。但是，如果由于刚度太高或不可能的配置而未完全收敛，则会将错误保留为外观不佳的三角形。平滑迭代使用雅可比方法，该方法收敛速度较慢，但错误以更吸引人的方式分散开来。默认值 10 次传递有助于消除错误，但如果总体约束迭代非常高，则可能需要增加错误。
### 碰撞
启用冲突
控制是否执行任何碰撞检测。
自碰撞
控制是否检测到自碰撞。
地平面
将接地层添加到模拟中。接地平面将使用蓝色网格进行可视化。
地面位置
地平面中心的位置。
碰撞刀路
要执行的碰撞检测传递数。这些在约束迭代之间交错。由于碰撞是昂贵的，因此最好将其最小化。但是，频繁的交错有助于避免帐篷极化效应，因为小型碰撞体正在与无拉伸约束作斗争。在实践中，我们发现10在大多数情况下是正确的，子步骤通常是提高质量的更好解决方案。
碰撞后刀路
执行所有约束后，将完成最后一轮碰撞检测。碰撞通常是最明显的故障模式，如果下一帧可以从不相交的几何图形开始，则这是理想的选择。因此，最后的清理通道可以满足这些要求。我们发现“堆叠层数+ 2”是这个数字的一个很好的估计。这允许底层碰撞体的效果完全波及堆叠层。
波兰通票
在任何碰撞通道中，任何碰撞对都可能无法完全解决。此数量的附加碰撞体对刀路将一直运行，直到它们被解析为止。由于这些仅在活动碰撞体上执行（并且没有进行新的碰撞搜索），因此这非常便宜。
层冲击
整数点属性用于将点标记为属于不同的布层。数字越高，表示层越高。在碰撞评估期间，层冲击将使较低层重很多倍，从而确保较高层将移开。其余的动力学不受此影响，并且无论两者之间的层数如何，差异都是固定的。这可以被认为是在模拟市民的单向分层和完全耦合的模拟市民之间切换的一种方式。`layer`
## 力量
重力
施加均匀的重力。
风
均匀的风向。由于这是一种阻力，零风将像静止的空气一样起作用，并减慢一切;大风会把布料的速度提高到那个速度。
风阻
颗粒被风力拖曳的量。这也通过“牛皮套约束”SOP 上指定的切向和法向拖动力进行缩放，以根据方向提供不相等的拖动。
速度阻尼
降低动态速度的更蛮力方法 - 速度直接按此量缩放，导致突然的运动被快速阻尼。
### 摩擦
静态阈值
应用完全摩擦的阈值。当切向速度与法向冲的比值小于此值时，切向速度将通过摩擦完全消除。这大约是斜坡角度的tan（），允许在重力下滑动。
动态缩放
如果静态阈值失败，这将控制在动态摩擦情况下切向速度降低的百分比。
启用外部
应用于与外部几何体碰撞的摩擦力效应的比例因子。
启用自身
适用于与自几何体碰撞的摩擦效应量的比例因子。
地面静态刻度
接地层静摩擦的比例因子。有助于创建无摩擦地面。
地面动态秤
接地层动态摩擦的比例因子。有助于创建无摩擦地面。
## 模拟
缓存已启用
控制是否将模拟缓存到内存中。
高速缓存内存（MB）
内存缓存的最大大小。
模拟类型
模拟的风格。
准静态
仿真获取每个帧，并将它们向前运行给定数量的帧。最终结果成为帧结果。不存在帧间一致性。
动态
每一帧都从前一帧求解，输入仅用于设置第一帧。
准静态框架
准静态模拟要前滚的帧数。
清晰动态
所有动态力和状态（如速度）都将从输出中移除。这允许干净状态的输出从中开始新的模拟，例如在完成悬垂时。
## 高深
目标
模拟网格上的点可以标记为“固定到目标”，以跟随目标动画。默认情况下，此目标是第一个输入。但在某些情况下，您希望定位的动画可能存在于另一个 SOP 节点中，因此可以在此处指定。
目标路径
将模拟点设置为目标动画时要引用的节点的路径。应与模拟点具有一对一的点对应关系，按点数或 .`id`
集成
当按速度对点进行前向积分时，摆动摆动等弯曲运动将被错误预测并被约束投影所阻尼。二阶预测器可恢复更多这种弯曲运动，并在系统中保持更多能量。
在任何情况下，如果检测到碰撞，系统将回退到一阶，以避免过度反弹。
### 次约束刀路
启用辅助约束传递
如果打开此复选框，则指定约束组中的所有约束都将在到其余约束的单独交错传递中求解。
此选项有两个主要用途。首先，有一些代价高昂的约束类型不需要像其他约束那样频繁地求解，因此启用此选项并选择较低的求解频率可以提高性能。例如，布料弯曲限制在具有低弯曲刚度的高分辨率布料上，如丝绸或棉花。您需要确保每次通过都解决距离约束，以便布料不会拉伸。然而，弯曲约束是昂贵的，不需要那么坚固，因为丝绸和棉花具有非常低的抗弯曲性和易皱性。将折弯约束求解为辅助刀路将为您提供强大的性能提升。但是，这种方法对于皮革等较硬的材料并不实用。
第二个用例是导致约束拓扑频繁更改的约束，这会导致求解器对约束求解进行重新排序，从而导致其余约束中的抖动。一个例子是由四面体表示的有机组织，并用滑动针迹约束连接在一起。当滑动导致约束拓扑发生变化时，随着约束求解顺序的变化，四面体可能会略微抖动。通过将约束组设置为并将求解频率增加到 1，将“拼接”约束移动到另一个刀路将保持相同的刚度，但消除由于求解顺序变化而导致的四面体抖动。`@type=ptprim`
约束组
应在交错辅助传递中求解的约束组。此参数接受标准组语法，因此可以包含显式组名和临时组，通常使用类似 的内容指定一个或多个约束类型。这些组中未包含的任何约束都将像往常一样在主传递中求解。`@type==bend`
求解频率
求解次级通过的频率。设置为 1 将像解决主通道一样频繁地求解辅助刀路，而设置为 0.25 将每四次主刀路求解一次（四分之一时间）。
### 多道求解
启用多通道
多通道选项允许重复子步骤，直到满足某些条件。当前条件旨在修复由禁用点导致几何捕获并导致未禁用点生成拉伸而导致的问题。由于碰撞总是先发制人，结果是布料或头发拉伸。如果检测到过多拉伸，则与自动禁用点相邻的点本身将被禁用。然后重复求解步骤，希望这样可以释放几何体。
最大通票数
重复子步骤的最大次数。如果不需要禁用新点，则该过程将立即停止。
禁用拉伸比率
求解步骤结束时的拉伸量，该拉伸量将触发符合禁用条件的点。这是为了检测失败的碰撞何时将Vellum对象拉开。通过使附加点失败，对象通常可以被释放，并产生比继续拉伸更好的结果。
### 运动
最大加速度
可以使用各种加速度限制选项来防止仿真过于急于服从非现实力。否则，这些可能会导致较大的能量峰值。
冲突时回退到一阶积分
如果一个点超过了最大加速度，则假设它表示一个尖锐的，不连续的碰撞，其中二阶预测将是错误的，并添加错误的运动，通常以反弹的形式。在这种情况下，回退到受影响点的一阶积分。
注意
晶粒和流体粒子总是被认为是回退到一阶的，而不仅仅是在碰撞的情况下。虽然这种控制有助于平息模拟并避免杂散颗粒，但它可以降低颗粒和流体运动的整体飞溅性。增加最大加速度可以恢复这种飞溅感。
速度更新中的极限加速度
限制粒子速度由于任何动力学而允许变化的量。这对于防止某些瞬时运动被错误地识别为大质量力非常有用，从而避免了粒子的飞走。
碰撞时限制位移
在碰撞分辨率期间，如果碰撞校正移动的粒子超过加速度量，则限制效果。当模特的一部分卡在布上并以令人惊讶的方式拉动它时，希望会更优雅地失败。
禁用断裂焊缝
当焊缝断裂时，两个新点彼此相邻开始。如果由于触发断裂的任何东西而导致表面没有自然分离，它们可能会触发碰撞检测并被推出，从而在发生断裂时引起爆炸性运动。此选项在点解焊时设置属性，以避免这些自碰撞。但是，请注意，这可能会导致分层布料自我渗透。`disableself`
使压力正常化
对随时间变化的应力计算进行规范化，以便随着 Substeps 参数的变化，计算的值更可预测。
滑动方式
用于在滑动“附加到几何图形”或“拼接点”约束时查找目标几何图形上的下一个最近位置的方法。“最近点”只是选择目标几何图形上最接近投影滑动位置的点。这种方法速度很快，但可能会错误地跳过目标几何图形中的凹面。遍历面从当前目标基元开始，然后依次向外移动，在周围的基元上找到最近的点。这种方法更昂贵，但可以更好地处理凹面目标几何图形。遍历三角形（优化）在改进凹面处理方面与上一个选项类似，但由于它使用专门的三角形距离函数，因此速度可以快很多倍。但是，它只能用于由三角形组成的目标几何图形。
提示
具有四边形的目标几何图形可以使用[分](https://www.sidefx.com/docs/houdini/nodes/sop/divide.html "Divides, smooths, and triangulates polygons.")标准操作规程。
### 睡眠
启用自动睡眠
在足够时间内保持接近静止状态的粒子将通过将其属性设置为 来进入睡眠状态。`stopped``1`
可以使用“固定”可视化效果来可视化哪些点处于休眠状态。
速度阈值
粒子在符合睡眠条件之前需要移动的速度有多慢。它们保持在低于此速度的时间量将累积在属性中。如果它们超过此速度，则 重置为零。`deactivation_time``deactivation_time`
睡眠延迟
粒子在进入睡眠状态之前需要保持在或低于速度阈值的秒数。查看[流行觉醒](https://www.sidefx.com/docs/houdini/nodes/dop/popawaken.html "A POP node that resets the stopped attribute on particles, waking them up.")DOP 用于再次唤醒粒子的方法。
### 谷物碰撞
牛皮纸颗粒使用单独的碰撞通道来处理颗粒之间的碰撞。这些参数控制该行为。它们与[流行谷物](https://www.sidefx.com/docs/houdini/nodes/dop/popgrains.html "A POP node that applies sand grain interaction to particles.")
搜索比例
潜在相交粒子是两个粒子属性的平均值的此缩放距离内的任意粒子。这是一个高估，因为通常在约束迭代期间不会更新碰撞，因此它不仅需要记录当前碰撞的粒子，还需要记录那些由于早期迭代而可能开始碰撞的粒子。`pscale`
这也会影响团块中吸引力的范围。
最大邻居数
在子步骤上搜索潜在碰撞时将考虑的最大粒子数。如果一个点创建了太多粒子，则限制此值对于避免过度计算非常有用。如果启用了 OpenCL 邻居搜索，则忽略此参数，在这种情况下，所有相邻要素都被视为搜索比例确定的半径内。
假设半径均匀
该属性用于确定每个粒子的半径。如果所有粒子都具有相同的半径，则可以使用更快的加速度结构来查找相邻粒子。`pscale`
忽略同一部分中的邻居
忽略对 point 属性具有相同非负值的任何邻居。可以启用此选项以创建仅与其他聚类交互的单独粒度簇，通常与“形状匹配”约束结合使用以提供刚性行为。这`piece`[VDB 到球体](https://www.sidefx.com/docs/houdini/nodes/sop/vdbtospheres.html "Fills a VDB volume with adaptively-sized spheres.")SOP是用重叠颗粒填充对象的好方法。
斥力重量
粒子碰撞力加权程度的加权。值为零将禁用粒子冲突。
使用点属性进行缩放。`repulsionweight`
吸引力重量
颗粒在靠近时自然粘在一起的权重。值为零将禁用粒子聚集。
使用点属性进行缩放。`attractionweight`
### 流体
牛皮套焊油使用密度约束来保持流体不可压缩，并提供粘度和表面张力。任何具有非零属性的粒子都被视为流体。`phase`
粘性
流体的粘度。较低的粘度值有助于保持模拟稳定，而较高的值可以模拟蜂蜜等液体。每个粒子属性可用于将此值相乘以可变粘度。流体颗粒将独立地求解粘度的不同值，从而允许多相流体行为。`viscosity``phase`
表面张力
流体的表面张力。此设置的值越高，可减小流体的曲率，并使其形成斑点。每个粒子属性可用于将此值相乘，以达到可变表面张力。流体颗粒将独立求解不同的表面张力值，从而实现多相流体行为。`surfacetension``phase`
空间排序间隔
牛皮纸流体和颗粒执行许多涉及附近点的计算。通常，通过确保 3D 空间中靠近其他点的点在内存中也彼此靠近，可以大大提高性能。此选项以指定的帧间隔启用粒子的空间排序。
注意
这种排序将更改粒子的点号，因此在模拟之前添加属性会很有用。`id`
### OpenCL
OpenCL Graph Coloring
执行图形着色时，使用快速并行 OpenCL 算法。不幸的是，它可能需要比四面体网格上求解的其余部分多10×的内存。因此，可能适合内存求解的系统将无法成功通过颜色传递。禁用此功能会强制所有图形着色以较慢的顺序方式完成，从而为实际求解保留 RAM。
OpenCL Neighbor Search
使用 OpenCL 执行任何邻居对颗粒和流体的搜索，OpenCL 比 CPU 快，但可以使用更多的 GPU 内存。
## 可视 化
显示冲突
将碰撞对象显示为蓝色线框。
显示参考线几何图形
显示求解器中的其他参考几何图形。
### 几何学
厚度
为几何图形绘制球体。如果几何图形已经求解，则可能已设置属性，如果是，则实际有效厚度以青色绘制。这对于检测原始厚度是否太高很有用 - 如果是这样，模拟将忽略额外的厚度，只会减慢碰撞速度。`pscale``overlap_self`
挤出
通过在相反方向上偏移几何图形而不是使用球体来绘制厚度。
失败的自碰撞
将失败的自碰撞绘制为红色球体。这些点将不再与它们自己的几何图形发生碰撞，也不会有任何边或三角形连接到它们。
失败的外部冲突
将失败的外部碰撞绘制为橙色球体。这些点将不再与外部几何图形发生碰撞，也不会有任何边或三角形连接到它们。
焊缝
绘制哪些点在语义上与属性融合在一起。在求解过程中，可以使用自动中断选项或通过设置为 -1 来破坏这些错误。`weld``weld`
半径刻度
由于厚度可能很小，因此有时会丢失可视化球体。这扩展了可视化领域，使它们易于看到。
### 约束
群
约束通常添加到不同的组。这允许您隔离一个要可视化的特定组。
固定到目标
在固定到目标动画的点上绘制球体。
缝合点
绘制拼接在一起的点的拼接约束。
附着到几何图形
为附着到外部几何图形的点绘制连接约束。
半径
约束参考线不会按对象的厚度进行缩放，因此这为其大小提供了绝对比例。
### 可视化
假色模式
使用蓝色到红色的红外着色可视化约束的属性。
没有
保留原始颜色。
拉伸压力
根据约束施加的最大拉伸力着色。
弯曲应力
颜色根据约束施加的最大弯曲力。
拉伸距离
根据约束的拉伸程度着色。
拉伸比
颜色根据原始拉伸和当前拉伸之间的比率。
折弯角度
根据弯曲角度偏离的度数进行着色。
拉伸塑料流
颜色根据塑料流动的拉伸程度被触发。
弯曲塑料流
颜色根据弯曲塑料流被触发的程度而定。
体积应力
根据约束施加的最大体积力着色。
体积距离
根据体积约束从其静止状态扩展的程度来着色。
体积比
颜色根据体积膨胀与静止状态之间的比率。
显示可视化几何图形
如果模拟几何体除约束外还有假色，则切换。
最大拉伸压力
将最大拉伸应力缩放为最大着色。
最大弯曲应力
将最大折弯应力缩放为最大着色。
最大拉伸距离
将最大拉伸距离设置为最大着色。
最大拉伸比
将最大拉伸比设置为最大着色。
最大弯曲角度
将最大折弯角度设置为最大着色。
最大拉伸塑料流
将最大拉伸塑料流动设置为最大着色。
最大弯曲塑料流量
将最大折弯塑性流动设置为最大着色。
最大体积应力
将最大体积应力缩放为最大着色。
最大体积距离
将最大体积距离缩放为最大着色。
最大体积比
将最大体积比缩放为最大着色。
## 例子
负荷 发射
[动画约束](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/AnimatedConstraints.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何在仿真期间对牛皮套约束属性进行动画处理。
负荷 发射
[动画压力](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/AnimatedPressure.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何使用压力尺度属性创建具有 VellumSolver 压力约束的动画膨胀效应。
负荷 发射
[臂层](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/ArmLayer.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何在模拟多层牛皮纸布时使用 point 属性来改善碰撞。`layer`
负荷 发射
[手臂目标](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/ArmTarget.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何使用“固定到目标”约束来吸引牛皮纸布来捕获/变形的几何图形。
负荷 发射
[碰撞禁用](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/CollisionDisable.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何使用该属性逐点禁用 Vellum 冲突。`disableexternal`
负荷 发射
[碰撞标志](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/CollisionIgnore.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何使用点属性直接控制与碰撞标志和碰撞组的冲突。
负荷 发射
[动态附件](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/DynamicAttach.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何在基于与碰撞对象的接近程度进行牛皮套仿真期间创建“附加到几何体”约束。
负荷 发射
[动态缝隙](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/DynamicStitchGlue.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示了在仿真期间动态拼接或粘合牛皮纸几何体。
负荷 发射
[胶合谷物](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/GluedGrains.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何将牛皮纸颗粒粘合在一起以获得粘性粒子效果。
负荷 发射
[头发方向](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/HairOrient.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例显示了在标准“整理”工具之外使用时，更新进入牛皮纸求解器的头发导轨方向的最有效和最稳定的方法。
负荷 发射
[解决方案目标](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/ResolutionTarget.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例显示了如何将高分辨率牛皮纸布模拟与以前的低分辨率模拟进行定位，以保持整体运动，同时仍获得细纹。
负荷 发射
[简单韦尔德](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/SimpleWeld.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示了使用牛皮套求解器撕裂布料的简单断裂焊缝。
负荷 发射
[刚度滴落](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/StiffnessDropoff.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何使用刚度下降参数创建软释放 Pin 约束。
负荷 发射
[四面体纤维](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/TetrahedralFiber.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示了用于模拟收缩软体的四面体纤维约束。
负荷 发射
[可变摩擦](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/VaryingFriction.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何在牛皮纸布模拟中使用点属性来获取不同的摩擦力。
负荷 发射
[牛皮线槽穿插](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/VellumFluidClothInteraction.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何创建与牛皮纸布交互的牛皮纸流体。
负荷 发射
[VellumFluidCrownSplash](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/VellumFluidCrownSplash.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
这个牛皮纸流体示例演示了如何从落入水池中的水滴中产生典型的冠部飞溅。
负荷 发射
[VellumFluidFluidInteraction](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/VellumFluidFluidInteraction.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何创建两种具有不同粘度和表面张力设置（例如水和油）的相互作用的牛皮套浆。
负荷 发射
[VellumFluidGrainsInteraction](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/VellumFluidGrainsInteraction.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何创建与牛皮纸颗粒相互作用的牛皮纸流体。请确保在 Vellum 求解器 DOP 节点中关闭高级 ▸ OpenCL 邻居搜索。这对于防止模拟消失粒子是必要的。
负荷 发射
[VellumFluidPhaseAttribute](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumsolver/VellumFluidPhaseAttribute.html)[牛皮纸求解器](https://www.sidefx.com/docs/houdini/nodes/sop/vellumsolver.html)几何节点的示例
此示例演示如何通过“相位”属性创建两种具有不同粘度和表面张力设置的相互作用的牛皮套浆。
另请参见
!Vellum Drape#Vellum Drape Geometry
!Vellum Constraints#Vellum Constraints Geometry
!VellumConfigureGrain#Vellum Configure Grain Geometry
!Vellum IO#Vellum IO Geometry