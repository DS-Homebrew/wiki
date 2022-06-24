---
lang: en-US
layout: wiki
section: ds-index
category: reference
title: Video Players
description: Homebrew Video Players for the Nintendo DS(i)
---

# Homebrew Video Players for the Nintendo DS(i)
This page contains a list of working or WIP video players for the Nintendo DS and DSi that explains how each works.

Note: Actual max FPS is dependent on video content and length.

|Player name     |Supported containers/Codecs     |Support         |Drawbacks                                  |Max FPS                                        |Max resolution
|----------------|--------------------------------|----------------|-------------------------------------------|-----------------------------------------------|---------------|
|Moonshell       |`.dpg`, MPEG1                   |Flashcards only |Requires a flashcard to play videos.       |24fps                                          |256x192        |
|Tuna-ViDS       |`.avi`, XVid                    |DSi and NDS     |Can only reach a certain framerate/bitrate.|15fps                                          |256x192        |
|MPEG4Player     |`.mp4`, H.264                   |DSi and NDS     |Can only play short videos.                |24fps                                          |256x144        |
|Rocket Video    |`.rvid`, Raw/LZ77               |DSi and NDS     |Dumps frames in an uncompressed format.    |up to 25fps (Progressive) or 50fps (Interlaced)|256x192        |

There are lots of players to choose from. Moonshell is the first on the list because it should be the first thing that comes to mind when playing videos on NDS. However, it requires the user to have a flashcard.

MPEG4Player is outdated and may be replaced with a new video format, **FastVideoDS**. RocketVideo is no longer being maintained.

Warning: Converting large files in Rocket Video converter may cause you to loose your data as it writes uncompressed frames to the hard disk. This is why using Rocket Video is unrecommended.
{: .alert .alert-warning}

## Moonshell video conversion (DPG4x)

1. Download DPG4x [here](https://www.gamebrew.org/wiki/DPG4X)
1. Open `dpg4x.7z`
1. Open `dpg4x-2.3.3.0.zip` (3.0-1 gives out an error when opening, for an unknown reason)
1. Open `dpg4x-2.3.3.0_setup.exe`, and proceed with installation
1. After installation, open DPG4X
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

When this process is done, it should be easy as drag and drop to SD card. Once you put the video on your SD card, it will be ready for playback via **TW**i**L**ight Menu++.

The video will quit to the menu after it is done playing, so if you want to loop videos, you are going to have to paste-repeat it in a video editor then convert it to an xvid avi using this method.

## MPEG4Player

### Windows

The process is the same for Tuna-ViDS, but you can have videos up to 24fps.
- [dsmp4.bat](/assets/files/dsmp4.bat)
