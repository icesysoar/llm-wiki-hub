---
type: concept
title: Acoustic
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "41538194a59a"
---
为空间音频系统设计音频过滤器和声音材料。
### Parameters
The Acoustic CHOP allows you to design audio filters and sound materials for the SpatialAudio 3D audio system.
Three different types of filters are available:
Transmission
Describes which frequencies are transmitted (values close to 1) and which are absorbed by the material (values close to 0).
Reflection
Describes which frequencies are reflected off the material. Currently reflections are not supported.
Absorption
Describes which frequencies are absorbed by the filter (inverse of the transmission filter).
A sound material for a geometry object or a transmission filter requires either a transmission or absorption filter. A microphone filter requires an absorption filter.
For more information on spatial audio, see the [Spatial Audio](https://www.sidefx.com/docs/houdini/nodes/chop/spatial.html "The rendering engine for producing 3D audio.") CHOP, [Microphone](https://www.sidefx.com/docs/houdini/nodes/obj/microphone.html "The Microphone object specifies a listening point for the
SpatialAudio CHOP.") object, [Geometry](https://www.sidefx.com/docs/houdini/nodes/obj/geo.html "Container for the geometry operators (SOPs) that define a modeled
object.") object and the [Sound](https://www.sidefx.com/docs/houdini/nodes/obj/sound.html "The Sound object defines a sound emission point for the Spatial Audio
chop.") object.
When designing the filter, the CHOP graph should be in Frames mode, so that 1 frame on the graph equals 1KHz and frame 0 corresponds to 0Hz (DC). This means that frame 5.5 corresponds to 5.5kHz (5500Hz).
Filters cannot have negative values. If a filter has values of more than one, it will add power to that frequency (turn on **No Resonance** to avoid this). A value of 0.4 in a filter will reduce that frequency by 60%.
## PARAMETERS
## Acoustic
Transmit Sound
If checked, a transmission filter is created.
Reflect Sound
If checked, a reflection filter is created.
Absorb Sound
If checked, an absorption filter is created.
Frequency Range
The frequency range of the filter(s).
Power
Selects a power conservation method. Applicable when more than 1 filter is being designed.
No Power Conservation
Power can be reduced or amplified.
Conserve Total Power
Total power is conserved but the individual frequencies' power is not.
Conserve Power Per Frequency
Each frequency has its power conserved.
Lock
If power conservation is on, moving a handle on a filter will adjust the other filters. This parameter allows you to lock one of the filters.
No Resonance
Disallows filter values greater than 1.
## Handles
Handles
The number of manipulation handles to create.
Logarithmic Handles
If on, the handles are logarithmically spaced, which is more useful than linear spacing (off) for designing audio filters.
Samples
The number of samples in each filter.
Interpolation
How the samples are interpolated from the handles; either nearest neighbor, linearly or cubically.
Reset All Waveforms
Resets all filters to a constant value.
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
See also
-    [![](https://www.sidefx.com/docs/houdini/icons/CHOP/spatial.svg) Spatial Audio](https://www.sidefx.com/docs/houdini/nodes/chop/spatial.html)