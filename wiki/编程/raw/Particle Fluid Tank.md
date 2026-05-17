---
type: concept
title: Particle Fluid Tank
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "27e7fd200073"
---
在水槽中生成整齐的点集
### Parameters


Particle Fluid Tank geometry node

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\9f0122305e924eb5adff646a24468d6b\64c44ade186b44159c496bd2c2d4f728.jpg)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\486cbfde8fd84941a56ea64a105c8424\811d89bf8cc848abbde7cdf384add851.jpg)

Node Name:---------particlefluidtank1---------

Node Type:---------Particle Fluid Tank Sop (particlefluidtank)

*****Count:---307

*****Type:---61

Add------5

Add Constant------7

Attribute Copy------1

Attribute Create------2

Attribute Promote------1

Attribute Rename------1

Attribute VOP------7

Attribute Wrangle------5

Bind------1

Blast------4

Block Begin------2

Block Begin If------2

Block End------3

Bound------2

Box------3

Clip------3

Constant------9

Convert VDB------4

Cosine------1

Degrees to Radians------1

Divide------4

Ends------1

Float to Vector------3

Geometry VOP Global Parameters------2

Geometry VOP Output------2

Get Attribute------2

Get Vector Component------1

Group Combine------1

Group Create------7

Group Delete------1

Group Rename------1

Inline Code------6

Integer to Float------8

Integer to Vector------2

Length------3

Measure------1

Merge------5

Modulo------2

Multiply------9

Multiply Constant------5

Null------12

Output------1

Parameter------99

Point Jitter------2

Points from Volume------1

Primitive------1

Scatter------1

Snippet------6

Subnet Inputs------5

Subnet Outputs------5

Switch------23

Transform------5

Two Way Switch------4

VDB------1

VDB Activate------1

VDB Activate SDF------1

VDB Combine------3

VDB from Polygons------2

Volume Mix------2

Volume VOP------1

Volume VOP Global Parameters------1

Creates a set of regular points filling a tank.

在水槽中生成整齐的点集

This operator is used to generate a regular set of points that fill a given tank. 

