---
type: concept
title: Point Jitter
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "e1e7fb00a13b"
---
沿着随机方向抖动点的位置
### Parameters
此节点将通过略微改变它们的值来随机化点位置。 当精确对齐的数据可能是一个问题时，这很有用。 例如，一组精确对齐的弹簧可能处于不切实际的精确平衡。 抖动点位置将破坏人工对称性。
此节点适用于点。

Group
Points to jitter.
Id Attribute
Instead of using the point number as the seed, use this integer attribute.
Scale
Overall scale of the offset to move the points. Points are jittered by a value of -0.5 to 0.5 times this scale, and then modified by the other scales.
Axis Scales
Each axis of jitter is scaled by the corresponding scale here. This can be used to achieve a two dimensional jitter by setting the unwanted axis to 0.
Seed
The random number seed used to generate the jitter values. Changing this will create a different set of jitter offsets.
Use Point Scale
If enabled, the `pscale` point attribute will be used to further scale the jitter amount. This provides per-point jitter control.
See also
-   [/nodes/sop/mountain](https://www.sidefx.com/docs/houdini/nodes/sop/mountain.html)
-   [/nodes/sop/point](https://www.sidefx.com/docs/houdini/nodes/sop/point.html)