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

You will first need to have custom firmware on your 3DS, follow [3ds.hacks.guide](https://3ds.hacks.guide) to install it
{:.alert .alert-info}

{% capture tab-working-camera %}
1. פתחו את FBI ובחרו `Remote Install`, לאחר מכן בחרו then `Scan QR Code`
1. סרקו את קוד הQR הזה על מנת להתקין את הגרסה האחרונה של [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. סגרו את FBI ופתחו את Universal-Updater
   - במידה ואתם לא רואים אותו בתפריט הבית, הפעילו מחדש את ה3DS שלכם
1. מצאו את TWiLight Menu++ ברשימת התוכנות, ניתן לעשות חיפוש באמצעות הטאב השלישי בתפריט הצד במידה ואתם מתקשים במציאה שלו
   - יש לו את האייקון הבא: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. לחצו על <kbd class="face">A</kbd> או לחצו על אייקון ההורדה בתפריט הצד ובחרו ב`TWiLight Menu++` על מנת להתחיל את ההתקנה
   - פעולה זו תמשך זמן מה
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
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. הורידו את הגרסה האחרונה של [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. חלצו את `TWiLightMenu-3DS.7z`
1. העתיקו את התיקייה `_nds` לכרטיס הSD
1. העתיקו את `BOOT.NDS` לכרטיס הSD
1. העתיקו את התיקייה `roms` לכרטיס הSD
1. העתיקו את שתי קבצי ה`.cia` לכרטיס הSD
1. במכשיר ה3DS, התקינו את שתי הCIAים באמצעות FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### התקנה

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
