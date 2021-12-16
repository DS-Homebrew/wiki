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
   - **对于 DSi/3DS 用户：**在主机的 SD 卡上运行 TWLMenu++，打开 `SCFG access in Slot-1` 并把 `Slot-1: Touch Mode` 改为 `DSi Mode`
      - 这将使您能够在您的烧录卡游戏上使用 TWL 时钟速度和/或 VRAM 提升，并能够访问主机的 SD 卡，以及从您的烧录卡中运行 DSi 增强/DSi 独占/DSiWare 游戏。

### 使用烧录卡固件运行游戏

Please note that not all flashcards support running games in this fashion. If the below steps do not apply to your flashcard, you can skip this section.
{:.alert .alert-warning}

1. 将 `Flashcart Loader/(你的烧录卡)`内的文件移到烧录卡的存储卡根目录下
   - If you have done so, continue to step 3. 如果没有，请使用如下烧录卡的用户按照步骤继续操作

1. 如下烧录卡
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
   - M3 DS Real
   - M3i Zero (non-GMP-Z003 model)
   - DSONE SDHC & DSONEi

   Install [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Make sure you have `YSMenu.nds` (renamed from `TTMenu.dat` if there isn't one) and the `TTMenu` folder on the flashcard microSD root
1. 将 `Use nds-bootstrap` 设置为 `No`，这样烧录卡固件就会取代nds-bootstrap

### 自动启动TWiLight Menu++
1. 将烧录卡 `Autoboot/(你的烧录卡)` 中的文件拷贝到烧录卡存储卡的根目录
   - 如果你的烧录卡没有请跳过本步骤
1. ...
   - **对于 DS Phat/DS Lite 用户：** 在 DS 设置菜单中打开自动运行，这样开机就会自动进入烧录卡
   - **对于 DSi/3DS 用户：**在主机 SD 卡中运行 TWLMenu++，并开启 `Auto-start Slot-1` 设置
