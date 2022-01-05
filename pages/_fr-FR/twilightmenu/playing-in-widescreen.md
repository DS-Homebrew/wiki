---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Jouer en plein écran
description: Comment utiliser TWiLight Menu++ en plein écran sur la Nintendo 3DS
---

Nécessite une console Nintendo 3DS ou 2DS.
{:.alert .alert-info}

### Préparation
- Assurez-vous que le fichier `boot.firm` de Luma se trouve à la racine de la carte SD pour que cela fonctionne

### Installation
1. Téléchargez [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia) et copiez `TWPatch.cia` sur votre carte SD ([fil GBAtemp](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Installez `TWPatch.cia` en utilisant FBI
   - Vous pouvez également utiliser Universal-Updater pour installer TWPatch au lieu des deux étapes précédentes
1. Retournez au menu HOME et lancez TWPatch
1. Maintenez <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> pour ouvrir le menu du patch et activez `Widescreen patch (384x240 16:10)`
1. (Optionnel !) Pour un plein écran moins pixélisé, activez également `GPU scaling (blurry, no filters)`
1. Appuyez sur <kbd class="face">B</kbd> pour quitter le menu du patch
1. Appuyez sur <kbd>START</kbd> pour générer un fichier `TwlBg.cxi` avec le plein écran
   - Si l'écran du haut n'indique pas que le patch plein écran est activé, recommencez depuis l'étape 3
1. Déplacez `TwlBg.cxi` de `sd:/luma/sysmodules/` à `sd :/_nds/TWiLightMenu/TwlBg/` (créez `le dossier TwlBg` s'il n'existe pas), et renommez le fichier en `Widescreen.cxi`
1. Redémarrez votre 3DS tout en maintenant <kbd>SELECT</kbd> pour ouvrir la configuration de Luma3DS
1. Activez `External FIRMs and modules`, puis appuyez sur <kbd>START</kbd> pour sauvegarder et quitter
1. Ouvrez TWiLight Menu++, appuyez sur <kbd class="face">Y</kbd> sur le jeu de votre choix pour faire apparaître les paramètres par jeu, et réglez le `Ratio de l'écran` à `16:10`

Vous avez terminé ! Profitez de vos jeux DS en plein écran !

**NOTES :**
1. Ne maintenez pas <kbd>START</kbd> ou <kbd>SELECT</kbd> lors du lancement de TWLMenu++ si vous ne voulez pas que le plein écran ait l'air glitché
1. Tous les jeux ne sont pas compatibles avec le plein écran. [Voici une liste de jeux qui prennent en charge le plein écran](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. Si vous êtes bloqué en mode plein écran dans tout TWL_FIRM (y compris l'interface graphique de TWLMenu++) après avoir suivi ce guide et lancé un jeu compatible avec le grand écran, supprimez `TwlBg.cxi` à `sd:/luma/sysmodules/`, [désinstallez](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) puis [réinstallez](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++ et suivez à nouveau le guide ci-dessus
1. La plupart des patchs pour le plein écran n'ajustent que les éléments 3D, les éléments 2D (tels que les menus) ne seront qu'étirés
