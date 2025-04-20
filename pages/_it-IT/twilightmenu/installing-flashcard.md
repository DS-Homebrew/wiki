---
lang: it-IT
layout: wiki
section: twilightmenu
category: installing
title: Installazione (Flashcard)
long_title: Installazione TWiLight Menu++ (Flashcard)
description: Come installare TWiLight Menu++ su una flashcard del Nintendo DS
tabs:
  - 
    loader: Flashcart Loader
    ysmenu: YSMenu
---

### Installazione
1. Scarica la versione più recente di [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
    - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. Se hai già dei dati di salvataggio, sposta i tuoi file `.sav` posizionati insieme alle tue ROM del DS, in una nuova cartella chiamata `saves`, che va anche questa nella posizione delle ROM del DS
1. **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, then follow the below steps for autobooting, and try again

### Auto-avvio TWiLight Menu++
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Autoboot` folder
1. Open the `README.txt` file to help find which autoboot files are appropriate for your flashcard
1. Open the `(your flashcard)` folder
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
    - Skip this, if you don't see your flashcard listed
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### To run games using the flashcard kernel (optional)

**Please note:**
- This only works if your flashcard is set to autoboot TWiLight Menu++. Guarda la sezione precedente per capire come farlo.
- Not all flashcards support running games in this fashion. Se i seguenti passaggi non si applicano alla tua flashcard, puoi saltare questa sezione.
- You'll lose the ability to use cheats when running games in this fashion. Se vuoi mantenere la funzionalità trucchi, salta questa sezione.
{:.alert .alert-warning}

{% capture tab-loader %}

If your flashcart does not have a compatible loader for this section, choose the "YSMenu" tab.
{:.alert .alert-info}

1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Open the `Flashcart Loader` folder
1. Open the `README.txt` file to help find which flashcart loader is appropriate for your flashcard
1. Open the `(your flashcard)` folder
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-loader %}
{% assign tab-loader = tab-loader | split: "////////" %}

{% capture tab-ysmenu %}

1. Please confirm that you have one of the below flashcarts:
    - R4i-SDHC (r4i-sdhc.com)
    - r4isdhc.com 2014+ cards (**not** .hk or .com.cn)
    - R4i SDHC Upgrade Revolution
    - R4DSiXL3D
    - R4i Advance
    - R4-IIIi
    - R4 SDHC Revolution
    - R4(i) Pocket
    - R4i Gold (v1.4.1) (3DS)
    - R4 Gold 3DS RTS (r4i-gold.com)
    - R4xDS
    - DSTT(i)
    - DSONE SDHC & DSONEi (i modelli non SDHC non ***sono*** supportati)
    - M3 DS Real
    - M3i Zero (modello non-GMP-Z003)
    - iTouchDS e iTouch2 (utilizza i file YSMenu di M3Real_M3iZero)
    - R4(i)RTS (r4rts.com) (usa i file YSMenu di M3Real_M3iZero)
    - R4 SDHC RTS (cartuccia nera) (r4isdhc.com) (utilizza i file YSMenu di M3Real_M3iZero)
1. Download [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
1. Extract it to a folder on your computer. Navigate to the folder required for your flashcart.
1. Inside the folder, rename `TTMenu.dat` to `YSMenu.nds` if a `YSMenu.nds` file does not already exist
1. Copy the `TTMenu` folder and `YSMenu.nds` file to the root of your MicroSD card. **Do not** copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Running games with the flashcard kernel
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
