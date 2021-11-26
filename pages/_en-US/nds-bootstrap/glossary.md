---
lang: en-US
layout: wiki
section: nds-bootstrap
title: Glossary
description: Glossary for nds-bootstrap
---

## Settings
These can be found within TWiLight Menu++'s per-game settings.

### SDK ver
The version of the Software Development Kit (SDK) that was used to compile the ROM. Games that require Donor ROMs must have the same SDK version as the Donor ROM.

### Save Number
The save file for the game will have the `.savX` file extension where X is the given save number if the save number is not 0. This allows for up to 10 save files for the same ROM.

### Run in
The Mode which the ROM should be run. This affects the ARM9 CPU Speed and VRAM Mode options. Setting to DSi Mode for games that do not support it will not do anything.

### ARM9 CPU Speed
Changes the speed at which the ARM9 CPU runs. ROMs ran in DS Mode will use 67 Mhz (NTR) by default. This can be changed to 133 Mhz (TWL) but may cause issues. Games ran in DSi Mode can only be set at 133 Mhz (TWL).

### VRAM Mode
Changes the mode of the Video Random Access Memory (VRAM) of the system. ROMs ran in DS Mode will use the DS VRAM Mode by default. This can be changed to DSi VRAM Mode but may cause issues. Games ran in DSi Mode can only be set at DSi VRAM Mode.

### Card Read DMA
Enables the uses of Card Read Direct Memory Access. Having this setting on can speed up games but may cause issues. More technical info can be found on the [DS Index](https://wiki.ds-homebrew.com/ds-index/retail-roms#card-read-dma).

### SWI Halt Hook
Changes whether Software Interrupt (SWI) Halts are Hooked or not. Having it set to On can speed up loads, but might cause issues. 

### Ex. ROM space in RAM
Extends the ROM space in RAM from 24 MB to 28 MB, for SDK5 games 16 MB to 28 MB. Can provide faster loads but breaks a few games that fit in RAM.

### Bootstrap
Change whether to run the ROM with either the Release or Nightly build of nds-bootstrap. Nightly builds are not guaranteed to be in a final release.

### Screen Aspect Ratio
If on 3DS, the Screen Aspect Ratio can be changed from 4:3 (Default on DS/DSi) to 16:10. Only works if [widescreen is enabled](https://wiki.ds-homebrew.com/twilightmenu/playing-in-widescreen).