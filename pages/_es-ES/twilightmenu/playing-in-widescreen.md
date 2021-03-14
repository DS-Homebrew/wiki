---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Jugar en pantalla completa
description: Cómo usar TWiLight Menu++ a pantalla completa en la Nintendo 3DS
---

Requires a Nintendo 3DS or 2DS console.
{:.alert .alert-info}

### Preparación
- Comprueba que el `boot.firm` de Luma se encuentra en la raíz de la SD para que esto funcione

### Instalación
1. Descarga [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) y copia `TWPatch.cia` en la tarjeta SD ([hilo de GBATemp](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Instala `TWPatch.cia` usando FBI
   - También puedes usar Universal-Updater para instalar TWPatch y saltarte los dos pasos anteriores
1. Vuelve al menú de inicio y abre TWPatch
1. Mantén <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> y activa `Widescreen patch (384x240 16:10)`
1. (Opcional) Para una pantalla completa menos pixelada, activa también `GPU scale test (health hazard!)`
   - El "health hazard!" viene porque al desarrollador le dio dolor de cabeza debido al difuminado
1. Pulsa <kbd>START</kbd> para generar un archivo `TwlBg.cxi` con pantalla completa
   - Si la pantalla superior no indica que el parche está activado, repite el proceso desde el paso 3
   - Si aún no funciona, espera al lanzamiento de RTCom con pantalla completa activada
1. Reinicia tu 3DS manteniendo pulsado <kbd>SELECT</kbd> para abrir la configuración de Luma3DS
1. Activa`external FIRMs and modules` y pulsa <kbd>START</kbd> para guardar y salir
1. Abre los ajustes de TWiLight Menu++, ve a la página `Misc settings` y pon `Screen Aspect Ratio` a `16:10`
   - Esto también puede activarse en juegos individuales

¡Hecho! ¡Disfruta de tus juegos de DS a pantalla completa!

**NOTE1:** Every game/app in DS(i) mode will run in widescreen, even the games that aren't compatible with widescreen. Para que solo se ejecuten a pantalla completa los juegos compatibles, espera al lanzamiento de RTCom con pantalla completa activada.

**NOTA 2:** No mantengas pulsado <kbd>START</kbd> o <kbd>SELECT</kbd> cuando lances TWLMenu++ si no quieres que la pantalla aparezca con glitches. Si no ves la opción para cambiar la resolución de la pantalla, espera al lanzamiento de RTCom con pantalla completa activada.

No todos los juegos son compatibles con la pantalla completa. [Hemos creado una lista con los que sí lo son](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
