---
type: concept
title: Clipping Material
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "96bcc391bb29"
---
Clipping material 裁剪材质是把模型作为布尔使用的一种材质。  
### Parameters
裁剪材质在空间体积内修剪几何形状，这打开了许多新的可能性，因为它允许有效地修改原来的几何互动。剪报材料利用它所附的几何形状，并利用这个形状从与它相交的另一个几何形状中剪下来。
#### Enabled 启用
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIBsHaKLNnSZusBcsF8aveYyWS3VAJ7FvEKiccS3ow85mCuzLkCuRI4cOiccT7Wreo0DjdxW1YlObjKA/640?wx_fmt=png)
布尔开关的按钮，用于启动关闭的开关。  
#### intersection 裁切材质
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIBsHaKLNnSZusBcsF8aveYytGU2KuclscmtLPhSZZ4HkEnE16zH1IdcK9UNXcqsYgGzbynicvONEqQ/640?wx_fmt=png)
这个参数是可以让裁切面使用其他材质球，裁剪的变形只有高度和法线有效，置换不起作用。
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNICgT5ict9iakb6zo88lM8lyYoicpwVUXWafaNG1gHuywmiagMYhXhhdvPPPp0VQuBFbBUXjOwSdhoUkCw/640?wx_fmt=png)
可以配合这裁切材质制作复杂模型切割切割动画，配合运动图形可以做出比较复杂的布尔动画。
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNICgT5ict9iakb6zo88lM8lyYoAvBbXr6hIg2G4Xkq1GhtC8uic2a3pxbichWfas1urjl5KXicJtFnvnD0A/640?wx_fmt=png)
S24的放置笔刷也是起作用的，功能比真实的布尔效果更快，而且也不卡顿。
#### Priority 优先级
![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNIBsHaKLNnSZusBcsF8aveYybSiccWQbYrWToTdicJQRxFSB0iaEFW5Suzr87CCFcnWcqiaab9Vj4mibCUA/640?wx_fmt=png)
默认情况下，剪报材料的优先级为 100，并且将剪切每个几何形状，优先级材料少于 100。