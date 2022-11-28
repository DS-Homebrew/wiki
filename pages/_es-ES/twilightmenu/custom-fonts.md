---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Fuentes personalizadas
description: Cómo usar fuentes personalizadas en TWiLight Menu++
---

TWiLight Menu++ puede usar fuentes personalizadas si están en formato NFTR (Nitro FonT Resource). Se puede usar en la configuración, los manuales de los juegos y en los temas de Nintendo DSi, Nintendo 3DS, SEGA Saturn y Homebrew Launcher.

### Sobre las fuentes ya incluidas
Hay tres fuentes ya incluidas con TWiLight Menu++. When TWiLight Menu++ is running in DSi Mode, they all contain all of the characters that should be needed for all of the languages TWiLight is translated to, but when running in DS Mode they are more limited due to RAM limitations. Son las siguientes:
- Default: This uses the official DSi font as its primary font, and supports all characters that are used in TWiLight Menu++ itself in all languages in DS mode
- Chino (simplificado): Usa Noto Sans CS como fuente primaria y tiene más caracteres en el Modo DS, a cambio de caracteres de otros lenguajes
- Koreano: Es idéntica a Default en el Modo DSi, pero en el Modo DS tiene un set de hangul más completo, a cambio de caracteres de otros lenguajes

### Estructura de directorios
Las fuentes personalizadas se cargan desde `sd:/_nds/TWiLightMenu/extras/fonts/[font name]/[font file].nftr` donde `[font name]` es el nombre que quieras y `[font file].nftr` es uno de los siguientes:
- `large-ds.nftr`, `large-dsi.nftr` o `large.nftr`: La fuente más grande, usada para los títulos
- `small-ds.nftr`, `small-dsi.nftr` o `small.nftr`: La fuente más pequeña, para la mayoría de textos

Los archivos `-ds` y `-dsi` tienen más prioridad que el normal y si son encontrados se usarán cuando TWiLight Menu++ esté en Modo DS o Modo DSi respectivamente.

### Skin fonts
You may add fonts to [custom DSi/3DS theme skins](custom-dsi-3ds-skins), which will override whatever is set in TWiLight Menu++ settings. These fonts go in the `font` folder, in the skin's root folder.

Custom skins can additionally use override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

### Generating custom fonts
You can make your own fonts using a utility such as Pk11's [nftr-editor](https://pk11.us/nftr-editor/). To regenerate one of TWiLight Menu++'s existing fonts using it:
1. Abre un archivo NFTR con nftr-editor
1. Escribe los nombres de las fuentes que quieres usar de mayor a menor prioridad en `Input font` separándolos con comas
   - En la caja de arriba, a la izquierda, tendrás una vista previa de las fuentes introducidas, y la NFTR actual en la caja de abajo
1. Pincha `Generate from font` y escribe `OK` para regenerar caracteres ya existentes y `Cancel` para regenerar los caracteres especiales de los botones (ej. &#xE000;)
1. Pincha en `Save` y repítelo para el resto de tamaños
