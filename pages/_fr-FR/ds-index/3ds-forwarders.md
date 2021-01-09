---
lang: fr-FR
layout: wiki
section: ds-index
category: guides
title: DS game forwarders (3DS)
description: Comment créer des applications CIA pour avoir vos jeux DS dans le menu d'accueil de votre 3DS
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
- [M3 DS Simply](https://farm2.static.flickr.com/1333/752793411_d91b182eb7.jpg) (utilise une carte microSD <2Go)
- [R4 DS](http://www.nds-card.com/ProShow.asp?ProID=141) (version originale non-SDHC, utilise une carte microSD <2Go)
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
- R4 Gold Pro ([www.r4i-gold.com](http://www.r4i-gold.com)/[www.r4i-gold.me](http://www.r4i-gold.me)) (YSMenu (pas le forwarder) brique la carte)
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
- **Utilisateurs de Linux:** JavaFX

### Partie 1 : Préparation
{% capture tab-sd-card %}
1. Téléchargez le pack de [forwarders carte SD](https://www.dropbox.com/s/k5uaa4jzbtkgm0z/DS%20Game%20Forwarder%20pack%20%283DS%20SD%20Card%29.7z?dl=0)
1. Extrayez le contenu du dossier `for SD card root` à la racine de la carte SD de votre 3DS

Après avoir extrait le pack, vous pouvez éditer `sd:/_nds/nds-bootstrap.ini` et modifier les paramètres:
- `BOOST_CPU`: Si mis à 1, la vitesse TWL est utilisée, donc il y aura des lags
- `SOUND_FREQ`: Si réglé sur 1, le son jouera à 48khz, au lieu de 32khz
{% endcapture%}

{% capture tab-flashcard %}
1. Télécharger l'un de ces packs :
   - [Original R4/M3 Simply](https://www.dropbox.com/s/juxzri7h8bttunh/DS%20Game%20Forwarder%20pack%20%28Original%20R4%2C%20M3%20Simply%29.7z?dl=0)
   - [Acekard 2(i)/M3DS Real](https://www.dropbox.com/s/5elogf885sd62hu/DS%20Game%20Forwarder%20pack%20%28M3DS%20Real%29.7z?dl=0)
   - [DSTT / R4i Gold / R4i-SDHC / R4 SDHC Upgrade / SC DSONE](https://www.dropbox.com/s/xxfmvikwmnvsu63/DS%20Game%20Forwarder%20pack%20%28DSTT%2C%20R4i%20Gold%2C%20R4i-SDHC%2C%20SC%20DSONE%29.7z?dl=0)
   - [Acekard RPG](https://drive.google.com/file/d/0B2_1xHkEp2_6OHVuZEJwU1BKbEU/view?usp=sharing)
   - [R4iDSN / R4i Gold RTS / R4i Gold 3DS Plus](https://www.dropbox.com/s/j8nquh073k9y0h7/DS%20Game%20Forwarder%20pack%20%28R4iDSN%2C%20R4i%20Gold%20RTS%29.7z?dl=0)
   - [Ace 3DS+/Gateway Blue Card/R4iLS/R4iTT](https://www.dropbox.com/s/fd7dzhn8burcq02/DS%20Game%20Forwarder%20pack%20%28Ace3DS%2C%20GW%20Blue%20Card%2C%20R4iTT%29.7z?dl=0)
   - [SC DSTWO](https://www.dropbox.com/s/pyyg0vq8b0nmhqd/DS%20Game%20Forwarder%20pack%20%28SC%20DSTWO%29.7z?dl=0)

1. Extraire le contenu du dossier `for Slot-1 microSD` à la racine de la carte microSD de votre flashcard et (si le dossier existe) le contenu du dossier `for 3DS SD card` à la racine de la carte SD de votre 3DS.

Après avoir extrait le pack pour votre carte, vous pouvez éditer `sd:/_nds/ntr_forwarder.ini` pour modifier les paramètres. Ce n'est pas possible pour Acekard RPG, R4 DS, et R4i Gold RTS.
- `NTRCLOCK`: Si réglé à `0` ou si <kbd class="face">A</kbd> est maintenu, l'écran de démarrage DSi apparaîtra à la place du splash DS normal, et la vitesse TWL est utilisée, donc des ralentissements seront présents
- `DISABLEANIMATION`: Si réglé sur `1` ou si<kbd class="face">B</kbd> est maintenu, l'écran de démarrage DS / DSi est ignoré
- `HEALTHSAFETYMSG`: Si réglé à `1`, le message de santé et de sécurité de l'écran de démarrage apparaîtra sur l'écran du bas, sinon l'écran du bas reste blanc sans message de santé et de sécurité
{% endcapture %}

<div class="tab-container">
    <div class="pb-3">
        <a class="tab-link btn btn-outline-secondary tab-default" href="#tab-sd-card" onclick="openTab(event, 'tab-sd-card')">Carte SD</a>
        <a class="tab-link btn btn-outline-secondary" href="#tab-flashcard" onclick="openTab(event, 'tab-flashcard')">Flashcard</a>
    </div>
    <div id="tab-sd-card">
        <noscript><h4>Carte SD</h4></noscript>
        {{ tab-sd-card | markdownify }}
    </div>
    <div id="tab-flashcard">
        <noscript><h4>Flashcard</h4></noscript>
        {{ tab-flashcard | markdownify }}
    </div>
</div>

### Partie 2 : Obtenir les patchs AP depuis TWiLight Menu++
Si vous avez déjà TWiLight Menu++, passez à la section suivante.
1. Téléchargez le dernier `TWiLightMenu-3DS.7z` depuis la [page de téléchargement](https://github.com/DS-Homebrew/TWiLightMenu/releases)
1. Dans le fichier 7z, allez à `_nds/TWiLightMenu/`
1. Copiez le dossier `apfix` dans `sd:/_nds/ntr-forwarder/` sur la carte SD de votre 3DS

### Partie 3 : Forwarder3-DS
1. Ouvrez `Forwarder3DS.jar`
   - S'il ne s'ouvre pas, créez un nouveau fichier texte dans le même dossier que Forwarder3DS.jar contenant `java -jar Forwarder3DS.jar` et enregistrez le en tant que `Forwarder3DS.bat` et exécutez cela (assurez-vous qu'il n'y a pas de `.txt` à la fin du nom du fichier)
1. Définissez votre carte en tant que `Target` à gauche
   - **NOTE:** Si vous ne voyez pas de liste de cartes, téléchargez [ce zip](https://github.com/Olmectron/olmectron.github.io/archive/master.zip), et mettez le dossier `forwarders` dans le même dossier que Forwarder3DS.jar , puis renommez-le en `.forwarders`
1. Activer `Automatically set ROM path`
   - **Utilisateurs de Linux :** Le chemin d'accès automatique est incorrect car il inclut le chemin complet (ex: `/media/$USER/something/`), veuillez supprimer cette partie
   - **Utilisateurs MacOS :** Le chemin d'accès automatique est incorrect car il inclut `/Volumes/(cardname)/` au démarrage, veuillez supprimer cette partie
1. Cliquez sur le dossier en haut à droite et sélectionnez les ROMs pour lesquelles vous souhaitez faire des forwarders ou déposez-les dans la fenêtre
   - **REMARQUE :** Les ROMs doivent déjà être sur votre carte SD lors de leur sélection et ne peuvent pas être déplacées sans recréer les forwarders
   - **Utilisateurs de la carte SD :** Si votre fichier de sauvegarde est dans le même dossier que la ROM, déplacez-le vers un dossier appelé `saves`, avec le dossier `saves` à la même place que les ROMs
1. Si vous jouez à un hack / une traduction d'un jeu DSi-Enhanced qui a sa bannière / son titre modifié, trouvez la bannière pour le jeu de [ici](https://www.dropbox.com/sh/igr47pr0q5bh4p5/AAA9Dy8VOGfBLUA6KdLDSDW-a?dl=0), faites un clic droit sur le jeu dans Forwarder3-DS, cliquez sur `Import banner `et cliquez sur la bannière à utiliser
1. Si vous utilisez une ROM homebrew, cliquez dessus, puis videz le champ `Game title` et tapez le titre du jeu
1. Cliquez sur le bouton disquette pour générer la ou les CIA(s) du ou des forwarder(s)
1. Copiez la ou les CIA(s) sur la carte SD de votre 3DS, puis installez-les en utilisant FBI
   - Si vous utilisez EmuNAND, installez sur SysNAND et sur EmuNAND
