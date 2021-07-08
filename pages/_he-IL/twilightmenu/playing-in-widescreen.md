---
lang: he-IL
layout: wiki
section: twilightmenu
category: other
title: משחק במסך רחב
description: איך להשתמש בTWiLight Menu++ במסך רחב על Nintendo 3DS
---

דורש Old/New Nintendo 3DS או 2DS.
{:.alert .alert-info}

### הכנה
- וודאו שהקובץ`boot.firm` של Luma נמצא בשורש הSD שלכם

### התקנה
1. הורידו את [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia) והעתיקו את `TWPatch.cia` לכרטיס הSD שלכם ([דיון בGBATemp ](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. התקינו את `TWPatch.cia` באמצעות FBI
   - ניתן גם להשתמש בUniversal-Updater על מנת להתקין את TWPatch במקום 2 הצעדים הקודמים
1. חזרו לתפריט הבית והפעילו את TWPatch
1. החזיקו <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> ואפשרו את `Widescreen patch (384x240 16:10)`
1. (אופציונאלי!) על מנת לקבל משחק רחב פחות מפוקסל, אפשרו את `GPU scale test (health hazard!)`
   - ה"health hazard!" (אזהרת בריאות) זה בגלל שהמפתח קיבל כאב ראש בגלל הטשטוש
1. לחצו על <kbd>START</kbd> על מנת לייצר קובץ `TwlBg.cxi` עם מסך רחב
   - אם המסך העליון לא מצביע על כך שהמסך הרחב מופעל, התחילו משלב 3 שוב
   - אם המסך הרחב עדיין לא עובד, המתינו לשחרור של מסך רחב RTCom-activated
1. הפעילו מחדש את ה3DS שלכם בזמן שאתם מחזיקים את <kbd>SELECT</kbd> על מנת לפתוח את ההגדרות של Luma3DS
1. הפעילו את `external FIRMs and modules`, ולחצו על <kbd>START</kbd> לשמירה ויציאה
1. פתחו את ההגדרות של TWiLight Menu++, עברו לעמוד `Misc settings`,, והגדירו את `Screen Aspect Ratio` ל`16:10`
   - ניתן גם לבצע הגדרה זאת עבור משחק בודד

סיימתם! תהנו ממשחקי הDS שלכם במסך רחב!

**הערה 1:** כל משחק/אפליקציה במצב DS(i) תרוץ במסך רחב, גם המשחקים שלא תואמים. כדי שזה יתוקן כך שרק המשחקים התואמים למסך הרחב יפעלו במסך רחב, המתינו לשחרור מסך רחב RTCom-activated.

**הערה 2:** אל תלחצו על <kbd>START</kbd> or <kbd>SELECT</kbd> בטעינת TWLMenu++,, אם אתם לא רוצים שהמשחק הרחב יראה תקול. אם אתם לא רואים את הגדרת יחס גובה-רוחב של המסך, המתינו לשחרור של מסך רחב RTCom-activated.

לא כל המשחקים תואמים מסך רחב. [הכנו רשימה של משחקים שתואמים מסך רחב](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
