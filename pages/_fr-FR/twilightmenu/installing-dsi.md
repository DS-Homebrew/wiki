---
lang: fr-FR
layout: wiki
section: twilightmenu
category: installing
title: Installation (DSi)
long_title: Installation de TWiLight Menu++ (DSi)
description: Comment installer TWiLight Menu++ sur la Nintendo DSi
---

Si vous n'avez pas déjà un moyen d'exécuter des homebrews sur votre DSi, suivez [dsi.cfw.guide](https://dsi.cfw.guide) pour installer TWiLight Menu++
{:.alert .alert-info}

### Installation
1. Téléchargez le dernier [`TwiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. Extrayez `TWiLightMenu-DSi.7z`
1. Copiez le dossier `_nds` à la racine de votre carte SD
1. Copiez le fichier `BOOT.NDS` à la racine de votre carte SD
1. Copiez le dossier `roms` à la racine de votre carte SD
1. **Utilisateurs de hiyaCFW :** Copiez le dossier `title` à la racine de votre carte SD

### Démarrage automatique avec Unlaunch
1. Allumez votre DSi en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
1. Dans le menu d'Unlaunch, allez à `OPTIONS`
1. Définissez `NO BUTTON` ou un bouton de votre choix sur l'entrée `TWiLight Menu++` qui dit `BOOT.NDS` sur l'écran inférieur

### Accessing flashcard contents

A flashcard is something that goes in the game card slot, and contains a microSD card slot. If you do not have a flashcard, you are done with this guide.
{:.alert .alert-warning}

#### If you have an R4(i) Ultra

1. Follow [this](installing-flashcard) guide starting from `To run games using your flashcard firmware`
     - You can safely ignore the warnings
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `Slot-1 microSD access`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, press `B` again

#### If you don't have an R4(i) Ultra

1. Create a file called `primary` in `sd:/_nds/` (not the flashcard one), so that TWiLight Menu++ reads settings from the console's SD card after it starts your flashcard
1. Follow [this](installing-flashcard) guide starting from `Autobooting TWiLight Menu++`
1. Copy the `BOOT.NDS` file from `TWiLightMenu-Flashcard.7z` to your flashcard’s microSD card root
1. Open TWLMenu++ Settings
1. Switch to the `Misc settings` page
1. Turn on `SCFG access in Slot-1` (Note that this option overrides `SD access in Slot-1`)
1. Set `Slot-1: Touch Mode` to `DSi mode`
1. Turn on `Auto-start Slot-1`
1. Exit TWLMenu++ Settings by pressing `B` button
     - If you end up in the DS Classic Menu, launch your flashcard
     - Otherwise, restart TWiLight Menu++

#### Switching between SD and flashcard contents
- Press either `SELECT`+`Up` or `SELECT`+`Down` to switch between the SD and flashcard contents
     - If the SELECT menu is enabled, you can do so there as well
     - If you use the 3DS theme, touch the Game Card/SD Card icon
     - If you use the R4/GBC theme, press `L` button
