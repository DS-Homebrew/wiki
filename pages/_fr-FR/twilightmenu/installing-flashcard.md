---
lang: fr-FR
layout: wiki
section: twilightmenu
category: installing
title: Installation (linker)
long_title: Installation de TWiLight Menu++ (linker)
description: Comment installer TWiLight Menu++ sur un linker Nintendo DS
---

### Installation
1. Téléchargez le dernier [`TwiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Extrayez `TWiLightMenu-Flashcard.7z`
1. Copiez le dossier `_nds` à la racine de la carte microSD de votre linker
1. Copiez le fichier `BOOT.NDS` à la racine de la carte microSD de votre linker
1. Copiez le dossier `roms` à la racine de la carte microSD de votre linker
1. Si vous avez déjà des données de sauvegarde, déplacez vos fichiers `.sav`, qui se trouvent dans l'emplacement de vos ROMs DS, vers un nouveau dossier appelé `saves`, qui va également dans l'emplacement de vos ROMs DS
1. ...
   - **Utilisateurs de DS Tank/Lite :** Si le démarrage de `BOOT.NDS` provoque un écran blanc figé, insérez un DS Memory Expansion Pak et réessayez
   - **Utilisateurs de DSi/3DS :** Exécutez TWLMenu++ sur la carte SD de la console, ouvrez les paramètres de TWLMenu++, passez à la page `Autres paramètres`, et activez `Accès au SCFG par Slot-1` puis définissez `Slot-1 : Mode tactile` sur `Mode DSi`
      - Ceci vous permet d'utiliser la vitesse d'horloge TWL et/ou le boost VRAM pour vos jeux sur linker, ainsi que d'accéder à la carte SD de la console et d'exécuter les jeux optimisés DSi/exclusifs DSi/DSiWare en mode DSi depuis votre linker
      - Cette option activée, vous pouvez utiliser <kbd>SELECT</kbd> + <kbd>Haut</kbd>/<kbd>Bas</kbd> pour basculer entre votre carte SD interne et la carte SD de votre linker

### Démarrage automatique de TWiLight Menu++
1. Extrayez le contenu de `Autoboot/(votre linker)` à la racine de la carte microSD du linker
   - Sautez cette étape si vous ne voyez pas votre linker
1. ...
   - **Utilisateurs de DS Tank/Lite :** Allez dans les paramètres du menu principal de la DS et activez le mode automatique pour que votre linker se lance au démarrage
   - **Utilisateurs de DSi/3DS :** Exécutez TWLMenu++ sur la carte SD de la console, ouvrez les paramètres de TWLMenu++, passez à la page `Autres paramètres`, et activez `Démarrage automatique Slot-1`

### Pour lancer des jeux en utilisant le firmware de votre linker

Veuillez noter que cela ne fonctionne que si votre linker est configuré pour un démarrage automatique du TWiLight Menu++. Consultez la section ci-dessus pour savoir comment procéder.
{:.alert .alert-warning}

Veuillez noter que tous les linkers ne permettent pas d'exécuter des jeux de cette manière. Si les étapes ci-dessous ne s'appliquent pas à votre linker, vous pouvez sauter cette section.
{:.alert .alert-warning}

1. Extrayez ce qui est dans `Flashcart Loader/(votre linker)` à la racine de la carte microSD
   - Si vous l'avez fait, passez à l'étape 3. Si ce n'est pas le cas, suivez les étapes de la liste de linkers ci-dessous

1. Pour ces linkers :
   - R4i-SDHC (r4i-sdhc.com)
   - Cartes r4isdhc.com 2014-2022 (**pas** .hk ou .com.cn)
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)
   - DSONE SDHC et DSONEi (les modèles non-SDHC ne sont ***pas*** supportés)
   - M3 DS Real
   - M3i Zero (modèle non GMP-Z003)
   - iTouchDS et iTouch2 (utilisez les fichiers M3Real_M3iZero de YSMenu)
   - R4(i)RTS (r4rts.com) (utilisez les fichiers M3Real_M3iZero de YSMenu)
   - R4 SDHC RTS (carte noire) (r4isdhc.com) (utilisez les fichiers M3Real_M3iZero de YSMenu)

   Installez le [YSMenu de RetroGameFan](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/).
      - Assurez-vous d'avoir `YSMenu.nds` (renommé depuis `TTMenu.dat` s'il n'y est pas) et le dossier `TTMenu` à la racine de la microSD du linker
1. Ouvrez les paramètres de TWLMenu++, passez à la page `Paramètres de nds-bootstrap settings`, et définissez `Utiliser nds-bootstrap` à `Non` pour que le firmware du linker soit utilisé au lieu de nds-bootstrap
