---
lang: en-US
layout: wiki
section: twilightmenu
category: customization
title: How to Create DSi/3DS Skins
description: How to make custom DSi and 3DS skins for TWiLight Menu++
---

Making skins for TWiLight Menu++ requires an image editor capable of exporting `.png` files, 16 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp`/`.png` files, and 4 BPP `.bmp` files. Ideally, it should also be able to manually rearrange image palettes.
[GIMP](https://www.gimp.org) is recommended and will be used for this guide, but any editor with these capabilities should work. For paletted images, GIMP has a toggleable Colormap Dialog window. Enable it via `Windows` -> `Dockable Dialogs` -> `Colormap`.

## Part 1: Download the examples
The first thing you should do is download the [example skins](/assets/files/skin-examples.zip). These can be used as a base for your skin and are already in the correct format, so if you have issues later on, you can compare with these.

## Part 2: Editing images
With the image editor described above, you are now ready to edit any image based from a TWiLight Menu++ skin, as long as the format remains the same from the source specification. They are categorized by folders, each of them being located on the skin root folder.

### Background textures (`background` folder)
These can be either PNG or 16-bit (`A1 R5 G5 B5` or `X1 R5 G5 B5`) BMP files.
- If using BMP files, you can set them to 16-bit under Advanced Options while exporting. You may need to do this each time you export as BMP

| Texture             | Description                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| top                 | The top screen background texture                                                                      |
| bottom              | The bottom background texture when not hovering over an icon                                           |
| bottom_ds           | For the 3DS theme, the bottom background texture when not hovering over an icon when on a DS Phat/Lite |
| bottom_macro        | For the DSi theme, the background texture when not hovering over an icon while using Macro Mode        |
| bottom_bubble       | The bottom background texture when hovering over an icon                                               |
| bottom_bubble_ds    | For the 3DS theme, the bottom background texture when hovering over an icon when on a DS Phat/Lite     |
| bottom_bubble_macro | For the DSi theme, the background texture when hovering over an icon while using Macro Mode            |
| bottom_moving       | For the DSi theme, the bottom background texture when moving an icon                                   |
| bottom_moving_macro | For the DSi theme, the background texture when moving an icon while using Maco Mode                    |

### Battery textures (`battery` folder)
These must be PNG files. Transparency is supported, however only 100% transparency will work.

| Texture            | Description/Notes                                                           |
| ------------------ | --------------------------------------------------------------------------- |
| battery0           | Flashes with `battery1` when the battery is very low                        |
| battery1           | 0-4 are used in DSi mode                                                    |
| battery1purple     | Purple icons are used when `Power LED color` is set to `Purple` in settings |
| battery2           |                                                                             |
| battery2purple     |                                                                             |
| battery3           |                                                                             |
| battery3purple     |                                                                             |
| battery4           |                                                                             |
| battery4purple     |                                                                             |
| batterycharge      |                                                                             |
| batterychargeblink | Flashes with `batterycharge` while charging                                 |
| batteryfull        | Used when in DS mode on DSi/3DS                                             |
| batteryfullDS      | Used when on DS Phat/DS Lite                                                |
| batterylow         | Used when in DS mode                                                        |

### Paletted textures (`grf` folder)
These must be 4 BPP (16 color) BMP files.

Editing these in GIMP requires the image to be set in "RGB" mode, toggleable via the setting in `Image` -> `Mode` -> `RGB`. When done, select `Image` -> `Mode` -> `Indexed...` to convert back to paletted.

Indexed Images requires an exact count of 16 colors, with the first of which (#0) being transparent (#FF00FF).
- To set the transparent color as the first entry in the colormap, right click the colormap and select `Rearrange Colormap...`. Then, simply move the transparent color to the slot and select `OK`
- If there are over 16 colors, set `Maximum number of colors` to 16
- If there are fewer than 16 colors, press the `+` button at the bottom of the colormap dialog as many times as needed

**Note:** Some images in the DSi theme have their palettes overridden based on the user's profile color. If editing the colors of these ensure that the `UserPalette` option for it in the `theme.ini` is set to `0`.

- When switching to indexed, ensure that `Generate optimum palette` is checked
- When exporting, it's recommended to check the `Do not write color space information` box under the `Compatibility Options` dropdown

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
| icon_col      | The icon for Colecovision games                                                                 |
| icon_gb       | The icon for Game Boy games                                                                     |
| icon_gba      | The icon for GBA games                                                                          |
| icon_gbamode  | The icon for native GBA Mode                                                                    |
| icon_gg       | The icon for Game Gear games                                                                    |
| icon_img      | The icon for BMP, GIF, and PNG images                                                           |
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
| scroll_window | The part of the scrollbar that indicates the icons that are in view                             |
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
These must be PNG files. Transparency is supported, however only 100% transparency will work. Any pixel that is transparent in one texture should be transparent in all of them, so that it's properly overwritten on change.

| Texture          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| Lshoulder        | The left shoulder                                       |
| Lshoulder_greyed | The left shoulder when there are no pages to the left   |
| Rshoulder        | The right shoulder                                      |
| Rshoulder_greyed | The right shoulder when there are no pages to the right |

### Video texture (`video` folder)
The `3dsRotatingCubes.rvid` file is an animated video in the Rocket Video format, used exclusively on the Nintendo 3DS theme. The default purpose is to recreate the top screen boxes animation, but can be disabled by simply deleting the file. For more information, please read the "[Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid)" page on the Vid2RVID wiki.

### Volume textures (`volume` folder)
Volume textures are only displayed in DSi Mode.

These must be PNG files. Transparency is supported, however only 100% transparency will work.


| Texture | Description/Notes                |
| ------- | -------------------------------- |
| volume0 | 0 is muted, 4 is full volume     |
| volume1 |                                  |
| volume2 |                                  |
| volume3 |                                  |
| volume4 |                                  |

## Theme configuration (`theme.ini` file)
You may configure various options on how the theme is drawn in the `theme.ini` to accommodate larger graphics or different layouts. For true/false options, `0` is false, and `1` is true. Options with a blank default value for a theme are unused in that theme.

| Value                      | Description/Notes                                                                                                               | Default (3DS) | Default (DSi) |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------- |
| `StartBorderRenderY`       | The initial Y position of the Start Border                                                                                      | 92            | 81            |
| `StartBorderSpriteW`       | The width of the start border sprite. Note that the start border texture is exactly half of the full border                     | 32            | 32            |
| `StartBorderSpriteH`       | The height of the start border sprite                                                                                           | 64            | 80            |
| `StartTextRenderY`         | The initial Y position of the Start text                                                                                        | 143           | 143           |
| `BubbleTipRenderX`         | The X position of the tip of the bubble that is drawn over the start border                                                     | 125           | 122           |
| `BubbleTipRenderY`         | The Y position of the tip of the bubble that is drawn over the start border                                                     | 98            | 80            |
| `BubbleTipSpriteW`         | The width of the bubble tip sprite                                                                                              | 7             | 11            |
| `BubbleTipSpriteH`         | The height of the bubble tip sprite                                                                                             | 7             | 8             |
| `TitleboxRenderY`          | The initial Y position of the title text box                                                                                    | 96            | 85            |
| `TitleboxTextY`            | The initial Y position of the title text                                                                                        | 55            | 30            |
| `TitleboxTextW`            | The maximum width of the title text                                                                                             | 200           | 240           |
| `TitleboxTextLarge`        | Whether to use the large font for the title text                                                                                | 0             | 1             |
| `TitleboxMaxLines`         | The maximum lines of text to show of the title                                                                                  | 3             | 4             |
| `VolumeRenderX`            | The X position on the top screen to draw the volume icon                                                                        | 4             | 4             |
| `VolumeRenderY`            | The Y position on the top screen to draw the volume icon                                                                        | 5             | 5             |
| `ShoulderLRenderX`         | The X position on the top screen to draw the left shoulder                                                                      | 0             | 0             |
| `ShoulderLRenderY`         | The Y position on the top screen to draw the left shoulder                                                                      | 172           | 172           |
| `ShoulderRRenderX`         | The X position on the top screen to draw the right shoulder                                                                     | 178           | 178           |
| `ShoulderRRenderY`         | The Y position on the top screen to draw the right shoulder                                                                     | 172           | 172           |
| `BatteryRenderX`           | The X position on the top screen to draw the battery icon                                                                       | 235           | 235           |
| `BatteryRenderY`           | The Y position on the top screen to draw the battery icon                                                                       | 5             | 5             |
| `UsernameRenderX`          | The X position on the top screen to draw the username text                                                                      | 28            | 28            |
| `UsernameRenderY`          | The Y position on the top screen to draw the username text                                                                      | 15            | 15            |
| `UsernameRenderXDS`        | The X position on the top screen to draw the username text, when on a DS Phat/Lite                                              | 4             | 4             |
| `DateRenderX`              | The X postion on the top screen to draw the date text                                                                           | 162           | 162           |
| `DateRenderY`              | The Y postion on the top screen to draw the date text                                                                           | 7             | 7             |
| `TimeRenderX`              | The X positon on the top screen to draw the time text                                                                           | 200           | 200           |
| `TimeRenderY`              | The Y positon on the top screen to draw the time text                                                                           | 7             | 7             |
| `PurpleBatteryAvailable`   | Whether or not to use the purple battery icons when `Power LED color` is set to `Purple` in settings                            | 1             | 1             |
| `FontPalette1`             | The transparent color of the font, unused for default fonts                                                                     | 0x0000        | 0x0000        |
| `FontPalette2`             | The colors of the font, use [this site](http://www.conradshome.com/html2bgr15/) to convert                                      | 0xDEF7        | 0xDEF7        |
| `FontPalette3`             |                                                                                                                                 | 0xC631        | 0xC631        |
| `FontPalette4`             |                                                                                                                                 | 0xA108        | 0xA108        |
| `FontPaletteDateTime1`     | The override transparent color of the font for the date and time                                                                | 0x0000        | 0x0000        |
| `FontPaletteDateTime2`     | The override color of the font for the date and time                                                                            | 0xDEF7        | 0xA529        |
| `FontPaletteDateTime3`     |                                                                                                                                 | 0xC631        | 0xBDEF        |
| `FontPaletteDateTime4`     |                                                                                                                                 | 0xA108        | 0xD6B5        |
| `FontPaletteTitlebox1`     | The override transparent color of the font for the ROM title box                                                                | 0x0000        | 0x0000        |
| `FontPaletteTitlebox2`     | The override color of the font for the ROM title box                                                                            | 0xDEF7        | 0xDEF7        |
| `FontPaletteTitlebox3`     |                                                                                                                                 | 0xC631        | 0xC631        |
| `FontPaletteTitlebox4`     |                                                                                                                                 | 0xA108        | 0xA108        |
| `FontPaletteDialog1`       | The override transparent color of the font for dialogs                                                                          | 0x0000        | 0x0000        |
| `FontPaletteDialog2`       | The override color of the font for dialogs                                                                                      | 0xDEF7        | 0xDEF7        |
| `FontPaletteDialog3`       |                                                                                                                                 | 0xC631        | 0xC631        |
| `FontPaletteDialog4`       |                                                                                                                                 | 0xA108        | 0xA108        |
| `FontPaletteOverlay1`      | The override transparent color of the font for overlayed text                                                                   | 0x0000        | 0x0000        |
| `FontPaletteOverlay2`      | The override color of the font for overlayed text                                                                               | 0xDEF7        | 0xDEF7        |
| `FontPaletteOverlay3`      |                                                                                                                                 | 0xC631        | 0xC631        |
| `FontPaletteOverlay4`      |                                                                                                                                 | 0xA108        | 0xA108        |
| `FontPaletteUsername1`     | The override transparent color of the font for the username                                                                     | 0x0000        | 0x0000        |
| `FontPaletteUsername2`     | The override color of the font for the username                                                                                 | 0xDEF7        | 0xDEF7        |
| `FontPaletteUsername3`     |                                                                                                                                 | 0xC631        | 0xC631        |
| `FontPaletteUsername4`     |                                                                                                                                 | 0xA108        | 0xA108        |
| `StartTextUserPalette`     | Whether or not to use the DS Profile color for the palette of the start text                                                    |               | 1             |
| `StartBorderUserPalette`   | Whether or not to use the DS Profile color for the palette of the start border                                                  |               | 1             |
| `ButtonArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow buttons on the bottom of the screen                     |               | 1             |
| `MovingArrowUserPalette`   | Whether or not to use the DS Profile color for the palette of the arrow shown when moving icons                                 |               | 1             |
| `LaunchDotsUserPalette`    | Whether or not to use the DS Profile color for the palette of the launch dots                                                   |               | 1             |
| `DialogBoxUserPalette`     | Whether or not to use the DS Profile color for the palette of the dialog box                                                    |               | 1             |
| `RenderPhoto`              | Whether or not to draw a photo on the top screen                                                                                | 0             | 1             |
| `RotatingCubesRenderY`     | The Y position on the top screen to draw the rotating cubes                                                                     | 78            |               |
| `PlayStartupJingle`        | Whether or not to use the startup sound before the main BGM. See the [custom SFX](custom-dsi-3ds-sfx) page for more information | 1             | 0             |
| `StartupJingleDelayAdjust` | The amount of samples early in the startup sound the BGM should start at                                                        | 0             | 0             |

### Macro Mode options
You may add specific override options to `theme.ini` for use in Macro Mode. To do this, add `[MACRO]` to a blank line at the bottom of the configuration file, then add any specified configurations below it.

## Custom background music and sound effects
Skins can [use custom music and sound effects](custom-dsi-3ds-sfx) for the Nintendo DSi & Nintendo 3DS themes.

## Custom fonts
Custom fonts can be loaded from skins, whether globally or specific sections (`date_time.nftr`/`username.nftr`). Place them in `ui` -> `font`, according to the selection specified in the "[Custom Fonts](custom-fonts)" page.

## Part 3: Adding to TWiLight Menu++
Once you've edited some graphics and would like to test your skin, simply copy your skin folder (the folder containing the `background`, `battery`, etc folders) to `sd:/_nds/TWiLightMenu/3dsmenu/themes/` or `sd:/_nds/TWiLightMenu/dsimenu/themes/` for 3DS and DSi theme skins respectively.

## Part 4: Sharing your skin
Once you've completed your skin, you can share it with the community by creating a Pull Request adding it to the [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository in a `.7z` file. If you're unfamiliar with using git you can also simply create an issue on that repository with a zip file of your skin requesting it be added.
