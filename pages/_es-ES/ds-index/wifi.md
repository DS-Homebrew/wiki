---
lang: es-ES
layout: wiki
section: ds-index
category: reference
title: Wi-Fi
description: Cómo usar el Wi-Fi de la Nintendo DS
---

- En aplicaciones de Nintendo DS, solo puedes usar Wifis abiertos o con claves WEP
- En las aplicaciones mejoradas/exclusivas de Nintendo DSi, también hay soporte para WPA2

Se pueden usar puntos de acceso (hotspots), así no tendrás que cambiar los ajustes de tu router.

### Crear un punto de acceso
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
