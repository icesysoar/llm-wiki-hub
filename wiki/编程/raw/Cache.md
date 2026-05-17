---
type: concept
title: Cache
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:58
content_hash: "2d0b5d0e5f85"
---
为了能快速的播放将它输入的几何体记录和缓存到内存中，速度比写到硬盘上要快得多的多
### Parameters
Use this when [cook](https://www.sidefx.com/docs/houdini/basics/cooking.html) times for a chain of ops is long and you need quicker playback, at the expense of using more memory.

Once cached, the geometries can be accessed in any order. This is better than a 2D flipbook or scene render since the geometry is still three dimensional. It is also ideal for pop networks since once it’s cached you can play it forward or backward.

This lets you scrub otherwise sluggish animations in real time, play pop networks backwards, etc. because the animation is precomputed and stored in memory.

You can automate invalidation of the cache by connecting a node to the second reference input of this SOP. Any modification of parameters in the reference input chain will clear the cache, however updates to the parameters due to time changes will not. The first and second inputs can be connected to the same or different nodes.

Note

This node can also be used a sliding cache around the current frame by putting expressions such as `$F-3` and `$F+3` in the `Start/End` parameters. A sliding cache can greatly accelerate calculations that involve multiple time-shifting nodes, such as calculating point velocities with a [Trail SOP](https://www.sidefx.com/docs/houdini/nodes/sop/trail.html "Creates trails behind points.") from geometry interpolated by a [TimeBlend SOP](https://www.sidefx.com/docs/houdini/nodes/sop/timeblend.html).

## PARAMETERS

Cache Any Frame

When enabled, there is no frame range limitation or granularity limitation on which frames will be cached. Instead, there is just a **Max Frames to Cache** parameter.

Max Frames to Cache

When **Cache Any Frame** is enabled, this indicates the maximum number of different frames of geometry to keep cached. Lower this to reduce the risk of running out of memory. Raise it if more frames need to stay cached.

Clear Cache when Change Upstream

When enabled, if a parameter or connection is explicitly changed upstream, i.e. excluding changes that are just due to time changing, the cache is cleared. If the second input is used, this parameter is ignored, and the cache will always be cleared when that input has such an upstream change.

Start/End/Inc

A range of values at which to set the index and param name when caching.

Index

Set to each value within the range for each geometry cached.

Index Param Name

A stampable parameter set to the index during caching.

Set Frame to Index When Caching

Set the local time to the index for each geometry cached.

Load

The loading behavior.

Reload All Cache

Clear the cache and reload everything.

Clear Cache

Delete all the stored cache.

Cache Points Only

Store a single topology for the first cached geometry and only point data for the remaining geometries.

Blend Position

Interpolate points between geometries.

To use this option, replace the **Index** with the floating point frame number `$FF`.

To check that you are blending subframe, use the playbar options to turn off integer frame values, and scrub the playbar slowly between frames.

## EXAMPLES

Load Launch

[SlowParticles](https://www.sidefx.com/docs/houdini/examples/nodes/sop/cache/SlowParticles.html)Example for [Cache](https://www.sidefx.com/docs/houdini/nodes/sop/cache.html) geometry node

This file uses the Particle SOP to create a stream of particles.

Then using the Cache SOP, the particles are slowed down. The Cache SOP has the ability to control the frame rate of an animation and read the animation slower than the global frame rate

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/trail.svg) Trail](https://www.sidefx.com/docs/houdini/nodes/sop/trail.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/timeshift.svg) TimeShift](https://www.sidefx.com/docs/houdini/nodes/sop/timeshift.html)