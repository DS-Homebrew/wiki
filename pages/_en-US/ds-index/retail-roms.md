---
lang: en-US
layout: wiki
section: ds-index
title: Retail ROMs
description: The complete guide to modding the Nintendo DS
---

### Anti-Piracy

AP (short for anti-piracy) is a method used by developers to enforce legitimate purchases and prevent piracy. This can be circumvented either from the loader or the ROM itself.

- For nds-bootstrap's purposes, you could load a `.IPS` file in order to circumvent said patches. This `.IPS` file will be patched inside nds-bootstrap, so you could keep the ROM files intact. A pack of `.IPS` files are automatically included with TWiLight Menu++.
- For Wood R4 purposes, these patches are included in the software itself. You will not need to modify the ROM itself.

In case there isn't a `.IPS` file for your ROM or your software didn't patch your ROM, you could try directly modifying the ROM itself using [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### CloneBoot

Cloneboot is when a game sends it's own loaded arm9/arm7 binary to another console. It is used for DS Download Play, for single-card multiplayer. Not all games that have single-card multiplayer uses cloneboot though.

Currently, nds-bootstrap's cloneboot patches is broken due to arm9/7 binaries being patched, which makes the RSA signatures invalid.

### Thumb instructions
Instead of the 32-bit regular ARM instructions, THUMB use 16-bit instructions. This is useful when memory bandwidth is a bottleneck.

### Save Files
Nintendo DS cartridges have 4 known save types:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Though rare, there are DS Cartridges with NAND based saves: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

There are different formats to use depending on the loader, but nds-bootstrap uses the raw `.sav` format. If you use a different format, here is a website you can use to convert it: http://www.shunyweb.info/convert.php

### Card Read DMA
Card DMA (stands for Direct Memory Access) is a more efficient way to read catridge data than by software. When there isn't any data available, code can still execute. In software catridge data reads, polling the register to see if there is new data wastes times. It is the preferred way of accessing data.

You can spot a game that uses dma via no$gba by enabling the DMA log on ARM9. A DMA access to the card uses AF000001 as the third parameter.
- For example: `DMA2: 04100010 023C18C0 AF000001`

### Donor ROM

In previous nds-bootstrap versions, a Mario Kart DS ROM was needed for SDK3-4 games to work or save.
The ROM acted as a Donor ROM. nds-bootstrap grabs the donor's arm7 binary, replacing the original ROM's arm7 binary, in order for the save patches to work, and there was a few side effects as a result.
In later nds-bootstrap versions, a Donor ROM is needed for certain THUMB or SDK5 games to boot, as well as save.

### Action Replay Cheats

Action Replay cheat codes are codes that allow you to make low-level programmable changes in the memory region of your favorite game(s). These changes range from simple value tweaks to extremely advanced ASM tweaks, both of which could alter the experience of the game(s) being played altogether.

Flashcarts can take advantage of cheat codes by using cheat databases. Cheat functionality is integrated within the flashcart kernel respectively. The following kernels can utilize cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- NitroHax (`cheats.xml`)
  - The engine used here loads the entire cheats.xml database into the Nintendo DS's limited RAM and trys to manage things from there. This imposes a serious limit on how many cheats you can have, as NitroHax will not load a cheats.xml file past 2.4 MB
- TWiLight Menu++ (`usrcheat.dat`)
  - TWiLight Menu++ reads the `usrcheat.dat` and sends off the enabled cheat values to another file, which nds-bootstrap picks up
  - The cheat engine used in nds-bootstrap is based on the one used in NitroHax. However, due to the cheat file containing only enabled cheats for that specific title, the cheats file does not have a real limit.
  - Bootstrap 4 DS (aka the nds-bootstrap version used on flashcarts) does not support cheats, due to not having enough RAM and the limitations of the Memory Expansion Pack.

For the most complete cheat database, we recommend using the one made by DeadSkullzJr titled [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711/page-38#post-9090779)

Cheat codes generally have types A through E, and here is a description of them:

- The 0xE code type is a 32-bit code type that allows you to make multiple writes in many consecutives addresses all at once. Essentially, it is like the basic 32-bit RAM write code type (0x0), except this doesn't have addresses listed next the the values you want to write. Instead, the 0xE code type is programmed to automatically branch from a starting address, then determine the addresses to write to. From there, you just have to tack in the amount to write to in order for it to do the job.

Credits: (`DeadSkullzJr`)
