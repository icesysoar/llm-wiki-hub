---
type: concept
title: Capture Attribute Unpack
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "8765413ac72f"
---
将单个索引对的捕获属性转换为每个点属性或细节数组属性
### Parameters
The Capture Attribute Unpack SOP takes index-pair attribute and converts it into a set of array attributes by a naming convention. The resulting set of attributes is easier to manipulate with VEX, and can be repackaged with the [Capture Attribute Pack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/captureattribpack.html "Converts array attributes into a single index-pair capture attribute.").

How points are captured requires knowledge of both per-point information as well as global meta-data about each capture region. The Index Pair attribute can store all the meta-data as a single attribute, making it convenient to move about, and allowing support for blending and merging of captured geometry. However, it is not very practical for manipulation.

Instead of a single index pair attribute, a group of detail and point array attributes can be used. The point attributes consist of an index array attribute suffixed `_index` which refer to items in metadata; and a data array attribute suffixed with `_data` which usually stores the weights of each point. The detail attributes are all array attributes which represent properties of the metadata. The primary attributes are indexed directly from the point index array attribute. However, there can also be secondary attributes, with an infix of `_secondary#`, which represent additional tables of metadata. These will have their own implied indirection rules.

## PARAMETERS

Class

The class of attribute storing the data, usually point. The `_index` and `_data` attributes should be this class. All the property metadata attributes are detail attributes regardless of this setting.

Attribute

The name of the index pair attribute to unpack.

Prefix

If blank, the attribute name followed by `_` is used as the prefix.

The prefix followed by `index` is used to create an integer array attribute to store indices into the metadata. The prefix followed by `data` is used to create a data array attribute to form the per element data.

The meta data will be converted to detail array attributes that start with the prefix.

Secondary

It is possible to have multiple separate tables of metadata. The additional tables will have secondary#, where # is the extra table number (starting at 1), after the prefix and before the property name.

Unpack Properties

Generate detail array attributes storing all of the meta-data tables.

Unpack Data

Generate per-element array attributes storing the index and data values.

Delete Capture Attributes

Remove the capture attribute after processing, leaving only the generated array attribute.

## EXAMPLES

Load Launch

[VexDeform](https://www.sidefx.com/docs/houdini/examples/nodes/sop/captureattribunpack/VexDeform.html)Example for [Capture Attribute Unpack](https://www.sidefx.com/docs/houdini/nodes/sop/captureattribunpack.html) geometry node

This is an example of how to use the Capture Attribute Unpack SOP to turn capture attributes into something accessible to VEX. It then provides methods to smooth the capture attributes and deform them entirely in VEX.

See also

-   [/nodes/sop/deform](https://www.sidefx.com/docs/houdini/nodes/sop/deform.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/captureproximity.svg) Bone Capture Proximity](https://www.sidefx.com/docs/houdini/nodes/sop/captureproximity.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/capturecorrect.svg) Capture Correct](https://www.sidefx.com/docs/houdini/nodes/sop/capturecorrect.html)