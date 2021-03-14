---
lang: hu-HU
layout: wiki
section: nds-bootstrap
category: other
title: GYIK & hibaelhárítás
description: GYIK & hibaelhárítás az nds-bootstrap-hez
---

#### Why do I get a white screen when trying to load a game from SD card?
- Először ellenőrizd [az nds-bootstrap kompatibilitás listát ](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) legyél biztos benne, hogy a játékod kompatiblis
- Próbáld meg az összes csalás kikapcsolásával annál a játéknál, mert néhány csalás nem kompatibilis az nds-bootstrap-pel jelenleg; az <kbd class="l">L</kbd> gombot tudod használni egy játék összes csalásának kikapcsolásához
- Ha a betölteni kívánt játék egy DSi kibővített játék, akkor ellenőrizd, hogy a TWiLight Menu++ `DS mód`-ra van-e állítva
- Ha korábban működött, töröld a `fatTable` és a `patchOffsetCache` mappát az `sd:/_nds/nds-bootstrap/` könyvtárból

#### Miért vannak problémák a ROM betöltéssel, ha natívan futnak?
Az nds-bootstrap a ROM funkciókat patcheli, hogy fussanak SD kártyáról, és a ROM hardkódolt a Slot-1 olvasásra. There are also timing issues and AP measures (which most are already removed), both of which would cause the ROMs to not work properly. To improve performance, nds-bootstrap also shrinks the game's heap in memory, which breaks some games, though both the forwarders and TWiLight Menu++ have a heap shrink blacklist to fix the non-working games broken by heap shrink.

#### Why use nds-bootstrap over a regular flashcard?
- Certain compatible ROMs are loaded into RAM, allowing for load times to be faster than even normal cartridges
- You can expand the VRAM memory bus to 32-bit
- Utilize the DSi's additional CPU speed
- Enhance your audio with 48 kHz
- Use DSi mode, allowing for DSi features
- Using certain cartridges, you are able to use IR in your application
- nds-bootstrap is open source meaning devs can always update it to fix bugs and other things even if the company gets discontinued
- The DS Memory Expansion Pak is emulated meaning games that require that accessory will work

#### Donor ROM
Most SDK5 games can be selected as a Donor ROM (which can be done via TWiLight Menu++). The Donor ROM's ARM7 binary is copied by nds-bootstrap and replaces the ARM7 binary for the game that it is trying to run. This allows certain and SDK5 games to boot and save.

#### What is a nightly and where do I get it?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time. Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

#### Is there anything else I should know about cheats?
You can set heap shrink to `Hi` in settings for slightly better cheat support.

For more info on cheats, look [here](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### nds-bootstrap troubleshooting
If you get issues with using the latest version of nds-bootstrap, here's how you could troubleshoot it.

1. Run everything in 67 MHz, DS Mode, with 32 kHz of audio, etc. Basically, keep everything to DS settings. Don't try to improve it with DSi stuff
2. Delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`
3. It's probably not that big of an issue; ask in the [Discord server](https://discord.gg/yD3spjv)

If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on GitHub. Check the closed issues too in case we had one issue closed in preference a different one. If it doesn't have any GitHub issue attached to it, go ahead and make a new one.

Also, make sure you add it to the [compatibility list](https://wiki.ds-homebrew.com/nds-bootstrap/testing) on Google Sheets.
