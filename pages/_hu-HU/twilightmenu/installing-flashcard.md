---
lang: hu-HU
layout: wiki
section: twilightmenu
category: installing
title: Telepítés (Flashcard)
long_title: A TWiLight Menu++ telepítése (Flashcard)
description: Hogyan telepítsd a TWiLight Menu++-t Nintendo DS flashcard-ra
tabs:
  - 
    loader: Flashcart Loader
    ysmenu: YSMenu
---

### Telepítés
1. Töltsd le a legutolsó [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) verziót
    - Ha nem tölt le, tekintsd meg a [release oldalt](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Nyisd meg vagy csomagold ki a `TWiLightMenu-Flashcard.7z` fájlt
1. Húzd az `_nds` mappát a flash kártyád microSD kártyájának gyökerébe
1. Húzd a `BOOT.NDS` fájlt a flash kártyád microSD kártyájának gyökerébe
1. Húzd a `roms` mappát a flash kártyád microSD kártyájának gyökerébe
1. Ha már van mentés adatod, mozgasd a `.sav` fájljaidat, ami a DS ROM lokáción találhatók egy új `saves` nevű mappába, ami szintén DS ROM lokáción található
1. **DS Phat/Lite felhasználók:** Ha a `BOOT.NDS` bootolása fehér képernyő fagyást okoz, akkor kövesd az alábbi lépéseket az autobootoláshoz és próbáld újra

### TWiLight Menu++ automatikus bootolása
1. Nyisd meg vagy csomagold ki a `TWiLightMenu-Flashcard.7z` fájlt
1. Nyisd meg az `Autoboot` mappát
1. Nyisd meg a `README.txt` fájlt, amely segít megtalálni, hogy mely autoboot fájlok megfelelőek a flashcard-odhoz
1. Nyisd meg a `(your flashcard)` mappát
1. Húzd a mappa tartalmát a flashcard-od microSD kártyája gyökerébe
    - Győződj meg róla, hogy a `(your flashcard)` mappa már nyitva van, ne húzd a mappát a gyökérre
    - Lépd át ezt, ha nem látod a flashcard-od listázva
1. **DS Phat/Lite felhasználók:** Menj a beállításokba a DS menüben és kapcsold be az auto-start-ot, így a flash kártyád fog bootolni induláskor

### Játékok futtatása a flashcard kernel használatával (opcionális)

**Kérjük, vedd figyelembe:**
- EEVedd figyelembe, hogy ez csak akkor működik, ha a flashcard-od beállított autoboot-ra a TWiLight Menu++-ban. Tekintsd meg az előző fejezetet, arról, hogyan teheted ezt meg.
- Nem minden flashcard támogatja a játékok ilyen módon futtatását. Ha az alábbi lépések nem vonatkoznak a flashcard-odra, átugorhatod ezt a szakaszt.
- Elveszted a lehetőségét annak, hogy csalásokat használj, ha a játékokat így indítod. Ha továbbra is szeretnéd elérni a csalás funkcionalitást, lépd át ezt a részt.
{:.alert .alert-warning}

{% capture tab-loader %}

Ha a flashcart nem rendelkezik kompatibilis betöltővel ehhez a részhez, válaszd az "YSMenu" fület.
{:.alert .alert-info}

1. Nyisd meg vagy csomagold ki a `TWiLightMenu-Flashcard.7z` fájlt
1. Nyisd meg a `Flashcart Loader` mappát
1. Nyisd meg a `README.txt` fájlt, amely segít megtalálni, hogy mely flashcart loader-ek megfelelőek a flashcard-odhoz
1. Nyisd meg a `(your flashcard)` mappát
1. Húzd a mappa tartalmát a flashcard-od microSD kártyája gyökerébe
    - Győződj meg róla, hogy a `(your flashcard)` mappa már nyitva van, ne húzd a mappát a gyökérre
1. Nyisd meg a TWLMenu++ Beállításokat, válts az `Játék és app beállítások` oldalra és állítsd be az `Játék betöltő`-t `Kernel`-re, így a flashcard kernel kerül felhasználásra az nds-bootstrap helyett
    - Alternatívaként ezt játékonkénti beállításokban is megteheted, ha megnyomod az `Y` gombot a kiválasztott játékban, és megváltoztatod a `Game Loader` opciót

{% endcapture tab-loader %}
{% assign tab-loader = tab-loader | split: "////////" %}

{% capture tab-ysmenu %}

1. Ellenőrizd, hogy az alábbi flashcart-ok egyikével rendelkezel:
    - R4i-SDHC (r4i-sdhc.com)
    - r4isdhc.com 2014+ kártyák (**nem** .hk vagy .com.cn)
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
1. Töltsd le [RetroGameFan YSMenu](https://gbatemp.net/download/35737/)-jét.
1. Csomagold ki egy mappába a számítógépeden. Navigálj a flashcart-odhoz szükséges mappába.
1. A Mappában nevezd át a `TTMenu.dat` fájlt `YSMenu.nds`-tá, ha az `YSMenu.nds` fájl még nem létezne
1. Másold át a `TTMenu` mappát és `YSMenu.nds` fájlt a microSD kártyád gyökerébe. **Ne másold** a `TTMenu.dat`-ot közvetlenül; ez megtöri az automatikus indítást és az YSMenu soft reset-et
1. Nyisd meg a TWLMenu++ Beállításokat, válts az `Játék és app beállítások` oldalra és állítsd be az `Játék betöltő`-t `Kernel`-re, így a flashcard kernel kerül felhasználásra az nds-bootstrap helyett
    - Alternatívaként ezt játékonkénti beállításokban is megteheted, ha megnyomod az `Y` gombot a kiválasztott játékban, és megváltoztatod a `Game Loader` opciót

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Játékok futtatása a flashcard kernel használatával
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
