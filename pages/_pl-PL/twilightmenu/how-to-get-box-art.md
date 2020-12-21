---
lang: en-US
layout: wiki
section: twilightmenu
title: How to Get Box Art
category: Other
---

### 3DS
1. Install [KirovAir's TWiLight Menu++ Updater fork](https://github.com/KirovAir/TWiLightMenu-Updater/releases)
   - This will replace the normal TWiLight Menu++ Updater, so use Universal-Updater instead for updating TWiLight Menu++
1. Select `Extras`, `Boxart`, then press <kbd>X</kbd> to scan the full SD card or <kbd>A</kbd> to select a folder to scan
1. Choose a box art size
1. Choose a border style
1. Make sure box art is set to be shown in TWiLight Menu++ settings

### Windows
1. Download the latest version of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extract `TwilightBoxart-Windows-UX.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
   - If it doesn't find the correct SD card click `Browse...` and select the right one
1. Change the size, border, etc options to your liking
1. Click `Start`
1. On your DS, make sure box art is set to be shown in TWiLight Menu++ settings

### macOS/Linux
1. Download the latest version of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extract the `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor, then save the file
1. Type the path to your SD card after `SdRoot=`
   - On macOS this is `/Volumes/` then the name of your SD card
1. Open the terminal
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI` file by drag dropping it onto your terminal
1. Say `Yes` if it shows your SD path correctly
1. On your DS, make sure box art is set to be shown in TWiLight Menu++ settings

### Manual
1. Download a png box art pack from [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extract the .png files to `sd:/_nds/TWiLightMenu/boxart`
1. On your DS, make sure box art is set to be shown in TWiLight Menu++ settings

**To add your own box art:** Place them in `sd:/_nds/TWiLightMenu/boxart`. Can either have the game's TID (ex. `ASME.png`), or the filename (ex. `SM64DS.nds.png`). Must be in `.png` format, with the recommended size of 128x115 and maximum of 208x143.

Individual box art can also be downloaded from GameTDB, under the **S Covers (png)** category.
