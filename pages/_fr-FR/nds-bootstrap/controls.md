---
lang: fr-FR
layout: wiki
section: nds-bootstrap
title: Contrôles
long_title: Contrôles de nds-bootstrap
description: Contrôles des boutons pour nds-bootstrap
---

Ceux-ci ne s'appliquent pas aux homebrews.
- <kbd>SELECT</kbd> + <kbd>Haut</kbd>/<kbd>Bas</kbd> : Contrôle précis du volume sonore
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">A</kbd> for 2 seconds: Dump RAM to `sd:/_nds/nds-bootstrap`, as `ramDump.bin`
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>Down</kbd> + <kbd class="face">B</kbd> for 2 seconds: Return to loader
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd class="r">R</kbd> + <kbd>START</kbd> + <kbd>SELECT</kbd> pendant 2 secondes : Redémarrer le jeu
    - De nombreux jeux permettent d'appuyer simplement sur cette combinaison de boutons par défaut, mais ceci va forcer la réinitialisation
    - Does not work in B4DS mode on flashcards
- <kbd class="l">L</kbd> + <kbd>Bas</kbd> + <kbd>SELECT</kbd> : Ouvrir le menu en jeu
    - Capture d'écran
        - <kbd>Haut</kbd>/<kbd>Bas</kbd>/<kbd>Gauche</kbd>/<kbd>Droite</kbd> : Changer de banque VRAM
        - <kbd class="face">A</kbd> : Enregistrer la capture d'écran
        - <kbd class="face">B</kbd> : Retourner au menu en jeu
    - Visionneuse de RAM
        - <kbd>Haut</kbd>/<kbd>Bas</kbd> : Défiler
        - <kbd>Gauche</kbd>/<kbd>Droite</kbd> : Défiler rapidement
        - <kbd class="r">R</kbd> + <kbd>Bas</kbd>/<kbd>Haut</kbd> : Défiler encore plus rapidement
        - <kbd class="r">R</kbd> + <kbd>Gauche</kbd>/<kbd>Droite</kbd> : Défiler le plus rapidement possible
        - <kbd class="face">A</kbd> : Entrer dans l'éditeur de RAM
        - <kbd class="face">B</kbd> : Retourner au menu en jeu
        - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
        - <kbd>SELECT</kbd>: Switch between [ARM7 and ARM9 memory maps](https://problemkaputt.de/gbatek-ds-memory-maps.htm)
    - Éditeur de RAM
        - <kbd>Haut</kbd>/<kbd>Bas</kbd>/<kbd>Gauche</kbd>/<kbd>Droite</kbd> : Sélectionner une valeur
        - <kbd class="face">A</kbd> : Modifier la valeur sélectionnée
            - <kbd>Haut</kbd>/<kbd>Bas</kbd> : Augmenter/Diminuer la valeur de 1 héxadécimale
            - <kbd>Haut</kbd>/<kbd>Bas</kbd> : Augmenter/Diminuer la valeur de 10 hexadécimales
            - <kbd class="face">A</kbd>/<kbd class="face">B</kbd> : Terminer la modification de la valeur
        - <kbd class="face">B</kbd> : Retourner à la visionneuse de RAM
        - <kbd class="face">Y</kbd>: Specify an address to jump to
        - <kbd>Up</kbd>/<kbd>Down</kbd>: Increase/Decrease selected value
        - <kbd>Left</kbd>/<kbd>Right</kbd>: Select a value
        - <kbd class="face">A</kbd>/<kbd class="face">B</kbd>: Return to RAM Viewer/Editor at specified address
- Returning to loader may not work on some O3DS models, and does not work in B4DS mode when running DSiWare
- La combinaison de boutons pour ouvrir le menu en jeu peut être modifiée dans les paramètres de TWiLight Menu++
- Le contrôle précis du volume peut être activé ou désactivé dans les paramètres de TWiLight Menu++
- Les captures d'écran sont enregistrées dans `sd:/_nds/nds-bootstrap/screenshots.tar`. Ce fichier peut être ouvert à l'aide d'un visualiseur d'archives tel que [7-Zip](https://www.7-zip.org/)
