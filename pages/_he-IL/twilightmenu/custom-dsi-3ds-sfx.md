---
lang: he-IL
layout: wiki
section: twilightmenu
category: customization
title: סקינים לDSi/3DS - התאמה אישית של SFX
description: כיצד להשתמש במוזיקת רקע מותאמת אישית ואפקטי סאונד בסקינים של DSi ו3DS עבור TWiLight Menu++
---

TWiLightMenu תומך בקבצי שמע מותאמים אישית בערכות הנושא. מקמו את קבצי השמע שלכם בתת התיקיה `sound` שבתיקיה ערכת הנושא שלכם, למשל עבור ערכת הנושא `white`, תמקמו את הקבצים ב`themes/white/sound/sfx.bin` וב`themes/sound/bgm.pcm.raw` בהתאמה. שתי הקבצים הם אופציונליים, אם אחד מהם חסר יהיה שימוש במוזיקת ברירת המחדל. לאחר מכן תשנו את הגדרת המוזיקה בהגדרות ל"Theme".

הוראות אלו מניחות שיש לכם את devkitPro מותקן עם mmutil. ניתן להשיג את devkitPro ב[אתר האינטרנט של devkitPro ](https://devkitpro.org/wiki/Getting_Started).

## בנק אפקטי צליל
בנק אפקטי הצליל מכיל אפקטי צליל שונים, לדוגמה צליל בחירת אייקון ועוד.

| קובץ        | תיאור                                                                      |
| ----------- | -------------------------------------------------------------------------- |
| startup.wav | מושמע בהפעלה. ראו את הפרק [צליל הפעלה](#startup-sound) למידע נוסף          |
| back.wav    | חזור                                                                       |
| launch.wav  | מושמע בהפעלה משחק                                                          |
| select.wav  | מושמע בהזזת סמן הבחירה                                                     |
| wrong.wav   | מושמע בהגעה לקצה העמוד                                                     |
| switch.wav  | מושמע בהעברת עמודים                                                        |
| stop.wav    | מושמע בערכת הנושא DSi כאשר סמן הבחירה מפסיק לזוז                           |
| bgm.pcm.raw | לא חלק מבנק הצלילים. ראו את הפרק [מוזיקת רקע בתפריט](#menu-bgm) למידע נוסף |

לאחר מכן תוכלו להריץ את `make` ליצירת בנק אפקטי הצליל. כל הקבצים המפורטים מעלה, מבלבד *bgm.pcm.raw* הכרחיים, אך ניתן להשתיקם.

קובץ *sfx.bin* הנוצר **חייב להיות מתחת ל512000B = 512 kB**. קובץ גדול יותר יגרום לקריסות או לחלק מהקבצים לא לנגן בצורה מלאה.

### צליל הפעלה
בעוד ששאר אפקטי הצליל יעבדו עם כל קובץ WAV, צליל ההפעלה חייב להיות בפורמט מסויים בשביל לעבוד כנדרש, אחרת יהיה פער בין סיום צליל ההפעלה לתחילת מוזיקת הרקע.

קובץ הstartup.wav חייב להיות **16-bit 16 kHz**. לדוגמה, ניתן להשתמש ב[Audacity](https://www.audacityteam.org/download/) להמרת הקובץ לפורמט הזה. כשהקובץ טעון בAudacity שנו את ה**Project Rate (Hz)** ל**16000**, לחצו על **Shift+M** ושנו את ה**Format** ל**16-bit PCM**.

אם הקובץ שלכם בסטריאו, לכו ל **Tracks > Mix > Mix Stereo down to Mono**.

חייב להגדיר את `PlayStartupJingle=1` ב `theme.ini` בשביל שצליל ההפעלה ינוגן.


## מוזיקת רקע בתפריט
מוזיקת רקע בתפריט צריכה להיות קובץ raw PCM עם ההגדרות **16-bit 16 kHz Mono**. Below are two methods for converting audio files into that format.

בניגוד לsfx.bin, גודלו של *bgm.pcm.raw* יכול להיות בכל גודל.

### ffmpeg
The simplest way to convert music for use in TWiLight Menu++ is to run this [ffmpeg](https://ffmpeg.org) command in a terminal:

```bash
ffmpeg -i [input file] -f s16le -acodec pcm_s16le -ac 1 -ar 16k bgm.pcm.raw
```

Replace `[input file]` with the name of the file you want to convert. You can usually do this by simply dragging the file onto the terminal window with the cursor in the correct location.

### Audacity
If you don't want to use the command line you can also convert using [Audacity](https://www.audacityteam.org/download/).

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
