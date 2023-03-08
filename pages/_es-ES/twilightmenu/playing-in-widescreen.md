---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Jugar en pantalla panorámica
description: Cómo usar TWiLight Menu++ en pantalla panorámica en la Nintendo 3DS
---

Esta sección requiere una consola de la familia de la 3DS a la que previamente se le haya instalado CFW, siguiendo la guía de [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-info}

### Instalación
1. Abre FBI y selecciona `Remote Install`, después `Scan QR Code`
1. Escanea el código QR para instalar la última versión de [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Código QR de Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Abre Universal Updater desde el menú HOME
1. Instala el paquete de TWPatch
   - Si tu consola no puede acceder a internet, puedes descargar [el archivo cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085) directamente, y luego instalarlo usando FBI
1. Regresa al menú HOME y abre TWPatch
1. Mantén pulsados los botones <kbd class="face">Y</kbd> y <kbd class="face">B</kbd> para abrir el menú de parches y habilita la opción `Widescreen patch (384x240 16:10)`
1. (Este paso es opcional) Para que la pantalla panorámica se vea menos borrosa, habilita también la opción `GPU scaling (blurry, no filters)`
1. Pulsa el botón <kbd class="face">B</kbd> para salir del menú de parches
1. Pulsa el botón <kbd>START</kbd> para generar el archivo `TwlBg.cxi` con los parches de pantalla panorámica
   - Si la pantalla superior no indica que el parche está activado, vuelve a empezar desde el paso 3
1. Mueve el archivo `TwlBg.cxi` de la carpeta `sd:/luma/sysmodules/` a la carpeta `sd:/_nds/TWiLightMenu/TwlBg/` (crea la carpeta `TwlBg`, si esta no existe), y renombra el archivo a `Widescreen.cxi`
1. Reinicia tu consola manteniendo pulsado <kbd>SELECT</kbd> para abrir la configuración de Luma3DS
1. Habilita la opción `external FIRMS and modules` y luego pulsa <kbd>START</kbd> para guardar y salir
1. Abre TWiLight Menu++, pulsa <kbd class="face">Y</kbd> en el juego que quieras jugar para abrir los ajustes por juego, y establece la opción `Relación de Aspecto` a `16:10`

¡Hecho! ¡Disfruta de tus juegos de DS en pantalla panorámica!

**NOTAS:**
1. No mantengas pulsados los botones <kbd>START</kbd> ni <kbd>SELECT</kbd> cuando inicies TWLMenu++, o de lo contrario la pantalla panorámica no se mostrará correctamente
1. No todos los juegos son compatibles con la pantalla panorámica. [Aqui hay una lista de juegos que soportan la pantalla panorámica](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. Si todos los títulos en modo DS(i) (incluyendo la interfaz de TWiLight Menu++) están atascados en modo pantalla panorámica después de seguir esta guía y haber iniciado un juego compatible con este modo, elimina el archivo `TwLBg.cxi` en la carpeta `sd:/luma/sysmodules/`, y [desinstala](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) y [vuelve a instalar](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, y vuelve a seguir esta guía, asegurándote de que estás usando la versión original de Luma
1. La mayoría de los parches de pantalla panorámica sólo ajustarán los elementos 3D para la pantalla panorámica, los elementos 2D (como los menús) sólo se estirarán
1. **Debes** cargar Luma 3DS desde la tarjeta SD. Si la pantalla panorámica no funciona, asegúrate de que tienes el archivo `boot.firm`en la carpeta raíz de tu tarjeta SD
