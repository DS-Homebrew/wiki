---
lang: he-IL
layout: wiki
section: twilightmenu
category: other
title: שאלות ותשובות & פתרון בעיות
description: FAQs and troubleshooting for TWiLight Menu++
---

לשאלות ותשובות נוספות, בקרו ב[דיון בGBAtemp ](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### למה ה3DS/2DS שלי נתקע על מסך שחור, קורס, נכבה וכו' כשאני מפעיל את TWiLight Menu++?
ת: TWL_FIRM ככל הנראה נפגם. עקבו אחרי המדריך הזה לתקן את הבעיה <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### ש: איך אני מתקן את הבעיה של מסך לבן כשאני מפעיל את TWiLight Menu++?
ת:
- ראשית, נסו להכינס את המכשיר למצב שינה (סגירת החלק העליון של הקונסולה או לחיצה על כפתור השינה בO2DS), ואז להעיר אותו
- אם זה לא עוזר, פרמטו את כרטיס הSD לFAT32 עם 32KB cluster/allocation size
- אם גם זה לא עוזר, נסו כרטיס SD אחר

#### ש: למה אני מקבל מסך לבן כשאני מנסה להפעיל משחק מכרטיס הSD?
ת:
- ראשית, בדקו את [רשימת התאימות של nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) ו-ודאו שהמשחק שלכם נתמך
- נסו עם כל הצ'יטים מבוטלים למשחק זה, מאחר וחלק מהצ'יטים לא מותאמים לnds-bootstrap כרגע. ניתן להשתמש ב<kbd class="l">L</kbd> לבטל את כל הציטים למשחק מסויים
- אם המשחק שאתם מנסים להפעיל זה משחק DSi Enhanced, ודאו כי TWiLight Menu++ מוגדר להשתמש ב`DS Mode`
- אם המשחק עבד בעבר, מחקו את התיקיה `fatTable` ואת התיקיה `patchOffsetCache` מתוך `sd:/_nds/nds-bootstrap/`

#### ש: איך אני משתמש בצ'יטים?
ת: צריך מאגר ציטים בצורה של קובץ `usrcheat.dat` שנמצא בתיקיה `sd:/_nds/TWiLightMenu/extras/`. המאגר המעודכן ביותר הוא של [DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/). לחלופין, ניתן להשתמש ב[r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) על מנת ליצור מאגר בעצמכם.

#### ש: איך אני מראה תמונה מותאמת אישית במסך העליון בערכת הנושא של הDSi?
ת: קובץ `.png` אקראי מהתיקייה `sd:/_nds/TWiLightMenu/dsimenu/photos/` יוצג כל פעם שהתפריט יעלה.

- הגודל המקסימלי של התמונות הוא 208x156
- אם אתם מקבלים שגיאות, זוהי כנראה בעיה עם גודל התמונה. השתמשו ב[tinypng](https://tinypng.com) להקטין את הגודל

#### ש: איך אני משיג משחקים?
ת: ניתן להוריד משחקי הומברו מ [Universal-DB](https://db.universal-team.net/ds) ומ[GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). על מנת להשיג גיבויים של המשחקים הרשמיים שלכם:
- על מכשיר DS ניתן להשתמש ב[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) על מנת להשיג את הגיבויים של משחקי הGBA שלכם, ואם יש לכם פלאשקארט לSlot-2, משחקי DS
- על מכשיר DSi ניתן להשתמש ב[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) על מנת להשיג את הגיבויים של משחקי הDS והDSiWare שלכם
- על מכשיר 3DS ניתן להשתמש ב[GodMode9](https://github.com/d0k3/GodMode9/releases) על מנת להשיג את הגיבויים של משחקי DS, DSiWare ומשחקי Virtual Console

#### Q: Can I get the save files from my game cards onto my SD card or vise versa?
ת: כן, ניתן להשתמש ב [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) על DSi או 3DS, או ב[Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) על 3DS.

#### ש: איך אני משנה את השפה שלTWiLight Menu++?
ת:
1. פתחו את ההגדרות של TWiLight Menu++, ניתן לעשות זאת על ידי לחיצה על <kbd>SELECT</kbd> בזמן שTWiLight Menu++ נטען
1. לחצו על <kbd class="l">L</kbd> או על <kbd class="face">Y</kbd> פעם אחת (על פלאשקארט או 3DS) או פעמיים (על DSi)
1. שנו את האופציה הראשונה עד שתראו את השפה שתרצו, ואז תצאו מההגדרות
   - ייתכן ותרצו לשנות את שתי האופציות הבאות, מאחר והן שולטות בשפה של משחקי DS ובשמות של המשחקים בTWiLight Menu++

#### Q: What systems does TWiLight Menu++ support?

A:

| Console                   | Loader                                           | Extensions                             | Save file                                                |
| ------------------------- | ------------------------------------------------ | -------------------------------------- | -------------------------------------------------------- |
| [ARGV][nds-hb-menu-argv]  | Native                                           | `.argv`                                |                                                          |
| Atari 2600                | [StellaDS][stellads]                             | `.a26`                                 |                                                          |
| Atari 5200                | [A5200DS][a5200ds]                               | `.a52`                                 |                                                          |
| Atari 7800                | [A7800DS][a7800ds]                               | `.a78`                                 |                                                          |
| DS                        | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`<br>(retail ROMs only)       |
| DSiWare                   | [Unlaunch][unlaunch]                             | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[rom name].pub`, `[rom name].prv`                       |
| DSTWO Plugin              | [DSTWO][dstwo] (requires DSTWO flashcard)        | `.plg`                                 |                                                          |
| Game Boy (Color)          | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                                         |
| Game Boy Advance          | [GBARunner2][gbarunner2], native                 | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                                         |
| Game Gear                 | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                                      |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[rom name].srm`<br>(flashcard only for jEnesisDS) |
| Master System             | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`                                     |
| MPEG4 Video               | [MPEG4 Player][mpeg4player]                      | `.mp4`                                 |                                                          |
| NES / Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                                         |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                                          |
| RVID Video                | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                                          |
| SNES                      | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`<br>(flashcard only)               |


#### Q: Why isn't touch input working on sudokuhax?
A: Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### Q: Can The Biggest Loser boot TWiLight Menu++?
A: No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[mpeg4player]: https://gbatemp.net/threads/544095
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nds-hb-menu-argv]: https://github.com/devkitPro/nds-hb-menu#passing-arguments
[nesds]: https://github.com/DS-Homebrew/NesDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://www.gamebrew.org/wiki/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
