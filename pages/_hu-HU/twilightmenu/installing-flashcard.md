---
lang: hu-HU
layout: wiki
section: twilightmenu
category: installing
title: Telepítés (Flashcard)
long_title: A TWiLight Menu++ telepítése (Flashcard)
description: Hogyan telepítsd a TWiLight Menu++-t Nintendo DS flashcard-ra
---

### Telepítés
1. Töltsd le a legutolsó [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) verziót
1. Csomagold ki `TWiLightMenu-Flashcard.7z` fájlt
1. Másold az `_nds` mappát a flash kártyád microSD kártyájának gyökerébe
1. Másold az `BOOT.NDS` fájlt a flash kártyád microSD kártyájának gyökerébe
1. Másold a `roms` mappát a flash kártyád microSD kártyájának gyökerébe
1. Ha már van mentés adatod, mozgasd a `.sav` fájljaidat, ami a DS ROM lokáción találhatók egy új `saves` nevű mappába, ami szintén DS ROM lokáción található
1. ...
   - **DS Phat/Lite felhasználók:** Ha a `BOOT.NDS` bootolása fehér képernyő fagyást okoz, akkor helyezz be egy DS Memory Expansion Pak-ot és próbáld újra
   - **DSi/3DS felhasználók:** Futtasd a TWLMenu++-t a konzol SD kártyáján és kapcsold be a `SCFG hozzáférést a Slot-1-ben` és állítsd be a `Slot-1: Érintés mód` opciót `DSi mód`-ra
      - Ez lehetővé teszi, hogy használd a TWL óra sebességet és/vagy VRAM gyorsítást a flashcard játékaidon, valamint a hozzáférést a konzol SD kártyájához, és a futtatását DSi-Enhanced/DSi-Exclusive/DSiWare játékoknak DSi módban a flashcard-odról

### Játékok futtatása a flashcard firmware használatával

Vedd figyelemben, hogy nem minden flashcard támogatja a játékok ilyen módon futtatását. Ha az alábbi lépések nem vonatkoznak a flashcard-odra, átugorhatod ezt a szakaszt.
{:.alert .alert-warning}

1. Csomagold ki a `Flashcart Loader/(a te flashcard-od)` mappát a flashcard-od microSD kártyája gyökerébe
   - Ha ezt már megcsináltad, folytasd a 3. lépéssel. Ha még nem, kövesd a flashcard-ok listája alatti lépéseket

1. Ezekhez a flashcard-okhoz:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2020 cards
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi (nem-SDHC modellek ***nem*** támogatottak)
   - M3 DS Real
   - M3i Zero (nem GMP-Z003 modell)
   - iTouchDS és iTouch2 (használd az M3Real_M3iZero YSMenu fájlokat)
   - R4(i)RTS (r4rts.com) (használd az M3Real_M3iZero YSMenu fájlokat)
   - R4 SDHC RTS (feketecartridge) (r4isdhc.com) (használd az M3Real_M3iZero YSMenu fájlokat)

   Telepítsd a [RetroGameFan YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)-jét.
      - Ellenőrizd, hogy az `YSMenu.nds` (átnevezve `TTMenu.dat`-ról, ha nincs ilyen) és a `TTMenu` mappa létezik a flashcard-od microSD kártyájának gyökerében
1. Állítsd be a `Use nds-bootstrap` opciót `Nem`-re, így a flashcard firmware kerül felhasználásra az nds-bootstrap helyett

### TWiLight Menu++ automatikus bootolása
1. Csomagold ki az `Autoboot/(a te flashcard-od)` mappát a flashcard-od microSD kártyája gyökerébe
   - Lépd át ezt, ha nem látod a flashcard-od
1. ...
   - **DS Phat/Lite felhasználók:** Menj a beállításokba a DS menüben és kapcsold be az auto-start-ot, így a flash kártyád fog bootolni induláskor
   - **DSi/3DS felhasználók:** Futtasd a TWLMenu++-t a konzol SD kártyáján és kapcsold be a `Auto-start Slot-1` opciót
