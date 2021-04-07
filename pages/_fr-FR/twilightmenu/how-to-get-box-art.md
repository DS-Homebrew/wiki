---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Comment obtenir des couvertures de boîte
description: Comment obtenir des couvertures de boîtes  / jeu dans TWiLight Menu++
---

### 3DS
1. Installez le fork de mise à jour [de KirovAir TWiLight Menu++](https://github.com/KirovAir/TWiLightMenu-Updater/releases)
   - Cela remplacera la mise à jour normale de TWiLight Menu++, donc utilisez Universal-Updater à la place pour mettre à jour TWiLight Menu++
1. Sélectionnez `Extras`, `Boxart`, puis appuyez sur <kbd class="face">X</kbd> pour scanner la carte SD complète ou <kbd class="face">A</kbd> pour sélectionner un dossier à scanner
1. Choisissez une taille de pochette
1. Choisissez un style de bordure
1. Assurez-vous que la pochette est définie pour être affichée dans les paramètres de TWiLight Menu++

### Windows
1. Téléchargez la dernière version de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extraire `TwilightBoxart-Windows-UX.zip` et exécuter `TwilightBoxart.exe`
1. Cliquez sur `Détecter la SD`
   - S'il ne trouve pas la carte SD correcte, cliquez sur `Parcourir...` et sélectionnez la bonne carte SD
1. Changez les options de taille, bordure, etc à votre goût
1. Cliquez `Démarer`
1. Assurez-vous que la pochette est définie pour être affichée dans les paramètres de TWiLight Menu++

### macOS / Linux
1. Téléchargez la dernière version de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extraire le `.zip`
1. Ouvrez `TwilightBoxart.ini` dans le dossier extrait dans un éditeur de texte
1. Tapez le chemin d'accès à votre carte SD après `SdRoot=`, puis enregistrez le fichier
   - Sur macOS, ceci est `/Volumes/` puis le nom de votre carte SD
1. Ouvrez le terminal
1. Dans le terminal, tapez `cd` puis faites glisser le dossier avec `TwilightBoxart.CLI` sur votre terminal
1. Exécutez `chmod +x TwilightBoxart.CLI`
1. Exécutez `./TwilightBoxart.CLI`
1. Dites `Yes` s'il affiche votre chemin SD correctement
1. Assurez-vous que la pochette est définie pour être affichée dans les paramètres de TWiLight Menu++

### Manuel
1. Téléchargez un pack de pochettes en png depuis [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extraire les fichiers .png vers `sd:/_nds/TWiLightMenu/boxart`
1. Assurez-vous que la pochette est définie pour être affichée dans les paramètres de TWiLight Menu++

**Pour ajouter votre propre box art :** Placez-les dans `sd:/_nds/TWiLightMenu/boxart`. Il peut soit avoir le TID du jeu (ex. `ASME.png`), soit le nom du fichier (ex. `SM64DS.nds.png`). Doit être au format `.png` , avec la taille recommandée de 128x115 et un maximum de 208x143.

Les pochettes individuelles peuvent également être téléchargées à partir de la GameTDB, sous la catégorie **S Covers (png)**.
