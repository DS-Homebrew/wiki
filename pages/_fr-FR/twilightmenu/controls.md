---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Contrôles
long_title: Contrôles TWiLightMenu++
description: Contrôles pour utiliser TWiLightMenu++
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
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">B</kbd> for 2 seconds: Return to TWiLight Menu++
- <kbd class="l">L</kbd> + <kbd>Down</kbd> + <kbd>SELECT</kbd>: Open the in-game menu
   - RAM Viewer
      - <kbd>Up</kbd>/<kbd>Down</kbd>: Scroll
      - <kbd>Left</kbd>/<kbd>Right</kbd>: Fast scroll
      - <kbd class="face">A</kbd>: Enter RAM Editor
      - <kbd class="face">B</kbd>: Return to in-game menu
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
   - RAM Editor
      - <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
      - <kbd class="face">A</kbd>: Modify selected value
         - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease value by 1h
         - <kbd>Left</kbd>/<kbd>Right</kbd>: Increase/Decrease value by 10h
         - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Finish modifying value
      - <kbd class="face">B</kbd>: Return to RAM Viewer
      - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
- The in-game menu is not accessible in DSi Enhanced/Exclusive games running in DSi Mode, so attempting to use the button combo in those games will instead exit the game
- Only the screen swap button combo will work in B4DS mode, the others will not work
- Returning to TWiLight Menu++ may not work on some O3DS models

#### Raccourcis de démarrage
Celles-ci devraient être pressées sur le menu TWiLight Menu++ écran de démarrage / à droite après l'écran de démarrage Nintendo DSi.

- <kbd>SELECT</kbd>: Ouvrir les paramètres
- <kbd class="face">A</kbd> + <kbd class="face">B</kbd> + <kbd class="face">X</kbd> + <kbd class="face">Y</kbd>: Réinitialiser tous les paramètres de TWiLight Menu++
- <kbd class="face">B</kbd> Démarrez la dernière ROM exécutée
