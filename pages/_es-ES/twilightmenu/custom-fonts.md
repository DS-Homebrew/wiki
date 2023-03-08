---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Fuentes personalizadas
description: Cómo usar fuentes personalizadas en TWiLight Menu++
---

TWiLight Menu++ puede usar fuentes personalizadas si están en formato NFTR (Nitro FonT Resource). Serán usadas en los ajustes, los títulos del manual, y en los temas Nintendo DSi, Nintendo 3DS, Sega Saturn y Homebrew Launcher.

### Información sobre la fuentes incluidas
Hay tres fuentes ya incluidas con TWiLight Menu++. Cuando TWiLight Menu++ está ejecutándose en modo DSi, contendrán todos los caracteres necesarios para todos los lenguajes a los que TWiLight Menu++ está traducido, pero al ejecutarse en modo DS, contendrán menos caracteres debido a limitaciones de la memoria RAM. Son las siguientes:
- Por Defecto: Esta opción usa la fuente oficial de DSi como primaria, y soporta todos los caracteres que se usan en TWiLight Menu++ en todos los lenguajes en modo DS
- Chino (simplificado): Usa Noto Sans CS como fuente primaria y tiene más caracteres chinos (En chino simplificado) en modo DS, al costo de los caracteres para el resto de idiomas
- Coreano: Esta opción es idéntica a la opción Por Defecto en modo DSi, pero en modo DS tiene un set más completo de caracteres en hangul, al costo de caracteres para el resto de idiomas

### Estructura de carpetas
Las fuentes personalizadas se cargan desde `sd:/_nds/TWiLightMenu/extras/fonts/[nombre fuente]/[archivo fuente].nftr` donde `[nombre]` es el nombre que quieras y `[archivo fuente].nftr` es uno de los siguientes:
- `large-ds.nftr`, `large-dsi.nftr` o `large.nftr`: La fuente más grande, usada para los títulos
- `small-ds.nftr`, `small-dsi.nftr` o `small.nftr`: La fuente más pequeña, para la mayoría de textos

Los archivos `-ds` y `-dsi` tienen prioridad más alta que la normal y, de estar presente, se usará cuando TWiLight Menu++ se esté ejecutando en modo DS o DSi respectivamente.

### Fuentes de skins
Puedes añadir fuentes a las [skins personalizadas de los temas DSi y 3DS](custom-dsi-3ds-skins), que tendrán prioridad sobre lo que sea que esté establecido en los ajustes de TWiLight Menu++. Estas fuentes van en la subcarpeta `font`, dentro de la carpeta para la skin.

La skins personalizadas pueden, adicionalmente, usar fuentes personalizadas para la fecha y la hora (con el archivo `date_time.nftr`), y para el usuario de la consola (con el archivo `username.nftr`).

### Generar fuentes personalizadas
Puedes crear tus propias fuentes usando herramientas como [nftr-editor](https://pk11.us/nftr-editor/), de Pk11. Para regenerar una de las fuentes existentes de TWiLight Menu++ usando esta herramienta:
1. Abre un archivo NFTR con nftr-editor
1. Escribe los nombres de las fuentes que quieres usar de mayor a menor prioridad en `Input font`, separándolos con comas
   - En la caja de arriba, a la izquierda, tendrás una vista previa de las fuentes introducidas, y la NFTR actual en la caja de abajo
1. Haz clic en `Generate from font` y escribe `OK` para regenerar caracteres ya existentes y `Cancel` para regenerar los caracteres especiales de los botones (ej. &#xE000;)
1. Haz clic en `Save` y repítelo para el resto de tamaños
