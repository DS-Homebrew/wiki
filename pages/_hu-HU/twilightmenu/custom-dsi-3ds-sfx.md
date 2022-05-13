---
lang: hu-HU
layout: wiki
section: twilightmenu
category: customization
title: DSi/3DS szkinek - Egyedi hangeffektusok
description: Hogyan használj egyedi háttérzenét és hang effekteket a DSi és 3DS szkinekben a TWiLight Menu++-ban
---

A TWiLight Menu++ támogatja az egyedi hang fájlokat a témákban. Rakd a hangfájlokat a `sound` alkönyvtárba a téma mappádba, például a `white` téma esetén, a fájljaid a `themes/white/sound/sfx.bin` és a `themes/white/sound/bgm.pcm.raw` kell legyenek. Both files are optional, if `bmg.pcm.raw` is missing, the default music will be used. The same thing would happen with the sound effects if `sfx.bin` is missing as well.

Ezek a lépések feltételezik, hogy rendelkezel devkitPro-val telepített mmutil-lal. A devkitPro-t beszerezheted a [devkitPro weboldaláról](https://devkitpro.org/wiki/Getting_Started).

## Hang effektusok bank
The sound effect bank (sfx.bin) contains sound effects such as the icon select sound, etc.

| Fájl        | Leírás                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------- |
| startup.wav | Induláskor játszódik le. Tekintsd meg a [Indítási hang](#startup-sound) szekciót a részletekért |
| back.wav    | Vissza                                                                                          |
| launch.wav  | Játék indításakor játszódik le                                                                  |
| select.wav  | Played when moving the cursor in the per-game settings and select menu                          |
| wrong.wav   | Az oldal végének elérésekor játszódik le                                                        |
| switch.wav  | Oldalak váltásakor játszódik le                                                                 |
| stop.wav    | A DSi témán játszódik le, ha a kiválaszt kurzor abbahagyja a mozgást                            |

All the files listed above are required to build a custom sound effect bank. If you want a sound to be mute, you can use a silent audio file. The `.wav` format is mandatory and the encoding *must* be PCM.

To build the sound effect bank you need to download [this file](/assets/files/Makefile) and put it next to all the `.wav` files that will be used. After all the files are on the same folder, open your terminal (or command line if you are using Windows), change the current directory (`cd`) to the folder where `Makefile` is, and then run the `make` command.

You will get a resulting `sfx.bin` file that can be copied to the `sound` subfolder in your theme folder. **This file must be under 512000B = 512 kB**. Any file larger than that will result in either crashes or some sounds not playing fully.

### Indítási hang
While the other sound effects will work with any WAV file with PCM encoding, the startup sound must be in a specific format in order to work properly, otherwise there will be a gap between when the startup sound stops and the background music begins.

The startup.wav file must be **16-bit 16 kHz**. You can use [Audacity](https://www.audacityteam.org/download/) for example to convert to this format. Once the file is loaded in Audacity, change the **Project Rate (Hz)** to **16000**, then press **Shift+M**, and change the **Format** to **16-bit PCM**.

If your file is in Stereo, you should also go to **Tracks > Mix > Mix Stereo down to Mono**.

You must set `PlayStartupJingle=1` in your `theme.ini` for the startup jingle to play.


## Menü BGM
Menu BGM needs to be a **16-bit 16 kHz Mono** raw PCM file. Below are two methods for converting audio files into that format.

Unlike sfx.bin, *bgm.pcm.raw* can be arbitrarily large.

### ffmpeg
The simplest way to convert music for use in TWiLight Menu++ is to run this [ffmpeg](https://ffmpeg.org) command in a terminal:

```bash
ffmpeg -i [input fájl] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Replace `[input file]` with the name of the file you want to convert. You can usually do this by simply dragging the file onto the terminal window with the cursor in the correct location.

### Audacity
If you don't want to use the command line you can also convert using [Audacity](https://www.audacityteam.org/download/).

To convert the audio:
1. Töltsd be a fájlt Audacity-be
1. Ha a fájlod Sztereó, akkor le kell konvertálnod monóra a `Tracks` > `Mix` > `Mix Stereo down to Mono` menüpontban
1. Cseréld a `Project Rate (Hz)`-et bal oldalt alul `16000`-re

To export in the correct format:
1. Válaszd a `File` > `Export` > `Export Audio...` opciókat
1. Állítsd a `File Type` opciót `Other uncompressed files`-ra
1. Állítsd a `Header`-t `RAW (header-less)`-re
1. Állítsd az `Encoding`-ot to `Signed 16-bit PCM`-re
1. Állítsd a fájlnevet `bgm.pcm.raw`-ra, majd kattints a `Save` gombra
1. Kattints az `OK`-ra a metaadat szerkesztése ablakban

Now you have a `bgm.pcm.raw` file that can be copied to the `sound` subfolder in your theme folder.

 You should then set the `DSi/3DS Theme Music` option in TWiLight Menu++ settings to "Theme" for your custom BGM to play on the menu.