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
1. Haz clic en `Detect SD`
   - Si no encuentra la tarjeta SD correcta, haz clic en `Browse...` y selecciónala
1. Cambia el tamaño, borde, y demás opciones a tu gusto
1. Haz clic en `Start`
1. Asegúrate de que hayas activado la opción para mostrar carátulas en los ajustes de TWiLight Menu++
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
1. Asegúrate de que hayas activado la opción para mostrar carátulas en los ajustes de TWiLight Menu++
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Descarga un pack con imágenes en png de [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extrae los archivos .png en `sd:/_nds/TWiLightMenu/boxart`
1. Asegúrate de que hayas activado la opción para mostrar carátulas en los ajustes de TWiLight Menu++
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**Para añadir tus propias carátulas:** Colócalas en el directorio `sd:/_nds/TWiLightMenu/boxart`.
- Pueden tener como nombre el TID del juego (ej.: `ASME.PNG`) o el nombre del archivo (ej.: `SM64DS.nds.png`)
- Las imágenes deben tener un formato `.png`, y un tamaño entre 128x115 y 208x143 píxeles
- Si en los ajustes de **TW**i**L**ight Menu++, la opción de mostrar Arte/Carátulas está puesta en `En Caché`, el tamaño de las imágenes debe ser de 44KiB o menos. Puedes usar una herramienta como [tinypng](https://tinypng.com/) para comprimir las imágenes a un tamaño adecuado

También puedes descargar carátulas de forma individual desde GameTDB, en la categoría **S Covers (png)**.
