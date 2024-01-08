---
lang: it-IT
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Informazioni sul Nintendo DSi e sul TWL_FIRM del Nintendo 3DS
---

### Configurare il CFW
Il vantaggio principale della modifica dei sistemi delle famiglie DSi e 3DS è che si possono sbloccare possibilità maggiori con le console. Installare il Custom Firmware è abbastanza facile, e nella maggior parte dei casi, tutto ciò di cui hai bisogno è una scheda (micro)SD. Ecco le migliori guide da seguire, con istruzioni passo per passo:

- [Guida all'hacking del 3DS](https://3ds.hacks.guide)
   - Comando Lightning: `mod 3ds`
   - Comando TWLHelper: `guide 3ds`
   - Comando Kurisu: `guide 3ds`
- [Guida all'hacking del DSi](https://dsi.cfw.guide)
   - Comando Lightning: `mod dsi`
   - Comando TWLHelper: `guide dsi`
   - Comando Kurisu: `guide dsi`

### Velocità della CPU
Il Nintendo DS è stato distribuito con un processore a 67 MHz nel 2004, mentre il Nintendo DSi è stato distribuito con un processore a 133 MHz cinque anni dopo. La maggior parte dei giochi del parco titoli del Nintendo DS sono stati realizzati prima che il Nintendo DSi uscì, e pertanto l'unico processore a loro disposizione era a 67MHz. Alcune applicazioni si sono legate a quella velocità e di conseguenza, non funzionerebbero bene con una maggiore velocità. La maggior parte dei giochi, tuttavia, supererebbe l'originale con una maggiore velocità.

nds-bootstrap ha la velocità TWL come opzione, ma non cercherà di regolare le ROM per farle funzionare a velocità maggiore correttamente. Questo dipende dall'applicazione in sé, e perciò se non funzionano ad una velocità più alta NON è un bug di nds-bootstrap.

### Menu Nintendo DSi
Nella versione 1.4.0, le firme RSA nella whitelist della schede di gioco DS non vengono verificate. Si tratta di una vulnerabilità che può essere sfruttata e che consente di accedere al processore ARM9. Richiede la versione 1.4.0 (è stata patchata nelle versioni successive e non esisteva nelle versioni precedenti) e una flashcard con una ROM modificata.

There is also a known glitch in the way the Nintendo DSi Menu calculates free space that can can cause an error when using the menu not from the original NAND, for more information see [hiyaCFW FAQ & Troubleshooting](../hiyacfw/faq#the-free-space-bug).

### Nintendo DSi Slot-1 access & blockout
Slot-1 access is blocked when launching applications from the system menu, except if said applications are either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable Slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcards and you cannot dump ROMs to your SD card.

Before 1.4.0, the whitelist contained only two sections. In 1.4.0, they introduced a third section, which was made to block flashcards that got around the first two. The third section loads up to eight different sections of the ROM and checks them with a hash to see if the ROM has been tampered with. However, due to lacking any sanity check, this can be overflowed into the exception vector/interrupt address using a large enough value. Best of all, this runs on ARM7 (the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, advanced homebrew (such as Slot-1 dumpers) can be run.

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. The exploit never officially came out, due to Unlaunch being much simpler to install and having fewer requirements (just a way to get into homebrew) with the same advantages.

### Fotocamera Nintendo DSi
The Nintendo DSi Camera application has the ability to take pictures in the JPEG format and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether they're PC taken or PC edited, unless properly saved.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Nintendo DSi bootstage 2
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.

### RTCom
RTCom is the use of the 3DS's RTC to allow the ARM7 and ARM11 CPUs to communicate with each other, even while in TWL_FIRM. This allows 3DS features to be used while in DS(i) mode. This includes the circle pad's analog input, enabling widescreen, and having gyro support. Currently, the only public DS homebrew that make use of RTCom is certain builds of GBARunner2 that have support for the 3DS's gyro feature. To enable RTCom, you will need to use [TWPatch](https://gbatemp.net/threads/542694/).
