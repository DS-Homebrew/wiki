---
lang: en-US
layout: wiki
section: ds-index
category: reference
title: DS Emulators
description: Emulators for the DS
---

There are many emulators present for the DS and DSi. This page provides a comprehensive explanation on the many emulators bundled into TWiLight Menu++. 

### List of Supported Systems by TWiLight Menu++

| Format                  | Loader                                           | Extensions                             | Save file                                      |
| ----------------------- | ------------------------------------------------ | -------------------------------------- | ---------------------------------------------- |
| ARGV[^1]                | Native                                           | `.argv`                                |                                                |
| Atari 2600              | [StellaDS][stellads]                             | `.a26`                                 |                                                |
| Atari 5200              | [A5200DS][a5200ds]                               | `.a52`                                 |                                                |
| Atari 7800              | [A7800DS][a7800ds]                               | `.a78`                                 |                                                |
| Atari XEGS              | [XEGS-DS][xegs-ds]                               | `.xex`, `.atr`                         |                                                |
| DS                      | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`[^2]                     |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]     | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].pub`, `saves/[rom name].prv` |
| DSTWO Plugin            | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                                |
| Game Boy (Color)        | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                               |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], native[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                               |
| Game Gear               | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                            |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[rom name].srm`[^6]                           |
| Master System           | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`                           |
| Fast Video              | Coming Soon                                      | `.fv`                                  |                                                |
| NES/Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                               |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                                |
| Rocket Video            | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                                |
| SNES[^7]                | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`[^8]                           |
{:.table}

[^1]: Text files containing the path to a DS homebrew app and arguments to launch it with, see [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) for more info
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the cartridge
[^4]: When running in DSi Mode, it can use the DSP for better sound
[^5]: Requires a Slot-2 flashcard and thus only works on DS Phat and DS Lite
[^6]: jEnesis can only save when running from a flashcard, but PicoDriveTWL can save from SD and flashcard
[^7]: Only shown when using a flashcard, 3DS's internal SD card, or DSi with Unlaunch installed
[^8]: Can only save when running from a flashcard

- Footnotes -
{:footnotes}

The are just recommended emulators that are present in TWiLight Menu++. There are other emulators for these consoles (such as lolSnes, Gbaemu4ds, etc.)

### Other Emulators for the DS:

| Format                  | Loader                                           | Extensions                             | Save file                                      |
| ----------------------- | ------------------------------------------------ | -------------------------------------- | ---------------------------------------------- |
| Neo Geo                 | [neoDS][neods]                                   | `.neo`                                 | (unknown)                                      |

### Some Notes on Specific Emulators:

#### RAM Disks
- In order for **jEnesisDS, neoDS and SNEmulDS** to work on the DSi SD card, you'll have to use a RAM disk with nds-bootstrap.
    - RAM disk makers exist for jEnesisDS & SNEmulDS and are built into TWiLight Menu++. You will need to create your own RAM disk for neoDS. See [Creating RAM Disks](/twilightmenu/creating-ram-disks) on how to do so.
    - The reason why we use RAM disks is because these emulators' ARM7 hooks don't work properly.

#### Comparison between PicoDriveTWL and jEnesisDS

- **PicoDriveTWL**
    + Was made for DSi
    + Does not require nds-bootstrap RAM Disks
        + Saving is allowed on DSi SD cards
        + Quicker load times between TWiLight Menu++ to the emulator on the DSi SD card
    + Supports arguments
    - Limit is 2.5 MB on a **Flashcart**.
        + Takes advantage of the DSi extra RAM or DS Memory Pak to extend this limit
    - No sound emulation
    - Framerate is extremely choppy

- **jEnesisDS**
    - DS Mode
        - Requires nds-bootstrap's RAM disk to be used for DSi SD cards
        - Saving is unavailable for DSi SD cards
    - Takes a while to load
    - No argument support
    + Limit is 3 MB on all platforms (due to roms loading in RAM)
        - No DS Memory Pak or DSi Extended Memory support.
        + There is a patch for Sonic 3 & Knuckles that removes the multiplayer, getting the size count down.
    + Sound Emulation
    + Framerate is smooth


[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://www.gamebrew.org/wiki/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
[neods]: https://www.gamebrew.org/wiki/NeoDS
