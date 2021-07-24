---
lang: en-US
layout: faq
section: nds-bootstrap
title: FAQ & Troubleshooting
long_title: nds-bootstrap FAQ & Troubleshooting
description: FAQ & Troubleshooting for nds-bootstrap
---

#### Why do I get a white screen when trying to load a game from SD card?
- First, check the [the nds-bootstrap compatibility list](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) and make sure your game is compatible
- Try with all cheats disabled for that game as some cheats are not compatible with nds-bootstrap at the moment, you can use <kbd class="l">L</kbd> to disable all cheats for a game
- If it worked before, delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`

#### nds-bootstrap troubleshooting
If you get issues with using the latest version of nds-bootstrap, here's how you could troubleshoot it.

1. Run the game with different settings, including changing the ARM9 CPU Speed, DS/DSi Mode, sound quality, Card Read DMA, etc
2. Delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`
3. It's probably not that big of an issue; ask in the [Discord server](https://discord.gg/yD3spjv)

If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on GitHub. Check the closed issues too in case we had one issue closed in preference a different one. If it doesn't have any GitHub issue attached to it, go ahead and make a new one.

Also, make sure you add it to the [compatibility list](https://wiki.ds-homebrew.com/nds-bootstrap/testing) on Google Sheets.

#### Why are there issues with ROM loading, even though they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1.
There are also timing issues and AP measures (which most are already removed), both of which would cause the ROMs to not work properly.

#### Why use nds-bootstrap over a regular flashcard?
- Certain compatible ROMs are loaded into RAM, allowing for load times to be faster than even normal cartridges
- You can expand the VRAM memory bus to 32-bit
- Utilize the DSi's additional CPU speed, allowing for better performance in some games
- Enhance your audio with 48 kHz
- Use DSi mode, allowing for DSi features
- Using certain cartridges, you are able to use IR in your application
- nds-bootstrap is open source, meaning developers can always update it to fix bugs and other things, even if the project gets discontinued
- The DS Memory Expansion Pak is emulated, meaning games that require that accessory will work
- Swap top and bottom screens in compatible games for more comfortable gameplay, or on systems with a broken or removed screen

#### Donor ROMs
Most SDK5 games can be selected as a Donor ROM (which can be done via TWiLight Menu++). The Donor ROM's ARM7 binary is copied by nds-bootstrap and replaces the ARM7 binary for the game that it is trying to run. This allows certain and SDK5 games to boot and save.

#### What is a nightly and where do I get it?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added.
You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time.
Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

For more info on cheats, look [here](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

