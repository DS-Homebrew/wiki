---
lang: he-IL
layout: wiki
section: twilightmenu
category: customization
title: איך להכין סקינים לDSi / 3DS
---

הדרך הפשוטה ביותר להתאמה אישית של ערכת נושא היא על ידי עריכת קבצי הpng של הטקסטורות בתיקיות `ui`, `battery`, ו/או `volume` של ערכת הנושא. קבצים אלו יכולים להיות כל png עם דגש קטן שרק פיקסלים שהם 100% שקופים יהיו שקופים, כל דרגה אחרת של שקיפות תהיה ללא שקיפות כלל. בנוסף, כל חלק שהוא שקוף כחלק מסט (לדוגמת האייקונים של הבטריה) צריכים להיות שקופים בכל החלקים, מאחר ופיקסלים שקופים מדולגים במקום להיות מועברים לרקע, כך שכל חלק שהוא שקוף בחלקו יהיה עם טקסטורת הרקע במקום שקיפות. טקסטורות אלו רשאיות להיות בגדלים שונים, אך עשויות לדרוש התאמה של תצורת ערכת הנושא בשביל הצגה נכונה (ראו מטה).

שינויים לטקסטורות עם לוח צבעים דורשים יותר עבודה. בתוך התיקיות `grit` ו`background_grit` של ערכת הנושא, קבצי התמונות השונים ניתנים לעריכה. נדרשים גם ה[devkitPro's toolchains](https://devkitpro.org) עם GRIT מותקן. לאחר סיום עריכת הקבצים, חייב להריץ את
```bash
$ make
```
על מנת לקמפל את ערכות הנושא לפורמט Grit RIFF. זה יקמפל את הטקסטורות עם פלטת הצבעים לתוך פורמט **.grf** לתיקיית `grf`. אל תבצעו שינויים לקבצי `.grit` עד שתקראו את הפרק על הכנת ערכות נושא מתקדמת בהמשך.

שימו לב שטקסטרות עם פלטת צבעים מגיעות עם יותר מגבלות מאשר טקסטורות BMP, כשהעיקרי מביניהם הם מקסימום של 16 צבעים לכל טקסטורה. למרות הנאמר, חלק מהטקסטורות עלולות להיות עם מגבלות חמורות יותר, אך ניתן לערוך אותם עם סיכון של העדר זיכרון ללוח הצבעים (ראו מטה).

The example themes are in the [`romsel_dsimenutheme/resources/dsimenu_theme_examples` folder](https://github.com/DS-Homebrew/TWiLightMenu/tree/master/romsel_dsimenutheme/resources/dsimenu_theme_examples) in TWiLight Menu++'s repository. To download them, [download the repository](https://github.com/DS-Homebrew/TWiLightMenu/archive/master.zip) or clone it with git, then find that folder.

## תיאורי קבצי ערכת הנושא

טקסטורות ה `volume` וה`battery` מסבירות את עצמן.

### טקסטורות רקע (תיקיית `background_grit`)

| טקסטורה            | תיאור                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------- |
| bottom             | טקסטורת הרקע בחלק התחתון כאשר לא מרחפים מעל אייקון                                       |
| bottom_bubble      | טקסטורת הרקע בחלק התחתון כאשר מרחפים מעל אייקון                                          |
| bottom_ds          | עבור ערכת הנושא 3DS, טקסטורת הרקע בחלק התחתון כאשר לא מרחפים מעל אייקון על מכשיר DS Lite |
| bottom_bubble_ds | עבור ערכת הנושא 3DS, טקסטורת הרקע בחלק התחתון כאשר מרחפים מעל אייקון על מכשיר DS Lite    |
| top                | הרקע בחלק העליון                                                                         |

### טקסטורות עם לוח צבעים (תיקיית `grit`)

| טקסטורה       | תיאור                                                                                     | מגבלות לוח צבעים (אם מתחת ל16)                           |
| ------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| bips          | הנקודות המוצגות בתחתית פס הגלילה (ערכת נושא DSi)                                          |                                                          |
| box           | הטקסטורה של הקופסה, מכילה טקסטורות גם לקופסה מלאה וגם לריקה (ערכת נושא DSi)               |                                                          |
| box_empty     | הטסקסטורה המוצגת עבור קופסה ריקה (ערכת נושא 3DS)                                          | בערכת הנושא 3DS, ברירת המחדל של הצבע השקוף הוא `#E0DAD9` |
| box_full      | הטסקסטורה המוצגת עבור קופסה ריקה עם אייקון (ערכת נושא 3DS)                                | בערכת הנושא 3DS, ברירת המחדל של הצבע השקוף הוא `#E0DAD9` |
| brace         | טקסטורת המסגרת המוצגת לפני האייקון הראשון ואחרי האייקון האחרון (ערכת נושא DSi)            | 4 צבעים                                                  |
| bubble        | החלק התחתון של הבועה שנמצאת מעל מסגרת ההתחלה או קופסת האייקון                             | 8 צבעים                                                  |
| button_arrow  | הטקסטורות עבור החיצים בשני צידי פס הגלילה (ערכת נושא DSi)                                 |                                                          |
| cornerbutton  | הכפתורים שמוצגים בתפריט הSelect (ערכת נושא DSI) (השם מבוסס על שימוש ישן)                  |                                                          |
| cursor        | המסגרת עם פריימים מונפשים שמצביעים על האייקון הנבחר (ערכת נושא 3DS)                       |                                                          |
| dialogbox     | הרקע של קופסת הדו-שיח שמחליקה מטה                                                         |                                                          |
| folder        | האייקון של התיקיות                                                                        |                                                          |
| icon_gb       | האייקון עבור משחקי Game Boy                                                               |                                                          |
| icon_gba      | האייקון עבור משחקי GBA (כל ערכות הנושא) והאייקון העליון להפעלת GBARunner2 (ערכת נושא 3DS) | ברירת המחדל עבור הצבע השקוף היא `#00FF00`                |
| icon_gbamode  | האייקון עבור מצב GBA מקורי                                                                |                                                          |
| icon_gg       | האייקון עבור משחקי Game Gear                                                              |                                                          |
| icon_manual   | האייקון עבור המדריך                                                                       |                                                          |
| icon_md       | האייקון עבור משחקי Mega Drive                                                             |                                                          |
| icon_nes      | האייקון עבור משחקי NES                                                                    |                                                          |
| icon_plg      | האייקון עבור תוספים של DSTWO                                                              |                                                          |
| icon_settings | האייקון עבור ההגדרות של Nintendo DSi                                                      |                                                          |
| icon_sms      | האייקון עבור משחקי Sega Master System                                                     |                                                          |
| icon_snes     | האייקון עבור משחקי SNES                                                                   |                                                          |
| icon_unk      | האייקון שיוצג כאשר חסר האייקון של המשחק                                                   |                                                          |
| launch_dot    | הנקודות שיוצגו כאשר מפעילים משחקים (ערכת נושא DSi)                                        |                                                          |
| moving_arrow  | החץ שיוצג כאשר מזיזים משחק (ערכת נושא DSi)                                                |                                                          |
| progress      | הנפשת הטעינה עם 8 פריימים                                                                 | 9 צבעים                                                  |
| scroll_window | חלקו של פס הגלילה המציג את האייקון בצפייה                                                 | 7 צבעים                                                  |
| small_cart    | האייקונים המוצגים בחלק העליון (ערכת נושא 3DS) ובתפריט הSELECT (ערכת נושא DSi)             |                                                          |
| start_border  | המסגרת עם פריימים מונפשים שמצביעים על האייקון הנבחר (ערכת נושא DSi)                       |                                                          |
| start_text    | הטקסט המוצג במסגרת ההתחלה (ערכת נושא DSi)                                                 | 4 צבעים                                                  |
| wirelessicons | האייקונים המוצגים כאשר למשחק יש תמיכה ברשת אלחוטית                                        | 7 צבעים                                                  |

### טקסטורות UI (תיקיית`ui`)

| טקסטורה          | תיאור                                                 |
| ---------------- | ----------------------------------------------------- |
| date_time_font | הגופן להצגת התאריך והשעה                              |
| Lshoulder        | הפינה השמאלית העליונה                                 |
| Lshoulder_greyed | הפינה השמאלית העליונה כאשר אין עוד עמודים להצגה משמאל |
| Rshoulder        | הפינה הימנית                                          |
| Rshoulder_greyed | הפינה הימינית העליונה כאשר אין עוד עמודים להצגה מימין |

### טקסטורות וידאו (תיקיית `video`)

`3dsRotatingCubes.rvid` הוא קובץ Rocket Video. למידע נוסף על המרה סרטונים לrvid, קראו את [המרת סרטון ל.rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) בויקי של Vid2RVID. אם אתם לא רוצים שזה יוצג, ניתן פשוט למחוק אותו.

## הגדרות ערכת הנושא

אתם יכולים להגדיר מספר אפשרויות לגבי איך ערכת הנושא תראה ב`theme.ini` על מנת לאפשר ספרייטים או טקסטורות גדולים יותר.

| ערך                      | תיאור                                                                                                | ברירת מחדל (3DS) | ברירת מחדל (DSi) |
| ------------------------ | ---------------------------------------------------------------------------------------------------- | ---------------- | ---------------- |
| `StartBorderRenderY`     | מיקום הY ההתחלתי של מסגרת ההתחלה                                                                     | 92               | 81               |
| `StartBorderSpriteW`     | הרוחב של ספרייט מסגרת ההתחלה. שימו לב שטקסטורות מסגרת ההתחלה היא בדיוק חצי מהמסגרת המלאה.            | 32               | 32               |
| `StartBorderSpriteH`     | הגובה של ספרייט מסגרת ההתחלה                                                                         | 64               | 80               |
| `TitleboxRenderY`        | מיקום הY ההתחלתי של טקסט הכותרת שמוצגת                                                               | 96               | 85               |
| `BubbleTipRenderY`       | מיקום הY של הקצה העליות של הבועה שמוצגת מעל מסגרת ההתחלה                                             | 98               | 80               |
| `BubbleTipRenderX`       | מיקום הX של הקצה העליות של הבועה שמוצגת מעל מסגרת ההתחלה                                             | 125              | 22               |
| `BubbleTipSpriteH`       | The height of the bubble tip sprite                                                                  | 7                | 8                |
| `BubbleTipSpriteW`       | The width of the bubble tip sprite                                                                   | 7                | 11               |
| `RotatingCubesRenderY`   | The Y position on the top screen to draw the rotating cubes                                          | 78               | N/A              |
| `ShoulderLRenderY`       | The Y position on the top screen to draw the left shoulder                                           | 172              | 172              |
| `ShoulderLRenderX`       | The X position on the top screen to draw the left shoulder                                           | 0                | 0                |
| `ShoulderRRenderY`       | The Y position on the top screen to draw the right shoulder                                          | 172              | 172              |
| `ShoulderRRenderX`       | The X position on the top screen to draw the right shoulder                                          | 178              | 178              |
| `VolumeRenderX`          | The X position on the top screen to draw the right shoulder                                          | 4                | 4                |
| `VolumeRenderY`          | The Y position on the top screen to draw the volume icon                                             | 16               | 16               |
| `BatteryRenderY`         | The Y position on the top screen to draw the battery icon                                            | 5                | 5                |
| `BatteryRenderX`         | The X position on the top screen to draw the battery icon                                            | 235              | 235              |
| `RenderPhoto`            | Whether or not to draw a photo on the top screen                                                     | 0                | 1                |
| `StartTextUserPalette`   | Assign the DSi Profile Theme to the palette of the start text                                        | N/A              | 1                |
| `StartBorderUserPalette` | Assign the DSi Profile Theme Palette to the palette of the start border                              | N/A              | 1                |
| `ButtonArrowUserPalette` | Assign the DSi Profile Theme Palette to the palette of the arrow buttons on the bottom of the screen | N/A              | 1                |
| `MovingArrowUserPalette` | Assign the DSi Profile Theme Palette to the palette of the arrow shown when moving icons             | N/A              | 1                |
| `LaunchDotsUserPalette`  | Assign the DSi Profile Theme Palette to the palette of the launch dots                               | N/A              | 1                |
| `DialogBoxUserPalette`   | Assign the DSi Profile Theme Palette to the palette of the dialog box                                | N/A              | 1                |

## Advanced theming

Occasionally, you may require more than the default number of colors for some paletted textures. In such cases, you may modify the `.grit` compilation file for the texture to increase the size of the palette.

For example, in `scroll_window.grit`, you may edit `-pn7` and change `7` to `16` for 16 colors. Be aware that if you remove the entire `-pn` line, you may encounter unexpected results.

Also note that the absolute maximum of 16 colors per texture is enforced in code and can not be modified. Even if you increase the number of palettes to above 16, no more than 16 colors worth of palette data will be loaded. With the amount of textures loaded in, there may not be enough palette memory to hold 16 colors worth of palettes for every texture. Keep this in mind when adjusting palette sizes.

Additionally, paletted textures must have dimensions that are a multiple of 2. Paletted textures sizes can not be changed except for `bubble` and `start_border`, which can have configurable sprite dimensions in `theme.ini`. However, note that doing so may have unexpected consequences.

Paletted textures are not checked for validity. An invalid texture should be rare if created with the provided makefile, but in certain cases a corrupted texture will cause the menu to not load at all.

## Custom background music and sound fonts.

The DSi Menu and 3DS themes also support custom music. See [DSi / 3DS skins - Custom SFX](custom-dsi-3ds-sfx) for more details.
