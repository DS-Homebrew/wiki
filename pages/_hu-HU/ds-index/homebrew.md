---
lang: hu-HU
layout: wiki
section: ds-index
title: Homebrew
description: Minden a DS moddolásról
---

### Fejlesztés

Nintendo DS Homebrew fejlesztése tipikusan devkitPro eszközöket igényel, mint például devkitARM, libnds, és libfat. Azonban lehetőség van más ágakról alternatív szoftvert használni:

- **SD kártya könyvtárak:** A DevkitPro a libfat-et ajánlja. Mi a libslim-et ajánljuk helyette, mert lehetővé teszi a használatát különböző partícióknak, gyorsabb sebességű, és nem blokkoló
- **Grafikus könyvtár:** Mi az easyGL2D-t ajánljuk, ami a libnds-sel érkezik. Azonban használhatod a NightFox Lib-et is
- **Teljes eszköztárak:** Mi a devkitARM-ot és a libnds-t ajánljuk, ami tartalmazza a DSi kompatibilitást és nagyobb ökoszisztémája van. Azonban ha a cél kizárólag flashcard a Nintendo DS-en, nyugodtan használhatod a ToolchainGenericDS-t

### Flashkártyák

A DS mód flashcard-ok slot-1 metódusa a Nintendo DS alkalmazások futtatásának. Flashcards have the advantages of keeping console files and portable files separate, the ability to be used without modding your system and are usable on DS Phat/Lite consoles. However, unlike modding the actual console, there are multiple flashcards on the market, each with different kernel requirements. The kernel you use is the most important.

[There is a **work in progress** flashcard index](https://nightyoshi370.github.io/mm-github-pages-starter/), which has kernels, firmware, reviews and purchase links.

### DLDI

Different SD card slots have different hardware (most of the time) and code written for one card won't necessarily work for another card. DLDI (short for Dynamically Linked Device Interface) attempts to solve this by having the SD card handling code patched in externally. Loaders like YSMenu, Wood R4 and TWiLight Menu++ can automatically DLDI patch a homebrew, but if you need to manually patch it in, feel free to use a [DLDI Patcher](https://www.chishm.com/DLDI#tools) depending on your device.

### Időbomba

Az időbomba egy lejárati dátuma a flashcard kernel-eknek, amit a gyártók használnak arra, hogy kényszerítsék a felhasználókat új kártya vásárlására. Amint a rendszeróra túl megy ezen a bizonyos dátumon, a kernel visszautasítja a bootolást, a lejárati képernyőnél tovább. Szerencsére flag nem kerül sehova beállításra, és a flashcard firmware által kezelt, két lehetőséget adva nekünk a megkerülésre:

- Mivel a rendszerórán alapszik, visszaállíthatod a dátumot. Ez viszont elront minden játékot, ami a rendszerórát használja, de lehetővé teszi az alapértelmezett kernel használatát.
- Mivel ez a kernel-en alapul, nem a firmware-en, alternatív kernelre is válthatsz. Két opció áll rendelkezésre:
  - [YSmenu](https://gbatemp.net/threads/retrogamefan-updates-releases.267243/) -- A menü igencsak ronda és csak `.nds` fájlt mutat, de jobb játék támogatása és csalás támogatása van, valamint nincs memory pak követelménye
  - [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu) -- Ez hasznos ha szeretnéd minden ROM-od különféle konzolról ugyanabban a menüben kezelni; két módja van a DS játékok futtatásának a TWiLight Menu++-ből:
    - With B4DS: Requires a Memory Expansion Pak for extended game compatibility and does not support cheats. But works on all flashcards that TWiLight Menu++ does
    - With YSMenu: Gets the compatibility benefits of YSMenu with the better menu of TWiLight Menu++, however, cheats are not supported currently

We recommend YSMenu, with TWiLight Menu++ if you prefer it, due to the higher compatibility, and lack of need for a Memory Expansion Pak. If you want to setup YSMenu, DeadSkullzJr has made a [Dropbox repo](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) with all the primary boot kernels set up for your flashcard. All it requires is a drag and drop to your SD card root and you have completed. Instructions on how to install TWiLight Menu++ are [on the flashcard install page](../twilightmenu/installing-flashcard).

In order to test whether your flashcard has a time bomb, set the date on your system to the latest value possible and launch the flashcard.

### ARGV támogatás
Az ARGV egy információ átvivő két homebrew Nintendo DS applikáció között. Használhatók forwardereknek, vagy alternatív menükhöz.

- A homebrew alkalmazást úgy kell programozni, hogy felhasználja az előnyeit. Például a GBARunner2, a NesDS és a GameYob mind rendelkezik ARGV implementációval
- Továbbá szükség van arra, hogy legyen valamilyen mód az ARGV változók beállítására. A TWiLight Menu++ és a HBMenu lehetővé teszi az ARGV argumentumok beállítását
