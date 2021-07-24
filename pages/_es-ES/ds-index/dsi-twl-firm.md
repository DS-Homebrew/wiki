---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Acerca el TWL_FIRM de Nintendo DSi y Nintendo 3DS
---

### Preparando el CFW
Si bien la mayoría de los beneficios del firmware personalizado son para Nintendo DSi y la familia de sistemas Nintendo 3DS, te abre a un mundo de posibilidades con tu consola. La instalación de firmware personalizado es bastante sencilla y, en la mayoría de los casos, todo lo que necesita es una tarjeta (micro)SD. Tenemos las mejores guías con instrucciones paso a paso.

- [Guía de Hackeo de 3DS](https://3ds.hacks.guide)
   - Comando de Lightning: `mod 3ds`
   - Comando de Kuriisu: `guide 3ds`
- [Guía de Hackeo de DSi](https://dsi.cfw.guide)
   - Comando de Lightning: `mod dsi cfw`
   - Comando de Kuriisu: `guide dsi`

### Frecuencias de CPU
La Nintendo DS traía un procesador de 67 MHz en 2004. La Nintendo DSi traía un procesador de 133 MHz en 2009. La mayoría de juegos de Nintendo DS fueron lanzados antes que la Nintendo DSi, por lo que el único procesador que tenían disponible era de 67 MHz. Algunas aplicaciones se crearon con esa velocidad de reloj, por lo que no funcionan bien con velocidades más grandes. La mayoría de los juegos, sin embargo, pueden ir mejor con una velocidad de reloj más alta.

nds-bootstrap tiene la velocidad de reloj de TWL como opción, pero no cambiará la ROM para que funcione a la velocidad más alta. Eso está en la propia aplicación, y que algunas aplicaciones no funcionen con una mayor velocidad de reloj NO es un fallo de nds-bootstrap.

### Nintendo DSi Menu
In version 1.4.0, RSA signatures in the DS cart whitelist aren't verified. There is an exploit regarding a vulnerability in the Nintendo DSi flashcard whitelist that allows you to take access over the ARM9 processor, It requires version 1.4.0 (it was patched in future versions and didn't exist in prior versions) and a flashcard with a modified ROM.

There is also a known glitch in the way the Nintendo DSi Menu calculates free space that can can cause an error when using the menu not from the original NAND, for more information see the [hiyaCFW troubleshooting page](/hiyacfw/troubleshooting#the-free-space-bug).

### Acceso y bloqueo del Slot-1 de Nintendo DSi
Slot-1 access is blocked when launching applications from the system menu, except if said applications is either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcards and you cannot dump ROMs to your SD card.

The flashcard white list is checked via RSA signatures are contained via RSA keys on every firmware expect 1.4.0. This means that people can white list their own carts

Before 1.4.0, the white list used to contain only two sections. In 1.4.0, they've introduced a third section which was made to block flashcards that got around the first two. The third section loads up to eight different section of the rom and checks them with a hash to see if the rom has been tampered with. However, due to the forgetfulness of putting any sanity check, we can overflow into the exception vector / interrupt address using a large enough value. Best of all, this runs on ARM7 (aka the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, we can run advanced homebrew (such as Slot-1 dumpers & external slot-1 dumpers)

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. Also, the exploit never officially came out, due to Unlaunch being much simpler to install and having less requirements (just a way to get into homebrew) with the same advantages.

### Cámara Nintendo DSi
The Nintendo DSi Camera application has the ability to take pictures in the JPEG and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether its PC taken or PC edited.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Bootstage 2 de Nintendo DSi
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.

### RTCom
RTCom is the use of the 3DS's RTC to allow the ARM7 and ARM11 CPUs to communicate with each other, even while in TWL_FIRM. This allows 3DS features to be used while in DS(i) mode. This includes the circle pad's analog input, enabling widescreen, and having gyro support. Currently, the only public ds homebrew that make use of RTCom is certain builds of GBARunner2 that have support for the 3DS's gyro feature. To enable RTCom, you will need to use [TWPatch](https://gbatemp.net/threads/542694/).
