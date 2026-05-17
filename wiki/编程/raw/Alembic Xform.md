---
type: concept
title: Alembic Xform
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "651fe62100d6"
---
仅加载来自 Alembic 场景存档 （） 中的一个或多个对象的变换。`.abc`
### Parameters
层数
使用此多参数可应用 Alembic 图层。
文件名
阿伦比克存档 （） 文件的路径。`.abc`
对象路径
存档中一个或多个对象的路径。如果指定，节点将仅加载这些对象及其子对象。默认值为空，这意味着加载存档中的所有几何图形。
框架
用于对几何图形进行采样的 _Alembic_ 框架。默认值为（胡迪尼的当前帧）。如果需要在存档中偏移动画的开始时间，可以添加或减去帧（例如 ）。`$F``$F + 48`
每秒帧数
结合 **Frame** 参数，这用于将 Alembic 基于时间的动画转换为 Houdini 帧。默认值为（Houdini 的当前每秒帧数设置）。如果存档文件是使用不同的 FPS 创建的，则需要在此处输入。`$FPS`
获取世界变换
如果设置此选项，则 Alembic Xform 对象将获取指定对象的世界变换，而不是其本地变换。