---
lang: it-IT
layout: wiki
section: twilightmenu
category: other
title: Creazione RAM Disk
description: Come creare RAM disk per l'utilizzo di homebrew DS vecchi con TWiLight Menu++
---

Some DS homebrew are incapable of properly accessing the SD card filesystem. Because of this, it may be necessary to load a standalone filesystem into the RAM containing the necessary files for your homebrew in order for it to work.

The software used here requires the Windows operating system.
{:.alert .alert-info}

You do not need to follow this if you're using a flashcard.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Instructions by Dakkon7, modified by Rocket Robz:

1. Esegui RAMDisk
1. Clicca su **Visualizza** -> **Avanzate**
1. Per **Dimensione disco**, digita `12` per DSi, o `28` per 3DS, sopra **Max 1023 MB**
1. Deseleziona l'opzione **Crea cartella TEMP**, se è già selezionata
1. Clicca **Carica/Salva**
1. Fare clic su `Avvia RAMDisk`, e dovrebbe apparire una nuova finestra per il tuo .img
1. Posiziona qualsiasi file e/o cartella che l'homebrew necessita, e/o file che vuoi usare
1. Nel programma RAMDisk, fare clic su `Salva immagine disco ora`
1. Save `romname.img` to the `ramdisks` folder in the .nds file location. If it does not exist already, create it
1. Fai clic su `Ferma RAMDisk` quando hai finito
1. In TWiLight Menu++, open the per-game settings for your homebrew
1. Imposta RAM disk a 0
1. Avvia il tuo homebrew, e dovrebbe leggere il tuo RAM disk

If you wish to use the other RAM disk slots for a single homebrew application, use the `.img1` extension for RAM disk slot 1, and so on.
{:.alert .alert-info}
