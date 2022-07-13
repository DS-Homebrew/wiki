---
lang: it-IT
layout: wiki
section: twilightmenu
category: other
title: Giocare in Widescreen
description: Come usare TWiLight Menu++ in widescreen su Nintendo 3DS
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
1. Apri TWiLight Menu++, premi <kbd class="face">Y</kbd> su un gioco a tua scelta per aprire le impostazioni del gioco selezionato, e imposta `Proporzioni schermo` a `16:10`

Hai finito! Goditi i tuoi giochi del DS in widescreen!

**NOTE:**
1. Non tenere premuto <kbd>START</kbd> o <kbd>SELECT</kbd> quando avvii TWLMenu++, se non vuoi avvere problemi con il widescreen
1. Non tutti i giochi sono compatibili con il 16:10. [Questa è una lista con tutti i giochi supportati](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. Se siete bloccati in modalità widescreen su TWL_FIRM (inclusa la GUI di TWLightMenu++) dopo aver seguito questa guida e aver lanciato un gioco compatibile con il widescreen 16:10, elimina `TwlBg.cxi` da `sd:/luma/sysmodules/`, e [disistalla](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) e[ri-scarica](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, e segui di nuova questa guida, assicurati di sta utilizzando la build originale di Luma
1. La maggior parte delle patches regoleranno solamente gli elementi 3D, gli elementi 2D (come i menu) saranno solo allungati
