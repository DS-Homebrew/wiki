---
lang: hu-HU
layout: wiki
section: gbarunner2
title: GBA BIOS dumpolása
description: Hogyan szedd ki a Nintendo GBA BIOS-t a konzolodból
tabs:
  - 
    3ds-sd-card: 3DS open_agb_firm-mel
    gba-flashcart: GBA/DS/DS Lite GBA-módú flashcart-tal
---

Míg a legtöbb GBA emulátornak önmagában nem okoz gondot a GBA játékok lejátszása, néhány emulátornak és hipervizornak, például a GBARunner2-nek szüksége lehet a BIOS fájlra egyes játékok megfelelő lejátszásához.

Két úton lehet ezt elérni:
- egy 3DS egyéni firmware-rel, VAGY
- egy GBA/DS/DS Lite GBA-módú flashcart-tal

{% capture tab-3ds-sd-card %}
### 1. rész: A szükséges fájlok beszerzése
1. Töltsd le az [open_agb_firm](https://github.com/profi200/open_agb_firm/releases/latest) fájlt (a `.7z` fájl)
1. Töltsd le a [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba) fájlt
1. Hozz létre egy `payloads` nevű mappát a `/luma` mappában, ha még nem létezik
1. Másold az `open_agb_firm.firm`fájlt az open_agb_firm `.7z` fájlból a `/luma/payloads` mappába
1. Másold a `3ds`-t az open_agb_firm `.7z` fájlból az SD kártyád gyökerébe
1. Másold a `Bios_Dumper.gba` fájlt az SD kártyád gyökerébe
1. Tedd vissza az SD kártyád a készülékedbe

### 2. rész: Bios_Dumper
1. Nyomd le és tartsd lenyomva a <kbd>START</kbd> gombot, és amíg nyomva tartod azt, kapcsold be a készüléked
    - Ez elindítja az open_agb_firm-et
    - Ha betölti a `Luma3DS Chainloader`-t, válaszd az `open_agb_firm`-et ebbl a menüből
    - Ha mást tölt be, akkor nem másoltad az `open_agb_firm.firm` fájlt a megfelelő mappába az SD kártyádon
1. Az open_agb_firm-ből indítsd el a `Bios_Dumper.gba`-t
1. A képernyő pirosan majd zölden villant
1. Várj kb. 5 másodpercet
1. Kapcsold ki a készüléked

{% capture upload-bios-text %}
Az SD kártyádról töltsd fel a `/3ds/open_agb_firm/saves/Bios_Dumper.sav` fájlt itt:
{% endcapture %}

### 3. rész: A BIOS kicsomagolása a generált mentés fájlból
1. Helyezd az SD kártyád a számítógépedbe
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}


{% capture tab-gba-flashcart %}
### 1. rész: A szükséges fájlok beszerzése
1. Töltsd le a [Bios_Dumper.gba](https://github.com/GlaZedBelmont/Random-Stuff/releases/download/0.0.5/Bios_Dumper.gba) fájlt
1. Másold a `Bios_Dumper.gba` fájlt a flashcart SD kártyája gyökerébe
1. Tedd vissza az SD kártyád a flashcart-odba
1. Helyezd vissza a GBA flashcart-odat a cartridge-be

### 2. rész: Bios_Dumper
1. Indítsd el a flashcart-odat, majd indítsd el a `Bios_Dumper.gba`-t
1. A képernyő pirosan majd zölden villant
1. Várj kb. 5 másodpercet
1. Kapcsold ki a készüléked

{% capture upload-bios-text %}
Az SD kártyádról töltsd fel a `Bios_Dumper.sav` fájlt itt:
{% endcapture %}

### 3. rész: A BIOS kicsomagolása a generált mentés fájlból
1. Helyezd az SD kártyád a számítógépedbe
1. {% include bios-shrinker.html text=upload-bios-text %}

{% endcapture %}
{% assign tab-gba-flashcart = tab-gba-flashcart | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-gba-flashcart %}
{% include tabs.html index=0 tabs=tabs %}

Egy `bios.bin` fájl automatikusan letöltésre kerül. Ez a végleges GBA BIOS fájl.
{:.alert .alert-success}

<script src="https://geraintluff.github.io/sha256/sha256.min.js"></script>
<script src="/assets/js/bios-shrinker.js"></script>
