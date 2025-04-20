---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Emuladores en la DS
description: Una documentación sobre emuladores en la DS
---

Hay diferentes emuladores disponibles para DS y DSi. This page provides a comprehensive explanation on the many emulators and loaders bundled into **TW**i**L**ight Menu++.

### Lista de sistemas soportados por TWiLight Menu++

| Formato                 | Lanzador                                         | Extensiones                            | Archivos de guardado                                                       |
| ----------------------- | ------------------------------------------------ | -------------------------------------- | -------------------------------------------------------------------------- |
| ARGV[^1]                | Native                                           | `.argv`                                |                                                                            |
| Atari 6200              | [StellaDS][stellads]                             | `.a26`                                 |                                                                            |
| Atari 5200              | [A5200DS][a5200ds]                               | `.a52`                                 |                                                                            |
| Atari 7800              | [A7800DS][a7800ds]                               | `.a78`                                 |                                                                            |
| Atari XEGS              | [A8DS][a8ds]                                     | `.xex`, `.atr`                         |                                                                            |
| ColecoVision            | [S8DS][s8ds], [ColecoDS][colecods]               | `.col`                                 |                                                                            |
| DS                      | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`[^2]                                                 |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]     | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].pub`, `saves/[rom name].prv`, `saves/[rom name].sav`[^7] |
| DSTWO Plugin            | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                                                            |
| Game Boy (Color)        | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                                                           |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], native[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                                                           |
| Game Gear               | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                                                        |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`, `.md`                          | `[rom name].srm`[^6]                                                       |
| Intellivision           | [Nintellivision][nintellivision]                 | `.int`                                 |                                                                            |
| Master System           | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`                                                       |
| MSX                     | [ColecoDS][colecods]                             | `.msx`                                 | ???                                                                        |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                   | `.ngp`, `.ngc`                         | `/data/ngpds/[rom name].ngp.fla`                                           |
| FastVideoDS             | [FastVideoDSPlayer][fastvideodsplayer]           | `.fv`                                  |                                                                            |
| NES/Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                                                           |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                                                            |
| Rocket Video            | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                                                            |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]               | `.sg`                                  |                                                                            |
| Sord M5                 | [ColecoDS][colecods]                             | `.m5`                                  |                                                                            |
| SNES                    | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`[^8]                                                       |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                           | `.ws`, `.wsc`                          | ???                                                                        |
| Xvid                    | [tuna-viDS][tunavids]                            | `.avi`                                 |                                                                            |

These are just recommended emulators and loaders that are present in TWiLight Menu++. There are other emulators for these consoles (such as lolSnes, Gbaemu4ds, etc.)

### Otros emuladores para DS

| Formato | Lanzador       | Extensiones | Archivos de guardado |
| ------- | -------------- | ----------- | -------------------- |
| Neo Geo | [neoDS][neods] | `.neo`      | (unknown)            |

### BIOS usage

| Formato             | Lanzador                             | Path             | Required  |
| ------------------- | ------------------------------------ | ---------------- | --------- |
| Game Boy (Color)    | [GameYob][gameyob][^9]               | User-set         | No        |
| Game Boy Advance    | [GBARunner2][gbarunner2], native[^5] | `/_gba/bios.bin` | See [^10] |
| Famicom Disk System | [nesDS][nesds]                       | `/disksys.rom`   | Sí        |

- Footnotes -
{:footnotes}

## Observaciones sobre emuladores específicos

### Discos RAM
- In order for **jEnesisDS**, **SNEmulDS** (legacy version), or **neoDS** to work on the DSi SD card, you'll have to use a RAM disk with nds-bootstrap
    - A RAM disk maker for jEnesisDS and SNEmulDS (legacy version) is built into nds-bootstrap. Necesitarás crear tu propio disco RAM para neoDS. Consulte [Crear discos RAM](../twilightmenu/creating-ram-disks) para más ayuda.
    - Se utilizan discos RAM debido a que los interceptores ARM7 (hooks) de estos emuladores no funcionan correctamente.

### Comparación entre PicoDriveTWL y jEnesisDS
- **PicoDriveTWL**
    - Fue hecho para DSi
    - No requiere un disco RAM para nds-bootstrap
        - Se puede guardar en la tarjeta SD de una DSi
        - Tiempos de carga más ágiles en TWiLight Menu++ que abriendo el emulador en la tarjeta SD de la DSi
    - Soporta argumentos
    - Limit is 3 MB on a **Flashcard**
        - Takes advantage of the DSi extra RAM or DS Memory Expansion Pak to extend this limit
    - Sin emulación de sonido
    - La velocidad de fotogramas es poco fluida

- **jEnesisDS**
    - Modo DS
        - Necesita un disco RAM en nds-boostrap para utilizarlo en tarjetas SD de DSi
        - No se puede guardar en tarjetas SD de DSi
    - Tarda un tiempo en cargar
    - No soporta argumentos
    - Límite de 3 MB en todas las plataformas (debido a que las ROMs se cargan en la RAM)
        - No DS Memory Expansion Pak or DSi Extended Memory support
        - There is a patch for *Sonic 3 & Knuckles* that removes the multiplayer, getting the size count down
    - Emula el sonido
    - La velocidad de fotogramas es fluida


<!-- Links for tables -->
[^1]: Text files containing the path to a DS homebrew app and arguments to launch it with, see [nds-hb-menu's README](https://github.com/devkitPro/nds-hb-menu#passing-arguments) for more info
[^2]: Only for retail ROMs, homebrew do not have specific save files
[^7]: Only when running in B4DS mode
[^3]: Only works from a SuperCard DSTWO flashcard as it has additional processing power and RAM inside the flashcard
[^4]: When running in DSi Mode, it can use the DSP for better sound
[^5]: Requires a Slot-2 flashcart and thus only works on DS Phat and DS Lite
[^6]: jEnesis can only save when running from a flashcard, but PicoDriveTWL can save from SD and flashcard
[^8]: Saving requires a flashcard or a new version of the emulator (legacy version is used by default)
[^9]: Has a bug where the BIOS screen is not shown when starting a game via arguments
[^10]: Not required for native, required for a few games with GBARunner2, required for all games with GBARunner3

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[a8ds]: https://github.com/wavemotion-dave/A8DS
[colecods]: https://github.com/wavemotion-dave/ColecoDS
[dstwo]: http://eng.supercard.sc
[fastvideodsplayer]: https://github.com/Gericom/FastVideoDSPlayer
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[ngpds]: https://github.com/FluBBaOfWard/NGPDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[nitroswan]: https://github.com/FluBBaOfWard/NitroSwan
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://github.com/FluBBaOfWard/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[neods]: https://www.gamebrew.org/wiki/NeoDS
[nintellivision]: https://github.com/wavemotion-dave/NINTV-DS
[tunavids]: https://github.com/chishm/tuna-vids
