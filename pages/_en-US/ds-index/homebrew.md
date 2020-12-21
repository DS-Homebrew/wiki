---
lang: en-US
layout: wiki
section: ds-index
title: Homebrew
description: The complete guide to modding the Nintendo DS
---

### Development

Developing Nintendo DS Homebrew typically uses devKitPro tools, such as devKitARM, libnds, and libfat. However, there is the possibility to branch out and use alternative software:

- **SD Card libraries:** devKitPro recommends libfat. We recommend using libslim instead, as it allows usage of different partitions, quicker speeds and non-blocking.
- **Graphic Library:** We recommend using easyGL2D, which comes shipped with libnds. However, you could use NightFox Lib.
- **Entire Toolchains:** We recommend using devKitARM and libnds, as it includes DSi compatibility and has a larger ecosystem. However, if your target is exclusively flashcarts on a Nintendo DS, feel free to use ToolchainGenericDS.

### Flashcards

DS mode flashcards are a slot-1 method of running Nintendo DS applications. Flashcarts have the advantages of keeping console files and portable files separate, the ability to be used without modding your system and are usable on DS Phat/Lite consoles. However, unlike modding the actual console, there are multiple flashcarts on the market, each with different kernel requirements. The kernel you use is the most important.

[There is a **work in progress** flashcart index](https://nightyoshi370.github.io/mm-github-pages-starter/), which has kernels, firmware, reviews and purchase links.

### DLDI

Different SD card slots have different hardware (most of the time) and code written for one card won't necessarily work for another card. DLDI (short for Dynamically Linked Device Interface) attempts to solve this by having the SD card handling code patched in externally. Loaders like YSMenu, Wood R4 and TWiLight Menu++ can automatically DLDI patch a homebrew, but if you need to manually patch it in, feel free to use a [DLDI Patcher](https://www.chishm.com/DLDI#tools) depending on your device.

### Time Bomb

A time bomb is a expiration date on flashcart kernels that manufacturers use to force users to buy a new card. Once your system clock goes beyond a certain date, the kernel will refuse to boot past the expiration screen. Thankfully, a flag is not set anywhere and it's handled in the flashcart firmware, giving us two options for work arounds:

- Since it relies on the system clock, you could set back the date. This will break any game that uses your system clock, but it will allow you to use the default kernel.
- Since it relies on the kernel and not the firmware, you could switch to an alternative kernel. There are two options available:
  - [YSmenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) -- The menu is quite ugly and only displays `.nds` files, but it has far better game support, cheat support and no memory pak requirement.
  - [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu) with B4DS -- This is useful if you'd like to have all your ROMs in the same menu that you could launch NES, GBA and other console titles too. However, it does require a Memory Expansion Pak for extended game compatibility and does not support cheats.

We recommend YSMenu due to the higher compatibility, cheats and lack of need for a Memory Expansion Pak. If you want to setup YSMenu, DeadSkullzJr has made a [Dropbox repo](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) with all the primary boot kernels set up for your flashcart. All it requires is a drag and drop to your SD card root and you have completed.
  - You could still lanuch into TWiLight Menu++ for an all-in-one menu for emulators, but you can't launch into YSMenu from TWiLight Menu++.

In order to test whether your flashcart has a timebomb, set the date on your system to the latest value possible and launch the flashcart.

### ARGV Support
ARGV is an information transmitter between two homebrew Nintendo DS applications. It could be used for forwarders or alternative menus.

- The homebrew needs to be programmed in order to take advantage of it. For example, GBARunner2, NesDS and GameYob all have ARGV implementation
- There also needs to have a way to set the ARGV variables. TWiLight Menu++ and HBMenu allow setting ARGV arguments
