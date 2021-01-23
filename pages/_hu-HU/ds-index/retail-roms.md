---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Kereskedelmi ROM-ok
description: Information related to retail DS games
---

### Anti-Piracy

Az AP (rövidítés az anti-piracy-ra) egy módja annak, hogy a fejlesztők a legális vásárlásokat erőltessék és megelőzzék a kalózkodást. Ez megkerülhető a loaderben és a ROM-ban is egyaránt.

- Az nds-bootstrap céljaira, betölthető egy `.IPS` fájl, annak érdekében, hogy, megkerülje azokat a patcheket. Ez az `.IPS` fájl az nds-bootstrap-on belül kerül patchelésre, így a ROM fájlok sértetlenek maradnak. Egy `.IPS` fájl csomag automatikusan beágyazott a TWiLight Menu++-ba.
- A Wood R4 számára ezek a patchek a szoftverbe vannak ágyazva. Nem szükséges a ROM-ot magadnak módosítanod.

Abban az esetben, ha nincs `.IPS` fájl a ROM-jához, vagy a szoftvere nem patcheli a ROM-ját, megpróbálhatja közvetlenül, magának módosítani a ROM-ot ROM [nds-scene eszköz](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/) használatával

### CloneBoot

A Cloneboot az, amikor egy játék elküldi saját betöltött arm9/arm7 binárisát egy másik konzolra. Ez a DS Download Play-hez használt, az egykártyás több játékos játékokhoz. Nem az összes játék, ami támogatja az egykártyás többjátékos játékot használ cloneboot-ot.

Aktuálisan az nds-bootstrap cloneboot patchei töröttek mert az arm9/7 binárisok patchelésre kerültek, ami az RSA aláírásaikat érvénytelené teszi.

### Thumb utasítások
A 32-bites hagyományos ARM utasítások helyett a THUMB 16-bites utasításokat használ. Ez hasznos lehet, ha a memória sávszélesség a szűk keresztmetszet.

### Mentés fájlok
A Nintendo DS cartridge-ek 4 ismert mentés típussal rendelkeznek:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Habár ritka, léteznek DS cartridge-k NAND alapú mentéssel: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

Különböző formátumok léteznek loader-től függően, de az nds-bootstrap a nyers `.sav` formátumot használja. Ha más formátumot használ, akkor itt egy weboldal, amit használhat a konverzióra: http://www.shunyweb.info/convert.php

### Kártya olvasás DMA
Card DMA (stands for Direct Memory Access) is a more efficient way to read cartridge data than by software. Ha nincs elérhető adat, a kód futtatása tovább folytatódhat. In software cartridge data reads, polling the register to see if there is new data wastes times. Ez a preferált módja az adathoz hozzáférésnek.

A no$gba észre vehető egy játékról, hogy dma-t használ a DMA log bekapcsolásával az ARM9-en. Egy DMA hozzáférés a kártyához az AF000001 értéket használja harmadik paraméternek.
- Például: `DMA2: 04100010 023C18C0 AF000001`

### Donor ROM

A korábbi nds-bootstrap verziókban egy Mario Kart DS ROM volt szükséges az SDK3-4 játékoknak, hogy működjenek vagy mentsenek. A ROM mint Donor ROM viselkedett. Az nds-bootstrap veszi a donor arm7 binárisát, lecseréli a vele az eredeti ROM arm7 binárisát, annak érdekében, hogy a mentés patchek működjenek, néhány mellékhatással eredményként. Későbbi nds-bootstrap verziókban egy Donor ROM szükséges bizonyos THUMB vagy SDK5 játékoknak, hogy bootoljanak, vagy mentsenek.

### Action Replay csalások

Az Action Replay csalás kódok olyan csalás kódok, amik lehetővé teszik, hogy alacsony színtű programozható változásokat intézzen a kedvenc játéka(i) memória régiójában. Ezek a változtatások lehetnek egyszerű érték változtatásoktól kezdve extrém fejlett ASM módosításokig, amik megváltoztathatják a velük játszott játék(ok) élményét.

Flashcards can take advantage of cheat codes by using cheat databases. Cheat functionality is integrated within the flashcard kernel respectively. A következő kernel-ek tudnak csalást használni:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digitális bázisú megoldások is élvezhetik az előnyeit a csalás-adatbázisoknak; a szoftverek, amik aktuálisan használják őket:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
  - NitroHax lets you use cheats with real game cards from a flashcard. The engine used here loads the entire cheats.xml database into the Nintendo DS's limited RAM and tries to manage things from there. This imposes a serious limit on how many cheats you can have, as NitroHax will not load a cheats.xml file past 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` or `usrcheat.dat`)
  - NitroHax3DS is a version of NitroHax that runs from the system's SD card on DSi or 3DS. The original version uses cheats.xml with the same 2.4 MB limit as the original NitroHax, but there is also a fork that loads cheats from a usrcheat.dat database with no size limitation
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
  - TWiLight Menu++ reads the `usrcheat.dat` and sends off the enabled cheat values to another file, which nds-bootstrap picks up
  - The cheat engine used in nds-bootstrap is based on the one used in NitroHax. However, due to the cheat file containing only enabled cheats for that specific title, there is only a limit to how many cheats can be enabled, not a limit on the database size
  - Bootstrap 4 DS (the nds-bootstrap version used on flashcards) does not support cheats, due to not having enough RAM and the limitations of the Memory Expansion Pack

For the most complete cheat database, we recommend using the one made by DeadSkullzJr titled [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

A csalás kódok jellemzően A-tl E-ig típusúak, és alább a leírásuk:

- The 0xE code type is a 32-bit code type that allows you to make multiple writes in many consecutive addresses all at once. Lényegében olyan, mint az alap 32 bites RAM írási kódtípus (0x0), azzal a különbséggel, hogy az írandó értékek mellett nem szerepelnek címek. Ezzel szemben a 0xE kód típus úgy programozott, hogy automatikusan elágazzon egy indító címről, és utána döntse el a címet ahova írnia kell. Innentől kezdve, már csak meg kell írni, hogy elvégezze a munkát.

Készítők: (`DeadSkullzJr`)
