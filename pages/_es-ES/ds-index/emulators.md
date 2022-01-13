---
lang: en-US
layout: wiki
section: ds-index
category: reference
title: Emulators on the DS
description: A reference on Emulators on the DS
---

Hay diferentes emuladores disponibles para DS y DSi. Esta página ofrece una explicación completa sobre la variedad de emuladores y lanzadores incluidos con TWiLight Menu++.

### Lista de sistemas soportados por TWiLight Menu++

| Formato                 | Lanzador                                               | Extensiones                            | Archivos de guardado                                           |
| ----------------------- | ------------------------------------------------------ | -------------------------------------- | -------------------------------------------------------------- |
| ARGV[^1]                | Nativo                                                 | `.argv`                                |                                                                |
| Atari 2600              | [StellaDS][stellads]                                   | `.a26`                                 |                                                                |
| Atari 5200              | [A5200DS][a5200ds]                                     | `.a52`                                 |                                                                |
| Atari 7800              | [A7800DS][a7800ds]                                     | `.a78`                                 |                                                                |
| Atari XEGS              | [XEGS-DS][xegs-ds]                                     | `.xex`, `.atr`                         |                                                                |
| ColecoVision            | [S8DS][s8ds], [ColecoDS][colecods]                     | `.col`                                 |                                                                |
| DS                      | [nds-bootstrap][ndsbs], kernel de la flashcard, nativo | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nombre de la ROM].sav`[^2]                             |
| DSiWare                 | [Unlaunch][unlaunch], [nds-bootstrap][ndsbs]           | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nombre de la ROM].pub`, `saves/[nombre de la ROM].prv` |
| Plugin DSTWO            | [DSTWO][dstwo][^3]                                     | `.plg`                                 |                                                                |
| Game Boy (Color)        | [GameYob][gameyob]                                     | `.gb`, `.sgb`, `.gbc`                  | `[nombre de la ROM].sav`                                       |
| Game Boy Advance        | [GBARunner2][gbarunner2][^4], nativo[^5]               | `.agb`, `.gba`, `.mb`                  | `[nombre de la ROM].sav`                                       |
| Game Gear               | [S8DS][s8ds]                                           | `.gg`                                  | `[nombre de la ROM].gg.sav`                                    |
| Genesis/Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]            | `.gen`                                 | `[nombre de la ROM].srm`[^6]                                   |
| Intellivision           | [Nintellivision][nintellivision]                       | `.int`                                 |                                                                |
| Master System           | [S8DS][s8ds]                                           | `.sms`                                 | `[nombre de la ROM].sms.sav`                                   |
| Neo Geo Pocket (Color)  | [NGPDS][ngpds]                                         | `.ngp`, `.ngc`                         | `/data/ngpds/[nombre de la ROM].ngp.fla`                       |
| Fast Video              | Próximamente                                           | `.fv`                                  |                                                                |
| NES/Famicom             | [nesDS][nesds]                                         | `.nes`, `.fds`                         | `[nombre de la ROM].sav`                                       |
| PC Engine/TurboGrafx-16 | [NitroGrafx][nitrografx]                               | `.pce`                                 |                                                                |
| Rocket Video            | [Rocket Video Player][rvidplayer]                      | `.rvid`                                |                                                                |
| SG-1000                 | [S8DS][s8ds], [ColecoDS][colecods]                     | `.sg`                                  |                                                                |
| Sord M5                 | [ColecoDS][colecods]                                   | `.m5`                                  |                                                                |
| SNES[^7]                | [SNEmulDS][snemulds]                                   | `.smc`, `.sfc`                         | `[nombre de la ROM].srm`[^8]                                   |
| WonderSwan (Color)      | [NitroSwan][nitroswan]                                 | `.ws`, `.wsc`                          | ???                                                            |
{:.table}

- Footnotes -
{:footnotes}

Estos son los emuladores recomendados y lanzadores que están presentes en TWiLight Menu++. Existen otros emuladores para estas consolas (tales como lolSnes, Gbaemu4ds, etc.)

### Otros emuladores para DS

| Formato | Lanzador       | Extensiones | Archivos de guardado |
| ------- | -------------- | ----------- | -------------------- |
| Neo Geo | [neoDS][neods] | `.neo`      | (desconocido)        |

## Observaciones sobre emuladores específicos
### Discos RAM
- Para que **jEnesisDS**, **neoDS** y **SNEmulDS** funcionen en la tarjeta SD de una DSi, tendrás que utilizar un disco RAM con nds-bootstrap.
   - Existen creadores de discos RAM para jEnesisDS y SNEmulDS, y están incluidos dentro de TWiLight Menu++. Necesitarás crear tu propio disco RAM para neoDS. Consulte [Crear discos RAM](../twilightmenu/creating-ram-disks) para más ayuda.
   - Se utilizan discos RAM debido a que los interceptores ARM7 (hooks) de estos emuladores no funcionan correctamente.

### Comparación entre PicoDriveTWL y jEnesisDS
- **PicoDriveTWL**
   - Fue hecho para DSi
   - No requiere un disco RAM para nds-bootstrap
      - Se puede guardar en la tarjeta SD de una DSi
      - Tiempos de carga más ágiles en TWiLight Menu++ que abriendo el emulador en la tarjeta SD de la DSi
   - Soporta argumentos
   - El límite es 2.5 MB en una **Flashcard**
      - Aprovecha la RAM extra de la DSi o el DS Memory Pak para extender su límite.
   - Sin emulación de sonido
   - La velocidad de fotogramas es poco fluida

- **jEnesisDS**
   - Modo DS
      - Necesita un disco RAM en nds-boostrap para utilizarlo en tarjetas SD de DSi
      - No se puede guardar en tarjetas SD de DSi
   - Tarda un tiempo en cargar
   - No soporta argumentos
   - Límite de 3 MB en todas las plataformas (debido a que las ROMs se cargan en la RAM)
      - No soporta DS Memory Pak ni la memoria extendida de la DSi
      - Hay un parche para Sonic 3 & Knuckles que quita el multijugador, disminuyendo el tamaño de la ROM
   - Emula el sonido
   - La velocidad de fotogramas es fluida


<!-- Links for tables -->
[^1]: Archivos de texto que contienen la ruta a una app homebrew de DS y argumentos para ejecutarla. Ver [README de nds-hb-menu](https://github.com/devkitPro/nds-hb-menu#passing-arguments) para más información
[^2]: Sólo para ROMs comerciales, el homebrew no tiene archivos de guardado específicos
[^3]: Sólo funciona en una flashcard SuperCard DSTWO, debido a que tiene potencia de proceso y RAM adicionales dentro de la flashcard
[^4]: Cuando corre en modo DSi, puede utilizar el DSP para un mejor sonido
[^5]: Necesita una flashcart Slot-2, por lo tanto sólo funciona en consolas DS y DS Lite
[^6]: jEnesisDS sólo puede guardar cuando corre en una flashcard, pero PicoDriveTWL puede guardar en la SD y la flashcard
[^7]: Sólo se muestra mientras se utiliza una flashcard, la tarjeta SD de una 3DS, o una DSi con Unlaunch instalado
[^8]: Sólo puede guardar mientras corre en una flashcard

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[colecods]: https://github.com/wavemotion-dave/ColecoDS
[dstwo]: http://eng.supercard.sc
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
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
[neods]: https://www.gamebrew.org/wiki/NeoDS
[nintellivision]: https://github.com/wavemotion-dave/NINTV-DS
