---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Roms comerciales
description: Acerca de los juegos de DS comerciales
---

### Anti-Piratería
AP (abreviatura de anti-piratería) es un método usado por los desarrolladores para forzar la compra de los juegos y evitar la piratería. Estos sistemas pueden saltarse a través del cargador (loader) o la propia ROM.

- For nds-bootstrap's purposes, you can load an `.ips` file in order to circumvent said patches. This `.ips` file will be patched inside nds-bootstrap, so you can keep the ROM files intact. A pack of `.ips` files are automatically included with TWiLight Menu++.
- Respecto a Wood R4, estos parches están incluidos en el propio software. No tendrás que modificar la ROM.

In case there isn't a `.ips` file for your ROM or your software didn't patch your ROM, you can try directly modifying the ROM itself using [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### Cloneboot
Cloneboot is when a game sends it's own loaded ARM7 and ARM9 binaries to another console. It is used by DS Download Play for single-card multiplayer. Though, not all games that have single-card multiplayer uses cloneboot.

Currently, nds-bootstrap's cloneboot patches is broken due to the ARM7 and ARM9 binaries being patched, which makes the RSA signatures invalid.

### Save Files
Nintendo DS cartridges have 4 known save types:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Though rare, there are DS Cartridges with NAND based saves: WarioWare DIY & Jam with the Band (USA)/Daigasso Band Brothers

There are different formats to use depending on the loader, but nds-bootstrap uses the raw `.sav` format. If you use a different format, here is a website you can use to convert it: http://www.shunyweb.info/convert.php

### Assembly
Assembly is the native language used for all DS software. Assembly code comes in the form of either ARM or THUMB instructions. THUMB instructions are a subset of the ARM instructions. THUMB is useful to save memory bandwidth as it uses 16-bit instrcutions over the regular 32-bit instructions that ARM uses. You can find more info on Assembly instructions, as well as a lot more technical information for the DS and DSi, at [gbatek](https://problemkaputt.de/gbatek.htm).

### Lectura Card DMA
Card DMA (Direct Memory Access) es una forma más eficiente de leer los datos del cartucho que por software. Cuando no hay datos disponibles, se puede seguir ejecutando código. Cuando se lee por software, se pierde tiempo comprobando el registro para ver si hay nuevos datos. Es la forma preferida para acceder a los datos.

Puedes encontrar un juego que usa dma con no$gba habilitando "DMA log on ARM9". Un acceso DMA a la tarjeta usa AF000001 como tercer parámetro.
- Por ejemplo: `DMA2: 04100010 023C18C0 AF000001`

### Action Replay Cheats
Action Replay cheat codes are codes that allow you to make low-level programmable changes in the memory region of your favorite game(s). These changes range from simple value tweaks to extremely advanced ASM tweaks, both of which can alter the experience of the game(s) being played altogether.

Flashcards can take advantage of cheat codes by using cheat databases. Cheat functionality is integrated within the flashcard kernel respectively. The following kernels can utilize cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
  - NitroHax permite usar trucos en cartuchos oficiales a través de una flashcard. El motor carga la base de datos entera en la RAM de la Nintendo DS y trabaja desde ahí. Esto supone un límite bastante grande en la cantidad de trucos que puedes tener, ya que NitroHax no cargará más del archivo a partir de los 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([fork usrcheat.dat](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` o `usrcheat.dat`)
  - NitroHax3DS es una versión de NitroHax que funciona desde la tarjeta SD del sistema en la DSi o 3DS. La versión original usa cheats.xml con la misma limitación de 2.4 MB que el NitroHax original, pero hay un fork que carga los trucos desde una base de datos usrcheat.dat sin ningún tipo de límite
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
  - TWiLight Menu++ lee el archivo `usrcheat.dat` y manda los valores de los trucos activados a otro archivo que lee nds-bootstrap
  - El motor usado por nds-bootstrap está basado en el de NitroHax. Sin embargo, debido a que el archivo solo contiene los trucos activados para ese juego en concreto, hay un límite de trucos que se pueden activar, no del tamaño de la base de datos
  - Bootstrap 4 DS (la versión de nds-bootstrap que se usa en flashcards) no tiene soporte para trucos, debido a no tener suficiente RAM y las limitaciones del Memory Expansion Pack

For the most complete cheat database, we recommend using the one made by DeadSkullzJr titled [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Cheat codes generally have types A through E, and here is a description of them:

- El código de tipo 0xE es un código de 32-bit que permite hacer múltiples escrituras en varias direcciones consecutivas a la vez. En esencia es como el tipo de escritura de RAM de 32-bit básico (0x0), excepto que este no tiene direcciones delante de los valores que quieres escribir. En este caso, el tipo 0xE está programado para que parta automáticamente de una dirección y determine en cuales tiene que escribir. A partir de ahí, solo tienes que ajustar en cuántas quieres escribir para que haga su trabajo.
