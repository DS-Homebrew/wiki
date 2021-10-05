---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Skins para DSi/3DS - Efectos de sonido personalizados
description: Cómo usar música de fondo y efectos de sonido personalizados en las skins de DSi y 3DS de TWiLight Menu++
---

TWiLightMenu permite usar sonidos personalizados en los temas. Coloca los archivos de sonido en la subcarpeta `sound` de tu tema. Por ejemplo, para el tema `white`, pondrías los archivos en `themes/white/sound/sfx.bin` y `themes/white/sound/bgm.pcm.raw`, respectivamente. Ambos archivos son opcionales, si falta alguno se usarán los predeterminados. También debes poner en la configuración la opción de música a "Theme".

En esta guía se asume que tienes instalado devkitPro con mmutil. Puedes descargarlo en la página de [devkitPro](https://devkitpro.org/wiki/Getting_Started).

## Banco de sonidos
El banco de sonidos contiene distintos efectos como el de seleccionar un icono, etc.

| Archivo     | Descripción                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------ |
| startup.wav | Suena al inicio. Ve a la sección de [Sonido de inicio](#startup-sound) para más detalles         |
| back.wav    | Volver                                                                                           |
| launch.wav  | Suena al abrir un juego                                                                          |
| select.wav  | Suena al mover el cursor                                                                         |
| wrong.wav   | Suena al llegar al final de la página                                                            |
| switch.wav  | Suena al cambiar de página                                                                       |
| stop.wav    | Suena en el Tema DSi cuando el cursor deja de moverse                                            |
| bgm.pcm.raw | No pertenece al banco de sonidos. Ve a la sección [Música del menú](#menu-bgm) para más detalles |

Ejecuta `make` para crear el banco de sonidos. Todos los archivos mencionados excepto *bgm.pcm.raw* son necesarios, pero pueden ser silencio.

El *sfx.bin* resultante **debe tener menos de 512000B = 512 kB**. Si es más grande, puede provocar crasheos o cortes en los sonidos.

### Sonido de inicio
Mientras que los otros sonidos funcionan con cualquier archivo WAV, el de inicio tiene que estar en un formato específico para funcionar correctamente, o en otro caso habrá un silencio entre el sonido de inicio y el comienzo de la música de fondo.

El archivo startup.wav debe ser de **16-bit 16 kHz**. Puedes usar [Audacity](https://www.audacityteam.org/download/) para convertirlo a este formato. Una vez que hayas cargado el archivo en Audacity, cambia el **Project Rate (Hz)** a **16000**, después pulsa **Shift+M**, y cambia **Format** a **16-bit PCM**.

Si tu archivo es estéreo, debes ir a **Tracks > Mix > Mix Stereo down to Mono**.

Debes poner `PlayStartupJingle=1` en tu `theme.ini` para que suene.


## Música del menú
La música del menú debe ser un archivo PCM de **16-bit 16 kHz Mono**. Debajo dejamos dos métodos para convertir archivos de audio en ese formato.

Al contrario de sfx.bin, *bgm.pcm.raw* puede ser muy grande.

### ffmpeg
La forma más sencilla de convertir música para usarla en TWiLight Menu++ es lanzar el comando [ffmpeg](https://ffmpeg.org) en una consola de comandos:

```bash
ffmpeg -i [input file] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Reemplaza `[input file]` por el nombre del archivo que quieres convertir. También puedes hacer esto arrastrando el archivo a la consola de comandos teniendo el cursor en el sitio correcto.

### Audacity
Si no quieres usar la consola de comandos, puedes convertir el archivo usando [Audacity](https://www.audacityteam.org/download/).

Para convertir el audio:
1. Abre el archivo con Audacity
1. Si tu archivo es estéreo, pincha en la canción y selecciona `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Cambia el `Project Rate (Hz)` en la parte inferior izquierda a `16000`

Para exportarlo en el formato correcto:
1. Selecciona `File` > `Export` > `Export Audio...`
1. Pon `File Type` a `Other uncompressed files`
1. Pon `Header` a `RAW (header-less)`
1. Pon `Encoding` en `Signed 16-bit PCM`
1. Pon como nombre `bgm.pcm.raw` y pincha en `Save`
1. Pincha `OK` en la edición de metadatos

Ya tienes tu archivo `bgm.pcm.raw` que puedes copiar a la subcarpeta `sound` de tu tema.
