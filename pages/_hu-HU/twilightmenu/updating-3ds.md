---
lang: hu-HU
layout: wiki
section: twilightmenu
category: updating
title: Frissítés (3DS)
description: Hogyan frissítsd a TWiLight Menu++-t Nintendo 3DS-en
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Kézi
---

Ha régebbi verzióról frissítesz, mint a v16.4.0, kérjük mozgasd a `.sav` DS játék fájljaidat egy új `saves` nevű mappába, ahol a `saves` mappa ugyanazon a helyen van, mint a DS romok.
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
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Frissítés

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### További lépések a flashcard oldalán

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Go into TWLMenu++ Settings
1. Select `Update TWiLight Menu++`
1. Select `Console (micro)SD > Slot-1 microSD`
