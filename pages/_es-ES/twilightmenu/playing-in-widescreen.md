---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Jugar en pantalla completa
description: Cómo usar TWiLight Menu++ a pantalla completa en la Nintendo 3DS
---

This section requires a 3DS family console, running a modern CFW environment from [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-info}

### Installing
1. Open FBI and select `Remote Install`, then `Scan QR Code`
1. Scan this QR code to install the latest version of [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Open Universal Updater from your HOME Menu
1. Install the TWPatch package
   - If your console is unable to access the Internet, you can download [TWPatch.cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085) directly, then install it with FBI
1. Return to the HOME menu and launch TWPatch
1. Hold <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> to open the patch menu and enable `Widescreen patch (384x240 16:10)`
1. (Optional!) For a less pixelated widescreen, also enable `GPU scaling (blurry, no filters)`
1. Press <kbd class="face">B</kbd> to exit the patch menu
1. Press <kbd>START</kbd> to generate a `TwlBg.cxi` file with widescreen
   - If the top screen doesn't indicate that wide patch is enabled, start from step 3 again
1. Move `TwlBg.cxi` from `sd:/luma/sysmodules/` to `sd:/_nds/TWiLightMenu/TwlBg/` (create `TwlBg` folder, if it doesn't exist), and rename the file to `Widescreen.cxi`
1. Restart your 3DS while holding <kbd>SELECT</kbd> to open Luma3DS's configuration
1. Enable `external FIRMs and modules`, then press <kbd>START</kbd> to save and quit
1. Open TWiLight Menu++, press <kbd class="face">Y</kbd> on your desired game to bring up the per-game settings, and set `Screen Aspect Ratio` to `16:10`

¡Hecho! ¡Disfruta de tus juegos de DS a pantalla completa!

**NOTAS:**
1. No mantengas presionado <kbd>START</kbd> ni <kbd>SELECT</kbd> cuando inicies TWLMenu++, si no quieres que la pantalla panoramica parezca glitcheada
1. No todos los juegos son compatibles con la pantalla panoramica. [Aqui hay una lista de juegos que soportan la pantalla panoramica](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. If you're stuck in widescreen mode in all of TWL_FIRM (including the TWLMenu++ GUI) after following this guide and launching a widescreen-compatible game, delete `TwlBg.cxi` at `sd:/luma/sysmodules/`, and [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide, as well as using the original build of Luma
1. La mayoría de los parches de pantalla panoramica sólo ajustarán los elementos 3D para la pantalla panoramica, los elementos 2D (como los menús) sólo se estirarán
1. Luma3DS **must** be loaded from the SD card, if widescreen isn't working ensure that you have `boot.firm` in the root of your SD
