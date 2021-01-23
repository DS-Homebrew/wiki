---
lang: de-DE
layout: wiki
section: twilightmenu
category: installing
title: Installing (3DS)
description: How to install TWiLight Menu++ on the Nintendo 3DS
---

You will first need to have Custom Firmware on your 3DS, follow [3ds.hacks.guide](https://3ds.hacks.guide) to install it
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Öffne FBI und wähle `Remote-Installation`, dann `QR-Code scannen`
1. Scannen Sie diesen QR-Code, um die neueste Version von [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) zu installieren<br> ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Schließe FBI und starte Universal-Updater
   - Falls es nicht auf deinem Home-Menü erscheint, starte deinen 3DS neu
1. Finde TWiLight Menü++ im App-Raster, du kannst mit der 3. Registerkarte in der Seitenleiste suchen, falls du Probleme hast es zu finden
   - Es hat dieses Symbol: ![TWiLight Menü++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Drücke <kbd class="face">A</kbd> oder tippe auf das Download-Symbol in der Seitenleiste und wähle `TWiLight Menu++`, um es zu installieren
   - This will take a while
{% endcapture %}

{% capture tab-non-working-camera %}
1. Laden Sie die `Universal-Updater.cia` Datei von der [Universal-Updater Release-Seite herunter](https://github.com/Universal-Team/Universal-Updater/releases)
1. Lege die `Universal-Updater.cia` Datei irgendwo auf deine SD-Karte
1. Starte FBI auf deinem Nintendo 3DS
1. In FBI-gehen Sie zu dem Ort, an dem Sie die `Universal-Updater.cia` Datei eingefügt haben
1. Wählen Sie die `Universal-Updater.cia` Datei aus und klicken Sie auf "install & delete"
1. Schließe FBI und starte Universal-Updater
   - Falls es nicht auf deinem Home-Menü erscheint, starte deinen 3DS neu
1. Finde TWiLight Menü++ im App-Raster, du kannst mit der 3. Registerkarte in der Seitenleiste suchen, falls du Probleme hast es zu finden
   - Es hat dieses Symbol: ![TWiLight Menü++ Symbol](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Drücke <kbd class="face">A</kbd> oder tippe auf das Download-Symbol in der Seitenleiste und wähle `TWiLight Menü++`, um es zu installieren
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
