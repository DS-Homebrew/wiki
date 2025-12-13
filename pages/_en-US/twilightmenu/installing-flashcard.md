---
lang: en-US
layout: wiki
section: twilightmenu
category: installing
title: Installing (Flashcard)
long_title: Installing TWiLight Menu++ (Flashcard)
description: How to install TWiLight Menu++ on a Nintendo DS flashcard
tabs:
  - loader: Flashcart Loader
    ysmenu: YSMenu
---

### Installing
1. Download the latest [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) and scroll down to `Assets` to download the file
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. If you already have save data, move your `.sav` files, which are in your DS ROM location, to a new folder called `saves`, which also goes in the DS ROM location
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and try again

**Optional:** If you want to play games from before the DS(i) & GBA and/or use other additional features (known as add-ons), see [Installing Add-ons](installing-addons?tab=manual).
{:.alert .alert-info}

### Autobooting TWiLight Menu++
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Autoboot` folder
1. Open the `README.txt` file to help find which autoboot files are appropriate for your flashcard
1. Open the `(your flashcard)` folder
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
    - Skip this, if you don't see your flashcard listed
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### Installing more game loaders

By default, TWiLight Menu++ uses nds-bootstrap to run DS games. On DS flashcards, nds-bootstrap uses it's B4DS mode in order to run games, so compatibility will be slightly lower than expected.

To increase compatibility, please follow this section.

#### Pico Loader

Pico Loader is the smallest and fastest game loader option available. Most DS games will work properly, with a few that either don't boot or not work properly.

**Please note:**
- You'll lose the ability to use cheats and the nds-bootstrap in-game menu (containing features such as taking screenshots) when running games in this fashion.     
If you want to retain those functionalities, you can set the game loader to `pico` for either all games or a specific game. Read this sub-section to find out how.
{:.alert .alert-warning}

1. Open the [Pico Loader download page](https://github.com/LNH-team/pico-loader/releases)
1. Download the correct Pico Loader zip file for your flashcard
    - Read [Supported platforms](https://github.com/LNH-team/pico-loader?tab=readme-ov-file#supported-platforms) to find out which one to use
1. Drag and drop the `.bin` files inside the zip file to the `_pico` folder on the root of the flashcard's microSD card
1. [Open TWLMenu++ Settings](faq?faq=how-do-i-access-twilight-menu-settings), switch to `Games and Apps settings` page, and set `Game Loader` to `pico`, so Pico Loader will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there
	- If you want to retain the nds-bootstrap features and/or if the game does not work with the kernel, you can keep the `Game Loader` setting as `nds-bootstrap`

#### Flashcard Kernel

This restores the original flashcard-level compatibility with varying boot times depending on the flashcard.

**Please note:**
- This only works if your flashcard is set to autoboot TWiLight Menu++. See above section for how to do so.
- Some flashcards do not support running games in this fashion, and only support nds-bootstrap. If you are using a flashcard listed under `Known unsupported flashcards`, you are done with this guide.
- You'll lose the ability to use cheats and the nds-bootstrap in-game menu (containing features such as taking screenshots) when running games in this fashion.     
If you want to retain those functionalities, you can set the game loader to nds-bootstrap for either all games or a specific game. Read this sub-section to find out how.
{:.alert .alert-warning}

**Known unsupported flashcards:**
- Any Slot-2 flashcard (such as G6 Lite, M3 Adapter, Max Media Dock, SuperCard MiniSD, etc.)
- Action Replay DS(i)
- CycloDS Evolution
- CycloDS iEvolution

{% capture tab-loader %}

If your flashcart does not have a compatible loader for this section, choose the "YSMenu" tab.
{:.alert .alert-info}

1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Flashcart Loader` folder
1. Open the `README.txt` file to help find which flashcart loader is appropriate for your flashcard
1. Open the `(your flashcard)` folder
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
1. [Open TWLMenu++ Settings](faq?faq=how-do-i-access-twilight-menu-settings), switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there
	- If you want to retain the nds-bootstrap features and/or if the game does not work with the kernel, you can keep the `Game Loader` setting as `nds-bootstrap`

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
    - DSONE SDHC & DSONEi (non-SDHC models are ***not*** supported)
    - Original R4
    - Original R4SDHC
    - M3 DS Simply
    - M3 DS Real
    - M3i Zero (non-GMP-Z003 model)
    - iTouchDS and iTouch2 (use the M3Real_M3iZero YSMenu files)
    - R4(i)RTS (r4rts.com) (use the M3Real_M3iZero YSMenu files)
    - R4 SDHC RTS (black cartridge) (r4isdhc.com) (use the M3Real_M3iZero YSMenu files)
1. Download [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
1. Extract it to a folder on your computer. Navigate to the folder required for your flashcart.
1. Inside the folder, rename `TTMenu.dat` to `YSMenu.nds` if a `YSMenu.nds` file does not already exist
1. Copy the `TTMenu` folder and `YSMenu.nds` file to the root of your MicroSD card. **Do not** copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. [Open TWLMenu++ Settings](faq?faq=how-do-i-access-twilight-menu-settings), switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there
	- If you want to retain the nds-bootstrap features and/or if the game does not work with the kernel, you can keep the `Game Loader` setting as `nds-bootstrap`

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
