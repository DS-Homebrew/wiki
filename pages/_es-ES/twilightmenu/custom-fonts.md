---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Fuentes personalizadas
description: Cómo usar fuentes personalizadas en TWiLight Menu++
---

TWiLight Menu++ puede usar fuentes personalizadas si están en formato NFTR (Nitro FonT Resource). Serán usadas en los ajustes, los títulos del manual, y en los temas Nintendo DSi, Nintendo 3DS, Sega Saturn y Homebrew Launcher.

### Estructura de carpetas
Las fuentes personalizadas se cargan desde `sd:/_nds/TWiLightMenu/extras/fonts/[nombre fuente]/[archivo fuente].nftr` donde `[nombre]` es el nombre que quieras y `[archivo fuente].nftr` es uno de los siguientes:
- `large.nftr`: The larger font used for titles
- `small.nftr`: The smaller font used for most other text

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
