---
type: concept
title: Surface tangent dPdv
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "2a6ef64e2eb1"
---
urface tangent dPdu 表面切线dPdv节点是它是沿着 U 轴（在世界空间中）将表面切线转换为 RGB 纹理。这个节点是2021版本对标阿诺德和红移等主流渲染器的功能上的补充，功能其实和位置节点区别不是特别大，用于AOV输出使用的节点。

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIA0AIrJHr3FOw4w6d0KE7L5Wr6n9TrSmQ3SJccHVBpDibagSHM5ibcTOnJvWWcFrESO7T5OUibYt7y7Q/640?wx_fmt=png)

使用技巧

这个节点没有课调节的参数，urface tangent dPdv 表面切线dPdu是吧表面的切线延期U轴表面，再把这个转换成RGB颜色。只能配合其他的节点和不同节点可以混合成非常有趣的效果，例如给贴图混不同颜色，或者给系统程序混合上颜色，而且是用的最频繁的节点之一。还可以给AOV输出通道输出给节点。因为该节点没有属性可以调节目前只能当作颜色节点来使用。这个节点是跟上一个节点差不多的，只是轴向不一样。我用这2个节点结合起来，其实就是一个物体的表面切线的完整状态。

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIA0AIrJHr3FOw4w6d0KE7L50Ul8vMMJ8wVb2ic6B253Nu5qRNketic6lVfC1OqCG5KG5BhwHksoGia1Q/640?wx_fmt=png)