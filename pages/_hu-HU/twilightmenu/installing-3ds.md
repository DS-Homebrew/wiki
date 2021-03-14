---
lang: hu-HU
layout: wiki
section: twilightmenu
category: installing
title: Telepítés (3DS)
description: Hogyan telepítsd a TWiLight Menu++-t Nintendo 3DS-re
tabs:
  - 
    working-camera: Működő kamera
    non-working-camera: Nem működő kamera
    manual: Kézi
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
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Download the `Universal-Updater.cia` file from the [Universal-Updater release page](https://github.com/Universal-Team/Universal-Updater/releases)
1. Place the `Universal-Updater.cia` file anywhere on your SD card
1. Launch FBI on your Nintendo 3DS
1. In FBI, go to the place you pasted the `Universal-Updater.cia` file
1. Select the `Universal-Updater.cia` file and hit "Install & Delete"
1. Close FBI and launch Universal-Updater
   - If it doesn't show up on your home menu, reboot your 3DS
1. Find TWiLight Menu++ in the app grid, you can search with the 3rd tab on the sidebar if you have trouble finding it
   - It has this icon: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Press <kbd class="face">A</kbd> or tap the download icon in the sidebar and select `TWiLight Menu++` to install it
   - This will take a while
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the `roms` folder to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Telepítés

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
