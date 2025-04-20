---
lang: uk-UA
layout: wiki
section: twilightmenu
category: customization
title: How to Create DSi/3DS Themes
description: How to make custom DSi and 3DS themes for TWiLight Menu++
---

To make a TWiLight Menu++ theme, you will need an image editor capable of exporting `.png` files, 16 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp` files or `.png` files, and 4 BPP `.bmp` files. В ідеалі, він також повинен мати можливість вручну переставляти палітри зображень. [GIMP](https://www.gimp.org) is recommended and will be used for this guide, as it's capable of everything needed.

## Частина 1: Завантажити приклади

The first thing you should do is download the [example themes](/assets/files/theme-examples.zip). These can be used as a base for your theme and are already in the correct format, so if you have issues later on, you can compare with these.

## Частина 2: Редагування зображень

Download and install [GIMP](https://www.gimp.org)

- Інші графічні редактори, такі як Photoshop, можуть працювати, але в цьому посібнику ми будемо використовувати GIMP

Once installed, open GIMP and select `Windows` -> `Dockable Dialogs` -> `Colormap`. Відкриється діалогове вікно "Сolormap", яке стане у пригоді під час редагування палітрових зображень.

Тепер ви можете відкрити будь-яке зображення, яке хочете відредагувати в GIMP, і перейти до наступного розділу, залежно від того, в якій теці воно знаходиться. Зверніть увагу, що TWiLight Menu++ прискіпливо ставиться до точного формату зображень, і він залежить від того, в якій теці вони знаходяться, тому переконайтеся, що експортуєте, як зазначено в розділі.

### Background textures (`background` folder)

These can be PNG files or 16-bit (`A1 R5 G5 B5` or `X1 R5 G5 B5`) BMP files.

- Якщо ви використовуєте BMP-файли, ви можете встановити для них 16-бітну кодування в Додаткових параметрах під час експорту. Можливо, вам доведеться робити це щоразу, коли ви експортуєте у форматі BMP

| Текстури                                                      | Опис                                                                                          |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| top                                                           | Текстура фону верхнього екрана                                                                |
| top_photo                                | Текстура верхнього фону екрана під час показу фотографії                                      |
| bottom                                                        | Нижня фонова текстура, коли не наведено курсор на іконку                                      |
| bottom_ds                                | Для теми 3DS, нижня фонова текстура, коли не наведено вказівник на піктограму на DS Phat/Lite |
| bottom_macro                             | Для теми 3DS, нижня фонова текстура, коли не наведено вказівник на піктограму на DS Phat/Lite |
| bottom_bubble                            | Нижня фонова текстура, коли не наведено вказівник на іконку                                   |
| bottom_bubble_ds    | Для теми 3DS, нижня фонова текстура, коли не наведено вказівник на піктограму на DS Phat/Lite |
| bottom_bubble_macro | Для теми 3DS, нижня фонова текстура, коли не наведено вказівник на піктограму на DS Phat/Lite |
| bottom_moving                            | Для теми DSi, нижня фонова текстура при переміщенні піктограми                                |
| bottom_moving_macro | For the DSi theme, the background texture when moving an icon while using Macro Mode          |

### Battery textures (`battery` folder)

These must be PNG files. Прозорість підтримується, однак працюватиме лише 100% прозорість.

| Текстури           | Опис/Примітки                                                               |
| ------------------ | --------------------------------------------------------------------------- |
| battery0           | Flashes with `battery1` when the battery is very low                        |
| battery1           | 0-4 використовуються в режимі DSi                                           |
| battery1purple     | Purple icons are used when `Power LED color` is set to `Purple` in settings |
| battery2           |                                                                             |
| battery2purple     |                                                                             |
| battery3           |                                                                             |
| battery3purple     |                                                                             |
| battery4           |                                                                             |
| battery4purple     |                                                                             |
| batterycharge      |                                                                             |
| batterychargeblink | Flashes with `batterycharge` while charging                                 |
| batteryfull        | Використовується в режимі DS на DSi/3DS                                     |
| batteryfullDS      | Використовується на DS Phat/DS Lite                                         |
| batterylow         | Використовується в режимі DS                                                |

### Paletted textures (`grf` folder)

These must be 4 BPP (16 color) BMP files.

To edit these in GIMP, select `Image` -> `Mode` -> `RGB` to allow changing colors, then when done changing colors, select `Image` -> `Mode` -> `Indexed...` to convert back to paletted. When switching to indexed, ensure that `Generate optimum palette` is checked and `Maximum number of colors` is set to `16`.

**Note:** Some images in the DSi theme have their palettes overridden based on the user's profile color. If editing the colors of these ensure that the `UserPalette` option for it in the `theme.ini` is set to `0`.

Після перетворення в індексований, перейдіть до діалогового вікна мапи кольорів і переконайтеся, що прозорий колір (#FF00FF) є кольором #0 у мапі кольорів. If it isn't, right click in the colormap and select `Rearrange Colormap...` then move the transparent color to be the first color in the colormap and select `OK`.

If there are fewer than 16 colors in your final colormap, press the `+` button at the bottom of the colormap dialog until you have 16 colors.

When exporting, it's recommended to check the `Do not write color space information` box under the `Compatibility Options` dropdown.

| Текстури                           | Опис                                                                                                                         |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| bips                               | Точки, що блимають, які відображаються внизу смуги прокрутки (тема DSi)                                   |
| box                                | Текстура коробки, що містить як повні, так і порожні текстури (Тема DSi)                                  |
| box_empty     | Текстура, що відображається для порожньої коробки (Тема 3DS)                                              |
| box_full      | Текстура, що відображається для порожньої коробки (Тема 3DS)                                              |
| brace                              | Текстура дужок, показана за першою та останньою піктограмою (Тема DSi)                                    |
| bubble                             | Нижній біт бульбашки, що накладається на початкову межу або поле піктограми                                                  |
| button_arrow  | Текстури для стрілок з обох боків нижньої смуги прокрутки (тема DSi)                                      |
| cornerbutton                       | Кнопки, які показуються в меню SELECT (Тема DSi) (Назва базується за старим вживанням) |
| cursor                             | Межа з анімацією, яка вкаже на вибрану іконку (тема 3DS)                                                  |
| dialogbox                          | Тло діалогового вікна, що зсувається вниз                                                                                    |
| folder                             | Піктограма для тек                                                                                                           |
| icon_a26      | Іконка для ігор Atari 2600                                                                                                   |
| icon_col      | Іконка для ігор Colecovision                                                                                                 |
| icon_gb       | The icon for Game Boy games                                                                                                  |
| icon_gba      | The icon for GBA games                                                                                                       |
| icon_gbamode  | The icon for native GBA Mode                                                                                                 |
| icon_gg       | The icon for Game Gear games                                                                                                 |
| icon_img      | The icon for BMP, GIF, and PNG images                                                                                        |
| icon_int      | The icon for Intellivision games                                                                                             |
| icon_m5       | The icon for Sord M5 games                                                                                                   |
| icon_manual   | The icon for the manual                                                                                                      |
| icon_md       | The icon for Mega Drive games                                                                                                |
| icon_nes      | The icon for NES games                                                                                                       |
| icon_ngp      | The icon for Neo Geo Pocket games                                                                                            |
| icon_pce      | The icon for PC Engine/TurboGrafx-16 games                                                                                   |
| icon_plg      | The icon for DSTWO plugins                                                                                                   |
| icon_settings | The icon for Nintendo DSi Settings                                                                                           |
| icon_sg       | The icon for Sega SG-1000 games                                                                                              |
| icon_sms      | The icon for Sega Master System games                                                                                        |
| icon_snes     | The icon for SNES games                                                                                                      |
| icon_unk      | The icon displayed when a game is missing an icon                                                                            |
| icon_ws       | The icon for WonderSwan games                                                                                                |
| launch_dot    | The dots displayed when a game is launched (DSi Theme)                                                    |
| moving_arrow  | The arrow displayed when a game is being moved (DSi Theme)                                                |
| progress                           | The progress loading animation with 8 frames                                                                                 |
| scroll_window | The part of the scrollbar that indicates the icons that are in view                                                          |
| small_cart    | The icons displayed along the top (3DS Theme) and in the SELECT menu (DSi Theme)       |
| start_border  | The border with animation frames that indicates the selected icon (DSi Theme)                             |
| start_text    | The text displayed on the start border (DSi Theme)                                                        |
| wirelessicons                      | The icons displayed to indicate a game has wireless support                                                                  |

### DS Classic Menu textures (`quickmenu` folder)

These must be PNG files.

| Текстури                        | Опис                                                |
| ------------------------------- | --------------------------------------------------- |
| bottombg                        | Background for the bottom screen                    |
| phat_topbg | Background for the top screen on DS Phat            |
| topbg                           | Background for the top screen on any other DS model |

### UI textures (`ui` folder)

These must be PNG files. Прозорість підтримується, однак працюватиме лише 100% прозорість. Any pixel that is transparent in one texture should be transparent in all of them, so that it's properly overwritten on change.

| Текстури                                                         | Опис                                                             |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Lshoulder                                                        | The left shoulder                                                |
| Lshoulder_greyed                            | The left shoulder when there are no pages to the left            |
| Lshoulder_photo                             | The left shoulder when there is a photo being shown              |
| Lshoulder_photo_greyed | The left shoulder with no pages to the left and a photo showing  |
| Rshoulder                                                        | The right shoulder                                               |
| Rshoulder_greyed                            | The right shoulder when there are no pages to the right          |
| Rshoulder_photo                             | The right shoulder when there is a photo being shown             |
| Rshoulder_photo_greyed | The right shoulder with no pages to the left and a photo showing |

### Video texture (`video` folder)

Only used for the 3DS theme, `3dsRotatingCubes.rvid` is a Rocket Video file. For more information on converting videos to rvid, read [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) on the Vid2RVID wiki. If you don't want this to be drawn you can simply delete it.

### Volume textures (`volume` folder)

Volume textures are only displayed in DSi Mode.

These must be PNG files. Прозорість підтримується, однак працюватиме лише 100% прозорість.

| Текстури | Опис/Примітки                |
| -------- | ---------------------------- |
| volume0  | 0 is muted, 4 is full volume |
| volume1  |                              |
| volume2  |                              |
| volume3  |                              |
| volume4  |                              |

## Theme configuration (`theme.ini` file)

You may configure various options on how the theme is drawn in the `theme.ini` to accommodate larger graphics or different layouts. For true/false options, `0` is false, and `1` is true. Options with a blank default value for a theme are unused in that theme.

| Value                      | Опис/Примітки                                                                                                                                   | Default (3DS) | Default (DSi) |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------- |
| `StartBorderRenderY`       | The initial Y position of the Start Border                                                                                                      | 92                               | 81                               |
| `StartBorderSpriteW`       | The width of the start border sprite. Note that the start border texture is exactly half of the full border                     | 32                               | 32                               |
| `StartBorderSpriteH`       | The height of the start border sprite                                                                                                           | 64                               | 80                               |
| `StartTextRenderY`         | The initial Y position of the Start text                                                                                                        | 143                              | 143                              |
| `BubbleTipRenderX`         | The X position of the tip of the bubble that is drawn over the start border                                                                     | 125                              | 122                              |
| `BubbleTipRenderY`         | The Y position of the tip of the bubble that is drawn over the start border                                                                     | 98                               | 80                               |
| `BubbleTipSpriteW`         | The width of the bubble tip sprite                                                                                                              | 7                                | 11                               |
| `BubbleTipSpriteH`         | The height of the bubble tip sprite                                                                                                             | 7                                | 8                                |
| `TitleboxRenderY`          | The initial Y position of the title text box                                                                                                    | 96                               | 85                               |
| `TitleboxTextY`            | The initial Y position of the title text                                                                                                        | 55                               | 30                               |
| `TitleboxTextW`            | The maximum width of the title text                                                                                                             | 200                              | 240                              |
| `TitleboxTextLarge`        | Whether to use the large font for the title text                                                                                                | 0                                | 1                                |
| `TitleboxMaxLines`         | The maximum lines of text to show of the title                                                                                                  | 3                                | 4                                |
| `VolumeRenderX`            | The X position on the top screen to draw the volume icon                                                                                        | 4                                | 4                                |
| `VolumeRenderY`            | The Y position on the top screen to draw the volume icon                                                                                        | 5                                | 5                                |
| `ShoulderLRenderX`         | The X position on the top screen to draw the left shoulder                                                                                      | 0                                | 0                                |
| `ShoulderLRenderY`         | The Y position on the top screen to draw the left shoulder                                                                                      | 172                              | 172                              |
| `ShoulderRRenderX`         | The X position on the top screen to draw the right shoulder                                                                                     | 178                              | 178                              |
| `ShoulderRRenderY`         | The Y position on the top screen to draw the right shoulder                                                                                     | 172                              | 172                              |
| `BatteryRenderX`           | The X position on the top screen to draw the battery icon                                                                                       | 235                              | 235                              |
| `BatteryRenderY`           | The Y position on the top screen to draw the battery icon                                                                                       | 5                                | 5                                |
| `UsernameRenderX`          | The X position on the top screen to draw the username text                                                                                      | 28                               | 28                               |
| `UsernameRenderY`          | The Y position on the top screen to draw the username text                                                                                      | 15                               | 15                               |
| `UsernameRenderXDS`        | The X position on the top screen to draw the username text, when on a DS Phat/Lite                                                              | 4                                | 4                                |
| `DateRenderX`              | The X position on the top screen to draw the date text                                                                                          | 162                              | 162                              |
| `DateRenderY`              | The Y position on the top screen to draw the date text                                                                                          | 7                                | 7                                |
| `TimeRenderX`              | The X position on the top screen to draw the time text                                                                                          | 200                              | 200                              |
| `TimeRenderY`              | The Y position on the top screen to draw the time text                                                                                          | 7                                | 7                                |
| `PurpleBatteryAvailable`   | Whether or not to use the purple battery icons when `Power LED color` is set to `Purple` in settings                                            | 1                                | 1                                |
| `FontPalette1`             | The transparent color of the font, unused for default fonts                                                                                     | 0x0000                           | 0x0000                           |
| `FontPalette2`             | The colors of the font, use [this site](http://www.conradshome.com/html2bgr15/) to convert                                                      | 0xDEF7                           | 0xDEF7                           |
| `FontPalette3`             |                                                                                                                                                 | 0xC631                           | 0xC631                           |
| `FontPalette4`             |                                                                                                                                                 | 0xA108                           | 0xA108                           |
| `FontPaletteDateTime1`     | The override transparent color of the font for the date and time                                                                                | 0x0000                           | 0x0000                           |
| `FontPaletteDateTime2`     | The override color of the font for the date and time                                                                                            | 0xDEF7                           | 0xA529                           |
| `FontPaletteDateTime3`     |                                                                                                                                                 | 0xC631                           | 0xBDEF                           |
| `FontPaletteDateTime4`     |                                                                                                                                                 | 0xA108                           | 0xD6B5                           |
| `FontPaletteTitlebox1`     | The override transparent color of the font for the ROM title box                                                                                | 0x0000                           | 0x0000                           |
| `FontPaletteTitlebox2`     | The override color of the font for the ROM title box                                                                                            | 0xDEF7                           | 0xDEF7                           |
| `FontPaletteTitlebox3`     |                                                                                                                                                 | 0xC631                           | 0xC631                           |
| `FontPaletteTitlebox4`     |                                                                                                                                                 | 0xA108                           | 0xA108                           |
| `FontPaletteDialog1`       | The override transparent color of the font for dialogs                                                                                          | 0x0000                           | 0x0000                           |
| `FontPaletteDialog2`       | The override color of the font for dialogs                                                                                                      | 0xDEF7                           | 0xDEF7                           |
| `FontPaletteDialog3`       |                                                                                                                                                 | 0xC631                           | 0xC631                           |
| `FontPaletteDialog4`       |                                                                                                                                                 | 0xA108                           | 0xA108                           |
| `FontPaletteOverlay1`      | The override transparent color of the font for overlayed text                                                                                   | 0x0000                           | 0x0000                           |
| `FontPaletteOverlay2`      | The override color of the font for overlayed text                                                                                               | 0xDEF7                           | 0xDEF7                           |
| `FontPaletteOverlay3`      |                                                                                                                                                 | 0xC631                           | 0xC631                           |
| `FontPaletteOverlay4`      |                                                                                                                                                 | 0xA108                           | 0xA108                           |
| `FontPaletteUsername1`     | The override transparent color of the font for the username                                                                                     | 0x0000                           | 0x0000                           |
| `FontPaletteUsername2`     | The override color of the font for the username                                                                                                 | 0xDEF7                           | 0xDEF7                           |
| `FontPaletteUsername3`     |                                                                                                                                                 | 0xC631                           | 0xC631                           |
| `FontPaletteUsername4`     |                                                                                                                                                 | 0xA108                           | 0xA108                           |
| `BipsUserPalette`          | Whether or not to use the DS Profile color for the palette of the bips on the scrollbar                                                         |                                  | 0                                |
| `BoxUserPalette`           | Whether or not to use the DS Profile color for the palette of the boxes containing the game icons in the DSi Theme                              |                                  | 0                                |
| `BoxEmptyUserPalette`      | Whether or not to use the DS Profile color for the palette of empty boxes in the 3DS Theme                                                      | 0                                |                                  |
| `BoxFullUserPalette`       | Whether or not to use the DS Profile color for the palette of the boxes containing the game icons in the 3DS Theme                              | 0                                |                                  |
| `BraceUserPalette`         | Whether or not to use the DS Profile color for the palette of the brace at the start and end of the game list                                   |                                  | 0                                |
| `BubbleUserPalette`        | Whether or not to use the DS Profile color for the palette of the tip of the title bubble                                                       | 0                                | 0                                |
| `ButtonArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow buttons on the bottom of the screen                                     |                                  | 1                                |
| `CornerButtonUserPalette`  | Whether or not to use the DS Profile color for the palette of the DSi Menu and Settings icons in the SELECT menu                                |                                  | 0                                |
| `CursorUserPalette`        | Whether or not to use the DS Profile color for the palette of the cursor                                                                        | 0                                |                                  |
| `DialogBoxUserPalette`     | Whether or not to use the DS Profile color for the palette of the dialog box                                                                    | 0                                | 1                                |
| `FolderUserPalette`        | Whether or not to use the DS Profile color for the palette of folders                                                                           | 0                                | 0                                |
| `LaunchDotsUserPalette`    | Whether or not to use the DS Profile color for the palette of the launch dots                                                                   |                                  | 1                                |
| `MovingArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow shown when moving icons                                                 |                                  | 1                                |
| `ProgressUserPalette`      | Whether or not to use the DS Profile color for the palette of the loading progress spinner                                                      | 1                                | 1                                |
| `ScrollWindowUserPalette`  | Whether or not to use the DS Profile color for the palette of the background to the scroll window on the scrollbar                              |                                  | 0                                |
| `SmallCartUserPalette`     | Whether or not to use the DS Profile color for the palette of the cartridge icons                                                               | 0                                | 0                                |
| `StartBorderUserPalette`   | Whether or not to use the DS Profile color for the palette of the start border                                                                  |                                  | 1                                |
| `StartTextUserPalette`     | Whether or not to use the DS Profile color for the palette of the start text                                                                    |                                  | 1                                |
| `WirelessIconsUserPalette` | Whether or not to use the DS Profile color for the palette of the wireless icons                                                                | 0                                | 0                                |
| `IconA26UserPalette`       | Whether or not to use the DS Profile color for the palette of the Atari 2600 icon                                                               | 0                                | 0                                |
| `IconCOLUserPalette`       | Whether or not to use the DS Profile color for the palette of the ColecoVision icon                                                             | 0                                | 0                                |
| `IconGBUserPalette`        | Whether or not to use the DS Profile color for the palette of the Game Boy icon                                                                 | 0                                | 0                                |
| `IconGBAUserPalette`       | Whether or not to use the DS Profile color for the palette of the Game Boy Advance icon                                                         | 0                                | 0                                |
| `IconGBAModeUserPalette`   | Whether or not to use the DS Profile color for the palette of the native GBA Mode icon                                                          | 0                                | 0                                |
| `IconGGUserPalette`        | Whether or not to use the DS Profile color for the palette of the Game Gear icon                                                                | 0                                | 0                                |
| `IconIMGUserPalette`       | Whether or not to use the DS Profile color for the palette of the image icon                                                                    | 0                                | 0                                |
| `IconINTUserPalette`       | Whether or not to use the DS Profile color for the palette of the Intellivision icon                                                            | 0                                | 0                                |
| `IconM5UserPalette`        | Whether or not to use the DS Profile color for the palette of the Sord M5 icon                                                                  | 0                                | 0                                |
| `IconManualUserPalette`    | Whether or not to use the DS Profile color for the palette of the manual icon                                                                   | 0                                | 0                                |
| `IconMDUserPalette`        | Whether or not to use the DS Profile color for the palette of the Genesis/Mega Drive icon                                                       | 0                                | 0                                |
| `IconNESUserPalette`       | Whether or not to use the DS Profile color for the palette of the NES/Famicom icon                                                              | 0                                | 0                                |
| `IconNGPUserPalette`       | Whether or not to use the DS Profile color for the palette of the Neo Geo Pocket icon                                                           | 0                                | 0                                |
| `IconPCEUserPalette`       | Whether or not to use the DS Profile color for the palette of the PC Engine/TurboGrafx-16 icon                                                  | 0                                | 0                                |
| `IconPLGUserPalette`       | Whether or not to use the DS Profile color for the palette of the DSTWO plugin icon                                                             | 0                                | 0                                |
| `IconSettingsUserPalette`  | Whether or not to use the DS Profile color for the palette of the DSi Settings icon                                                             | 0                                | 0                                |
| `IconSGUserPalette`        | Whether or not to use the DS Profile color for the palette of the SG-1000 icon                                                                  | 0                                | 0                                |
| `IconSMSUserPalette`       | Whether or not to use the DS Profile color for the palette of the Master System icon                                                            | 0                                | 0                                |
| `IconSNESUserPalette`      | Whether or not to use the DS Profile color for the palette of the SNES icon                                                                     | 0                                | 0                                |
| `IconUnknownUserPalette`   | Whether or not to use the DS Profile color for the palette of the unknown (missing) icon                                     | 0                                | 0                                |
| `IconWSUserPalette`        | Whether or not to use the DS Profile color for the palette of the WonderSwan icon                                                               | 0                                | 0                                |
| `UsernameUserPalette`      | Whether or not to use the DS Profile color for the palette of the username                                                                      | 1                                | 1                                |
| `ProgressBarUserPalette`   | Whether or not to use the DS Profile color as the color of the progress bar                                                                     | 1                                | 1                                |
| `ProgressBarColor`         | The color of the progress bar if `ProgressBarUserPalette` is disabled                                                                           | 0x7C00                           | 0x7C00                           |
| `UseAlphaBlend`            | Whether or not to blend the colors of the top screen text (the date/time and username) with the colors of the background     | 1                                | 1                                |
| `DarkLoading`              | Whether or not to fade to black instead of white during loading screens                                                                         | 0                                | 0                                |
| `RenderPhoto`              | Whether or not to draw a photo on the top screen                                                                                                | 0                                | 1                                |
| `RotatingCubesRenderY`     | The Y position on the top screen to draw the rotating cubes                                                                                     | 78                               |                                  |
| `PlayStartupJingle`        | Whether or not to use the startup sound before the main BGM. See the [custom SFX](custom-dsi-3ds-sfx) page for more information | 1                                | 0                                |
| `StartupJingleDelayAdjust` | The amount of samples early in the startup sound the BGM should start at                                                                        | 0                                | 0                                |

### Параметри режиму Macro

You may add specific override options to `theme.ini` for use in Macro Mode. To do this, add `[MACRO]` to a blank line at the bottom of the configuration file, then add any specified configurations below it.

## Спеціальна фонова музика та звукові ефекти

The DSi and 3DS UIs also support custom music. See [DSi/3DS Themes - Custom SFX](custom-dsi-3ds-sfx) for more details.

## Користувацькі шрифти

You may put [Custom Fonts](custom-fonts) in the `font` folder for use in the theme. You can also add override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

## Користувацькі палітри

For the paletted textures (`grf` folder), you can optionally add override palette sets which are used when the corresponding `UserPalette` setting is enabled. Palette set files can be created using [this editor](https://skinpaltool.dvdo.dev/). Використовуючи редактор, імпортуйте зображення, з яким ви хочете працювати, а потім створіть палітру для кожного з 16 кольорів профілю DS. You can use this [example palette file](/assets/files/example-palette.bin) as a starting point.

16 рядів колекції палітри відповідають кожному кольору профілю та повинні бути в наступному порядку:

1. Сіро-блакитний
2. Коричневий
3. Червоний
4. Рожевий
5. Помаранчевий
6. Жовтий
7. Світло-зелений
8. Зелений
9. Темно-зелений
10. Бірюзовий
11. Блакитний/Світло-блакитний
12. Синій
13. Темно-синій/Індиго
14. Фіалковий/Темно-фіолетовий
15. Фіолетовий
16. Пурпуровий

Once you've created a palette file, place it in the `palettes` folder. The name of the palette file should match the name of its image but with a `.bin` extension instead (ex. `start_border.bin` will be applied to `start_border.bmp`).

You may also put a `username.bin` palette file to change the palettes of the username font. Make sure to set the palette editor to `Font Mode` when creating this file.

## Частина 3: Додавання до TWiLight Menu++

Once you've edited some graphics and would like to test your theme, simply copy your theme folder (the folder containing the `background`, `battery`, etc folders) to `sd:/_nds/TWiLightMenu/3dsmenu/themes/` or `sd:/_nds/TWiLightMenu/dsimenu/themes/` for 3DS and DSi theme themes respectively.

## Part 4: Sharing your theme

Once you've completed your theme, you can share it with the community by creating a Pull Request adding it to the [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository in a `.7z` file. If you're unfamiliar with using git you can also simply create an issue on that repository with a zip file of your theme requesting it be added.
