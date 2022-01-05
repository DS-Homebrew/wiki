---
lang: fr-FR
layout: wiki
section: twilightmenu
category: other
title: Création de disques RAM
description: Comment créer des disques RAM pour utiliser les anciens homebrews DS avec TWiLight Menu++
---

Certains homebrews DS sont incapables d'accéder correctement au système de fichiers de la carte SD. Pour cette raison, il peut être nécessaire de charger un système de fichiers autonome dans la RAM contenant les fichiers nécessaires pour votre homebrew afin qu'il fonctionne.

Le logiciel utilisé ici nécessite le système d'exploitation Windows.
{:.alert .alert-info}

Vous n'avez pas besoin de suivre cette procédure si vous utilisez un linker.
{:.alert .alert-info}

Pour créer un disque RAM, téléchargez [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (cliquez sur `Download Software`), et suivez les instructions ci-dessous.

Instructions par Dakkon7, modifiées par Rocket Robz :

1. Lancez RAMDisk
1. Cliquez sur **View** -> **Advanced**
1. Pour **Disk Size**, tapez `12` pour DSi, ou `28` pour 3DS, au-dessus de **Max 1023 MB**
1. Dé-marquez **Create TEMP Directory** s'il est déjà marqué
1. Cliquez sur **Load/Save**
1. Cliquez sur `Start RAMDisk` et une nouvelle fenêtre pour votre .img devrait apparaître
1. Placez tout fichier et/ou dossier que le homebrew attend à cet endroit, et/ou le(s) fichier(s) que vous voulez utiliser
1. Dans le programme RAMDisk, cliquez sur `Save Disk Image Now`
1. Enregistrez `romname.img` dans le dossier `ramdisks` à l'emplacement du fichier .nds. Si ce dossier n'existe pas, créez le
1. Cliquez sur `Stop RAMDisk` lorsque vous avez terminé
1. Dans TWiLight Menu++, ouvrez les paramètres par jeu pour votre homebrew
1. Mettez le disque RAM à 0
1. Lancez votre homebrew, et il devrait lire votre disque RAM

Si vous souhaitez utiliser les autres emplacements de disque RAM pour une seule application homebrew, utilisez l'extension `.img1` pour l'emplacement de disque RAM 1, et ainsi de suite.
{:.alert .alert-info}
