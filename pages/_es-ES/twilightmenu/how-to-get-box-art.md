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
1. Descarga la última versión de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extrae `TwilightBoxart-Windows-UX.zip` y abre `TwilightBoxart.exe`
1. Pincha en `Detect SD`
   - Si no encuentra la tarjeta SD correcta pincha en `Browse...` y selecciónala
1. Cambia el tamaño, borde, y demás opciones a tu gusto
1. Pincha en `Start`
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Descarga la última versión de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extrae el `.zip`
1. Abre `TwilightBoxart.ini` en la carpeta extraída con un editor de texto
1. Escribe la ruta de tu tarjeta SD después de `SdRoot=` y guarda el archivo
   - En macOS es `/Volúmenes/` y el nombre de la tarjeta SD
1. Abre la consola de comandos
1. Escribe en la consola `cd` y arrastra a la consola la carpeta que contiene `TwilightBoxart.CLI`
1. Ejecuta `chmod +x TwilightBoxart.CLI`
1. Ejecuta `./TwilightBoxart.CLI`
1. Escribe `Yes` si muestra la ruta correcta de la SD
1. Make sure box art is set to be shown in TWiLight Menu++ settings
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Descarga un pack con imágenes en png de [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extrae los archivos .png en `sd:/_nds/TWiLightMenu/boxart`
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
