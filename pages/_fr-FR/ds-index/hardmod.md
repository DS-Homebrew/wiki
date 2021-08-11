---
lang: fr-FR
layout: wiki
section: ds-index
category: guides
title: Hardmod
description: Comment hardmoder une Nintendo DSi
tabs:
  - 
    windows: Windows
    other: macOS/Linux
---

Le Hardmodding est quand vous soudez physiquement la carte mère de la Nintendo DSi à un adaptateur de carte SD afin d'être lu sur un ordinateur. Ceci est utile pour restaurer les sauvegardes de la NAND, pour visualiser la NAND sur votre PC, etc...

### Nintendo DS
[![Carte mère DS originale avec points tactiles étiquetés](/assets/images/ds-hardmod/mobo_pinout.png)](/assets/images/ds-hardmod/mobo_pinout.png)

### Nintendo DSi

Pour hardmod une Nintendo DSi/DSi XL (LL), vous aurez besoin de :
   - [Fer à souder à pointe fine](https://www.amazon.com/dp/B01N4571Q6)
   - [Fil très fin](https://www.amazon.com/dp/B01MXGNTA4), 28AWG ou plus petit, de préférence 30AWG+
   - Adaptateur SD vers microSD
   - Un lecteur de carte SD capable de lire les puces eMMC en mode ligne de données unique. [Voici un qui fonctionne](https://www.amazon.com/dp/B006T9B6R2)
   - [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/) et [HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) si sur Windows
   - Une sauvegarde NAND valide du DSi que vous êtes hardmodding
   - Être confortable à souder aux pads aussi petits que 0,5mm de diamètre

#### Pins DSi côté A
[![Pins DSi côté A](/assets/images/dsi-hardmod/side_a.jpg)](/assets/images/dsi-hardmod/side_a.jpg)
#### Pinces DSi côté B
[![Pins DSi côté B](/assets/images/dsi-hardmod/side_b.png)](/assets/images/dsi-hardmod/side_b.png)
#### Pinces DSi XL côté B
[![Pins DSi XL côté B](/assets/images/dsi-hardmod/dsi_xl_side_b.png)](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- Vous devrez souder les points de la carte mère à l'adaptateur de carte microSD
   - CMD à la broche 2
   - GND aux broches 3 et 6
   - CLK à broche 5
   - DAT0 à la broche 7

#### Exemple d'adaptateur microSD soudé
[![microSD example](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- Insérez l'adaptateur de carte microSD dans votre ordinateur
   - **ATTENTION** - Windows vous demandera de le formater : **NE PAS le formater** - cela pourrait causer des dommages irréparables

#### Suppression du pied de page no$gba
Vous devrez d'abord retirer le pied de page NOCASH de la sauvegarde que vous flashez sur la DSi. Cela peut être fait en utilisant le [hiyaCFW helper](https://github.com/mondul/HiyaCFW-Helper/releases/latest).

1. Téléchargez la version pour le système d'exploitation que vous utilisez
1. Exécutez le script, sélectionnez la sauvegarde de la NAND que vous souhaitez installer sur votre DSi
1. Basculer en mode NAND avec le bouton à gauche du chemin du fichier
1. Cliquez sur `Start` pour créer la sauvegarde de la NAND sans le pied de page no$gba

- Une fois le script terminé, il devrait y avoir un fichier avec un nom long se terminant par `-no-footer.bin` dans le dossier où votre terminal est ouvert
   - Utilisez ce fichier comme image de la NAND que vous installez sur le DSi

{% capture tab-windows %}
1. Ouvrir Win32DiskImager
1. Cliquez sur l'icône dossier et naviguez jusqu'à votre bureau. Dans la zone de texte, écrivez `NAND_0.bin`. Lors de la sélection du type, choisissez `Tous les types *.*`
1. Choisissez l'appareil qui est le DSi et cliquez sur Lire
1. Une fois cela fait, cliquez sur l'icône du dossier, changez le nom en `NAND_1.bin` et lisez à nouveau
1. Ouvrez HxD et faites glisser les deux fichiers dans l'éditeur. Allez dans la barre du haut, cliquez sur "Analyse", cliquez sur "Comparaison de fichiers" dans le menu déroulant, puis cliquez sur "Comparer".
1. Choisissez de comparer les deux fichiers, puis cliquez sur OK lorsque vous avez terminé
   - Si cela dit "Les fichiers choisis sont identiques", vous pouvez aller à la section suivante
   - Si ce n'est pas le cas, et que les deux NAND ne sont pas autour de 240 Mo, refaite un dump de NAND_1/NAND_0 à nouveau
1. Ouvrez Win32DiskImager, cliquez sur l'icône de dossier et choisissez votre sauvegarde NAND existante que vous avez créée avant
1. Flasher le avec le bouton `Write`
1. Débranchez l'adaptateur de carte SD et essayez d'allumer la DSi
{% endcapture tab-windows %}
{% assign tab-windows = tab-windows | split: "////////" %}


{% capture tab-other %}
1. Déterminer où la carte SD est montée
   - Linux:
      1. Débranchez l'adaptateur de carte SD
      1. Exécutez `lbslk` dans un terminal
      1. Branchez l'adaptateur de carte SD
      1. Exécutez à nouveau `lbslk`
      1. Cette fois un nouvel appareil devrait apparaître
         - Il peut s'appeler `/dev/sdb`, assurez-vous de noter ce qu'il est appelé sur *votre ordinateur*

   - macOS:
      1. Débranchez l'adaptateur de carte SD
      1. Exécutez `df` dans un terminal
      1. Branchez l'adaptateur de carte SD
      1. Exécutez à nouveau `df`
      1. Un nouvel appareil devrait apparaître dans la liste
         - Il peut s'appeler `/dev/disk1s1`, assurez-vous de noter ce qu'il est appelé sur *votre* ordinateur

1. Dump de la NAND
   - Exécutez la commande suivante dans un terminal :
      - `cat {device-name} > nand0.bin`
      - Remplacer `{device-name}` par l'emplacement de montage de la carte SD
      - E.g `cat /dev/sdb > nand0.bin`
      - Ensuite, exécutez `cat {device-name} > nand1.bin`


1. Comparer les dumps NAND
   1. Exécutez la commande suivante :
      - Linux: `md5sum nand0.bin nand1.bin`
      - macOS: `md5 -r nand0.bin nand1.bin`
   1. Vérifier que le hachage généré correspond à l'autre
   1. Sinon, réduire la NAND, régler le câblage si nécessaire
   1. Continuez à réduire la NAND jusqu'à ce que les hachages soient identiques

1. Flasher la NAND
   1. Localisez la sauvegarde de la NAND que vous avez créée avant sur la console
   1. Exécutez la commande suivante :
      - `chat {existing-nand-backup} > {device-name}`
      - Remplacez `{existing-nand-backup}` par l'emplacement et le nom de votre ancienne sauvegarde NAND
      - Remplacer `{device-name}` par le point de montage de la carte SD

À ce stade, vous pouvez débrancher l'adaptateur de carte SD et essayer d'allumer la DSi. Si tout s'est bien passé, le DSi aurait dû démarrer à l'état où il était lorsque la sauvegarde a été créée !
{% endcapture tab-other %}
{% assign tab-other = tab-other | split: "////////" %}

### Flasher la sauvegarde de la NAND
{% assign tabs = tab-windows | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}
