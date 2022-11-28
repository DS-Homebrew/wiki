---
lang: hu-HU
layout: faq
section: nds-bootstrap
title: GYIK & hibaelhárítás
long_title: nds-bootstrap GYIK & helyreállítás
description: GYIK & hibaelhárítás az nds-bootstrap-hez
---

#### Problémáim vannak a ROM(ok)-mal, mit tegyek?
- Győződj meg róla, hogy a [nds-bootstrap](https://github.com/DS-Homebrew/nds-bootstrap/releases/latest) és [**TW**i**L**ight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest) legújabb verzióját használod (a frissítési utasításokat az egyes kiadási oldalakon találod)
- Ellenőrizd az [nds-bootstrap kompatibilitási listában](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0), hogy megtudd, ez egy ismert probléma-e a legújabb nds-bootstrap verzió esetén
- Próbáld meg az összes csalás kikapcsolásával annál a játéknál, mert néhány csalás nem kompatibilis az nds-bootstrap-pel jelenleg; az <kbd class="l">L</kbd> gombot nyomva a játék csalás menüjében a **TW**i**L**ight Menu++-ban tudod egy játék összes csalását kikapcsolni
- Ha korábban működött, töröld a `fatTable` és a `patchOffsetCache` mappát az `sd:/_nds/nds-bootstrap/` könyvtárból
- Futtasd a játékokat más beállításokkal beleértve az ARM9 CPU sebességet, DS/DSi módot, hang minőséget, aszink kártya olvasást, kártya DMA-t, stb.
    - A **TW**i**L**ight Menu++ használatával módosítsd az összes játékonkénti beállítást `Alapértelmezett` értékre
    - Ha van egy konkrét játékonkénti beállítás, ami a problémát okozza, kérjük, jelentsd a [GitHub repository](https://github.com/DS-Homebrew/nds-bootstrap/issues)-ba
- Ha van, töröld a cheat adatbázist (`usrcheat.dat`) a `sd:/_nds/TWiLightMenu/extras` mappában
- [Re-dumpold a ROM-ot](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games) hogy biztos lehess abban, nem sérült
- Ha a fenti lépéseket követted, kérdezd meg a [Discord szerveren](https://discord.gg/yD3spjv)
- Ha a szerver azt mondja, hogy ez egy nds-bootstrap hiba, ellenőrizd, hogy a játék jelentésre került-e már a GitHub-ra
    - Ellenőrizd a lezárt jegyeket is, arra az esetre, ha valamelyik hiba lezárásra került egy másik preferálása miatt
    - Ha nem tartozik hozzá GitHub hiba, akkor csinálj neki egy újat
- Ha eddig nem sikerült megoldást találni, kérjük frissítsd a [kompatibilitási listában](https://wiki.ds-homebrew.com/nds-bootstrap/testing)

#### Miért vannak problémák a ROM betöltéssel, ha natívan futnak?
Az nds-bootstrap a ROM funkciókat patcheli, hogy fussanak SD kártyáról, és a ROM hardkódolt a Slot-1 olvasásra. Van néhány időzítési és AP intézkedés (amik nagy része már eltávolított), mind a kettő okozhatja, hogy a ROM-ok nem megfelelően működnek.

#### Miért használjak nds-bootstrap-et a hagyományos flashcard helyett?
- Bizonyos kompatibilis ROM-ok betöltésre kerülnek a RAM-ba, gyorsabb betöltési időket lehetővé téve, mint a normál játék kártyák
- Kibővítheted a VRAM memória buszt 32 bitesre
- Használd a DSi további CPU sebességét, lehetővé téve a jobb teljesítményt néhány játéknál
- Az audiód minőségét javíthatod 48 kHz-re
- Használható a DSi mód, amivel elérhetők a DSi funkciók
- Kisebb akkumulátor fogyasztás
- Using certain Game Cards, you are able to use IR in your application
- nds-bootstrap is open source, meaning developers can always update it to fix bugs and other things, even if the project gets discontinued
- The DS Memory Expansion Pak is emulated, meaning games that require that accessory will work
- Swap top and bottom screens in compatible games for more comfortable gameplay, or on systems with a broken or removed screen
- Take screenshots and edit values in the RAM using the in-game menu

#### DS/DS Lite: Miért használjak nds-bootstrap-et egy DS flashcard-on?
- Bizonyos kompatibilis ROM-ok betöltésre kerülnek a Memory Expansion Pak-ba (vagy RAM-ot tartalmazó Slot-2 flashcard-o memóriájába), gyorsabb betöltési időket lehetővé téve, mint a normál játék kártyák
- 100+ DSiWare titles can be run using built-in patches and a Donor ROM of a DSi-Enhanced title
     - Ne feledd, hogy az nds-bootstrap lesz mindig a DSiWare-hez használva, függetlenül az `nds-bootstrap használata` beállítástól a TWLMenu++ beállításokban
     - Not all DSiWare titles can save, due to the difficulty of adding save support for them, and/or them storing more than one file in the save filesystem.
- Ha a flashcard kernel-ed nem tud futtatni egy bizonyos ROM-ot, akkor az nds-bootstrap használható helyette, és ez játékonként beállítható
- Az alsó és felső képernyő cserélhető a kompatibilis játékoknál a még kényelmesebb játékmenetért, vagy olyan rendszerekhez, ahol törött vagy eltávolított a képernyő
- Take screenshots and edit values in the RAM using the in-game menu

#### Mi az a Donor ROM?
Az nds-bootstrap-ben, amikor egy játék nem bootol, egy másik ROM-ot használunk, hogy "odaadományozza" az ARM7 (és ARM7i, ha van) binárisát a futtatandó játéknak, a játék saját binárisa helyett.     
A Donor ROM beállítható a **TW**i**L**ight Menu++-szal.
- **Flashcard-ok DS módban:** A támogatott DSi-Exklúzív/DSiWare címek DSi-Enhanced ROM készletet igényelnek, mint Donor ROM
- **DSiWarehax:** Mivel a DSi-Enhanced játékok és a (legtöbb) DSi-Exkluzív/DSiWare játék eltérő MBK-beállításokat tartalmaznak, a DSi-Enhanced játékok nem fognak elindulni DSi módban Donor ROM nélkül. Egy DSi-Exkluzív/DSiWare cím Donor ROM-ként való beállításával a DSi-Enhanced játékok képesek lesznek futni a DSiWare cím által beállított MBK-beállításokon belül, amelyen az exploitot használják
     - On DSi, if **TW**i**L**ight Menu++ detects no Donor ROM is set, *Nintendo DSi Sound* and/or a valid exploited title you've launched will automatically be set as Donor ROM(s)
- **CycloDS iEvolution:** Ugyanez a helyzet, mint a DSiWarehax-szal, de a DSi-Exkluzív/DSiWare címekhez DSi-Enhanced játékra lesz szükség, amely Donor ROM-ként van beállítva, nem pedig fordítva

#### Mi a legjobb Donor ROM?
There is no *best* one to use. Most ROMs of TWL titles can be set as a Donor ROM.

Examples:
- **DSiWarehax on DSi:** *Nintendo DSi Sound* and/or a valid exploited title you've launched will automatically be set as Donor ROM(s), if one hasn't been set yet.
- **DSiWarehax on 3DS:** Dump the DS WiFi Settings ROM (SDK5.5) using GodMode9, and set it as a Donor ROM.

#### Miért nem tudok beállítani Donor ROM-ot?
If there's a title requiring a Donor ROM, and the ROM TWLMenu++ stated to find doesn't show the option to set it as one (provided you've scrolled down), then find another ROM to set as a donor.

#### Mi az esti fordítás (nightly) és hol szerezhetem be?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Miért nem működnek a csalásaim?
- Some cheats may have button activators or other conditions that need to be met. Check the description of the cheat for more information
  - In **TW**i**L**ight Menu++, you can press Y to view a specific cheat's information, when available
- Most cheats were developed for use in DS mode and may not work correctly while running in DSi mode. If the game is DSi-Enhanced, try setting it to run in DS mode
- The way E-type cheats are implemented in nds-bootstrap is currently broken, meaning they may or may not work. Your cheat probably uses that type, and it is not known when this issue will be fixed

For more info on cheats, check the [Action Replay cheats section of the Retail ROMs page](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### Hogyan készíthetek képernyőképeket?
Képernyőképeket készíthetsz a fő képernyőről a játékbani menün keresztül. Alapértelmezés szerint a jáékon belüli menü a az <kbd class="l">L</kbd> + <kbd>Le</kbd> + <kbd>SELECT</kbd> gombokra nyílik, ezután válasz a then select `Képernyőkép...` menüpontot, majd módosítsd a VRAM bank-ot, ha szükséges és nyomj <kbd class="face">A</kbd> gombot a képernyőkép mentéséhez.

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
- Ha hibát észlelsz egy játék 133 MHz (TWL) CPU sebességgel futtatásakor, hozz létre egy hibajegyet a [**TW**i**L**ight Menu++ GitHub repository](https://github.com/DS-Homebrew/TWiLightMenu/issues)-ban, leírva a jelenséget, így feketelistázásra kerülhet az ezen a CPU sebességen indításra

#### Fel tudom gyorsítani a játékokat az nds-bootstrap használatával?
Bár a TWL CPU sebesség csökkentheti a lagot, az nds-bootstrap nem képes a tervezettnél nagyobb sebességgel futtatni a játékokat.

#### Át tudom konfigurálni a gombokat nds-bootstrap-pel?
Nem. Mivel az nds-bootstrap natívan futtatja a játékokat, a legtöbb gomb funkcióját nem tudja megváltoztatni. Ennek egyetlen módja ennek a játék módosítása vagy csalókódok használata.

#### Hogyan játszhatok randomizált Pokémon ROM-okat az nds-bootstrap segítségével?
A Pokémon HeartGold/SoulSilver, Black/White és Black 2 / White 2 rendelkezik kalózkodás elleni védelemmel, amelyeket ki kell patchelnii *mielőtt* randomizáljuk a ROM-ot. Ezt a [DS-Scene ROM Tool](https://gbatemp.net/download/35735/)segítségével tudod megtenni.
- A randomizált ROM-okat nem lehet röptében AP-patchelni, mint a játékok vanilla verzióit, mert a ROM-ok randomizálása túl sok egyedi lehetséges kimenettel jár ahhoz, hogy a **TW**i**L**ight Menu++-ba ésszerűen be lehessen tenni

#### Mik azok a DSi binárisok? Hogyan szerezhetem meg őket?
A DSi binárisok a játék kódjának azon részei, amelyeket a DSi (és a 3DS) rendszereken kell használni a DSi funkcióinak, például a kameráknak és a továbbfejlesztett Wi-Fi képességeknek a kihasználására. A régebbi dumpolási módszerek nem biztos, hogy megfelelően dumpolták ezeket.

- A DSi binárisok nélküli ROM-ok továbbra is játszhatók bármely konzolon DS módban, amelyben a játék úgy fut, mintha Nintendo DS Phat/Lite konzolon játszanák

A DSi bináris programokat tartalmazó ROM-hoz a [a játékkártya újradumpolásával](https://wiki.ds-homebrew.com/twilightmenu/faq?faq=how-do-i-get-games) juthatsz hozzá.
