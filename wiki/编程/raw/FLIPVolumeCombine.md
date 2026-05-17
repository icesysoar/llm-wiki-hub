---
type: concept
title: FLIPVolumeCombine
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "0ea0e8c15663"
---




# Geometry node
https://www.sidefx.com/docs/houdini/nodes/sop/flipvolumecombine
### FLIPVolumeCombine ^Geometry
#### ![](https://www.sidefx.com/docs/houdini/icons/SOP/volumemerge.svg)FLIP 体积合并
### **核心功能**

- **场混合**：合并高低分辨率模拟的表面场（`surface`）、速度场（`vel`）、压力场（`pressure`）。
    
- **过渡区域控制**：通过容器掩模定义混合范围，支持自定义混合曲线。
    
- **表面外推**：填补高低分辨率表面之间的间隙，消除视觉伪影。
    

### **参数详解**

#### **场分辨率设置**

|参数|说明|
|---|---|
|**Surface Resolution**|合并表面场分辨率：  <br>- **Low Resolution**：使用低分辨率场。  <br>- **High Resolution**：使用高分辨率场。|
|**Activate to Low-Resolution Half Width**|扩展高分辨率场的窄带范围，避免混合伪影。|
|**Velocity/Pressure Resolution**|速度场和压力场的分辨率选择（同上）。|

#### **混合控制**

|参数|说明|
|---|---|
|**Blend Range**|混合区域范围（负值在容器内，`0` 对应容器边界）。|
|**Blend Ramp**|自定义混合曲线（默认线性映射）。|

#### **表面外推**

|参数|说明|
|---|---|
|**Enable Extrapolate Surfaces**|启用表面外推（填补高低分辨率场间的间隙）。|
|**Mode**|外推模式：  <br>- **Manual (fast)**：手动扩展窄带（内存占用高）。  <br>- **Automatic (slow)**：自动构建掩模外推（更精确）。|
|**World Space Distance**|手动模式下外推的世界空间距离。|

#### **平滑接缝**

|参数|说明|
|---|---|
|**Smooth Inner Seams**|启用混合区域平滑（消除接缝）。|
|**Smoothing Band**|平滑操作的半宽范围（从容器表面向内延伸）。|
|**Filter Radius**|平滑滤波半径（世界空间单位）。|
|**Iterations**|平滑迭代次数（值越高效果越强）。|

### **相关节点**

- FLIP Solver（FLIP 求解器）
    

通过 **FLIP Combine** 节点，可无缝整合不同精度的模拟结果，优化资源利用并提升视觉质量，适用于大规模流体特效制作！