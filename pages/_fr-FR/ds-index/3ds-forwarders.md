---
lang: fr-FR
layout: wiki
section: ds-index
category: guides
title: DS Game Forwarders (3DS)
description: Comment créer des applications CIA pour avoir vos jeux DS dans le menu d'accueil de votre 3DS
tabs:
  - 
    tab-sd-card: SD card
    tab-flashcard: Flashcard
---

Si vous avez des problèmes, consultez la FAQ sur[ GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

### Pré-requis

3DS :
- [Luma3DS](https://github.com/lumateam/luma3ds/releases), ou tout autre CFW qui patche TWL_NAND
- [FBI](https://github.com/Steveice10/FBI/releases) pour installer des fichiers CIA
- (Facultatif) Une flashcard DS supportée

{% capture flashcards %}
Les flashcards recommandés sont les DSTT et Acekard 2i. Si vous voulez une compatibilité parfaite avec le jeu, prenez la SuperCard DSTWO / DSTWO PLUS. Le seul inconvénient est que votre batterie se vide plus rapidement.

Si vous avez une flashcard qui fonctionne avec le lanceur NTR d'Apache Thunder, n'hésitez pas à la demander [sur le fil de discussion GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Assurez-vous de spécifier quelle version vous utilisez (Normal ou Alt), et si `RESETSLOT1` est défini à `0` ou `1` dans `sd:/nds/ntr_launcher.ini`.

Compatible :
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (Les jeux DSi-Enhanced, ainsi que les nouveux jeux NTR, ne fonctionnent pas.)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (uses < 2 GB microSD card)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (Original Non-SDHC version, uses < 2 GB microSD card)
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
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (versions Normal et Plus)

Non testé:
- R4i3D NEW (utiliser le modèle R4iDSN et le pack)

Partiellement compatible:
- Ace 3DS+ (la compatibilité avec les jeux est mauvaise donc sauvegarder/charger un fichier de sauvegarde provoque un crash.)
- Gateway Bleue (la compatibilité avec les jeux est mauvaise, donc sauvegarder/charger un fichier de sauvegarde provoque un crash.)
- EX4DS (la compatibilité avec les jeux est mauvaise, donc sauvegarder/charger un fichier de sauvegarde provoque un crash.)
- R4iLS (la compatibilité avec les jeux est mauvaise, donc sauvegarder/charger un fichier de sauvegarde provoque un crash.)
- Les cartes qui viennent de [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/) (la compatibilité avec les jeux est mauvaise, donc sauvegarder/charger un fichier de sauvegarde provoque un crash.)

Incompatible:
- CycloDS (i)Evolution (Peut lancer automatiquement des ROMs, mail fonctionne différemment des autres flashcards.)
- (i)Edge (Impossible de démarrer automatiquement une ROM)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com) / [www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu (not the forwarder process) bricks the card)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)) (YSMenu (pas le forwarder) brique la carte)
{% endcapture %}

<details>
    <summary>Flashcards prises en charge</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

PC:
- Un système d'exploitation 64 bits
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- Java 8 mise a jour 251
- **Linux users:** JavaFX. On Debian based systems run [this](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh), or if you're on Arch run: `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`.

### Part 1: Getting started
{% capture tab-sd-card %}
1. Téléchargez le pack de [forwarders carte SD](https://www.dropbox.com/s/k5uaa4jzbtkgm0z/DS%20Game%20Forwarder%20pack%20%283DS%20SD%20Card%29.7z?dl=0)
1. Extrayez le contenu du dossier `for SD card root` à la racine de la carte SD de votre 3DS

Après avoir extrait le pack, vous pouvez éditer `sd:/_nds/nds-bootstrap.ini` et modifier les paramètres:
- `BOOST_CPU`: Si mis à 1, la vitesse TWL est utilisée, donc il y aura des lags
- `SOUND_FREQ`: If set to 1, sound will play at 48 kHz, instead of 32 kHz
{% endcapture%}
{% assign tab-sd-card = tab-sd-card | split: "////////" %}

{% capture tab-flashcard %}
1. Download one of these packs:
   - [Original R4 / M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i) / M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+ / Gateway Blue Card / R4iLS / R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)

1. Extract the contents of the `for Slot-1 microSD` folder to the root of your flashcard's microSD card, and (if the folder exists) the contents of the `for 3DS SD card` folder to the root of your 3DS's SD card.

After you extract the pack for your card, you can edit `sd:/_nds/ntr_forwarder.ini` to change the settings. This isn't possible for Acekard RPG, R4 DS, and R4i Gold RTS.
- `NTRCLOCK`: If set to `0` or <kbd class="face">A</kbd> is held, the DSi boot screen will appear instead of the normal DS splash, and TWL clock speed is used, so lags begone
- `DISABLEANIMATION`: If set to `1` or <kbd class="face">B</kbd> is held, the DS / DSi boot screen is skipped
- `HEALTHSAFETYMSG`: If set to `1`, the boot screen's health and safety message will appear on the bottom screen, otherwise the bottom screen stays white with no health and safety message
{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}

### Partie 2 : Obtenir les patchs AP depuis TWiLight Menu++
If you already have TWiLight Menu++, skip to the next section.
1. Download the latest `TWiLightMenu-3DS.7z` from the [release page](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. In the 7z file, go to `_nds/TWiLightMenu/`
1. Copy the `apfix` folder to `sd:/_nds/ntr-forwarder/` on your 3DS's SD card

### Partie 3 : Forwarder3-DS
1. Open `Forwarder3DS.jar`
   - **Windows users:** If it doesn't open, download this [Forwarder3DS.bat](/assets/files/Forwarder3DS.bat), place it in the same folder as Forwarder3DS.jar, and run it
1. Set your card as the `Target` on the left
   - **NOTE:** If you don't see a list of cards, download [this zip](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), and put the `forwarders` folder in the same folder as Forwarder3DS.jar, then rename it to `.forwarders`
1. Enable `Automatically set ROM path`
   - **Linux users:** The automatic path is incorrect since it includes the entire path (e.g. `/media/$USER/something/`), please remove that part
   - **MacOS users:** The automatic path is incorrect since it includes `/Volumes/(cardname)/` at the start, please remove that part
1. Click the folder in the top right and select the ROMs you want to make forwarders for or drag and drop them onto the window
   - **NOTE:** The ROMs must already be on your SD card when selecting them, and can't be moved without recreating the forwarders
   - **SD card users:** If your save file is in the same folder as the ROM, move it to a folder called `saves`, with the `saves` folder being in the same place as the ROMs
1. If you're playing a hack / translation of a DSi-Enhanced game that has it's banner / title edited, find the banner for the game from [here](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), right click on the game in Forwarder3-DS, click `Import banner`, and click on the banner to use
1. If using a homebrew ROM, click on it, then clear the `Game title` and type the game's title
1. Click the floppy disk button to generate the forwarder CIA(s)
1. Copy the CIA(s) to your 3DS's SD card, then install them using FBI
   - If using EmuNAND, install to both SysNAND and EmuNAND
