---
lang: it-IT
layout: wiki
section: twilightmenu
category: updating
title: Aggiornamento (3DS)
description: Come aggiornare TWiLight Menu++ su Nintendo 3DS
---

Se aggiorni da una versione più vecchia della v16.4.0, si prega di spostare i tuo file `.sav` per i giochi del DS in una nuova cartella chiamata `saves`, con la cartella `saves` nello stesso posto delle ROM del DS.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Apri Universal-Updater
   - Se non ce l'hai, segui le istruzioni [d'installazione](installing-3ds)
1. Trova TWiLight Menu++ nella griglia delle applicazioni, puoi effettuare una ricerca con la terza scheda sulla barra laterale se hai problemi a trovarla
1. Premi <kbd class="face">A</kbd> o tocca l'icona del download nella barra laterale e seleziona `TWiLight Menu++` per installarla
   - L'operazione potrebbe richiedere un pò di tempo
{% endcapture %}

{% capture tab-manual %}
1. Scarica l'ultima versione di `TWiLightMenu-3DS.7z` dalla [pagina delle versioni](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Estrai `TWiLightMenu-3DS.7z`
1. Copia la cartella `_nds` nella root della tua scheda SD
1. Copia il file `BOOT.NDS` nella root della tua scheda SD
1. Copia i due file `.cia` nella root della tua scheda SD
1. Sul tuo 3DS, installa i due file CIA con FBI
{% endcapture %}

### Aggiornamento

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-universal-updater" onclick="openTab(event, event.currentTarget)" data-tab-name="universal-updater">Universal-Updater</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manuale</a>
   </div>
   <div id="tab-universal-updater">
      <noscript><h4>Universal-Updater</h4></noscript>
      {{ tab-universal-updater | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manuale</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>

### Ulteriori passi per le flashcard

Se è possibile passare dalla scheda SD a i contenuti della flashcard in TWLMenu++, e se la flashcard TWLMenu++ è su v16.3. 0 o successive, segui questi passaggi.

1. Vai nelle impostazioni di TWLMenu++
1. Seleziona `Aggiorna TWiLight Menu++`
1. Seleziona `Console (micro)SD > Slot-1 microSD`
