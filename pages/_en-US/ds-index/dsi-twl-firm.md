---
lang: en-US
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Information about the Nintendo DSi and the Nintendo 3DS's TWL_FIRM
---

### CPU speeds

The Nintendo DSi shipped with a 133 MHz processor five years following the initial Nintendo DS's release, which only came with a 67 MHz processor. However, due to most applications reliance on the old clock speed, there are numerous glitches that could occur. For the games that do not have any glitches, though, utilizing a loader that does not forced the CPU in an underclocked (such as TWiLight Menu++'s Slot-1 Launcher or nds-boostrap) could provide a nice speed boost.

Since it is dependent on the title, this is available as an option for the two launchers above to those who would like to experiment. However, do note that our implementation is not creating a bug but rather exposing a bug originally found within the game.

### Nintendo DSi Menu
In version 1.4.0, RSA signatures in the DS Game Card whitelist aren't verified. This is a vulnerability that can be exploited to gain control over the ARM9 processor. It requires version 1.4.0 (it was patched in future versions and didn't exist in prior versions) and a flashcard with a modified ROM.

There is also a known glitch in the way the Nintendo DSi Menu calculates free space that can can cause an error when using the menu not from the original NAND, for more information see [hiyaCFW FAQ & Troubleshooting](../hiyacfw/faq#the-free-space-bug).

### Nintendo DSi Slot-1 access & blockout
Slot-1 access is blocked when launching applications from the system menu, except if said applications are either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable Slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcards and you cannot dump ROMs to your SD card.

Before 1.4.0, the whitelist contained only two sections. In 1.4.0, they introduced a third section, which was made to block flashcards that got around the first two. The third section loads up to eight different sections of the ROM and checks them with a hash to see if the ROM has been tampered with. However, due to lacking any sanity check, this can be overflowed into the exception vector/interrupt address using a large enough value. Best of all, this runs on ARM7 (the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, advanced homebrew (such as Slot-1 dumpers) can be run.

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. The exploit never officially came out, due to Unlaunch being much simpler to install and having fewer requirements (just a way to get into homebrew) with the same advantages.

### Nintendo DSi Camera
The Nintendo DSi Camera application has the ability to take pictures in the JPEG format and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether they're PC taken or PC edited, unless properly saved.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Nintendo DSi bootstage 2
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.

### RTCom
RTCom is the use of the 3DS's RTC to allow the ARM7 and ARM11 CPUs to communicate with each other, to enable additional features introduced in the Nintendo 3DS while in TWL_FIRM. These featured include remapping the circle pad to the touch screen, stretching the top screen display (allowing widescreen) and gyro support (currently only implemented in specific GBARunner2 builds) Enabling this requires [TWPatch](https://gbatemp.net/threads/542694/).
