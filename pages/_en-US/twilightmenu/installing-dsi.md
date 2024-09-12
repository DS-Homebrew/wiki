---
lang: en-US
layout: wiki
section: twilightmenu
category: installing
title: Installing (DSi)
long_title: Installing TWiLight Menu++ (DSi)
description: How to install TWiLight Menu++ on the Nintendo DSi
---

If you do not already have a way to run homebrew on your DSi, follow [dsi.cfw.guide](https://dsi.cfw.guide) to install TWiLight Menu++
{:.alert .alert-info}

### Installing
1. Download the latest [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Extract `TWiLightMenu-DSi.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the `roms` folder to your SD card root
1. **hiyaCFW users:** Copy the `title` folder to your SD card root

### Autobooting with Unlaunch
1. Turn on your DSi while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd>
1. In the Unlaunch menu, go to `OPTIONS`
1. Set `NO BUTTON` or a button of your choice to the `TWiLight Menu++` that says `BOOT.NDS` on the bottom screen

### Accessing flashcard contents

A flashcard is something that goes in the game card slot, and contains a microSD card slot. If you do not have a flashcard, you are done with this guide.
{:.alert .alert-warning}

#### If you have an R4(i) Ultra

1. Follow [this](installing-flashcard) guide starting from `To run games using your flashcard firmware`
    - You can safely ignore the warnings
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `Slot-1 microSD access`
1. Exit TWLMenu++ Settings by pressing `B` button
    - If you end up in the DS Classic Menu, press `B` again

#### If you don't have an R4(i) Ultra

1. Create a file or folder called `primary` in `sd:/_nds/` (not the flashcard one), so that TWiLight Menu++ reads settings from the console's SD card after it starts your flashcard
1. Follow [this](installing-flashcard) guide starting from `Autobooting TWiLight Menu++`
1. Copy the `BOOT.NDS` file from `TWiLightMenu-Flashcard.7z` to your flashcard’s microSD card root
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `SCFG access in Slot-1` (Note that this option overrides `SD access in Slot-1`)
1. Set `Slot-1: Touch Mode` to `DSi mode`
1. Turn on `Auto-start Slot-1`
1. Exit TWLMenu++ Settings by pressing `B` button
    - If you end up in the DS Classic Menu, launch your flashcard
    - Otherwise, restart TWiLight Menu++

#### Switching between SD and flashcard contents
- Press either `SELECT`+`Up` or `SELECT`+`Down` to switch between the SD and flashcard contents
    - If the SELECT menu is enabled, you can do so there as well
    - If you use the 3DS theme, touch the Game Card/SD Card icon
    - If you use the R4, GBC, or Wood themes, press `R` button
