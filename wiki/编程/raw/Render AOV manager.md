---
type: concept
title: Render AOV manager
status: pending
source_type: user_upload
created: 2026-05-02
content_hash: "acf8d2b197d1"
---
#### Render AOV manager
![image.png](https://i0.hdslb.com/bfs/album/1f9b2a0df0323fecede654bedd4401ad3876f9e2.png)

- Cryptomatte隐蔽性
Cryptomatte是一个可靠的渲染时图像遮罩生成系统，用于图像合成应用程序。Cryptomatte由Psyop创建，可创建多色ID遮罩，支持运动模糊，透明度和景深，没有额外的渲染时间损失，并将这些遮罩写入EXR文件。这些遮罩或Cryptomatte所指的ID通道通常来自材料名称（其他通道如下所述，但提供不一致的结果，不应使用）。Cryptomatte可以节省大量时间，特别是对于复杂的场景，因为它允许工作专注于镜头设计和创作，而不是用于合成的技术哑光生成。

使用Cryptomatte技术嵌入在Octane Render Engine中，因此无需为C4D + Octane安装或下载任何其他Cryptomate插件。但是，可能需要为特定的合成应用程序下载并安装Cryptomatte，例如Adobe After Effects和Adobe Photoshop。

要求Cryptomattes要求渲染的图像以Open EXR（Octane）文件格式保存。加密物质信息作为额外的像素层存储在渲染的 EXR 文件中。需要从 EXR 文件中提取这些通道，以便在合成应用程序中使用。"加密通道"属性确定每个像素分配的 ID 通道数。Octane默认为6，但是如果您看到特定Cryptomates的问题，请尝试增加该值（必须可被二整除），因为这相当于用两个值表示的编号EXR层（00，01和02，在默认值为6的情况下）。

工作原理Cryptomattes使用ID覆盖对等技术，其中一个通道表示给定通道的图像区域，另一个通道表示图像中该通道的覆盖范围。ID 通道是每个像素一个对象。覆盖通道决定了所分配对象对像素的贡献量。然后对这些 ID 覆盖率对进行排名，以添加对每个像素多个对象的支持（排名决定了对象 1 到对象 n 的图层优先级，从前到后）。这就是为什么Cryptomatte通道总是成对两个。请记住，Cryptomattes通常为每像素32位，这会增加资源消耗。也就是说，对于合成软件来说，这比Octane更是一个问题。

当使用加密解码器将包含加密内容的EXR文件加载到合成软件中时，只需选择组合元素所需的不同遮罩ID通道即可。由于有很多可供选择，合成器有许多选项可用于镜头组装。

使用CRYPTOMATTE是从场景数据生成遮罩，特别是材质名称或对象名称。其他数据类型可用，但由于C4D和OC之间的架构差异，这些类型在C4D中不会生成一致的ID通道，因此，不应使用这些其他类型的数据。

启用 Cryptomattes后会自动创建，并指定所需的类型。也就是说，如果需要特定类型的遮罩，可以在C4D和Octane对象标签中进行一些额外的调整，并将在下面讨论。

材质节点名称
"材质节点名称"通道用于按指定的材质创建颜色。在不同的对象上使用相同的材料将导致这些对象在加密输出中具有相同的颜色（ID通道）。

对象节点名称
对象节点名称通道用于基于场景中每个对象的对象节点创建 ID 通道。对于对象节点名称输出，分隔由 Octane对象标签中设置的图层 ID定义>对象图层选项卡。仅通过确保对象具有相同的层 ID 即可实现对象集合。唯一对象将需要唯一 ID。

注意

此选项仅适用于 Octane 独立版。c4doctane 插件不支持此功能。

克隆器是一种特殊情况：如果使用克隆器，则每个克隆或克隆部分都将获得唯一的颜色。如果不希望这样做，则可能需要将要克隆的对象简化或烘焙到单个对象中。此外，如果要将整个克隆程序输出视为单个对象，则需要执行"连接 + 删除"操作。当然，这将增加VRAM的消耗。
  
其他参数
CRYPTOMATTE渠道
要分配的加密通道数。此值必须是 2 的倍数，因为 ID 通道和覆盖通道必须保持在一起。当渲染开始时，Octane 会收集一些种子样本，这些样本会计算Cryptomatte通道分布。这些通道集表征像素样本的属性。

种子因子
这是用于播种Cryptomatte的样本数量。此值乘以指定的通道数。这很重要，因为此值决定了 Crypomatte 像素的精度。例如，如果您有多个对象可能占用同一像素，并且这些对象中的任何一个（或全部）都在运动中，则如果通道值太低或太高，则可能会看到伪影。低值将导致在羽化边缘处产生凹陷伪影，而较大的值会导致在覆盖许多不同 ID 的位置出现伪影。
 
避免使用这些参数（为完整性而显示）

-   CryptoInstance - Cryptomatte通道基于实例 ID，实例 ID 派生自对象的分层组的命名空间，例如使用克隆程序创建的资产（取决于克隆程序设置）。此选项无法生成稳定的遮罩 ID。
-   CryptoObjectNode - Cryptomatte通道基于不同的对象节点。此选项无法生成稳定的遮罩 ID。
-   CryptoMaterialNode - Cryptomatte通道基于不同的材料节点。此选项无法生成稳定的遮罩 ID。
-   CryptoMaterialPinName - Cryptomatte通道基于场景中现有材质引脚的名称。此选项无法生成稳定的遮罩 ID。
-   CryptoObjectPinName - Cryptomatte通道基于场景中现有对象引脚的名称。此选项无法生成稳定的遮罩 ID。
- 
在渲染设置中，单击"格式"，并确保已选择"EXR（Octane）"常规EXR或其他格式将不起作用。

设置渲染

在 C4D 中，单击"渲染>编辑渲染设置> Octane 渲染器>渲染通道选项卡>加密通道" 。您必须激活此选项卡中的启用开关才能激活Cryptotate通行证以及所需的单个输出通行证。仅使用"CryptoMaterialNodeName"或"CryptoObjectNodeName"传递。不要使用任何其他通道，因为其他加密遮罩通道（如"CryptoMaterialNode"和"CryptoObjectNode"）使用材质/对象层节点名称和唯一节点 ID 生成唯一 ID/颜色。每次在节点图中创建新节点时，它都会获得一个新的唯一ID（在渲染时发生）。当您重新开始渲染时，插件会删除所有现有节点并重新创建它们，从而产生新的唯一ID，这也将导致加密ID发生变化。"CryptoMaterialNodeName"传递是唯一一个在帧到帧和会话到会话之间生成一致的加密ID 的传递，即使在渲染重新启动后也是如此。

![](https://docs.otoy.com/cinema4d//lib/Render_Passes_Crypto_Render_Settings.png)
在Crypto passs中，单击"CryptoMaterialNodeName"和"CryptoObjectNodeName"。之后，您就可以点击渲染按钮了。

渲染完成后，将文件导入到所需的合成应用程序中，然后按照在该应用程序中使用Cryptotte的记录步骤进行操作。

加密事务疑难解答

隐秘物是黑色的
合成应用程序必须具有内置或通过插件支持的Cryptotte，否则Cryptomats将显示为黑色。Cryptomatte数据使用智能的RGB加密系统，该系统要求对Cryptomatte数据进行解密并转换为图像，然后可用于合成。

隐墨颜色不断随机变化
只有 CryptoMaterialNodeName 输出是"会话稳定的"，也就是说，每当重新启动渲染或重新加载文件并继续渲染时，输出都是一致的。必须不时重新渲染元素的情况并不少见，只有材质节点名称才会在会话中使用 ID 通道颜色。

Material node 材质节点
Material node name 材质节点名
Material pin name 材质销名
Object node 对象节点
Object node name 对象节点名
Object pin name 对象引脚名
Instance 实例
Geometry node name 几何节点名
Render layer 渲染层
User instance ID 用户实例ID
- rradiance
- Light direction
- Noise
- Post processing
- Shadow
- Diffuse
- Diffuse direct
- Diffuse indirect
- Diffuse filter
- Emitters
- Environment
- Reflection
- Reflection filter
- Reflection direct 
- Reflection indirect
- Refraction
- Refraction filter
- Subsurface scattering
- Transmission 
- Transmission filter
- Volume 
- Volume emission
- Volume Mask
- Volume z depth front
- Volume z-depth back
- Custom
- Global texture
- Denoiser remainder
- Denoiser dffuse direct
- Denoiser dffuse indirect 
- Denoiser reflection direct
- Denoiser reflection indirect
- Denoiser emission
- Denoiser volume
- Denoiser volume
- emission
- AO
- Baking group ID
- Dffuse fiter (info)
- Index of refraction
- Light pass ID
- Material ID
- Motion vector
- Normal (geometric)
- Normal (shading)
- Normal (smooth)
- Normal (tangent)
- Object ID
- Object layer color
- Opacity
- Position
- Reflection filter (info)
- Refraction filter (info)
- Render layer ID
- Render layer mask
- Roughness
- Texture tangent 
- Transmission filter (info)
- UV coordinates
- Wireframe
- Z-depth
- Light
- Light direct
- Light indirect
- Layer shadows
- Layer reflections
- L aver black shadows
