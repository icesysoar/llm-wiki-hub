---
type: raw
title: OC如何隐藏照射在雾气上的光源
tags: []
status: pending
source_type: user_upload
created: 2026-05-04
content_hash: "ce1deccd6c91"
---

# OC如何隐藏照射在雾气上的光源

## 核心要点

- 前提条件- -:在已经存在主光源场景中，场景的雾气效果已经
设置好了，但是想在场景中对物体进行额外的补充灯光照射，
如下图
![](https://cdn.nlark.com/yuque/0/2021/png/2079551/1635608082724-cfcddd3d-b5c5-4d71-8057-6704af12ed4e.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=kgoYv&margin=%5Bobject%20Object%5D&originHeight=425&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
(图中主要的雾气和光源已经设置好了但是想对方块添加额外的补充灯光)
![](https://cdn.nlark.com/yuque/0/2021/png/2079551/1635608231169-6c0d29c2-ea61-4130-9784-d6a20d9e7412.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=SNkgM&margin=%5Bobject%20Object%5D&originHeight=422&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)(图中新添加了-个补充灯光想打亮方块的右上方角落，图中添加的灯光已经把Opacity调整为0, Camera
Visibility也去除，会发现出现-个无法去除的灯光形状的发光面)
在出现上述的情况时，可以尝试使用此方法来去除灯光在雾气中的存在。
1.点击灯光标签给灯光的Texture中添加一一个OSL Texture节点。
![](https://cdn.nlark.com/yuque/0/2021/png/2079551/1635609041600-f9b447ec-edf9-48a6-881e-774160b25c9f.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=JNU6Z&margin=%5Bobject%20Object%5D&originHeight=406&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
2.把代码复制替换到左侧的方框中并点击Compile。
- 3.通过调整数值来控制想被灯光影响的因素。比如想让灯光在摄像机中出现则把Cam的数值调整为1,想让灯光
影响物体的Diffuse层则把Diff的数值改为1,想让灯光影响到物体的Reflection则把Ref的数值改为1, 反之亦
然。
![](https://cdn.nlark.com/yuque/0/2021/png/2079551/1635679452682-dc6346a7-16a1-4226-90c4-a2b1aeaf3d99.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=xvZ8J&margin=%5Bobject%20Object%5D&originHeight=423&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
(图中，OsI Texture节点中Diff和Ref的数值为1,其他选项皆为0。)
最后，这个方法试验后不能百分百去除掉灯光面片，还是可以看到雾气中有淡淡灯光面片痕迹，但是不会存在一
个很亮的区域面片,在实际操作中可以寻找恰当的角度避免灯光放在前景特写的地方,或者采用巧妙的物体遮挡
来完美解决。
前提条件二:场景中雾气已经调整好，整个场景中只有一个灯光作为主光
源，想去除灯光在雾气环境中的发光面片，如下图
![](https://cdn.nlark.com/yuque/0/2021/png/2079551/1635681878913-6a405b93-21a7-478f-9981-67303b28cfaa.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=bebc9&margin=%5Bobject%20Object%5D&originHeight=425&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
(图中，OsI Texture节点中Diff的数值为1,其他选项皆为0。)
最后,这个方法在实验中对于只有一个灯光作为光源的雾气场景中，可以看到这个方法还是可以完美处理雾气中
灯光形状亮面。

## 详细内容

### 前提条件- -:在已经存在主光源场景中，场景的雾气效果已经
设置好了，但是想在场景中对物体进行额外的补充灯光照射，
如下图
![](https://cdn.nlark.com/yuque/0/2021/png/2079551/1635608082724-cfcddd3d-b5c5-4d71-8057-6704af12ed4e.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=kgoYv&margin=%5Bobject%20Object%5D&originHeight=425&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
(图中主要的雾气和光源已经设置好了但是想对方块添加额外的补充灯光)
![](https://cdn.nlark.com/yuque/0/2021/png/2079551/1635608231169-6c0d29c2-ea61-4130-9784-d6a20d9e7412.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=SNkgM&margin=%5Bobject%20Object%5D&originHeight=422&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)(图中新添加了-个补充灯光想打亮方块的右上方角落，图中添加的灯光已经把Opacity调整为0, Camera
Visibility也去除，会发现出现-个无法去除的灯光形状的发光面)
在出现上述的情况时，可以尝试使用此方法来去除灯光在雾气中的存在。
1.点击灯光标签给灯光的Texture中添加一一个OSL Texture节点。
![](https://cdn.nlark.com/yuque/0/2021/png/2079551/1635609041600-f9b447ec-edf9-48a6-881e-774160b25c9f.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=JNU6Z&margin=%5Bobject%20Object%5D&originHeight=406&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
2.把代码复制替换到左侧的方框中并点击Compile。

### 3.通过调整数值来控制想被灯光影响的因素。比如想让灯光在摄像机中出现则把Cam的数值调整为1,想让灯光
影响物体的Diffuse层则把Diff的数值改为1,想让灯光影响到物体的Reflection则把Ref的数值改为1, 反之亦
然。
![](https://cdn.nlark.com/yuque/0/2021/png/2079551/1635679452682-dc6346a7-16a1-4226-90c4-a2b1aeaf3d99.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=xvZ8J&margin=%5Bobject%20Object%5D&originHeight=423&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
(图中，OsI Texture节点中Diff和Ref的数值为1,其他选项皆为0。)
最后，这个方法试验后不能百分百去除掉灯光面片，还是可以看到雾气中有淡淡灯光面片痕迹，但是不会存在一
个很亮的区域面片,在实际操作中可以寻找恰当的角度避免灯光放在前景特写的地方,或者采用巧妙的物体遮挡
来完美解决。
前提条件二:场景中雾气已经调整好，整个场景中只有一个灯光作为主光
源，想去除灯光在雾气环境中的发光面片，如下图
![](https://cdn.nlark.com/yuque/0/2021/png/2079551/1635681878913-6a405b93-21a7-478f-9981-67303b28cfaa.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=bebc9&margin=%5Bobject%20Object%5D&originHeight=425&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
(图中，OsI Texture节点中Diff的数值为1,其他选项皆为0。)
最后,这个方法在实验中对于只有一个灯光作为光源的雾气场景中，可以看到这个方法还是可以完美处理雾气中
灯光形状亮面。

## 来源

- 原始文件：OC如何隐藏照射在雾气上的光源
- Ingest 日期：2026-05-04
