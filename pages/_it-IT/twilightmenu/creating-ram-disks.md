---
lang: it-IT
layout: wiki
section: twilightmenu
category: other
title: Creazione RAM Disk
description: Come creare RAM disk per l'utilizzo di homebrew DS vecchi con TWiLight Menu++
---

Non è necessario seguirlo se si utilizza una flashcard.
{:.alert .alert-info}

Per creare un RAM disk, scarica [questo](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) strumento (clicca `Scarica Software`), e segui le istruzioni qui sotto.

Istruzioni di @Dakkon7, modificate da RocketRobz:

1. Esegui RAMDisk
1. Clicca su **Visualizza** -> **Avanzate**
1. Per **Dimensione disco**, digita `12` per DSi, o `28` per 3DS, sopra **Max 1023 MB**
1. Un-mark **Create TEMP Directory**, if it's already marked
1. Clicca **Carica/Salva**
1. Fare clic su `Avvia RAMDisk`, e dovrebbe apparire una nuova finestra per il tuo .img
1. Posiziona qualsiasi file e/o cartella che l'homebrew necessita, e/o file che vuoi usare
1. Nel programma RAMDisk, fare clic su `Salva immagine disco ora`
1. Salva `romname.img` in una cartella chiamata `ramdisks` in .nds
1. Fai clic su `Ferma RAMDisk` quando hai finito
1. In TWiLight Menu++, apri le impostazioni per ogni gioco per il tuo homebrew
1. Imposta RAM disk a 0
1. Avvia il tuo homebrew, e dovrebbe leggere il tuo RAM disk
