---
lang: fr-FR
layout: wiki
section: ds-index
category: guides
title: Forwarders de jeux DS
description: Comment utiliser les forwarders de jeux DS sur le menu hiyaCFW ou le menu HOME de la 3DS
tabs:
  - 
    tab-3ds-sd-card: Carte SD 3DS
    tab-dsi-sd-card: Carte SD DSi
    tab-flashcard: Linker
---

Les forwarders sont des raccourcis pour les jeux que vous pouvez installer dans votre menu HOME ou votre menu hiyaCFW. Vous pouvez lancer les jeux DS depuis la carte SD (en utilisant nds-bootstrap) ou depuis un linker compatible (via son kernel respectif) en utilisant des forwarders installés dans le menu de votre choix. <!--- I feel like this still needs a bit of work. Still better than what was there before. -->

Les jeux DS doivent être dumpés dans un format numérique `.nds`. Vous pouvez dumper vos cartouches DS en utilisant [GodMode9](https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge) sur 3DS ou [GodMode9i](https://dsi.cfw.guide/dumping-game-cards) sur DSi.
{:.alert .alert-info}

Si vous avez des problèmes, consultez la FAQ sur le [fil GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

Choisissez l'un des éléments suivants pour l'ajouter au menu HOME :

{% capture tab-3ds-sd-card %}

Cette page suppose que vous exécutez un environnement CFW moderne d'après [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-warning}

### Partie 1 : Obtenir les fichiers nécessaires

Si Universal-Updater est déjà installé sur votre console, vous pouvez passer à l'étape 3.
{:.alert .alert-info}

1. Ouvrez FBI et sélectionnez `Remote Install`, puis `Scan QR Code`
1. Scannez ce code QR pour installer la dernière version de [Universal-Updater](https://github.com/Universal-Team/Universal-Updater)<br> ![Code QR de Universal-Updater](https://db.universal-team.net/assets/images/qr/universal-updater-cia.png)
1. Ouvrez Universal-Updater à partir de votre menu HOME
1. Installez le paquet NDSForwarder
1. NDSForwarder et ses fichiers requis sont maintenant installés dans leurs emplacements respectifs

### Partie 2 : NDSForwarder
1. Lancez l'Homebrew Launcher
1. Dans l'Homebrew Launcher, ouvrez `NDS Forwarder Generator`
1. Naviguez jusqu'à l'emplacement de votre jeu et appuyez sur <kbd class="face">A</kbd>
1. Confirmez l'installation en sélectionnant `Yes`
1. Après son installation, votre jeu apparaîtra comme un titre dans votre menu HOME
{% endcapture %}
{% assign tab-3ds-sd-card = tab-3ds-sd-card | split: "////////" %}

{% capture tab-dsi-sd-card %}

### Pré-requis

- Une Nintendo DSi avec [Unlaunch](https://dsi.cfw.guide/fr_FR/installing-unlaunch) et [hiyaCFW](../hiyacfw/installing) installés
- La dernière version de [NDSForwarder-DSi](https://github.com/lifehackerhansol/NDSForwarder-DSi/releases/latest/download/NDSForwarder.dsi)

### Partie 1 : Pour commencer
1. Copiez `NDSForwarder.dsi` à la racine de votre carte SD
   - Cela peut éventuellement être installé sur hiyaCFW directement en utilisant [TMFH](https://github.com/JeffRuLz/TMFH/releases/latest/download/TMFH.0.7.1.zip)
1. Téléchargez le [pack de forwarders pour carte SD de DSi](https://github.com/RocketRobz/NTR_Forwarder/releases/latest/download/DS.Game.Forwarder.pack.DSi.3DS.SD.Card.7z)
1. Extrayez le contenu du dossier `for SD Card root` à la racine de la carte SD de votre DSi

Après avoir extrait le pack de votre carte, vous pouvez modifier `sd:/_nds/nds-bootstrap.ini` et changer les paramètres suivants.
- BOOST_CPU : Si la valeur est 1, la vitesse d'horloge TWL est utilisée, supprimant ainsi les ralentissements
- SOUND_FREQ : Si la valeur est 1, le son sera joué à 48 kHz, au lieu de 32 kHz
- LANGUAGE : Si la valeur est -1, la langue du système sera utilisée
- REGION : Si la valeur est -2, la région du jeu DSiWare sera utilisée au lieu de celle du système

### Partie 2 : Obtenir les fichiers de correction AP à partir de TWiLight Menu++

Si vous disposez déjà de TWiLight Menu++, passez à la section suivante.
{:.alert .alert-info}

1. Téléchargez le dernier [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. Dans le fichier `.7z`, allez dans le dossier `_nds/TWiLightMenu/extras`
1. Faites glisser le fichier `apfix.pck` vers `sd:/_nds/ntr-forwarder/`

### Partie 3 : NDSForwarder-DSi
1. Réinsérez votre carte SD dans votre console
1. Maintenez <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, puis allumez votre console pour démarrer sur Unlaunch
1. Lancez `NDSForwarder.dsi`
   - If you get a `nitroFSInit() fail` message, try using TWiLight Menu++ to launch, or place `NDSForwarder.dsi` on the root of your SD card
1. Press <kbd class="face">A</kbd> on `Install`
1. Navigate to your game's location and press <kbd class="face">A</kbd>
1. After it is installed, your game will now appear as a title on your hiyaCFW DSi Menu

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Requirements

- **Utilisateurs de DSi :**
   - Une Nintendo DSi avec [Unlaunch](https://dsi.cfw.guide/fr_FR/installing-unlaunch) et [hiyaCFW](installing) installés
   - La dernière version de [Title Manager for HiyaCFW](https://github.com/JeffRuLz/TMFH/releases)
- **Utilisateurs de 3DS :**
   - Une console de la famille Nintendo 3DS avec un environnement CFW moderne d'après [3ds.hacks.guide](https://3ds.hacks.guide)

{% capture flashcards %}
Les linkers recommandées sont le DSTT et l'Acekard 2i. Si vous voulez une compatibilité parfaite avec les jeux, prenez la SuperCard DSTWO/DSTWO PLUS. Le seul inconvénient est que ceci vide plus rapidement la batterie de votre système.

Si vous avez un linker qui fonctionne avec le NTR Launcher d'Apache Thunder, vous pouvez le demander [sur le fil GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Assurez-vous de spécifier quelle version vous utilisez (Normal ou Alt), et si `RESETSLOT1` est défini à `0` ou `1` dans `sd:/nds/ntr_launcher.ini`.

Compatibles :
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (les jeux optimisés DSi, y compris les jeux NTR plus récents, ne fonctionnent pas)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (utilise une carte microSD inférieure à 2 Go)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (version originale non SDHC, utilise une carte microSD inférieure à 2 Go)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146) ([www.r4i-sdhc.com](http://www.r4i-sdhc.com)) (versions normale et RTS)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (la carte violette peut être incompatible)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (versions normale et Plus)

Non testé :
- R4i3D NEW (utilisez le modèle et le pack R4iDSN)

Partiellement compatibles :
- Ace 3DS+ (la compatibilité de jeu est mauvaise, la sauvegarde/le chargement d'un fichier de sauvegarde donc provoque un plantage)
- Carte Gateway bleue (la compatibilité de jeu est mauvaise, la sauvegarde/le chargement d'un fichier de sauvegarde provoque donc un plantage)
- EX4DS (la compatibilité de jeu est mauvaise, la sauvegarde/le chargement d'un fichier de sauvegarde provoque donc un plantage)
- R4iLS (la compatibilité de jeu est mauvaise, la sauvegarde/le chargement d'un fichier de sauvegarde provoque donc un plantage)
- Les cartes avec [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/) (la compatibilité de jeu est mauvaise, la sauvegarde/le chargement d'un fichier de sauvegarde provoque donc un plantage)

Incompatibles :
- CycloDS (i)Evolution (peut démarrer automatiquement les ROMs, mais fonctionne différemment des autres linkers)
- (i)Edge (impossible de démarrer automatiquement une ROM .nds)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com) / [www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu (et non le processus de forwarder) bricke la carte)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)) (YSMenu (et non le processus de forwarder) bricke la carte)
{% endcapture %}

<details>
    <summary>Un linker supporté de cette liste</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

- Un système d'exploitation 64 bits
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- [Java 8](https://www.java.com/en/download/)
- **Utilisateurs de Linux :** JavaFX
   - Basé sur Debian : Exécutez [ce script](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh)
   - Arch : `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`

### Part 1: Getting started
1. Download one of these packs:
   - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)
1. Extract the contents of the `for Slot-1 microSD` folder to the root of your flashcard's microSD card, and (if the folder exists) the contents of the `for 3DS SD card` folder to the root of your 3DS's SD card
   - What will be in each pack for loading ROMs:
      - Original R4/M3 Simply - WoodR4 & YSMenu
      - DSTT/R4i Gold/R4i-SDHC/R4 SDHC Dual-Core/R4 SDHC Upgrade/SC DSONE, Acekard 2(i)/M3DS Real/R4i-SDHC 1.4.x - YSMenu
      - Acekard RPG, Ace 3DS+/Gateway Blue Card/R4iLS/R4iTT, R4iDSN/R4i Gold RTS - WoodR4

Après avoir extrait le pack de votre carte, vous pouvez modifier `sd:/_nds/ntr_forwarder.ini` pour changer les paramètres suivants. Ce n'est pas possible pour Acekard RPG, R4 DS et R4i Gold RTS.
   - `NTRCLOCK` : Si réglé sur `0` ou que <kbd class="face">A</kbd> est maintenu, l'écran de démarrage DSi apparaîtra à la place du démarrage normal de la DS et la vitesse de l'horloge TWL est utilisée, supprimant ainsi les ralentissements
   - `DISABLEANIMATION` : Si réglé sur `1` ou que <kbd class="face">B</kbd> est maintenu, l'écran de démarrage de la DS/DSi est ignoré
   - `HEALTHSAFETYMSG` : Si réglé sur `1`, le message de santé et de sécurité de l'écran de démarrage apparaîtra sur l'écran inférieur, sinon l'écran inférieur reste blanc et sans message de santé et de sécurité

### Part 2: Getting the AP fix files from TWiLight Menu++

Si vous disposez déjà de TWiLight Menu++, passez à la section suivante.
{:.alert .alert-info}

1. Download the latest [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. In the 7z file, go to the `_nds/TWiLightMenu/extras` folder
1. Drag the `apfix.pck` file to `fat:/_nds/ntr-forwarder/`

### Part 3: Forwarder3-DS
1. Open `Forwarder3DS.jar`
   - **Windows users:** If it doesn't open, download this [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat), place it in the same folder as Forwarder3DS.jar, and run it
1. Set your card as the `Target` on the left
   - **NOTE:** If you don't see a list of cards, download [this zip](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), and put the `forwarders` folder in the same folder as Forwarder3DS.jar, then rename it to `.forwarders`
1. Enable `Automatically set ROM path`
   - **Linux users:** The automatic path is incorrect since it includes the entire path (e.g. `/media/$USER/something/`), please remove that part
   - **MacOS users:** The automatic path is incorrect since it includes `/Volumes/(cardname)/` at the start, please remove that part
1. Click the folder in the top right and select the ROMs you want to make forwarders for or drag and drop them onto the window
   - **NOTE:** The ROMs must already be on your SD card when selecting them, and can't be moved without recreating the forwarders
1. If you're playing a hack/translation of a DSi-Enhanced game that has it's banner/title edited, find the banner for the game from [here](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), right click on the game in Forwarder3-DS, click `Import banner`, and click on the banner to use
1. If using a homebrew ROM, click on it, then clear the `Game title` and type the game's title
1. Click the floppy disk button to generate the forwarders

### Part 4: Installing the forwarder

- Si vous utilisez une console de la famille 3DS :
   1. Copiez le(s) CIA(s) sur la carte SD de votre 3DS, puis installez-les en utilisant FBI
      - Si vous utilisez l'EmuNAND, installez à la fois sur la SysNAND et l'EmuNAND
- Si vous utilisez une DSi :
   1. Copiez `tmfh.nds` depuis l'archive `.zip` de TMFH à la racine de votre carte SD
   1. Réinsérez votre carte SD dans votre DSi
   1. Lancez `tmfh.nds` depuis Unlaunch ou TWiLight Menu++
   1. Installez le fichier NDS du forwarder en utilisant TMFH
{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-dsi-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}
