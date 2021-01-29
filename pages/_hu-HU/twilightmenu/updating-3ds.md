---
lang: hu-HU
layout: wiki
section: twilightmenu
category: updating
title: Frissítés (3DS)
description: Hogyan frissítsd a TWiLight Menu++-t Nintendo 3DS-en
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

{% capture tab-manual %}
1. Töltsd le a `TWiLightMenu-3DS.7z` legfrissebb verzióját [a kiadások (Releases) oldalról](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Csomagold ki `TWiLightMenu-3DS.7z` fájlt
1. Másold az `_nds` mappát a microSD kártyád gyökerébe
1. Másold a `BOOT.NDS` fájlt a microSD kártyád gyökerébe
1. Másold a két `.cia` fájlt a microSD kártyád gyökerébe
1. A 3DS-eden telepítsd a két CIA fájlt az FBI-jal
{% endcapture %}

### Frissítés

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-universal-updater" onclick="openTab(event, event.currentTarget)" data-tab-name="universal-updater">Universal-Updater</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Kézi</a>
   </div>
   <div id="tab-universal-updater">
      <noscript><h4>Universal-Updater</h4></noscript>
      {{ tab-universal-updater | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Kézi</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>

### További lépések a flashcard oldalán

Ha tudsz váltani az SD és flashcard tartalmak között a TWLMenu++-ben, és a flashcard TWLMenu++ v16.3.0-os vagy későbbi, kövesd következő lépéseket.

1. Menj a TWLMenu++ Beállítások-ba
1. Válaszd a `TWiLight Menu++ frissítése` opciót
1. Válaszd a `Konzol (micro)SD > Slot-1 microSD` opciót
