---
lang: hu-HU
layout: faq
section: godmode9i
title: GYIK & hibaelhárítás
long_title: GodMode9i GYIK & hibaelhárítás
description: GYIK & hibaelhárítás a GodMode9i-hez
---

#### Hogyan jutok túl a "mounting drive(s)" képernyőn az induláskor?
Ez akkor történik ha a GodMode9i-t [hiyaCFW](../hiyacfw)-ből indítod. Az <kbd class="face">X</kbd>-et nyomva tartva a GodMode9i indulásakor a NAND csatolás átugorható. Alternatívaként indíthatod a GodMode9i-t közvetlenül az Unlaunch-ből, hogy felcsatolhasd a NAND-ot.

#### Miért nem tudok hozzáadni, eltávolítani vagy szerkeszteni fájlokat a NAND-on?
A fájlok szerkesztése a DSi NAND-on nem biztonságos és könnyen brickeléshez vezethet, így a GodMode9i szándékosan nem tartalmazza ezt a lehetőséget.

#### Miért nem tudom megnézni az NDS fájl információt néhány DSiWare esetén?
Néhány DSiWare, főleg azok, amik a `0003000f` mappában találhatók, rendszer adatot tartalmaznak és nem rendelkeznek érvényes banner-rel.

#### Az NDS vagy a DSi verziót javasolt használnom? Mi a különbség?
Ezek funkcionálisan ugyanazok, de sajátos céljuk van.
- Ha GodMode9i-t használsz flashcard-dal használd az NDS verziót
- Ha a GodMode9i-t telepítesz hiyaCFW SDNAND-odra, használd a DSi verziót
- Ha a GodMode9i-t TWiLight Menu++-szal indítod, mindkét verzió ugyanúgy működik
- Ha a GodMode9i-t telepítesz 3DS HOME Menübe, használd a CIA verziót

#### Hogyan módosítom a nyelvet?
A GodMode9i nyelvét a <kbd>START</kbd> gomb megnyomásával, az adott menü utolsó opciójának kiválasztásával és a kívánt nyelv kiválasztásával változtathatod meg.

Ne feledd, hogy ez csak akkor fog működni, ha a GodMode9i a TWiLight Menu++-ból fut, vagy ha van egy másolata a `GodMode9i.nds`/`GodMode9i.dsi` állománynak az SD kártya gyökerében.

Manuálisan is megadhatod az SD-kártyán lévő bármely fordítási fájl elérési útvonalát a konfigurációs fájlban, `sd:/gm9i/config.ini`, a `LANGUAGE_INI_PATH` bejegyzéssel.

#### Hogyan módosítom a betűkészletet?
A GodMode9i betűtípusát úgy változtathatod meg, hogy kiválasztasz egy `.frf` betűtípus fájlt, majd a `Betűtípus betöltése` lehetőséget. Egy másik betűtípus alapértelmezettként való beállításához vagy helyezd el a `sd:/gm9i/font.frf` helyen, vagy szerkeszd a config fájlt (`sd:/gm9i/config.ini`), hogy a `FONT_PATH` oda mutasson, ahol a betűtípus fájl található.

A GitHub repository [resources](https://github.com/DS-Homebrew/GodMode9i/tree/master/resources/fonts) mappájában találsz néhány előre konvertált betűtípust, és a sajátodat is konvertálhatod a PBM képből és az Unicode leképezéseket tartalmazó TXT fájlból a GodMode9 [fontriff.py](https://github.com/d0k3/GodMode9/blob/master/utils/fontriff.py) szkript segítségével.

#### Hogyan dumpolhatok DS mentéseket a GBA mentés adat használatával?
A GodMode9i képes a GBA cartridge-ek mentési adatainak használatára, ahhoz, hogy dumpold a mentéseket a legtöbb DS játék kártyáról. Az 1 MiB-nál nagyobb ROM és mentési fájlok nem dumpolhatók ilyen módon, mivel a fájlok nem-praktikusan nagy méretűek. Ez a DS flashcard helyett a Haxxstation segítségével is megtehető, ha van más módod a GBA mentési fájlok dumpolására, azok újra össze kombinálhatók és dekompresszálhatók egy számítógépen.

1. Töltsd be a GodMode9i-t a flashcard-odról
1. Mentsd a GBA mentéseid!!
    - Minden mentés adat, ami nem volt mentve el fog veszni
    - Ellenőrizd a fájlokat és keresd meg a nagyobbakat, 512 byte-os kártyák használata nem sokat segít, míg a 64 vagy 128 KiB-osakra a legtöbb DS mentés 1 vagy 2 kártyában elfér
1. A meghajtó menüben nyomj <kbd class="r">R</kbd> + <kbd class="face">B</kbd> gombokat a flashcard lecsatolásához
1. Távolítsd el a flashcard-ot és rakj be egy DS átékkártyát és egy GBA cartridge-t
1. Válaszd az `NDS JÁTÉKKÁRTYA` opciót, majd a `Mentést`-t
1. Ha kérdezi, nyomj <kbd class="face">A</kbd> gombot az adatok GBA kártyára írásához
    - Cserélj másik GBA kártyára, és ezt ismételd, amíg a teljes mentés másolásra nem került
1. Indítsd újra a DS-t a Slot-1 flash kártyádat újra berakva, majd nyisd meg újra a GodMode9i-t
1. Helyezd be az első használt GBA kártyát és válaszd a `GBA JÁTÉKKÁRTYA` lehetőséget
1. Válaszd a `DS mentés`-t
1. Cseréld végig az összes kártyát, amire a mentésed készült
1. A DS mentésed a `fat:/gm9i/out` mappába került, most visszaállíthatod a mentett GBA mentési fájljaidat az eredeti cartridge-re

Ha vissza akarod írni a mentési fájlt a játékkártyára, egyszerűen válaszd ki a `.sav` fájlt, és válaszd a `Mentés visszaállítása (Slot-1)` lehetőséget, majd cseréld ki a flashcardot az NDS Játékkártyára, amikor erre kér a szoftver.
