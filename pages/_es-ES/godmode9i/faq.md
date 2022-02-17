---
lang: es-ES
layout: faq
section: godmode9i
title: FAQ y solución de problemas
long_title: 'GodMode9i: preguntas más frecuentes y solución de problemas'
description: Preguntas más frecuentes y solución de problemas para GodMode9i
---

#### ¿Cómo paso la pantalla "mounting drive(s)" al iniciar?
Esto ocurre cuando abres GodMode9i desde [hiyaCFW](../hiyacfw). Puedes presionar <kbd class="face">X</kbd> mientras ejecutas GodMode9i para omitir el montado de la NAND. Otra opción, es lanzar GodMode9i directamente desde Unlaunch para poder montar la NAND.

#### ¿Por qué no puedo agregar, quitar o editar archivos de la NAND?
Editar archivos en la NAND de la DSi no es seguro y puede llevar fácilmente a un brickeo, por lo que GodMode9i intencionalmente carece de esta opción.

#### ¿Por qué no puedo ver info del archivo NDS en algunos DSiWare?
Ciertos archivos DSiWare, específicamente aquellos ubicados en la carpeta `0003000f`, contienen información del sistema y por lo tanto no tienen un banner válido.

#### ¿Debería utilizar la versión NDS o la versión DSi? ¿Cuál es la diferencia?
Ambas versiones son funcionalmente idénticas, pero cada una tiene sus usos específicos.
- Si estás usando GodMode9i en una flashcard, utiliza la versión NDS
- Si estás instalando GodMode9i a tu SDNAND de hiyaCFW, utiliza la versión DSi
- Si estás iniciando GodMode9i desde TWiLight Menu++, ambas versiones funcionarán igual
- Si estás instalando GodMode9i al Menú HOME de tu 3DS, utiliza la versión CIA

#### ¿Cómo cambio el idioma?
Puedes cambiar el idioma de GodMode9i presionando <kbd>START</kbd>, seleccionando la última opción en el menú, y eligiendo el idioma que deseas usar.

Tenga en cuenta que esto sólo funcionará si GodMode9i es ejecutado desde TWiLight Menu++ o si hay una copia de `GodMode9i.nds`/`GodMode9i.dsi` en la raíz de la tarjeta SD.

También puede ingresar manualmente una ruta a cualquier archivo de idioma en su tarjeta SD en el archivo de configuración, `sd:/gm9i/config.ini`, en la línea `LANGUAGE_INI_PATH`.

#### ¿Cómo cambio la fuente?
Puedes cambiar la fuente de GodMode9i seleccionando un archivo de fuente `.frf` y eligiendo `Cargar fuente de letra`. Para establecer una fuente diferente como predeterminada puedes colocarla en `sd:/gm9i/font.frf` o editar el archivo de configuración (`sd:/gm9i/config.ini`) para indicar a `FONT_PATH` dónde está su archivo de fuente.

Puedes encontrar algunas fuentes pre-convertidas en la [carpeta resources](https://github.com/DS-Homebrew/GodMode9i/tree/master/resources/fonts) del repositorio de GitHub y puedes convertir fuentes propias desde imágenes PBM y archivos TXT que contengan el mapeo Unicode utilizando el script [fontriff.py](https://github.com/d0k3/GodMode9/blob/master/utils/fontriff.py) de GodMode9i.

#### How do I dump DS Saves using GBA save data?
GodMode9i is able to use the save data of GBA cartridges to dump the saves of most DS Game Cards. ROM files and save files over 1 MiB cannot be dumped this way as the files are impractically large. This can also be done using Haxxstation instead of a DS flashcard if you have another way to dump the GBA save files, they can then be recombined and decompressed on a computer.

1. Load GodMode9i on your flashcard
1. Backup your GBA saves!!
   - Any save data that hasn't been backed up will be lost
   - Check the files and find the larger ones, using 512 byte carts won't help much while 64 or 128 KiB saves will fit most DS saves in 1 or 2 carts
1. On the drive menu, press <kbd class="r">R</kbd> + <kbd class="face">B</kbd> to unmount the flashcard
1. Eject the flashcard, insert a DS Game Card and GBA cartridge
1. Select `NDS GAMECARD` then `Save`
1. When asked, press <kbd class="face">A</kbd> to write the data to the GBA cart
   - Swap to different GBA cartridges and repeat until the whole save is copied
1. Reboot your DS with your Slot-1 flashcard back in and reopen GodMode9i
1. Insert the first GBA cartridge you used and select `GBA GAMECART`
1. Choose `DS Save`
1. Swap through all the carts you dumped onto
1. Your DS save will now be in `fat:/gm9i/out`, you can now restore your backed up GBA save files to their original cartridges

If you want to write the save file back onto the Game Card, simply select the `.sav` file and choose `Restore save (Slot-1)`, then swap out your flashcard for the DS Game Card when prompted.
