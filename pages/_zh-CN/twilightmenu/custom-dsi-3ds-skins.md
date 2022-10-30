---
lang: en-US
layout: wiki
section: twilightmenu
category: customization
title: 如何创建DSi/3DS皮肤
description: 如何为TWiLight Menu++ 制作自定义DSi 和 3DS 皮肤
---

要制作TWiLight Menu++皮肤，你需要一个能够输出 `.png` 文件、16个 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp` 文件或 `.png` 文件和4个BPP `.bmp` 文件的图像编辑器。 理想情况下，它还应该能够手动重新排列图像调色板。 [推荐使用GIMP](https://www.gimp.org) ，并将用于本指南，因为它能够满足一切需要。

## 第一部分：下载示例
你应该做的第一件事是下载 [示例皮肤](/assets/files/skin-examples.zip)。 这些可以作为你的皮肤的基础，而且已经有了正确的格式，所以如果你以后有问题，你可以用这些进行比较。

## 第2部分：编辑图像
下载并安装 [GIMP](https://www.gimp.org)，如果你愿意，你可以使用不同的编辑器，但本指南使用GIMP。

安装后，打开GIMP，选择 `Windows` -> `Dockable Dialogs` -> `Colormap`。 这将打开颜色映射对话框，这在编辑调色板图像时很有帮助。

现在你可以在GIMP中打开你想编辑的任何一张图片，然后根据它所在的文件夹继续进入下面的章节。 请注意，TWiLight Menu++对图片的确切格式很挑剔，它因图片在哪个文件夹中而不同，所以要确保按照该部分的规定导出。

### 背景纹理 (`背景` 文件夹)
这些可以是PNG文件或16位(`A1 R5 G5 B5` 或 `X1 R5 G5 B5`) BMP文件。

| 纹理                 | 描述                                |
| ------------------ | --------------------------------- |
| bottom             | 不悬停在图标上时的底部背景纹理                   |
| bottom_bubble      | 不悬停在图标上时的底部背景纹理                   |
| bottom_ds          | 对于3DS主题，在DS lite上没有悬停在图标上时的底部背景纹理 |
| bottom_bubble_ds | 对于3DS主题，在DS lite上没有悬停在图标上时的底部背景纹理 |
| top                |                                   |

### 电池纹理 (`电池` 文件夹)
这些必须是PNG文件，任何文件都可以，但只有100%的透明度可以。 任何在一个图标中是透明的像素在所有的图标中都应该是透明的，这样它在变化时就会被正确覆盖。

| 纹理                 | 描述                                    |
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

要在GIMP中编辑这些，选择 `Image` -> `Mode` -> `RGB` ，以允许改变颜色，然后在改变颜色后选择 `Image` -> `Mode` -> `Indexed...` ，以转换回调色板。 当切换到索引时，确保勾选 `生成最佳调色板` ，并将 `最大颜色数` 设置为 `16`。

**注意：** DSi主题中的一些图片的调色板是根据用户的个人资料颜色来覆盖的。 如果要编辑这些颜色，请确保 `UserPalette` 在 `theme.ini` 中为其设置的选项是 `0`。

在转换为索引后，进入颜色映射对话框，确保透明色（#FF00FF）是颜色映射中的#0。 如果不是，在颜色图中点击右键，选择 `重新排列颜色图...` ，然后将透明色移动到颜色图中的第一个颜色，并选择 `确定`。

如果您的最后颜色表中的颜色少于16个，请按颜色表对话框底部的 `+` 按钮直到您有 16 个颜色。

导出时，建议勾选 `，不要写色彩空间信息` ，在 `兼容性选项` 下拉框。

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
| `StartTextRenderY`       | The initial Y position of the Start text                                                                     | 143           | 143           |
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
