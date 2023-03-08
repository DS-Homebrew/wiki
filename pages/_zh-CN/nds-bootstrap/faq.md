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
- Less battery power is consumed
- Using certain Game Cards, you are able to use IR in your application
- nds-bootstrap is open source, meaning developers can always update it to fix bugs and other things, even if the project gets discontinued
- The DS Memory Expansion Pak is emulated, meaning games that require that accessory will work
- 在兼容的游戏中调换上下屏幕，以获得更舒适的游戏体验，或者在屏幕破损或拆除的系统上调换
- Take screenshots and edit values in the RAM using the in-game menu

#### DS/DS Lite：为什么在DS烧录卡上使用nds-bootstrap？
- 某些兼容的ROM被加载到内存扩展卡（或含有RAM的Slot-2烧录卡）中，允许加载时间甚至比普通游戏卡更快。
- 200+ DSiWare titles can be run using built-in patches and a Donor ROM of a DSi-Enhanced title
     - 请记住，nds-bootstrap将始终用于DSiWare，无论 ，在TWLMenu++设置中的 `nds-bootstrap` 是否启用
     - Not all DSiWare titles can save, due to the difficulty of adding save support for them, and/or them storing more than one file in the save filesystem.
- 如果你的烧录卡内核不能运行某个ROM，可以用nds-bootstrap来代替，并且可以按游戏特定设置
- 在兼容的游戏中调换上下屏幕，以获得更舒适的游戏体验，或者在屏幕破损或拆除的系统上调换
- Take screenshots and edit values in the RAM using the in-game menu

#### 什么是Donor ROM？
在nds-bootstrap中，当一个游戏不能启动时，另一个ROM被用来“捐赠”它的ARM7（和ARM7i，如果有的话）二进制文件给无法运行的游戏，以代替游戏自己的二进制文件。     
捐赠的ROM可以用 **TW**i**L**ight Menu++来设置。
- **Flashcards in DS mode:** The supported DSi-Exclusive/DSiWare titles will require a DSi-Enhanced ROM set as a Donor ROM
- **DSiWarehax:** As both DSi-Enhanced games and (most) DSi-Exclusive/DSiWare games contain different MBK settings from each other, DSi-Enhanced games will not boot in DSi mode without a Donor ROM. By setting a DSi-Exclusive/DSiWare title as a Donor ROM, DSi-Enhanced games will be able to run within the MBK settings set by the DSiWare title the exploit is used on
     - On DSi, if **TW**i**L**ight Menu++ detects no Donor ROM is set, *Nintendo DSi Sound* and/or a valid exploited title you've launched will automatically be set as Donor ROM(s)
- **CycloDS iEvolution：** 与DSiWarehax的情况相同，但是恰恰相反，DSi-Exclusive/DSiWare游戏需要将DSi-Enhanced游戏设置为Donor ROM。

#### 哪个是最好的Donor ROM？
There is no *best* one to use. Most ROMs of TWL titles can be set as a Donor ROM.

Examples:
- **DSiWarehax on DSi:** *Nintendo DSi Sound* and/or a valid exploited title you've launched will automatically be set as Donor ROM(s), if one hasn't been set yet.
- **DSiWarehax on 3DS:** Dump the DS WiFi Settings ROM (SDK5.5) using GodMode9, and set it as a Donor ROM.

