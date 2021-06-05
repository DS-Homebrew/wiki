---
lang: fr-FR
layout: wiki
section: ds-index
category: guides
title: Forwarders de jeu DS (3DS)
description: Comment créer des applications CIA pour avoir vos jeux DS dans le menu d'accueil de votre 3DS
tabs:
  - 
    tab-sd-card: Carte SD
    tab-flashcard: Linker
---

Les forwarders pour menu Home sont des raccourcis sous forme d'icône qui vous redirigent vers le logiciel correspondant. Avec cette option, vous pouvez ajouter des jeux de DS sur le menu Home pour un accès plus facile, soit à partir de la carte SD (en utilisant nds-bootstrap) ou à partir d'un linker (via son propre kernel).

Les jeux de DS doivent être dumpés au format `.nds<code>. Vous pouvez dumper vos cartouches de jeu DS en utilisant <a href="https://3ds.hacks.guide/dumping-titles-and-game-cartridges#dumping-a-game-cartridge">GodMode9</a>.
</p>

<p spaces-before="0">{:.alert .alert-info}</p>

<p spaces-before="0">Cette page considère que vous possédez un CFW tel que celui utilisé dans le <a href="https://3ds.hacks.guide">guide</a>.</p>

<p spaces-before="0">Choisissez l'un des éléments suivant à ajouter au menu Home :</p>

<p spaces-before="0">{% capture tab-sd-card %}</p>

<h3 spaces-before="0">Étape 1: Récupérer les fichiers nécessaires</h3>

<p spaces-before="0">Si vous avez déjà Universal Updater installé sur votre console, vous pouvez passer à l'étape 3.
</p>

<p spaces-before="0">{:.alert .alert-info}</p>

<ol start="1">
<li>Ouvrez FBI, allez dans <code>Remote Install<code>, puis sélectionnez <code>Scan QR Code<code></li>
<li><p spaces-before="0">Scannez ce QR code pour installer la dernière version de <a href="https://github.com/Universal-Team/Universal-Updater">Universal Updater</a><br>
<img src="https://db.universal-team.net/assets/images/qr/universal-updater.cia.png" alt="Universal-Updater QR code" /></p></li>
<li><p spaces-before="0">Ouvrez Universal Updater depuis le menu Home</p></li>
<li>Installez le pack NDSForwarder</li>
<li>NDSForwarder et ses fichiers requis sont maintenant installés dans leurs emplacements respectifs</li>
</ol>

<h3 spaces-before="0">Étape 2 : NDSForwarder</h3>

<ol start="1">
<li>Lancez l'Homebrew Launcher</li>
<li>Dans l'Homebrew Launcher, ouvrez <code>NDS Forwarder Generator<code></li>
<li>Naviguez à l'emplacement de votre jeu et appuyez sur <kbd class="face">A</kbd></li>
<li>Confirmez l'installation en choisissant <code>Yes`</li>
1
Une fois installé, votre jeu apparaîtra sous forme d'icône sur le menu Home
{% endcapture %}
{% assign tab-sd-card = tab-sd-card | split: "////////" %}</ol>

{% capture tab-flashcard %}

Si vous rencontrez un problème, consultez la FAQ sur le [site GBAtemp](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/).
{:.alert .alert-warning}

### Pré-requis

3DS :

{% capture flashcards %}
Les linkers recommandés sont le DSTT et le Acekard 2i. If you want perfect game compatibility, get the SuperCard DSTWO/DSTWO PLUS. En contrepartie, votre batterie se videra plus rapidement.

Si vous possédez un linker fonctionnant avec le NTR Launcher de Apache Thunder, n'hésitez pas à vous rendre sur [cette page](https://gbatemp.net/threads/nds-forwarder-cias-for-your-home-menu.426174/). Assurez-vous de préciser quelle version vous utilisez (Normal ou Alt), et si `RESETSLOT1` est défini sur `0` ou `1` dans le fichier `sd:/nds/ntr_launcher.ini`.

