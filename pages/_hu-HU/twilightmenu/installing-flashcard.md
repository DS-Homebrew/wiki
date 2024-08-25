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
   - Ha nem tölt le, tekintsd meg a [release oldalt](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Nyisd meg vagy csomagold ki a `TWiLightMenu-Flashcard.7z` fájlt
1. Húzd az `_nds` mappát a flash kártyád microSD kártyájának gyökerébe
1. Húzd a `BOOT.NDS` fájlt a flash kártyád microSD kártyájának gyökerébe
1. Húzd a `roms` mappát a flash kártyád microSD kártyájának gyökerébe
1. Ha már van mentés adatod, mozgasd a `.sav` fájljaidat, ami a DS ROM lokáción találhatók egy új `saves` nevű mappába, ami szintén DS ROM lokáción található
1. **DS Phat/Lite felhasználók:** Ha a `BOOT.NDS` bootolása fehér képernyő fagyást okoz, akkor kövesd az alábbi lépéseket az autobootoláshoz és/vagy helyezz be egy DS Memory Expansion Pak-ot és próbáld újra

### TWiLight Menu++ automatikus bootolása
1. Húzd az `Autoboot/(a te flashcard-od)` mappa tartalmát a flashcard-od microSD kártyája gyökerébe
   - Lépd át ezt, ha nem látod a flashcard-od
1. **DS Phat/Lite felhasználók:** Menj a beállításokba a DS menüben és kapcsold be az auto-start-ot, így a flash kártyád fog bootolni induláskor

### Játékok futtatása a flashcard firmware használatával

Vedd figyelembe, hogy ez csak akkor működik, ha a flashcard-od beállított autoboot-ra a TWiLight Menu++-ban. Tekintsd meg az előző fejezetet, arról, hogyan teheted ezt meg.
{:.alert .alert-warning}

Vedd figyelemben, hogy nem minden flashcard támogatja a játékok ilyen módon futtatását. Ha az alábbi lépések nem vonatkoznak a flashcard-odra, átugorhatod ezt a szakaszt.
{:.alert .alert-warning}

Fontos megjegyezned, hogy ezzel elveszted a lehetőségét annak, hogy csalásokat használj, ha a játékokat így indítod. Ha továbbra is szeretnéd elérni a csalás funkcionalitást, lépd át ezt a részt.
{:.alert .alert-warning}

1. Húzz mindent a `Flashcart Loader/(a te flashcard-od)` mappából a flashcard-od microSD kártyája gyökerébe
   - A `Flashcart Loader` mappában található egy README.txt fájl, amely segít megtalálni, hogy melyik flashcart betöltő a megfelelő a flashcard-odhoz.
   - Ha ezt már megcsináltad, folytasd a 3. lépéssel. Ha még nem, kövesd a flashcard-ok listája alatti lépéseket

1. Ezekhez a flashcard-okhoz:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2022 kártyák (**nem** .hk vagy .com.cn)
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4 Gold 3DS RTS (r4i-gold.com)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi (a nem-SDHC modellek ***nem*** támogatottak)
   - M3 DS Real
   - M3i Zero (nem GMP-Z003 modell)
   - iTouchDS és iTouch2 (használd az M3Real_M3iZero YSMenu fájlokat)
   - R4(i)RTS (r4rts.com) (használd az M3Real_M3iZero YSMenu fájlokat)
   - R4 SDHC RTS (fekete cartridge) (r4isdhc.com) (használd az M3Real_M3iZero YSMenu fájlokat)

   Telepítsd a [RetroGameFan YSMenu](https://gbatemp.net/download/35737/)-jét.
      - Ellenőrizd, hogy az `YSMenu.nds` (átnevezve `TTMenu.dat`-ról, ha nincs ilyen) és a `TTMenu` mappa létezik a flashcard-od microSD kártyájának gyökerében
      - Ne másolda `TTMenu.dat` közvetlenül; ez megtöri az automatikus indítást és az YSMenu soft reset-et
1. Nyisd meg a TWLMenu++ Beállításokat, válts az `Játék és app beállítások` oldalra és állítsd be az `Játék betöltő`-t `Kernel`-re, így a flashcard firmware kerül felhasználásra az nds-bootstrap helyett
