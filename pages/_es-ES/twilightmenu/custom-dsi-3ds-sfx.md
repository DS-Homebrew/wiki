---
lang: es-ES
layout: wiki
section: twilightmenu
category: customization
title: Skins para DSi/3DS - Efectos de sonido personalizados
description: Cómo usar música de fondo y efectos de sonido personalizados en las skins de DSi y 3DS de TWiLight Menu++
---

TWiLightMenu permite usar sonidos personalizados en los temas. Coloca los archivos de sonido en la subcarpeta `sound` de tu tema. Por ejemplo, para el tema `white`, pondrías los archivos en `themes/white/sound/sfx.bin` y `themes/white/sound/bgm.pcm.raw`, respectivamente. Both files are optional, if `bmg.pcm.raw` is missing, the default music will be used. The same thing would happen with the sound effects if `sfx.bin` is missing as well.

En esta guía se asume que tienes instalado devkitPro con mmutil. Puedes descargarlo en la página de [devkitPro](https://devkitpro.org/wiki/Getting_Started).

## Banco de sonidos
The sound effect bank (sfx.bin) contains sound effects such as the icon select sound, etc.

| Archivo     | Descripción                                                                              |
| ----------- | ---------------------------------------------------------------------------------------- |
| startup.wav | Suena al inicio. Ve a la sección de [Sonido de inicio](#startup-sound) para más detalles |
| back.wav    | Volver                                                                                   |
| launch.wav  | Suena al abrir un juego                                                                  |
| select.wav  | Played when moving the cursor in the per-game settings and select menu                   |
| wrong.wav   | Suena al llegar al final de la página                                                    |
| switch.wav  | Suena al cambiar de página                                                               |
| stop.wav    | Suena en el Tema DSi cuando el cursor deja de moverse                                    |

All the files listed above are required to build a custom sound effect bank. If you want a sound to be mute, you can use a silent audio file. The `.wav` format is mandatory and the encoding *must* be PCM.

To build the sound effect bank you need to download [this file](/assets/files/Makefile) and put it next to all the `.wav` files that will be used. After all the files are on the same folder, open your terminal (or command line if you are using Windows), change the current directory (`cd`) to the folder where `Makefile` is, and then run the `make` command.

You will get a resulting `sfx.bin` file that can be copied to the `sound` subfolder in your theme folder. **This file must be under 512000B = 512 kB**. Any file larger than that will result in either crashes or some sounds not playing fully.

### Sonido de inicio
While the other sound effects will work with any WAV file with PCM encoding, the startup sound must be in a specific format in order to work properly, otherwise there will be a gap between when the startup sound stops and the background music begins.

The startup.wav file must be **16-bit 16 kHz**. You can use [Audacity](https://www.audacityteam.org/download/) for example to convert to this format. Once the file is loaded in Audacity, change the **Project Rate (Hz)** to **16000**, then press **Shift+M**, and change the **Format** to **16-bit PCM**.

If your file is in Stereo, you should also go to **Tracks > Mix > Mix Stereo down to Mono**.

You must set `PlayStartupJingle=1` in your `theme.ini` for the startup jingle to play.


## Música del menú
Menu BGM needs to be a **16-bit 16 kHz Mono** raw PCM file. Below are two methods for converting audio files into that format.

Unlike sfx.bin, *bgm.pcm.raw* can be arbitrarily large.

### ffmpeg
The simplest way to convert music for use in TWiLight Menu++ is to run this [ffmpeg](https://ffmpeg.org) command in a terminal:

```bash
ffmpeg -i [input file] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Replace `[input file]` with the name of the file you want to convert. You can usually do this by simply dragging the file onto the terminal window with the cursor in the correct location.

### Audacity
If you don't want to use the command line you can also convert using [Audacity](https://www.audacityteam.org/download/).

To convert the audio:
1. Abre el archivo con Audacity
1. Si tu archivo es estéreo, pincha en la canción y selecciona `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Cambia el `Project Rate (Hz)` en la parte inferior izquierda a `16000`

To export in the correct format:
1. Selecciona `File` > `Export` > `Export Audio...`
1. Pon `File Type` a `Other uncompressed files`
1. Pon `Header` a `RAW (header-less)`
1. Pon `Encoding` en `Signed 16-bit PCM`
1. Pon como nombre `bgm.pcm.raw` y pincha en `Save`
1. Pincha `OK` en la edición de metadatos

Now you have a `bgm.pcm.raw` file that can be copied to the `sound` subfolder in your theme folder.

 You should then set the `DSi/3DS Theme Music` option in TWiLight Menu++ settings to "Theme" for your custom BGM to play on the menu.