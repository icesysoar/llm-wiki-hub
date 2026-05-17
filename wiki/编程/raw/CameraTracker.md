---
type: concept
title: CameraTracker
tags: []
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "dbb708df2b91"
---


# CameraTracker（相机跟踪器）
CameraTracker（NukeX 和 Nuke Studio 专用）是一个用于相机跟踪或匹配运动的集成工具，它允许您创建一个虚拟相机，其运动与您原始相机的运动相匹配。相机跟踪通常用于将虚拟的3D 元素合成到2D 视频镜头中，以实现逼真的视觉效果。以下是 CameraTracker 节点的主要方面：

**用途**：

- 创建虚拟相机：CameraTracker通过分析输入镜头的运动，生成一个虚拟相机，其运动与实际相机一致。
- 2D到3D：它将2D视频转换为3D空间，使您能够在2D场景中添加虚拟3D对象。

**如何使用**：

1. **连接输入**：将要跟踪相机运动的源序列连接到“Source”输入。您还可以使用可选的遮罩输入来限制特征跟踪的区域。
2. **配置参数**：在CameraTracker节点的各个选项卡中，配置帧范围、相机参数、特征检测、自动跟踪和其他设置。
3. **执行跟踪和求解**：使用“Track”和“Solve”按钮开始自动跟踪和求解相机运动。
4. **调整参数**：如果需要，可以调整相机跟踪的各个参数以提高准确性。
5. **输出虚拟相机**：根据需求输出虚拟相机或其他相关数据，以用于后续的合成或处理。

**节点参数解释**：

- **Connection Type**：定义输入类型，通常选择“Sequence”以跟踪连续帧序列。
- **Camera Motion**：选择相机运动类型，如“Rotation Only”或“Free Camera”。
- **Lens Distortion**：设置镜头畸变类型，如“Unknown Lens”或“No Lens Distortion”。
- **Focal Length**：指定焦距，可以选择“Known”或“Unknown”。
- **Feature Tracking**：控制特征跟踪相关参数，如最小跟踪长度和跟踪阈值。
- **Solving**：配置相机求解的参数，包括主视图、平滑度等。
- **Scene**：处理场景变换和世界矩阵的设置。
- **Output**：控制输出虚拟相机和相关参数，如平移、旋转、焦距、光圈等。

这个节点允许您将虚拟元素与实际拍摄的2D镜头相匹配，创造出逼真的合成效果。通过仔细调整参数，您可以获得更好的相机跟踪结果，以满足不同项目的需求。