---
type: concept
title: Position
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "74dc05c5a726"
---
Position 位置节点是用于为您的材质或材质通道分配位置信息 输出成RGB 颜色。需要配合法线贴图等其他其他贴图。Position 位置节点在许多方面与法线节点不同，其中位置节点是对位置信息的XYZ三个轴向转换成RGB三个颜色的位置信息。关于 Position 位置节点重要的是选择他的读取位置模式，可以是全局坐标，也可以根据模型，

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNICLQNh4zHNNr96CgGYPpLTSOpLVpKpQNfxrooeAV1SufG9NYeETicbekOztUd0ZfWnSuibV4Kougv9A/640?wx_fmt=png)

使用技巧

可以链接各种需要读取位置信息的节点通道上，配合不同节点可以混合成非常有趣的效果，例如给贴图混不同颜色，或者给系统程序混合上颜色。而且是用的最频繁的节点之一。
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIAKKAN4LvCu3dkOykte5xWib8EHE96t5qr2AFgoj9t7IwllcCaDt7Uxv6QCCVjqwWIgsW58z01VDog/640?wx_fmt=png)
有三种模式可以选择分别是世界坐标、相机朝向、和物体朝向3个模式。

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIAKKAN4LvCu3dkOykte5xWib3PCLaibTaNz9s68RBP1g4ZBMdMuVAEyJmJoIzDOnSxfxW2EjtNHkl3g/640?wx_fmt=png)