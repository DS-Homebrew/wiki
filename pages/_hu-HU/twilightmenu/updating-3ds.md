---
lang: hu-HU
layout: wiki
section: twilightmenu
category: updating
title: Frissítés (3DS)
description: How to update TWiLight Menu++ on the Nintendo 3DS
---

Ha régebbi verzióról frissítesz, mint a v16.4.0, kérjük mozgasd a `.sav` DS játék fájljaidat egy új `saves` nevű mappába, ahol a `saves` mappa ugyanazon a helyen van, mint a DS romok.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Nyisd meg az Universal-Updater-t
   - Ha még nem rendelkezel vele, kövesd a [telepítési](installing-3ds) lépéseket
1. Keresd meg a TWiLight Menu++-t az appok között; kereshetsz az oldalsáv harmadik fülén is, ha problémát okoz megtalálni
1. Nyomj <kbd class="face">A</kbd>-t vagy érintsd meg a letöltés ikont az oldalsávon, és válaszd a `TWiLight Menu++`-t a telepítéséhez
   - This will take a while
{% endcapture %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}

### Frissítés

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-universal-updater" onclick="openTab(event, event.currentTarget)" data-tab-name="universal-updater">Universal-Updater</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-universal-updater">
      <noscript><h4>Universal-Updater</h4></noscript>
      {{ tab-universal-updater | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>

### További lépések a flashcard oldalán

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Go into TWLMenu++ Settings
1. Select `Update TWiLight Menu++`
1. Select `Console (micro)SD > Slot-1 microSD`
