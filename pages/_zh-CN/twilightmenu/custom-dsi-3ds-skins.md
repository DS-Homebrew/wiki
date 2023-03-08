---
lang: zh-CN
layout: wiki
section: twilightmenu
category: customization
title: 如何创建DSi/3DS皮肤
description: 如何为TWiLight Menu++ 制作自定义DSi 和 3DS 皮肤
---

To make a TWiLight Menu++ skin, you will need an image editor capable of exporting `.png` files, 16 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp` files or `.png` files, and 4 BPP `.bmp` files. Ideally, it should also be able to manually rearrange image palettes. [GIMP](https://www.gimp.org) is recommended and will be used for this guide, as it's capable of everything needed.

## 第一部分：下载示例
你应该做的第一件事是下载 [示例皮肤](/assets/files/skin-examples.zip)。 These can be used as a base for your skin and are already in the correct format, so if you have issues later on, you can compare with these.

## 第2部分：编辑图像
Download and install [GIMP](https://www.gimp.org)
- Other image editors such as Photoshop may work, but GIMP is what will be used in this guide

安装后，打开GIMP，选择 `Windows` -> `Dockable Dialogs` -> `Colormap`。 这将打开颜色映射对话框，这在编辑调色板图像时很有帮助。

现在你可以在GIMP中打开你想编辑的任何一张图片，然后根据它所在的文件夹继续进入下面的章节。 请注意，TWiLight Menu++对图片的确切格式很挑剔，它因图片在哪个文件夹中而不同，所以要确保按照该部分的规定导出。

### 背景纹理 (`背景` 文件夹)
这些可以是PNG文件或16位(`A1 R5 G5 B5` 或 `X1 R5 G5 B5`) BMP文件。
- If using BMP files, you can set them to 16-bit under Advanced Options while exporting. You may need to do this each time you export as BMP

| 纹理                    | 描述                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| top                   | The top screen background texture                                                                      |
| bottom                | The bottom background texture when not hovering over an icon                                           |
| bottom_ds             | For the 3DS theme, the bottom background texture when not hovering over an icon when on a DS Phat/Lite |
| bottom_macro          | For the DSi theme, the background texture when not hovering over an icon while using Macro Mode        |
| bottom_bubble         | The bottom background texture when hovering over an icon                                               |
| bottom_bubble_ds    | For the 3DS theme, the bottom background texture when hovering over an icon when on a DS Phat/Lite     |
| bottom_bubble_macro | For the DSi theme, the background texture when hovering over an icon while using Macro Mode            |
| bottom_moving         | For the DSi theme, the bottom background texture when moving an icon                                   |
| bottom_moving_macro | For the DSi theme, the background texture when moving an icon while using Maco Mode                    |

### 电池纹理 (`电池` 文件夹)
These must be PNG files. Transparency is supported, however only 100% transparency will work.

| 纹理                 | Description/Notes                     |
| ------------------ | ------------------------------------- |
| battery0           | 电池电量极低时闪烁 `电池1`                       |
| battery1           | 0-4在DSi模式下使用                          |
| battery1purple     | 当 `电源LED颜色` ，在设置中被设置为 `紫色` ，就会使用紫色图标。 |
| battery2           |                                       |
| battery2purple     |                                       |
| battery3           |                                       |
| battery3purple     |                                       |
| battery4           |                                       |
| battery4purple     |                                       |
| batterycharge      |                                       |
| batterychargeblink | 充电时闪烁， `电池电量`                         |
| batteryfull        | 在DSi/3DS的DS模式下使用。                     |
| batteryfullDS      | 在DS Phat/DS Lite上使用                   |
| batterylow         | 在DS模式时使用                              |

### 调色板纹理(`grf` 文件夹)
这些必须是4个BPP（16色）BMP文件的文件。

To edit these in GIMP, select `Image` -> `Mode` -> `RGB` to allow changing colors, then when done changing colors, select `Image` -> `Mode` -> `Indexed...` to convert back to paletted. 当切换到索引时，确保勾选 `生成最佳调色板` ，并将 `最大颜色数` 设置为 `16`。

**注意：** DSi主题中的一些图片的调色板是根据用户的个人资料颜色来覆盖的。 如果要编辑这些颜色，请确保 `UserPalette` 在 `theme.ini` 中为其设置的选项是 `0`。

在转换为索引后，进入颜色映射对话框，确保透明色（#FF00FF）是颜色映射中的#0。 如果不是，在颜色图中点击右键，选择 `重新排列颜色图...` ，然后将透明色移动到颜色图中的第一个颜色，并选择 `确定`。

If there are fewer than 16 colors in your final colormap, press the `+` button at the bottom of the colormap dialog until you have 16 colors.

When exporting, it's recommended to check the `Do not write color space information` box under the `Compatibility Options` dropdown.

| 纹理            | 描述                                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------- |
| bips          | 显示在滚动条底部的提示音（DSi主题）。                                                                            |
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

| 纹理         | 描述                                                  |
| ---------- | --------------------------------------------------- |
| bottombg   | Background for the bottom screen                    |
| phat_topbg | Background for the top screen on DS Phat            |
| topbg      | Background for the top screen on any other DS model |

### UI textures (`ui` folder)
These must be PNG files. Transparency is supported, however only 100% transparency will work. Any pixel that is transparent in one texture should be transparent in all of them, so that it's properly overwritten on change.

| 纹理               | 描述                                                      |
| ---------------- | ------------------------------------------------------- |
| Lshoulder        | The left shoulder                                       |
| Lshoulder_greyed | The left shoulder when there are no pages to the left   |
| Rshoulder        | The right shoulder                                      |
| Rshoulder_greyed | The right shoulder when there are no pages to the right |

### Video texture (`video` folder)
Only used for the 3DS theme, `3dsRotatingCubes.rvid` is a Rocket Video file. For more information on converting videos to rvid, read [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) on the Vid2RVID wiki. If you don't want this to be drawn you can simply delete it.

### Volume textures (`volume` folder)
Volume textures are only displayed in DSi Mode.

These must be PNG files. Transparency is supported, however only 100% transparency will work.


| 纹理      | Description/Notes            |
| ------- | ---------------------------- |
| volume0 | 0 is muted, 4 is full volume |
| volume1 |                              |
| volume2 |                              |
| volume3 |                              |
| volume4 |                              |

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
The DSi and 3DS themes also support custom music. See [DSi/3DS skins - Custom SFX](custom-dsi-3ds-sfx) for more details.

## Custom fonts
You may put [Custom Fonts](custom-fonts) in the `font` folder for use in the skin. You can also add override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

## Part 3: Adding to TWiLight Menu++
Once you've edited some graphics and would like to test your skin, simply copy your skin folder (the folder containing the `background`, `battery`, etc folders) to `sd:/_nds/TWiLightMenu/3dsmenu/themes/` or `sd:/_nds/TWiLightMenu/dsimenu/themes/` for 3DS and DSi theme skins respectively.

## Part 4: Sharing your skin
Once you've completed your skin, you can share it with the community by creating a Pull Request adding it to the [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository in a `.7z` file. If you're unfamiliar with using git you can also simply create an issue on that repository with a zip file of your skin requesting it be added.
