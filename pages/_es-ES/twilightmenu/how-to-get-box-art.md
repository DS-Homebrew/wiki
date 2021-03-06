---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Cómo obtener las carátulas
description: Cómo obtener las carátulas / cubiertas de los juegos en TWiLight Menu++
---

### 3DS
1. Instala [el fork del TWiLight Menu++ Updater de KirovAir](https://github.com/KirovAir/TWiLightMenu-Updater/releases)
   - Este reemplazará al TWiLight Menu++ Updater normal, por lo que deberás usar Universal-Updater para actualizar TWiLight Menu++ en su lugar
1. Selecciona `Extras`, `Boxart`, pulsa <kbd class="face">X</kbd> para escanear toda la tarjeta SD o <kbd class="face">A</kbd> para elegir en qué carpeta buscar
1. Escoge un tamaño de carátula
1. Escoge un estilo de borde
1. Comprueba que se pueden mostrar las carátulas en los ajustes de TWiLight Menu++

### Windows
1. Descarga la última versión de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extrae `TwilightBoxart-Windows-UX.zip` y abre `TwilightBoxart.exe`
1. Pincha en `Detect SD`
   - Si no encuentra la tarjeta SD correcta pincha en `Browse...` y selecciónala
1. Cambia el tamaño, borde, y demás opciones a tu gusto
1. Pincha en `Start`
1. Make sure box art is set to be shown in TWiLight Menu++ settings

### macOS/Linux
1. Descarga la última versión de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extrae el `.zip`
1. Open `TwilightBoxart.ini` in the extracted folder in a text editor
1. Type the path to your SD card after `SdRoot=`, then save the file
   - En macOS es `/Volúmenes/` y el nombre de la tarjeta SD
1. Abre la consola de comandos
1. Escribe en la consola `cd` y arrastra a la consola la carpeta que contiene `TwilightBoxart.CLI`
1. Ejecuta `chmod +x TwilightBoxart.CLI`
1. Run `./TwilightBoxart.CLI`
1. Escribe `Yes` si muestra la ruta correcta de la SD
1. Make sure box art is set to be shown in TWiLight Menu++ settings

### Manual
1. Descarga un pack con imágenes en png de [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extrae los archivos .png en `sd:/_nds/TWiLightMenu/boxart`
1. Make sure box art is set to be shown in TWiLight Menu++ settings

**Para añadir tus propias imágenes:** Colócalas en `sd:/_nds/TWiLightMenu/boxart`. Pueden tener el TID del juego (ej. `ASME.png`) o el nombre del archivo (ej. `SM64DS.nds.png`). Tienen que estar en formato `.png`, con un tamaño recomendado de 128x115 y un máximo de 208x143.

Se pueden bajar imágenes individuales desde GameTDB, en la categoría **S Covers (png)**.
