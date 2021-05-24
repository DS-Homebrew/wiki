---
lang: es-ES
layout: wiki
section: nds-bootstrap
category: other
title: Preguntas frecuentes y soluciones
long_title: Preguntas frecuentes y solución de errores de nds-bootstrap
description: Preguntas frecuentes y solución de errores de nds-bootstrap
---

#### ¿Por qué me salta un pantallazo blanco cuando intento cargar un juego de la tarjeta SD?
- Comprueba [la lista de compatibilidad de nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) y asegúrate de que el juego es compatible
- Prueba a quitar todos los trucos para ese juego, ya que pueden no ser aún compatibles con nds-bootstrap, puedes usar <kbd class="l">L</kbd> para desactivar todos los de un juego
- If it worked before, delete the `fatTable` and `patchOffsetCache` folders in `sd:/_nds/nds-bootstrap/`

#### nds-bootstrap troubleshooting
If you get issues with using the latest version of nds-bootstrap, here's how you could troubleshoot it.

1. Run the game with different settings, including changing the ARM9 CPU Speed, DS / DSi Mode, sound quality, Card Read DMA, etc
2. Borra las carpetas `fatTable` y `patchOffsetCache` en `sd:/_nds/nds-bootstrap/`
3. Probablemente no sea tan grave; pregunta en el [servidor de Discord](https://discord.gg/yD3spjv)

If the server says it's an nds-bootstrap issue, check if the game hasn't been reported already on GitHub. Check the closed issues too in case we had one issue closed in preference a different one. If it doesn't have any GitHub issue attached to it, go ahead and make a new one.

Also, make sure you add it to the [compatibility list](https://wiki.ds-homebrew.com/nds-bootstrap/testing) on Google Sheets.

#### Why doesn't multiplayer work?
This is a [known issue](https://github.com/DS-Homebrew/nds-bootstrap/issues/553) with cloneboot. Please wait for a fix.

#### Why are there issues with ROM loading, even though they're run natively?
nds-bootstrap patches the ROM functions to run from an SD card, as the ROMs are hardcoded to read from Slot-1. There are also timing issues and AP measures (which most are already removed), both of which would cause the ROMs to not work properly. To improve performance, nds-bootstrap also shrinks the game's heap in memory, which breaks some games, though both the forwarders and TWiLight Menu++ have a heap shrink blacklist to fix the non-working games broken by heap shrink.

#### Why use nds-bootstrap over a regular flashcard?
- Algunas ROMs compatibles se cargan en la RAM, lo que permite tiempos de carga más rápidos incluso que de cartuchos normales
- Puedes expandir el bus de la memoria VRAM a 32-bit
- Utilize the DSi's additional CPU speed, allowing for better performance in some games
- Mejora tu audio a 48 kHz
- Usa el Modo DSi, permitiendo utilizar funciones de DSi
- Con ciertos cartuchos puedes usar IR en tu aplicación
- nds-bootstrap is open source, meaning developers can always update it to fix bugs and other things, even if the project gets discontinued
- The DS Memory Expansion Pak is emulated, meaning games that require that accessory will work
- Swap top and bottom screens in compatible games for more comfortable gameplay, or on systems with a broken or removed screen

#### Donor ROMs
Most SDK5 games can be selected as a Donor ROM (which can be done via TWiLight Menu++). The Donor ROM's ARM7 binary is copied by nds-bootstrap and replaces the ARM7 binary for the game that it is trying to run. This allows certain and SDK5 games to boot and save.

#### What is a nightly and where do I get it?
A nightly build is build for the latest commit. Nightly builds may be unstable, but has the most recent bugfixes added. You can get nightly builds for nds-bootstrap [here](https://github.com/TWLBot/Builds/raw/master/nds-bootstrap.7z).

#### Why do my cheats not work?
The way E cheat types are implemented in nds-bootstrap is broken, meaning they'd only work half of the time. Your cheat probably uses that type. It is not a fault of the cheat database, but rather a fault of nds-bootstrap. Please do not request these cheats to get deleted from the DB.

For more info on cheats, look [here](https://wiki.ds-homebrew.com/ds-index/retail-roms#action-replay-cheats).

