---
type: concept
title: FLIP Source
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "3af48fcc7658"
---




# Geometry node
https://www.sidefx.com/docs/houdini/nodes/sop/flipsource.html
### FLIP Source^Geometry
#### ![](https://www.sidefx.com/docs/houdini/icons/SHELF/fluid_source.svg)FLIP来源
### **核心功能**

- **体积生成**：将几何体转换为有符号距离场（SDF）或雾体积（Fog VDB）。
    
- **粒子生成**：在几何体内按间距生成粒子，支持抖动和过采样。
    
- **属性配置**：为粒子添加速度、静止位置（`rest`）等属性。
    

### **输入与输出**

|**端口**|**说明**|
|---|---|
|**Geometry to Source From**|输入几何体（转换为体积）。|
|**Output**|输出体积（VDB）及粒子（若启用 **Create Particles**）。|

### **相关节点**

- [Volume Source DOP](https://www.sidefx.com/docs/houdini/nodes/dop/volumesource.html)（体积源）
    

通过 **FLIP Source** 节点，可快速构建流体发射器或吸收区域，精确控制粒子分布与属性，适用于复杂流体模拟场景！