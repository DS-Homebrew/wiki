---
lang: es-ES
layout: wiki
section: twilightmenu
category: other
title: Preguntas frecuentes y soluciones
description: Preguntas frecuentes y soluciones para TWiLight Menu++
---

Si tienes más preguntas, visita el [hilo de GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### P: ¿Por qué mi 3DS / 2DS se bloquea en pantallas negras, crasheos, apagados, etc cuando lanzo TWiLight Menu++?
R: Puede que TWL_FIRM esté corrompido. Sigue esta guía para solucionarlo: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### P: ¿Qué puedo hacer para arreglar el pantallazo blanco al abrir TWiLight Menu++?
R:
- Prueba a poner la consola en modo reposo (cerrando la tapa o presionando el botón de sueño en la O2DS) y a despertarla
- Si no funciona, formatea tu SD en FAT32 con 32KB de cluster/asignación
- Si aún no funciona, prueba con otra SD

#### P: ¿Por qué me salta un pantallazo blanco cuando intento cargar un juego de la tarjeta SD?
R:
- Comprueba [la lista de compatibilidad de nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) y asegúrate de que el juego es compatible
- Prueba a quitar todos los trucos para ese juego, ya que pueden no ser aún compatibles con nds-bootstrap, puedes usar <kbd class="l">L</kbd> para desactivar todos los de un juego
- Si se trata de un juego DSi Enhanced, asegúrate de que TWiLight Menu++ esta puesto en `DS Mode`
- Si antes funcionaba, borra las carpetas `fatTable` y `patchOffsetCache` en `sd:/_nds/nds-bootstrap/`

#### P: ¿Cómo puedo usar trucos?
R: Necesitas una base de datos de trucos en un archivo `usrcheat.dat` dentro de la carpeta `sd:/_nds/TWiLightMenu/extras/`. La más actualizada es la de[DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/). Otra opción es crear la tuya propia usando [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html).

#### P: ¿Cómo puedo poner una imagen personalizada en la pantalla superior del tema DSi?
R: Una imagen `.png` aleatoria de `sd:/_nds/TWiLightMenu/dsimenu/photos/` se verá cada vez que se cargue el menú.

- Las imágenes no deben superar los 208x156 de resolución
- Si salta algún error, probablemente sea por el tamaño de la imagen. Puedes usar [tinypng](https://tinypng.com) para reducirlo

#### P: ¿Cómo consigo juegos?
R: Puedes descargar juegos homebrew desde [Universal-DB](https://db.universal-team.net/ds) y [GameBrew](https://www.gamebrew.org/wiki/List_of_DS_homebrew_applications). Si quieres volcar tus propios juegos:
- DS: Puedes usar [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) para volcar tus juegos de GBA y de DS (estos últimos sólo si tienes una flashcard para el Slot-2
- DSi: Puedes usar [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) para volcar tus juegos de DS y DSiWare
- 3DS: Puedes usar [GodMode9](https://github.com/d0k3/GodMode9/releases) para volcar tus juegos de DS, DSiWare y títulos de la Virtual Console

#### P: ¿Puedo transferir las partidas guardadas de mis cartuchos a la SD o viceversa?
R: Sí, puedes usar [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) en la DSi y 3DS o [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) en la 3DS.

#### P: ¿Cómo cambio el idioma de TWiLight Menu++?
R:
1. Abre los ajustes de TWiLight Menu++ manteniendo <kbd>SELECT</kbd> mientras se está abriendo
1. Pulsa <kbd class="l">L</kbd> o <kbd class="face">Y</kbd> una vez (flashcards / 3DS) o dos (DSi)
1. Cambia la primera opción hasta que veas el idioma que quieres, después sal de los ajustes
   - Quizá quieras cambiar las siguientes dos opciones, ya que controlan el idioma dentro de los juegos y sus títulos en TWiLight Menu++

#### P: ¿Qué sistemas soporta TWiLight Menu++?

R:

| Formato                   | Cargador                                               | Extensiones                            | Archivo de guardado                    |
| ------------------------- | ------------------------------------------------------ | -------------------------------------- | -------------------------------------- |
| ARGV[^1]                  | Nativo                                                 | `.argv`                                |                                        |
| Atari 2600                | [StellaDS][stellads]                                   | `.a26`                                 |                                        |
| Atari 5200                | [A5200DS][a5200ds]                                     | `.a52`                                 |                                        |
| Atari 7800                | [A7800DS][a7800ds]                                     | `.a78`                                 |                                        |
| DS                        | [nds-bootstrap][ndsbs], kernel de la flashcard, nativo | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `saves/[nombre rom].sav`[^2]           |
| DSiWare                   | [Unlaunch][unlaunch]                                   | `.nds`, `.dsi`, `.ids`, `.srl`, `.app` | `[nombre rom].pub`, `[nombre rom].prv` |
| Plugin DSTWO              | [DSTWO][dstwo][^3]                                     | `.plg`                                 |                                        |
| Game Boy (Color)          | [GameYob][gameyob]                                     | `.gb`, `.sgb`, `.gbc`                  | `[nombre rom].sav`                     |
| Game Boy Advance          | [GBARunner2][gbarunner2], nativo[^4]                   | `.agb`, `.gba`, `.mb`                  | `[nombre rom].sav`                     |
| Game Gear                 | [S8DS][s8ds]                                           | `.gg`                                  | `[nombre rom].gg.sav`                  |
| Genesis / Mega Drive      | [jEnesisDS][jenesis], [PicoDriveTWL][pdtwl]            | `.gen`                                 | `[nombre rom].srm`[^5]                 |
| Master System             | [S8DS][s8ds]                                           | `.sms`                                 | `[nombre rom].sms.sav`                 |
| Video MPEG4               | [Reproductor MPEG4][mpeg4player]                       | `.mp4`                                 |                                        |
| NES / Famicom             | [nesDS][nesds]                                         | `.nes`, `.fds`                         | `[nombre rom].sav`                     |
| PC Engine / TurboGrafx-16 | [NitroGrafx][nitrografx]                               | `.pce`                                 |                                        |
| Vídeo RVID                | [Rocket Video Player][rvidplayer]                      | `.rvid`                                |                                        |
| SNES[^6]                  | [SNEmulDS][snemulds]                                   | `.smc`, `.sfc`                         | `[nombre rom].srm`[^7]                 |
{:.table}

- Footnotes -
{:footnotes}

#### P: ¿Por qué no funciona la pantalla táctil con sudokuhax?
R: La pantalla táctil a veces no funciona, dependiendo del archivo de guardado de sudokuhax.

#### P: ¿The Biggest Loser es capaz de lanzar TWiLight Menu++?
R: No. The Biggest Loser es un juego de Slot-1 y no DSiWare, y el acceso a la SD está desactivado al usar cartuchos en el Slot-1.

[^1]: Archivos de textos que contienen la ruta a una app homebrew y sus parámetros de lanzamiento, lee el [README de nds-hb-menu](https://github.com/devkitPro/nds-hb-menu#passing-arguments) para más información
[^2]: Solo para ROMs comerciales, las apps homebrew no tienen un archivo de guardado específico
[^3]: Solo funciona para la flashcard SuperCard DSTWO ya que tiene potencia de procesamiento y RAM adicionales dentro del cartucho
[^4]: Se necesita una flashcard en el Slot-2 flashcard y por ello solo funciona en las DS Phat y DS Lite
[^5]: jEnesis solo puede guardar si se lanza desde una flashcard, pero PicoDriveTWL puede guardar tanto en una SD como en una flashcard
[^6]: Solo aparece cuando se está usando una flashcard o está instalado Unlaunch
[^7]: Solo puede guardar si se lanza desde una flashcard

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
