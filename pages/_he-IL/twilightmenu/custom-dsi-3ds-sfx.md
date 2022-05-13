---
lang: he-IL
layout: wiki
section: twilightmenu
category: customization
title: סקינים לDSi/3DS - התאמה אישית של SFX
description: כיצד להשתמש במוזיקת רקע מותאמת אישית ואפקטי סאונד בסקינים של DSi ו3DS עבור TWiLight Menu++
---

TWiLight Menu++ תומך בקבצי שמע מותאמים אישית בערכות הנושא. מקמו את קבצי השמע שלכם בתת התיקיה `sound` שבתיקיה ערכת הנושא שלכם, למשל עבור ערכת הנושא `white`, תמקמו את הקבצים ב`themes/white/sound/sfx.bin` וב`themes/white/sound/bgm.pcm.raw` בהתאמה. Both files are optional, if `bmg.pcm.raw` is missing, the default music will be used. The same thing would happen with the sound effects if `sfx.bin` is missing as well.

הוראות אלו מניחות שיש לכם את devkitPro מותקן עם mmutil. ניתן להשיג את devkitPro ב[אתר האינטרנט של devkitPro ](https://devkitpro.org/wiki/Getting_Started).

## בנק אפקטי צליל
The sound effect bank (sfx.bin) contains sound effects such as the icon select sound, etc.

| קובץ        | תיאור                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| startup.wav | מושמע בהפעלה. ראו את הפרק [צליל הפעלה](#startup-sound) למידע נוסף      |
| back.wav    | חזור                                                                   |
| launch.wav  | מושמע בהפעלה משחק                                                      |
| select.wav  | Played when moving the cursor in the per-game settings and select menu |
| wrong.wav   | מושמע בהגעה לקצה העמוד                                                 |
| switch.wav  | מושמע בהעברת עמודים                                                    |
| stop.wav    | מושמע בערכת הנושא DSi כאשר סמן הבחירה מפסיק לזוז                       |

All the files listed above are required to build a custom sound effect bank. If you want a sound to be mute, you can use a silent audio file. The `.wav` format is mandatory and the encoding *must* be PCM.

To build the sound effect bank you need to download [this file](/assets/files/Makefile) and put it next to all the `.wav` files that will be used. After all the files are on the same folder, open your terminal (or command line if you are using Windows), change the current directory (`cd`) to the folder where `Makefile` is, and then run the `make` command.

You will get a resulting `sfx.bin` file that can be copied to the `sound` subfolder in your theme folder. **This file must be under 512000B = 512 kB**. Any file larger than that will result in either crashes or some sounds not playing fully.

### צליל הפעלה
While the other sound effects will work with any WAV file with PCM encoding, the startup sound must be in a specific format in order to work properly, otherwise there will be a gap between when the startup sound stops and the background music begins.

The startup.wav file must be **16-bit 16 kHz**. You can use [Audacity](https://www.audacityteam.org/download/) for example to convert to this format. Once the file is loaded in Audacity, change the **Project Rate (Hz)** to **16000**, then press **Shift+M**, and change the **Format** to **16-bit PCM**.

If your file is in Stereo, you should also go to **Tracks > Mix > Mix Stereo down to Mono**.

You must set `PlayStartupJingle=1` in your `theme.ini` for the startup jingle to play.


## מוזיקת רקע בתפריט
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
1. טענו את הקובץ בAudacity
1. אם הקובץ שלכם בסטריאו, לחצו על השיר ובחרו ב`Tracks` > `Mix` > `Mix Stereo down to Mono`
1. שנו את `Project Rate (Hz)` בחלקו השמאלי התחתון של התוכנה ל`16000`

To export in the correct format:
1. בחרו ב `File` > `Export` > `Export Audio...`
1. הגדירו את `File Type` ל`Other uncompressed files`
1. הגדירו את `Header` ל`RAW (header-less)`
1. הגדירו את `Encoding` ל`Signed 16-bit PCM`
1. קבעו את שם המוצא ל`bgm.pcm.raw` ולחצו על `Save`
1. לחצו על `OK` לעריכת הmetadata

Now you have a `bgm.pcm.raw` file that can be copied to the `sound` subfolder in your theme folder.

 You should then set the `DSi/3DS Theme Music` option in TWiLight Menu++ settings to "Theme" for your custom BGM to play on the menu.