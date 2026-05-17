---
type: concept
title: Crowd Transition
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: web_fetch
created: 2026-05-02T02:11:58
content_hash: "e4e49b128c03"
---
定义了人群状态之间的过渡。
### Parameters
This node defines a [transition](https://www.sidefx.com/docs/houdini/crowds/triggers.html "How to specify conditions that cause agents to change from one state to another.") from one [crowd state](https://www.sidefx.com/docs/houdini/nodes/dop/crowdstate.html "Defines a Crowd State") to another. The input is a [trigger](https://www.sidefx.com/docs/houdini/nodes/dop/crowdtrigger.html "Defines a Crowd Trigger") that initiates the transition when its condition evaluates to true.

## Clip Transition Graph

A [crowd object’s](https://www.sidefx.com/docs/houdini/nodes/dop/crowdobject.html "Creates a crowd object with required agent attributes to be used in the crowd simulation.") clip transition graph may optionally be used to control transitions between states and animation clips. It provides information about which clips are allowed to transition to each other, and where in the clips those transitions should occur. This can be used by the [Crowd Transition DOP](https://www.sidefx.com/docs/houdini/nodes/dop/crowdtransition.html "Defines a transition between crowd states.") to delay state transitions until an appropriate point in the current animation clip, and to smoothly blend into the next clip. Additionally, the clip transition graph allows per-clip control over this behavior (which is useful if the transition’s **Input State** parameter specifies multiple states, or if **Randomize Clips** is enabled for any of the input states).

The [Test Simulation: Crowd Transition SOP](https://www.sidefx.com/docs/houdini/nodes/sop/testsim_crowdtransition.html "Provides a simple crowd simulation for testing transitions between animation clips.") can be used to quickly preview transitions between particular clips before setting up a crowd simulation.

Each point in the clip transition graph geometry represents an animation clip, and each two-point polygon represents a (one-way) transition between the clips. During a state transition, if the points corresponding to the input and output states' animation clips are not directly connected, the [Crowd Transition DOP](https://www.sidefx.com/docs/houdini/nodes/dop/crowdtransition.html "Defines a transition between crowd states.") will use the shortest path between the two clips.

### Attributes

Name

Class

Type

Description

`clipname`

Point

String

Specifies the name of an animation clip.

`agentname`

Point

String

This string is matched with the agent’s `agentname` point attribute to avoid potential name conflicts if a crowd contains multiple agent definitions. For example, two different types of agents may both have a clip named 'walk'.

`blend_durations`

Primitive

Float Array

For each transition region, specifies the duration (in seconds) of any transitions which start in that region.

`sync_points`

Primitive

Vector2 Array

For each transition region, specifies a pair of clip times (in seconds) where the two animation clips have a similar pose.

`transition_regions`

Primitive

Vector2 Array

Specifies ranges of clip times (in seconds) for the first animation clip where a transition is allowed to occur.

## PARAMETERS

Group

Only affect a group of agents.

Input State

A string pattern that specifies which states to transition out of. The state names correspond to the **State Name** parameter on a [Crowd State](https://www.sidefx.com/docs/houdini/nodes/dop/crowdstate.html "Defines a Crowd State") node. The pattern follows the same syntax as the [match](https://www.sidefx.com/docs/houdini/vex/functions/match.html "This function returns 1 if the subject matches the pattern specified,
or 0 if the subject doesn’t match.") VEX function.

-   `*` will match all states.
    
-   `* ^walk` will match all states except for the `walk` state.
    
-   `walk run_*` will match the `walk` state and all states whose names begin with `run_`.
    

Output State

Name of the state to transition into. This corresponds to the **State Name** parameter on a [Crowd State](https://www.sidefx.com/docs/houdini/nodes/dop/crowdstate.html "Defines a Crowd State") node.

Set Output Clip

Overrides the default clip selection behavior when transitioning to the **Output State**. Normally, the **Output Clip** is chosen based on the [output state’s](https://www.sidefx.com/docs/houdini/nodes/dop/crowdstate.html "Defines a Crowd State") **Clip Assignment** parameters.

Output Clip

When **Set Output Clip** is enabled, specifies the clip to transition to when entering the **Output State**. The clip can be adjusted per-agent using VEXpressions.

Use VEXpressions

Enables using a local expression to override the **Output State** or **Output Clip** for each agent.

Random Delay

Adds a random delay between when the trigger evaluates to true and when the transition begins. This is useful to avoid having many agents starting the transition at the same time.

Max Random Delay

If **Random Delay** is enabled, specifies the maximum delay (in seconds) before the transition starts.

Random Seed

Specifies the seed used when selecting a random delay time.

Use Clip Transition Graph

The [crowd object’s](https://www.sidefx.com/docs/houdini/nodes/dop/crowdobject.html "Creates a crowd object with required agent attributes to be used in the crowd simulation.") clip transition graph may optionally be used to control transitions between states and animation clips. This can be used to delay transitions until an appropriate point in the current animation clip, use intermediate transition clips, and also provides information about how to smoothly blend into the new clip. Additionally, the clip transition graph allows per-clip control over this behavior (which is useful if the **Input State** parameter specifies multiple states, or if **Randomize Clips** is enabled for any of the input states).

Interrupt Active Transitions

Allows an active or pending transition to be interrupted in order for this transition to begin. This can be useful for e.g. immediately switching into a ragdoll state after an impact occurs, regardless of whether an agent is in the middle of a transition.

Duration

Length of the transition between states (in seconds).

State Blend

Specifies how the crowd solver should blend between the **Input State** and **Output State** as the transition progresses.

## EXAMPLES

Load Launch

[ClipTransitionGraph](https://www.sidefx.com/docs/houdini/examples/nodes/dop/crowdtransition/ClipTransitionGraph.html)Example for [Crowd Transition](https://www.sidefx.com/docs/houdini/nodes/dop/crowdtransition.html) dynamics node

This example demonstrates how to use a clip transition graph to provide transition clips for state transitions.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/crowdsolver.svg) Crowd Solver](https://www.sidefx.com/docs/houdini/nodes/dop/crowdsolver.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/state.svg) Crowd State](https://www.sidefx.com/docs/houdini/nodes/dop/crowdstate.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/trigger.svg) Crowd Trigger](https://www.sidefx.com/docs/houdini/nodes/dop/crowdtrigger.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/CROWDS/triggerlogic.svg) Crowd Trigger Logic](https://www.sidefx.com/docs/houdini/nodes/dop/crowdtriggerlogic.html)