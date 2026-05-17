---
type: concept
title: Planetary
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "8173437ae71e"
---
## 模板
要使用辛烷值行星环境，请转到实时查看器中的对象菜单，并在灯光下选择辛烷值行星。与辛烷值日光一样，使用对象管理器通过选择辛烷值行星标签来访问选项。

![https://docs.otoy.com/cinema4d//lib/accplanet.png](https://docs.otoy.com/cinema4d//lib/accplanet.png)

**行星环境**

辛烷值行星标签的一些选项包含在***[日光](https://docs.otoy.com/cinema4d//OctaneDaylightEnvironment.html#transform)_**转换操作和**_[设置纬度和经度通过太阳标签](https://docs.otoy.com/cinema4d//OctaneDaylightEnvironment.html#SUN)_**在**_辛烷值日光环境***主题。从视距中取出的行星"R.H"旋转值对应于标签设置中的"北偏移"，但是，两者不是同步的。因此，当您改变北偏移时，光线的物理旋转不会改变。

有两种方法可以将行星球体移离轴，即远离中心框架：

-   在***"八烷值相机"标签>"薄镜头"选项卡>视角***向下调低时，使用 X 和 Y 镜头移位控制来偏移行星的左、右、上、下。
-   从属性管理器中选择相机并输入值。如果将光标放在旋转编辑字段中并激活字段，则可以使用键盘箭头键快速查看更改。请注意，位置编辑字段不会影响任何事情。

**类型， 土质， 电源， 北偏移和太阳大小**

这些选项在"Octane日光"主题中解释，_**[这里](https://docs.otoy.com/cinema4d//OctaneDaylightEnvironment.html#TYPE)**_。

**高度**

This option is used to set how high the virtual camera is from the planet body. The virtual camera of the Planetary Environment is only responsible for the altitude. You can only change your altitude of the virtual camera by using this option. However, if you have a physical camera in the scene, you can do all the transformation operations except "altitude". In the planetary environment, there is no connection between the physical camera in the scene and the virtual camera.

![https://docs.otoy.com/cinema4d//lib/planetalt.png](https://docs.otoy.com/cinema4d//lib/planetalt.png)

**明星菲德**

此选项允许您向背景分配星形地图。

![https://docs.otoy.com/cinema4d//lib/starfeld.png](https://docs.otoy.com/cinema4d//lib/starfeld.png)

**行星表面**

您可以在此部分中为行星的各个方面分配纹理。这些纹理分别是地面阿尔贝多、反射、光泽、发射、正常地图和高度图。排放图用于夜灯。

_**工作流程提示：**_

-   低海拔拍摄看起来好多了， 纹理大小大于 8k
-   高海拔拍摄可以使用低分辨率纹理。

有各种各样的免费和商业行星纹理在线工作得很好。行星体实际上不是物理的，你看不到视图中的任何物体。但是，您可以执行本手册"使用纹理"部分中描述的所有转换和投影操作。

![https://docs.otoy.com/cinema4d//lib/albedo1.png](https://docs.otoy.com/cinema4d//lib/albedo1.png)