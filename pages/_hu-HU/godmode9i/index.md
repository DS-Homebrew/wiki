---
lang: hu-HU
layout: wiki
section: godmode9i
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

### Restoring saves
GodMode9i can also restore save files to DS Game Cards/GBA cartridges. This is done by selecting the `.sav` file on your SD card while the Game Card/cartridge is inserted and choosing `Restore save`.
