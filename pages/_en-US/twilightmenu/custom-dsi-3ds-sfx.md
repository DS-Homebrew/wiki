---
lang: en-US
layout: wiki
section: twilightmenu
category: customization
title: DSi/3DS Skins - Custom SFX
description: How to use custom background music and sound effects in DSi and 3DS skins for TWiLight Menu++
---

TWiLight Menu++ supports custom sound files in skin. Place your sound files under the `sound` subdirectory in your skin folder, for example for the `white` skin, you would place the files at `themes/white/sound/sfx.bin` and `themes/white/sound/bgm.pcm.raw` respectively. Both files are optional, if `bmg.pcm.raw` is missing, the default music will be used. The same thing would happen with the sound effects if `sfx.bin` is missing as well.

These instructions assume you have devkitPro installed with mmutil. You can get devkitPro at the [devkitPro website](https://devkitpro.org/wiki/Getting_Started).

## Sound Effect Bank
The sound effect bank (`sfx.bin`) contains sound effects such as the icon select sound, etc.

|File        |Description                                                                             |
|------------|----------------------------------------------------------------------------------------|
|startup.wav | Played on startup. See the section on [Startup sound](#startup-sound) for more details |
|back.wav    | Back                                                                                   |
|launch.wav  | Played when launching a game                                                           |
|select.wav  | Played when moving the cursor in the per-game settings and select menu                 |
|wrong.wav   | Played when reaching the end of the page                                               |
|switch.wav  | Played when switching pages                                                            |
|stop.wav    | Played on the DSi Theme when the select cursor stops moving                            |

All the files listed above are required to build a custom sound effect bank. If you want a sound to be mute, you can use a silent audio file. The `.wav` format is mandatory and the encoding *must* be PCM.

[This file](/assets/files/sfx-example.zip) includes the sounds used in the default DSi and 3DS themes, along with the makefile used to build them into a valid sfx.bin file. Feel free to edit and change the sound files to make a custom sound effect bank.

To build your custom sound effect bank, open your terminal (or command line if you are using Windows), change the current directory (`cd`) to the folder where `Makefile` is, and then run the `make` command. You will get a resulting `sfx.bin` file that can be copied to the `sound` subfolder in your theme folder. **This file must be under 512000B = 512 kB**. Any file larger than that will result in either crashes or some sounds not playing fully.

### Startup sound
While the other sound effects will work with any WAV file with PCM encoding, the startup sound must be in a specific format in order to work properly, otherwise there will be a gap between when the startup sound stops and the background music begins.

The startup.wav file must be **16-bit 16 kHz**. You can use [the v3.0.2 version of Audacity](https://github.com/audacity/audacity/releases/tag/Audacity-3.0.2) for example to convert to this format. Once the file is loaded in Audacity, change the **Project Rate (Hz)** to **16000**, then press **Shift+M**, and change the **Format** to **16-bit PCM**.

If your file is in Stereo, you should also go to **Tracks > Mix > Mix Stereo down to Mono**.

You must set `PlayStartupJingle=1` in your `theme.ini` for the startup jingle to play.


## Menu BGM
Menu BGM needs to be a **16-bit 16 kHz Mono** raw PCM file. Below are two methods for converting audio files into that format.

Unlike sfx.bin, *bgm.pcm.raw* can be arbitrarily large.

### ffmpeg
The simplest way to convert music for use in TWiLight Menu++ is to run this [ffmpeg](https://ffmpeg.org) command in a terminal:

```bash
ffmpeg -i [input file] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Replace `[input file]` with the name of the file you want to convert. You can usually do this by simply dragging the file onto the terminal window with the cursor in the correct location.

### Audacity
If you don't want to use the command line you can also convert using [the v3.0.2 version of Audacity](https://github.com/audacity/audacity/releases/tag/Audacity-3.0.2).

To convert the audio:
1. Load the file in Audacity
1. If your file is in stereo, click on the song then select `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Change the `Project Rate (Hz)` in the bottom left to `16000`

To export in the correct format:
1. Select `File` > `Export` > `Export Audio...`
1. Set `File Type` to `Other uncompressed files`
1. Set `Header` to `RAW (header-less)`
1. Set `Encoding` to `Signed 16-bit PCM`
1. Set the output name to `bgm.pcm.raw` and click `Save`
1. Click `OK` to the metadata editing

Now you have a `bgm.pcm.raw` file that can be copied to the `sound` subfolder in your theme folder.

You should then set the `DSi/3DS Theme Music` option in TWiLight Menu++ settings to "Theme" for your custom BGM to play on the menu.
