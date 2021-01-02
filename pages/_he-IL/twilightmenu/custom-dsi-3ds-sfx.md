---
lang: he-IL
layout: wiki
section: twilightmenu
title: סקינים לDSi/3DS - התאמה אישית של SFX
category: התאמה אישית
---

TWiLightMenu תומך בקבצי שמע מותאמים אישית בערכות הנושא. מקמו את קבצי השמע שלכם בתת התיקיה `sound` שבתיקיה ערכת הנושא שלכם, למשל עבור ערכת הנושא `white`, תמקמו את הקבצים ב`themes/white/sound/sfx.bin` וב`themes/sound/bgm.pcm.raw` בהתאמה. שתי הקבצים הם אופציונליים, אם אחד מהם חסר יהיה שימוש במוזיקת ברירת המחדל. לאחר מכן תשנו את הגדרת המוזיקה בהגדרות ל"Theme".

הוראות אלו מניחות שיש לכם את devkitPro מותקן עם mmutil. ניתן להשיג את devkitPro ב[אתר האינטרנט של devkitPro ](https://devkitpro.org/wiki/Getting_Started).

## בנק אפקטי צליל
The sound effect bank contains sound effects such as the icon select sound, etc.

| File        | Description                                                                            |
| ----------- | -------------------------------------------------------------------------------------- |
| startup.wav | Played on startup. See the section on [Startup sound](#startup-sound) for more details |
| back.wav    | Back                                                                                   |
| launch.wav  | Played when launching a game                                                           |
| select.wav  | Played when moving the select cursor                                                   |
| wrong.wav   | Played when reaching the end of the page                                               |
| switch.wav  | Played when switching pages                                                            |
| stop.wav    | Played on the DSi Theme when the select cursor stops moving                            |
| bgm.pcm.raw | Not part of the soundbank. See the section on [Menu BGM](#menu-bgm) for more details   |

You can then run `make` to make the sound effect bank. All files listed above, except *bgm.pcm.raw* are required, but you can make them silent.

Your resulting *sfx.bin* **must be under 512000B = 512KB**. Any larger will result in either crashes or some sounds not playing fully.

### Startup sound
While the other sound effects will work with any WAV file, the startup sound must be in a specific format in order to work properly, otherwise there will be a gap between when the startup sound stops and the background music begins.

The startup.wav file must be **16-bit 16kHz**. You can use [Audacity](https://www.audacityteam.org/download/) for example to convert to this format. Once the file is loaded in Audacity, change the **Project Rate (Hz)** to **16000**, then press **Shift+M**, and change the **Format** to **16-bit PCM**.

If your file is in Stereo, you should also go to **Tracks > Mix > Mix Stereo down to Mono**.

You must set `PlayStartupJingle=1` in your `theme.ini` for the startup jingle to play.


## Menu BGM

Menu BGM needs to be a **16-bit 16kHz Mono** raw PCM file. You can use [Audacity](https://www.audacityteam.org/download/) for example to convert to this format. Once the file is loaded in Audacity, change the **Project Rate (Hz)** to **16000**, then press **Shift+M**, and change the **Format** to **16-bit PCM**.

If your file is in Stereo, you should also go to **Tracks > Mix > Mix Stereo down to Mono**.

To export in the correct format, do:
1. Select `File` > `Export` > `Export Audio...`
1. Set `File Type` to `Other uncompressed files`
1. Set `Header` to `RAW (header-less)`
1. Set `Encoding` to `Signed 16-bit PCM`
1. Set the output name to `bgm.pcm.raw` and click `Save`
1. Click `OK` to the metadata editing

Now you have a `bgm.pcm.raw` file that can be copied to the *sound* subfolder in your theme folder.

Unlike sfx.bin, *bgm.pcm.raw* can be arbitrarily large.
