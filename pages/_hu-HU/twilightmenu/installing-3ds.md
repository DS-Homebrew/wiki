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
   - Ez eltart egy ideig
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

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
   - Ez eltart egy ideig
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Töltsd le a `TWiLightMenu-3DS.7z` legfrissebb verzióját [a kiadások (Releases) oldalról](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Csomagold ki `TWiLightMenu-3DS.7z` fájlt
1. Másold az `_nds` mappát a microSD kártyád gyökerébe
1. Másold a `BOOT.NDS` fájlt a microSD kártyád gyökerébe
1. Másold a `roms` mappát a microSD kártyád gyökerébe
1. Másold a két `.cia` fájlt a microSD kártyád gyökerébe
1. A 3DS-eden telepítés a két CIA fájlt az FBI-jal
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Telepítés

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
