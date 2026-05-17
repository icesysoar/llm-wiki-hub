---
type: concept
title: Relative distance
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "00cd2fb2ef27"
---
Relative distance 相对距离节点在指定的参考转换中将距离转换为灰度纹理，这个节点是用于AOV输出而出来的新的数据转换节点。可输出到AOV通道上，也可以跟别的节点进行混合做出更好玩的的效果。

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNICS0uOHadorMRc7jMyB0lXqbsBynrUnLicZM3GRjLnenQtP9tuSTqvBp38LxialQ6PLbSKTDFZK0ibtA/640?wx_fmt=png)

使用技巧

elative distance 相对距离这个节点的用法基本是在AOV输出通道上使用，首先要在AOV使用，就要配合AOV节点进行输出，就可以输出到通道上面了。（后面讲到新版的输出通道模式会更详细的讲）他这节点可将XYZ的方向转化成灰度纹理数据也就可以制作出以前做不了的特殊通道或者特殊合成，可玩性变得更强与阿诺德与红移等更加全面。

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNICS0uOHadorMRc7jMyB0lXqXQS9S09cv7xfn5m1jQ31z5h4nFwic5s3cTDMMMialkdoZaUnEsxTpRVw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/4R04oPticNICS0uOHadorMRc7jMyB0lXqic0Rbp4G8UIdLDjiaVJtohDGnoOExCmpB9Ujk7eoLtHvehLfqlfKNmKQ/640?wx_fmt=png)

Distance mode距离模式
Distance距离
X-axis offset X轴偏移
Y-axis offsetY轴偏移
Z-axis offset Z轴偏移
Use full transfor使用全变换
Normalize result 归一化结果
Normalization range .min归一化范围最小
Normalization range.max归一化范围最大