---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Fuentes personalizadas
description: Cómo usar fuentes personalizadas en TWiLight Menu++
---

TWiLight Menu++ puede usar fuentes personalizadas si están en formato NFTR (Nitro FonT Resource). They will be used in Settings, the Manual's titles, and in the Nintendo DSi, Nintendo 3DS, SEGA Saturn, and Homebrew Launcher UIs.

### Estructura de carpetas
Las fuentes personalizadas se cargan desde `sd:/_nds/TWiLightMenu/extras/fonts/[nombre fuente]/[archivo fuente].nftr` donde `[nombre]` es el nombre que quieras y `[archivo fuente].nftr` es uno de los siguientes:
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

### Theme fonts
You may add fonts to [custom DSi/3DS themes](custom-dsi-3ds-themes), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the theme's root folder.

Custom themes can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Generar fuentes personalizadas
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://web.archive.org/web/20240618221756/https://pk11.us/nftr-editor/). Para regenerar una de las fuentes existentes de TWiLight Menu++ usando esta herramienta:
1. Abre un archivo NFTR con nftr-editor
1. Escribe los nombres de las fuentes que quieres usar de mayor a menor prioridad en `Input font`, separándolos con comas
    - En la caja de arriba, a la izquierda, tendrás una vista previa de las fuentes introducidas, y la NFTR actual en la caja de abajo
1. Haz clic en `Generate from font` y escribe `OK` para regenerar caracteres ya existentes y `Cancel` para regenerar los caracteres especiales de los botones (ej. &#xE000;)
1. Haz clic en `Save` y repítelo para el resto de tamaños
