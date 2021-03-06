---
lang: sv-SE
layout: wiki
section: twilightmenu
category: other
title: Skapa RAM-diskar
description: Hur man skapar RAM-diskar för att använda gamla DS homebrew med TWiLight Menu++
---

Du behöver inte följa detta om du använder ett minneskort.
{:.alert .alert-info}

För att göra en RAM-disk, ladda ner [detta](http://memory.dataram.com/products-and-services/software/ramdisk#freeware) verktyg (klicka `Download Software`), och följ instruktionerna nedan.

Instruktioner av @Dakkon7, ändrad av RocketRobz:

1. Kör RAMDisk
1. Klicka på **View** -> **Advanced**
1. För **Disk Size**, skriv `12` för DSi, eller `28` för 3DS, över **Max 1023 MB**
1. Avmarkera **Create TEMP Directory**, om den redan är markerad
1. Klicka på **Load/Save**
1. Klicka på `Start RAMDisk`, och ett nytt fönster för din .img borde dykas upp
1. Placera alla filer och/eller mappar som homebrew förväntar sig där, och/eller fil(er) som du vill använda
1. I programmet RAMDisk klickar du på `Save Disk Image Now`
1. Spara `romname.img` till en mapp som heter `ramdisks` i platsen där .nds filen finns
1. Klicka på `Stop RAMDisk` när du är klar
1. I TWiLight Menu++, öppna "Spelspecifika inställningar" för ditt homebrew
1. Ställ in RAM-disk till 0
1. Starta ditt homebrew, och det bör läsa din RAM-disk
