---
lang: sv-SE
layout: wiki
section: twilightmenu
category: updating
title: Uppdatering (Minneskort)
long_title: Uppdatera TWiLight Meny++ (Minneskort)
description: Hur man uppdaterar TWiLight Menu+ + på Nintendo DS minneskort
---

If updating from a version older than v16.4.0, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS ROMs.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare ROMs.
{:.alert .alert-info}

### Uppdatering
1. Download the latest [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Extrahera `TWiLightMenu-Flashcard.7z`
1. Copy the `_nds` folder to your flashcard's microSD card root, replacing any existing files
    - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
1. Copy the `BOOT.NDS` file to your flashcard's microSD card root, replacing any existing files
1. If TWLMenu++ does not boot after updating, then update the autoboot file(s) as well

### More steps for the DSi/3DS SD card side

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Gå till TWLMenu++ inställningar
1. Välj `Uppdatera TWiLight Menu++`
1. Välj `Slot-1 microSD > Konsolens (micro)SD`
