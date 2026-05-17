---
type: entity
title: POP Network (粒子系统网络)
tags:
  - houdini
  - particles
  - dynamics
  - simulation
status: pending
source_type: user_upload
created: 2026-05-01
content_hash: "8e4e000cedbf"
---

# POP Network (粒子系统网络)

**POP Network**（Particle Operation Network，粒子操作网络）是 Houdini 中位于 DOP 上下文内，用于创建和模拟大量粒子系统的节点网络。它通过 `popnet` 节点封装，是许多特效的基础，包括流体模拟、烟雾、火花、魔法粒子等。

## 核心功能与用途

- **粒子发射**：通过 Pop Source 节点从几何体或区域发射粒子。
- **动力学控制**：应用力场（重力、风力、湍流）并处理碰撞检测。
- **生命周期管理**：控制粒子的出生、死亡、速度与旋转属性。
- **作为 FLIP 流体模拟的基础**：FLIP 求解器内部依赖 POP Network 进行粒子层面的计算（如粒子平流）；学习 POP Network 是掌握 FLIP 流体的前置技能。

## 关键节点

| 节点 | 功能 |
|------|------|
| `popnet` | 容器节点，包含整个 POP 网络 |
| `popsource` | 定义粒子发射源（几何体或区域） |
| `popforce` | 添加力场（重力、风力、噪声等） |
| `popcollision` | 处理粒子与几何体的碰撞 |
| `popdrag` | 添加空气阻力 |
| `popsolver` | 粒子求解器，控制迭代与约束 |

## 在流体模拟中的应用

在 flip-fluid-simulation 工作流中，POP Network 常作为**粒子发射源**使用：
- 粒子从发射器几何体（通过 geometry-nodes-sop 创建）发射。
- 发射的粒子被送入 FLIP Solver 进行流体动力学计算。

FLIP 流体求解器内部依赖 POP Network 进行粒子层面的计算（如粒子平流）。掌握 POP Network 是学习 FLIP 流体的基础。


## 核心结论

- **POP Network**（Particle Operation Network，粒子操作网络）是 Houdini 中位于 DOP 上下文内，用于创建和模拟大量粒子系统的节点网络。
- 它通过 `popnet` 节点封装，是许多特效的基础，包括流体模拟、烟雾、火花、魔法粒子等。
- **粒子发射**：通过 Pop Source 节点从几何体或区域发射粒子。



## 质疑问题

- POP Network (粒子系统网络) 的前提假设是什么？是否总是成立？
- 在 houdini 领域，POP Network (粒子系统网络) 的边界条件是什么？有没有反例？
- 如何验证 POP Network (粒子系统网络) 的有效性？数据/结论的来源是什么？


## 关键参数与知识缺口

根据当前 Wiki 审计结果，POP Network 的部分关键参数尚未详细覆盖，特别是其推荐取值范围及对流体模拟结果的影响：

1. **发射速率**：控制每帧发射的粒子数量，直接影响流体模拟的分辨率和细节。
2. **速度与方向**：决定粒子初始运动状态，影响流体展开形态。
3. **生命周期**：粒子存活时间，影响模拟的持续性和稳定性。

这些参数的具体配置是进一步提升流体模拟效果的关键。

 flip-fluid-simulation | dynamics-nodes-dop | node-based-workflow | geometry-nodes-sop | pyro-fx