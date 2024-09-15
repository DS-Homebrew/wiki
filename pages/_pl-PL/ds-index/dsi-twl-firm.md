---
lang: pl-PL
layout: wiki
section: ds-index
category: reference
title: TWL_FIRM Nintendo DSi / Nintendo 3DS
description: Informacje o TWL_FIRM Nintendo DSi i Nintendo 3DS
---

### Przygotowywanie CFW
The main benefit of modding your DSi and 3DS families of systems is that you can unlock more possibilities with your consoles. Instalacja Custom Firmware jest łatwa, a w większości przypadków potrzebujesz tylko karty (micro)SD. Here are the best of guides for you to follow, with step-by-step instructions:

- [Poradnik Hakowania 3DS](https://3ds.hacks.guide)
    - Komenda Lightning: `mod 3ds`
    - TWLHelper command: `guide 3ds`
    - Kurisu command: `guide 3ds`
- [Poradnik Hakowania DSi](https://dsi.cfw.guide)
    - Lightning command: `mod dsi`
    - TWLHelper command: `guide dsi`
    - Kurisu command: `guide dsi`

### Szybkości CPU
The Nintendo DS shipped with a 67 MHz processor in 2004, and the Nintendo DSi shipped with a 133 MHz processor five years later. Most games of the Nintendo DS library were made before the Nintendo DSi came out, and as such the only processor available to them was 67 MHz. Some applications tied themselves to that clock speed and as a result, they will not work well with a higher clock speed. Most games, however, outperform the original with a higher clock speed.

nds-bootstrap has TWL Clock Speed as an option, but it will not try to adjust the ROM to work properly with the higher clock speed. To zadanie leży w rękach aplikacji, więc aplikacje nie działające z wyższymi taktowaniami NIE są problemem ze strony nds-bootstrap.

### Nintendo DSi Menu
In version 1.4.0, RSA signatures in the DS Game Card whitelist aren't verified. This is a vulnerability that can be exploited, and it allows you to take access over the ARM9 processor. It requires version 1.4.0 (it was patched in future versions and didn't exist in prior versions) and a flashcard with a modified ROM.

There is also a known glitch in the way the Nintendo DSi Menu calculates free space that can can cause an error when using the menu not from the original NAND, for more information see [hiyaCFW FAQ & Troubleshooting](../hiyacfw/faq#the-free-space-bug).

### Dostęp do Pola-1 Nintendo DSi & zablokowany
Slot-1 access is blocked when launching applications from the system menu, except if said applications are either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable Slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcards and you cannot dump ROMs to your SD card.

Before 1.4.0, the whitelist contained only two sections. In 1.4.0, they introduced a third section, which was made to block flashcards that got around the first two. The third section loads up to eight different sections of the ROM and checks them with a hash to see if the ROM has been tampered with. However, due to lacking any sanity check, this can be overflowed into the exception vector/interrupt address using a large enough value. Best of all, this runs on ARM7 (the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, advanced homebrew (such as Slot-1 dumpers) can be run.

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. The exploit never officially came out, due to Unlaunch being much simpler to install and having fewer requirements (just a way to get into homebrew) with the same advantages.

### Kamera Nintendo DSi
The Nintendo DSi Camera application has the ability to take pictures in the JPEG format and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether they're PC taken or PC edited, unless properly saved.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Nintendo DSi bootstage 2
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.

### RTCom
RTCom is the use of the 3DS's RTC to allow the ARM7 and ARM11 CPUs to communicate with each other, even while in TWL_FIRM. This allows 3DS features to be used while in DS(i) mode. This includes the circle pad's analog input, enabling widescreen, and having gyro support. Currently, the only public DS homebrew that make use of RTCom is certain builds of GBARunner2 that have support for the 3DS's gyro feature. To enable RTCom, you will need to use [TWPatch](https://gbatemp.net/threads/542694/).
