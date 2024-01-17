---
lang: fr-FR
layout: wiki
section: ds-index
category: guides
title: Forwarders de jeux DS
description: Comment utiliser les forwarders de jeux DS sur le menu hiyaCFW ou le menu HOME de la 3DS
tabs:
  - 
    3ds-sd-card: Carte SD 3DS
    dsi-sd-card: Carte SD DSi
    flashcard: Flashcard only
    flashcard-dsi-3ds: Flashcard on modded DSi/3DS
---

Forwarders are shortcuts for games that you can install to your HOME menu, hiyaCFW menu, or flashcard menu. You can load DS(i) games from the SD card (using nds-bootstrap) or from a compatible flashcard (via its respective kernel) using forwarders installed to your menu of choice. <!--- I feel like this still needs a bit of work. Still better than what was there before. -->

Les jeux DS doivent être dumpés dans un format numérique `.nds`. Vous pouvez dumper vos cartouches DS en utilisant [GodMode9](https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge) sur 3DS ou [GodMode9i](https://dsi.cfw.guide/dumping-game-cards) sur DSi.
{:.alert .alert-info}

Si vous avez des problèmes, consultez la FAQ sur le [fil GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

Choisissez l'un des éléments suivants pour l'ajouter au menu HOME :

{% capture tab-3ds-sd-card %}

Cette page suppose que vous exécutez un environnement CFW moderne d'après [3ds.hacks.guide](https://3ds.hacks.guide).
{:.alert .alert-warning}

### Étape 1: Récupérer les fichiers nécessaires

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

### Prérequis

- Une Nintendo DSi avec [Unlaunch](https://dsi.cfw.guide/fr_FR/installing-unlaunch) et [hiyaCFW](../hiyacfw/installing) installés
- La dernière version de [NDSForwarder-DSi](https://github.com/lifehackerhansol/NDSForwarder-DSi/releases/latest/download/NDSForwarder.dsi)

### Partie 1 : Pour commencer
1. Copiez `NDSForwarder.dsi` à la racine de votre carte SD
   - This can optionally be installed to hiyaCFW directly using [NTM](https://github.com/Epicpkmn11/NTM/releases/download/v0.2.0/NTM.dsi)
1. Download the [Forwarder pack](https://github.com/RocketRobz/NTR_Forwarder/releases/latest/download/DS.Game.Forwarder.pack.nds-bootstrap.7z)
1. Extrayez le contenu du dossier `for SD Card root` à la racine de la carte SD de votre DSi

### Partie 2 : Obtenir les fichiers de correction AP à partir de TWiLight Menu++

If you already have TWiLight Menu++, skip to the next part.
{:.alert .alert-info}

1. Téléchargez le dernier [`TWiLightMenu-DSi.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z)
1. Dans le fichier `.7z`, allez dans le dossier `_nds/TWiLightMenu/extras`
1. Faites glisser le fichier `apfix.pck` vers `sd:/_nds/ntr-forwarder/`

### Partie 3 : NDSForwarder-DSi
1. Réinsérez votre carte SD dans votre console
1. Maintenez <kbd class="face">A</kbd> + <kbd class="face">B</kbd>, puis allumez votre console pour démarrer sur Unlaunch
1. Lancez `NDSForwarder.dsi`
   - Si vous obtenez un message `nitroFSInit() fail`, essayez d'utiliser TWiLight Menu++ pour le lancer, ou placez `NDSForwarder.dsi` à la racine de votre carte SD
1. Appuyez sur <kbd class="face">A</kbd> sur `Install`
1. Naviguez jusqu'à l'emplacement de votre jeu et appuyez sur <kbd class="face">A</kbd>
1. Après son installation, votre jeu apparaîtra comme un titre dans votre menu DSi hiyaCFW

{% endcapture %}
{% assign tab-dsi-sd-card = tab-dsi-sd-card | split: "////////" %}

{% capture tab-flashcard %}

### Prérequis

- A Nintendo DS, DS Lite, DSi or 3DS with a flashcard
- The latest release of [NDSForwarder-DSi](https://github.com/lifehackerhansol/NDSForwarder-DSi/releases/latest/download/NDSForwarder.nds)

### Partie 1 : Pour commencer
1. Copy `NDSForwarder.nds` to your flashcard's SD card root
1. Download the [Forwarder pack](https://github.com/RocketRobz/NTR_Forwarder/releases/latest/download/DS.Game.Forwarder.pack.nds-bootstrap.7z)
1. Extract the contents of the `for SD Card root` folder to the root of your flashcard's SD card

### Partie 2 : Obtenir les fichiers de correction AP à partir de TWiLight Menu++

If you already have TWiLight Menu++ or just plan to run DSiWare, skip to the next part.
{:.alert .alert-info}

1. Téléchargez le dernier [`TwiLightMenu-Flashcard.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-Flashcard.7z)
1. Dans le fichier `.7z`, allez dans le dossier `_nds/TWiLightMenu/extras`
1. Faites glisser le fichier `apfix.pck` vers `sd:/_nds/ntr-forwarder/`

### Partie 3 : NDSForwarder-DSi
1. Reinsert your SD card into your flashcard, and the flashcard into your device
1. Power on your device and launch your flashcard
1. Launch `NDSForwarder.nds`
   - If you get a `nitroFSInit() fail` message, try using TWiLight Menu++ to launch, or place `NDSForwarder.nds` on the root of your SD card
1. Appuyez sur <kbd class="face">A</kbd> sur `Install`
1. Naviguez jusqu'à l'emplacement de votre jeu et appuyez sur <kbd class="face">A</kbd>
1. After it is installed, your game will now appear in a folder called `forwarders` on the flashcard's SD card root

{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% capture tab-flashcard-dsi-3ds %}

### Prérequis

- **Utilisateurs de DSi :**
   - Une Nintendo DSi avec [Unlaunch](https://dsi.cfw.guide/fr_FR/installing-unlaunch) et [hiyaCFW](installing) installés
   - La dernière version de [Title Manager for HiyaCFW](https://github.com/JeffRuLz/TMFH/releases)
- **Utilisateurs de 3DS :**
   - Une console de la famille Nintendo 3DS avec un environnement CFW moderne d'après [3ds.hacks.guide](https://3ds.hacks.guide/fr_FR/)

{% capture flashcards %}
Les linkers recommandés sont le DSTT et l'Acekard 2i. Si vous voulez une compatibilité parfaite avec les jeux, prenez la SuperCard DSTWO/DSTWO PLUS. Le seul inconvénient est qu'elle vide plus rapidement la batterie de votre système.

Si vous avez un linker qui fonctionne avec le NTR Launcher d'Apache Thunder, vous pouvez le soumettre [sur le fil GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Assurez-vous de préciser quelle version vous utilisez (Normal ou Alt), et si `RESETSLOT1` est défini sur `0` ou `1` dans le fichier `sd:/nds/ntr_launcher.ini`.

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
- Ace 3DS+ (la compatibilité de jeu est mauvaise, la sauvegarde/le chargement d'un fichier de sauvegarde provoque donc un plantage)
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

### Partie 1 : Pour commencer
1. Téléchargez l'un de ces packs :
   - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)
1. Extrayez le contenu du dossier `for Slot-1 microSD` à la racine de la carte microSD de votre linker, et (si le dossier existe) le contenu du dossier `for 3DS SD card` à la racine de la carte SD de votre 3DS
   - Ce qui sera dans chaque pack pour le chargement des ROMs :
      - Original R4/M3 Simply - WoodR4 et YSMenu
      - DSTT/R4i Gold/R4i-SDHC/R4 SDHC Dual-Core/R4 SDHC Upgrade/SC DSONE, Acekard 2(i)/M3DS Real/R4i-SDHC 1.4.x - YSMenu
      - Acekard RPG, Ace 3DS+/Carte Gateway bleue/R4iLS/R4iTT, R4iDSN/R4i Gold RTS - WoodR4

Après avoir extrait le pack de votre carte, vous pouvez modifier `sd:/_nds/ntr_forwarder.ini` pour changer les paramètres suivants. Cela n'est pas possible pour l'Acekard RPG, la R4 DS et la R4i Gold RTS.
   - `NTRCLOCK` : Si réglé sur `0` ou que <kbd class="face">A</kbd> est maintenu, l'écran de démarrage DSi apparaîtra à la place du démarrage normal de la DS et la vitesse de l'horloge TWL est utilisée, supprimant ainsi les ralentissements
   - `DISABLEANIMATION` : Si réglé sur `1` ou que <kbd class="face">B</kbd> est maintenu, l'écran de démarrage DS/DSi est ignoré
   - `HEALTHSAFETYMSG` : Si réglé sur `1`, le message de santé et de sécurité de l'écran de démarrage apparaîtra sur l'écran inférieur, sinon l'écran inférieur reste blanc et sans message de santé et de sécurité

### Partie 2 : Obtenir les fichiers de correction AP à partir de TWiLight Menu++

If you already have TWiLight Menu++, skip to the next part.
{:.alert .alert-info}

1. Téléchargez le dernier [`TwiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. Dans le fichier 7z, allez dans le dossier `_nds/TWiLightMenu/extras`
1. Faites glisser le fichier `apfix.pck` vers `fat:/_nds/ntr-forwarder/`

### Partie 3 : Forwarder3-DS
1. Ouvrez `Forwarder3DS.jar`
   - **Utilisateurs de Windows :** S'il ne s'ouvre pas, téléchargez ce [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat), placez-le dans le même dossier que Forwarder3DS.jar et exécutez-le
1. Définissez votre carte en tant que `Target` à gauche
   - **NOTE :** Si vous ne voyez pas de liste de cartes, téléchargez [ce zip](https://github.com/Olmectron/olmectron.github.io/archive/master.zip) et placez le dossier `forwarders` dans le même dossier que Forwarder3DS.jar, puis renommez-le en `.forwarders`
1. Activez `Automatically set ROM path`
   - **Utilisateurs de Linux :** Le chemin automatique est incorrect car il inclut le chemin entier (par exemple `/media/$USER/something/`), veuillez supprimer cette partie
   - **Utilisateurs de macOS :** Le chemin automatique est incorrect car il inclut `/Volumes/(nom de la carte)/` au début, veuillez supprimer cette partie
1. Cliquez sur le dossier en haut à droite et sélectionnez les ROMs pour lesquelles vous souhaitez créer des forwarders ou faites-les glisser-déposer dans la fenêtre
   - **NOTE :** Les ROMs doivent déjà être sur votre carte SD lors de leur sélection, et ne peuvent être déplacées sans recréer les forwarders
1. Si vous jouez à un hack/une traduction d'un jeu optimisé DSi dont la bannière/le titre titre été modifié•e, trouvez la bannière du jeu [ici](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), faites un clic droit sur le jeu dans Forwarder3-DS, cliquez sur `Import banner` et cliquez sur la bannière à utiliser
1. Si vous utilisez une ROM homebrew, cliquez dessus, puis effacez le `Game title` et tapez le titre du jeu
1. Cliquez sur le bouton de la disquette pour générer les forwarders

### Partie 4 : Installer le forwarder

- Si vous utilisez une console de la famille 3DS :
   1. Copiez le(s) CIA(s) sur la carte SD de votre 3DS, puis installez-le(s) en utilisant FBI
      - Si vous utilisez l'EmuNAND, installez à la fois sur la SysNAND et l'EmuNAND
- Si vous utilisez une DSi :
   1. Copiez `tmfh.nds` depuis l'archive `.zip` de TMFH à la racine de votre carte SD
   1. Réinsérez votre carte SD dans votre DSi
   1. Lancez `tmfh.nds` depuis Unlaunch ou TWiLight Menu++
   1. Installez le fichier NDS du forwarder en utilisant TMFH
{% endcapture %}
{% assign tab-flashcard-dsi-3ds = tab-flashcard-dsi-3ds | split: "////////" %}

{% assign tabs = tab-3ds-sd-card | concat: tab-dsi-sd-card | concat: tab-flashcard | concat: tab-flashcard-dsi-3ds %}
{% include tabs.html index=0 tabs=tabs %}
