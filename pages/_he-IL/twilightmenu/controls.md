---
lang: he-IL
layout: wiki
section: twilightmenu
category: other
title: מקשים
long_title: שליטה ב++TWiLight Menu
description: שליטה ומקשים עבור TWiLight Menu++
---

#### ערכות נושא Nintendo DSi, Nintendo 3DS, SEGA Saturn ו-Homebrew Launcher
- <kbd>שמאל</kbd>/<kbd>ימין </kbd>: בחר משחק / תוכנה
- <kbd class="face">A</kbd>/<kbd>START</kbd>: הפעל משחק / תוכנה
- <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>שמאל</kbd>/<kbd>ימין</kbd>: החלף דפים
- (ערכות נושא DSi/Saturn/HBL) <kbd>SELECT</kbd> + <kbd>למעלה</kbd>/<kbd>למטה</kbd> & שחרור <kbd>SELECT</kbd>: החלף בין כרטיס הSD לפלאשקארט
- <kbd class="face">Y</kbd>: הגדרות פר משחק
   - <kbd class="face">X</kbd>: תפריט צ'יטים
      - <kbd class="face">A</kbd>: הפעל או בטל את הצ'יט
      - <kbd class="face">B</kbd>: צא מתפריט הצ'יטים
      - <kbd class="face">X</kbd>: שמור וצא מתפריט הצ'יטים
      - <kbd class="face">Y</kbd>: צפה בתיאור הצ'יט
      - <kbd class="l">L</kbd>: בטל את כל הצ'יטים
- <kbd class="face">X</kbd>: מחק/הסתר משחק
- (ערכות נושא DSi/Saturn/HBL)<kbd>SELECT</kbd>: תפריט הSLECET או תפריט הDS הקלאסי (איפה שניתן לגשת לתפריט המערכת, תפריט הגדרות של TWiLight Menu++ ומצב GBA)

#### ערכת נושא R4
- <kbd>למעלה</kbd>/<kbd>למטה</kbd>: בחר משחק / תוכנה
- <kbd class="face">A</kbd>: הפעל משחק/תוכנה
- <kbd class="l">L</kbd>: החלף בין כרטיס הSD לפלאשקארט
- <kbd class="face">Y</kbd>: הגדרות פר משחק
   - <kbd class="face">X</kbd>: תפריט צ'יטים
      - <kbd class="face">A</kbd>: הפעל או בטל את הצ'יט
      - <kbd class="face">B</kbd>: צא מתפריט הצ'יטים
      - <kbd class="face">X</kbd>: שמור וצא מתפריט הצ'יטים
      - <kbd class="face">Y</kbd>: צפה בתיאור הצ'יט
      - <kbd class="l">L</kbd>: בטל את כל הצ'יטים

#### רומים של DS(i) (באמצעות nds-bootstrap)
מקשים אלו לא תקפים עבור DSiWare.
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>למעלה</kbd> + <kbd class="face">X</kbd> למשך שניה אחת: החלפת מסכים
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>למטה</kbd> + <kbd class="face">A</kbd> למשך 3 שניות: חלץ את הRAM אל `sd:/_nds/nds-bootstrap`, בתור `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>למטה</kbd> + <kbd class="face">B</kbd> למשך 2 שניות: חזרה לTWiLight Menu++
- <kbd class="l">L</kbd> + <kbd>למטה</kbd> + <kbd>SELECT</kbd>: פתח את התפריט בזמן משחק
   - <kbd class="r">R</kbd>: Advance by one frame
   - Screenshot
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Change VRAM bank
      - <kbd class="face">A</kbd>: Save screenshot
      - <kbd class="face">B</kbd>: Return to in-game menu
   - RAM Viewer
      - <kbd>Up</kbd>/<kbd>Down</kbd>: Scroll
      - <kbd>Left</kbd>/<kbd>Right</kbd>: Fast scroll
      - <kbd class="r">R</kbd> + <kbd>Down</kbd>/<kbd>Up</kbd>: Faster scroll
      - <kbd class="r">R</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>: Fastest scroll
      - <kbd class="face">A</kbd>: Enter RAM Editor
      - <kbd class="face">B</kbd>: Return to in-game menu
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
   - RAM Editor
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
      - <kbd class="face">A</kbd>: Modify selected value
         - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease value by 1h
         - <kbd>Left</kbd>/<kbd>Right</kbd>: Increase/Decrease value by 10h
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Finish modifying value
      - <kbd class="face">B</kbd>: Return to RAM Viewer
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
- The in-game menu is not accessible in DSi-Enhanced/Exclusive games running in DSi Mode, so attempting to use the button combo in those games will do nothing
- שילוב המקשים להחלפת המשחקים יעבוד במצב B4DS, האחרים לא יעבדו
- חזרה לTWiLight Menu++ עשויה לא לעבוד על חלק מדגמי הO3DS
- The button combination for opening the in-game menu can be changed in the TWiLight Menu++ settings
- Screenshots are saved to `sd:/_nds/nds-bootstrap/screenshots.tar`. This file can be opened using an archive viewer such as [7-Zip](https://www.7-zip.org/)

#### קיצורי דרך בהפעלה
על כפתרים אלו צריך ללחוץ במהלך תמונת ההפעלה של TWiLight Menu++ / מיד לאחר תמונת ההפעלה של Nintendo DSi.

- <kbd>SELECT</kbd>: פתח הגדרות
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: אפס את כל ההגדרות של TWiLight Menu++
- <kbd class="face">B</kbd>: הרץ את הROM שרץ אחרון
