---
lang: hu-HU
layout: wiki
section: twilightmenu
category: customization
title: DSi/3DS szkinek létrehozása
description: Hogyan készíts egyedi DSi és 3DS szkineket a TWiLight Menu++-hoz
---

To make a TWiLight Menu++ skin you will need an image editor capable of exporting `.png` files, 16 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp` files or `.png` files, and 4 BPP `.bmp` files. Ideally it should also be able to manually rearrange image palettes. [GIMP](https://www.gimp.org) is recommended and will be used for this guide as it's capable of everything needed.

## 1. rész: Töltsd le a példákat
Ez első dolog emit le kell töltened a [példa szkinek](/assets/files/skin-examples.zip). Ezek alapként használhatók a szkinjeid számára, és már a megfelelő formátumban vannak, így ha később problémáid adódnának, ezekkel tudod összehasonlítani.

## 2. rész: A képek szerkesztése
Töltsd le és telepítsd a [GIMP](https://www.gimp.org)-et. Használhatsz más szerkesztőt is ha szeretnél, de ez az útmutató a GIMP-et használja.

Miután telepítetted, nyisd meg a GIMP-et és válaszd az `Ablakok` -> `Dokkolható párbeszédablakok` -> `Színtérkép` opciókat. Ez megnyitja a Színtérkép párbeszédpanelt, amely hasznos lehet palettás képek szerkesztésekor.

Most már megnyithatod a GIMP-ben azt a képet, amelyet szerkeszteni szeretnél, és folytathatod az alábbi szakaszokban, attól függően, hogy melyik mappában van az adott fájl. Note that TWiLight Menu++ is picky about the exact format of the images and it varies by which folder they're in, so make sure to export as the section says.

### Háttér textúrák (`background` mappa)
Ezek vagy PNG fájlok vagy 16 bites (`A1 R5 G5 B5` vagy `X1 R5 G5 B5`) BMP-fájlok lehetnek.

| Textúra            | Leírás                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| bottom             | Az alsó háttérkép, ha nem ikon felett állunk                                                      |
| bottom_bubble      | Az alsó háttérkép, ha ikon felett állunk                                                          |
| bottom_ds          | A 3DS témához, az alsó háttér texturája, amikor nem egy ikon felett áll, és amikor DS lite-on van |
| bottom_bubble_ds | A 3DS témához, az alsó háttér texturája, amikor egy ikon felett áll, és amikor DS lite-on van     |
| top                |                                                                                                   |

### Elem textúrák (`battery` mappa)
Ezeknek PNG fájloknak kell lenniük, bármilyen fájl működni fog, azonban csak 100%-os átlátszóság fog működni. Bármelyik pixelnek ami átlátszó az egyik ikonon, átlátszónak kell lenni mindegyiken, gy megfelelően felülírásra kerül változáskor.

| Textúra            | Leírás                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| battery0           | Felváltva villog `battery1`-gyel együtt, ha az akkumulátor nagyon lemerült                                    |
| battery1           | 0-4 használt DSi módban                                                                                       |
| battery1purple     | A lila ikonok (purple) akkor használatosak, ha a `Power LED szín` a beállításokban `Lila` értékre van állítva |
| battery2           |                                                                                                               |
| battery2purple     |                                                                                                               |
| battery3           |                                                                                                               |
| battery3purple     |                                                                                                               |
| battery4           |                                                                                                               |
| battery4purple     |                                                                                                               |
| batterycharge      |                                                                                                               |
| batterychargeblink | Felváltva villog `batterycharge`-al együtt, ha az akkumulátor tölt                                            |
| batteryfull        | DS módban használt DSi-n/3DS-en                                                                               |
| batteryfullDS      | DS módban használt DS Phat-on/DS Lite-on                                                                      |
| batterylow         | DS módban használt                                                                                            |

### Palettás texturák (`grf` mappa)
Ezeknek 4 BPP (16 színű) BMP fájloknak kell lenniük.

To edit these in GIMP select `Image` -> `Mode` -> `RGB` to allow changing colors, then when done changing colors select `Image` -> `Mode` -> `Indexed...` to convert back to paletted. When switching to indexed, ensure that `Generate optimum palette` is checked and `Maximum number of colors` is set to `16`.

**Note:** Some images in the DSi theme have their palettes overridden based on the user's profile color. If editing the colors of these ensure that the `UserPalette` option for it in the `theme.ini` is set to `0`.

After converting to indexed, go to the colormap dialog and ensure the transparent color (#FF00FF) is color #0 in the colormap. If it isn't, right click in the colormap and select `Rearrange Colormap...` then move the transparent color to be the first color in the colormap and select `OK`.

If there are fewer than 16 colors in your final colormap press the `+` button at the bottom of the colormap dialog until you have 16 colors.

When exporting it's recommended to check the `Do not write color space information` box under the `Compatibility Options` dropdown.

| Textúra       | Leírás                                                                                          |
| ------------- | ----------------------------------------------------------------------------------------------- |
| bips          | The bips displayed on the bottom of the scrollbar (DSi Theme)                                   |
| box           | The box texture, containing both full and empty textures (DSi Theme)                            |
| box_empty     | The texture displayed for an empty box (3DS Theme)                                              |
| box_full      | The texture displayed for a box with an icon (3DS Theme)                                        |
| brace         | The brace texture shown past the first and last icon (DSi Theme)                                |
| bubble        | The bottom bit of the bubble that draws over the start border or icon box                       |
| button_arrow  | The textures for the arrows on either side of bottom scrollbar (DSi Theme)                      |
| cornerbutton  | The buttons that are displayed on the SELECT menu (DSi Theme) (The name is based on an old use) |
| cursor        | The border with animation frames that indicate the selected icon (3DS Theme)                    |
| dialogbox     | The background of the dialog box that slides down                                               |
| folder        | The icon for folders                                                                            |
| icon_a26      | The icon for Atari 2600 games                                                                   |
| icon_gb       | The icon for Game Boy games                                                                     |
| icon_gba      | The icon for GBA games (all themes) and the top icon to launch GBARunner2 (3DS Theme)           |
| icon_gbamode  | A natív GBA Mód ikonja                                                                          |
| icon_gg       | A Game Gear játékok ikonja                                                                      |
| icon_int      | Az Intellivision játékok ikonja                                                                 |
| icon_m5       | A Sord M5 játékok ikonja                                                                        |
| icon_manual   | A kézikönyv ikonja                                                                              |
| icon_md       | A Mega Drive játékok ikonja                                                                     |
| icon_nes      | Az NES játékok ikonja                                                                           |
| icon_ngp      | A Neo Geo Pocket játékok ikonja                                                                 |
| icon_pce      | A PC Engine/TurboGrafx-16 játékok ikonja                                                        |
| icon_plg      | A DSTWO bővítmények ikonja                                                                      |
| icon_settings | A Nintendo DSi Settings ikonja                                                                  |
| icon_sg       | A Sega SG-1000 játékok ikonja                                                                   |
| icon_sms      | A Sega Master System játékok ikonja                                                             |
| icon_snes     | Az SNES játékok ikonja                                                                          |
| icon_unk      | Megjelenített ikon, ha egy játéknak nincs ikonja                                                |
| icon_ws       | A WonderSwan játékok ikonja                                                                     |
| launch_dot    | A megjelenített pontok, amikor egy játék indul (DSi téma)                                       |
| moving_arrow  | A megjelenített nyíl, amikor egy játék mozgatásra kerül (DSi téma)                              |
| progress      | Töltési animáció 8 képkockával                                                                  |
| scroll_window | A görgetősávnak az a része, amely a látható ikonokat jelzi                                      |
| small_cart    | Az ikonok amik megjelennek fent (3DS téma) és a SELECT menüben (DSi téma)                       |
| start_border  | A keret animáció kockák, amik a kiválasztott ikont jelzik (DSi téma)                            |
| start_text    | Az indító kereten megjelenített szöveg (DSi téma)                                               |
| wirelessicons | A megjelenített ikonok, amik azt mutatják, hogy a játéknak van vezetéknélküli támogatása        |

### DS Classic Menu textúrák (`quickmenu` mappa)
Ezeknek PNG fájloknak kell lenniük.

| Textúra    | Leírás                                              |
| ---------- | --------------------------------------------------- |
| bottombg   | Háttér az alsó képernyőre                           |
| phat_topbg | Háttér a felső képernyőre DS Phat-on                |
| topbg      | Háttér a felső képernyőre bármilyen más DS modellen |

### UI textures (`ui` folder)
These must be PNG files, any file will work however only 100% transparency will work. Any pixel that is transparent in one texture should be transparent in all related textures so that it's properly overwritten on change.

| Texture          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| date_time_font | The font to display the date and time                   |
| Lshoulder        | The left shoulder                                       |
| Lshoulder_greyed | The left shoulder when there are no pages to the left   |
| Rshoulder        | The right shoulder                                      |
| Rshoulder_greyed | The right shoulder when there are no pages to the right |

### Video texture (`video` folder)
Only used for the 3DS theme, `3dsRotatingCubes.rvid` is a Rocket Video file. For more information on converting videos to rvid, read [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) on the Vid2RVID wiki. If you don't want this to be drawn you can simply delete it.

### Volume textres (`volume` folder)
These must be PNG files, any file will work however only 100% transparency will work. Any pixel that is transparent in one texture should be transparent in all of them so that it's properly overwritten on change.

| Texture | Description                      |
| ------- | -------------------------------- |
| volume0 | Volume is only shown in DSi mode |
| volume1 | 0 is muted, 4 is full volume     |
| volume2 |                                  |
| volume3 |                                  |
| volume4 |                                  |

## Theme configuration (`theme.ini` file)
You may configure various options on how the theme is drawn in the `theme.ini` to accommodate larger sprites or textures. For true/false options `0` is false and `1` is true. Options with a blank default value for a theme are unused for that theme.

| Value                    | Description                                                                                                  | Default (3DS) | Default (DSi) |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------- | ------------- |
| `StartBorderRenderY`     | The initial Y position of the Start Border                                                                   | 92            | 81            |
| `StartBorderSpriteW`     | The width of the start border sprite. Note that the start border texture is exactly half of the full border. | 32            | 32            |
| `StartBorderSpriteH`     | The height of the start border sprite                                                                        | 64            | 80            |
| `StartTextRenderY`       | The initial Y position of the Start tex                                                                      | 143           | 143           |
| `BubbleTipRenderY`       | The Y position of the tip of the bubble that is drawn over the start border                                  | 98            | 80            |
| `BubbleTipRenderX`       | The X position of the tip of the bubble that is drawn over the start border                                  | 125           | 122           |
| `BubbleTipSpriteW`       | The width of the bubble tip sprite                                                                           | 7             | 11            |
| `BubbleTipSpriteH`       | The height of the bubble tip sprite                                                                          | 7             | 8             |
| `TitleboxRenderY`        | The initial Y position of the title text box                                                                 | 96            | 85            |
| `TitleboxTextY`          | The initial Y position of the title text                                                                     | 55            | 30            |
| `TitleboxTextW`          | The maximum width of the title text                                                                          | 200           | 240           |
| `MacroTitleboxTextY`     | The initial Y position of the title text in macro mode                                                       |               | 40            |
| `MacroTitleboxTextW`     | The maximum width of the title text in macro mode                                                            |               | 224           |
| `TitleboxTextLarge`      | Whether to use the large font for the title text                                                             | 0             | 1             |
| `TitleboxMaxLines`       | The maximum lines of text to show of the title                                                               | 3             | 4             |
| `VolumeRenderX`          | The X position on the top screen to draw the volume icon                                                     | 4             | 4             |
| `VolumeRenderY`          | The Y position on the top screen to draw the volume icon                                                     | 5             | 5             |
| `ShoulderLRenderY`       | The Y position on the top screen to draw the left shoulder                                                   | 172           | 172           |
| `ShoulderLRenderX`       | The X position on the top screen to draw the left shoulder                                                   | 0             | 0             |
| `ShoulderRRenderY`       | The Y position on the top screen to draw the right shoulder                                                  | 172           | 172           |
| `ShoulderRRenderX`       | The X position on the top screen to draw the right shoulder                                                  | 178           | 178           |
| `BatteryRenderY`         | The Y position on the top screen to draw the battery icon                                                    | 5             | 5             |
| `BatteryRenderX`         | The X position on the top screen to draw the battery icon                                                    | 235           | 235           |
| `FontPalette1`           | The transparent color of the font, unused for default fonts                                                  | 0x0000        | 0x0000        |
| `FontPalette2`           | The colors of the font, use [this site](http://www.conradshome.com/html2bgr15/) to convert                   | 0xDEF7        | 0xDEF7        |
| `FontPalette3`           |                                                                                                              | 0xC631        | 0xC631        |
| `FontPalette4`           |                                                                                                              | 0xA108        | 0xA108        |
| `StartTextUserPalette`   | Whether to use the DS Profile color for the palette of the start text                                        |               | 1             |
| `StartBorderUserPalette` | Whether to use the DS Profile color for the palette of the start border                                      |               | 1             |
| `ButtonArrowUserPalette` | Whether to use the DS Profile color for the palette of the arrow buttons on the bottom of the screen         |               | 1             |
| `MovingArrowUserPalette` | Whether to use the DS Profile color for the palette of the arrow shown when moving icons                     |               | 1             |
| `LaunchDotsUserPalette`  | Whether to use the DS Profile color for the palette of the launch dots                                       |               | 1             |
| `DialogBoxUserPalette`   | Whether to use the DS Profile color for the palette of the dialog box                                        |               | 1             |
| `RenderPhoto`            | Whether or not to draw a photo on the top screen                                                             | 0             | 1             |
| `RotatingCubesRenderY`   | The Y position on the top screen to draw the rotating cubes                                                  | 78            |               |

## Part 3: Adding to TWiLight Menu++
Once you've edited some graphics and would like to test your skin, simply copy your skin folder (the folder containing the `background`, `battery`, etc folders) to `sd:/_nds/TWiLightMenu/3dsmenu/themes/` or `sd:/_nds/TWiLightMenu/dsimenu/themes/` for 3DS and DSi theme skins respectively.

## Part 4: Sharing your skin
Once you've completed your skin, you can share it with the community by creating a Pull Request adding it to the [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository in a `.7z` file. If you're unfamiliar with using git you can also simply create an issue on that repository with a zip file of your skin requesting it be added.

## Custom background music and sound effects
The DSi and 3DS themes also support custom music. See [DSi/3DS skins - Custom SFX](custom-dsi-3ds-sfx) for more details.
