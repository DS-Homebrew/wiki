---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Cómo usar el Wi-Fi de la Nintendo DS
---

- En aplicaciones de Nintendo DS, solo puedes usar Wifis abiertos o con claves WEP
- En las aplicaciones mejoradas/exclusivas de Nintendo DSi, también hay soporte para WPA y WPA2

Se pueden usar puntos de acceso (hotspots), así no tendrás que cambiar los ajustes de tu router.

### Creating a hotspot
Hay varias guías para crear puntos de acceso compatibles para un juego de DS con macOS y Linux en GBAtemp. Si estás en Windows puedes lanzar Linux con un Live CD/USB.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

### Nintendo DS WFC restoration
1. Ve a la configuración del CWF de Nintendo
1. Conéctate a tu punto de acceso
1. Pon uno de los valores listados abajo como DNS primario, dependiendo del servicio que quieras usar:
   - **Wiimmfi** - `164.132.44.106`
   - **AltWFC/WFCZwei** - `172.104.88.237` o `104.131.93.87`
   - **BenFi** - `24.218.177.103`
   - **Twilit WFC** - `34.66.49.81`
1. Pon `1.1.1.1` como DNS secundario
1. Quizá necesites parchear tu juego con NoSSL, dependiendo de cuál sea

### Manually patching your DS ROMs
Sigue esta guía en caso de que tu proveedor de internet bloquee servidores DNS personalizados, en otro caso se recomienda *encarecidamente* seguir la guía anterior.

Nota: Los usuarios de GNU/Linux y macOS pueden seguir instrucciones muy similares pero tendrán que usar mono

1. Descarga [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copia la ROM del juego que quieres parchear en la misma carpeta en la que se encuentra WFCPatcher y entra en la misma
1. Crea un fichero de texto con el nombre `patch.bat`
1. Escribe dentro del archivo `wfcpatcher.exe %1 --domain wiimmfi.de`, guarda los cambios y ciérralo (puedes cambiar wiimmfi.de por otra URL si quieres usar un servidor distinto)
1. Arrastra las ROMs que quieres parchear a patch.bat
1. ¡Hecho! Las ROMs parcheadas son las que terminan en (wiimmfi)

No olvides borrar cualquier DNS que hayas guardado previamente en la configuración WiFi antes de intentar conectarte con la ROM parcheada

### Troubleshooting and further reading
If you are receiving any errors, you can enter the error code in wiimmfi's [troubleshooter](https://wiimmfi.de/error) for ways to fix it.

Para resolver problemas más concretos y obtener más información, como conectarse online a través de un emulador, puedes leer esta [Guía de Wiimmfi](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) escrita por miembros de [Mario Kart DS Network](https://discord.gg/pa9bea6).
