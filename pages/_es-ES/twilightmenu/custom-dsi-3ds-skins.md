---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Cómo crear skins para los temas DSi y 3DS
description: Cómo crear skins personalizadas de DSi y 3DS en TWiLight Menu++
---

Para crear una skin para TWiLight Menu++, necesitarás un editor de imágenes capaz de exportar archivos `.png`, y archivos `.bmp` a 16 <abbr title="Bits Per Pixel">BPP</abbr> y 4 BPP. Idealmente, también deberías poder reordenar manualmente la paleta de colores de una imagen. Se recomienda usar [GIMP](https://www.gimp.org), y es el programa que será usado para esta guía, ya que cubre las necesidades para esta guía.

## Parte 1: Descargar las imágenes de ejemplo
Lo primero que necesitas hacer es descargar los [archivos de ejemplo de skins](/assets/files/skin-examples.zip). Puedes usarlos como base para tu skin, ya que están en el formato requerido. Además, si tienes problemas después, puedes comparar tus imágenes con estas.

## Parte 2: Editar las imágenes
Descarga e instala [GIMP](https://www.gimp.org)
- Otros editores de imágenes como Photoshop también podrían funcionar, pero se usará GIMP en esta guía

Una vez instalado, abre GIMP y selecciona `Ventanas` -> `Diálogos empotrables` -> `Mapa de colores`. Esto abre la ventana del mapa de colores, que nos será útil a la hora de editar la paleta de la imagen.

Ahora puedes abrir la imagen que quieras editar en GIMP y continuar con la sección de más abajo, dependiendo de la carpeta en la que se encuentre la imagen. Ten en cuenta que TWiLight Menu++ es exigente con el formato exacto de las imágenes, y que este varía segun la carpeta en la que esté, así que asegúrate de exportar tal como lo dice la guía.

### Texturas del fondo (carpeta `background`)
Estas imágenes pueden ser archivos PNG o archivos BMP de 16 bits (`A1 R5 G5 B5`, o `X1 R5 G5 B5`).
- Si vas a usar imágenes en formato BMP, puedes establecerlos a 16 bits en la sección Opciones Avanzadas al exportar. Es posible que requieras hacer esto cada vez que exportes una imagen en formato BMP

| Textura               | Descripción                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| top                   | La textura de fondo de la pantalla superior                                                                                                    |
| bottom                | La textura de fondo de la pantalla inferior cuando el cursor no está sobre ningún icono                                                        |
| bottom_ds             | Para el tema Nintendo 3DS, la textura de fondo de la pantalla inferior cuando el cursor no está sobre ningún icono en una consola DS Phat/Lite |
| bottom_macro          | Para el tema Nintendo DSi, la textura de fondo de la pantalla inferior cuando el cursor no está sobre ningún icono en el modo Macro            |
| bottom_bubble         | La textura de fondo de la pantalla inferior cuando el cursor está sobre algún icono                                                            |
| bottom_bubble_ds    | Para el tema Nintendo 3DS, la textura de fondo de la pantalla inferior cuando el cursor está sobre algún icono en una consola DS Phat/Lite     |
| bottom_bubble_macro | Para el tema Nintendo DSi, la textura de fondo cuando el cursor está sobre algún icono en el modo Macro                                        |
| bottom_moving         | Para el tema Nintendo DSi, la textura de fondo de la pantalla inferior cuando se está moviendo un icono de sitio                               |
| bottom_moving_macro | Para el tema Nintendo DSi, la textura de fondo cuando se está moviendo un icono de sitio en el modo Macro                                      |

### Texturas del indicador de batería (carpeta `battery`)
Estas imágenes deben tener formato PNG. Los píxeles transparentes se verán como tal, pero solamente píxeles 100% transparentes funcionarán.

| Textura            | Descripción/Notas                                                                                          |
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

Para editar estas imágenes en GIMP, haz clic en `Imagen` -> `Modo` -> `RGB` para que puedas cambiar los colores, al terminar, haz clic en `Imagen` -> `Modo` -> `Indexado...` para convertir la imagen de vuelta a modo paleta de colores. Cuando cambies a modo indexado, asegúrate de que `Generar paleta óptima` está marcado y que `Número máximo de colores` esté puesto en `16`.

**Nota:** Algunas imágenes en el tema de DSi usan paletas personalizadas basads en el color del perfil de usuario. Si editas estos colores, asegúrate de que la línea `UserPalette` en el archivo `theme.ini` esté puesta en `0`.

Después de convertir a modo indexado, ve a la ventana del mapa de colores y asegúrate de que el color transparente (#FF00FF) es el color #0 en el mapa de colores. Si no lo es, haz clic derecho en el mapa de colores y selecciona `Reorganizar mapa de colores`, después mueve el color transparente al primer puesto y haz clic en `Aceptar`.

Si hay menos de 16 colores en tu mapa de colores resultante, presiona el botón `+` al fondo del diálogo del mapa de colores hasta que tengas 16 colores.

Al exportar, se recomienda marcar la casilla `No escribir la información del espacio de colores` en la lista de `Opciones de Compatibilidad`.

| Textura       | Descripción                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| bips          | Los puntos mostrados en la barra de desplazamiento en la parte de abajo (tema DSI)                             |
| box           | La texture de la caja, tanto llena como vacía (tema DSi)                                                       |
| box_empty     | La textura mostrada para un espacio vacío (tema 3DS)                                                           |
| box_full      | La textura mostrada para una caja con un ícono (tema 3DS)                                                      |
| brace         | La textura mostrada antes del primer icono y después del último (tema DSi)                                     |
| bubble        | La parte inferior de la burbuja que se dibuja encima del borde de la caja de INICIO o la caja de iconos        |
| button_arrow  | Las texturas de las flechas en ambos lados de la barra de desplazamiento (tema DSi)                            |
| cornerbutton  | Los botones que se muestra en el menú SELECT (Tema DSi) (El nombre se debe a un uso antiguo)                   |
| cursor        | El borde que indica el icono seleccionado, con cuadros de animación (Tema 3DS)                                 |
| dialogbox     | El fondo del cuadro de dialogo                                                                                 |
| folder        | El icono de las carpetas                                                                                       |
| icon_a26      | El icono para los juegos de la consola Atari 2600                                                              |
| icon_col      | El icono para los juegos de la consola Colecovision                                                            |
| icon_gb       | El icono para los juegos de la consola Game Boy                                                                |
| icon_gba      | El icono para los juegos de la consola Game Boy Advance                                                        |
| icon_gbamode  | El icono para el modo GBA nativo                                                                               |
| icon_gg       | El icono para los juegos de la consola Game Gear                                                               |
| icon_img      | El icono para imágenes en formato BMP, GIF, y PNG                                                              |
| icon_int      | El icono para los juegos de la consola Intellivision                                                           |
| icon_m5       | El icono para los juegos de la consola Sord M5                                                                 |
| icon_manual   | El icono para el manual                                                                                        |
| icon_md       | El icono para los juegos de la consola Mega Drive                                                              |
| icon_nes      | El icono para los juegos de la consola NES                                                                     |
| icon_ngp      | El icono para los juegos de la consola Neo Geo Pocket                                                          |
| icon_pce      | El icono para los juegos de la PC Engine/TurboGrafx-16                                                         |
| icon_plg      | El icono para los plugins de DSTWO                                                                             |
| icon_settings | El icono para los ajustes de Nintendo DSi                                                                      |
| icon_sg       | El icono para los juegos de la consola Sega SG-1000                                                            |
| icon_sms      | El icono para los juegos de la consola Sega Master System                                                      |
| icon_snes     | El icono para los juegos de la consola SNES                                                                    |
| icon_unk      | El icono que se muestra cuando un juego no tiene icono propio                                                  |
| icon_ws       | El icono para los juegos de la consola WonderSwan                                                              |
| launch_dot    | Los puntos mostrados cuando se inicia un juego (Tema DSi)                                                      |
| moving_arrow  | La flecha que se muestra cuando se está moviendo un juego de sitio (Tema DSi)                                  |
| progress      | La animación de carga, con 8 cuadros de movimiento                                                             |
| scroll_window | La parte de la barra inferior que muestra los iconos visibles                                                  |
| small_cart    | Los iconos que se muestra en la parte superior de la pantalla táctil (Tema 3DS) y en el menú SELECT (Tema DSi) |
| start_border  | El borde que indica el icono seleccionado, con cuadros de animación (Tema DSi)                                 |
| start_text    | El texto que se muestra en el marco de selección (Tema DSi)                                                    |
| wirelessicons | Los iconos que se muestran para indicar que un juego tiene soporte para conexión inalámbrica                   |

### Texturas del Menú Clásico DS (carpeta `quickmenu`)
Estas imágenes deben tener formato PNG.

| Textura    | Descripción                                               |
| ---------- | --------------------------------------------------------- |
| bottombg   | El fondo de la pantalla inferior                          |
| phat_topbg | El fondo de la pantalla superior en una DS Phat           |
| topbg      | El fondo de la pantalla superior en cualquier otro modelo |

### Texutras de la interfaz (carpeta `UI`)
Estas imágenes deben tener formato PNG. Los píxeles transparentes se verán como tal, pero solamente píxeles 100% transparentes funcionarán. Si hay un pixel transparente en cualquiera de las texturas, deberá ser transparente en todas para que pueda sobrescribirse correctamente.

| Textura          | Descripción                                                          |
| ---------------- | -------------------------------------------------------------------- |
| Lshoulder        | La textura para el botón L                                           |
| Lshoulder_greyed | La textura para el botón L cuando no haya más páginas a la izquierda |
| Rshoulder        | La textura para el botón R                                           |
| Rshoulder_greyed | La textura para el botón R cuando no haya más páginas a la derecha   |

### Texturas de video (carpeta `video`)
Estas texturas solo se usan en el tema 3DS, el archivo `3dsRotatingCubes.rvid` es un archivo de formato Rocket Video. Para más información acerca de cómo convertir videos a este formato, lee la sección de [Convertir un video a .rvid (en inglés)](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) en la wiki de Vid2RVID. Si no quieres que esto se muestre, puedes borrar el archivo.

### Texturas de volumen (carpeta `volume`)
Estas texturas se muestra solamente en modo DSi.

Estas imágenes deben tener formato PNG. Los píxeles transparentes se verán como tal, pero solamente píxeles 100% transparentes funcionarán.


| Textura | Descripción/Notas                                    |
| ------- | ---------------------------------------------------- |
| volume0 | En 0 el volumen está silenciado, en 4 está al máximo |
| volume1 |                                                      |
| volume2 |                                                      |
| volume3 |                                                      |
| volume4 |                                                      |

## Configuración del tema (archivo `theme.ini`)
Puedes configurar varios parámetros de renderizado del tema en el archivo `theme.ini` para poder usar texturas más grandes o diseños de pantalla diferentes. Para opciones de Sí/No `0` es No y `1` es Sí. Los parámetros sin valor en el campo Por Defecto no son usadas en ese tema en concreto.

| Valor                      | Descripción/Notas                                                                                                                                                       | Por Defecto (3DS) | Por Defecto (DSi) |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------------- |
| `StartBorderRenderY`       | La posición vertical inicial del marco de selección                                                                                                                     | 92                | 81                |
| `StartBorderSpriteW`       | El ancho de la textura del marco de selección. Ten en cuenta que la textura del marco de selección mide exactamente la mitad del marco completo                         | 32                | 32                |
| `StartBorderSpriteH`       | La altura de la textura del marco de selección                                                                                                                          | 64                | 80                |
| `StartTextRenderY`         | La posición vertical inicial de texto de inicio                                                                                                                         | 143               | 143               |
| `BubbleTipRenderX`         | La posición horizontal de la punta de la burbuja que se muestra sobre el marco de selección                                                                             | 125               | 122               |
| `BubbleTipRenderY`         | La posición vertical de la punta de la burbuja que se muestra sobre el marco de selección                                                                               | 98                | 80                |
| `BubbleTipSpriteW`         | El ancho de la textura de la punta de la burbuja                                                                                                                        | 7                 | 11                |
| `BubbleTipSpriteH`         | La altura de la textura de la punta de la burbuja                                                                                                                       | 7                 | 8                 |
| `TitleboxRenderY`          | La posición vertical inicial del cuadro de texto que muestra el título                                                                                                  | 96                | 85                |
| `TitleboxTextY`            | La posición vertical inicial del texto de título                                                                                                                        | 55                | 30                |
| `TitleboxTextW`            | La anchura máxima del texto de título                                                                                                                                   | 200               | 240               |
| `TitleboxTextLarge`        | Si se usa o no la fuente grande para el texto de título                                                                                                                 | 0                 | 1                 |
| `TitleboxMaxLines`         | El número máximo de líneas que tendrá el texto de título                                                                                                                | 3                 | 4                 |
| `VolumeRenderX`            | La posición horizontal en la pantalla superior en la que se dibujará el icono de volumen                                                                                | 4                 | 4                 |
| `VolumeRenderY`            | La posición vertical en la pantalla superior en la que se dibujará el icono de volumen                                                                                  | 5                 | 5                 |
| `ShoulderLRenderX`         | La posición horizontal en la pantalla superior en la que se dibujará la textura del botón L                                                                             | 0                 | 0                 |
| `ShoulderLRenderY`         | La posición vertical en la pantalla superior en la que se dibujará la textura del botón L                                                                               | 172               | 172               |
| `ShoulderRRenderX`         | La posición horizontal en la pantalla superior en la que se dibujará la textura del botón R                                                                             | 178               | 178               |
| `ShoulderRRenderY`         | La posición vertical en la pantalla superior en la que se dibujará la textura del botón R                                                                               | 172               | 172               |
| `BatteryRenderX`           | La posición horizontal en la pantalla superior en la que se dibujará el icono de batería                                                                                | 235               | 235               |
| `BatteryRenderY`           | La posición vertical en la pantalla superior en la que se dibujará el icono de batería                                                                                  | 5                 | 5                 |
| `UsernameRenderX`          | La posición horizontal en la pantalla superior en la que se dibujará el nombre de usuario                                                                               | 28                | 28                |
| `UsernameRenderY`          | La posición vertical en la pantalla superior en la que se dibujará el nombre de usuario                                                                                 | 15                | 15                |
| `UsernameRenderXDS`        | La posición horizontal en la pantalla superior en la que se dibujará el nombre de usuario al usar una DS Phat/Lite                                                      | 4                 | 4                 |
| `DateRenderX`              | La posición horizontal en la pantalla superior en la que se dibujará el texto de la fecha                                                                               | 162               | 162               |
| `DateRenderY`              | La posición vertical en la pantalla superior en la que se dibujará el texto de la fecha                                                                                 | 7                 | 7                 |
| `TimeRenderX`              | La posición horizontal en la pantalla superior en la que se dibujará el texto de la hora                                                                                | 200               | 200               |
| `TimeRenderY`              | La posición vertical en la pantalla superior en la que se dibujará el texto de la hora                                                                                  | 7                 | 7                 |
| `PurpleBatteryAvailable`   | Si se usan o no lo iconos de batería púrpura si la opción `Color del LED de encendido` está establecido como `Púrpura` en los ajustes                                   | 1                 | 1                 |
| `FontPalette1`             | El color transparente de la fuente, no se usa en la fuentes por defecto                                                                                                 | 0x0000            | 0x0000            |
| `FontPalette2`             | Los colores de la fuente. Usa [este sitio](http://www.conradshome.com/html2bgr15/) para convertir de formato hexadecimal a BGR15, el formato requerido                  | 0xDEF7            | 0xDEF7            |
| `FontPalette3`             |                                                                                                                                                                         | 0xC631            | 0xC631            |
| `FontPalette4`             |                                                                                                                                                                         | 0xA108            | 0xA108            |
| `FontPaletteDateTime1`     | El color transparente de la fuente para la fecha y la hora                                                                                                              | 0x0000            | 0x0000            |
| `FontPaletteDateTime2`     | El color de la fuente para la fecha y la hora                                                                                                                           | 0xDEF7            | 0xA529            |
| `FontPaletteDateTime3`     |                                                                                                                                                                         | 0xC631            | 0xBDEF            |
| `FontPaletteDateTime4`     |                                                                                                                                                                         | 0xA108            | 0xD6B5            |
| `FontPaletteTitlebox1`     | El color transparente de la fuente del título de la ROM                                                                                                                 | 0x0000            | 0x0000            |
| `FontPaletteTitlebox2`     | El color de la fuente para el título de la ROM                                                                                                                          | 0xDEF7            | 0xDEF7            |
| `FontPaletteTitlebox3`     |                                                                                                                                                                         | 0xC631            | 0xC631            |
| `FontPaletteTitlebox4`     |                                                                                                                                                                         | 0xA108            | 0xA108            |
| `FontPaletteDialog1`       | El color transparente de la fuente para los cuadros emergentes                                                                                                          | 0x0000            | 0x0000            |
| `FontPaletteDialog2`       | El color de la fuente para los cuadros emergentes                                                                                                                       | 0xDEF7            | 0xDEF7            |
| `FontPaletteDialog3`       |                                                                                                                                                                         | 0xC631            | 0xC631            |
| `FontPaletteDialog4`       |                                                                                                                                                                         | 0xA108            | 0xA108            |
| `FontPaletteOverlay1`      | El color transparente de la fuente para el texto superpuesto                                                                                                            | 0x0000            | 0x0000            |
| `FontPaletteOverlay2`      | El color de la fuente para el texto superpuesto                                                                                                                         | 0xDEF7            | 0xDEF7            |
| `FontPaletteOverlay3`      |                                                                                                                                                                         | 0xC631            | 0xC631            |
| `FontPaletteOverlay4`      |                                                                                                                                                                         | 0xA108            | 0xA108            |
| `FontPaletteUsername1`     | El color transparente de la fuente para el nombre de usuario                                                                                                            | 0x0000            | 0x0000            |
| `FontPaletteUsername2`     | El color de la fuente para el nombre de usuario                                                                                                                         | 0xDEF7            | 0xDEF7            |
| `FontPaletteUsername3`     |                                                                                                                                                                         | 0xC631            | 0xC631            |
| `FontPaletteUsername4`     |                                                                                                                                                                         | 0xA108            | 0xA108            |
| `StartTextUserPalette`     | Si se usa o no el color del perfil como paleta de colores para el texto del marco de inicio                                                                             |                   | 1                 |
| `StartBorderUserPalette`   | Si se usa o no el color del perfil como paleta de colores para el marco de inicio                                                                                       |                   | 1                 |
| `ButtonArrowUserPalette`   | Si se usa o no el color del perfil como paleta de colores para los botones de las flechas en la pantalla inferior                                                       |                   | 1                 |
| `MovingArrowUserPalette`   | Si se usa o no el color del perfil como paleta de colores para la flecha que se muestra al mover iconos de sitio                                                        |                   | 1                 |
| `LaunchDotsUserPalette`    | Si se usa o no el color del perfil como paleta de colores para los puntos que aparecen al iniciar una aplicación                                                        |                   | 1                 |
| `DialogBoxUserPalette`     | Si se usa o no el color del perfil como paleta de colores para los cuadros emergentes                                                                                   |                   | 1                 |
| `RenderPhoto`              | Si se muestra o no una foto en la pantalla superior                                                                                                                     | 0                 | 1                 |
| `RotatingCubesRenderY`     | La posición vertical del archivo RVID en la pantalla superior                                                                                                           | 78                |                   |
| `PlayStartupJingle`        | Si se reproduce o no el sonido de inicio antes de la música de fondo del tema. Para más información, consulta la página de [Sonidos Personalizados](custom-dsi-3ds-sfx) | 1                 | 0                 |
| `StartupJingleDelayAdjust` | La cantidad de muestras de sonido que se adelantará la música de fondo al iniciar                                                                                       | 0                 | 0                 |

### Opciones del Modo Macro
Puedes añadir opciones prioritarias al archivo `theme.ini` para que sean usadas en el modo Macro. Para ello, añade el hilo `[MACRO]` en una línea en blanco al final del archivo de configuración, luego, añade la configuración específica debajo de dicho hilo.

## Música y sonidos personalizados
Los temas Nintendo DSi y Nintendo 3DS también tienen soporte para música y sonidos personalizados. Revisa la página [Skins DSi/3DS - Sonidos Personalizados](custom-dsi-3ds-sfx) para más detalles

## Fuentes personalizadas
Puedes colocar [Fuentes personalizadas](custom-fonts) en la carpeta `font` para que sean usadas con tu skin. También puedes usar fuentes prioritarias para la fecha y la hora usando un archivo `date_time.nftr`, y para el nombre de usuario usando un archivo `username.nftr`.

## Parte 3: Añadir tu skin a TWiLight Menu++
Una vez ya hayas editado tus texturas y quieras probar tu skin, simplemente copia la carpeta de tu skin (es decir, la carpeta que contiene las subcarpetas `background`, `battery`, etc.) al directorio `sd:/_nds/TWiLightMenu/3dsmenu/themes/` si la skin es para el tema 3DS, o `sd:/_nds/TWiLightMenu/dsimenu/themes/` si es para el tema DSi.

## Parte 4: Compartir tu skin
Una vez tu skin esté lista, puedes compartirla con la comunidad creando una Pull Request para añadirla al repositorio [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) en GitHub como un archivo `.7z`. Si no estás familiarizado con git, también puedes crear una entrada en el seguidor de problemas de ese repositorio adjuntando tu tema como un archivo zip, solicitando que se añada tu skin.
