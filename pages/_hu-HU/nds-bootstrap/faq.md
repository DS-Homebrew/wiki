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

#### Mi az a Donor ROM?
Az nds-bootstrap-ben, amikor egy játék nem bootol, egy másik ROM-ot használunk, hogy "odaadományozza" az ARM7 (és ARM7i, ha van) binárisát a futtatandó játéknak, a játék saját binárisa helyett. A legtöbb játék beállítható Donor ROM-nak (ami a **TW**i**L**ight Menu++-szal tehető meg) és mind a játéknak amit indítani szeretnél, mind a donornak ugyanazt az SDK verziót kell tartalmaznia.
- **Flashcard-ok DS módban:** A néhány támogatott DSi-Exklúzív cím DSi-Enhanced ROM készletet igényel, mint Donor ROM.
- **DSiWarehax:** Mivel a DSi-Enhanced játékok és a DSi-Exkluzív/DSiWare játékok eltérő MBK-beállításokat tartalmaznak, a DSi-Enhanced játékok nem fognak elindulni DSi módban Donor ROM nélkül. Egy DSi-Exkluzív/DSiWare cím Donor ROM-ként való beállításával a DSi-Enhanced játékok képesek lesznek futni a DSiWare cím által beállított MBK-beállításokon belül, amelyen az exploitot használják.
- **CycloDS iEvolution:** Ugyanez a helyzet, mint a DSiWarehax-szal, de a DSi-Exkluzív/DSiWare címekhez DSi-Enhanced játékra lesz szükség, amely Donor ROM-ként van beállítva, nem pedig fordítva.

#### Mi a legjobb Donor ROM?
Nincs *legjobb*, amit használni kellene, bár előnyösebb, ha egy 0-nál magasabb alverziót tartalmazó SDK5 ROM-ot állítunk be. Azonban ha DSiWarehax felhasználó vagy és nincs létező DSiWare ROM-od, dumpolhatod a *Nintendo DSi Sound*-et (SDK5.0) a GodMode9**i** használatával, és beállíthatpd a DSi Sound-ot, mint Donor ROM. Ha azonban 3DS konzolod van, akkor célszerű a DS WiFi Settings ROM-ot (SDK5.5) a GodMode9 segítségével dumpolni, és helyette a DS WiFi Settings-t Donor ROM-ként beállítani, mivel így a DSiWare-ben 9 másodperc várakozás nélkül aktiválható az alvó üzemmód.

#### Miért nem tudok beállítani Donor ROM-ot?
Ha van egy cím, amelyhez donor ROM-ra van szükség, és a TWLMenu által keresett ROM nem mutatja meg a lehetőséget, hogy donor ROM-nak állítsd be (feltéve, hogy lefelé görgetsz), akkor keress egy másik ROM-ot, amelyet donornak állíthatsz be.

#### Mi az esti fordítás (nightly) és hol szerezhetem be?
Az esti fordítás egy fordítás a legutolsó változtatásokkal. Az esti fordítások instabilak lehetnek, de tartalmazzák a legutolsó hibajavításokat. Az nds-bootstrap esti fordításokat beszerezheted [innen](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Miért nem működnek a csalásaim?
A mód, ahogy az E csalás típusok implementálva vannak az nds-bootstrap-ben hibás, ami azt jelenti, hogy az esetek felében működnek. A csalás, amit használsz valószínűleg ilyen típusú. Ez nem a csalás adatbázis hibája, hanem inkább az nds-bootstrap-pé. Kérjük ne kérd ezen csalások törlését az adatbázisból.

További információkért a csalásokról látogass el [Action Replay csalás fejezethez a Kereskedelmi ROM-ok oldalon](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### Hogyan készíthetek képernyőképeket?
Képernyőképeket készíthetsz a játékbani menü fő képernyőjéről. Alapértelmezés szerint a játékon belüli menü a az <kbd class="l">L</kbd> + <kbd>Le</kbd> + <kbd>SELECT</kbd> gombokra nyílik, ezután válasz a then select `Képernyőkép...` menüpontot, majd módosítsd a VRAM bank-ot, ha szükséges és nyomj <kbd class="face">A</kbd> gombot a képernyőkép mentéséhez.

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
