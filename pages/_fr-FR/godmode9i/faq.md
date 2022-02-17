---
lang: fr-FR
layout: faq
section: godmode9i
title: FAQ et dépannage
long_title: FAQ et dépannage de GodMode9i
description: FAQ et dépannage pour GodMode9i
---

#### Comment passer l'écran « mounting drive(s) » lors du démarrage ?
Cela se produit lorsque vous lancez GodMode9i à partir de [hiyaCFW](../hiyacfw). Vous pouvez maintenir <kbd class="face">X</kbd> pendant le lancement de GodMode9i pour passer le montage NAND. Alternativement, vous pouvez lancer GodMode9i directement depuis Unlaunch pour pouvoir monter la NAND.

#### Pourquoi ne puis-je pas ajouter, supprimer ou modifier des fichiers sur la NAND ?
Éditer des fichiers sur la NAND DSi n'est pas sûr et peut facilement conduire à un brick, donc GodMode9i manque intentionnellement de cette capacité.

#### Pourquoi ne puis-je pas voir les informations sur les fichiers NDS pour certains DSiWare ?
Certains DSiWare, notamment ceux situés dans le dossier `0003000f`, contiennent des données système et n'ont pas de bannière valide.

#### Dois-je utiliser la version NDS ou la version DSi ? Quelle est la différence ?
Ils sont fonctionnellement identiques, mais ils ont des objectifs spécifiques.
- Si vous utilisez GodMode9i avec un linker, utilisez la version NDS
- Si vous installez GodMode9i sur votre SDNAND hiyaCFW, utilisez la version DSi
- Si vous démarrez GodMode9i via TWiLight Menu++, les deux versions fonctionneront de manière identique
- Si vous installez GodMode9i dans le menu HOME de votre 3DS, utilisez la version CIA

#### Comment changer la langue ?
Vous pouvez changer la langue de GodMode9i en appuyant sur <kbd>START</kbd>, en sélectionnant la dernière option de ce menu, et en choisissant la langue que vous voulez utiliser.

Notez que cela ne fonctionnera que si GodMode9i est exécuté à partir de TWiLight Menu++ ou s'il existe une copie de `GodMode9i.nds`/`GodMode9i.dsi` à la racine de votre carte SD.

Vous pouvez également entrer manuellement un chemin d'accès à tout fichier de traduction sur votre carte SD dans le fichier de configuration, `sd:/gm9i/config.ini`, avec l'entrée `LANGUAGE_INI_PATH`.

#### Comment changer la police de caractères ?
Vous pouvez changer la police de GodMode9i en sélectionnant un fichier de police `.frf` et en choisissant `Charger la police`. Pour définir une police différente en tant que police par défaut, placez-la à `sd:/gm9i/font.frf` ou modifiez le fichier de configuration (`sd:/gm9i/config.ini`) pour définir le `FONT_PATH` à l'endroit où se trouve votre fichier de police.

Vous pouvez trouver quelques polices préconverties dans le [dossier resources](https://github.com/DS-Homebrew/GodMode9i/tree/master/resources/fonts) du dépôt GitHub et vous pouvez convertir les vôtres à partir d'une image PBM et d'un fichier TXT contenant les mappages Unicode en utilisant le script [fontriff.py](https://github.com/d0k3/GodMode9/blob/master/utils/fontriff.py) de GodMode9.

#### How do I dump DS Saves using GBA save data?
GodMode9i is able to use the save data of GBA cartridges to dump the saves of most DS Game Cards. ROM files and save files over 1 MiB cannot be dumped this way as the files are impractically large. This can also be done using Haxxstation instead of a DS flashcard if you have another way to dump the GBA save files, they can then be recombined and decompressed on a computer.

1. Load GodMode9i on your flashcard
1. Backup your GBA saves!!
   - Any save data that hasn't been backed up will be lost
   - Check the files and find the larger ones, using 512 byte carts won't help much while 64 or 128 KiB saves will fit most DS saves in 1 or 2 carts
1. On the drive menu, press <kbd class="r">R</kbd> + <kbd class="face">B</kbd> to unmount the flashcard
1. Eject the flashcard, insert a DS Game Card and GBA cartridge
1. Select `NDS GAMECARD` then `Save`
1. When asked, press <kbd class="face">A</kbd> to write the data to the GBA cart
   - Swap to different GBA cartridges and repeat until the whole save is copied
1. Reboot your DS with your Slot-1 flashcard back in and reopen GodMode9i
1. Insert the first GBA cartridge you used and select `GBA GAMECART`
1. Choose `DS Save`
1. Swap through all the carts you dumped onto
1. Your DS save will now be in `fat:/gm9i/out`, you can now restore your backed up GBA save files to their original cartridges

If you want to write the save file back onto the Game Card, simply select the `.sav` file and choose `Restore save (Slot-1)`, then swap out your flashcard for the DS Game Card when prompted.
