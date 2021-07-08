---
lang: ko-KR
layout: wiki
section: ds-index
category: reference
title: 시판되는 ROM
description: 시판되는 DS 게임과 관련된 설명
---

### Anti-piracy
불법 복제 방지 기술 (영어로 Anti-Piracy, 줄여서 AP) 은 개발자들이 정당한 구매를 장려하고, 불법 복제를 방지하기 위해 사용되어왔습니다. 이는 로더나 ROM 자체에서 우회할 수 있습니다.

- nds-bootstrap에서는, 위에 이야기한 패치를 우회하기 위해 `.ips`파일을 불러올 수 있습니다. 이러한 `.ips` 파일은 nds-bootstrap 내부에 패치되므로, 롬파일을 온전히 유지할 수 있습니다. `.ips`파일 팩은 자동으로 TWiLight Menu++에 포함됩니다.
- Wood R4에서는, 이러한 패치가 소프트웨어 자체에 포함되어있습니다. 따라서, 사용자가 롬 파일 자체를 수정할 필요는 없습니다.

롬이나 소프트웨어를 위한 `.ips`파일이 롬파일에 패치되어있지 않은 경우, [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)을 이용해 직접 롬파일을 수정할 수도 있습니다.

### CloneBoot
CloneBoot는 게임이 직접 로드한 ARM7과 ARM9 바이너리를 다른 본체에 전송하는 것을 얘기합니다. 이는 단일 카드 멀티플레이를 위해 DS 다운로드 플레이에 사용됩니다. 다만, 단일 카드 멀티플레이를 지원하는 모든 게임이 cloneboot를 통한 것은 아닙니다.

현재는 ARM7과 ARM9 바이너리가 RSA 서명을 무효화하도록 패치되어 nds-bootstrap의 cloneboot패치를 쓸 수 없게되었습니다.

### Save files
닌텐도 DS 카트리지는 4가지의 알려진 세이브 타입이 있습니다.

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

드물지만, NAND 기반 세이브 방식의 DS 카트리지들도 있습니다: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

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

For the most complete cheat database, we recommend using the one made by DeadSkullzJr titled [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Cheat codes generally have types A through E, and here is a description of them:

- The 0xE code type is a 32-bit code type that allows you to make multiple writes in many consecutive addresses all at once. Essentially, it is like the basic 32-bit RAM write code type (0x0), except this doesn't have addresses listed next the the values you want to write. Instead, the 0xE code type is programmed to automatically branch from a starting address, then determine the addresses to write to. From there, you just have to tack in the amount to write to in order for it to do the job.
