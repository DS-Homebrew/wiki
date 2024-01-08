---
lang: uk-UA
layout: wiki
section: nds-bootstrap
title: Glossary
description: Glossary for nds-bootstrap
---

## Settings
These can be found within TWiLight Menu++'s per-game settings. Some of these options can also be changed in nds-bootstrap's in-game menu

### SDK ver
The version of the Software Development Kit (SDK) that was used to compile the ROM.

### Save Number
The save file for the game will have the `.savX` file extension where X is the given save number if the save number is not 0. This allows for up to 10 save files for the same ROM.

### Run in
The Mode which the ROM should be run. This affects the ARM9 CPU Speed and VRAM Mode options. Setting to DSi Mode for ROMs that do not support will likely have no effect.

### ARM9 CPU Speed
Changes the speed at which the ARM9 CPU runs. ROMs ran in DS Mode will use 67 Mhz (NTR) by default. This can be changed to 133 Mhz (TWL) to reduce slowdowns, but may also cause issues. ROMs ran in DSi Mode can only be set at 133 Mhz (TWL).

### VRAM Mode
Changes the mode of the Video Random Access Memory (VRAM) of the system. ROMs ran in DS Mode will use the DS VRAM Mode by default. This can be changed to DSi VRAM Mode but does not do anything and may cause visual issues. ROMs ran in DSi Mode can only be set at DSi VRAM Mode.

### Card Read DMA
Enables the uses of Direct Memory Access (DMA) for card reads. Having this setting on can speed up ROMs but may cause issues. More technical info can be found on the [DS Index](https://wiki.ds-homebrew.com/ds-index/retail-roms#card-read-dma).

### Ex. ROM space in RAM
If a game is small enough, it can be loaded into the system's RAM to speed up loading times. Turning this option on will increase the size limit for ROMs, but might break some.

### Direct Boot
Appears only for homebrew ROMs. Setting this to On will not use nds-bootstrap when launching the ROM. This is useful for homebrew ROMs that do not need or work with nds-bootstrap.

### Bootstrap
Change whether to run the ROM with either the Release or Nightly build of nds-bootstrap. Information on Nightly builds can be found on the [nds-bootstrap FAQ](https://wiki.ds-homebrew.com/nds-bootstrap/faq?faq=what-is-a-nightly-and-where-do-i-get-it)

### Screen Aspect Ratio
If on 3DS, the Screen Aspect Ratio can be changed from 4:3 (Default on DS/DSi) to 16:10. Only works if [widescreen is enabled](https://wiki.ds-homebrew.com/twilightmenu/playing-in-widescreen).
