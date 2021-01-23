---
lang: hu-HU
layout: wiki
section: twilightmenu
category: installing
title: Telepítés (3DS)
description: How to install TWiLight Menu++ on the Nintendo 3DS
---

Először egyedi firmware-t kell telepítned a 3DS-edre, kövesd a [3ds.hacks.guide](https://3ds.hacks.guide) oldalt a telepítéséhez
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Nyisd meg az FBI-t és válaszd a `Remote Install`, majd a `Scan QR Code` opciót
1. Olvasd be ezt a QR kódot a [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) legfrissebb verziójának telepítéséhez<br> ![Universal-Updater QR kód](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Zárd be az FBI-t és indítsd el a Universal-Updater-t
   - Ha nem jelenik meg a a home menüben, indítsd újra a 3DS-ed
1. Keresd meg a TWiLight Menu++-t az appok között; kereshetsz az oldalsáv harmadik fülén is, ha problémát okoz megtalálni
   - Ez az ikonja: ![TWiLight Menu++ ikon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Nyomj <kbd class="face">A</kbd>-t vagy érintsd meg a letöltés ikont az oldalsávon, és válaszd a `TWiLight Menu++`-t a telepítéséhez
   - This will take a while
{% endcapture %}

{% capture tab-non-working-camera %}
1. Töltsd le a `Universal-Updater.cia` fájlt a [Universal-Updater kiadás (Release) oldalról](https://github.com/Universal-Team/Universal-Updater/releases)
1. Helyezd a `Universal-Updater.cia` fájlt valahova az SD kártyádon
1. Indítsd el az FBI-t a Nintendo 3DS-eden
1. Az FBI-ban, navigálj a helyre, ahova a `Universal-Updater.cia` fájlt raktad
1. Válaszd a `Universal-Updater.cia` fájlt és nyomj az "Install & Delete" opcióra
1. Zárd be az FBI-t és indítsd el a Universal-Updater-t
   - Ha nem jelenik meg a a home menüben, indítsd újra a 3DS-ed
1. Keresd meg a TWiLight Menu++-t az appok között; kereshetsz az oldalsáv harmadik fülén is, ha problémát okoz megtalálni
   - Ez az ikonja: ![TWiLight Menu++ ikon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Nyomj <kbd class="face">A</kbd>-t vagy érintsd meg a letöltés ikont az oldalsávon, és válaszd a `TWiLight Menu++`-t a telepítéséhez
   - This will take a while
{% endcapture %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the `roms` folder to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}

### Installing

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="working-camera">Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-non-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="non-working-camera">Non-Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-working-camera">
      <noscript><h4>Working Camera</h4></noscript>
      {{ tab-working-camera | markdownify }}
   </div>
   <div id="tab-non-working-camera">
      <noscript><h4>Non-Working Camera</h4></noscript>
      {{ tab-non-working-camera | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
