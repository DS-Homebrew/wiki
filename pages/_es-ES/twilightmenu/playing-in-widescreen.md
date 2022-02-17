---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Jugar en pantalla completa
description: Cómo usar TWiLight Menu++ a pantalla completa en la Nintendo 3DS
---

Necesitas una consola Nintendo 3DS o 2DS.
{:.alert .alert-info}

### Preparación
- Comprueba que el archivo `boot.firm` de Luma se encuentra en la raíz de la SD para que esto funcione

### Instalación
1. Descarga [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia) y copia `TWPatch.cia` a tu tarjeta SD ([Hilo de GBATemp](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Instala `TWPatch.cia` usando FBI
   - También puedes usar Universal-Updater para instalar TWPatch y saltarte los dos pasos anteriores
1. Vuelve al menú de inicio y abre TWPatch
1. Manten presionados <kbd class="face">Y</kbd> y <kbd class="face">B</kbd> para abrir el menu de parches y habilita el parche de `"Pantalla ancha" (resolucion de 384x240 16:10)`
1. (Opcional!) Para obtener una pantalla panoramica menos pixeleada, tambien habilita `GPU scaling (borroso y sin filtros)`
1. Presiona <kbd class="face">B</kbd> para salir de el menu de parches
1. Presiona <kbd>START</kbd> para generar un archivo `TwlBg.cxi` con pantalla panoramica
   - Si la pantalla de arriba no indica que el parche está habilitado, vuelve a comenzar desde el paso 3
1. Mueve `TwlBg.cxi` desde `sd:luma/sysmodules/` a `sd:/_nds/TWiLightMenu/TwlBg/` (crea la carpeta `TwlBg` si no existe), y renombra el archivo a `Widescreen.cxi`
1. Reinicia tu 3DS manteniendo pulsado <kbd>SELECT</kbd> para abrir la configuración de Luma3DS
1. Habilita `external FIRMs and modules`, entonces presiona <kbd>START</kbd> para guardar y salir
1. Abre el menu de TWiLight Menu++, presiona <kbd class="face">Y</kbd> en el juego que desees para que aparezca la configuracion por juego, y establece `Screen Aspect Ratio` a `16:10`

¡Hecho! ¡Disfruta de tus juegos de DS a pantalla completa!

**NOTAS:**
1. No mantengas presionado <kbd>START</kbd> ni <kbd>SELECT</kbd> cuando inicies TWLMenu++, si no quieres que la pantalla panoramica parezca glitcheada
1. No todos los juegos son compatibles con la pantalla panoramica. [Aqui hay una lista de juegos que soportan la pantalla panoramica](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. If you're stuck in widescreen mode in all of TWL_FIRM (including the TWLMenu++ GUI) after following this guide and launching a widescreen-compatible game, delete `TwlBg.cxi` at `sd:/luma/sysmodules/`, and [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide, as well as using the original build of Luma
1. La mayoría de los parches de pantalla panoramica sólo ajustarán los elementos 3D para la pantalla panoramica, los elementos 2D (como los menús) sólo se estirarán
