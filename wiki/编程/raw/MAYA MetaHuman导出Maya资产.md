---
type: source
title: MAYA MetaHuman导出Maya资产
tags: []
status: pending
source_type: user_upload
created: 2026-05-04
content_hash: "b1280c4b2e3b"
---

# MAYA MetaHuman导出Maya资产

## 核心要点

- [MetaHuman Creator导出的Maya资产的应用](https://www.bilibili.com/read/cv12209853)
当我们在MetaHuman Creator中塑造完角色后，可以从Quixel Bridge上下载此角色资源到本地。在其UE工程里有基于ControlRig制作的完整的面部和身体绑定，而在Maya文件里也具备了骨骼蒙皮与面部控制。所以这里使用AdvancedSkeleton插件的NameMatcher功能为角色生成一套身体控制系统，搭配自带的面部控制系统，使得动画师能够在Maya中进行动画编辑。
- 在Maya文件中，有三套骨架。DHIhead:spine_04骨架里包括了从胸骨到头骨与负责产生表情的骨骼，这一套骨架对头部模型蒙皮。DHIbody:root骨架包括了所有的身体骨骼，关节修型骨骼与扭曲骨骼，这一套对身体模型蒙皮。root_drv骨架为驱动骨架，其中的修型与扭曲骨骼受设置组约束。这三套骨架的关系为：root_drv骨架驱动DHIbody:root身体骨架，DHIbody:root身体骨架驱动DHIhead:spine_04头部骨架。所以我们只需要让创建出的控制器对root_drv骨架进行控制，即可实现目标。
- 骨骼关系图解
- 一、文件初始化
    打开文件后，首先修正相机角度，将透视图相机的旋转Z轴归零，正视图相机的旋转XYZ轴归零，侧视图相机的旋转XZ轴归零，旋转Y轴设为90度。这样就确保了视图的正常，方便后续操作。
- Rotate Z 设为90
    将root_drv驱动骨架的旋转X轴设为-90度。因为Maya与UE的世界坐标轴向不同，这里使角色在Maya的默认轴向中正常站立。

## 详细内容

### [MetaHuman Creator导出的Maya资产的应用](https://www.bilibili.com/read/cv12209853)
当我们在MetaHuman Creator中塑造完角色后，可以从Quixel Bridge上下载此角色资源到本地。在其UE工程里有基于ControlRig制作的完整的面部和身体绑定，而在Maya文件里也具备了骨骼蒙皮与面部控制。所以这里使用AdvancedSkeleton插件的NameMatcher功能为角色生成一套身体控制系统，搭配自带的面部控制系统，使得动画师能够在Maya中进行动画编辑。

### 在Maya文件中，有三套骨架。DHIhead:spine_04骨架里包括了从胸骨到头骨与负责产生表情的骨骼，这一套骨架对头部模型蒙皮。DHIbody:root骨架包括了所有的身体骨骼，关节修型骨骼与扭曲骨骼，这一套对身体模型蒙皮。root_drv骨架为驱动骨架，其中的修型与扭曲骨骼受设置组约束。这三套骨架的关系为：root_drv骨架驱动DHIbody:root身体骨架，DHIbody:root身体骨架驱动DHIhead:spine_04头部骨架。所以我们只需要让创建出的控制器对root_drv骨架进行控制，即可实现目标。

### 骨骼关系图解

### 一、文件初始化
    打开文件后，首先修正相机角度，将透视图相机的旋转Z轴归零，正视图相机的旋转XYZ轴归零，侧视图相机的旋转XZ轴归零，旋转Y轴设为90度。这样就确保了视图的正常，方便后续操作。

### Rotate Z 设为90
    将root_drv驱动骨架的旋转X轴设为-90度。因为Maya与UE的世界坐标轴向不同，这里使角色在Maya的默认轴向中正常站立。

## 来源

- 原始文件：MAYA MetaHuman导出Maya资产
- Ingest 日期：2026-05-04
