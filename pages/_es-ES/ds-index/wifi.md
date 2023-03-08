---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Cómo usar el Wi-Fi de la Nintendo DS
---

- En aplicaciones de Nintendo DS solo puedes usar conexiones Wi-Fi sin contraseña o con cifrado WEP
- En aplicaciones con mejoras o exclusivas para DSi ejecutándose en modo DSi, puedes usar conexiones con cifrado WPA y WPA2

Puedes usar puntos de acceso móviles (hotspots), así no tendrás que cambiar los ajustes de tu rúter.

### Crear un punto de acceso
En GBAtemp hay guías (en inglés) para crear un punto de acceso compatible con DS en ordenadores que usen los sistemas operativos macOS y Linux.
- [macOS](https://gbatemp.net/threads/571658)
- [Linux](https://gbatemp.net/threads/543283)

Un hotspot sin contraseña desde un teléfono android también te servirá.

Windows no puede crear un punto de acceso compatible, por lo que los usuarios de Windows necesitarán iniciar en Linux para configurar uno.
#### Otros métodos
Si no puedes crear un hotspot compatible con aplicaciones en modo DS usando los métodos anteriores, necesitarás usar otro método.
- Conector USB Wi-Fi de Nintendo
  - Si bien esto aún puede usarse, no se recomienda ya que requiera una instalación de Windows XP o Vista de 32 bits
  - Para más información en como configurar un Conector USB Wi-Fi de Nintendo, lee la sección 3 de esta [guía de Wiimmfi (en inglés)](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) escrita por los miembros de la [Network de Mario Kart DS](https://discord.gg/pa9bea6)
- Cambia los ajustes de tu rúter para que sea compatible con aplicaciones en modo DS
  - Esto no se recomienda ya que abre tu conexión, haciéndola accesible a intrusos, incluso si usas cifrado WEP. También podría causar problemas para otros usuarios conectados a tu red. Si eliges ir por esta ruta, es recomendable que lo hagas usando un rúter secundario, o que configures una conexión para invitados, de ser posible.
  - No todos los rúters soportan crear conexiones de invitado o desactivar la contraseña
- Extensores Wi-Fi

#### Ajustes
Si está configurando una red para que sea compatible con aplicaciones en modo DS, esta debe cumplir con las siguientes especificaciones:
- Seguridad WEP o abierta (sin seguridad)
- Frecuencia inalámbrica de 2,4 GHz
- Modo inalámbrico 802.11b
  - Es posible que esta opción esté listada como "Legacy Mode (Modo Antiguo en inglés)" o algo similar

### Proyecto de restauración de WFC de Nintendo DS
1. Abre la Configuración Wi-Fi de Nintendo
1. Conéctate a tu punto de acceso
1. Establece como DNS primario uno de los valores mostrados más abajo, dependiendo de qué servicio quieras usar:
   - **[Wiimmfi](https://wiimmfi.de)** - `167.86.108.126` or `178.62.43.212`
   - **[AltWFC/WFCZwei](https://save-nintendo-wifi.com/) ([lista de jugadores en línea](http://zwei.moe:9001))** - `172.104.88.237`
1. Establece `1.1.1.1` como DNS secundario
1. Es posible que necesites parchear tu juego con NoSSL, dependiendo de a qué juego desees jugar en línea

### Parchear manualmente tus ROMs de DS
Sigue la guía de más abajo en caso de que tu proveedor bloquee los servidores DNS personalizados. Si este no es el caso, se recomienda *encarecidamente* que sigas la guía de más arriba.

- Los usuarios de sistemas operativos GNU/Linux y macOS pueden seguir instrucciones similares, pero tendrán que usar Mono
- Actualmente, WFCPatcher no es compatible con títulos DSiWare

1. Descarga [WFCPatcher](https://github.com/AdmiralCurtiss/WfcPatcher/releases)
1. Copia la ROM del juego que quieras parchear a la misma carpeta donde esté WFC y abre dicha carpeta
1. Crea un archivo de texto
1. En el archivo, pega `wfcpatcher.exe %1 --domain wiimmfi.de`, guárdalo con el nombre `patch.bat` y cierra la ventana
   - Puedes reemplazar wiimmfi.de por otro enlace si quieres usar otro servidor
   - Si el archivo sigue pareciendo un documento de texto, [activa las extensiones de archivo](https://dsi.cfw.guide/file-extensions-%28windows%29) y quita `.txt` del nombre del archivo
1. Arrastra las ROMs que quieres parchear a el archivo patch.bat
1. ¡Listo! Las ROMs parcheadas son las que terminan en (wiimmfi)

No olvides borrar cualquier DNS que hayas guardado previamente en la configuración Wi-Fi antes de intentar conectarte con la ROM parcheada.

### Solución de problemas y más información
Si salta algún error, puedes introducirlo en la [sección de resolucion de problemas de Wiimmfi](https://wiimmfi.de/error) para encontrar una solución.

Para resolución de problemas de forma más específica y más información, como los pasos para conectarte para jugar en línea en emuladores o cómo usar el Conector USB Wi-Fi de Nintendo, puedes leer esta [guía de Wimmfi (en inglés)](https://docs.google.com/document/d/1f3PChwQig40UaiPXlh-Gi5CggGiBPzyrpiecLZlT8ZE/edit?usp=sharing) escrita por los miembros de la [Network de Mario Kart DS](https://discord.gg/pa9bea6).
