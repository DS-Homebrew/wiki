---
lang: he-IL
layout: wiki
section: twilightmenu
category: installing
title: התקנה (3DS)
description: How to install TWiLight Menu++ on the Nintendo 3DS
---

ראשית תצטרכו שמכשיר ה3DS שלכם יהיה פרוץ עם קושחה מותאמת אישית. עקבו אחר [3ds.hacks.guide](https://3ds.hacks.guide) על מנת להתקין את הפריצה
{:.alert .alert-info}

{% capture tab-working-camera %}
1. פתחו את FBI ובחרו `Remote Install`, לאחר מכן בחרו then `Scan QR Code`
1. סרקו את קוד הQR הזה על מנת להתקין את הגרסה האחרונה של [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. סגרו את FBI ופתחו את Universal-Updater
   - במידה ואתם לא רואים אותו בתפריט הבית, הפעילו מחדש את ה3DS שלכם
1. מצאו את TWiLight Menu++ ברשימת התוכנות, ניתן לעשות חיפוש באמצעות הטאב השלישי בתפריט הצד במידה ואתם מתקשים במציאה שלו
   - יש לו את האייקון הבא: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. לחצו על <kbd class="face">A</kbd> או לחצו על אייקון ההורדה בתפריט הצד ובחרו ב`TWiLight Menu++` על מנת להתחיל את ההתקנה
   - פעולה זו תמשך זמן מה
{% endcapture %}

{% capture tab-non-working-camera %}
1. הורידו את הקובץ `Universal-Updater.cia` מ[Universal-Updaterמעמוד הגרסאות של](https://github.com/Universal-Team/Universal-Updater/releases)
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

{% capture tab-manual %}
1. הורידו את הגרסה האחרונה של `TWiLightMenu-3DS.7z` מ[עמוד הreleases](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. חלצו את `TWiLightMenu-3DS.7z`
1. העתיקו את התיקייה `_nds` לכרטיס הSD
1. העתיקו את `BOOT.NDS` לכרטיס הSD
1. העתיקו את התיקייה `roms` לכרטיס הSD
1. העתיקו את שתי קבצי ה`.cia` לכרטיס הSD
1. במכשיר ה3DS, התקינו את שתי הCIAים באמצעות FBI
{% endcapture %}

### התקנה

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="working-camera">Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-non-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="non-working-camera">Non-Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-working-camera">
      <noscript><h4>Working Camera</h4></noscript>
      {{ tab-working-camera | markdownify }}
   </div>
   <div id="tab-non-working-camera">
      <noscript><h4>Non-Working Camera</h4></noscript>
      {{ tab-non-working-camera | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
