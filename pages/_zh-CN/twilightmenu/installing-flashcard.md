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
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and/or insert a DS Memory Expansion Pak, and try again

### 自动启动TWiLight Menu++
1. 将烧录卡 `Autoboot/(你的烧录卡)` 中的文件拷贝到烧录卡存储卡的根目录
   - 如果你没有烧录卡请跳过本步骤
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### 使用烧录卡固件运行游戏

请注意，这只在烧录卡已被设置为自动启动 TWiLight Menu++ 时生效。 请参阅上文如何配置。
{:.alert .alert-warning}

请注意，并非所有烧录卡都支持以这种方式运行游戏。 如果以下步骤不适用于您的烧录卡，您可以跳过此部分。
{:.alert .alert-warning}

1. 解压缩 `Flashcart Loader/(你的烧录卡)` 中的所有文件到你自己烧录卡的microSD卡根目录
   - A README.txt file is present in the `Flashcart Loader` folder, to help find which flashcart loader is appropriate for your flashcard.
   - If you have done so, continue to step 3. If not, follow the steps below the flashcard list below

1. 烧录卡
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2022 cards (**not** .hk or .com.cn)
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
1. 打开 TWLMenu++ 设置并切换到 `nds-bootstrap 设置` 页面，然后把 `使用 nds-bootstrap` 调整为 `否`以不使用 nds-bootstrap 而使用烧录卡固件。
