---
type: concept
title: Geometry nodes
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "66589468c895"
---
几何节点在Geo对象内存在于Geo对象并生成几何体。
## Parameters
一个[Geometryobject](https://www.sidefx.com/docs/houdini/nodes/obj/geo.html"Containerforthegeometryoperators(SOPs)thatdefineamodeledobject.")在对象层面上包含一个Geometry（SOP）模型。这个网络持有[geometrynodes](https://www.sidefx.com/docs/houdini/nodes/sop/index.html"GeometrynodesliveinsideGeoobjectsandgenerategeometry.")创建物体的几何形状。
[Wiring](https://www.sidefx.com/docs/houdini/network/wire.html"Howtoconnectnodestoeachothertomakethemworktogether.")在几何层面上的节点一起控制几何体的流动，从产生新的几何体的节点（如[Sphere](https://www.sidefx.com/docs/houdini/nodes/sop/sphere.html"Createsasphereorovoidsurface.")）到修改几何体的节点。
有关使用几何节点的更多信息，请参见Geometry
![image.png](https://i0.hdslb.com/bfs/album/454b57007db6660d3afbee3448e7a2913cc3df6a.png)
### 图标说明

| ![\|20](https://www.sidefx.com/docs/houdini/icons/NETVIEW/bypass_flag.svg)   | Q或者B | **禁用** 使输入的几何图形传递给输出，不作任何改变。这对于测试和可视化节点在查看器中的效果非常有用。当一个节点被旁路时，该节点左边的标志会亮起黄色。 快捷键：                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![\|20](https://www.sidefx.com/docs/houdini/icons/NETVIEW/lock_flag.svg)     |      | **冻结**并缓存节点的输出几何体。当节点被锁定时，节点会输出"冻结"的当前的状态。这通常是没有必要的，而且可能会引起混淆，（这就是为什么这个标志在节点上不能点击，也没有热键），但是它有两个潜在的好处。 如果节点依赖于外部文件，你可以锁定它们，使HIP文件自成一体，因为被锁定的节点使用它们自己的输出几何体副本，而不是从外部文件加载数据。 当一个节点被锁定时，节点左手边第二个旗子会亮起红灯，并且一个Badges出现在节点上。 不要把这个"锁"和锁定的[digitalassets](https://www.sidefx.com/docs/houdini/assets/index.html"数字资产让你从现有网络中创建可重复使用的节点和工具.")."数字资产让你从现有的网络中创建可重复使用的节点和工具。")。 |
| ![\|20](https://www.sidefx.com/docs/houdini/icons/NETVIEW/template_flag.svg) | E    | **Template**使节点的几何体在视口中可见（和可捕捉），即使该节点没有打开显示标志。 你可以在[viewportdisplayoptions](https://www.sidefx.com/docs/houdini/ref/windows/displayopts_3d.html)中控制模板几何体在视口中的绘制方式（例如，作为线框，或阴影）。 通常情况下，在一个节点上点击模板标志会关闭所有其他节点的模板标志。你可以⇧Shift点击模板旗帜，一次对多个节点进行模板操作。 当模板旗帜开启时，节点右数第二个的旗帜会亮起栗色，并且节点周围会出现一个栗色的环。                                                                                |
| ![\|20](https://www.sidefx.com/docs/houdini/icons/NETVIEW/display_flag.svg)  | R    | 几何形状出现在三维观察器中的节点。通常这是在网络的末端，显示网络的累积输出，但是你可以（也经常会）在网络周围移动显示标志来检查不同节点的输出。 通常情况下，移动显示标志也会移动**渲染标志**，但是你可以将它们分开，所以你可以设置一个节点在查看器中提供几何图形，而另一个节点在渲染时提供几何图形。这对于在查看器中显示代理几何体和渲染更详细的几何体很有用。 当显示标志开启时，节点右侧的标志会被点亮为蓝色，并且节点周围会出现一个蓝色的环。                                                                                                                                               |
| ![\|20](https://www.sidefx.com/docs/houdini/icons/NETVIEW/render_flag.svg)   | T    | **Render**<br>当渲染标志开启时，节点右侧的标志被点亮为紫色，并且节点周围出现一个紫色的圆圈。                                                                                                                                                                                                                                                                                                                    |

### 其他对象标志

| ![\|20](https://www.sidefx.com/docs/houdini/icons/NETVIEW/selectable_template_flag.svg) | W   | 你可以⌃按住Ctrl键点击模板标志来设置**可选择模板**标志。这使得几何体可见_并且允许你从视口中的模板几何体中选择组件，此外还有显示标志的几何体上的组件。 如果您将一个操作（例如，Poly Extrude）应用于可选择模板的组件，胡迪尼会自动插入一个Notes/Houdini/Houdini帮助/Merge来合并模板的几何体和显示的几何体，并将该操作应用于合并后的几何体中的组件。如果你不小心的话，这可能会在网络中造成混乱，所以一般来说，你可能想避免可选择的模板，自己创建合并，在合并的几何体上工作。 |
| --------------------------------------------------------------------------------------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![\|20](https://www.sidefx.com/docs/houdini/icons/NETVIEW/unload_badge.svg)             | 无   | **Unload**标志告诉Houdini不要缓存节点输出的几何图形。这可以节省内存，但会减慢烹饪速度。一个例外是正在显示的几何体，它将保持缓存，因为它仍然在使用。 当节点有卸载标志时，节点上会出现一个徽章。                                                                                                                                      |

### 节点

!数据库.base#houdini_图标Geometry

##### 其他
Agent
Agent Animation Unpack
Agent Character Unpack
Agent Clip
Agent Clip Properties
Agent Clip Transition Graph
Agent Collision Layer
Agent Configure Joints
Agent Constraint Network
Agent Definition Cache
Agent Edit
Agent Layer
Agent Look At
Agent Metadata
Agent Pose from Rig
Agent Prep
Agent Proxy
Agent Relationship
Agent Terrain Adaptation
Agent Transform Group
Agent Unpack
Agent Vellum Unpack
Agent from Rig
Collision Source
FLIP DOP Source
Fluid Compress
Ocean Evaluate
Ocean Foam
Ocean Source
Ocean Spectrum
Ocean Waves
Particle Fluid Mask
Particle Fluid Surface
Particle Fluid Tank
Points from Volume
Shallow Water Solver
Cluster Points
Comb
Connectivity
Crease
Curvs Sweep
Delete
Distance Along Geometry
Distance From Geometry
Distance From Target
Measure
Meta Groups
Mountain
Name
Point Velocity
Pose Scope
Primitive Properties
Primitive Split

Toon Shader Attributes
Vertex Split
Vertex-old
Visibility
Vortex Force  Attributes

Convert HeightField
Convert Line
Convert Meta
Convert Tets
Convert VDB
Convert VDB Points
Convert Volume

Ocean Evaluate
Ocean Foam
Ocean Source
Ocean Spectrum
Ocean Waves

Point Cloud Iso
Point Deform
Point Generate
Point Jitter
Point Relax
Point Replicate
Point Split
Point Velocity
Point Weld
Points from Volume
Fur
Groom Blend
Groom Fetch
Groom Pack
GroomSwitch
Groom Unpack
Guide Advect
Guide Collide With VDB
Guide Deform
Guide Group
Guide Initialize
Guide Mask
Guide Partition
Guide Process
Guide Skin Attribute Lookup
Guide Tangent Space
Guide Transfer
Hair Card Generate
Hair Clump
Hair Generate
Hair Growth Field
Reguide
Wire Blend
Wire Transfer
Guide Groom
Group
Group by Lasso
Group By Range
Group Combine
Group Copy
Group Create
Group Delete
Group Expand
Group Expression
Group Find Path
Group from Attribute Boundary
Group Paint
Group Promote
Group Rename
Group Transfer
Group Find Name
Group Joints
Group Range
Group by Lasso
Group from Attribute Boundary
Mocap Import
Mocap Stream
MotionClip
MotionClip Blend
MotionClipCycle
MotionClip Evaluate
MotionClip Extract
MotionClip Extract Key Poses
MotionClip Extract Locomotion
MotionClip Pose Delete
MotionClip Pose Insert
MotionClip Retime
MotionClip Sequence
MotionClip Update
Muscle Constraint Properties Vellum
Muscle Flex
Muscle ID
Muscle Mirror
Muscle Paint
Muscle Preroll
Muscle Properties
Muscle Solidify
Muscle Solver Vellum
Muscle Tension Lines
RBD Bullet Solver
RBD Cluster
RBD Configure
RBD Connected Faces
RBD Constraint Properties
RBD Constraints From Curves
RBD Constraints From Lines
RBD Constraints From Rules
RBD Convert Constraints
RBD Deform Pieces
RBD Deformingto Animated
RBD Disconnected Faces
RBD Exploded View
RBD Guide Setup
RBD IO
RBD Interior Detail
RBDMaterialFracture
RBD Pack
RBD Paint
RBD Unpack
Pyro Bake Volume
Pyro Burst Source
Pyro Post Process
Pyro Scatter from Burst
Pyro Solver
Pyro Source
Pyro Source Spread
Pyro Trail Path
Pyro Trail Source
Skin
Skin Properties
Skin Solidify
Skin Solver Vellum
Bone Capture
Bone Capture Biharmonic
Bone Capture Lines
Bone Capture Proximity
Bone Deform
Bone Link
Capture Attribute Pack
Capture Attribute Unpack
Capture Correct
Capture Layer Paint
Capture Mirror
Capture Override
CapturePackedGeometry
Capture Region
Pose Difference
Pose Scope
Pose Space Deform
Pose Space Deform Combine
Pose Space Edit
Pose Space Edit Configure
Rig Attribute VOP
Rig Attribute Wrangle
Rig Copy Transforms
Rig Doctor
Rig  Match Pose
Rig Mirror Pose
Rig Pose
Rig Python
Rig Stash Pose
UV Autoseam
UV Brush
UV Edit
UV Flatten
UVFuse
UV Layout
UVPelt
UV Project
UVQuickShade
UV Texture
UVTransform
UVUnwrap
VellumBrush
VellumConfigureGrain
Vellum Constraint Properties
Vellum Constraints
Vellum Drape
Vellum IO
VellumPostProcess
VellumReferenceFrame
Vellum Rest Blend
Vellum Solver
Vellum Unpack
bone solidify
Extract TPose
FEM Deform
Fiber Groom
Muscle Constraint Properties Vellum
Muscle Flex
Muscle ID
Muscle Mirror
Muscle Paint
Muscle Preroll
Muscle Properties
Muscle Solidify
Muscle Solver Vellum
Muscle Tension Lines
Set TPose
Skin Properties
Skin Solidify
Skin Solver Vellum
Tissue Properties
Tissue Solidify
Tissue Solver Vellum
Agent
Agent Clip
Agent Clip Properties
Agent Clip Transition Graph
Agent Collision Layer
Agent Configure Joints
Agent Constraint Network
Agent Definition Cache
Agent Edit
Agent Layer
Agent Look At
Agent Metadata
Agent Prep
Agent Proxy
Agent Relationship
Agent Terrain Adaptation
Agent Transform Group
Agent Unpack
Agent Vellum Unpack
Crowd Assign Layers
Crowd Source
Test Simulation Crowd Transition
Test Simulation Ragdoll
Stitch
Python
Cloud Light
Block End Compile
Output
glTF ROP output driver
OpenCL
Scatter and Align
Block Begin
Remeshto Grid
Voronoi Fracture Points
Voronoi Split
Bend
Bulge
Deformation Wrangle
Delete
Edit
Fractal
Inflate
Magnet
Match Axis
Match Size
Path Deform
Peak
Point Jitter
Point Relax

Custom 

Export导出
FEM


Houdini Engine
Import
kinefx
Labs
Managers

Mask
Material
MOPs

NURBS
Octane
Pack
Particle
Planar
Polygon
Primitive
Pyro
Randy
RBD
Redshift
Rigging
Test Geometry
Utility
VDB
Vellum
Volume
Volume Paint
More
Block End

