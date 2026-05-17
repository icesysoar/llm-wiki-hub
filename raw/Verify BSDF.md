---
type: concept
title: Verify BSDF
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "6bc7012c4794"
---
 验证BSDF是否符合所需的界面。
### Parameters
This node provides some useful checks and balances that can be used to verify whether a `cvex_bsdf` conforms to the required interface. It works by randomly sampling and evaluating the bsdf with point samples, and will additionally show a visualization of the shape of the bsdf as a point cloud.

By default, the Hair BSDF’s `R` component is used. Modify the `verify_bsdf` [VOP SOP](https://www.sidefx.com/docs/houdini/nodes/sop/vopsop.html) inside this node to change the BSDF.

For more information on how to verify a BSDF with this node, refer to the sticky notes inside this node.

## PARAMETERS

Incident Direction

The direction from the BSDF to the viewer.

Samples

The number of point samples to create.

See also

-   [cvex_bsdf](https://www.sidefx.com/docs/houdini/vex/functions/cvex_bsdf.html)