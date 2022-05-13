---
lang: hu-HU
layout: faq
section: nds-bootstrap
title: GYIK & hibaelhárítás
long_title: nds-bootstrap GYIK & helyreállítás
description: GYIK & hibaelhárítás az nds-bootstrap-hez
---

#### Problémáim vannak a ROM(ok)-mal, mit tegyek?
- Make sure that you are on the latest release of [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) and [**TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) if you are using it (update instructions are provided in each release page)
- Ellenőrizd az [nds-bootstrap kompatibilitási listában](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0), hogy megtudd, ez egy ismert probléma-e a legújabb nds-bootstrap verzió esetén
- Try with all cheats disabled for that game as some cheats are not compatible with nds-bootstrap at the moment, pressing <kbd class="l">L</kbd> in the game's cheats menu on **TW**i**L**ight Menu++ will disable all cheats for it
- Ha korábban működött, töröld a `fatTable` és a `patchOffsetCache` mappát az `sd:/_nds/nds-bootstrap/` könyvtárból
- Futtasd a játékokat más beállításokkal beleértve az ARM9 CPU sebességet, DS/DSi módot, hang minőséget, aszink kártya olvasást, kártya DMA-t, stb.
    - Using **TW**i**L**ight Menu++, change all the per-game settings to `Default`
    - Ha van egy konkrét játékonkénti beállítás, ami a problémát okozza, kérjük, jelentsd a [GitHub repository](https://github.com/DS-Homebrew/nds-bootstrap/issues)-ba
- Ha van, töröld a cheat adatbázist (`usrcheat.dat`) a `sd:/_nds/TWiLightMenu/extras` mappában
- [Re-dump the ROM](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games) to ensure that it is not corrupted
- If you have followed all the above steps, ask in the [Discord server](https://discord.gg/yD3spjv)
- If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on GitHub
    - Check the closed issues too in case there has already been an issue closed in preference a different one
    - If it doesn't have any GitHub issue attached to it, go ahead and make a new one
- If no solution has been found at this point, please update the [compatibility list](https://wiki.ds-homebrew.com/nds-bootstrap/testing)

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

#### DS/DS Lite: Miért használjak nds-bootstrap-et egy DS flashcard-on?
- Bizonyos kompatibilis ROM-ok betöltésre kerülnek a Memory Expansion Pak-ba (vagy RAM-ot tartalmazó Slot-2 flashcard-o memóriájába), gyorsabb betöltési időket lehetővé téve, mint a normál játék kártyák
- A limited number of DSiWare can be run using built-in patches and a Donor ROM of a DSi-Enhanced title
     - Keep in mind that nds-bootstrap will always be used for DSiWare, regardless of `Use nds-bootstrap` setting in TWLMenu++ Settings
- If your flashcard kernel cannot run a certain ROM, nds-bootstrap can be used instead, and can be set per-game
- Swap top and bottom screens in compatible games for more comfortable gameplay, or on systems with a broken or removed screen
- Edit values in the RAM using the in-game menu

#### What is a Donor ROM?
Az nds-bootstrap-ben, amikor egy játék nem bootol, egy másik ROM-ot használunk, hogy "odaadományozza" az ARM7 (és ARM7i, ha van) binárisát a futtatandó játéknak, a játék saját binárisa helyett.     
A Donor ROM beállítható a **TW**i**L**ight Menu++-szal.
- **Flashcard-ok DS módban:** A néhány támogatott DSi-Exklúzív/DSiWare cím DSi-Enhanced ROM készletet igényel, mint Donor ROM
- **DSiWarehax:** Mivel a DSi-Enhanced játékok és a (legtöbb) DSi-Exkluzív/DSiWare játék eltérő MBK-beállításokat tartalmaznak, a DSi-Enhanced játékok nem fognak elindulni DSi módban Donor ROM nélkül. Egy DSi-Exkluzív/DSiWare cím Donor ROM-ként való beállításával a DSi-Enhanced játékok képesek lesznek futni a DSiWare cím által beállított MBK-beállításokon belül, amelyen az exploitot használják
- **CycloDS iEvolution:** Ugyanez a helyzet, mint a DSiWarehax-szal, de a DSi-Exkluzív/DSiWare címekhez DSi-Enhanced játékra lesz szükség, amely Donor ROM-ként van beállítva, nem pedig fordítva

#### Mi a legjobb Donor ROM?
Nincs *legjobb*, amit használni lehetne.     
Ha DSiWarehax felhasználó vagy, akkor előnyös, ha egy 0-nál magasabb alverziót tartalmazó SDK5 ROM-ot állítasz be. Ha azonban nincs DSiWare ROM-od, dumpolhatod a ROM-ját a *Nintendo DSi Sound*-nak (SDK5.0) a GodMode9**i** használatával és beállíthatod a DSi Sound-ot mint egy Donor ROM-ot.     
Ha 3DS konzolod van, akkor célszerű a DS WiFi Settings ROM-ot (SDK5.5) a GodMode9 segítségével dumpolni, és helyette a DS WiFi Settings-t Donor ROM-ként beállítani, mivel így a DSiWare-ben 9 másodperc várakozás nélkül aktiválható az alvó üzemmód.

#### Miért nem tudok beállítani Donor ROM-ot?
Ha van egy cím, amelyhez donor ROM-ra van szükség, és a TWLMenu által keresett ROM nem mutatja meg a lehetőséget, hogy donor ROM-nak állítsd be (feltéve, hogy lefelé görgetsz), akkor keress egy másik ROM-ot, amelyet donornak állíthatsz be.

#### Mi az esti fordítás (nightly) és hol szerezhetem be?
Az esti fordítás egy fordítás a legutolsó változtatásokkal. Az esti fordítások instabilak lehetnek, de tartalmazzák a legutolsó hibajavításokat. Az nds-bootstrap esti fordításokat beszerezheted [innen](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Miért nem működnek a csalásaim?
- Some cheats may have button activators or other conditions that need to be met. Check the description of the cheat for more information
  - In **TW**i**L**ight Menu++, you can press Y to view a specific cheat's information, when available
- Most cheats were developed for use in DS mode and may not work correctly while running in DSi mode. If the game is DSi-Enhanced, try setting it to run in DS mode
- The way E-type cheats are implemented in nds-bootstrap is currently broken, meaning they may or may not work. Your cheat probably uses that type, and it is not known when this issue will be fixed

További információkért a csalásokról látogass el [Action Replay csalás fejezethez a Kereskedelmi ROM-ok oldalon](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### Hogyan készíthetek képernyőképeket?
Képernyőképeket készíthetsz a játékbani menü fő képernyőjéről. Alapértelmezés szerint a jáékon belüli menü a az <kbd class="l">L</kbd> + <kbd>Le</kbd> + <kbd>SELECT</kbd> gombokra nyílik, ezután válasz a then select `Képernyőkép...` menüpontot, majd módosítsd a VRAM bank-ot, ha szükséges és nyomj <kbd class="face">A</kbd> gombot a képernyőkép mentéséhez.

A PC-den megtekintéséhez a képernyőképeknek ki kell csomagolnod az `sd:/_nds/nds-bootstrap/screenshots.tar` fájlt, amiben találhatók a képernyőképek, BMP formátumban. További üres BMP fájlok is lesznek, hogy a TAR fájl 50-re feltöltéséhez fel, ezeket egyszerűen figyelmen kívül lehet hagyni vagy törölni.

Az nds-bootstrap csak 50 képernyőképet tud rakni a `screenshots.tar` fájlba, így ha már közel jársz hozzá, akkor érdemes kinyerni azokat és törölni a TAR fájlt. Az nds-bootstrap ezután egy új TAR fájlt fog generálni, amikor legközelebb betöltesz egy játékot.

#### Mi az a fő képernyő és miért csak arról készíthető képernyőkép?
A "fő" képernyő az a képernyő, amelyet a fő motorral rajzolnak, ami lehet bármelyik fizikai képernyő. Általában ez az a képernyő, ahol a fő játékmenet zajlik, és ha egy képernyő 3D-s, akkor az mindig a fő képernyő. Ez mindig a felső képernyő, ha a játékbani menüben vagy.

Az ok, amiért csak a fő képernyőről lehet képernyőképeket készíteni, a Nintendo DS hardveres korlátozása: nincs framebuffer, de van egy kép rögzítő funkciója, amely lehetővé teszi a fő engine kimeneteinek rögzítését. Ezt leggyakrabban a játékok használják a 3D megjelenítésére mindkét képernyőn, de képernyőképek készítésére is használható.

#### Mi az a "VRAM bank" amit megkérdez, amikor képernyőképet készítek?
Amikor képernyőképet készítünk az nds-bootstrap segítségével, annak a DS képernyő rögzítő funkcióját kell használnia a fő enginge-ből, hogy rögzítsen egy képet, azonban ez a képernyő rögzítő csak VRAM-ba tud írni és az első négy bank egyikét igényli. Az nds-bootstrap megpróbál kiválasztani egy olyan bankot, amelyet nem használ a fő engine, így általában egyszerűen figyelmen kívül hagyhatod ezt, azonban bizonyos esetekben mind a négy lehetséges VRAM bankot használja a fő engine, így nem lehet tökéletes képernyőképet készíteni, és ki kell választanod azt a bankot, amelyik a legjobban néz ki.

#### Tudok online játszani játékokat az nds-bootstrap használatával?
Az nds-bootstrappal való online játék ugyanúgy fog működni, mint a valódi játékkártyákkal. Az alternatív online szolgáltatáshoz való csatlakozással kapcsolatos információkat a [Wi-Fi](../ds-index/wifi) oldalon találsz.
- Ha DSi-Enhanced játékkal játszol DS módban, akkor csak nem biztonságos vagy WEP hálózati kapcsolatra van lehetőséged

#### Károsíthatja a konzolomat, ha egy játékot úgy állítok be, hogy 133 MHz-es (TWL) CPU-sebességet használjon?
Nem. Bár nem minden játék működik megfelelően ebben a beállításban, a DSi és a 3DS úgy lett tervezve, hogy képes legyen elérni ezt a CPU-sebességet.
- If you encounter an issue with a game when running at 133 MHz (TWL) CPU speed, create an issue on the [**TW**i**L**ight Menu++ GitHub repository](https://github.com/DS-Homebrew/TWiLightMenu/issues) detailing the effects so that it may be blacklisted from being launched at that CPU speed

#### Fel tudom gyorsítani a játékokat az nds-bootstrap használatával?
Bár a TWL CPU sebesség csökkentheti a lagot, az nds-bootstrap nem képes a tervezettnél nagyobb sebességgel futtatni a játékokat.

#### Can I remap button inputs using nds-bootstrap?
Nem. Mivel az nds-bootstrap natívan futtatja a játékokat, a legtöbb gomb funkcióját nem tudja megváltoztatni. Ennek egyetlen módja ennek a játék módosítása vagy csalókódok használata.

#### How do I play randomized Pokémon ROMs with nds-bootstrap?
Pokémon HeartGold/SoulSilver, Black/White, and Black 2 / White 2 have anti-piracy measures that have to be manually patched out *before* randomizing the ROM. You can do this with [DS-Scene ROM Tool](https://gbatemp.net/download/35735/).
- Randomized ROMs cannot be AP-patched on-the-fly like the vanilla versions of these games are, because randomizing a ROM has far too many unique possible outputs to be reasonably included with **TW**i**L**ight Menu++

#### What are DSi binaries? How do I get them?
DSi binaries are the portions of a game's code to be used on DSi (as well as 3DS) systems for use of the DSi's features, such as the cameras and improved Wi-Fi capabilities. Older dumping methods may not have properly dumped these.

- ROMs without the DSi binaries can still be played on any console through DS mode, in which it will run as if the game were being played on a Nintendo DS Phat/Lite

To obtain a ROM that contains the DSi binaries, [re-dump your Game Card](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games).
