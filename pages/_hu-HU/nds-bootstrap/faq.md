---
lang: hu-HU
layout: faq
section: nds-bootstrap
title: GYIK & hibaelhárítás
long_title: nds-bootstrap GYIK & helyreállítás
description: GYIK & hibaelhárítás az nds-bootstrap-hez
---

#### Miért kapok fehér képernyőt, ha megpróbálok betölteni egy játékot az SD kártyáról?
- Először ellenőrizd [az nds-bootstrap kompatibilitás listát ](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) legyél biztos benne, hogy a játékod kompatiblis
- Próbáld meg az összes csalás kikapcsolásával annál a játéknál, mert néhány csalás nem kompatibilis az nds-bootstrap-pel jelenleg; az <kbd class="l">L</kbd> gombot a TWiLight Menu++ csalások menüjében tudod használni egy játék összes csalásának kikapcsolásához
- Ha korábban működött, töröld a `fatTable` és a `patchOffsetCache` mappát az `sd:/_nds/nds-bootstrap/` könyvtárból
- Futtasd a játékokat más beállításokkal beleértve az ARM9 CPU sebességet, DS/DSi módot, hang minőséget, aszink kártya olvasást, kártya DMA-t, stb.
- Valószínűleg nem akkora probléma; kérdezz a [Discord szerveren](https://discord.gg/yD3spjv) Ha a szerver szerint ez egy nds-bootstrap probléma, ellenőrizd, hogy a játékot nem jelentették-e már a [GitHub](https://github.com/DS-Homebrew/nds-bootstrap/issues)-on. Ellenőrizd a lezárt jegyeket is, arra az esetre, ha valamelyik hiba lezárásra került egy másik preferálása miatt. Ha nem tartozik hozzá GitHub hiba, akkor csinálj neki egy újat

Ha eddig nem sikerült megoldást találni, ne felejtsd el hozzáadni a [kompatibilitási listához](https://wiki.ds-homebrew.com/nds-bootstrap/testing) a Google Sheets-en.

#### Miért vannak problémák a ROM betöltéssel, ha natívan futnak?
Az nds-bootstrap a ROM funkciókat patcheli, hogy fussanak SD kártyáról, és a ROM hardkódolt a Slot-1 olvasásra. Van néhány időzítési és AP intézkedés (amik nagy része már eltávolított), mind a kettő okozhatja, hogy a ROM-ok nem megfelelően működnek.

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

#### Donor ROM
A legtöbb SDK5 játék kiválasztható Donor ROM-nak (ami a TWiLight Menu++-on keresztül tehető meg). A Donor ROM ARM7 binárisa másolásra kerül az nds-bootstrap által és kicseréli az ARM7 binárist a játékban, amit indítani próbálsz. Ez lehetővé teszi bizonyos SDK5 játékoknak a betöltését és mentését.

#### Mi az esti fordítás (nightly) és hol szerezhetem be?
Az esti fordítás egy fordítás a legutolsó változtatásokkal. Az esti fordítások instabilak lehetnek, de tartalmazzák a legutolsó hibajavításokat. Az nds-bootstrap esti fordításokat beszerezheted [innen](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Miért nem működnek a csalásaim?
A mód, ahogy az E csalás típusok implementálva vannak az nds-bootstrap-ben hibás, ami azt jelenti, hogy az esetek felében működnek. A csalás, amit használsz valószínűleg ilyen típusú. Ez nem a csalás adatbázis hibája, hanem inkább az nds-bootstrap-pé. Kérjük ne kérd ezen csalások törlését az adatbázisból.

További információkért a csalásokról látogass el [Action Replay csalás fejezethez a Kereskedelmi ROM-ok oldalon](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### How do I take screenshots?
You can take screenshots of the main screen from the in-game menu. By default the in-game menu is opened by pressing <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>, then select `Screenshot...`, change the VRAM bank if needed, and press <kbd class="face">A</kbd> to save the screenshot.

To view your screenshots on your PC you will need to extract `sd:/_nds/nds-bootstrap/screenshots.tar`, inside will be all of your screenshots in BMP format. There will also be additional empty BMP files to pad the TAR file out to 50, these can simply be ignored or deleted.

nds-bootstrap can only fit 50 screenshots in the `screenshots.tar`, so once you're getting close you should extract them and delete the TAR, nds-bootstrap will then generate a new TAR next time you load a game.

#### What is the main screen and why can only it have screenshots?
The "main" screen is whichever screen is being drawn using the main engine, which can be either physical screen. Typically it's the screen where the main gameplay is happening and if one screen has 3D that's always the main screen. It'll always be the top screen when in the in-game menu.

The reason screenshots can only be taken of the main screen is a hardware limitation of the Nintendo DS, it doesn't have a framebuffer but it does have a display capture feature which allows main engine's output to be captured. This is most often used by games to render 3D to both screens but can also be used to take screenshots.

#### What is the "VRAM bank" I'm asked to select when taking a screenshot?
When taking a screenshot using nds-bootstrap it needs to use the DS's display capture feature to capture a frame from the main engine, however this display capture can only write to VRAM and requires one of the first four banks. nds-bootstrap will try to select a bank that isn't being used for the main engine so usually you can simply ignore this, however in some case all four of the possible VRAM banks will be in use for the main engine and thus it's not possible to take a perfect screenshot and you will need to select the bank you find looks best.
