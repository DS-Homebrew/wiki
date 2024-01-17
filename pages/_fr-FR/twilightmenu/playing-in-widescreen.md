---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Jouer en plein écran
description: Comment utiliser TWiLight Menu++ en plein écran sur la Nintendo 3DS
---

Cette section nécessite une console de la famille 3DS, exécutant un environnement CFW moderne de [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-info}

Si vous utilisez actuellement la v13 de Luma, veuillez mettre à jour vers la v13.0.1 avant de suivre ce guide.
{:.alert .alert-info}

### Installation
1. Ouvrez FBI, allez dans `Remote Install`, puis sélectionnez `Scan QR Code`
1. Scannez ce code QR pour installer la dernière version de [Universal Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Code QR de Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Ouvrez Universal-Updater à partir de votre menu HOME
1. Installez le package TWPatch
   - Si votre console ne peut accéder à Internet, vous pouvez directement télécharger [TWPatch.cia](https://gbatemp.net/download/twpatch.37400/version/38832/download?file=302085), puis l'installer avec FBI
1. Retournez au menu HOME et lancez TWPatch
1. Maintenez <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> pour ouvrir le menu du patch et activez `Widescreen patch (384x240 16:10)`
1. (Optionnel !) Pour un plein écran moins pixélisé, activez également `GPU scaling (blurry, no filters)`
1. Appuyez sur <kbd class="face">B</kbd> pour quitter le menu du patch
1. Appuyez sur <kbd>START</kbd> pour générer un fichier `TwlBg.cxi` en plein écran
   - Si l'écran en haut de l'écran n'indique pas que le patch de plein écran est activé, recommencez à partir de l'étape 3
1. Déplacez `TwlBg.cxi` de `sd:/luma/sysmodules/` à `sd :/_nds/TWiLightMenu/TwlBg/` (créez `le dossier TwlBg` s'il n'existe pas), et renommez le fichier en `Widescreen.cxi`
1. Redémarrez votre 3DS en maintenant <kbd>SELECT</kbd> pour ouvrir la configuration de Luma3DS
1. Activez `external FIRMs and modules`, puis appuyez sur <kbd>START</kbd> pour enregistrer et quitter
1. Ouvrez TWiLight Menu++, appuyez sur <kbd class="face">Y</kbd> sur le jeu de votre choix pour faire apparaître les paramètres par jeu, et réglez le `Ratio de l'écran` à `16/10`

Vous avez terminé ! Profitez de vos jeux DS en plein écran !

**NOTES :**
1. Ne maintenez pas <kbd>START</kbd> ou <kbd>SELECT</kbd> lors du lancement de TWLMenu++ si vous ne voulez pas que le plein écran ait l'air glitché
1. Tous les jeux ne sont pas compatibles avec le plein écran. [Voici une liste de jeux qui prennent en charge le plein écran](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. Si vous êtes bloqué en mode plein écran dans tout TWL_FIRM (y compris l'interface graphique TWLMenu++) après avoir suivi ce guide et lancé un jeu compatible avec le plein écran, supprimez `TwlBg.cxi` dans `sd:/luma/sysmodules/`.
   - If the problem persists, [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide, as well as using the original build of Luma
1. La plupart des patchs pour le plein écran n'ajustent que les éléments 3D, les éléments 2D (tels que les menus) ne seront qu'étirés
1. Luma3DS **doit** être chargé à partir de la carte SD ; si le plein écran ne fonctionne pas, assurez-vous que le fichier `boot.firm` se trouve à la racine de votre carte SD
