---
lang: he-IL
layout: wiki
section: twilightmenu
category: other
title: יצירת RAM Disks
description: כיצד ליצור RAM disks על מנת להשתמש בהומברו ישן של DS עם TWiLight Menu++
---

Some DS homebrew are incapable of properly accessing the SD card filesystem. Because of this, it may be necessary to load a standalone filesystem into the RAM containing the necessary files for your homebrew in order for it to work.

The software used here requires the Windows operating system.
{:.alert .alert-info}

You do not need to follow this if you're using a flashcard.
{:.alert .alert-info}

To make a RAM disk, download [Dataram RAMDisk](https://web.archive.org/web/20240923165935/https://memory.dataram.com/products-and-services/software/ramdisk#freeware) (click `Download Software`), and follow the instructions below.

Instructions by Dakkon7, modified by Rocket Robz:

1. הריצו את RAMDisk
1. לחצו על **View** -> **Advanced**
1. עבור **Disk Size**, רשמו `12` עבור DSi, או `28` עבור 3DS, מעל**Max 1023 MB**
1. בטלו את הסימון **Create TEMP Directory**, אם הוא מסומן
1. לחצו על **Load/Save**
1. לחצו על`Start RAMDisk`, ויפתח חלון חדש בשביל ה.img שלכם
1. מקמו כל קובץ או תיקיה שההומברו מצפה לה שם, ואת הקבצים שתרצו להשתמש בהם
1. בתוכנת הRAMDisk, לחצו על `Save Disk Image Now`
1. Save `romname.img` to the `ramdisks` folder in the .nds file location. If it does not exist already, create it
1. לחצו על `Stop RAMDisk` בסיום
1. In TWiLight Menu++, open the per-game settings for your homebrew
1. הגדירו את RAM disk ל0
1. הפעילו את ההומברו שלכם, והוא אמור לקרוא את הRAM disk שלכם

If you wish to use the other RAM disk slots for a single homebrew application, use the `.img1` extension for RAM disk slot 1, and so on.
{:.alert .alert-info}
