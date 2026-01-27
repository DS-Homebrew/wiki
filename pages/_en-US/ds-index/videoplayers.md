---
lang: en-US
layout: wiki
section: ds-index
category: reference
title: Video Players
description: Homebrew Video Players for the Nintendo DS(i)
---

As these video players (except for Rocket Video Player) do not have their own menus for opening a video, this guide assumes you are using **TW**i**L**ight Menu++ with the Multimedia add-on installed. If you do not have the Multimedia add-on installed, see [Installing Add-ons](../twilightmenu/installing-addons) for how to install it.
{:.alert .alert-info}

# Homebrew Video Players for the Nintendo DS(i)
This page contains a list of working video players for the Nintendo DS and DSi that explains how each works.

|Player name        |Supported containers/Codecs|Drawbacks                                  |Max FPS                          |Temporal Dithering|
|-------------------|---------------------------|-------------------------------------------|---------------------------------|------------------|
|FastVideoDS        |`.fv`, FastVideoDS         |Confetti spam slows down high FPS video.   |60fps (DSi mode), 30fps (DS mode)|No                |
|Rocket Video Player|`.rvid`, RocketVideoDS     |Large file size due to raw video output.   |72fps                            |Yes               |
|Moonshell          |`.dpg`, MPEG-1             |Can only reach a certain framerate/bitrate.|24fps                            |Yes               |
|tuna-viDS          |`.avi`, XVid               |Can only reach a certain framerate/bitrate.|15fps                            |No                |
|MPEG4Player        |`.mp4`, MPEG-4             |Can only play short videos.                |24fps                            |No                |

**Notes:**
- Actual max FPS is dependent on video content and length.
- Moonshell v1.x and beta builds of v2.00 may lock-up later on, if video bitrate is higher than around `192`. It is recommended to use v2.10.

## Comparison

This can help with deciding which player to use. Look closely to see the differences.

Tested with *Sonic The Hedgehog* (2020)

### Picture Quality

![A comparison between video players](/assets/images/video-players/quality-comparison.png)

### Filesize

- RocketVideoDS (16BPP RGB565, 32KHz 16-bit Stereo audio): 4.34 GB
- RocketVideoDS (8BPP, 32KHz 16-bit Stereo audio): 3.06 GB
- FastVideoDS: 663 MB
- Moonshell (Quality: Extra High, Video Bitrate: 464): 439 MB
- MPEG4Player: 311 MB
- tuna-viDS: 276 MB

## FastVideoDS

If you get a message saying `This encoder requires a cpu with support for AVX2 instructions`, then you need to either install a newer CPU chip, or use a newer PC.
{: .alert .alert-warning}

### Windows x64

1. Download the [.NET Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-6.0.12-windows-x64-installer?cid=getdotnetcore), and install it
1. Download the [FastVideoDS Encoder](https://mega.nz/file/mYwiBTZA#FX6k-9cclPig4_WutE9IueVR7NN0Kxl-mZvRXyhpQRg)
1. Download [FastVideoDS.bat](/assets/files/FastVideoDS.bat) to the same place as the encoder `.exe` file
1. Copy or move your video to the same place as the `.bat` file
1. Drag and drop the copied or moved video into the `.bat` file

When this process is done, it should be easy as drag and drop to SD card. Once you put the video on your SD card, it will be ready for playback via **TW**i**L**ight Menu++.

## Rocket Video Player (Advanced users, Windows x64 only)

The only player which supports
- Videos up to 72FPS
- 60-72FPS support on DS and DS Lite
- Maximum quality 16BPP RGB565 playback
- Dual-screen videos

*See [Rocket Video Player](rocketvideo)*

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

## tuna-viDS

### Windows
First you want to grab your video of choice. It is recommended that your video be 4:3, but FFmpeg add black bars to the video if it isn't.

Warning: Do not change the ROM settings of Tuna-ViDS, it will not boot properly. This guide assumes you have the latest build of **TW**i**L**ight Menu++.
{: .alert .alert-warning}

Next, download FFmpeg from [this direct link](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z) and extract it to `C:\ffmpeg` or somewhere you can access without admin rights.

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

1. Download FFmpeg v7.0.2 from [this direct link](https://github.com/GyanD/codexffmpeg/releases/download/7.0.2/ffmpeg-7.0.2-essentials_build.7z) (Later versions will not work with this method)
1. Extract it to `C:\ffmpeg` or somewhere you can access without admin rights
1. After extraction, rename `ffmpeg.exe` to `ffmpeg702.exe`
1. Drag and drop your video into this batch file to convert it: [dsmp4.bat](/assets/files/dsmp4.bat)
