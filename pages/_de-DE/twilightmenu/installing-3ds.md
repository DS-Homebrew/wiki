---
lang: de-DE
layout: wiki
section: twilightmenu
category: installing
title: Installation (3DS)
long_title: TWiLight Menu++ installieren (3DS)
description: Wie man TWiLight Menu++ auf dem Nintendo 3DS installiert
tabs:
  - 
    working-camera: Funktionierende Kamera
    non-working-camera: Nicht funktionierende Kamera
    manual: Anleitung
---

Du brauchst zuerst die benutzerdefinierte Firmware auf deinem 3DS, folge [3ds.hacks.guide](https://3ds.hacks.guide) um sie zu installieren
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Öffne FBI und wähle `Remote-Installation`, dann `QR-Code scannen`
1. Scannen Sie diesen QR-Code, um die neueste Version von [Universal-Updater](https://github.com/Universal-Team/Universal-Updater) zu installieren<br> ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Schließe FBI und starte Universal-Updater
   - Falls es nicht auf deinem Home-Menü erscheint, starte deinen 3DS neu
1. Finde TWiLight Menü++ im App-Raster, du kannst mit der 3. Registerkarte in der Seitenleiste suchen, falls du Probleme hast es zu finden
   - Es hat dieses Symbol: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Drücke <kbd class="face">A</kbd> oder tippe auf das Download-Symbol in der Seitenleiste und wähle `TWiLight Menu++`, um es zu installieren
   - Dies kann eine Weile dauern
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Lade die neueste Version von [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia) herunter
1. Platziere die `Universal-Updater.cia` Datei irgendwo auf deine SD-Karte
1. Starte FBI auf deinem Nintendo 3DS
1. In FBI gehe zu dem Ort, an dem du die `Universal-Updater.cia` Datei eingefügt haben
1. Wähle die `Universal-Updater.cia` Datei aus und klicke auf "Install & Delete"
1. Schließe FBI und starte Universal-Updater
   - Falls es nicht auf deinem Home-Menü erscheint, starte deinen 3DS neu
1. Finde TWiLight Menü++ im App-Raster, du kannst mit der 3. Registerkarte in der Seitenleiste suchen, falls du Probleme hast es zu finden
   - Es hat dieses Symbol: ![TWiLight Menu++ Icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Drücke <kbd class="face">A</kbd> oder tippe auf das Download-Symbol in der Seitenleiste und wähle `TWiLight Menü++`, um es zu installieren
   - Dies kann eine Weile dauern
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Lade die neueste Version von[`TWiLightMenu-3DS.7z herunter`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Entpacke `TWiLightMenu-3DS.7z`
1. Kopiere den `_nds` Ordner in dein SD-Karten Stammverzeichnis
1. Kopiere die `BOOT.NDS` Datei in dein SD-Karten Stammverzeichnis
1. Kopiere den `roms` Ordner in dein SD-Karten Stammverzeichnis
1. Copy the `.cia` file to your SD card root
1. On your 3DS, install the CIA with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Installiere

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Accessing flashcard contents

A flashcard is something that goes in the game card slot, and contains a microSD card slot. If you do not have a flashcard, you are done with this guide.
{:.alert .alert-warning}

#### If you have an R4(i) Ultra

1. Follow [this](installing-flashcard) guide starting from `To run games using your flashcard firmware`
     - You can safely ignore the warnings
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `Slot-1 microSD access`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, press `B` again

#### If you don't have an R4(i) Ultra

1. Create a file or folder called `primary` in `sd:/_nds/` (not the flashcard one), so that TWiLight Menu++ reads settings from the console's SD card after it starts your flashcard
1. Follow [this](installing-flashcard) guide starting from `Autobooting TWiLight Menu++`
1. Copy the `BOOT.NDS` file from `TWiLightMenu-Flashcard.7z` to your flashcard’s microSD card root
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `SCFG access in Slot-1` (Note that this option overrides `SD access in Slot-1`)
1. Set `Slot-1: Touch Mode` to `DSi mode`
1. Turn on `Auto-start Slot-1`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, launch your flashcard
     - Otherwise, restart TWiLight Menu++

#### Switching between SD and flashcard contents
- Press either `SELECT`+`Up` or `SELECT`+`Down` to switch between the SD and flashcard contents
     - If the SELECT menu is enabled, you can do so there as well
     - If you use the 3DS theme, touch the Game Card/SD Card icon
     - If you use the R4/GBC theme, press `L` button
