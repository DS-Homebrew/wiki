---
lang: he-IL
layout: wiki
section: twilightmenu
category: other
title: How to Get Box Art
---

### 3DS
1. התקינו את [KirovAir's TWiLight Menu++ Updater fork](https://github.com/KirovAir/TWiLightMenu-Updater/releases)
   - זה יחליף את הTWiLight Menu++ Updater הרגיל, אז השתמשו בUniversal-Updater במקום על מנת לעדכן את TWiLight Menu++
1. בחרו ב`Extras`, ב`Boxart` ואז לחצו על <kbd class="face">X</kbd> על מנת לסרוק את כל כרטיס הSD או על <kbd class="face">A</kbd> על מנת לבחור תיקיה לסריקה
1. בחר את גודל תמונות הקופסה
1. בחרו את סגנון הגבול
1. וודאו שבהגדרות של TWiLight Menu++ הbox art מוגדר להצגה

### Windows
1. הורידו את הגרסה האחרונה של [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. חלצו את `TwilightBoxart-Windows-UX.zip` והריצו את `TwilightBoxart.exe`
1. לחצו על `Detect SD`
   - אם זה לא מוצא את כרטיס הSD הנכון, לחצו על `Browse...` ובחרו את הנכון
1. שנו את הגדרות הגודל, גבול ועוד לפי רצונכם
1. לחצו על `Start`
1. במכשיר הDS שלכם, וודאו שבהגדרות של TWiLight Menu++ הbox art מוגדר להצגה

### macOS/Linux
1. הורידו את הגרסה האחרונה של [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. חלצו את ה`.zip`
1. פתחו את `TwilightBoxart.ini` שנמצא בתיקיה שחילצתם באמצעות עורך טקסט, ואז שמרו את הקובץ
1. הקלידו את הנתיב לכרטיס הSD שלכם אחרי `SdRoot=`
   - בmacOS זה יהיה `/Volumes/` ואז השם של הכרטיס SD
1. פתח את terminal
1. בterminal הקלידו `cd `, לאחר מכן גררו את התיקיה עם `TwilightBoxart.CLI` בתוכה על הterminal ושחררו
1. הריצו את `chmod +x TwilightBoxart.CLI`
1. הריצו את הקובץ `./TwilightBoxart.CLI` על ידי גרירה ושחררו על הterminal
1. בחרו ב`Yes` אם זה מראה את הנתיב הנכון לSD שלכם
1. במכשיר הDS שלכם, וודאו שבהגדרות של TWiLight Menu++ הbox art מוגדר להצגה

### ידני
1. הורידו חבילת תמונות קופסה בפורמט png מ[GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. חלצו את קבצי ה.png אל `sd:/_nds/TWiLightMenu/boxart`
1. במכשיר הDS שלכם, וודאו שבהגדרות של TWiLight Menu++ הbox art מוגדר להצגה

**על מנת להוסיף תמונות קופסה משלכם:** מקמו אותם ב`sd:/_nds/TWiLightMenu/boxart`. הם יכולים להיות בשם של הTID של המשחק (לדוגמה `ASME.png`), או בשם של הקובץ (לדוגמה `SM64DS.nds.png`). הם חייבים להיות בפורמט `.png`, עם גודל מומלץ של 128x115 וגודל מקסימלי של 208x143.

ניתן להוריד תמונות קופסה פרטניות מGameTDB מהקטגוריה **S Covers (png)**.
