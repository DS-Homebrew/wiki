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
1. Téléchargez la dernière version de `TWiLightMenu-Flashcard.7z` depuis [la page de téléchargement](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Extrayez `TWiLightMenu-Flashcard.7z`
1. Copiez le dossier `_nds` à la racine de la carte microSD de votre linker
1. Copiez le fichier `BOOT.NDS` à la racine de la carte microSD de votre linker
1. Copiez le dossier `roms` à la racine de la carte microSD de votre linker
1. Si vous avez déjà des données de sauvegarde, déplacez vos fichiers `.sav` qui sont à l'emplacement de votre ROM DS, dans un nouveau dossier appelé `saves`, qui va également dans l'emplacement de vos ROM DS
1. ...
   - **Utilisateurs d'une DS Phat/lite :** Si le démarrage de `BOOT.NDS` provoque un écran blanc figé, insérez un pack d'extension de mémoire et réessayez
   - **Utilisateurs DSi / 3DS:** ExécutezTWLMenu++ sur la carte DS de la console, et activez `L'accès SCFG Slot-1` et définissez `Slot-1: Mode Touch` sur `Mode DSi`
      - Ceci vous permet d'utiliser la vitesse TWL click et / ou le boost VRAM sur vos jeux flashcarts ainsi qu'à la carte SD de la console, et exécute les jeux Optimisés-DSi / Exclusifs-DSi / DSiWare en mode DSi depuis votre flashcard

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
   - **Utilisateurs de DS Phat/DS Lite :** Allez dans les paramètres du menu DS, et activez le démarrage automatique, pour que votre linker se lance au démarrage
   - **Utilisateurs d'une DSi/3DS :** Exécutez TWLMenu++ sur la carte SD de la console et activez `Démarage automatique Slot-1`
