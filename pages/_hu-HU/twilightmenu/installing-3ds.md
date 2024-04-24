---
lang: hu-HU
layout: wiki
section: twilightmenu
category: installing
title: Telepítés (3DS)
long_title: A TWiLight Menu++ telepítése (3DS)
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
1. Olvasd be ezt a QR kódot a [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) legfrissebb verziójának telepítéséhez<br> ![Universal-Updater QR kód](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Zárd be az FBI-t és indítsd el a Universal-Updater-t
   - Ha nem jelenik meg a a home menüben, indítsd újra a 3DS-ed
1. Keresd meg a TWiLight Menu++-t az appok között; kereshetsz az oldalsáv harmadik fülén is, ha problémát okoz megtalálni
   - Ez az ikonja: ![TWiLight Menu++ ikon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Nyomj <kbd class="face">A</kbd>-t vagy érintsd meg a letöltés ikont az oldalsávon, és válaszd a `TWiLight Menu++`-t a telepítéséhez
   - Ez eltart egy ideig
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Töltsd le a legutolsó [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia) verziót
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

If you use a Windows edition which contains Windows Defender, it'll detect the `.7z` file as a Trojan due to a false positive. To fix the false positive, ensure Windows Defender is up to date.
{:.alert .alert-warning}

1. Töltsd le a legutolsó [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z) verziót
1. Csomagold ki `TWiLightMenu-3DS.7z` fájlt
1. Másold az `_nds` mappát a microSD kártyád gyökerébe
1. Másold a `BOOT.NDS` fájlt a microSD kártyád gyökerébe
1. Másold a `roms` mappát a microSD kártyád gyökerébe
1. Másold a `.cia` fájlt az SD kártyád gyökerébe
1. A 3DS-eden telepítsd a CIA fájlt az FBI-jal
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Telepítés

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Hozzáférés a flashcard tartalmához

A flashcard egy olyan eszköz, ami a játékkártya helyére kerül, és tartalmaz egy microSD-kártya helyet. Ha nincs flashcard-od, akkor végeztél ezzel az útmutatóval.
{:.alert .alert-warning}

#### Ha R4(i) Ultra kártyád van

1. Kövesd [ezt](installing-flashcard) az útmutatót a `Játékok futtatása a flashcard firmware használatával` ponttól kezdve
     - Biztonságosan ignorálhatod a figyelmeztetéseket
1. Nyisd meg a TWLMenu++ Beállítások menüpontját
1. Válts az `Egyéb beállítások` oldalra
1. Kapcsold be a `Slot-1 microSD hozzáférés`-t
1. Lépj ki a TWLMenu++ beállításaiból a `B` gomb megnyomásával
     - Ha a DS Classic menübe kerültél, nyomd meg újra a `B` gombot

#### Ha nem R4(i) Ultra kártyád van

1. Hozz létre egy fájlt vagy mappát `primary` néven az `sd:/_nds/` mappában (nem a flashcard-ban lévőn), így a TWiLight Menu++ a beállításokat a konzol SD kártyájáról veszi, miután elindítja a flashcard-od
1. Kövesd [ezt](installing-flashcard) az útmutatót a`TWiLight Menu++ automatikus bootolása` ponttól kezdve
1. Másold ki a `BOOT.NDS` fájlt `TWiLightMenu-Flashcard.7z` fájlból a flashcard-od microSD kártyája gyökerébe
1. Nyisd meg a TWLMenu++ Beállítások menüpontját
1. Válts az `Egyéb beállítások` oldalra
1. Kapcsold be a `SCFG hozzáférés a Slot-1-ben` opciót (Figyelem, ez felülírja a `Slot-1 microSD hozzáférés` opciót)
1. Állítsd be a `Slot-1: Érintés mód` to `DSi mód`-ra
1. Kapcsold be az `Auto-start Slot-1`-et
1. Lépj ki a TWLMenu++ beállításaiból a `B` gomb megnyomásával
     - Ha a DS Classic menübe kerültél, indítsd el a flashcard-od
     - Egyébként tindítsd úkjra a TWiLight Menu++-t

#### Váltás az SD és a flashcard tartalmak között
- Nyomd meg a `SELECT`+`Fel` vagy a `SELECT`+`Le` gombokat az SD és a flashkártya tartalma közötti váltáshoz
     - Ha a SELECTS menü engedélyezve van, akkor ott is megteheted ezt
     - Ha a 3DS témát használod, érintsd meg a Játékkártya/SD-kártya ikont
     - Ha az R4/GBC témát használod, nyomd meg az `L` gombot
