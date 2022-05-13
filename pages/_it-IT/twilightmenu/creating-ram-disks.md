---
lang: it-IT
layout: wiki
section: twilightmenu
category: other
title: Creazione RAM Disk
description: Come creare RAM disk per l'utilizzo di homebrew DS vecchi con TWiLight Menu++
---

Alcuni homebrew per DS non possono accedere correttamente al filesystem della scheda SD. Per questa ragione, potrebbe essere necessario caricare un filesystem indipendente nella RAM contenente i file di cui il tuo homebrew ha bisogno per funzionare.

Il software usato qui richiede il sistema operativo Windows.
{:.alert .alert-info}

Se stai usando una flashcard non hai bisogno di seguire questa guida.
{:.alert .alert-info}

Per creare un RAM disk, scarica [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (clicca `Download Software`), e segui le istruzioni qui sotto.

Istruzioni di Dakkon7, modificate da Rocket Robz:

1. Esegui RAMDisk
1. Clicca su **View** -> **Advanced**
1. Per **Disk Size**, digita `12` per DSi, o `28` per 3DS, sopra **Max 1023 MB**
1. Deseleziona l'opzione **Create TEMP Directory**, se è già selezionata
1. Clicca **Load/Save**
1. Fare clic su `Start RAMDisk`, e dovrebbe apparire una nuova finestra per il tuo .img
1. Posiziona qualsiasi file e/o cartella che l'homebrew necessita, e/o file che vuoi usare
1. Nel programma RAMDisk, fare clic su `Save Disk Image Now`
1. Salva `nomerom.img` nella cartella `ramdisks` nella directory .nds. Se non esiste già, creala
1. Fai clic su `Stop RAMDisk` quando hai finito
1. In TWiLight Menu++, apri le impostazioni di gioco per il tuo homebrew
1. Imposta RAM disk a 0
1. Avvia il tuo homebrew, e dovrebbe leggere il tuo RAM disk

Se vuoi usare gli altri slot RAM disk per una sola applicazione homebrew, usa l'estensione `.img1` per il RAM disk slot 1, e così via.
{:.alert .alert-info}
