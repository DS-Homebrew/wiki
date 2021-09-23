---
lang: he-IL
layout: wiki
section: ds-index
category: reference
title: הומברו
description: מידע לגבי הומברו על הנינטנדו DS
---

### פיתוח
Developing Nintendo DS homebrew typically uses devkitPro tools, such as devkitARM, libnds, and libfat. אך קיימת אפשרות להשתמש בתוכנות חלופיות:

- **SD card libraries:** [libfat](https://github.com/devkitPro/libfat) is included in libnds and generally recommended, [libslim](https://github.com/DS-Homebrew/libslim/) can sometimes work better but is unstable at times
- **Graphics libraries:** [easyGL2D](http://rel.phatcode.net/junk.php?id=117), which comes shipped with libnds, is recommended, however [NightFox Lib](https://github.com/knightfox75/nds_nflib) can be used instead
- **Entire toolchains:** [devkitARM](https://devkitpro.org/wiki/Getting_Started) and [libnds](https://libnds.devkitpro.org/) are recommended, as it includes DSi compatibility and has a larger ecosystem, however [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds) is an option for flashcard-exclusive development

To get started, [this GBAtemp thread](https://gbatemp.net/threads/useful-resources-to-help-you-out-with-starting-to-make-nds-homebrew.580507/#post-9322674) has a lot of good resources for begginers. For more technical information on the DS(i), see [GBATEK](https://problemkaputt.de/gbatek-contents.htm).

### Flashcards
DS mode flashcards are a Slot-1 method of running Nintendo DS applications. Flashcards have the advantages of keeping console files and portable files separate, the ability to be used without modding your system and are usable on DS Phat/Lite consoles. However, unlike modding the actual console, there are multiple flashcards on the market, each with different kernel requirements. The kernel you use is the most important.

### DLDI
Different SD card slots have different hardware (most of the time) and code written for one card won't necessarily work for another card. DLDI (short for Dynamically Linked Device Interface) attempts to solve this by having the SD card handling code patched in externally. Loaders like YSMenu, Wood R4, and TWiLight Menu++ can automatically DLDI patch a homebrew, but if you need to manually patch it in, you can use a [DLDI Patcher](https://www.chishm.com/DLDI#tools) on a computer.

### Time bomb
In some flashcard kernels, an arbitrary expiration date (more commonly known as a time bomb) is coded in by the kernel developers as a way to get consumers to buy their latest product. The procedure for how this works is the following:

1. The flashcard is booted into and loads up the kernel file from the SD card without checking if it's the kernel intended by the developers
1. Each time the kernel file from the SD card is loaded, it checks if the system date is past a certain date

If the second test comes out positive, the kernel will refuse to boot. This can be tested by setting your date to the latest value possible. However, the security is weak and the results aren't cached, meaning that there are ways to work around it:

If you want to use the default kernel that the flashcard manufacturers intended, the system clock can be set back in the device's System Settings application. Keep in mind, though, that this may break any game that relies on the system clock (such as Animal Crossing: Wild World).

However, the kernels that come with these cards are fundamentally flawed and it is preferable to outright replace them. Thankfully, 3rd party developers have made alternatives you can use:

- [YSmenu - menu + game loader](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) - Although it does not have the advantage of a customizable all-in-one menu, the game loader has far better compatibility with support for action-replay cheats
- [TWiLight Menu++ with nds-bootstrap](../twilightmenu/installing-flashcard) - Has a customizable all-in-one menu and supports cheats, but its B4DS mode (the mode used when it doesn't have the DSi's capabilities) has weak compatibility, some games even requiring the Memory Expansion Pak
- [TWiLight Menu++ with YSmenu](../twilightmenu/installing-flashcard) - Customizable all-in-one menu with high compatibility, but lacks cheat support

### ARGV support
ARGV is an information transmitter between two homebrew Nintendo DS applications. It can be used for forwarders or alternative menus.

- The homebrew needs to be programmed in order to take advantage of it. For example, GBARunner2, NesDS, and GameYob all have ARGV support
- There also needs to have a way to set the ARGV variables. TWiLight Menu++ and HBMenu allow setting ARGV arguments
