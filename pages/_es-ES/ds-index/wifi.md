---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Cómo usar el Wi-Fi de la Nintendo DS
---

- On Nintendo DS applications, you can only use WEP and Open Wi-Fi security settings
- On Nintendo DSi-Enhanced/Exclusive applications running in DSi Mode, you have the additional options of WPA and WPA2 security

Se pueden usar puntos de acceso (hotspots), así no tendrás que cambiar los ajustes de tu router.

### Crear un punto de acceso
There are guides for creating a DS-compatible hotspot on macOS and Linux computers on GBAtemp. If you're on Windows, you can use a Linux live boot.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Restaurar CWF de Nintendo DS
1. Launch Nintendo Wi-Fi Connection Setup
1. Conéctate a tu punto de acceso
1. Pon uno de los valores listados abajo como DNS primario, dependiendo del servicio que quieras usar:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` or `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/)** - `172.104.88.237`
1. Pon `1.1.1.1` como DNS secundario
1. Quizá necesites parchear tu juego con NoSSL, dependiendo de cuál sea

### Parchear manualmente tus ROMs de DS
Sigue esta guía en caso de que tu proveedor de internet bloquee servidores DNS personalizados, en otro caso se recomienda *encarecidamente* seguir la guía anterior.

Note: Users of GNU/Linux and macOS can follow very similar instructions, but will have to use Mono

1. Descarga [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copia la ROM del juego que quieres parchear en la misma carpeta en la que se encuentra WFCPatcher y entra en la misma
1. Create a text file
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save the text file with the name `patch.bat` and close the window
   - You can replace wiimmfi.de with another URL, if you wish to use a different server
   - If the file still appears to be a text document, [enable file name extensions](https://dsi.cfw.guide/file-extensions-%28windows%29) and remove `.txt` from the file name
1. Now drag all the ROMs you wish to patch on to patch.bat
1. ¡Hecho! the patched ROMs will be the ones ending in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM.

### Solución de problemas y más lectura
If you are receiving any errors, you can enter the error code in Wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators or using a Nintendo Wi-Fi USB Connector, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
