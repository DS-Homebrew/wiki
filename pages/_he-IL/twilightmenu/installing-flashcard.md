---
lang: he-IL
layout: wiki
section: twilightmenu
category: installing
title: התקנה (פלאשקארט)
long_title: התקנת TWiLight Menu++ (פלאשקארד)
description: איך להתקין את TWiLight Menu++ על פלאשקארד של Nintendo DS
---

### התקנה
1. הורידו את הגרסה האחרונה של [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. חלצו את `TWiLightMenu-Flashcard.7z`
1. העתיקו את התיקייה `_nds` לכרטיס המיקרו SD
1. העתיקו את `BOOT.NDS` לכרטיס המיקרו SD
1. העתיקו את התיקייה `roms` לכרטיס המיקרו SD
1. אם כבר יש לכם שמירות, העבירו את קבצי ה`.sav` שלכם, שנמצאים במיקום של הROMים של הDS, לתיקייה חדשה שנקראת `saves`, שנמצאת גם כן במיקום של הROMים של הDS
1. ...
   - **משתמשי DS Phat/Lite:** אם הפעלת `BOOT.NDS` גורם לקריסה עם מסך לבן, הכניסו קלטת הרחבת זכרון (DS Memory Expansion Pak) ונסו שוב
   - **משתמשי DSi/3DS:** הרציו את TWLMenu++ מכרטיס הSD, הפעילו את `SCFG access in Slot-1` והגדירו את `Slot-1: Touch Mode` ל`DSi Mode`
      - זה יאפשר לכם להשתמש במהירות שעון של TWL ו\או VRAM boost במשחקים מהפלאשקארט שלכם, זאת בנוסף על האפשרות לגשת לכרטיס הSD של המכשיר והרצת משחקי DSi-Enhanced / DSi-Exclusive / DSiWare במצב DSi על הפלאשקארד שלכם

### הרצת משחקים באמצעות הקושחה של הפלאשקארט שלכם
1. חלצו את `Flashcart Loader/(כרטיס הפלאשקארט שלכם)` לכרטיס המיקרו SD של הפלאשקארט
   - לאחר שזה בוצע, המשיכו לשלב 3. במידה ולא, עקבו אחר ההוראות מתחת לרשימת הפלאשקארטים הבאה

1. לפלאשקראטים הבאים:
   - R4i-SDHC
   - כרטיסי r4isdhc.com
   - כרטיסי r4isdhc.hk
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)

   התקינו את [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - וודאו שיש לכם את `YSMenu.nds` (עבר שינוי שם מ`TTMenu.dat` אם אין את הקובץ) ואת התיקייה `TTMenu` בכרטיס המיקרו SD של הפלאשקארט
1. הגדירו את `Use nds-bootstrap` ל`No`, כך שהקושחה של הפלאשקארט תהיה בשימוש במקום nds-bootstrap

### הפעלה אוטומטית של TWiLight Menu++
1. חלצו את התוכן של `Autoboot/(הפלאשקארט שלכם)` לכרטיס המיקרו SD של הפלאשקארט
   - דלגו על שלב זה, אם אתם לא רואים את הפלאשקארט שלכם
1. ...
   - **משתמשי DS Phat/DS Lite:** לכו להגדרות בתפריט הDS שלכם, והפעילו את auto-start, כך שהפלאשקארט שלכם יעלה בהדלקת המכשיר
   - ** משתמשי DSi/3DS:** הריצו את TWLMenu++ מהSD שלכם, והפעילו את `Auto-start Slot-1`
