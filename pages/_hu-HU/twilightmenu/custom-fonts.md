---
lang: hu-HU
layout: wiki
section: twilightmenu
category: customization
title: Egyedi betűtípusok
description: Hogyan használj egyedi betű készletet a TWiLight Menu++-ban
---

A TWiLight Menu++ tud olyan egyedi betűkészleteket használni, amik NFTR (Nitro FonT Resource) formátumúak. A készletek a beállításokban, kézikönyv címekben és a Nintendo DSi, Nintendo 3DS, SEGA Saturn és Homebrew Launcher felületeken kerülnek felhasználásra.

### Könyvtár szerkezet
Az egyedi betűkészletek a `sd:/_nds/TWiLightMenu/extras/fonts/[font name]/[font file].nftr` útvonalról kerülnek betöltésre, ahol a `[font name]` bármi lehet amit szeretne, és a `[font file].nftr` egyike a következőknek:
- `large.nftr`: A címekhez használt nagyobb betűméret
- `small.nftr`: A legtöbb más szöveghez használt kisebb betűméret

### Téma betűtípusok
Hozzá adhatsz betűkészleteket az [egyedi DSi/3DS témákhoz](custom-dsi-3ds-themes), ami felül fogja bírálni azt, ami van be TWiLight Menu++ beállításaiban. Ezek a betűkészletek a `font` mappába kerülnek a téma gyökér könyvtárába.

Ez egyedi betűkészletek továbbá felül tudják írni a betűkészletét a dátumnak & időnek a `date_time.nftr` használatával, és konzol felhasználó névnek az `username.nftr` használatával.

### Egyedi betűkészlet generálása
Létrehozhatod az egyedi betűkészleted olyan eszközökkel, mint például Pk11 [nftr-editor](https://web.archive.org/web/20240618221756/https://pk11.us/nftr-editor/)-ja. Ahhoz, hogy a TWiLight Menu++ meglévő betűkészleteit újra generálhasd:
1. Töltsd be az NFTR fájlt az nftr-editor-ba
1. Írd be a betűkészlet neveket, amit használni szeretnél, legmagasabb prioritástól a legkisebbig az `Input font` szöveg dobozba, vesszőkkel elválasztva
    - Az előnézetét láthatod a bemenő betűkészletnek a felső dobozban bal oldal és az aktuális NFTR-t az alsó dobozban
1. Kattints a `Generate from font` okcióra, majd az `OK`-ra a meglévő karakterek újragenerálására, és `Cancel`-t a speciális gomb karakterek újragenerálására (pl.: &#xE000;)
1. Kattints a `Save` opcióra, majd ismételd meg a másik méretre
