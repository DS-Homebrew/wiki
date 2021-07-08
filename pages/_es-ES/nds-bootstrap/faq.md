---
lang: es-ES
layout: faq
section: nds-bootstrap
title: FAQ & Troubleshooting
long_title: nds-bootstrap FAQ & Troubleshooting
description: FAQ & Troubleshooting for nds-bootstrap
---

#### ¿Por qué me salta un pantallazo blanco cuando intento cargar un juego de la tarjeta SD?
- Comprueba [la lista de compatibilidad de nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) y asegúrate de que el juego es compatible
- Prueba a quitar todos los trucos para ese juego, ya que pueden no ser aún compatibles con nds-bootstrap, puedes usar <kbd class="l">L</kbd> para desactivar todos los de un juego
- Si antes funcionaba, borra las carpetas `fatTable` y `patchOffsetCache` en `sd:/_nds/nds-bootstrap/`

#### Solucionar problemas de nds-bootstrap
Si tienes problemas con la última versión de nds-bootstrap, te sugerimos varias opciones.

1. Run the game with different settings, including changing the ARM9 CPU Speed, DS/DSi Mode, sound quality, Card Read DMA, etc
2. Borra las carpetas `fatTable` y `patchOffsetCache` en `sd:/_nds/nds-bootstrap/`
3. Probablemente no sea tan grave; pregunta en el [servidor de Discord](https://discord.gg/yD3spjv)

Si en el servidor te dicen que es problema de nds-bootstrap, comprueba que el juego no se ha reportado aún en GitHub. Comprueba también los problemas cerrados, quizá lo hayamos cerrado para dar preferencia a otro. Si no hay ningún tema relacionado en GitHub, siéntete libre de crear uno nuevo.

Junto a esto, asegúrate de añadirlo en la [lista de compatibilidad](https://wiki.ds-homebrew.com/nds-bootstrap/testing) de Google Sheets.

#### ¿Por qué no funciona el multijugador?
Este es un [problema conocido](https://github.com/DS-Homebrew/nds-bootstrap/issues/553) con cloneboot. Esperad a que lo arreglemos.

#### ¿Por qué surgen estos problemas al cargar las ROMs aunque se lancen de forma nativa?
nds-bootstrap parchea las funciones de la ROM para que funcionen desde una tarjeta SD, ya que las ROMs están pensadas para leerse desde la Slot-1. También hay problemas de tiempo y medidas antipiratería (la mayoría ya eliminadas), y ambas pueden hacer que la ROM no funcione correctamente.

#### ¿Por qué usar nds-bootstrap en vez de una flashcard?
- Algunas ROMs compatibles se cargan en la RAM, lo que permite tiempos de carga más rápidos incluso que de cartuchos normales
- Puedes expandir el bus de la memoria VRAM a 32-bit
- Usa la velocidad de CPU adicional de la DSi, que permite mejor rendimiento en algunos juegos
- Mejora tu audio a 48 kHz
- Usa el Modo DSi, permitiendo utilizar funciones de DSi
- Con ciertos cartuchos puedes usar IR en tu aplicación
- nds-bootstrap es de código abierto, por lo que los desarrolladores siempre pueden actualizarlo para arreglar errores y añadir más cosas incluso si se abandona el proyecto
- Se emula el DS Memory Expansion Pak, por lo que los juegos que lo necesiten funcionarán
- Intercambia ambas pantallas en juegos compatibles para una mejor experiencia de juego o en consolas con una pantalla rota o quitada

#### ROMs Donantes
La mayoría de los juegos SDK5 se pueden usar como una ROM Donante (se puede hacer a través de TWiLight Menu++). El binario ARM7 de la ROM Donante es copiado por nds-bootstrap y reemplaza el del juego que está intentando lanzar. Esto permite a ciertos juegos SDK5 poder lanzarse y guardar.

#### ¿Qué es una versión Nightly y dónde la consigo?
Una build nightly contiene hasta el último cambio hecho por un desarrollador. Pueden ser inestables, pero tienen las correcciones de errores más recientes. Puedes obtener las builds nightly de nds-bootstrap [aquí](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### ¿Por qué no funcionan mis trucos?
La forma en la que los trucos de tipo E están implementados en nds-bootstrap está rota, por lo que funcionarán la mitad de las veces. Tu truco probablemente sea de ese tipo. No es culpa de la base de datos de trucos, sino de nds-bootstrap. Por favor, no pidas que se borren dichos trucos de la base de datos.

Puedes encontrar más información sobre los trucos [aquí](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

