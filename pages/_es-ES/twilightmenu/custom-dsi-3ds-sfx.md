---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Skins para DSi/3DS - Efectos de sonido personalizados
description: Cómo usar música de fondo y efectos de sonido personalizados en las skins de DSi y 3DS de TWiLight Menu++
---

TWiLightMenu permite usar sonidos personalizados en los temas. Coloca los archivos de sonido en la subcarpeta `sound` de tu tema. Por ejemplo, para el tema `white`, pondrías los archivos en `themes/white/sound/sfx.bin` y `themes/white/sound/bgm.pcm.raw`, respectivamente. Ambos archivos son opcionales, si `bmg.pcm.raw` no está, se usará la música por defecto. Lo mismo ocurrirá con los efectos de sonido si `sfx.bin` falta también.

En esta guía se asume que tienes instalado devkitPro con mmutil. Puedes descargarlo en la página de [devkitPro](https://devkitpro.org/wiki/Getting_Started).

## Banco de sonidos
El banco de efectos de sonido (`sfx.bin`) contiene los efectos de sonido, como el de selección, cambio de página, etc.

| Archivo     | Descripción                                                                              |
| ----------- | ---------------------------------------------------------------------------------------- |
| startup.wav | Suena al inicio. Ve a la sección de [Sonido de inicio](#startup-sound) para más detalles |
| back.wav    | Volver                                                                                   |
| launch.wav  | Suena al abrir un juego                                                                  |
| select.wav  | Suena al mover el cursor en los ajustes por juego y en el menú select                    |
| wrong.wav   | Suena al llegar al final de la página                                                    |
| switch.wav  | Suena al cambiar de página                                                               |
| stop.wav    | Suena en el Tema DSi cuando el cursor deja de moverse                                    |

Todos los archivos listados arriba son requeridos para construir un banco de efectos de sonido personalizado. Si quieres que un sonido sea mudo, puedes usar un archivo de audio que no tenga sonido. El formato `.wav` es obligatorio y la codificación *debe* ser PCM.

[Este archivo](/assets/files/sfx-example.zip) incluye los sonidos usados en los temas por DSi y 3DS con las skins por defecto, junto con el archivo makefile, requerido para construir un archivo sfx.bin válido. Siéntete libre de editar y cambiar los archivos de sonido para crear un banco de efectos de sonido personalizado.

Para construir un banco de efectos de sonido personalizado, abre tu terminal (o la línea de commandos si estás usando Windows), cambia el directorio actual (con el comando `cd`) a la carpeta donde se encuentra el archivo `Makefile`, y luego ejecuta el comando `make`. Obtendrás como resultado un archivo `sfx.bin` que puede ser copiado a la subcarpeta `sound` en la carpeta de tu skin personalizada. **Ese archivo debe ser más pequeño que 512000 bytes** (o sea, 512 kB). Si el archivo es más grande, provocará bloqueos o que algunos sonidos no se reproduzcan al completo.

### Sonido de inicio
Mientras que los otros sonidos funcionarán con cualquier archivo WAV con codificación PCM, el sonido de inicio debe tener un formato específico para funcionar correctamente, de otra forma, habrá un silencio entre que el sonido de inicio se acaba y empieza la música de fondo.

El archivo startup.wav debe ser de **16 bits y 16 kHz**. Puedes usar, por ejemplo, [Audacity](https://www.audacityteam.org/download/) para convertir el archivo a este formato. Una vez tengas el archivo cargado en Audacity, cambia la **Frecuencia (Hz)** a **16000**, luego presiona **Shift+M**, y cambia el **Formato** a **16 bits, PCM**.

Si tu archivo de sonido está en Estéreo, deberías también ir a **Pistas > Mezclar > Mezclar pista estéreo a mono**.

Debes establecer `PlayStartupJingle=1` en el archivo `theme.ini` de tu skin para que el sonido de inicio se reproduzca.


## Música del menú
La música del menú debe ser un archivo PCM de **16 bits a 16kHz en Mono** Más abajo hay dos métodos para convertir archivos de audio al formato adecuado.

Al contrario que el archivo sfx.bin, *bgm.pcm.raw* puede ser tan grande como quieras.

### ffmpeg
La forma más simple de convertir música para ser usada en TWiLight Menu++, es ejecutar este comando de [ffmeg](https://ffmpeg.org) en una terminal o línea de comandos:

```bash
ffmpeg -i [tu archivo] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Reemplaza `[tu archivo]` con el nombre del archivo que quieres convertir. También puedes simplemente arrastrar el archivo a convertir en la ventana del terminal o línea de comandos cuando el cursor está en el lugar correcto.

### Audacity
Si no quieres usar el comando, también puedes convertir al formato correcto usando [Audacity](https://www.audacityteam.org/download/).

Para convertir el audio:
1. Abre el archivo con Audacity
1. Si tu archivo es estéreo, haz clic en la canción y selecciona `Pista` > `Mezclar` > `Mezclar pista estéreo a mono`
1. Cambia la `Frecuencia (Hz)` en la parte inferior izquierda a `16000`

Para exportar en el formato correcto:
1. Selecciona `Archivo` > `Exportar` > `Exportar audio...`
1. Establece la opción `Tipo` a `Otros archivos sin comprimir`
1. Establece la opción `Cabecera` a `RAW (header-less)`
1. Establece la opción `Codificación` a `Signed 16-bit PCM`
1. Nombra el archivo `bgm.pcm.raw` y haz clic en `Guardar`
1. Haz clic en `Aceptar` en la ventana de edición de metadatos

Ahora tienes un archivo `bgm.pcm.raw` que puede ser copiado a la subcarpeta `sound` en la carpeta de tu skin personalizada.

 Deberás establecer la opción `Música en el Tema DSi/3DS` en los ajustes de TWiLight Menu++ a "Tema" para que tu música personalizada suene estando en el menú.
