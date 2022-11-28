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
En GBAtemp hay guías para crear un punto de acceso compatible con DS en ordenadores macOS y Linux.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

An Android mobile hotspot set to Open (none) security would also work.

Windows no puede crear un punto de acceso compatible, por lo que los usuarios de Windows necesitarán arrancar en Linux para configurar uno.
#### Otros métodos
If you cannot create a DS-compatible hotspot using the above methods, you may be able to use another method.
- Conector USB Wi-Fi de Nintendo
  - Aunque esto aún puede ser usado, no se recomienda porque requiere una versión de 32 bits de Windows XP o Vista
  - For information on setting up a Nintendo Wi-Fi USB Connector, read Section 3 of this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6)
- Changing router settings to be DS-compatible
  - This is not recommended because it opens your network to intruders, even if you use WEP security. It may also cause issues for other users of your network. If you choose to do this, it is recommended that you use a secondary router or guest network, if available
  - Not all routers support guest networks or turning security off
- Extensores Wi-Fi

#### Ajustes
Si está configurando una red para que sea compatible con DS, debe cumplir con las siguientes especificaciones:
- Seguridad WEP o abierta (sin seguridad)
- Frecuencia inalámbrica de 2,4 GHz
- Modo inalámbrico 802.11b
  - This may be listed as "Legacy mode" or something similar

### Restaurar CWF de Nintendo DS
1. Abre la Configuración Wi-Fi de Nintendo
1. Conéctate a tu punto de acceso
1. Pon uno de los valores listados abajo como DNS primario, dependiendo del servicio que quieras usar:
   - **[Wiimmfi](https://wiimmfi.de)** - `167.86.108.126` or `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([lista de jugadores en línea](http://zwei.moe:9001))** - `172.104.88.237`
1. Pon `1.1.1.1` como DNS secundario
1. Quizá necesites parchear tu juego con NoSSL, dependiendo de cuál sea

### Parchear manualmente tus ROMs de DS
Follow the guide below in case your ISP blocks custom DNS servers, otherwise it is *strongly* recommended to follow the guide above.

- Users of GNU/Linux and macOS can follow very similar instructions, but will have to use Mono
- WFCPatcher actualmente no es compatible con DSiWare

1. Descarga [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copy the ROM of the game you want to patch to the same folder where WfcPatcher is saved and open that folder
1. Crea un archivo de texto
1. En el archivo, añade `wfcpatcher.exe %1 --domain wiimmfi.de`, guárdalo con el nombre `patch.bat` y cierra la ventana
   - Puedes reemplazar wiimmfi.de por otro enlace si quieres usar otro servidor
   - Si el archivo sigue pareciendo un documento de texto, [activa las extensiones de archivo](https://dsi.cfw.guide/file-extensions-%28windows%29) y quita `.txt` del nombre del archivo
1. Arrastra las ROMs que quieres parchear a patch.bat
1. ¡Hecho! Las ROMs parcheadas son las que terminan en (wiimmfi)

No olvides borrar cualquier DNS que hayas guardado previamente en la configuración Wi-Fi antes de intentar conectarte con la ROM parcheada.

### Solución de problemas y más lectura
Si salta algún error, puedes introducirlo en el [troubleshooter de Wiimmfi](https://wiimmfi.de/error) para encontrar una solución.

For more specific troubleshooting and more information, such as how to connect to online on emulators or using a Nintendo Wi-Fi USB Connector, you can read this [Wiimmfi Guide](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) written by members of the [Mario Kart DS Network](https://discord.gg/pa9bea6).
