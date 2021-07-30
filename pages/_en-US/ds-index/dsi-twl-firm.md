---
lang: en-US
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Information about the Nintendo DSi and the Nintendo 3DS's TWL_FIRM
---

### Setting up CFW
While most of the benefits of Custom Firmware are for the Nintendo DSi and the Nintendo 3DS families of systems, it allows you to unlock your consoles possibilities. Installing Custom Firmware is quite easy, and in most cases, all you need is a (micro)SD card. We have the best of guides for you to follow, with step-by-step instructions.

- [3DS Hacking Guide](https://3ds.hacks.guide)
   - Lightning command: `mod 3ds`
   - Kuriisu command: `guide 3ds`
- [DSi Hacking Guide](https://dsi.cfw.guide)
   - Lightning command: `mod dsi cfw`
   - Kuriisu command: `guide dsi`

### CPU speeds
The Nintendo DS shipped with a 67 MHz processor in 2004, and the Nintendo DSi shipped with an 133 MHz processor five years later. Most games of the Nintendo DS library were made before the Nintendo DSi came out, and as such the only processor available to them was 67 MHz. Some applications tied themselves to that clock speed and as a result, would not work well with a higher clock speed. Most games, however, would outperform the original with a higher clock speed.

nds-bootstrap has TWL Clock Speed as an option, but it will not try to adjust the ROM to work properly with the higher clock speed. That's on the application itself, and applications not working with a higher clock speed is NOT a bug on the nds-bootstrap end.

### Nintendo DSi Menu
In version 1.4.0, RSA signatures in the DS game card whitelist aren't verified. This is a vulnerability that can be exploited, and it allows you to take access over the ARM9 processor. It requires version 1.4.0 (it was patched in future versions and didn't exist in prior versions) and a flashcard with a modified ROM.

There is also a known glitch in the way the Nintendo DSi Menu calculates free space that can can cause an error when using the menu not from the original NAND, for more information see the [hiyaCFW troubleshooting page](/hiyacfw/troubleshooting#the-free-space-bug).

### Nintendo DSi Slot-1 access & blockout
Slot-1 access is blocked when launching applications from the system menu, except if said applications is either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable Slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcards and you cannot dump ROMs to your SD card.

Before 1.4.0, the whitelist contained only two sections. In 1.4.0, they introduced a third section, which was made to block flashcards that got around the first two. The third section loads up to eight different sections of the ROM and checks them with a hash to see if the ROM has been tampered with. However, due to the forgetfulness of putting in any sanity check, we can overflow into the exception vector / interrupt address using a large enough value. Best of all, this runs on ARM7 (aka the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, we can run advanced homebrew (such as Slot-1 dumpers & external Slot-1 dumpers).

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. The exploit never officially came out, due to Unlaunch being much simpler to install and having fewer requirements (just a way to get into homebrew) with the same advantages.

### Nintendo DSi Camera
The Nintendo DSi Camera application has the ability to take pictures in the JPEG and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether it's PC taken or PC edited, unless properly saved.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Nintendo DSi bootstage 2
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.

### RTCom
RTCom is the use of the 3DS's RTC to allow the ARM7 and ARM11 CPUs to communicate with each other, even while in TWL_FIRM. This allows 3DS features to be used while in DS(i) mode. This includes the circle pad's analog input, enabling widescreen, and having gyro support. Currently, the only public DS homebrew that make use of RTCom is certain builds of GBARunner2 that have support for the 3DS's gyro feature. To enable RTCom, you will need to use [TWPatch](https://gbatemp.net/threads/542694/).
