---
lang: es-ES
layout: faq
section: twilightmenu
category: other
title: Preguntas frecuentes y soluciones
long_title: Preguntas frecuentes y solución de errores para TWiLight Menu++
description: Preguntas frecuentes y solución de errores de TWiLight Menu++
---

Si tienes más preguntas, visita el [hilo de GBAtemp](https://gbatemp.net/threads/ds-i-3ds-twilight-menu-gui-for-ds-i-games-and-ds-i-menu-replacement.472200/).
{:.alert .alert-info}

#### Why does my 3DS/2DS get stuck on black screens, crash, power off, etc when launching TWiLight Menu++?
Puede que TWL_FIRM esté corrompido. Sigue esta guía para solucionarlo: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### ¿Qué puedo hacer para arreglar el pantallazo blanco al abrir TWiLight Menu++?
- Prueba a poner la consola en modo reposo (cerrando la tapa o presionando el botón de sueño en la O2DS) y a despertarla
- Si no funciona, formatea tu SD en FAT32 con 32 KB de cluster/asignación
- Si aún no funciona, prueba con otra SD

#### ¿Dónde está el tema Acekard/Wood UI?
El tema acekard (también llamado Wood UI) ha sido eliminado debido a la gran cantidad de bugs que tiene y por corromper la tarjeta SD. Esperad a que lo arreglemos. Puedes ver el progreso realizado en [esta PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### ¿Cómo evito que TWiLight Menu++ se reinice o lance un Guru Meditation Error cuando cargo un juego?
Ve a los ajustes de TWLMenu++ y desactiva `Update recently played list`.

#### ¿Por qué me salta un pantallazo blanco cuando intento cargar un juego de la tarjeta SD?
- Comprueba [la lista de compatibilidad de nds-bootstrap](https://docs.google.com/spreadsheets/d/1LRTkXOUXraTMjg1eedz_f7b5jiuyMv2x6e_jY_nyHSc/htmlview#gid=0) y asegúrate de que el juego es compatible
- Prueba a quitar todos los trucos para ese juego, ya que pueden no ser aún compatibles con nds-bootstrap, puedes usar <kbd class="l">L</kbd> para desactivar todos los de un juego
- Si antes funcionaba, borra las carpetas `fatTable` y `patchOffsetCache` en `sd:/_nds/nds-bootstrap/`

#### ¿Cómo puedo usar trucos?
Necesitas una base de datos de trucos en un archivo `usrcheat.dat` dentro de la carpeta `sd:/_nds/TWiLightMenu/extras/`. La más actualizada es la de[DeadSkullzJr](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- En la 3DS, esta base de datos está disponible en la aplicación de Universal-Updater como "NDS Cheat Databases." Te la instalará en la ubicación correcta.

Otra opción es crear la tuya propia usando [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html).

#### ¿Cómo puedo poner una imagen personalizada en la pantalla superior del tema DSi?
Una imagen `.png` aleatoria de `sd:/_nds/TWiLightMenu/dsimenu/photos/` se verá cada vez que se cargue el menú.

- Las imágenes no deben superar los 208x156 de resolución
- Si salta algún error, probablemente sea por el tamaño de la imagen. Puedes usar [tinypng](https://tinypng.com) para reducirlo

#### ¿Cómo consigo juegos?
Puedes descargar juegos homebrew desde [Universal-DB](https://db.universal-team.net/ds) y [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Si quieres volcar tus propios juegos:
- DS: Puedes usar [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) para volcar tus juegos de GBA y de DS (estos últimos sólo si tienes una flashcard para el Slot-2)
- DSi: Puedes usar [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) para volcar tus juegos de DS y DSiWare
- 3DS: Puedes usar [GodMode9](https://github.com/d0k3/GodMode9/releases) para volcar tus juegos de DS, DSiWare y títulos de la Virtual Console

#### ¿Puedo transferir las partidas guardadas de mis cartuchos a la SD o viceversa?
Sí, puedes usar [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) en la DSi y 3DS o [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) en la 3DS.

#### ¿Cómo cambio el idioma de TWiLight Menu++?
1. Abre los ajustes de TWiLight Menu++ manteniendo <kbd>SELECT</kbd> mientras se está abriendo
1. Press <kbd class="l">L</kbd> or <kbd class="face">Y</kbd> once (on flashcard/3DS) or twice (on DSi)
1. Cambia la primera opción hasta que veas el idioma que quieres, después sal de los ajustes
   - Quizá quieras cambiar las siguientes dos opciones, ya que controlan el idioma dentro de los juegos y sus títulos en TWiLight Menu++

#### ¿Esto sirve como emulador de DS(i)?
No, esto no es un emulador. El menú y los juegos de DS (cargados con nds-bootstrap) se ejecutan de forma nativa en los modos DS/DSi de la consola. Solo se emulan consolas anteriores, y la GBA de forma parcial (ya que algunas partes como los gráficos se ejecutan de forma nativa).

#### ¿Qué sistemas soporta TWiLight Menu++?

See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### ¿Por qué no funciona la pantalla táctil con sudokuhax?
Depending on the save file of sudokuhax, the touch screen inputs may not work.

#### ¿The Biggest Loser es capaz de lanzar TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.
