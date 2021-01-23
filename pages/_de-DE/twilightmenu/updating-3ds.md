---
lang: de-DE
layout: wiki
section: twilightmenu
category: updating
title: Updating (3DS)
description: How to update TWiLight Menu++ on the Nintendo 3DS
---

If updating from a version older than v16.4.0, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS roms.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Öffne Universal-Updater
   - Wenn Sie es nicht haben, folgen Sie den [-Installationsanweisungen](installing-3ds)
1. Finde TWiLight Menü++ im App-Raster, du kannst mit der 3. Registerkarte in der Seitenleiste suchen, falls du Probleme hast es zu finden
1. Drücke <kbd class="face">A</kbd> oder tippe auf das Download-Symbol in der Seitenleiste und wähle `TWiLight Menu++`, um es zu installieren
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

### Aktualisieren

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

### Weitere Schritte für die Speicherkarten-Seite

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Go into TWLMenu++ Settings
1. Select `Update TWiLight Menu++`
1. Select `Console (micro)SD > Slot-1 microSD`
