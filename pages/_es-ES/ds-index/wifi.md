---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Cómo usar el Wi-Fi de la Nintendo DS
---

- En aplicaciones de Nintendo DS, solo puedes usar Wifis abiertos o con claves WEP
- On Nintendo DSi enhanced/exclusive applications, you have the addition of WPA and WPA2 support

Se pueden usar puntos de acceso (hotspots), así no tendrás que cambiar los ajustes de tu router.

### Creating a Hotspot
Hay varias guías para crear puntos de acceso compatibles para un juego de DS con macOS y Linux en GBAtemp. Si estás en Windows puedes lanzar Linux con un Live CD/USB.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Restaurar CWF de Nintendo DS
1. Ve a la configuración del CWF de Nintendo
1. Conéctate a tu punto de acceso
1. Pon uno de los valores listados abajo como DNS primario, dependiendo del servicio que quieras usar:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` o `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. Pon `1.1.1.1` como DNS secundario
1. Quizá necesites parchear tu juego con NoSSL, dependiendo de cuál sea

### Manually Patching Your DS ROMs
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

Note: Users of GNU/Linux and macOS can follow very similar instructions, but will have to use mono

1. Download [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WFCPatcher is saved and open that folder
1. Create a text file with the name `patch.bat`
1. In the file, enter `wfcpatcher.exe %1 --domain wiimmfi.de` then save and close (you can replace wiimmfi.de with another URL, if you wish to use a different server)
1. Now drag all the roms you wish to patch on to patch.bat
1. Done! the patched roms will be the ones ending in (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM

### Troubleshooting and Further Reading
If you are recieving any errors, you can enter the error code in wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
