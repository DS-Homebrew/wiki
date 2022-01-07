---
lang: hu-HU
layout: wiki
section: nds-bootstrap
title: Fogalomjegyzék
description: Fogalomjegyzék az nds-bootstrap-hez
---

## Beállítások
Ezek a TWiLight Menu++ játékonkénti beállításai között találhatók. Néhány opciót az nds-bootstrap játékon belüli menüjében is meg lehet változtatni

### SDK ver
A szoftverfejlesztő készlet (SDK) verziója, amelyet a ROM lefordításához használtak.

### Mentés szám
A játék mentési fájljának a `.savX` fájlkiterjesztés lesz, ahol X az adott mentési szám, ha a mentési szám nem 0. Ez akár 10 mentési fájlt is lehetővé tesz ugyanahhoz a ROM-hoz.

### Futtatás mód
A mód amiben a ROM-nak futnia kell. Ez az ARM9 CPU sebesség és a VRAM mód beállításait érinti. A DSi Mode beállítása olyan ROM-ok esetében, amelyek nem támogatják az, valószínűleg hatás nélküli.

### ARM9 CPU sebesség
Módosítja az ARM9 CPU futási sebességét. A DS módban futtatott ROM-ok alapértelmezés szerint 67 Mhz-et (NTR) használnak. Ez 133 Mhz-re (TWL) módosítható a lassulások csökkentése érdekében, de ez is okozhat problémákat. A DSi módban futtatott ROM-ok csak 133 Mhz-re (TWL) állíthatók be.

### VRAM mód
Módosítja a rendszer Video Random Access Memory (VRAM) üzemmódját. A DS módban futtatott ROM-ok alapértelmezés szerint a DS VRAM módot használják. Ez megváltoztatható DSi VRAM módra, de ez nem csinál semmit, és vizuális problémákat okozhat. A DSi módban futtatott ROM-ok csak DSi VRAM módra állíthatók be.

### Kártya olvasás DMA
Engedélyezi a közvetlen memória-hozzáférés (DMA) használatát a kártya olvasáshoz. Ennek a beállításnak a bekapcsolása felgyorsíthatja a ROM-okat, de problémákat okozhat. További technikai információk a [DS Index](https://wiki.ds-homebrew.com/ds-index/retail-roms#card-read-dma) oldalon találhatók.

### SWI Halt-ra csatlakozás
Megváltoztatja, hogy a Halt Software Interrupts (SWI) csatlakoztatva vannak-e vagy sem. Ha bekapcsolva van, az felgyorsíthatja a betöltési időt, de problémákat okozhat. A kikapcsolt állapotban tartás a lassulásokat is csökkentheti.

### ROM  bővítés RAM-ban
Ha egy játék elég kicsi, akkor a betöltési idő felgyorsítása érdekében a rendszer RAM memóriájába tölthető. Az opciót bekapcsolása, megnöveli a ROM-ok méretkorlátot, de néhány hibás lehet.

### Közvetlen boot
Csak a homebrew ROM-ok esetében jelenik meg. Ha ezt a beállítást bekapcsolt nem használja az nds-bootstrap-et a ROM indításakor. Ez olyan homebrew ROM-ok esetében hasznos, amelyeknek nincs szükségük az nds-bootstrap-re, vagy nem működnek vele.

### Bootstrap
Módosíthatod, hogy a ROM az nds-bootstrap Kiadás (Release) vagy Esti fordítás (Nightly) build-jével fusson-e. Az Esti (Nightly) buildek-kel kapcsolatos információk a [nds-bootstrap GYIK](https://wiki.ds-homebrew.com/nds-bootstrap/faq?faq=what-is-a-nightly-and-where-do-i-get-it) oldalon találhatók

### Képernyő arány
3DS esetén a képernyő képaránya 4:3 (alapértelmezett a DS/DSi esetében) helyett 16:10-re változtatható. Csak akkor működik, ha a [széles képernyő engedélyezett](https://wiki.ds-homebrew.com/twilightmenu/playing-in-widescreen).