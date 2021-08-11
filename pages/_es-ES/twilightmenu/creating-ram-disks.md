---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Crear discos RAM
description: Cómo crear discos RAM para usar homebrew antiguo con TWiLight Menu++
---

No necesitas seguir esto si estás usando una flashcard.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Instrucciones por @Dakkon7, modificadas por RocketRobz:

1. Abre RAMDisk
1. Pincha en **View** -> **Advanced**
1. Para **Disk Size**, escribe `12` para DSi, o `28` para 3DS, encima de **Max 1023 MB**
1. Desmarca **Create TEMP Directory** si está marcada
1. Pincha en **Load/Save**
1. Pincha en `Start RAMDisk`, una nueva ventana para tu .img aparecerá
1. Coloca ahí cualquier archivo y/o fichero que el homebrew espera encontrarse o archivos que quieras usar
1. En RAMDisk, pincha `Save Disk Image Now`
1. Guarda `romname.img` en una carpeta llamada `ramdisks` en el lugar que guardas el .nds
1. Pincha `Stop RAMDisk` cuando termines
1. En TWiLight Menu++, abre las opciones específicas de tu homebrew
1. Pon RAM disk a 0
1. Abre el homebrew, debería leer el disco RAM
