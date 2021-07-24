---
lang: sv-SE
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Information om Nintendo DSi och Nintendo 3DS TWL_FIRM
---

### Konfigurera CFW
Medan de flesta av fördelarna med custom firmware är för Nintendo DSi och Nintendo 3DS familjerna, så låter den dig låsa upp flera möjligheter med din konsol. Att installera custom firmware är ganska enkelt, och i de flesta fall är allt man behöver ett (mikro)SD kort. Vi har de bästa guiderna som du kan följa, med steg-för-steg-instruktioner.

- [3DS Hacking Guide](https://3ds.hacks.guide)
   - Lightning kommando: `mod 3ds`
   - Kuriisu kommando: `guide 3ds`
- [DSi Hacking Guide](https://dsi.cfw.guide)
   - Lightning kommando: `mod dsi cfw`
   - Kuriisu kommando: `guide dsi`

### CPU Hastigheter
Nintendo DS släpptes år 2004 med en 67 Mhz processor. Nintendo DSi släpptes år 2009 med en 133 Mhz processor. De flesta DS-spel gjordes innan Nintendo DSi kom ut, och därför hade de bara en 67 Mhz processor tillgänglig. Vissa program var bundna till den frekvensen, och fungerade därför inte bra med en högre frekvens. De flesta spel skulle däremot prestera bättre än orginalet med en högre frekvens.

nds-bootstrap har TWL Clock Speed som ett alternativ, men det kommer inte att försöka justera ROM för att arbeta med den högre klockhastigheten. Det är på själva programmet, och program som inte fungerar med en högre klockfrekvens är INTE en bugg på nds-bootstraps ända.

### Nintendo DSi Menu
In version 1.4.0, RSA signatures in the DS cart whitelist aren't verified. There is an exploit regarding a vulnerability in the Nintendo DSi flashcard whitelist that allows you to take access over the ARM9 processor, It requires version 1.4.0 (it was patched in future versions and didn't exist in prior versions) and a flashcard with a modified ROM.

There is also a known glitch in the way the Nintendo DSi Menu calculates free space that can can cause an error when using the menu not from the original NAND, for more information see the [hiyaCFW troubleshooting page](/hiyacfw/troubleshooting#the-free-space-bug).

### Nintendo DSi Slot-1 tillgång & blockout
Slot-1 access is blocked when launching applications from the system menu, except if said applications is either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcards and you cannot dump ROMs to your SD card.

The flashcard white list is checked via RSA signatures are contained via RSA keys on every firmware expect 1.4.0. This means that people can white list their own carts

Before 1.4.0, the white list used to contain only two sections. In 1.4.0, they've introduced a third section which was made to block flashcards that got around the first two. The third section loads up to eight different section of the rom and checks them with a hash to see if the rom has been tampered with. However, due to the forgetfulness of putting any sanity check, we can overflow into the exception vector / interrupt address using a large enough value. Best of all, this runs on ARM7 (aka the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, we can run advanced homebrew (such as Slot-1 dumpers & external slot-1 dumpers)

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. Also, the exploit never officially came out, due to Unlaunch being much simpler to install and having less requirements (just a way to get into homebrew) with the same advantages.

### Nintendo DSi Kamera
The Nintendo DSi Camera application has the ability to take pictures in the JPEG and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether its PC taken or PC edited.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Nintendo DSi bootstage 2
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.

### RTCom
RTCom is the use of the 3DS's RTC to allow the ARM7 and ARM11 CPUs to communicate with each other, even while in TWL_FIRM. This allows 3DS features to be used while in DS(i) mode. This includes the circle pad's analog input, enabling widescreen, and having gyro support. Currently, the only public ds homebrew that make use of RTCom is certain builds of GBARunner2 that have support for the 3DS's gyro feature. To enable RTCom, you will need to use [TWPatch](https://gbatemp.net/threads/542694/).
