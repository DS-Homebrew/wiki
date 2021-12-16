---
lang: en-US
layout: wiki
section: twilightmenu
category: other
title: Creating RAM Disks
description: How to create RAM disks for using old DS homebrew with TWiLight Menu++
---

Some DS homebrew are incapable of properly accessing the SD card filesystem. Because of this, it may be necessary to load a standalone filesystem into the RAM containing the necessary files for your homebrew in order for it to work.

The software used here requires the Windows operating system.
{:.alert .alert-info}

You do not need to follow this if you're using a flashcard.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Instructions by Dakkon7, modified by Rocket Robz:

1. Run RAMDisk
1. Click **View** -> **Advanced**
1. For **Disk Size**, type `12` for DSi, or `28` for 3DS, above **Max 1023 MB**
1. Un-mark **Create TEMP Directory**, if it's already marked
1. Click **Load/Save**
1. Click `Start RAMDisk`, and a new window for your .img should appear
1. Place any file and/or folder the homebrew expects there, and/or file(s) you want to use
1. Pada tata olah (program) RAMDisk, pencet `Save Disk Image Now`
1. Save `romname.img` to the `ramdisks` folder in the .nds file location. If it does not exist already, create it
1. Click `Stop RAMDisk` when you're done
1. In TWiLight Menu++, open the per-game settings for your homebrew
1. Set RAM disk to 0
1. Launch your homebrew, and it should read your RAM disk

If you wish to use the other RAM disk slots for a single homebrew application, use the `.img1` extension for RAM disk slot 1, and so on.
{:.alert .alert-info}
