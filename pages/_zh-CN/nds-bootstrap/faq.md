---
lang: zh-CN
layout: faq
section: nds-bootstrap
title: 常见问题 & 故障处理
long_title: nds-bootstrap 常见问题 & 故障排除
description: nds-bootstrap 的常见问题 & 故障处理
---

#### 我的 ROM 有问题，我该怎么办？
- 确保你使用的是最新版本的 [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) 和 [**TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) （如果你在使用的话）（每个版本的页面都有更新说明）
- 检查 [nds-bootstrap兼容性列表](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0)，看看这是否是最新版本nds-bootstrap上的一个已知问题
- 尝试禁用该游戏的所有金手指，因为有些金手指目前与nds-bootstrap不兼容，在 **TW**i**L**ight Menu++的游戏金手指菜单中按 <kbd class="l">L</kbd> 将禁用该游戏的所有金手指。
- 如果以前能运行，删除 `fatTable` 和 `patchOffsetCache` 文件夹，在 `sd:/_nds/nds-bootstrap/`。
- 用不同的设置运行游戏，包括ARM9 CPU速度、异步读取、DS/DSi模式、声音质量、读取DMA等。
    - 使用 **TW**i**L**ight Menu++，将所有游戏特定设置更改为 `默认`
    - 如果有一个游戏特定设置导致你的问题，请报告给 [GitHub仓库](https://github.com/DS-Homebrew/nds-bootstrap/issues)
- 如果存在，请删除 `sd:/_nds/WiLightMenu/extras` 中的金手指数据库(`usrcheat.dat`)
- [重新转储ROM](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games) ，以确保它没有被损坏
- 如果你已经遵循了上述所有步骤，请在 [Discord服务器](https://discord.gg/yD3spjv)上提问（仅限英语）
- 如果服务器的人说是nds-bootstrap的问题，请检查该游戏是否已经在GitHub上被报告了
    - 也要检查已关闭的issue，以防止已经关闭的issue转向另一个issue
    - 如果它没有任何匹配的GitHub issue，请继续创建一个新的issue
- 如果此时还没有找到解决方案，请更新 [兼容性列表](https://wiki.ds-homebrew.com/nds-bootstrap/testing)

#### 为什么 ROM 加载出现问题，尽管可以原生运行？
nds-bootstrap对ROM功能进行了修补，以便从SD卡上运行，因为ROM是硬编码为从Slot-1读取。 还有时间问题和反烧录措施（大部分已经被删除），这两个问题将导致ROM不能正常工作。

#### 为什么要在常规烧录卡上使用 nds-bootstrap？
- 某些兼容的ROM被加载到内存中，使得加载时间甚至比普通游戏卡更快。
- 你可以将VRAM内存总线扩展到32位
- 利用DSi的额外CPU速度，使一些游戏的性能更佳
- 增强你的音频至48kHz
- 使用DSi模式，允许使用DSi功能
- 消耗更少的电池电量
- 使用某些游戏卡，你能够在你的游戏中使用红外线
- nds-bootstrap是开源的，这意味着开发人员可以随时更新它，以修复错误和其他东西，即使项目被终止
- 模拟DS内存扩展卡，这意味着需要该附件的游戏可以运行
     - 目前，只有 *Nintendo DS Browser* 可模拟它
- 在兼容的游戏中调换上下屏幕，以获得更舒适的游戏体验，或者在屏幕破损或拆除的系统上调换
- 使用游戏中的菜单进行截图和RAM编辑

#### DS/DS Lite：为什么在DS烧录卡上使用nds-bootstrap？
- 某些兼容的ROM被加载到内存扩展卡（或含有RAM的Slot-2烧录卡）中，允许加载时间甚至比普通游戏卡更快。
- 使用内置补丁和 DSi-Enhanced 游戏的Donor ROM可以运行超过400个DSiWare
     - 请记住，nds-bootstrap将始终用于DSiWare，无论在TWLMenu++设置中的 `nds-bootstrap` 是否启用
     - 并非所有 DSiWare 游戏都能保存，这是因为很难为它们添加保存支持，以及/或者它们在保存文件系统中存储了多个文件。
- 如果你的烧录卡内核不能运行某个ROM，可以用nds-bootstrap来代替，并且可以按游戏特定设置
- 在兼容的游戏中调换上下屏幕，以获得更舒适的游戏体验，或者在屏幕破损或拆除的系统上调换
- 使用游戏中的菜单进行截图和RAM编辑

#### 什么是Donor ROM？
在nds-bootstrap中，当一个游戏不能启动时，另一个ROM被用来“捐赠”它的ARM7（和ARM7i，如果有的话）二进制文件给无法运行的游戏，以代替游戏自己的二进制文件。     
捐赠的ROM可以用 **TW**i**L**ight Menu++来设置。
- **DS模式的烧录卡：** 支持的DSi-Exclusive/DSiWare游戏将需要一个DSi-Enhanced ROM作为Donor ROM
- **DSiWarehax：** 由于DSi-Enhanced游戏和（大多数）DSi-Exclusive/DSiWare游戏都含有不同的MBK设置，如果没有Donor ROM，DSi-Enhanced游戏将无法在DSi模式下启动。 通过将DSi-Exclusive/DSiWare游戏设置为Donor ROM，DSi-Enhanced游戏将能够在该漏洞所使用的DSiWare游戏设置的MBK内运行。
     - 在 DSi 上，如果 **TW**i**L**ight Menu++ 检测到未设置Donor ROM， *Nintendo DSi Sound* 和/或您已启动的有效游戏将自动设置为Donor ROM。
- **CycloDS iEvolution：** 与DSiWarehax的情况相同，但是恰恰相反，DSi-Exclusive/DSiWare游戏需要将DSi-Enhanced游戏设置为Donor ROM。

#### 哪个是最好的Donor ROM？
*没有最好的*。 大多数 TWL 游戏的 ROM 都可以设置为Donor ROM.

例如：
- **DSi 上的 DSiWarehax：** *Nintendo DSi Sound* 和/或您已启动的有效游戏将自动设置为 Donor ROM（如果尚未设置）。
- **3DS 上的 DSiWarehax：** 使用 GodMode9 转存 DS WiFi 设置 ROM（SDK5.5），并将其设置为Donor ROM。

#### 为什么我不能设置一个Donor ROM？
如果有一个游戏需要一个Donor ROM，而TWLMenu++说要找到的ROM没有显示设置为Donor ROM的选项（前提是你已经向下滚动），那么就找另一个ROM来设置为捐赠者。

#### 什么是每夜版(nightly)，我可以在哪里获得？
每夜版是为了反映最新的commit而构建。 每夜版可能是不稳定的，但有最新的错误修复。 你可以在[TWLBot/Builds GitHub 存储库](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z)获得nds-bootstrap的每夜版。

#### 为什么我的金手指不起作用？
- 一些金手指可能需要使用按键激活或其他需要满足的条件。 请查看金手指的描述以了解更多信息
  - 在 **TW**i**L**ight Menu++中，你可以按Y键查看特定金手指的信息（如果有的话）
- 大多数金手指是为在DS模式下使用而开发的，在DSi模式下运行时可能无法正确工作。 如果游戏是DSi-Enhanced，尝试将其设置为在DS模式下运行
- nds-bootstrap中实现的E-type金手指目前是不稳定，这意味着它们可能会也可能不会工作。 你的金手指可能使用了这种类型，而且不知道这个问题何时能得到解决。

关于金手指的更多信息，请查看 [零售ROM页面的Action Replay金手指部分](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats)。

#### 我该如何进行屏幕截图？
你可以从游戏内的菜单中对主屏幕进行截图。 默认情况下，通过按 <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>，打开游戏内菜单，然后选择 `Screenshot...`，如果需要的话，改变VRAM bank，然后按 <kbd class="face">A</kbd> 来保存屏幕截图。

要在你的电脑上查看你的屏幕截图，你需要提取 `sd:/_nds/nds-bootstrap/screenshots.tar`，里面会有你所有的BMP格式的屏幕截图。 还会有额外的空BMP文件，以使TAR文件达到50个，这些可以直接忽略或删除。

nds-bootstrap的`screenshots.tar`只能容纳50个屏幕截图，所以一旦你快用完了，你就应该提取它们并删除TAR，nds-bootstrap会在你下次加载游戏时生成一个新的TAR。

#### 什么是主屏幕，为什么只能截主屏幕的截图？
“主”屏幕是指使用主引擎绘制的任何屏幕，主引擎可以是任何一个物理屏幕。 通常情况下，它是发生主要游戏的屏幕，如果一个屏幕有3D，那它总是主屏幕。 在游戏内菜单，它将永远是上屏幕。

只能对主屏幕进行截图的原因是任天堂DS的硬件限制，它没有帧缓冲器，但它有一个显示捕捉功能，可以捕捉主引擎的输出。 这最常被游戏用来将3D渲染到两个屏幕上，但也可用于拍摄屏幕截图。

#### 在拍摄屏幕时，我被要求选择的 "VRAM bank "是什么？
当使用nds-bootstrap进行截图时，它需要使用DS的显示捕捉功能从主引擎中捕捉一帧，然而这种显示捕捉只能写入VRAM，并且需要前四个bank中的一个。 nds-bootstrap会尝试选择一个没有被用于主引擎的bank，所以通常你可以简单地忽略这一点，然而在某些情况下，所有四个可能的VRAM bank都会被用于主引擎，因此不可能拍出完美的截图，你将需要选择你认为看起来最好的bank。

#### 我可以使用nds-bootstrap进行在线联机游戏吗？
使用nds-bootstrap进行在线联机游戏与使用真正的游戏卡完全一样。 参见 [Wi-Fi](../ds-index/wifi) 页面，了解连接到其他在线服务的信息。
- 如果你在DS模式下玩DSi-Enhanced游戏，你将被限制在不安全的或WEP网络连接上。

#### 将游戏设置为使用133MHz（TWL）的CPU速度会损坏我的主机吗？
不会。 虽然不是所有的游戏在这种设置下都能正常运行，但DSi和3DS的设计是为了能够达到这个CPU速度。
- 如果你在133MHz（TWL）CPU速度下运行游戏时遇到问题，请在 [**TW**i**L**ight Menu++ GitHub仓库](https://github.com/DS-Homebrew/TWiLightMenu/issues) 详细说明影响，以便将其列入黑名单，避免在该CPU速度下启动。

#### 我可以用nds-bootstrap来加快游戏速度吗？
虽然TWL的CPU速度可能会减少卡顿，但nds-bootstrap不能以超过预期的速度运行游戏。

#### 我可以使用nds-bootstrap重新映射按钮输入吗？
不能。 由于nds-bootstrap是原生运行游戏的，它不能改变大多数按钮的功能。 唯一的办法是修改游戏本身，或使用金手指。

#### 如何用nds-bootstrap游玩改版宝可梦ROM？
宝可梦 心金/魂银、黑/白和黑2/白2有反盗版措施，在运行改版ROM之前，*必须*手动打补丁。 你可以使用 [DS-Scene ROM Tool](https://gbatemp.net/download/35735/) 进行。
- 改版ROM不能像原版游戏那样进行即时进行反烧录补丁，因为改版ROM有太多独特的可能输出，不能合理地包括在 **TW**i**L**ight Menu++中

#### 什么是DSi二进制文件？ 我该如何获取？
DSi二进制文件是游戏代码中用于DSi（以及3DS）系统的部分，以使用DSi的功能，如摄像头和改进的Wi-Fi功能。 旧的转储方法可能没有正确转储这些东西。

- 没有DSi二进制文件的ROM仍然可以通过DS模式在任何游戏机上玩，在该模式下，游戏将像在任天堂DS/Lite上一样运行

要获得包含DSi二进制文件的ROM， [重新转储你的游戏卡](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games)。
