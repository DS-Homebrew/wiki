---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Cómo crear skins para los temas DSi y 3DS
description: Cómo crear skins personalizadas de DSi y 3DS en TWiLight Menu++
---

La forma más sencilla de personalizar un tema es editar las texturas png de las carpetas `ui`, `battery`, y/o `volume` de un tema. Estos archivos pueden ser cualquier png, teniendo en cuenta que solo los píxeles 100% transparentes se verán así, cualquier otra transparencia se verá opaca. Además, cualquier parte transparente de un set (p. ej. todos los iconos de la batería) deben serlo en todos debido a que esos píxeles se saltan en vez de reflejar el fondo, por lo que cualquier parte que solo sea transparente en algunos deberán tener la textura del fondo en vez de transparencia. Las texturas pueden ser de distinto tamaño, pero habrá que ajustarla en la configuración del tema para que aparezcan correctamente (más información abajo).

Cambiar texturas con paletas llevan más trabajo. En las carpetas `grit` y `background_grit` de un tema, las imágenes pueden editarse. También necesitarás [cadenas de montaje de devkitPro's](https://devkitpro.org) con GRIT instalado. Una vez que hayas terminado de editar los archivos, debes ejecutar
```bash
make
```
para poder compilar los temas en Grit RIFF Format. Esto compilarán tus texturas con paletas en un formato **.grf** en la carpeta `grf`. No modifiques los archivos `.grit` hasta que hayas leído la sección [Temas avanzados](#advanced-theming) más abajo.

Sé consciente de que las texturas con paleta tienen más restricciones que las texturas BMP, siendo la principal tener un máximo de 16 colores por textura. Sin embargo, algunas texturas pueden tener restricciones aún más severas de la paleta por defecto, que puede modificarse bajo riesgo de quedarse sin memoria de paletas (ver más abajo).

Los temas de ejemplo se encuentran en la carpeta [`romsel_dsimenutheme/resources/dsimenu_theme_examples`](https://github.com/DS-Homebrew/TWiLightMenu/tree/master/romsel_dsimenutheme/resources/dsimenu_theme_examples) en el repositorio de TWiLight Menu++. Para descargarlos, [descarga el repositorio](https://github.com/DS-Homebrew/TWiLightMenu/archive/master.zip) o clónalo con git, y busca la carpeta.

## Descripción de archivos de los temas

Las texturas `volume` y `battery` se explican por sí solas.

### Texturas de fondo (carpeta `background_grit`)

| Textura            | Descripción                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| bottom             | La textura de fondo inferior cuando no se está sobre un icono                                    |
| bottom_bubble      | La textura de fondo inferior cuando se está sobre un icono                                       |
| bottom_ds          | Para el Tema 3DS, la textura de fondo inferior cuando no se está sobre un icono (en una DS lite) |
| bottom_bubble_ds | Para el Tema 3DS, la textura de fondo inferior cuando se está sobre un icono (en una DS lite)    |
| top                | Fondo de la pantalla superior                                                                    |

### Texturas con paletas (carpeta `grit`)

| Textura       | Descripción                                                                                               | Restricciones (si son menos de 16)                             |
| ------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| bips          | Los puntos mostrados en la parte de abajo del menú (Tema DSi)                                             |                                                                |
| box           | La textura de caja, tanto la llena como la vacía (Tema DSi)                                               |                                                                |
| box_empty     | La textura para una caja vacía (Tema 3DS)                                                                 | En el Tema 3DS, el color transparente por defecto es `#E0DAD9` |
| box_full      | La textura para una caja con icono (Tema 3DS)                                                             | En el Tema 3DS, el color transparente por defecto es `#E0DAD9` |
| brace         | La textura antes del primer icono y después del último (Tema DSi)                                         | 4 colores                                                      |
| bubble        | La parte inferior de la burbuja que se dibuja encima del borde inicial o la caja de iconos                | 8 colores                                                      |
| button_arrow  | Las texturas de las flechas en ambos lados de la barra de aplicaciones (Tema DSi)                         |                                                                |
| cornerbutton  | Los botones que se muestran en el menú SELECT (Tema DSi) (El nombre está basado en una utilidad anterior) |                                                                |
| cursor        | El borde con frames animados que indica el icono seleccionado (Tema 3DS)                                  |                                                                |
| dialogbox     | El fondo del cuadro de diálogo que se desliza hacia abajo                                                 |                                                                |
| folder        | Icono de carpeta                                                                                          |                                                                |
| icon_gb       | Icono para los juegos de Game Boy                                                                         |                                                                |
| icon_gba      | Icono para los juegos de GBA (todos los temas) y el icono de arriba para abrir GBARunner2 (Tema 3DS)      | El color transparente por defecto es `#00FF00`                 |
| icon_gbamode  | Icono para el Modo GBA nativo                                                                             |                                                                |
| icon_gg       | Icono para juegos de Game Gear                                                                            |                                                                |
| icon_manual   | Icono del manual                                                                                          |                                                                |
| icon_md       | Icono para los juegos de Mega Drive                                                                       |                                                                |
| icon_nes      | Icono para los juegos de NES                                                                              |                                                                |
| icon_plg      | Icono para los plugins de DSTWO                                                                           |                                                                |
| icon_settings | Icono para los ajustes de Nintendo DSi                                                                    |                                                                |
| icon_sms      | Icono para los juegos de Sega Master System                                                               |                                                                |
| icon_snes     | Icono para los juegos de SNES                                                                             |                                                                |
| icon_unk      | Icono que se muestra cuando un juego no tiene uno propio                                                  |                                                                |
| launch_dot    | Los puntos que se muestran cuando se abre un juego (Tema DSi)                                             |                                                                |
| moving_arrow  | La flecha que se muestra cuando se está moviendo un juego (Tema DSi)                                      |                                                                |
| progress      | Animación de carga de 8 frames                                                                            | 9 colores                                                      |
| scroll_window | La parte de la barra inferior que indica los iconos que se están viendo                                   | 7 colores                                                      |
| small_cart    | Los iconos que se muestran en la arte de arriba (Tema 3DS) y en el menú SELECT (Tema DSi)                 |                                                                |
| start_border  | El borde con frames animados que indica el icono seleccionado (Tema DSi)                                  |                                                                |
| start_text    | Texto mostrado en el borde inicial (Tema DSi)                                                             | 4 colores                                                      |
| wirelessicons | Los iconos que se muestran para indicar que un juego permite conexión inalámbrica                         | 7 colores                                                      |

### Texturas del UI (carpeta `ui`)

| Textura          | Descripción                                                   |
| ---------------- | ------------------------------------------------------------- |
| date_time_font | Fuente para la fecha y la hora                                |
| Lshoulder        | Gatillo izquierdo                                             |
| Lshoulder_greyed | El gatillo izquierdo cuando no hay más páginas a la izquierda |
| Rshoulder        | Gatillo derecho                                               |
| Rshoulder_greyed | El gatillo derecho cuando no hay más páginas a la derecha     |

### Texturas de vídeo(carpeta `video`)

`3dsRotatingCubes.rvid` es un archivo Rocket Video. Para más información de cómo convertir un video a rvid, consulta [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) en la wiki de Vid2RVID. Si no quieres que se dibuje simplemente bórralo.

## Configuración del tema

Puedes configurar varias opciones de cómo se dibuja el tema en `theme.ini` para ajustar texturas o sprites más grandes.

| Valor                    | Descripción                                                                                                  | Por defecto (3DS) | Por defecto (DSi) |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ | ----------------- | ----------------- |
| `StartBorderRenderY`     | Posición inicial Y del borde inicial                                                                         | 92                | 81                |
| `StartBorderSpriteW`     | Ancho del sprite del borde inicial. Ten en cuenta que la textura es exactamente la mitad del borde completo. | 32                | 32                |
| `StartBorderSpriteH`     | Altura del sprite del borde inicial                                                                          | 64                | 80                |
| `TitleboxRenderY`        | Posición inicial Y del texto del título                                                                      | 96                | 85                |
| `BubbleTipRenderY`       | Posición Y de la punta de la burbuja que se dibuja encima del borde inicial                                  | 98                | 80                |
| `BubbleTipRenderX`       | Posición X de la punta de la burbuja que se dibuja encima del borde inicial                                  | 125               | 22                |
| `BubbleTipSpriteH`       | Altura del sprite de la punta de la burbuja                                                                  | 7                 | 8                 |
| `BubbleTipSpriteW`       | Anchura del sprite de la punta de la burbuja                                                                 | 7                 | 11                |
| `RotatingCubesRenderY`   | Posición Y para dibujar los cubos rotantes en la pantalla superior                                           | 78                | N/A               |
| `ShoulderLRenderY`       | Posición Y para dibujar el gatillo izquierdo en la pantalla superior                                         | 172               | 172               |
| `ShoulderLRenderX`       | Posición X para dibujar el gatillo izquierdo en la pantalla superior                                         | 0                 | 0                 |
| `ShoulderRRenderY`       | Posición Y para dibujar el gatillo derecho en la pantalla superior                                           | 172               | 172               |
| `ShoulderRRenderX`       | Posición X para dibujar el gatillo derecho en la pantalla superior                                           | 178               | 178               |
| `VolumeRenderX`          | Posición X para dibujar el icono de volumen en la pantalla superior                                          | 4                 | 4                 |
| `VolumeRenderY`          | Posición Y para dibujar el icono de volumen en la pantalla superior                                          | 16                | 16                |
| `BatteryRenderY`         | Posición Y para dibujar la batería en la pantalla superior                                                   | 5                 | 5                 |
| `BatteryRenderX`         | Posición X para dibujar la batería en la pantalla superior                                                   | 235               | 235               |
| `RenderPhoto`            | Dibujar o no una foto en la pantalla superior                                                                | 0                 | 1                 |
| `StartTextUserPalette`   | Usar o no el color del Perfil DS para la paleta del texto de inicio                                          | N/A               | 1                 |
| `StartBorderUserPalette` | Usar o no el color del Perfil DS para la paleta del borde de inicio                                          | N/A               | 1                 |
| `ButtonArrowUserPalette` | Usar o no el color del Perfil DS para la paleta de las flechas en la parte inferior de la pantalla           | N/A               | 1                 |
| `MovingArrowUserPalette` | Usar o no el color del Perfil DS para la paleta de las flecha que aparece cuando mueves los iconos           | N/A               | 1                 |
| `LaunchDotsUserPalette`  | Usar o no el color del Perfil DS para la paleta de los puntos de lanzamiento del juego                       | N/A               | 1                 |
| `DialogBoxUserPalette`   | Usar o no el color del Perfil DS para la paleta del cuadro de diálogo                                        | N/A               | 1                 |

## Temas avanzados

Quizá necesites de forma ocasional más colores de lo habitual para algunas texturas con paletas. En ese caso, puedes modificar el archivo `.grit` de compilación de la textura para aumentar el tamaño de la paleta.

Por ejemplo, en `scroll_window.grit` puedes editar `-pn7` y cambiar `7` a `16` para tener 16 colores. Ten en cuenta que borrar la línea `-pn` entera puede provocar resultados indeseados.

Otra cosa importante es que el máximo absoluto de 16 colores por textura está "integrado" en el código y no se puede modificar. Incluso si aumentases el número de colores en la paleta, dejaría de cargar a los 16. Con la cantidad de texturas cargadas, es posible que no haya suficiente memoria de paletas para mantener 16 colores de cada textura. Ten esto en cuenta a la hora de ajustar el tamaño de las paletas.

Además, las texturas con paletas tienen que tener dimensiones que sean múltiplos de 2. Los tamaños no se pueden cambiar excepto para `bubble` y `start_border`, cuyas dimensiones de sprite son configurables en `theme.ini`. Sin embargo, hacerlo tendrá consecuencias imprevistas.

Las texturas con paletas no son comprobadas. Es raro tener una textura inválida si se crea con el makefile dado, pero en ciertos casos una textura corrupta puede hacer que el menú no cargue.

## Música de fondo y efectos de sonido personalizados

El menú de DSi y los temas de 3DS pueden tener música personalizada. Ver [Skins de DSi/3DS - Efectos de Sonido Personalizados](custom-dsi-3ds-sfx) para más detalles
