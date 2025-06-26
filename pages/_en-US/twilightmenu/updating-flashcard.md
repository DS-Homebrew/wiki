---
lang: en-US
layout: wiki
section: twilightmenu
category: updating
title: Updating (Flashcard)
long_title: Updating TWiLight Menu++ (Flashcard)
description: How to update TWiLight Menu++ on a Nintendo DS flashcard
---

If updating from a version older than v16.4.0, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS ROMs.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare ROMs.
{:.alert .alert-info}

### Updating
1. Download the latest [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Extract `TWiLightMenu-Flashcard.7z`
1. Copy the `_nds` folder to your flashcard's microSD card root, replacing any existing files
    - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
1. Copy the `BOOT.NDS` file to your flashcard's microSD card root, replacing any existing files
1. If TWLMenu++ does not boot after updating, then update the autoboot file(s) as well

If you have installed any add-ons, see [Updating Add-ons](updating-addons).
{:.alert .alert-info}

If you've used a version older than v27.15.0, then after you've updated, [install both the Multimedia and Virtual Console add-ons](installing-addons) to ensure the applications that are now part of those add-ons are up-to-date.
{:.alert .alert-info}

### More steps for the DSi/3DS SD card side

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Go into TWLMenu++ Settings
1. Select `Update TWiLight Menu++`
1. Select `Slot-1 microSD > Console (micro)SD`
