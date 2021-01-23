---
lang: es-VE
layout: wiki
section: ds-index
category: reference
title: Nintendo DSi / Nintendo 3DS TWL_FIRM
description: Information about the Nintendo DSi and the Nintendo 3DS's TWL_FIRM
---

### Configuración de CFW
Si bien la mayoría de los beneficios del firmware personalizado son para Nintendo DSi y la familia de sistemas Nintendo 3DS, le permite desbloquear las posibilidades de sus consolas. La instalación de firmware personalizado es bastante fácil y, en la mayoría de los casos, todo lo que necesita es una tarjeta (micro) SD. Tenemos las mejores guías para que las sigas, con instrucciones paso a paso.

- [Guía de Hackeo 3ds](https://3ds.hacks.guide)
  - Comando Lightning: `mod 3ds`
  - Comando de Kuriisu: `guía 3ds`
- [Guía de Hackeo DSi](https://dsi.cfw.guide)
  - Comando Lightning: `mod dsi cfw`
  - Comando de Kuriisu: `guide dsi`

### Velocidades de CPU
La Nintendo DS se envió con un procesador de 67Mhz en 2004. La Nintendo DSi se envió con un procesador de 133Mhz en 2009. La mayoría de los juegos de la biblioteca de Nintendo DS se hicieron antes de que saliera la Nintendo DSi y, como tal, el único procesador disponible para ellos era de 67Mhz. Algunas aplicaciones se vincularon a esa velocidad de reloj y, como resultado, no funcionarían bien con una velocidad de reloj más alta. La mayoría de los juegos, sin embargo, superarían al original con una velocidad de reloj más alta.

nds-bootstrap tiene velocidad de reloj TWL como opción, pero no intentará ajustar la ROM para que funcione con la velocidad de reloj más alta. Eso está en la propia aplicación, y las aplicaciones que no funcionan con una velocidad de reloj más alta NO son un error de nds-bootstrap al final.

### Menú de la consola Nintendo DSi
The Nintendo DSi System Menu uses a signed 32-bit integer to determine the amount of free space on the device. Using a device source that goes above the 32-bit integer limit, this counter is overflowed into a negative number, which crashes into an "An error has occurred" black screen.

The ranges that make it overflow is determined by pairs of two. Por ejemplo, se permiten 1-2 GB de espacio libre, mientras que 3-4 no. Se permiten 5-6 GB de espacio libre, mientras que 7-8 no.

This crash will never occur if the System Menu is launched from an actual NAND chip (since it maxes out at 128 MB), but a redirection system (such as hiyaCFW) would cause this to trigger. Fortunately, this bug can easily by fixed by placing dummy files to set the counter at a positive number. hiyaCFW will automatically do this for you in the latest version.

-----

In version 1.4.0, RSA signatures in the DS Cart Whitelist aren't verified. There is an exploit regarding a vulnerability in the Nintendo DSi flashcard whitelist that allows you to take access over the ARM9 processor, It requires version 1.4.0 (it was patched in future versions and didn't exist in prior versions) and a flashcard with a modified ROM.

### Acceso al Slot-1 de Nintendo DSi & Bloquear
Slot-1 access is blocked when launching applications from the System Menu, except if said applications is either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcards and you cannot dump ROMs to your SD card.

The flashcard white list is checked via RSA signatures are contained via RSA keys on every firmware expect 1.4.0. This means that people can white list their own carts

Before 1.4.0, the white list used to contain only two sections. In 1.4.0, they've introduced a third section which was made to block flashcards that got around the first two. The third section loads up to eight different section of the rom and checks them with a hash to see if the rom has been tampered with. However, due to the forgetfulness of putting any sanity check, we can overflow into the exception vector/interrupt address using a large enough value. Best of all, this runs on ARM7 (aka the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, we can run advanced homebrew (such as Slot-1 dumpers & external slot-1 dumpers)

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. Also, the exploit never officially came out, due to Unlaunch being much simpler to install and having less requirements (just a way to get into homebrew) with the same advantages.

### Cámara Nintendo DSi
The Nintendo DSi Camera application has the ability to take pictures in the JPEG and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether its PC taken or PC edited.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Bootstage 2 de Nintendo DSi
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.
