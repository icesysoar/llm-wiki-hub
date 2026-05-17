---
type: concept
title: Ambient Light
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "07bac9a09239"
---
给场景中的每个表面（或灯光的遮罩中）增加一个恒定的灯光水平，不从任何特定方向发出。
### Parameters
环境色
光的颜色
光的强度
颜色上的一个刻度。如果强度为0，则表示灯光禁用。只有当该对象被包含在输出驱动的 "强制灯光 "参数中时，灯光才会被发送到渲染器中。
灯光已启用
关闭这个切换键相当于将灯光强度设置为0。
在视口中启用灯光
关掉这个选项可以在视口中移除灯光。这对那些只有在渲染时才有意义的灯光很有用。
显示
该对象是否显示在视口中并进行渲染。打开复选框，让胡迪尼使用这个参数，然后将值设置为0，以在视口中隐藏该对象并不进行渲染，或者设置为1，以显示并渲染该对象。如果复选框是关闭的，胡迪尼就会忽略这个值。
启用视口选择功能
对象能够在视口中被选中。
选择脚本
当物体在视窗中被选中时，运行的脚本。请参阅 [select scripts](https://www.sidefx.com/docs/houdini/commands/_guide.html) .
缓存对象转换
当物体在视窗中被选中时，运行的脚本。请参阅 [选择脚本](https://www.sidefx.com/docs/houdini/commands/_guide.html) 。
缓存对象转换
一旦胡迪尼计算出对象的变换，就会将其缓存起来。这对那些世界空间位置计算成本较高的对象（例如 [Sticky objects](https://www.sidefx.com/docs/houdini/nodes/obj/sticky.html "根据表面的UV创建一个粘性对象，通常用于亲子关系。")），以及处于长亲子关系链末端的对象（例如 [Bones](https://www.sidefx.com/docs/houdini/nodes/obj/bone.html) "）。这个选项对于Sticky和Bone对象是默认打开的。
请参阅[Houdini Preferences](https://www.sidefx.com/docs/houdini/ref/windows/mainprefs.html#objcache)窗口中的**OBJ Caching**部分，了解如何控制对象转换缓存的大小。
