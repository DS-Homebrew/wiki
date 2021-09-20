---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Contrôles
long_title: Contrôles TWiLight Menu++
description: Contrôles pour utiliser TWiLight Menu++
---

#### Thèmes Nintendo DSi, Nintendo 3DS, SEGA Saturn et Homebrew Launcher
- <kbd>Gauche</kbd>/<kbd>Droite</kbd> : Sélectionner un jeu/une application
- <kbd class="face">A</kbd>/<kbd>START</kbd> : Lancer le jeu/l'application
- <kbd class="l">L</kbd>/<kbd class="r">R</kbd> ou <kbd>SELECT</kbd> + <kbd>Gauche</kbd>/<kbd>Droite</kbd> : Changer de page
- (Thèmes DSi/Saturn/HBL) <kbd>SELECT</kbd> + <kbd>Haut</kbd>/<kbd>Bas</kbd> et lâcher <kbd>SELECT</kbd> : Basculer entre la carte SD et le linker
- <kbd class="face">Y</kbd>: Paramètres par jeu
   - <kbd class="face">X</kbd>: Menu des codes de triche
      - <kbd class="face">A</kbd>: Activer/désactiver les codes de triche
      - <kbd class="face">B</kbd>: Quitter le menu des codes de triche
      - <kbd class="face">X</kbd>: Enregistrer et quitter le menu des codes de triche
      - <kbd class="face">Y</kbd>: Afficher la description du code de triche
      - <kbd class="l">L</kbd>: Désactiver tout les codes de triche
- <kbd class="face">X</kbd>: Supprimer/cacher le jeu
- Thème (DSi/Saturn/HBL) <kbd>SELECT</kbd>: Menu SELECT ou Menu Classique DS (Où le menu système, les paramètres TWiLight Menu++ et le mode GBA peuvent être accédés)

#### Thème R4
- <kbd>Up</kbd>/<kbd>Down</kbd>: Sélectionnez une partie/application
- <kbd class="face">A</kbd>: Lancer le jeu/l'application
- <kbd class="l">L</kbd>: Basculer entre la carte SD et le linker
- <kbd class="face">Y</kbd>: Paramètres par jeu
   - <kbd class="face">X</kbd>: Menu des codes de triche
      - <kbd class="face">A</kbd>: Activer/désactiver les codes de triche
      - <kbd class="face">B</kbd>: Quitter le menu des codes de triche
      - <kbd class="face">X</kbd>: Enregistrer et quitter le menu des codes de triche
      - <kbd class="face">Y</kbd>: Afficher la description du code de triche
      - <kbd class="l">L</kbd>: Désactiver tout les codes de triche

#### ROMs DS (avec nds-bootstrap)
Celles-ci ne s'appliquent pas à DSiWare.
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Haut</kbd> + <kbd class="face">X</kbd> pendant 1 seconde : Inverser les écrans
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> pendant 3 secondes : Copier la RAM vers `sd:/_nds/nds-bootstrap`, comme `ramDump.bin`
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Bas</kbd> + <kbd class="face">B</kbd> pendant 2 secondes : Retour dans TWiLight Menu++
- <kbd class="l">L</kbd> + <kbd>Bas</kbd> + <kbd>SELECT</kbd>: Ouvrir le menu en jeu
   - <kbd class="r">R</kbd> : Avancer d’une frame
   - Capture d'écran
      - <kbd>Haut</kbd> / <kbd>Bas</kbd> / <kbd>Gauche</kbd> / <kbd>Droite</kbd> : Changer de banque VRAM
      - <kbd class="face">A</kbd> : Enregistrer la capture d'écran
      - <kbd class="face">B</kbd> : Retourner au menu en jeu
   - Visionneuse RAM
      - <kbd>Haut</kbd>/<kbd>Bas</kbd> : Défiler
      - <kbd>Gauche</kbd>/<kbd>Droite</kbd> : Défiler rapidement
      - <kbd class="r">R</kbd> + <kbd>Bas</kbd>/<kbd>Haut</kbd> : Défiler plus rapidement
      - <kbd class="r">R</kbd> + <kbd>Gauche</kbd>/<kbd>Droite</kbd> : Défiler le plus rapidement
      - <kbd class="face">A</kbd> : Entrer dans l'éditeur de RAM
      - <kbd class="face">B</kbd> : Retourner au menu en jeu
      - <kbd class="face">Y</kbd> : Spécifier une adresse à laquelle aller
        - <kbd>Haut</kbd>/<kbd>Bas</kbd> : Augmenter/diminuer la valeur sélectionnée
        - <kbd>Gauche</kbd>/<kbd>Droite</kbd> : Sélectionner une valeur
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd> : Retourner à la visionneuse/l'éditeur de RAM à l'adresse spécifiée
   - Éditeur de RAM
      - <kbd>Haut</kbd>/<kbd>Bas</kbd>/<kbd>Gauche</kbd>/<kbd>Droite</kbd> : Sélectionner une valeur
      - <kbd class="face">A</kbd> : Modifier la valeur sélectionnée
         - <kbd>Haut</kbd>/<kbd>Bas</kbd> : Augmenter/diminuer la valeur hexadécimale de 1
         - <kbd>Haut</kbd>/<kbd>Bas</kbd> : Augmenter/diminuer la valeur hexadécimale de 10
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd> : Terminer la modification de la valeur
      - <kbd class="face">B</kbd> : Retourner à la visionneuse de RAM
      - <kbd class="face">Y</kbd> : Spécifier une adresse à laquelle aller
        - <kbd>Haut</kbd>/<kbd>Bas</kbd> : Augmenter/diminuer la valeur sélectionnée
        - <kbd>Gauche</kbd>/<kbd>Droite</kbd> : Sélectionner une valeur
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd> : Retourner à la visionneuse/l'éditeur de RAM à l'adresse spécifiée
- Le menu du jeu n'est pas accessible dans les jeux DSi-Enhanced/Exclusive fonctionnant en mode DSi ; toute tentative d'utilisation de la combinaison de boutons dans ces jeux ne donnera rien
- Seul la combinaison de boutons de permutation d'écran fonctionnera en mode B4DS, les autres ne fonctionneront pas
- Retourner sur TWiLight Menu++ peut ne pas fonctionner sur certains modèles O3DS
- La combinaison de boutons pour ouvrir le menu en jeu peut être modifiée dans les paramètres de TWiLight Menu++
- Les captures d'écran sont enregistrées dans `sd:/_nds/nds-bootstrap/screenshots.tar`. Ce fichier peut être ouvert à l'aide d'un visualiseur d'archives tel que [7-Zip](https://www.7-zip.org/)

#### Raccourcis de démarrage
Celles-ci devraient être pressées sur le menu TWiLight Menu++ écran de démarrage / à droite après l'écran de démarrage Nintendo DSi.

- <kbd>SELECT</kbd>: Ouvrir les paramètres
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Réinitialiser tous les paramètres de TWiLight Menu++
- <kbd class="face">B</kbd> Démarrez la dernière ROM exécutée
