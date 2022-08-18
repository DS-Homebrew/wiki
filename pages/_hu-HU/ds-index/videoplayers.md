---
lang: hu-HU
layout: wiki
section: ds-index
category: reference
title: Video lejátszók
description: Homebrew videólejátszók Nintendo DS(i)-re
---

# Homebrew videólejátszók Nintendo DS(i)-re
Ez az oldal a Nintendo DS és DSi működő vagy WIP videólejátszók listáját tartalmazza és elmagyarázza az egyes lejátszók működését.

| Lejátszó neve | Támogatott formátumok/codec-ek | Támogatás      | Hátrányok                                   | Max FPS                                         |
| ------------- | ------------------------------ | -------------- | ------------------------------------------- | ----------------------------------------------- |
| Moonshell     | `.dpg`, MPEG1                  | Csak flashcard | Flashcard szükséges a videók lejátszásához. | 24 fps                                          |
| Tuna-ViDS     | `.avi`, XVid                   | DSi és NDS     | Can only reach a certain framerate/bitrate. | 15 fps                                          |
| MPEG4Player   | `.mp4`, H.264                  | DSi és NDS     | Can only play short videos.                 | 24 fps                                          |
| Rocket Video  | `.rvid`, Raw/LZ77              | DSi és NDS     | Dumps frames in an uncompressed format.     | up to 25fps (Progressive) or 50fps (Interlaced) |

Megjegyzések:
- A tényleges maximális FPS a videó tartalmától és hosszától függ.
- Az MPEG4Player régi és egy új videó formátumra kerülhet lecserélésre, a **FastVideoDS**-re. A RocketVideo már nincs fejlesztve.

Figyelmeztetés: A nagyméretű fájlok konvertálása a Rocket Video konverterrel adatvesztést okozhat, mivel tömörítetlen képkockákat ír a merevlemezre. Ezért nem ajánlott a Rocket Video használata.
{: .alert .alert-warning}

## Moonshell videó konverzió (DPG4x)

1. Töltsd le a DPG4x-et [innen](https://www.gamebrew.org/wiki/DPG4X)-t
1. Nyisd meg az `dpg4x.7z` fájlt
1. Nyisd meg a `dpg4x-2.3.3.3.0.zip` fájlt (a 3.0-1 ismeretlen okból hibát ad ki megnyitáskor)
1. Nyisd meg a `dpg4x-2.3.3.3.0_setup.exe`-t és folytasd a telepítést
1. A telepítés után nyisd meg a DPG4x-et
1. Kattints a `VIDEO` fülre
1. Jelöld be a `Keep Aspect` opciót
1. Állítsd be a `Video Bitrate` értéket a kívánt értékre (a magasabb érték javítja a minőséget)
1. Kattints az `AUDIO` fülre
1. Jelöld be a `Normalize Volume` opciót, ha a videó halk
1. Kattints a `SUBTITLES` fülre
1. Állítsd be a `Subtitles Source`-t `Disable Subtitles`-re mivel bizonyos felirat-sávok nem jelenhetnek meg helyesen
1. Kattints a `MAIN` fülre
1. Kattints az `Add Media` gombra a videofájl(ok) megnyitásához
1. Állítsd be a `DPG Version`-t `4`-re, ha a Moonshell v2.x-et használod, egyébként állítsd be `3`-ra vagy az alatti értékre
1. Állítsd be a `Quality`-t a minőség választásod szerint beállításához
1. Kattints a `Start Encoding`-ra a videó(k) konvertálásához

When this process is done, it should be easy as drag and drop to SD card. Once you put the video on your SD card, it will be ready for playback via Moonshell.

## TunaViDS Guide

### Windows
First you want to grab your video of choice. It is recommended that your video be 4:3, but FFmpeg add black bars to the video if it isn't.

Warning: Do not change the ROM settings of Tuna-ViDS, it will not boot properly. This guide assumes you have the latest build of **TW**i**L**ight Menu++.
{: .alert .alert-warning}

Next, download FFmpeg from [this direct link](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z) and extract it to C:\ffmpeg or somewhere you can access without admin rights.

You should probably stay in the safe zone for converting videos (10-15fps), otherwise your video may crash your console. Slowdowns may occur on busy scenes (confetti, rain, etc).

To use FFmpeg everywhere, it is recommended to add the directory to your system environment variable path. This may break programs which rely on FFmpeg, so make sure to remove the entry when you're done.

Drag and drop your video into one of these batch files to convert it:
- [xvid-ds.bat](/assets/files/xvid-ds.bat): Converts to 12FPS video optimal for DS consoles
- [xvid-dsi.bat](/assets/files/xvid-dsi.bat): Converts to 12FPS video optimal for DSi consoles
- [xvid-ds-vol4.bat](/assets/files/xvid-ds-vol4.bat): Converts to 12FPS video optimal for DS consoles with 400% volume increase
- [xvid-dsi-vol4.bat](/assets/files/xvid-dsi-vol4.bat): Converts to 12FPS video optimal for DSi consoles with 400% volume increase

If you want, you can change the following in one of the above .bat files:
- `12` in `-r 12` to a different one between `10` and `15` for a different frame rate
- `-2` in `scale=256:-2` to your desired vertical resolution, if the video appears distorted

When this process is done, it should be easy as drag and drop to SD card. Once you put the video on your SD card, it will be ready for playback via **TW**i**L**ight Menu++.

The video will quit to the menu after it is done playing, so if you want to loop videos, you are going to have to paste-repeat it in a video editor then convert it to an xvid avi using this method.

## MPEG4Player

### Windows

A folyamat ugyanaz a Tuna-ViDS esetében, de a videók akár 24fps sebességűek is lehetnek.
- [dsmp4-43.bat](/assets/files/dsmp4.bat): 4:3 videókhoz
- [dsmp4.bat](/assets/files/dsmp4.bat): 16:9 videókhoz
