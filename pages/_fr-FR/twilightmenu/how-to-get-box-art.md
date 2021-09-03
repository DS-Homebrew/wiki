---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Comment obtenir des couvertures de boîte
description: Comment obtenir des couvertures de boîtes/jeux dans TWiLight Menu++
---

### Windows
1. Téléchargez la dernière version de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extraire `TwilightBoxart-Windows-UX.zip` et exécuter `TwilightBoxart.exe`
1. Cliquez sur `Détecter la carte SD`
   - S'il ne trouve pas la carte SD correcte, cliquez sur `Parcourir...` et sélectionnez la bonne
1. Changez les options de taille, bordure, etc selon vos goûts
1. Appuyez sur `Démarrer`
1. Assurez-vous que la pochette est définie pour être affichée dans les paramètres de TWiLight Menu++

### macOS/Linux
1. Téléchargez la dernière version de [TWiLightBoxart](https://github.com/KirovAir/TwilightBoxart/releases)
1. Extraire le `.zip`
1. Ouvrez `TwilightBoxart.ini` dans le dossier extrait dans un éditeur de texte
1. Tapez le chemin d'accès à votre carte SD après `SdRoot=`, puis enregistrez le fichier
   - Sur macOS, ça sera `/Volumes/` puis le nom de votre carte SD
1. Ouvrez le terminal
1. Dans le terminal, tapez `cd` puis faites glisser le dossier avec `TwilightBoxart.CLI` sur votre terminal
1. Exécutez `chmod +x TwilightBoxart.CLI`
1. Exécutez `./TwilightBoxart.CLI`
1. Tapez `Yes` s'il affiche le chemin de la carte SD correctement
1. Assurez-vous que la pochette est définie pour être affichée dans les paramètres de TWiLight Menu++

### Manuellement
1. Téléchargez un pack de pochettes en png depuis [GameTDB](https://www.gametdb.com/DS/Downloads#cover_packs)
1. Extraire les fichiers .png vers `sd:/_nds/TWiLightMenu/boxart`
1. Assurez-vous que la pochette est définie pour être affichée dans les paramètres de TWiLight Menu++

**Pour ajouter votre propre box art :** Placez-les dans `sd:/_nds/TWiLightMenu/boxart`. Il peut soit avoir le TID du jeu (ex. `ASME.png`), soit le nom du fichier (ex. `SM64DS.nds.png`). Doit être au format `.png` , avec la taille recommandée de 128x115 et un maximum de 208x143.

Les pochettes individuelles peuvent également être téléchargées à partir de la GameTDB, sous la catégorie **S Covers (png)**.
