---
type: concept
title: Particle Fluid Mask
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "c5799c4de45c"
---
从粒子流体模拟生成体积掩码。
### Parameters

在此页面上
[参数](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidmask#parameters)
[输入](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidmask#inputs)
[输出](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidmask#outputs)
因为
16.0
将粒子流体模拟中的粒子和/或速度场连接到此节点的**粒子和**体积输入，以根据几个不同的标准生成体积掩码。
此外，可以将一个或多个海洋频谱层连接到该节点的第三个输入，并且生成的掩码可以合成到现有的频谱掩码中，并对频谱应用可选的频率滤波。
## 参数
## 面具
颗粒分离
流体模拟中两个粒子之间的距离。此参数通常应引用[翻转对象](https://www.sidefx.com/docs/houdini/nodes/dop/flipobject.html)的输入模拟。
分辨率比例
相对于输入粒子和/或速度场缩放输出掩码体积。此参数通常可以设置为低于 1，因为通常使用 **Filter** 参数模糊遮罩，并且非常高分辨率的蒙版通常不值得处理费用。
仅使用输入卷
忽略粒子输入并仅从输入速度体积创建遮罩。通常，此操作比使用粒子更快，对于预览遮罩值非常有用;但是，它将不太准确，并且可能会错过仅存在少量粒子且源 FLIP 仿真中未定义速度场的区域。
频谱模板类型
控制掩模是否应与插入第二个输入的任何海洋光谱相结合，如果是，是否应抑制或助长海浪。
### 条件
速度范围
生成一个蒙版，其中速度低于最小速度的表面积不被遮罩，而高于最大速度的区域将获得完全遮罩。
涡度范围
生成一个蒙版，其中涡度低于最小速度的表面积不会蒙版，而高于最大涡度的区域会得到完全遮罩。
碰撞偏移
在连接到第二个输入的任何碰撞对象或体积的指定世界空间偏移量内生成掩码。
高度范围
生成一个蒙版，其中低于最小高度的区域不被遮罩，而高于最大高度的区域将获得完全遮罩。高度是相对于指定**平面**测量的。
条件组合
用于从**“条件**”选项卡组合多个筛选器掩码的操作。
### 地区
使用边界框
当蒙版到达指定边界框的边缘时，根据衰减**形状**和**衰减距离**淡出蒙版。
大小
边界框的大小。
中心
边界框的中心。
衰减形状
蒙版在接近定界框边缘时应脱落的形状。如果为使用[颗粒流体表面SOP](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface.html "Generates a surface around the particles from a particle fluid simulation.")启用拼合几何图形后，此值应与**拼合****形状**匹配。
衰减距离
遮罩在接近定界框边缘时应衰减的距离。如果为使用[颗粒流体表面SOP](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface.html "Generates a surface around the particles from a particle fluid simulation.")启用展平几何图形后，此值应与**展平**距离**匹配。**
飞机
测量高度和发生衰减的平面。
反转边界框
反转由指定边界框创建的蒙版。
区域合并
用于将“**区域**”选项卡中的掩码与**“条件**”中的掩码组合在一起的操作。
### 映射
滤波器
要应用于蒙版的平滑类型。
使用世界空间半径单位
在世界空间而不是体素单位中指定**滤镜半径**。
体素半径
滤镜半径的大小（以体素为单位）。
过滤器半径
以世界单位表示的过滤器半径的大小。
迭 代
要执行的平滑迭代次数。
反相遮罩
反转输出掩码。
重新映射蒙版
根据**重映射渐变重新映射**输出掩码。
重映射坡道
用于重新映射掩码输出的斜坡。
## 光谱
### 波幅
过滤器高于分辨率
抑制高于此分辨率的海洋光谱中存在的任何波浪。例如，如果设置为 8，则此频谱的频率不会高于分辨率为 8 的频谱。在对频谱进行分层并将遮罩和噪声仅应用于最高频率时，此参数与**“低于分辨率的滤波器**”一起非常有用。
过滤器低于分辨率
抑制任何仅存在于低于此分辨率的海洋光谱中的波浪。例如，如果设置为 8，则此频谱将仅包含高于分辨率为 8 的频谱的频率。在对频谱进行分层并将遮罩和噪声仅应用于最高频率时，此参数与**“分辨率以上滤波器**”一起非常有用。
波长以上的滤光片
阻尼波长超过此值的任何波。
波长以下滤光片
阻尼波长比此值短的任何波。
去除非光谱波
删除任何非光谱实例波，通常是由[海浪标准作业程序](https://www.sidefx.com/docs/houdini/nodes/sop/oceanwaves.html "Instances individual waveforms onto input points and generated points.").由于这些波通常是低频的，因此此选项与“**低于分辨率的滤波器**”结合使用时非常有用，可以从输入频谱中删除所有低频。
## 输入
颗粒和体积
粒子几何和/或速度场，通常来自 FLIP 模拟。
碰撞对象和体积
要从流体表面减去的几何体和 SDF 体积。
海洋光谱
来自海洋光谱SOP的一个或多个海洋光谱层。
## 输出
面具
掩码卷。
海洋光谱
输入海洋光谱层可能被过滤和/或与生成的掩模合成。
参见
[![](https://www.sidefx.com/docs/houdini/icons/SOP/particlefluidsurface.svg)颗粒流体表面](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface.html)
[![](https://www.sidefx.com/docs/houdini/icons/SHELF/wave.svg)海洋光谱](https://www.sidefx.com/docs/houdini/nodes/sop/oceanspectrum.html)
[![](https://www.sidefx.com/docs/houdini/icons/DOP/flipsolver.svg)翻转求解器](https://www.sidefx.com/docs/houdini/nodes/dop/flipsolver.html)
[![](https://www.sidefx.com/docs/houdini/icons/SOP/fluidcompress.svg)流体压缩](https://www.sidefx.com/docs/houdini/nodes/sop/fluidcompress.html)