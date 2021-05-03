---
lang: he-IL
layout: wiki
section: twilightmenu
category: updating
title: עדכון (3DS)
long_title: עדכון TWiLight Menu++ (3DS)
description: איך לעדכן את TWiLight Menu++ על Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: ידני
---

אם אתם מעדכנים מגרסה ישנה יותר מv16.4.0, העבירו את קבצי ה`.sav` של משחקי הDS לתיקיה חדשה בשם `saves`, כאשר התיקייה נמצאת באותו מקום כמו הROMים של משחקי הDS.
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
1. הורידו את הגרסה האחרונה של `TWiLightMenu-3DS.7z` מ[עמוד הreleases](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. חלצו את `TWiLightMenu-3DS.7z`
1. העתיקו את התיקייה `_nds` לכרטיס הSD
1. העתיקו את `BOOT.NDS` לכרטיס הSD
1. העתיקו את שתי קבצי ה`.cia` לכרטיס הSD
1. במכשיר ה3DS, התקינו את שתי הCIAים באמצעות FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### עדכון

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### שלבים נוספים עבור הפלאשקארד

אם אתם יכולים להחליף את הקבצים שעל הSD של המכשיר ובין הקבצים על הפלאשקארד באמצעות TWLMenu++, וגם גרסאת TWLMenu++ על הפלאשקארד היא v16.3.0 או גבוהה יותר, עקבו אחרי השלבים האלו.

1. לכו להגדרות של TWLMenu++
1. בחרו ב`Update TWiLight Menu++`
1. בחרו ב`Console (micro)SD > Slot-1 microSD`
