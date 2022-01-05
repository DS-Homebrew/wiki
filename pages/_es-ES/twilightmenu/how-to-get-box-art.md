---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Cómo obtener carátulas
description: Cómo obtener carátulas para TWiLight Menu++
---

### Windows
1. Descarga la última versión de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extrae `TwilightBoxart-Windows-UX.zip` y abre `TwilightBoxart.exe`
1. Pincha en `Detect SD`
   - Si no encuentra la tarjeta SD correcta pincha en `Browse...` y selecciónala
1. Cambia el tamaño, borde, y demás opciones a tu gusto
1. Pincha en `Start`
1. Comprueba que se pueden mostrar las carátulas en los ajustes de TWiLight Menu++

### macOS/Linux
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
1. Comprueba que se pueden mostrar las carátulas en los ajustes de TWiLight Menu++

### Manual
1. Descarga un pack con imágenes en png de [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extrae los archivos .png en `sd:/_nds/TWiLightMenu/boxart`
1. Comprueba que se pueden mostrar las carátulas en los ajustes de TWiLight Menu++

**Para añadir tus propias imágenes:** Colócalas en `sd:/_nds/TWiLightMenu/boxart`. Pueden tener el TID del juego (ej. `ASME.png`) o el nombre del archivo (ej. `SM64DS.nds.png`). Tienen que estar en formato `.png`, con un tamaño recomendado de 128x115 y un máximo de 208x143.

Se pueden bajar imágenes individuales desde GameTDB, en la categoría **S Covers (png)**.
