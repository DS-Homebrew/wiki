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
    manual: Manual
---

{% capture tab-windows %}
1. Scarica l'ultima versione di [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Estrai `TwilightBoxart-Windows-UX.zip` e esegui `TwilightBoxart.exe`
1. Clicca su `Detect SD`
   - Se non trova la SD corretta clicca su `Browse...` e seleziona quella giusta
1. Cambia le dimensione, il bordo, ecc., a tuo piacimento
1. Clicca `Start`
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Scarica l'ultima versione di [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Estrai il file `.zip`
1. Apri `TwilightBoxart.ini` dalla cartella estratta da un editor di testo
1. Scrivo il percorso della tua scheda SD `SdRoot=`, poi salva il file
   - Su macOS questo è `/Volumes/` poi il nome della tua scheda SD
1. Apri il terminale
1. Nel terminale, scrivi `cd` poi trascina la cartella con `TwilightBoxart.CLI` nel terminale 
1. Avvia `chmod +x TwilightBoxart.CLI`
1. Avvia `./TwilightBoxart.CLI`
1. Clicca su `Si` se è mostrata il percorso corretto della tua scheda SD
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Scarica un png box art pack da [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Estrai i files .png in `sd:/_nds/TWiLightMenu/boxart`
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**To add your own box art:** Place them in `sd:/_nds/TWiLightMenu/boxart`.
- Can either have the game's TID (ex. `ASME.png`), or the filename (ex. `SM64DS.nds.png`)
- Must be in `.png` format, with the recommended size of 128x115 and maximum of 208x143
- If your **TW**i**L**ight Menu++ configuration has Box Art viewing set to `Cached`, the image size must be 44 KiB or below. You can use a tool like [tinypng](https://tinypng.com/) to compress the images to an acceptable size

Individual box art can also be downloaded from GameTDB, under the **S Covers (png)** category.
