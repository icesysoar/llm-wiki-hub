---
type: entity
title: Pyro FX
tags:
  - houdini
  - flame
  - simulation
  - 火焰
  - 烟雾
  - 体积模拟
  - 求解器
  - fx
  - fire
  - smoke
  - explosion
status: pending
source_type: user_upload
created: 2026-05-01
content_hash: "28964e4334a9"
---

# Pyro FX

**Pyro FX** 是 Side Effects Software 在其旗舰产品 Houdini 中提供的一套专业求解器工具集，专门用于生成和模拟**火焰、烟雾、爆炸**等体积特效。它基于 VDB 体积数据结构，在动力学网络（DOP）中运行，是连接理论概念（VDB、程序化生成）与具体实践的关键桥梁。

## 核心节点

- **Pyro Source（SOP 层级）** – 从几何体、粒子或体积生成密度、温度、燃料等体积场，作为模拟的发射源输入。通常使用 `popnet` 或基本几何体建立初始区域。
- **Pyro Solver（DOP 层级）** – 核心求解器，处理燃烧、温度、密度等场的演化，控制浮力、冷却、消散、湍流等物理行为。基于 VDB 格式计算烟雾/火焰的流体动力学。
- **Pyro Shader（渲染/材质）** – 专门用于渲染 VDB 体积火焰的着色器，通过调整密度、温度、颜色渐变、黑体辐射等控制最终视觉效果。可与 Mantra、Karma 或第三方渲染器（如 Redshift）配合。
- **Pyro Burial** – 后处理节点，用于模拟燃烧后的残留或增加体积细节，如消散、模糊。

## 典型工作流程

Pyro FX 工作流遵循 Houdini 的标准 SOP → DOP → ROP 三层体系：

1. **创建发射源（SOP）** – 在 SOP 网络中建立几何体（如球体、平面）或使用 `popnet` 生成粒子，作为火焰的初始区域。
2. **设置体积属性** – 使用 **Pyro Source** 节点，将发射源转换为密度、温度、燃料等体积场。
3. **模拟演化（DOP）** – 进入 DOP 网络，连接 **Pyro Solver** 并调整参数控制火焰形态。
4. **后处理细节（可选）** – 使用 **Pyro Burial** 增加燃烧残留、体积细节或消散效果。
5. **渲染输出（ROP）** – 使用 Mantra 或 Karma 配合 **Pyro Shader** 渲染体积输出。

## 关键参数

- **浮力（Buoyancy）** – 控制火焰上升速度。
- **冷却（Cooling）** – 决定火焰消散速率。
- **湍流（Turbulence）** – 增加不规则性和动态细节。
- **消散（Dissipation）** – 控制火焰消失的时间。

## 知识缺口与实践需求

根据当前 Wiki 资料的审计，Pyro FX 在实践指导方面存在以下缺口：

1. **缺少逐节点连接指南** – 从 Pyro Source 到 Pyro Solver 再到渲染的完整 SOP → DOP → ROP 网络搭建步骤未提供。
2. **参数调优指南缺失** – 关键参数（浮力、冷却、湍流）的推荐取值范围和视觉效果影响未给出。
3. **渲染配置未展开** – 如何通过 Mantra 或 Karma 的 Pyro Shader 渲染火焰体积缺少详细说明。

## 建议的更新方向

- 补充典型场景的节点网络图（如火焰、烟雾、爆炸等）。
- 为关键参数提供调优策略与推荐预设值。
- 整合 SideFX 官方教程与社区案例资源。


## 核心结论

- **Pyro FX** 是 Side Effects Software 在其旗舰产品 Houdini 中提供的一套专业求解器工具集，专门用于生成和模拟**火焰、烟雾、爆炸**等体积特效。
- 它基于 VDB 体积数据结构，在动力学网络（DOP）中运行，是连接理论概念（VDB、程序化生成）与具体实践的关键桥梁。
- **Pyro Burial** – 后处理节点，用于模拟燃烧后的残留或增加体积细节，如消散、模糊。



## 质疑问题

- Pyro FX 的前提假设是什么？是否总是成立？
- 在 houdini 领域，Pyro FX 的边界条件是什么？有没有反例？
- 如何验证 Pyro FX 的有效性？数据/结论的来源是什么？


## 相关资源

- Houdini 官方文档：Pyro FX 手册章节
- 推荐教程：SideFX 官方教程系列《Pyro FX 入门》；搜索 "Houdini Pyro FX 火焰模拟"