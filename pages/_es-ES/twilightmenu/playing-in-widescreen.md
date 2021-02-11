---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Jugar en pantalla completa
description: Cómo usar TWiLight Menu++ a pantalla completa en la Nintendo 3DS
---

Necesitas una consola Old/New Nintendo 3DS o 2DS.

**Preparación**
- Comprueba que el `boot.firm` de Luma se encuentra en la raíz de la SD para que esto funcione
- Si has usado TWiLight Menu++ Updater o Universal-Updater para actualizar, instala los CIAs de la última versión de TWiLight Menu++ con FBI

1. Descarga [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) ([hilo de GBATemp](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. En la configuración de Luma, activa FIRMs y módulos externos
1. Instala el CIA de TWPatch
1. Abre TWPatch
1. (Opcional) Para una pantalla completa menos pixelada, mantén Y+B y activa `GPU scale test (¡riesgo para la salud!)`
1. Pulsa <kbd class="face">X</kbd> + <kbd>START</kbd> para generar un archivo `TwlBg.cxi` con pantalla completa
   - Si la pantalla superior no avisa de que el parche está activado, vuelve a empezar desde el paso 4
   - Si aún no funciona, espera al lanzamiento de RTCom con pantalla completa activada
1. En los ajustes de TWiLight Menu++, ve a la página `Misc settings` y pon `Screen Aspect Ratio` a `16:10`
   - Esto también puede activarse en juegos individuales

¡Hecho! ¡Disfruta de tus juegos de DS a pantalla completa!

**NOTA 1**: Cualquier juego/aplicación en Modo DS(i) se abrirá a pantalla completa, incluso los juegos que no sean compatibles con ella. Para que solo se ejecuten a pantalla completa los juegos compatibles, espera al lanzamiento de RTCom con pantalla completa activada.

**NOTA 2:** No mantengas pulsado <kbd>START</kbd> o <kbd>SELECT</kbd> cuando lances TWLMenu++ si no quieres que la pantalla aparezca con glitches. Si no ves la opción para cambiar la resolución de la pantalla, espera al lanzamiento de RTCom con pantalla completa activada.

No todos los juegos son compatibles con la pantalla completa. [Hemos creado una lista con los que sí lo son](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
