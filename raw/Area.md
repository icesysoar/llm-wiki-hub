---
type: concept
title: Area
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "f5c7b45ce672"
---
计算通道图形下的面积，这与计算通道的积分相同，或对通道进行积分。
### Parameters
This CHOP calculates the area under a channel’s graph, which is the same as calculating the “integral” of a channel, or “integrating” the channel.
It uses the graph of each input channel and calculates the area between the graph and the horizontal 0-value line. It finds the area between a **Start** and **End** index, which is by default the entire chop range.
The area is calculated by adding the channel values for every sample, starting with the sample at the Start index. Negative values reduce the area. The area is converted to the Units by dividing by samples per Unit. The cumulative values are put in the output channels.
This CHOP is particularly useful for calculating a point’s position from its velocity (speed) or acceleration. If the input is a velocity, a **First Order** integral will return the position. If the input is an acceleration, a **Second Order** integral will return the position, and a **First Order** integral will return the velocity.
The first input contains the channels to be integrated.
The second input is used to reset the area to zero. At samples where the second input is zero or less, the area is reset to zero. A [Wave CHOP](node:chop/wave.html) passed into the second input causes the Area to be zero for half a cycle.
The third input is an optional start/end reference. If connected, it will override the parameters in the Range page and integrate the first input’s channels between the start and end of the reference input.

## Area
Order
Determines the order of the integral to use.
First Constant
Constant to add to the entire result after integrating once.
Second Constant
Constant to add to the entire result after integrating twice.
Third Constant
Constant to add to the entire result after integrating three times.
## Interval specifying the range to integrate over
Unit Values
Determines whether the start and end parameters listed below are absolute or relative to the channel’s start and end.
Start
The start of the range over which to compute the area.
End
The end of the range over which to compute the area.
## Common
Some of these parameters may not be available on all CHOP nodes.
Scope
To determine which channels get affected, some CHOPs have a scope string. Patterns can be used in the scope, for example `*` (match all), and `?` (match single character).
The following are examples of possible channel name matching options:
`chan2`
Matches a single channel name.
`chan3 tx ty tz`
Matches four channel names, separated by spaces.
`chan*`
Matches each channel that starts with `chan`.
`*foot*`
Matches each channel that has `foot` in it.
`t?`
The `?` matches a single character. `t?` matches two-character channels starting with t.
`r[xyz]`
Matches channels `rx`, `ry` and `rz`.
`blend[3-7:2]`
Matches number ranges giving `blend3`, `blend5`, and `blend7`.
`blend[2-3,5,13]`
Matches channels `blend2`, `blend3`, `blend5`, `blend13`.
`t[xyz]`
`[xyz]`matches three characters, giving channels `tx`, `ty` and `tz`.
Sample Rate Match
The Sample Rate Match Options handle cases where multiple input CHOPs’ sample rates are different.
Resample At First Input’s Rate
Use rate of first input to resample others.
Resample At Maximum Rate
Resample to highest sample rate.
Resample At Minimum Rate
Resample to the lowest sample rate.
Error if Rates Differ
Does not accept conflicting sample rates.
Units
The units for which time parameters are specified.
For example, you can specify the amount of time a lag should last for in seconds (default), frames (at the Houdini FPS), or samples (in the CHOP’s sample rate).
Note
When you change the Units parameter, it does not convert the existing parameters to the new units.
Time Slice
Time Slicing is a feature which boosts cooking performance and reduces memory usage. Traditionally, CHOPs calculate the channel over its entire frame range. If the channel does need to be evaluated every frame, then cooking the entire range of the channel is unnecessary. It is more efficient to calculate only the fraction of the channel that is needed. This fraction is known as a Time Slice.
Unload
Causes the memory consumed by a CHOP to be released after it is cooked and the data passed to the next CHOP.
Export Prefix
The Export prefix is prepended to CHOP channel names to determine where to export to.
For example, if the CHOP channel was named `geo1:tx`, and the prefix was `/obj`, the channel would be exported to `/obj/geo1/tx`.
Note
You can leave the **Export Prefix** blank, but then your CHOP track names need to be absolute paths, such as `obj:geo1:tx`.
Graph Color
Every CHOP has this option. Each CHOP gets a default color assigned for display in the Graph port, but you can override the color in the Common page under Graph Color. There are 36 RGB color combinations in the Palette.
Graph Color Step
When the graph displays the animation curves and a CHOP has two or more channels, this defines the difference in color from one channel to the next, giving a rainbow spectrum of colors.
## LOCALS
C
Current channel index.
NC
Total number of channels.
## EXAMPLES
Load Launch
[Area with one input](https://www.sidefx.com/docs/houdini/examples/nodes/chop/area/Area01.html)Example for [Area](https://www.sidefx.com/docs/houdini/nodes/chop/area.html) channel node
This example demonstrates the Area CHOP used with one input.
A Wave CHOP is used as a first input source channel for the Area CHOP.
Load Launch
[Area with two inputs](https://www.sidefx.com/docs/houdini/examples/nodes/chop/area/Area02.html)Example for [Area](https://www.sidefx.com/docs/houdini/nodes/chop/area.html) channel node
This is a demonstration of the Area CHOP using two inputs, where a single Wave CHOP is input into the first and second inputs of the Area CHOP.
Load Launch
[Area with three inputs](https://www.sidefx.com/docs/houdini/examples/nodes/chop/area/Area03.html)Example for [Area](https://www.sidefx.com/docs/houdini/nodes/chop/area.html) channel node
This example contains a demonstration of the Area CHOP using all three inputs.
A single Wave CHOP is used in the first and second input as a source and as a range modifier. Then another Wave CHOP is used in the third input to modify the length of the output channel of the Area CHOP.
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/CHOP/math.svg) Math](https://www.sidefx.com/docs/houdini/nodes/chop/math.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/CHOP/slope.svg) Slope](https://www.sidefx.com/docs/houdini/nodes/chop/slope.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/COP2/warp.svg) Warp](https://www.sidefx.com/docs/houdini/nodes/chop/warp.html)