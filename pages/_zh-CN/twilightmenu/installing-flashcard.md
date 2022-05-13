---
lang: zh-CN
layout: wiki
section: twilightmenu
category: installing
title: 安装（烧录卡）
long_title: 安装 TWiLight Menu++（烧录卡）
description: 如何在 Nintendo DS 烧录卡上安装 TWiLight Menu++
---

### 安装步骤
1. 下载最新的 [`TwiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. 解压缩`TWiLightMenu-Flashcard.7z`
1. 拷贝 `_nds` 目录到烧录卡存储卡的根目录下
1. 拷贝 `BOOT.NDS`文件到烧录卡存储卡的根目录
1. 拷贝`roms` 目录到烧录卡存储卡的根目录
1. 如果你有历史的存档数据，可以将原来DS游戏的 `.sav`文件拷贝到`saves`目录下，这样原来的存档数据都会自动转移
1. ...
   - **对于 DS Phat/Lite 用户：**如果使用 `BOOT.NDS` 起到导致白屏卡机，请插入一张 DS 存储扩展卡(DS Memory Expansion Pak)，然后重试
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, open TWLMenu++ Settings, switch to the `Misc. settings` page, and turn on `SCFG access in Slot-1` and set `Slot-1: Touch Mode` to `DSi Mode`
      - 这将使您能够在您的烧录卡游戏上使用 TWL 时钟速度和/或 VRAM 提升，并能够访问主机的 SD 卡，以及从您的烧录卡中运行 DSi 增强/DSi 独占/DSiWare 游戏。
      - 启用此功能后，您可以使用 <kbd>SELECT</kbd> + <kbd>向上</kbd>/<kbd>向下</kbd> 切换您内部的 SD 卡和烧录卡的SD卡

### 自动启动TWiLight Menu++
1. Extract the content(s) of `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
   - 如果你没有烧录卡请跳过本步骤
1. ...
   - **对于 DS Phat/Lite 用户：** 在 DS 设置菜单中打开自动运行，这样开机就会自动进入
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, open TWLMenu++ Settings, switch to `Misc settings` page, and turn on `Auto-start Slot-1`

### 使用烧录卡固件运行游戏

Please note this only works if your flashcard is set to autoboot TWiLight Menu++. 请参阅上文如何配置。
{:.alert .alert-warning}

请注意，并非所有烧录卡都支持以这种方式运行游戏。 如果以下步骤不适用于您的烧录卡，您可以跳过此部分。
{:.alert .alert-warning}

1. Extract what's in `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
   - If you have done so, continue to step 3. If not, follow the steps below the flashcard list below

1. 烧录卡
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2020 cards
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi (non-SDHC models are ***not*** supported)
   - M3 DS Real
   - M3i Zero (non-GMP-Z003 model)
   - iTouchDS and iTouch2 (use the M3Real_M3iZero YSMenu files)
   - R4(i)RTS (r4rts.com) (use the M3Real_M3iZero YSMenu files)
   - R4 SDHC RTS (black cartridge) (r4isdhc.com) (use the M3Real_M3iZero YSMenu files)

   安装 [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)。
      - 确认在烧录卡的存储卡根目录已经有`YSMenu.nds` (如果没有请直接重命名`TTMenu.dat`) 文件和 `TTMenu` 文件夹
1. Open TWLMenu++ Settings, switch to `nds-bootstrap settings` page, and set `Use nds-bootstrap` to `No`, so the flashcard firmware will be used instead of nds-bootstrap
