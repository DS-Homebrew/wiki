---
lang: ko-KR
layout: wiki
section: ds-index
category: reference
title: 시판되는 ROM
description: 시판되는 DS 게임과 관련된 설명
---

### 불법 복제 방지 기술 (Anti-Piracy)
불법 복제 방지 기술 (Anti-Piracy, 이하 AP) 은 개발자들이 정당한 구매를 장려하고, 불법 복제를 방지하기 위해 사용되어 왔습니다. 이는 로더나 ROM 자체에서 우회할 수 있습니다.

- For nds-bootstrap, it can load an `.ips` file (both internal and external) in order to circumvent said patches. 이 `ips` 파일은 nds-bootstrap에 의하여 RAM에서 패치를 하므로, ROM 파일들은 그대로 남길 수 있습니다.
- Wood R4에서는, 이 패치들이 소프트웨어 자체에 포함되어 있어, 특별한 행동을 할 필요는 없습니다.

If there isn't an `.ips` file for your ROM or your software doesn't patch your ROM, you can try directly modifying the ROM itself using [DS-Scene ROM Tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/).

### CloneBoot
Cloneboot is when a game sends its own loaded ARM7 and ARM9 binaries to another console. 이는 단일 카드 멀티플레이를 위해 DS 다운로드 플레이에 사용됩니다. Not all games that have single-card multiplayer use cloneboot, however.

### 세이브 파일
닌텐도 DS 카트리지는 4가지의 알려진 세이브 타입이 있습니다.

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

There are different formats to use depending on the loader, but nds-bootstrap uses the raw `.sav` format. If you have a save in a different format, here is a website you can use to convert it: http://www.shunyweb.info/convert.php.

### Assembly
Assembly language is any low-level programming language with a strong connection between the language's instructions and the processor's instructions. On the DS, assembly code comes in the form of either ARM or THUMB instructions, THUMB instructions being a subset of the ARM instructions. THUMB is useful to save memory bandwidth as it uses 16-bit instructions over the regular 32-bit instructions that ARM uses.

