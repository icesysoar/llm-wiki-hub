---
type: raw
title: OC降噪全说明
tags: []
status: pending
source_type: user_upload
created: 2026-05-04
content_hash: "34da4e7e7892"
---

# OC降噪全说明

## 核心要点

- 这个问题是大家问的最多的问题之一 ，以下内容主要是关于OCTANE降噪和后期辅助。
一 .OCTANE内降噪:
0.画面有小亮点(在没有使用降噪的情况下如何减少)
小亮点大部分由于表面湿润的凹凸所引起，凹凸越密集就越容易出现，所以解决方案是减弱凹
凸、减弱specular或者增加材质的Roughness即可
1.在摄像机的Camera Imager里将Hotpixel Removal调低，一般0.3-0.5， 会大量减少小白点
![](https://cdn.nlark.com/yuque/0/2020/png/2077508/1596552726423-297aeb11-85de-4898-9db0-64ce76e3521a.png#crop=0&crop=0&crop=1&crop=1&from=url&id=SlXvi&margin=%5Bobject%20Object%5D&originHeight=665&originWidth=665&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
2.同时在OCTANE的设定里，将GI改为1-10 (太低可能会导致光影渲染不正确，建议是10)
![](https://cdn.nlark.com/yuque/0/2020/png/2077508/1596552845398-b5825dba-aabd-40d7-b99b-10bc88f261db.png#crop=0&crop=0&crop=1&crop=1&from=url&id=RQ3c9&margin=%5Bobject%20Object%5D&originHeight=400&originWidth=400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
3.给有反射的材质都增加少许Roughness,减弱纯BUMP的存在
![](https://cdn.nlark.com/yuque/0/2020/png/2077508/1596552882160-0c6e3fef-d14b-4e18-9007-2f28116ce67b.png#crop=0&crop=0&crop=1&crop=1&from=url&id=IIxDw&margin=%5Bobject%20Object%5D&originHeight=526&originWidth=900&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
4.如果发现某-块噪点特别多，找到这个噪点的光源，给这个光源多-点权重来计算渲染
![](https://cdn.nlark.com/yuque/0/2020/png/2077508/1596552996351-3266d9b2-297e-4a4f-958b-ad632015f19a.png#crop=0&crop=0&crop=1&crop=1&from=url&id=piaYl&margin=%5Bobject%20Object%5D&originHeight=536&originWidth=683&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
5.高版本可以尝试使用OCTANE的Al降噪
![](https://cdn.nlark.com/yuque/0/2021/png/2077508/1633857433045-2cc9e752-cf4c-42bf-9093-2716ba40c08d.png#crop=0&crop=0&crop=1&crop=1&from=url&id=h9D63&margin=%5Bobject%20Object%5D&originHeight=462&originWidth=731&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
同时开启设置里的启用降噪，渲染完成才会有效果
![](https://cdn.nlark.com/yuque/0/2021/png/2077508/1633857471393-1a93bc62-d9d5-469a-bbd1-81d94735b2d6.png#crop=0&crop=0&crop=1&crop=1&from=url&id=qWhMo&margin=%5Bobject%20Object%5D&originHeight=685&originWidth=879&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
二.后期AE除燥
1.使用红巨星傻瓜式插件Denoiser直接一键降噪
2.使用稍微复杂一点的专业降噪插件neat video进行精准降噪

## 详细内容

### 这个问题是大家问的最多的问题之一 ，以下内容主要是关于OCTANE降噪和后期辅助。
一 .OCTANE内降噪:
0.画面有小亮点(在没有使用降噪的情况下如何减少)
小亮点大部分由于表面湿润的凹凸所引起，凹凸越密集就越容易出现，所以解决方案是减弱凹
凸、减弱specular或者增加材质的Roughness即可
1.在摄像机的Camera Imager里将Hotpixel Removal调低，一般0.3-0.5， 会大量减少小白点
![](https://cdn.nlark.com/yuque/0/2020/png/2077508/1596552726423-297aeb11-85de-4898-9db0-64ce76e3521a.png#crop=0&crop=0&crop=1&crop=1&from=url&id=SlXvi&margin=%5Bobject%20Object%5D&originHeight=665&originWidth=665&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
2.同时在OCTANE的设定里，将GI改为1-10 (太低可能会导致光影渲染不正确，建议是10)
![](https://cdn.nlark.com/yuque/0/2020/png/2077508/1596552845398-b5825dba-aabd-40d7-b99b-10bc88f261db.png#crop=0&crop=0&crop=1&crop=1&from=url&id=RQ3c9&margin=%5Bobject%20Object%5D&originHeight=400&originWidth=400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
3.给有反射的材质都增加少许Roughness,减弱纯BUMP的存在
![](https://cdn.nlark.com/yuque/0/2020/png/2077508/1596552882160-0c6e3fef-d14b-4e18-9007-2f28116ce67b.png#crop=0&crop=0&crop=1&crop=1&from=url&id=IIxDw&margin=%5Bobject%20Object%5D&originHeight=526&originWidth=900&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
4.如果发现某-块噪点特别多，找到这个噪点的光源，给这个光源多-点权重来计算渲染
![](https://cdn.nlark.com/yuque/0/2020/png/2077508/1596552996351-3266d9b2-297e-4a4f-958b-ad632015f19a.png#crop=0&crop=0&crop=1&crop=1&from=url&id=piaYl&margin=%5Bobject%20Object%5D&originHeight=536&originWidth=683&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
5.高版本可以尝试使用OCTANE的Al降噪
![](https://cdn.nlark.com/yuque/0/2021/png/2077508/1633857433045-2cc9e752-cf4c-42bf-9093-2716ba40c08d.png#crop=0&crop=0&crop=1&crop=1&from=url&id=h9D63&margin=%5Bobject%20Object%5D&originHeight=462&originWidth=731&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
同时开启设置里的启用降噪，渲染完成才会有效果
![](https://cdn.nlark.com/yuque/0/2021/png/2077508/1633857471393-1a93bc62-d9d5-469a-bbd1-81d94735b2d6.png#crop=0&crop=0&crop=1&crop=1&from=url&id=qWhMo&margin=%5Bobject%20Object%5D&originHeight=685&originWidth=879&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
二.后期AE除燥
1.使用红巨星傻瓜式插件Denoiser直接一键降噪
2.使用稍微复杂一点的专业降噪插件neat video进行精准降噪

## 来源

- 原始文件：OC降噪全说明
- Ingest 日期：2026-05-04
