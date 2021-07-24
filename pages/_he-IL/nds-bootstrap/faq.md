---
lang: he-IL
layout: faq
section: nds-bootstrap
title: שאלות ותשובות & פתרון בעיות
long_title: שאלות ותשובות & פתרון בעיות עבור nds-bootstrap
description: שאלות ותשובות & פתרון בעיות עבור nds-bootstrap
---

#### למה אני מקבל מסך לבן כשאני מנסה להפעיל משחק מכרטיס הSD?
- ראשית, בדקו את [רשימת התאימות של nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) ו-ודאו שהמשחק שלכם נתמך
- נסו עם כל הצ'יטים מבוטלים למשחק זה, מאחר וחלק מהצ'יטים לא מותאמים לnds-bootstrap כרגע. ניתן להשתמש ב<kbd class="l">L</kbd> לבטל את כל הציטים למשחק מסויים
- אם המשחק עבד בעבר, מחקו את התיקיה `fatTable` ואת התיקיה `patchOffsetCache` מתוך `sd:/_nds/nds-bootstrap/`

#### פתרון בעיות עבור nds-bootstrap
אם אתם נתקלים בבעיות במהלך שימוש בגרסה האחרונה של nds-bootstrap, כך תוכלו לפתור אותן.

1. הריצו את המשחק עם הגדרות שונות, כולל שינוי ARM9 CPU Speed, DS/DSi Mode, sound quality, Card Read DMA וכו'
2. מחקו את התיקיה `fatTable` ואת התיקיה `patchOffsetCache` מתוך `sd:/_nds/nds-bootstrap/`
3. רוב הסיכויים שזוהי לא בעיה רצינית; שאלו ב[שרת הDiscord](https://discord.gg/yD3spjv)

אם השרת אומר שזאת בעיה של nds-bootstrap, בדקו אם המשחק לא דווח כבר בGitHub. בדקו גם את הבעיות הסגורות במקרה שסגרנו בעיה כתוצאה מעדיפות לבעיה אחרת. אם אין אף בעיה בGitHub שמשוייכת למשחק, יצרו חדשה.

בנוסף, וודאו שאתם מוסיפים את זה אל [רשימת התאימות](https://wiki.ds-homebrew.com/nds-bootstrap/testing) בGoogle Sheets.

#### Why are there issues with ROM loading, even though they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1. There are also timing issues and AP measures (which most are already removed), both of which would cause the ROMs to not work properly.

#### Why use nds-bootstrap over a regular flashcard?
- רומים מתאימים נטענים ישירות לRAM, דבר המאפשר זמני טעינה מהירים אפילו יותר מקלטות רגילות
- ניתן להגדיל את הVRAM memory bus ל32-bit
- ניצול של המהירות שעון הנוספת של הDSi, המאפשר לביצועים טובים יותר בחלק מהמשחקים
- שפרו את הצלילים במשחק עם 48 kHz
- השתמשו במצב DSi, המאפשר פונקציות של DSi
- באמצעות קלטות מסויימות, ניתן להשתמש בIR באפלקיציה שלכם
- nds-bootstrap הוא תוכנת קוד פתוח, כלומר מפתחים יוכלו תמיד לעדכן אותו לשיפור באגים ודברים נוספים, אפילו אם הפרויקט הופסק
- קיימת אימלוציה של הDS Memory Expansion Pak, כך שמשחקים שדורשים את התוסף הזה יעבדו
- החליפו את המסך העליון והתחתון במשחקים נתמכים בשביל משחקיות נוחה יותר, או במכשירים בהם מסך נשבר או הוסר

#### Donor ROMs
Most SDK5 games can be selected as a Donor ROM (which can be done via TWiLight Menu++). The Donor ROM's ARM7 binary is copied by nds-bootstrap and replaces the ARM7 binary for the game that it is trying to run. This allows certain and SDK5 games to boot and save.

#### What is a nightly and where do I get it?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time. Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

For more info on cheats, look [here](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

