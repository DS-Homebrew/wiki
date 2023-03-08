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

Se stai aggiornando da una versione più vecchia della v6.8.3, sposta i tuoi file `.sav` per i titoli del DS in una nuova cartella chiamata `saves`, e piazzala nella stessa directory delle ROM del DS.
{:.alert .alert-info}

Se stai aggiornando da una versione più vecchia della v21.0.0, sposta i tuoi file `.pub` e/o `.prv` per i titoli DSiWare in una nuova cartella chiamata `saves`, e piazzala nella stessa directory delle ROM DSiWare.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Apri Universal-Updater
   - Se non ce l'hai, segui le istruzioni [d'installazione](installing-3ds)
1. Trova TWiLight Menu++ nella griglia delle applicazioni, puoi effettuare una ricerca con la terza scheda sulla barra laterale se hai problemi a trovarla
1. Premi <kbd class="face">A</kbd> o tocca l'icona del download nella barra laterale e seleziona `TWiLight Menu++` per installarlo
   - L'operazione potrebbe richiedere un pò di tempo
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Scarica la versione più recente di [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Estrai `TWiLightMenu-3DS.7z`
1. Copia la cartella `_nds` nella root della tua scheda SD, sostituendo quella già presente
   - Se usi macOS, assicurati di **Copiare** e `Unire<1/>, non <code>Sostituire`
1. Copia il file `BOOT.NDS` nella root della tua scheda SD, sostituendo il file già presente
1. Copy the `.cia` file to your SD card root, replacing any existing files
1. On your 3DS, install the CIA with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Aggiornamento

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
