---
lang: it-IT
layout: wiki
section: twilightmenu
category: installing
title: Installazione (3DS)
long_title: Installing TWiLight Menu++ (3DS)
description: How to install TWiLight Menu++ on the Nintendo 3DS
tabs:
  - 
    working-camera: Working camera
    non-working-camera: Non-working camera
    manual: Manual
---

Devi avere prima il Custom Firmware sul tuo 3DS, segui [3ds.hacks.guide](https://3ds.hacks.guide) per installarlo
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Apri FBI e seleziona `Remote Install`, poi `Scan QR Code`
1. Scannerizza questo QR code per installare l'ultima versione di [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![QR code Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Chiudi FBI e avvia Universal-Updater
   - Se questa opzione non è presente nel menu home, riavvia il tuo 3DS
1. Trova TWiLight Menu++ nella griglia delle applicazioni, puoi effettuare una ricerca con la terza scheda sulla barra laterale se hai problemi a trovarla
   - L'app ha questa icona: ![Icona TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Premi <kbd class="face">A</kbd> oppure tocca l'icona del download nella barra laterale e seleziona `TWiLight Menu++` per installarla
   - L'operazione potrebbe richiedere un pò di tempo
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Scarica il file `Universal-Updater.cia` dalla pagina [delle versioni di Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases)
1. Posiziona il file `Universal-Updater.cia` ovunque sulla tua scheda SD
1. Avvia FBI sul tuo Nintendo 3DS
1. In FBI, naviga fino al posto dove hai piazzato il file `Universal-Updater.cia`
1. Seleziona il file `Universal-Updater.cia` e premi "Install & Delete"
1. Chiudi FBI e avvia Universal-Updater
   - Se questa opzione non è presente nel menu home, riavvia il tuo 3DS
1. Trova TWiLight Menu++ nella griglia delle applicazioni, puoi effettuare una ricerca con la terza scheda sulla barra laterale se hai problemi a trovarla
   - L'app ha questa icona: ![Icona TWiLight Menu++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Premi <kbd class="face">A</kbd> o tocca l'icona del download nella barra laterale e seleziona `TWiLight Menu++` per installarla
   - L'operazione potrebbe richiedere un pò di tempo
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Scarica l'ultima versione di `TWiLightMenu-3DS.7z` dalla [pagina delle versioni](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Estrai `TWiLightMenu-3DS.7z`
1. Copia la cartella `_nds` nella root della tua scheda SD
1. Copia il file `BOOT.NDS` nella root della tua scheda SD
1. Copia la cartella `roms` nella root della tua scheda SD
1. Copia i due file `.cia` nella root della scheda SD
1. Sul tuo 3DS, installa i due file CIA con FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Installazione

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
