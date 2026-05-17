---
type: concept
title: Capture Attribute Pack
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "902d3536d807"
---
将数组属性转换为单一的索引对捕获属性。
### Parameters
The Capture Attribute Pack SOP takes a set of array attributes and uses a naming convention to turn it into a single index pair attribute. It can be used with the result of a [Capture Attribute Unpack SOP](https://www.sidefx.com/docs/houdini/nodes/sop/captureattribunpack.html "Converts a single index-pair capture attribute into per-point and detail array attributes.") after processing the weights through VEX.

How points are captured requires knowledge of both per-point information as well as global meta-data about each capture region. The Index Pair attribute can store all the meta-data as a single attribute, making it convenient to move about, and allowing support for blending and merging of captured geometry. However, it is not very practical for manipulation.

Instead of a single index pair attribute, a group of detail and point array attributes can be used. The point attributes consist of an index array attribute suffixed `_index` which refer to items in metadata; and a data array attribute suffixed with `_data` which usually stores the weights of each point. The detail attributes are all array attributes which represent properties of the metadata. The primary attributes are indexed directly from the point index array attribute. However, there can also be secondary attributes, with an infix of `_secondary#`, which represent additional tables of metadata. These will have their own implied indirection rules.

## PARAMETERS

Class

The class of attribute storing the data, usually point. The `_index` and `_data` attributes should be this class. All the property metadata attributes are detail attributes regardless of this setting.

Attribute

The name of the index pair attribute to create. If it already exists, it will be modified with new values from the attributes.

Prefix

If blank, the attribute name followed by `_` is used as the prefix.

The prefix followed by `index` is used to find an integer array attribute to index into the metadata. The prefix followed by `data` is used to find a data array attribute to form the per element data.

All detail attributes with the prefix are considered meta data properties

Secondary

It is possible to have multiple separate tables of metadata. The additional tables all have secondary#, where # is the extra table number (starting at 1), after the prefix and before the property name.

Pack Properties

Attempt to find detail attributes and override the index pair properties with these. All of the index pair’s metadata will be replaced by the found detail attributes.

Pack Data

Replace the index pair’s data and index values with the per-element index and data arrays. Note each element should have the same length index and data array size.

Delete Array Attributes

Remove the array attributes after processing, leaving only the generated index pair attribute.

See also

-   [/nodes/sop/deform](https://www.sidefx.com/docs/houdini/nodes/sop/deform.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/captureproximity.svg) Bone Capture Proximity](https://www.sidefx.com/docs/houdini/nodes/sop/captureproximity.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/capturecorrect.svg) Capture Correct](https://www.sidefx.com/docs/houdini/nodes/sop/capturecorrect.html)