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
1. Téléchargez [TWPatch](https://db.universal-team.net/assets/files/TWPatch.cia) et copiez `TWPatch.cia` sur votre carte SD ([thread GBATemp](https://gbatemp.net/threads/twpatcher-ds-i-mode-screen-filters-and-patches.542694/))
1. Installez `TWPatch.cia` en utilisant FBI
   - Vous pouvez également utiliser Universal-Updater pour installer TWPatch au lieu des deux étapes précédentes
1. Retournez au menu home et lancez TWPatch
1. Hold <kbd class="face">Y</kbd> + <kbd class="face">B</kbd> to open the patch menu and enable `Widescreen patch (384x240 16:10)`
1. (Optional!) For a less pixelated widescreen, also enable `GPU scaling (blurry, no filters)`
1. Press <kbd class="face">B</kbd> to exit the patch menu
1. Press <kbd>START</kbd> to generate a `TwlBg.cxi` file with widescreen
   - If the top screen doesn't indicate that wide patch is enabled, start from step 3 again
1. Move `TwlBg.cxi` from `sd:/luma/sysmodules/` to `sd:/_nds/TWiLightMenu/TwlBg/`, and rename the file to `Widescreen.cxi`
1. Restart your 3DS while holding <kbd>SELECT</kbd> to open Luma3DS's configuration
1. Enable `external FIRMs and modules`, then press <kbd>START</kbd> to save and quit
1. Open TWiLight Menu++ settings, switch to the `Games/Apps settings` page, and set `Screen Aspect Ratio` to `16:10`
   - This can be done per-game as well

Vous avez terminé ! Profitez de vos jeux DS en plein écran !

**NOTES :**
1. Ne maintenez pas <kbd>START</kbd> ou <kbd>SELECT</kbd> lors du lancement de TWLMenu++, si vous ne voulez pas que le plein écran apparaisse buggé
1. Tous les jeux ne sont pas compatibles avec le plein écran. [Nous avons créé une liste de jeux compatibles avec le plein écran](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/7zfile/3DS%20-%20CFW%20users/Games%20supported%20with%20widescreen.txt)
1. Si vous êtes coincé en mode plein écran dans tous les TWL_FIRM (y compris l'interface TWLMenu++ GUI) après avoir suivi ce guide et lancé un jeu compatible avec le plein écran, [désinstallez](https://wiki.ds-homebrew.com/twilightmenu/uninstalling-3ds) et [réinstallez](https://wiki.ds-homebrew.com/twilightmenu/installing-3ds) TWiLight Menu++
