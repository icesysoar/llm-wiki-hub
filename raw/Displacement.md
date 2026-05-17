---
type: concept
title: Displacement
tags: []
status: pending
source_type: web_fetch
created: 2026-05-02
content_hash: "bfc20fea3fe0"
---

在没有大量工作的情况下添加现实主义的流离失所是一个很好的作弊，但是，很可能会失去流离失所的好处 - 构造的网格不良，不良UV（或根本没有），有损图像地图格式（JPG，PNG） 或图像地图中的缺乏颜色和/或价值范围可能导致对技术支持的失望和电子邮件。 以下部分讨论了一系列提示和技术，这将导致更好的位移质量。
  

#### COLOR DEPTH AND FILE FORMAT

位移需要最高质量的图像映射来提供最佳结果。 以无损格式保存，如TIF。 位移需要尽可能多的亮度范围，为此建议使用32位（BPC）。 不要使用“有损”文件格式，例如PNG或更差，JPG，因为这些格式使用的压缩伪像将产生明显的伪像。
  

#### IMAGE QUALITY

Good displacement results require that the image map driving the displacement has smooth gradations of value between light and dark pixels, otherwise harsh artifacts will occur. A good way to check this is to zoom into the image map very closely and examine the image well beyond 100% magnification. There should NOT be any harsh areas of black with full white without a smooth transition in between. It is possible to clean up these neighboring values by using the Filter option of the Displacement node. That will only go so far, however, and it may be necessary to go in and clean up the image map directly.

  

#### IMAGE MAP RESOLUTION AND DENSITY

The resolution of your image maps will affect the quality of the displacement as well. Small-sized maps may be acceptable for mid distance and greater shots, but likely not suitable for closeup work. 

  

The portion of the map that is driving the displacement is also very important. A large 4K map might seem like a good idea, but if the portion of the map used for a given displacement is less than 25% of the area of the image map, think again. Maximize the resources consumed as much as possible. Make every pixel of those displacement maps count, since they are expensive, in terms of VRAM consumption and render time.

  

#### UV LAYOUT, POLYGON DENSITY AND PROPER EDGE FLOW

For best results, the object using displacements should have the proper UV layout. This can be a tedious process, but when done correctly, the results will be consistent, reliable and look great. All faces should be flat, as if you made the object out of paper, and then unfolded it back into a flat sheet. No edge of any polygonal face should be seen as "edge-on." This will cause the pixels in the image map to be stretched when viewed away from camera and will produce black faces or other unwanted artifacts.

  

The density and distribution of the polygons in the mesh should be consistent, and many UV un-mapping products will use "heat maps" to show how much inter-polygon "stretching" is occurring. The easiest way to get a consistent distribution is using box modeling techniques, which is common when subdivision surfaces are employed. Proper distribution should resemble a "net" that forms the parts of a given object, when viewed as a flat projection. Polygon shape should more resemble squares rather than long, thin slivers.

  

As with density, the size of the polygons should be as consistent as possible, and again, this is most consistently accomplished with box modeling techniques. There are many sources available that provide tutorials and reference materials for good modeling technique. [MILG11](https://helloluxx.com/product/making-it-look-great-11/) is a fantastic box/subD modeling resource, as is [pushingpoints.com](http://pushingpoints.com/v2/).

  

Edge flow is the way that polygons are structured as they define the shape of a given object. Polygons are made up of points, lines (edges) and faces; they way that these components relate to each other is the "flow." This is particularly apparent when loop selection is used to pick polygons. Done properly, when selecting a component with loop selection, connected components should form selection "bands" in an understandable manner. Good edge definition is particularly important wherever channels, holes and other sudden changes in altitude occur in an object's mesh. Edge flow is popular for modeling characters, but, in reality, it is a good practice to have solid edge flow regardless of what the object is intended to be. As before, box modeling techniques tend to promote good edge flow, but it is still a technique that requires practice. Displacements benefit greatly from a properly structured mesh.

  

#### CINEMA 4D SUBD GENERATOR VS. OCTANE OBJECT TAG

The Octane Object tag should be used for all of your objects, or parent items in a hierarchy, but are particularly important for displacement maps. The Subdivision tab in the Octane Object tag will use the GPU to subdivide, and it will do so far more quickly than the C4D version can. Also, sending the model to the GPU VRAM will go more quickly, as there will be less data to send.

  

That said, there are conditions where you may prefer the Cinema 4D SubD generator for subdividing instead of the Octane Object tag, and this has to do primarily with edge weighting — the Octane Object tag does not support edge weighting. So, if you have built your mesh with that method in mind, or you do not like the density that certain box modeling techniques will result in and you prefer to use edge weighting instead, then the Cinema 4D SubD generator is the better choice. 

  

One other option for subdivision is the displacement node when Vertex Displacement is used. This method will activate a subdivision edit box that is not available when texture displacement is used. The edit box will produce the same results as either the Octane Object tag or the Cinema 4D SubD generator, though again, without support for edge weighting.

  

#### IMAGE TEXTURE NODE VS. BITMAP NODE

Bitmap nodes support legacy Cinema 4D materials that have been converted into Octane materials. However, these nodes should be replaced with Image Texture nodes instead, as they have more control and it is more efficient for Octane. Additionally, Image Texture nodes can conserve VRAM if the Image type is set to "Float" when using grayscale images.