---
lang: en-US
layout: wiki
section: twilightmenu
category: installing
title: 安装说明(烧录卡)
description: How to install TWiLight Menu++ on a Nintendo DS flashcard
---

### 安装步骤
1. 下载最新版本的`TWiLightMenu-Flashcard.7z`[点击下载](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. 解压缩`TWiLightMenu-Flashcard.7z`
1. 拷贝 `_nds` 目录到烧录卡存储卡的根目录下
1. 拷贝 `BOOT.NDS`文件到烧录卡存储卡的根目录
1. 拷贝`roms` 目录到烧录卡存储卡的根目录
1. 如果你有历史的存档数据，可以将原来DS游戏的 `.sav`文件拷贝到`saves`目录下，这样原来的存档数据都会自动转移
1. ...
   - **DS Phat / Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1`
      - 这会让你在使用烧录卡使用TWL/VRAM速度更快, 包括加载主机SD卡的速度

### 使用烧录卡固件运行游戏
1. 将 `Flashcart Loader/(你的烧录卡)`内的文件移到烧录卡的存储卡根目录下
   - 如果已完成，请看步骤3。 如果没有，请使用如下烧录卡的用户按照步骤继续操作

1. 如下烧录卡
   - R4i-SDHC
   - r4isdhc.com cards
   - r4isdhc.hk cards
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)

   点击 [这里](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)安装YSMenu
      - 确认在烧录卡的存储卡根目录已经有`YSMenu.nds` (如果没有请直接重命名`TTMenu.dat`文件) 和 `TTMenu` 目录
1. 将 `Use nds-bootstrap (B4DS)` 设置为 `No`, 这样烧录卡固件就会取代nds-bootstrap

### 自动启动TWiLight Menu++
1. 将烧录卡 `Autoboot/(你的烧录卡)` 中的文件拷贝到烧录卡存储卡的根目录
   - 如果你的烧录卡没有请跳过本步骤
1. ...
   - **DS Phat / DS Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
