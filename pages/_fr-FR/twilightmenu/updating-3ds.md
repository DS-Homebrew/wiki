---
lang: fr-FR
layout: wiki
section: twilightmenu
category: updating
title: Mise à jour (3DS)
long_title: Mettre à jour TWiLight Menu++ (3DS)
description: Comment mettre à jour TWiLight Menu++ sur la Nintendo 3DS
tabs:
  - 
    universal-updater: Universal-Updater
    manual: Manuellement
---

If updating from a version older than v16.4.0, please move your `.sav` files for DS games to a new folder called `saves`, with the `saves` folder being in the same place as the DS ROMs.
{:.alert .alert-info}

If updating from a version older than v21.0.0, please move your `.pub` and/or `.prv` files for DSiWare titles to a new folder called `saves`, with the `saves` folder being in the same place as the DSiWare ROMs.
{:.alert .alert-info}

{% capture tab-universal-updater %}
1. Ouvrez Universal-Updater
   - Si vous ne l'avez pas, suivez les instructions d'[installation](installing-3ds)
1. Trouvez TWiLight Menu++ dans la grille d'applications, vous pouvez rechercher avec le 3ème onglet sur la barre latérale si vous avez du mal à le trouver
1. Appuyez sur <kbd class="face">A</kbd> ou tapez sur l'icône de téléchargement dans la barre latérale et sélectionnez `TWiLight Menu++` pour l'installer
   - Cela peux prendre un certain temps
{% endcapture %}
{% assign tab-universal-updater = tab-universal-updater | split: "////////" %}

{% capture tab-manual %}
1. Téléchargez le dernier [`TwiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Extrayez `TWiLightMenu-3DS.7z`
1. Copiez le dossier `_nds` à la racine de la carte SD
1. Copiez le fichier `BOOT.NDS` à la racine de la carte SD
1. Copiez les deux fichiers `.cia` à la racine de la carte SD
1. Sur votre 3DS, installez les deux fichiers CIA avec FBI
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

### Mise à jour

{% assign tabs = tab-universal-updater | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

### Étapes supplémentaire pour les linkers

Si vous pouvez basculer entre le contenu de la carte SD et de la carte flashcard dans TWLMenu++, et si le menu TWLMenu++ de la flashcard est sur v16.3.0 ou plus tard, veuillez suivre ces étapes.

1. Allez dans les paramètres TWiLight Menu++
1. Sélectionnez `Mettre à jour TWiLight Menu++`
1. Sélectionnez `Console (micro)SD > Slot-1 microSD`
