---
lang: it-IT
layout: wiki
section: twilightmenu
category: installing
title: Installazione (Flashcard)
description: Come installare TWiLight Menu++ su una flashcard Nintendo DS
---

### Installazione
1. Scarica l'ultima versione di `TWiLightMenu-Flashcard.7z` dalla [pagina delle versioni](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Estrai `TWiLightMenu-Flashcard.7z`
1. Copia la cartella `_nds` nella scheda microSD della tua flashcard
1. Copia il file `BOOT.NDS` nella scheda microSD della tua flashcard
1. Copia la cartella `roms` nella scheda microSD della tua flashcard
1. Se hai già dei dati di salvataggio, sposta i tuoi file `.sav` posizionati insieme alle tue ROM del DS, in una nuova cartella chiamata `saves`, che va anche questa nella posizione delle ROM del DS
1. ...
   - **DS Phat / Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1`
      - Questa opzione vi permetterà di utilizzare la velocità TWL e/o l'accelerazione della VRAM ai vostri giochi sulla flashcard, così come l'accesso alla scheda SD della console

### Per avviare giochi utilizzando il firmware della flashcard
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

   Installa YSMenu da [qui](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Assicurati di avere `YSMenu.nds`(rinominato `TTMenu.dat`, se esistente) e la cartella`TTMenu` nella root della microSD della flashcard
1. Imposta `Usa nds-bootstrap (B4DS)` a `No`, così verrà utilizzato il firmware della flashcard al posto di nds-bootstrap

### Auto-avvio TWiLight Menu++
1. Estrai il/i contenuto(i) di `Autoboot/(la tua flashcard)` nella scheda microSD della flashcard
   - Se non vedi la tua flashcard, salta questo passaggio
1. ...
   - **DS Phat / DS Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi / 3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
