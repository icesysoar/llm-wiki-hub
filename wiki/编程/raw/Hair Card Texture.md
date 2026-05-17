---
type: concept
title: Hair Card Texture
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "b4ba014044b3"
---
渲染头发的纹理，供头发卡使用。
### Parameters
生成要用于以下各项生成的几何图形的纹理[发卡生成](https://www.sidefx.com/docs/houdini/nodes/obj/haircardgen.html "Converts dense hair curves to a polygon card, keeping the style and shape of the groom.")对象。导出的几何体和纹理一起可用于在游戏引擎中渲染逼真的发卡。
## 参数
## 对象
照相机
要用于渲染的摄像机。相机通常应构图头发对象，投影应设置为正交。
头发对象
要渲染的头发对象。
强制对象
强制对象渲染，即使它们处于隐藏状态。
## 渲染
分辨率
要输出的纹理分辨率。
像素样本
每个像素要投射的光线数。值越高，产生的图像质量越高，噪声越小。
## 输出
保存位置
要呈现到的目录。
名称前缀
纹理集的名称。
分隔符
名称前缀和图像平面后缀之间的分隔符。
文件类型
要输出的图像文件类型。
注意
例如，当“名称前缀”设置为 ，“分隔符”设置为 时，将命名漫反射纹理，将设置为“漫反射名称”，将“文件类型”设置为 。`hairtexture_diff.tga``hairtexture``_``diff``tga`
## 图像平面
弥漫 性
漫反射纹理的后缀。
阿尔法
alpha 纹理的后缀。
用户名
id 纹理的名称。
提示
笔尖纹理的名称。
深度
深度纹理的名称。
紫外线边界
UV 边界纹理的名称。
发卡生成对象或 SOP 可以使用此纹理在发卡几何图形上生成匹配的 UV 坐标。
## 当地人
另请参见
!Hair Card Generate#Hair Card Generate Object