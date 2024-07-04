---
lang: he-IL
layout: wiki
section: twilightmenu
category: installing
title: התקנה (3DS)
long_title: התקנת TWiLight Menu++ (3DS)&lrm;
description: איך להתקין את TWiLight Menu++ על Nintendo 3DS
tabs:
  - 
    working-camera: מצלמה עובדת
    non-working-camera: מצלמה לא עובדת
    manual: ידני
---

ראשית תצטרכו שמכשיר ה3DS שלכם יהיה פרוץ עם קושחה מותאמת אישית. עקבו אחר [3ds.hacks.guide](https://3ds.hacks.guide) על מנת להתקין את הפריצה
{:.alert .alert-info}

{% capture tab-working-camera %}
1. פתחו את FBI ובחרו `Remote Install`, לאחר מכן בחרו then `Scan QR Code`
1. סרקו את קוד הQR הזה על מנת להתקין את הגרסה האחרונה של [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. סגרו את FBI ופתחו את Universal-Updater
   - במידה ואתם לא רואים אותו בתפריט הבית, הפעילו מחדש את ה3DS שלכם
1. מצאו את TWiLight Menu++ ברשימת התוכנות, ניתן לעשות חיפוש באמצעות הטאב השלישי בתפריט הצד במידה ואתם מתקשים במציאה שלו
   - יש לו את האייקון הבא: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. לחצו על <kbd class="face">A</kbd> או לחצו על אייקון ההורדה בתפריט הצד ובחרו ב`TWiLight Menu++` על מנת להתחיל את ההתקנה
   - This will take a while
   - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. הורידו את הגרסה האחרונה של [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia)
1. שימו את הקובץ `Universal-Updater.cia` על כרטיס הSD שלכם
1. פתחו את FBI ב3DS שלכם
1. בFBI, לכו למקום שבו העתקתם את הקובץ `Universal-Updater.cia`
1. סמנו את הקובץ `Universal-Updater.cia` ובחרו ב"Install & Delete"
1. סגרו את FBI ופתחו את Universal-Updater
   - במידה ואתם לא רואים אותו בתפריט הבית, הפעילו מחדש את ה3DS שלכם
1. מצאו את TWiLight Menu++ ברשימת התוכנות, ניתן לעשות חיפוש באמצעות הטאב השלישי בתפריט הצד במידה ואתם מתקשים במציאה שלו
   - יש לו את האייקון הבא: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. לחצו על <kbd class="face">A</kbd> או לחצו על אייקון ההורדה בתפריט הצד ובחרו ב`TWiLight Menu++` על מנת להתחיל את ההתקנה
   - פעולה זו תמשך זמן מה
   - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. הורידו את הגרסה האחרונה של [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
   - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. חלצו את `TWiLightMenu-3DS.7z`
1. העתיקו את התיקייה `_nds` לכרטיס הSD
1. העתיקו את `BOOT.NDS` לכרטיס הSD
1. העתיקו את התיקייה `roms` לכרטיס הSD
1. Copy the `.cia` file to your SD card root
1. On your 3DS, install the CIA with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### התקנה

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

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
