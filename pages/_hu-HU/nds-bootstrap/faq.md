---
lang: hu-HU
layout: faq
section: nds-bootstrap
title: GYIK & hibaelhárítás
long_title: nds-bootstrap GYIK & helyreállítás
description: GYIK & hibaelhárítás az nds-bootstrap-hez
---

#### I'm having issues with my ROM(s), what should I do?
- Make sure that you are on the latest release of [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) and [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) if you are using it (update instructions are provided in each release page)
- Check the [the nds-bootstrap compatibility list](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) to see if this is a known issue on the latest nds-bootstrap
- Try with all cheats disabled for that game as some cheats are not compatible with nds-bootstrap at the moment, pressing <kbd class="l">L</kbd> in the game's cheats menu on TWiLight Menu++ will disable all cheats for it
- If it worked before, delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`
- Run the game with different settings, this includes ARM9 CPU Speed, Async card read, DS/DSi Mode, sound quality, Card read DMA, etc
    - Using TWiLight Menu++, change all the per-game settings to `Default`
    - If there is a specific per-game setting that causes your issue, please report this to the [GitHub](https://github.com/DS-Homebrew/nds-bootstrap/issues)
- If you have followed all the above steps, ask in the [Discord server](https://discord.gg/yD3spjv)
- If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on Github
    - Check the closed issues too in case there has already been an issue closed in preference a different one.
    - If it doesn't have any GitHub issue attached to it, go ahead and make a new one
- If no solution has been found at this point, please update the [compatibility list](https://wiki.ds-homebrew.com/nds-bootstrap/testing)

#### Miért vannak problémák a ROM betöltéssel, ha natívan futnak?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1. There are also timing issues and AP measures (which most are already removed), both of which will cause the ROMs to not work properly.

#### Miért használjak nds-bootstrap-et a hagyományos flashcard helyett?
- Bizonyos kompatibilis ROM-ok betöltésre kerülnek a RAM-ba, gyorsabb betöltési időket lehetővé téve, mint a normál játék kártyák
- Kibővítheted a VRAM memória buszt 32 bitesre
- Használd a DSi további CPU sebességét, lehetővé téve a jobb teljesítményt néhány játéknál
- Az audiód minőségét javíthatod 48 kHz-re
- Használható a DSi mód, amivel elérhetők a DSi funkciók
- Bizonyos játék kártyák használatakor lehetőséged van az IR használatára az alkalmazásodból
- Az nds-bootstrap nyílt forrású, így a fejlesztől mindig tudják frissíteni a hibák és egyéb dolgok javítása érdekében, még akkor is, ha a cég megszűnik
- A DS Memory Expansion Pak emulált, így azok a játékok amiknek szüksége van rá működni fognak
- Az alsó és felső képernyő cserélhető a kompatibilis játékoknál a még kényelmesebb játékmenetért, vagy olyan rendszerekhez, ahol törött vagy eltávolított a képernyő
- Képernyőképe készítése és értékek szerkesztése a RAM-ban a játékbani menü használatával

#### Mi az a Donor ROM?
In nds-bootstrap, when a game doesn't boot, another ROM is used to "donate" it's ARM7 (and ARM7i, if available) binary to the game set to run, in place of the game's own said binary. Most games can be set as a Donor ROM (which can be done via **TW**i**L**ight Menu++), and both the game to launch and the donor must contain the same SDK version.
- **Flashcard-ok DS módban:** A néhány támogatott DSi-Exklúzív cím DSi-Enhanced ROM készletet igényel, mint Donor ROM.
- **DSiWarehax:** Mivel a DSi-Enhanced játékok és a DSi-Exkluzív/DSiWare játékok eltérő MBK-beállításokat tartalmaznak, a DSi-Enhanced játékok nem fognak elindulni DSi módban Donor ROM nélkül. Egy DSi-Exkluzív/DSiWare cím Donor ROM-ként való beállításával a DSi-Enhanced játékok képesek lesznek futni a DSiWare cím által beállított MBK-beállításokon belül, amelyen az exploitot használják.
- **CycloDS iEvolution:** Ugyanez a helyzet, mint a DSiWarehax-szal, de a DSi-Exkluzív/DSiWare címekhez DSi-Enhanced játékra lesz szükség, amely Donor ROM-ként van beállítva, nem pedig fordítva.

#### Mi a legjobb Donor ROM?
There's no *best* one to use, though it's preferred to set an SDK5 ROM containing a sub-version higher than 0. However, if you're a DSiWarehax user, and have no existing DSiWare ROM, you can dump a ROM of *Nintendo DSi Sound* (SDK5.0) using GodMode9**i**, and set DSi Sound as a Donor ROM. If you own a 3DS console though, it is preferable to dump the DS WiFi Settings ROM (SDK5.5) using GodMode9, and instead, set DS WiFi Settings as a Donor ROM, as doing so allows sleep mode to be activated in DSiWare without waiting 9 seconds.

#### Miért nem tudok beállítani Donor ROM-ot?
If there's a title requiring a Donor ROM, and the ROM TWLMenu++ stated to find doesn't show the option to set it as one (provided you've scrolled down), then find another ROM to set as a donor.

#### Mi az esti fordítás (nightly) és hol szerezhetem be?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Miért nem működnek a csalásaim?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time. Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

For more info on cheats, check the [Action Replay cheats section of the Retail ROMs page](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### Hogyan készíthetek képernyőképeket?
You can take screenshots of the main screen from the in-game menu. By default the in-game menu is opened by pressing <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>, then select `Screenshot...`, change the VRAM bank if needed, and press <kbd class="face">A</kbd> to save the screenshot.

To view your screenshots on your PC you will need to extract `sd:/_nds/nds-bootstrap/screenshots.tar`, inside will be all of your screenshots in BMP format. There will also be additional empty BMP files to pad the TAR file out to 50, these can simply be ignored or deleted.

nds-bootstrap can only fit 50 screenshots in the `screenshots.tar`, so once you're getting close you should extract them and delete the TAR, nds-bootstrap will then generate a new TAR next time you load a game.

#### Mi az a fő képernyő és miért csak arról készíthető képernyőkép?
The "main" screen is whichever screen is being drawn using the main engine, which can be either physical screen. Typically it's the screen where the main gameplay is happening and if one screen has 3D that's always the main screen. It'll always be the top screen when in the in-game menu.

The reason screenshots can only be taken of the main screen is a hardware limitation of the Nintendo DS, it doesn't have a framebuffer but it does have a display capture feature which allows main engine's output to be captured. This is most often used by games to render 3D to both screens but can also be used to take screenshots.

#### Mi az a "VRAM bank" amit megkérdez, amikor képernyőképet készítek?
When taking a screenshot using nds-bootstrap it needs to use the DS's display capture feature to capture a frame from the main engine, however this display capture can only write to VRAM and requires one of the first four banks. nds-bootstrap will try to select a bank that isn't being used for the main engine so usually you can simply ignore this, however in some case all four of the possible VRAM banks will be in use for the main engine and thus it's not possible to take a perfect screenshot and you will need to select the bank you find looks best.

#### Tudok online játszani játékokat az nds-bootstrap használatával?
Playing games online with nds-bootstrap will work exactly as it does with real Game Cards. See the [Wi-Fi](../ds-index/wifi) page for information on connecting to an alternate online service.
- Ha DSi-Enhanced játékkal játszol DS módban, akkor csak nem biztonságos vagy WEP hálózati kapcsolatra van lehetőséged

#### Károsíthatja a konzolomat, ha egy játékot úgy állítok be, hogy 133 MHz-es (TWL) CPU-sebességet használjon?
No. While not all games may function correctly under this setting, the DSi and 3DS were designed to be able to reach this CPU speed.
- Ha hibát észlelsz egy játék 133 MHz (TWL) CPU sebességgel futtatásakor, hozz létre egy hibajegyet a [TWiLight Menu++ GitHub repository](https://github.com/DS-Homebrew/TWiLightMenu/issues)-ban, leírva a jelenséget, így feketelistázásra kerülhet az ezen a CPU sebességen indításra

#### Fel tudom gyorsítani a játékokat az nds-bootstrap használatával?
While TWL CPU speed may reduce lag, nds-bootstrap cannot run games at faster speeds than intended.
