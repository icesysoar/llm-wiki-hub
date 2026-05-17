---
type: concept
title: Volume to texture
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "92d2fac69afe"
---
Volume to texture VDB生成贴图节点是可以输入VDB文件的一个节点，而且还可以输出VDB序列文件。

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIDCI0fM1Vd4WfHP1Zc8icLpYOm9bFC3FjgNap4NBu8gYZUhBf1v46PsaribnXGtSld7YwiccI1udpP5Q/640?wx_fmt=png)

使用技巧

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIDCI0fM1Vd4WfHP1Zc8icLpY9cibwbP2AlRicpEXHEzmQBW96R3pQVEcnCoyyQ4JMERXMygNfTDQFicgw/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_gif/4R04oPticNIDCI0fM1Vd4WfHP1Zc8icLpYdyHUXSPJDMuKRBbEybt3ruViatDfIrxgnZb9vYMQvuz4EDod6rNvY4g/640?wx_fmt=gif)

这个节点是可以读取 VDB"可以连接到 VDB 节点，这允许读取 VDB 数据并将其用作另一个纹理的输入。映射可以使用类似于其他贴图纹理的投影进行控制。输出可以链接在各种节点上,可以用克隆模拟体积雾方式加上这个材质就可以模拟体积雾形式的模拟VDB烟雾效果不输于真正的VDB。而且渲染速度还比VDB的快了不少。

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIDCI0fM1Vd4WfHP1Zc8icLpYMgeQpwrNicJUaYvluAdbeCicic85fsKppmR3HIB4Xr8woa1dzu0JqevFg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIDCI0fM1Vd4WfHP1Zc8icLpYXIpfTOkbQ4EBbvlmefNFVSdjiaAePiaSW1xwibwuhL3icBv9Kc1dcoMVbA/640?wx_fmt=png)

VDB file VDB文件
Animation动画
Mode模式
Timing计时
Range Start范围开始
Range End范围结束
Loops循环
Movie Start Frame电影开始帧
Movie End Frame，电影结尾框
Movie Frame Rate 电影帧率 
Type类型
Transform变换
Projection投影
Gnid ID 
Scatter散射
Absorption吸收
Emission排放
Velocity.x 
Velocity.y
Velocity.z
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNICS0uOHadorMRc7jMyB0lXqpy6EsLma7ed9nDmQ8WyiazZTMnWAibpnUPTM09IarwtFMyEnLC2LAdbw/640?wx_fmt=png)
经过亿点点细节做出比原来VDB还复杂很多的材质