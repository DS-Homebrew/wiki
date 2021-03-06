---
lang: he-IL
layout: wiki
section: twilightmenu
category: other
title: משחק במסך רחב
description: איך להשתמש בTWiLight Menu++ במסך רחב על Nintendo 3DS
---

דורש Old / New Nintendo 3DS או 2DS.
{:.alert .alert-info}

### הכנה
- וודאו שהקובץ`boot.firm` של Luma נמצא בשורש הSD שלכם

### התקנה
1. הורידו את [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) והעתיקו את `TWPatch.cia` לכרטיס הSD שלכם ([דיון בGBATemp ](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. התקינו את `TWPatch.cia` באמצעות FBI
   - ניתן גם להשתמש בUniversal-Updater על מנת להתקין את TWPatch במקום 2 הצעדים הקודמים
1. חזרו לתפריט הבית והפעילו את TWPatch
1. Hold <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> and enable `Widescreen patch (384x240 16:10)`
1. (Optional!) For a less pixelated widescreen, also enable `GPU scale test (health hazard!)`
   - The "health hazard!" is because it gave the developer a headache due to its blurriness
1. Press <kbd>START</kbd> to generate a `TwlBg.cxi` file with widescreen
   - If the top screen doesn't indicate that wide patch is enabled, start from step 3 again
   - If widescreen still doesn't work, wait for RTCom-activated widescreen to be released
1. Restart your 3DS while holding <kbd>SELECT</kbd> to open Luma3DS's configuration
1. Enable `external FIRMs and modules`, then press <kbd>START</kbd> to save and quit
1. Open TWiLight Menu++ settings, switch to the `Misc settings` page, and set `Screen Aspect Ratio` to `16:10`
   - This can be done per-game as well

סיימתם! תהנו ממשחקי הDS שלכם במסך רחב!

**הערה 1**: כל משחק/אפליקציה במצב DS(i) תרוץ במסך רחב, גם המשחקים שלא תואמים. כדי שזה יתוקן כך שרק המשחקים התואמים למסך הרחב יפעלו במסך רחב, המתינו לשחרור מסך רחב RTCom-activated.

**הערה 2:** אל תלחצו על <kbd>START</kbd> or <kbd>SELECT</kbd> בטעינת TWLMenu++,, אם אתם לא רוצים שהמשחק הרחב יראה תקול. אם אתם לא רואים את הגדרת יחס גובה-רוחב של המסך, המתינו לשחרור של מסך רחב RTCom-activated.

לא כל המשחקים תואמים מסך רחב. [הכנו רשימה של משחקים שתואמים מסך רחב](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
