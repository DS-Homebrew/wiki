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
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. If you already have save data, move your `.sav` files, which are in your DS ROM location, to a new folder called `saves`, which also goes in the DS ROM location
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and try again

### Autobooting TWiLight Menu++
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Autoboot` folder
1. Open the `(your flashcard)` folder
    - A README.txt file is present in the `Autoboot` folder, to help find which autoboot files are appropriate for your flashcard
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
    - Skip this, if you don't see your flashcard listed
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### To run games using the flashcard kernel (optional)

**Please note:**
- This only works if your flashcard is set to autoboot TWiLight Menu++. See above section for how to do so.
- Not all flashcards support running games in this fashion. If the below steps do not apply to your flashcard, you can skip this section.
- You'll lose the ability to use cheats when running games in this fashion. If you want to retain cheat functionality, please skip this section.
{:.alert .alert-warning}

{% capture tab-loader %}

If your flashcart does not have a compatible loader for this section, choose the "YSMenu" tab.
{:.alert .alert-info}

1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Flashcart Loader` folder
1. Open the `(your flashcard)` folder
    - A README.txt file is present in the `Flashcart Loader` folder, to help find which flashcart loader is appropriate for your flashcard
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
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
    - DSONE SDHC & DSONEi (non-SDHC models are ***not*** supported)
    - M3 DS Real
    - M3i Zero (non-GMP-Z003 model)
    - iTouchDS and iTouch2 (use the M3Real_M3iZero YSMenu files)
    - R4(i)RTS (r4rts.com) (use the M3Real_M3iZero YSMenu files)
    - R4 SDHC RTS (black cartridge) (r4isdhc.com) (use the M3Real_M3iZero YSMenu files)
1. Download [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
1. Extract it to a folder on your computer. Navigate to the folder required for your flashcart.
1. Inside the folder, rename `TTMenu.dat` to `YSMenu.nds` if a `YSMenu.nds` file does not already exist
1. Copy the `TTMenu` folder and `YSMenu.nds` file to the root of your MicroSD card. **Do not** copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Running games with the flashcard kernel
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
