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
   - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Extrayez `TWiLightMenu-DSi.7z`
1. Copiez le dossier `_nds` à la racine de votre carte SD
1. Copiez le fichier `BOOT.NDS` à la racine de votre carte SD
1. Copiez le dossier `roms` à la racine de votre carte SD
1. **Utilisateurs de hiyaCFW :** Copiez le dossier `title` à la racine de votre carte SD

### Démarrage automatique avec Unlaunch
1. Allumez votre DSi en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd>
1. Dans le menu d'Unlaunch, allez à `OPTIONS`
1. Définissez `NO BUTTON` ou un bouton de votre choix sur l'entrée `TWiLight Menu++` qui dit `BOOT.NDS` sur l'écran inférieur

### Accéder au contenu des linkers

Un linker est un élément qui se place dans l'emplacement de la carte de jeu, et qui contient un emplacement pour carte microSD. Si vous n'avez pas de linker, vous en avez terminé avec ce guide.
{:.alert .alert-warning}

#### Si vous avez une R4(i) Ultra

1. Suivez [ce guide](installing-flashcard) à partir de `Pour lancer des jeux en utilisant le firmware de votre linker`
     - Vous pouvez ignorer les avertissements
1. Ouvrez les paramètres de TWLMenu++
1. Allez à la page `Autres paramètres`
1. Activez `Accès microSD Slot-1`
1. Quittez les paramètres de TWLMenu++ en appuyant sur le bouton `B`
     - Si vous vous retrouvez dans le menu DS Classic, appuyez à nouveau sur `B`

#### Si vous n'avez pas de R4(i) Ultra

1. Créez un fichier appelé `primary` dans `sd:/_nds/` (pas celui du linker), afin que TWiLight Menu++ lise les paramètres de la carte SD de la console après avoir démarré votre linker
1. Suivez [ce guide](installing-flashcard) à partir de `Démarrage automatique de TWiLight Menu++`
1. Copiez le fichier `BOOT.NDS` de `TWiLightMenu-DSi.7z` à la racine de la carte microSD de votre linker
1. Ouvrez les paramètres de TWLMenu++
1. Allez à la page `Autres paramètres`
1. Activez `Accès au SCFG par Slot-1` (Notez que cette option remplace `Accès microSD Slot-1`)
1. Définissez `Slot-1 : Mode tactile` à `Mode DSi`
1. Activez `Démarrage automatique Slot-1`
1. Quittez les paramètres de TWLMenu++ en appuyant sur le bouton `B`
     - Si vous vous retrouvez dans le menu DS Classic, lancez votre linker
     - Sinon, redémarrez TWiLight Menu++

#### Basculer entre le contenu de la carte SD et celui du linker
- Appuyez sur `SELECT`+`Haut` ou `SELECT`+`Bas` pour passer du contenu de la carte SD à celui du linker
     - Si le menu SELECT est activé, vous pouvez également le faire à cet endroit
     - Si vous utilisez le thème 3DS, touchez l'icône Carte de jeu/Carte SD
     - Si vous utilisez les thèmes R4, GBC ou Wood, appuyez sur le bouton `R`
