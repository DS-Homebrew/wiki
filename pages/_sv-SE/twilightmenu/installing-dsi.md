---
lang: sv-SE
layout: wiki
section: twilightmenu
category: installing
title: Installation (DSi)
long_title: Att installera TWiLight Menu++ (DSi)
description: Hur man installerar TWiLight Menu+ + på Nintendo DSi
---

Om du inte redan har ett sätt att köra homebrew på din DSi, gå till [dsi.cfw.guide](https://dsi.cfw.guide) för att installera TWiLight Menu++
{:.alert .alert-info}

### Installation
1. Download the latest [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Extrahera `TWiLightMenu-DSi.7z`
1. Kopiera mappen `_nds` till ditt SD-korts rot
1. Kopiera filen `BOOT.NDS` till din SD-korts rot
1. Kopiera mappen `roms` till ditt SD-korts rot
1. **hiyaCFW användare:** Kopiera mappen `title` till ditt SD-korts rot

### Automatiskt uppstart med Unlaunch
1. Slå på din DSi medan du håller <kbd class="face">A</kbd> och <kbd class="face">B</kbd>
1. Gå till `ALTERNATIV` i Unlaunch menyn
1. Ställ in `INGEN KNAPP` eller en valfri knapp till `TWiLight Menu++` som säger `BOOT.NDS` på den nedre skärmen

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