You can find more information on assembly instructions, as well as a lot more technical information for the DS and DSi, on [GBATEK](https://problemkaputt.de/gbatek.htm).

### Card read DMA
DMA (Direct Memory Access) is a more efficient way to read data than using the CPU. When data is being transferred, code can still execute, so it is the preferred way of accessing data.

You can spot a game that uses DMA in no$gba by enabling the DMA log on ARM9. A DMA access to the card uses AF000001 as the third parameter.
- For example: `DMA2: 04100010 023C18C0 AF000001`

### Action Replay cheats
Action Replay cheat codes are codes that allow you to make low-level programmable changes in the memory region of your favorite game(s). These changes range from simple value tweaks to extremely advanced ASM tweaks, both of which can alter the experience of the game(s) being played altogether.

Flashcards can take advantage of cheat codes by using cheat databases. Cheat functionality is integrated within the flashcard kernel respectively. The following kernels can utilize cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital-based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
    - NitroHax lets you use cheats with real Game Cards from a flashcard. The engine used here loads the entire cheats.xml database into the Nintendo DS's limited RAM and tries to manage things from there. This imposes a serious limit on how many cheats you can have, as NitroHax will not load a cheats.xml file past 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([usrcheat.dat fork](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` or `usrcheat.dat`)
    - NitroHax3DS is a version of NitroHax that runs from the system's SD card on DSi or 3DS. The original version uses cheats.xml with the same 2.4 MB limit as the original NitroHax, but there is also a fork that loads cheats from a usrcheat.dat database with no size limitation
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
    - TWiLight Menu++ reads the `usrcheat.dat` and sends off the enabled cheat values to another file, which nds-bootstrap picks up
    - The cheat engine used in nds-bootstrap is based on the one used in NitroHax. However, due to the cheat file containing only enabled cheats for that specific title, there is only a limit to how many cheats can be enabled, not a limit on the database size

For the most complete cheat database, using [DeadSkullzJr's NDS Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711) is recomended.

Cheat codes generally have types 0 through F, and here is an (unfinished) description of them:

- The 0xE code type is a 32-bit code type that allows you to make multiple writes in many consecutive addresses all at once. Essentially, it is like the basic 32-bit RAM write code type (0x0), except this doesn't have addresses listed next the the values you want to write. Instead, the 0xE code type is programmed to automatically branch from a starting address, then determine the addresses to write to. From there, you just have to tack in the amount to write to in order for it to do the job
    - It is known that cheat codes of this type usually do not work with nds-bootstrap currently
- DeadSkullzJr is working on a more comprehensive list of cheat code descriptions, this section will link to that once it is ready

### Demonstration and Distribution Titles:
Demonstration (Demo) titles are different from their retail counterparts in various ways. The obvious indicator being that the title at hand is a demo of what the retail version will be like, essentially it's a sneak peek at what is coming in the future when the full retail release comes. In the case of the Nintendo DS line, these titles often are marked as "Not for Resale" on the title labels, each demo also sports a different title ID compared to their retail counterparts, and on the back of the title's cartridge, a "Not for Resale" sticker is also present. These titles are usually just kiosk demos in promotional places in stores and what not.

Distribution titles are a slightly different situation in most cases, however demos can also fit the distribution label for a few titles in the library. Most cases distribution titles are just retail versions of the title(s) that are for display only or come from a promotional packaging of some sort. You can see "Not for Resale" labeled on these types of titles like you can with the demonstration titles. These can sometimes also be used in kiosks for the sake of letting other players test out the title. However knowing that these are essentially the same as their retail counterparts in most cases, they tend to have an extra identifier in the title ID on the label.

Example ID: `DIS-NTR-NTRJ-JPN`

`DIS` - Distribution


### Title Labels
Looking at the bottom of the title label shows the title ID along with other bits of information, for this example the following ID will be used:

- NTR-NTRJ-**XXX**

**XXX** represents the following:

- AUS - Australia
- CHN - China
- DEN - Denmark
- EUR - Europe (Multilingual)
- EUU - Europe (Dutch or Italian Only)
- FRA - France
- GER - Germany
- HOL - Netherlands
- ITA - Italian
- JPN - Japan
- KOR - Korea
- NOE - Europe (German Only)
- NOR - Norway
- RUS - Russia
- SPA - Spain
- UKV - United Kingdom
- USA - United States

The last letter of the title ID itself represents the language of the title. Using the last example's title ID:

- NTR-NTR**X**-JPN

**X** represents the following:

- A - World (doesn't count as only one thing used it)
- C - Chinese (Simplified)
- D - German
- E - American English
- F - French
- G - Greek
- H - Dutch
- I - Italian
- J - Japanese
- K - Korean
- M - Swedish
- N - Norwegian
- O - English (DSi Enhanced)
- P - European Multilingual
- Q - Danish
- R - Russian
- S - Spanish
- T - English (DSi Enhanced)
- U - Australian English
- V - British English
- W - Other languages (Varies)
- X - Other languages (Varies)
- Y - Other languages (Varies)
- Z - Other languages (Varies)

In terms of the system identifiers:

- NTR - Nitro - Nintendo DS
- TWL - Twilight - Nintendo DSi

### DSi Enhanced:

Games with "DSi Enhanced" functionality are games that take advantage of some aspect of the DSi's hardware while still remaining compatible with the DS Phat/Lite. These games are marked as `TWL` but still say "Nintendo DS" instead of "Nintendo DSi" on the label.

### DSiWare:

DSiWare are digital games and apps which we're downloadable from the DSi Shop, to then launch from the DSi System Menu.
    - Examples are:
        - Art Style Series
        - Flipnote Studio
        - G.G Series
        - The Legend of Zelda: Four Swords: Anniversary Edition
        - Nintendo DSi Browser
        - Shantae: Risky's Revenge
        - EA's Sudoku
    - Most DSiWare titles could also be downloaded via the 3DS eShop.
    - DSiWare titles are no longer downloadable, due to both shops being closed.

DSiWare can only be run from the internal system memory, unless when using **TW**i**L**ight Menu++ to launch them from the DSi/3DS SD Card or flashcard.
    - By using a flashcard, some DSiWare titles can be run on a DS or DS Lite console.

Every DSiWare/DSi system application (except for the System Menu) disables Slot-1 (aka the DS game card slot) access, preventing access to what's stored on the game card or even a flashcard.
    - This means developers could not add support for DS games as a way of accessing hidden features within DSiWare titles.
    - This also means homebrew apps (which would be run via exploited DSiWare apps) such as GodMode9**i** cannot dump/extract ROMs from DS game cards, unless when running via Unlaunch.