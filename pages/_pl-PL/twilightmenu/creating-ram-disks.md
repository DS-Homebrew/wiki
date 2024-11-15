---
lang: pl-PL
layout: wiki
section: twilightmenu
category: other
title: Tworzenie Dysków RAM
description: Jak tworzyć dyski RAM do używania starych homebrew DS używając TWiLight Menu++
---

Some DS homebrew are incapable of properly accessing the SD card filesystem. Because of this, it may be necessary to load a standalone filesystem into the RAM containing the necessary files for your homebrew in order for it to work.

The software used here requires the Windows operating system.
{:.alert .alert-info}

You do not need to follow this if you're using a flashcard.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](https://web.archive.org/web/20240923165935/https://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Instructions by Dakkon7, modified by Rocket Robz:

1. Uruchom RAMDisk
1. Kliknij **View** -> **Advanced**
1. W **Disk Size** wpisz `12` jeśli masz DSi, `28` jeśli masz 3DS. Nad **Max 1023 MB**
1. Odznacz **Utwórz katalog TEMP**, jeśli jest oznaczony
1. Kliknij **Load/Save**
1. Kliknij `Start RAMDisk`, powinno Ci sie pojawić okienko dla twojego pliku .img
1. Umieść każdy plik i/lub folder wymagany przez homebrew albo/i plik(i), które chcesz używać
1. W programie RAMDisk, kliknij `Save Disk Image Now`
1. Save `romname.img` to the `ramdisks` folder in the .nds file location. If it does not exist already, create it
1. Kliknij `Stop RAMDisk` kiedy skończysz
1. In TWiLight Menu++, open the per-game settings for your homebrew
1. Ustaw dysk RAM na 0
1. Uruchom homebrew, powinien przeczytać utworzony dysk RAM

If you wish to use the other RAM disk slots for a single homebrew application, use the `.img1` extension for RAM disk slot 1, and so on.
{:.alert .alert-info}
