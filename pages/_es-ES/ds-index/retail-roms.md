---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Roms comerciales
description: Acerca de los juegos de DS comerciales
---

### Anti-piratería
AP (Anti-Piratería) es un método usado por los desarrolladores para reforzar las ventas legítimas y prevenir la piratería. Estos sistemas pueden saltarse a través del cargador (loader) o la propia ROM.

- For nds-bootstrap, it can load an `.ips` file in order to circumvent said patches. This `.ips` file will be applied by nds-bootstrap in RAM so you can keep the ROM files intact. A pack of `.ips` files is included with TWiLight Menu++
- For Wood R4, these patches are included in the software itself, you will not need to modify the ROM itself

If there isn't an `.ips` file for your ROM or your software doesn't patch your ROM, you can try directly modifying the ROM itself using [DS-Scene ROM Tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/).

### Cloneboot
Cloneboot es cuando un juego envía sus propios binarios cargados ARM7 y ARM9 a otra consola. Se usa en la Descarga DS para el multijugador con una sola tarjeta. Sin embargo, no todos los juegos que tienen multijugador con una sola tarjeta utilizan cloneboot.

### Archivos de guardado
Los cartuchos de Nintendo DS tienen 4 tipos de guardado conocidos:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

There are different formats to use depending on the loader, but nds-bootstrap uses the raw `.sav` format. If you have a save in a different format, here is a website you can use to convert it: http://www.shunyweb.info/convert.php.

### Ensamblador
Assembly language is any low-level programming language with a strong connection between the language's instructions and the processor's instructions. On the DS, assembly code comes in the form of either ARM or THUMB instructions, THUMB instructions being a subset of the ARM instructions. THUMB is useful to save memory bandwidth as it uses 16-bit instructions over the regular 32-bit instructions that ARM uses.

