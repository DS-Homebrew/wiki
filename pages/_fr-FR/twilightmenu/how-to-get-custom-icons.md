---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Comment obtenir des icônes et des bannières personnalisées
description: Comment définir des icônes et des bannières personnalisées pour les dossiers et les jeux dans TWiLight Menu++
---

### Icônes et bannières de jeu personnalisées
1. Téléchargez l'icône ou la bannière que vous souhaitez définir à partir [du site de skins](https://skins.ds-homebrew.com/icon/)
   - Les bannières ont une extension de fichier `.bin`, elles comprennent des titres de jeu personnalisés et ses icônes peuvent être fixes ou animées. Ces fichiers ne peuvent être définis que pour les ROMs.
   - Les icônes ont une exension de fichier `.png` et ne seront affichées que sous forme d'images fixes. Elles peuvent être définies à la fois pour les dossiers et les ROMs.
   - Tout fichier `.png` d'une profondeur de couleur de 4 bits et d'une résolution de 32 × 32 pixels ou moins peut également être utilisé, et pas seulement ceux présents sur le site de skins.
1. Placez le fichier de l'icône/bannière dans `sd:\_nds\TWiLightMenu\icons`
   - S'il s'agit d'une icône personnalisée pour un dossier, renommez le fichier de manière à ce que son nom soit identique au nom du dossier dans lequel vous souhaitez que l'icône s'affiche.
   - S'il s'agit d'une icône personnalisée ou d'une bannière pour une ROM, renommez le fichier de façon à ce que son nom soit le même que la ROM dont vous voulez remplacer l'icône. Notez que le nom doit inclure l'extension du fichier, par exemple `ASME.nds.png` ou `ASME.nds.bin` si vous voulez que l'icône/bannière s'affiche pour la ROM `ASME.nds`. Cela fonctionne non seulement pour les ROMs `.nds`, mais aussi pour toutes les ROMs qui peuvent être exécutées à partir de TWiLight Menu++.