Compatibilité :
- [Acekard 2(i)](http://www.nds-card.com/ProShow.asp?ProID=160) (Les jeux DSi-Enhanced ainsi que les nouveux jeux NTR ne fonctionneront pas.)
- [Acekard RPG](http://wiki.gbatemp.net/wiki/Acekard_RPG)
- [DSTT](http://www.nds-card.com/ProShow.asp?ProID=157)
- [DSTT Advance](http://kaze-tado.way-nifty.com/moo/images/2008/11/19/200811202.jpg)
- Galaxy Eagle
- M3 DS Real
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (utilisez une carte microSD d'au moins 2 Go)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (en version originale non-SDHC, utilisez une carte microSD d'au moins 2 Go)
- [R4 SDHC Snoopy](http://www.nds-card.com/ProShow.asp?ProID=567)
- [R4 SDHC RTS LITE](http://www.nds-card.com/ProShow.asp?ProID=450) ([www.r4isdhc.com](http://www.r4isdhc.com/))
- R4 SDHC Upgrade ([www.r4i-sdhc.com](http://www.r4i-sdhc.com/))
- [R4i3D](http://www.3ds-cart.com/en/other-flashcarts/35-r4i3d-revolution-cart-for-3ds-dsi-dsl-ds.html) ([www.r4i3d.com](http://www.r4i-sdhc.com/))
- [R4iDSN](http://3ds-flashcard.com/home/28-r4idsn-3ds.html)
- [R4i Gold](http://www.nds-card.com/ProShow.asp?ProID=330)
- [R4i Gold RTS](http://www.nds-card.com/ProShow.asp?ProID=149) ([www.r4ids.cn](http://www.r4ids.cn/))
- [R4i-SDHC](http://www.nds-card.com/ProShow.asp?ProID=146) ([www.r4i-sdhc.com](http://www.r4i-sdhc.com)) (versions Normale et RTS)
- R4iTT ([www.r4itt.net](http://www.r4itt.net/)) (Les cartes violettes peuvent être incompatibles)
- [SuperCard DSONE](http://wiki.gbatemp.net/wiki/SuperCard_DSONEi)
- [SuperCard DSTWO](http://www.nds-card.com/ProShow.asp?ProID=135) (versions Normal et Plus)

Non testé :
- R4i3D NEW (utilise le modèle et le pack R4iDSN)

Partiellement compatible :
- Ace 3DS+ (mauvaise compatibilité, les sauvegardes/chargements provoquent souvent un crash)
- Carte Gateway bleue (mauvaise compatibilité, les sauvegardes/chargements provoquent souvent un crash)
- EX4DS (mauvaise compatibilité, les sauvegardes/chargements provoquent souvent un crash)
- R4iLS (mauvaise compatibilité, les sauvegardes/chargements provoquent souvent un crash)
- Toutes cartes de [www.r4isdhc.com.cn](http://www.r4isdhc.com.cn/) (mauvaise compatibilité, les sauvegardes/chargements provoquent souvent un crash)

Incompatible :
- CycloDS (i)Evolution (peut lancer automatiquement des ROMs, mais fonctionne différemment des autres linkers)
- (i)Edge (incapable de démarrer automatiquement une ROM en .nds)
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com) / [www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu (pas la manip du forwarder) rendra la carte inutilisable)
- R4i3D (2012)
- R4 Infinity Dual Core
- R4 SDHC
- R4 SDHC Dual-Core ([www.r4isdhc.com](http://www.r4isdhc.com/)) (YSMenu (pas la manip du forwarder) rendra la carte inutilisable)
{% endcapture %}

<details>
    <summary>Un linker compatible de cette liste</summary>
    <div class="details-content">
        {{ flashcards | markdownify }}
    </div>
</details>

PC :
- Un système d'exploitation 64 bits
- [Forwarder3-DS](https://www.dropbox.com/s/b9de5ii6vm3dxfn/Forwarder3DS-v2.9.6.zip?dl=0)
- Java en version 8, Update 251
- **Utilisateurs de Linux:** JavaFX
   - Pour les systèmes basés sur Debian, exécutez [ceci](https://gist.githubusercontent.com/puntillol59/7532b6583380baca236dcaf2d8f75b5c/raw/e8b9d193f8b24de941160c7292ec0bb3b997e98e/main.sh)
   - Architecture : `sudo pacman -S java8-openjfx && sudo archlinux-java set java-8-openjdk/jre`

### Étape 1 : Préparation
1. Téléchargez l'un de ces packs :
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
- `DISABLEANIMATION`: If set to `1` or <kbd class="face">B</kbd> is held, the DS/DSi boot screen is skipped
- `HEALTHSAFETYMSG`: If set to `1`, the boot screen's health and safety message will appear on the bottom screen, otherwise the bottom screen stays white with no health and safety message

### Part 2: Getting the AP fix files from TWiLight Menu++
If you already have TWiLight Menu++, skip to the next section.
1. Download the latest [`TWiLightMenu-3DS.7z`](https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-3DS.7z)
1. In the 7z file, go to `_nds/TWiLightMenu/`
1. Copy the `apfix` folder to `sd:/_nds/ntr-forwarder/` on your 3DS's SD card

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
   - **SD card users:** If your save file is in the same folder as the ROM, move it to a folder called `saves`, with the `saves` folder being in the same place as the ROMs
1. If you're playing a hack/translation of a DSi-Enhanced game that has it's banner/title edited, find the banner for the game from [here](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), right click on the game in Forwarder3-DS, click `Import banner`, and click on the banner to use
1. If using a homebrew ROM, click on it, then clear the `Game title` and type the game's title
1. Click the floppy disk button to generate the forwarder CIA(s)
1. Copy the CIA(s) to your 3DS's SD card, then install them using FBI
   - If using EmuNAND, install to both SysNAND and EmuNAND
{% endcapture %}
{% assign tab-flashcard = tab-flashcard | split: "////////" %}

{% assign tabs = tab-sd-card | concat: tab-flashcard %}
{% include tabs.html index=0 tabs=tabs %}