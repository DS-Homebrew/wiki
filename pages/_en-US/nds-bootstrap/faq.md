---
lang: en-US
layout: wiki
section: nds-bootstrap
category: other
title: FAQ & Troubleshooting
description: FAQ & Troubleshooting for nds-bootstrap
---

#### Why do I get a white screen when trying to load a game from SD Card?
- First, check the [the nds-bootstrap compatibility list](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) and make sure your game is compatible
- Try with all cheats disabled for that game as some cheats are not compatible with nds-bootstrap at the moment, you can use <kbd class="l">L</kbd> to disable all cheats for a game
- If the game you’re trying to launch is a DSi Enhanced game, then make sure that TWiLight Menu++ is set to use `DS Mode`
- If it worked before, delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`

#### Why are there issues with ROM loading, even if they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1.
There are also timing issues and AP measures (which most are already removed), both of which would cause the ROMs to not work properly.
To improve performance, nds-bootstrap also shrinks the game's heap in memory, which breaks some games, though both the forwarders and TWiLight Menu++ have a heap shrink blacklist to fix the non-working games broken by heap shrink.

#### Why use nds-bootstrap over a regular flashcard?
- Certain compatible ROMs are loaded into RAM, allowing for load times to be faster than even normal cartridges
- You can expand the VRAM memory bus to 32-bit
- Utilize the DSi's additional CPU speed
- Enhance your audio with 48khz.
- Use DSi mode, allowing for DSi features
- Using certain cartridges, you are able to use IR in your application
- nds-bootstrap is open source meaning devs can always update it to fix bugs and other things even if the company gets discontinued.
- the DS Memory Expansion card is emulated meaning games that require that accessory will work

### Donor ROMs
Most SDK5 games can be selected as a Donor ROM (which can be done via TWiLight Menu++). The Donor ROM's ARM7 binary is copied by nds-bootstrap and replaces the ARM7 binary for the game that it is trying to run. This allows certain and SDK5 games to boot and save.
