---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Jouer en plein écran
description: Comment utiliser TWiLight Menu++ en mode plein écran sur la Nintendo 3DS
---

Nécessite une console Nintendo 3DS ou 2DS.
{:.alert .alert-info}

### Préparation
- Assurez-vous que le `boot.firm` de Luma est à la racine de la carte SD pour que cela fonctionne

### Installation
1. Téléchargez [TWPatch](https://sono.9net.org/hebrew/TWPatch/data/TWPatch.cia) et copiez `TWPatch.cia` sur votre carte SD ([thread GBATemp](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Installez `TWPatch.cia` en utilisant FBI
   - Vous pouvez également utiliser Universal-Updater pour installer TWPatch au lieu des deux étapes précédentes
1. Retournez au menu home et lancez TWPatch
1. Maintenez <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> enfoncé et activez `Widescreen patch (384x240 16:10)`
1. (Facultatif) Pour un écran large moins pixelisé, activez également `GPU scale test (health hazard !)`
   - Le "danger pour la santé!" est parce qu'il a donné au développeur un mal de tête en raison de son flou
1. Appuyez sur <kbd>START</kbd> pour générer un fichier `TwlBg.cxi` en plein écran
   - Si l'écran en haut de l'écran n'indique pas que le patch large est activé, recommencez à partir de l'étape 3
   - Si le plein écran ne fonctionne toujours pas, attendez la sortie du plein écran par RTCom
1. Redémarrez votre 3DS en maintenant <kbd>SELECT</kbd> pour ouvrir la configuration de Luma3DS
1. Activez `external FIRMs and modules`, puis appuyez sur <kbd>START</kbd> pour enregistrer et quitter
1. Ouvrez les paramètres TWiLight Menu++, basculez sur la page `Autres paramètres` et réglez `Taille de l'écran` sur `16:10`
   - Cela peut également être fait par jeu

Vous avez terminé ! Profitez de vos jeux DS en plein écran !

**REMARQUE 1 :** Chaque jeu/application en mode DS(i) fonctionnera en écran large, même les jeux qui ne sont pas compatibles avec l'écran large. Pour que cela soit fixé de manière à ce que les jeux compatibles grand écran fonctionnent en grand écran, attendez la sortie du plein écran par RTCom.

**REMARQUE 2 :** Ne tenez pas <kbd>DÉBUT</kbd> ou <kbd>SELECT</kbd> lors du lancement de TWLMenu++, si vous ne voulez pas que l'écran large apparaisse glitché. Si vous ne voyez pas le réglage des proportions de l'écran, attendez la sortie du plein écran par RTCom.

Tous les jeux ne sont pas compatibles avec le plein écran. [Nous avons créé une liste de jeux compatibles avec le plein écran](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
