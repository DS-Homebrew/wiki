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
1. Téléchargez[TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia)et copiez`TWPatch.cia`dans votre carte SD ([fils GBAtemp](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Installez `TWPatch.cia` en utilisant FBI
   - Vous pouvez également utiliser Universal-Updater pour installer TWPatch au lieu des deux étapes précédentes
1. Retournez au menu home et lancez TWPatch
1. Maintenez <kbd class="face">Y</kbd>+<kbd class="face">B</kbd> pour ouvrir le menu du patch et activer `Widescreen patch (384x240 16:10)`
1. (Optionnel !) Pour un écran large moins pixelisé, activez aussi`GPU scaling(blurry, no filters)`
1. Appuyez sur <kbd class="face">B</kbd> pour quitter le menu du patch
1. Appuyez sur <kbd>START</kbd> pour générer un fichier `TwlBg.cxi` avec écran large
   - Si l'écran du haut n'indique pas que le patch large est activé, recommencez depuis l'étape 3
1. Déplacez `TwlBg.cxi` de `sd:/luma/sysmodules/` dans `sd:/_nds/TWiLightMenu/TwlBg/` (créez le dossier `TwlBg`, si il n'existe pas), et renommez le fichier en `Widescreen.cxi`
1. Restart your 3DS while holding <kbd>SELECT</kbd> to open Luma3DS's configuration
1. Enable `external FIRMs and modules`, then press <kbd>START</kbd> to save and quit
1. Open TWiLight Menu++, press <kbd class="face">Y</kbd> on your desired game to bring up the per-game settings, and set `Screen Aspect Ratio` to `16:10`

Vous avez terminé ! Profitez de vos jeux DS en plein écran !

**NOTES :**
1. Ne maintenez pas <kbd>START</kbd> ou <kbd>SELECT</kbd> lors du lancement de TWLMenu++, si vous ne voulez pas que le plein écran apparaisse buggé
1. Tous les jeux ne sont pas compatibles avec le plein écran. [Here is a list of games with widescreen support](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. If you're stuck in widescreen mode in all of TWL_FIRM (including the TWLMenu++ GUI) after following this guide and launching a widescreen-compatible game, delete `TwlBg.cxi` at `sd:/luma/sysmodules/`, and [uninstall](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) and [re-install](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++, and re-follow the above guide
1. Most widescreen patches will only adjust 3D elements for widescreen, 2D elements (such as menus) will only be stretched
