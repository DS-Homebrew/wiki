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

- **SD card libraries:** [DevkitPro](https://devkitpro.org/) recommends [libfat](https://github.com/devkitPro/libfat). [libslim](https://github.com/DS-Homebrew/libslim/) is recommended instead, as it allows usage of different partitions, quicker speeds, and non-blocking
- **Graphics libraries:** [easyGL2D](http://rel.phatcode.net/junk.php?id=117), which comes shipped with libnds, is recommended. However, [NightFox Lib](https://github.com/knightfox75/nds_nflib) can be used instead.
- **Entire toolchains:** [devkitARM](https://devkitpro.org/wiki/Getting_Started) and [libnds](https://libnds.devkitpro.org/) are recommended, as it includes DSi compatibility and has a larger ecosystem. However, [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds) is an option for flashcard-exclusive development.

To get started, [this GBATemp thread](https://gbatemp.net/threads/useful-resources-to-help-you-out-with-starting-to-make-nds-homebrew.580507/#post-9322674) has a lot of good resources for begginers. For more technical information on the DS(i), see [GBATEK](https://problemkaputt.de/gbatek-contents.htm).

### Flashcards

DS mode flashcards are a slot-1 method of running Nintendo DS applications. Flashcards have the advantages of keeping console files and portable files separate, the ability to be used without modding your system and are usable on DS Phat/Lite consoles. However, unlike modding the actual console, there are multiple flashcards on the market, each with different kernel requirements. The kernel you use is the most important.

[There is a **work in progress** flashcard index](https://nightyoshi370.github.io/mm-github-pages-starter/), which has kernels, firmware, reviews and purchase links.

### DLDI

Different SD card slots have different hardware (most of the time) and code written for one card won't necessarily work for another card. DLDI (short for Dynamically Linked Device Interface) attempts to solve this by having the SD card handling code patched in externally. Loaders like YSMenu, Wood R4 and TWiLight Menu++ can automatically DLDI patch a homebrew, but if you need to manually patch it in, feel free to use a [DLDI Patcher](https://www.chishm.com/DLDI#tools) depending on your device.

### Time bomb

In some flashcard kernels, an arbitrary expiration date (more commonly known as a time bomb) is coded in by the kernel developers as a way to get consumers to buy their latest product. The procedure for how this works is the following:

1. The flashcard is booted into and loads up the kernel file from the SD card without checking if it's the kernel intended by the developers
1. Each time the kernel file from the SD card is loaded, it checks if the system date is past a certain date

If the second test comes out positive, the kernel will refuse to boot. This can be tested by setting your date to the latest value possible. However, the security is weak and the results aren't cached, meaning that there are ways to work around it:

If you want to use the default kernel that the flashcard manufacturers intended, the system clock can be set back in the device's System Settings application. Keep in mind, though, that this may break any game that relies on the system clock (such as Animal Crossing: Wild World).

However, the kernels that come with these cards are fundamentally flawed and it is preferable to outright replace them. Thankfully, 3rd party developers have made alternatives you can use:

- [YSmenu - menu + game loader](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) - Although it does not have the advantage of a customizable all-in-one menu, the game loader has far better compatibility with support for action-replay cheats
- [TWiLight Menu++ with nds-bootstrap](/twilightmenu/installing-flashcard) - Has a customizable all-in-one menu and supports cheats, but its B4DS mode (the mode used when it doesn't have the DSi's capabilities) has weak compatibility, some games even requiring the Memory Expansion Pak
- [TWiLight Menu++ with YSmenu](/twilightmenu/installing-flashcard) - Customizable all-in-one menu with high compatibility, but lacks cheat support

### ARGV support
ARGV is an information transmitter between two homebrew Nintendo DS applications. It can be used for forwarders or alternative menus.

- The homebrew needs to be programmed in order to take advantage of it. For example, GBARunner2, NesDS, and GameYob all have ARGV implementation
- There also needs to have a way to set the ARGV variables. TWiLight Menu++ and HBMenu allow setting ARGV arguments

### Exploits
Below is a list of all types of exploits for the DSi.

#### NTR/NDS Mode Exploits
These are ARM9 exploits that takes over a NDS mode cartridge. These type of exploits are very limited since there's no SD or NAND access. They can be used to run a small payload. These exploits are almost useless.

#### DSi Enhanced Exploits
These are ARM9 exploits that take over a enhanced DSi mode cartridge. Unfortunately they don't have SD or NAND access, so you cannot use the SD card or downgrade. They can be used to gather console information and maybe find other vulnerabilities. These exploits can also be used for dslink, which can load homebrew apps in DSi-Mode via internet connections.

#### DSiWare Exploits
These are ARM9 exploits that take over a DSiWare title. They run in the same context that Enhanced games do, but with the addition of SD and NAND access. This exploits are valuable since can be used to downgrade the console firmware to older versions. However this doesn't allow any cartridge access.

#### ARM7 Exploits
These exploits take over the ARM7 processor. In the DSi these processor handles critical operations and cryptography operations, among other things. These exploits are extremely rare and there's no concrete targets. The DSi menu (The Launcher) is known to run in the ARM7 context. At the moment there's only one exploit known, RocketLauncher.

#### Bootcode Exploits
These exploits gain full SCFG_EXT access rights immediately after power-up (before even starting the launcher). These exploits are significantly rare and concrete targets can be the launcher's `title.tmd`. At the moment, Unlaunch is the only known exploit for this type of exploit.

