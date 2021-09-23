---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Crear discos RAM
description: Cómo crear discos RAM para usar homebrew antiguo con TWiLight Menu++
---

Algunas aplicaciones homebrew para DS son incapaces de acceder al sistema de archivos de la tarjeta SD. Es por eso que podría ser necesario cargar un sistema de archivos independiente en la RAM que contenga los archivos necesarios para que la aplicación pueda funcionar.

Los progamas utilizados aquí requieren un sistema operativo Windows.
{:.alert .alert-info}

No necesitas seguir estos pasos si estas usando uan flashcard.
{:.alert .alert-info}

Para hacer un disco RAM, descarga [esto](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (haz clic en `Download Software`), y sigue las instrucciones a continuación.

Instrucciones por @Dakkon7, modificadas por RocketRobz:

1. Abre RAMDisk
1. Haz clic en **View** -> **Advanced**
1. En **Disk Size**, escribe `12` para DSi, o `28` para 3DS, encima de **Max 1023 MB**
1. Desmarca la casilla **Create TEMP Directory** si está marcada
1. Haz clic en **Load/Save**
1. Haz clic en `Start RAMDisk`, una nueva ventana para tu .img aparecerá
1. Coloca ahí cualquier archivo y/o fichero que el homebrew espera encontrarse o archivos que quieras usar
1. En RAMDisk, haz clic en `Save Disk Image Now`
1. Guarda `[nombre de la rom].img` en la carpeta `ramdisks` que se encuentra en el directorio donde está el archivo .nds de tu aplicación homebrew Si esta no existe, creala
1. Haz clic en `Stop RAMDisk` cuando termines
1. En TWiLight Menu++, abre la configuración por juego seleccionando tu aplicación homebrew
1. Configura la opción Disco RAM a 0
1. Abre el homebrew, debería leer el disco RAM

Si quieres usar otro disco RAM distinto para una misma aplicación, usa la extensión `.img1` para el disco RAM en la ranura 1, y así sucesivamente.
{:.alert .alert-info}
