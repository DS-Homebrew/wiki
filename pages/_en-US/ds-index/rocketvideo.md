---
lang: en-US
layout: wiki
section: ds-index
category: reference
title: Rocket Video Player
description: How to play videos with Rocket Video Player
---

# Advanced users, Windows x64 only

This is a time-consuming process, and may not be noob-friendly. It should only be followed if you are an advanced user.
{: .alert .alert-warning}

1. Download [Vid2RVID](https://github.com/RocketRobz/Vid2RVID/releases)
1. Download [VirtualDub2 build 42671](https://sourceforge.net/projects/vdfiltermod/files/VirtualDub%20pack/version%2020/VirtualDub2_42671.zip/download) (a later build may not extract frames properly)
1. Download and install [Audacity](https://www.audacityteam.org/download/)
1. Download and install the first-listed `Win64 dynamic at 16 bits-per-pixel component` build of [ImageMagick](https://imagemagick.org/script/download.php) under `Windows Binary Release`
   - During installation, once you've reached `Select Additional Tasks`, tick on `Add application directory to your system path`
1. Create a folder which will later contain the video's frames. It can go anywhere, but creating a folder called `rvidFrames` and placing it in the same place as `Vid2RVID.exe` will work as well

## Extracting video frames

1. Open VirtualDub2
1. Click `File` -> `Open video file...`
1. Search for the video file, and open it
1. Click `Video` -> `Filters...`
1. Click `Add...`
1. Search for `resize`, and click on it
1. Click `OK`
1. Under `New size`, change the top-left number to `256`
1. Click `Video` -> `Frame Rate...` to check the video's frame rate displayed next to `No change (current: `, and keep it in mind (or write it somewhere) for when you'll use Vid2RVID later
1. Click `File` -> `Export->Image sequence...`
1. Set the exact following in this screenshot: ![VirtualDub settings](https://github.com/RocketRobz/Vid2RVID/blob/master/vDub%20export%20settings.png?raw=true)    
   and click `...` to find the new folder where the extracted video frames will go
1. Click `OK` to export the frames, and wait until the extraction is done

## Extracting video frames (bottom screen)

If your video is not dual-screen, skip to [Extracting audio](#extracting-audio)
{: .alert .alert-info}

1. Make sure the video is the exact same aspect ratio and resolution as the video for the top screen (ex. if the top screen video is 4:3, the bottom screen video must also be 4:3)
1. Create a folder called `bottom` inside the folder containing the video's frames
1. Follow the above steps for `Extracting video frames`, but for step 11, open the `bottom` folder
1. Make sure the amount of `.png` files in the root frame folder and in the `bottom` folder are the same, otherwise Vid2RVID will complain about the amount of frames not matching

## Extracting audio

If your video does not have audio, skip to [Converting to the .rvid format](#converting-to-the-rvid-format)
{: .alert .alert-info}

1. Click `Audio` -> `Full processing mode`
1. Click `Audio` -> `Conversion...`
1. Under `Precision`, click `16-bit`
1. Under `Channels`, click either `Mono` or `Stereo`
1. Click `File` -> `Save audio...` to save the `.wav` file somewhere
1. Open Audacity
1. Click `File` -> `Open...`
1. Search for the `.wav` file, and open it
   - If you're asked to set the project tempo, click `Yes`
1. Click on the left-side box of the audio stream
1. If the audio waveform is below `0.5`, click `Effect` -> `Volume and Compression` -> `Amplify...`
1. Make sure `Allow clipping` is ticked
1. Depending on how low the wafeform is, set `Amplification (dB)` to either `6` or `12` (or something in between)
1. Click `Apply`
1. If this is stereo audio:
   - Right-click on the left-side box of the audio stream
   - Click on `Split Stereo to Mono`
   - Click `Solo` on the top stream to mark it
1. Click `File` -> `Export Audio...`
1. Set `File Name` to `sound.raw`
1. Set `Folder` to the folder containing the video's extracted frames
1. Set `Format` to `Other uncompressed files`
1. Set `Channels` to `Mono`
1. Set `Sample Rate` to `32000Hz` or less, keep that in mind (or write it somewhere) for when you'll use Vid2RVID later
1. Set `Header` to `RAW (header-less)`
1. Set `Encoding` to either `Signed 8-bit PCM` or `Signed 16-bit PCM`, keep that in mind for Vid2RVID as well
1. Set `Export Range` to `Entire Project`
1. Click `Export`
1. If this is stereo audio:
   - Click `Solo` on the top stream to unmark it
   - Click `Solo` on the bottom stream to mark it
   - Repeat steps 15-24, but set `File Name` to `soundRight.raw` instead of `sound.raw`

## Converting to the `.rvid` format

1. Open Vid2RVID by dragging and dropping the folder containing the video's extracted frames into `Vid2RVID.exe`
1. Press the `ENTER` key
1. Choose the amount of colors to display on-screen by pressing one of the number keys
1. When asked to choose the frame rate, choose the one that you've kept in mind during the video frame extraction process in VirtualDub2
   - If for example, the frame rate you checked in VirtualDub is `24.000 fps` instead of `23.976 fps`, hold the Right `->` key while selecting the `23.976FPS` option
1. If the frame rate is 25FPS or less, you'll be asked to compress the video frames. Press the `Y` key to compress the frames
1. When asked to choose the audio sample rate, choose the one that you've kept in mind during the audio export process in Audacity
1. When asked to choose the encoding of the audio, choose either `8-bit` or `16-bit` depending on which one you picked during the audio export process in Audacity
1. You'll now be asked if the entered information is correct. If you believe it to be correct, press the `Y` key to save the information and begin the conversion process
1. If you've picked `256 (8 BPP, RGB565)` as the color amount, open the `Process Frames.bat` file that has been created in the same place as the folder containing the video's frames, and wait until it's done, where you can then press the `ENTER` key to continue
   - If you've gotten an error for one of the video frames, that means ImageMagick has failed to process that frame, so it'll not be displayed properly in Rocket Video Player

When this process is done, drag and drop the new `.rvid` video file(s) (and the `.rvidsnd` file, if it exists) to SD card. Once you put the video on your SD card, it will be ready for playback via **TW**i**L**ight Menu++ or the standalone Rocket Video Player.

**NOTE:** If the `.rvid.3` file is above 4GB, it cannot be placed on the SD card, and as a result, the video cannot be played.
{: .alert .alert-info}