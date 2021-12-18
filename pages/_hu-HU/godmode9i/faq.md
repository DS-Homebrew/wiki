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
A GodMode9i nyelvét a <kbd>START</kbd>gomb megnyomásával, az adott menü utolsó opciójának kiválasztásával és a kívánt nyelv kiválasztásával változtathatod meg.

Ne feledd, hogy ez csak akkor fog működni, ha a GodMode9i a TWiLight Menu++-ból fut, vagy ha van egy másolata a `GodMode9i.nds`/`GodMode9i.dsi` állománynak az SD kártya gyökerében.

Manuálisan is megadhatod az SD-kártyán lévő bármely fordítási fájl elérési útvonalát a konfigurációs fájlban, `sd:/gm9i/config.ini`, a `LANGUAGE_INI_PATH` bejegyzéssel.

#### Hogyan módosítom a betűkészletet?
A GodMode9i betűtípusát úgy változtathatod meg, hogy kiválasztasz egy `.frf` betűtípus fájlt, majd a `Betűtípus betöltése`lehetőséget. Egy másik betűtípus alapértelmezettként való beállításához vagy helyezd el a `sd:/gm9i/font.frf` helyen, vagy szerkeszd a config fájlt (`sd:/gm9i/config.ini`), hogy a `FONT_PATH` oda mutasson, ahol a betűtípus fájl található.

You can find a few pre-converted fonts in the [resources folder](https://github.com/DS-Homebrew/GodMode9i/tree/master/resources/fonts) of the GitHub repository and you can convert your own from a PBM image and TXT file containing the Unicode mappings using GodMode9's [fontriff.py](https://github.com/d0k3/GodMode9/blob/master/utils/fontriff.py) script.
