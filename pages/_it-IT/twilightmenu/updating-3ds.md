---
lang: it-IT
layout: wiki
section: twilightmenu
category: updating
title: Aggiornamento (3DS)
long_title: Aggiornamento TWiLight Menu++ (3DS)
description: Come aggiornare TWiLight Menu++ su Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Manuale
---

Se aggiorni da una versione più vecchia della v16.4.0, si prega di spostare i tuo file `.sav` per i giochi del DS in una nuova cartella chiamata `saves`, con la cartella `saves` nello stesso posto delle ROM del DS.
{:.alert .alert-info}

Se aggiorni da una versione più vecchia della v21.0.0, si prega di spostare i tuo file `.pub` e/o i file `.prv` per titoli DSiWare ad una nuova cartella chiamata `saves`, con la cartella `saves` posizionata nello stesso posto delle ROM DSiWare.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Apri Universal-Updater
   - Se non ce l'hai, segui le istruzioni [d'installazione](installing-3ds)
1. Trova TWiLight Menu++ nella griglia delle applicazioni, puoi effettuare una ricerca con la terza scheda sulla barra laterale se hai problemi a trovarla
1. Premi <kbd class="face">A</kbd> o tocca l'icona del download nella barra laterale e seleziona `TWiLight Menu++` per installarla
   - L'operazione potrebbe richiedere un pò di tempo
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Scarica la versione piè recente di [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Estrai `TWiLightMenu-3DS.7z`
1. Copia la cartella `_nds` nella root della tua scheda SD
1. Copia il file `BOOT.NDS` nella root della tua scheda SD
1. Copia i due file `.cia` nella root della tua scheda SD
1. Sul tuo 3DS, installa i due file CIA con FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Aggiornamento

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Ulteriori passi per le flashcard

Se è possibile passare dalla scheda SD a i contenuti della flashcard in TWLMenu++, e se la flashcard TWLMenu++ è su v16.3. 0 o successiva, segui questi passaggi.

1. Vai nelle impostazioni di TWLMenu++
1. Seleziona `Aggiorna TWiLight Menu++`
1. Seleziona `Console (micro)SD > Slot-1 microSD`
