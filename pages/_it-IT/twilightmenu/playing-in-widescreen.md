---
lang: it-IT
layout: wiki
section: twilightmenu
category: other
title: Giocare in Widescreen
description: Come usare TWiLight Menu++ in widescreen sul Nintendo 3DS
---

Richiede una console Old/New Nintendo 3DS o 2DS.
{:.alert .alert-info}

### Preparazione
- Assicurati che il `boot.firm` di Luma sia nella scheda SD per funzionare

### Installazione
1. Scarica [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) e copia `TWPatch.cia` sulla tua scheda SD ([thread di GBATemp](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Installa `TWPatch.cia` usando FBI
   - È possibile utilizzare Universal-Updater per installare TWPatch invece dei due passaggi precedenti
1. Ritorna al menu home e avvia TWPatch
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

Hai finito! Goditi i tuoi giochi del DS in widescreen!

**NOTA1**: Ogni gioco/app in modalità DS(i) verrà eseguito in widescreen, anche i giochi che non sono compatibili con il widescreen. Per far in modo che soltanto i giochi compatibili con il widescreen si avviino in widescreen, attendere che il widescreen RTCom-activated venga rilasciato.

**NOTA2:** Non tenere premuto <kbd>START</kbd> o <kbd>SELECT</kbd> quando si avvia TWLMenu++, se non vuoi che il widescreen sembri glitchato. Se non vedi l'impostazione delle proporzioni dello schermo, attendi che sia rilasciato il widescreen RTCom-actived.

Non tutti i giochi sono compatibili con il widescreen. [Abbiamo creato un elenco di giochi con il widescreen](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
