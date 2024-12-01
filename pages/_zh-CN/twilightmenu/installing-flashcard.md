---
lang: zh-CN
layout: wiki
section: twilightmenu
category: installing
title: 安装（烧录卡）
long_title: 安装 TWiLight Menu++（烧录卡）
description: 如何在 Nintendo DS 烧录卡上安装 TWiLight Menu++
tabs:
  - 
    loader: Flashcart Loader
    ysmenu: YSMenu
---

### 安装步骤
1. 下载最新的 [`TwiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. 如果你有历史的存档数据，可以将原来DS游戏的 `.sav`文件拷贝到`saves`目录下，这样原来的存档数据都会自动转移
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and try again

### 自动启动 TWiLight Menu++
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Autoboot` -> `(your flashcard)` folders
1. Drag and drop the contents of the folder to the root of the flashcard's microSD card
    - 如果没有找到您的烧录卡，请跳过本步骤
1. **对于 DS Phat/Lite 用户：**在 DS 设置菜单中打开自动运行，这样开机时就会自动进入烧录卡

### To run games using your flashcard firmware (optional)

**Please note:**
- This only works if your flashcard is set to autoboot TWiLight Menu++. 请参阅上文如何配置。
- Not all flashcards support running games in this fashion. 如果以下步骤不适用于您的烧录卡，您可以跳过此部分。
- You'll lose the ability to use cheats when running games in this fashion. 如果您想保留金手指功能，请跳过本节。
{:.alert .alert-warning}

{% capture tab-loader %}

If your flashcart does not have a compatible loader for this section, choose the "YSMenu" tab.
{:.alert .alert-info}

1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Flashcart Loader` -> `(your flashcard)` folders
    - `Flashcart Loader` 文件夹中有一个 README.txt 文件，可帮助找到适合您的烧录卡的加载器。
1. Drag and drop the contents of the folder to the root of the flashcard's microSD card
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-loader %}
{% assign tab-loader = tab-loader | split: "////////" %}

{% capture tab-ysmenu %}

1. Please confirm that you have one of the below flashcarts:
    - R4i-SDHC (r4i-sdhc.com)
    - r4isdhc.com 2014+ cards (**not** .hk or .com.cn)
    - R4i SDHC Upgrade Revolution
    - R4DSiXL3D
    - R4i Advance
    - R4-IIIi
    - R4 SDHC Revolution
    - R4(i) Pocket
    - R4i Gold (v1.4.1) (3DS)
    - R4 Gold 3DS RTS (r4i-gold.com)
    - R4xDS
    - DSTT(i)
    - DSONE SDHC & DSONEi（非 SDHC 款***不***受支持）
    - M3 DS Real
    - M3i Zero（非 GMP-Z003 款）
    - iTouchDS and iTouch2（使用 M3Real_M3iZero YSMenu 的文件）
    - R4(i)RTS (r4rts.com)（使用 M3Real_M3iZero YSMenu 的文件）
    - R4 SDHC RTS（黑卡）(r4isdhc.com)（使用 M3Real_M3iZero YSMenu 的文件）
1. Download [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
1. Extract it to a folder on your computer. Navigate to the folder required for your flashcart.
1. Inside the folder, rename `TTMenu.dat` to `YSMenu.nds` if a `YSMenu.nds` file does not already exist
1. Copy the `TTMenu` folder and `YSMenu.nds` file to the root of your MicroSD card. **Do not** copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Running games with your flashcart firmware
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
