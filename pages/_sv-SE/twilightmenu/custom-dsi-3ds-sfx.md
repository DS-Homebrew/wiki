---
lang: sv-SE
layout: wiki
section: twilightmenu
category: customization
title: DSi/3DS Skins - Custom SFX
description: Hur man använder anpassad bakgrundsmusik och ljudeffekter i DSi och 3DS stilar för TWiLight Menu++
---

TWiLight Menu++ supports custom sound files in themes. Place your sound files under the `sound` subdirectory in your theme folder, for example for the `white` theme, you would place the files at `themes/white/sound/sfx.bin` and `themes/white/sound/bgm.pcm.raw` respectively. Both files are optional, if `bmg.pcm.raw` is missing, the default music will be used. The same thing would happen with the sound effects if `sfx.bin` is missing as well.

Dessa instruktioner förutsätter att du har devkitPro installerat med mmutil. Du kan skaffa devkitPro på [devkitPro-webbplatsen](https://devkitpro.org/wiki/Getting_Started).

## Ljudeffekter
The sound effect bank (sfx.bin) contains sound effects such as the icon select sound, etc.

| Fil         | Beskrivning                                                                              |
| ----------- | ---------------------------------------------------------------------------------------- |
| startup.wav | Spelas vid uppstart. Se avsnittet om [Uppstartsljud](#startup-sound) för mer information |
| back.wav    | Tillbaka                                                                                 |
| launch.wav  | Spelas när du startar ett spel                                                           |
| select.wav  | Played when moving the cursor in the per-game settings and select menu                   |
| wrong.wav   | Spelas när du når slutet av sidan                                                        |
| switch.wav  | Spelas vid byte av sidor                                                                 |
| stop.wav    | Spelas på DSi Temat när markören slutar flytta                                           |

All the files listed above are required to build a custom sound effect bank. If you want a sound to be mute, you can use a silent audio file. The `.wav` format is mandatory and the encoding *must* be PCM.

To build the sound effect bank you need to download [this file](/assets/files/Makefile) and put it next to all the `.wav` files that will be used. After all the files are on the same folder, open your terminal (or command line if you are using Windows), change the current directory (`cd`) to the folder where `Makefile` is, and then run the `make` command.

You will get a resulting `sfx.bin` file that can be copied to the `sound` subfolder in your theme folder. **This file must be under 512000B = 512 kB**. Any file larger than that will result in either crashes or some sounds not playing fully.

### Uppstartsljud
While the other sound effects will work with any WAV file with PCM encoding, the startup sound must be in a specific format in order to work properly, otherwise there will be a gap between when the startup sound stops and the background music begins.

The startup.wav file must be **16-bit 16 kHz**. You can use [Audacity](https://www.audacityteam.org/download/) for example to convert to this format. Once the file is loaded in Audacity, change the **Project Rate (Hz)** to **16000**, then press **Shift+M**, and change the **Format** to **16-bit PCM**.

If your file is in Stereo, you should also go to **Tracks > Mix > Mix Stereo down to Mono**.

You must set `PlayStartupJingle=1` in your `theme.ini` for the startup jingle to play.


## Meny BGM
Menu BGM needs to be a **16-bit 16 kHz Mono** raw PCM file. Below are two methods for converting audio files into that format.

Unlike sfx.bin, *bgm.pcm.raw* can be arbitrarily large.

### ffmpeg
The simplest way to convert music for use in TWiLight Menu++ is to run this [ffmpeg](https://ffmpeg.org) command in a terminal:

```bash
ffmpeg -i [inmatningsfil] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Replace `[input file]` with the name of the file you want to convert. You can usually do this by simply dragging the file onto the terminal window with the cursor in the correct location.

### Audacity
If you don't want to use the command line you can also convert using [Audacity](https://www.audacityteam.org/download/).

To convert the audio:
1. Ladda filen i Audacity
1. Om din fil är i stereo, klicka på låten och välj sedan `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Ändra `Project Rate (Hz)` längst ned till vänster till `16000`

To export in the correct format:
1. Välj `File` > `Export` > `Export Audio...`
1. Ställ in `File Type` till `Other uncompressed files`
1. Ställ in `Header` till `RAW (header-less)`
1. Ställ in `Encoding` till `Signed 16-bit PCM`
1. Ställ in utdatanamnet till `bgm.pcm.raw` och klicka `Save`
1. Klicka på `OK` för att redigera metadata

Now you have a `bgm.pcm.raw` file that can be copied to the `sound` subfolder in your theme folder.

 You should then set the `DSi/3DS Theme Music` option in TWiLight Menu++ settings to "Theme" for your custom BGM to play on the menu.