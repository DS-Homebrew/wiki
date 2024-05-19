---
lang: zh-CN
layout: faq
section: twilightmenu
title: 常见问题 & 故障处理
long_title: TWiLight Menu++ 常见问题 & 故障排除
description: TWiLight Menu++ 的常见问题和故障处理
---

若要获取更多常见问题解答，请访问 [GBAtemp 的帖子](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/)。
{:.alert .alert-info}

#### 为什么我的3DS在启动 TWiLight Menu++ 时，会出现黑屏、崩溃、断电等等的情况？
TWL_FIRM 可能已经损坏了。 按照这个指南来解决这个问题：<https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### 如何解决启动 TWiLight Menu++ 时出现白屏的问题？
- 重新启动主机
- 如果这不起作用，将你的SD卡格式化为FAT32，分配单元大小为32KB。
   - 请参阅 [dsi.cfw.guide 的页面](https://dsi.cfw.guide/sd-card-setup.html)了解推荐的工具。
- 如果这也不奏效，尝试换一张SD卡

#### How do I fix touch screen not working after launching a game?
- If you're launching a cartridge, then make sure the `Slot-1 Touch Mode` setting is set to `DS mode`
- If the issue persists, or if you're using a ROM instead, then follow this guide: https://gbatemp.net/threads/recover-ds-mode-after-an-nvram-brick-eg-after-using-a-ds-bricker.516444/

#### 如何解决 TWiLight Menu++ 在启动游戏时重新启动或出现 Guru Meditation Error 的问题？
进入 TWLMenu++ 设置，禁用 `更新最近游戏列表`。

#### 为什么在从SD卡里载入DS游戏的时候白屏了？
在 nds-bootstrap 常见问题页面查看:[我的 ROM 有问题，我该怎么办？](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do)

#### 如何使用金手指？
你需要在 `sd:/_nds/TWiLightMenu/extras/` 文件夹中有一个 `usrcheat.dat` 文件格式的金手指数据库。 最新的金手指数据库可在此处下载: [DeadSkullzJr's NDS(i) Cheat Databases](https://gbatemp.net/threads/488711/)
- 在3DS上，这个数据库可以在Universal-Updater应用程序中安装 "NDS(i) Cheat Databases"软件包来获得。 这个软件包将自动将其安装到所需位置。

另外，你还可以使用 [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) 来创建你自己的金手指数据库。

安装了金手指数据库之后， 你可以在TWiLight Menu++中选中一个游戏，按下 <kbd class="face">Y</kbd> 键来启用金手指。 然后按 <kbd class="face">X</kbd> 键打开金手指菜单。

#### 如何在DSi主题的上屏幕显示自定义图片？ 我可以隐藏它吗？
每次加载菜单时都会在 `sd:/_nds/TWiLightMenu/dsimenu/photos/` 中随机选择 `.png` 图像显示。 如果没有适用的图像，将使用在 nds-bootstrap 拍摄的屏幕截图来代替。

- The images(s) must be no bigger than 208x156
- 如果启动时发生了错误，很可能是图像尺寸的错误。 请使用 [tinypng](https://tinypng.com) 来减小尺寸

至于隐藏图片，你需要编辑 `theme.ini` 文件，在 `sd:/_nds/WiLightMenu/dsimenu/themes/[皮肤文件夹]/` 找到。 用文本编辑器打开文件，将 `RenderPhoto` 一行的值从 `1` 改为 `0`，然后保存该文件。

#### 我该如何获取游戏？
你可以从 [Universal-DB](https://db.universal-team.net/ds) 和 [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games)下载自制游戏。 要获得正式发布的游戏，你需要从实体卡带或现有的游戏机中获得转储游戏：
- 在DS上，你可以使用 [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) 来转储你的GBA游戏，如果你有一个Slot-2烧录卡，还可以转储DS游戏。 如果你只有一张Slot-1烧录卡，并且想转储一个DS游戏，你可以使用 [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/)，它需要一个与DS兼容的Wi-Fi连接，以及一个单独设备上的FTP客户端来接收ROM
- 在DSi上，你可以使用 [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) 来转储你的DS游戏和DSiWare
- 在3DS上，您可以使用 [GodMode9](https://github.com/d0k3/GodMode9/releases) 来转储您的DS游戏、DSiWare 和 Virtual Console 游戏

#### 我可以把游戏卡上的保存文件放到我的SD卡上吗，反之亦然？
是的。 你可以在3DS上使用 [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) ，或者在DSi / 3DS上使用 [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) 。

#### 我该怎么改变 TWiLight Menu++ 的语言？
1. 打开 TWiLight Menu++ 设置，你可以在加载TWiLight Menu++时按住 <kbd>SELECT</kbd> 打开设置
1. 改变第一个选项，直到你看到你想要的语言，然后退出设置
   - 你可能还想改变nds-bootstrap设置页面上的前三个选项，因为它们可以控制DS游戏的语言和地区以及TWiLight Menu++ 中的标题

#### 这是一个 DS(i) 模拟器吗？
不是，这不是一个模拟器。 菜单和DS游戏（通过nds-bootstrap加载）在主机的DS/DSi模式下原生运行。 唯一模拟的游戏机是过去的游戏机，但GBA是部分模拟的（一些或所有的部分如图形是原生运行的）。

#### TWiLight Menu++ 支持哪些主机？
参见 [TWiLight Menu++支持的主机列表](../ds-index/emulators#list-of-supported-systems-by-twilight-menu)。

#### Slot-1 游戏的漏洞可以启动 TWiLight Menu++ 吗？
不能。 SD卡的访问权只授予DSiWare应用程序，因此Slot-1游戏不能启动（甚至不能访问）TWiLight Menu++。

#### 为什么我找不到/看不到我的游戏？
有多种原因导致你可能无法找到它们。
- 在SD卡根目录的 `_nds` 文件夹不是为了在TWiLight Menu++访问准备的，因为它保留了基于功能的文件（皮肤、配置、图像、模拟器等等）。 如果你把你的游戏放到了这里，请把它们移到其他地方。
- 如果你在一个文件夹里有超过39个项目，并且菜单上的所有空位都被占用，你的游戏可能在下一页。 使用 <kbd class="l">L</kbd>/<kbd class="r">R</kbd> 或 <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> 来切换页面
- 如果你的游戏或文件夹是隐藏的，你可能需要修改TWiLight Menu++的GUI设置来显示隐藏文件
- 如果你的游戏是在一个压缩文件里面（`zip`, `rar`, `7z`, 等等），它不能被TWiLight Menu++读取。 从压缩文件中提取游戏以使用它
- 如果你的游戏没有使用[支持的扩展名之一](../ds-index/emulators#list-of-systems-supported-by-twilight-menu)，你可能必须通过重命名文件来改变扩展名

#### 我该如何访问TWiLight Menu++的设置？
访问TWiLight Menu++设置的方式因你的配置而异。
- **DS经典菜单：** 点击下屏幕底部的DS图标
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher主题：使用SELECT菜单：** 按 <kbd>SELECT</kbd>，然后启动设置小程序（使用十字键选择选项）
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher主题不使用SELECT菜单：** 按下 <kbd>SELECT</kbd> 将使你进入DS经典菜单
- **任天堂3DS主题：** 点击屏幕下方的扳手图标
- **原版R4主题：** 按下 <kbd>START</kbd> （如果你在文件浏览器中），然后按下 <kbd>SELECT</kbd>

你也可以在启动TWiLight Menu++时按住 <kbd>SELECT</kbd> 来直接访问设置。

#### 如何在游戏中使用自定义图标/banner？
你可以使用PNG或DS banner.bin格式的自定义banner，方法是将其放在 `sd:/_nds/WiLightMenu/icons` 文件夹中，名称为ROM（包括扩展名）+ `.png` 或 `.bin`。

对于PNG banner, 你只需要任何具有15种颜色或更少的PNG文件，最大分辨率为32x32。 全透明可以使用，不计入15种颜色，但半透明不能使用。

banner.bin类型的banner能够动画化，并允许你替换将在TWiLight Menu++中显示的标题。 它们可以使用 [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases) 生成。

预制的banner可以在TWiLight Menu++皮肤网站 [icons](https://skins.ds-homebrew.com/icon/) 部分找到，如果你制作了任何banner，也可以在那里分享。

#### How do I install custom themes for TWiLight Menu++?
Custom skins for themes can be acquired from [the official skins site](https://skins.ds-homebrew.com/), which houses serveral community-made skins ready to apply. You can also make a custom skin for the Nintendo 3DS and Nintendo DSi themes on your own by following [this guide](https://wiki.ds-homebrew.com/twilightmenu/custom-dsi-3ds-skins). The **Homebrew Launcher**, **Sega Saturn** and **Game Boy Color** themes are _**not**_ customizable.

Once you have acquired a custom skin, you can install it by placing its folder on the appropiate path, which depends on what theme the skin is made for.
- Skins for the Nintendo DSi theme go in `sd:\_nds\TWiLightMenu\dsimenu\themes\`
- Skins for the Nintendo 3DS theme go in `sd:\_nds\TWiLightMenu\3dsmenu\themes\`
- Skins for the R4 Original theme go in `sd:\_nds\TWiLightMenu\r4menu\themes\`

If you are using a 3DS family console, you can install custom skins using [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases). Go to Universal-Updater settings, then `Select Unistore`, `+`, `TWiLight Menu++ Skins`.

To apply a custom theme you must access TWiLight Menu++ Settings.
1. On the `GUI Settings` page, go to the `Theme` option and choose the theme using the right and left buttons on the D-Pad.
1. Once the target theme is selected, press the A button to choose between the skin you have installed.
1. Using the up and down buttons on the D-Pad, highlight the desired skin, then press A to select it.
1. Apply the settings by pressing B to go back to TWiLight Menu++.

TWiLight Menu++ should now have a customized look (and music, if the selected skin supports it and is enabled on the settings).

#### 有一个用于 DS(i) 的3DS 模拟器吗？
没有。 由于3DS使用较新的硬件，因此不可能在 DS(i) 上模拟 3DS.
