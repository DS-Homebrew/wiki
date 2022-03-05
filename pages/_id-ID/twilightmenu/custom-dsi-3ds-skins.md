---
lang: en-US
layout: wiki
section: twilightmenu
category: customization
title: Cara Membuat Skin DSi/3DS
description: How to make custom DSi and 3DS skins for TWiLight Menu++
---

To make a TWiLight Menu++ skin you will need an image editor capable of exporting `.png` files, 16 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp` files or `.png` files, and 4 BPP `.bmp` files. Ideally it should also be able to manually rearrange image palettes. [GIMP](https://www.gimp.org) is recommended and will be used for this guide as it's capable of everything needed.

## Bagian 1: Unduh contohnya
The first thing you should do is download the [example skins](/assets/files/skin-examples.zip). These can be used as a base for your skin and are already in the correct format so if you have issues later on you can compare with these.

## Bagian 2: Menyunting gambar
Unduh dan pasang [GIMP](https://www.gimp.org), bisa juga dengan penyunting (editor) berbeda kalau mau tetapi panduan ini memakai GIMP.

Once installed, open GIMP and select `Windows` -> `Dockable Dialogs` -> `Colormap`. This opens the colormap dialog, which will be helpful when editing paletted images.

You can now open whichever image you want to edit in GIMP and continue to the section below based on which folder it's in. Note that TWiLight Menu++ is picky about the exact format of the images and it varies by which folder they're in, so make sure to export as the section says.

### Background textures (`background` folder)
These can be PNG files or 16-bit (`A1 R5 G5 B5` or `X1 R5 G5 B5`) BMP files.

| Texture            | Description                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| bottom             | The bottom background texture when not hovering over an icon                                      |
| bottom_bubble      | The bottom background texture when hovering over an icon                                          |
| bottom_ds          | For the 3DS theme, the bottom background texture when not hovering over an icon when on a DS lite |
| bottom_bubble_ds | For the 3DS theme, the bottom background texture when hovering over an icon when on a DS lite     |
| top                |                                                                                                   |

### Battery textures (`battery` folder)
These must be PNG files, any file will work however only 100% transparency will work. Any pixel that is transparent in one icon should be transparent in all of them so that it's properly overwritten on change.

| Texture            | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| battery0           | Flashes with `battery1` when the battery is very low                        |
| battery1           | 0-4 digunakan di mode DSi                                                   |
| battery1purple     | Purple icons are used when `Power LED color` is set to `Purple` in settings |
| battery2           |                                                                             |
| battery2purple     |                                                                             |
| battery3           |                                                                             |
| battery3purple     |                                                                             |
| battery4           |                                                                             |
| battery4purple     |                                                                             |
| batterycharge      |                                                                             |
| batterychargeblink | Flashes with `batterycharge` while charging                                 |
| batteryfull        | Gunakan ketika di mode DS pada DSi/3DS                                      |
| batteryfullDS      | Gunakan ketika di DS Phat/DS Lite                                           |
| batterylow         | Gunakan ketika di mode DS                                                   |

### Paletted textures (`grf` folder)
These must be 4 BPP (16 color) BMP files files.

To edit these in GIMP select `Image` -> `Mode` -> `RGB` to allow changing colors, then when done changing colors select `Image` -> `Mode` -> `Indexed...` to convert back to paletted. When switching to indexed, ensure that `Generate optimum palette` is checked and `Maximum number of colors` is set to `16`.

**Note:** Some images in the DSi theme have their palettes overridden based on the user's profile color. If editing the colors of these ensure that the `UserPalette` option for it in the `theme.ini` is set to `0`.

After converting to indexed, go to the colormap dialog and ensure the transparent color (#FF00FF) is color #0 in the colormap. If it isn't, right click in the colormap and select `Rearrange Colormap...` then move the transparent color to be the first color in the colormap and select `OK`.

If there are fewer than 16 colors in your final colormap press the `+` button at the bottom of the colormap dialog until you have 16 colors.

When exporting it's recommended to check the `Do not write color space information` box under the `Compatibility Options` dropdown.

| Texture       | Description                                                                                     |
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
| icon_gbamode  | The icon for native GBA Mode                                                                    |
| icon_gg       | The icon for Game Gear games                                                                    |
| icon_int      | The icon for Intellivision games                                                                |
| icon_m5       | The icon for Sord M5 games                                                                      |
| icon_manual   | The icon for the manual                                                                         |
| icon_md       | The icon for Mega Drive games                                                                   |
| icon_nes      | The icon for NES games                                                                          |
| icon_ngp      | The icon for Neo Geo Pocket games                                                               |
| icon_pce      | The icon for PC Engine/TurboGrafx-16 games                                                      |
| icon_plg      | The icon for DSTWO plugins                                                                      |
| icon_settings | The icon for Nintendo DSi Settings                                                              |
| icon_sg       | The icon for Sega SG-1000 games                                                                 |
| icon_sms      | The icon for Sega Master System games                                                           |
| icon_snes     | The icon for SNES games                                                                         |
| icon_unk      | The icon displayed when a game is missing an icon                                               |
| icon_ws       | The icon for WonderSwan games                                                                   |
| launch_dot    | The dots displayed when a game is launched (DSi Theme)                                          |
| moving_arrow  | The arrow displayed when a game is being moved (DSi Theme)                                      |
| progress      | The progress loading animation with 8 frames                                                    |
| scroll_window | Bagian dari bilah gulir (scrollbar) untuk menandakan ikon yang sedang dilihat                   |
| small_cart    | The icons displayed along the top (3DS Theme) and in the SELECT menu (DSi Theme)                |
| start_border  | The border with animation frames that indicates the selected icon (DSi Theme)                   |
| start_text    | The text displayed on the start border (DSi Theme)                                              |
| wirelessicons | The icons displayed to indicate a game has wireless support                                     |

### DS Classic Menu textures (`quickmenu` folder)
These must be PNG files.

| Texture    | Description                                         |
| ---------- | --------------------------------------------------- |
| bottombg   | Background for the bottom screen                    |
| phat_topbg | Background for the top screen on DS Phat            |
| topbg      | Background for the top screen on any other DS model |

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

### Volume textures (`volume` folder)
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

## Bagian 3: Menambahkan ke TWiLight Menu++
Once you've edited some graphics and would like to test your skin, simply copy your skin folder (the folder containing the `background`, `battery`, etc folders) to `sd:/_nds/TWiLightMenu/3dsmenu/themes/` or `sd:/_nds/TWiLightMenu/dsimenu/themes/` for 3DS and DSi theme skins respectively.

## Bagian 4: Membagikan skin
Once you've completed your skin, you can share it with the community by creating a Pull Request adding it to the [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository in a `.7z` file. If you're unfamiliar with using git you can also simply create an issue on that repository with a zip file of your skin requesting it be added.

## Custom background music and sound effects
The DSi and 3DS themes also support custom music. See [DSi/3DS skins - Custom SFX](custom-dsi-3ds-sfx) for more details.
