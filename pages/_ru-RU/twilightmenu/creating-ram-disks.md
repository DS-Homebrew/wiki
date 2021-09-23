---
lang: ru-RU
layout: wiki
section: twilightmenu
category: other
title: Создание RAM-дисков
description: Как создать RAM-диски для использования старых хоумбрю приложений с TWiLight Menu++
---

Some DS homebrew are incapable of properly accessing the SD card filesystem. Because of this, it may be necessary to load a standalone filesystem into the RAM containing the necessary files for your homebrew in order for it to work.

The software used here requires the Windows operating system.
{:.alert .alert-info}

You do not need to follow this if you're using a flashcard.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Instructions by Dakkon7, modified by Rocket Robz:

1. Запустите RAMDisk
1. Нажмите **View** -> **Advanced**
1. Для **Disk Size**, используйте `12` для DSi, или `28` для 3DS, максимум **Max 1023 MB**
1. Снимите отметку с **Create TEMP Directory** если она стоит
1. Нажмите **Load/Save**
1. Нажмите `Start RAMDisk` и должно появится новое окно для вашего .img
1. Добавьте туда файлы и папки хоумбрю приложений, или любые другие которые вы собираетесь использовать
1. В программе RAMDisk нажмите `Save Disk Image Now`
1. Save `romname.img` to the `ramdisks` folder in the .nds file location. If it does not exist already, create it
1. Click `Stop RAMDisk` when you're done
1. In TWiLight Menu++, open the per-game settings for your homebrew
1. Set RAM disk to 0
1. Launch your homebrew, and it should read your RAM disk

If you wish to use the other RAM disk slots for a single homebrew application, use the `.img1` extension for RAM disk slot 1, and so on.
{:.alert .alert-info}
