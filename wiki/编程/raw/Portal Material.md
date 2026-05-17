---
type: concept
title: Portal Material
tags: []
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "bb7bdd7c44ab"
---
Portal Material 门户材质是用于室内光照传递的指引方向。可以缩短室内的渲染速度
### Parameters
门户材质用于通过帮助渲染内核在现场找到重要的光源来优化内部光源的渲染。例如，通过窗户通过外部光源照明的内部场景在进入内部环境时很难使路径跟踪器优化光线。为了帮助路径跟踪器找到这些光源，多边形平面可以放置在窗外，并指定给平面的门户材质。
下图包括一个带小窗户的房间。这将是一个很难用太阳/天空或**HRR**文件照明，房间内部没有照明的场景。单架飞机被放置在窗户上（蓝色突出显示），飞机朝向房间的正常情况（小黄线）。门户材质将应用于此平面。
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIAcNqibU4wbL6Wic78huvFISJlPNtKGMBBA87VK0cL36iaJYCqmC1QAjhKvXLNf05rhBd0Xw14hyMPicA/640?wx_fmt=png)
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIAcNqibU4wbL6Wic78huvFISJRNl8x7HGXZib7E0Cic1CJhlmYPY0hvQYb9rHcicthicabbmbMIcDveckqg/640?wx_fmt=png)
当环境中的每个窗口或打开都由门户平面覆盖时，门户材质最有效。如果只有一个窗口在上面有一个门户，当所有其他窗口上没有门户时，它就会不起作用。门户平面的正常方向应朝内向内，否则场景不会正确呈现。不要用玻璃表面等其他几何形状阻挡入口平面。具有门户材质的对象在渲染中不可见。
门户平面应该有很少的多边形。一些简单的矩形平面是最好的，因为用于门户平面的复杂几何形状可以减慢渲染速度。可以使用单个门户几何形状来覆盖多个开口，例如单面墙上的多个窗口。但是，如果几何形状太大，则会降低渲染效率。重要的是要在开口的覆盖范围和使用门户材质的几何大小之间取得平衡。
**注意**
仅使用路径跟踪和 PMC 内核的门户材质，因为使用直接光内核渲染时，门户将无法工作。
下面的两个图像显示有或没有门户材质的渲染结果。场景显示，在一个房间内，一个玻璃球体被透过窗户的光线照亮。场景使用 500 个示例进行渲染。第一个图像在开口上没有放置门户平面，并且它比第二个图像更嘈杂，后者确实具有门户平面。
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIAcNqibU4wbL6Wic78huvFISJSnRSc6YGMj16cnHQGTzzS51RGiaJ0Fl6sMGNep4siafOgY2IJLWymGTQ/640?wx_fmt=png)
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIAcNqibU4wbL6Wic78huvFISJj71vTdbuiahSmjNic73vMicApia9sCSk6ibJqbVSoptXMdnfvbRQGCcRnWQ/640?wx_fmt=png)