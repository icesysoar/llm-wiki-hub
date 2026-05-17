---
type: entity
title: FLIP Fluid Simulation
tags:
  - concept
  - houdini
  - fluid
  - simulation
  - flip
  - vfx
status: pending
source_type: user_upload
created: 2025-02-27
content_hash: "3ad9a6d24f10"
---

# FLIP Fluid Simulation

**FLIP（Fluid Implicit Particle，流体隐式粒子）** 是 Houdini 中模拟液体流体的核心方法。它采用粒子-网格混合技术，将欧拉网格和拉格朗日粒子的优势结合，能够高效模拟水、墨水、粘液、岩浆等液体效果。FLIP 是 Houdini 中实现高质量、细节丰富的液体模拟的标准方法，广泛应用于电影和游戏中的流体效果。

## 核心原理

FLIP 混合了两种数值方法：

- **欧拉网格** — 用于计算压力场和速度场，提供稳定的物理求解。
- **拉格朗日粒子** — 用于追踪流体表面和细节，保留高分辨率运动特征。

## 核心工作流

FLIP 流体模拟遵循标准的 SOP→DOP→ROP 三层体系：

1. **发射源创建（SOP 层级）**：使用 geometry-nodes-sop 创建几何体发射源，或将 pop-network 中的粒子作为发射源。
2. **FLIP Solver 模拟（DOP 层级）**：利用 dynamics-nodes-dop 中的 FLIP Solver 执行物理模拟，处理粒子运动、表面张力和碰撞。
3. **表面提取（SOP 层级）**：使用 `particlefluidsurface` 节点从 FLIP 粒子生成多边形表面网格。
4. **渲染输出（ROP 层级）**：使用 mantra（经典）或 karma（现代）渲染器，通过 render-nodes-rop 控制输出。

## 常见 FLIP 节点

Houdini 提供了专门的 FLIP 节点集，用于创建和控制液体模拟：

- FLIP Container：创建 FLIP 模拟容器。
- FLIP Boundary：设置 FLIP 模拟边界。
- FLIP Collide：定义 FLIP 碰撞对象。
- FLIP Solver：执行 FLIP 解算。
- FLIP Source：定义 FLIP 发射源。
- FLIPVolumeCombine：合并 FLIP 体积。

## 知识缺口与实践需求

根据审计结果，当前 Wiki 在 FLIP 流体实践方面存在以下缺口：

1. **完整节点网络搭建**：从发射源设置到 FLIP Solver 配置、再到表面提取和渲染的完整 SOP/DOP 节点连接步骤未提供。
2. **常见效果工作流**：倒水、波浪、粘液等典型场景的节点网络和参数设置尚未覆盖。
3. **渲染材质技巧**：使用 mantra 的 Principled Shader 或 karma 的 MaterialX 制作真实水材质的具体方法未展开。
4. **参数调优指南**：粘度、表面张力、粒子分离度等关键参数的推荐取值及对模拟的影响未给出。

## 质疑问题

- FLIP Fluid Simulation 的前提假设是什么？是否总是成立？
- 在 concept 领域，FLIP Fluid Simulation 的边界条件是什么？有没有反例？
- 如何验证 FLIP Fluid Simulation 的有效性？数据/结论的来源是什么？

## 建议的更新方向

- 将页面内容从概念性描述升级为包含节点连接图和参数调优的实践指南。
- 补充常见液体效果（倒水、波浪、粘液、墨水）的完整工作流案例。
- 整合官方教程链接（如"FLIP 流体模拟入门"）与推荐学习资源。