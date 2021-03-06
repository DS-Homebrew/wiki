---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Jugar en pantalla completa
description: Cómo usar TWiLight Menu++ a pantalla completa en la Nintendo 3DS
---

Necesitas una consola Old / New Nintendo 3DS o 2DS.
{:.alert .alert-info}

### Preparación
- Comprueba que el `boot.firm` de Luma se encuentra en la raíz de la SD para que esto funcione

### Instalación
1. Descarga [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) y copia `TWPatch.cia` en la tarjeta SD ([hilo de GBATemp](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Instala `TWPatch.cia` usando FBI
   - También puedes usar Universal-Updater para instalar TWPatch y saltarte los dos pasos anteriores
1. Vuelve al menú de inicio y abre TWPatch
1. Hold <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> and enable `Widescreen patch (384x240 16:10)`
1. (Optional!) For a less pixelated widescreen, also enable `GPU scale test (health hazard!)`
   - The "health hazard!" is because it gave the developer a headache due to its blurriness
1. Press <kbd>START</kbd> to generate a `TwlBg.cxi` file with widescreen
   - If the top screen doesn't indicate that wide patch is enabled, start from step 3 again
   - If widescreen still doesn't work, wait for RTCom-activated widescreen to be released
1. Restart your 3DS while holding <kbd>SELECT</kbd> to open Luma3DS's configuration
1. Enable `external FIRMs and modules`, then press <kbd>START</kbd> to save and quit
1. Open TWiLight Menu++ settings, switch to the `Misc settings` page, and set `Screen Aspect Ratio` to `16:10`
   - This can be done per-game as well

¡Hecho! ¡Disfruta de tus juegos de DS a pantalla completa!

**NOTA 1**: Cualquier juego/aplicación en Modo DS(i) se abrirá a pantalla completa, incluso los juegos que no sean compatibles con ella. Para que solo se ejecuten a pantalla completa los juegos compatibles, espera al lanzamiento de RTCom con pantalla completa activada.

**NOTA 2:** No mantengas pulsado <kbd>START</kbd> o <kbd>SELECT</kbd> cuando lances TWLMenu++ si no quieres que la pantalla aparezca con glitches. Si no ves la opción para cambiar la resolución de la pantalla, espera al lanzamiento de RTCom con pantalla completa activada.

No todos los juegos son compatibles con la pantalla completa. [Hemos creado una lista con los que sí lo son](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
