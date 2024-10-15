---
lang: hu-HU
layout: wiki
section: twilightmenu
category: installing
title: Telepítés (DSi)
long_title: A TWiLight Menu++ telepítése (DSi)
description: Hogyan telepítsd a TWiLight Menu++-t Nintendo DSi-ra
---

Ha még nincs megoldásod a homebrew futtatására a DSi-den, kövesd a [dsi.cfw.guide](https://dsi.cfw.guide) oldalt a TWiLight Menu++ telepítéséhez
{:.alert .alert-info}

### Telepítés
1. Töltsd le a legutolsó [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) verziót
    - Ha nem tölt le, tekintsd meg a [release oldalt](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Csomagold ki `TWiLightMenu-DSi.7z` fájlt
1. Másold az `_nds` mappát a microSD kártyád gyökerébe
1. Másold a `BOOT.NDS` fájlt a microSD kártyád gyökerébe
1. Másold a `roms` mappát a microSD kártyád gyökerébe
1. **hiyaCFW falhasználók:** Másold a `title` mappát az SD kártyád gyökerébe

### Automatikus indulás Unlaunch-csel
1. Kapcsold be a DSi-d miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat
1. Az Unlaunch menüben menj az `OPTIONS` menühöz
1. Állítsd be a `NO BUTTON` értéket vagy a választásod szerinti gombot ahhoz a `TWiLight Menu++`-hoz, ami a `BOOT.NDS`-t mutatja az alsó képernyőn

### Hozzáférés a flashcard tartalmához

A flashcard egy olyan eszköz, ami a játékkártya helyére kerül, és tartalmaz egy microSD-kártya helyet. Ha nincs flashcard-od, akkor végeztél ezzel az útmutatóval.
{:.alert .alert-warning}

#### Ha R4(i) Ultra kártyád van

1. Kövesd [ezt](installing-flashcard) az útmutatót a`To run games using your flashcard firmware` ponttól kezdve
    - Biztonságosan ignorálhatod a figyelmeztetéseket
1. Nyisd meg a TWLMenu++ beállításait
1. Válts az `Egyéb beállítások` oldalra
1. Kapcsold be a `Slot-1 microSD hozzáférést`
1. Lépj ki a TWLMenu++ beállításaiból a `B` gomb megnyomásával
    - Ha a DS Classic menübe kerültél, nyomd meg újra a `B` gombot

#### Ha nincs R4(i) Ultra kártyád

1. Hozz létre egy fájlt vagy mappát `primary` néven az `sd:/_nds/` mappában (nem a flashcard-ban lévőn), így a TWiLight Menu++ a beállításokat a konzol SD kártyájáról veszi, miután elindítja a flashcard-od
1. Kövesd [ezt](installing-flashcard) az útmutatót a`TWiLight Menu++ automatikus bootolása` ponttól kezdve
1. Másold ki a `BOOT.NDS` fájlt `TWiLightMenu-Flashcard.7z` fájlból a flashcard-od microSD kártyája gyökerébe
1. Nyisd meg a TWLMenu++ Beállítások menüpontját
1. Válts az `Egyéb beállítások` oldalra
1. Kapcsold be az `SD hozzáférés a Slot-1`-ben opciót
1. Kapcsold be az `SCFG hozzáférés a Slot-1`-ben opciót
1. Kapcsold be az `Auto-start Slot-1`-et
1. Lépj ki a TWLMenu++ beállításaiból a `B` gomb megnyomásával
    - Ha a DS Classic menübe kerültél, indítsd el a flashcard-od
    - Egyébként indítsd újra a TWiLight Menu++-t

#### Váltás az SD és a flashcard tartalmak között
- Nyomd meg a `SELECT`+`Fel` vagy a `SELECT`+`Le` gombokat az SD és a flashkártya tartalma közötti váltáshoz
    - Ha a SELECT menü engedélyezve van, akkor ott is megteheted ezt
    - Ha a 3DS témát használod, érintsd meg a Játékkártya/SD-kártya ikont
    - Ha az R4, GBC vagy Wood témát használod, nyomd meg az `R` gombot
