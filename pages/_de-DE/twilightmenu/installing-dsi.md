---
lang: de-DE
layout: wiki
section: twilightmenu
category: installing
title: Installation (DSi)
long_title: Installation (DSi)
description: Wie man TWiLight Menu++ auf dem Nintendo DSi installiert
---

Wenn du noch keine Möglichkeit hast, Homebrew auf dem DSi auszuführen, folge [dsi.cfw.guide](https://dsi.cfw.guide), um TWiLight Menu++ zu installieren
{:.alert .alert-info}

### Installation
1. Lade die neueste Version von [`TWiLightMenu-DSi`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z) herunter
1. Entpacke `TWiLightMenu-DSi.7z`
1. Kopiere den `_nds` Ordner in dein SD-Kartenverzeichnis
1. Kopiere den `BOOT.NDS` Ordner in dein SD-Kartenverzeichnis
1. Kopiere den `roms` Ordner in dein SD-Kartenverzeichnis
1. **hiyaCFW Benutzer:** Kopieren Sie den `title` Ordner in Ihr SD-Kartenverzeichnis

### Autostart mit Unlaunch
1. Schalten Sie Ihren DSi ein während Sie <kbd class="face">A</kbd> und <kbd class="face">B</kbd> gedrückt halten
1. Gehen Sie im Unlaunch-Menü zu `OPTIONS`
1. Setze `NO BUTTON` oder eine Taste deiner Wahl auf `TWiLight Menu++`, das `BOOT.NDS` auf dem unteren Bildschirm anzeigt

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
