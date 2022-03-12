---
lang: zh-CN
layout: faq
section: twilightmenu
category: other
title: 常见问题 & 故障处理
long_title: TWiLight Menu++ 常见问题 & 故障处理
description: TWiLight Menu++ 的常见问题和故障处理
---

若要获取更多常见问题解答，请访问 [GBAtemp 的帖子](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/)。
{:.alert .alert-info}

#### 为什么我的3DS在启动 TWiLight Menu++ 时，会出现黑屏、崩溃、断电等等的情况？
TWL_FIRM可能以某种方式被破坏了。 按照这个指南来解决这个问题：<https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### 如何解决启动 TWiLight Menu++ 时出现白屏的问题？
- 重新启动主机
- 如果这不起作用，将你的SD卡格式化为FAT32，分配单元大小为32KB。
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

#### How do I show a custom picture on the top screen of the DSi theme?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded. If there are no applicable images, screenshots taken by nds-bootstrap will be used instead.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

#### How do I get games?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
Yes. You can use [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS, or [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi / 3DS.

#### How do I change TWiLight Menu++'s language?
1. Open TWiLight Menu++ settings, you can do this by holding <kbd>SELECT</kbd> while loading TWiLight Menu++
1. Change the first option until you see the language you want, then exit settings
   - You may also want to change the first three options on the nds-bootstrap settings page as they control the language and region of DS games and their titles in TWiLight Menu++

#### Is this a DS(i) emulator?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### What systems does TWiLight Menu++ support?
See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Can exploits of Slot-1 games boot TWiLight Menu++?
No. SD card access is only granted to DSiWare applications, so Slot-1 games cannot launch (or even access) TWiLight Menu++.

#### Why can't I find/see my games?
There are a multiple reasons you may be unable to find them.
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (skins, configuration, images, emulators and more). If you've placed your titles here, please move them to another location.
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If your game is in an archive (`zip`, `rar`, `7z`, etc), it cannot be used by TWiLight Menu++. Extract the game from the archive to use it
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file

#### How do I access TWiLight Menu++ settings?
The way to access the TWiLight Menu++ settings varies between your configuration.
- **DS Classic Menu:** Tap the DS icon at the bottom of the lower screen
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes: using SELECT Menu:** Press <kbd>SELECT</kbd>, then launch the Settings Applet (use the D-PAD to highlight options)
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes not using SELECT Menu:** Hitting <kbd>SELECT</kbd> will bring you to the DS Classic Menu
- **Nintendo 3DS theme:** Tap the the wrench icon on the lower screen
- **R4 Original theme:** Hit <kbd>START</kbd> (if you’re in the file browser), then hit <kbd>SELECT</kbd>

You can also hold <kbd>SELECT</kbd> while launching TWiLight Menu++ to directly access the settings.
