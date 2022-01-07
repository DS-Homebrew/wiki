---
lang: hu-HU
layout: wiki
section: twilightmenu
category: updating
title: Frissítés (3DS)
long_title: A TWiLight Menu++ frissítése (3DS)
description: Hogyan frissítsd a TWiLight Menu++-t Nintendo 3DS-en
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Kézi
---

Ha régebbi verzióról frissítesz, mint a v6.8.3, kérjük mozgasd a `.sav` DS játék fájljaidat egy új `saves` nevű mappába, ahol a `saves` mappa ugyanazon a helyen van, mint a DS ROM-ok.
{:.alert .alert-info}

Ha régebbi verzióról frissítesz, mint a v21.0.0, kérjük mozgasd a `.pub` és/vagy `.prv` DSiWare fájljaidat egy új `saves` nevű mappába, ahol a `saves` mappa ugyanazon a helyen van, mint a DSiWare ROM-ok.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Nyisd meg az Universal-Updater-t
   - Ha még nem rendelkezel vele, kövesd a [telepítési](installing-3ds) lépéseket
1. Keresd meg a TWiLight Menu++-t az appok között; kereshetsz az oldalsáv harmadik fülén is, ha problémát okoz megtalálni
1. Nyomj <kbd class="face">A</kbd>-t vagy érintsd meg a letöltés ikont az oldalsávon, és válaszd a `TWiLight Menu++`-t a telepítéséhez
   - Ez eltart egy ideig
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Töltsd le a legutolsó [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z) verziót
1. Csomagold ki `TWiLightMenu-3DS.7z` fájlt
1. Másold az `_nds` mappát a microSD kártyád gyökerébe
1. Másold a `BOOT.NDS` fájlt a microSD kártyád gyökerébe
1. Másold a két `.cia` fájlt a microSD kártyád gyökerébe
1. A 3DS-eden telepítsd a két CIA fájlt az FBI-jal
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Frissítés

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### További lépések a flashcard oldalán

Ha tudsz váltani az SD és flashcard tartalmak között a TWLMenu++-ben, és a flashcard TWLMenu++ v16.3.0-os vagy későbbi, kövesd következő lépéseket.

1. Menj a TWLMenu++ Beállítások-ba
1. Válaszd a `TWiLight Menu++ frissítése` opciót
1. Válaszd a `Konzol (micro)SD > Slot-1 microSD` opciót
