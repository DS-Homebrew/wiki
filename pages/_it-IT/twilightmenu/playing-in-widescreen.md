---
lang: it-IT
layout: wiki
section: twilightmenu
category: other
title: Giocare in Widescreen
description: Come usare TWiLight Menu++ in widescreen su Nintendo 3DS
---

Richiedi una console 3DS o 2DS.
{:.alert .alert-info}

### Preparazione
- Assicurati che il `boot.firm` di Luma sia nella scheda SD per funzionare

### Installazione
1. Scarica [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia) e copia `TWPatch.cia` nella tua SD card ([GBAtemp thread](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Installa `TWPatch.cia` usando FBI
   - È possibile utilizzare Universal-Updater per installare TWPatch invece dei due passaggi precedenti
1. Ritorna al menu home e avvia TWPatch
1. Premi <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> per aprire il patch menu e abilita `Widescreen patch (384x240 16:10)`
1. (Opzionale!) Per un widescreen meno pixellato, abilita anche `GPU scaling (blurry, no filters)`
1. Premi <kbd class="face">B</kbd> per uscire dal patch menu
1. Premi <kbd>START</kbd> per generare un `TwlBg.cxi`file con widescreen
   - Se lo schermo superiore non indica che la wide patch è abilitata, riprova il passaggio 3
1. Muovi `TwlBg.cxi` da `sd:/luma/sysmodules/` a `sd:/_nds/TWiLightMenu/TwlBg/` (se non è gia presente, crea la cartella `TwlBg`), e rinomina il file in `Widescreen.cxi`
1. Riavvia il tuo 3ds tenendo premuto <kbd>SELECT</kbd> per aprire il menu di Luma3DS's
1. Abilita `external FIRMs and modules`, e premi <kbd>START</kbd> per salvare e uscire
1. Apri TWiLight Menu++, premi <kbd class="face">Y</kbd> su un gioco a tua scelta per aprire le impostazioni del gioco selezionato, e imposta `Screen Aspect Ratio` a `16:10`

Hai finito! Goditi i tuoi giochi del DS in widescreen!

**NOTE:**
1. Non tenere premuto <kbd>START</kbd> o <kbd>SELECT</kbd> quando avvii TWLMenu++, se non vuoi avvere problemi con il widescreen
1. Non tutti i giochi sono compatibili con il 16:10. [Questa è una lista con tutti i giochi supportati](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. Se siete bloccati in modalità widescreen su TWL_FIRM (inclusa la GUI di TWLightMenu++) dopo aver seguito questa guida e aver lanciato un gioco compatibile con il widescreen 16:10, elimina `TwlBg.cxi` da `sd:/luma/sysmodules/`, e [disistalla](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) e[ri-scarica](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, e segui di nuova questa guida, assicurati di sta utilizzando la build originale di Luma
1. La maggior parte delle patches regoleranno solamente gli elementi 3D, gli elementi 2D (come i menu) saranno solo allungati
