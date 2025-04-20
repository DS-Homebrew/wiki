---
lang: fr-FR
layout: wiki
section: twilightmenu
category: installing
title: Installation (linker)
long_title: Installation de TWiLight Menu++ (linker)
description: Comment installer TWiLight Menu++ sur un linker Nintendo DS
tabs:
  - 
    loader: Chargeur de linker
    ysmenu: YSMenu
---

### Installation
1. Téléchargez le dernier [`TwiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
    - Si le téléchargement ne commence pas, vérifier la page des [mises à jour](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest)
1. Ouvrer ou extraire `TWiLightMenu-Flashcard.7z`
1. Sélectionner et déplacer le fichier `_nds` au niveau de la racine de votre carte microSD
1. Sélectionner et déplacer le fichier `BOOT.NDS` au niveau de la racine de votre carte microSD
1. Sélectionner et déplacer le fichier `roms` au niveau de la racine de votre carte microSD
1. Si vous avez déjà des données de sauvegarde, déplacez vos fichiers `.sav`, qui se trouvent dans l'emplacement de vos ROMs DS, vers un nouveau dossier appelé `saves`, qui va également dans l'emplacement de vos ROMs DS
1. **Utilisateurs DS Phat/Lite:** Si lancer `BOOT.NDS` cause un écran blanc figé, alors suivez les étapes ci-dessous pour le démarrage automatique puis ressayez

### Démarrage automatique de TWiLight Menu++
1. Ouvrer ou extraire `TWiLightMenu-Flashcard.7z`
1. Ouvrez le fichier `Autoboot`
1. Open the `README.txt` file to help find which autoboot files are appropriate for your flashcard
1. Ouvrez le fichier `(votre carte SD)`
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
    - Skip this, if you don't see your flashcard listed
1. **DS Phat/Lite users:** Go to settings in the DS menu, and turn on auto-start, so your flashcard will start on boot

### To run games using the flashcard kernel (optional)

**Veuillez noter que :**
- Cela ne fonctionne que si votre linker est configuré pour démarrer automatiquement TWiLight Menu++. Consultez la section ci-dessus pour savoir comment procéder.
- Tous les linkers ne permettent pas d'exécuter des jeux de cette façon. Si les étapes ci-dessous ne s'appliquent pas à votre linker, vous pouvez sauter cette section.
- Vous ne pourrez plus utiliser de codes de triche si vous exécutez les jeux de cette façon. Si vous souhaitez conserver la fonctionnalité des codes de triche, veuillez sauter cette section.
{:.alert .alert-warning}

{% capture tab-loader %}

If your flashcart does not have a compatible loader for this section, choose the "YSMenu" tab.
{:.alert .alert-info}

1. Ouvrer ou extraire `TWiLightMenu-Flashcard.7z`
1. Open the `Flashcart Loader` folder
1. Open the `README.txt` file to help find which flashcart loader is appropriate for your flashcard
1. Ouvrez le fichier `(votre carte SD)`
1. Drag and drop the contents to the root of the flashcard's microSD card
    - Ensure the `(your flashcard)` folder is already open, do not drag and drop the folder itself onto the root
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-loader %}
{% assign tab-loader = tab-loader | split: "////////" %}

{% capture tab-ysmenu %}

1. Please confirm that you have one of the below flashcarts:
    - R4i-SDHC (r4i-sdhc.com)
    - r4isdhc.com 2014+ cards (**not** .hk or .com.cn)
    - R4i SDHC Upgrade Revolution
    - R4DSiXL3D
    - R4i Advance
    - R4-IIIi
    - R4 SDHC Revolution
    - R4(i) Pocket
    - R4i Gold (v1.4.1) (3DS)
    - R4 Gold 3DS RTS (r4i-gold.com)
    - R4xDS
    - DSTT(i)
    - DSONE SDHC et DSONEi (les modèles non-SDHC ne sont ***pas*** supportés)
    - M3 DS Real
    - M3i Zero (modèle non GMP-Z003)
    - iTouchDS et iTouch2 (utilisez les fichiers M3Real_M3iZero de YSMenu)
    - R4(i)RTS (r4rts.com) (utilisez les fichiers M3Real_M3iZero de YSMenu)
    - R4 SDHC RTS (carte noire) (r4isdhc.com) (utilisez les fichiers M3Real_M3iZero de YSMenu)
1. Download [RetroGameFan's YSMenu](https://gbatemp.net/download/35737/).
1. Extract it to a folder on your computer. Navigate to the folder required for your flashcart.
1. Inside the folder, rename `TTMenu.dat` to `YSMenu.nds` if a `YSMenu.nds` file does not already exist
1. Copy the `TTMenu` folder and `YSMenu.nds` file to the root of your MicroSD card. **Do not** copy `TTMenu.dat` directly; this will break autobooting and YSMenu's soft reset
1. Open TWLMenu++ Settings, switch to `Games and Apps settings` page, and set `Game Loader` to `Kernel`, so the flashcard kernel will be used instead of nds-bootstrap
    - Alternatively you may do this as a per-game setting by pressing `Y` on a selected game and changing the `Game Loader` option there

{% endcapture tab-ysmenu %}
{% assign tab-ysmenu = tab-ysmenu | split: "////////" %}

### Running games with the flashcard kernel
{% assign tabs = tab-loader | concat: tab-ysmenu %}
{% include tabs.html index=0 tabs=tabs %}
