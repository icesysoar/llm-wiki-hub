---
type: concept
title: Polygon Reduction Generator
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "8db66ee51220"
---
-   [Polygon Reduction Generator](https://help.maxon.net/c4d/r25/en-us/Content/html/OPOLYREDUXGEN.html?TocPath=Create%2520Menu%257CGenerators%257CPolygon%2520Reduction%2520Generator%257C_____0)
    -   [Basic Properties](https://help.maxon.net/c4d/r25/en-us/Content/html/OPOLYREDUXGEN-OBASELIST.html?TocPath=Create%2520Menu%257CGenerators%257CPolygon%2520Reduction%2520Generator%257C_____1)
    -   [Coordinates](https://help.maxon.net/c4d/r25/en-us/Content/html/OPOLYREDUXGEN-ID_BASEOBJECT_GROUP1.html?TocPath=Create%2520Menu%257CGenerators%257CPolygon%2520Reduction%2520Generator%257C_____2)
    -   [Object Properties](https://help.maxon.net/c4d/r25/en-us/Content/html/OPOLYREDUXGEN-ID_OBJECTPROPERTIES.html?TocPath=Create%2520Menu%257CGenerators%257CPolygon%2520Reduction%2520Generator%257C_____3)



![](https://help.maxon.net/c4d/r25/en-us/Content/Resources/Images/icons/PLUGIN_CMD_465002101.png)

![](https://help.maxon.net/c4d/r25/en-us/Content/Resources/Images/040928.jpg)A 3D scanned polygon reduced, textured pear with different Reduction Strength values. Note that, contrary to R18, the UV coordinates have been adapted.

# Why Polygon Reduction?

The fewer polygons that are in a scene, the faster a scene can be edited and rendered. 3D scanned objects, for example, often consist of hundreds of thousands or even millions of polygons that can be cumbersome to edit in Cinema 4D or may not even be handled at all. For example, if the objects in the scene are in positioned the background, millions of polygons can basically go to waste and will unnecessarily bog down the hardware.

Also, if 3D objects should be accessible interactively online, they should also contain as few polygons as possible. The Polygon Reduction Generator can be used for these and other purposes.

Note:Note also the [Remesh objekt](https://help.maxon.net/c4d/r25/en-us/Content/html/OREMESH.html), which can also be used to reduce polygons and can also be used to generate square polygons.

# Polygon reduction in Cinema 4D

The purpose of polygon reduction is to reduce an object’s polygon count by maintaining the object’s original shape to the highest degree. Note that this process will always apply triangulation. Polygon reduction in Cinema 4D is done using a Polygon Reduction Generator, which means that the object to be reduced must be made a Child object of this Generator.

The polygon reduction process now also converts - as far as possible - properties such as UV coordinates, vertex colors, vertex maps, etc. for the newly reduced objects. This was not the case in previous versions of Cinema 4D. Of course compromises have to be made for very large reductions since the details (point density) will simply no longer be sufficient to maintain the original shape if the number of polygons is greatly reduced. For very large reductions, textures, weighting and colors will only be located at the approximate location at which they originally were (see image above at 99.9%), which generally shouldn’t be a problem if the camera is positioned far enough away:

![](https://help.maxon.net/c4d/r25/en-us/Content/Resources/Images/040929.jpg)UV coordinates on this muffin were also edited.

As soon as the Generator starts is calculation (which can take correspondingly longer for objects with greater numbers of points), comprehensive and detailed pre-calculations will be made internally. After these have been completed, the Reduction Strength value (as well as all animatable object settings; if other settings are modified, a new pre-calculation will be made) can be modified interactively, whereby the results for the vertex maps and vertex colors will be displayed in the Viewport. During the pre-calculation - which can be halted at anytime by disabling the Polygon Reduction Generator - you can continue working in Cinema 4D.

[Basic Properties](https://help.maxon.net/c4d/r25/en-us/Content/html/OPOLYREDUXGEN-OBASELIST.html?TocPath=Create%2520Menu%257CGenerators%257CPolygon%2520Reduction%2520Generator%257C_____1)

[Coordinates](https://help.maxon.net/c4d/r25/en-us/Content/html/OPOLYREDUXGEN-ID_BASEOBJECT_GROUP1.html?TocPath=Create%2520Menu%257CGenerators%257CPolygon%2520Reduction%2520Generator%257C_____2)

[Object Properties](https://help.maxon.net/c4d/r25/en-us/Content/html/OPOLYREDUXGEN-ID_OBJECTPROPERTIES.html?TocPath=Create%2520Menu%257CGenerators%257CPolygon%2520Reduction%2520Generator%257C_____3)