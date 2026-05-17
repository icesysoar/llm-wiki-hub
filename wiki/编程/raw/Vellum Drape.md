---
type: concept
title: Vellum Drape
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "436dd728fd23"
---
Vellum求解器设置为预卷面料以覆盖字符。
### Parameters
When stitching together pieces of flat cloth it is useful to do so within a simulation rather than through modeling operations. The Vellum Drape SOP provides a sandbox simulation designed around moving stitched points together slowly before fusing them with welds.
## PARAMETERS
Reset Simulation
Clears the entire simulation cache.
Freeze
Rather than outputting the current frame, output the provided freeze frame. This is useful for setting up the pre-roll for a sequence of drape operations.
Freeze at Frame
Which frame to pre-roll to. This is an absolute frame number, so should be some number of frames after the start frame of your scene.
Load from Disk
After a drape is completed, it can be loaded from file rather than recomputed.
Geometry File
The file to save the drape to. A pair of packed primitives will be saved as both the constraint and surface geometry are required.
Note that this is not a file sequence as a drape is expected to be the final configuration.
Reload Geometry
Force the geometry to reload if it updated from some external process.
Save to Disk
Save the current drape results to the given file.
## Draping
Inflate Collisions
The initial pose of the cloth may be intersecting the collision object. This may happen if replacing a low res proxy collider with a higher resolution object, for example. In this case by slightly deflating the collision object and inflating it over time you can recover a non-self intersecting drape.
Initial Deflation
The distance to peak the collision geometry inwards at the start frame.
Final Inflation
The distance to peak the collision geometry outwards at the final frame.
Inflation Frames
The number of frames to spread the inflation process over.
Weld Additional Seams
Seams of cloth can be welded in a two step process. For the first stage, soft springs will pull the points together. No gravity will be present to allow the cloth to flow over the body. In the second stage, the points are welded together, immediately closing the seam. Gravity is then enabled to let the cloth fall down.
### Weld Seams
### Seams
Enable
Enable this particular seam.
Group
Point group to use as the first half of the seam. This should be an ordered point group to ensure points match with the target.
Note
Specifying more than one named ordered group will result in an unordered list of points.
Target Group
Point group to use as the second half of the seam. Each point of the group will be joined to the target in the point group order, so ordered point groups should be used.
Note
Using multiple named ordered point groups may not match as expected. Instead, use one seam per named group.
Cycle
If the point groups do not line up, cycle the start point this number of points.
Reverse
If one of the point groups has reversed order, this will let you reverse the order of the seaming. This is useful when procedurally generated seams are pointed the wrong way.
### Weld Properties
Welding Frame Delay
The number of frames to use soft springs before welding the points together.
Attraction Stiffness
The strength of the springs.
Add Bend across Welds
When the points are welded, bend constraints are also added to make it act like a single flat piece of cloth. Without this, the seam can cusp and bend freely.
The bend stiffness is averaged from the surrounding bend constraints.
## Solver
Time Scale
Scales the effective time of the Vellum solve. This can be used to create bullet-time like effects where the physics of the Vellum solver run at a different rate than the Houdini playbar. A value of 2 will cause cloth to fall twice as fast, and 0.1 will slow it to a tenth the speed.
Substeps
Each frame will be broken into this number of substeps. Additional substeps are required for fast moving collisions or sudden forces.
The default substeps can be very aggressive, usually if the Vellum solver is too stretchy, raising substeps to 2 or 5 is a good first start.
Constraint Iterations
Within each substep, this number of passes will be taken by the constraint enforcement operations. Stiff constraints can require more iterations to converge. A good starting point is the diameter of the geometry - the number of edges between the farthest points.
Smoothing Iterations
The default constraint iterations use a Gauss-Seidel approach that is fast to converge. However, if it doesn’t fully converge due to too high stiffness, or impossible configurations, it will leave the error as bad looking triangles. The smoothing iterations use a Jacobi approach which is slower to converge but leaves error spread out in a more attractive fashion. The default of ten passes helps smooth out error, but might need to be increased if the overall **Constraint Iterations** is very high.
### Collisions
Enable Collisions
Controls if any collision detection is done at all.
Self Collisions
Controls if self collisions are detected.
Ground Plane
Adds a ground plane to the simulation. The ground plane will be visualized with a blue grid.
Ground Position
Location of the center of the ground plane.
Collision Passes
Number of collision detection passes to perform. These are interleaved between the constraint iterations. Since collision is expensive, it is best to minimize this. But frequent interleaving helps avoid tent-poling effects where a small collider is fighting with the no-stretch constraints. In practice we find 10 to be correct for most situations, and substeps often being a better solution to increase quality.
Post Collision Passes
After all constraints are performed, a final round of collision detection is done. Collisions are often the most noticeable failure mode, and it is ideal if the next frame can start with non-intersecting geometry. Thus a final cleanup pass can achieve these requirements. We have found that “number of stacked layers + 2” is a good estimate for this number. This allows the effect of the underlying collider to ripple through the stacked layers fully.
Polish Passes
In any collision pass, any colliding pair may not be fully resolved. This number of additional collider-pair passes will be run until they are resolved. Since these are only performed on active colliders (and no new collision search is done) this is very cheap.
Layer Shock
The `layer` integer point attribute is used to flag point as belonging to different layers of cloth. Higher numbers refer to higher layers. Layer Shock will make lower layers this many times heavier during collision evaluation, ensuring the higher layers will move out of their way. The rest of the dynamics are unaffected by this, and the difference is fixed regardless of the number of layers between the two. This can be thought of as a way to dial between one-way layering of sims and fully coupled sims.
## Forces
Gravity
Uniform gravity force to apply.
Air Drag
Amount of air resistance bringing the cloth to a standstill.
Velocity Damping
A more brute force approach to reducing dynamic velocity - the velocity is scaled directly by this amount, causing sudden movements to be quickly damped.
### Friction
Static Threshold
A threshold at which to apply full friction. When the ratio of the tangential velocity and the normal impulse is less than this, the tangential velocity will be fully eliminated through friction. This is roughly tan() of the slope angle that will allow sliding under gravity.
Dynamic Scale
If the static threshold fails, this controls what percentage the tangential velocity will be reduced in the dynamic friction case.
## Simulation
Cache Enabled
Controls if the simulation is cached to memory.
Cache Memory (MB)
Maximum size of the memory cache.
Start Frame
What frame on the Houdini playbar that the simulation should begin at.
## EXAMPLES
Load Launch
[CorrectOverlapDrape](https://www.sidefx.com/docs/houdini/examples/nodes/sop/vellumdrape/CorrectOverlapDrape.html)Example for [Vellum Drape](https://www.sidefx.com/docs/houdini/nodes/sop/vellumdrape.html) geometry node
This example demonstrates using the Vellum Drape SOP to find a valid starting position for initially overlapping cloth.
See also
!Vellum Solver#Vellum Solver Geometry
!Vellum Constraints#Vellum Constraints Geometry
!VellumConfigureGrain#Vellum Configure Grain Geometry
!Vellum IO#Vellum IO Geometry