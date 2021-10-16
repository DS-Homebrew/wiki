---
lang: hu-HU
layout: wiki
section: other
title: GodMode9i
description: Információ a GodMode9i-ről
---

A [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/) egy open source fájl böngésző a Nintendo DS ökoszisztémára, ami a GodMode9-ből nyert inspirációt a Nintendo 3DS-ről. A GodMode9i-nek megvan a képessége, hogy dumpoljon játékokat, kezeljen SD kártya fájlokat, tallózza NitroFS-t, kiszámolja az SHA1 hash-ét a fájloknak, bináris fájlok szerkesztését egy hex editor és még többel.

## Dumpolás funkcionalitás

A játékok dumpolásához válaszd ki a meghajtót a meghajtó listában és kövesd a képernyőn megjelenő utasításokat.
- A Nintendo DS és Nintendo DS Lite konzolon a GodMode9i tud dumpolni Slot-2 cartridge-eket, ha Slot-1 flashcard-ról fut, vagy Slot-1 játék kártyákat, ha a GodMode9i egy Slot-2 flashcard-ról fut
- A Nintendo DSi rendszer családban Unlaunch szükséges a Slot-1 játékok SD kártyára dumpolásához
   - Kövesd a [dsi.cfw.guide](https://dsi.cfw.guide/) útmutató lépéseit az Unlaunch telepítéséről
- A Nintendo 3DS rendszer családban egy modern CFW környezet szükséges a GodMode9i indításához
   - Kövesd a [hacks.guide](https://3ds.hacks.guide/) útmutató lépéseit a Luma3DS + boot9strap telepítéséről

## Hibaelhárítás & GYIK

#### Hogyan jutok túl a "mounting drive(s)" az induláskor?
Ez akkor történik ha a GodMode9i-t [hiyaCFW](../hiyacfw)-ből indítod. Az <kbd class="face">X</kbd>-et nyomva tartva a GodMode9i indulásakor a NAND csatolás átugorható. Alternatívaként indíthatod a GodMode9i-t közvetlenük az Unlaunch-ből, hogy felcsatolhasd a NAND-ot.

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
