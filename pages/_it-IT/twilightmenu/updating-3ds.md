---
lang: it-IT
layout: wiki
section: twilightmenu
category: updating
title: Aggiornamento (3DS)
long_title: Updating TWiLight Menu++ (3DS)
description: How to update TWiLight Menu++ on the Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Manual
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
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Aggiornamento

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Ulteriori passi per le flashcard

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Go into TWLMenu++ Settings
1. Select `Update TWiLight Menu++`
1. Select `Console (micro)SD > Slot-1 microSD`
