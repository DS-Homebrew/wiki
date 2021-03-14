---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Kereskedelmi ROM-ok
description: Kereskedelmi DS játékokkal kapcsolatos információk
---

### Anti-Piracy
Az AP (rövidítés az anti-piracy-ra) egy módja annak, hogy a fejlesztők a legális vásárlásokat erőltessék és megelőzzék a kalózkodást. Ez megkerülhető a loaderben és a ROM-ban is egyaránt.

- Az nds-bootstrap céljaira, betölthető egy `.ips` fájl, annak érdekében, hogy, megkerülje azokat a patcheket. Ez az `.ips` fájl az nds-bootstrap-on belül kerül patchelésre, így a ROM fájlok sértetlenek maradnak. Egy `.ips` fájl csomag automatikusan beágyazott a TWiLight Menu++-ba.
- A Wood R4 számára ezek a patchek a szoftverbe vannak ágyazva. Nem szükséges a ROM-ot magadnak módosítanod.

Abban az esetben, ha nincs `.ips` fájl a ROM-jához, vagy a szoftvere nem patcheli a ROM-ját, megpróbálhatja közvetlenül, magának módosítani a ROM-ot ROM [nds-scene eszköz](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/) használatával

### Cloneboot
A Cloneboot az, amikor egy játék elküldi saját betöltött ARM7 és ARM9 binárisát egy másik konzolra. Ez a DS Download Play-hez használt, az egykártyás több játékos játékokhoz. Nem az összes játék, ami támogatja az egykártyás többjátékos játékot használ cloneboot-ot azonban.

Aktuálisan az nds-bootstrap cloneboot patchei töröttek mert az ARM7 és ARM9binárisok patchelésre kerültek, ami az RSA aláírásaikat érvénytelené teszi.

### Mentés fájlok
A Nintendo DS cartridge-ek 4 ismert mentés típussal rendelkeznek:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Habár ritka, léteznek DS cartridge-k NAND alapú mentéssel: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

Különböző formátumok léteznek loader-től függően, de az nds-bootstrap a nyers `.sav` formátumot használja. Ha más formátumot használsz, akkor itt egy weboldal, amit használhat a konverzióra: http://www.shunyweb.info/convert.php

### Gépi kód
Assembly language is any low-level programming language with a strong connection between the language's instructions and the processor's instructions. On the DS, assembly code comes in the form of either ARM or THUMB instructions, THUMB instructions being a subset of the ARM instructions. THUMB is useful to save memory bandwidth as it uses 16-bit instructions over the regular 32-bit instructions that ARM uses. You can find more information on assembly instructions, as well as a lot more technical information for the DS and DSi, on [GBATEK](https://problemkaputt.de/gbatek.htm).

### Kártya olvasás DMA
A kártya DMA (rövidítése a Direct Memory Access-nek, közvetlen memória hozzáférés) egy sokkal hatékonyabb olvasási módja a cartridge adatnak, mint a szoftveres. Ha nincs elérhető adat, a kód futtatása tovább folytatódhat. A szoftveres cartridge adat olvasáskor, a regiszter pollolása, hogy van-e új adat, időt pocsékol. Ez a preferált módja az adathoz hozzáférésnek.

A no$gba észre vehető egy játékról, hogy dma-t használ a DMA log bekapcsolásával az ARM9-en. Egy DMA hozzáférés a kártyához az AF000001 értéket használja harmadik paraméternek.
- Például: `DMA2: 04100010 023C18C0 AF000001`

### Action Replay csalások
Az Action Replay csalás kódok olyan csalás kódok, amik lehetővé teszik, hogy alacsony színtű programozható változásokat intézzen a kedvenc játéka(i) memória régiójában. Ezek a változtatások lehetnek egyszerű érték változtatásoktól kezdve extrém fejlett ASM módosításokig, amik megváltoztathatják a velük játszott játék(ok) élményét.

A flashcard-ok a csalás kódok előnyeit ki tudják használni csalás adatbázisokkal. A csalás funkció integrált a flashcard-ok kernel-ébe. A következő kernel-ek tudnak csalást használni:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew / digitális bázisú megoldások is élvezhetik az előnyeit a csalás-adatbázisoknak; a szoftverek, amik aktuálisan használják őket:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax lehetővé teszi a csalások használatát valódi játék kártyákkal egy flashcard-ról. A motor betölti a teljes cheats.xml adatbázist a Nintendo DS korlátozott RAM-jába, és próbálja onnan menedzselni őket. Ez létrehoz egy erős korlátot, hogy hány csalással rendelkezhet, mert a NitroHax nem tölt be olyan cheats.xml fájlt, ami 2,4 MB feletti méretű
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` or `usrcheat.dat`)
   - NitroHax3DS egy NitroHax verzió, ami a rendszer SD kártyájáról fut DSi-n vagy 3DS-en. Az eredeti verzió a cheats.xml-t a korábbi 2.4 MB korláttal használja, úgy mint az eredeti NitroHax, de létezik belőle olyan fork, ami méretkorlát nélkül tölti be a usrcheat.dat adatbázist
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ olvassa a `usrcheat.dat` fájlt, és kiküldi az engedélyezett csalás értékeket egy másik fájlba, amit az nds-bootstrap fel tud venni
   - Az nds-bootstrap-ban lévő csalás motor a NitroHax-ban is lévőn alapul. Mivel a csalás fájl csak az engedélyezett csalásokat tartalmazza, az adott címhez, csak az az egy korlát marad, hogy hány csalás engedélyezhető egyszerre, az adatbázis mérete már nincs korlátozva
   - Bootstrap 4 DS (másnéven az nds-bootstrap verzió ami a flashcard-okon használt) nem támogatja a csalásokat, mert nem rendelkezik elég RAM-mal, valamint a Memory Expansion Pack korlátozásai miatt

A legteljesebb csalás adatbázishoz ajánljuk a DeadSkullzJr által készített [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711)-t.

A csalás kódok jellemzően A-tól E-ig típusúak, és alább a leírásuk:

- Az 0xE kód típus 32-bites kód, ami lehetővé tesz egyszerre több egymás követő címre írást a memóriába. Lényegében olyan, mint az alap 32 bites RAM írási kódtípus (0x0), azzal a különbséggel, hogy az írandó értékek mellett nem szerepelnek címek. Ezzel szemben a 0xE kód típus úgy programozott, hogy automatikusan elágazzon egy indító címről, és utána döntse el a címet ahova írnia kell. Innentől kezdve, már csak meg kell írni, hogy elvégezze a munkát.
