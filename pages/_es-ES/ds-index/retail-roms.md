---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Roms comerciales
description: Acerca de los juegos de DS comerciales
---

### Anti-piratería
AP (abreviatura de anti-piratería) es un método usado por los desarrolladores para forzar la compra de los juegos y evitar la piratería. Estos sistemas pueden saltarse a través del cargador (loader) o la propia ROM.

- Respecto a nds-bootstrap, puedes cargar un archivo `.ips` para saltarse dichos parches. Dicho archivo `.ips` se parchea dentro de nds-bootstrap y mantiene los archivos de la ROM intactos. Hay un pack con los archivos `.ips` que se incluyen automáticamente con TWiLight Menu++.
- Respecto a Wood R4, estos parches están incluidos en el propio software. No tendrás que modificar la ROM.

Si no hay un archivo `.ips`para tu ROM o el software no la ha parcheado, puedes modificar la ROM directamente usando [nds-scene tool](https://gbatemp.net/download/retrogamefan-nds-rom-tool-v1-0_b1215.35735/)

### Cloneboot
Cloneboot es cuando un juego envía sus propios binarios cargados ARM7 y ARM9 a otra consola. Se usa en la Descarga DS para el multijugador con una sola tarjeta. No todos los juegos que tienen multijugador con una sola tarjeta lo usan.

Actualmente, los parches cloneboot de nds-bootstrap no funcionan debido a que los binarios ARM7 y ARM9 están parcheados, lo que hace que sus firmas RSA sean inválidas.

### Archivos de guardado
Se conocen 4 tipos de archivos de guardado para los cartuchos de Nintendo DS:

- EEPROM - Electrically Erasable Programmable Read-Only Memory
- FLASH
- FRAM - Ferroelectric Random-Access Memory
- NAND - NOT-AND

Aunque es algo raro, hay cartuchos de DS con guardados basados en la NAND: WarioWare DIY y Jam with the Band (USA)/Daigasso Band Brothers

El formato depende del loader, pero nds-bootstrap usa el formato `.sav` en crudo. Si usas un formato distinto, en esta página web puedes convertirlos: http://www.shunyweb.info/convert.php

### Ensamblador
Lenguaje ensamblador es aquel lenguaje de bajo nivel con una fuerte conexión entre las instrucciones del propio lenguaje y las del procesador. En la DS, el código ensamblador está formado por instrucciones ARM oTHUMB, siendo las THUMB un subconjunto de ARM. THUMB es útil para ahorrar en ancho de banda de memoria ya que usa instrucciones de 16-bit en vez de 32-bit como hace ARM. Puedes encontrar más información acerca de instrucciones ensamblador, así como información a un nivel más técnico de la DS y DSi, en [GBATEK](https://problemkaputt.de/gbatek.htm).

### Lectura Card DMA
Card DMA (Direct Memory Access) es una forma más eficiente de leer los datos del cartucho que por software. Cuando no hay datos disponibles, se puede seguir ejecutando código. Cuando se lee por software, se pierde tiempo comprobando el registro para ver si hay nuevos datos. Es la forma preferida para acceder a los datos.

Puedes encontrar un juego que usa dma con no$gba habilitando "DMA log on ARM9". Un acceso DMA a la tarjeta usa AF000001 como tercer parámetro.
- Por ejemplo: `DMA2: 04100010 023C18C0 AF000001`

### Trucos de Action Replay
Los trucos de Action Replay son códigos que permiten hacer cambios en la programación a bajo nivel en la región de memoria de tus juegos favoritos. Estos cambios van desde simples cambios en los números hasta ajustes en ASM muy avanzados, los cuales pueden cambiar la experiencia de juego por completo.

Las flashcards pueden utilizar estos códigos usando bases de datos de trucos. Esta función está integrada en el kernel de la flashcard respectivamente. Los siguientes kernels pueden usar trucos:
- Wood R4 (`usrcheat.dat`)
- YSMenu (`usrcheat.dat`)

Homebrew/digital-based solutions can also take advantage of the cheat databases, the software currently available can use the following:
- [NitroHax](https://www.chishm.com/NitroHax) (`cheats.xml`)
   - NitroHax permite usar trucos en cartuchos oficiales a través de una flashcard. El motor carga la base de datos entera en la RAM de la Nintendo DS y trabaja desde ahí. Esto supone un límite bastante grande en la cantidad de trucos que puedes tener, ya que NitroHax no cargará más del archivo a partir de los 2.4 MB
- [NitroHax3DS](https://github.com/ahezard/NitroHax3DS/releases) ([fork usrcheat.dat](https://github.com/Epicpkmn11/NitroHax3DS/releases)) (`cheats.xml` o `usrcheat.dat`)
   - NitroHax3DS es una versión de NitroHax que funciona desde la tarjeta SD del sistema en la DSi o 3DS. La versión original usa cheats.xml con la misma limitación de 2.4 MB que el NitroHax original, pero hay un fork que carga los trucos desde una base de datos usrcheat.dat sin ningún tipo de límite
- [TWiLight Menu++](https://github.com/DS-Homebrew/TWiLightMenu/releases) (`usrcheat.dat`)
   - TWiLight Menu++ lee el archivo `usrcheat.dat` y manda los valores de los trucos activados a otro archivo que lee nds-bootstrap
   - El motor usado por nds-bootstrap está basado en el de NitroHax. Sin embargo, debido a que el archivo solo contiene los trucos activados para ese juego en concreto, hay un límite de trucos que se pueden activar, no del tamaño de la base de datos
   - Bootstrap 4 DS (la versión de nds-bootstrap que se usa en flashcards) no tiene soporte para trucos, debido a no tener suficiente RAM y las limitaciones del Memory Expansion Pack

Para tener la base de datos más completa recomendamos usar la de DeadSkullzJr, titulada [DeadSkullzJr's Cheat Database](https://gbatemp.net/threads/deadskullzjrs-nds-cheat-databases.488711).

Los códigos suelen tener tipos de la A a la E, aquí tienes una descripción de los mismos:

- El código de tipo 0xE es un código de 32-bit que permite hacer múltiples escrituras en varias direcciones consecutivas a la vez. En esencia es como el tipo de escritura de RAM de 32-bit básico (0x0), excepto que este no tiene direcciones delante de los valores que quieres escribir. En este caso, el tipo 0xE está programado para que parta automáticamente de una dirección y determine en cuales tiene que escribir. A partir de ahí, solo tienes que ajustar en cuántas quieres escribir para que haga su trabajo.
