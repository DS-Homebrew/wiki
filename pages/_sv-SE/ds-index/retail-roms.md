---
lang: sv-SE
layout: wiki
section: ds-index
category: reference
title: Retail ROMar
description: Information relaterad till kommersiella DS spel
---

### Anti-piratkopiering
AP (kort för anti-piratkopiering) är en metod som används av utvecklare för att genomdriva lagliga inköp och förhindra piratkopiering. Detta kan kringgås antingen från lastaren eller själva ROMen.

- For nds-bootstrap's purposes, you can load an `.ips` file in order to circumvent said patches. This `.ips` file will be patched inside nds-bootstrap, so you can keep the ROM files intact. A pack of `.ips` files are automatically included with TWiLight Menu++.
- För Wood R4 ändamål så ingår dessa i själva programvaran. Du behöver inte ändra själva ROMen.

In case there isn't a `.ips` file for your ROM or your software didn't patch your ROM, you can try directly modifying the ROM itself using [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### Cloneboot
Cloneboot is when a game sends it's own loaded ARM7 and ARM9 binaries to another console. It is used by DS Download Play for single-card multiplayer. Though, not all games that have single-card multiplayer uses cloneboot.

Currently, nds-bootstrap's cloneboot patches is broken due to the ARM7 and ARM9 binaries being patched, which makes the RSA signatures invalid.

### Save Files
Nintendo DS cartridges have 4 known save types:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Though rare, there are DS Cartridges with NAND based saves: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

There are different formats to use depending on the loader, but nds-bootstrap uses the raw `.sav` format. If you use a different format, here is a website you can use to convert it: http://www.shunyweb.info/convert.php

### Assembly
Assembly is the native language used for all DS software. Assembly code comes in the form of either ARM or THUMB instructions. THUMB instructions are a subset of the ARM instructions. THUMB is useful to save memory bandwidth as it uses 16-bit instrcutions over the regular 32-bit instructions that ARM uses. You can find more info on Assembly instructions, as well as a lot more technical information for the DS and DSi, at [gbatek](https://problemkaputt.de/gbatek.htm).

### Card Read DMA
Kort DMA (står för Direct Memory Access) är ett effektivare sätt att läsa patrondata än genom programvara. När det inte finns någon tillgänglig data kan koden fortfarande köras. I programvarors kassett dataläsare, att undersöka registret för att se om det finns ny data slösar tid. Det är det föredragna sättet att komma åt data.

Du kan upptäcka när ett spel som använder dma via nr$gba genom att aktivera DMA-loggen på ARM9. En DMAs tillgång till kassettet använder AF000001 som den tredje parametern.
- Till exempel: `DMA2: 04100010 023C18C0 AF000001`

### Action Replay Cheats
Action Replay cheat codes are codes that allow you to make low-level programmable changes in the memory region of your favorite game(s). These changes range from simple value tweaks to extremely advanced ASM tweaks, both of which can alter the experience of the game(s) being played altogether.

Flashcards can take advantage of cheat codes by using cheat databases. Cheat functionality is integrated within the flashcard kernel respectively. The following kernels can utilize cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
  - NitroHax tillåter dig använda fusk med riktiga spelkort från ett minneskort. Motorn som används här laddar hela cheats.xml-databasen in i Nintendo DS:ens begränsade RAM-minne och försöker hantera saker därifrån. Detta innebär att det finns en allvarlig gräns för hur många fusk du kan ha, eftersom NitroHax inte kommer att ladda en cheats.xml fil över 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` eller `usrcheat.dat`)
  - NitroHax3DS är en version av NitroHax som körs från systemets SD-kort på DSi eller 3DS. Den ursprungliga versionen använder cheats.xml med samma 2.4 MB gräns, men det finns också en fork som laddar fusk från en usrcheat.dat-databas utan storleksbegränsning
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
  - TWiLight Menu++ läser `usrcheat.dat` och skickar de aktiverade fuskvärdena till en annan fil, som nds-bootstrap plockar upp
  - Fuskmotorn som används i nds-bootstrap är baserad på den som används i NitroHax. Men på grund av fuskfilen som innehåller endast aktiverade fusk för den specifika titeln, finns det bara en gräns för hur många fusk som kan aktiveras, inte en gräns för databasens storlek
  - Bootstrap 4 DS (den nds-bootstrap versionen som används på minneskort) stöder inte fusk, på grund av att det inte finns tillräckligt med RAM, och begränsningarna i Memory Expansion Pack

For the most complete cheat database, we recommend using the one made by DeadSkullzJr titled [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Cheat codes generally have types A through E, and here is a description of them:

- 0xE-kodtypen är en 32-bitars kodtyp som gör att du kan skriva i många adresser på en gång. I grund och botten så är det som den grundläggande 32-bitars RAM (0x0), förutom detta inte har adresser listade bredvid de värden du vill skriva. Istället är 0xE-kod-typen programmerad att automatiskt grena från en startadress och sedan bestämma adresserna att skriva till. Därifrån behöver du bara ta in det belopp du ska skriva till för att det ska kunna fungera.
