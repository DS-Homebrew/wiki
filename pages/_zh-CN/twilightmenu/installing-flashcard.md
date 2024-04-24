---
lang: zh-CN
layout: wiki
section: twilightmenu
category: installing
title: 安装（烧录卡）
long_title: 安装 TWiLight Menu++（烧录卡）
description: 如何在 Nintendo DS 烧录卡上安装 TWiLight Menu++
---

If you use a Windows edition which contains Windows Defender, it'll detect the `.7z` file as a Trojan due to a false positive. To fix the false positive, ensure Windows Defender is up to date.
{:.alert .alert-warning}

### 安装步骤
1. 下载最新的 [`TwiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. 如果你有历史的存档数据，可以将原来DS游戏的 `.sav`文件拷贝到`saves`目录下，这样原来的存档数据都会自动转移
1. **对于 DS Phat/Lite 用户：**如果使用 `BOOT.NDS` 启动导致白屏死机，请插入一张 DS 存储扩展卡，然后重试

### 自动启动 TWiLight Menu++
1. Drag and drop everything inside `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
   - 如果没有找到您的烧录卡，请跳过本步骤
1. **对于 DS Phat/Lite 用户：**在 DS 设置菜单中打开自动运行，这样开机时就会自动进入烧录卡

### 使用烧录卡固件运行游戏

请注意，这只在烧录卡已被设置为自动启动 TWiLight Menu++ 时生效。 请参阅上文如何配置。
{:.alert .alert-warning}

请注意，并非所有烧录卡都支持以这种方式运行游戏。 如果以下步骤不适用于您的烧录卡，您可以跳过此部分。
{:.alert .alert-warning}

请注意，以这种方式运行游戏时，您将无法使用金手指。 如果您想保留金手指功能，请跳过本节。
{:.alert .alert-warning}

1. Drag and drop everything inside `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
   - `Flashcart Loader` 文件夹中有一个 README.txt 文件，可帮助找到适合您的烧录卡的加载器。
   - 如果已完成，请看第 3 步。 如果没有，请按照下面烧录卡列表中的步骤操作

1. 烧录卡
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2022 烧录卡（**不包括** .hk 或 .com.cn）
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi（非 SDHC 款***不***受支持）
   - M3 DS Real
   - M3i Zero（非 GMP-Z003 款）
   - iTouchDS and iTouch2（使用 M3Real_M3iZero YSMenu 的文件）
   - R4(i)RTS (r4rts.com)（使用 M3Real_M3iZero YSMenu 的文件）
   - R4 SDHC RTS（黑卡）(r4isdhc.com)（使用 M3Real_M3iZero YSMenu 的文件）

   安装 [RetroGameFan 的 YSMenu](https://gbatemp.net/download/35737/)。
      - 确认在烧录卡的 microSD 卡根目录已经有 `YSMenu.nds`（如果没有，请直接将 `TTMenu.dat` 重命名）文件和 `TTMenu` 文件夹
      - 请勿直接复制 `TTMenu.dat` ；这将破坏自动启动和 YSMenu 的软重启功能
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
