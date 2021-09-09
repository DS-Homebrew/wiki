---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Kereskedelmi ROM-ok
description: Kereskedelmi DS játékokkal kapcsolatos információk
---

### Anti-Piracy
Az AP (Anti-Piracy) egy módja annak, hogy a fejlesztők a legális vásárlásokat erőltessék és megelőzzék a kalózkodást. Ez megkerülhető a loaderben és a ROM-ban is egyaránt.

- Az nds-bootstrap számára betölthető egy `.ips` fájl, annak érdekében, hogy, megkerüld az említett patcheket. Ez az `.ips` fájl az nds-bootstrap-on belül a RAM-ban kerül felhasználásra, így a ROM fájlok sértetlenek maradnak. Egy `.ips` fájl csomag automatikusan beágyazott a TWiLight Menu++-ba
- A Wood R4-hez ezek a patchek beágyazottak a szoftverbe, így nem szükséges a ROM-ok módosítása

Abban az esetben, ha nincs `.ips` fájl a ROM-jához, vagy a szoftvere nem patcheli a ROM-ját, megpróbálhatja közvetlenül, magának módosítani a ROM-ot az [DS-Scene ROM Tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/) használatával.

### Cloneboot
A Cloneboot az, amikor egy játék elküldi saját betöltött ARM7 és ARM9 binárisát egy másik konzolra. Ez a DS Download Play-hez használt, az egykártyás több játékos játékokhoz. Nem az összes játék, ami támogatja az egykártyás többjátékos játékot használ cloneboot-ot azonban.

### Mentés fájlok
A Nintendo DS cartridge-ek 4 ismert mentés típussal rendelkeznek:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Különböző formátumok léteznek loader-től függően, de az nds-bootstrap a nyers `.sav` formátumot használja. Ha más formátumú mentéseid vannak, akkor itt egy weboldal, amit használhatsz a konverzióra: http://www.shunyweb.info/convert.php.

### Gépi kód
Az assembly nyelv egy alacsony szintű programozási nyelv, erős kapcsolattal a nyelv parancsai és a processzor parancsai között. A DS-en az assembly kód lehet ARM és THUMB utasítás, a THUMB utasítások az ARM utasítások egy részhalmaza. A THUMB hasznos a memória sávszélesség spóroláshoz, mert 16 bites parancsokat használ a 32 bites ARM parancsok helyett.

