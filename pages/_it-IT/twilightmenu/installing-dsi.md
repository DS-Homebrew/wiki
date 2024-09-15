---
lang: it-IT
layout: wiki
section: twilightmenu
category: installing
title: Installazione (DSi)
long_title: Installazione TWiLight Menu++ (DSi)
description: Come installare TWiLight Menu++ su Nintendo DSi
---

Se non hai già un modo per eseguire gli homebrew sul tuo DSi, segui [dsi.cfw.guide](https://dsi.cfw.guide) per installare TWiLight Menu++
{:.alert .alert-info}

### Installazione
1. Scarica la versione piè recente di [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Estrai `TWiLightMenu-DSi.7z`
1. Copia la cartella `_nds` nella tua scheda SD
1. Copia il file `BOOT.NDS` nella tua scheda SD
1. Copia la cartella `roms` nella tua scheda SD
1. **Utenti di hiyaCFW:** Copiate la cartella `title` nella vostra scheda SD

### Auto-avvio con Unlaunch
1. Accendi il tuo DSi tenendo premuto <kbd class="face">A</kbd> e <kbd class="face">B</kbd>
1. Nel menu Unlaunch, vai a `OPTIONS`
1. Imposta `NO BUTTON` o un pulsante di tua scelta a ` TWiLight Menu++,` nel quale ci dovrebbe essere scritto `BOOT.NDS` sullo schermo inferiore

### Accesso al contenuto delle flashcard

Una flashcard è un oggetto che si inserisce nello slot della scheda di gioco e contiene uno slot per schede microSD. Se non si possiede una flashcard, la guida finisce qui.
{:.alert .alert-warning}

#### Se hai un R4(i) Ultra

1. Segui [questa guida](installing-flashcard) a partire da `Per avviare giochi utilizzando il firmware della flashcard`
    - Puoi tranquillamente ignorare gli avvisi
1. Apri le impostazioni di TWLMenu++
1. Vai alla pagina `Impostazioni varie`
1. Attiva `Accesso microSD Slot-1`
1. Esci dalle impostazioni TWLMenu++ premendo il pulsante `B`
    - Se finisci nel menu DS classico, premi di nuovo `B`

#### Se non hai un R4(i) Ultra

1. Crea un file o una cartella chiamata `primary` in `sd:/_nds/` (non quella della flashcard), in modo che TWiLight Menu++ legga le impostazioni dalla scheda SD della console dopo aver avviato la flashcard
1. Segui [questa guida](installing-flashcard) a partire da `Avvio automatico TWiLight Menu++`
1. Copia il file `BOOT.NDS` da `TWiLightMenu-Flashcard.7z` nella root della scheda microSD della tua flashcard
1. Apri le impostazioni di TWLMenu++
1. Vai alla pagina `Impostazioni varie`
1. Attiva `Accesso SCFG da Slot-1` (questa opzione sovrascrive `Accesso SD da Slot-1`)
1. Imposta `Slot-1: Modalità Touch` in `Modalità DSi`
1. Attiva `Avvio automatico Slot-1`
1. Esci dalle impostazioni TWLMenu++ premendo il pulsante `B`
    - Se finisci nel menu DS classico, avvia la tua flashcard
    - Altrimenti, riavvia TWiLight Menu++

#### Passare tra i contenuti della scheda SD a quelli della flashcard
- Premi o `SELECT`+`Sù` o `SELECT`+`Giù` per passare dai contenuti della SD a quelli della flashcard
    - Se il menu SELECT è abilitato, puoi farlo anche lì
    - Se utilizzi il tema 3DS, tocca l'icona della scheda di gioco/scheda SD
    - If you use the R4, GBC, or Wood themes, press `R` button
