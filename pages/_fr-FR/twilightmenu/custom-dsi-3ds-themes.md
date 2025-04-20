---
lang: fr-FR
layout: wiki
section: twilightmenu
category: customization
title: How to Create DSi/3DS Themes
description: How to make custom DSi and 3DS themes for TWiLight Menu++
---

To make a TWiLight Menu++ theme, you will need an image editor capable of exporting `.png` files, 16 <abbr title="Bits Per Pixel">BPP</abbr> `.bmp` files or `.png` files, and 4 BPP `.bmp` files. Idéalement, il devrait également être en mesure de réorganiser manuellement les palettes d'images. [GIMP](https://www.gimp.org) is recommended and will be used for this guide, as it's capable of everything needed.

## Partie 1 : Télécharger les exemples

The first thing you should do is download the [example themes](/assets/files/theme-examples.zip). These can be used as a base for your theme and are already in the correct format, so if you have issues later on, you can compare with these.

## Partie 2 : Modifier les images

Download and install [GIMP](https://www.gimp.org)

- D'autres éditeurs d'images tels que Photoshop peuvent fonctionner, mais GIMP sera utilisé dans ce guide

Once installed, open GIMP and select `Windows` -> `Dockable Dialogs` -> `Colormap`. Cela ouvre la boîte de dialogue de la palette, qui sera utile lors de l'édition d'images palettisées.

Vous pouvez maintenant ouvrir l'image que vous voulez modifier dans GIMP et passer à la section ci-dessous en fonction du dossier dans lequel elle se trouve. Notez que TWiLight Menu++ est pointilleux sur le format exact des images et qu'il varie selon le dossier dans lequel elles se trouvent, assurez-vous donc d'exporter comme indiqué dans la section.

### Background textures (`background` folder)

These can be PNG files or 16-bit (`A1 R5 G5 B5` or `X1 R5 G5 B5`) BMP files.

- Si vous utilisez des fichiers BMP, vous pouvez les régler sur 16 bits dans les options avancées lors de l'exportation. Vous devrez peut-être le faire à chaque fois que vous exporterez en BMP

| Texture                                                       | Description                                                                                                        |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| top                                                           | La texture de fond de l'écran supérieur                                                                            |
| top_photo                                | Texture de l'arrière-plan de l'écran supérieur lorsqu'une photo est affichée                                       |
| bottom                                                        | La texture de l'arrière-plan inférieur lorsqu’une icône n'est pas survolée                                         |
| bottom_ds                                | Pour le thème 3DS, la texture de l'arrière-plan inférieur lorsqu'une icône n'est pas survolée sur une DS Tank/Lite |
| bottom_macro                             | Pour le thème DSi, la texture de l'arrière-plan lorsqu'une icône n'est pas survolée en utilisant le mode Macro     |
| bottom_bubble                            | La texture de l'arrière-plan inférieur lorsqu’une icône est survolée                                               |
| bottom_bubble_ds    | Pour le thème 3DS, la texture de l'arrière-plan inférieur lorsqu'une icône est survolée sur une DS Tank/Lite       |
| bottom_bubble_macro | Pour le thème DSi, la texture de l'arrière-plan lorsqu'une icône est survolée en utilisant le mode Macro           |
| bottom_moving                            | Pour le thème DSi, la texture de l'arrière-plan inférieur lors du déplacement d'une icône                          |
| bottom_moving_macro | For the DSi theme, the background texture when moving an icon while using Macro Mode                               |

### Battery textures (`battery` folder)

Il doit s'agir de fichiers PNG. La transparence est prise en charge, mais seule une transparence à 100 % fonctionnera.

| Texture            | Description/Notes                                                           |
| ------------------ | --------------------------------------------------------------------------- |
| battery0           | Flashes with `battery1` when the battery is very low                        |
| battery1           | 0-4 sont utilisés en mode DSi                                               |
| battery1purple     | Purple icons are used when `Power LED color` is set to `Purple` in settings |
| battery2           |                                                                             |
| battery2purple     |                                                                             |
| battery3           |                                                                             |
| battery3purple     |                                                                             |
| battery4           |                                                                             |
| battery4purple     |                                                                             |
| batterycharge      |                                                                             |
| batterychargeblink | Flashes with `batterycharge` while charging                                 |
| batteryfull        | Utilisé en mode DS sur DSi/3DS                                              |
| batteryfullDS      | Utilisé avec la DS Tank/DS Lite                                             |
| batterylow         | Utilisé en mode DS                                                          |

### Paletted textures (`grf` folder)

These must be 4 BPP (16 color) BMP files.

To edit these in GIMP, select `Image` -> `Mode` -> `RGB` to allow changing colors, then when done changing colors, select `Image` -> `Mode` -> `Indexed...` to convert back to paletted. When switching to indexed, ensure that `Generate optimum palette` is checked and `Maximum number of colors` is set to `16`.

**Note:** Some images in the DSi theme have their palettes overridden based on the user's profile color. If editing the colors of these ensure that the `UserPalette` option for it in the `theme.ini` is set to `0`.

Après avoir converti en indexé, allez dans le dialogue de la palette et assurez-vous que la couleur transparente (#FF00FF) est la couleur #0 dans la palette. If it isn't, right click in the colormap and select `Rearrange Colormap...` then move the transparent color to be the first color in the colormap and select `OK`.

If there are fewer than 16 colors in your final colormap, press the `+` button at the bottom of the colormap dialog until you have 16 colors.

When exporting, it's recommended to check the `Do not write color space information` box under the `Compatibility Options` dropdown.

| Texture                            | Description                                                                                                                                        |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| bips                               | Les points affichés en bas de la barre de défilement (thème DSi)                                                                |
| box                                | La texture de la boîte, contenant à la fois des textures pleines et vides (thème DSi)                                           |
| box_empty     | La texture affichée pour une boîte vide (thème 3DS)                                                                             |
| box_full      | La texture affichée pour une boîte avec une icône (thème 3DS)                                                                   |
| brace                              | La texture de l'accolade affichée après la première et la dernière icône (thème DSi)                                            |
| bubble                             | La partie inférieure de la bulle qui s'affiche au-dessus de la bordure de démarrage ou de la boîte d'icônes                                        |
| button_arrow  | Les textures pour les flèches de chaque côté de la barre de défilement inférieure (thème DSi)                                   |
| cornerbutton                       | Les boutons qui sont affichés dans le menu SELECT (thème DSi) (le nom est basé sur une ancienne utilisation) |
| cursor                             | La bordure avec des images d'animation qui indiquent l'icône sélectionnée (thème 3DS)                                           |
| dialogbox                          | L'arrière-plan de la boîte de dialogue qui glisse vers le bas                                                                                      |
| folder                             | L'icône des dossiers                                                                                                                               |
| icon_a26      | L'icône des jeux Atari 2600                                                                                                                        |
| icon_col      | L'icône des jeux Colecovision                                                                                                                      |
| icon_gb       | L'icône des jeux Game Boy                                                                                                                          |
| icon_gba      | L'icône des jeux GBA                                                                                                                               |
| icon_gbamode  | L'icône du mode GBA natif                                                                                                                          |
| icon_gg       | L'icône des jeux Game Gear                                                                                                                         |
| icon_img      | L'icône des images BMP, GIF et PNG                                                                                                                 |
| icon_int      | L'icône des jeux Intellivision                                                                                                                     |
| icon_m5       | L'icône des jeux Sord M5                                                                                                                           |
| icon_manual   | L'icône du manuel                                                                                                                                  |
| icon_md       | L'icône des jeux SEGA Mega Drive                                                                                                                   |
| icon_nes      | L'icône des jeux NES                                                                                                                               |
| icon_ngp      | L'icône des jeux Neo Geo Pocket                                                                                                                    |
| icon_pce      | L'icône des jeux PC Engine/TurboGrafx-16                                                                                                           |
| icon_plg      | L'icône des plugins DSTWO                                                                                                                          |
| icon_settings | L'icône des paramètres Nintendo DSi                                                                                                                |
| icon_sg       | L'icône des jeux SEGA SG-1000                                                                                                                      |
| icon_sms      | L'icône des jeux SEGA Master System                                                                                                                |
| icon_snes     | L'icône des jeux SNES                                                                                                                              |
| icon_unk      | L'icône affichée lorsqu'il manque une icône pour un jeu                                                                                            |
| icon_ws       | L'icône des jeux WonderSwan                                                                                                                        |
| launch_dot    | Les points affichés lors du lancement d'un jeu (thème DSi)                                                                      |
| moving_arrow  | La flèche affichée lorsqu'un jeu est déplacé (thème DSi)                                                                        |
| progress                           | L'animation de chargement de la progression avec huit images                                                                                       |
| scroll_window | La partie de la barre de défilement qui indique les icônes qui sont visibles                                                                       |
| small_cart    | Les icônes affichées en haut (thème 3DS) et dans le menu SELECT (thème DSi)                                  |
| start_border  | La bordure avec des images d'animation qui indique l'icône sélectionnée (thème DSi)                                             |
| start_text    | Le texte affiché sur la bordure de démarrage (thème DSi)                                                                        |
| wirelessicons                      | Les icônes affichées pour indiquer qu'un jeu dispose d'un support sans fil                                                                         |

### DS Classic Menu textures (`quickmenu` folder)

Il doit s'agir de fichiers PNG.

| Texture                         | Description                                             |
| ------------------------------- | ------------------------------------------------------- |
| bottombg                        | Fond de l'écran inférieur                               |
| phat_topbg | Fond pour l'écran supérieur de la DS Tank               |
| topbg                           | Fond pour l'écran supérieur sur tout autre modèle de DS |

### UI textures (`ui` folder)

Il doit s'agir de fichiers PNG. La transparence est prise en charge, mais seule une transparence à 100 % fonctionnera. Tout pixel transparent dans une texture doit l'être dans toutes les autres, afin qu'il soit correctement écrasé lors d'un changement.

| Texture                                                          | Description                                                  |
| ---------------------------------------------------------------- | ------------------------------------------------------------ |
| Lshoulder                                                        | La gâchette gauche                                           |
| Lshoulder_greyed                            | La gâchette gauche quand il n'y a pas de pages à gauche      |
| Lshoulder_photo                             | La gâchette gauche lorsqu'une photo est affichée             |
| Lshoulder_photo_greyed | La gâchette gauche, sans page à gauche et une photo affichée |
| Rshoulder                                                        | La gâchette droite                                           |
| Rshoulder_greyed                            | La gâchette droite quand il n'y a pas de pages à droite      |
| Rshoulder_photo                             | La gâchette droite lorsqu'une photo est affichée             |
| Rshoulder_photo_greyed | La gâchette droite, sans page à gauche et une photo affichée |

### Video texture (`video` folder)

Only used for the 3DS theme, `3dsRotatingCubes.rvid` is a Rocket Video file. For more information on converting videos to rvid, read [Converting a video to .rvid](https://github.com/RocketRobz/Vid2RVID/wiki/Converting-a-video-to-.rvid) on the Vid2RVID wiki. Si vous ne voulez pas qu'il soit affiché, vous pouvez simplement le supprimer.

### Volume textures (`volume` folder)

Les textures de volume ne sont affichées qu'en mode DSi.

Il doit s'agir de fichiers PNG. La transparence est prise en charge, mais seule une transparence à 100 % fonctionnera.

| Texture | Description/Notes                        |
| ------- | ---------------------------------------- |
| volume0 | 0 est en sourdine, 4 est en plein volume |
| volume1 |                                          |
| volume2 |                                          |
| volume3 |                                          |
| volume4 |                                          |

## Theme configuration (`theme.ini` file)

You may configure various options on how the theme is drawn in the `theme.ini` to accommodate larger graphics or different layouts. For true/false options, `0` is false, and `1` is true. Les options dont la valeur par défaut est vide pour un thème sont inutilisées dans ce thème.

| Valeur                     | Description/Notes                                                                                                                                                         | Par défaut (3DS) | Par défaut (DSi) |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------------- |
| `StartBorderRenderY`       | La position Y initiale de la bordure de démarrage                                                                                                                         | 92                                  | 81                                  |
| `StartBorderSpriteW`       | La largeur du sprite de la bordure de démarrage. Notez que la texture de la bordure de démarrage correspond exactement à la moitié de la bordure complète | 32                                  | 32                                  |
| `StartBorderSpriteH`       | La hauteur du sprite de la bordure de démarrage                                                                                                                           | 64                                  | 80                                  |
| `StartTextRenderY`         | La position Y initiale du texte de démarrage                                                                                                                              | 143                                 | 143                                 |
| `BubbleTipRenderX`         | La position X de l'extrémité de la bulle qui est affichée au-dessus de la bordure de démarrage                                                                            | 125                                 | 122                                 |
| `BubbleTipRenderY`         | La position Y de l'extrémité de la bulle qui est affichée au-dessus de la bordure de démarrage                                                                            | 98                                  | 80                                  |
| `BubbleTipSpriteW`         | La largeur du sprite de l'extrémité de la bulle                                                                                                                           | 7                                   | 11                                  |
| `BubbleTipSpriteH`         | La hauteur du sprite de l'extrémité de la bulle                                                                                                                           | 7                                   | 8                                   |
| `TitleboxRenderY`          | La position Y initiale de la zone du texte du titre                                                                                                                       | 96                                  | 85                                  |
| `TitleboxTextY`            | La position Y initiale du texte du titre                                                                                                                                  | 55                                  | 30                                  |
| `TitleboxTextW`            | La largeur maximale du texte du titre                                                                                                                                     | 200                                 | 240                                 |
| `TitleboxTextLarge`        | Utilisation ou non de la grande police pour le texte du titre                                                                                                             | 0                                   | 1                                   |
| `TitleboxMaxLines`         | Le nombre maximum de lignes de texte à afficher pour le titre                                                                                                             | 3                                   | 4                                   |
| `VolumeRenderX`            | La position X sur l'écran supérieur pour afficher l'icône du volume                                                                                                       | 4                                   | 4                                   |
| `VolumeRenderY`            | La position Y sur l'écran supérieur pour afficher l'icône du volume                                                                                                       | 5                                   | 5                                   |
| `ShoulderLRenderX`         | La position X sur l'écran supérieur pour afficher la gâchette gauche                                                                                                      | 0                                   | 0                                   |
| `ShoulderLRenderY`         | La position Y sur l'écran supérieur pour afficher la gâchette gauche                                                                                                      | 172                                 | 172                                 |
| `ShoulderRRenderX`         | La position X sur l'écran supérieur pour afficher la gâchette droite                                                                                                      | 178                                 | 178                                 |
| `ShoulderRRenderY`         | La position Y sur l'écran supérieur pour afficher la gâchette droite                                                                                                      | 172                                 | 172                                 |
| `BatteryRenderX`           | La position X sur l'écran supérieur pour afficher l'icône de la batterie                                                                                                  | 235                                 | 235                                 |
| `BatteryRenderY`           | La position Y sur l'écran supérieur pour afficher l'icône de la batterie                                                                                                  | 5                                   | 5                                   |
| `UsernameRenderX`          | La position X sur l'écran supérieur pour afficher le texte du nom d'utilisateur                                                                                           | 28                                  | 28                                  |
| `UsernameRenderY`          | La position Y sur l'écran supérieur pour afficher le texte du nom d'utilisateur                                                                                           | 15                                  | 15                                  |
| `UsernameRenderXDS`        | La position X sur l'écran supérieur pour afficher le texte du nom d'utilisateur, sur une DS Tank/Lite                                                                     | 4                                   | 4                                   |
| `DateRenderX`              | The X position on the top screen to draw the date text                                                                                                                    | 162                                 | 162                                 |
| `DateRenderY`              | The Y position on the top screen to draw the date text                                                                                                                    | 7                                   | 7                                   |
| `TimeRenderX`              | The X position on the top screen to draw the time text                                                                                                                    | 200                                 | 200                                 |
| `TimeRenderY`              | The Y position on the top screen to draw the time text                                                                                                                    | 7                                   | 7                                   |
| `PurpleBatteryAvailable`   | Whether or not to use the purple battery icons when `Power LED color` is set to `Purple` in settings                                                                      | 1                                   | 1                                   |
| `FontPalette1`             | La couleur transparente de la police, inutilisée pour les polices par défaut                                                                                              | 0x0000                              | 0x0000                              |
| `FontPalette2`             | The colors of the font, use [this site](http://www.conradshome.com/html2bgr15/) to convert                                                                                | 0xDEF7                              | 0xDEF7                              |
| `FontPalette3`             |                                                                                                                                                                           | 0xC631                              | 0xC631                              |
| `FontPalette4`             |                                                                                                                                                                           | 0xA108                              | 0xA108                              |
| `FontPaletteDateTime1`     | La couleur de remplacement transparente de la police pour la date et l'heure                                                                                              | 0x0000                              | 0x0000                              |
| `FontPaletteDateTime2`     | La couleur de remplacement de la police pour la date et l'heure                                                                                                           | 0xDEF7                              | 0xA529                              |
| `FontPaletteDateTime3`     |                                                                                                                                                                           | 0xC631                              | 0xBDEF                              |
| `FontPaletteDateTime4`     |                                                                                                                                                                           | 0xA108                              | 0xD6B5                              |
| `FontPaletteTitlebox1`     | La couleur de remplacement transparente de la police pour la boîte du titre de la ROM                                                                                     | 0x0000                              | 0x0000                              |
| `FontPaletteTitlebox2`     | La couleur de remplacement de la police pour la boîte du titre de la ROM                                                                                                  | 0xDEF7                              | 0xDEF7                              |
| `FontPaletteTitlebox3`     |                                                                                                                                                                           | 0xC631                              | 0xC631                              |
| `FontPaletteTitlebox4`     |                                                                                                                                                                           | 0xA108                              | 0xA108                              |
| `FontPaletteDialog1`       | La couleur de remplacement transparente de la police pour les boîtes de dialogue                                                                                          | 0x0000                              | 0x0000                              |
| `FontPaletteDialog2`       | La couleur transparente de la police pour les boîtes de dialogue                                                                                                          | 0xDEF7                              | 0xDEF7                              |
| `FontPaletteDialog3`       |                                                                                                                                                                           | 0xC631                              | 0xC631                              |
| `FontPaletteDialog4`       |                                                                                                                                                                           | 0xA108                              | 0xA108                              |
| `FontPaletteOverlay1`      | La couleur transparente de la police pour le texte superposé                                                                                                              | 0x0000                              | 0x0000                              |
| `FontPaletteOverlay2`      | La couleur de remplacement de la police pour le texte superposé                                                                                                           | 0xDEF7                              | 0xDEF7                              |
| `FontPaletteOverlay3`      |                                                                                                                                                                           | 0xC631                              | 0xC631                              |
| `FontPaletteOverlay4`      |                                                                                                                                                                           | 0xA108                              | 0xA108                              |
| `FontPaletteUsername1`     | La couleur de remplacement transparente de la police pour le nom d'utilisateur                                                                                            | 0x0000                              | 0x0000                              |
| `FontPaletteUsername2`     | La couleur de remplacement de la police pour le nom d'utilisateur                                                                                                         | 0xDEF7                              | 0xDEF7                              |
| `FontPaletteUsername3`     |                                                                                                                                                                           | 0xC631                              | 0xC631                              |
| `FontPaletteUsername4`     |                                                                                                                                                                           | 0xA108                              | 0xA108                              |
| `BipsUserPalette`          | Utilisation ou non de la couleur du profil DS pour la palette des points de la barre de défilement                                                                        |                                     | 0                                   |
| `BoxUserPalette`           | Utilisation ou non de la couleur du profil DS pour la palette des cases contenant les icônes de jeu dans le thème DSi                                                     |                                     | 0                                   |
| `BoxEmptyUserPalette`      | Utilisation ou non de la couleur du profil DS pour la palette des cases vides dans le thème 3DS                                                                           | 0                                   |                                     |
| `BoxFullUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette des cases contenant les icônes de jeu dans le thème 3DS                                                     | 0                                   |                                     |
| `BraceUserPalette`         | Utilisation ou non de la couleur du profil DS pour la palette de l'accolade au début et à la fin de la liste de jeu                                                       |                                     | 0                                   |
| `BubbleUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de la pointe de la bulle de titre                                                                           | 0                                   | 0                                   |
| `ButtonArrowUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette des boutons fléchés en bas de l'écran                                                                       |                                     | 1                                   |
| `CornerButtonUserPalette`  | Utilisation ou non de la couleur du profil DS pour la palette des icônes du menu DSi et des paramètres dans le menu SELECT                                                |                                     | 0                                   |
| `CursorUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette du curseur                                                                                                  | 0                                   |                                     |
| `DialogBoxUserPalette`     | Utilisation ou non de la couleur du profil DS pour la palette de la boîte de dialogue                                                                                     | 0                                   | 1                                   |
| `FolderUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette des dossiers                                                                                                | 0                                   | 0                                   |
| `LaunchDotsUserPalette`    | Utilisation ou non de la couleur du profil DS pour la palette des points de lancement                                                                                     |                                     | 1                                   |
| `MovingArrowUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette de la flèche affichée lors du déplacement des icônes                                                        |                                     | 1                                   |
| `ProgressUserPalette`      | Utilisation ou non de la couleur du profil DS pour la palette de l'animation rotative de la progression du chargement                                                     | 1                                   | 1                                   |
| `ScrollWindowUserPalette`  | Utilisation ou non de la couleur du profil DS pour la palette de l'arrière-plan de la fenêtre de défilement sur la barre de défilement                                    |                                     | 0                                   |
| `SmallCartUserPalette`     | Utilisation ou non de la couleur du profil DS pour la palette des icônes de cartouche                                                                                     | 0                                   | 0                                   |
| `StartBorderUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette de la bordure de démarrage                                                                                  |                                     | 1                                   |
| `StartTextUserPalette`     | Utilisation ou non de la couleur du profil DS pour la palette du texte de démarrage                                                                                       |                                     | 1                                   |
| `WirelessIconsUserPalette` | Utilisation ou non de la couleur du profil DS pour la palette des icônes de la connexion sans fil                                                                         | 0                                   | 0                                   |
| `IconA26UserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Atari 2600                                                                                       | 0                                   | 0                                   |
| `IconCOLUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône ColecoVision                                                                                     | 0                                   | 0                                   |
| `IconGBUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Game Boy                                                                                         | 0                                   | 0                                   |
| `IconGBAUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Game Boy Advance                                                                                 | 0                                   | 0                                   |
| `IconGBAModeUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette de l'icône du mode GBA natif                                                                                | 0                                   | 0                                   |
| `IconGGUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Game Gear                                                                                        | 0                                   | 0                                   |
| `IconIMGUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône d'image                                                                                          | 0                                   | 0                                   |
| `IconINTUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Intellivision                                                                                    | 0                                   | 0                                   |
| `IconM5UserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Sord M5                                                                                          | 0                                   | 0                                   |
| `IconManualUserPalette`    | Utilisation ou non de la couleur du profil DS pour la palette de l'icône du manuel                                                                                        | 0                                   | 0                                   |
| `IconMDUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Mega Drive                                                                                       | 0                                   | 0                                   |
| `IconNESUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône NES/Famicom                                                                                      | 0                                   | 0                                   |
| `IconNGPUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Neo Geo Pocket                                                                                   | 0                                   | 0                                   |
| `IconPCEUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône PC Engine                                                                                        | 0                                   | 0                                   |
| `IconPLGUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône de plugin DSTWO                                                                                  | 0                                   | 0                                   |
| `IconSettingsUserPalette`  | Utilisation ou non de la couleur du profil DS pour la palette de l'icône des paramètres DSi                                                                               | 0                                   | 0                                   |
| `IconSGUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône SG-1000                                                                                          | 0                                   | 0                                   |
| `IconSMSUserPalette`       | Utilisation ou non de la couleur du profil DS pour la palette de l'icône Master System                                                                                    | 0                                   | 0                                   |
| `IconSNESUserPalette`      | Utilisation ou non de la couleur du profil DS pour la palette de l'icône SNES                                                                                             | 0                                   | 0                                   |
| `IconUnknownUserPalette`   | Utilisation ou non de la couleur du profil DS pour la palette de l'icône inconnue (manquante)                                                          | 0                                   | 0                                   |
| `IconWSUserPalette`        | Utilisation ou non de la couleur du profil DS pour la palette de l'icône WonderSwan                                                                                       | 0                                   | 0                                   |
| `UsernameUserPalette`      | Utilisation ou non de la couleur du profil DS pour la palette du nom d'utilisateur                                                                                        | 1                                   | 1                                   |
| `ProgressBarUserPalette`   | Utilisation ou non de la couleur du profil DS comme couleur de la barre de progression                                                                                    | 1                                   | 1                                   |
| `ProgressBarColor`         | The color of the progress bar if `ProgressBarUserPalette` is disabled                                                                                                     | 0x7C00                              | 0x7C00                              |
| `UseAlphaBlend`            | Mélange ou non des couleurs du texte du sur l'écran supérieur (date/heure et nom d'utilisateur) avec les couleurs de l'arrière-plan                    | 1                                   | 1                                   |
| `DarkLoading`              | Possibilité ou non d'effectuer un fondu au noir plutôt qu'au blanc lors des écrans de chargement                                                                          | 0                                   | 0                                   |
| `RenderPhoto`              | Afficher ou non une photo sur l'écran supérieur                                                                                                                           | 0                                   | 1                                   |
| `RotatingCubesRenderY`     | La position Y sur l'écran supérieur pour afficher les cubes en rotation                                                                                                   | 78                                  |                                     |
| `PlayStartupJingle`        | Utilisation ou non du son de démarrage avant la musique de fond principale. See the [custom SFX](custom-dsi-3ds-sfx) page for more information            | 1                                   | 0                                   |
| `StartupJingleDelayAdjust` | Le nombre d'échantillons au début du son de démarrage à partir duquel la musique de fond doit commencer                                                                   | 0                                   | 0                                   |

### Options du mode Macro

You may add specific override options to `theme.ini` for use in Macro Mode. To do this, add `[MACRO]` to a blank line at the bottom of the configuration file, then add any specified configurations below it.

## Musique de fond et effets sonores personnalisés

The DSi and 3DS UIs also support custom music. See [DSi/3DS Themes - Custom SFX](custom-dsi-3ds-sfx) for more details.

## Polices personnalisées

You may put [Custom Fonts](custom-fonts) in the `font` folder for use in the theme. You can also add override fonts for the date & time using `date_time.nftr`, and the console username with `username.nftr`.

## Palettes personnalisées

For the paletted textures (`grf` folder), you can optionally add override palette sets which are used when the corresponding `UserPalette` setting is enabled. Palette set files can be created using [this editor](https://skinpaltool.dvdo.dev/). Lorsque vous utilisez l'éditeur, importez l'image avec laquelle vous souhaitez travailler, puis créez une palette pour chacune des 16 couleurs du profil DS. You can use this [example palette file](/assets/files/example-palette.bin) as a starting point.

Les 16 lignes de la collection de palettes correspondent à chaque couleur du profil et doivent être placées dans l'ordre suivant :

1. Gris-Bleu
2. Marron
3. Rouge
4. Rose
5. Orange
6. Jaune
7. Vert citron
8. Vert
9. Vert foncé
10. Turquoise
11. Cyan/Bleu clair
12. Bleu
13. Bleu foncé/Indigo
14. Violet/Pourpre foncé
15. Violet
16. Magenta

Once you've created a palette file, place it in the `palettes` folder. The name of the palette file should match the name of its image but with a `.bin` extension instead (ex. `start_border.bin` will be applied to `start_border.bmp`).

You may also put a `username.bin` palette file to change the palettes of the username font. Make sure to set the palette editor to `Font Mode` when creating this file.

## Partie 3 : Ajout dans TWiLight Menu++

Once you've edited some graphics and would like to test your theme, simply copy your theme folder (the folder containing the `background`, `battery`, etc folders) to `sd:/_nds/TWiLightMenu/3dsmenu/themes/` or `sd:/_nds/TWiLightMenu/dsimenu/themes/` for 3DS and DSi theme themes respectively.

## Part 4: Sharing your theme

Once you've completed your theme, you can share it with the community by creating a Pull Request adding it to the [DS-Homebrew/twlmenu-extras](https://github.com/DS-Homebrew/twlmenu-extras) GitHub repository in a `.7z` file. If you're unfamiliar with using git you can also simply create an issue on that repository with a zip file of your theme requesting it be added.
