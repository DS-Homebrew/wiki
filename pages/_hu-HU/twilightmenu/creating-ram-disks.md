---
lang: hu-HU
layout: wiki
section: twilightmenu
category: other
title: RAM Disk létrehozása
description: Hogyan hozz létre RAM lemezeket a TWiLight Menu++-szal, régi DS homebrew használatához
---

Some DS homebrew are incapable of properly accessing the SD card filesystem. Because of this, it may be necessary to load a standalone filesystem into the RAM containing the necessary files for your homebrew in order for it to work.

The software used here requires the Windows operating system.
{:.alert .alert-info}

You do not need to follow this if you're using a flashcard.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Instructions by Dakkon7, modified by Rocket Robz:

1. Futtasd a RAMDisk-et
1. Kattints **View** -> **Advanced** opciókra
1. A **Disk Size**-hoz, írj `12`-t a DSi-hez vagy `28`-at a 3DS-hez, a **Max 1023 MB** felett
1. Vedd ki a jelölést a **Create TEMP Directory** elől, ha be lenne már jelölve
1. Katints a **Load/Save** opcióra
1. Kattints a `Start RAMDisk`-re, és egy új ablak az .img fájlodra fog megjelenni
1. Rakj be bármilyen fájlt és/vagy mappát, amit a homebrew vár itt, és/vagy amit használni szeretnél
1. A RAMDisk programban, kattints a `Save Disk Image Now` opcióra
1. Save `romname.img` to the `ramdisks` folder in the .nds file location. If it does not exist already, create it
1. Kattints a `Stop RAMDisk` opcióra, ha kész vagy
1. In TWiLight Menu++, open the per-game settings for your homebrew
1. Állítsd a RAM disk-et 0-ra
1. Indítsd el a homebrew-od, és az olvasni tudja majd a RAM disk-edet

If you wish to use the other RAM disk slots for a single homebrew application, use the `.img1` extension for RAM disk slot 1, and so on.
{:.alert .alert-info}
