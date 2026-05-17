---
type: concept
title: Fluid Compress
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "6294bb6ce650"
---
压缩流体模拟，节省占用的磁盘空间
### Parameters
Fluid Compress geometry node
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\858beab310a14a8ba364d82fe7a71090\e17357ffb0e4445a8c028d84b269edcb.jpg)
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\08fa64088b71442287c8a356784d8bdc\e36bd59c685546318c047adbad6736de.jpg)
Node Name:---------fluidcompress1---------
Node Type:---------Fluid Compress Sop (fluidcompress)
*****Count:---158
*****Type:---44
Add------3
Add Constant------2
Advect by Volumes------1
And------1
Attribute Create------2
Attribute Rename------1
Bind------4
Blast------4
Block Begin If------1
Block End------1
Clamp------3
Compare------3
Constant------2
Convert VDB------2
Distance------1
Divide------2
Dot Product------1
Float to Vector------2
Get Vector Component------1
Group Create------1
Integer to Float------6
Integer to Vector------6
Length------6
Merge------2
Multiply------7
Multiply Constant------8
Name------3
Negate------2
Null------7
Pack Points------1
Parameter------45
Primitive------4
Subnet Inputs------2
Subnet Outputs------2
Subtract------1
Switch------5
Two Way Switch------2
VDB Vector Merge------1
Volume Index to Pos------1
Volume Resize------3
Volume Sample------1
Volume Sample Vector------1
Volume VOP------2
Volume VOP Global Parameters------2
Compresses the output of fluid simulations to decrease size on disk
压缩流体模拟，节省占用的磁盘空间
On this page
[Inputs](https://www.sidefx.com/docs/houdini/nodes/sop/fluidcompress#inputs)
 [Parameters](https://www.sidefx.com/docs/houdini/nodes/sop/fluidcompress#parameters)
[Examples](https://www.sidefx.com/docs/houdini/nodes/sop/fluidcompress#examples)
The Fluid Compress SOP compresses fluid simulations, usually before saving the data to disk.
Fluid Compress SOP压缩流体模拟，通常在将数据保存到磁盘之前进行压缩
The compression is generally lossy, in that FLIP particles will be culled below the specified depth, and volume bandwidth is limited by zeroing out values.
压缩通常是有损的，因为指定深度以下的FLIP粒子被剔除掉了，并且体积的频带宽度0以下的部分也被截止掉了
However, SOPs such as [Whitewater Source](https://www.sidefx.com/docs/houdini/nodes/sop/whitewatersource.html) and [Particle Fluid Surface](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface.html) are designed to detect compressed fluid input and regenerate any required missing data.
然而，诸如Whitewater Source和Particle Fluid Surface设计的目标是检测输入的压缩流体，并重新生成所需的缺失数据
The typical input of this SOP are:
该SOP典型的输入类型是：
-   Particles from a FLIP simulation
来自一个FLIP模拟的粒子
-   A surface field representing the SDF field of a liquid simulation
呈现出流体模拟SDF场的surface field
-   Three fields name vel.x, vel.y, and vel.z representing the velocity vector field of a fluid simulation.
三个表示流体模拟的速度向量场，三个场是vel.x,vel.y和vel.z
The primary methods of compression by this operator are:
该节点主要的压缩算法有：
-   Particle culling below specified depth.
指定深度以下的粒子被剔除
-   Partitioning the particles spatially and converting them into packed primitives.
对粒子进行空间分割，将分割的这些块转换为Pack物体
-   Volume bandwidth limiting and conversion to sparse VDB format.
体积带宽限制，并转换为稀疏体积的VDB格式
-   Flagging the VDB’s to save as 16-bit on disk, further reducing disk space.
标记将VDB保存为16位到磁盘，进行步减少磁盘空间的使用
Note
This SOP creates several detail attributes indicating that the fluid has been compressed.
该SOP创建几个全局属性，指示流体已被压缩
Several of these are also stored to the info block when written to file, making them accessible through the the [File SOP](https://www.sidefx.com/docs/houdini/nodes/sop/file.html)'s Info Load mode or the gstat command line tool.
当写出文件时，还存储几个信息块，使这些信息块可以通过File SOP的Info加载模式或gstat命令行工具时可以访问
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\b18e2def73054f04b61c6a269d3cfd0d\004f9e6f17b24fb19d208911822fa408.jpg)
These attributes include:
这些属性包括：
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\a5ff2167a17542d6aee58c3c9b743334\025a5b204a9345af8e6a3ddacaaf1e6e.jpg)
-   fluidcompress_particleband and fluidcompress_volumeband - the Particle and Volume bandwidth respectively.
fluidcompress_particleband表示粒子的带宽
fluidcompress_volumeband表面体积的带宽
-   fluidcompress_particlesuncompressed and fluidcompress_particlescompressed - the number of fluid particles before and after compression.
fluidcompress_particlesuncompressed表示压缩之前流体粒子的数量
fluidcompress_particlescompressed表示压缩之后流体粒子的数量
-   fluidcompress_volumesize and fluidcompress_volumet - the original size and center of the fluid volumes.
fluidcompress_volumesize表示流体体积的原始大小
fluidcompress_volumet表示流体体积的中心位置
For more information, see the [Fluid Compression](https://www.sidefx.com/docs/houdini/fluid/compress.html) help page in the Fluids chapter.
要获得更多信息，请查阅流体章节中的Fluid Compression帮助页面
[--10-Fluid Compression-----流体压缩.note](note://9B5D416593CE44749E6F4054C18397F8)
INPUTS
Fluid Simulation
Particles and surface and velocity volumes from a fluid simulation.
来自流体模拟的粒子、surface体积和velocity体积
PARAMETERS
Particles
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\f88548d74fde44c194c4683ed40a7ee5\89e3220f061f41049da9af4bad942896.jpg)
Particle Separation粒子间距离
The distance between two particles in the fluid simulation.
流体模拟中两个粒子之间的距离
This parameter should generally reference the same parameter on the [FLIP Object](https://www.sidefx.com/docs/houdini/nodes/dop/flipobject.html) of the input simulation.
该参数通常应该与引用的输入模拟的FLIP Object的参数相同
Cull Bandwidth剔除带宽
If enabled, any particles below this depth in the surface field will be deleted.
如果开启，surface场低于该深度的粒子将被删除
This parameter is specified in units of Particle Separation.
Keep Attributes保留属性
If enabled, all particle attributes except those specified here will be deleted.
如果开启，除了这里指定的粒子属性之后，所有的粒子属性都将被删除
Pack Particles打包粒子
Partition the particles into packed primitives using the [Pack Points](https://www.sidefx.com/docs/houdini/nodes/sop/packpoints.html) SOP.
使用Pack Points SOP将粒子划分并转换为Pack Primitives
Packing allows on-demand loading of particles from disk if the resulting files are loaded with Delay Load Geometry enabled on a [File](https://www.sidefx.com/docs/houdini/nodes/sop/file.html) or [File Cache](https://www.sidefx.com/docs/houdini/nodes/sop/filecache.html) SOP.
Volumes
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\8c4cbad38b04494d8ca5950842fc61d2\66a9987b6b2e429a9860c2af31e2704d.jpg)
Note
Input volumes named surface and vel will be converted to VDB format.
名字为surface和vel的输入体积将被转换为VDB格式
Limit Bandwidth限制的带宽
Limit the bandwidth on input surface and vel volumes beyond the specified distance from the fluid surface.
限制的带宽，超过流体表面指定距离的体积
Note
This value should ideally be greater than the Foam Depth parameter on any [Whitewater Solver](https://www.sidefx.com/docs/houdini/nodes/dop/whitewatersolver.html) nodes used with this data as a source.
该值应该大于作为数据源使用的Whitewater Solver中的Foam Depth参数
Advection Time
The vel volume is limited by advecting backwards through time and clearing any values that do not result in advection to within the Limit Bandwidth of the surface field.
If operating at a different timescale you can adjust the parameter here.
如果在不同的时间缩放操作，你可以在这里调整参数
Advection CFL
The CFL constraint on the advection used for velocity limiting.
Lower numbers are more accurate but more expensive.
更低的数值会更精确，但会更慢
Min Speed最小速度
Velocity values below this speed are assumed to be zero and cleared to save memory.
低于该速度的速度值被假定为0，被清除，节省内存
Write 16-Bit Floats
A flag to specify that when writing to disk that the volumes should be down converted to 16 bit.
该标记用来指定当写入磁盘时，体积中的数据被转换为16位
This does not affect how they are stored in memory.
这并不影响它们在内存中的存储方式
See also
 [FLIP Solver](https://www.sidefx.com/docs/houdini/nodes/dop/flipsolver.html)
 [Pack Points](https://www.sidefx.com/docs/houdini/nodes/sop/packpoints.html)
 [Whitewater Source](https://www.sidefx.com/docs/houdini/nodes/sop/whitewatersource.html)
 [Whitewater Solver](https://www.sidefx.com/docs/houdini/nodes/dop/whitewatersolver.html)
 [Particle Fluid Surface](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface.html)
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\44d6a7066fe24ca19e7ed8e92722e630\flipsolver.png)
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\e94c17a2cd3f4c29b9f491ef841b467a\packpoints.png)
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\f395f9b764a74b44927e21f910735249\whitewater.png)
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\b162a62cdec94ffd8d88147806aa4962\whitewater.png)
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\4cc9a427cd4145f285be4ea43f2f8065\fluidsurface.png)
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\ae4b0c81de1645ce84983a5836d0bf78\ccdd.gif)
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\9c19283ae3954a1bb4dd60002cb8b004\82984d416b2447059304f27105ec35ab.jpg)
![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\78fc5421358b4d88843df36efdb92793\789cac82b796403e813c5e8bb634e41e.jpg)
![POP_Curve_Force.hip](C:/Users/icesy/AppData/Local/YNote/data/qq91E84D8FFDDA23C192C8BDC51BF7FB03/2e8f6ee1b0124360afe9700f5217e1ea/attachment.png "POP_Curve_Force.hip")