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
If you get issues with using the latest version of nds-bootstrap, here's how you can troubleshoot it.

1. Run the game with different settings, including changing the ARM9 CPU Speed, DS/DSi Mode, sound quality, Card Read DMA, etc
2. Borra las carpetas `fatTable` y `patchOffsetCache` en `sd:/_nds/nds-bootstrap/`
3. Probablemente no sea tan grave; pregunta en el [servidor de Discord](https://discord.gg/yD3spjv)

Si en el servidor te dicen que es problema de nds-bootstrap, comprueba que el juego no se ha reportado aún en GitHub. Check the closed issues too in case there has already been an issue closed in preference a different one. Si no hay ningún tema relacionado en GitHub, siéntete libre de crear uno nuevo.

Junto a esto, asegúrate de añadirlo en la [lista de compatibilidad](https://wiki.ds-homebrew.com/nds-bootstrap/testing) de Google Sheets.

#### Why are there issues with ROM loading, even though they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1. There are also timing issues and AP measures (which most are already removed), both of which will cause the ROMs to not work properly.

#### Why use nds-bootstrap over a regular flashcard?
- Algunas ROMs compatibles se cargan en la RAM, lo que permite tiempos de carga más rápidos incluso que de cartuchos normales
- Puedes expandir el bus de la memoria VRAM a 32-bit
- Usa la velocidad de CPU adicional de la DSi, que permite mejor rendimiento en algunos juegos
- Mejora tu audio a 48 kHz
- Usa el Modo DSi, permitiendo utilizar funciones de DSi
- Con ciertos cartuchos puedes usar IR en tu aplicación
- nds-bootstrap es de código abierto, por lo que los desarrolladores siempre pueden actualizarlo para arreglar errores y añadir más cosas incluso si se abandona el proyecto
- Se emula el DS Memory Expansion Pak, por lo que los juegos que lo necesiten funcionarán
- Intercambia ambas pantallas en juegos compatibles para una mejor experiencia de juego o en consolas con una pantalla rota o quitada

#### Donor ROMs
Most SDK5 games can be selected as a Donor ROM (which can be done via TWiLight Menu++). The Donor ROM's ARM7 binary is copied by nds-bootstrap and replaces the ARM7 binary for the game that it is trying to run. This allows certain and SDK5 games to boot and save.

#### What is a nightly and where do I get it?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time. Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

For more info on cheats, check the [Action Replay cheats section of the Retail ROMs page](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

