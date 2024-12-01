---
lang: es-ES
layout: wiki
section: ds-index
category: guides
title: ¿Qué consola de la familia Nintendo DS es la más apropiada para mí?
description: Diferenciar las características de cada consola para decidir cual es la mejor experiencia DS(i)
---

Las consolas Nintendo DS, DSi, 3DS y 2DS pueden correr el modo DS(i) al igual que los juegos de GBA. Para ayudarte a decidir cuál consola te conviene más, por favor lee esta página.

| Funcionalidades      | Nintendo DS                                                                                     | Nintendo DSi                                                | Nintendo 3DS/2DS                                    |
| -------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------- |
| Memoria RAM          | 4MB (ampliable a 36MB con expansión de RAM)                                  | 16MB                                                        | 32MB                                                |
| Velocidad máxima CPU | 67mhz                                                                                           | 133mhz[^1]                                                  | 133mhz[^1]                                          |
| Cámara               | No                                                                                              | Sí                                                          | Sí                                                  |
| Pantalla             | TN(?), Frontlit (Phat), Backlit (Lite) | TN (Normal), IPS (XL) | TN o IPS (varía según el modelo) |
| Touch sensitivity    | Sí                                                                                              | DSi mode only                                               | No                                                  |
| Escalado             | No                                                                                              | No                                                          | Sí[^2]                                              |
| Niveles Brillo       | 2 (Encendido/Apagado para Phat), 4 (Lite)[^3]                                                   | 5                                                           | 5                                                   |
| Compatibilidad GBA   | Nativo, casi perfecto[^4]                                                                       | Excelente                                                   | Nativo, casi perfecto[^5]                           |
| Soporte de DSiWare   | Parcial[^6]                                                                                     | Sí[^7]                                                      | Sí[^7]                                              |

[^1]: Los juegos de DS correrán a 67mhz, pero muchos de ellos pueden ser ajustados para que corran a 133mhz, aunque ciertos juegos tendrán problemas.

[^2]: When launching in DS(i) mode, the screens are not properly scaled, and will not appear pixel-perfect. Holding START or SELECT button will disable screen scaling, but will reveal black borders around the screen images.

[^3]: Modelos Phat posteriores tienen los mismos niveles de brillo que el modelo Lite, pero necesitarán que FlashMe sea instalado para que sean habilitados (al menos en el menú original).

[^4]: El único juego que se sabe que tiene un problema de compatibilidad, _MegaMan Battle Network 3_ se congela después del logotipo de Capcom.

[^5]: ROMs GBA grandes de vídeo (mayor a 32MB) no funcionarán. Gyro and rumble features will also not work.

[^6]: La mayoría de títulos compatibles no requieren del uso de la cámara. Mira [esta página](https://github.com/DS-Homebrew/TWiLightMenu/blob/master/universal/include/compatibleDSiWareMap.h) para saber qué títulos son compatibles. Es necesario que instales **TW**i**L**ight Menu++ en tu Flashcard.

[^7]: Si estás usando **TW**i**L**ight Menu++ con la configuración `DSiWare Booter` en `nds-bootstrap` o una 3DS/2DS, entonces la compatibilidad es casi perfecta.
