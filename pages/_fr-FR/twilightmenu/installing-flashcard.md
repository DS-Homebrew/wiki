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
   - If it does not download, see the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Open or extract `TWiLightMenu-Flashcard.7z`
1. Drag and drop the `_nds` folder to your flashcard's microSD card root
1. Drag and drop the `BOOT.NDS` file to your flashcard's microSD card root
1. Drag and drop the `roms` folder to your flashcard's microSD card root
1. Si vous avez déjà des données de sauvegarde, déplacez vos fichiers `.sav`, qui se trouvent dans l'emplacement de vos ROMs DS, vers un nouveau dossier appelé `saves`, qui va également dans l'emplacement de vos ROMs DS
1. **Utilisateurs de DS Tank/Lite :** Si le démarrage de `BOOT.NDS` provoque un écran blanc figé, suivez les étapes ci-dessous pour le démarrage automatique et/ou insérez un DS Memory Expansion Pak, puis réessayez

### Démarrage automatique de TWiLight Menu++
1. Drag and drop everything inside `Autoboot/(your flashcard)` to the root of the flashcard's microSD card
   - Sautez cette étape si vous ne voyez pas votre linker
1. **Utilisateurs de DS Tank/Lite :** Allez dans les paramètres du menu principal de la DS et activez le mode automatique pour que votre linker se lance au démarrage

### Pour lancer des jeux en utilisant le firmware de votre linker

Veuillez noter que cela ne fonctionne que si votre linker est configuré pour un démarrage automatique du TWiLight Menu++. Consultez la section ci-dessus pour savoir comment procéder.
{:.alert .alert-warning}

Veuillez noter que tous les linkers ne permettent pas d'exécuter des jeux de cette manière. Si les étapes ci-dessous ne s'appliquent pas à votre linker, vous pouvez sauter cette section.
{:.alert .alert-warning}

Veuillez noter que vous perdrez la possibilité d'utiliser des codes de triche lorsque vous exécuterez des jeux de cette manière. Si vous souhaitez conserver la fonctionnalité des codes de triche, veuillez sauter cette section.
{:.alert .alert-warning}

1. Drag and drop everything inside `Flashcart Loader/(your flashcard)` to the root of the flashcard's microSD card
   - Un fichier README.txt est présent dans le dossier `Flashcart Loader`, pour aider à trouver quel lanceur de linker est approprié pour votre linker.
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

   Installez le [YSMenu de RetroGameFan](https://gbatemp.net/download/35737/).
      - Assurez-vous d'avoir `YSMenu.nds` (renommé depuis `TTMenu.dat` s'il n'y est pas) et le dossier `TTMenu` à la racine de la microSD du linker
      - Ne copiez pas directement `TTMenu.dat` ; cela casserait le démarrage automatique et la réinitialisation logicielle de YSMenu
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard firmware will be used instead of nds-bootstrap
