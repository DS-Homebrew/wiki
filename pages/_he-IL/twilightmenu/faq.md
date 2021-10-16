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

#### Why does my 3DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
TWL_FIRM ככל הנראה נפגם. עקבו אחרי המדריך הזה לתקן את הבעיה <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### איך אני מתקן את הבעיה של מסך לבן כשאני מפעיל את TWiLight Menu++?
- ראשית, נסו להכינס את המכשיר למצב שינה (סגירת החלק העליון של הקונסולה או לחיצה על כפתור השינה בO2DS), ואז להעיר אותו
- אם זה לא עוזר, פרמטו את כרטיס הSD לFAT32 עם 32 KB cluster/allocation size
- אם גם זה לא עוזר, נסו כרטיס SD אחר

#### איפה ערכת הנושא Acekard/Wood UI?
The Acekard (also called Wood UI) theme was removed due to its buggy behavior and causing SD card corruption. אנו המתינו לתיקון. ניתן למצא את התקדמות התהליך לחזרת ערכת נושא זו ב [PR זה](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### איך אני מתקן את הבעיה שTWiLight Menu++ נדלק מחדש או מעלה שגיאת Guru Meditation Error כשאני מפעיל משחק?
פתחו את ההגדרות של TWLMenu++, ובטלו את `Update recently played list`.

#### Why do I get a white screen when trying to load a DS game from SD card?
See [Why do I get a white screen when trying to load a game from SD card?](../nds-bootstrap/faq?faq=why-do-i-get-a-white-screen-when-trying-to-load-a-game-from-sd-card) on the nds-bootstrap FAQ page.

#### איך אני משתמש בצ'יטים?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- On the 3DS, this database is available in the Universal-Updater app as "NDS Cheat Databases." This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### איך אני מראה תמונה מותאמת אישית במסך העליון בערכת הנושא של הDSi?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded. If there are no applicable images, screenshots taken by nds-bootstrap will be used instead.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

#### איך אני משיג משחקים?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### איך אני משנה את השפה שלTWiLight Menu++?
1. פתחו את ההגדרות של TWiLight Menu++, ניתן לעשות זאת על ידי לחיצה על <kbd>SELECT</kbd> בזמן שTWiLight Menu++ נטען
1. לחצו על <kbd class="l">L</kbd> או על <kbd class="face">Y</kbd> פעם אחת (על פלאשקארט או 3DS) או פעמיים (על DSi)
1. שנו את האופציה הראשונה עד שתראו את השפה שתרצו, ואז תצאו מההגדרות
   - ייתכן ותרצו לשנות את שתי האופציות הבאות, מאחר והן שולטות בשפה של משחקי DS ובשמות של המשחקים בTWiLight Menu++

#### האם זה אימולטור של DS(i)&lrm;?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### באילו מערכות TWiLight Menu++ תומך?
See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### למה מסך המגע לא עובד עם sudokuhax?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### האם ניתן להשתמש בThe Biggest Loser על מנת להפעיל את TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

#### Why can't I find/see my games?
There are a multiple reasons you may be unable to find them.
- If you placed your games in the `_nds` folder, you are unable to access it because it is permanently invisible in TWiLight Menu++. Please move them to any other location on the SD card
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If the game type is set to be hidden in Emulation/HB settings, it won't appear on menus. Change these settings so that they will be displayed
- If your game is in an archive (`zip`, `rar`, `7z`, etc), it cannot be used by TWiLight Menu++. Extract the game from the archive to use it
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file
