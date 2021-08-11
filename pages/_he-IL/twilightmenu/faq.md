---
lang: he-IL
layout: faq
section: twilightmenu
category: other
title: שאלות ותשובות & פתרון בעיות
long_title: שאלות & תשובות ופתרון בעיות עבור TWiLight Menu++
description: שאלות ותשובות ופתרון בעיות עבור TWiLight Menu++
---

לשאלות ותשובות נוספות, בקרו ב[דיון בGBAtemp ](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### למה ה3DS/2DS שלי נתקע על מסך שחור, קורס, נכבה וכו' כשאני מפעיל את TWiLight Menu++?
TWL_FIRM ככל הנראה נפגם. עקבו אחרי המדריך הזה לתקן את הבעיה <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### איך אני מתקן את הבעיה של מסך לבן כשאני מפעיל את TWiLight Menu++?
- ראשית, נסו להכינס את המכשיר למצב שינה (סגירת החלק העליון של הקונסולה או לחיצה על כפתור השינה בO2DS), ואז להעיר אותו
- אם זה לא עוזר, פרמטו את כרטיס הSD לFAT32 עם 32 KB cluster/allocation size
- אם גם זה לא עוזר, נסו כרטיס SD אחר

#### איפה ערכת הנושא Acekard/Wood UI?
ערכת הנושא acekard (נקראת גם Wood UI) הוסרה כתוצאה מההתנהגות הבאגית שלו ומאחר והוא גורם להשחתה של כרטיס הSD. אנו המתינו לתיקון. ניתן למצא את התקדמות התהליך לחזרת ערכת נושא זו ב [PR זה](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### איך אני מתקן את הבעיה שTWiLight Menu++ נדלק מחדש או מעלה שגיאת Guru Meditation Error כשאני מפעיל משחק?
פתחו את ההגדרות של TWLMenu++, ובטלו את `Update recently played list`.

#### למה אני מקבל מסך לבן כשאני מנסה להפעיל משחק מכרטיס הSD?
- ראשית, בדקו את [רשימת התאימות של nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) ו-ודאו שהמשחק שלכם נתמך
- נסו עם כל הצ'יטים מבוטלים למשחק זה, מאחר וחלק מהצ'יטים לא מותאמים לnds-bootstrap כרגע. ניתן להשתמש ב<kbd class="l">L</kbd> לבטל את כל הציטים למשחק מסויים
- אם המשחק עבד בעבר, מחקו את התיקיה `fatTable` ואת התיקיה `patchOffsetCache` מתוך `sd:/_nds/nds-bootstrap/`

#### איך אני משתמש בצ'יטים?
צריך מאגר ציטים בצורה של קובץ `usrcheat.dat` שנמצא בתיקיה `sd:/_nds/TWiLightMenu/extras/`. המאגר המעודכן ביותר הוא של [DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- על 3DS, מאגר זה זמין דרך אפליקצית הUniversal-Updater כ"NDS Cheat Databases." זה יתקין אותו באופן אוטומטי למקום הנכון.

לחלופין, ניתן להשתמש ב[r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) על מנת ליצור מאגר בעצמכם.

#### איך אני מראה תמונה מותאמת אישית במסך העליון בערכת הנושא של הDSi?
קובץ `.png` אקראי מהתיקייה `sd:/_nds/TWiLightMenu/dsimenu/photos/` יוצג כל פעם שהתפריט יעלה.

- הגודל המקסימלי של התמונות הוא 208x156
- אם אתם מקבלים שגיאות, זוהי כנראה בעיה עם גודל התמונה. השתמשו ב[tinypng](https://tinypng.com) להקטין את הגודל

#### איך אני משיג משחקים?
ניתן להוריד משחקי הומברו מ [Universal-DB](https://db.universal-team.net/ds) ומ[GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). על מנת להשיג גיבויים של המשחקים הרשמיים שלכם:
- על מכשיר DS ניתן להשתמש ב[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) על מנת להשיג את הגיבויים של משחקי הGBA שלכם, ואם יש לכם פלאשקארט לSlot-2, משחקי DS
- על מכשיר DSi ניתן להשתמש ב[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) על מנת להשיג את הגיבויים של משחקי הDS והDSiWare שלכם
- על מכשיר 3DS ניתן להשתמש ב[GodMode9](https://github.com/d0k3/GodMode9/releases) על מנת להשיג את הגיבויים של משחקי DS, DSiWare ומשחקי Virtual Console

#### האם ניתן להעביר את השמירות מקלטות המשחק שלי אל הSD וההפך?
כן, ניתן להשתמש ב [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) על DSi או 3DS, או ב[Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) על 3DS.

#### איך אני משנה את השפה שלTWiLight Menu++?
1. פתחו את ההגדרות של TWiLight Menu++, ניתן לעשות זאת על ידי לחיצה על <kbd>SELECT</kbd> בזמן שTWiLight Menu++ נטען
1. לחצו על <kbd class="l">L</kbd> או על <kbd class="face">Y</kbd> פעם אחת (על פלאשקארט או 3DS) או פעמיים (על DSi)
1. שנו את האופציה הראשונה עד שתראו את השפה שתרצו, ואז תצאו מההגדרות
   - ייתכן ותרצו לשנות את שתי האופציות הבאות, מאחר והן שולטות בשפה של משחקי DS ובשמות של המשחקים בTWiLight Menu++

#### האם זה אימולטור של DS(i)&lrm;?
לא, זה לא אימולטור. התפריט ומשחקי הDS (שנטענים דרך nds-bootstrap) רצים באופן טבעי במצב הDS/DSi של הקונסולה. הקונסולות היחידות שרצות באימולציה הן קונסולות ישנות, כשבGBA זה באופן חלקי (מאחר וחלק או כל החלקים של המשחק לדוגמת גרפיקה רצים באופן טבעי).

#### באילו מערכות TWiLight Menu++ תומך?

ראו [רשימת מערכות הנתמכות על ידי TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### למה מסך המגע לא עובד עם sudokuhax?
תלוי בשמירה של sudokuhax, מסך המגע עשוי לא לעבוד.

#### האם ניתן להשתמש בThe Biggest Loser על מנת להפעיל את TWiLight Menu++?
לא. מאחר וThe Biggest Loser הוא משחק Slot-1 ולא משחק DSiWare. גישה לSD נחסמת כאשר מריצים משחקי Slot-1.
