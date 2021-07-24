---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Cómo usar el Wi-Fi de la Nintendo DS
---

- En aplicaciones de Nintendo DS solo puedes usar Wifis abiertos o con claves WEP
- En aplicaciones Nintendo DSi-Enhanced/Exclusive abriéndose en Modo DSi, tienes como opciones adicionales WPA y WPA2

Se pueden usar puntos de acceso (hotspots), así no tendrás que cambiar los ajustes de tu router.

### Crear un punto de acceso
Hay varias guías para crear puntos de acceso compatibles para la DS con macOS y Linux en GBAtemp. Si usas Windows puedes lanzar Linux desde un CD/USB.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Restaurar CWF de Nintendo DS
1. Abre la Configuración Wi-Fi de Nintendo
1. Conéctate a tu punto de acceso
1. Pon uno de los valores listados abajo como DNS primario, dependiendo del servicio que quieras usar:
   - **[Wiimmfi](https://wiimmfi.de)** - `164.132.44.106` o `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/)** - `172.104.88.237`
1. Pon `1.1.1.1` como DNS secundario
1. Quizá necesites parchear tu juego con NoSSL, dependiendo de cuál sea

### Parchear manualmente tus ROMs de DS
Sigue esta guía en caso de que tu proveedor de internet bloquee servidores DNS personalizados, en otro caso se recomienda *encarecidamente* seguir la guía anterior.

- Users of GNU/Linux and macOS can follow very similar instructions, but will have to use Mono
- WfcPatcher currently doesn't support DSiWare

1. Download [WfcPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WfcPatcher is saved and open that folder
1. Crea un archivo de texto
1. En el archivo, añade `wfcpatcher.exe %1 --domain wiimmfi.de`, guárdalo con el nombre `patch.bat` y cierra la ventana
   - Puedes reemplazar wiimmfi.de por otro enlace si quieres usar otro servidor
   - Si el archivo sigue pareciendo un documento de texto, [activa las extensiones de archivo](https://dsi.cfw.guide/file-extensions-%28windows%29) y quita `.txt` del nombre del archivo
1. Arrastra las ROMs que quieres parchear a patch.bat
1. ¡Hecho! Las ROMs parcheadas son las que terminan en (wiimmfi)

Don't forget to remove any DNS you might have saved on your Wi-Fi settings before attempting to connect with the patched ROM.

### Solución de problemas y más lectura
If you are receiving any errors, you can enter the error code in Wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

For more specific troubleshooting and more information, such as how to connect to online on emulators or using a Nintendo Wi-Fi USB Connector, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
