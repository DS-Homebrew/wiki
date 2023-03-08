---
lang: he-IL
layout: wiki
section: twilightmenu
category: updating
title: עדכון (3DS)
long_title: עדכון TWiLight Menu++ (3DS)&lrm;
description: איך לעדכן את TWiLight Menu++ על Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: ידני
---

If updating from a version older than v6.8.3, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS ROMs.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare ROMs.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. פתחו את Universal-Updater
   - אם אין לכם אותה מותקנת, עקבו אחרי ההוראות [התקנה](installing-3ds)
1. מצאו את TWiLight Menu++ ברשימת התוכנות, ניתן לעשות חיפוש באמצעות הטאב השלישי בתפריט הצד במידה ואתם מתקשים במציאה שלו
1. לחצו על <kbd class="face">A</kbd> או לחצו על אייקון ההורדה בתפריט הצד ובחרו ב`TWiLight Menu++` על מנת להתחיל את ההתקנה
   - פעולה זו תמשך זמן מה
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. הורידו את הגרסה האחרונה של [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. חלצו את `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root, replacing any existing files
   - If using macOS, make sure to **copy** and `Merge`, don't `Replace`
1. Copy the `BOOT.NDS` file to your SD card root, replacing any existing files
1. Copy the `.cia` file to your SD card root, replacing any existing files
1. On your 3DS, install the CIA with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### עדכון

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
