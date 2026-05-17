---
type: concept
title: Muscle Tension Lines
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "6688eb856d50"
---
创建线段并将其附加到输入的骨表面几何形状上，然后驱动肌肉屈伸。
### Parameters
![](https://www.sidefx.com/docs/houdini/images/beta.svg)

This feature is still under development. The current functionality is unfinished and subject to change, and may have thin or no documentation. Please bear this in mind when using it.

This node draws tension lines (primitives) onto your input bone geometry which is internally held at its t-pose (rest position). These lines are used as measuring sticks. The _length_ changes of these lines throughout your character’s animation are used to drive its _muscle flexion_. Each tension line is [linked](https://www.sidefx.com/docs/houdini/nodes/sop/muscleflex.html#activationlinks) to a specific muscle or series of muscles in the ![](https://www.sidefx.com/docs/houdini/icons/SOP/muscleflex.svg) [Muscle Flex SOP](https://www.sidefx.com/docs/houdini/nodes/sop/muscleflex.html) node.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/muscletensionlines_allguides.jpg)

Muscle tension lines and all visualization guides in the viewport state

At initialization, the length of each muscle tension line is measured and stored in a `restlength` primitive attribute. As your bone geometry is animated, the endpoints of the tension lines are automatically deformed along with the local transformation of the bone points in the vicinity of the endpoints. The lengths of the tensions lines are measured as their points are transformed and the results are stored in the `length` primitive attribute.

When the tension lines are at their rest length, they are at 100% of their length. When the lines shorten, they indicate that their linked muscles should be _flexed_. By default, when a tension line is at 75% of its rest length, its muscle is considered fully flexed. When the lines lengthen, they indicate that their muscles should be _relaxed_. You can adjust this [activation threshold](https://www.sidefx.com/docs/houdini/nodes/sop/muscleflex.html#activationratio) for the muscle tension lines from the **Muscle Flex SOP** node. For example, if you set the activation ratio for a muscle to 0.50, then when its tension line is at 50% its rest length, the muscle will be fully flexed. You can also control and animate the flex for individual muscles over your character’s animation with the [Muscle Flex](https://www.sidefx.com/docs/houdini/nodes/sop/muscleflex.html#muscleflex) parameters on the **Muscle Flex SOP** node.

### How-to

Tip

While bones are the most commonly used input geometry for the **Muscle Tension Lines SOP**, using bones as the guide geometry is not mandatory. You can draw the muscle tension lines relative to _any_ input geometry. For example, like the input skin surface geometry.

To...

Do this

Draw a muscle tension line on your character’s bone geometry in the node’s interactive viewport state

1.  In the viewport state, press N. You are now in tension line _creation mode_.
    
2.  LMB-click+hold on the bone surface location for the _first_ tension line end point, LMB-drag the brush to the location on the bone surface for the _last_ tension line end point, and then release the mouse button.
    

The new muscle tension line appears on your bone geometry and is named `autoflex#` by default. You can use the tension line’s [Line ID](https://www.sidefx.com/docs/houdini/nodes/sop/muscletensionlines.html#lineid) parameter to change its name identifier. `autoflex_id`

Place a muscle tension line by placing end points on your character’s bone geometry

1.  In the **Parameter Editor**, select the [Rest Geometry](https://www.sidefx.com/docs/houdini/nodes/sop/muscletensionlines.html#restgeometry) multiparm for the line you want to draw. Create a new multiparm if needed.
    
2.  Select the arrow icon next to the **Point 0** parameter, and then in the viewport click the bone surface location where you want to place the _first end point_ for your tension line.
    
3.  Back in the the **Parameter Editor**, select the arrow icon next to the **Point 1** parameter and then in the Viewport click the bone surface location where you want to place the _last end point_ for your tension line.
    

The new muscle tension line appears on your bone geometry. You can use the tension line’s [Line ID](https://www.sidefx.com/docs/houdini/nodes/sop/muscletensionlines.html#lineid) parameter to change its name identifier.

Modify the placement of a muscle tension line’s end points

1.  In the viewport state, press S+hold to enter tension line _select mode_.
    
2.  Hover your mouse pointer over the line you want to select, LMB-click the line, and then release the S key.
    
3.  LMB-drag the muscle tension line’s translation handles to modify their placement. The endpoints only need to be near your bone surfaces. They do not need to be attached to them. However, moving the tension line end points will cause them to snap to the nearest surface.
    

Select a muscle tension line

Do one of the following:

-   In the viewport state, MMB-scroll to cycle your selection through all your current tension lines.
    
-   In the viewport state, press S+hold to enter tension line _select mode_, hover your mouse pointer over the line you want to select, LMB-click the line, and then release the S key.
    

Delete a muscle tension line

Do one of the following:

-   In the viewport state, select the muscle tension line and then press Delete.
    
-   In the **Parameter Editor**, remove the muscle tension line’s [Rest Geometry](https://www.sidefx.com/docs/houdini/nodes/sop/muscletensionlines.html#restgeometry) multiparm.
    

## STATE

Muscle Tension Lines state hotkeys

Hotkeys or Interaction

Action

Press S+Hold

Enter muscle tension line selection mode.

-   LMB-click to select a muscle tension line.
    
-   Once selected:
    
    -   LMB-drag the end points from a muscle tension line to reposition them.
        
    -   Press Delete to remove the line.
        
    

Example: Click-selecting muscle tension lines in the viewport state

Note

You cannot select [Symmetry](https://www.sidefx.com/docs/houdini/nodes/sop/muscletensionlines.html#symmetry)-generated mirror duplicate muscle tension lines in the viewport state.

MMB-wheel scroll

Cycle through muscle tension line current selections.

Example: MMB-scrolling through the current muscle tension line selections

Press N

Enter muscle tension line creation mode.

To add a new muscle tension line in the viewport state, click-drag from the location of the first end point for the tension line to the location of the last end point.

Example: Drawing a muscle tension line in muscle tension line creation mode

Muscle Tension Lines state right-click menu

RMB menu > **New Muscle Tension Line**

Enter muscle tension line creation mode.

RMB menu > **Delete Current Line**

Remove the currently selected tension line.

## ATTRIBUTES

`autoflex_id`

integer

Sets and stores the descriptive label or _name_ given to each muscle tension line.

`length`

integer

Stores the active length of the muscle tension line over time.

`restlength`

integer

Stores the length of the muscle tension line measured while its bone geometry is in its t-pose.

## PARAMETERS

Line Count

-   The number of muscle tension lines. This count does not include the [symmetrical](https://www.sidefx.com/docs/houdini/nodes/sop/muscletensionlines.html#symmetry) copies.
    
-   Adds or removes a **Rest Geometry** multiparm.
    
    ![](https://www.sidefx.com/docs/houdini/images/nodes/sop/muscletensionlines_multiparms.png)
    
    **1** - Deletes the currently selected multiparm tab.  
    **2** - Inserts a new multiparm tab to the right of the currently selected multiparm tab.  
    **3** - Currently selected mulitparm tab.  
    **4** - Adds or removes multiparm tabs from the end of the list. Increasing the number adds tabs and decreasing the number deletes tabs.  
    **5** - Adds a new multiparm tab to the end of the list.  
    **6** - Removes the multiparm tab from the end of the list.  
    **7** - Deletes all the current multiparm tabs.  
    

## Muscle Tension Lines

Rest Geometry

Line ID

Specifies a descriptive label for the muscle tension line. This parameter’s value is stored as the `autoflex_id` primitive attribute.

The default **Line ID** for new muscle tension lines is `autoflex#`. For easier matching when setting up the [link](https://www.sidefx.com/docs/houdini/nodes/sop/muscleflex.html#activationlinks) between the muscle tension line and the muscle(s) it will be driving, give the tension line a **Line IDs** that is similar to the `muscle_ids` of its target muscle(s).

Point 0

Specifies the local space position of the first end point (`end point 0`) for the muscle tension line. You can use the arrow icon next to this parameter to interactively place this end point in the viewport state.

Point 1

Specifies the local space position of the last end point (`end point 1`) for the muscle tension line. You can use the arrow icon next to this parameter to interactively place this end point in the viewport state.

## Inputs

Bone Geometry

T-Pose

Specifies the pose the bone geometry is in when you are setting up its muscle tension lines.

Use Initialization Frame

Use the bone geometry’s pose at the specified **Frame**.

From Attribute

Use the bone geometry pose that is stored in the attribute specified by **Attribute Name**.

Frame

Specifies the initialization frame number. By default, the initialization frame is set to the first frame of your playback bar’s range (`$FSTART`).

This parameter is only available when **T-Pose** is set to **Use Initialization Frame**.

Attribute Name

Specifies the name of the attribute that contains the saved t-pose point positions for the bone geometry. By default, **Attribute Name** is `tpose`.

This parameter is only available when **T-Pose** is set to **From Attribute**.

Additional Lines

Default Line ID

Specifies the name prefix for all user-supplied secondary input tension line geometry. For example, if **Default Line ID** is the _extraflex_ default value, then all external tension lines are automatically assigned the sequential `autoflex_ids` of extraflex0, extraflex1, extraflex2, and so on.

This parameter is only available when there is external poly line geometry attached to Input 2 of the **Muscle Tension Lines SOP** node.

Note

You cannot give each external tension line a fully unique name.

## Symmetry

The **Symmetry** parameters automatically generate the muscle tension lines and their **Line IDs** for the second half of your bone geometry once you have created the muscle tension lines for the first half.

Automatic symmetry is only applicable to whole intact symmetrical models. If your input bone geometry is only _one half_ of a symmetrical model, then you can use the ![](https://www.sidefx.com/docs/houdini/icons/SOP/musclemirror.svg) [Mirror Muscles SOP](https://www.sidefx.com/docs/houdini/nodes/sop/musclemirror.html) downstream in your Muscles & Tissue network to make sure that all your muscle tension lines are created and assigned the appropriate **Line ID** values.

Enable Symmetry

When on, the muscle tension lines on the other side of your model are automatically created and given [Line IDs](https://www.sidefx.com/docs/houdini/nodes/sop/muscletensionlines.html#lineid) using the rules defined by the **From Prefix** and **To Prefix** parameter settings.

Note

Since the mirror duplicates of the muscle tension lines are created procedurally, so you won’t be able modify their endpoints in the viewport state.

From Prefix

Specifies the name prefix that is used for your **Line ID** values. For example, this parameter value would be `L_` if your **Line ID** values are `L_gastro`, or `L_extensor`, and so on.

To Prefix

Specifies the name prefix that will replace the **From Prefix** in all of the automatically generated **Line ID** values for the mirrored duplicate tension lines. For example, if the parameter value for **From Prefix** is `L_`, then your **To Prefix** parameter value should be `R_` for `R_gastro`, or `R_extensor`, and so on.

Symmetry Handle

When on, the symmetry plane and its handle/manipulator is shown in the viewport state. You can use this handle to interactively adjust the **Origin**, **Distance**, and **Direction** of the symmetry plane.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/muscletensionlines_symmetryhandle.jpg)

Origin

World space location of the symmetry plane’s origin.

Distance

Distance of the symmetry plane along its normal from the bone geometry.

Direction

Normal direction of the symmetry plane.

## Guides

Display Bone Geometry

When on, you can view the guide bone geometry in the viewport state. You can use this geometry as a placement guide when drawing your muscle tension lines.

Bone Geometry Color

Specifies the RGB color and transparency (alpha) for the guide bone geometry.

Line ID

When on, the line IDs for the current selected muscle tension line appears next to its line geometry in the viewport state.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/muscletensionlines_lineid.jpg)

Line Length

When on, the length for the current selected muscle tension line appears next to its line geometry in the viewport state.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/muscletensionlines_linelength.jpg)

Line Color Random Seed

Changes the random colors that are assigned to your muscle tension lines in the viewport state.

Symmetry Color Intensity

Adjusts the intensity of the line colors that are applied to the mirrored copies of the muscle tension lines.

This parameter is only available when [Enable Symmetry](https://www.sidefx.com/docs/houdini/nodes/sop/muscletensionlines.html#enablesymmetry) is turned _on_.

![](https://www.sidefx.com/docs/houdini/images/nodes/sop/muscletensionlines_symmetrycolorintensity.jpg)

## INPUTS

Input 1

Guide geometry for placing the muscle tension lines. Most commonly this is bone geometry.

Input 2

User-supplied poly lines that replace the auto-generated muscle tension lines. Each external line is automatically assigned an `autoflex_id` attribute.

## OUTPUTS

Output 1

Line IDs (`autoflex_id`) for each muscle tension line and their rest (`restlength`) and variable length (`length`) values.

See also

-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/muscleflex.svg) Muscle Flex](https://www.sidefx.com/docs/houdini/nodes/sop/muscleflex.html)
-    [![](https://www.sidefx.com/docs/houdini/icons/SOP/musclesolvervellum.svg) Muscle Solver Vellum](https://www.sidefx.com/docs/houdini/nodes/sop/musclesolvervellum.html)