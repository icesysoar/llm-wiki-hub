---
type: concept
title: Object nodes
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "e056a6bd480f"
---
对象节点表示场景中的对象，例如角色部分、几何对象、光源、摄像机等。 
### 内容
对象或"场景"级别  包含"顶级"`/obj/`Object的场景几何对象、骨架、光源、照相机，并允许您设置它们之间的空间和层次结构关系。
![image.png](https://i0.hdslb.com/bfs/album/19921f1107fc77d7318b71d33830b4f102e485de.png)
#### 图标说明

| ![selectable_flag.svg](https://www.sidefx.com/docs/houdini/icons/NETVIEW/selectable_flag.svg) | E   | **Selectable**当此节点处于关闭状态时，它不能在查看器中选择。您可以使用它来避免在处理其他对象时意外选择对象。<br>当可选标志打开时，节点左侧的标志将亮起绿色。 |
| --------------------------------------------------------------------------------------------- | --- | --------------------------------------------------------------------------------------- |
| ![display_flag.svg](https://www.sidefx.com/docs/houdini/icons/NETVIEW/display_flag.svg)       | R   | **Display**如果此项处于关闭状态，则该对象不会显示在查看器中。<br>当显示标志打开时，节点右侧的标志将亮起蓝色。                          |

#### 其他对象标志
您可以通过右键单击![](https://www.sidefx.com/docs/houdini/icons/KEYS/RMB.svg)节点并打开 Flags 子菜单来设置这些**标志**。
**Display Origin 显示原点** 
在对象的原点处显示插孔。关闭显示标志也会隐藏插孔。
**X-Ray X透视** 
使对象在其他几何图形后面可见。这用于使骨骼在角色的皮肤内可见。
#### 节点
!数据库.base#houdini_图标Object

| Camera                  | Stereo Camera Template | VRCamera             | Alembic Archive           |
| --------------------------- | -------------------------- | ------------------------ | ----------------------------- |
| Stereo Camera Rig       | Switcher               | Agent Cam            | Alembic Xform             |
| Ambient Light           | Blend                  | Blend Sticky         | Bone                      |
| DOP Network             | Environment Light      | Extract Transform    | Fetch                     |
| Formation Crowd Example | Geometry               | Groom Merge          | Guide Deform              |
| Guide Groom             | Guide Simulate         | Hair Card Generate   | Hair Card Texture Example |
| Hair Generate           | Handle                 | Indirect  Light      | Instance                  |
| Light                   | Light template         | Microphone           | Mocap Acclaim             |
| Null                    | Path                   | Path CV              | Python Script             |
| Ragdoll Run Example     | Reference Image        | Rivet                | Sound                     |
| Stadium Crowds Example  | Sticky                 | Street Crowd Example | Subnet                    |
| Top Network             | Viewport Isolator      | glTF                 |                               |

**Crowds人群**
创建代理相机自动跟随目标
**Dynamics 动力学** 
动力学模块
**Export导出** 
导出文件
**Geometry几何学** 
建立SOP和ABC导入的功能
**Hair头发**
毛发工具
**Import 导入**
导入文件
**Lights灯光**
灯光相关的节点几乎都放这里。
**Managers管理人员** 
建立基础的几个模块文件夹
**Pack包** 
ABC资产包
**Parenting子集**
像混合相关的工具
**Primitive原始** 
一些原始模型
**Render渲染** 
灯光和渲染相关的工具
**Rigging索具** 
绑定相关的工具
**Sound声效**
声音相关的工具
**Terrain地形** 
可以创建地面的基础平面
**Test Geometry测试模型**
用于测试是模型
**Utility效用**
像python或者空白之类的东西
**View 视点**
显示模式
**More更**
添加工程和贴纸

