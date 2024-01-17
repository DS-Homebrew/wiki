---
lang: he-IL
layout: wiki
section: ds-index
category: reference
title: Video Players
description: Homebrew Video Players for the Nintendo DS(i)
---

# Homebrew Video Players for the Nintendo DS(i)
This page contains a list of working or WIP video players for the Nintendo DS and DSi that explains how each works.

| Player name | Supported containers/Codecs | Support         | Drawbacks                                   | Max FPS |
| ----------- | --------------------------- | --------------- | ------------------------------------------- | ------- |
| FastVideoDS | `.fv`, FastVideoDS          | DSi and NDS     | Confetti spam slows down high FPS video.    | 60fps   |
| Moonshell   | `.dpg`, MPEG1               | Flashcards only | Requires a flashcard to play videos.        | 24fps   |
| Tuna-ViDS   | `.avi`, XVid                | DSi and NDS     | Can only reach a certain framerate/bitrate. | 15fps   |
| MPEG4Player | `.mp4`, MPEG-4              | DSi and NDS     | Can only play short videos.                 | 24fps   |

Notes:
- Actual max FPS is dependent on video content and length.

## FastVideoDS

Note: If you get a message saying `This encoder requires a cpu with support for AVX2 instructions`, then you need to either install a newer CPU chip, or use a newer PC.
{: .alert .alert-warning}

### Windows

1. Download the [.NET Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-6.0.12-windows-x64-installer?cid=getdotnetcore), and install it
1. Download the [FastVideoDS Encoder](https://mega.nz/file/mYwiBTZA#FX6k-9cclPig4_WutE9IueVR7NN0Kxl-mZvRXyhpQRg)
1. Download [FastVideoDS.bat](/assets/files/FastVideoDS.bat) to the same place as the encoder `.exe` file
1. Copy or move your video to the same place as the `.bat` file
1. Drag and drop the copied or moved video into the `.bat` file

When this process is done, it should be easy as drag and drop to SD card. Once you put the video on your SD card, it will be ready for playback via **TW**i**L**ight Menu++.

## Moonshell video conversion (DPG4x)

1. Download [DPG4x](https://www.gamebrew.org/wiki/DPG4X)
1. Open `dpg4x.7z`
1. Open `dpg4x-2.3.3.0.zip` (3.0-1 gives out an error when opening, for an unknown reason)
1. Open `dpg4x-2.3.3.0_setup.exe`, and proceed with installation
1. After installation, open DPG4x
1. Click the `VIDEO` tab
1. Tick the `Keep Aspect` option
1. Set `Video Bitrate` to your choice (higher should improve quality)
1. Click the `AUDIO` tab
1. Tick `Normalize Volume`, if your video is a bit quiet
1. Click the `SUBTITLES` tab
1. Set `Subtitles Source` to `Disable Subtitles`, as certain subtitle tracks may not display correctly
1. Click the `MAIN` tab
1. Click `Add Media` to open your video file(s)
1. Set `DPG Version` to `4`, if you're using Moonshell v2.x, otherwise set to `3` or below
1. Set `Quality` to your choice
1. Click `Start Encoding` to convert the video(s)

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

The process is the same for Tuna-ViDS, but you can have videos up to 24fps.
- [dsmp4-43.bat](/assets/files/dsmp4.bat): For 4:3 videos
- [dsmp4.bat](/assets/files/dsmp4.bat): For 16:9 videos
