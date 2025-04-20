---
lang: es-ES
layout: wiki
section: ds-index
category: guides
title: ¿Qué consola de la familia Nintendo DS es la más apropiada para mí?
description: Diferenciar las características de cada consola para decidir cual es la mejor experiencia DS(i)
---

Las consolas Nintendo DS, DSi, 3DS y 2DS pueden correr el modo DS(i) al igual que los juegos de GBA. Para ayudarte a decidir cuál consola te conviene más, por favor lee esta página.

| Funcionalidades      | Nintendo DS                                                    | Nintendo DSi                                                | Nintendo 3DS/2DS                                    |
| -------------------- | -------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------- |
| Memoria RAM          | 4MB (ampliable a 36MB con expansión de RAM) | 16MB                                                        | 32MB                                                |
| Velocidad máxima CPU | 67mhz                                                          | 133mhz[^1]                                                  | 133mhz[^1]                                          |
| Cámara               | No                                                             | Sí                                                          | Sí                                                  |
| Pantalla             | Transflective TN[^2] (Phat), TN (Lite)                         | TN (Normal), IPS (XL) | TN o IPS (varía según el modelo) |
| Touch sensitivity    | Sí                                                             | DSi mode only                                               | No                                                  |
| Escalado             | No                                                             | No                                                          | Yes[^3]                                             |
| Niveles Brillo       | 2 (On/Off for Phat), 4 (Lite)[^4]                              | 5                                                           | 5                                                   |
| Compatibilidad GBA   | Nativo, casi perfecto[^5]                                      | Excelente                                                   | Native, Near-Perfect[^6]                            |
| Soporte de DSiWare   | Yes, Partial[^7]                                               | Yes[^8]                                                     | Yes[^8]                                             |

[^1]: Los juegos de DS correrán a 67mhz, pero muchos de ellos pueden ser ajustados para que corran a 133mhz, aunque ciertos juegos tendrán problemas.

[^2]: The DS Phat was originally thought to have a frontlit TN display, however it was later found to have a Transflective TN Backlit display. See [this video by makho](https://www.youtube.com/watch?v=84H5SJFJRlU) for a detailed explanation.

[^3]: When launching in DS(i) mode, the screens are not properly scaled, and will not appear pixel-perfect. Holding START or SELECT button will disable screen scaling, but will reveal black borders around the screen images.

[^4]: Modelos Phat posteriores tienen los mismos niveles de brillo que el modelo Lite, pero necesitarán que FlashMe sea instalado para que sean habilitados (al menos en el menú original).

[^5]: The only game known to have a compatibility issue is _MegaMan Battle Network 4: Blue Moon_ which crashes when finishing a battle in a certain section of WoodMan’s stage. This only occurs on the DS Phat and not the DS Lite. See [this page](https://mgba.io/2017/05/29/holy-grail-bugs/#mega-man-battle-network-4) where the issue is detailed by mGBA dev endrift.

[^6]: ROMs GBA grandes de vídeo (mayor a 32MB) no funcionarán. Gyro and rumble features will also not work.

[^7]: La mayoría de títulos compatibles no requieren del uso de la cámara. Mira [esta página](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/universal/include/compatibleDSiWareMap.h) para saber qué títulos son compatibles. Es necesario que instales **TW**i**L**ight Menu++ en tu Flashcard.

[^8]: Si estás usando **TW**i**L**ight Menu++ con la configuración `DSiWare Booter` en `nds-bootstrap` o una 3DS/2DS, entonces la compatibilidad es casi perfecta.
