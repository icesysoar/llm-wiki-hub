---
type: concept
title: Specular Materials
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "da67925c8964"
---
镜面材质用于透明介电材质，如水或玻璃。
### Parameters
如前所述，当光照射到表面时，它要么被反射，要么被吸收或折射，但是当光从一种介质（例如空气）过渡到另一种介质（例如玻璃）时，它的行为会改变。这些变化取决于表面的光学和拓扑特性。在镜面透射中，当光线进入另一种介质时，它会降低速度并改变方向。
在下图中，空气中的光线进入水中。在这种情况下，大部分光进入水中并继续其行进，其中一些被水反射。在水中，光矢量通过折射而变化。
![image.png](https://i0.hdslb.com/bfs/album/b10b68154b47af3eb40c85184c32b03582c56550.png)
!Universal Material#Roughness 粗糙度
## Reflection 镜面
总结：通过使用此参数，您可以控制镜面上的反射强度。大多数镜面传输表面根据表面特性进行反射。换句话说，这些表面同时具有反射性和传输特性。在这里，您可以从此参数输入反射值。小心不要进入高值，如在光泽材料的反射强度。在这种情况下，光子会击中表面并反射回来，并且无法在必要时穿透介质。反射参数可以使用 RGB/浮动值和纹理进行反射量。他们的优先级别：Texure>Color>Float优先级别较高的会覆盖优先级别较低的的属性。
Color：颜色可以用色彩空间选择颜色。
Float：才有0-1黑与白的的数值控制变量。
Texure：可以使用纹理图案来代替颜色，他的优先级由
MIX的数值控制 Mix：控制贴图的混合程度的数值，常采用0-1的数值0代表贴图不出现，1代表被贴图完全代替。
!Universal Material#Anisotropy 各向异性
!Universal Material#Film Layer 胶片薄膜
!Universal Material#Bump 高度贴图
!Universal Material#Normal 法线贴图
!Universal Material#Displacements 置换贴图
!Universal Material#Opacity 透明度
!Universal Material#Dispersion 色散
!Universal Material#IOR mode 反射强度
!Universal Material#Material Layer 层材质
!Universal Material#Rounded edges 倒角
!Universal Material#Common 常见
!Universal Material#Custom AOV 通道
!Universal Material#Custom AOV 通道
!Universal Material#Editor 编辑器
!Universal Material#Assign 材质分配