You can find more information on assembly instructions, as well as a lot more technical information for the DS and DSi, on [GBATEK](https://problemkaputt.de/gbatek.htm).

### Lectura Card DMA
DMA (Acceso Directo a Memoria) es una forma más eficiente de leer datos que utilizar la CPU. Cuando la información es transferida, el código aún puede ejecutarse, esa es la manera preferible de acceder a la información.

Puedes encontrar un juego que usa DMA en no$gba habilitando "DMA log on ARM9". Un acceso DMA a la tarjeta usa AF000001 como tercer parámetro.
- Por ejemplo: `DMA2: 04100010 023C18C0 AF000001`

### Trucos de Action Replay
Los cheats de Action Replay son códigos que te permiten hacer cambios en la programación a bajo nivel en la región de memoria de tu(s) juego(s) favorito(s). Estos cambios van desde simples cambios en los números hasta ajustes en ASM muy avanzados, los cuales pueden cambiar la experiencia de juego por completo.

Las flashcards pueden aprovecharse de estos códigos usando bases de datos de trucos. Esta función está integrada en el kernel de la flashcard respectivamente. Los siguientes kernel pueden usar cheats:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew y aplicaciones digitales también pueden aprovechar estas bases de datos, el software actual puede usar las siguientes:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax permite usar cheats en cartuchos oficiales a través de una flashcard. El motor carga la base de datos entera en la RAM de la Nintendo DS y trabaja desde ahí. Esto supone un límite bastante grande en la cantidad de trucos que puedes tener, ya que NitroHax no cargará más del archivo a partir de los 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([fork usrcheat.dat](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` o `usrcheat.dat`)
   - NitroHax3DS es una versión de NitroHax que funciona desde la tarjeta SD del sistema en la DSi o 3DS. La versión original usa cheats.xml con la misma limitación de 2.4 MB que el NitroHax original, pero hay un fork que carga los trucos desde una base de datos usrcheat.dat sin ningún tipo de límite
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ lee el archivo `usrcheat.dat` y manda los valores de los trucos activados a otro archivo que lee nds-bootstrap
   - El motor usado por nds-bootstrap está basado en el de NitroHax. Sin embargo, debido a que el archivo solo contiene los trucos activados para ese juego en concreto, hay un límite de trucos que se pueden activar, no del tamaño de la base de datos

For the most complete cheat database, using [DeadSkullzJr's NDS Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711) is recomended.

Cheat codes generally have types 0 through F, and here is an (unfinished) description of them:

- The 0xE code type is a 32-bit code type that allows you to make multiple writes in many consecutive addresses all at once. Essentially, it is like the basic 32-bit RAM write code type (0x0), except this doesn't have addresses listed next the the values you want to write. Instead, the 0xE code type is programmed to automatically branch from a starting address, then determine the addresses to write to. From there, you just have to tack in the amount to write to in order for it to do the job
  - It is known that cheat codes of this type usually do not work with nds-bootstrap currently
- DeadSkullzJr is working on a more comprehensive list of cheat code descriptions, this section will link to that once it is ready

### Títulos de demostración y distribución:
Demonstration (Demo) titles are different from their retail counterparts in various ways. The obvious indicator being that the title at hand is a demo of what the retail version will be like, essentially it's a sneak peek at what is coming in the future when the full retail release comes. In the case of the Nintendo DS line, these titles often are marked as "Not for Resale" on the title labels, each demo also sports a different title ID compared to their retail counterparts, and on the back of the title's cartridge, a "Not for Resale" sticker is also present. These titles are usually just kiosk demos in promotional places in stores and what not.

Distribution titles are a slightly different situation in most cases, however demos can also fit the distribution label for a few titles in the library. Most cases distribution titles are just retail versions of the title(s) that are for display only or come from a promotional packaging of some sort. You can see "Not for Resale" labeled on these types of titles like you can with the demonstration titles. These can sometimes also be used in kiosks for the sake of letting other players test out the title. However knowing that these are essentially the same as their retail counterparts in most cases, they tend to have an extra identifier in the title ID on the label.

Example ID: `DIS-NTR-NTRJ-JPN`

`DIS` - Distribución


### Etiquetas de título
En la parte inferior de la etiqueta se muestra el ID del título junto con otros datos; para este ejemplo se utilizará el siguiente ID:

- NTR-NTRJ-**XXX**

**XXX** representa lo siguiente:

- AUS - Australia
- CHN - China
- DEN - Dinamarca
- EUR - Europa (multilingüe)
- EUU - Europa (sólo neerlandés o italiano)
- FRA - Francia
- GER - Alemania
- HOL - Países Bajos
- I - Italiano
- JPN - Japón
- KOR - Corea
- NOE - Europa (sólo en alemán)
- NOR - Noruega
- RUS - Rusia
- SPA - España
- UKV - Reino Unido
- USA - Estados Unidos

La última letra del ID del título representa el idioma del mismo. Usando como ejemplo el ID del último título:

- NTR-NTR**X**-JPN

**X** representa lo siguiente:

- A - Mundo (no cuenta como una sola cosa usada)
- C - Chino (simplificado)
- D - Alemán
- E - Inglés americano
- F - Francés
- G - Griego
- H - Holandés
- I - Italiano
- J - Japonés
- K - Coreano
- M - Sueco
- N - Noruego
- O - Inglés (DSi Enhanced)
- P - Multilingüe europeo
- Q - Danés
- R - Ruso
- S - Español
- T - Inglés (DSi Enhanced)
- U - Inglés australiano
- V - Inglés británico
- W - Otros idiomas (varía)
- X - Otros idiomas (varía)
- Y - Otros idiomas (varía)
- Z - Otros idiomas (varía)

En términos de identificadores de sistema:

- NTR - Nitro - Nintendo DS
- TWL - Twilight - Nintendo DSi

### DSi Enhanced:

Los juegos con "DSi Enhanced" son juegos que aprovechan algún aspecto del hardware de Nintendo DSi sin dejar de ser compatibles con la DS Phat/Lite. Estos juegos están marcados como `TWL` pero todavía muestran "Nintendo DS" en lugar de "Nintendo DSi" en la etiqueta.
