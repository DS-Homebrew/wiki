---
lang: fr-FR
layout: wiki
section: twilightmenu
category: installing
title: Installation (3DS)
description: How to install TWiLight Menu++ on the Nintendo 3DS
---

Vous avez besoin d'un Custom Firmware sur votre 3DS, suivez [3ds.hacks.guide](https://3ds.hacks.guide) pour l'installer
{:.alert .alert-info}

{% capture tab-working-camera %}
1. Ouvrez FBI et sélectionnez `Remote install`, puis `Scan QR Code`
1. Scannez ce code QR pour installer la dernière version de [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Universal-Updater QR code](https://db.universal-team.net/assets/images/qr/universal-updater.cia.png)
1. Fermez FBI et lancez Universal-Updater
   - S'il n'apparaît pas dans votre menu, redémarrez votre 3DS
1. Trouvez TWiLight Menu++ dans la grille d'applications, vous pouvez rechercher avec le 3ème onglet sur la barre latérale si vous avez du mal à le trouver
   - Il a cette icône: ![Icône TWiLight Menu ++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Appuyez sur <kbd class="face">A</kbd> ou tapez sur l'icône de téléchargement dans la barre latérale et sélectionnez `TWiLight Menu++` pour l'installer
   - This will take a while
{% endcapture %}

{% capture tab-non-working-camera %}
1. Téléchargez le fichier `Universal-Updater.cia` depuis la page de téléchargements [Universal-Updater](https://github.com/Universal-Team/Universal-Updater/releases)
1. Placez le fichier `Universal-Updater.cia` n'importe où sur votre carte SD
1. Lancez FBI sur votre Nintendo 3DS
1. Dans FBI, allez à l'endroit où vous avez collé le fichier `Universal-Updater.cia`
1. Sélectionnez le fichier `Universal-Updater.cia` et cliquez sur "Install & Delete"
1. Fermez FBI et lancez Universal-Updater
   - S'il n'apparaît pas dans votre menu, redémarrez votre 3DS
1. Trouvez TWiLight Menu++ dans la grille d'applications, vous pouvez rechercher avec le 3ème onglet sur la barre latérale si vous avez du mal à le trouver
   - Il a cette icône: ![Icône TWiLight Menu ++](https://raw.githubusercontent.com/DS-Homebrew/TWiLightMenu/master/booter/icon.bmp)
1. Appuyez sur <kbd class="face">A</kbd> ou tapez sur l'icône de téléchargement dans la barre latérale et sélectionnez `TWiLight Menu++` pour l'installer
   - This will take a while
{% endcapture %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the `roms` folder to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}

### Installing

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
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>
