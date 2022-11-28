---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Comment obtenir des jaquettes
description: Comment obtenir des jaquettes de jeux dans TWiLight Menu++
tabs:
  - 
    windows: Windows
    other: macOS/Linux
    manual: Manuel
---

{% capture tab-windows %}
1. Téléchargez la dernière version de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extrayez `TwilightBoxart-Windows-UX.zip` et lancez `TwilightBoxart.exe`
1. Cliquez sur `Detect SD`
   - S'il ne trouve pas la bonne carte SD, cliquez sur `Browse…` et sélectionnez la bonne
1. Modifiez les options de taille, bordure, etc. à votre convenance
1. Cliquez sur `Start`
1. Assurez-vous que les jaquettes sont définies pour être affichées dans les paramètres de TWiLight Menu++
{% endcapture %}
{% assign tab-windows = tab-windows | split: "////////" %}

{% capture tab-macos_linux %}
1. Téléchargez la dernière version de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extrayez le `.zip`
1. Ouvrez `TwilightBoxart.ini` dans le dossier extrait dans un éditeur de texte
1. Tapez le chemin vers votre carte SD après `SdRoot=`, puis enregistrez le fichier
   - Sur macOS, il s'agit de `/Volumes/` puis du nom de votre carte SD
1. Ouvrez le terminal
1. Dans le terminal, tapez `cd` puis glissez-déposez le dossier contenant `TwilightBoxart.CLI`
1. Exécutez `chmod +x TwilightBoxart.CLI`
1. Exécutez `./TwilightBoxart.CLI`
1. Dites `Yes` s'il affiche correctement le chemin de votre SD
1. Assurez-vous que les jaquettes sont définies pour être affichées dans les paramètres de TWiLight Menu++
{% endcapture %}
{% assign tab-macos_linux = tab-macos_linux | split: "////////" %}

{% capture tab-manual %}
1. Téléchargez un pack de jaquettes en png depuis [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extrayez les fichiers .png vers `sd:/_nds/TWiLightMenu/boxart`
1. Assurez-vous que les jaquettes sont définies pour être affichées dans les paramètres de TWiLight Menu++
{% endcapture %}
{% assign tab-manual = tab-manual | split: "////////" %}

{% assign tabs = tab-windows | concat: tab-macos_linux | concat: tab-manual %}
{% include tabs.html index=0 tabs=tabs %}

**Pour ajouter vos propres jaquettes :** Placez-les dans `sd:/_nds/TWiLightMenu/boxart`.
- Elles peuvent avoir soit le TID du jeu (ex. `ASME.png`), soit le nom du fichier (ex. `SM64DS.nds.png`)
- Elles doivent être au format `.png`, avec une taille recommandée de 128 × 115 et maximale de 208 × 143
- Si, avec votre configuration de **TW**i**L**ight Menu++, l'affichage des jaquettes est réglé sur `En cache`, la taille de l'image doit être inférieure ou égale à 44 kio. Vous pouvez utiliser un outil comme [tinypng](https://tinypng.com/) pour compresser les images à une taille acceptable

Les jaquettes individuelles peuvent également être téléchargées sur GameTDB, dans la catégorie **S Covers (png)**.
