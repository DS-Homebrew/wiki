---
lang: he-IL
layout: wiki
section: twilightmenu
title: שאלות ותשובות & פתרון בעיות
category: אחר
---

לשאלות ותשובות נוספות, בקרו ב[דיון בGBAtemp ](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).

#### ש: למה ה3DS/2DS שלי נתקע על מסך שחור שאני מפעיל את TWiLight Men++, או למה ה3DS/2DS שלי נכבה כשאני מפעיל את TWiLight Menu++?
ת: TWL_FIRM ככל הנראה נפגם. עקבו אחרי מדריך זה על מנת לתקן את הבעיה: https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide

#### ש: אני מקבל מסך לבן כשאני מפעיל את TWiLight Menu++. איך אני מתקן את זה?
ת:
- ראשית, נסו להכינס את המכשיר למצב שינה (סגירת החלק העליון של הקונסולה או לחיצה על כפתור השינה בO2DS), ואז להעיר אותו
- אם זה לא עוזר, פרמטו את כרטיס הSD לFAT32 עם 32KB cluster/allocation size
- אם גם זה לא עוזר, נסו כרטיס SD אחר

#### ש: למה אני מקבל מסך לבן כשאני מנסה להפעיל משחק מכרטיס הSD?
ת:
- ראשית, בדקו את [רשימת התאימות של nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) ו-ודאו שהמשחק שלכם נתמך
- אם המשחק שאתם מנסים להפעיל זה משחק DSi Enhanced, ודאו כי TWiLight Menu++ מוגדר להשתמש ב`DS Mode`
- אם המשחק עבד בעבר, מחקו את התיקיה `fatTable` ואת התיקיה `patchOffsetCache` מתוך `sd:/_nds/nds-bootstrap/`

#### ש: איך אני משתמש בצ'יטים?
ת: צריך מאגר ציטים בצורה של קובץ `usrcheat.dat` שנמצא בתיקיה `sd:/_nds/TWiLightMenu/extras/`. המאגר המעודכן ביותר הוא של [DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/). לחלופין, ניתן להשתמש ב[r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) על מנת ליצור מאגר בעצמכם.

#### ש: איך אני מראה תמונה מותאמת אישית במסך העליון בערכת הנושא של הDSi?
ת: קובץ `.png` אקראי מהתיקייה `sd:/_nds/TWiLightMenu/dsimenu/photos/` יוצג כל פעם שהתפריט יעלה.

- הגודל המקסימלי של הקבצים הוא 208x156
- אם אתם מקבלים שגיאות, זוהי כנראה בעיה עם גודל התמונה. השתמשו בtinypng להקטין את הגודל

#### ש: למה מסך המגע לא עובד עם sudokuhax?
ת: תלוי בשמירה של sudokuhax, מסך המגע עשוי לא לעבוד.

#### ש: האם ניתן להשתמש בThe Biggest Loser על מנת להפעיל את TWiLight Menu++?
ת: לא. מאחר וThe Biggest Loser הוא משחק Slot-1 ולא משחק DSiWare. גישה לSD נחסמת כאשר מריצים משחקי Slot-1.

#### ש: איך אני משיג משחקים?
ת: ניתן להוריד משחקי הומברו מ [Universal-DB](https://db.universal-team.net/ds) ומ[GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). ניתן להשתמש ב[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) על מנת ליצור גיבוי של משחקי GBA על הDS או משחקי DS על הDSi, או להשתמש ב [GodMode9](https://github.com/d0k3/GodMode9/releases) על מנת ליצור גיבוי למשחקי DS ו3DS על ה3DS.

#### ש: איך ניתן להעביר את השמירות מהקלטות משחק שלי אל הSD? /האם ניתן לשים את השמירות שלי מהSD על קלטות משחק?
ת: כן, ניתן להשתמש ב [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) על DSi או 3DS, או ב[Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) על 3DS.
