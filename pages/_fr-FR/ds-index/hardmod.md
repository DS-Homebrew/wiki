---
lang: fr-FR
layout: wiki
section: ds-index
category: guides
title: Hardmod
description: Comment hardmodder une Nintendo DSi
tabs:
  - 
    windows: Windows
    other: macOS/Linux
---

Hardmodding can easily damage your DSi. If you're trying to unbrick your DSi, then you should try [ntrboot](ntrboot) first.
{:.alert .alert-danger}

Le hardmodding consiste à souder physiquement la carte mère de la Nintendo DSi à un adaptateur de carte SD afin de pouvoir la lire sur un ordinateur. Ceci est utile pour restaurer les sauvegardes de la NAND, visualiser la NAND sur votre PC, etc…

### Nintendo DS
[![Carte mère de la DS originale avec les points tactiles étiquetés](/assets/images/ds-hardmod/mobo_pinout.png)](/assets/images/ds-hardmod/mobo_pinout.png)

### Nintendo DSi

Pour hardmodder une Nintendo DSi/DSi XL (LL), vous aurez besoin des éléments suivants :
    - [Fer à souder à pointe de crayon](https://www.amazon.com/dp/B01N4571Q6)
    - [Fil très fin](https://www.amazon.com/dp/B01MXGNTA4), 28 AWG ou plus petit, de préférence plus de 30 AWG
    - Adaptateur SD vers microSD
    - Un lecteur de cartes SD capable de lire les puces eMMC en mode ligne de données unique. [En voici un qui fonctionne](https://www.amazon.com/dp/B006T9B6R2)
    - [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/) et [HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) si sur Windows
    - Une sauvegarde NAND valide de la DSi que vous hardmoddez
    - De quoi être à l'aise pour souder sur des pastilles d'un diamètre de 0,5 mm seulement

#### Pins DSi côté A
[![Pins DSi côté A](/assets/images/dsi-hardmod/side_a.jpg)](/assets/images/dsi-hardmod/side_a.jpg)
#### Pins DSi côté B
[![Pins DSi côté B](/assets/images/dsi-hardmod/side_b.png)](/assets/images/dsi-hardmod/side_b.png)
#### Pins DSi XL côté B
[![Pins DSi XL côté B](/assets/images/dsi-hardmod/dsi_xl_side_b.png)](/assets/images/dsi-hardmod/dsi_xl_side_b.png)

- Vous devrez souder les points de la carte mère à l'adaptateur de la carte microSD
    - CMD au pin 2
    - GND aux pins 3 et 6
    - CLK au pin 5
    - DAT0 au pin 7

#### Exemple d'adaptateur microSD soudé
[![Exemple de microSD](/assets/images/dsi-hardmod/sd.jpg)](/assets/images/dsi-hardmod/sd.jpg)

- Insérez l'adaptateur de carte microSD dans votre ordinateur
    - **AVERTISSEMENT** - Windows vous demandera de le formater : **NE PAS** le formater - cela pourrait causer des dommages irréparables

#### Suppression du pied de page de no$gba
Vous devez d'abord supprimer le pied de page NOCASH de la sauvegarde que vous transférez sur la DSi. Cela peut être fait en utilisant [hiyaCFW Helper](https://github.com/mondul/HiyaCFW-Helper/releases/latest).

1. Téléchargez la version correspondant au système d'exploitation que vous utilisez
1. Exécutez le script, en sélectionnant la sauvegarde NAND que vous souhaitez transférer sur votre DSi
1. Passez en mode NAND avec le bouton à gauche du chemin du fichier
1. Cliquez sur `Start` pour créer la sauvegarde NAND sans le pied de page de no$gba

- Une fois le script terminé, il devrait y avoir un fichier avec un nom long se terminant par `-no-footer.bin` dans le dossier où votre terminal est ouvert
    - Utilisez ce fichier comme image NAND que vous flasherez sur la DSi

{% capture tab-windows %}
1. Ouvriez Win32 Disk Imager
1. Cliquez sur l'icône de dossier et naviguez jusqu'à votre bureau. Dans la zone de texte, écrivez `NAND_0.bin`. Lors de la sélection du type, choisissez `Tous les types *.*`
1. Choisissez l'appareil qui est le DSi et cliquez sur `Read`
1. Une fois que c'est fait, cliquez sur l'icône du dossier, changez le nom en `NAND_1.bin` et cliquez à nouveau sur `Read`
1. Ouvrez HxD et faites glisser les deux fichiers dans l'éditeur. Allez dans la barre supérieure, cliquez sur « Analyse », cliquez sur « Comparaison de fichiers » dans le menu déroulant, puis cliquez sur « Comparer ».
1. Choisissez de comparer les deux fichiers et cliquez sur OK lorsque vous avez terminé
    - S'il est indiqué « Les fichiers choisis sont identiques », vous pouvez passer à la section suivante
    - Si ce n'est pas le cas, et que les deux NANDs ne sont pas autour de 240 Mo, dumpez à nouveau NAND_1/NAND_0
1. Ouvrez Win32 Disk Imager, cliquez sur l'icône du dossier et choisissez votre sauvegarde NAND existante que vous avez créée auparavant
1. Flashez-la avec le bouton `Write`
1. Débranchez l'adaptateur de carte SD et essayez d'allumer la DSi
{% endcapture tab-windows %}
{% assign tab-windows = tab-windows | split: "////////" %}


{% capture tab-other %}
1. Déterminez où la carte SD est montée
    - Linux :
        1. Débranchez l'adaptateur de carte SD
        1. Exécutez `lsblk` dans un terminal
        1. Branchez l'adaptateur de carte SD
        1. Exécutez à nouveau `lsblk`
        1. This time a new device should appear
            - It may be called `/dev/sdb`, make sure you note down what it is called on *your* computer

    - macOS :
        1. Débranchez l'adaptateur de carte SD
        1. Exécutez `df` dans un terminal
        1. Branchez l'adaptateur de carte SD
        1. Exécutez à nouveau `df`
        1. A new device should appear in the list
            - It may be called `/dev/disk1s1`, make sure you note down what it is called on *your* computer

1. Dumpez la NAND
    - Exécutez la commande suivante dans un terminal :
        - `cat {device-name} > nand0.bin`
        - Remplacez `{device-name}` par l'emplacement de montage de la carte SD
        - Par exemple `cat /dev/sdb > nand0.bin`
        - Ensuite, exécutez `cat {device-name} > nand1.bin`


1. Comparez les dumps de la NAND
    1. Exécutez la commande suivante :
        - Linux : `md5sum nand0.bin nand1.bin`
        - macOS : `md5 -r nand0.bin nand1.bin`
    1. Vérifiez que les hachages générés correspondent les uns aux autres
    1. Sinon, redumpez la NAND, en ajustant le câblage si nécessaire
    1. Continuez à redumper la NAND jusqu'à ce que les hachages soient identiques

1. Flashez la NAND
    1. Localisez la sauvegarde de la NAND que vous avez créée avant sur la console
    1. Exécutez la commande suivante :
        - `cat {existing-nand-backup} > {device-name}`
        - Replace `{existing-nand-backup}` with the location and name of your old NAND backup
        - Replace `{device-name}` with the mount point of the SD card

À ce stade, vous pouvez débrancher l'adaptateur de carte SD et tenter d'allumer la DSi. Si tout s'est bien passé, la DSi devrait avoir démarré dans l'état où elle se trouvait lorsque la sauvegarde a été créée !
{% endcapture tab-other %}
{% assign tab-other = tab-other | split: "////////" %}

### Flashage de la sauvegarde de la NAND
{% assign tabs = tab-windows | concat: tab-other %}
{% include tabs.html index=0 tabs=tabs %}
