---
lang: es-ES
layout: wiki
section: nds-bootstrap
category: other
title: Preguntas frecuentes y soluciones
description: Preguntas frecuentes y soluciones para nds-bootstrap
---

#### Why do I get a white screen when trying to load a game from SD card?
- Comprueba [la lista de compatibilidad de nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) y asegúrate de que el juego es compatible
- Prueba a quitar todos los trucos para ese juego, ya que pueden no ser aún compatibles con nds-bootstrap, puedes usar <kbd class="l">L</kbd> para desactivar todos los de un juego
- Si se trata de un juego DSi Enhanced, asegúrate de que TWiLight Menu++ esta puesto en `DS Mode`
- Si antes funcionaba, borra las carpetas `fatTable` y `patchOffsetCache` en `sd:/_nds/nds-bootstrap/`

#### ¿Por qué surgen estos problemas al cargar las ROMs aunque se lancen de forma nativa?
nds-bootstrap parchea las funciones de la ROM para que funcionen desde una tarjeta SD, ya que las ROMs están pensadas para leerse desde la Slot-1. También hay problemas de tiempo y medidas antipiratería (la mayoría ya eliminadas), y ambas pueden hacer que la ROM no funcione correctamente. Para mejorar el rendimiento, nds-bootstrap comprime la pila del juego en memoria, cosa que rompe algunos juegos, aunque tanto los accesos directos como TWiLight Menu++ tienen una lista negra para evitar que esto ocurra.

#### ¿Por qué usar nds-bootstrap en vez de una flashcard?
- Algunas ROMs compatibles se cargan en la RAM, lo que permite tiempos de carga más rápidos incluso que de cartuchos normales
- Puedes expandir el bus de la memoria VRAM a 32-bit
- Utiliza la velocidad adicional de CPU de la DSi
- Enhance your audio with 48 kHz
- Usa el Modo DSi, permitiendo utilizar funciones de DSi
- Con ciertos cartuchos puedes usar IR en tu aplicación
- nds-bootstrap es de código abierto, por lo que los desarrolladores siempre pueden actualizarlo para arreglar errores y añadir más cosas incluso si la empresa cierra
- Se emula el DS Memory Expansion Pak, por lo que los juegos que lo necesiten funcionarán

#### ROMs Donantes
La mayoría de los juegos SDK5 se pueden usar como una ROM Donante (se puede hacer a través de TWiLight Menu++). El binario ARM7 de la ROM Donante es copiado por nds-bootstrap y reemplaza el del juego que está intentando lanzar. Esto permite a ciertos juegos SDK5 ejecutarse y guardar.

#### ¿Qué es una versión Nightly y dónde la consigo?
Una build nightly contiene hasta el último cambio hecho por un desarrollador. Pueden ser inestables, pero tienen las correcciones de errores más recientes. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### ¿Por qué no funcionan mis trucos?
La forma en la que los trucos de tipo E están implementados en nds-bootstrap está rota, por lo que funcionarán la mitad de las veces. Tu truco probablemente sea de ese tipo. No es culpa de la base de datos de trucos, sino de nds-bootstrap. Por favor, no pidas que se borren dichos trucos de la base de datos.

#### ¿Algo más que deba saber sobre los trucos?
You can set heap shrink to `Hi` in settings for slightly better cheat support.

For more info on cheats, look [here](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

#### Solucionar problemas de nds-bootstrap
If you get issues with using the latest version of nds-bootstrap, here's how you could troubleshoot it.

1. Run everything in 67 MHz, DS Mode, with 32 kHz of audio, etc. Básicamente, mantén todo en la configuración de DS. No intentes mejorarla con opciones de DSi
2. Borra las carpetas `fatTable` y `patchOffsetCache` en `sd:/_nds/nds-bootstrap/`
3. Probablemente no sea tan grave; pregunta en el [servidor de Discord](https://discord.gg/yD3spjv)

If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on GitHub. Check the closed issues too in case we had one issue closed in preference a different one. If it doesn't have any GitHub issue attached to it, go ahead and make a new one.

Also, make sure you add it to the [compatibility list](https://wiki.ds-homebrew.com/nds-bootstrap/testing) on Google Sheets.
