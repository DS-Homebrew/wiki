---
lang: sv-SE
layout: wiki
section: twilightmenu
category: other
title: Hur man får Spelomslag
description: How to get box art/game covers in TWiLight Menu++
---

### Windows
1. Download the latest version of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extract `TwilightBoxart-Windows-UX.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
   - If it doesn't find the correct SD card click `Browse...` and select the right one
1. Change the size, border, etc options to your liking
1. Click `Start`
1. Make sure box art is set to be shown in TWiLight Menu++ settings

### macOS/Linux
1. Ladda ner den senaste versionen av [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extract the `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - On macOS this is `/Volumes/` then the name of your SD card
1. Öppna terminalen
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Say `Yes` if it shows your SD path correctly
1. Make sure box art is set to be shown in TWiLight Menu++ settings

### Manual
1. Download a png box art pack from [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extract the .png files to `sd:/_nds/TWiLightMenu/boxart`
1. Make sure box art is set to be shown in TWiLight Menu++ settings

**Lägg till dina egna omslag:** Placera dem i `sd:/_nds/TWiLightMenu/boxart`. Kan antingen ha spelets TID (t.ex. `ASME.png`), eller filnamnet (t.ex. `SM64DS.nds.png`). Dem måste vara i `.png`-format, med den rekommenderade storleken är 128x115 och max 208x143.

Individuella omslag kan också laddas ner från GameTDB under kategorin **S Covers (png)**.
