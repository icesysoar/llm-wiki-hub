---
type: concept
title: Fractal
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "b1f79f3449a8"
---


# Geometry node
https://www.sidefx.com/docs/houdini/nodes/sop/fractal.html
### Fractal^Geometry
#### ![](https://www.sidefx.com/docs/houdini/icons/SOP/fractal.svg)分形扰乱变形
Fractal 分形节点是生成图案类型的节点，主要生成类似墙砖或者地板砖纹理的图案。这个节点没有参数可以调节，但是可以修改Transform 位置和Projection 投射。可以根据需要效果调节参数。花纹是固定可以把它当作一张贴图。
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIBrzDIB4R26GRUG6b8Pq1kejvEYLibj8ArYwJTic6vJeV2AeHjetCiaec7F3ExbgT9RSdyIsUodGWX7Q/640?wx_fmt=png)
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIBrzDIB4R26GRUG6b8Pq1keLAKKiaFY9jpqHHJibKnZoTVxCiaUnBIHrwJ4yAKrghE1p82CHxPWQNic7Q/640?wx_fmt=png)
#### 使用技巧
 Fractal 分形节点是哼一个生成系统程序贴图的节点，可以制作可以制作地砖、或者墙砖，在这我们用用了分型节点和墙砖节点进行混合，用噪波做为遮罩，这样就可以制作破损磨损等的砖墙效果。可以链接各种需要颜色的节点通道上，配合不同节点可以混合成非常有趣的效果，例如给贴图混不同颜色，或者给系统程序混合上颜色。制作出有趣的效果。
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIBrzDIB4R26GRUG6b8Pq1keQ65cFvZ6oeGQxedSh0icdUibrpucRghZm3ibciaibABia7D5ba8qYHicePjFg/640?wx_fmt=png)