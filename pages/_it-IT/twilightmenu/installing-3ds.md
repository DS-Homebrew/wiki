---
lang: it-IT
layout: wiki
section: twilightmenu
category: installing
title: Installing (3DS)
description: Come installare TWiLight Menu++ su Nintendo 3DS
---

Devi avere prima il Custom Firmware sul tuo 3DS, segui [3ds.hacks.guide](https://3ds.hacks.guide) per installarlo
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Apri FBI e seleziona `Remote Install`, poi `Scan QR Code`
1. Scannerizza questo QR code per installare l'ultima versione di [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Chiudi FBI e avvia Universal-Updater
   - Se questa opzione non è presente nel menu home, riavvia il tuo 3DS
1. Trova TWiLight Menu++ nella griglia delle applicazioni, puoi effettuare una ricerca con la terza scheda sulla barra laterale se hai problemi a trovarla
   - L' app ha questa icona: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Premi <kbd class="face">A</kbd> oppure tocca l'icona del download nella barra laterale e seleziona `TWiLight Menu++` per installarla
   - Ci vorrà un po' di tempo
{% endcapture %}

{% capture tab-non-working-camera %}
1. Scarica il file `Universal-Updater.cia` dalla pagina [Universal-Updater release page](https://github.com/Universal-Team/Universal-Updater/releases)
1. Posiziona il file `Universal-Updater.cia` in qualsiasi cartella sulla tua scheda SD
1. Avvia FBI sul tuo Nintendo 3DS
1. In FBI, naviga fino al posto dove hai incollato il file `Universal-Updater.cia`
1. Seleziona il file `Universal-Updater.cia` e premi "Install & Delete"
1. Chiudi FBI e avvia Universal-Updater
   - Se questa opzione non è presente nel menu home, riavvia il tuo 3DS
1. Trova TWiLight Menu++ nella griglia delle applicazioni, puoi effettuare una ricerca con la terza scheda sulla barra laterale se hai problemi a trovarla
   - L' app ha questa icona: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Premi <kbd class="face">A</kbd> oppure tocca l'icona del download nella barra laterale e seleziona `TWiLight Menu++` per installarla
   - L'operazione potrebbe richiedere un pò di tempo
{% endcapture %}

{% capture tab-manual %}
1. Scarica l'ultima versione di `TWiLightMenu-3DS.7z` dalla [pagina delle versioni](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Estrai `TWiLightMenu-3DS.7z`
1. Copia la cartella `_nds` sulla root della tua scheda SD
1. Copia il file `BOOT.NDS` nella root della tua scheda SD
1. Copia la cartella `roms` nella root della tua scheda SD
1. Copia i due file `.cia` nella root della scheda SD
1. Sul tuo 3DS, installa i due file CIA con FBI
{% endcapture %}

### Installazione

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="working-camera">Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-non-working-camera" onclick="openTab(event, event.currentTarget)" data-tab-name="non-working-camera">Non-Working Camera</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-working-camera">
      <noscript><h4>Working Camera</h4></noscript>
      {{ tab-working-camera | markdownify }}
   </div>
   <div id="tab-non-working-camera">
      <noscript><h4>Non-Working Camera</h4></noscript>
      {{ tab-non-working-camera | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manuale</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
