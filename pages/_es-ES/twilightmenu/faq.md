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
- Reiniciar la consola
- Si no funciona, formatea tu SD en FAT32 con 32 KB de cluster/asignación
- Si aún no funciona, prueba con otra SD

#### ¿Dónde está el tema Acekard/Wood UI?
The Acekard (also called Wood UI) theme was removed due to its buggy behavior and causing SD card corruption. Esperad a que lo arreglemos. Puedes ver el progreso realizado en [esta PR](https://github.com/DS-Homebrew/TWiLightMenu/pull/1109).

#### ¿Cómo evito que TWiLight Menu++ se reinice o lance un Guru Meditation Error cuando cargo un juego?
Ve a los ajustes de TWLMenu++ y desactiva `Update recently played list`.

#### ¿Por qué me salta un pantallazo blanco cuando intento cargar un juego de la tarjeta SD?
Ver [Tengo problemas con mis ROM(s), ¿qué debo hacer?](../nds-bootstrap/faq?faq=im-having-issues-with-my-roms-what-should-i-do) en la página FAQ de nds-bootstrap.

#### ¿Cómo puedo usar trucos?
You need to have a cheat DB in the form of a `usrcheat.dat` file in the `sd:/_nds/TWiLightMenu/extras/` folder. The most updated cheat database is [DeadSkullzJr's NDS(i) Cheat Databases](https://gbatemp.net/threads/488711/).
- On the 3DS, this database is available in the Universal-Updater app as "NDS(i) Cheat Databases". This will automatically install it to the required location.

Alternatively, you can use [r4cce](http://hp.vector.co.jp/authors/VA013928/soft_en.html) to create your own cheat DB.

#### ¿Cómo puedo poner una imagen personalizada en la pantalla superior del tema DSi?
A random `.png` image in `sd:/_nds/TWiLightMenu/dsimenu/photos/` will be shown each time the menu is loaded. If there are no applicable images, screenshots taken by nds-bootstrap will be used instead.

- Las imágenes no deben superar los 208x156 de resolución
- Si salta algún error, probablemente sea por el tamaño de la imagen. Por favor, utilice [tinypng](https://tinypng.com) para reducir el tamaño

#### ¿Cómo consigo juegos?
Puedes descargar juegos homebrew desde [Universal-DB](https://db.universal-team.net/ds) y [GameBrew](https://www.gamebrew.org/wiki/List_of_all_DS_homebrew#Games). Si quieres volcar tus propios juegos:
- On DS you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your GBA games and, if you have a Slot-2 flashcart, DS games. If you only have a Slot-1 flashcard and would like to dump a DS game, you can use [Wooddumper](https://digiex.net/attachments/wooddumper_r89-zip.14735/), which requires a Wi-Fi connection compatible with the DS, as well as an FTP client on a separate device to receive the ROM
- On DSi you can use [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) to dump your DS games and DSiWare
- On 3DS you can use [GodMode9](https://github.com/d0k3/GodMode9/releases) to dump your DS games, DSiWare, and Virtual Console titles

#### ¿Puedo transferir las partidas guardadas de mis cartuchos a la SD o viceversa?
Yes. You can use [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases) on 3DS, or [GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) on DSi / 3DS.

#### ¿Cómo cambio el idioma de TWiLight Menu++?
1. Abre los ajustes de TWiLight Menu++ manteniendo <kbd>SELECT</kbd> mientras se está abriendo
1. Change the first option until you see the language you want, then exit settings
   - You may also want to change the first three options on the nds-bootstrap settings page as they control the language and region of DS games and their titles in TWiLight Menu++

#### ¿Esto sirve como emulador de DS(i)?
No, esto no es un emulador. The menu and DS games (loaded via nds-bootstrap) are ran natively in the console's DS/DSi mode. The only consoles emulated are the past consoles, but partially for GBA (as some or all parts like graphics are ran natively).

#### ¿Qué sistemas soporta TWiLight Menu++?
Vea [Lista de Sistemas Compatibles con TWiLight Menu++](../ds-index/emulators#list-of-supported-systems-by-twilight-menu).

#### Can exploits of Slot-1 games boot TWiLight Menu++?
No. SD card access is only granted to DSiWare applications, so Slot-1 games cannot launch (or even access) TWiLight Menu++.

#### ¿Por qué no puedo encontrar/ver mis juegos?
There are a multiple reasons you may be unable to find them.
- The `_nds` folder found on the root of the SD card is not intended for applications one would access via TWiLight Menu++, due to its reservation for functionality based files (skins, configuration, images, emulators and more). If you've placed your titles here, please move them to another location.
- If you have more than 39 items in a folder and all of the slots on the menu are taken, your games may be on the next page. Use <kbd class="l">L</kbd>/<kbd class="r">R</kbd> or <kbd>SELECT</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch pages
- If your game or folder is hidden, you may need to show hidden files via TWiLight Menu++'s GUI settings
- If your game is in an archive (`zip`, `rar`, `7z`, etc), it cannot be used by TWiLight Menu++. Extract the game from the archive to use it
- If your game does not use one of the [supported extensions](../ds-index/emulators#list-of-systems-supported-by-twilight-menu), you may have to change the extension by renaming the file

#### ¿Cómo puedo acceder a los ajustes de TWiLight Menu++?
La forma de acceder a los ajustes de TWiLight Menu++ varía según la configuración.
- **DS Classic Menu:** Tap the DS icon at the bottom of the lower screen
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes: using SELECT Menu:** Press <kbd>SELECT</kbd>, then launch the Settings Applet (use the D-PAD to highlight options)
- **Nintendo DSi/SEGA Saturn/Homebrew Launcher themes not using SELECT Menu:** Hitting <kbd>SELECT</kbd> will bring you to the DS Classic Menu
- **Nintendo 3DS theme:** Tap the the wrench icon on the lower screen
- **R4 Original theme:** Hit <kbd>START</kbd> (if you’re in the file browser), then hit <kbd>SELECT</kbd>

También puedes mantener presionado <kbd>SELECT</kbd> al iniciar TWiLight Menu++ para acceder directamente a los ajustes.
