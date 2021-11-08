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
- Try with all cheats disabled for that game as some cheats are not compatible with nds-bootstrap at the moment, you can use <kbd class="l">L</kbd> in the TWiLight Menu++ cheats menu to disable all cheats for a game
- אם המשחק עבד בעבר, מחקו את התיקיה `fatTable` ואת התיקיה `patchOffsetCache` מתוך `sd:/_nds/nds-bootstrap/`
- Run the game with different settings, including changing the ARM9 CPU Speed, Async card read, DS/DSi Mode, sound quality, Card read DMA, etc
- It's probably not that big of an issue; ask in the [Discord server](https://discord.gg/yD3spjv) If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on [GitHub](https://github.com/DS-Homebrew/nds-bootstrap/issues). Check the closed issues too in case there has already been an issue closed in preference a different one. If it doesn't have any GitHub issue attached to it, go ahead and make a new one

If no solution has been found at this point, make sure you add it to the [compatibility list](https://wiki.ds-homebrew.com/nds-bootstrap/testing) on Google Sheets.

#### Why are there issues with ROM loading, even though they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1. There are also timing issues and AP measures (which most are already removed), both of which will cause the ROMs to not work properly.

#### Why use nds-bootstrap over a regular flashcard?
- Certain compatible ROMs are loaded into RAM, allowing for load times to be faster than even normal Game Cards
- ניתן להגדיל את הVRAM memory bus ל32-bit
- ניצול של המהירות שעון הנוספת של הDSi, המאפשר לביצועים טובים יותר בחלק מהמשחקים
- שפרו את הצלילים במשחק עם 48 kHz
- השתמשו במצב DSi, המאפשר פונקציות של DSi
- Using certain Game Cards, you are able to use IR in your application
- nds-bootstrap הוא תוכנת קוד פתוח, כלומר מפתחים יוכלו תמיד לעדכן אותו לשיפור באגים ודברים נוספים, אפילו אם הפרויקט הופסק
- קיימת אימלוציה של הDS Memory Expansion Pak, כך שמשחקים שדורשים את התוסף הזה יעבדו
- החליפו את המסך העליון והתחתון במשחקים נתמכים בשביל משחקיות נוחה יותר, או במכשירים בהם מסך נשבר או הוסר
- Take screenshots and edit values in the RAM using the in-game menu

#### What is a Donor ROM?
In nds-bootstrap, when a game doesn't boot, another ROM is used to "donate" it's ARM7 (and ARM7i, if available) binary to the game set to run, in place of the game's own said binary. Most games can be set as a Donor ROM (which can be done via **TW**i**L**ight Menu++), and both the game to launch and the donor must contain the same SDK version.
- **Flashcards in DS mode:** The few supported DSi-Exclusive titles will require a DSi-Enhanced ROM set as a Donor ROM.
- **DSiWarehax:** As both DSi-Enhanced games and DSi-Exclusive/DSiWare games contain different MBK settings from each other, DSi-Enhanced games will not boot in DSi mode without a Donor ROM. By setting a DSi-Exclusive/DSiWare title as a Donor ROM, DSi-Enhanced games will be able to run within the MBK settings set by the DSiWare title the exploit is used on.
- **CycloDS iEvolution:** Same case with DSiWarehax, but DSi-Exclusive/DSiWare titles will require a DSi-Enhanced game set as a Donor ROM, instead of the other way around.

#### What's the best Donor ROM?
There's no *best* one to use, though it's preferred to set an SDK5 ROM containing a sub-version higher than 0. However, if you're a DSiWarehax user, and have no existing DSiWare ROM, you can dump a ROM of *Nintendo DSi Sound* (SDK5.0) using GodMode9**i**, and set DSi Sound as a Donor ROM. If you own a 3DS console though, it is preferrable to dump the DS WiFi Settings ROM (SDK5.5) using GodMode9, and instead, set DS WiFi Settings as a Donor ROM, as doing so allows sleep mode to be activated in DSiWare without waiting 9 seconds.

#### Why can't I set a Donor ROM?
If there's a title requiring a Donor ROM, and the ROM TWLMenu++ stated to find doesn't show the option to set it as one (provided you've scrolled down), then find another ROM to set as a donor.

#### What is a nightly and where do I get it?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time. Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

For more info on cheats, check the [Action Replay cheats section of the Retail ROMs page](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### How do I take screenshots?
You can take screenshots of the main screen from the in-game menu. By default the in-game menu is opened by pressing <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>, then select `Screenshot...`, change the VRAM bank if needed, and press <kbd class="face">A</kbd> to save the screenshot.

To view your screenshots on your PC you will need to extract `sd:/_nds/nds-bootstrap/screenshots.tar`, inside will be all of your screenshots in BMP format. There will also be additional empty BMP files to pad the TAR file out to 50, these can simply be ignored or deleted.

nds-bootstrap can only fit 50 screenshots in the `screenshots.tar`, so once you're getting close you should extract them and delete the TAR, nds-bootstrap will then generate a new TAR next time you load a game.

#### What is the main screen and why can only it have screenshots?
The "main" screen is whichever screen is being drawn using the main engine, which can be either physical screen. Typically it's the screen where the main gameplay is happening and if one screen has 3D that's always the main screen. It'll always be the top screen when in the in-game menu.

The reason screenshots can only be taken of the main screen is a hardware limitation of the Nintendo DS, it doesn't have a framebuffer but it does have a display capture feature which allows main engine's output to be captured. This is most often used by games to render 3D to both screens but can also be used to take screenshots.

#### What is the "VRAM bank" I'm asked to select when taking a screenshot?
When taking a screenshot using nds-bootstrap it needs to use the DS's display capture feature to capture a frame from the main engine, however this display capture can only write to VRAM and requires one of the first four banks. nds-bootstrap will try to select a bank that isn't being used for the main engine so usually you can simply ignore this, however in some case all four of the possible VRAM banks will be in use for the main engine and thus it's not possible to take a perfect screenshot and you will need to select the bank you find looks best.

#### Can I play games online using nds-bootstrap?
Playing games online with nds-bootstrap will work exactly as it does with real Game Cards. See the [Wi-Fi](../ds-index/wifi) page for information on connecting to an alternate online service.
- If you are playing a DSi-Enhanced game in DS mode, you are restricted to unsecured or WEP network connections
