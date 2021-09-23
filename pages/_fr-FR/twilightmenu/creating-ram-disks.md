---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Création de disques de RAM
description: Comment créer des disques en RAM pour utiliser les anciens homebrew DS avec TWiLight Menu++
---

Some DS homebrew are incapable of properly accessing the SD card filesystem. Because of this, it may be necessary to load a standalone filesystem into the RAM containing the necessary files for your homebrew in order for it to work.

The software used here requires the Windows operating system.
{:.alert .alert-info}

You do not need to follow this if you're using a flashcard.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Instructions by Dakkon7, modified by Rocket Robz:

1. Lancez RAMDisk
1. Cliquez sur **View** -> **Advanced**
1. Pour **Disk Size**, tapez `12` pour DSi, ou `28` pour 3DS, au-dessus de **Max 1023 Mo**
1. Dé-marquer **Create TEMP Directory**, s'il est déjà marqué
1. Cliquez sur **Load/Save**
1. Cliquez sur `Start RAMDisk`, et une nouvelle fenêtre pour votre .img devrait apparaître
1. Placez n'importe quel fichier et/ou dossier que le homebrew attend là-bas, et/ou le(s) fichier(s) que vous voulez utiliser
1. Dans le programme RAMDisk, cliquez sur `Save Disk Image Now`
1. Save `romname.img` to the `ramdisks` folder in the .nds file location. If it does not exist already, create it
1. Cliquez sur `Stop RAMDisk` lorsque vous avez terminé
1. In TWiLight Menu++, open the per-game settings for your homebrew
1. Mettez le disque de RAM au disque 0
1. Lancez votre homebrew, et il devrait lire votre disque RAM

If you wish to use the other RAM disk slots for a single homebrew application, use the `.img1` extension for RAM disk slot 1, and so on.
{:.alert .alert-info}
