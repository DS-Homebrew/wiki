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

#### ¿Por qué mi 3DS se atora en pantallas negras, se apaga, etc al iniciar TWiLight Menu++?
Puede que TWL_FIRM esté corrompido. Sigue esta guía para solucionarlo: <https://3ds.hacks.guide/troubleshooting#dsi--ds-functionality-is-broken-after-completing-the-guide>

#### ¿Qué puedo hacer para arreglar el pantallazo blanco al abrir TWiLight Menu++?
- Prueba a poner la consola en modo reposo (cerrando la tapa o presionando el botón de sueño en la O2DS) y a despertarla
- Si no funciona, formatea tu SD en FAT32 con 32 KB de cluster/asignación
- Si aún no funciona, prueba con otra SD

#### ¿Dónde está el tema Acekard/Wood UI?
The Acekard (also called Wood UI) theme was removed due to its buggy behavior and causing SD card corruption. Esperad a que lo arreglemos. Puedes ver el progreso realizado en [esta PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### ¿Cómo evito que TWiLight Menu++ se reinice o lance un Guru Meditation Error cuando cargo un juego?
Ve a los ajustes de TWLMenu++ y desactiva `Update recently played list`.

#### Why do I get a white screen when trying to load a DS game from SD card?
See [Why do I get a white screen when trying to load a game from SD card?](../nds-bootstrap/faq?faq=why-do-i-get-a-white-screen-when-trying-to-load-a-game-from-sd-card) on the nds-bootstrap FAQ page.

#### ¿Cómo puedo usar trucos?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/).
- On the 3DS, this database is available in the Universal-Updater app as "NDS Cheat Databases." This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### ¿Cómo puedo poner una imagen personalizada en la pantalla superior del tema DSi?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded. If there are no applicable images, screenshots taken by nds-bootstrap will be used instead.

- The images(s) must be no bigger than 208x156
- If you have errors, it's most likely an error with the image size. Please use [tinypng](https://tinypng.com) to reduce the size

#### ¿Cómo consigo juegos?
You can download homebrew games from [Universal-DB](https://db.universal-team.net/ds) and [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). To get dumps of your retail games:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### Can I get the save files from my Game Cards onto my SD card or vice versa?
Yes, you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi and 3DS or [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS.

#### ¿Cómo cambio el idioma de TWiLight Menu++?
1. Abre los ajustes de TWiLight Menu++ manteniendo <kbd>SELECT</kbd> mientras se está abriendo
1. Press <kbd class="l">L</kbd> or <kbd class="face">Y</kbd> once (on flashcard/3DS) or twice (on DSi)
1. Cambia la primera opción hasta que veas el idioma que quieres, después sal de los ajustes
   - Quizá quieras cambiar las siguientes dos opciones, ya que controlan el idioma dentro de los juegos y sus títulos en TWiLight Menu++

#### ¿Esto sirve como emulador de DS(i)?
No, this is not an emulator. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### ¿Qué sistemas soporta TWiLight Menu++?
See [List of Systems Supported by TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### How do I get IR working properly?
You need to downgrade both TWiLight Menu++ and nds-bootstrap to v12.2.1 and v0.30.1, respectively. After doing so, make sure both `Slot-1 microSD access` is turned off, and `SELECT button` is set to `SELECT Menu` in TWLMenu++ Settings.
- Please note that you'll lose the ability to launch DSi-Enhanced games in DSi mode, as well as launching DSi-Exclusives and DSiWare.
- If you don't want to downgrade, then IR should work on the latest TWLMenu++ and nds-bootstrap versions, with *Pokemon Black & White Versions 1 & 2*.

#### ¿The Biggest Loser es capaz de lanzar TWiLight Menu++?
No. As The Biggest Loser is a Slot-1 game, and not a DSiWare game, SD access is disabled when running Slot-1 cards.

#### Why can't I find/see my games?
There are a multiple reasons you may be unable to find them.
- If you placed your games in the `_nds` folder, you are unable to access it because it is permanently invisible in TWiLight Menu++. Please move them to any other location on the SD card
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If the game type is set to be hidden in Emulation/HB settings, it won't appear on menus. Change these settings so that they will be displayed
- If your game is in an archive (`zip`, `rar`, `7z`, etc), it cannot be used by TWiLight Menu++. Extract the game from the archive to use it
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file
