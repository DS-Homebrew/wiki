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

#### Acekard/Wood UI主题在哪里？
由于Acekard（也叫Wood UI）主题的BUG，会导致SD卡损坏，因此主题被删除。 请等待之后的版本修复。 这个主题的回归进度可以在[这个PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109)中找到。

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

- 图像必须不大于208x156
- 如果启动时发生了错误，很可能是图像尺寸的错误。 请使用 [tinypng](https://tinypng.com) 来减小尺寸

至于隐藏图片，你需要编辑 `theme.ini` 文件，在 `sd:/_nds/WiLightMenu/dsimenu/themes/[皮肤文件夹]/` 找到。 用文本编辑器打开文件，将 `RenderPhoto` 一行的值从 `1` 改为 `0`，然后保存该文件。

#### 我如何获取游戏？
你可以从 [Universal-DB](https://db.universal-team.net/ds) 和 [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games)下载自制游戏。 为了获得你的卡带游戏的转储：
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
- 在SD卡根目录的 `_nds` 文件夹不是为了在TWiLight Menu++访问准备的，因为它保留了基于功能的文件（皮肤、配置、图像、模拟器等等）。 如果你把你的游戏放在这里，请把它们移到其他地方。
- 如果你在一个文件夹里有超过39个项目，并且菜单上的所有空位都被占用，你的游戏可能在下一页。 使用 <kbd class="l">L</kbd>/<kbd class="r">R</kbd> 或 <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> 来切换页面
- 如果你的游戏或文件夹是隐藏的，你可能需要修改TWiLight Menu++的GUI设置来显示隐藏文件
- 如果你的游戏是在一个压缩文件里面（`zip`, `rar`, `7z`, 等等），它不能被TWiLight Menu++读取。 从压缩文件中提取游戏以使用它
- 如果你的游戏没有使用[支持的扩展名之一](../ds-index/emulators#list-of-systems-supported-by-twilight-menu)，你可能必须通过重命名文件来改变扩展名

#### 我如何访问TWiLight Menu++的设置？
访问TWiLight Menu++设置的方式因你的配置而异。
- **DS经典菜单：** 点击下屏幕底部的DS图标
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher主题：使用SELECT菜单：** 按 <kbd>SELECT</kbd>，然后启动设置小程序（使用十字键选择选项）
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher主题不使用SELECT菜单：** 按下 <kbd>SELECT</kbd> 将使你进入DS经典菜单
- **任天堂3DS主题：** 点击屏幕下方的扳手图标
- **原版R4主题：** 按下 <kbd>START</kbd> （如果你在文件浏览器中），然后按下 <kbd>SELECT</kbd>

你也可以在启动TWiLight Menu++时按住 <kbd>SELECT</kbd> 来直接访问设置。

#### How do I use custom icons/banners for games?
You can use a custom banner in either PNG or DS banner.bin format by placing it in the `sd:/_nds/TWiLightMenu/icons` folder with the name of the ROM (including the extension) + `.png` or `.bin`.

For PNG banners you simply need any PNG file with 15 colors or fewer and a maximum resolution of 32x32.

banner.bin type banners are able to be animated and allow you to replace the title that will be shown in TWiLight Menu++. They can be made using either [NDS Banner Editor](https://github.com/TheGameratorT/NDS_Banner_Editor/releases) or [dsibanner.py](https://gist.github.com/Epicpkmn11/232b7568eed650e11523da4b01c7f64f). NDS Banner Editor is a GUI application that may be simpler to use, however it sometimes has issues with transparency and is Windows only (although it does work in WINE).

Pre-made banners can be found in the [icons section of the TWiLight Menu++ skins site](https://skins.ds-homebrew.com/icon/) and if you make any they can be shared there as well.
