---
lang: hu-HU
layout: wiki
section: twilightmenu
category: customization
title: DSi / 3DS szkinek - Egyedi hangeffektusok
description: Hogyan használj egyedi háttérzenét és hang effekteket a DSi és 3DS szkinekben a TWiLight Menu++-ban
---

A TWiLightMenu támogatja az egyedi hang fájlokat a témákban. Rakd a hangfájlokat a `sound` alkönyvtárba a téma mappádba, például a `white` téma esetén, a fájlaid a `themes/white/sound/sfx.bin` és a `themes/sound/bgm.pcm.raw` lesznek. Mindkét fájl opcionális, ha hiányzik valamelyik, az alapértelmezett zene kerül felhasználásra. Be kell ezt követően állítanod a zene opciókat a témához.

Ezek a lépések feltételezik, hogy rendelkezel devkitPro-val telepített mmutil-lal. A devkitPro-t beszerezheted a [devkitPro weboldaláról](https://devkitpro.org/wiki/Getting_Started).

## Hang effektusok bank
A hang effekt bank olyan hangeffekteket tartalmaz, mint például az ikon választás hang, stb.

| Fájl        | Leírás                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------- |
| startup.wav | Induláskor játszódik le. Tekintsd meg a [Indítási hang](#startup-sound) szekciót a részletekért |
| back.wav    | Vissza                                                                                          |
| launch.wav  | Játék indításakor játszódik le                                                                  |
| select.wav  | Ez játszódik le, amikor mozgatjuk a kiválasztó kurzort                                          |
| wrong.wav   | Az oldal végének elérésekor játszódik le                                                        |
| switch.wav  | Oldalak váltásakor játszódik le                                                                 |
| stop.wav    | A DSi témán játszódik le, ha a kiválaszt kurzor abbahagyja a mozgást                            |
| bgm.pcm.raw | Nem része a hang banknak. Tekintsd meg a [Menü BGM](#menu-bgm) szekciót a részletekért          |

Ezt követően futtathatod `make`-et, hogy létrehozd a hang effektusok bankot. Minden fent listázott fájlra szükség van, kivéve a *bgm.pcm.raw*-ot, de némává lehet őket tenni.

Az eredmény *sfx.bin* fájlnak a mérete **512000 B = 512 KB alatt kell legyen**. Bármi nagyobb összeomláshoz vezethet, vagy néhány hang nem játszódik le teljesen.

### Indítási hang
Amíg más hang effektusok működnek bármilyen WAV fájllal, az indítási hangnak egy megadott formátumúnak kell lennie, hogy megfelelően működjön, egyébként szünet lesz az indítási hang vége és a háttérzene kezdete között.

A startup.wav fájl **16-bit 16 kHz** minőségű kell legyen. Használhatod például az [Audacity](https://www.audacityteam.org/download/)-t erre a formátumra konvertáláshoz. Amint a fájl betöltött az Audacity-be, változtasd meg a **Project Rate (Hz)**-et **16000**-re, majd nyomd meg a **Shift+M**-et, és változtasd meg a **Formátum**-ot **16-bit PCM**-re.

Ha a fájlod Sztereó, akkor le kell konvertálnod monóra a **Sávok > Mix > Mix Stereo down to Mono** menüpontban.

Be kell állítanod a `PlayStartupJingle=1` opciót a saját `theme.ini` fájlodban, hogy az indítási zene lejátszódjék.


## Menü BGM

A Menü BGM-nek **16-bit 16 kHz Monó** nyers PCM fájlnak kell lennie. Használhatod például az [Audacity](https://www.audacityteam.org/download/)-t erre a formátumra konvertáláshoz. Amint a fájl betöltött az Audacity-be, változtasd meg a **Project Rate (Hz)**-et **16000**-re, majd nyomd meg a **Shift+M**-et, és változtasd meg a **Formátum**-ot **16-bit PCM**-re.

Ha a fájlod Sztereó, akkor le kell konvertálnod monóra a **Sávok > Mix > Mix Stereo down to Mono** menüpontban.

A megfelelő formátumban exportáláshoz a következőket tedd:
1. Válaszd a `Fájl` > `Export` > `Hang exportálása...` opciókat
1. Állítsd a `Fájl típusa` opciót `Egyéb tömörítettlen fájlok`-ra
1. Állítsd a `Fejléc`-et `RAW (header-less)`-re
1. Állítsd a `Kódolás`-t to `Signed 16-bit PCM`-re
1. Állítsd a fájlnevet `bgm.pcm.raw`-ra, majd kattints a `Mentés` gombra
1. Kattints az `OK`-ra a metaadat szerkesztése ablakban

Most már rendelkezel a `bgm.pcm.raw` fájllal, ami bemásolható a *sound* almappába a témád mappáján belül.

Az sfx.bin-nel ellentétben, a *bgm.pcm.raw* akármekkora nagy lehet.
