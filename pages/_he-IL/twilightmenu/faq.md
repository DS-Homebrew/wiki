---
lang: he-IL
layout: wiki
section: twilightmenu
category: other
title: שאלות ותשובות & פתרון בעיות
long_title: TWiLight Menu++ FAQ & Troubleshooting
description: FAQs and troubleshooting for TWiLight Menu++
---

לשאלות ותשובות נוספות, בקרו ב[דיון בGBAtemp ](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### למה ה3DS/2DS שלי נתקע על מסך שחור, קורס, נכבה וכו' כשאני מפעיל את TWiLight Menu++?
TWL_FIRM ככל הנראה נפגם. עקבו אחרי המדריך הזה לתקן את הבעיה <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### איך אני מתקן את הבעיה של מסך לבן כשאני מפעיל את TWiLight Menu++?
- ראשית, נסו להכינס את המכשיר למצב שינה (סגירת החלק העליון של הקונסולה או לחיצה על כפתור השינה בO2DS), ואז להעיר אותו
- אם זה לא עוזר, פרמטו את כרטיס הSD לFAT32 עם 32 KB cluster/allocation size
- אם גם זה לא עוזר, נסו כרטיס SD אחר

#### איך אני מתקן את הבעיה שTWiLight Menu++ נדלק מחדש או מעלה שגיאת Guru Meditation Error כשאני מפעיל משחק?
פתחו את ההגדרות של TWLMenu++, ובטלו את `Update recently played list`.

#### למה אני מקבל מסך לבן כשאני מנסה להפעיל משחק מכרטיס הSD?
- ראשית, בדקו את [רשימת התאימות של nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) ו-ודאו שהמשחק שלכם נתמך
- נסו עם כל הצ'יטים מבוטלים למשחק זה, מאחר וחלק מהצ'יטים לא מותאמים לnds-bootstrap כרגע. ניתן להשתמש ב<kbd class="l">L</kbd> לבטל את כל הציטים למשחק מסויים
- אם המשחק שאתם מנסים להפעיל זה משחק DSi Enhanced, ודאו כי TWiLight Menu++ מוגדר להשתמש ב`DS Mode`
- אם המשחק עבד בעבר, מחקו את התיקיה `fatTable` ואת התיקיה `patchOffsetCache` מתוך `sd:/_nds/nds-bootstrap/`

#### איך אני משתמש בצ'יטים?
צריך מאגר ציטים בצורה של קובץ `usrcheat.dat` שנמצא בתיקיה `sd:/_nds/TWiLightMenu/extras/`. המאגר המעודכן ביותר הוא של [DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- On the 3DS, this database is available in the Universal Updater app as "NDS Cheat Databases." This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### איך אני מראה תמונה מותאמת אישית במסך העליון בערכת הנושא של הDSi?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

#### איך אני משיג משחקים?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcard, DS games
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### האם ניתן להעביר את השמירות מקלטות המשחק שלי אל הSD וההפך?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### איך אני משנה את השפה שלTWiLight Menu++?
1. פתחו את ההגדרות של TWiLight Menu++, ניתן לעשות זאת על ידי לחיצה על <kbd>SELECT</kbd> בזמן שTWiLight Menu++ נטען
1. לחצו על <kbd class="l">L</kbd> או על <kbd class="face">Y</kbd> פעם אחת (על פלאשקארט או 3DS) או פעמיים (על DSi)
1. שנו את האופציה הראשונה עד שתראו את השפה שתרצו, ואז תצאו מההגדרות
   - ייתכן ותרצו לשנות את שתי האופציות הבאות, מאחר והן שולטות בשפה של משחקי DS ובשמות של המשחקים בTWiLight Menu++

#### האם זה אימולטור של DS(i)?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### באילו מערכות TWiLight Menu++ תומך?

| Format                    | Loader                                           | Extensions                             | Save file                          |
| ------------------------- | ------------------------------------------------ | -------------------------------------- | ---------------------------------- |
| ARGV[^1]                  | Native                                           | `.argv`                                |                                    |
| Atari 2600                | [StellaDS][stellads]                             | `.a26`                                 |                                    |
| Atari 5200                | [A5200DS][a5200ds]                               | `.a52`                                 |                                    |
| Atari 7800                | [A7800DS][a7800ds]                               | `.a78`                                 |                                    |
| Atari XEGS                | [XEGS-DS][xegs-ds]                               | `.xex`, `.atr`                         |                                    |
| DS                        | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`[^2]         |
| DSiWare                   | [Unlaunch][unlaunch]                             | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[rom name].pub`, `[rom name].prv` |
| DSTWO Plugin              | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                    |
| Game Boy (Color)          | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                   |
| Game Boy Advance          | [GBARunner2][gbarunner2][^4], native[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                   |
| Game Gear                 | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[rom name].srm`[^6]               |
| Master System             | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`               |
| MPEG4 Video               | [MPEG4 Player][mpeg4player]                      | `.mp4`                                 |                                    |
| NES / Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                   |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                    |
| RVID Video                | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                    |
| SNES[^7]                  | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`[^8]               |
{:.table}

- Footnotes -
{:footnotes}

#### למה מסך המגע לא עובד עם sudokuhax?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### האם ניתן להשתמש בThe Biggest Loser על מנת להפעיל את TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

[^1]: קבצי טקסט המכילים את הדרך לתוכנות הומברו של DS ואת הarguments להרצה, ראו את [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) למידע נוסף
[^2]: רק עבור רומים רשמיים, להומברו אין קבצי שמירה מסויימים
[^3]: עובד רק מפלאשקארט SuperCard DSTWO מאחר שיש לו תוספת כוח עיבוד וRAM בתוך הקלטת
[^4]: כשמריצים במצב DSi, זה יכול להשתמש בDSP בשביל סאונד טוב יותר
[^5]: דורש פלאשקארט של Slot-2 ולכן עובד רק בDS Phat ובDS Lite
[^6]: jEnesis יכול לשמור רק כשהוא רץ מפלאשקארט, אבל PicoDriveTWL יכול לשמור גם מSD וגם מפלאשקארט
[^7]: מוצג רק כאשר משתמשים בפלאשקארט, בכרטיס הSD הפנימי של ה3DS או על DSi עם Unlaunch מותקן
[^8]: יכול לשמור רק כאשר מריצים מפלאשקארט

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[mpeg4player]: https://gbatemp.net/threads/544095
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://www.gamebrew.org/wiki/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
