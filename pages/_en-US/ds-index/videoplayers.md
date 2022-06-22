# Homebrew Video Players for the Nintendo DSi
This page contains a list of working or WIP video players for the Nintendo DSi that explains how each works.

Note: Actual max FPS is dependent on video content and length.

|Player name     |Supported containers/Codecs     |Support         |Drawbacks                                  |Max FPS                                        |Max resolution
|----------------|--------------------------------|----------------|-------------------------------------------|-----------------------------------------------|---------------|
|Moonshell       |`.dpg`, MPEG1                   |Flashcards only |Requires a flashcard to play videos.       |24fps                                          |256x192        |
|Tuna-ViDS       |`.avi`, XVid                    |DSi and NDS     |Can only reach a certain framerate/bitrate.|15fps                                          |256x192        |
|MPEG4Player     |`.mp4`, x264                    |DSi and NDS     |Can only play short videos.                |24fps                                          |256x144        |
|Rocket Video    |`.rvid`, Raw/LZ77               |DSi and NDS     |Dumps frames in an uncompressed format     |up to 25fps (Progressive) or 50fps (Interlaced)|256x192        |

There are lots of players to choose from. Moonshell is the first on the list because it should be the first thing that comes to mind when playing videos on NDS. However, it requires the user to have a flashcard.

MPEG4Player is in progress and may be replaced with a new video format, **FastVideoDS**. RocketVideo is no longer being maintained.

Warning: Converting large files in Rocket Video converter may cause you to loose your data as it writes uncompressed frames to the hard disk. This is why using Rocket Video is unrecommended.

## Moonshell video conversion (DPG4x)

WIP

## TunaViDS Guide for DSi

### Windows
First you want to grab your video of choice. It is recommended that your video be 4:3, but FFmpeg add black bars to the video if it isn't.

Warning: Do not change the ROM settings of Tuna-ViDS, it will not boot properly. This guide assumes you have the latest build of **TW**i**L**ight Menu++.

Next, download FFmpeg from [this direct link](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z) and extract it to C:\ffmpeg or somewhere you can access without admin rights.

You should probably stay in the safe zone for converting videos (10-15fps), otherwise your video may crash your DSi. Slowdowns may occur on busy scenes (confetti, rain, etc).

To use FFmpeg everywhere, it is recommended to add the directory to your system environment variable path. This may break programs which rely on FFmpeg, so make sure to remove the entry when you're done.

Use this example code to convert your videos
```
ffmpeg -i video.mp4 -vsync cfr -f avi -r 15 -vf "scale=256:-2" -b 192k -bt 64k -vcodec libxvid -deinterlace -acodec libmp3lame -ar 32000 -ab 96k -ac 2 -filter:a "volume=4" video-ds.avi
```
where `video.mp4` is the filename of the video you want to convert. Feel free to mess around with some of the settings.
- Try changing `-b 192k` to `-b 320k` for optimal quality, or (for DSi) `-b 512k` for the best quality available.
- Only use `-filter:a "volume=4"` if your video is a bit quiet. If the resulting video plays too loudly, please re-run the example code, but with `-filter:a "volume=4"` removed.
- If you're converting a 24fps video, change `-r 15` to `-r 12` to fix image jumping.

When this process is done, it should be easy as drag and drop to SD card. Once you put the video on your DSi, it will be ready for playback via **TW**i**L**ight Menu++.

The video will quit to the menu after it is done playing, so if you want to loop videos, you are going to have to paste-repeat it in a video editor then convert it to an xvid avi using this method.

## MPEG4Player

### Windows

The process is the same for Tuna-ViDS, but you can have videos up to 24fps, and the example code is different.
```
ffmpeg -i video.mp4 -f mp4 -vf "fps=24000/1001, colorspace=space=ycgco:primaries=bt709:trc=bt709:range=pc:iprimaries=bt709:iall=bt709, scale=256:144" -dst_range 1 -color_range 2 -vcodec mpeg4 -profile:v 0 -level 8 -q:v 2 -maxrate 500k -acodec aac -ar 32k -b:a 64000 -ac 1 -slices 1 -g 50 %2
```
