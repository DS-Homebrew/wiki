---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: How to Create DSi / 3DS Skins
description: Comment créer des skins DSi et 3DS personnalisés pour le TWiLight Menu++
---

La façon la plus simple de personnaliser un thème est de modifier les textures png dans le thème `ui`, `batterie`, et/ou `volume` dossiers. Ces fichiers peuvent être n'importe quel png avec une mise en garde mineure dans la mesure où seuls les pixels qui sont 100% transparents seront rendus de manière transparente, toute autre opacité sera dessinée comme complètement opaque. En outre, toute partie qui est transparente dans l'un des jeux (ex. toutes les icônes de la batterie) doivent être transparentes dans tous les cas car les pixels transparents sont simplement ignorés plutôt que retournés en arrière-plan, donc toute partie qui est transparente dans certains seulement devrait avoir la texture de fond plutôt que la transparence. Ces textures sont autorisées à varier en taille, mais peuvent nécessiter une mise à jour de la configuration du thème pour être affichées correctement (voir ci-dessous).

Les modifications apportées aux textures palettées sont plus importantes. Dans les dossiers `grille` et `background_grit` d'un thème, les divers fichiers d'image peuvent être modifiés. Vous aurez également besoin de [toolchains de devkitPro](https://devkitpro.org) avec GRIT installé. Une fois que vous avez terminé l'édition de vos fichiers, vous devez exécuter
```bash
$ make
```
afin de compiler vos thèmes au format Grit RIFF. Cela compilera vos textures palettées au format **.grf** dans le dossier `grf`. N'apportez pas de modifications aux fichiers `.grit` tant que vous n'avez pas lu la section [thème avancé](#advanced-theming) ci-dessous.

Sachez que les textures palettées sont plus restrictives que les textures BMP, la première étant un maximum absolu de 16 couleurs par texture. Cependant, certaines textures peuvent avoir des restrictions de palette par défaut encore plus strictes, qui peuvent être modifiées au risque de manquer de mémoire de palette (voir ci-dessous).

Les exemples de thèmes sont dans le dossier [`romsel_dsimenutheme/resources/dsimenu_theme_examples` ](https://github.com/DS-Homebrew/TWiLightMenu/tree/master/romsel_dsimenutheme/resources/dsimenu_theme_examples) dans le référentiel du TWiLightMenu++. Pour les télécharger, [téléchargez le référentiel](https://github.com/DS-Homebrew/TWiLightMenu/archive/master.zip) ou clonez le avec git, puis trouvez ce dossier.

## Description des fichiers de Thèmes

Les textures du`volume` et de la`batterie` sont explicites.

### Textures d'arrière-plan ( dossier`background_grit`)

| Texture            | Description                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| bottom             | La texture de fond du bas de la page lorsque vous ne passez pas au-dessus d'une icône                                        |
| bottom_bubble      | La texture de fond du bas lorsque vous passez au-dessus d'une icône                                                          |
| bottom_ds          | Pour le thème 3DS, la texture de fond du bas quand vous ne passez pas au-dessus d'une icône lorsque vous êtes sur un DS lite |
| bottom_bubble_ds | For the 3DS theme, the bottom background texture when hovering over an icon when on a DS lite                                |
| top                | The top background                                                                                                           |

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
