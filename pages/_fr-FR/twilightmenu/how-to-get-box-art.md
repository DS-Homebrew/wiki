---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Comment obtenir des couvertures de boîte
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
1. Téléchargez la dernière version de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extract the `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - On macOS this is `/Volumes/` then the name of your SD card
1. Open the terminal
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Say `Yes` if it shows your SD path correctly
1. Make sure box art is set to be shown in TWiLight Menu++ settings

### Manual
1. Download a png box art pack from [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extract the .png files to `sd:/_nds/TWiLightMenu/boxart`
1. Make sure box art is set to be shown in TWiLight Menu++ settings

**Pour ajouter votre propre box art :** Placez-les dans `sd:/_nds/TWiLightMenu/boxart`. Il peut soit avoir le TID du jeu (ex. `ASME.png`), soit le nom du fichier (ex. `SM64DS.nds.png`). Doit être au format `.png` , avec la taille recommandée de 128x115 et un maximum de 208x143.

Les pochettes individuelles peuvent également être téléchargées à partir de la GameTDB, sous la catégorie **S Covers (png)**.
