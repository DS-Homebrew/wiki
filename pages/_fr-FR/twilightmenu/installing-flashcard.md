---
lang: fr-FR
layout: wiki
section: twilightmenu
category: installing
title: Installation (Linker)
long_title: Installation de TWiLight Menu++ (Linker)
description: Comment installer TWiLight Menu++ sur un linker Nintendo DS
---

### Installation
1. Download the latest [`TWiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Extrayez `TWiLightMenu-Flashcard.7z`
1. Copiez le dossier `_nds` à la racine de la carte microSD de votre linker
1. Copiez le fichier `BOOT.NDS` à la racine de la carte microSD de votre linker
1. Copiez le dossier `roms` à la racine de la carte microSD de votre linker
1. Si vous avez déjà des données de sauvegarde, déplacez vos fichiers `.sav` qui sont à l'emplacement de votre ROM DS, dans un nouveau dossier appelé `saves`, qui va également dans l'emplacement de vos ROM DS
1. ...
   - **DS Phat/Lite users:** If booting `BOOT.NDS` causes a white screen lock-up, insert a DS Memory Expansion Pak, and try again
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `SCFG access in Slot-1` and set `Slot-1: Touch Mode` to `DSi Mode`
      - This will let you use TWL clock speed and/or VRAM boost on your flashcard games, as well as both accessing the console's SD card, and running DSi-Enhanced/DSi-Exclusive/DSiWare games in DSi mode from your flashcard

### Pour exécuter des jeux en utilisant le logiciel de votre linker
1. Extraire ce qui est dans `Flashcart Loader/(your flashcard)` à la racine de la carte microSD
   - Si vous l'avez fait, passez à l'étape 3. Dans le cas contraire, suivez les étapes en dessous de la liste de flashcard ci-dessous

1. Pour ces linkers :
   - R4i-SDHC
   - Cartes r4isdhc.com
   - Cartes r4isdhc.hk
   - R4i SDHC Upgrade Revolution
   - R4DSiXL3D
   - R4i Advance
   - R4-IIIi
   - R4 SDHC Revolution
   - R4(i) Pocket
   - R4i Gold (v1.4.1) (3DS)
   - R4xDS
   - DSTT(i)

   Installez YSMenu [ici](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/)
      - Assurez-vous d'avoir `YSMenu.nds` (renommez `TTMenu.dat` s'il n'y est pas) et le dossier `TTMenu` sur la racine de la microSD du linker
1. Définissez `Utiliser nds-bootstrap` à `Non`, donc le micrologiciel de la flashcard sera utilisé à la place de nds-bootstrap

### Démarrage automatique de TWiLight Menu++
1. Extraire le contenu de `Autoboot/(your flashcard)` à la racine de la carte microSD du linker
   - Passez cela, si vous ne voyez pas votre linker
1. ...
   - **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot
   - **DSi/3DS users:** Run TWLMenu++ on the console's SD card, and turn on `Auto-start Slot-1`
