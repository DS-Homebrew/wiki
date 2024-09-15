---
lang: it-IT
layout: wiki
section: twilightmenu
category: installing
title: Installazione (3DS)
long_title: Installazione TWiLight Menu++ (3DS)
description: Come installare TWiLight Menu++ su Nintendo 3DS
tabs:
  - 
    working-camera: Fotocamera funzionante
    non-working-camera: Fotocamera non funzionante
    manual: Manuale
---

Prima di tutto avrai bisogno di un Custom Firmware installato sul tuo 3DS, segui [3ds.hacks.guide](https://3ds.hacks.guide) per installarlo
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Apri FBI e seleziona `Remote Install`, poi `Scan QR Code`
1. Scannerizza questo QR code per installare l'ultima versione di [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![QR code Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Chiudi FBI e avvia Universal-Updater
    - Se questa opzione non è presente nel menu home, riavvia il tuo 3DS
1. Trova TWiLight Menu++ nella griglia delle applicazioni, puoi effettuare una ricerca con la terza scheda sulla barra laterale se hai problemi a trovarla
    - L'app ha questa icona: ![Icona TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Premi <kbd class="face">A</kbd> oppure tocca l'icona del download nella barra laterale e seleziona `TWiLight Menu++` per installarla
    - This will take a while
    - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Scarica l'ultima versione di [`Universal-Updater.cia`](https://github.com/Universal-Team/Universal-Updater/releases/latest/download/Universal-Updater.cia)
1. Posiziona il file `Universal-Updater.cia` ovunque sulla tua scheda SD
1. Avvia FBI sul tuo Nintendo 3DS
1. Poi, naviga fino al posto dove hai piazzato il file `Universal-Updater.cia`
1. Seleziona il file `Universal-Updater.cia` e premi "Install & Delete"
1. Chiudi FBI e avvia Universal-Updater
    - Se questa opzione non è presente nel menu home, riavvia il tuo 3DS
1. Trova TWiLight Menu++ nella griglia delle applicazioni, puoi effettuare una ricerca con la terza scheda sulla barra laterale se hai problemi a trovarla
    - L'app ha questa icona: ![Icona TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Premi <kbd class="face">A</kbd> o tocca l'icona del download nella barra laterale e seleziona `TWiLight Menu++` per installarla
    - L'operazione potrebbe richiedere un po' di tempo
    - If installation fails, ensure the console is connected to the internet. Otherwise, click the `Manual` tab
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Scarica la versione più recente di [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Estrai `TWiLightMenu-3DS.7z`
1. Copia la cartella `_nds` nella root della tua scheda SD
1. Copia il file `BOOT.NDS` nella root della tua scheda SD
1. Copia la cartella `roms` nella root della tua scheda SD
1. Copia il file `.cia` nella root della tua scheda SD
1. Sul tuo 3DS, installa il file CIA con FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Installazione

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Accesso al contenuto delle flashcard

Una flashcard è un oggetto che si inserisce nello slot della scheda di gioco e contiene uno slot per schede microSD. Se non si possiede una flashcard, la guida finisce qui.
{:.alert .alert-warning}

#### Se hai un R4(i) Ultra

1. Segui [questa guida](installing-flashcard) a partire da `Per avviare giochi utilizzando il firmware della flashcard`
    - Puoi tranquillamente ignorare gli avvisi
1. Apri le impostazioni di TWLMenu++
1. Passa alla pagina `Impostazioni varie`
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
