---
type: concept
title: Shatter
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:59
content_hash: "fbe54e42882d"
---
将输入的几何体打碎成多个碎片。
### Parameters
This tool cuts a model along a jagged line multiple times to create pieces you can then use with the [RBD Fractured Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdfracturedobject.html "Creates a number of RBD Objects from SOP Geometry. These individual RBD Objects are created from the geometry name attributes.") or [RBD Glue Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdglueobject.html).
The [RBD Fractured Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdfracturedobject.html "Creates a number of RBD Objects from SOP Geometry. These individual RBD Objects are created from the geometry name attributes.") and [RBD Glue Object](https://www.sidefx.com/docs/houdini/nodes/dop/rbdglueobject.html) tools set up the dynamic relationships between objects. The shatter tool creates the pieces automatically so you don’t have to manually break up the geometry.
The [Break](https://www.sidefx.com/docs/houdini/nodes/sop/break.html) tool creates a single jagged cut with manual control, whereas this tool creates several automatic cuts.
If you want the object to simply shatter on impact, a quick solution is to use the [Make Breakable](https://www.sidefx.com/docs/houdini/shelf/makebreakable.html "Automatically fractures an RBD object.") tool on the **Rigid Bodies** tab of the shelf. It uses the same voronoi fracture method as the Shatter tool, but gives you less artistic control. It is better to use Shatter for foreground shots and [Make Breakable](https://www.sidefx.com/docs/houdini/shelf/makebreakable.html "Automatically fractures an RBD object.") for objects in the background.
## Using Shatter
1.  Select the object you want to shatter.
2.  Click the ![](https://www.sidefx.com/docs/houdini/icons/SOP/shatter.svg)[Shatter](https://www.sidefx.com/docs/houdini/nodes/sop/voronoifracture.html "Fractures the input geometry by performing a Voronoi decomposition of space around the input cell points") tool on the **Model** tab.
    ![](https://www.sidefx.com/docs/houdini/images/shelf/shatter.jpg)
3.  Modify the parameters of the [Voronoi Fracture SOP](https://www.sidefx.com/docs/houdini/nodes/sop/voronoifracture.html "Fractures the input geometry by performing a Voronoi decomposition of space around the input cell points") to customize the way the object shatters. For example, turn off **Create Inside Surfaces** if the object is hollow like a jar, or turn it on if the object is solid like a rock.
See [this example file](https://www.sidefx.com/docs/houdini/examples/nodes/dop/rbdfracturedobject/ShatterDebris.html).