---
lang: en-US
layout: wiki
section: ds-index
category: reference
title: Homebrew
description: Information about homebrew on the Nintendo DS
---

### Development

Developing Nintendo DS Homebrew typically uses devkitPro tools, such as devkitARM, libnds, and libfat. However, there is the possibility to branch out and use alternative software:

- **SD card libraries:** [DevkitPro](https://devkitpro.org/) recommends [libfat](https://github.com/devkitPro/libfat). We recommend using [libslim](https://github.com/DS-Homebrew/libslim/) instead, as it allows usage of different partitions, quicker speeds, and non-blocking
- **Graphics libraries:** We recommend using [easyGL2D](http://rel.phatcode.net/junk.php?id=117), which comes shipped with libnds. However, you can use [NightFox Lib](https://github.com/knightfox75/nds_nflib)
- **Entire toolchains:** We recommend using [devkitARM](https://devkitpro.org/wiki/Getting_Started) and [libnds](https://libnds.devkitpro.org/), as it includes DSi compatibility and has a larger ecosystem. However, if your target is exclusively flashcards on a Nintendo DS, feel free to use [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds)

### Flashcards

DS mode flashcards are a slot-1 method of running Nintendo DS applications. Flashcards have the advantages of keeping console files and portable files separate, the ability to be used without modding your system and are usable on DS Phat/Lite consoles. However, unlike modding the actual console, there are multiple flashcards on the market, each with different kernel requirements. The kernel you use is the most important.

[There is a **work in progress** flashcard index](https://nightyoshi370.github.io/mm-github-pages-starter/), which has kernels, firmware, reviews and purchase links.

### DLDI

Different SD card slots have different hardware (most of the time) and code written for one card won't necessarily work for another card. DLDI (short for Dynamically Linked Device Interface) attempts to solve this by having the SD card handling code patched in externally. Loaders like YSMenu, Wood R4 and TWiLight Menu++ can automatically DLDI patch a homebrew, but if you need to manually patch it in, feel free to use a [DLDI Patcher](https://www.chishm.com/DLDI#tools) depending on your device.

### Time bomb

In some flashcard kernels, an arbitrary expiration date (more commonly known as a time bomb) is coded in by the kernel developers as a way to get consumers to buy their latest product. The procedure for how this works is the following:

1. The flashcart is booted into, loads up the kernel file from the SD card without checking if it's the kernel intended by the developers.
1. Upon each time the kernel file from the SD card is loaded, it inspects the system date if it's past a certain date

If the second test comes out positive, the kernel will refuse to boot. This can be tested by setting your date to the latest value possible. However, the security is weak and the results aren't cached, meaning that there are ways to work around it:

If you want to use the default kernel that the flashcart manufacturers intended, the system clock could be set back in the device's System Settings application. Keep in mind, though, that this may break any game that relies on the system clock (such as Animal Crossing: Wild World).

However, the kernels that come with these cards are fundamentally flawed, and it is more preferable to outright replace them. Thankfully, 3rd party developers have made alternatives for us to use:

- [YSmenu - menu + game loader](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) - Although it does not have the advantage of a customizable all-in-one menu, the game loader has far better compatibility with support for action-replay cheats
- [TWiLight Menu++ with nds-bootstrap](../twilightmenu/installing-flashcard) - Although this has the customizable all-in-one menu, its B4DS mode (the mode that is used when it doesn't have the DSi capabilities) has weak compatibility, some games even requiring the memory expansion pak. However, this supports cheats
- [TWiLight Menu++ with YSmenu](../twilightmenu/installing-flashcard) - The customizable all-in-one menu with a high compatibility, but has a lack of cheat support

### ARGV support
ARGV is an information transmitter between two homebrew Nintendo DS applications. It can be used for forwarders or alternative menus.

- The homebrew needs to be programmed in order to take advantage of it. For example, GBARunner2, NesDS, and GameYob all have ARGV implementation
- There also needs to have a way to set the ARGV variables. TWiLight Menu++ and HBMenu allow setting ARGV arguments
