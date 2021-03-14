---
lang: en-US
layout: wiki
section: twilightmenu
category: customization
title: How to Create DSi / 3DS Skins
description: How to make custom DSi and 3DS skins for TWiLight Menu++
---

The easiest way of customizing a theme is by editing the png textures in a theme's `ui`, `battery`, and/or `volume` folders. These files can be any png with one minor caveat in that only pixels that are 100% transparent will be rendered transparently, any other opacity will be drawn as fully opaque. Also, any part that is transparent in one of a set (ex. all the battery icons) should be transparent in all since transparent pixels are simply skipped rather than reverted to the background, so any part that is transparent in only some should have the background texture rather than transparency. These textures are allowed to vary in size, but may require tweaking of the theme configuration to render correctly (see below).

Changes to paletted textures are more involved. Within the `grit` and `background_grit` folders of a theme, the various image files may be edited. You will also require [devkitPro's toolchains](https://devkitpro.org) with GRIT installed. Once you have finished editing your files, you must run
```bash
$ make
```
in order to compile your themes into Grit RIFF Format. This will compile your paletted textures into **.grf** format in the `grf` folder. Do not make changes to the `.grit` files until you have read the [advanced theming](#advanced-theming) section below.

Be aware the paletted textures come with more restrictions than BMP textures, the primary being an absolute maximum of 16 colors per texture. However, some textures may have even tighter default palette restrictions, which can be modified at the risk of running out of palette memory (see below).

The example themes are in the [`romsel_dsimenutheme/resources/dsimenu_theme_examples` folder](https://github.com/DS-Homebrew/TWiLightMenu/tree/master/romsel_dsimenutheme/resources/dsimenu_theme_examples) in TWiLight Menu++'s repository. To download them, [download the repository](https://github.com/DS-Homebrew/TWiLightMenu/archive/master.zip) or clone it with git, then find that folder.

## Theme file descriptions

The `volume` and `battery` textures are self explanatory.

### Background textures (`background_grit` folder)

| Texture            | Description                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| bottom             | The bottom background texture when not hovering over an icon                                      |
| bottom_bubble      | The bottom background texture when hovering over an icon                                          |
| bottom_ds          | For the 3DS theme, the bottom background texture when not hovering over an icon when on a DS lite |
| bottom_bubble_ds | For the 3DS theme, the bottom background texture when hovering over an icon when on a DS lite     |
| top                | The top background                                                                                |

### Paletted textures (`grit` folder)

| Texture       | Description                                                                                     | Palette Restrictions (if less than 16)                          |
| ------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| bips          | The bips displayed on the bottom of the scrollbar (DSi Theme)                                   |                                                                 |
| box           | The box texture, containing both full and empty textures (DSi Theme)                            |                                                                 |
| box_empty     | The texture displayed for an empty box (3DS Theme)                                              | On the 3DS theme, the transparent color is `#E0DAD9` by default |
| box_full      | The texture displayed for a box with an icon (3DS Theme)                                        | On the 3DS theme, the transparent color is `#E0DAD9` by default |
| brace         | The brace texture shown past the first and last icon (DSi Theme)                                | 4 Colors                                                        |
| bubble        | The bottom bit of the bubble that draws over the start border or icon box                       | 8 Colors                                                        |
| button_arrow  | The textures for the arrows on either side of bottom scrollbar (DSi Theme)                      |                                                                 |
| cornerbutton  | The buttons that are displayed on the SELECT menu (DSi Theme) (The name is based on an old use) |                                                                 |
| cursor        | The border with animation frames that indicate the selected icon (3DS Theme)                    |                                                                 |
| dialogbox     | The background of the dialog box that slides down                                               |                                                                 |
| folder        | The icon for folders                                                                            |                                                                 |
| icon_gb       | The icon for Game Boy games                                                                     |                                                                 |
| icon_gba      | The icon for GBA games (All themes) and the top icon to launch GBARunner2 (3DS Theme)           | The default transparent color is `#00FF00`                      |
| icon_gbamode  | The icon for native GBA Mode                                                                    |                                                                 |
| icon_gg       | The icon for Game Gear games                                                                    |                                                                 |
| icon_manual   | The icon for the manual                                                                         |                                                                 |
| icon_md       | The icon for Mega Drive games                                                                   |                                                                 |
| icon_nes      | The icon for NES games                                                                          |                                                                 |
| icon_plg      | The icon for DSTWO plugins                                                                      |                                                                 |
| icon_settings | The icon for Nintendo DSi Settings                                                              |                                                                 |
| icon_sms      | The icon for Sega Master System games                                                           |                                                                 |
| icon_snes     | The icon for SNES games                                                                         |                                                                 |
| icon_unk      | The icon displayed when a game is missing an icon                                               |                                                                 |
| launch_dot    | The dots displayed when a game is launched (DSi Theme)                                          |                                                                 |
| moving_arrow  | The arrow displayed when a game is being moved (DSi Theme)                                      |                                                                 |
| progress      | The progress loading animation with 8 frames                                                    | 9 Colors                                                        |
| scroll_window | The part of the scrollbar that indicates the icons that are in view                             | 7 Colors                                                        |
| small_cart    | The icons displayed along the top (3DS Theme) and in the SELECT menu (DSi Theme)                |                                                                 |
| start_border  | The border with animation frames that indicates the selected icon (DSi Theme)                   |                                                                 |
| start_text    | The text displayed on the start border (DSi Theme)                                              | 4 Colors                                                        |
| wirelessicons | The icons displayed to indicate a game has wireless support                                     | 7 Colors                                                        |

### UI textures (`ui` folder)

| Texture          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| date_time_font | The font to display the date and time                   |
| Lshoulder        | The left shoulder                                       |
| Lshoulder_greyed | The left shoulder when there are no pages to the left   |
| Rshoulder        | The right shoulder                                      |
| Rshoulder_greyed | The right shoulder when there are no pages to the right |

### Video texture (`video` folder)

`3dsRotatingCubes.rvid` is a Rocket Video file. For more information on converting videos to rvid, read [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) on the Vid2RVID wiki. If you don't want this to be drawn you can simply delete it.

## Theme configuration

You may configure various options on how the theme is drawn in the `theme.ini` to accommodate larger sprites or textures.

| Value                    | Description                                                                                                  | Default (3DS) | Default (DSi) |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------- | ------------- |
| `StartBorderRenderY`     | The initial Y position of the Start Border                                                                   | 92            | 81            |
| `StartBorderSpriteW`     | The width of the start border sprite. Note that the start border texture is exactly half of the full border. | 32            | 32            |
| `StartBorderSpriteH`     | The height of the start border sprite                                                                        | 64            | 80            |
| `TitleboxRenderY`        | The initial Y position of the title text drawn                                                               | 96            | 85            |
| `BubbleTipRenderY`       | The Y position of the tip of the bubble that is drawn over the start border                                  | 98            | 80            |
| `BubbleTipRenderX`       | The X position of the tip of the bubble that is drawn over the start border                                  | 125           | 22            |
| `BubbleTipSpriteH`       | The height of the bubble tip sprite                                                                          | 7             | 8             |
| `BubbleTipSpriteW`       | The width of the bubble tip sprite                                                                           | 7             | 11            |
| `RotatingCubesRenderY`   | The Y position on the top screen to draw the rotating cubes                                                  | 78            | N/A           |
| `ShoulderLRenderY`       | The Y position on the top screen to draw the left shoulder                                                   | 172           | 172           |
| `ShoulderLRenderX`       | The X position on the top screen to draw the left shoulder                                                   | 0             | 0             |
| `ShoulderRRenderY`       | The Y position on the top screen to draw the right shoulder                                                  | 172           | 172           |
| `ShoulderRRenderX`       | The X position on the top screen to draw the right shoulder                                                  | 178           | 178           |
| `VolumeRenderX`          | The X position on the top screen to draw the volume icon                                                     | 4             | 4             |
| `VolumeRenderY`          | The Y position on the top screen to draw the volume icon                                                     | 16            | 16            |
| `BatteryRenderY`         | The Y position on the top screen to draw the battery icon                                                    | 5             | 5             |
| `BatteryRenderX`         | The X position on the top screen to draw the battery icon                                                    | 235           | 235           |
| `RenderPhoto`            | Whether or not to draw a photo on the top screen                                                             | 0             | 1             |
| `StartTextUserPalette`   | Whether to use the DS Profile color for the palette of the start text                                        | N/A           | 1             |
| `StartBorderUserPalette` | Whether to use the DS Profile color for the palette of the start border                                      | N/A           | 1             |
| `ButtonArrowUserPalette` | Whether to use the DS Profile color for the palette of the arrow buttons on the bottom of the screen         | N/A           | 1             |
| `MovingArrowUserPalette` | Whether to use the DS Profile color for the palette of the arrow shown when moving icons                     | N/A           | 1             |
| `LaunchDotsUserPalette`  | Whether to use the DS Profile color for the palette of the launch dots                                       | N/A           | 1             |
| `DialogBoxUserPalette`   | Whether to use the DS Profile color for the palette of the dialog box                                        | N/A           | 1             |

## Advanced theming

Occasionally, you may require more than the default number of colors for some paletted textures. In such cases, you may modify the `.grit` compilation file for the texture to increase the size of the palette.

For example, in `scroll_window.grit`, you may edit `-pn7` and change `7` to `16` for 16 colors. Be aware that if you remove the entire `-pn` line, you may encounter unexpected results.

Also note that the absolute maximum of 16 colors per texture is enforced in code and can not be modified. Even if you increase the number of colors in the palette to above 16, no more than 16 colors worth of palette data will be loaded. With the amount of textures loaded in, there may not be enough palette memory to hold 16 colors worth of palettes for every texture. Keep this in mind when adjusting palette sizes.

Additionally, paletted textures must have dimensions that are a multiple of 2. Paletted textures sizes can not be changed except for `bubble` and `start_border`, which can have configurable sprite dimensions in `theme.ini`. However, note that doing so may have unexpected consequences.

Paletted textures are not checked for validity. An invalid texture should be rare if created with the provided makefile, but in certain cases a corrupted texture will cause the menu to not load at all.

## Custom background music and sound effects

The DSi Menu and 3DS themes also support custom music. See [DSi / 3DS skins - Custom SFX](custom-dsi-3ds-sfx) for more details.
