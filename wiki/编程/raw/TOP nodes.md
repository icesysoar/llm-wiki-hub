---
type: concept
title: TOP nodes
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "6c91f36e3d20"
---
TOP节点定义了一个工作流程，数据被送入网络，变成 "工作项目 "并被不同的节点操作。许多节点代表外部进程，可以在本地机器或服务器群上运行。  
## Parameters
更多信息见[how to use TOP nodes](https://www.sidefx.com/docs/houdini/tops/index.html "How to define dependencies and schedule tasks using TOP networks.")

TOP网络包含任务节点，代表一系列要执行的任务或_工作项目。有四种主要的TOP节点类型。产生工作项目的_处理器_，运行工作项目工作的_调度器_，将进入的工作项目连接在一起的_分区器_，以及在其他不相关的工作项目之间建立依赖关系的_映射器_。
通过TOP节点网络，你可以创建一个可扩展的配方，用于生成工作项目，在本地或农场上运行它们，建立所有工作项目之间的依赖网络，并找出如何尽可能高效地完成这一切。这个配方被称为_PDG_（程序性依赖图）。关于TOPs和PDG的更多信息，见[Intro to TOPs](https://www.sidefx.com/docs/houdini/tops/intro.html "Explains the basic concepts behind TOP networks and what you can do with them.").
Houdini在`/tasks`处创建了一个默认的任务网络（`/topnet1`），并在`/tasks/topnet1`处创建了一个默认的调度器（`localscheduler`）。和ROPs一样，你可以在场景的任何层次创建一个独立的TOP网络。例如，你可以在`/stage`上下文中创建一个TOP网络，为一个Solaris项目生成LOP基元的变化。
TOP层要求你连接你的节点，除了调度器之外，都要连接。

![](https://www.sidefx.com/docs/houdini/images/pdg/flags_top_anno.png)
### TOP flags

关于TOP节点及其工作项目如何在视口中可视化的更多信息，请参见 [PDG node network interface](https://www.sidefx.com/docs/houdini/tops/ui.html "How to use the unique network editor features of TOP networks.").

| ![](https://www.sidefx.com/docs/houdini/icons/NETVIEW/bypass_flag.svg) | Q or B | **Bypass** 禁用节点，使其通过通道到输出，不作任何改变。这对于测试和可视化节点在视口或输出上的效果很有用。<br>当一个节点被旁路时，该节点左边的标志会亮起黄色。                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://www.sidefx.com/docs/houdini/icons/NETVIEW/output_flag.svg) | T      | **输出**将此节点的输出设置为TOP网络的输出。<br>当输出标志开启时，节点右侧的标志会亮起橙色，节点周围出现一个橙色的环。                                                                                                                                                                                                                                                                                                                                                                                   |
| ![](https://www.sidefx.com/docs/houdini/icons/NETVIEW/lock_flag.svg)   | None   | **锁定**冻结节点的工作项目，使它们不再因输入或参数的变化而更新。这可以防止对工作项的任何改变。<br>被锁定的节点上的工作项不能依赖其节点之外的工作项，但它们仍然可以被用作其他节点的输入。<br>解锁节点会丢弃它的所有工作项目。<br>当一个节点被锁定时，节点上从左数第二的标志会显示为_红色_，并且节点旁边会出现一个雪花状的[badge](https://www.sidefx.com/docs/houdini/network/badges.html "Badges indicate some status information about a node. They usually appear as a row of icons below the name of the node.") 。 <br>![](https://www.sidefx.com/docs/houdini/images/pdg/flags_top_lockednode.jpg) |

### TOP badges

| ![](https://www.sidefx.com/docs/houdini/icons/NETVIEW/dynamic_badge.png)    | 节点是动态的      | 当一个TOP节点是_动态的时候，该节点上会出现一个紫色的[badge](https://www.sidefx.com/docs/houdini/network/badges.html "Badges indicate some status information about a node. They usually appear as a row of icons below the name of the node.")。<br>在TOPs中，有两种类型的节点：静态和动态。静态节点可以在没有任何输入的情况下生成其工作项目，因为它们不依赖于任何上游数据。另一方面，动态节点需要来自其上游输入的信息来生成其工作项目。这就是为什么动态节点只能在做饭时产生工作项目。<br>要了解更多关于静态和动态TOP节点以及它们在TOP网络中的重要性，请参见[Static vs. Dynamic](https://www.sidefx.com/docs/houdini/tops/intro.html#static) |
| --------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://www.sidefx.com/docs/houdini/icons/NETVIEW/locked_badge.svg)     | 节点被锁定       | 这个节点的工作项目被冻结或_被锁定。请看**Lock**标志在 [TOP node](https://www.sidefx.com/docs/houdini/network/flags.html#top-flags).                                                                                                                                                                                                                                                                                                                                                          |
| ![](https://www.sidefx.com/docs/houdini/icons/NETVIEW/hda_locked_badge.svg) | 节点是一个锁定的HDA | 这个节点是一个锁定的（同步的） [digital asset](https://www.sidefx.com/docs/houdini/assets/index.html "Digital assets let you create reusable nodes and tools from existing networks.").                                                                                                                                                                                                                                                                                               |

### NODES
!数据库.base#houdini_图标TOP
Attribute Array
[Attribute Copy]
[Attribute Create]
[Attribute Delete]
[Attribute Rename]
[Attribute from String]
[Block Begin Feedback]
[Block End Feedback]
[CSV Input]
[CSV Output]
[Command Send]
[Command Server End]
[Deadline Scheduler]
[Download File]
[Environment Edit]
[Error]
[FFmpeg Encode Video]
[FFmpeg Extract Images]
[File Compress]
[File Copy]
[File Decompress]
[File Pattern]
[File Range]
[File Remove]
[File Rename]
[Filter by Expression]
[Filter by Range]
[Filter by State]
[Generic Generator]
[Geometry Import]
[HDA Processor]
[HQueue Scheduler]
[Houdini Server Begin]
[ImageMagick]
[In Process Scheduler]
[Invoke]
[JSON Input]
[JSON Output]
[Local Scheduler]
[Make Directory]
Maya Server Begin#Maya Server Begin TOP
[Merge]
[Node Pattern]
[Nuke Server Begin]
[Null]
[OP Notify]
[Output]
[Partition by Attribute]
[Partition by Bounds]
[Partition by Combination]
[Partition by Comparison]
[Partition by Expression]
[Partition by Frame]
[Partition by Index]
[Partition by Iteration]
[Partition by Node]
[Partition by Range]
[Partition by Tile]
[Perforce]
[Python Partitioner]
[Python Processor]
[Python Scheduler]
[Python Script]
[Python Server Begin]
ROP Alembic Output
[ROP Composite Output]
[ROP Fetch]
ROP Geometry Output
[ROP Karma Render]
[ROP Mantra Render]
[ROP USD Output]
[Range Extend]
[Range Generate]
[Render IFD]
[SQL Input]
[SQL Output]
[Send Email]
[ShotGrid Create]
[ShotGrid Delete]
[ShotGrid Download]
[ShotGrid Find]
[ShotGrid Server Begin]
[Shotgun Update]
[Shotgun Upload]
[Sort]
[Split]
[Subnetwork]
[Switch]
[TOP Fetch]
[TOP Fetch Input]
[Text Output]
[Tractor Scheduler]
[URL Request]
[USD Add Assets to Gallery]
[USD Import]
[USD Import Files]
[USD Render]
[Wait for All]
[Wedge]
[Work Item Expand]
[Xml Input]