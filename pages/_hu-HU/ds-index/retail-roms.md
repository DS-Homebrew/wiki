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

- For nds-bootstrap's purposes, you can load an `.ips` file in order to circumvent said patches. This `.ips` file will be patched inside nds-bootstrap, so you can keep the ROM files intact. A pack of `.ips` files are automatically included with TWiLight Menu++.
- A Wood R4 számára ezek a patchek a szoftverbe vannak ágyazva. Nem szükséges a ROM-ot magadnak módosítanod.

In case there isn't a `.ips` file for your ROM or your software didn't patch your ROM, you can try directly modifying the ROM itself using [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### Cloneboot
Cloneboot is when a game sends it's own loaded ARM7 and ARM9 binaries to another console. It is used by DS Download Play for single-card multiplayer. Though, not all games that have single-card multiplayer uses cloneboot.

Currently, nds-bootstrap's cloneboot patches is broken due to the ARM7 and ARM9 binaries being patched, which makes the RSA signatures invalid.

### Save Files
Nintendo DS cartridges have 4 known save types:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Though rare, there are DS Cartridges with NAND based saves: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

There are different formats to use depending on the loader, but nds-bootstrap uses the raw `.sav` format. If you use a different format, here is a website you can use to convert it: http://www.shunyweb.info/convert.php

### Assembly
Assembly is the native language used for all DS software. Assembly code comes in the form of either ARM or THUMB instructions. THUMB instructions are a subset of the ARM instructions. THUMB is useful to save memory bandwidth as it uses 16-bit instrcutions over the regular 32-bit instructions that ARM uses. You can find more info on Assembly instructions, as well as a lot more technical information for the DS and DSi, at [gbatek](https://problemkaputt.de/gbatek.htm).

### Kártya olvasás DMA
A kártya DMA (rövidítése a Direct Memory Access-nek, közvetlen memória hozzáférés) egy sokkal hatékonyabb olvasási módja a cartridge adatnak, mint a szoftveres. Ha nincs elérhető adat, a kód futtatása tovább folytatódhat. A szoftveres cartridge adat olvasáskor, a regiszter pollolása, hogy van-e új adat, időt pocsékol. Ez a preferált módja az adathoz hozzáférésnek.

A no$gba észre vehető egy játékról, hogy dma-t használ a DMA log bekapcsolásával az ARM9-en. Egy DMA hozzáférés a kártyához az AF000001 értéket használja harmadik paraméternek.
- Például: `DMA2: 04100010 023C18C0 AF000001`

### Action Replay Cheats
Action Replay cheat codes are codes that allow you to make low-level programmable changes in the memory region of your favorite game(s). These changes range from simple value tweaks to extremely advanced ASM tweaks, both of which can alter the experience of the game(s) being played altogether.

Flashcards can take advantage of cheat codes by using cheat databases. Cheat functionality is integrated within the flashcard kernel respectively. The following kernels can utilize cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
  - NitroHax lehetővé teszi a csalások használatát valódi játék kártyákkal egy flashcard-ról. A motor betölti a teljes cheats.xml adatbázist a Nintendo DS korlátozott RAM-jába, és próbálja onnan menedzselni őket. Ez létrehoz egy erős korlátot, hogy hány csalással rendelkezhet, mert a NitroHax nem tölt be olyan cheats.xml fájlt, ami 2,4 MB feletti méretű
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` or `usrcheat.dat`)
  - NitroHax3DS egy NitroHax verzió, ami a rendszer SD kártyájáról fut DSi-n vagy 3DS-en. Az eredeti verzió a cheats.xml-t a korábbi 2.4 MB korláttal használja, úgy mint az eredeti NitroHax, de létezik belőle olyan fork, ami méretkorlát nélkül tölti be a usrcheat.dat adatbázist
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
  - TWiLight Menu++ olvassa a `usrcheat.dat` fájlt, és kiküldi az engedélyezett csalás értékeket egy másik fájlba, amit az nds-bootstrap fel tud venni
  - Az nds-bootstrap-ban lévő csalás motor a NitroHax-ban is lévőn alapul. Mivel a csalás fájl csak az engedélyezett csalásokat tartalmazza, az adott címhez, csak az az egy korlát marad, hogy hány csalás engedélyezhető egyszerre, az adatbázis mérete már nincs korlátozva
  - Bootstrap 4 DS (másnéven az nds-bootstrap verzió ami a flashcard-okon használt) nem támogatja a csalásokat, mert nem rendelkezik elég RAM-mal, valamint a Memory Expansion Pack korlátozásai miatt

For the most complete cheat database, we recommend using the one made by DeadSkullzJr titled [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Cheat codes generally have types A through E, and here is a description of them:

- Az 0xE kód típus 32-bites kód, ami lehetővé tesz egyszerre több egymás követő címre írást a memóriába. Lényegében olyan, mint az alap 32 bites RAM írási kódtípus (0x0), azzal a különbséggel, hogy az írandó értékek mellett nem szerepelnek címek. Ezzel szemben a 0xE kód típus úgy programozott, hogy automatikusan elágazzon egy indító címről, és utána döntse el a címet ahova írnia kell. Innentől kezdve, már csak meg kell írni, hogy elvégezze a munkát.
