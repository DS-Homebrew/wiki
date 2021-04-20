---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Création de disques de RAM
description: Comment créer des disques en RAM pour utiliser les anciens homebrew DS avec TWiLight Menu++
---

Vous n'avez pas besoin de suivre cela si vous utilisez un linker.
{:.alert .alert-info}

Pour créer un disque de RAM, téléchargez [cet outil](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (cliquez sur `Download Software`), et suivez les instructions ci-dessous.

Instructions par @Dakkon7, modifié par RocketRobz:

1. Run RAMDisk
1. Cliquez sur **View** -> **Advanced**
1. Pour **Disk Size**, tapez `12` pour DSi, ou `28` pour 3DS, au-dessus de **Max 1023 Mo**
1. Dé-marquer **Create TEMP Directory**, s'il est déjà marqué
1. Cliquez sur **Load/Save**
1. Cliquez sur `Start RAMDisk`, et une nouvelle fenêtre pour votre .img devrait apparaître
1. Placez n'importe quel fichier et/ou dossier que le homebrew attend là-bas, et/ou le(s) fichier(s) que vous voulez utiliser
1. Dans le programme RAMDisk, cliquez sur `Save Disk Image Now`
1. Enregistrer `romname.img` dans un dossier appelé `ramdisks` à l'emplacement du fichier .nds
1. Cliquez sur `Stop RAMDisk` lorsque vous avez terminé
1. Dans TWiLight Menu++, ouvrez les paramètres par jeu pour votre homebrew
1. Mettez le disque de RAM au disque 0
1. Lancez votre homebrew, et il devrait lire votre disque RAM
