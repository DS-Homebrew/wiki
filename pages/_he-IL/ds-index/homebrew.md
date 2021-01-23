---
lang: he-IL
layout: wiki
section: ds-index
category: reference
title: הומברו
description: Information about homebrew on the Nintendo DS
---

### פיתוח

Developing Nintendo DS Homebrew typically uses devkitPro tools, such as devkitARM, libnds, and libfat. However, there is the possibility to branch out and use alternative software:

- **SD Card libraries:** DevkitPro recommends libfat. We recommend using libslim instead, as it allows usage of different partitions, quicker speeds, and non-blocking
- **Graphic Library:** We recommend using easyGL2D, which comes shipped with libnds. However, you can use NightFox Lib
- **Entire Toolchains:** We recommend using devkitARM and libnds, as it includes DSi compatibility and has a larger ecosystem. However, if your target is exclusively flashcards on a Nintendo DS, feel free to use ToolchainGenericDS

### Flashcards

DS mode flashcards are a slot-1 method of running Nintendo DS applications. Flashcards have the advantages of keeping console files and portable files separate, the ability to be used without modding your system and are usable on DS Phat/Lite consoles. However, unlike modding the actual console, there are multiple flashcards on the market, each with different kernel requirements. The kernel you use is the most important.

[There is a **work in progress** flashcard index](https://nightyoshi370.github.io/mm-github-pages-starter/), which has kernels, firmware, reviews and purchase links.

### DLDI

Different SD card slots have different hardware (most of the time) and code written for one card won't necessarily work for another card. DLDI (short for Dynamically Linked Device Interface) attempts to solve this by having the SD card handling code patched in externally. Loaders like YSMenu, Wood R4 and TWiLight Menu++ can automatically DLDI patch a homebrew, but if you need to manually patch it in, feel free to use a [DLDI Patcher](https://www.chishm.com/DLDI#tools) depending on your device.

### Time Bomb

A time bomb is a expiration date on flashcard kernels that manufacturers use to force users to buy a new card. Once your system clock goes beyond a certain date, the kernel will refuse to boot past the expiration screen. Thankfully, a flag is not set anywhere and it's handled in the flashcard firmware, giving us two options for workarounds:

- Since it relies on the system clock, you can set back the date. This will break any game that uses your system clock, but it will allow you to use the default kernel.
- Since it relies on the kernel and not the firmware, you can switch to an alternative kernel. There are two options available:
  - [YSmenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) -- The menu is quite ugly and only displays `.nds` files, but it has far better game support, cheat support and no memory pak requirement
  - [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu) -- This is useful if you'd like to have all your ROMs from various consoles in the same menu, there are two ways to run DS games with TWiLight Menu++:
    - With B4DS: Requires a Memory Expansion Pak for extended game compatibility and does not support cheats. But works on all flashcards that TWiLight Menu++ does
    - With YSMenu: Gets the compatibility benefits of YSMenu with the better menu of TWiLight Menu++, however, cheats are not supported currently

We recommend YSMenu, with TWiLight Menu++ if you prefer it, due to the higher compatibility, and lack of need for a Memory Expansion Pak. If you want to setup YSMenu, DeadSkullzJr has made a [Dropbox repo](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) with all the primary boot kernels set up for your flashcard. All it requires is a drag and drop to your SD card root and you have completed. Instructions on how to install TWiLight Menu++ are [on the flashcard install page](../twilightmenu/installing-flashcard).

In order to test whether your flashcard has a time bomb, set the date on your system to the latest value possible and launch the flashcard.

### ARGV Support
ARGV is an information transmitter between two homebrew Nintendo DS applications. It can be used for forwarders or alternative menus.

- The homebrew needs to be programmed in order to take advantage of it. For example, GBARunner2, NesDS, and GameYob all have ARGV implementation
- There also needs to have a way to set the ARGV variables. TWiLight Menu++ and HBMenu allow setting ARGV arguments