This can be useful for initializing a [flip fluid](https://www.sidefx.com/docs/houdini/nodes/dop/flipobject).

该节点可以用来初始化一个flip流体

Increasing the Particle Separation will lower the resolution, which will make your simulation faster to process.

增加Particle Separation粒子间距会降低分辨率，使得你的模拟处理得更快

Particle Separation is measured in meters, so a particle separation value of 0.1 is 10 cm. The lowest possible value is 0.2, or 2 cm.

Particle Separation粒子间距是以米为单位的，所以粒子间距是0.1米的话就是10分米

更低一些的值0.2或2分米

The Particle Radius Scale is a visual tool that will affect surfacing. 

Particle Radius Scale是一个可视化工具，它会影响成面操作

The smaller this value is, the higher detail the surface will be. 

该值越小，曲面的细节越多

If this value is high, it will result in a smoother surface.

这个值越大，得到的曲面越平滑

PARAMETERS

Particle Separation粒子间距

The smallest distance between any two of the generated particles in the initial configuration.

Point Configuration

The configuration of the points to be generated, before any jitter is applied.

Grid

A loosely packed configuration that places the points at the vertices of a regular three-dimensional grid.

使用宽松打包的配置，即将粒子放置规则的三维网格顶点上

Tetrahedral

A tightly packed configuration placing points at equal distance from each of the three other closest points.

使用紧凑打包的配置，等距放置粒子，使一个点和其它最近三个点的距离都相等

Water Level水平面，水位

How deep to fill the liquid. 

填充的流体有多深

Measured as actual distance above the water level reference to the top of the water. 

测量水表面之下有多大距离

To empty the tank, lower this past the bottom of the tank.

Size水槽大小

Size of the tank along xyz axes.

水槽沿xyz各轴向的大小

Center中心

Position of center of tank.

水槽的中心

Water Level Reference水位参考

The water level parameter fills the tank to an offset of this location. 

水位参数该位置是填充池堂水位的偏移量

By having a separate parameter, you can either make the water level an absolute value or have it relative to the tank by using a ch("./tx") style expression.

通过一个独立的参数，你可以用一个绝对数值来指定或使用ch("./tx")这样的表达式来关联到别的参数

Jitter Seed随机抖动种子

Random seed for creating jitter.

创建随机抖动使用的种子

Jitter Scale抖动幅度缩放

The amount of jitter to apply to the positional values of the points. 

点位置抖动的幅度

Jitter causes random changes to the positions of the points.

抖动会对点的位置造成随机的变化

-   Tip提示

Set this value to 0 if no jitter whatsoever is desired.

如果不需要位置抖动则将该值设置为0

Up Axis向上的轴向

The direction to fill the box in. 

方盒子中填充流体的方向

Controls which way the water level cut off is applied.

控制水位的截止

Add Scale Attribute添加缩放属性

Creates the pscale attribute and sets it to 2× the particle separation. 

生成pscale属性，值设置为Particle Separation * Particle Radius Scale

This allows the [Fluid Surface SOP](https://www.sidefx.com/docs/houdini/nodes/sop/particlefluidsurface) to get the right scale for rebuilding the original surface.

Particle Radius Scale

The scale attribute is this multiple of the particle separation. Having the particles larger than the separation ensures no particles are lost in the gaps between voxels.

scale属性是粒子间隔的倍增器

Padding Bandwidth

Pad the boundaries of the tank to the specified distance, which can help reduce boundary jittering in a FLIP simulation. This parameter is specified in multiples of the Particle Separation.

水池边界到指定曲面的距离，其可以帮助在Flip模拟中减少边界抖动。此参数是粒子间隔参数的倍增值

Scatter Density

Scatter points on the surface of the tank, which can help create flat surface for a FLIP simulation. For a value of 1 the scattered points will be approximately separated by Particle Separation. Increasing this value will oversample the surface.

在水池曲面上分散点，可以用于从一个Flip模拟中创建扁平的曲面。对于值为1的分散点，会大致的暗粒子间隔分散。增加此值会过采样曲面

Relax Iterations

When enabled, scattered points will be relaxed, pushed away from each other, to avoid clumping. This is done gradually, to avoid chaotic behavior and to allow control over how much relaxation takes place. More relaxation iterations results in points that are more separated from each other. A distribution of points in which they are well separated is often called "blue noise".

Oversampling

The amount to oversample the points within a distance from the surface of the tank, as specified by the Oversampling Bandwidth.

在距水池曲面的一个距离内，过采样点的数量，该距离由过采样宽度决定

Oversampling Bandwidth

The points will be oversampled to this distance from the the surface of the tank. This parameter is specified in multiples of the Particle Separation.

从水池曲面到该距离范围内的点会被过采样。此参数是粒子间隔的倍增值

Viscosity

Creates a viscosity attribute and sets it to the given value. If the fluid solver has both Viscosity and Use Particle Viscosity enabled, this will be multiplied with the fluid’s base viscosity.

创建一个viscosity属性，并设置其为给定的值。如果Fluid解算器已经有viscosity，并且开启了Use Particle Viscosity ，那么此会和流体的基础粘度相乘

Density

Creates a density attribute and sets it to the given value. If the fluid solver has Density From Attribute set, this will be scaled against the fluid’s base density to determine the effective per-particle mass. This attribute is scale independent, so it shouldn’t vary with the particle separation.

创建一个density属性，并设置其为给定的值。如果Fluid解算器已经设置了 Density From Attribute参数，此会根据流体的密度缩放来定义每粒子质量。属性缩放时独立的，因此不会随着粒子间隔改变而改变

Create Output Group

Create a group containing the generated points.

Output Group

The name of the generated output point group.

See also

 [Scatter](https://www.sidefx.com/docs/houdini/nodes/sop/scatter.html)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\bcbcaf03adf6473f88a21bd83492dd16\scatter.png)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\555abf141ef84b7895c8ec3e08d6cc15\untitled.gif)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\b64051ffc0564293b0222bd4f5ae52f8\2a5f6e6109044b8c8307085049d71df8.jpg)

![](C:\Users\icesy\AppData\Local\YNote\data\qq91E84D8FFDDA23C192C8BDC51BF7FB03\7cd050098b5743c2a849c945898c5461\0e0a5cb901ba41159a7852b2a92c23f1.jpg)

![Particle_Fluid_Tank.hip](C:/Users/icesy/AppData/Local/YNote/data/qq91E84D8FFDDA23C192C8BDC51BF7FB03/ddcefb9a4e7545a0a5d83be893d2065c/attachment.png "Particle_Fluid_Tank.hip")