---
lang: hu-HU
layout: wiki
section: ds-index
title: Kereskedelmi ROM-ok
description: Minden a DS moddolásról
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
A kártya DMA (rövidítése a Direct Memory Access-nek, közvetlen memória hozzáférés) egy sokkal hatékonyabb olvasási módja a cartridge adatnak, mint a szoftveres. Ha nincs elérhető adat, a kód futtatása tovább folytatódhat. A szoftveres cartridge adat olvasáskor, a regiszter pollolása, hogy van-e új adat, időt pocsékol. Ez a preferált módja az adathoz hozzáférésnek.

A no$gba észre vehető egy játékról, hogy dma-t használ a DMA log bekapcsolásával az ARM9-en. Egy DMA hozzáférés a kártyához az AF000001 értéket használja harmadik paraméternek.
- Például: `DMA2: 04100010 023C18C0 AF000001`

### Donor ROM

A korábbi nds-bootstrap verziókban egy Mario Kart DS ROM volt szükséges az SDK3-4 játékoknak, hogy működjenek vagy mentsenek. A ROM mint Donor ROM viselkedett. Az nds-bootstrap veszi a donor arm7 binárisát, lecseréli a vele az eredeti ROM arm7 binárisát, annak érdekében, hogy a mentés patchek működjenek, néhány mellékhatással eredményként. Későbbi nds-bootstrap verziókban egy Donor ROM szükséges bizonyos THUMB vagy SDK5 játékoknak, hogy bootoljanak, vagy mentsenek.

### Action Replay csalások

Az Action Replay csalás kódok olyan csalás kódok, amik lehetővé teszik, hogy alacsony színtű programozható változásokat intézzen a kedvenc játéka(i) memória régiójában. Ezek a változtatások lehetnek egyszerű érték változtatásoktól kezdve extrém fejlett ASM módosításokig, amik megváltoztathatják a velük játszott játék(ok) élményét.

A flashcart-ok a csalás kódok előnyeit ki tudják használni csalás adatbázisokkal. A csalás funkció integrált a flashcart-ok kernel-ébe. A következő kernel-ek tudnak csalást használni:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digitális bázisú megoldások is élvezhetik az előnyeit a csalás-adatbázisoknak; a szoftverek, amik aktuálisan használják őket:
- NitroHax (`cheats.xml`)
  - A motor betölti a teljes cheats.xml adatbázist a Nintendo DS korlátozott RAM-jába, és próbálja onnan menedzselni őket. Ez létrehoz egy erős korlátot, hogy hány csalással rendelkezhet, mert a NitroHax nem tölti be olyan cheats.xml fájlt, ami 2,4 MB feletti
- TWiLight Menu++ (`usrcheat.dat`)
  - TWiLight Menu++ olvassa a `usrcheat.dat` fájlt, és kiküldi az engedélyezett csalás értékeket egy másik fájlba, amit az nds-bootstrap fel tud venni
  - Az nds-bootstrap-ban lévő csalás motor a NitroHax-ban is lévőn alapul. Azonban, mivel a csalás fájl csak az engedélyezett csalásokat tartalmazza megadott címhez, a csalás fájlnak nincs valódi korlátja.
  - Bootstrap 4 DS (másnéven az nds-bootstrap verzió ami a flashcart-okon használt) nem támogatja a csalásokat, mert nem rendelkezik elég RAM-mal, valamint a Memory Expansion Pack korlátozásai miatt.

A legteljesebb csalás adatbázishoz ajánljuk a DeadSkullzJr által készített [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711/page-38#post-9090779)-t

A csalás kódok jellemzően A-tl E-ig típusúak, és alább a leírásuk:

- Az 0xE kód típus 32-bites kód, ami lehetővé tesz egyszerre több egymás követő címre írást a memóriába. Lényegében olyan, mint az alap 32 bites RAM írási kódtípus (0x0), azzal a különbséggel, hogy az írandó értékek mellett nem szerepelnek címek. Ezzel szemben a 0xE kód típus úgy programozott, hogy automatikusan elágazzon egy indító címről, és utána döntse el a címet ahova írnia kell. Innentől kezdve, már csak meg kell írni, hogy elvégezze a munkát.

Készítők: (`DeadSkullzJr`)
