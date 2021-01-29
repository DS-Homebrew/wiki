---
lang: hu-HU
layout: wiki
section: twilightmenu
category: customization
title: Egyedi betűtípusok
description: Hogyan használj egyedi betű készletet a TWiLight Menu++-ban
---

A TWiLight Menu++ tud olyan egyedi betűkészleteket használni, amik NFTR (Nitro FonT Resource) formátumúak. A készletek a beállításokban, kézikönyv címekben és a Nintendo DSi, Nintendo 3DS, SEGA Saturn és Homebrew Launcher témákban kerülnek felhasználásra.

### Beágyazott betűkészlet info
3 betűkészlet van beágyazva a TWiLight Menu++-ba. Amikor a TWiLight Menu++ DSi Módban fut, minden karaktert tartalmaz, amire a TWiLight le lett fordítva, de ha DS Módban fut, sokkal korlátozottabb, a RAM korlátok miatt. Ezek a következők:
- Alapértelmezett: Ez hivatalos DSi betűkészletet használja, mint elsődleges betűkészletet, és támogatja az összes karaktert, ami a TWiLight Menu++-ban használt, minden nyelven a DS módban
- Kínai(Egyszerűsített): Ez a Noto Sans CS-t használja elsődleges betűkészletnek, és szignifikánsan több Kínai (Egyszerűsített) karakterrel rendelkezik DS módban, más nyelvek karaktereinek rovására
- Koreai: Ez azonos az alaprételmezettel DSi módban, de DS módban egy sokkal teljesebb hangul készletet tartalmaz, más nyelvek karaktereinek rovására

### Könyvtár szerkezet
Az egyedi betűkészletek a `sd:/_nds/TWiLightMenu/extras/fonts/[font name]/[font file].nftr` útvonalról kerülnek betöltésre, ahol a `[font name]` bármi lehet amit szeretne, és a `[font file].nftr` egyike a következőknek:
- `large-ds.nftr`, `large-dsi.nftr`, vagy `large.nftr`: A címekhez használt nagyobb betűméret
- `small-ds.nftr`, `small-dsi.nftr`, vagy `small.nftr`: A legtöbb más szöveghez használt kisebb betűméret

A `-ds` és `-dsi` fájlok magasabb prioritással rendelkeznek, mint a normálisok, és ha megtalálásra kerülnek, akkor ezt használja a TWiLight Menu++, amikor DS vagy DSi Módban fut.

### Egyedi betűkészlet generálása
Létrehozhatod az egyedi betűkészleted olyan eszközökkel, mint például Pk11 [nftr-editor](https://pk11.us/nftr-editor/)-ja. Ahhoz, hogy a TWiLight Menu++ meglévő betűkészleteit újra generálhasd:
1. Töltsd be az NFTR fájlt az nftr-editor-ba
1. Írd be a betűkészlet neveket, amit használni szeretnél, legmagasabb prioritástól a legkisebbig az `Input font` szöveg dobozba, vesszőkkel elválasztva
   - Az előnézetét láthatod a bemenő betűkészletnek a felső dobozban bal oldal és az aktuális NFTR-t az alsó dobozban
1. Kattints a `Generate from font` okcióra, majd az `OK`-ra a meglévő karakterek újragenerálására, és `Cancel`-t a speciális gomb karakterek újragenerálására (pl.: &#xE000;)
1. Kattints a `Save` opcióra, majd ismételd meg a másik méretre
