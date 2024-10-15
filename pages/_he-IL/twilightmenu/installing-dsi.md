---
lang: he-IL
layout: wiki
section: twilightmenu
category: installing
title: התקנה (DSi)
long_title: התקנת TWiLight Menu++ (DSi)&lrm;
description: איך להתקין את TWiLight Menu++ על Nintendo DSi
---

אם עדיין אין לכם דרך להריץ הומברו על הDSi שלכם, עקבו אחר [dsi.cfw.guide](https://dsi.cfw.guide) על מנת להתקין את TWiLight Menu++
{:.alert .alert-info}

### התקנה
1. הורידו את הגרסה האחרונה של [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. חלצו את `TWiLightMenu-DSi.7z`
1. העתיקו את התיקייה `_nds` לכרטיס הSD
1. העתיקו את `BOOT.NDS` לכרטיס הSD
1. העתיקו את התיקייה `roms` לכרטיס הSD
1. **משתמשי HiyaCFW:** העתיקו את התיקייה `title` לכרטיס הSD שלכם

### הפעלה אוטומטית עם Unlaunch
1. הדליקו את הDSi שלכם בזמן שאתם מחזיקים את <kbd class="face">A</kbd> ואת <kbd class="face">B</kbd>
1. בתפריט של Unlaunch, לכו ל`OPTIONS`
1. הגדירו את `NO BUTTON` או כל כפתור אחר לבחירתם ל`TWiLight Menu++`, שבמסך התחתון מופיע `BOOT.NDS`

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
1. Turn on `SD access in Slot-1`
1. Turn on `SCFG access in Slot-1`
1. Turn on `Auto-start Slot-1`
1. Exit TWLMenu++ Settings by pressing `B` button
    - If you end up in the DS Classic Menu, launch your flashcard
    - Otherwise, restart TWiLight Menu++

#### Switching between SD and flashcard contents
- Press either `SELECT`+`Up` or `SELECT`+`Down` to switch between the SD and flashcard contents
    - If the SELECT menu is enabled, you can do so there as well
    - If you use the 3DS theme, touch the Game Card/SD Card icon
    - If you use the R4, GBC, or Wood themes, press `R` button
