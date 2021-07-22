---
lang: en-US
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Information about the Nintendo DSi and the Nintendo 3DS's TWL_FIRM
---

### Setting up CFW
While most of the benefits of Custom Firmware are for the Nintendo DSi and the Nintendo 3DS family of systems, it allows you to unlock your consoles possibilities. Installing Custom Firmware is quite easy, and in most cases, all you need is a (micro)SD card. We have the best of guides for you to follow, with step-by-step instructions.

- [3DS Hacking Guide](https://3ds.hacks.guide)
   - Lightning command: `mod 3ds`
   - Kuriisu command: `guide 3ds`
- [DSi Hacking Guide](https://dsi.cfw.guide)
   - Lightning command: `mod dsi cfw`
   - Kuriisu command: `guide dsi`

### CPU speeds
The Nintendo DS shipped with a 67 MHz processor in 2004. The Nintendo DSi shipped with an 133 MHz processor in 2009. Most games of the Nintendo DS library were made before the Nintendo DSi came out, and as such the only processor available to them was 67 MHz. Some applications tied themselves to that clock speed and as a result, would not work well with a higher clock speed. Most games, however, would outperform the original with a higher clock speed.

nds-bootstrap has TWL Clock Speed as an option, but it will not try to adjust the ROM to work with the higher clock speed. That's on the application itself, and applications not working with a higher clock speed is NOT a bug on the nds-bootstrap end.

### Nintendo DSi system menu
The Nintendo DSi system menu uses a signed 32-bit integer to determine the amount of free space on the device. Using a device source that goes above the 32-bit integer limit, this counter is overflowed into a negative number, which crashes into an "An error has occurred" black screen.

The ranges that make it overflow is determined by pairs of two. For example, 1-2 GB of free space is allowed while 3-4 isn't. 5-6 GB of free space is allowed while 7-8 isn't.

This crash will never occur if the system menu is launched from an actual NAND chip (since it maxes out at 128 MB), but a redirection system (such as hiyaCFW) would cause this to trigger. Fortunately, this bug can easily by fixed by placing dummy files to set the counter at a positive number. hiyaCFW will automatically do this for you in the latest version.

In version 1.4.0, RSA signatures in the DS cart whitelist aren't verified. There is an exploit regarding a vulnerability in the Nintendo DSi flashcard whitelist that allows you to take access over the ARM9 processor, It requires version 1.4.0 (it was patched in future versions and didn't exist in prior versions) and a flashcard with a modified ROM.

### Nintendo DSi Slot-1 access & blockout
Slot-1 access is blocked when launching applications from the system menu, except if said applications is either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcards and you cannot dump ROMs to your SD card.

The flashcard white list is checked via RSA signatures are contained via RSA keys on every firmware expect 1.4.0. This means that people can white list their own carts

Before 1.4.0, the white list used to contain only two sections. In 1.4.0, they've introduced a third section which was made to block flashcards that got around the first two. The third section loads up to eight different section of the rom and checks them with a hash to see if the rom has been tampered with. However, due to the forgetfulness of putting any sanity check, we can overflow into the exception vector / interrupt address using a large enough value. Best of all, this runs on ARM7 (aka the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, we can run advanced homebrew (such as Slot-1 dumpers & external slot-1 dumpers)

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. Also, the exploit never officially came out, due to Unlaunch being much simpler to install and having less requirements (just a way to get into homebrew) with the same advantages.

### Nintendo DSi Camera
The Nintendo DSi Camera application has the ability to take pictures in the JPEG and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether its PC taken or PC edited.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Nintendo DSi bootstage 2
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.

### RTCom
RTCom is the use of the 3DS's RTC to allow the ARM7 and ARM11 CPUs to communicate with each other, even while in TWL_FIRM. This allows 3DS features to be used while in DS(i) mode. This includes the circle pad's analog input, enabling widescreen, and having gyro support. Currently, the only public ds homebrew that make use of RTCom is certain builds of GBARunner2 that have support for the 3DS's gyro feature. To enable RTCom, you will need to use [TWPatch](https://gbatemp.net/threads/542694/).
