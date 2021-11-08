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
1. Scarica la versione piè recente di [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Estrai `TWiLightMenu-Flashcard.7z`
1. Copia la cartella `_nds` nella scheda microSD della tua flashcard
1. Copia il file `BOOT.NDS` nella scheda microSD della tua flashcard
1. Copia la cartella `roms` nella scheda microSD della tua flashcard
1. Se hai già dei dati di salvataggio, sposta i tuoi file `.sav` posizionati insieme alle tue ROM del DS, in una nuova cartella chiamata `saves`, che va anche questa nella posizione delle ROM del DS
1. ...
   - **Utenti DS Phat/Lite:** Se avviare `BOOT.NDS` causa uno schermo bianco, inserire un DS Memory Expansion Pak, e riprovare
   - **Utenti DSi/3DS:** Esegui TWLMenu++ sulla scheda SD della console, e attiva `accesso SCFG da Slot-1` e imposta `Slot-1: Modalità Touch` a `Modalità DSi`
      - Questo permetterà di utilizzare la velocità clock TWL e/o un boost della VRAM ai vostri giochi su flashcard, così come a quelli sulla scheda SD della console, ed eseguendo giochi DSi-Enhanced/DSi-Exclusive/DSiWare in modalità DSi dalla tua flashcard

### Per avviare giochi utilizzando il firmware della flashcard

Please note that not all flashcards support running games in this fashion. If the below steps do not apply to your flashcard, you can skip this section.
{:.alert .alert-warning}

1. Estrai ciò che c'è in `Flashcart Loader/(la tua flashcard)` nella scheda microSD della flashcard
   - Se lo avete fatto, passate al terzo passo. In caso contrario, seguire i passaggi sotto la lista delle flashcard qui sotto

1. Per queste flashcard:
   - R4i-SDHC
   - r4isdhc.com cards
   - r4isdhc.hk cards
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - M3 DS Real
   - M3i Zero (modello non-GMP-Z003)
   - DSONE SDHC & DSONEi

   Install [RetroGameFan's YSMenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Assicurati di avere `YSMenu.nds` (rinominato da `TTMenu.dat` se non c'è) e la cartella `TTMenu` nel root della mircoSD della flashcard
1. Imposta `Usa nds-bootstrap` a `No`, così verrà utilizzato il firmware della flashcard al posto di nds-bootstrap

### Auto-avvio TWiLight Menu++
1. Estrai il/i contenuto(i) di `Autoboot/(la tua flashcard)` nella scheda microSD della flashcard
   - Se non vedi la tua flashcard, salta questo passaggio
1. ...
   - **Utenti DS Phat/Lite:** Andate nelle impostazioni nel menu del DS, e attivate l'avvio automatico, così la tua flashcard inizierà all'avvio
   - **Utenti DSi/3DS:** Avviate TWLMenu++ sulla scheda SD della console e attivate `Avvio automatico Slot-1`