További információkat találhatsz a gépi kódú utasításokról és sok más technikai információt a DS-ről és a DSi-ről a [GBATEK](https://problemkaputt.de/gbatek.htm) oldalán.

### Kártya olvasás DMA
A kártya DMA (Direct Memory Access, közvetlen memória hozzáférés) egy sokkal hatékonyabb olvasási módja a cartridge adatnak, mint a CPU által. Amíg az adat átvitel alatt van a kód tovább futhat, így ez a preferált módja az adathozzáférésnek.

A no$gba-ban észre vehető egy játékról, hogy DMA-t használ a DMA log bekapcsolásával az ARM9-en. Egy DMA hozzáférés a kártyához az AF000001 értéket használja harmadik paraméternek.
- Például: `DMA2: 04100010 023C18C0 AF000001`

### Action Replay csalások
Az Action Replay csalás kódok olyan csalás kódok, amik lehetővé teszik, hogy alacsony színtű programozható változásokat intézzen a kedvenc játéka(i) memória régiójában. Ezek a változtatások lehetnek egyszerű érték változtatásoktól kezdve extrém fejlett ASM módosításokig, amik megváltoztathatják a velük játszott játék(ok) élményét.

A flashcardok a csalás kódok előnyeit ki tudják használni csalás adatbázisokkal. A csalás funkció integrált a flashcard-ok kernel-ébe. A következő kernel-ek tudnak csalást használni:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digitális bázisú megoldások is élvezhetik az előnyeit a csalás-adatbázisoknak; a szoftverek, amik aktuálisan használják őket:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax lehetővé teszi a csalások használatát valódi játék kártyákkal egy flashcard-ról. A motor betölti a teljes cheats.xml adatbázist a Nintendo DS korlátozott RAM-jába, és próbálja onnan menedzselni őket. Ez létrehoz egy erős korlátot, hogy hány csalással rendelkezhet, mert a NitroHax nem tölt be olyan cheats.xml fájlt, ami 2,4 MB feletti méretű
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` or `usrcheat.dat`)
   - NitroHax3DS egy NitroHax verzió, ami a rendszer SD kártyájáról fut DSi-n vagy 3DS-en. Az eredeti verzió a cheats.xml-t a korábbi 2.4 MB korláttal használja, úgy mint az eredeti NitroHax, de létezik belőle olyan fork, ami méretkorlát nélkül tölti be a usrcheat.dat adatbázist
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ olvassa a `usrcheat.dat` fájlt, és kiküldi az engedélyezett csalás értékeket egy másik fájlba, amit az nds-bootstrap fel tud venni
   - Az nds-bootstrap-ban lévő csalás motor a NitroHax-ban is lévőn alapul. Mivel a csalás fájl csak az engedélyezett csalásokat tartalmazza, az adott címhez, csak az az egy korlát marad, hogy hány csalás engedélyezhető egyszerre, az adatbázis mérete már nincs korlátozva

A legteljesebb csalás adatbázis a [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711) ajánlott.

A csalás kódok jellemzően 0-tól F-ig típusúak, és alább egy (befejezettlen) leírásuk:

- Az 0xE kód típus 32-bites kód, ami lehetővé tesz egyszerre több egymás követő címre írást a memóriába. Lényegében olyan, mint az alap 32 bites RAM írási kódtípus (0x0), azzal a különbséggel, hogy az írandó értékek mellett nem szerepelnek címek. Ezzel szemben a 0xE kód típus úgy programozott, hogy automatikusan elágazzon egy indító címről, és utána döntse el a címet ahova írnia kell. Innentől kezdve, már csak meg kell írni, hogy elvégezze a munkát
  - Ismert, hogy ezek a típusú csalás kódok jelenleg nem működnek nds-bootstrap-pel
- DeadSkullzJr dolgozik egy sokkal részletesebb csalás kód leírás listával, amit ez a fejezet linkelni fog, ha elkészül

### Demonstrációs és terjesztési címek:
A demonstrációs (Demo) címek eltérnek a dobozos verziójuktól különböző módokon. Nyilvánvaló jelzése egy címnek, hogy demo, ami csak bemutatja, hogy fog kinézni a kereskedelmi verzió, gyakorlatilag egy bepillantás abba, mi várható a jövőben, amikor a teljes kiadás megjelenik. A Nintendo DS termékvonal esetében ezek a címek "Not for Resale" jelzést kaptak a cím címkéken és minden demo eltérő cím ID-val rendelkezik a kereskedelmi verziótól a cartridge hátoldalán egy "Not for Resale" matrica is megtalálható. Ezek a címek többnyire kioszk demók promóciós helyeken a boltokban.

A terjesztési címek az esetek többségében más szituáció, habár a demók bele férnek a terjesztési címek közé néhány cím esetén. A legtöbb esetben a terjesztési címek kereskedelmi verziói a címeknek, amelyek kiállításra szolgálnak vagy valamilyen promócionális csomagolásból származnak. Ugyanúgy láthatod a "Not for Resale" címkét ezeken a címeken, mint a demonstrációs címeken. Ezek néha kioszkokban használtak, hogy lehetővé tegyék más játékosoknak, hogy kipróbálják a címeket. Habár tudjuk, hogy gyakorlatilag megegyeznek a kereskedelmi verzióval az esetek többségében, külön azonosítóval rendelkeznek a cím ID-n a címkén.

Példa ID: `DIS-NTR-NTRJ-JPN`

`DIS` - Disztribúció


### Cím címkék
A cím címke alján megtalálható a cím ID, további információkkal, ebben a példában a következő ID-t használjuk:

- NTR-NTRJ-**XXX**

Az **XXX** a következőket jelenti:

- AUS - Ausztrália
- CHN - Kína
- DEN - Dánia
- EUR - Europa (többnyelvű)
- EUU - Europa (csak Holland vagy Olasz)
- FRA - Franciaország
- GER - Németország
- HOL - Hollandia
- ITA - Olaszország
- JPN - Japán
- KOR - Korea
- NOE - Europa (csak német)
- NOR - Norvégia
- RUS - Oroszország
- SPA - Spanyolország
- UKV - Egyesült Királyság
- USA - Egyesült Államok

Az cím ID utolsó betűje a cím nyelvét adja meg. Az utolsó példa cím ID-ját használva:

- NTR-NTR**X**-JPN

Az **X** a következőt jelenti:

- A - Világ (nem számít, mert csak egy dolog használja)
- C - Kínai (egyszerűsített)
- D - Német
- E - Amerikai Angol
- F - Francia
- G - Görög
- H - Holland
- I - Olasz
- J - Japán
- K - Koreai
- M - Svéd
- N - Norvég
- O - Angol (DSi Enhanced)
- P - Európai többnyelvű
- Q - Dán
- R - Orosz
- S - Spanyol
- T - Angol (DSi Enhanced)
- U - Ausztrál Angol
- V - Brit Angol
- W - Egyéb nyelvek (Változó)
- X - Egyéb nyelvek (Változó)
- Y - Egyéb nyelvek (Változó)
- Z - Egyéb nyelvek (Változó)

A rendszer azonosítók terminológiájában:

- NTR - Nitro - Nintendo DS
- TWL - Twilight - Nintendo DSi

### DSi Enhanced:

A "DSi Enhanced" funkcionalitással rendelkező játékok olyan játékok, amelyek igénybe veszik a DSi hardver néhány aspektusát, de továbbra is kompatibilisek maradnak a DS Phat/Lite-tal. Ezek a játékok `TWL` jelölésűek, de továbbra is "Nintendo DS" jelölésűek a címkén "Nintendo DSi" helyett.
