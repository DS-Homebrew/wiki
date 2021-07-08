---
lang: sv-SE
layout: wiki
section: ds-index
category: reference
title: Homebrew
description: Information om homebrew på Nintendo DS
---

### Utveckling

Utveckling av Nintendo DS Homebrew använder vanligtvis devkitPro-verktyg, såsom devkitARM, libnds och libfat. Det finns dock möjlighet att förgrena sig och använda alternativ programvara:

- **SD-kortbibliotek:** [DevkitPro](https://devkitpro.org/) rekommenderar [libfat](https://github.com/devkitPro/libfat). Vi rekommenderar att du använder [libslim](https://github.com/DS-Homebrew/libslim/) istället, eftersom det tillåter användning av olika partitioner, snabbare hastigheter osv
- **Grafikbibliotek:** Vi rekommenderar att du använder [easyGL2D](http://rel.phatcode.net/junk.php?id=117) vilket kommer med libnds automatiskt. Du kan dock använda [NightFox Lib](https://github.com/knightfox75/nds_nflib)
- **Verktygskedjor:** Vi rekommenderar att du använder [devkitARM](https://devkitpro.org/wiki/Getting_Started) och [libnds](https://libnds.devkitpro.org/)eftersom det inkluderar DSi kompatibilitet och har ett större ekosystem. Men för exklusiv användning av minneskort på en Nintendo DS, tveka inte att använda [ToolchainGenericDS](https://bitbucket.org/Coto88/toolchaingenericds)

### Minneskort

DS-mode minneskort är en slot-1 metod för att köra Nintendo DS applikationer. Minneskort har fördelarna med att hålla konsolfiler och bärbara filer separat, möjligheten att användas utan att modda ditt system och kan användas på DS Phat/Lite-konsoler. Till skillnad från att modda själva konsolen finns det dock flera minneskort på marknaden, var och en med olika kärnkrav. Kärnan du använder är det viktigaste.

[Det finns ett minneskort index som **utvecklas fortfarande**](https://nightyoshi370.github.io/mm-github-pages-starter/), som har kärnor, firmware, recensioner och inköpslänkar.

### DLDI

Olika SD-kortplatser har olika maskinvara (för det mesta) och kod skriven för ett kort kommer inte nödvändigtvis att fungera för ett annat kort. DLDI (förkortning för Dynamically Linked Device Interface) försöker lösa detta genom att få SD-kortets hanteringskod patchat in externt. Laddare som YSMenu, Wood R4 och TWiLight Menu++ kan automatiskt DLDI patcha ett homebrew, men om du behöver manuellt patcha in den, använd gärna en [DLDI Patcher](https://www.chishm.com/DLDI#tools) beroende på din enhet.

### Tidsinställd bomb

In some flashcard kernels, an arbitrary expiration date (more commonly known as a time bomb) is coded in by the kernel developers as a way to get consumers to buy their latest product. The procedure for how this works is the following:

1. The flashcard is booted into and loads up the kernel file from the SD card without checking if it's the kernel intended by the developers
1. Each time the kernel file from the SD card is loaded, it checks if the system date is past a certain date

If the second test comes out positive, the kernel will refuse to boot. This can be tested by setting your date to the latest value possible. However, the security is weak and the results aren't cached, meaning that there are ways to work around it:

If you want to use the default kernel that the flashcard manufacturers intended, the system clock can be set back in the device's System Settings application. Keep in mind, though, that this may break any game that relies on the system clock (such as Animal Crossing: Wild World).

However, the kernels that come with these cards are fundamentally flawed and it is preferable to outright replace them. Thankfully, 3rd party developers have made alternatives you can use:

- [YSmenu - menu + game loader](https://www.dropbox.com/sh/egadrhxj8gimu5t/AACv2KqWmeXEHkxoYRluobxha?dl=0) - Although it does not have the advantage of a customizable all-in-one menu, the game loader has far better compatibility with support for action-replay cheats
- [TWiLight Menu++ with nds-bootstrap](/twilightmenu/installing-flashcard) - Has a customizable all-in-one menu and supports cheats, but its B4DS mode (the mode used when it doesn't have the DSi's capabilities) has weak compatibility, some games even requiring the Memory Expansion Pak
- [TWiLight Menu++ with YSmenu](/twilightmenu/installing-flashcard) - Customizable all-in-one menu with high compatibility, but lacks cheat support

### ARGV Support
ARGV is an information transmitter between two homebrew Nintendo DS applications. It can be used for forwarders or alternative menus.

- Homebrew måste programmeras för att dra nytta av det. Till exempel GBARunner2, NesDS och GameYob alla har ARGV implementering
- Det måste också finnas ett sätt att ställa in ARGV-variablerna. TWiLight Menu++ och HBMenu gör det möjligt att ställa in argument från ARGV
