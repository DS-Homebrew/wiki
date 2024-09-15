---
lang: hu-HU
layout: wiki
section: twilightmenu
category: updating
title: Frissítés (Flashcard)
long_title: TWiLight Menu++ frissítése (Flashcard)
description: Hogyan frissítsd a TWiLight Menu++-t Nintendo DS flashcard-ra
---

Ha régebbi verzióról frissítesz, mint a v16.4.0, kérjük mozgasd a `.sav` DS játék fájljaidat egy új `saves` nevű mappába, ahol a `saves` mappa ugyanazon a helyen van, mint a DS ROM-ok.
{:.alert .alert-info}

Ha régebbi verzióról frissítesz, mint a v21.0.0, kérjük mozgasd a `.pub` és/vagy `.prv` DSiWare fájljaidat egy új `saves` nevű mappába, ahol a `saves` mappa ugyanazon a helyen van, mint a DSiWare ROM-ok.
{:.alert .alert-info}

### Frissítés
1. Töltsd le a legutolsó [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z) verziót
    - Ha nem tölt le, tekintsd meg a [release oldalt](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Csomagold ki `TWiLightMenu-Flashcard.7z` fájlt
1. Másold az `_nds` mappát a flashcard-od microSD kártyájának gyökerébe, felülírva bármilyen létező fájlt
    - Ha macOS-t használsz, győződ meg róla, hogy **másolsz** és `egyesítesz`, nem `cserélsz`
1. Másold az `BOOT.NDS` fájlt aa flashcard-od microSD kártyájának gyökerébe, felülírva bármilyen létező fájlt
1. If TWLMenu++ nem bootol a frisítést követően, akkor frissítsd az autoboot fájl(oka)t is

### További lépések a DSi/3DS SD kártya oldaláról

Ha tudsz váltani az SD és flashcard tartalmak között a TWLMenu++-ben, és a flashcard TWLMenu++ v16.3.0-os vagy későbbi, kövesd következő lépéseket.

1. Menj a TWLMenu++ Beállítások-ba
1. Válaszd a `TWiLight Menu++ frissítése` opciót
1. Válaszd `Slot-1 microSD > Console (micro)SD` opciót
