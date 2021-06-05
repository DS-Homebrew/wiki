---
lang: it-IT
layout: wiki
section: ds-index
category: reference
title: Retail ROMs
description: Information related to retail DS games
---

### Anti-pirateria
AP (abbreviazione per l'anti-pirateria) è un metodo utilizzato dagli sviluppatori per imporre acquisti legittimi e limitare la pirateria. Queste misure possono essere aggirate sia dal caricatore che dalla ROM stessa.

- For nds-bootstrap's purposes, you can load an `.ips` file in order to circumvent said patches. This `.ips` file will be patched inside nds-bootstrap, so you can keep the ROM files intact. Un pacchetto di file `.ips` sono automaticamente inclusi con TWiLight Menu++.
- For Wood R4 purposes, these patches are included in the software itself. Non sarà necessario modificare la ROM stessa.

In case there isn't a `.ips` file for your ROM or your software didn't patch your ROM, you can try directly modifying the ROM itself using [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

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

### Lettura scheda DMA
La scheda DMA (acronimo per Direct Memory Access) è un modo più efficiente di leggere i dati della cartuccia rispetto al software. Quando non ci sono dati disponibili, il codice può ancora essere eseguito. In software cartridge data reads, polling the register to see if there is new data wastes times. È il modo preferito per accedere ai dati.

Puoi individuare un gioco che usa dma tramite no$gba abilitando il log DMA su ARM9. A DMA access to the card uses AF000001 as the third parameter.
- For example: `DMA2: 04100010 023C18C0 AF000001`

### Trucchi Action Replay
I codici trucchi Action Replay sono codici che consentono di effettuare cambiamenti a basso livello programmabile nella regione di memoria dei vostro giochi preferiti. These changes range from simple value tweaks to extremely advanced ASM tweaks, both of which can alter the experience of the game(s) being played altogether.

Le flashcard possono approfittare dei codici utilizzando dei database dei trucchi. La funzionalità dei trucchi è integrata nel kernel della flashcard. I seguenti kernel possono utilizzare i trucchi:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital-based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax consente di utilizzare trucchi con cartucce di gioco reali da una flashcard. L'engine utilizzato qui carica l'intero database cheats.xml nella RAM limitata del Nintendo DS e cerca di gestire le cose da lì. Questo impone un serio limite a quanti trucchi si può avere, in quanto NitroHax non caricherà un file cheats.xml al di sopra di 2,4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` or `usrcheat.dat`)
   - NitroHax3DS è una versione di NitroHax che viene eseguita dalla scheda SD del sistema su DSi o 3DS. La versione originale utilizza cheats.xml con lo stesso limite come l'originale NitroHax, ma c'è anche una fork che carica trucchi da un database usrcheat.dat senza limiti di dimensione
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ reads the `usrcheat.dat` and sends off the enabled cheat values to another file, which nds-bootstrap picks up
   - L'engine dei trucchi utilizzato in nds-bootstrap si basa su quello usato da NitroHax. However, due to the cheat file containing only enabled cheats for that specific title, there is only a limit to how many cheats can be enabled, not a limit on the database size
   - Bootstrap 4 DS (the nds-bootstrap version used on flashcards) does not support cheats, due to not having enough RAM and the limitations of the Memory Expansion Pack

For the most complete cheat database, we recommend using the one made by DeadSkullzJr titled [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Cheat codes generally have types A through E, and here is a description of them:

- The 0xE code type is a 32-bit code type that allows you to make multiple writes in many consecutive addresses all at once. Essentially, it is like the basic 32-bit RAM write code type (0x0), except this doesn't have addresses listed next the the values you want to write. Instead, the 0xE code type is programmed to automatically branch from a starting address, then determine the addresses to write to. From there, you just have to tack in the amount to write to in order for it to do the job.
