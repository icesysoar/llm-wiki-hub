---
type: concept
title: USD Configure
tags:
  - Houdini
  - 帮助文档
status: pending
source_type: user_upload
created: 2026-05-02T02:11:59
content_hash: "0841e9a03489"
---
此节点设置详细信息属性，这些属性会影响 LOP 如何使用 USD 基元将此几何图形导入为 USD 基元[标准作业程序 进口 LOP](https://www.sidefx.com/docs/houdini/nodes/lop/sopimport.html "Imports geometry from a SOP network into the USD scene graph.")，或者从磁盘加载几何文件时。
### Parameters
导入组
启用此选项并指定要导入的组名称（或以空格分隔的[组语法](https://www.sidefx.com/docs/houdini/model/groups.html)列表）。如果打开此选项但将该字段留空，则会导入所有几何图形。
导入组类型
启用后，指定**“导入**组”是点组还是基元组。
导入路径前缀
如果正在导入的 prim 具有自动生成的名称（如），因为它没有路径原语，或者如果它具有路径原语但路径是相对的（不以 开头），则节点会自动在名称/路径片段前面加上此路径。这是一种将“无路径”素数组织在单个分支下的方法。（请参见[如何创建几何层次结构](https://www.sidefx.com/docs/houdini/solaris/sop_import.html "Details of how Houdini converts SOP geometry to USD, and how you can control the process.")。）`mesh_0``/`
（默认值是将“未路径”的 prim 放在具有此节点名称的根 prim 下。`/$OS`
图层保存路径
启用此选项后，将包含几何的图层的保存路径元数据设置为此文件路径。当您使用[美元渲染节点](https://www.sidefx.com/docs/houdini/nodes/out/usd.html "Renders a LOP network out to one or more USD files. This node is available as render node or as a LOP.")，几何图形将使用此文件路径保存到图层文件中（[输出处理](https://www.sidefx.com/docs/houdini/solaris/output.html#processors)后）。`.usd`
样品框架
在通过导入此几何图形生成的 USD 图层上设置起始帧和结束帧元数据。当将一系列 BGEO 文件合并为具有[美元针迹夹 ROP](https://www.sidefx.com/docs/houdini/nodes/out/usdstitchclips.html "Merges multiple value clips representing individual frames.").
## 基元定义
此组中的参数根据如何从源 SOP 几何生成 USD 基元来指导转换过程。
打包美元原语
如何处理导入的 SOP 几何中的打包 USD 基元。
叠加转换
将打包的 USD 原语的转换导入为覆盖 （） prim。这使得在不拆包的情况下转换包装好的美元素数变得容易。`Over`
忽视
忽略源 SOP 几何中的打包美元基元。
其他原语
如何处理常规非打包基元（点、曲线、多边形、球体等）。
定义
为导入的几何图形创建美元素数（如果它们尚不存在）。这是导入几何图形的标准方法。
覆盖
创建美元素数作为覆盖。它们仅作为对具有相同路径的较低级别上存在的任何素数的更改可见。当您只想将 SOP 中的某些属性导入和修改到现有 USD 几何体时，这可能很有用。
叠加转换
与“叠加”一样，但仅导入转换数据。
仅定义叶基元
将中间基元（例如，为**导入路径前缀**创建的任何原始基元）创作为替代而不是定义。这意味着，如果它们与较低层中的基础素数不匹配，则不会将叶素数添加到场景中。如果只想在场景树中已存在几何体的祖先时才导入几何体，则此功能非常有用。`Xform`
（请注意，所有数据仍会导入，只是在场景图树或视口中可能不可见。
打包基元
如何处理 SOP 原生打包原语。
创建 Xforms
从打包基元的变换和属性创建 prim，并在下面导入打包基元的几何图形。`Xform`
创建本机实例
将打包基元中的几何图形作为[可实例化参照](https://www.sidefx.com/docs/houdini/solaris/usd.html#instancing)导入。这会将每个片段作为原型导入到**导入路径前缀 prim** 下的 prim 下。`Prototypes`
创建点实例器
将打包基元中的几何图形作为[点实例化几何](https://www.sidefx.com/docs/houdini/solaris/usd.html#instancing)图形导入。这会将每个独特的片段作为原型导入到点实例器 prim 下。
您可以将 SOP 基元属性分配给名为的打包基元，以指定实例的 USD 场景图路径。`usdinstancerpath`
解压
仅导入打包基元的几何图形。 与**“创建 Xforms**”模式不同，这不会创建任何其他层次结构，并且等效于[打开](https://www.sidefx.com/docs/houdini/nodes/sop/unpack.html "Unpacks packed primitives.")导入前的打包原语。 这对于在不合并其属性的情况下导入多个几何图形块非常有用。
代理
如何处理[代理原语](https://www.sidefx.com/docs/houdini/crowds/agents.html "About agents, the moving actors that make up a crowd simulation.")。 在所有模式下，从代理基元的变换和属性创建 prim，并在下面导入代理的几何体和动画。
创建实例化 SkelRoots
将代理的骨架和几何图形作为[可实例化参照](https://www.sidefx.com/docs/houdini/solaris/usd.html#instancing)导入到包围骨架和蒙皮基元的 prim。 这会将每个唯一的代理定义作为原型导入到**导入路径前缀** prim 下的 prim 下。`SkelRoot``agentdefinitions`
创建骷髅根
创建一个包围代理的骨架和蒙皮几何体的 prim，该几何体在下面导入。 这将不如为大量人群**创建实例化 SkelRoots** 的效率低，但对于例如导入不需要实例化的单个字符很有用。`SkelRoot`
创建实例化骨架
将代理的框架作为对 prim 的[可实例化引用](https://www.sidefx.com/docs/houdini/solaris/usd.html#instancing)导入。 这会将每个唯一的代理定义作为原型导入到**导入路径前缀** prim 下的 prim 下。`Skeleton``agentdefinitions`
创建骨架
将代理的框架作为代理的 prim 导入到代理的 prim 下。 这将低于为大量人群**创建实例化骨架**的效率，但对于例如导入不需要实例化的单个字符很有用。`Skeleton``Xform`
创建骷髅动画
仅导入代理的联合动画，创建 prim。 这可用于有效地导入帧序列，因为代理的骨架和其余几何体通常在帧之间保持不变。`SkelAnimation`
努尔布斯曲线
如何处理 NURBS 曲线基元。
转换为基差曲线
将曲线作为基元导入。 这仅支持立方曲线，但对于[通过 Hydra 渲染](https://www.sidefx.com/docs/houdini/solaris/usd.html#render)很有用。`BasisCurves`
创建 NURBS 曲线
将曲线作为基元导入。 这提供了 NURBS 曲线的完整往返，但对[通过 Hydra 渲染](https://www.sidefx.com/docs/houdini/solaris/usd.html#rendering)的支持有限。`NurbsCurves`
努尔布斯曲面
如何处理 NURBS 曲面基元。
转换为网格
将表面导入为基元，这对于[通过 Hydra 进行渲染](https://www.sidefx.com/docs/houdini/solaris/usd.html#render)非常有用。`Mesh`
创建 NURBS 修补程序
将曲面作为基元导入。 这对于 NURBS 曲面的往返很有用，但对[通过 Hydra 渲染](https://www.sidefx.com/docs/houdini/solaris/usd.html#rendering)的支持有限。`NurbsPatch`
种类创作
如何将[种类](https://www.sidefx.com/docs/houdini/solaris/usd.html#kinds)分配给导入的素数。
所有几何体都是一个组件
将导入树中的根基元设置为“组件”。不要在子体上设置种类。
嵌套组和组件
将导入树中的叶基元设置为组件。将分支基元设置为组。
嵌套程序集、组和组件
将导入树中的根 prims 设置为程序集。将中间分支 prims 设置为“组”。将叶素数设置为组件。
没有
不要在导入的素数上设置种类。
路径属性
SOP **基元字符串属性**的名称列表（逗号或空格分隔），用于用作将 SOP 几何图形放入的原始路径。缺省值为 。请参阅上面的[几何层次结构](https://www.sidefx.com/docs/houdini/nodes/lop/_sopimport_shared.html#import)。`path,name`
如果列表具有多个属性，导入程序将检查每个属性中的第一个非空值。
如果字符串值为完整路径，则该路径将用作该基元的 USD 场景图路径。如果字符串是相对路径（或只是一个名称），则该字符串将追加到**导入路径前缀**字符串以生成完整的场景图路径。
如果给定的 SOP 原语上不存在列出的属性，或者所有值都是空字符串，则导入程序将自动生成一个名称（例如，）。`sphere_0`
将高度场导入为网格
如果源 SOP 几何包含高度场体积，则会将其导入为多边形网格。如果值变化，其他图层将作为顶点原价导入，如果值恒定，则作为常量原价导入。
## 几何处理
这些参数提供了更改 SOP 几何数据解释的选项。
将面视为细分曲面
对于尚未使用细分方案标记的多边形网格，请创作设置为 .这会将它们转换为细分曲面。`subdivisionScheme``catmullClark`
细分组
如果将面视为细分表面处于打开状态，则仅将此基元[组中](https://www.sidefx.com/docs/houdini/model/groups.html)的**面转换为细分**曲面。
反向多边形顶点排序
USD 支持网格基元上的属性，该属性指示多边形是具有左手排序还是右手排序，而 SOP 几何始终是左手排序。启用此选项后，导入器始终将顶点（和关联的 primvar）重新排序为右手。`orientation`
当将右手多边形从美元往返到 SOP 并返回美元时，这很有用。将数据导入SOP时，数据始终转换为左手排序。如果您在没有此选项的情况下将多边形导入回 USD，则与原始多边形不同，它们将是左撇子。
## 导入数据
这些参数会影响 SOP 几何属性转换为 USD 属性和初变量，以及默认值和时间采样值创作之间的选择。
创作时间示例
从 SOP 导入的值是应作为相应 USD 属性的默认值创作，还是作为时间样本（在时间轴中的时间）。
（当要求 USD 系统输入属性值时，如果属性上不存在时间样本，则返回默认值。否则，它将返回从时间示例数据插值的值。
如果 SOP 与时间相关
如果几何图形来自的 SOP 节点与时间相关（已动画或包含动画值），则写入时间样本。否则，写入默认值。
如果没有明确排除
将所有值创作为时间样本，但**单值**属性参数中列出的属性除外。
从不
将所有值作为默认值创作。
（这是此节点上唯一无法在几何图形上预配置的参数[美元配置标准操作程序](https://www.sidefx.com/docs/houdini/nodes/sop/usdconfigure.html).这是因为它需要一个“实时”SOP，而不仅仅是嵌入在几何体中的属性值。
拓扑属性
控制 USD 拓扑属性应创作为时间采样值还是默认值。
动画
如果您知道源几何中的拓扑随时间变化，请选择此选项可将拓扑属性记录为 USD 场景图中的时间样本。在播放过程中，具有动画拓扑可能非常昂贵，因此请仅在必要时使用此选项。
静态的
将拓扑属性写入为默认值。这可以使播放速度更快，但会限制拓扑随时间变化的方式。
没有
不要创作拓扑属性。
当美元数据被发送到SOP进行处理，然后被带回LOP时，这很有用。使用此选项告诉导入器几何拓扑在此过程中未更改，因此将仅导入更改的点位置或其他原变量。
属性
以空格分隔的属性名称/模式列表，指定要将哪些 SOP 属性作为 primvar 导入 USD。
除了直接匹配属性名称外，还有一些具有特殊含义的值：
`bounds`
使用关联 SOP 几何图形的计算边界框创作 USD 属性。`extent`
`visibility`
根据几何属性的值创作 USD 可见性属性。`usdvisibility`
有关进口商交易如何将某些众所周知的Houdini属性转换为美元等价物的信息，请参阅[导入属性](https://www.sidefx.com/docs/houdini/solaris/sop_import.html#attrs)。
索引属性
以空格分隔的属性名称/模式列表，指定要将哪些 SOP 属性作为索引 primvar 导入 USD。
如果 SOP 属性与此模式匹配，则导入程序会将 primvar 创作为值的索引数组（即，值数组调用 ，并将索引数组写入这些值中，称为 ）。`primvars:name``primvars:name:indices`
对于不是整数或字符串的属性，准备索引 primvar 可能很昂贵。您应该只使用索引 primvar，因为由于在大量组件中使用了少量唯一值，因此可能会显著节省存储大小。
导入为单元素数组
以空格分隔的属性名称/模式列表，指定要将哪些 SOP 属性作为具有插值的 primvar（具有整个基元的单个值的数组）导入到 USD 中，无论 SOP 几何属性是点属性、基元属性还是顶点属性。如果可以为特定的 USD 原语选择多个值，则导入商将选择它遇到的第一个值。 作为单个元素数组导入（相对于作为**单个值导入**）可能很有用，因为它允许在不更改 primvar 类型的情况下覆盖 primvar 的插值。`Constant`
作为单值导入
一个以空格分隔的属性名称/模式列表，指定要将哪些 SOP 属性作为具有插值的 primvar 导入到 USD 中，并且是整个基元的单个值，无论 SOP 几何属性是点属性、基元属性还是顶点属性。如果可以为特定的 USD 原语选择多个值，则导入商将选择它遇到的第一个值。 这是导入详细信息属性的默认行为。 这类似于“**作为单元素数组导入”**，但 primvar 的类型是标量值，而不是具有单个元素的数组（例如，而不是 ）。`Constant``vector3f``vector3f[]`
布尔属性
以空格分隔的属性名称/模式列表，指定应将哪些整数 SOP 属性转换为类型的 primvar。`bool`
设置默认值
以空格分隔的属性名称/模式列表，指定始终将哪些 SOP 属性创作为 USD primvar 的默认值（从不计时样本）。这是“**创作时间样本**”设置为“如果未明确排除”时的排除项列表。
分区属性
以空格分隔的属性名称/模式列表，指定哪些 SOP 基元字符串属性表示几何的子集。对于网格和曲线基元，导入程序将此属性具有相同值的元素放入其自己的几何子集中。
导入程序将尝试将子集名称设置为属性值，但可能需要更改名称，使其成为合法的 USD 基元名称。导入程序将几何子集 prim 上的原始属性值存储为带有键的自定义数据。`partitionValue`
具有属性名称的前缀子集
从分区属性创建子集时，通过将属性名称与**分区属性**的值（字符串或整数）组合来命名子集。 这样可以避免多个分区属性包含相同值时的名称冲突，但如果需要精确控制子集名称，则可能不希望发生冲突。 对于字符串属性，如果禁用此选项，则属性值将直接用作子集名称。
子集组
指定 SOP 基元组的[组](https://www.sidefx.com/docs/houdini/model/groups.html)名称/模式的空格分隔列表。每个组中的 SOP 多边形和曲线基元将作为几何子集导入，以该组命名。
美元自定义属性
以空格分隔的属性名称/模式列表，指定要将哪些 SOP 属性作为属性（而不是 primvar）导入 USD。
将 UV 属性转换为 ST
将 SOP 顶点属性转换为名为 的美元原价变量。是否需要启用此功能取决于您使用的渲染器以及着色器的创作方式。如果您使用 Karma 进行渲染，请将其关闭。`uv``primvars:st`
（在撰写本文时，以美元为单位的纹理坐标命名没有严格的标准，但使用 是常见的约定，而在 SOP 几何中，使用 是常见的约定。`st``uv`
参见
-   [![](https://www.sidefx.com/docs/houdini/icons/LOP/sopimport.svg)标准作业程序导入](https://www.sidefx.com/docs/houdini/nodes/lop/sopimport.html)