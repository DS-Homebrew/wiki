---
lang: fr-FR
layout: wiki
section: other
title: GodMode9i
description: Informations sur GodMode9i
---

[GodMode9i](https://github.com/DS-Homebrew/GodMode9i/) est un navigateur de fichiers open source pour la Nintendo DS, s'inspirant de GodMode9 pour la Nintendo 3DS. GodMode9i a plusieurs fonctions, comme de dump des jeux, gérer les fichiers de la carte SD, de parcourir les fichiers de NitroFS, de calculer le hachage SHA1 des fichiers, de modifier les fichiers binaires avec un éditeur hexadécimal, et plus encore.

## Dump de jeu

Pour dump les jeux, sélectionnez la carte de jeu dans la liste et suivez les instructions à l'écran.
- Sur la Nintendo DS et la Nintendo DS Lite, GodMode9i peut dump les cartouches Slot-2 s'il est lancé depuis une carte flash Slot-1, ou les cartes de jeu Slot-1 si GodMode9i est lancé depuis une carte flash Slot-2
- Sur la famille de consoles Nintendo DSi, Unlaunch est nécessaire pour dump les jeux du Slot-1 vers la carte SD
   - Des instructions sur l'installation de Unlaunch sont disponibles sur [dsi.cfw.guide](https://dsi.cfw.guide/)
- Sur la famille des consoles Nintendo 3DS, un CFW moderne est nécessaire pour lancer GodMode9i
   - Des instructions sur l'installation de Luma3DS + boot9strap sont disponibles sur [3ds.hacks.guide](https://3ds.hacks.guide/)

## Dépannage et FAQ

#### Comment passer l'écran "mounting drive(s)" lors du démarrage ?
Cela se produit lorsque vous lancez GodMode9i à partir de [hiyaCFW](../hiyacfw). Vous pouvez maintenir <kbd class="face">X</kbd> pendant le lancement de GodMode9i pour sauter le montage de la NAND. Alternativement, vous pouvez lancer GodMode9i directement depuis Unlaunch pour pouvoir monter la NAND.

#### Pourquoi ne puis-je pas ajouter, supprimer ou modifier des fichiers sur la NAND ?
Editer des fichiers sur la NAND DSi n'est pas sûr et peut facilement conduire à un brick, donc GodMode9i a intentionnellement désactivé cette fonction.

#### Pourquoi ne puis-je pas voir les informations NDS pour certains DSiWare ?
Certains DSiWare, notamment ceux situés dans le dossier `0003000f` , contiennent des données système et n'ont pas de bannière valide.

#### Dois-je utiliser la version NDS ou la version DSi ? Quelle est la différence ?
Les versions sont fonctionnellement identiques, mais ont des objectifs spécifiques.
- Si vous utilisez GodMode9i avec une flashcard, utilisez la version NDS
- Si vous installez GodMode9i sur votre SDNAND hiyaCFW, utilisez la version DSi
- Si vous démarrez GodMode9i via TWiLight Menu++, les deux versions fonctionneront de manière identique
- Si vous installez GodMode9i dans le menu HOME de la 3DS, utilisez la version CIA
