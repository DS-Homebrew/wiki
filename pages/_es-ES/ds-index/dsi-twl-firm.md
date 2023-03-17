---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: TWL_FIRM en Nintendo DSi y Nintendo 3DS
description: Acerca de TWL_FIRM en Nintendo DSi y Nintendo 3DS
---

### Preparando el firmware personalizado
La ventaja principal de modificar las consolas de la familia de la Nintendo DSi y Nintendo 3DS, es que puedes desbloquear más posibilidades con ellas. Instalar firmware personalizado es bastante fácil, y en la mayoría de los casos, una tarjeta SD o microSD es todo lo que necesitas. Aquí tienes las mejores guías que puedes seguir, con instrucciones paso a paso:

- [Guía de modificación de 3DS](https://3ds.hacks.guide)
   - Comando de Lightning: `mod 3ds`
   - Comando de TWLHelper: `guide 3ds`
   - Comando de Kurisu `guide 3ds`
- [Guía de modificación de DSi](https://dsi.cfw.guide)
   - Comando de Lightning: `mod dsi`
   - Comando de TWLHelper: `guide dsi`
   - Comando de Kurisu: `guide dsi`

### Velocidad de CPU
La Nintendo DS contaba con un procesador de 67MHz en el 2004, y la DSi con un procesador de 133HMz cinco años después. La mayoría de juegos en el catálogo de la Nintendo DS fueron creados antes de que saliese la Nintendo DSi, y por lo tanto solo contaban con el procesador de 67MHz. Algunas aplicaciones están atadas a esa velocidad de reloj, y como resultado, no funcionarán correctamente con una velocidad mayot. Sin embargo, la mayoría de juegos pueden sacar ventaja de esa velocidad superior.

nds-bootstrap cuenta con la opción de cambiar la velocidad de la CPU al modo TWL, pero no hará que las ROMs que no funcionen en esta velocidad lo hagan milagrosamente. Eso depende de la aplicación en sí, y que algunas aplicaciones no funcionen con una velocidad de reloj alta NO es un fallo de nds-bootstrap.

### Menú Nintendo DSi
En la versión 1.4.0, no se revisan las firmas RSA de la lista admitida de cartuchos. Esta vulnerabilidad se puede explotar, lo que permite acceder al procesador ARM9. Se requiera una consola con la versión 1.4.0 (ya que esta vulnerabilidad no existía en versiones anteriores, y fue parcheada en versiones posteriores) y una flashcard con una ROM modificada.

También hay un error conocido en la forma en la que el menú de la consola calcula el espacio disponible, lo que puede causar un error al usar el menú desde otro lugar que no sea la memoria NAND. Para más información, revisa la [página de preguntas frecuentes y resolución de problemas de hiyaCFW](../hiyacfw/faq#the-free-space-bug).

### Acceso y bloqueo del Slot-1 de Nintendo DSi
Slot-1 access is blocked when launching applications from the system menu, except if said applications are either the Slot-1 launcher itself or System Settings. In order to launch normally unlaunchable Slot-1 cartridges, you'll need to either make a System Settings exploit or install Unlaunch. Without either of those, you cannot launch unlaunchable flashcards and you cannot dump ROMs to your SD card.

Before 1.4.0, the whitelist contained only two sections. In 1.4.0, they introduced a third section, which was made to block flashcards that got around the first two. The third section loads up to eight different sections of the ROM and checks them with a hash to see if the ROM has been tampered with. However, due to lacking any sanity check, this can be overflowed into the exception vector/interrupt address using a large enough value. Best of all, this runs on ARM7 (the security processor) so this makes it the first exploit for the ARM7 processor. Since this happens before the lock out of the SCFG registers, advanced homebrew (such as Slot-1 dumpers) can be run.

Unfortunately, the requirements are tight. It requires version 1.4.0 and a flashcard with a modified ROM. The exploit never officially came out, due to Unlaunch being much simpler to install and having fewer requirements (just a way to get into homebrew) with the same advantages.

### Cámara Nintendo DSi
The Nintendo DSi Camera application has the ability to take pictures in the JPEG format and save them to either the System Memory or the SD card. The way it's loaded restricts it to only DSi made images, due to lacking the proper HMAC stored inside a custom EXIF tag. Any custom images are not readable on the DSi, whether they're PC taken or PC edited, unless properly saved.

A `pit.bin` file is used in order to load images. However, the header size at offset 0x16 is unchecked, so a big enough header size value can exceed boundaries and cause the buffer to overwrite and jump to unsigned code. This is how Memory Pit is powered.

### Bootstage 2 de Nintendo DSi
The second bootstage of the Nintendo DSi loads launcher's "title.tmd" into memory. However, they do not specify a file size limit check, meaning that the first 80k bytes are loaded into RAM while the rest can be a custom payload. This is the basis of Unlaunch exploit.

### RTCom
RTCom is the use of the 3DS's RTC to allow the ARM7 and ARM11 CPUs to communicate with each other, even while in TWL_FIRM. This allows 3DS features to be used while in DS(i) mode. This includes the circle pad's analog input, enabling widescreen, and having gyro support. Currently, the only public DS homebrew that make use of RTCom is certain builds of GBARunner2 that have support for the 3DS's gyro feature. To enable RTCom, you will need to use [TWPatch](https://gbatemp.net/threads/542694/).
