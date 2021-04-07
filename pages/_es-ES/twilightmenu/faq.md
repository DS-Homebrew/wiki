---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Preguntas frecuentes y soluciones
long_title: TWiLight Menu++ FAQ & Troubleshooting
description: FAQs and troubleshooting for TWiLight Menu++
---

Si tienes más preguntas, visita el [hilo de GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### ¿Por qué mi 3DS / 2DS se bloquea en pantallas negras, crasheos, apagados, etc cuando lanzo TWiLight Menu++?
Puede que TWL_FIRM esté corrompido. Sigue esta guía para solucionarlo: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### ¿Qué puedo hacer para arreglar el pantallazo blanco al abrir TWiLight Menu++?
- Prueba a poner la consola en modo reposo (cerrando la tapa o presionando el botón de sueño en la O2DS) y a despertarla
- Si no funciona, formatea tu SD en FAT32 con 32 KB de cluster/asignación
- Si aún no funciona, prueba con otra SD

#### ¿Cómo evito que TWiLight Menu++ se reinice o lanceun Guru Meditation Error cuando cargo un juego?
Ve a los ajustes de TWLMenu++ y desactiva `Update recently played list`.

#### ¿Por qué me salta un pantallazo blanco cuando intento cargar un juego de la tarjeta SD?
- Comprueba [la lista de compatibilidad de nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) y asegúrate de que el juego es compatible
- Prueba a quitar todos los trucos para ese juego, ya que pueden no ser aún compatibles con nds-bootstrap, puedes usar <kbd class="l">L</kbd> para desactivar todos los de un juego
- Si se trata de un juego DSi Enhanced, asegúrate de que TWiLight Menu++ esta puesto en `DS Mode`
- Si antes funcionaba, borra las carpetas `fatTable` y `patchOffsetCache` en `sd:/_nds/nds-bootstrap/`

#### ¿Cómo puedo usar trucos?
Necesitas una base de datos de trucos en un archivo `usrcheat.dat` dentro de la carpeta `sd:/_nds/TWiLightMenu/extras/`. La más actualizada es la de[DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- On the 3DS, this database is available in the Universal Updater app as "NDS Cheat Databases." This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### ¿Cómo puedo poner una imagen personalizada en la pantalla superior del tema DSi?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

#### ¿Cómo consigo juegos?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcard, DS games
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### ¿Puedo transferir las partidas guardadas de mis cartuchos a la SD o viceversa?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### ¿Cómo cambio el idioma de TWiLight Menu++?
1. Abre los ajustes de TWiLight Menu++ manteniendo <kbd>SELECT</kbd> mientras se está abriendo
1. Pulsa <kbd class="l">L</kbd> o <kbd class="face">Y</kbd> una vez (flashcards / 3DS) o dos (DSi)
1. Cambia la primera opción hasta que veas el idioma que quieres, después sal de los ajustes
   - Quizá quieras cambiar las siguientes dos opciones, ya que controlan el idioma dentro de los juegos y sus títulos en TWiLight Menu++

#### ¿Esto sirve como emulador de DS(i)?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### ¿Qué sistemas soporta TWiLight Menu++?

| Format                    | Loader                                           | Extensions                             | Save file                          |
| ------------------------- | ------------------------------------------------ | -------------------------------------- | ---------------------------------- |
| ARGV[^1]                  | Native                                           | `.argv`                                |                                    |
| Atari 2600                | [StellaDS][stellads]                             | `.a26`                                 |                                    |
| Atari 5200                | [A5200DS][a5200ds]                               | `.a52`                                 |                                    |
| Atari 7800                | [A7800DS][a7800ds]                               | `.a78`                                 |                                    |
| Atari XEGS                | [XEGS-DS][xegs-ds]                               | `.xex`, `.atr`                         |                                    |
| DS                        | [nds-bootstrap][ndsbs], flashcard kernel, native | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[rom name].sav`[^2]         |
| DSiWare                   | [Unlaunch][unlaunch]                             | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[rom name].pub`, `[rom name].prv` |
| DSTWO Plugin              | [DSTWO][dstwo][^3]                               | `.plg`                                 |                                    |
| Game Boy (Color)          | [GameYob][gameyob]                               | `.gb`, `.sgb`, `.gbc`                  | `[rom name].sav`                   |
| Game Boy Advance          | [GBARunner2][gbarunner2][^4], native[^5]         | `.agb`, `.gba`, `.mb`                  | `[rom name].sav`                   |
| Game Gear                 | [S8DS][s8ds]                                     | `.gg`                                  | `[rom name].gg.sav`                |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]      | `.gen`                                 | `[rom name].srm`[^6]               |
| Master System             | [S8DS][s8ds]                                     | `.sms`                                 | `[rom name].sms.sav`               |
| MPEG4 Video               | [MPEG4 Player][mpeg4player]                      | `.mp4`                                 |                                    |
| NES / Famicom             | [nesDS][nesds]                                   | `.nes`, `.fds`                         | `[rom name].sav`                   |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                         | `.pce`                                 |                                    |
| RVID Video                | [Rocket Video Player][rvidplayer]                | `.rvid`                                |                                    |
| SNES[^7]                  | [SNEmulDS][snemulds]                             | `.smc`, `.sfc`                         | `[rom name].srm`[^8]               |
{:.table}

- Footnotes -
{:footnotes}

#### ¿Por qué no funciona la pantalla táctil con sudokuhax?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### ¿The Biggest Loser es capaz de lanzar TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

[^1]: Archivos de textos que contienen la ruta a una app homebrew y sus parámetros de lanzamiento, lee el [README de nds-hb-menu](https://github.com/devkitPro/nds-hb-menu#passing-arguments) para más información
[^2]: Solo para ROMs comerciales, las apps homebrew no tienen un archivo de guardado específico
[^3]: Solo funciona para la flashcard SuperCard DSTWO ya que tiene potencia de procesamiento y RAM adicionales dentro del cartucho
[^4]: Puede usar DSP cuando se lanza en Modo DSi para tener mejor calidad de sonido
[^5]: Se necesita una flashcard en el Slot-2 y por ello solo funciona en las DS Phat y DS Lite
[^6]: jEnesis solo puede guardar si se lanza desde una flashcard, pero PicoDriveTWL puede guardar tanto en la SD como en la flashcard
[^7]: Solo aparece cuando se está usando una flashcard, la SD interna de la 3DS o una DSi con Unlaunch instalado
[^8]: Solo puede guardar si se lanza desde una flashcard

[a5200ds]: https://github.com/wavemotion-dave/A5200DS
[a7800ds]: https://github.com/wavemotion-dave/A7800DS
[dstwo]: http://eng.supercard.sc
[gameyob]: https://github.com/Drenn1/GameYob
[gbarunner2]: https://github.com/Gericom/GBARunner2
[jenesis]: https://www.gamebrew.org/wiki/JEnesisDS
[mpeg4player]: https://gbatemp.net/threads/544095
[ndsbs]: https://github.com/DS-Homebrew/nds-bootstrap
[nesds]: https://github.com/DS-Homebrew/NesDS
[nitrografx]: https://www.gamebrew.org/wiki/NitroGrafx
[pdtwl]: https://github.com/DS-Homebrew/PicoDriveTWL
[rvidplayer]: https://gbatemp.net/threads/539163
[s8ds]: https://www.gamebrew.org/wiki/S8DS
[snemulds]: https://www.gamebrew.org/wiki/SNEmulDS
[stellads]: https://github.com/wavemotion-dave/StellaDS
[unlaunch]: https://problemkaputt.de/unlaunch.htm
[xegs-ds]: https://github.com/wavemotion-dave/XEGS-DS
