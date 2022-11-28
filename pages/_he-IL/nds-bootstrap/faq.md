---
lang: he-IL
layout: faq
section: nds-bootstrap
title: שאלות ותשובות & פתרון בעיות
long_title: שאלות ותשובות & פתרון בעיות עבור nds-bootstrap
description: שאלות ותשובות & פתרון בעיות עבור nds-bootstrap
---

#### I'm having issues with my ROM(s), what should I do?
- Make sure that you are on the latest release of [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) and [**TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) if you are using it (update instructions are provided in each release page)
- Check [the nds-bootstrap compatibility list](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) to see if this is a known issue on the latest version of nds-bootstrap
- Try with all cheats disabled for that game as some cheats are not compatible with nds-bootstrap at the moment, pressing <kbd class="l">L</kbd> in the game's cheats menu on **TW**i**L**ight Menu++ will disable all cheats for it
- If it worked before, delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`
- Run the game with different settings, this includes ARM9 CPU Speed, Async card read, DS/DSi Mode, sound quality, Card read DMA, etc
    - Using **TW**i**L**ight Menu++, change all the per-game settings to `Default`
    - If there is a specific per-game setting that causes your issue, please report this to the [GitHub repository](https://github.com/DS-Homebrew/nds-bootstrap/issues)
- If present, delete the cheat database (`usrcheat.dat`) in `sd:/_nds/TWiLightMenu/extras`
- [Re-dump the ROM](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games) to ensure that it is not corrupted
- If you have followed all the above steps, ask in the [Discord server](https://discord.gg/yD3spjv)
- If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on GitHub
    - Check the closed issues too in case there has already been an issue closed in preference a different one
    - If it doesn't have any GitHub issue attached to it, go ahead and make a new one
- If no solution has been found at this point, please update the [compatibility list](https://wiki.ds-homebrew.com/nds-bootstrap/testing)

#### Why are there issues with ROM loading, even though they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1. There are also timing issues and AP measures (which most are already removed), both of which will cause the ROMs to not work properly.

#### Why use nds-bootstrap over a regular flashcard?
- Certain compatible ROMs are loaded into RAM, allowing for load times to be faster than even normal Game Cards
- ניתן להגדיל את הVRAM memory bus ל32-bit
- ניצול של המהירות שעון הנוספת של הDSi, המאפשר לביצועים טובים יותר בחלק מהמשחקים
- שפרו את הצלילים במשחק עם 48 kHz
- השתמשו במצב DSi, המאפשר פונקציות של DSi
- Less battery power is consumed
- Using certain Game Cards, you are able to use IR in your application
- nds-bootstrap is open source, meaning developers can always update it to fix bugs and other things, even if the project gets discontinued
- The DS Memory Expansion Pak is emulated, meaning games that require that accessory will work
- Swap top and bottom screens in compatible games for more comfortable gameplay, or on systems with a broken or removed screen
- Take screenshots and edit values in the RAM using the in-game menu

#### DS/DS Lite: Why use nds-bootstrap on a DS flashcard?
- Certain compatible ROMs are loaded into the Memory Expansion Pak (or Slot-2 flashcarts containing RAM), allowing for load times to be faster than even normal Game Cards
- 100+ DSiWare titles can be run using built-in patches and a Donor ROM of a DSi-Enhanced title
     - Keep in mind that nds-bootstrap will always be used for DSiWare, regardless of `Use nds-bootstrap` setting in TWLMenu++ Settings
     - Not all DSiWare titles can save, due to the difficulty of adding save support for them, and/or them storing more than one file in the save filesystem.
- If your flashcard kernel cannot run a certain ROM, nds-bootstrap can be used instead, and can be set per-game
- Swap top and bottom screens in compatible games for more comfortable gameplay, or on systems with a broken or removed screen
- Take screenshots and edit values in the RAM using the in-game menu

#### What is a Donor ROM?
In nds-bootstrap, when a game doesn't boot, another ROM is used to "donate" it's ARM7 (and ARM7i, if available) binary to the game set to run, in place of the game's own said binary.     
A Donor ROM can be set using **TW**i**L**ight Menu++.
- **Flashcards in DS mode:** The supported DSi-Exclusive/DSiWare titles will require a DSi-Enhanced ROM set as a Donor ROM
- **DSiWarehax:** As both DSi-Enhanced games and (most) DSi-Exclusive/DSiWare games contain different MBK settings from each other, DSi-Enhanced games will not boot in DSi mode without a Donor ROM. By setting a DSi-Exclusive/DSiWare title as a Donor ROM, DSi-Enhanced games will be able to run within the MBK settings set by the DSiWare title the exploit is used on
     - On DSi, if **TW**i**L**ight Menu++ detects no Donor ROM is set, *Nintendo DSi Sound* and/or a valid exploited title you've launched will automatically be set as Donor ROM(s)
- **CycloDS iEvolution:** Same case with DSiWarehax, but DSi-Exclusive/DSiWare titles will require a DSi-Enhanced game set as a Donor ROM, instead of the other way around

#### What is the best Donor ROM?
There is no *best* one to use. Most ROMs of TWL titles can be set as a Donor ROM.

Examples:
- **DSiWarehax on DSi:** *Nintendo DSi Sound* and/or a valid exploited title you've launched will automatically be set as Donor ROM(s), if one hasn't been set yet.
- **DSiWarehax on 3DS:** Dump the DS WiFi Settings ROM (SDK5.5) using GodMode9, and set it as a Donor ROM.

#### Why can't I set a Donor ROM?
If there's a title requiring a Donor ROM, and the ROM TWLMenu++ stated to find doesn't show the option to set it as one (provided you've scrolled down), then find another ROM to set as a donor.

#### What is a nightly and where do I get it?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
- Some cheats may have button activators or other conditions that need to be met. Check the description of the cheat for more information
  - In **TW**i**L**ight Menu++, you can press Y to view a specific cheat's information, when available
- Most cheats were developed for use in DS mode and may not work correctly while running in DSi mode. If the game is DSi-Enhanced, try setting it to run in DS mode
- The way E-type cheats are implemented in nds-bootstrap is currently broken, meaning they may or may not work. Your cheat probably uses that type, and it is not known when this issue will be fixed

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

#### Can setting a game to use 133 MHz (TWL) CPU speed damage my console?
No. While not all games may function correctly under this setting, the DSi and 3DS were designed to be able to reach this CPU speed.
- If you encounter an issue with a game when running at 133 MHz (TWL) CPU speed, create an issue on the [**TW**i**L**ight Menu++ GitHub repository](https://github.com/DS-Homebrew/TWiLightMenu/issues) detailing the effects so that it may be blacklisted from being launched at that CPU speed

#### Can I speed up games using nds-bootstrap?
While TWL CPU speed may reduce lag, nds-bootstrap cannot run games at faster speeds than intended.

#### Can I remap button inputs using nds-bootstrap?
No. Since nds-bootstrap runs games natively, it cannot change the function of most buttons. The only way to do so would be to modify the game itself, or by using cheat codes.

#### How do I play randomized Pokémon ROMs with nds-bootstrap?
Pokémon HeartGold/SoulSilver, Black/White, and Black 2 / White 2 have anti-piracy measures that have to be manually patched out *before* randomizing the ROM. You can do this with [DS-Scene ROM Tool](https://gbatemp.net/download/35735/).
- Randomized ROMs cannot be AP-patched on-the-fly like the vanilla versions of these games are, because randomizing a ROM has far too many unique possible outputs to be reasonably included with **TW**i**L**ight Menu++

#### What are DSi binaries? How do I get them?
DSi binaries are the portions of a game's code to be used on DSi (as well as 3DS) systems for use of the DSi's features, such as the cameras and improved Wi-Fi capabilities. Older dumping methods may not have properly dumped these.

- ROMs without the DSi binaries can still be played on any console through DS mode, in which it will run as if the game were being played on a Nintendo DS Phat/Lite

To obtain a ROM that contains the DSi binaries, [re-dump your Game Card](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games).
