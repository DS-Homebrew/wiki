---
lang: pl_PL
layout: wiki
section: twilightmenu
category: customization
title: Skórki DSi/3DS - Własne SFX
description: Jak używać niestandardowych efektów muzycznych i dźwiękowych w tle DSi i 3DS dla TWiLight Menu++
---

TWiLight Menu++ obsługuje niestandardowe pliki dźwiękowe w motywach. Umieść pliki dźwiękowe w podkatalogu `sound` w folderze motywu, na przykład dla motywu `white` umieścisz pliki odpowiednio w `themes/white/sound/sfx.bin` i `themes/white/sound/bgm.pcm.raw`. Both files are optional, if `bmg.pcm.raw` is missing, the default music will be used. The same thing would happen with the sound effects if `sfx.bin` is missing as well.

Te instrukcje zakładają, że devkitPro jest zainstalowany razem z mmutil. Możesz pobrać devkitPro na [stronie devkitPro](https://devkitpro.org/wiki/Getting_Started).

## Bank Efektów Dźwiękowych
The sound effect bank (sfx.bin) contains sound effects such as the icon select sound, etc.

| Plik        | Opis                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| startup.wav | Puszczony podczas uruchomienia. Więcej szczegółów można znaleźć w rozdziale [Dźwięk startowy](#startup-sound) |
| back.wav    | Powrót                                                                                                        |
| launch.wav  | Grane podczas uruchamiania gry                                                                                |
| select.wav  | Played when moving the cursor in the per-game settings and select menu                                        |
| wrong.wav   | Odtwarzane po dotarciu do końca strony                                                                        |
| switch.wav  | Odtwarzane podczas przełączania stron                                                                         |
| stop.wav    | Odtwarzany w motywie DSi, gdy kursor przestanie się poruszać                                                  |

All the files listed above are required to build a custom sound effect bank. If you want a sound to be mute, you can use a silent audio file. The `.wav` format is mandatory and the encoding *must* be PCM.

To build the sound effect bank you need to download [this file](/assets/files/Makefile) and put it next to all the `.wav` files that will be used. After all the files are on the same folder, open your terminal (or command line if you are using Windows), change the current directory (`cd`) to the folder where `Makefile` is, and then run the `make` command.

You will get a resulting `sfx.bin` file that can be copied to the `sound` subfolder in your theme folder. **This file must be under 512000B = 512 kB**. Any file larger than that will result in either crashes or some sounds not playing fully.

### Dźwięk Startowy
While the other sound effects will work with any WAV file with PCM encoding, the startup sound must be in a specific format in order to work properly, otherwise there will be a gap between when the startup sound stops and the background music begins.

The startup.wav file must be **16-bit 16 kHz**. You can use [Audacity](https://www.audacityteam.org/download/) for example to convert to this format. Once the file is loaded in Audacity, change the **Project Rate (Hz)** to **16000**, then press **Shift+M**, and change the **Format** to **16-bit PCM**.

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
If you don't want to use the command line you can also convert using [Audacity](https://www.audacityteam.org/download/).

To convert the audio:
1. Załaduj plik w Audacity
1. Jeśli twój plik jest w stereo, kliknij na utwór, a następnie wybierz `Tracks` > `Mix` > `Mix Stereo down to Mono`
1. Zmień `Project Rate (Hz)` w lewym dolnym rogu na `16000`

To export in the correct format:
1. Wybierz `File` > `Eksport` > `Eksport audio...`
1. Ustaw `Typ pliku` na `Inne pliki nieskompresowane`
1. Ustaw `Header` na `RAW (header-less)`
1. Ustaw `Encoding` na `Signed 16-bit PCM`
1. Ustaw nazwę wyjściową na `bgm.pcm.raw` i kliknij `Zapisz`
1. Kliknij `OK`, aby przejść do edycji metadanych

Now you have a `bgm.pcm.raw` file that can be copied to the `sound` subfolder in your theme folder.

 You should then set the `DSi/3DS Theme Music` option in TWiLight Menu++ settings to "Theme" for your custom BGM to play on the menu.