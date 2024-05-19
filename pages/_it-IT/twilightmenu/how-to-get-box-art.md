---
lang: it-IT
layout: wiki
section: twilightmenu
category: other
title: Come Ottenere Box Art
description: Come ottenere le box art/le copertine dei giochi in TWiLight Menu++
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: Manuale
---

{% capture tab-windows %}
1. Download [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases)
1. Extract `TwilightBoxart-Windows-GUI.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
   - If it doesn't find the correct SD card click `Browse...` and select the right one
1. **Optional:** Change the size, border, etc options to your liking
1. Click `Start`
1. Assicurati che la box art sia impostata per essere mostrata nelle impostazioni di TWiLight Menu++
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Download [TWiLightBoxart](https://github.com/MateusRodCosta/TwilightBoxart/releases)
1. Extract the MacOS or Linux `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - On macOS this is `/Volumes/` then the name of your SD card
1. Open the terminal
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Use the arrow and enter keys to select `Yes` if it shows your SD path correctly
1. Assicurati che la box art sia impostata per essere mostrata nelle impostazioni di TWiLight Menu++
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Download a png box art pack from [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs), under the **S Covers (png)** category
1. Estrai i file .png in `sd:/_nds/TWiLightMenu/boxart`
1. Assicurati che la box art sia impostata per essere mostrata nelle impostazioni di TWiLight Menu++
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**Per aggiungere la tua box art:**.
- Can either have the game's TID (ex. `ASME.png`), or the filename (ex. `SM64DS.nds.png`)
- Must be in `.png` format, with the recommended size of 128x115 and maximum of 208x143
- If your **TW**i**L**ight Menu++ configuration has Box Art viewing set to `Cached`, the image size must be 44 KiB or below. You can use a tool like [tinypng](https://tinypng.com/) to compress the images to an acceptable size

Le singole box art possono anche essere scaricate da GameTDB, nella categoria **S Covers (png)**.
