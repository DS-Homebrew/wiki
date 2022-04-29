---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Cómo crear skins para los temas DSi y 3DS
description: Cómo crear skins personalizadas de DSi y 3DS en TWiLight Menu++
---

Para hacer una skin de TWiLight Menu++, necesitarás un editor de imágenes capaz de exportar archivos a formatp `.png` o `.bmp` a 16 <abbr title="Bits Per Pixel">bits por pixel</abbr>, y a 4 bits por pixel. Idealmente, que también sea capaz de ordenar manualmente la palera de colores de la imagen. Se recomienda el uso de [GIMP](https://www.gimp.org), editor gratuito capaz de cubrir las necesidades de esta guía.

## Parte 1: Descargar las imágenes de ejemplo
Lo primero que necesitas hacer es descargar los [archivos de ejemplo de skins](/assets/files/skin-examples.zip). Puedes usar estos como base, y además ya tienen en formato correcto, por lo que puedes usarlos para comparar con tu skin si surge algún problema.

## Parte 2: Editar las imágenes
Descarga e instala [GIMP](https://www.gimp.org) si quieres seguir estas indicaciones. Puedes usar un editor distinto si quieres, pero los pasos podrían no ser los mismos.

Una vez instalado, abre GIMP y selecciona `Ventana` -> `Diálogos empotrables` -> `Mapa de colores`. Esto abre la ventana del mapa de colores, que nos será útil a la hora de editar la paleta de la imagen.

Ahora puedes abrir la imagen que quieras editar en GIMP y continuar con la sección de más abajo, dependiendo de la carpeta en la que se encuentre la imagen. Ten en cuenta que TWiLight Menu++ es exigente con el formato exacto de las imágenes, y que este varía segun la carpeta en la que esté, así que asegúrate de exportar tal como lo dice la guía.

### Texturas del fondo (carpeta `background`)
Estas imágenes pueden ser archivos PNG o archivos BMP de 16 bits (`A1 R5 G5 B5`, o `X1 R5 G5 B5`).

| Textura            | Descripción                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| bottom             | La textura de fondo inferior cuando no se está sobre un icono                                    |
| bottom_bubble      | La textura de fondo inferior cuando se está sobre un icono                                       |
| bottom_ds          | Para el Tema 3DS, la textura de fondo inferior cuando no se está sobre un icono (en una DS lite) |
| bottom_bubble_ds | Para el Tema 3DS, la textura de fondo inferior cuando se está sobre un icono (en una DS lite)    |
| top                |                                                                                                  |

### Texturas del indicador de batería (carpeta `battery`)
Estas imágenes deben estar en formato PNG. Cualquier archivo funciónara, sin embargo la transparencia debe ser absoluta, si existe. Cualquier pixel que sea transparente en una de las imágenes debe ser transparente en todas. De no ser el caso, al cambiar de una imagen a otra, no se sobreescribirá correctamente.

| Textura            | Descripción                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| battery0           | Alterna con `battery1` cuando el nivel de batería es muy bajo                                              |
| battery1           | Los que acaban de 0 a 4 son usandos en modo DSi                                                            |
| battery1purple     | Las imágenes púrpuras son usadas si la opción `Color de LED de encendido` está en `Púrpura` en los ajustes |
| battery2           |                                                                                                            |
| battery2purple     |                                                                                                            |
| battery3           |                                                                                                            |
| battery3purple     |                                                                                                            |
| battery4           |                                                                                                            |
| battery4purple     |                                                                                                            |
| batterycharge      |                                                                                                            |
| batterychargeblink | Alterna con `batterycharge` cuando la consola se está cargando                                             |
| batteryfull        | Usado en modo DS en las consolas DSi y 3DS                                                                 |
| batteryfullDS      | Usado en DS Phat/Lite                                                                                      |
| batterylow         | Usado en modo DS                                                                                           |

### Texturas con paleras (carpeta `grf`)
Estas imagenes deben ser archivos BMP de 16 colores (4 bits por pixel).

Para editar estas imágenes en GIMP, selecciona `Imagen` -> `Modo` -> `RGB` para que se te permita cambiar los colores, luego cuando termines de editar, selecciona `Imagen` -> `Modo` -> `Indexado...` para que vuelva al formato correcto. Cuando cambies a modo indexado, asegúrate de que `Generar paleta óptima` está marcado y que `Número máximo de colores` esté puesto en `16`.

**Nota:** Algunas imágenes en el tema de DSi usan paletas personalizadas basads en el color del perfil de usuario. Si editas estos colores, asegúrate de que la línea `UserPalette` en el archivo `theme.ini` esté puesta en `0`.

Después de convertir a modo indexado, ve a la ventana del mapa de colores y asegúrate de que el color transparente (#FF00FF) es el color #0 en el mapa de colores. Si no lo es, haz clic derecho en el mapa de colores y selecciona `Reorganizar mapa de colores`, después mueve el color transparente al primer puesto y haz clic en `Aceptar`.

Si hay menos de 16 colores en tu mapa de colores resultante, pulsa el botón `+` en la parte inferior de la ventana de mapa de colores hasta que tengas 16 colores.

Al exportar, se recomienda marcar la casilla `No escribir la información de espacio de colores` bajo la lista de `Opciones de compatibilidad`.

| Textura       | Descripción                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| bips          | Los puntos mostrados en la barra de desplazamiento en la parte de abajo (tema DSI)                      |
| box           | La texture de la caja, tanto llena como vacía (tema DSi)                                                |
| box_empty     | La textura mostrada para un espacio vacío (tema 3DS)                                                    |
| box_full      | La textura mostrada para una caja con un ícono (tema 3DS)                                               |
| brace         | La textura mostrada antes del primer icono y después del último (tema DSi)                              |
| bubble        | La parte inferior de la burbuja que se dibuja encima del borde de la caja de INICIO o la caja de iconos |
| button_arrow  | Las texturas de las flechas en ambos lados de la barra de desplazamiento (tema DSi)                     |
| cornerbutton  | The buttons that are displayed on the SELECT menu (DSi Theme) (The name is based on an old use)         |
| cursor        | The border with animation frames that indicate the selected icon (3DS Theme)                            |
| dialogbox     | The background of the dialog box that slides down                                                       |
| folder        | The icon for folders                                                                                    |
| icon_a26      | The icon for Atari 2600 games                                                                           |
| icon_gb       | The icon for Game Boy games                                                                             |
| icon_gba      | The icon for GBA games (all themes) and the top icon to launch GBARunner2 (3DS Theme)                   |
| icon_gbamode  | The icon for native GBA Mode                                                                            |
| icon_gg       | The icon for Game Gear games                                                                            |
| icon_int      | The icon for Intellivision games                                                                        |
| icon_m5       | The icon for Sord M5 games                                                                              |
| icon_manual   | The icon for the manual                                                                                 |
| icon_md       | The icon for Mega Drive games                                                                           |
| icon_nes      | The icon for NES games                                                                                  |
| icon_ngp      | The icon for Neo Geo Pocket games                                                                       |
| icon_pce      | The icon for PC Engine/TurboGrafx-16 games                                                              |
| icon_plg      | The icon for DSTWO plugins                                                                              |
| icon_settings | The icon for Nintendo DSi Settings                                                                      |
| icon_sg       | The icon for Sega SG-1000 games                                                                         |
| icon_sms      | The icon for Sega Master System games                                                                   |
| icon_snes     | The icon for SNES games                                                                                 |
| icon_unk      | The icon displayed when a game is missing an icon                                                       |
| icon_ws       | The icon for WonderSwan games                                                                           |
| launch_dot    | The dots displayed when a game is launched (DSi Theme)                                                  |
| moving_arrow  | The arrow displayed when a game is being moved (DSi Theme)                                              |
| progress      | The progress loading animation with 8 frames                                                            |
| scroll_window | The part of the scrollbar that indicates the icons that are in view                                     |
| small_cart    | The icons displayed along the top (3DS Theme) and in the SELECT menu (DSi Theme)                        |
| start_border  | The border with animation frames that indicates the selected icon (DSi Theme)                           |
| start_text    | The text displayed on the start border (DSi Theme)                                                      |
| wirelessicons | The icons displayed to indicate a game has wireless support                                             |

### DS Classic Menu textures (`quickmenu` folder)
These must be PNG files.

| Texture    | Descripción                                         |
| ---------- | --------------------------------------------------- |
| bottombg   | Background for the bottom screen                    |
| phat_topbg | Background for the top screen on DS Phat            |
| topbg      | Background for the top screen on any other DS model |

### UI textures (`ui` folder)
These must be PNG files, any file will work however only 100% transparency will work. Any pixel that is transparent in one texture should be transparent in all related textures so that it's properly overwritten on change.

| Texture          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| date_time_font | The font to display the date and time                   |
| Lshoulder        | The left shoulder                                       |
| Lshoulder_greyed | The left shoulder when there are no pages to the left   |
| Rshoulder        | The right shoulder                                      |
| Rshoulder_greyed | The right shoulder when there are no pages to the right |

### Video texture (`video` folder)
Only used for the 3DS theme, `3dsRotatingCubes.rvid` is a Rocket Video file. For more information on converting videos to rvid, read [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) on the Vid2RVID wiki. If you don't want this to be drawn you can simply delete it.

### Volume textures (`volume` folder)
These must be PNG files, any file will work however only 100% transparency will work. Any pixel that is transparent in one texture should be transparent in all of them so that it's properly overwritten on change.

| Texture | Description                      |
| ------- | -------------------------------- |
| volume0 | Volume is only shown in DSi mode |
| volume1 | 0 is muted, 4 is full volume     |
| volume2 |                                  |
| volume3 |                                  |
| volume4 |                                  |

## Theme configuration (`theme.ini` file)
You may configure various options on how the theme is drawn in the `theme.ini` to accommodate larger sprites or textures. For true/false options `0` is false and `1` is true. Options with a blank default value for a theme are unused for that theme.

| Value                    | Description                                                                                                  | Default (3DS) | Default (DSi) |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------- | ------------- |
| `StartBorderRenderY`     | The initial Y position of the Start Border                                                                   | 92            | 81            |
| `StartBorderSpriteW`     | The width of the start border sprite. Note that the start border texture is exactly half of the full border. | 32            | 32            |
| `StartBorderSpriteH`     | The height of the start border sprite                                                                        | 64            | 80            |
| `StartTextRenderY`       | The initial Y position of the Start text                                                                     | 143           | 143           |
| `BubbleTipRenderY`       | The Y position of the tip of the bubble that is drawn over the start border                                  | 98            | 80            |
| `BubbleTipRenderX`       | The X position of the tip of the bubble that is drawn over the start border                                  | 125           | 122           |
| `BubbleTipSpriteW`       | The width of the bubble tip sprite                                                                           | 7             | 11            |
| `BubbleTipSpriteH`       | The height of the bubble tip sprite                                                                          | 7             | 8             |
| `TitleboxRenderY`        | The initial Y position of the title text box                                                                 | 96            | 85            |
| `TitleboxTextY`          | The initial Y position of the title text                                                                     | 55            | 30            |
| `TitleboxTextW`          | The maximum width of the title text                                                                          | 200           | 240           |
| `MacroTitleboxTextY`     | The initial Y position of the title text in macro mode                                                       |               | 40            |
| `MacroTitleboxTextW`     | The maximum width of the title text in macro mode                                                            |               | 224           |
| `TitleboxTextLarge`      | Whether to use the large font for the title text                                                             | 0             | 1             |
| `TitleboxMaxLines`       | The maximum lines of text to show of the title                                                               | 3             | 4             |
| `VolumeRenderX`          | The X position on the top screen to draw the volume icon                                                     | 4             | 4             |
| `VolumeRenderY`          | The Y position on the top screen to draw the volume icon                                                     | 5             | 5             |
| `ShoulderLRenderY`       | The Y position on the top screen to draw the left shoulder                                                   | 172           | 172           |
| `ShoulderLRenderX`       | The X position on the top screen to draw the left shoulder                                                   | 0             | 0             |
| `ShoulderRRenderY`       | The Y position on the top screen to draw the right shoulder                                                  | 172           | 172           |
| `ShoulderRRenderX`       | The X position on the top screen to draw the right shoulder                                                  | 178           | 178           |
| `BatteryRenderY`         | The Y position on the top screen to draw the battery icon                                                    | 5             | 5             |
| `BatteryRenderX`         | The X position on the top screen to draw the battery icon                                                    | 235           | 235           |
| `FontPalette1`           | The transparent color of the font, unused for default fonts                                                  | 0x0000        | 0x0000        |
| `FontPalette2`           | The colors of the font, use [this site](http://www.conradshome.com/html2bgr15/) to convert                   | 0xDEF7        | 0xDEF7        |
| `FontPalette3`           |                                                                                                              | 0xC631        | 0xC631        |
| `FontPalette4`           |                                                                                                              | 0xA108        | 0xA108        |
| `StartTextUserPalette`   | Whether to use the DS Profile color for the palette of the start text                                        |               | 1             |
| `StartBorderUserPalette` | Whether to use the DS Profile color for the palette of the start border                                      |               | 1             |
| `ButtonArrowUserPalette` | Whether to use the DS Profile color for the palette of the arrow buttons on the bottom of the screen         |               | 1             |
| `MovingArrowUserPalette` | Whether to use the DS Profile color for the palette of the arrow shown when moving icons                     |               | 1             |
| `LaunchDotsUserPalette`  | Whether to use the DS Profile color for the palette of the launch dots                                       |               | 1             |
| `DialogBoxUserPalette`   | Whether to use the DS Profile color for the palette of the dialog box                                        |               | 1             |
| `RenderPhoto`            | Whether or not to draw a photo on the top screen                                                             | 0             | 1             |
| `RotatingCubesRenderY`   | The Y position on the top screen to draw the rotating cubes                                                  | 78            |               |

## Part 3: Adding to TWiLight Menu++
Once you've edited some graphics and would like to test your skin, simply copy your skin folder (the folder containing the `background`, `battery`, etc folders) to `sd:/_nds/TWiLightMenu/3dsmenu/themes/` or `sd:/_nds/TWiLightMenu/dsimenu/themes/` for 3DS and DSi theme skins respectively.

## Part 4: Sharing your skin
Once you've completed your skin, you can share it with the community by creating a Pull Request adding it to the [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository in a `.7z` file. If you're unfamiliar with using git you can also simply create an issue on that repository with a zip file of your skin requesting it be added.

## Custom background music and sound effects
The DSi and 3DS themes also support custom music. See [DSi/3DS skins - Custom SFX](custom-dsi-3ds-sfx) for more details.
