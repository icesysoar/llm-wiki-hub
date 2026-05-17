---
type: concept
title: Flakes
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "60359cdbc11b"
---
Flakes 车漆反射节点用于为制作车漆的片状鳞片反射的节点。Flakes 车漆反射节点可以连接到法线通道上。Flakes 车漆反射节点在许多方面与OSL的车漆材质差不多。

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIBrzDIB4R26GRUG6b8Pq1keJjvu3vNXUESEibtyjPKILhibHyEaPDD2SEeic2zgzz5oRXyib7khVPZlhg/640?wx_fmt=png)

#### 使用技巧
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIBrzDIB4R26GRUG6b8Pq1kesEt20LckTyZBicCoibffkIzBfpkpEKW9Suib8G1pIicAiafsFEJLF6LBcEQ/640?wx_fmt=png)****  

Flakes 车漆反射节点是用来给制作车漆做那种一闪一闪的光点的生成贴图，这个节点比OSL的车漆节点参数比较好控制。可以链接各种需要颜色的节点通道上，配合位置节点调节坐标制作出汽车油漆的效果，他可以调节不同颜色，不止可以链接法线可以可以制作置换或者凹凸。可以组合出很多种材质。

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIBrzDIB4R26GRUG6b8Pq1kerSDH9L45bqQ3gicpLajKc0CnKpsPxtvZjz3s7EsMTySkCGTl5uialOrA/640?wx_fmt=png)


Base color 基色
这个为是可以调节颜色，默认是法线的颜色。
Flakes size片状尺寸
可以调节里面的小点点的尺寸大小
Flakes size variance片状尺寸差异
这个是调节小点点的随机最大与最小值。  
Blend factror混合面
可以调节小点点的颜色的饱和度。