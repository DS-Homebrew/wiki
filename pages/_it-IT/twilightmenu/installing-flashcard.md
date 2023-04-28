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
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and/or insert a DS Memory Expansion Pak, and try again

### Auto-avvio TWiLight Menu++
1. Estrai il/i contenuto(i) di `Autoboot/(la tua flashcard)` nella scheda microSD della flashcard
   - Se non vedi la tua flashcard, salta questo passaggio
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### Per avviare giochi utilizzando il firmware della flashcard

Nota bene che funziona solamente se la flashcard è impostata per avviarsi automaticamente in TWiLight Menu++. Guarda la sezione precedente per capire come farlo.
{:.alert .alert-warning}

Nota bene che non tutte le flashcard supportano l'avvio dei giochi in questo modo. Se i seguenti passaggi non si applicano alla tua flashcard, puoi saltare questa sezione.
{:.alert .alert-warning}

1. Estrai ciò che c'è in `Flashcart Loader/(la tua flashcard)` nella scheda microSD della flashcard
   - A README.txt file is present in the `Flashcart Loader` folder, to help find which flashcart loader is appropriate for your flashcard.
   - If you have done so, continue to step 3. If not, follow the steps below the flashcard list below

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
1. Open TWLMenu++ Settings, switch to `nds-bootstrap settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