#### 为什么我不能设置一个Donor ROM？
If there's a title requiring a Donor ROM, and the ROM TWLMenu++ stated to find doesn't show the option to set it as one (provided you've scrolled down), then find another ROM to set as a donor.

#### 什么是每夜版(nightly)，我可以在哪里获得？
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [from the TWLBot/Builds GitHub repository](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### 为什么我的金手指不起作用？
- Some cheats may have button activators or other conditions that need to be met. Check the description of the cheat for more information
  - In **TW**i**L**ight Menu++, you can press Y to view a specific cheat's information, when available
- Most cheats were developed for use in DS mode and may not work correctly while running in DSi mode. If the game is DSi-Enhanced, try setting it to run in DS mode
- The way E-type cheats are implemented in nds-bootstrap is currently broken, meaning they may or may not work. Your cheat probably uses that type, and it is not known when this issue will be fixed

For more info on cheats, check the [Action Replay cheats section of the Retail ROMs page](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### 我该如何进行屏幕截图？
You can take screenshots of the main screen from the in-game menu. By default the in-game menu is opened by pressing <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>, then select `Screenshot...`, change the VRAM bank if needed, and press <kbd class="face">A</kbd> to save the screenshot.

To view your screenshots on your PC you will need to extract `sd:/_nds/nds-bootstrap/screenshots.tar`, inside will be all of your screenshots in BMP format. There will also be additional empty BMP files to pad the TAR file out to 50, these can simply be ignored or deleted.

nds-bootstrap can only fit 50 screenshots in the `screenshots.tar`, so once you're getting close you should extract them and delete the TAR, nds-bootstrap will then generate a new TAR next time you load a game.

#### 什么是主屏幕，为什么只能截主屏幕的截图？
The "main" screen is whichever screen is being drawn using the main engine, which can be either physical screen. Typically it's the screen where the main gameplay is happening and if one screen has 3D that's always the main screen. It'll always be the top screen when in the in-game menu.

The reason screenshots can only be taken of the main screen is a hardware limitation of the Nintendo DS, it doesn't have a framebuffer but it does have a display capture feature which allows main engine's output to be captured. This is most often used by games to render 3D to both screens but can also be used to take screenshots.

#### 在拍摄屏幕时，我被要求选择的 "VRAM bank "是什么？
When taking a screenshot using nds-bootstrap it needs to use the DS's display capture feature to capture a frame from the main engine, however this display capture can only write to VRAM and requires one of the first four banks. nds-bootstrap will try to select a bank that isn't being used for the main engine so usually you can simply ignore this, however in some case all four of the possible VRAM banks will be in use for the main engine and thus it's not possible to take a perfect screenshot and you will need to select the bank you find looks best.

#### 我可以使用nds-bootstrap进行在线联机游戏吗？
Playing games online with nds-bootstrap will work exactly as it does with real Game Cards. See the [Wi-Fi](../ds-index/wifi) page for information on connecting to an alternate online service.
- If you are playing a DSi-Enhanced game in DS mode, you are restricted to unsecured or WEP network connections

#### 将游戏设置为使用133MHz（TWL）的CPU速度会损坏我的主机吗？
不能。 While not all games may function correctly under this setting, the DSi and 3DS were designed to be able to reach this CPU speed.
- If you encounter an issue with a game when running at 133 MHz (TWL) CPU speed, create an issue on the [**TW**i**L**ight Menu++ GitHub repository](https://github.com/DS-Homebrew/TWiLightMenu/issues) detailing the effects so that it may be blacklisted from being launched at that CPU speed

#### 我可以用nds-bootstrap来加快游戏速度吗？
While TWL CPU speed may reduce lag, nds-bootstrap cannot run games at faster speeds than intended.

#### 我可以使用nds-bootstrap重新映射按钮输入吗？
不能。 Since nds-bootstrap runs games natively, it cannot change the function of most buttons. The only way to do so would be to modify the game itself, or by using cheat codes.

#### 如何用nds-bootstrap游玩改版宝可梦ROM？
Pokémon HeartGold/SoulSilver, Black/White, and Black 2 / White 2 have anti-piracy measures that have to be manually patched out *before* randomizing the ROM. You can do this with [DS-Scene ROM Tool](https://gbatemp.net/download/35735/).
- Randomized ROMs cannot be AP-patched on-the-fly like the vanilla versions of these games are, because randomizing a ROM has far too many unique possible outputs to be reasonably included with **TW**i**L**ight Menu++

#### 什么是DSi二进制文件？ 我该如何获取？
DSi binaries are the portions of a game's code to be used on DSi (as well as 3DS) systems for use of the DSi's features, such as the cameras and improved Wi-Fi capabilities. Older dumping methods may not have properly dumped these.

- ROMs without the DSi binaries can still be played on any console through DS mode, in which it will run as if the game were being played on a Nintendo DS Phat/Lite

To obtain a ROM that contains the DSi binaries, [re-dump your Game Card](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games).
