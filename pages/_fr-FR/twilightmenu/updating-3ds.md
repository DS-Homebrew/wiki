---
lang: fr-FR
layout: wiki
section: twilightmenu
category: updating
title: Mise à jour (3DS)
description: How to update TWiLight Menu++ on the Nintendo 3DS
---

Si vous faites une mise à jour à partir d'une version antérieure à v16.4.0, veuillez déplacer vos fichiers `.sav` pour les jeux DS dans un nouveau dossier appelé `saves`, qui se trouvera à la même place que les roms DS.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Ouvrez Universal-Updater
   - Si vous ne l'avez pas, suivez les instructions d'[installation](installing-3ds)
1. Trouvez TWiLight Menu++ dans la grille d'applications, vous pouvez rechercher avec le 3ème onglet sur la barre latérale si vous avez du mal à le trouver
1. Appuyez sur <kbd class="face">A</kbd> ou tapez sur l'icône de téléchargement dans la barre latérale et sélectionnez `TWiLight Menu++` pour l'installer
   - This will take a while
{% endcapture %}

{% capture tab-manual %}
1. Download the latest version of `TWiLightMenu-3DS.7z` from [the releases page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extract `TWiLightMenu-3DS.7z`
1. Copy the `_nds` folder to your SD card root
1. Copy the `BOOT.NDS` file to your SD card root
1. Copy the two `.cia` files to your SD card root
1. On your 3DS, install the two CIAs with FBI
{% endcapture %}

### Mise à jour

<div class="tab-container">
   <div class="pb-3">
      <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-universal-updater" onclick="openTab(event, event.currentTarget)" data-tab-name="universal-updater">Universal-Updater</a>
      <a class="tab-link btn btn-outline-secondary" href="#tab-manual" onclick="openTab(event, event.currentTarget)" data-tab-name="manual">Manual</a>
   </div>
   <div id="tab-universal-updater">
      <noscript><h4>Universal-Updater</h4></noscript>
      {{ tab-universal-updater | markdownify }}
   </div>
   <div id="tab-manual">
      <noscript><h4>Manual</h4></noscript>
      {{ tab-manual | markdownify }}
   </div>
</div>

### Étapes supplémentaire pour les flashcards

If you can switch between the SD and flashcard contents in TWLMenu++, and if the flashcard TWLMenu++ is on v16.3.0 or later, please follow these steps.

1. Go into TWLMenu++ Settings
1. Select `Update TWiLight Menu++`
1. Select `Console (micro)SD > Slot-1 microSD`
