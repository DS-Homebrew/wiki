---
lang: it-IT
layout: wiki
section: twilightmenu
category: customization
title: Sfondi personalizzati per Unlaunch
description: Come creare sfondi di avvio personalizzati e installarli con TWiLight Menu++
---

Potete trovare degli sfondi per Unlaunch su [TWiLight Menu++ skins site](https://skins.ds-homebrew.com/unlaunch/).
{:.alert .alert-info}

Usando TWiLight Menu++ è possibile patchare il programma di installazione di Unlaunch per avere un'immagine di sfondo personalizzata e una tavolozza di colori per il testo. Deve essere una GIF 256 x 192, con alcune restrizioni:
- Verrà mostrato solo il primo fotogramma, senza sfondi animati
- Il file deve essere uguale o inferiore a 15.472 byte
- GIF con più di 31 colori richiedono tavolozze speciali per evitare di rovinare il testo

### Installazione
1. Copia il file GIF in `sd:/_nds/TWiLightMenu/unlaunch/backgrounds`
1. Scarica [programma di installazione di Unlaunch](https://problemkaputt.de/unlaunch.zip) e estrai `UNLAUNCH.DSI` nella tua SD
1. Apri le impostazioni di TWiLight Menu++ andare sulla schermata `Impostazioni di Unlaunch`, e clicca su `Background`, e seleziona lo sfondo desiderato
1. Esci dalle impostazioni e avvia `Unlaunch DSi Installer`
    - Si dovrebbe visualizzarre la tua immagine personalizzata, se non lo fa allora spegni la tua console e assicurati che la tua GIF sia conforme ai requisiti indicati prima
1. Seleziona `Install Now`

### Usare GIF con più di 31 colori
Poichè la palette della GIF è caricata nella stessa area della VRAM delle palette di testo, la sovrascriverà se la palette diventa troppo grande, tuttavia questo può essere aggirato includendo le palette di testo nella palette della GIF. Usando questo con diversi colori si possono anche avere diversi colori di testo, se lo si vuole. Queste istruzioni si baseranno sul programma [GIMP](https://gimp.org), ma qualsiasi editor di immagini capace di riorganizzare la palette di un'immagine funzionerà. Nota del traduttore: Non conoscendo GIMP e non sapendo i termini italiani lascerò i termini in inglese.
1. Apri la tua immagine con GIMP e assicurati che sia 256 x 192 pixels
1. Nella barra dei menu in alto, seleziona `Image` -> `Mode` -> `Indexed...`
1. Seleziona `Generate optimum palette`e impsta i colori massimi fino a 226 colori
1. Seleziona un modello di dithering del menu a tendina `Color dithering`
    - Le immagini senza dithering in genere si comprimono meglio, ma con esso in genere hanno un aspetto migliore, prova a vedere quale sembra migliore per le dimensioni
1. Clicca `Convert`
1. Nella barra dei menu in alto, seleziona `File` -> `Export As...`, dagli un nome con l'estensione`.gif`, e clicca su `Export`
    - Se dà qualche avvertimento, clicca sul pulsante acceta
1. Nel prossimo popup, disabilita il comando `GIF comment` e clicca `Export`
1. Controlla la dimensione del file esportato, se è uguale o inferiore a 15.472 byte, passa al passaggio 13
1. Se la tua GIF è troppo grande, puoi usare [gifsicle](http://www.lcdf.org/gifsicle/) o [ezgif.com](https://ezgif.com/optimize) e provare a ottimizzarla
    - Queste istruzioni si baseranno su ezgif, essendo un sito web
1. Apri https://ezgif.com/optimize, e carica la tua GIF
1. Prova diversi livelli di compressione fino a quando non ne trovi una che porta la tua immagine sotto i 15.472 byte (15.11 KiB), sarebbe meglio un pò sotto perchè GIMP può aumentare un pò la dimensione
1. Salva la GIF ottimizzata e aprila con GIMP
1. Nella barra dei menu in alto, seleziona `Windows` -> `Dockable Dialogs` -> `Colormap`
1. Cambia il colore attuale `Foreground color` a #080808 e aggiungi 14 nuovi colori con il pulsante `+`
    - Se la tua immagine non ha almeno 133 colori dovrai continuare ad aggiungere colori fino a quando l'ultimo è indice 146
1. Fai clic con il tasto destro del mouse su un colore nalla mappa dei colori e selziona `Rearrange Colormap...`
1. Disponi i tuoi nuovi colori in modo che corrispondano a quelli delineati in rosso: (La seconda e la terza colonna a partire dalla quarta riga)<br> ![Tavolozza con colori di testo corretti](/assets/images/custom-unlaunch-bg/unlaunch-palette.png)
1. Usa il selezionatore di colori per far sì che i tuoi nuovi colori corrispondano a quelli dell'immagine precedente
1. Nella barra dei menu in alto, seleziona `File` -> `Export As...`, dagli un nome con l'estensione `.gif`, e clicca `Export`
1. Nel prossimo popup, disabilita il comando `GIF comment` e clicca `Export`
1. Assicurati che l'immagine si ancora sotto i 15.472 byte, se è diventata troppo grande ricomincia dal passo 10 usando un livello di compressione più alto
1. Hai fatto! Segui la sezione [Installazione](#installing) per usare la tua immagine!
