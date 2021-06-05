---
lang: he-IL
layout: wiki
section: ds-index
category: reference
title: רומים רשמיים
description: Information related to retail DS games
---

### Anti-Piracy (נוגד פיראטיות)
הAP (קיצור של anti-piracy) היא שיטה שהייתה בשימוש על ידי מפתחים למנוע פיראטיות ולאכוף רכישות של משחקים מקוריים. ניתן לעקוף את שיטה זו באמצעות התוכנה שטוענת את המשחק או דרך הROM עצמו.

- עבור השימושים של nds-bootstrap, אפשר לטעון קובץ `.Ips` על מנת לעקוף את שיטה זו. קובץ `.ips` זה יותקן באמצעות nds-bootstrap, כך שאפשר להשאיר את הROMים ללא שינוי. חבילת קבצי `.ips` כלולה עם TWiLight Menu++.
- לשימושים של Wood R4, טלאים אלו כלולים עם התוכנה עצמה. לא תצטרכו לשנות את הROM עצמו.

במקרה בו אין קובץ `.ips` לROM שלכם או שהתוכנה לא עקפה את הAP, אפשר לנסות לשנות את הROM עצמו באמצעות [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### Cloneboot
Cloneboot is when a game sends it's own loaded ARM7 and ARM9 binaries to another console. It is used by DS Download Play for single-card multiplayer. Though, not all games that have single-card multiplayer uses cloneboot.

Currently, nds-bootstrap's cloneboot patches is broken due to the ARM7 and ARM9 binaries being patched, which makes the RSA signatures invalid.

### Save files
Nintendo DS cartridges have 4 known save types:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Though rare, there are DS Cartridges with NAND based saves: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

There are different formats to use depending on the loader, but nds-bootstrap uses the raw `.sav` format. If you use a different format, here is a website you can use to convert it: http://www.shunyweb.info/convert.php

### Assembly
Assembly language is any low-level programming language with a strong connection between the language's instructions and the processor's instructions. On the DS, assembly code comes in the form of either ARM or THUMB instructions, THUMB instructions being a subset of the ARM instructions. THUMB is useful to save memory bandwidth as it uses 16-bit instructions over the regular 32-bit instructions that ARM uses. You can find more information on assembly instructions, as well as a lot more technical information for the DS and DSi, on [GBATEK](https://problemkaputt.de/gbatek.htm).

### Card read DMA
Card DMA (stands for Direct Memory Access) is a more efficient way to read cartridge data than by software. When there isn't any data available, code can still execute. In software cartridge data reads, polling the register to see if there is new data wastes times. It is the preferred way of accessing data.

You can spot a game that uses dma via no$gba by enabling the DMA log on ARM9. A DMA access to the card uses AF000001 as the third parameter.
- For example: `DMA2: 04100010 023C18C0 AF000001`

### Action Replay cheats
Action Replay cheat codes are codes that allow you to make low-level programmable changes in the memory region of your favorite game(s). These changes range from simple value tweaks to extremely advanced ASM tweaks, both of which can alter the experience of the game(s) being played altogether.

Flashcards can take advantage of cheat codes by using cheat databases. Cheat functionality is integrated within the flashcard kernel respectively. The following kernels can utilize cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital-based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax lets you use cheats with real game cards from a flashcard. The engine used here loads the entire cheats.xml database into the Nintendo DS's limited RAM and tries to manage things from there. This imposes a serious limit on how many cheats you can have, as NitroHax will not load a cheats.xml file past 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` or `usrcheat.dat`)
   - NitroHax3DS is a version of NitroHax that runs from the system's SD card on DSi or 3DS. The original version uses cheats.xml with the same 2.4 MB limit as the original NitroHax, but there is also a fork that loads cheats from a usrcheat.dat database with no size limitation
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ reads the `usrcheat.dat` and sends off the enabled cheat values to another file, which nds-bootstrap picks up
   - The cheat engine used in nds-bootstrap is based on the one used in NitroHax. However, due to the cheat file containing only enabled cheats for that specific title, there is only a limit to how many cheats can be enabled, not a limit on the database size
   - Bootstrap 4 DS (the nds-bootstrap version used on flashcards) does not support cheats, due to not having enough RAM and the limitations of the Memory Expansion Pack

For the most complete cheat database, we recommend using the one made by DeadSkullzJr titled [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Cheat codes generally have types A through E, and here is a description of them:

- The 0xE code type is a 32-bit code type that allows you to make multiple writes in many consecutive addresses all at once. Essentially, it is like the basic 32-bit RAM write code type (0x0), except this doesn't have addresses listed next the the values you want to write. Instead, the 0xE code type is programmed to automatically branch from a starting address, then determine the addresses to write to. From there, you just have to tack in the amount to write to in order for it to do the job.
