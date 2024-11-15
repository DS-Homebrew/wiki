---
lang: sv-SE
layout: wiki
section: twilightmenu
category: other
title: Skapa RAM-diskar
description: Hur man skapar RAM-diskar för att använda gamla DS homebrew med TWiLight Menu++
---

Some DS homebrew are incapable of properly accessing the SD card filesystem. Because of this, it may be necessary to load a standalone filesystem into the RAM containing the necessary files for your homebrew in order for it to work.

The software used here requires the Windows operating system.
{:.alert .alert-info}

You do not need to follow this if you're using a flashcard.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](https://web.archive.org/web/20240923165935/https://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Instructions by Dakkon7, modified by Rocket Robz:

1. Kör RAMDisk
1. Klicka på **View** -> **Advanced**
1. För **Disk Size**, skriv `12` för DSi, eller `28` för 3DS, över **Max 1023 MB**
1. Avmarkera **Create TEMP Directory**, om den redan är markerad
1. Klicka på **Load/Save**
1. Klicka på `Start RAMDisk`, och ett nytt fönster för din .img borde dykas upp
1. Placera alla filer och/eller mappar som homebrew förväntar sig där, och/eller fil(er) som du vill använda
1. I programmet RAMDisk klickar du på `Save Disk Image Now`
1. Save `romname.img` to the `ramdisks` folder in the .nds file location. If it does not exist already, create it
1. Klicka på `Stop RAMDisk` när du är klar
1. In TWiLight Menu++, open the per-game settings for your homebrew
1. Ställ in RAM-disk till 0
1. Starta ditt homebrew, och det bör läsa din RAM-disk

If you wish to use the other RAM disk slots for a single homebrew application, use the `.img1` extension for RAM disk slot 1, and so on.
{:.alert .alert-info}
