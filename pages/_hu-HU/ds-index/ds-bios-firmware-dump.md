---
lang: hu-HU
layout: wiki
section: ds-index
category: útmutatók
title: BIOS/Firmware dumpolás
description: Hogyan szedd ki a Nintendo DS or DSi BIOS/Firmware-t a konzolodból
tabs:
  - 
    dsi-sd-card: DSi Unlaunch-csel
    flashcard: Flashcard
---

Néhány emulátorhoz, mint például a melonDS, DS-módú vagy DSi-módú BIOS és firmware szükséges, amelyek a konzolból való kinyeréssel szerezhetők meg. Két úton lehet ezt elérni:
- egy DSi Unlaunch-csel, VAGY
- egy DS/DS Lite/3DS vagy egy DSi Unlaunch nélkül egy kompatibilis flashcard-dal

A DSi metódus ki fogja szedni mind a DS-mód, mind a DSi-mód BIOS és firmware fájlját. A flashcard metódus csak a DS-mód fájljait szedi ki.

{% capture tab-dsi-sd-card %}

Ez az oldal feltételezi, hogy modern CFW környezetet futtatsz a [dsi.cfw.guide](https://dsi.cfw.guide) alapján.
{:.alert .alert-warning}

### 1. rész: A szükséges fájlok beszerzése

1. Töltsd le a [dsibiosdumper](https://melonds.kuribo64.net/downloads/dsibiosdumper.7z) fájlt
1. Másold a `dsibiosdumper.nds` fájlt a dsibiosdumper `.7z` fájlból az SD kártyád gyökerébe
1. Tedd vissza az SD kártyád a készülékedbe

### 2. rész: dsibiosdumper
1. Az eszközöd kikapcsolt állapotában tartsd nyomva a következő gombokat: <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, majd ezen gombok nyomva tartása mellett kapcsold be az eszközöd
1. A készülékednek az Unlaunch menübe kell bootolnia
1. Indítsd el dsibiosdumper-t az alkalmazások listájából
1. Nyomj <kbd class="face">A</kbd> gombot minden dumpolásához
1. Várja meg, amíg a folyamat befejeződik
    - Ez eltarthat egy ideig
1. Ha a folyamat befejeződött, akkor nyomj <kbd>SELECT</kbd> gombot a dsibiosdumper-ből kilépéshez
1. Kapcsold ki a készüléked
1. Helyezd az SD kártyád a számítógépedbe

Minden szükséges fájl a `dsidump` mappában lesz az SD kártyád gyökerében.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### 1. rész: A szükséges fájlok beszerzése

1. Töltsd le az [dsbf_dump](https://github.com/DS-Homebrew/dsbf_dump/releases/latest) fájlt (az `.nds` fájl)
1. Másold a `dsbf_dump.nds` fájlt az SD kártyád gyökerébe
1. Tedd vissza az SD kártyád a flashcard-odba

### 2. rész: dsbf_dump
1. Kapcsold be a készülékedet
1. Idítsd el a flashcard-od
1. Navigálj az SD kártyád gyökerébe és indítsd el a dsbf_dump-ot
1. Várja meg, amíg a folyamat befejeződik
1. Ha a folyamat végzett, nyomd meg a <kbd>START</kbd> gombot az eszközöd kikapcsolásáshoz
    - A 3DS-család rendszerei "Software closed" jelenik meg helyette. Kapcsold ki a készüléked ezen a képernyőn
1. Helyezd az SD kártyád a számítógépedbe

Minden szükséges fájl a készülék felső képernyőjén megjelenített mappában lesz.
{:.alert .alert-success}

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
