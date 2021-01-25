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
Hay tres fuentes ya incluidas con TWiLight Menu++. Cuando TWiLight Menu++ está usando el Modo DSi contienen todos los caracteres necesarios para todos los idiomas a los que TWiLight se ha traducido, pero en el Modo DS están más limitados debido a limitaciones de RAM. Son las siguientes:
- Default: Usa la fuente oficial de DSi como fuente primaria y contiene todos los caracteres usados en TWiLight Menu++ para todos los idiomas en Modo DS
- Chino (simplificado): Usa Noto Sans CS como fuente primaria y tiene más caracteres en el Modo DS, a cambio de caracteres de otros lenguajes
- Koreano: Es idéntica a Default en el Modo DSi, pero en el Modo DS tiene un set de hangul más completo, a cambio de caracteres de otros lenguajes

### Estructura de directorios
Las fuentes personalizadas se cargan desde `sd:/_nds/TWiLightMenu/extras/fonts/[font name]/[font file].nftr` donde `[font name]` es el nombre que quieras y `[font file].nftr` es uno de los siguientes:
- `large-ds.nftr`, `large-dsi.nftr` o `large.nftr`: La fuente más grande, usada para los títulos
- `small-ds.nftr`, `small-dsi.nftr` o `small.nftr`: La fuente más pequeña, para la mayoría de textos

Los archivos `-ds` y `-dsi` tienen más prioridad que el normal y si son encontrados se usarán cuando TWiLight Menu++ esté en Modo DS o Modo DSi respectivamente.

### Generar fuentes personalizadas
Puedes crear tus propias fuentes usando una herramienta como [el nftr-editor de Pk11](https://pk11.us/nftr-editor/). Para regenerar una de las fuentes ya existentes de TWiLight Menu++:
1. Abre un archivo NFTR con nftr-editor
1. Escribe los nombres de las fuentes que quieres usar de mayor a menor prioridad en `Input font` separándolos con comas
   - En la caja de arriba, a la izquierda, tendrás una vista previa de las fuentes introducidas, y la NFTR actual en la caja de abajo
1. Pincha `Generate from font` y escribe `OK` para regenerar caracteres ya existentes y `Cancel` para regenerar los caracteres especiales de los botones (ej. &#xE000;)
1. Pincha en `Save` y repítelo para el resto de tamaños
