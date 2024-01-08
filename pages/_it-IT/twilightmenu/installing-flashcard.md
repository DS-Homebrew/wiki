---
lang: it-IT
layout: wiki
section: twilightmenu
category: installing
title: Installazione (Flashcard)
long_title: Installazione TWiLight Menu++ (Flashcard)
description: Come installare TWiLight Menu++ su una flashcard del Nintendo DS
---

### Installazione
1. Scarica la versione più recente di [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Estrai `TWiLightMenu-Flashcard.7z`
1. Copia la cartella `_nds` nella scheda microSD della tua flashcard
1. Copia il file `BOOT.NDS` nella scheda microSD della tua flashcard
1. Copia la cartella `roms` nella scheda microSD della tua flashcard
1. Se hai già dei dati di salvataggio, sposta i tuoi file `.sav` posizionati insieme alle tue ROM del DS, in una nuova cartella chiamata `saves`, che va anche questa nella posizione delle ROM del DS
1. **Utenti DS Phat/Lite:** Se avviare `BOOT.NDS` causa uno schermo bianco, prova a seguire i passaggi per l'auto-avvio, e/o inserisci un DS Memory Expansion Pak e riprova

### Auto-avvio TWiLight Menu++
1. Estrai il/i contenuto(i) di `Autoboot/(la tua flashcard)` nella scheda microSD della flashcard
   - Se non vedi la tua flashcard, salta questo passaggio
1. **Utenti DS Phat/Lite:** Vai nelle impostazioni del menu DS e attiva l'avvio automatico, in questo modo la flashcard si avvierà automaticamente all'avvio

### Per avviare giochi utilizzando il firmware della flashcard

Nota bene che funziona solamente se la flashcard è impostata per avviarsi automaticamente in TWiLight Menu++. Guarda la sezione precedente per capire come farlo.
{:.alert .alert-warning}

Nota bene che non tutte le flashcard supportano l'avvio dei giochi in questo modo. Se i seguenti passaggi non si applicano alla tua flashcard, puoi saltare questa sezione.
{:.alert .alert-warning}

Tieni presente che perderai la possibilità di utilizzare i trucchi durante l'esecuzione di giochi in questo modo. Se vuoi mantenere la funzionalità trucchi, salta questa sezione.
{:.alert .alert-warning}

1. Estrai ciò che c'è in `Flashcart Loader/(la tua flashcard)` nella scheda microSD della flashcard
   - Nella cartella `Flashcart Loader` è presente un file README.txt che aiuta a individuare il caricatore flashcart più adatto alla propria flashcard.
   - Se l'hai già fatto, passa al terzo passaggio. In caso contrario, segui i passaggi sotto la lista delle flashcard

1. Per queste flashcard:
   - R4i-SDHC (r4i-sdhc.com)
   - r4isdhc.com 2014-2022 card (**non** .hk o .com.cn)
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC & DSONEi (i modelli non SDHC non ***sono*** supportati)
   - M3 DS Real
   - M3i Zero (modello non-GMP-Z003)
   - iTouchDS e iTouch2 (utilizza i file YSMenu di M3Real_M3iZero)
   - R4(i)RTS (r4rts.com) (usa i file YSMenu di M3Real_M3iZero)
   - R4 SDHC RTS (cartuccia nera) (r4isdhc.com) (utilizza i file YSMenu di M3Real_M3iZero)

   Installa [YSMenu di RetroGameFan](https://gbatemp.net/download/35737/).
      - Assicurati di avere `YSMenu.nds`(rinominato `TTMenu.dat`, se non già presente) e la cartella`TTMenu` nella root della microSD della flashcard
      - Non copiare `TTMenu.dat` direttamente; questo interromperà l'avvio automatico e il soft reset di YSMenu
1. Apri le impostazioni di TWLMenu++, e vai alla pagina `Impostazioni nds-bootstrap`, e imposta `Caricatori dei giochi` a `Kernel`, in questo modo il firmware della flashcard verrà utilizzato al posto di nds-bootstrap
