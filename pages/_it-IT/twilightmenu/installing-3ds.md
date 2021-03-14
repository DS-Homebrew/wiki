---
lang: it-IT
layout: wiki
section: twilightmenu
category: installing
title: Installing (3DS)
description: Come installare TWiLight Menu++ su Nintendo 3DS
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
1. Scannerizza questo QR code per installare l'ultima versione di [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Chiudi FBI e avvia Universal-Updater
   - Se questa opzione non è presente nel menu home, riavvia il tuo 3DS
1. Trova TWiLight Menu++ nella griglia delle applicazioni, puoi effettuare una ricerca con la terza scheda sulla barra laterale se hai problemi a trovarla
   - L' app ha questa icona: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Premi <kbd class="face">A</kbd> oppure tocca l'icona del download nella barra laterale e seleziona `TWiLight Menu++` per installarla
   - This will take a while
{% endcapture %}
{% assign tab-working-camera = tab-working-camera | split: "////////" %}

{% capture tab-non-working-camera %}
1. Download the `Universal-Updater.cia` file from the [Universal-Updater release page](https://github.com/Universal-Team/Universal-Updater/releases)
1. Place the `Universal-Updater.cia` file anywhere on your SD card
1. Launch FBI on your Nintendo 3DS
1. In FBI, go to the place you pasted the `Universal-Updater.cia` file
1. Select the `Universal-Updater.cia` file and hit "Install & Delete"
1. Close FBI and launch Universal-Updater
   - If it doesn't show up on your home menu, reboot your 3DS
1. Find TWiLight Menu++ in the app grid, you can search with the 3rd tab on the sidebar if you have trouble finding it
   - It has this icon: ![TWiLight Menu++ icon](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Press <kbd class="face">A</kbd> or tap the download icon in the sidebar and select `TWiLight Menu++` to install it
   - This will take a while
{% endcapture %}
{% assign tab-non-working-camera = tab-non-working-camera | split: "////////" %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the `roms` folder to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Installazione

{% assign tabs = tab-working-camera | concat: tab-non-working-camera | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}
