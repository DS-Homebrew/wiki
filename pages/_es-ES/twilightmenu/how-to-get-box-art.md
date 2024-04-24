---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Cómo obtener carátulas
description: Cómo obtener carátulas para TWiLight Menu++
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: Manual
---

{% capture tab-windows %}
1. Download version 0.6 of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases/tag/0.6)
1. Extract `TwilightBoxart-Windows-UX.zip` and run `TwilightBoxart.exe`
1. Click `Detect SD`
   - If it doesn't find the correct SD card click `Browse...` and select the right one
1. Change the size, border, etc options to your liking
1. Click `Start`
1. Asegúrate de que la carátula está configurada para mostrarse en los ajustes de TWiLight Menu++
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Download version 0.6 of [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases/tag/0.6)
1. Extract the `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - On macOS this is `/Volumes/` then the name of your SD card
1. Open the terminal
1. In the terminal, type `cd ` then drag drop the folder with `TwilightBoxart.CLI` in it onto your terminal
1. Run `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Say `Yes` if it shows your SD path correctly
1. Asegúrate de que la carátula está configurada para mostrarse en los ajustes de TWiLight Menu++
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Descarga una carátula como imagen PNG desde [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs), en la categoría de **S Covers (png)**
1. Extrae los archivos .png en `sd:/_nds/TWiLightMenu/boxart`
1. Asegúrate de que la carátula está configurada para mostrarse en los ajustes de TWiLight Menu++
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**Para añadir tu propia carátula:** Colócalas en `sd:/_nds/TWiLightMenu/boxart`.
- Pueden tener como nombre el TID del juego (ej.: `ASME.PNG`) o el nombre del archivo (ej.: `SM64DS.nds.png`)
- Las imágenes deben tener un formato `.png`, y un tamaño entre 128x115 y 208x143 píxeles
- Si en los ajustes de **TW**i**L**ight Menu++, la opción de mostrar Arte/Carátulas está puesta en `En Caché`, el tamaño de las imágenes debe ser de 44KiB o menos. Puedes usar una herramienta como [tinypng](https://tinypng.com/) para comprimir las imágenes a un tamaño adecuado

Carátulas individuales también pueden ser descargadas desde GameTDB, en la categoría de **S Covers (png)**.
